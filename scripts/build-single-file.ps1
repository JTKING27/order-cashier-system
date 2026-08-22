# ============================================================
# 单文件打包脚本
# 作用：把 index.html + css + js + vendor 合并成一个 HTML 文件，
#       方便通过微信把整个系统发给别人，浏览器打开即可使用（离线可用）。
# 用法：powershell -File scripts\build-single-file.ps1
# 输出：dist\收银系统.html（生成物，不提交到 git）
# ============================================================

$ErrorActionPreference = "Stop"

# 项目根目录 = 脚本所在目录的上一级
$root = Split-Path -Parent $PSScriptRoot
$srcFile = Join-Path $root "index.html"
$outDir = Join-Path $root "dist"
$outFile = Join-Path $outDir "收银系统.html"

if (-not (Test-Path $srcFile)) {
    throw "找不到 index.html：$srcFile"
}

$html = Get-Content -Path $srcFile -Raw -Encoding UTF8

# 需要内联的资源（按顺序处理：HTML 里的 src/href 原样替换）
$resources = @(
    @{ Tag = '<script src="vendor/html2canvas.min.js"></script>'; Wrap = 'script'; File = 'vendor\html2canvas.min.js' },
    @{ Tag = '<link rel="stylesheet" href="css/style.css">';       Wrap = 'style';  File = 'css\style.css' },
    @{ Tag = '<script src="js/dishes.js"></script>';               Wrap = 'script'; File = 'js\dishes.js' },
    @{ Tag = '<script src="js/app.js"></script>';                  Wrap = 'script'; File = 'js\app.js' }
)

$totalBytes = 0
foreach ($res in $resources) {
    $resPath = Join-Path $root $res.File
    if (-not (Test-Path $resPath)) {
        throw "找不到资源文件：$resPath"
    }
    $content = Get-Content -Path $resPath -Raw -Encoding UTF8
    $totalBytes += $content.Length

    if (-not $html.Contains($res.Tag)) {
        throw "index.html 中找不到要替换的标签：$($res.Tag)"
    }

    $inline = "<$($res.Wrap)>`r`n$content`r`n</$($res.Wrap)>"
    $html = $html.Replace($res.Tag, $inline)
    Write-Host ("已内联: {0}  ({1:N1} KB)" -f $res.File, ($content.Length / 1KB))
}

# ---- 校验：内联后不应残留任何外部引用 ----
$leftovers = @(
    'src="js/',
    'src="vendor/',
    'href="css/'
)
$found = @()
foreach ($pat in $leftovers) {
    if ($html.Contains($pat)) { $found += $pat }
}
if ($found.Count -gt 0) {
    throw "打包失败：仍残留外部引用 $($found -join ', ')"
}

# 统计内联脚本/样式块数量
$scriptCount = ([regex]::Matches($html, '<script>')).Count
$styleCount  = ([regex]::Matches($html, '<style>')).Count
if ($scriptCount -ne 3 -or $styleCount -ne 1) {
    throw "打包失败：script 块数量=$scriptCount（应为3），style 块数量=$styleCount（应为1）"
}

# ---- 写出 ----
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }
Set-Content -Path $outFile -Value $html -Encoding UTF8

$outSize = (Get-Item $outFile).Length
Write-Host ""
Write-Host ("打包完成: {0}  ({1:N1} KB)" -f $outFile, ($outSize / 1KB))
Write-Host "把" $outFile "发给别人，用浏览器打开即可使用。"
