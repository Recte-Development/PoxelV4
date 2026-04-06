import { config } from './config.js';

// ── Catppuccin Mocha palette ──────────────────────────────────────────────────
const M = {
    base:     '#1e1e2e', mantle:   '#181825', crust:    '#11111b',
    surface0: '#313244', surface1: '#45475a', surface2: '#585b70',
    overlay0: '#6c7086', overlay1: '#7f849c', overlay2: '#9399b2',
    subtext0: '#a6adc8', subtext1: '#bac2de', text:     '#cdd6f4',
    lavender: '#b4befe', blue:     '#89b4fa', sapphire: '#74c7ec',
    sky:      '#89dceb', teal:     '#94e2d5', green:    '#a6e3a1',
    yellow:   '#f9e2af', peach:    '#fab387', maroon:   '#eba0ac',
    red:      '#f38ba8', mauve:    '#cba6f7', pink:     '#f5c2e7',
};

// Primary accent — use Catppuccin blue to mirror Neverlose's cyan/blue
const ACC   = M.blue;      // #89b4fa
const ACC_D = '#5a9ef8';   // darker shade for filled track etc.

function deepmerge(target, source) {
    for (const key in source) {
        if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
            if (!target[key]) target[key] = {};
            deepmerge(target[key], source[key]);
        } else { target[key] = source[key]; }
    }
    return target;
}

export function allowTypingInLilGuiInputs() {
    const allow = e => {
        const el = e.target;
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable)
            e.stopImmediatePropagation();
    };
    ['keydown','keypress','keyup'].forEach(n => window.addEventListener(n, allow, true));
    document.body.addEventListener('pointerdown', e => {
        if (e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA'||e.target.isContentEditable)
            e.stopImmediatePropagation();
    }, true);
}

// ─────────────────────────────────────────────────────────────────────────────
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
    /* Neverlose-style mapping onto Mocha */
    --bg-deep:    #0d0d12;          /* sidebar */
    --bg-panel:   #13131a;          /* main area */
    --bg-card:    #1a1a24;          /* section cards */
    --bg-row:     #1f1f2c;          /* row hover / input bg */
    --border:     rgba(255,255,255,0.06);
    --border-h:   rgba(255,255,255,0.10);
    --text:       ${M.text};
    --sub:        ${M.subtext0};
    --muted:      ${M.overlay1};
    --acc:        ${ACC};
    --acc-glow:   rgba(137,180,250,0.25);
    --acc-faint:  rgba(137,180,250,0.10);
    --green:      ${M.green};
    --red:        ${M.red};
    --yellow:     ${M.yellow};
    --ui: 'Inter', sans-serif;
    --radius: 8px;
}

* { margin:0; padding:0; box-sizing:border-box; }
body { user-select:none; overflow:hidden; }

/* ─── Menu shell ─── */
.recte-menu {
    width: 750px;
    height: 520px;
    min-width: 600px;
    background: var(--bg-deep);
    border-radius: 12px;
    display: none;
    flex-direction: column;
    overflow: hidden;
    position: fixed;
    top: 50%; left: 50%;
    transform: translate(-50%,-50%);
    z-index: 99999;
    font-family: var(--ui);
    border: 1px solid var(--border);
    box-shadow:
        0 0 0 1px rgba(0,0,0,0.5),
        0 32px 100px rgba(0,0,0,0.9),
        0 0 80px rgba(137,180,250,0.03);
}

/* ─── Top bar ─── */
.recte-top {
    height: 52px;
    background: var(--bg-deep);
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    padding: 0 20px;
    gap: 12px;
    cursor: grab;
    flex-shrink: 0;
    position: relative;
}
.recte-top:active { cursor: grabbing; }

/* Big bold logo — mirrors "NEVERLOSE" */
.recte-logo {
    font-size: 15px;
    font-weight: 800;
    color: var(--text);
    letter-spacing: 0.5px;
    flex-shrink: 0;
    user-select: none;
    display: flex;
    align-items: center;
    gap: 8px;
}
.recte-logo-icon {
    width: 18px; height: 18px;
    background: url("https://recte.cc/imgs/recte_logo.png") center/contain no-repeat;
    opacity: 0.9;
}

/* Config preset selector (like the "Global" dropdown) */
.recte-config-select {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 6px;
    color: var(--text);
    font-family: var(--ui);
    font-size: 13px;
    font-weight: 500;
    padding: 5px 10px 5px 10px;
    cursor: pointer;
    outline: none;
    transition: border-color 0.15s;
    margin-left: 4px;
}
.recte-config-select:focus { border-color: var(--acc); }

/* Top-right icon buttons */
.recte-top-actions {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 4px;
}
.recte-top-btn {
    width: 32px; height: 32px;
    background: transparent;
    border: 1px solid var(--border);
    border-radius: 6px;
    color: var(--muted);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.15s;
}
.recte-top-btn:hover {
    background: var(--bg-card);
    border-color: var(--border-h);
    color: var(--text);
}
.recte-top-btn:active { transform: scale(0.93); }

/* Save button — filled like Neverlose */
.recte-save-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    background: var(--acc-faint);
    border: 1px solid rgba(137,180,250,0.2);
    border-radius: 6px;
    color: var(--acc);
    font-family: var(--ui);
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.15s;
    flex-shrink: 0;
}
.recte-save-btn:hover {
    background: rgba(137,180,250,0.18);
    border-color: var(--acc);
}
.recte-save-btn:active { transform: scale(0.97); }

/* ─── Main layout ─── */
.recte-main { flex:1; display:flex; overflow:hidden; min-height:0; }

/* ─── Sidebar ─── */
.recte-sidebar {
    width: 180px;
    background: var(--bg-deep);
    border-right: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    padding: 14px 0;
    flex-shrink: 0;
    overflow-y: auto;
    scrollbar-width: none;
}
.recte-sidebar::-webkit-scrollbar { display:none; }

/* Category group label — "Aimbot", "Visuals", etc. */
.recte-sidebar-group {
    font-size: 10px;
    font-weight: 600;
    color: var(--muted);
    letter-spacing: 0.8px;
    text-transform: uppercase;
    padding: 10px 16px 5px;
    opacity: 0.7;
}

.recte-tab {
    padding: 8px 16px;
    display: flex;
    align-items: center;
    gap: 11px;
    font-size: 13.5px;
    font-weight: 500;
    color: var(--sub);
    cursor: pointer;
    transition: color 0.15s, background 0.15s;
    border-radius: 0;
    position: relative;
    user-select: none;
}
.recte-tab:hover:not(.active) {
    color: var(--text);
    background: rgba(255,255,255,0.03);
}
.recte-tab.active {
    color: var(--acc);
    background: rgba(137,180,250,0.08);
}
/* Left accent bar on active */
.recte-tab.active::before {
    content: '';
    position: absolute;
    left: 0; top: 20%; bottom: 20%;
    width: 2.5px;
    background: var(--acc);
    border-radius: 0 2px 2px 0;
}
.recte-tab-icon {
    width: 16px; height: 16px;
    opacity: 0.6;
    flex-shrink: 0;
    font-size: 13px;
    display: flex; align-items: center; justify-content: center;
}
.recte-tab.active .recte-tab-icon { opacity: 1; color: var(--acc); }

/* Bottom user info strip */
.recte-sidebar-footer {
    margin-top: auto;
    padding: 12px 14px;
    border-top: 1px solid var(--border);
    display: flex;
    align-items: center;
    gap: 9px;
}
.recte-avatar {
    width: 30px; height: 30px;
    border-radius: 50%;
    background: var(--bg-card);
    border: 2px solid var(--border);
    flex-shrink: 0;
    overflow: hidden;
    display: flex; align-items: center; justify-content: center;
    font-size: 14px;
}
.recte-user-info { min-width: 0; }
.recte-user-name { font-size: 13px; font-weight: 600; color: var(--text); }
.recte-user-sub { font-size: 11px; color: var(--acc); margin-top: 1px; }

/* ─── Panels ─── */
.recte-panels { flex:1; display:flex; flex-direction:column; overflow:hidden; background: var(--bg-panel); }
.recte-panel {
    flex:1; padding:16px 18px;
    overflow-y:auto; display:none;
    scrollbar-width: thin;
    scrollbar-color: rgba(255,255,255,0.07) transparent;
}
.recte-panel::-webkit-scrollbar { width:4px; }
.recte-panel::-webkit-scrollbar-track { background:transparent; }
.recte-panel::-webkit-scrollbar-thumb { background:rgba(255,255,255,0.07); border-radius:2px; }
.recte-panel.active { display:block; }

/* Multi-column grid layout — like Neverlose's two-column card layout */
.recte-panel-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    align-items: start;
}
.recte-panel-grid .recte-section { margin-bottom: 0; }

/* ─── Section / Card ─── */
.recte-section {
    margin-bottom: 10px;
}
.recte-section-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
}
.recte-section-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--text);
    padding: 11px 14px 10px;
    border-bottom: 1px solid var(--border);
    letter-spacing: 0.1px;
}
.recte-section-body { padding: 6px 0; }

/* ─── Rows ─── */
.recte-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 14px;
    gap: 10px;
    font-size: 13px;
    font-weight: 500;
    color: var(--sub);
    transition: background 0.12s;
    cursor: default;
}
.recte-row:hover { background: rgba(255,255,255,0.025); }
.recte-row-label { color: var(--sub); font-size: 13px; white-space: nowrap; flex-shrink: 0; }

/* ─── Toggle — round, blue like Neverlose ─── */
.rectetoggle {
    position: relative; width: 36px; height: 20px; flex-shrink:0;
}
.rectetoggle input { opacity:0; width:0; height:0; }
.recteslider {
    position: absolute; inset:0;
    background: var(--bg-row);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 20px;
    transition: 0.2s;
    cursor: pointer;
}
.recteslider::before {
    content:''; position:absolute;
    width:14px; height:14px;
    left:2px; top:2px;
    background: var(--muted);
    border-radius: 50%;
    transition: 0.2s;
    box-shadow: 0 1px 3px rgba(0,0,0,0.4);
}
input:checked + .recteslider {
    background: var(--acc);
    border-color: var(--acc);
    box-shadow: 0 0 10px var(--acc-glow);
}
input:checked + .recteslider::before {
    transform: translateX(16px);
    background: #fff;
}

/* ─── Range slider with filled track ─── */
.recte-slider-wrap {
    display: flex; align-items: center; gap: 10px; flex:1;
}
.recterange {
    flex: 1;
    height: 4px;
    outline: none; cursor: pointer;
    -webkit-appearance: none;
    border-radius: 2px;
    /* filled track is done via background set in JS */
    background: var(--bg-row);
}
.recterange::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 14px; height: 14px;
    background: var(--acc);
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 0 3px rgba(137,180,250,0.2);
    transition: box-shadow 0.15s, transform 0.1s;
}
.recterange::-webkit-slider-thumb:hover {
    box-shadow: 0 0 0 5px var(--acc-glow);
}
.recterange::-moz-range-thumb {
    width:14px; height:14px; background:var(--acc); border-radius:50%; border:none;
}
.recte-range-val {
    font-family: var(--ui);
    font-size: 12px;
    font-weight: 600;
    color: var(--muted);
    min-width: 30px;
    text-align: right;
    flex-shrink: 0;
}

/* ─── Number box ─── */
input.recte-numbox {
    width: 48px; text-align: right;
    border: 1px solid var(--border);
    border-radius: 5px;
    padding: 3px 6px;
    background: var(--bg-row);
    color: var(--text);
    font-family: var(--ui); font-size: 12px; font-weight: 600;
    outline: none;
    -webkit-appearance: textfield; -moz-appearance: textfield; appearance: textfield;
    transition: border-color 0.12s;
}
input.recte-numbox:focus { border-color: var(--acc); }
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button { -webkit-appearance:none; margin:0; }

/* ─── Text input ─── */
input.recte-textinput {
    flex:1; background: var(--bg-row);
    border: 1px solid var(--border);
    border-radius: 5px;
    padding: 5px 9px;
    color: var(--text);
    font-family: var(--ui); font-size: 13px;
    outline: none;
    transition: border-color 0.15s;
}
input.recte-textinput:focus { border-color: var(--acc); }
input.recte-textinput::placeholder { color: var(--muted); }

/* ─── Select ─── */
select.recte-select {
    background: var(--bg-row);
    border: 1px solid var(--border);
    color: var(--text);
    padding: 5px 9px;
    border-radius: 5px;
    font-family: var(--ui); font-size: 13px; font-weight: 500;
    cursor: pointer; outline: none;
    transition: border-color 0.15s;
}
select.recte-select:focus { border-color: var(--acc); }
select.recte-select:hover { border-color: var(--border-h); }

/* ─── Button ─── */
.recte-btn {
    padding: 5px 13px;
    background: var(--acc-faint);
    border: 1px solid rgba(137,180,250,0.15);
    border-radius: 5px;
    cursor: pointer;
    color: var(--acc);
    font-family: var(--ui); font-size: 12.5px; font-weight: 600;
    transition: all 0.15s;
    user-select: none; white-space: nowrap;
}
.recte-btn:hover { background: rgba(137,180,250,0.16); border-color: var(--acc); }
.recte-btn:active { transform: scale(0.97); }

/* ─── Player list ─── */
.recte-player-row {
    display: flex; align-items: center;
    padding: 6px 14px; gap: 8px;
    transition: background 0.12s;
    flex-wrap: wrap;
}
.recte-player-row:hover { background: rgba(255,255,255,0.025); }
.recte-player-name { font-size: 13px; font-weight: 600; color: var(--text); flex:1; }
.recte-player-btn {
    padding: 4px 10px;
    background: transparent;
    border: 1px solid var(--border);
    border-radius: 5px;
    cursor: pointer;
    color: var(--sub);
    font-family: var(--ui); font-size: 12px; font-weight: 500;
    transition: all 0.12s; user-select: none;
}
.recte-player-btn:hover { background: var(--acc-faint); border-color: var(--acc); color: var(--acc); }
.recte-player-btn:active { transform: scale(0.96); }

/* ─── Color swatch ─── */
.recte-color-swatch {
    width: 20px; height: 20px;
    border-radius: 4px;
    border: 1px solid rgba(255,255,255,0.15);
    cursor: pointer;
    transition: border-color 0.15s, transform 0.12s;
    flex-shrink: 0;
}
.recte-color-swatch:hover { border-color: var(--acc); transform: scale(1.1); }
`;

// ─────────────────────────────────────────────────────────────────────────────
export class UiMain {
    constructor(name, version) {
        this.tabs = [];
        this.playerRows = new Map();
        this.bindings = [];
        this._groups = {}; // sidebar group tracking
        this.init(name, version);
    }

    init(name, version) {
        const style = document.createElement('style');
        style.textContent = CSS;
        document.head.appendChild(style);

        const menu = document.createElement('div');
        menu.className = 'recte-menu';
        menu.innerHTML = `
            <div class="recte-top">
                <div class="recte-logo">
                    <div class="recte-logo-icon"></div>
                    <span>Recte</span>
                </div>
                <button class="recte-save-btn">
                    <span>💾</span> Save
                </button>
                <div class="recte-top-actions">
                    <button class="recte-top-btn" title="Settings">⚙</button>
                    <button class="recte-top-btn" title="Delete config">🗑</button>
                </div>
            </div>
            <div class="recte-main">
                <div class="recte-sidebar">
                    <div class="recte-sidebar-inner"></div>
                    <div class="recte-sidebar-footer">
                        <div class="recte-avatar">👤</div>
                        <div class="recte-user-info">
                            <div class="recte-user-name">${name}</div>
                            <div class="recte-user-sub">v${version}</div>
                        </div>
                    </div>
                </div>
                <div class="recte-panels"></div>
            </div>
        `;
        document.body.appendChild(menu);

        this.menu = menu;
        this.sidebar = menu.querySelector('.recte-sidebar-inner');
        this.panelsContainer = menu.querySelector('.recte-panels');

        // Drag
        const topBar = menu.querySelector('.recte-top');
        let dragging = false, ox = 0, oy = 0;
        topBar.addEventListener('mousedown', e => {
            if (e.target.closest('button, select, input')) return;
            dragging = true;
            if (!this._placed) {
                const r = menu.getBoundingClientRect();
                menu.style.left = r.left + 'px';
                menu.style.top = r.top + 'px';
                menu.style.transform = 'none';
                this._placed = true;
            }
            const r = menu.getBoundingClientRect();
            ox = e.clientX - r.left;
            oy = e.clientY - r.top;
        });
        document.addEventListener('mouseup', () => dragging = false);
        document.addEventListener('mousemove', e => {
            if (!dragging) return;
            menu.style.left = (e.clientX - ox) + 'px';
            menu.style.top  = (e.clientY - oy) + 'px';
        });

        // Config
        const saved = localStorage.getItem('recte_config');
        if (saved) { try { deepmerge(config, JSON.parse(saved)); } catch(e) {} }

        menu.querySelector('.recte-save-btn').addEventListener('click', () => {
            try { localStorage.setItem('recte_config', JSON.stringify(config)); } catch(e) {}
        });
        menu.querySelectorAll('.recte-top-btn')[1].addEventListener('click', () =>
            localStorage.removeItem('recte_config'));
    }

    applyScrollFix(panel) {
        panel.addEventListener('wheel', e => {
            const before = panel.scrollTop;
            panel.scrollTop += e.deltaY;
            if (panel.scrollTop !== before) { e.preventDefault(); e.stopPropagation(); }
        }, { passive: false });
    }

    togglevis() {
        const hidden = window.getComputedStyle(this.menu).display === 'none';
        this.menu.style.display = hidden ? 'flex' : 'none';
    }

    /**
     * addTab(name, cb)              — no icon, no group
     * addTab(name, icon, cb)        — with icon emoji/text, no group
     * addTab(name, icon, group, cb) — with icon and sidebar group label
     */
    addTab(name, a, b, c) {
        let icon = '', group = '', panelCallback;
        if (typeof a === 'function') { panelCallback = a; }
        else if (typeof a === 'string' && typeof b === 'function') { icon = a; panelCallback = b; }
        else if (typeof a === 'string' && typeof b === 'string' && typeof c === 'function') { icon = a; group = b; panelCallback = c; }

        // Optionally render group label if not already shown
        if (group && !this._groups[group]) {
            this._groups[group] = true;
            const lbl = document.createElement('div');
            lbl.className = 'recte-sidebar-group';
            lbl.textContent = group;
            this.sidebar.appendChild(lbl);
        }

        const tab = document.createElement('div');
        tab.className = 'recte-tab';
        tab.innerHTML = `
            <span class="recte-tab-icon">${icon}</span>
            <span>${name}</span>
        `;
        this.sidebar.appendChild(tab);

        const panel = document.createElement('div');
        panel.className = 'recte-panel';
        this.applyScrollFix(panel);
        this.panelsContainer.appendChild(panel);

        tab.addEventListener('click', () => {
            this.tabs.forEach(t => { t.tab.classList.remove('active'); t.panel.classList.remove('active'); });
            tab.classList.add('active'); panel.classList.add('active');
        });
        if (this.tabs.length === 0) { tab.classList.add('active'); panel.classList.add('active'); }

        const obj = { tab, panel };
        this.tabs.push(obj);
        if (panelCallback) panelCallback(panel);
        return obj;
    }

    /**
     * Creates a CSS-grid two-column wrapper inside a panel.
     * Pass it as the "parent" to addSection() for side-by-side cards.
     */
    addPanelGrid(panel) {
        const grid = document.createElement('div');
        grid.className = 'recte-panel-grid';
        panel.appendChild(grid);
        return grid;
    }

    /**
     * addSection(parent, name)
     * parent can be a panel or a grid.
     * Returns the inner body element — pass this to addToggleRow etc.
     */
    addSection(parent, name) {
        const section = document.createElement('div');
        section.className = 'recte-section';

        const card = document.createElement('div');
        card.className = 'recte-section-card';

        const title = document.createElement('div');
        title.className = 'recte-section-title';
        title.textContent = name;

        const body = document.createElement('div');
        body.className = 'recte-section-body';

        card.appendChild(title);
        card.appendChild(body);
        section.appendChild(card);
        parent.appendChild(section);

        // Return body so rows go inside it
        // But also expose section for layout purposes
        body._section = section;
        return body;
    }

    syncUI() { for (const fn of this.bindings) fn(); }

    _row(label) {
        const row = document.createElement('div');
        row.className = 'recte-row';
        const lbl = document.createElement('span');
        lbl.className = 'recte-row-label';
        lbl.textContent = label;
        row.appendChild(lbl);
        return row;
    }

    addTextRow(section, label, obj, key, placeholder = '') {
        const row = this._row(label);
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'recte-textinput';
        input.value = obj[key] ?? '';
        input.placeholder = placeholder;
        input.addEventListener('input', e => obj[key] = e.target.value);
        ['keydown','keypress','keyup'].forEach(ev => input.addEventListener(ev, e => e.stopImmediatePropagation()));
        input.addEventListener('pointerdown', e => e.stopImmediatePropagation());
        this.bindings.push(() => { input.value = obj[key] ?? ''; });
        row.appendChild(input);
        section.appendChild(row);
        return row;
    }

    addToggleRow(section, label, obj, key, onTrue = null) {
        const row = this._row(label);
        const toggle = document.createElement('label');
        toggle.className = 'rectetoggle';
        toggle.innerHTML = `<input type="checkbox" ${obj[key] ? 'checked' : ''}><span class="recteslider"></span>`;
        const input = toggle.querySelector('input');
        input.addEventListener('change', e => {
            obj[key] = e.target.checked;
            if (e.target.checked && typeof onTrue === 'function') onTrue(obj, key);
        });
        this.bindings.push(() => { input.checked = !!obj[key]; });
        row.appendChild(toggle);
        section.appendChild(row);
        return row;
    }

    _updateSliderFill(slider) {
        const min = parseFloat(slider.min) || 0;
        const max = parseFloat(slider.max) || 100;
        const val = parseFloat(slider.value);
        const pct = ((val - min) / (max - min)) * 100;
        // Use setProperty so inline style always wins over the stylesheet rule,
        // eliminating the "track lags behind thumb" race condition.
        slider.style.setProperty('background',
            `linear-gradient(to right, ${ACC} 0%, ${ACC} ${pct}%, #1f1f2c ${pct}%, #1f1f2c 100%)`,
            'important');
    }

    addSliderRow(section, label, obj, key, min, max, step) {
        const row = this._row(label);

        let val = parseFloat(obj[key]);
        if (isNaN(val)) val = min;
        val = Math.max(min, Math.min(max, val));
        obj[key] = val;

        const wrap = document.createElement('div');
        wrap.className = 'recte-slider-wrap';

        const slider = document.createElement('input');
        slider.type = 'range';
        slider.className = 'recterange';
        slider.min = min; slider.max = max; slider.step = step; slider.value = val;

        const valLabel = document.createElement('span');
        valLabel.className = 'recte-range-val';
        valLabel.textContent = val;

        // Immediate fill + deferred fill after layout so flex sizing is resolved
        this._updateSliderFill(slider);
        requestAnimationFrame(() => this._updateSliderFill(slider));

        slider.addEventListener('input', e => {
            const v = parseFloat(e.target.value);
            obj[key] = v;
            valLabel.textContent = v;
            this._updateSliderFill(slider);
        });

        wrap.appendChild(slider);
        wrap.appendChild(valLabel);
        row.appendChild(wrap);
        section.appendChild(row);
        return row;
    }

    addSelectRow(section, label, options, obj, key) {
        const row = this._row(label);
        const sel = document.createElement('select');
        sel.className = 'recte-select';
        options.forEach(o => {
            const opt = document.createElement('option');
            opt.value = o; opt.textContent = o;
            if (obj[key] === o) opt.selected = true;
            sel.appendChild(opt);
        });
        sel.addEventListener('change', e => obj[key] = e.target.value);
        row.appendChild(sel);
        section.appendChild(row);
        return row;
    }

    addButton(section, label, obj, key, callback) {
        const row = this._row(label);
        const btn = document.createElement('div');
        btn.className = 'recte-btn';
        btn.textContent = obj[key] ?? label;
        btn.addEventListener('click', () => { if (callback) callback(obj, key, btn); });
        row.appendChild(btn);
        section.appendChild(row);
        return row;
    }

    /* ── Player list ── */
    addplayerlist(section, player, callback) {
        let row;
        if (this.playerRows.has(player.sessionId)) {
            row = this.playerRows.get(player.sessionId);
        } else {
            row = document.createElement('div');
            row.className = 'recte-player-row';

            const name = document.createElement('span');
            name.className = 'recte-player-name';
            name.textContent = player.name;
            row.appendChild(name);

            const wrap = document.createElement('div');
            wrap.style.cssText = 'display:flex;gap:5px;flex-wrap:wrap;margin-top:2px;';
            ['Godmode','Kill','TP To'].forEach(lbl => {
                const btn = document.createElement('div');
                btn.className = 'recte-player-btn';
                btn.textContent = lbl;
                if (typeof callback === 'function')
                    btn.addEventListener('click', () => callback(player, lbl, btn));
                wrap.appendChild(btn);
            });
            row.appendChild(wrap);
            section.appendChild(row);
            this.playerRows.set(player.sessionId, row);
        }

        if (player.status === 'dead') {
            row.style.opacity = '0.35';
            row.style.textDecoration = 'line-through';
            row.querySelectorAll('.recte-player-btn').forEach(b => b.style.pointerEvents = 'none');
        } else {
            row.style.opacity = '1';
            row.style.textDecoration = '';
            row.querySelectorAll('.recte-player-btn').forEach(b => b.style.pointerEvents = 'auto');
        }
        return row;
    }

    updatePlayerList(section, players, callback) {
        const existing = new Set(this.playerRows.keys());
        players.forEach(p => { this.addplayerlist(section, p, callback); existing.delete(p.sessionId); });
        existing.forEach(id => {
            const row = this.playerRows.get(id);
            if (row) section.removeChild(row);
            this.playerRows.delete(id);
        });
    }

    /* ── Color Picker ── */
    openColorPicker(targetEl, obj, key, initialColor, onUpdate = null) {
        document.querySelectorAll('.recte-picker').forEach(p => p.remove());

        // ── Fixed internal dimensions — no layout dependency ──────────────────
        const CW = 204, CH = 136;   // canvas pixel size (also its CSS size)
        const BAR_W = 204;          // inner width of hue/alpha bars in px
        //   popup padding = 12px each side → inner content = 228 - 24 = 204px

        const popup = document.createElement('div');
        popup.className = 'recte-picker';
        Object.assign(popup.style, {
            position: 'fixed',           // fixed so scrollY/X offsets don't matter
            width: '228px', padding: '12px',
            background: '#13131a',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '10px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.85)',
            zIndex: '100001',
        });

        // Position relative to swatch using fixed coords
        const sr = targetEl.getBoundingClientRect();
        popup.style.top  = (sr.bottom + 6) + 'px';
        popup.style.left = sr.left + 'px';

        // ── Canvas ───────────────────────────────────────────────────────────
        const canvas = document.createElement('canvas');
        canvas.width = CW; canvas.height = CH;
        Object.assign(canvas.style, {
            display: 'block', width: CW+'px', height: CH+'px',
            cursor: 'crosshair', borderRadius: '6px',
            border: '1px solid rgba(255,255,255,0.06)', marginBottom: '10px',
        });
        popup.appendChild(canvas);
        const ctx = canvas.getContext('2d');

        // ── Hue bar ──────────────────────────────────────────────────────────
        const hueBar = document.createElement('div');
        Object.assign(hueBar.style, {
            position: 'relative', height: '10px', borderRadius: '5px',
            background: 'linear-gradient(to right,red,yellow,lime,cyan,blue,magenta,red)',
            cursor: 'pointer', marginBottom: '8px', userSelect: 'none',
        });
        const hueHandle = document.createElement('div');
        Object.assign(hueHandle.style, {
            width: '14px', height: '14px', position: 'absolute', top: '-2px',
            background: '#fff', borderRadius: '50%', border: `2px solid ${ACC}`,
            boxShadow: '0 1px 4px rgba(0,0,0,0.5)', pointerEvents: 'none',
            marginLeft: '-7px',   // centre the handle over its left position
        });
        hueBar.appendChild(hueHandle);
        popup.appendChild(hueBar);

        // ── Alpha bar ────────────────────────────────────────────────────────
        const alphaBar = document.createElement('div');
        Object.assign(alphaBar.style, {
            position: 'relative', height: '10px', borderRadius: '5px',
            cursor: 'pointer', userSelect: 'none',
            background: 'linear-gradient(to right, rgba(137,180,250,0), rgba(137,180,250,1))',
            border: '1px solid rgba(255,255,255,0.06)',
        });
        const alphaHandle = document.createElement('div');
        Object.assign(alphaHandle.style, {
            width: '14px', height: '14px', position: 'absolute', top: '-2px',
            background: '#fff', borderRadius: '50%', border: `2px solid ${ACC}`,
            boxShadow: '0 1px 4px rgba(0,0,0,0.5)', pointerEvents: 'none',
            marginLeft: '-7px',
        });
        alphaBar.appendChild(alphaHandle);
        popup.appendChild(alphaBar);

        document.body.appendChild(popup);

        // ── State ─────────────────────────────────────────────────────────────
        let hue = 0, alpha = 1;
        let indX = 0, indY = 0;   // canvas-pixel coords of the SV indicator

        // ── Helpers ───────────────────────────────────────────────────────────
        function hsvToRgb(h, s, v) {
            const f = (n, k = (n + h/60) % 6) => v - v*s*Math.max(Math.min(k, 4-k, 1), 0);
            return [Math.round(f(5)*255), Math.round(f(3)*255), Math.round(f(1)*255)];
        }

        function colorToRGB(str) {
            // parse any CSS color string → [r,g,b,a]
            const tmp = document.createElement('canvas');
            tmp.width = tmp.height = 1;
            const c = tmp.getContext('2d');
            c.fillStyle = (str && str !== 'none') ? str : '#ffffff';
            c.fillRect(0,0,1,1);
            const [r,g,b,a] = c.getImageData(0,0,1,1).data;
            return [r, g, b, a/255];
        }

        function drawCanvas() {
            // Base hue
            ctx.fillStyle = `hsl(${hue},100%,50%)`;
            ctx.fillRect(0, 0, CW, CH);
            // White gradient left→right (saturation)
            const wg = ctx.createLinearGradient(0,0,CW,0);
            wg.addColorStop(0,'rgba(255,255,255,1)');
            wg.addColorStop(1,'rgba(255,255,255,0)');
            ctx.fillStyle = wg; ctx.fillRect(0,0,CW,CH);
            // Black gradient top→bottom (value)
            const bg = ctx.createLinearGradient(0,0,0,CH);
            bg.addColorStop(0,'rgba(0,0,0,0)');
            bg.addColorStop(1,'rgba(0,0,0,1)');
            ctx.fillStyle = bg; ctx.fillRect(0,0,CW,CH);
            // SV indicator ring
            ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.arc(indX, indY, 6, 0, Math.PI*2); ctx.stroke();
            ctx.strokeStyle = 'rgba(0,0,0,0.35)'; ctx.lineWidth = 1;
            ctx.beginPath(); ctx.arc(indX, indY, 7.5, 0, Math.PI*2); ctx.stroke();
        }

        function emitColor() {
            const sat = indX / CW;
            const val = 1 - indY / CH;
            const [r,g,b] = hsvToRgb(hue, sat, val);
            const c = `rgba(${r},${g},${b},${alpha.toFixed(3)})`;
            alphaBar.style.background = `linear-gradient(to right, rgba(${r},${g},${b},0), rgba(${r},${g},${b},1))`;
            targetEl.style.background = c;
            obj[key] = c;
            if (typeof onUpdate === 'function') onUpdate(c);
        }

        // ── Bar handle positioning (uses fixed BAR_W, no getBCR) ─────────────
        function setHueHandle(h) {
            hueHandle.style.left = ((h / 360) * BAR_W) + 'px';
        }
        function setAlphaHandle(a) {
            alphaHandle.style.left = (a * BAR_W) + 'px';
        }

        // ── Coordinate extraction ─────────────────────────────────────────────
        // Use getBoundingClientRect ONLY during live mouse events (popup is
        // already in the DOM and fully laid out at that point).
        function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

        function onCanvasMove(e) {
            const r = canvas.getBoundingClientRect();
            indX = clamp(e.clientX - r.left, 0, CW);
            indY = clamp(e.clientY - r.top,  0, CH);
            emitColor(); drawCanvas();
        }
        function onHueMove(e) {
            const r = hueBar.getBoundingClientRect();
            const pct = clamp((e.clientX - r.left) / r.width, 0, 1);
            hue = pct * 360;
            setHueHandle(hue);
            emitColor(); drawCanvas();
        }
        function onAlphaMove(e) {
            const r = alphaBar.getBoundingClientRect();
            const pct = clamp((e.clientX - r.left) / r.width, 0, 1);
            alpha = pct;
            setAlphaHandle(alpha);
            emitColor();
        }

        // ── Drag (pointer capture — reliable even when game intercepts document events) ──
        let drag = false; // used only by outsideDown to ignore mid-drag dismissals

        function addDrag(el, onMove) {
            el.addEventListener('pointerdown', e => {
                e.preventDefault(); e.stopPropagation();
                el.setPointerCapture(e.pointerId);
                drag = true;
                onMove(e);
            });
            el.addEventListener('pointermove', e => {
                if (e.buttons === 0) return;
                onMove(e);
            });
            el.addEventListener('pointerup', () => { drag = false; });
        }

        addDrag(canvas,   onCanvasMove);
        addDrag(hueBar,   onHueMove);
        addDrag(alphaBar, onAlphaMove);

        // ── Initialise from color string ──────────────────────────────────────
        function initFromColor(colorStr) {
            const [r,g,b,a] = colorToRGB(colorStr);
            alpha = a;

            // RGB → HSV
            const rn=r/255, gn=g/255, bn=b/255;
            const max=Math.max(rn,gn,bn), min=Math.min(rn,gn,bn), d=max-min;
            let h = 0;
            if (d > 0) {
                switch (max) {
                    case rn: h = ((gn-bn)/d + (gn<bn?6:0)); break;
                    case gn: h = ((bn-rn)/d + 2); break;
                    case bn: h = ((rn-gn)/d + 4); break;
                }
                h *= 60;
            }
            hue = h;
            const sat = max === 0 ? 0 : d/max;
            const val = max;

            indX = sat * CW;
            indY = (1 - val) * CH;

            setHueHandle(hue);
            setAlphaHandle(alpha);
            drawCanvas();
            emitColor();
        }

        // Init immediately — popup is in the DOM, canvas size is fixed px values,
        // bar handles use BAR_W constant so no getBCR needed during init.
        initFromColor(initialColor || '#ff0000');

        // ── Outside-click dismiss ─────────────────────────────────────────────
        const cleanup = () => {
            popup.remove();
            document.removeEventListener('mousedown', outsideDown);
        };
        const outsideDown = e => {
            if (drag) return;                      // mid-drag — never dismiss
            if (popup.contains(e.target)) return;  // click inside picker
            if (e.target === targetEl) return;     // re-click on swatch toggles
            cleanup();
        };
        // Attach on next tick so the mouseup from the swatch click doesn't fire it
        setTimeout(() => document.addEventListener('mousedown', outsideDown), 0);
    }

    addColorRow(section, label, obj, key) {
        const row = this._row(label);
        const sw = document.createElement('div');
        sw.className = 'recte-color-swatch';

        const syncSwatch = () => {
            const v = obj[key];
            sw.style.background = (v && typeof v === 'object' && v.h !== undefined)
                ? `hsl(${v.h},${v.s}%,${v.l}%)`
                : (typeof v === 'string' ? v : '#ffffff');
        };
        syncSwatch();

        // Register with syncUI() so external obj changes also update the swatch
        this.bindings.push(syncSwatch);

        sw.addEventListener('click', () =>
            this.openColorPicker(
                sw, obj, key,
                obj[key] ?? getComputedStyle(sw).backgroundColor,
                // onUpdate: keep swatch in sync as the picker fires
                (c) => { sw.style.background = c; }
            )
        );
        row.appendChild(sw);
        section.appendChild(row);
        return row;
    }

    addDualColorRow(section, label, obj, key1, key2) {
        const row = this._row(label);
        const wrap = document.createElement('div');
        wrap.style.cssText = 'display:flex;gap:6px;';
        [key1, key2].forEach(k => {
            const sw = document.createElement('div');
            sw.className = 'recte-color-swatch';

            const syncSwatch = () => {
                const v = obj[k];
                sw.style.background = (v && typeof v === 'object' && v.h !== undefined)
                    ? `hsl(${v.h},${v.s}%,${v.l}%)`
                    : (typeof v === 'string' ? v : '#ffffff');
            };
            syncSwatch();
            this.bindings.push(syncSwatch);

            sw.addEventListener('click', () =>
                this.openColorPicker(
                    sw, obj, k,
                    obj[k] ?? getComputedStyle(sw).backgroundColor,
                    (c) => { sw.style.background = c; }
                )
            );
            wrap.appendChild(sw);
        });
        row.appendChild(wrap);
        section.appendChild(row);
        return row;
    }

    /* ── Radar ── */
    addRadarBox(section, options = {}) {
        const size = options.size ?? 220;
        const range = options.range ?? 200;

        const box = document.createElement('div');
        Object.assign(box.style, {
            position:'absolute', top:'70px', left:'70px',
            width: size+'px', height: (size+34)+'px',
            background: '#13131a',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '10px',
            display: 'none', flexDirection:'column',
            zIndex:'1000',
            boxShadow: '0 16px 50px rgba(0,0,0,0.8)',
            overflow: 'hidden',
        });
        document.body.appendChild(box);

        const title = document.createElement('div');
        Object.assign(title.style, {
            background: '#0d0d12', color: M.subtext1,
            padding: '7px 12px',
            fontFamily: "'Inter',sans-serif",
            fontSize: '12px', fontWeight: '600',
            userSelect: 'none', cursor: 'move',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            display: 'flex', alignItems: 'center', gap: '7px',
        });
        title.innerHTML = `<span style="color:${M.green};font-size:8px">●</span> Radar`;
        box.appendChild(title);

        const canvas = document.createElement('canvas');
        canvas.width = size; canvas.height = size;
        canvas.style.display = 'block';
        box.appendChild(canvas);

        let isDrag=false, ox=0, oy=0;
        title.addEventListener('mousedown', e => { isDrag=true; ox=e.clientX-box.offsetLeft; oy=e.clientY-box.offsetTop; });
        document.addEventListener('mousemove', e => { if(!isDrag)return; box.style.left=(e.clientX-ox)+'px'; box.style.top=(e.clientY-oy)+'px'; });
        document.addEventListener('mouseup', () => isDrag=false);

        const ctx = canvas.getContext('2d');
        const center = size/2;
        const state = { me:null, players:[], yaw:0 };

        function render() {
            ctx.fillStyle = '#0d0d12'; ctx.fillRect(0,0,size,size);
            // Rings
            [0.35,0.65,1.0].forEach(r => {
                ctx.strokeStyle = 'rgba(255,255,255,0.05)'; ctx.lineWidth=1; ctx.setLineDash([]);
                ctx.beginPath(); ctx.arc(center,center,center*r,0,Math.PI*2); ctx.stroke();
            });
            // Cross
            ctx.strokeStyle = 'rgba(255,255,255,0.06)'; ctx.lineWidth=1;
            ctx.beginPath();ctx.moveTo(center,0);ctx.lineTo(center,size);ctx.stroke();
            ctx.beginPath();ctx.moveTo(0,center);ctx.lineTo(size,center);ctx.stroke();

            if (!state.me) return;
            const scale = center/range;

            // Self dot
            ctx.shadowColor = ACC; ctx.shadowBlur = 12;
            ctx.fillStyle = ACC; ctx.beginPath(); ctx.arc(center,center,4,0,Math.PI*2); ctx.fill();
            ctx.strokeStyle = ACC; ctx.lineWidth=1.5;
            ctx.beginPath(); ctx.moveTo(center,center); ctx.lineTo(center,center-12); ctx.stroke();
            ctx.shadowBlur = 0;

            for (const p of state.players) {
                const dx=p.x-state.me.pos.x, dz=p.y-state.me.pos.z;
                const cos=Math.cos(state.yaw), sin=Math.sin(state.yaw);
                const rx=-(dx*cos-dz*sin), ry=dx*sin+dz*cos;
                if (Math.abs(rx)>range||Math.abs(ry)>range) continue;
                const px=center+rx*scale, py=center+ry*scale;
                const col=p.color??M.red;
                ctx.shadowColor=col; ctx.shadowBlur=8;
                ctx.fillStyle=col; ctx.beginPath(); ctx.arc(px,py,3,0,Math.PI*2); ctx.fill();
                ctx.shadowBlur=0;
            }
        }
        return {
            element: box,
            toggle(v) { box.style.display = v?'flex':'none'; },
            setMe(p) { state.me=p; },
            setYaw(deg) { state.yaw=deg*Math.PI/180; },
            setPlayers(pl) { state.players=pl; },
            update() { render(); }
        };
    }

    syncScroll(p1,p2) {
        let s=false;
        p1.addEventListener('scroll',()=>{if(s)return;s=true;p2.scrollTop=p1.scrollTop;s=false;});
        p2.addEventListener('scroll',()=>{if(s)return;s=true;p1.scrollTop=p2.scrollTop;s=false;});
    }

    rgbToHsl(r,g,b) {
        r/=255;g/=255;b/=255;
        const max=Math.max(r,g,b),min=Math.min(r,g,b);
        let h=0,s=0,l=(max+min)/2;
        if(max!==min){const d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);switch(max){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4;break;}h*=60;}
        return[h,s*100,l*100];
    }
}