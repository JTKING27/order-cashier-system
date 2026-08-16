        /* ============================================================
           第一部分：配置常量
           功能：纯配置数据，无业务逻辑
           ============================================================ */
        
        /* 拼音首字母映射表（仅包含菜单中出现的汉字） */
        const pinyinMap = {
            // 烤鱼类
            '清': 'q', '江': 'j', '鱼': 'y', '巴': 'b', '沙': 's', '草': 'c',
            // 汤锅类
            '铁': 't', '锅': 'g', '牛': 'n', '蛙': 'w', '小': 'x', '大': 'd', '干': 'g', '鸡': 'j',
            '重': 'c', '庆': 'q', '烧': 's', '公': 'g', '甲': 'j', '煲': 'b', '特': 't', '价': 'j',
            '中': 'z', '猪': 'z', '肚': 'd', '黑': 'h', '山': 's', '羊': 'y', '火': 'h', '美': 'm',
            '酸': 's', '汤': 't', '蹄': 't', '蜀': 's', '腊': 'l', '脚': 'j', '肥': 'f', '肠': 'c',
            '排': 'p', '杂': 'z', '菜': 'c', '石': 's', '冬': 'd', '瓜': 'g', '肉': 'r',
            // 配菜类
            '魔': 'm', '芋': 'y', '鸭': 'y', '血': 'x', '毛': 'm', '丸': 'w', '香': 'x',
            '水': 's', '豆': 'd', '腐': 'f', '土': 't', '米': 'm', '玉': 'y', '皮': 'p',
            '淮': 'h', '芽': 'y', '莲': 'l', '藕': 'o', '油': 'y', '麦': 'm', '白': 'b',
            '萝': 'l', '卜': 'b', '红': 'h', '薯': 's', '粉': 'f', '海': 'h', '带': 'd',
            '紫': 'z', '苏': 's', '生': 's', '金': 'j', '针': 'z', '菇': 'g', '冬': 'd',
            // 凉菜类
            '凉': 'l', '拌': 'b', '猪': 'z', '耳': 'e', '脱': 't', '骨': 'g', '凤': 'f', '爪': 'z',
            '折': 'z', '根': 'g', '卤': 'l', '拼': 'p', '盘': 'p', '辣': 'l', '蛋': 'd',
            '芥': 'j', '末': 'm', '秋': 'q', '葵': 'k', '刀': 'd', '拍': 'p', '青': 'q',
            '花': 'h', '生': 's', '田': 't', '螺': 'l',
            // 主食点心
            '老': 'l', '妈': 'm', '子': 'z', '炒': 'c', '饭': 'f', '三': 's', '丝': 's',
            '河': 'h', '南': 'n', '饼': 'b', '地': 'd', '银': 'y', '馒': 'm',
            '头': 't', '脆': 'c', '蕉': 'j', '卷': 'j', '虾': 'x', '粥': 'z', '瘦': 's',
            '瓜': 'g', '南': 'n',
            // 炒菜类
            '爆': 'b', '腰': 'y', '椒': 'j', '回': 'h', '农': 'n', '家': 'j',
            '梅': 'm', '扣': 'k', '孜': 'z', '然': 'r', '清': 'q',
            '笋': 's', '煸': 'b', '泥': 'n', '鳅': 'q', '蒜': 's', '空': 'k', '虎': 'h',
            '尖': 'j', '煎': 'j', '手': 's', '撕': 's', '包': 'b', '韭': 'j', '黄': 'h',
            '土': 't', '丝': 's', '鸭': 'y', '下': 'x', '巴': 'b', '豉': 'c', '炒': 'c',
            // 干锅铁板
            '翅': 'c', '尾': 'w', '腌': 'y',
            // 啤酒类
            '哈': 'h', '尔': 'e', '滨': 'b', '冰': 'b', '纯': 'c', '漓': 'l', '泉': 'q',
            '标': 'b', '雪': 'x', '乌': 'w', '珠': 'z', '江': 'j', '零': 'l', '度': 'd',
            '百': 'b', '威': 'w',
            // 白酒类
            '铺': 'p', '荞': 'q', '年': 'n', '糊': 'h', '涂': 't', '劲': 'j',
            '栏': 'l', '天': 't', '龙': 'l',
            // 饮料类
            '壹': 'y', '号': 'h', '王': 'w', '吉': 'j', '椰': 'y', '汁': 'z', '橙': 'c',
            '可': 'k', '乐': 'l', '碧': 'b', '矿': 'k', '矿': 'k', '泉': 'q',
            // 其他可能出现的
            '料': 'l', '酒': 'j', '饮': 'y', '餐': 'c', '厅': 't', '临': 'l', '时': 's'
        
        };

        /* 业务常量 */
        const CATEGORY_ORDER = ['烤鱼类', '汤锅类', '配菜类', '凉菜类', '主食点心', '炒菜类', '干锅铁板', '啤酒类', '白酒类', '饮料类'];
        const DRINK_CATEGORIES = ['啤酒类', '白酒类', '饮料类'];
        const TABLE_TYPES = {
            INNER: ['内1', '内2', '内3', '内4'],
            OUTER: ['外1', '外2', '外3', '外4', '外5', '外6'],
            PACK: ['打包1', '打包2']
        };
        const TICKET_CATEGORY_ORDER = ['烤鱼类', '汤锅类', '配菜类', '凉菜类', '主食点心', '炒菜类', '干锅铁板', '啤酒类', '白酒类', '饮料类', '临时菜'];
        const DISH_CATEGORIES = ['烤鱼类', '汤锅类', '配菜类', '凉菜类', '主食点心', '炒菜类', '干锅铁板', '啤酒类', '白酒类', '饮料类'];
        const STORAGE_KEY = 'yangBossData_v4';
        const TABLE_LIST = ["内1", "内2", "内3", "内4", "外1", "外2", "外3", "外4", "外5", "外6", "打包1", "打包2"];

        /* ============================================================
           第二部分：数据模型（状态管理）
           功能：应用全局状态与初始数据
           ============================================================ */
        
        /* 初始菜品数据 - 从外部 dishes.js 加载（window.dishData） */
        let dishData = window.dishData;

        /* 全局状态变量 */
        let tableDishesMap = {};
        let currentTable = "";
        let lastOrderedTable = "";
        let presetFees = ['纸巾', '打包盒'];
        let searchResultTimer = null;
        let ticketSearchTimer = null;
        let currentModalDish = null;
        let quantityModalCallback = null;
        let autoSaveTimer = null;
        let currentTicketText = '';
        let currentExtraFees = [];
        let changeTableTarget = null;
        let activeCategory = CATEGORY_ORDER[0];
        let currentBeerDish = null;
        
        /* 新增：IntersectionObserver 全局引用，防止内存泄漏 */
        let categoryObserver = null;

        /* ============================================================
           新增：路由历史管理（解决安卓返回键问题）
           ============================================================ */
        let isNavigatingByPopstate = false;
        let currentPageId = 'tablePage';

        const PAGE_HIERARCHY = {
            'tablePage': { parent: null, title: '桌号选择' },
            'orderPage': { parent: 'tablePage', title: '点菜' },
            'ticketPage': { parent: 'orderPage', title: '小票' },
            'dishEditPage': { parent: 'tablePage', title: '菜品管理' }
        };

        const MODAL_IDS = [
            'quantityModal', 'beerQuantityModal', 'changeTableModal',
            'tempDishModal', 'presetManageModal', 'searchDishModal',
            'editDishModal', 'addDishStep1Modal', 'addDishStep2Modal'
        ];

        /**
         * 检查是否有弹窗处于打开状态
         */
        function isAnyModalOpen() {
            return MODAL_IDS.some(id => {
                const el = document.getElementById(id);
                return el && el.classList.contains('active');
            });
        }

        /**
         * 关闭所有打开的弹窗
         */
        function closeAllModals() {
            MODAL_IDS.forEach(id => {
                const el = document.getElementById(id);
                if (el && el.classList.contains('active')) {
                    switch(id) {
                        case 'quantityModal': closeQuantityModal(); break;
                        case 'beerQuantityModal': closeBeerQuantityModal(); break;
                        case 'changeTableModal': closeChangeTableModal(); break;
                        case 'tempDishModal': closeTempDishModal(); break;
                        case 'presetManageModal': closePresetManageModal(); break;
                        case 'searchDishModal': closeSearchDishModal(); break;
                        case 'editDishModal': closeEditDishModal(); break;
                        case 'addDishStep1Modal': closeAddDishStep1(); break;
                        case 'addDishStep2Modal': closeAddDishStep2(); break;
                        default:
                            el.classList.remove('active');
                    }
                }
            });
        }

        /**
         * 带历史记录管理的页面切换函数
         */
        function navigateToPage(pageId, skipHistory = false) {
            if (pageId === currentPageId) return;
            
            const prevPageId = currentPageId;
            currentPageId = pageId;
            
            switchPage(pageId);
            
            if (!skipHistory && !isNavigatingByPopstate) {
                const state = {
                    pageId: pageId,
                    prevPageId: prevPageId,
                    currentTable: currentTable,
                    timestamp: Date.now()
                };
                window.history.pushState(state, '', `#${pageId}`);
            }
            
            isNavigatingByPopstate = false;
        }

        /**
         * 处理浏览器返回键（popstate事件）
         */
        function handlePopstate(event) {
            isNavigatingByPopstate = true;
            
            if (isAnyModalOpen()) {
                closeAllModals();
                const state = {
                    pageId: currentPageId,
                    currentTable: currentTable,
                    timestamp: Date.now()
                };
                window.history.pushState(state, '', `#${currentPageId}`);
                return;
            }
            
            const state = event.state;
            if (state && state.pageId) {
                if (currentPageId === 'orderPage' && state.pageId === 'tablePage') {
                    navigateToPage('tablePage', true);
                }
                else if (currentPageId === 'ticketPage' && state.pageId === 'orderPage') {
                    navigateToPage('orderPage', true);
                }
                else if (currentPageId === 'dishEditPage' && state.pageId === 'tablePage') {
                    navigateToPage('tablePage', true);
                }
                else if (state.pageId !== currentPageId) {
                    navigateToPage(state.pageId, true);
                }
            } else {
                if (currentPageId !== 'tablePage') {
                    navigateToPage('tablePage', true);
                }
            }
        }

        /**
         * 初始化路由历史（页面加载时调用）
         */
        function initRouter() {
            const initialState = {
                pageId: 'tablePage',
                currentTable: '',
                timestamp: Date.now()
            };
            window.history.replaceState(initialState, '', '#tablePage');
            
            window.addEventListener('popstate', handlePopstate);
        }

        /* ============================================================
           第三部分：工具函数
           功能：纯工具函数，无副作用，不依赖业务状态
           ============================================================ */

        /* 拼音首字母获取 */
        function getPinyinInitial(str) {
            if (!str) return '';
            let result = '';
            for (let i = 0; i < str.length; i++) {
                const char = str.charAt(i);
                if (pinyinMap[char]) {
                    result += pinyinMap[char];
                } else if (/[a-zA-Z]/.test(char)) {
                    result += char.toLowerCase();
                }
            }
            return result;
        }

        /* 初始化菜品拼音首字母 */
        function initDishPinyinInitials() {
            dishData.forEach(dish => {
                if (!dish.pinyinInitials) {
                    dish.pinyinInitials = getPinyinInitial(dish.name);
                }
            });
        }

        /* UI 反馈工具 */
        function showLoading() {
            document.getElementById('loadingSpinner').classList.add('active');
        }

        function hideLoading() {
            document.getElementById('loadingSpinner').classList.remove('active');
        }

        function showToast(message, duration = 2000) {
            const toast = document.getElementById('toastContainer');
            toast.textContent = message;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, duration);
        }

        /* 业务判断工具 */
        function isDrinkCategory(category) {
            return DRINK_CATEGORIES.includes(category);
        }

        /* ============================================================
           第四部分：存储管理层（localStorage）
           功能：数据持久化与自动保存
           ============================================================ */

        function saveToLocal() {
            try {
                const tableDataForSave = {};
                for (let table of TABLE_LIST) {
                    if (tableDishesMap[table]) {
                        tableDataForSave[table] = tableDishesMap[table];
                    }
                }
                
                const data = {
                    tableDishesMap: tableDataForSave,
                    dishData: dishData,
                    lastOrderedTable: lastOrderedTable,
                    presetFees: presetFees,
                    timestamp: Date.now(),
                    saveTime: new Date().toLocaleString('zh-CN')
                };
                localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
                console.log('数据已自动保存:', data.saveTime);
            } catch (e) {
                console.warn('自动保存失败:', e);
            }
        }

        function loadFromLocal() {
            try {
                const saved = localStorage.getItem(STORAGE_KEY);
                if (!saved) return false;
                
                const data = JSON.parse(saved);
                
                if (data.tableDishesMap) {
                    for (let table of TABLE_LIST) {
                        const savedTableData = data.tableDishesMap[table];
                        if (savedTableData) {
                            // 兼容旧数据格式：如果是数组，转换为对象
                            if (Array.isArray(savedTableData)) {
                                tableDishesMap[table] = {
                                    dishes: savedTableData,
                                    extraFees: savedTableData.extraFees || []
                                };
                            } else {
                                // 新格式：确保有 dishes 和 extraFees
                                tableDishesMap[table] = {
                                    dishes: savedTableData.dishes || [],
                                    extraFees: savedTableData.extraFees || []
                                };
                            }
                        }
                    }
                }
                
                if (data.dishData && data.dishData.length > 0) {
                    dishData = data.dishData;
                }
                
                if (data.lastOrderedTable) {
                    lastOrderedTable = data.lastOrderedTable;
                }
                
                if (data.presetFees) {
                    presetFees = data.presetFees;
                }
                
                console.log('数据已恢复，最后保存时间:', data.saveTime);
                return true;
            } catch (e) {
                console.warn('数据恢复失败:', e);
                return false;
            }
        }

        function startAutoSave() {
            if (autoSaveTimer) clearInterval(autoSaveTimer);
            autoSaveTimer = setInterval(() => {
                saveToLocal();
            }, 30000);
        }

        /* ============================================================
           第五部分：业务模块 - 5.1 桌号管理模块
           功能：桌号初始化、进入桌台、换桌、清台
           ============================================================ */

        function initTableCards() {
            TABLE_LIST.forEach(table => {
                if (!tableDishesMap[table]) {
                    tableDishesMap[table] = { dishes: [], extraFees: [] };
                } else if (Array.isArray(tableDishesMap[table])) {
                    // 兼容内存中的旧数据（数组格式）
                    const oldArray = tableDishesMap[table];
                    tableDishesMap[table] = {
                        dishes: oldArray,
                        extraFees: oldArray.extraFees || []
                    };
                } else {
                    // 确保结构完整
                    if (!tableDishesMap[table].dishes) tableDishesMap[table].dishes = [];
                    if (!tableDishesMap[table].extraFees) tableDishesMap[table].extraFees = [];
                }
            });
            
            renderTableCards();
            renderDishEditList();
            startAutoSave();
        }

        function renderTableCards() {
            const tableListEl = document.getElementById("tableList");
            
            let html = "";
            TABLE_LIST.forEach(table => {
                const tableData = tableDishesMap[table];
                const dishes = tableData?.dishes || [];
                const isActive = dishes.length > 0;
                const btnText = isActive ? "要加菜吗" : "开始点菜";
                const btnClass = isActive ? "enter-table-btn active-table-btn" : "enter-table-btn";
                
                let borderClass = "";
                if (TABLE_TYPES.INNER.includes(table)) {
                    borderClass = "inner-table";
                } else if (TABLE_TYPES.OUTER.includes(table)) {
                    borderClass = "outer-table";
                } else if (TABLE_TYPES.PACK.includes(table)) {
                    borderClass = "pack-table";
                }
                
                const isRecent = (table === lastOrderedTable);
                const recentCircle = isRecent ? '<div class="recent-circle">刚</div>' : '';
                
                const clearBtnHtml = isActive 
                    ? `<button class="new-table-card-btn" onclick="event.stopPropagation(); newTableFromCard('${table}')" title="清空桌台">🗑️</button>`
                    : '';
                
                html += `
                    <div class="table-card ${borderClass}" data-table="${table}">
                        ${recentCircle}
                        <h3>${table}</h3>
                        <div class="table-card-actions">
                            <button class="${btnClass}" onclick="enterTable('${table}')">${btnText}</button>
                            ${clearBtnHtml}
                        </div>
                    </div>
                `;
            });
            
            tableListEl.innerHTML = html;
        }

        function enterTable(table) {
            currentTable = table;
            document.getElementById("currentTableDisplay").textContent = table;
            activeCategory = CATEGORY_ORDER[0];
            renderOrderPage();
            navigateToPage("orderPage");
        }

        function newTableFromCard(table) {
            if (!confirm(`【${table}】新的一桌？\n\n将清空该桌所有菜品`)) return;
            
            tableDishesMap[table] = { dishes: [], extraFees: [] };
            saveToLocal();
            renderTableCards();
            
            if (currentTable === table) {
                renderOrderPage();
            }
        }

        function clearTableDishes() {
            if (!confirm(`确定要清空【${currentTable}】的所有菜品并设置为新桌吗？`)) return;
            
            tableDishesMap[currentTable] = { dishes: [], extraFees: [] };
            
            renderOrderPage();
            updateTicketPreview();
            renderTableCards();
            saveToLocal();
            
            showToast(`已清空【${currentTable}】的所有菜品！`);
        }

        function clearAllDishes() {
            if (!confirm(`确定要清空【${currentTable}】的所有菜品吗？`)) return;
            
            tableDishesMap[currentTable] = { dishes: [], extraFees: [] };
            
            renderOrderPage();
            updateTicketPreview();
            renderTableCards();
            saveToLocal();
            toggleOrderDrawer();
            
            showToast(`已清空所有菜品！`);
        }

        function openChangeTableModal() {
            const currentData = tableDishesMap[currentTable];
            const currentDishes = currentData?.dishes || [];
            if (currentDishes.length === 0) {
                showToast('当前桌没有菜品，无需换桌！');
                return;
            }
            
            document.getElementById('changeTableSource').textContent = currentTable;
            const grid = document.getElementById('changeTableGrid');
            let html = '';
            
            TABLE_LIST.forEach(table => {
                if (table === currentTable) {
                    html += `<div class="change-table-item disabled" data-table="${table}">${table}<br>(当前)</div>`;
                } else {
                    const targetData = tableDishesMap[table];
                    const targetDishes = targetData?.dishes || [];
                    const hasDishes = targetDishes.length > 0;
                    const status = hasDishes ? '<br>(有菜)' : '';
                    html += `<div class="change-table-item" data-table="${table}" onclick="selectChangeTable('${table}', this)">${table}${status}</div>`;
                }
            });
            
            grid.innerHTML = html;
            changeTableTarget = null;
            document.getElementById('changeTableModal').classList.add('active');
        }

        function selectChangeTable(table, element) {
            document.querySelectorAll('.change-table-item').forEach(el => {
                if (!el.classList.contains('disabled')) {
                    el.classList.remove('selected');
                }
            });
            element.classList.add('selected');
            changeTableTarget = table;
        }

        function closeChangeTableModal() {
            document.getElementById('changeTableModal').classList.remove('active');
            changeTableTarget = null;
        }

        function confirmChangeTable() {
            if (!changeTableTarget) {
                showToast('请选择目标桌号！');
                return;
            }
            
            const sourceData = tableDishesMap[currentTable] || { dishes: [], extraFees: [] };
            const targetData = tableDishesMap[changeTableTarget] || { dishes: [], extraFees: [] };
            
            // 兼容旧数据格式
            const sourceDishes = Array.isArray(sourceData) ? sourceData : sourceData.dishes;
            const targetDishes = Array.isArray(targetData) ? targetData : targetData.dishes;
            const sourceExtraFees = Array.isArray(sourceData) ? (sourceData.extraFees || []) : (sourceData.extraFees || []);
            const targetExtraFees = Array.isArray(targetData) ? (targetData.extraFees || []) : (targetData.extraFees || []);
            
            let confirmMsg = `确定将【${currentTable}】的${sourceDishes.length}个菜品换到【${changeTableTarget}】吗？`;
            if (targetDishes.length > 0) {
                confirmMsg += `\n\n注意：【${changeTableTarget}】已有${targetDishes.length}个菜品，将合并在一起。`;
            }
            
            if (!confirm(confirmMsg)) return;
            
            tableDishesMap[changeTableTarget] = {
                dishes: [...targetDishes, ...sourceDishes],
                extraFees: [...targetExtraFees, ...sourceExtraFees]
            };
            tableDishesMap[currentTable] = { dishes: [], extraFees: [] };
            
            const oldTable = currentTable;
            currentTable = changeTableTarget;
            
            renderOrderPage();
            renderTableCards();
            saveToLocal();
            
            closeChangeTableModal();
            
            document.getElementById("currentTableDisplay").textContent = currentTable;
            
            showToast(`换桌成功！${oldTable}的菜品已迁移到${currentTable}`);
        }

        /* ============================================================
           第六部分：业务模块 - 6.1 点菜模块（核心模块）
           功能：美团外卖式点菜界面，包含高亮、批量添加等
           ============================================================ */

        /* 6.1.1 渲染类函数 */

        function renderOrderPage() {
            renderCategorySidebar();
            renderDishesContent();
            updateBottomFloatBar();
            setupScrollSync();
        }

        function renderCategorySidebar() {
            const sidebar = document.getElementById('categorySidebar');
            const currentData = tableDishesMap[currentTable] || { dishes: [], extraFees: [] };
            const currentDishes = currentData.dishes || [];
            
            let html = '';
            CATEGORY_ORDER.forEach(category => {
                const categoryCount = currentDishes
                    .filter(d => d.category === category)
                    .reduce((sum, d) => sum + d.count, 0);
                
                const activeClass = category === activeCategory ? 'active' : '';
                const badgeHtml = categoryCount > 0 ? `<span class="category-nav-badge">${categoryCount}</span>` : '';
                
                let iconHtml = '';
                if (category === '啤酒类') {
                    iconHtml = '<span class="category-icon">🍺</span>';
                } else if (category === '白酒类') {
                    iconHtml = '<span class="category-icon">🍶</span>';
                } else if (category === '饮料类') {
                    iconHtml = '<span class="category-icon">🥤</span>';
                }
                
                html += `
                    <div class="category-nav-item ${activeClass}" onclick="scrollToCategory('${category}')" data-category="${category}">
                        ${iconHtml}${category}${badgeHtml}
                    </div>
                `;
            });
            
            html += `
                <div class="category-nav-item" onclick="scrollToTempDish()" style="color: #9f7aea; font-weight: bold;">
                    临时加菜
                </div>
            `;
            
            sidebar.innerHTML = html;
        }

        function renderDishesContent() {
            const content = document.getElementById('dishesContent');
            const currentData = tableDishesMap[currentTable] || { dishes: [], extraFees: [] };
            const currentDishes = currentData.dishes || [];
            
            let html = '';
            
            CATEGORY_ORDER.forEach(category => {
                const categoryDishes = dishData.filter(d => d.category === category);
                
                if (categoryDishes.length === 0) return;
                
                html += `
                    <div class="dish-category-section" id="category-${category}" data-category="${category}">
                        <div class="dish-category-title">${category}</div>
                `;
                
                categoryDishes.forEach((dish, index) => {
                    const existingDish = currentDishes.find(d => d.globalId === dish.globalId);
                    const count = existingDish ? existingDish.count : 0;
                    const bgClass = index % 2 === 0 ? 'dish-item-even' : 'dish-item-odd';
                    
                    const isBeer = dish.category === '啤酒类';
                    const bulkBtn = isBeer ? `<button class="dish-btn-bulk" onclick="event.stopPropagation(); openBeerQuantityModal(${dish.globalId})">批量</button>` : '';
                    
                    const highlightedName = highlightDishName(dish.name, dish.category);
                    
                    html += `
                        <div class="dish-item-new ${bgClass}" data-global-id="${dish.globalId}">
                            <div class="dish-info-new">
                                <div class="dish-name-new">${highlightedName}</div>
                                <div class="dish-price-new">¥${dish.price}</div>
                            </div>
                            <div class="dish-actions-new">
                                ${count > 0 ? `<button class="dish-btn-minus" onclick="event.stopPropagation(); updateDishCount(${dish.globalId}, -1)">−</button>` : ''}
                                ${count > 0 ? `<span class="dish-quantity">${count}</span>` : ''}
                                ${bulkBtn}
                                <button class="dish-btn-plus" onclick="event.stopPropagation(); updateDishCount(${dish.globalId}, 1)">+</button>
                            </div>
                        </div>
                    `;
                });
                
                html += '</div>';
            });
            
            html += `
                <div id="temp-dish-section" style="padding: 20px; text-align: center; border-top: 2px dashed #ddd; margin-top: 20px;">
                    <button onclick="openTempDishModal()" style="background: #9f7aea; color: white; padding: 12px 24px; border-radius: 20px; font-size: 16px; font-weight: bold;">
                        + 添加临时菜品
                    </button>
                </div>
            `;
            
            content.innerHTML = html;
        }

        function setupScrollSync() {
            const content = document.getElementById('dishesContent');
            
            // 断开旧的 Observer，防止内存泄漏
            if (categoryObserver) {
                categoryObserver.disconnect();
                categoryObserver = null;
            }
            
            const observerOptions = {
                root: content,
                threshold: 0,
                rootMargin: '-10% 0px -80% 0px'
            };
            
            categoryObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const category = entry.target.getAttribute('data-category');
                        if (category && category !== activeCategory) {
                            activeCategory = category;
                            renderCategorySidebar();
                        }
                    }
                });
            }, observerOptions);
            
            content.querySelectorAll('.dish-category-section').forEach(section => {
                categoryObserver.observe(section);
            });
        }

        function updateDishItemUI(globalId, count, dish) {
            const dishElement = document.querySelector(`#dishesContent .dish-item-new[data-global-id="${globalId}"]`);
            if (!dishElement) return;
            
            const actionsContainer = dishElement.querySelector('.dish-actions-new');
            if (!actionsContainer) return;
            
            const isBeer = dish.category === '啤酒类';
            const bulkBtn = isBeer ? `<button class="dish-btn-bulk" onclick="event.stopPropagation(); openBeerQuantityModal(${dish.globalId})">批量</button>` : '';
            
            let html = '';
            if (count > 0) {
                html += `<button class="dish-btn-minus" onclick="event.stopPropagation(); updateDishCount(${dish.globalId}, -1)">−</button>`;
                html += `<span class="dish-quantity">${count}</span>`;
            }
            html += bulkBtn;
            html += `<button class="dish-btn-plus" onclick="event.stopPropagation(); updateDishCount(${dish.globalId}, 1)">+</button>`;
            
            actionsContainer.innerHTML = html;
        }

        function updateDishCount(globalId, delta) {
            const dish = dishData.find(d => d.globalId === globalId);
            if (!dish) return;
            
            const currentData = tableDishesMap[currentTable];
            const currentDishes = currentData.dishes;
            const existingIndex = currentDishes.findIndex(d => d.globalId === dish.globalId);
            let newCount = 0;
            
            if (existingIndex > -1) {
                newCount = currentDishes[existingIndex].count + delta;
                if (newCount <= 0) {
                    currentDishes.splice(existingIndex, 1);
                    newCount = 0;
                } else {
                    currentDishes[existingIndex].count = newCount;
                }
            } else if (delta > 0) {
                newCount = 1;
                currentDishes.push({
                    globalId: dish.globalId,
                    name: dish.name,
                    price: dish.price,
                    category: dish.category,
                    count: 1,
                    servedCount: 0,
                    isDrink: dish.isDrink
                });
            }
            
            lastOrderedTable = currentTable;
            
            updateDishItemUI(globalId, newCount, dish);
            
            saveToLocal();
            renderCategorySidebar();
            updateBottomFloatBar();
            renderTableCards();
        }

        function updateBottomFloatBar() {
            const currentData = tableDishesMap[currentTable] || { dishes: [], extraFees: [] };
            const currentDishes = currentData.dishes || [];
            const totalCount = currentDishes.reduce((sum, d) => sum + d.count, 0);
            const itemsTotal = currentDishes.reduce((sum, d) => sum + (d.price * d.count), 0);
            
            const extraFees = currentData.extraFees || [];
            const extraTotal = extraFees.reduce((sum, f) => sum + f.amount, 0);
            
            const totalAmount = itemsTotal + extraTotal;
            
            document.getElementById('totalAmount').textContent = `¥${totalAmount}`;
            document.getElementById('totalCount').textContent = `共${totalCount}份`;
            document.getElementById('drawerBadge').textContent = totalCount;
            
            const expandBtn = document.getElementById('expandBtn');
            if (totalCount > 0) {
                expandBtn.classList.add('has-items');
            } else {
                expandBtn.classList.remove('has-items');
            }
        }

        function toggleOrderDrawer() {
            const drawer = document.getElementById('orderDrawer');
            const expandBtn = document.getElementById('expandBtn');
            const isActive = drawer.classList.contains('active');
            
            if (isActive) {
                drawer.classList.remove('active');
                expandBtn.classList.remove('expanded');
            } else {
                renderDrawerContent();
                drawer.classList.add('active');
                expandBtn.classList.add('expanded');
            }
        }

        function renderDrawerContent() {
            const content = document.getElementById('drawerContent');
            const currentData = tableDishesMap[currentTable] || { dishes: [], extraFees: [] };
            const currentDishes = currentData.dishes || [];
            
            if (currentDishes.length === 0) {
                content.innerHTML = '<div style="text-align: center; color: #999; padding: 20px;">暂无菜品</div>';
                return;
            }
            
            const sortedDishes = [...currentDishes].sort((a, b) => {
                const catIndexA = CATEGORY_ORDER.indexOf(a.category);
                const catIndexB = CATEGORY_ORDER.indexOf(b.category);
                if (catIndexA !== catIndexB) {
                    return catIndexA - catIndexB;
                }
                return b.price - a.price;
            });
            
            let html = '';
            sortedDishes.forEach(dish => {
                html += `
                    <div class="drawer-item">
                        <div class="drawer-item-name">
                            <div>${dish.name}</div>
                            <div style="font-size: 12px; color: #999;">${dish.category} ¥${dish.price}</div>
                        </div>
                        <div class="drawer-item-price">¥${(dish.price * dish.count).toFixed(0)}</div>
                        <div class="drawer-item-actions">
                            <button class="dish-btn-minus" onclick="event.stopPropagation(); updateDishCount(${dish.globalId}, -1); renderDrawerContent();" style="width: 24px; height: 24px; font-size: 14px;">−</button>
                            <span class="dish-quantity" style="font-size: 14px;">${dish.count}</span>
                            <button class="dish-btn-plus" onclick="event.stopPropagation(); updateDishCount(${dish.globalId}, 1); renderDrawerContent();" style="width: 24px; height: 24px; font-size: 14px;">+</button>
                        </div>
                    </div>
                `;
            });
            
            content.innerHTML = html;
        }

        function scrollToCategory(category) {
            activeCategory = category;
            renderCategorySidebar();
            
            const element = document.getElementById(`category-${category}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        function scrollToTempDish() {
            const element = document.getElementById('temp-dish-section');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                document.querySelectorAll('.category-nav-item').forEach(el => {
                    el.classList.remove('active');
                });
                activeCategory = null;
                renderCategorySidebar();
            }
        }

        /* 6.1.2 高亮处理函数（点菜页专用） */

        function highlightBigChar(html, originalName, category) {
            let result = html.replace(/大(?![^<]*>)/g, '<span style="font-size: 18px; color: #e53e3e; font-weight: bold;">大</span>');
            
            const potentialBigName = originalName.replace(/小/g, '大');
            const hasBigVersion = dishData.some(d => 
                d.category === category && d.name === potentialBigName
            );
            
            if (hasBigVersion) {
                result = result.replace(/小(?![^<]*>)/g, '<span style="color: #48bb78; font-weight: bold;">小</span>');
            }
            
            return result;
        }

        function highlightColdDish(name) {
            if (name.length <= 2) return name;
            
            const prefix = name.substring(0, 2);
            let suffix = name.substring(2);
            
            const keywords = ['牛肉', '猪耳', '凤爪', '折耳根', '拼盘', '鱼皮', '毛豆', '皮蛋', '秋葵', '青瓜', '花生', '藕带', '鸡爪'];
            keywords.sort((a, b) => b.length - a.length);
            
            const placeholders = [];
            let index = 0;
            
            keywords.forEach(keyword => {
                if (suffix.includes(keyword)) {
                    const regex = new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
                    suffix = suffix.replace(regex, (match) => {
                        const placeholder = `__C_${index}__`;
                        placeholders.push({ placeholder, word: match });
                        index++;
                        return placeholder;
                    });
                }
            });
            
            placeholders.forEach(({ placeholder, word }) => {
                suffix = suffix.replace(placeholder, `<span class="dish-keyword-highlight">${word}</span>`);
            });
            
            return prefix + suffix;
        }

        function highlightIngredientsOnly(name) {
            const ingredients = [
                '鸡翅', '虾', '猪尾', '肥肠', '牛杂', '带皮牛肉', '牛肉', '腌笋腊肉', '腊肉', 
                '花菜', '土豆片', '土豆', '腰花', '回锅肉', '小酥肉', '扣肉', '黄牛肉', 
                '鸭下巴', '羊肉', '花甲', '田螺', '泥鳅', '肉丝', '鸡蛋', '鸡蛋饼', '包菜', 
                '土豆丝', '韭菜', '莴笋丝', '菜心', '空心菜', '油麦菜', '尖椒', '豆芽', '腊猪脚'
            ].sort((a, b) => b.length - a.length);
            
            let result = name;
            const placeholders = [];
            let index = 0;
            
            ingredients.forEach(ingredient => {
                if (result.includes(ingredient)) {
                    const regex = new RegExp(ingredient.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
                    result = result.replace(regex, (match) => {
                        const placeholder = `__I_${index}__`;
                        placeholders.push({ placeholder, word: match });
                        index++;
                        return placeholder;
                    });
                }
            });
            
            placeholders.forEach(({ placeholder, word }) => {
                result = result.replace(placeholder, `<span class="dish-keyword-highlight">${word}</span>`);
            });
            
            return result;
        }

        function highlightMainFoodKeywords(name) {
            const keywords = ['炒饭', '炒粉', '小馒头'];
            let result = name;
            const placeholders = [];
            let index = 0;
            
            keywords.forEach(keyword => {
                if (result.includes(keyword)) {
                    const regex = new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
                    result = result.replace(regex, (match) => {
                        const placeholder = `__MF_${index}__`;
                        placeholders.push({ placeholder, word: match, isRice: false });
                        index++;
                        return placeholder;
                    });
                }
            });
            
            if (result.includes('米饭')) {
                const regex = /米饭/g;
                result = result.replace(regex, (match) => {
                    const placeholder = `__MF_${index}__`;
                    placeholders.push({ placeholder, word: match, isRice: true });
                    index++;
                    return placeholder;
                });
            }
            
            placeholders.forEach(({ placeholder, word, isRice }) => {
                if (isRice) {
                    result = result.replace(placeholder, `<span style="color: #e53e3e; font-weight: bold; font-size: 17px;">${word}</span>`);
                } else {
                    result = result.replace(placeholder, `<span class="dish-keyword-highlight">${word}</span>`);
                }
            });
            
            return result;
        }

        function highlightStirFryKeywords(name) {
            const specificKeywords = ['小炒肉', '鸡杂'];
            let result = name;
            const placeholders = [];
            let index = 0;
            
            specificKeywords.forEach(keyword => {
                if (result.includes(keyword)) {
                    const regex = new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
                    result = result.replace(regex, (match) => {
                        const placeholder = `__SF_${index}__`;
                        placeholders.push({ placeholder, word: match });
                        index++;
                        return placeholder;
                    });
                }
            });
            
            result = highlightIngredientsOnly(result);
            
            placeholders.forEach(({ placeholder, word }) => {
                result = result.replace(placeholder, `<span class="dish-keyword-highlight">${word}</span>`);
            });
            
            return result;
        }

        function highlightDefault(name) {
            const keywords = [
                '腊猪脚', '鸡翅', '鸡爪', '鸡杂', '鸡公', '鸡煲', '肥肠鸡', '猪肚鸡', '甲鱼鸡', '甲鱼',
                '牛蛙', '田鸡', '蛙', '美蛙', '黑山羊', '羊肉', '牛排', '牛腩', '牛肉', '牛杂', '带皮牛肉', 
                '猪尾', '猪脚', '猪蹄', '猪肚', '猪肉', '猪耳', '卤肉', '腊肉', '腌笋腊肉', '排骨', 
                '肥肠', '腰花', '毛肚', '鸭血', '脱骨凤爪', '王八', '龟',
                '清江鱼', '巴沙鱼', '石锅鱼', '肥肠鱼', '酸菜鱼', '美蛙鱼', '草鱼', '鱼', '虾', '花甲', '田螺', 
                '鳅', '泥鳅', '鸭', '鹅', '兔', '鸡'
            ].sort((a, b) => b.length - a.length);
            
            let result = name;
            const placeholders = [];
            let index = 0;
            
            keywords.forEach(keyword => {
                if (result.includes(keyword)) {
                    const regex = new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
                    result = result.replace(regex, (match) => {
                        const placeholder = `__D_${index}__`;
                        placeholders.push({ placeholder, word: match });
                        index++;
                        return placeholder;
                    });
                }
            });
            
            placeholders.forEach(({ placeholder, word }) => {
                result = result.replace(placeholder, `<span class="dish-keyword-highlight">${word}</span>`);
            });
            
            return result;
        }

        function highlightDishName(name, category) {
            let result = name;
            
            switch(category) {
                case '配菜类':
                    break;
                case '主食点心':
                    result = highlightMainFoodKeywords(result);
                    break;
                case '凉菜类':
                    result = highlightColdDish(result);
                    break;
                case '炒菜类':
                    result = highlightStirFryKeywords(result);
                    break;
                case '干锅铁板':
                    result = highlightIngredientsOnly(result);
                    break;
                default:
                    result = highlightDefault(result);
            }
            
            return highlightBigChar(result, name, category);
        }

        /* 6.1.3 啤酒批量添加功能 */

        function openBeerQuantityModal(globalId) {
            const dish = dishData.find(d => d.globalId === globalId);
            if (!dish) return;
            
            currentBeerDish = dish;
            
            document.getElementById("beerModalDishName").textContent = dish.name;
            document.getElementById("beerModalDishPrice").textContent = `¥${dish.price}`;
            document.getElementById("beerQuantityInput").value = "";
            
            document.getElementById("beerQuantityModal").classList.add("active");
            document.getElementById("beerQuantityInput").focus();
        }

        function closeBeerQuantityModal() {
            document.getElementById("beerQuantityModal").classList.remove("active");
            currentBeerDish = null;
        }

        function confirmBeerQuantityModal() {
            if (!currentBeerDish) {
                closeBeerQuantityModal();
                return;
            }
            
            const quantityInput = document.getElementById("beerQuantityInput");
            const quantity = parseInt(quantityInput.value);
            
            if (isNaN(quantity) || quantity < 1) {
                showToast("请输入有效的数量（至少1瓶）");
                quantityInput.focus();
                return;
            }
            
            const currentData = tableDishesMap[currentTable];
            const currentDishes = currentData.dishes;
            const existingIndex = currentDishes.findIndex(d => d.globalId === currentBeerDish.globalId);
            
            if (existingIndex > -1) {
                currentDishes[existingIndex].count += quantity;
            } else {
                currentDishes.push({
                    globalId: currentBeerDish.globalId,
                    name: currentBeerDish.name,
                    price: currentBeerDish.price,
                    category: currentBeerDish.category,
                    count: quantity,
                    servedCount: 0,
                    isDrink: currentBeerDish.isDrink
                });
            }
            
            lastOrderedTable = currentTable;
            
            saveToLocal();
            renderCategorySidebar();
            renderDishesContent();
            updateBottomFloatBar();
            renderTableCards();
            
            showToast(`已添加 ${currentBeerDish.name} ${quantity}瓶`);
            closeBeerQuantityModal();
        }

        /* ============================================================
           第七部分：业务模块 - 7.1 小票收银模块
           功能：小票生成、额外费用管理、搜索添加
           ============================================================ */

        function jumpToTicketPage() {
            const currentData = tableDishesMap[currentTable];
            const currentDishes = currentData?.dishes || [];
            if (currentDishes.length === 0) {
                showToast('暂无已点菜品，无法生成小票！');
                return;
            }
            navigateToPage('ticketPage');
        }

        function prepareTicketPage() {
            document.getElementById('ticketTableNumber').value = currentTable;
            document.getElementById('ticketDishSearch').value = '';
            document.getElementById('ticketSearchResult').style.display = 'none';
            
            const currentData = tableDishesMap[currentTable] || { dishes: [], extraFees: [] };
            currentExtraFees = currentData.extraFees || [];
            document.getElementById('extraFeeName').value = '';
            document.getElementById('extraFeeAmount').value = '';
            
            renderPresetFees();
            renderExtraFeeList();
            updateTicketPreview();
            
            document.getElementById('ticketDisplayArea').innerHTML = '';
        }

        function renderPresetFees() {
            const container = document.getElementById('presetFeesContainer');
            let html = '';
            
            presetFees.forEach((feeName, index) => {
                html += `
                    <div class="preset-fee-row">
                        <div class="preset-fee-name">${feeName}</div>
                        <div class="preset-fee-input">
                            <input type="number" id="preset-${index}" step="0.1" placeholder="0">
                        </div>
                        <button class="preset-fee-add-btn" onclick="addPresetFee(${index})">添加</button>
                    </div>
                `;
            });
            
            container.innerHTML = html;
        }

        function addPresetFee(index) {
            const input = document.getElementById(`preset-${index}`);
            const amount = parseFloat(input.value);
            
            if (isNaN(amount) || amount === 0) return;
            
            const feeName = presetFees[index];
            
            const existingIndex = currentExtraFees.findIndex(f => f.name === feeName);
            if (existingIndex > -1) {
                currentExtraFees[existingIndex].amount = amount;
            } else {
                currentExtraFees.push({
                    name: feeName,
                    amount: amount
                });
            }
            
            tableDishesMap[currentTable].extraFees = currentExtraFees;
            saveToLocal();
            renderExtraFeeList();
            updateTicketPreview();
            
            input.style.background = '#c6f6d5';
            setTimeout(() => {
                input.style.background = '';
                input.value = '';
            }, 500);
        }

        function openPresetManageModal() {
            renderPresetList();
            document.getElementById('presetManageModal').classList.add('active');
        }

        function closePresetManageModal() {
            document.getElementById('presetManageModal').classList.remove('active');
        }

        function renderPresetList() {
            const container = document.getElementById('presetListContainer');
            let html = '';
            
            presetFees.forEach((fee, index) => {
                html += `
                    <div class="preset-item">
                        <span>${fee}</span>
                        <button class="remove-btn" onclick="removePresetFee(${index})">删除</button>
                    </div>
                `;
            });
            
            if (presetFees.length === 0) {
                html = '<div style="text-align: center; color: #999; padding: 20px;">暂无预设项</div>';
            }
            
            container.innerHTML = html;
        }

        function addNewPreset() {
            const input = document.getElementById('newPresetName');
            const name = input.value.trim();
            
            if (!name) {
                showToast('请输入项目名称');
                return;
            }
            
            if (presetFees.includes(name)) {
                showToast('该项目已存在');
                return;
            }
            
            presetFees.push(name);
            input.value = '';
            renderPresetList();
            renderPresetFees();
            saveToLocal();
        }

        function removePresetFee(index) {
            if (confirm(`确定删除【${presetFees[index]}】吗？`)) {
                presetFees.splice(index, 1);
                renderPresetList();
                renderPresetFees();
                saveToLocal();
            }
        }

        function addExtraFee() {
            const name = document.getElementById('extraFeeName').value.trim();
            const amount = parseFloat(document.getElementById('extraFeeAmount').value);
            
            if (!name) {
                showToast('请输入项目名称！');
                return;
            }
            if (isNaN(amount) || amount === 0) {
                showToast('请输入有效的金额！');
                return;
            }
            
            currentExtraFees.push({
                name: name,
                amount: amount
            });
            
            tableDishesMap[currentTable].extraFees = currentExtraFees;
            saveToLocal();
            
            document.getElementById('extraFeeName').value = '';
            document.getElementById('extraFeeAmount').value = '';
            document.getElementById('extraFeeName').focus();
            
            renderExtraFeeList();
            updateTicketPreview();
        }

        function renderExtraFeeList() {
            const listEl = document.getElementById('extraFeeList');
            
            if (currentExtraFees.length === 0) {
                listEl.innerHTML = '<div class="extra-fee-empty">暂无额外费用</div>';
                return;
            }
            
            let html = '';
            
            currentExtraFees.forEach((fee, index) => {
                html += `
                    <div class="extra-fee-item">
                        <span class="extra-fee-item-name">${fee.name}</span>
                        <div>
                            <span class="extra-fee-item-amount">¥${fee.amount.toFixed(2)}</span>
                            <button class="extra-fee-delete" onclick="deleteExtraFee(${index})">删除</button>
                        </div>
                    </div>
                `;
            });
            
            listEl.innerHTML = html;
        }

        function deleteExtraFee(index) {
            currentExtraFees.splice(index, 1);
            tableDishesMap[currentTable].extraFees = currentExtraFees;
            saveToLocal();
            renderExtraFeeList();
            updateTicketPreview();
        }

        function searchDishForTicket() {
            if (ticketSearchTimer) {
                clearTimeout(ticketSearchTimer);
                ticketSearchTimer = null;
            }
            
            ticketSearchTimer = setTimeout(() => {
                const searchText = document.getElementById("ticketDishSearch").value.trim().toLowerCase();
                const searchResultEl = document.getElementById("ticketSearchResult");
                
                if (!searchText) {
                    searchResultEl.style.display = "none";
                    return;
                }

                const matchedDishes = dishData.filter(d => {
                    if (d.name.toLowerCase().includes(searchText)) return true;
                    if (d.pinyinInitials && d.pinyinInitials.includes(searchText)) return true;
                    return false;
                });
                
                if (matchedDishes.length === 0) {
                    let html = `
                        <div class="search-result-item temp-dish-option" onclick="openTempDishModal('${searchText}')">
                            <div class="search-result-item-info">
                                <span style="color: #805ad5; font-weight: bold;">➕ 添加临时菜品</span>
                                <div style="font-size: 12px; color: #666; margin-top: 2px;">"${searchText}"</div>
                            </div>
                            <span style="color: #9f7aea;">手动输入价格</span>
                        </div>
                    `;
                    searchResultEl.innerHTML = html;
                    searchResultEl.style.display = "block";
                    return;
                }

                let html = "";
                const currentData = tableDishesMap[currentTable] || { dishes: [], extraFees: [] };
                const currentDishes = currentData.dishes || [];
                
                matchedDishes.forEach(dish => {
                    const existingDish = currentDishes.find(d => d.globalId === dish.globalId);
                    const count = existingDish ? existingDish.count : 0;
                    const pinyinTip = dish.pinyinInitials || '';
                    
                    html += `
                        <div class="search-result-item" onclick="openTicketQuantityModal(${dish.globalId});">
                            <div class="search-result-item-info">
                                <div class="search-result-item-name">${dish.name}</div>
                                <div class="search-result-item-category">${dish.category} [${pinyinTip}]</div>
                            </div>
                            <span class="price-tag">¥${dish.price} ${count > 0 ? `(已点${count})` : ''}</span>
                        </div>
                    `;
                });
                searchResultEl.innerHTML = html;
                searchResultEl.style.display = "block";
            }, 300);
        }

        function openTicketQuantityModal(globalId) {
            const dish = dishData.find(d => d.globalId === globalId);
            if (!dish) return;
            
            currentModalDish = dish;
            
            const defaultQuantity = DRINK_CATEGORIES.includes(dish.category) ? "" : "1";
            
            document.getElementById("modalDishName").textContent = dish.name;
            document.getElementById("modalDishPrice").textContent = `¥${dish.price}`;
            document.getElementById("quantityInput").value = defaultQuantity;
            
            quantityModalCallback = (quantity) => {
                addDishWithQuantity(globalId, quantity);
                document.getElementById("ticketSearchResult").style.display = "none";
                document.getElementById("ticketDishSearch").value = "";
            };
            
            document.getElementById("ticketSearchResult").style.display = "none";
            document.getElementById("ticketDishSearch").value = "";
            document.getElementById("quantityModal").classList.add("active");
            document.getElementById("quantityInput").focus();
        }

        function closeQuantityModal() {
            document.getElementById("quantityModal").classList.remove("active");
            currentModalDish = null;
            quantityModalCallback = null;
        }

        function confirmQuantityModal() {
            if (!quantityModalCallback || !currentModalDish) {
                closeQuantityModal();
                return;
            }
            
            const quantityInput = document.getElementById("quantityInput");
            const quantity = parseInt(quantityInput.value);
            
            if (isNaN(quantity) || quantity < 1) {
                showToast("请输入有效的数量（至少1份）");
                quantityInput.focus();
                return;
            }
            
            quantityModalCallback(quantity);
            closeQuantityModal();
        }

        function updateTicketPreview() {
            const previewListEl = document.getElementById('ticketPreviewList');
            const currentData = tableDishesMap[currentTable] || { dishes: [], extraFees: [] };
            const currentDishes = currentData.dishes || [];
            
            if (currentDishes.length === 0) {
                previewListEl.innerHTML = '<div class="empty-preview">暂无菜品，请搜索添加</div>';
                return;
            }
            
            const categories = {};
            currentDishes.forEach(dish => {
                if (!categories[dish.category]) {
                    categories[dish.category] = [];
                }
                categories[dish.category].push(dish);
            });
            
            let previewHtml = '';
            
            TICKET_CATEGORY_ORDER.forEach(category => {
                if (categories[category] && categories[category].length > 0) {
                    const categoryDishes = categories[category].sort((a, b) => b.price - a.price);
                    
                    const boxClass = `preview-category-box-${category}`;
                    
                    previewHtml += `
                        <div class="preview-category-box ${boxClass}">
                            <div class="preview-category-title">${category}</div>
                    `;
                    
                    categoryDishes.forEach(dish => {
                        const totalPrice = dish.price * dish.count;
                        const tempMark = dish.isTemporary ? '<span style="color: #9f7aea; font-size: 12px;">[临时]</span> ' : '';
                        
                        previewHtml += `
                            <div class="preview-item">
                                <div class="preview-item-info">
                                    <div class="preview-item-name">${tempMark}${dish.name}</div>
                                    <div class="preview-item-details">
                                        ¥${dish.price} × ${dish.count}份 = ¥${totalPrice.toFixed(2)}
                                    </div>
                                </div>
                                <div class="preview-item-actions">
                                    <button class="preview-delete-btn" onclick="deleteDishFromTicket('${dish.globalId || dish.name}')">删除</button>
                                </div>
                            </div>
                        `;
                    });
                    
                    previewHtml += '</div>';
                }
            });
            
            previewListEl.innerHTML = previewHtml;
        }

        function deleteDishFromTicket(id) {
            const currentData = tableDishesMap[currentTable];
            const currentDishes = currentData.dishes;
            const dishIndex = currentDishes.findIndex(d => (d.globalId || d.name) == id);
            if (dishIndex === -1) return;
            
            const dish = currentDishes[dishIndex];

            if (confirm(`确定要从小票中删除【${dish.name}】${dish.count}份吗？`)) {
                currentDishes.splice(dishIndex, 1);
                saveToLocal();
                renderOrderPage();
                updateTicketPreview();
            }
        }

        function generateTicket() {
            const tableNumber = document.getElementById('ticketTableNumber').value;
            const currentData = tableDishesMap[currentTable] || { dishes: [], extraFees: [] };
            const currentDishes = currentData.dishes || [];
            const time = new Date().toLocaleString('zh-CN', { 
                year: '2-digit', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit'
            });
            
            let itemsTotal = 0;
            const allCategories = {};
            
            const receiptCategoryOrder = ['烤鱼类', '汤锅类', '配菜类', '凉菜类', '主食点心', '炒菜类', '干锅铁板', '啤酒类', '白酒类', '饮料类', '临时菜'];
            
            currentDishes.forEach(item => {
                const itemTotal = item.price * item.count;
                itemsTotal += itemTotal;
                
                if (!allCategories[item.category]) {
                    allCategories[item.category] = [];
                }
                allCategories[item.category].push(item);
            });
            
            const extraFeesTotal = currentExtraFees.reduce((sum, fee) => sum + fee.amount, 0);
            const grandTotal = itemsTotal + extraFeesTotal;
            
            let receiptHtml = `
                <div class="ticket-info-section">
                    <div class="ticket-display" id="receiptContent">
                        <div class="receipt-line">
                            <span>${time}</span>
                            <span>${tableNumber}</span>
                        </div>
            `;
            
            if (currentExtraFees.length > 0) {
                currentExtraFees.forEach(fee => {
                    receiptHtml += `
                        <div class="receipt-line">
                            <span>${fee.name}</span>
                            <span>¥${fee.amount.toFixed(0)}</span>
                        </div>
                    `;
                });
            }
            
            receiptCategoryOrder.forEach(category => {
                if (allCategories[category] && allCategories[category].length > 0) {
                    receiptHtml += `<div class="receipt-category-title">${category}</div>`;
                    allCategories[category].forEach(item => {
                        const tempMark = item.isTemporary ? '[临]' : '';
                        receiptHtml += `
                            <div class="receipt-line">
                                <span>${tempMark}${item.name}×${item.count}</span>
                                <span>¥${(item.price * item.count).toFixed(0)}</span>
                            </div>
                        `;
                    });
                }
            });
            
            receiptHtml += `
                        <div class="receipt-total receipt-line">
                            <span>总计</span>
                            <span>¥${grandTotal.toFixed(0)}</span>
                        </div>
                    </div>
                    <div class="ticket-actions">
                        <button class="save-img-btn" onclick="saveReceiptAsImage()">💾保存为图片</button>
                        <button class="copy-text-btn" onclick="copyReceiptText()">复制文字</button>
                    </div>
                </div>
            `;
            
            document.getElementById('ticketDisplayArea').innerHTML = receiptHtml;
            
            generateReceiptText(time, tableNumber, allCategories, grandTotal);
        }

        function generateReceiptText(time, tableNumber, allCategories, grandTotal) {
            const receiptCategoryOrder = ['烤鱼类', '汤锅类', '配菜类', '凉菜类', '主食点心', '炒菜类', '干锅铁板', '啤酒类', '白酒类', '饮料类', '临时菜'];
            
            let text = `${tableNumber} ${time}\n`;
            
            if (currentExtraFees.length > 0) {
                currentExtraFees.forEach(fee => {
                    text += `${fee.name} ¥${fee.amount.toFixed(2)}\n`;
                });
                text += `\n`;
            }
            
            receiptCategoryOrder.forEach(category => {
                if (allCategories[category] && allCategories[category].length > 0) {
                    text += `${category}\n`;
                    allCategories[category].forEach(item => {
                        const tempMark = item.isTemporary ? '[临]' : '';
                        text += `${tempMark}${item.name} ${item.count}份 ¥${(item.price * item.count).toFixed(2)}\n`;
                    });
                    text += `\n`;
                }
            });
            
            text += `总计 ¥${grandTotal.toFixed(2)}\n`;
            
            currentTicketText = text;
        }

        function copyReceiptText() {
            if (!currentTicketText) {
                showToast('请先生成小票');
                return;
            }
            
            const textarea = document.createElement('textarea');
            textarea.value = currentTicketText;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            
            textarea.select();
            textarea.setSelectionRange(0, 99999);
            
            try {
                const successful = document.execCommand('copy');
                if (successful) {
                    showToast('小票已复制');
                } else {
                    showToast('复制失败，请手动复制');
                }
            } catch (err) {
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(currentTicketText).then(() => {
                        showToast('小票已复制');
                    }).catch(() => {
                        showToast('复制失败，请手动复制');
                    });
                } else {
                    showToast('复制失败，请手动复制');
                }
            }
            
            document.body.removeChild(textarea);
        }

        function saveReceiptAsImage() {
            const receiptElement = document.getElementById('receiptContent');
            
            if (!receiptElement) {
                showToast('请先生成小票');
                return;
            }
            
            showLoading();
            
            html2canvas(receiptElement, {
                scale: 2,
                backgroundColor: '#ffffff',
                logging: false,
                useCORS: true
            }).then(canvas => {
                const link = document.createElement('a');
                const dateStr = new Date().toLocaleString('zh-CN').replace(/[/:\s]/g, '-');
                link.download = `小票_${currentTable}_${dateStr}.png`;
                link.href = canvas.toDataURL('image/png');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                hideLoading();
                showToast('小票图片已保存！');
            }).catch(error => {
                console.error('保存小票图片出错:', error);
                hideLoading();
                showToast('图片生成失败，已自动切换为复制文字');
                copyReceiptText();
            });
        }

        /* 临时菜品功能（小票页） */
        function openTempDishModal(defaultName) {
            document.getElementById('tempDishName').value = defaultName || '';
            document.getElementById('tempDishPrice').value = '';
            document.getElementById('tempDishQty').value = '1';
            document.getElementById('tempDishModal').classList.add('active');
            document.getElementById('tempDishName').focus();
        }

        function closeTempDishModal() {
            document.getElementById('tempDishModal').classList.remove('active');
        }

        function confirmAddTempDish() {
            const name = document.getElementById('tempDishName').value.trim();
            const price = parseFloat(document.getElementById('tempDishPrice').value);
            const qty = parseInt(document.getElementById('tempDishQty').value);
            
            if (!name) {
                showToast('请输入菜品名称！');
                return;
            }
            if (isNaN(price) || price < 0) {
                showToast('请输入有效的价格！');
                return;
            }
            if (isNaN(qty) || qty < 1) {
                showToast('请输入有效的数量！');
                return;
            }
            
            if (!tableDishesMap[currentTable]) {
                tableDishesMap[currentTable] = { dishes: [], extraFees: [] };
            }
            
            tableDishesMap[currentTable].dishes.push({
                globalId: null,
                name: name,
                price: price,
                category: '临时菜',
                count: qty,
                servedCount: 0,
                isDrink: false,
                isTemporary: true
            });
            
            lastOrderedTable = currentTable;
            
            saveToLocal();
            renderOrderPage();
            updateTicketPreview();
            closeTempDishModal();
            
            showToast('临时菜品添加成功');
        }

        function addDishWithQuantity(globalId, quantity) {
            const dish = dishData.find(d => d.globalId === globalId);
            if (!dish) return;

            const currentData = tableDishesMap[currentTable];
            const currentDishes = currentData.dishes;
            const existingIndex = currentDishes.findIndex(d => d.globalId === dish.globalId);
            if (existingIndex > -1) {
                currentDishes[existingIndex].count += quantity;
            } else {
                currentDishes.push({
                    globalId: dish.globalId,
                    name: dish.name,
                    price: dish.price,
                    category: dish.category,
                    count: quantity,
                    servedCount: 0,
                    isDrink: dish.isDrink
                });
            }

            lastOrderedTable = currentTable;
            
            saveToLocal();
            renderOrderPage();
            updateTicketPreview();
            renderTableCards();
        }

        /* ============================================================
           第八部分：业务模块 - 8.1 菜品管理模块
           功能：菜品增删改查、分类折叠
           ============================================================ */

        function toggleEditCategory(category) {
            const header = document.getElementById(`edit-cat-header-${category}`);
            const content = document.getElementById(`edit-cat-content-${category}`);
            const arrow = document.getElementById(`edit-cat-arrow-${category}`);
            
            if (content.classList.contains('expanded')) {
                content.classList.remove('expanded');
                header.classList.remove('expanded');
                arrow.classList.remove('expanded');
            } else {
                content.classList.add('expanded');
                header.classList.add('expanded');
                arrow.classList.add('expanded');
            }
        }

        function renderDishEditList() {
            const containerEl = document.getElementById('dishEditCategoryContainer');
            let html = "";

            DISH_CATEGORIES.forEach(category => {
                const categoryDishes = dishData.filter(d => d.category === category);
                
                if (categoryDishes.length === 0) return;

                html += `
                    <div class="edit-category-section-fold">
                        <div class="edit-category-header-fold" id="edit-cat-header-${category}" onclick="toggleEditCategory('${category}')">
                            <span class="edit-category-title-fold">${category} (${categoryDishes.length}个菜品)</span>
                            <span class="edit-category-arrow" id="edit-cat-arrow-${category}">▼</span>
                        </div>
                        <div class="edit-category-content" id="edit-cat-content-${category}">
                            <div class="dish-edit-list">
                                <div class="dish-edit-item header">
                                    <div>菜品名称</div>
                                    <div>价格</div>
                                    <div>编辑</div>
                                    <div>删除</div>
                                </div>
                                ${categoryDishes.map(dish => `
                                    <div class="dish-edit-item">
                                        <div>${dish.name}</div>
                                        <div>${dish.price.toFixed(2)}</div>
                                        <button class="edit-btn" onclick="openEditDishModal(${dish.globalId})">编辑</button>
                                        <button class="remove-btn" onclick="removeDish(${dish.globalId})">删除</button>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;
            });

            containerEl.innerHTML = html;
        }

        /* 8.1.1 修改菜品功能 */

        function openSearchDishModal() {
            document.getElementById('modifyDishSearchInput').value = '';
            document.getElementById('modifyDishSearchResults').innerHTML = '<div style="padding: 20px; text-align: center; color: #999;">输入菜品名称开始搜索</div>';
            document.getElementById('searchDishModal').classList.add('active');
            document.getElementById('modifyDishSearchInput').focus();
        }

        function closeSearchDishModal() {
            document.getElementById('searchDishModal').classList.remove('active');
        }

        function searchDishForModify() {
            const searchText = document.getElementById('modifyDishSearchInput').value.trim().toLowerCase();
            const resultsEl = document.getElementById('modifyDishSearchResults');
            
            if (!searchText) {
                resultsEl.innerHTML = '<div style="padding: 20px; text-align: center; color: #999;">输入菜品名称开始搜索</div>';
                return;
            }
            
            const matchedDishes = dishData.filter(d => d.name.toLowerCase().includes(searchText));
            
            if (matchedDishes.length === 0) {
                resultsEl.innerHTML = '<div style="padding: 20px; text-align: center; color: #999;">未找到匹配菜品</div>';
                return;
            }
            
            let html = '';
            matchedDishes.forEach(dish => {
                html += `
                    <div class="dish-search-item" onclick="selectDishToEdit(${dish.globalId})">
                        <div class="dish-search-item-name">${dish.name}</div>
                        <div class="dish-search-item-info">
                            <span>${dish.category}</span>
                            <span>¥${dish.price}</span>
                        </div>
                    </div>
                `;
            });
            
            resultsEl.innerHTML = html;
        }

        function selectDishToEdit(globalId) {
            closeSearchDishModal();
            openEditDishModal(globalId);
        }

        function openEditDishModal(globalId) {
            const dish = dishData.find(d => d.globalId === globalId);
            if (!dish) return;
            
            document.getElementById('editModalDishGlobalId').value = dish.globalId;
            document.getElementById('editModalDishName').value = dish.name;
            document.getElementById('editModalDishPrice').value = dish.price;
            document.getElementById('editModalDishCategory').value = dish.category;
            
            document.getElementById('editDishModal').classList.add('active');
        }

        function closeEditDishModal() {
            document.getElementById('editDishModal').classList.remove('active');
        }

        function saveEditDishFromModal() {
            const globalId = Number(document.getElementById('editModalDishGlobalId').value);
            const dishName = document.getElementById('editModalDishName').value.trim();
            const dishPrice = Number(document.getElementById('editModalDishPrice').value);
            const dishCategory = document.getElementById('editModalDishCategory').value;
            
            if (!dishName) {
                showToast("请输入菜品名称！");
                return;
            }
            if (isNaN(dishPrice) || dishPrice < 0) {
                showToast("请输入有效的菜品价格（≥0的数字）！");
                return;
            }
            
            const index = dishData.findIndex(d => d.globalId === globalId);
            if (index === -1) {
                showToast("菜品不存在！");
                return;
            }
            
            const isDrink = isDrinkCategory(dishCategory);
            
            dishData[index] = {
                ...dishData[index],
                name: dishName,
                price: dishPrice,
                category: dishCategory,
                isDrink: isDrink
            };
            
            dishData[index].pinyinInitials = getPinyinInitial(dishName);
            
            saveToLocal();
            renderDishEditList();
            closeEditDishModal();
            showToast("菜品修改成功！");
        }

        /* 8.1.2 添加菜品功能 */

        function openAddDishStep1() {
            const grid = document.getElementById('addDishCategoryGrid');
            let html = '';
            
            DISH_CATEGORIES.forEach(cat => {
                html += `<div class="category-select-item" onclick="selectCategoryForAdd('${cat}')">${cat}</div>`;
            });
            
            grid.innerHTML = html;
            document.getElementById('addDishStep1Modal').classList.add('active');
        }

        function closeAddDishStep1() {
            document.getElementById('addDishStep1Modal').classList.remove('active');
        }

        function selectCategoryForAdd(category) {
            closeAddDishStep1();
            
            document.getElementById('addModalDishCategory').value = category;
            document.getElementById('addModalDishCategoryDisplay').value = category;
            document.getElementById('addModalDishName').value = '';
            document.getElementById('addModalDishPrice').value = '';
            
            document.getElementById('addDishStep2Modal').classList.add('active');
            document.getElementById('addModalDishName').focus();
        }

        function closeAddDishStep2() {
            document.getElementById('addDishStep2Modal').classList.remove('active');
        }

        function saveAddDishFromModal() {
            const dishName = document.getElementById('addModalDishName').value.trim();
            const dishPrice = Number(document.getElementById('addModalDishPrice').value);
            const dishCategory = document.getElementById('addModalDishCategory').value;
            
            if (!dishName) {
                showToast("请输入菜品名称！");
                return;
            }
            if (isNaN(dishPrice) || dishPrice < 0) {
                showToast("请输入有效的菜品价格（≥0的数字）！");
                return;
            }
            
            const maxGlobalId = Math.max(...dishData.map(d => d.globalId), 0);
            const newGlobalId = maxGlobalId + 1;
            
            const isDrink = isDrinkCategory(dishCategory);
            
            const newDish = {
                globalId: newGlobalId,
                name: dishName,
                price: dishPrice,
                category: dishCategory,
                isDrink: isDrink
            };
            
            newDish.pinyinInitials = getPinyinInitial(dishName);
            
            dishData.push(newDish);
            
            saveToLocal();
            renderDishEditList();
            closeAddDishStep2();
            showToast("菜品添加成功！");
        }

        function removeDish(globalId) {
            const dish = dishData.find(d => d.globalId === globalId);
            if (!dish) return;

            if (confirm(`确定要删除菜品【${dish.name}（${dish.category}，¥${dish.price}）】吗？`)) {
                dishData = dishData.filter(d => d.globalId !== globalId);
                saveToLocal();
                renderDishEditList();
                showToast("菜品删除成功！");
            }
        }

        /* ============================================================
           第九部分：全局路由与初始化
           功能：页面切换、全局事件监听、应用启动
           ============================================================ */

        function switchPage(pageId) {
            saveToLocal();
            
            // 清理旧的 IntersectionObserver，防止内存泄漏
            if (categoryObserver) {
                categoryObserver.disconnect();
                categoryObserver = null;
            }
            
            document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
            const targetPage = document.getElementById(pageId);
            targetPage.classList.add('active');
            targetPage.scrollTop = 0;
            
            switch(pageId) {
                case "dishEditPage":
                    renderDishEditList();
                    break;
                case "tablePage":
                    renderTableCards();
                    break;
                case "ticketPage":
                    prepareTicketPage();
                    break;
                case "orderPage":
                    const drawer = document.getElementById('orderDrawer');
                    const expandBtn = document.getElementById('expandBtn');
                    if (drawer) {
                        drawer.classList.remove('active');
                    }
                    if (expandBtn) {
                        expandBtn.classList.remove('expanded');
                    }
                    renderOrderPage();
                    break;
            }
            
            document.querySelectorAll('.search-results').forEach(el => {
                el.style.display = 'none';
            });
        }

        /* 全局事件监听 */
        document.addEventListener('click', function(e) {
            const ticketSearchWrapper = document.getElementById('ticketDishSearch');
            if (ticketSearchWrapper && !ticketSearchWrapper.parentElement.contains(e.target)) {
                const ticketSearchResult = document.getElementById('ticketSearchResult');
                if (ticketSearchResult) ticketSearchResult.style.display = 'none';
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                if (isAnyModalOpen()) {
                    closeAllModals();
                    return;
                }
                
                if (currentPageId !== 'tablePage') {
                    const parentPage = PAGE_HIERARCHY[currentPageId]?.parent;
                    if (parentPage) {
                        navigateToPage(parentPage);
                    }
                    return;
                }
            }
            
            if (e.key === 'Enter') {
                if (document.getElementById('quantityModal').classList.contains('active')) {
                    confirmQuantityModal();
                } else if (document.getElementById('tempDishModal').classList.contains('active')) {
                    confirmAddTempDish();
                } else if (document.getElementById('editDishModal').classList.contains('active')) {
                    saveEditDishFromModal();
                } else if (document.getElementById('addDishStep2Modal').classList.contains('active')) {
                    saveAddDishFromModal();
                } else if (document.getElementById('beerQuantityModal').classList.contains('active')) {
                    confirmBeerQuantityModal();
                }
            }
        });

        /* 应用初始化入口 */
        window.onload = function() {
            loadFromLocal();
            initDishPinyinInitials();
            
            // 确保所有桌台数据结构正确
            TABLE_LIST.forEach(table => {
                if (!tableDishesMap[table]) {
                    tableDishesMap[table] = { dishes: [], extraFees: [] };
                } else if (Array.isArray(tableDishesMap[table])) {
                    // 加载的是旧格式，转换为新格式
                    const oldArray = tableDishesMap[table];
                    tableDishesMap[table] = {
                        dishes: oldArray,
                        extraFees: oldArray.extraFees || []
                    };
                }
            });
            
            // 初始化路由历史管理
            initRouter();
            
            // 添加进程被杀前的保存监听（安卓杀进程保护）
            document.addEventListener('visibilitychange', () => {
                if (document.visibilityState === 'hidden') {
                    saveToLocal();
                }
            });
            
            window.addEventListener('pagehide', saveToLocal);
            
            initTableCards();
            
            console.log("点菜收银系统已加载完成！");
        };
