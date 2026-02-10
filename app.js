// Inspection Bubble - Main Application

class InspectionBubble {
    constructor() {
        this.data = this.loadData();
        this.currentCategory = null;
        this.isDragging = false;
        this.dragOffset = { x: 0, y: 0 };

        this.initElements();
        this.bindEvents();
        this.renderCategories();
        this.updateSettingsLists();
    }

    // Initialize DOM element references
    initElements() {
        // Main elements
        this.bubble = document.getElementById('bubble');
        this.panel = document.getElementById('panel');
        this.closeBtn = document.getElementById('closeBtn');
        this.settingsBtn = document.getElementById('settingsBtn');

        // Search elements
        this.searchInput = document.getElementById('searchInput');
        this.clearSearch = document.getElementById('clearSearch');
        this.searchResults = document.getElementById('searchResults');

        // Views
        this.categoriesView = document.getElementById('categoriesView');
        this.snippetsView = document.getElementById('snippetsView');
        this.snippetsList = document.getElementById('snippetsList');
        this.backBtn = document.getElementById('backBtn');
        this.currentCategoryLabel = document.getElementById('currentCategory');

        // Notification
        this.copyNotification = document.getElementById('copyNotification');

        // Settings modal
        this.settingsModal = document.getElementById('settingsModal');
        this.closeSettingsBtn = document.getElementById('closeSettingsBtn');

        // Settings tabs
        this.tabBtns = document.querySelectorAll('.tab-btn');
        this.categoriesTab = document.getElementById('categoriesTab');
        this.snippetsTab = document.getElementById('snippetsTab');
        this.importExportTab = document.getElementById('importExportTab');

        // Category management
        this.newCategoryName = document.getElementById('newCategoryName');
        this.newCategoryIcon = document.getElementById('newCategoryIcon');
        this.addCategoryBtn = document.getElementById('addCategoryBtn');
        this.categoriesList = document.getElementById('categoriesList');

        // Snippet management
        this.snippetCategory = document.getElementById('snippetCategory');
        this.newSnippetTitle = document.getElementById('newSnippetTitle');
        this.newSnippetText = document.getElementById('newSnippetText');
        this.addSnippetBtn = document.getElementById('addSnippetBtn');
        this.filterCategory = document.getElementById('filterCategory');
        this.allSnippetsList = document.getElementById('allSnippetsList');

        // Import/Export
        this.exportBtn = document.getElementById('exportBtn');
        this.importFile = document.getElementById('importFile');
        this.importBtn = document.getElementById('importBtn');
        this.resetBtn = document.getElementById('resetBtn');
    }

    // Bind all event listeners
    bindEvents() {
        // Bubble drag functionality
        this.bubble.addEventListener('mousedown', (e) => this.startDrag(e));
        document.addEventListener('mousemove', (e) => this.drag(e));
        document.addEventListener('mouseup', () => this.endDrag());

        // Touch support for mobile
        this.bubble.addEventListener('touchstart', (e) => this.startDrag(e));
        document.addEventListener('touchmove', (e) => this.drag(e));
        document.addEventListener('touchend', () => this.endDrag());

        // Bubble click to open panel
        this.bubble.addEventListener('click', (e) => {
            if (!this.wasDragged) {
                this.togglePanel();
            }
        });

        // Close panel
        this.closeBtn.addEventListener('click', () => this.closePanel());

        // Search functionality
        this.searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
        this.clearSearch.addEventListener('click', () => this.clearSearchInput());

        // Back button
        this.backBtn.addEventListener('click', () => this.showCategories());

        // Settings modal
        this.settingsBtn.addEventListener('click', () => this.openSettings());
        this.closeSettingsBtn.addEventListener('click', () => this.closeSettings());
        this.settingsModal.addEventListener('click', (e) => {
            if (e.target === this.settingsModal) this.closeSettings();
        });

        // Settings tabs
        this.tabBtns.forEach(btn => {
            btn.addEventListener('click', () => this.switchTab(btn.dataset.tab));
        });

        // Add category
        this.addCategoryBtn.addEventListener('click', () => this.addCategory());
        this.newCategoryName.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addCategory();
        });

        // Add snippet
        this.addSnippetBtn.addEventListener('click', () => this.addSnippet());

        // Filter snippets in settings
        this.filterCategory.addEventListener('change', () => this.updateSnippetsList());

        // Import/Export
        this.exportBtn.addEventListener('click', () => this.exportData());
        this.importBtn.addEventListener('click', () => this.importData());
        this.resetBtn.addEventListener('click', () => this.resetData());

        // Close panel when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.panel.classList.contains('hidden') &&
                !this.panel.contains(e.target) &&
                !this.bubble.contains(e.target) &&
                !this.settingsModal.contains(e.target)) {
                this.closePanel();
            }
        });

        // Keyboard shortcut to open/close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (!this.settingsModal.classList.contains('hidden')) {
                    this.closeSettings();
                } else if (!this.panel.classList.contains('hidden')) {
                    this.closePanel();
                }
            }
        });
    }

    // Data management
    loadData() {
        const saved = localStorage.getItem('inspectionBubbleData');
        if (saved) {
            return JSON.parse(saved);
        }
        return JSON.parse(JSON.stringify(DEFAULT_DATA));
    }

    saveData() {
        localStorage.setItem('inspectionBubbleData', JSON.stringify(this.data));
    }

    // Drag functionality
    startDrag(e) {
        e.preventDefault();
        this.isDragging = true;
        this.wasDragged = false;
        this.bubble.classList.add('dragging');

        const clientX = e.clientX || e.touches[0].clientX;
        const clientY = e.clientY || e.touches[0].clientY;
        const rect = this.bubble.getBoundingClientRect();

        this.dragOffset = {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
        this.startPos = { x: clientX, y: clientY };
    }

    drag(e) {
        if (!this.isDragging) return;

        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);

        if (clientX === undefined || clientY === undefined) return;

        // Check if actually dragged (more than 5px)
        const dx = Math.abs(clientX - this.startPos.x);
        const dy = Math.abs(clientY - this.startPos.y);
        if (dx > 5 || dy > 5) {
            this.wasDragged = true;
        }

        const x = clientX - this.dragOffset.x;
        const y = clientY - this.dragOffset.y;

        // Keep within viewport
        const maxX = window.innerWidth - this.bubble.offsetWidth;
        const maxY = window.innerHeight - this.bubble.offsetHeight;

        this.bubble.style.left = Math.max(0, Math.min(x, maxX)) + 'px';
        this.bubble.style.top = Math.max(0, Math.min(y, maxY)) + 'px';
        this.bubble.style.right = 'auto';
        this.bubble.style.bottom = 'auto';

        // Update panel position
        this.updatePanelPosition();
    }

    endDrag() {
        this.isDragging = false;
        this.bubble.classList.remove('dragging');
    }

    updatePanelPosition() {
        const bubbleRect = this.bubble.getBoundingClientRect();
        const panelWidth = 380;
        const panelHeight = 520;

        // Position panel above or below bubble
        let top = bubbleRect.top - panelHeight - 10;
        if (top < 10) {
            top = bubbleRect.bottom + 10;
        }

        // Position panel left or right of bubble
        let left = bubbleRect.left + bubbleRect.width / 2 - panelWidth / 2;
        left = Math.max(10, Math.min(left, window.innerWidth - panelWidth - 10));

        this.panel.style.top = top + 'px';
        this.panel.style.left = left + 'px';
        this.panel.style.right = 'auto';
        this.panel.style.bottom = 'auto';
    }

    // Panel functionality
    togglePanel() {
        if (this.panel.classList.contains('hidden')) {
            this.openPanel();
        } else {
            this.closePanel();
        }
    }

    openPanel() {
        this.updatePanelPosition();
        this.panel.classList.remove('hidden');
        this.searchInput.focus();
    }

    closePanel() {
        this.panel.classList.add('hidden');
        this.clearSearchInput();
        this.showCategories();
    }

    // Render categories
    renderCategories() {
        this.categoriesView.innerHTML = '';

        this.data.categories.forEach(category => {
            const snippetCount = this.data.snippets.filter(s => s.categoryId === category.id).length;

            const card = document.createElement('div');
            card.className = 'category-card';
            card.innerHTML = `
                <div class="icon">${category.icon}</div>
                <div class="name">${category.name}</div>
                <div class="count">${snippetCount} snippets</div>
            `;
            card.addEventListener('click', () => this.showSnippets(category));
            this.categoriesView.appendChild(card);
        });
    }

    // Show snippets for a category
    showSnippets(category) {
        this.currentCategory = category;
        this.currentCategoryLabel.textContent = category.name;

        this.categoriesView.classList.add('hidden');
        this.snippetsView.classList.remove('hidden');
        this.searchResults.classList.add('hidden');

        const snippets = this.data.snippets.filter(s => s.categoryId === category.id);
        this.renderSnippetsList(snippets, this.snippetsList);
    }

    // Show categories view
    showCategories() {
        this.currentCategory = null;
        this.snippetsView.classList.add('hidden');
        this.categoriesView.classList.remove('hidden');
        this.searchResults.classList.add('hidden');
    }

    // Render snippets list
    renderSnippetsList(snippets, container, showCategory = false) {
        container.innerHTML = '';

        if (snippets.length === 0) {
            container.innerHTML = '<div class="snippet-item"><div class="text">No snippets found</div></div>';
            return;
        }

        snippets.forEach(snippet => {
            const item = document.createElement('div');
            item.className = showCategory ? 'search-result-item' : 'snippet-item';

            if (showCategory) {
                const category = this.data.categories.find(c => c.id === snippet.categoryId);
                item.innerHTML = `
                    <div class="category-tag">${category ? category.icon + ' ' + category.name : 'Unknown'}</div>
                    <div class="title">${snippet.title}</div>
                    <div class="preview">${snippet.text}</div>
                `;
            } else {
                item.innerHTML = `
                    <div class="title">${snippet.title}</div>
                    <div class="text">${snippet.text}</div>
                `;
            }

            item.addEventListener('click', () => this.copySnippet(snippet));
            container.appendChild(item);
        });
    }

    // Copy snippet to clipboard
    async copySnippet(snippet) {
        try {
            await navigator.clipboard.writeText(snippet.text);
            this.showCopyNotification();
        } catch (err) {
            // Fallback for older browsers
            const textarea = document.createElement('textarea');
            textarea.value = snippet.text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            this.showCopyNotification();
        }
    }

    showCopyNotification() {
        this.copyNotification.classList.remove('hidden');
        setTimeout(() => {
            this.copyNotification.classList.add('hidden');
        }, 2000);
    }

    // Search functionality
    handleSearch(query) {
        query = query.trim().toLowerCase();

        if (query.length === 0) {
            this.clearSearch.classList.add('hidden');
            this.searchResults.classList.add('hidden');
            if (this.currentCategory) {
                this.snippetsView.classList.remove('hidden');
            } else {
                this.categoriesView.classList.remove('hidden');
            }
            return;
        }

        this.clearSearch.classList.remove('hidden');
        this.categoriesView.classList.add('hidden');
        this.snippetsView.classList.add('hidden');
        this.searchResults.classList.remove('hidden');

        const results = this.data.snippets.filter(snippet => {
            const titleMatch = snippet.title.toLowerCase().includes(query);
            const textMatch = snippet.text.toLowerCase().includes(query);
            const category = this.data.categories.find(c => c.id === snippet.categoryId);
            const categoryMatch = category && category.name.toLowerCase().includes(query);
            return titleMatch || textMatch || categoryMatch;
        });

        this.renderSnippetsList(results, this.searchResults, true);
    }

    clearSearchInput() {
        this.searchInput.value = '';
        this.handleSearch('');
        this.searchInput.focus();
    }

    // Settings functionality
    openSettings() {
        this.settingsModal.classList.remove('hidden');
        this.updateSettingsLists();
    }

    closeSettings() {
        this.settingsModal.classList.add('hidden');
    }

    switchTab(tabName) {
        this.tabBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabName);
        });

        this.categoriesTab.classList.toggle('hidden', tabName !== 'categories');
        this.snippetsTab.classList.toggle('hidden', tabName !== 'snippets');
        this.importExportTab.classList.toggle('hidden', tabName !== 'import-export');

        if (tabName === 'snippets') {
            this.updateCategorySelects();
        }
    }

    updateSettingsLists() {
        this.updateCategoriesList();
        this.updateCategorySelects();
        this.updateSnippetsList();
    }

    updateCategoriesList() {
        this.categoriesList.innerHTML = '';

        this.data.categories.forEach(category => {
            const snippetCount = this.data.snippets.filter(s => s.categoryId === category.id).length;

            const item = document.createElement('div');
            item.className = 'settings-item';
            item.innerHTML = `
                <div class="info">
                    <div class="name">${category.icon} ${category.name}</div>
                    <div class="preview">${snippetCount} snippets</div>
                </div>
                <div class="actions">
                    <button class="edit-btn" data-id="${category.id}">Edit</button>
                    <button class="delete-btn" data-id="${category.id}">Delete</button>
                </div>
            `;

            item.querySelector('.edit-btn').addEventListener('click', () => this.editCategory(category));
            item.querySelector('.delete-btn').addEventListener('click', () => this.deleteCategory(category.id));

            this.categoriesList.appendChild(item);
        });
    }

    updateCategorySelects() {
        const options = this.data.categories.map(c =>
            `<option value="${c.id}">${c.icon} ${c.name}</option>`
        ).join('');

        this.snippetCategory.innerHTML = '<option value="">Select category...</option>' + options;
        this.filterCategory.innerHTML = '<option value="">All categories</option>' + options;
    }

    updateSnippetsList() {
        const filterValue = this.filterCategory.value;
        let snippets = this.data.snippets;

        if (filterValue) {
            snippets = snippets.filter(s => s.categoryId === filterValue);
        }

        this.allSnippetsList.innerHTML = '';

        snippets.forEach(snippet => {
            const category = this.data.categories.find(c => c.id === snippet.categoryId);

            const item = document.createElement('div');
            item.className = 'settings-item';
            item.innerHTML = `
                <div class="info">
                    <div class="name">
                        ${snippet.title}
                        <span class="category-badge">${category ? category.icon + ' ' + category.name : 'Unknown'}</span>
                    </div>
                    <div class="preview">${snippet.text}</div>
                </div>
                <div class="actions">
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </div>
            `;

            item.querySelector('.edit-btn').addEventListener('click', () => this.editSnippet(snippet));
            item.querySelector('.delete-btn').addEventListener('click', () => this.deleteSnippet(snippet.id));

            this.allSnippetsList.appendChild(item);
        });
    }

    // Category management
    addCategory() {
        const name = this.newCategoryName.value.trim();
        if (!name) {
            alert('Please enter a category name');
            return;
        }

        const icon = this.newCategoryIcon.value.trim() || '📁';
        const id = name.toLowerCase().replace(/[^a-z0-9]/g, '-') + '-' + Date.now();

        this.data.categories.push({ id, name, icon });
        this.saveData();

        this.newCategoryName.value = '';
        this.newCategoryIcon.value = '';

        this.renderCategories();
        this.updateSettingsLists();
    }

    editCategory(category) {
        const newName = prompt('Edit category name:', category.name);
        if (newName === null) return;

        const newIcon = prompt('Edit category icon (emoji):', category.icon);
        if (newIcon === null) return;

        category.name = newName.trim() || category.name;
        category.icon = newIcon.trim() || category.icon;

        this.saveData();
        this.renderCategories();
        this.updateSettingsLists();
    }

    deleteCategory(categoryId) {
        const snippetCount = this.data.snippets.filter(s => s.categoryId === categoryId).length;

        if (!confirm(`Delete this category? ${snippetCount > 0 ? `This will also delete ${snippetCount} snippet(s).` : ''}`)) {
            return;
        }

        this.data.categories = this.data.categories.filter(c => c.id !== categoryId);
        this.data.snippets = this.data.snippets.filter(s => s.categoryId !== categoryId);

        this.saveData();
        this.renderCategories();
        this.updateSettingsLists();
    }

    // Snippet management
    addSnippet() {
        const categoryId = this.snippetCategory.value;
        const title = this.newSnippetTitle.value.trim();
        const text = this.newSnippetText.value.trim();

        if (!categoryId) {
            alert('Please select a category');
            return;
        }
        if (!title) {
            alert('Please enter a snippet title');
            return;
        }
        if (!text) {
            alert('Please enter snippet text');
            return;
        }

        const id = Date.now();
        this.data.snippets.push({ id, categoryId, title, text });
        this.saveData();

        this.snippetCategory.value = '';
        this.newSnippetTitle.value = '';
        this.newSnippetText.value = '';

        this.renderCategories();
        this.updateSnippetsList();
    }

    editSnippet(snippet) {
        const newTitle = prompt('Edit snippet title:', snippet.title);
        if (newTitle === null) return;

        const newText = prompt('Edit snippet text:', snippet.text);
        if (newText === null) return;

        snippet.title = newTitle.trim() || snippet.title;
        snippet.text = newText.trim() || snippet.text;

        this.saveData();
        this.updateSnippetsList();
    }

    deleteSnippet(snippetId) {
        if (!confirm('Delete this snippet?')) return;

        this.data.snippets = this.data.snippets.filter(s => s.id !== snippetId);
        this.saveData();
        this.renderCategories();
        this.updateSnippetsList();
    }

    // Import/Export
    exportData() {
        const dataStr = JSON.stringify(this.data, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'inspection-bubble-data.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    importData() {
        const file = this.importFile.files[0];
        if (!file) {
            alert('Please select a file to import');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);

                // Validate structure
                if (!importedData.categories || !importedData.snippets) {
                    throw new Error('Invalid data structure');
                }

                // Merge with existing data
                importedData.categories.forEach(cat => {
                    if (!this.data.categories.find(c => c.id === cat.id)) {
                        this.data.categories.push(cat);
                    }
                });

                importedData.snippets.forEach(snip => {
                    if (!this.data.snippets.find(s => s.id === snip.id)) {
                        this.data.snippets.push(snip);
                    }
                });

                this.saveData();
                this.renderCategories();
                this.updateSettingsLists();

                alert('Data imported successfully!');
                this.importFile.value = '';
            } catch (err) {
                alert('Error importing data: ' + err.message);
            }
        };
        reader.readAsText(file);
    }

    resetData() {
        if (!confirm('Are you sure you want to reset all data? This cannot be undone.')) {
            return;
        }

        this.data = JSON.parse(JSON.stringify(DEFAULT_DATA));
        this.saveData();
        this.renderCategories();
        this.updateSettingsLists();

        alert('Data has been reset to defaults.');
    }
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.inspectionBubble = new InspectionBubble();
});
