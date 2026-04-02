import { config } from './config.js';

function deepmerge(target, source) {
    for (const key in source) {
        if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
            if (!target[key]) target[key] = {}
            deepmerge(target[key], source[key])
        } else {
            target[key] = source[key]
        }
    }
    return target
}

export function allowTypingInLilGuiInputs() {
    const allowKeys = (e) => {
        const el = e.target;
        const isTextInput =
            el.tagName === 'INPUT' ||
            el.tagName === 'TEXTAREA' ||
            el.isContentEditable;

        if (isTextInput) {
            e.stopImmediatePropagation();
        }
    };

    ['keydown', 'keypress', 'keyup'].forEach((eventName) => {
        window.addEventListener(eventName, allowKeys, true);
    });

    document.body.addEventListener('pointerdown', (e) => {
        const el = e.target;
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable) {
            e.stopImmediatePropagation();
        }
    }, true);
}

export class UiMain {
    constructor(name, version) {
        this.tabs = [];
        this.init(name, version);
        this.playerRows = new Map()
        this.bindings = []
    }

    init(name, version) {
        const style = document.createElement('style');
        style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; font-family: 'Inter', sans-serif; }
        body { user-select:none; overflow:hidden; }

        .recte-menu { width: 40%; height: 90%; background: #0d0d12; border-radius:18px; display:none; flex-direction:column; overflow:hidden; box-shadow:0 30px 100px rgba(0,0,0,0.95); position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); z-index:99999; }
        .recte-top { height:56px; background:linear-gradient(to bottom,#14141f,#0f0f16); border-bottom:1px solid #1c1c28; display:flex; align-items:center; padding:0 20px; font-weight:600; font-size:15px; color:#e0e0ff; cursor:grab; }
        .recte-top .rectelogo { color:#7e61f8; margin-right:6px; font-weight:800; background-image: url("https://recte.cc/imgs/recte_logo.png"); background-size: contain; background-repeat: no-repeat; width:2vh; height:2vh; display:block; background-position: center; }
        .recte-top .recteright { margin-left:auto; opacity:0.7; font-size:13px; }
        .recte-top select { background:#1a1a28; border:1px solid #2a2a3a; color:#c9c9ff; padding:6px 14px; border-radius:10px; margin:0 10px; font-size:13px; cursor:pointer; }
        .recte-top-controls { display:flex; align-items:center; gap:10px; margin-left:24px; }
        .rectesave-icon { width:36px; height:36px; background:rgba(126,97,248,0.15); border:1px solid rgba(126,97,248,0.3); border-radius:10px; color:#b8a7ff; display:flex; align-items:center; justify-content:center; cursor:pointer; transition: all 0.2s; }
        .rectesave-icon:hover { background:rgba(126,97,248,0.3); border-color:#7e61f8; color:#e0d6ff; transform:scale(1.05); }
        .rectesave-icon:active { transform:scale(0.98); }
        .recte-main { flex:1; display:flex; overflow:hidden; }
        .recte-sidebar { width:220px; background:#101018; border-right:1px solid #1c1c28; padding-top:16px; display:flex; flex-direction:column; }
        .recte-tab { padding:13px 20px; display:flex; align-items:center; gap:14px; font-size:14px; color:#888; cursor:pointer; transition: all 0.2s; }
        .recte-tab.active { background:#14141f; border-left:3px solid #7e61f8; color:#fff; font-weight:600; }
        .recte-tab:hover:not(.active) { background:#17171f; color:#aaa; }
        .recte-panel { flex:1; padding:20px 24px; overflow-y:auto; overflow-x:hidden; -ms-overflow-style:none; scrollbar-width:none; display:none; }
        .recte-panel.active { display:block; }
        .recte-panel::-webkit-scrollbar { width:6px; }
        .recte-panel::-webkit-scrollbar-track { background:transparent; }
        .recte-panel::-webkit-scrollbar-thumb { background:#2a2a38; border-radius:3px; }
        .recte-panels {overflow-y: auto; scrollbar-width: none; -ms-overflow-style: none; flex:1; display:flex; flex-direction:column;}

        .recte-section { margin-bottom:22px; }
        .recte-section-title { color:#6eb7ff; font-size:12.5px; font-weight:600; text-transform:uppercase; letter-spacing:0.8px; margin-bottom:10px; opacity:0.9; }
        .recte-row { display:flex; justify-content:space-between; align-items:center; background:#14141c; border-radius:12px; padding:11px 15px; margin-bottom:12px; font-size:13.5px; color:#e0e0ff; transition: background 0.2s; }
        .recte-row:hover { background:#191922; }
        .rectetoggle { position:relative; width:48px; height:26px; }
        .rectetoggle input { opacity:0; width:0; height:0; }
        .recteslider { position:absolute; inset:0; background:#2a2a33; border-radius:13px; transition:.3s; }
        .recteslider:before { content:""; position:absolute; width:22px; height:22px; left:2px; top:2px; background:#666; border-radius:50%; transition:.3s; }
        input:checked + .recteslider { background:#7e61f8; box-shadow:0 0 14px rgba(126,97,248,0.5); }
        input:checked + .recteslider:before { transform:translateX(22px); background:#fff; }

        .recterange { width:140px; height:6px; background:#1e1e28; border-radius:3px; outline:none; margin-left:12px; flex:1; }
        .recterange::-webkit-slider-thumb { -webkit-appearance:none; width:16px; height:16px; background:#7e61f8; border-radius:50%; cursor:pointer; box-shadow:0 0 12px rgba(126,97,248,0.6); }

        select { background:#1a1a24; border:1px solid #33333d; color:#e0e0ff; padding:6px 12px; border-radius:10px; font-size:13px; cursor:pointer; }
        `;
        document.head.appendChild(style);

        const menu = document.createElement('div');
        menu.className = 'recte-menu';
        menu.innerHTML = `
            <div class="recte-top">
                <div><span class="rectelogo"></span> Recte</div>
                <div class="recte-top-controls">
                    <button class="rectesave-icon" title="Save config">&#128190;</button>
                    <button class="rectesave-icon" title="Delete">&#128465;</button>

                </div>
                <div class="recteright">${name} ${version}</div>
            </div>
            <div class="recte-main">
                <div class="recte-sidebar"></div>
                <div class="recte-panels"></div>
            </div>
        `;
        document.body.appendChild(menu);

        this.menu = menu;
        this.sidebar = menu.querySelector('.recte-sidebar');
        this.panelsContainer = menu.querySelector('.recte-panels');
        const topBar = menu.querySelector('.recte-top');

        this.isDragging = false;
        let offsetX = 0, offsetY = 0;

        topBar.addEventListener('mousedown', e => {
            this.isDragging = true;

            const rect = menu.getBoundingClientRect();

            if (this.firstDrag !== true) {
                menu.style.left = rect.left + "px";
                menu.style.top = rect.top + "px";
                menu.style.transform = "none";
                this.firstDrag = true;
            }

            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
        });

        document.addEventListener('mouseup', () => {
            this.isDragging = false;
        });

        document.addEventListener('mousemove', e => {
            if (!this.isDragging) return;

            menu.style.left = (e.clientX - offsetX) + 'px';
            menu.style.top = (e.clientY - offsetY) + 'px';
        });


        const saved = localStorage.getItem("recte_config");
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                deepmerge(config,parsed)
            } catch (e) {
                console.error("[Recte] Failed to parse config:", e);
            }
        }

        const saveBtn = menu.querySelectorAll('.rectesave-icon')[0];
        saveBtn.addEventListener('click', () => {
            try {
                localStorage.setItem(`recte_config`, JSON.stringify(config));
                console.log('[Recte] Config saved successfully.');
            }
            catch (e) {
                console.error('[Recte] Failed to save config:', e);
            }
        });
        const deleteBtn = menu.querySelectorAll('.rectesave-icon')[1];
        deleteBtn.addEventListener('click', () => {
            localStorage.removeItem('recte_config');
            console.log('[Recte] Config deleted successfully.');
        });
    }

    applyScrollFix(panel) {
        panel.addEventListener('wheel', e => {
            const before = panel.scrollTop;
            panel.scrollTop += e.deltaY;

            if (panel.scrollTop !== before) {
                e.preventDefault();
                e.stopPropagation();
            }
        }, { passive: false });
    }

    togglevis() {
        const current = window.getComputedStyle(this.menu).display;
        this.menu.style.display = current === 'none' ? 'flex' : 'none';
    }

    addTab(name, panelCallback) {
        const tab = document.createElement('div');
        tab.className = 'recte-tab';
        tab.textContent = name;
        this.sidebar.appendChild(tab);

        const panel = document.createElement('div');
        panel.className = 'recte-panel';
        this.applyScrollFix(panel);
        this.panelsContainer.appendChild(panel);

        tab.addEventListener('click', () => {
            this.tabs.forEach(t => { t.tab.classList.remove('active'); t.panel.classList.remove('active'); });
            tab.classList.add('active');
            panel.classList.add('active');
        });

        if (this.tabs.length === 0) {
            tab.classList.add('active');
            panel.classList.add('active');
        }

        const tabObj = { tab, panel };
        this.tabs.push(tabObj);

        if (panelCallback) panelCallback(panel);
        return tabObj;
    }

    addSection(panel, name) {
        const section = document.createElement('div');
        section.className = 'recte-section';
        section.innerHTML = `<div class="recte-section-title">${name}</div>`;
        panel.appendChild(section);
        return section;
    }

    syncUI() {
        for (const update of this.bindings) {
            update();
        }
    }

    addTextRow(section, label, obj, key, placeholder = '') {
        const row = document.createElement('div');
        row.className = 'recte-row';
        row.style.display = 'flex';
        row.style.alignItems = 'center';
        row.style.gap = '10px';

        const labelEl = document.createElement('span');
        labelEl.textContent = label;
        labelEl.style.marginRight = '1vw';
        labelEl.style.whiteSpace = 'nowrap';
        row.appendChild(labelEl);

        const input = document.createElement('input');
        input.type = 'text';
        input.value = obj[key] ?? '';
        input.placeholder = placeholder;
        Object.assign(input.style, {
            flex: '1',
            background: 'rgba(126,97,248,0.1)',
            border: '1px solid rgba(126,97,248,0.3)',
            borderRadius: '8px',
            padding: '5px 10px',
            color: '#e0e0ff',
            fontSize: '13px',
            outline: 'none',
            transition: 'border-color 0.2s',
        });

        input.addEventListener('focus', () => {
            input.style.borderColor = '#7e61f8';
        });
        input.addEventListener('blur', () => {
            input.style.borderColor = 'rgba(126,97,248,0.3)';
        });
        input.addEventListener('input', e => {
            obj[key] = e.target.value;
        });

        // Prevent game from eating keystrokes while typing
        ['keydown', 'keypress', 'keyup'].forEach(evt => {
            input.addEventListener(evt, e => e.stopImmediatePropagation());
        });
        input.addEventListener('pointerdown', e => e.stopImmediatePropagation());

        this.bindings.push(() => {
            input.value = obj[key] ?? '';
        });

        row.appendChild(input);
        section.appendChild(row);
        return row;
    }

    addToggleRow(section, label, obj, key, onTrue = null) {
        const row = document.createElement('div');
        row.className = 'recte-row';
        row.innerHTML = `
            <span style="margin-right: 1vw">${label}</span>
            <label class="rectetoggle">
                <input type="checkbox" ${obj[key] ? 'checked' : ''}>
                <span class="recteslider"></span>
            </label>
        `;

        const input = row.querySelector('input');

        input.addEventListener('change', e => {
            const checked = e.target.checked;
            obj[key] = checked;

            if (checked && typeof onTrue === 'function') {
                onTrue(obj, key);
            }
        });

        this.bindings.push(() => {
            input.checked = !!obj[key];
        });

        section.appendChild(row);
        return row;
    }


addSliderRow(section, label, obj, key, min, max, step) {
    const row = document.createElement('div');
    row.className = 'recte-row';
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.gap = '10px';
    row.style.marginBottom = '10px';

    // Label
    const labelEl = document.createElement('span');
    labelEl.textContent = label;
    row.appendChild(labelEl);

    // Normalize & clamp initial value
    let initialValue = parseFloat(obj[key]);
    if (isNaN(initialValue)) initialValue = min;
    initialValue = Math.max(min, Math.min(max, initialValue));
    obj[key] = initialValue;

    // Slider input
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.className = 'recterange';
    slider.min = min;
    slider.max = max;
    slider.step = step;
    slider.value = initialValue;
    slider.style.flex = '1'; // slider expands
    row.appendChild(slider);

    // Value box (editable)
    const valueBox = document.createElement('input');
    valueBox.type = 'number';
    valueBox.value = initialValue;
    valueBox.style.width = '60px';
    valueBox.style.textAlign = 'center';
    valueBox.style.border = '1px solid rgba(126,97,248,0.3)';
    valueBox.style.borderRadius = '6px';
    valueBox.style.padding = '2px 5px';
    valueBox.style.background = 'rgba(126,97,248,0.1)';
    valueBox.style.color = '#fff';
    valueBox.title = '';
    valueBox.style.webkitAppearance = 'none';
    valueBox.style.MozAppearance = 'textfield';
    valueBox.style.appearance = 'textfield';
    valueBox.style.margin = '0';

    valueBox.addEventListener('mousedown', e => {
        e.stopPropagation();
        valueBox.focus();
    });

    row.appendChild(valueBox);

    // Update object & value box when slider moves
    slider.addEventListener('input', e => {
        const val = parseFloat(e.target.value);
        obj[key] = val;
        valueBox.value = val;
    });

    // Remove number arrows (global once is better, but safe here)
    const style = document.createElement('style');
    style.innerHTML = `
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none !important;
            margin: 0 !important;
        }
    `;
    document.head.appendChild(style);

    // Update object & slider when typing in the value box
    valueBox.addEventListener('input', e => {
        let val = parseFloat(e.target.value);
        if (isNaN(val)) val = min;
        val = Math.max(min, Math.min(max, val));
        obj[key] = val;
        slider.value = val;
        valueBox.value = val;
    });

    section.appendChild(row);

    // Ensure slider thumb renders at correct position (layout-safe)
    requestAnimationFrame(() => {
        slider.value = initialValue;
    });

    return row;
}



    addSelectRow(section, label, options, obj, key) {
        const row = document.createElement('div');
        row.className = 'recte-row';
        const optionsHtml = options.map(o => `<option ${obj[key]===o?'selected':''}>${o}</option>`).join('');
        row.innerHTML = `<span style="margin-right: 1vw">${label}</span><select>${optionsHtml}</select>`;
        row.querySelector('select').addEventListener('change', e => obj[key] = e.target.value);
        section.appendChild(row);
        return row;
    }

    rgbToHsl(r, g, b) {
        r /= 255; g /= 255; b /= 255;
        const max = Math.max(r,g,b), min = Math.min(r,g,b);
        let h=0, s=0, l=(max+min)/2;

        if(max !== min){
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max){
                case r: h = (g - b)/d + (g < b ? 6 : 0); break;
                case g: h = (b - r)/d + 2; break;
                case b: h = (r - g)/d + 4; break;
            }
            h *= 60;
        }
        return [h, s*100, l*100];
    }

    addButton(section, label, obj, key, callback) {
        const row = document.createElement('div');
        row.className = 'recte-row';
        row.style.display = 'flex';
        row.style.justifyContent = 'space-between';
        row.style.alignItems = 'center';

        const labelEl = document.createElement('span');
        labelEl.textContent = label;
        labelEl.style.marginRight = "1vw"

        const button = document.createElement('div');
        button.textContent = obj[key] ?? label;
        button.style.padding = "6px 14px";
        button.style.background = "rgba(126,97,248,0.15)";
        button.style.border = "1px solid rgba(126,97,248,0.3)";
        button.style.borderRadius = "10px";
        button.style.cursor = "pointer";
        button.style.transition = "0.2s";
        button.style.userSelect = "none";

        button.addEventListener("mouseenter", () => {
            button.style.background = "rgba(126,97,248,0.3)";
            button.style.borderColor = "#7e61f8";
            button.style.color = "#e0d6ff";
            button.style.transform = "scale(1.05)";
        });
        button.addEventListener("mouseleave", () => {
            button.style.background = "rgba(126,97,248,0.15)";
            button.style.borderColor = "rgba(126,97,248,0.3)";
            button.style.color = "";
            button.style.transform = "scale(1.0)";
        });
        button.addEventListener("mousedown", () => {
            button.style.transform = "scale(0.97)";
        });
        button.addEventListener("mouseup", () => {
            button.style.transform = "scale(1.05)";
        });

        button.addEventListener("click", () => {
            if (callback) callback(obj, key, button);
        });

        row.appendChild(labelEl);
        row.appendChild(button);
        section.appendChild(row);

        return row;
    }

    addplayerlist(section, player, callback) {
        let row;
        if (this.playerRows.has(player.sessionId)) {
            row = this.playerRows.get(player.sessionId);
        } else {
            row = document.createElement('div');
            row.className = 'recte-row';
            row.style.display = 'block';
            row.style.justifyContent = 'space-between';
            row.style.alignItems = 'center';
            row.style.marginBottom = '10px';
            row.style.transition = '0.2s';

            const labelEl = document.createElement('span');
            labelEl.textContent = player.name;
            labelEl.style.marginRight = '10px';
            row.appendChild(labelEl);

            const buttons = ["Godmode", "Kill", "TP To"];
            buttons.forEach(btnLabel => {
                const button = document.createElement('div');
                button.textContent = btnLabel;
                button.style.padding = "6px 14px";
                button.style.background = "rgba(126,97,248,0.15)";
                button.style.border = "1px solid rgba(126,97,248,0.3)";
                button.style.borderRadius = "10px";
                button.style.cursor = "pointer";
                button.style.transition = "0.2s";
                button.style.userSelect = "none";
                button.style.marginTop = "10px";

                button.addEventListener("mouseenter", () => {
                    if (player.status === 'alive') {
                        button.style.background = "rgba(126,97,248,0.3)";
                        button.style.borderColor = "#7e61f8";
                        button.style.color = "#e0d6ff";
                        button.style.transform = "scale(1.05)";
                    }
                });
                button.addEventListener("mouseleave", () => {
                    button.style.background = "rgba(126,97,248,0.15)";
                    button.style.borderColor = "rgba(126,97,248,0.3)";
                    button.style.color = "";
                    button.style.transform = "scale(1.0)";
                });
                button.addEventListener("mousedown", () => button.style.transform = "scale(0.97)");
                button.addEventListener("mouseup", () => button.style.transform = "scale(1.05)");

                if (typeof callback === 'function') {
                    button.addEventListener("click", () => callback(player, btnLabel, button));
                }

                row.appendChild(button);
            });

            section.appendChild(row);
            this.playerRows.set(player.sessionId, row);
        }

        // Update dead/alive styling dynamically
        if (player.status === 'dead') {
            row.style.opacity = '0.5';
            row.style.textDecoration = 'line-through';
            Array.from(row.querySelectorAll('div')).forEach(btn => btn.style.pointerEvents = 'none');
        } else {
            row.style.opacity = '1';
            row.style.textDecoration = '';
            Array.from(row.querySelectorAll('div')).forEach(btn => btn.style.pointerEvents = 'auto');
        }

        return row;
    }

    updatePlayerList(section, players, callback) {
        const existingIds = new Set(this.playerRows.keys());

        players.forEach(player => {
            this.addplayerlist(section, player, callback);
            existingIds.delete(player.sessionId);
        });

        // Remove players who left
        existingIds.forEach(sessionId => {
            const row = this.playerRows.get(sessionId);
            if (row) section.removeChild(row);
            this.playerRows.delete(sessionId);
        });
    }

    openColorPicker(targetEl, obj, key, initialColor) {
        const popup = document.createElement('div');
        popup.style.position = 'absolute';
        popup.style.width = '260px';
        popup.style.padding = '10px';
        popup.style.borderRadius = '12px';
        popup.style.background = '#1a1a28';
        popup.style.border = '1px solid #7e61f8';
        popup.style.boxShadow = '0 4px 20px rgba(0,0,0,0.7)';
        popup.style.zIndex = 100000;

        const canvas = document.createElement('canvas');
        canvas.width = 200;
        canvas.height = 150;
        canvas.style.borderRadius = '10px';
        canvas.style.cursor = 'crosshair';
        popup.appendChild(canvas);
        const ctx = canvas.getContext('2d');

        const sliderContainer = document.createElement('div');
        sliderContainer.style.position = 'relative';
        sliderContainer.style.marginTop = '10px';
        sliderContainer.style.height = '12px';
        sliderContainer.style.borderRadius = '6px';
        sliderContainer.style.background =
            'linear-gradient(to right, red, yellow, lime, cyan, blue, magenta, red)';
        sliderContainer.style.cursor = 'pointer';
        popup.appendChild(sliderContainer);

        const sliderHandle = document.createElement('div');
        sliderHandle.style.width = '14px';
        sliderHandle.style.height = '14px';
        sliderHandle.style.border = '2px solid #7e61f8';
        sliderHandle.style.borderRadius = '50%';
        sliderHandle.style.position = 'absolute';
        sliderHandle.style.top = '-1px';
        sliderHandle.style.left = '0';
        sliderHandle.style.background = '#fff';
        sliderContainer.appendChild(sliderHandle);

        const alphaContainer = document.createElement('div');
        alphaContainer.style.position = 'absolute';
        alphaContainer.style.right = '5px';
        alphaContainer.style.top = '10px';
        alphaContainer.style.width = '20px';
        alphaContainer.style.height = canvas.height + 'px';
        alphaContainer.style.borderRadius = '6px';
        alphaContainer.style.cursor = 'pointer';
        alphaContainer.style.background =
            'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))';
        alphaContainer.style.boxShadow = '0 0 0 1px #7e61f8 inset';
        popup.appendChild(alphaContainer);

        const alphaHandle = document.createElement('div');
        alphaHandle.style.width = '26px';
        alphaHandle.style.height = '4px';
        alphaHandle.style.position = 'absolute';
        alphaHandle.style.left = '-3px';
        alphaHandle.style.background = '#fff';
        alphaHandle.style.border = '2px solid #7e61f8';
        alphaHandle.style.borderRadius = '4px';
        alphaContainer.appendChild(alphaHandle);

        let alpha = 1;

        const indicator = { x: 0, y: 0 };
        let hue = 0, sat = 100, light = 50;

        function hslToRgb(h, s, l) {
            s /= 100; l /= 100;
            const k = n => (n + h / 30) % 12;
            const a = s * Math.min(l, 1 - l);
            const f = n => l - a *
                Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
            return [
                Math.round(f(0) * 255),
                Math.round(f(8) * 255),
                Math.round(f(4) * 255)
            ];
        }

        function applyWhiteBlackMultiply(r, g, b, lightPercent) {
            const l = lightPercent / 100;
            const white = 1 - l;
            r = r + (255 - r) * white;
            g = g + (255 - g) * white;
            b = b + (255 - b) * white;
            r *= l; g *= l; b *= l;
            return [Math.round(r), Math.round(g), Math.round(b)];
        }

        function updateCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Base hue
            ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // White gradient (left → right)
            const whiteGrad = ctx.createLinearGradient(0, 0, canvas.width, 0);
            whiteGrad.addColorStop(0, "rgba(255,255,255,1)");
            whiteGrad.addColorStop(1, "rgba(255,255,255,0)");
            ctx.fillStyle = whiteGrad;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Black gradient (top → bottom)
            const blackGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
            blackGrad.addColorStop(0, "rgba(0,0,0,0)");
            blackGrad.addColorStop(1, "rgba(0,0,0,1)");
            ctx.fillStyle = blackGrad;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw picker circle
            ctx.strokeStyle = "#fff";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(indicator.x, indicator.y, 6, 0, Math.PI * 2);
            ctx.stroke();
        }
        
        function hsvToRgb(h, s, v) {
            let f = (n, k = (n + h / 60) % 6) =>
                v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);

            return [
                Math.round(f(5) * 255),
                Math.round(f(3) * 255),
                Math.round(f(1) * 255)
            ];
        }


        function rgbToHex(r, g, b) {
            return (
                "#" +
                [r, g, b]
                    .map(v => v.toString(16).padStart(2, "0"))
                    .join("")
            );
        }

        function setColorFromIndicator() {
            const s = indicator.x / canvas.width;
            const v = 1 - (indicator.y / canvas.height);

            const [r, g, b] = hsvToRgb(hue, s, v);
            const finalColor = `rgba(${r},${g},${b},${alpha})`;

            targetEl.style.background = finalColor;
            obj[key] = finalColor;
        }


        function pickGradient(e) {
            const rect = canvas.getBoundingClientRect();
            indicator.x = Math.max(0, Math.min(canvas.width, e.clientX - rect.left));
            indicator.y = Math.max(0, Math.min(canvas.height, e.clientY - rect.top));
            setColorFromIndicator();
            updateCanvas();
        }

        function pickHue(e) {
            const rect = sliderContainer.getBoundingClientRect();
            hue = Math.min(Math.max(0,
                (e.clientX - rect.left) / rect.width * 360
            ), 360);
            sliderHandle.style.left =
                `${(hue / 360) * sliderContainer.clientWidth - 7}px`;
            setColorFromIndicator();
            updateCanvas();
        }

        function pickAlpha(e) {
            const rect = alphaContainer.getBoundingClientRect();
            let y = Math.min(
                Math.max(0, e.clientY - rect.top),
                rect.height
            );
            alpha = 1 - (y / rect.height);
            alphaHandle.style.top = (y - 2) + "px";
            setColorFromIndicator();
        }

        let draggingGradient = false;
        canvas.addEventListener('mousedown', e => {
            draggingGradient = true;
            pickGradient(e);
        });
        document.addEventListener('mousemove', e => {
            if (draggingGradient) pickGradient(e);
        });
        document.addEventListener('mouseup', () => draggingGradient = false);

        let draggingHue = false;
        sliderContainer.addEventListener('mousedown', e => {
            draggingHue = true;
            pickHue(e);
        });
        document.addEventListener('mousemove', e => {
            if (draggingHue) pickHue(e);
        });
        document.addEventListener('mouseup', () => draggingHue = false);

        let draggingAlpha = false;
        alphaContainer.addEventListener("mousedown", e => {
            draggingAlpha = true;
            pickAlpha(e);
        });
        document.addEventListener("mousemove", e => {
            if (draggingAlpha) pickAlpha(e);
        });
        document.addEventListener("mouseup", () => {
            draggingAlpha = false;
        });

        function colorStringToRGB(str) {
            const div = document.createElement('div');
            div.style.color = str;
            document.body.appendChild(div);

            const rgb = getComputedStyle(div).color;
            document.body.removeChild(div);

            const m = rgb.match(/(\d+), (\d+), (\d+)(?:, (\d*\.?\d+))?/);
            return m
                ? [
                    parseInt(m[1], 10),
                    parseInt(m[2], 10),
                    parseInt(m[3], 10),
                    m[4] ? parseFloat(m[4]) : 1
                ]
                : [255, 255, 255, 1];
        }

        function initFromColor(color) {
            const [rTarget, gTarget, bTarget, aTarget] = colorStringToRGB(color);
            alpha = aTarget;

            const max = Math.max(rTarget, gTarget, bTarget);
            const min = Math.min(rTarget, gTarget, bTarget);
            let h = 0;
            if (max !== min) {
                const d = max - min;
                switch (max) {
                    case rTarget: h = ((gTarget - bTarget) / d) % 6; break;
                    case gTarget: h = ((bTarget - rTarget) / d) + 2; break;
                    case bTarget: h = ((rTarget - gTarget) / d) + 4; break;
                }
                h *= 60;
                if (h < 0) h += 360;
            }
            hue = h;
            sliderHandle.style.left =
                `${(hue / 360) * sliderContainer.clientWidth - 7}px`;

            // brute-force find sat/light that best approximates target
            let bestSat = 0, bestLight = 0, bestDiff = Infinity;
            for (let s = 0; s <= 100; s += 2) {
                for (let l = 0; l <= 100; l += 2) {
                    const [r, g, b] = hslToRgb(hue, s, 50);
                    const [r2, g2, b2] = applyWhiteBlackMultiply(r, g, b, l);
                    const diff =
                        Math.abs(r2 - rTarget) +
                        Math.abs(g2 - gTarget) +
                        Math.abs(b2 - bTarget);
                    if (diff < bestDiff) {
                        bestDiff = diff;
                        bestSat = s;
                        bestLight = l;
                    }
                }
            }

            sat = bestSat;
            light = bestLight;

            indicator.x = (sat / 100) * canvas.width;
            indicator.y = ((100 - light) / 100) * canvas.height;

            alphaHandle.style.top = ((1 - alpha) * alphaContainer.clientHeight) + "px";

            updateCanvas();
            setColorFromIndicator();
        }

        // position popup relative to element and add to document once
        const rect = targetEl.getBoundingClientRect();
        popup.style.top = rect.bottom + window.scrollY + 6 + 'px';
        popup.style.left = rect.left + window.scrollX + 'px';
        document.body.appendChild(popup);

        // close when clicking outside
        const outsideClickHandler = (e) => {
            if (!popup.contains(e.target) && e.target !== targetEl) {
                popup.remove();
                document.removeEventListener('click', outsideClickHandler);
            }
        };
        document.addEventListener('click', outsideClickHandler);

        initFromColor(initialColor ?? getComputedStyle(targetEl).backgroundColor);
    }

    addRadarBox(section, options = {}) {
        const size = options.size ?? 220;
        const range = options.range ?? 200;

        // Create the draggable container
        const box = document.createElement('div');
        box.className = 'recte-radar-box';
        box.style.position = 'absolute';
        box.style.top = '50px';
        box.style.left = '50px';
        box.style.width = size + 'px';
        box.style.height = (size + 27) + 'px';
        box.style.background = '#0f0f16';
        box.style.border = '1px solid #2a2a3a';
        box.style.borderRadius = '12px';
        box.style.display = 'none';
        box.style.flexDirection = 'column';
        box.style.zIndex = '1000';
        box.style.cursor = 'move';
        document.body.appendChild(box); // attach to body so it's independent of menu

        // Title bar
        const title = document.createElement('div');
        title.style.background = '#1f1f2a';
        title.style.color = '#7e61f8';
        title.style.padding = '4px 8px';
        title.style.fontWeight = 'bold';
        title.style.userSelect = 'none';
        title.innerText = 'Radar';
        box.appendChild(title);

        // Canvas
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        canvas.style.flex = '1';
        canvas.style.borderTop = '1px solid #2a2a3a';
        box.appendChild(canvas);

        // Drag logic
        let offsetX = 0, offsetY = 0, isDragging = false;

        title.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - box.offsetLeft;
            offsetY = e.clientY - box.offsetTop;
            document.body.style.userSelect = 'none';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            box.style.left = (e.clientX - offsetX) + 'px';
            box.style.top = (e.clientY - offsetY) + 'px';
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            document.body.style.userSelect = '';
        });

        const ctx = canvas.getContext('2d');
        const center = size / 2;
        const state = { me: null, players: [], yaw: 0 };

        function drawGrid() {
            ctx.strokeStyle = '#1f1f2a';
            ctx.lineWidth = 1;
            
            for (let i = 0; i <= size; i += size / 4) {
                ctx.beginPath();
                ctx.moveTo(i, 0);
                ctx.lineTo(i, size);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(0, i);
                ctx.lineTo(size, i);
                ctx.stroke();
            }
            // crosshair
            ctx.strokeStyle = '#7e61f8';
            ctx.beginPath();
            ctx.moveTo(center, 0);
            ctx.lineTo(center, size);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(0, center);
            ctx.lineTo(size, center);
            ctx.stroke();
        }

        function worldToRadar(dx, dy) {
            const scale = center / range;
            return { x: center + dx * scale, y: center + dy * scale };
        }

        function drawDot(x, y, color, r = 3) {
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fill();
        }

        function render() {
            ctx.clearRect(0, 0, size, size);
            drawGrid();
            if (!state.me) return;

            drawDot(center, center, '#7e61f8', 4); // player dot

            for (const p of state.players) {
                // world delta
                const dx = p.x - state.me.pos.x; // right
                const dz = p.y - state.me.pos.z; // forward (Z)

                const cos = Math.cos(state.yaw);
                const sin = Math.sin(state.yaw);

                // rotate world → player-local
                const localX = dx * cos - dz * sin; // right
                const localY = dx * sin + dz * cos; // forward

                // radar space (Y goes DOWN, forward is UP)
                const rx = -localX;
                const ry = localY;

                if (Math.abs(rx) > range || Math.abs(ry) > range) continue;

                const pos = worldToRadar(rx, ry);
                drawDot(pos.x, pos.y, p.color ?? '#ff4d4d');
            }

        }

        return {
            element: box,
            toggle(visible) { box.style.display = visible ? 'flex' : 'none'; },
            setMe(player) { state.me = player; },
            setYaw(deg) { state.yaw = deg * Math.PI / 180; },
            setPlayers(players) { state.players = players; },
            update() { render(); }
        };
    }

    addColorRow(section, label, obj, key) {
        const row = document.createElement('div');
        row.className = 'recte-row';

        const labelEl = document.createElement('span');
        labelEl.textContent = label;
        labelEl.style.marginRight = "1vw"

        const colorEl = document.createElement('div');
        colorEl.style.width = '22px';
        colorEl.style.height = '22px';
        colorEl.style.borderRadius = '50%';
        colorEl.style.border = '1px solid #7e61f8';
        colorEl.style.cursor = 'pointer';
        colorEl.style.position = 'relative';

        const value = obj[key];
        if (value && typeof value === 'object' && value.h !== undefined) {
            colorEl.style.background = `hsl(${value.h}, ${value.s}%, ${value.l}%)`;
        } else if (value && typeof value === 'string') {
            colorEl.style.background = value;
        } else {
            colorEl.style.background = '#ffffff';
        }

        row.appendChild(labelEl);
        row.appendChild(colorEl);
        section.appendChild(row);

        colorEl.addEventListener('click', () => {
            this.openColorPicker(colorEl, obj, key, obj[key] ?? getComputedStyle(colorEl).backgroundColor);
        });

        return row;
    }

    addDualColorRow(section, label, obj, key1, key2) {
        const row = document.createElement('div');
        row.className = 'recte-row';
        row.style.display = 'flex';
        row.style.alignItems = 'center';
        row.style.justifyContent = 'space-between';

        const labelEl = document.createElement('span');
        labelEl.textContent = label;
        labelEl.style.marginRight = "1vw"

        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.gap = '8px';

        const color1 = document.createElement('div');
        const color2 = document.createElement('div');
        [color1, color2].forEach((colorEl, i) => {
            let indexkey = i===0?key1:key2;
            const value = obj[indexkey];
            colorEl.style.width = '22px';
            colorEl.style.height = '22px';
            colorEl.style.borderRadius = '50%';
            colorEl.style.border = '1px solid #7e61f8';
            colorEl.style.cursor = 'pointer';
            colorEl.style.background = (value && typeof value === 'object' && value.h !== undefined)
                ? `hsl(${value.h}, ${value.s}%, ${value.l}%)`
                : (value && typeof value === 'string' ? value : '#ffffff');

            colorEl.addEventListener('click', () => {
                this.openColorPicker(colorEl, obj, indexkey, obj[indexkey] ?? getComputedStyle(colorEl).backgroundColor);
            });
        });

        container.appendChild(color1);
        container.appendChild(color2);
        row.appendChild(labelEl);
        row.appendChild(container);
        section.appendChild(row);
        return row;
    }

    syncScroll(panel1, panel2){
        let isSyncing = false;
        panel1.addEventListener('scroll', () => {
            if(isSyncing) return;
            isSyncing = true;
            panel2.scrollTop = panel1.scrollTop;
            isSyncing = false;
        });
        panel2.addEventListener('scroll', () => {
            if(isSyncing) return;
            isSyncing = true;
            panel1.scrollTop = panel2.scrollTop;
            isSyncing = false;
        });
    }

};
