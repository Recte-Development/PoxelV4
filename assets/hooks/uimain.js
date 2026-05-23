import { config } from '../ui/config.js';

export const SNOW_IMAGE = 'YOUR_IMAGE_URL_HERE';

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

const ACC = '#7c6aff';

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
:root{--bg:#0b0b10;--surf:rgba(14,14,22,0.82);--card:rgba(255,255,255,0.04);--cardHov:rgba(255,255,255,0.07);--brd:rgba(255,255,255,0.07);--brdH:rgba(255,255,255,0.14);--txt:#e8e6ff;--sub:#9896b8;--muted:#555470;--acc:#7c6aff;--accSoft:rgba(124,106,255,0.18);--accGlow:rgba(124,106,255,0.35);--green:#4ade80;--red:#f87171;--yellow:#fbbf24;--r:10px;--rSm:6px;--ui:'DM Sans',sans-serif;--mono:'DM Mono',monospace;}
*{margin:0;padding:0;box-sizing:border-box;}body{user-select:none;overflow:hidden;}
.rm{width:780px;height:530px;background:linear-gradient(145deg,rgba(18,16,30,0.97) 0%,rgba(10,9,18,0.99) 100%);backdrop-filter:blur(32px) saturate(1.4);-webkit-backdrop-filter:blur(32px) saturate(1.4);border:1px solid var(--brd);border-radius:14px;box-shadow:0 0 0 1px rgba(255,255,255,0.03),0 30px 80px rgba(0,0,0,0.9),inset 0 1px 0 rgba(255,255,255,0.06);display:none;flex-direction:column;overflow:hidden;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:99999;font-family:var(--ui);}
.rm-top{height:50px;display:flex;align-items:center;padding:0 16px;gap:10px;cursor:grab;flex-shrink:0;border-bottom:1px solid var(--brd);background:rgba(255,255,255,0.02);}
.rm-top:active{cursor:grabbing;}
.rm-logo{display:flex;align-items:center;gap:8px;font-size:14px;font-weight:700;letter-spacing:.4px;color:var(--txt);flex-shrink:0;}
.rm-logo-dot{width:8px;height:8px;border-radius:50%;background:var(--acc);box-shadow:0 0 8px var(--accGlow);animation:dot-pulse 3s ease-in-out infinite;}
.rm-logo-sep{color:var(--muted);font-weight:400;margin:0 2px;}
.rm-logo-sub{color:var(--sub);font-weight:500;}
@keyframes dot-pulse{0%,100%{box-shadow:0 0 8px var(--accGlow)}50%{box-shadow:0 0 18px var(--accGlow)}}
.rm-divider{width:1px;height:20px;background:var(--brd);flex-shrink:0;}
.rm-top-right{margin-left:auto;display:flex;align-items:center;gap:6px;}
.rm-icon-btn{width:30px;height:30px;border:1px solid var(--brd);border-radius:var(--rSm);background:transparent;color:var(--muted);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .15s;overflow:hidden;position:relative;}
.rm-icon-btn:hover{background:var(--cardHov);border-color:var(--brdH);color:var(--txt);}
.rm-icon-btn svg{width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;}
.rm-save-btn{display:flex;align-items:center;gap:5px;padding:5px 12px;background:var(--accSoft);border:1px solid rgba(124,106,255,.3);border-radius:var(--rSm);color:var(--acc);font-family:var(--ui);font-size:12px;font-weight:600;cursor:pointer;transition:all .15s;overflow:hidden;position:relative;}
.rm-save-btn:hover{background:rgba(124,106,255,.28);border-color:var(--acc);}
.rm-save-btn svg{width:12px;height:12px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;}
.rm-main{flex:1;display:flex;overflow:hidden;min-height:0;}
.rm-sidebar{width:170px;background:rgba(0,0,0,0.18);border-right:1px solid var(--brd);display:flex;flex-direction:column;padding:10px 0;flex-shrink:0;overflow-y:auto;scrollbar-width:none;}
.rm-sidebar::-webkit-scrollbar{display:none;}
.rm-group-label{font-size:9.5px;font-weight:600;color:var(--muted);letter-spacing:.9px;text-transform:uppercase;padding:10px 14px 4px;opacity:.75;}
.rm-tab{display:flex;align-items:center;gap:9px;padding:8px 14px;font-size:13px;font-weight:500;color:var(--sub);cursor:pointer;transition:all .15s;position:relative;margin:0 6px;border-radius:var(--rSm);}
.rm-tab:hover:not(.active){color:var(--txt);background:rgba(255,255,255,0.03);}
.rm-tab.active{color:#fff;background:linear-gradient(135deg,rgba(124,106,255,.22) 0%,rgba(124,106,255,.10) 100%);border:1px solid rgba(124,106,255,.2);}
.rm-tab-icon{width:16px;height:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform .25s cubic-bezier(.34,1.56,.64,1);}
.rm-tab-icon svg{width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}
.rm-tab.active .rm-tab-icon{color:var(--acc);transform:scale(1.18);}
.rm-sidebar-footer{margin-top:auto;padding:10px 12px;border-top:1px solid var(--brd);display:flex;align-items:center;gap:8px;}
.rm-avatar{width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#7c6aff,#b06aff);border:1px solid rgba(255,255,255,0.12);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff;}
.rm-user-name{font-size:12.5px;font-weight:600;color:var(--txt);}
.rm-user-sub{font-size:10.5px;color:var(--acc);margin-top:1px;}
.rm-panels{flex:1;display:flex;flex-direction:column;overflow:hidden;}
.rm-panel{flex:1;padding:14px 16px;overflow-y:auto;display:none;scrollbar-width:thin;scrollbar-color:rgba(255,255,255,0.06) transparent;}
.rm-panel::-webkit-scrollbar{width:3px;}
.rm-panel::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.07);border-radius:2px;}
.rm-panel.active{display:block;animation:rm-panel-in .22s cubic-bezier(.16,1,.3,1) both;}
@keyframes rm-panel-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
.rm-panel-grid{columns:2;column-gap:12px;margin-bottom:12px;}
.rm-panel-grid .rm-section{break-inside:avoid;margin-bottom:12px;min-width:0;}
.rm-section{margin-bottom:12px;animation:rm-section-in .25s cubic-bezier(.16,1,.3,1) both;}
@keyframes rm-section-in{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
.rm-panel.active .rm-section:nth-child(1){animation-delay:0ms}
.rm-panel.active .rm-section:nth-child(2){animation-delay:50ms}
.rm-panel.active .rm-section:nth-child(3){animation-delay:100ms}
.rm-panel.active .rm-section:nth-child(4){animation-delay:150ms}
.rm-panel.active .rm-section:nth-child(5){animation-delay:200ms}
.rm-section-card{background:var(--card);border:1px solid var(--brd);border-radius:var(--r);overflow:hidden;transition:border-color .2s,box-shadow .2s,transform .2s;}
.rm-section-card:hover{border-color:var(--brdH);box-shadow:0 6px 28px rgba(0,0,0,.4);transform:translateY(-1px);}
.rm-section-title{font-size:11px;font-weight:600;color:var(--muted);letter-spacing:.6px;text-transform:uppercase;padding:9px 13px 8px;border-bottom:1px solid var(--brd);display:flex;align-items:center;gap:6px;}
.rm-section-title svg{width:11px;height:11px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;opacity:.7;}
.rm-section-body{padding:4px 0 8px;}
.rm-row{display:flex;justify-content:space-between;align-items:center;padding:6px 13px;gap:10px;font-size:13px;font-weight:500;color:var(--sub);transition:background .12s,box-shadow .18s;cursor:default;}
.rm-row:hover{background:rgba(255,255,255,0.025);box-shadow:inset 2px 0 0 var(--acc);}
.rm-row-label{font-size:12.5px;color:var(--sub);white-space:nowrap;flex-shrink:0;min-width:0;overflow:hidden;text-overflow:ellipsis;}
.rm-toggle{position:relative;width:34px;height:18px;flex-shrink:0;}
.rm-toggle input{opacity:0;width:0;height:0;}
.rm-slider{position:absolute;inset:0;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.1);border-radius:18px;transition:.2s;cursor:pointer;}
.rm-slider::before{content:'';position:absolute;width:12px;height:12px;left:2px;top:2px;background:var(--muted);border-radius:50%;transition:.2s;}
input:checked+.rm-slider{background:var(--acc);border-color:var(--acc);box-shadow:0 0 10px var(--accGlow);}
input:checked+.rm-slider::before{transform:translateX(16px);background:#fff;}
@keyframes toggle-pop{0%{transform:scale(1)}45%{transform:scale(1.12)}100%{transform:scale(1)}}
.rm-toggle.popped .rm-slider{animation:toggle-pop .32s cubic-bezier(.34,1.56,.64,1);}
.rm-slider-wrap{display:flex;align-items:center;gap:8px;flex:1;min-width:0;}
.rm-crange{position:relative;flex:1;height:3px;background:rgba(255,255,255,0.08);border-radius:2px;cursor:pointer;user-select:none;min-width:0;}
.rm-crange-fill{position:absolute;top:0;left:0;height:100%;background:var(--acc);border-radius:2px;pointer-events:none;}
.rm-crange-thumb{position:absolute;top:50%;width:13px;height:13px;background:var(--acc);border-radius:50%;transform:translate(-50%,-50%);cursor:grab;box-shadow:0 0 0 3px var(--accSoft);transition:box-shadow .15s;}
.rm-crange-thumb:hover{box-shadow:0 0 0 5px var(--accGlow);}
.rm-range-val{font-family:var(--mono);font-size:11px;font-weight:500;color:var(--muted);min-width:30px;text-align:right;flex-shrink:0;display:inline-block;}
@keyframes val-pop{0%{transform:scale(1);color:var(--muted)}45%{transform:scale(1.35);color:var(--acc)}100%{transform:scale(1);color:var(--muted)}}
.rm-range-val.popping{animation:val-pop .28s ease;}
input.rm-numbox{width:46px;text-align:right;border:1px solid var(--brd);border-radius:var(--rSm);padding:3px 5px;background:rgba(255,255,255,0.05);color:var(--txt);font-family:var(--mono);font-size:11px;font-weight:500;outline:none;-webkit-appearance:textfield;transition:border-color .12s;}
input.rm-numbox:focus{border-color:var(--acc);}
input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}
input.rm-textinput{flex:1;background:rgba(255,255,255,0.05);border:1px solid var(--brd);border-radius:var(--rSm);padding:5px 8px;color:var(--txt);font-family:var(--ui);font-size:12.5px;outline:none;transition:border-color .15s;}
input.rm-textinput:focus{border-color:var(--acc);}
input.rm-textinput::placeholder{color:var(--muted);}
select.rm-select{background:rgba(255,255,255,0.05);border:1px solid var(--brd);color:var(--txt);padding:5px 8px;border-radius:var(--rSm);font-family:var(--ui);font-size:12.5px;font-weight:500;cursor:pointer;outline:none;transition:border-color .15s;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' fill='none'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23555470' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 8px center;padding-right:24px;min-width:0;max-width:100%;}
select.rm-select option{background:#13111e;}
select.rm-select:focus{border-color:var(--acc);}
.rm-btn{padding:5px 11px;background:var(--accSoft);border:1px solid rgba(124,106,255,.2);border-radius:var(--rSm);cursor:pointer;color:var(--acc);font-family:var(--ui);font-size:12px;font-weight:600;transition:all .15s;white-space:nowrap;overflow:hidden;position:relative;}
.rm-btn:hover{background:rgba(124,106,255,.26);border-color:var(--acc);}
.rm-btn:active{transform:scale(.97);}
@keyframes rm-ripple{from{transform:scale(0);opacity:.45}to{transform:scale(4);opacity:0}}
.rm-ripple{position:absolute;border-radius:50%;background:rgba(255,255,255,.28);width:60px;height:60px;margin-top:-30px;margin-left:-30px;pointer-events:none;animation:rm-ripple .5s ease-out forwards;}
.rm-swatch{width:22px;height:22px;border-radius:5px;border:1px solid rgba(255,255,255,0.15);cursor:pointer;transition:border-color .15s,transform .12s;flex-shrink:0;box-shadow:0 2px 6px rgba(0,0,0,0.4);}
.rm-swatch:hover{border-color:var(--acc);transform:scale(1.1);}
@keyframes swatch-pop{0%{transform:scale(1)}40%{transform:scale(.85)}100%{transform:scale(1.12)}}
.rm-swatch:active{animation:swatch-pop .2s ease forwards;}
.rm-picker{position:fixed;width:230px;padding:13px;background:linear-gradient(145deg,rgba(18,16,30,0.98),rgba(12,11,20,0.99));border:1px solid rgba(255,255,255,0.14);border-radius:12px;box-shadow:0 24px 70px rgba(0,0,0,0.9),0 0 0 1px rgba(255,255,255,0.03);z-index:100001;backdrop-filter:blur(20px);}
.rm-picker canvas{display:block;border-radius:7px;border:1px solid rgba(255,255,255,0.07);cursor:crosshair;margin-bottom:10px;}
.rm-picker-track{position:relative;height:10px;border-radius:5px;cursor:pointer;margin-bottom:8px;user-select:none;}
.rm-picker-thumb{width:14px;height:14px;position:absolute;top:-2px;background:#fff;border-radius:50%;border:2px solid #7c6aff;box-shadow:0 1px 4px rgba(0,0,0,.6);pointer-events:none;margin-left:-7px;}
.rm-picker-preview{width:100%;height:22px;border-radius:5px;border:1px solid rgba(255,255,255,0.12);margin-bottom:8px;}
.rm-picker-hex{width:100%;padding:5px 8px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.07);border-radius:6px;color:#e8e6ff;font-family:'DM Mono',monospace;font-size:12px;outline:none;text-align:center;}
.rm-picker-hex:focus{border-color:#7c6aff;}

/* ── Open/close ── */
@keyframes rm-open{0%{opacity:0;scale:.92;filter:blur(8px)}65%{opacity:1;scale:1.02;filter:blur(0)}100%{opacity:1;scale:1;filter:blur(0)}}
@keyframes rm-close{from{opacity:1;scale:1;filter:blur(0)}to{opacity:0;scale:.95;filter:blur(6px)}}
.rm--enter{animation:rm-open .3s cubic-bezier(.16,1,.3,1) forwards;}
.rm--exit{animation:rm-close .2s ease-in forwards;}

/* ── Backdrop blur ── */
#recte-blur{position:fixed;inset:0;z-index:99997;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);background:rgba(0,0,0,.45);display:none;pointer-events:none;}
@keyframes recte-blur-in{from{opacity:0}to{opacity:1}}
@keyframes recte-blur-out{from{opacity:1}to{opacity:0}}
#recte-blur.entering{animation:recte-blur-in .25s ease forwards;}
#recte-blur.exiting{animation:recte-blur-out .2s ease forwards;}

/* ── Snow ── */
#recte-snow{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:99998;display:none;}
`;

const ico = {
    save: `<svg viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>`,
    trash: `<svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`,
    settings: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    eye: `<svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    crosshair: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg>`,
    zap: `<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    misc: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>`,
    users: `<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    info: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    key: `<svg viewBox="0 0 24 24"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>`,
    snow: `<svg viewBox="0 0 24 24"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/><line x1="19.07" y1="4.93" x2="4.93" y2="19.07"/><polyline points="8 4 12 2 16 4"/><polyline points="8 20 12 22 16 20"/><polyline points="20 8 22 12 20 16"/><polyline points="4 8 2 12 4 16"/></svg>`,
    palette: `<svg viewBox="0 0 24 24"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,

    chicken: `<svg viewBox="0 0 24 24">
    <!-- body -->
    <path d="M6 14c0-4 3-7 7-7 2 0 4 1 5 3 2 0 3 2 3 4 0 3-2 6-6 6H11c-3 0-5-2-5-6z"/>
    
    <!-- tail -->
    <path d="M13 7c2-3 5-3 6-1-1 0-2 1-2 2 1 0 2 1 2 2-2 0-4-1-6-3z"/>
    
    <!-- comb -->
    <path d="M12 5c0-1 1-2 2-2s2 1 2 2c0-1 1-2 2-2s2 1 2 2"/>
    
    <!-- beak -->
    <path d="M18 10l3-1-1 2"/>
    
    <!-- eye -->
    <circle cx="16" cy="11" r="1"/>
    
    <!-- legs -->
    <path d="M10 20l-1.5 3M14 20l1.5 3"/>
</svg>`,
};

function mkIco(id) { return `<span class="rm-tab-icon">${ico[id] || ico.misc}</span>`; }

export class MenuUI {
    constructor(u, v) {
        this.tabs = [];
        this.playerRows = new Map();
        this.bindings = [];
        this._groups = {};
        this._init(u, v);
    }

    _init(u, v) {
        const s = document.createElement('style');
        s.textContent = CSS;
        document.head.appendChild(s);

        const root = document.createElement('div');
        root.className = 'rm';
        root.innerHTML = `
            <div class="rm-top">
                <div class="rm-logo"><div class="rm-logo-dot"></div><span>Recte</span><span class="rm-logo-sep">|</span><span class="rm-logo-sub">${u || 'Poxel'} v${v || '1.0'}</span></div>
                <div class="rm-top-right">
                    <button class="rm-save-btn">${ico.save} Save</button>
                    <button class="rm-icon-btn rm-icon-del">${ico.trash}</button>
                </div>
            </div>
            <div class="rm-main">
                <div class="rm-sidebar">
                    <div class="rm-sidebar-inner"></div>
                </div>
                <div class="rm-panels"></div>
            </div>
        `;
        document.body.appendChild(root);

        this.menu = root;
        this.sidebar = root.querySelector('.rm-sidebar-inner');
        this.panelsContainer = root.querySelector('.rm-panels');

        const snowEl = document.createElement('div');
        snowEl.id = 'recte-snow';
        document.body.appendChild(snowEl);

        const blurEl = document.createElement('div');
        blurEl.id = 'recte-blur';
        document.body.appendChild(blurEl);

        const bar = root.querySelector('.rm-top');
        let drag = false, ox = 0, oy = 0;
        bar.addEventListener('mousedown', e => {
            if (e.target.closest('button,select,input')) return;
            drag = true;
            if (!this._placed) {
                const r = root.getBoundingClientRect();
                root.style.left = r.left + 'px'; root.style.top = r.top + 'px';
                root.style.transform = 'none'; this._placed = true;
            }
            const r = root.getBoundingClientRect();
            ox = e.clientX - r.left; oy = e.clientY - r.top;
        });
        document.addEventListener('mouseup', () => drag = false);
        document.addEventListener('mousemove', e => {
            if (drag) { root.style.left = (e.clientX - ox) + 'px'; root.style.top = (e.clientY - oy) + 'px'; }
        });

        const saved = localStorage.getItem('recte_config');
        if (saved) { try { deepmerge(config, JSON.parse(saved)); } catch(e) {} }
        this._applyColors();

        root.querySelector('.rm-save-btn').addEventListener('click', e => {
            try { localStorage.setItem('recte_config', JSON.stringify(config)); } catch(e) {}
            this._ripple(root.querySelector('.rm-save-btn'), e);
        });
        root.querySelector('.rm-icon-del').addEventListener('click', e => {
            localStorage.removeItem('recte_config');
            this._ripple(root.querySelector('.rm-icon-del'), e);
        });
    }

    _applyColors() {
        const r = document.documentElement;
        const c = config.client;
        r.style.setProperty('--acc',      c.accent);
        r.style.setProperty('--txt',      c.text);
        r.style.setProperty('--sub',      c.subtext);
        r.style.setProperty('--muted',    c.muted);
        r.style.setProperty('--card',     c.card);
        r.style.setProperty('--cardHov',  c.cardHover);
        r.style.setProperty('--brd',      c.border);
        r.style.setProperty('--brdH',     c.borderHover);
        r.style.setProperty('--bg',       c.background);
        const m = c.accent.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
        if (m) {
            const [rv, gv, bv] = [parseInt(m[1],16), parseInt(m[2],16), parseInt(m[3],16)];
            r.style.setProperty('--accSoft', `rgba(${rv},${gv},${bv},0.18)`);
            r.style.setProperty('--accGlow', `rgba(${rv},${gv},${bv},0.35)`);
        }
    }

    _ripple(el, e) {
        const r = document.createElement('span');
        r.className = 'rm-ripple';
        r.style.top = e.offsetY + 'px'; r.style.left = e.offsetX + 'px';
        el.appendChild(r);
        r.addEventListener('animationend', () => r.remove());
    }

    _loadParticlesJS() {
        return new Promise(resolve => {
            if (window.particlesJS) { resolve(); return; }
            const s = document.createElement('script');
            s.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
            s.onload = resolve; s.onerror = resolve;
            document.head.append(s);
        });
    }

    _initSnow() {
        if (this._snowInited) return;
        this._snowInited = true;
        this._loadParticlesJS().then(() => {
            if (!window.particlesJS) return;
            window.particlesJS('recte-snow', {
                particles: {
                    number: { value: config.snow.amount, density: { enable: true, value_area: 800 } },
                    color: { value: config.snow.color },
                    opacity: { value: config.snow.opacity, random: false, anim: { enable: false } },
                    size: { value: config.snow.size, random: config.snow.randomSize, anim: { enable: false } },
                    line_linked: { enable: false },
                    move: { enable: true, speed: config.snow.speed, direction: 'bottom', random: true, straight: false, out_mode: 'out', bounce: false, attract: { enable: true, rotateX: 300, rotateY: 1200 } },
                },
                interactivity: { events: { onhover: { enable: false }, onclick: { enable: false }, resize: false } },
                retina_detect: true,
            });
        });
    }

    _reinitSnow() {
        if (window.pJSDom && window.pJSDom.length > 0) {
            try { window.pJSDom[0].pJS.fn.vendors.destroypJS(); } catch(e) {}
            window.pJSDom = [];
        }
        this._snowInited = false;
        const snowEl = document.getElementById('recte-snow');
        if (snowEl) snowEl.innerHTML = '';
        if (config.snow.enabled) this._initSnow();
    }

    togglevis() {
        const snowEl = document.getElementById('recte-snow');
        const blurEl = document.getElementById('recte-blur');
        const hidden = window.getComputedStyle(this.menu).display === 'none';
        if (hidden) {
            this.menu.style.display = 'flex';
            if (config.snow.enabled) { snowEl.style.display = 'block'; this._initSnow(); }
            blurEl.style.display = 'block';
            blurEl.classList.remove('exiting'); void blurEl.offsetWidth; blurEl.classList.add('entering');
            this.menu.classList.remove('rm--exit'); void this.menu.offsetWidth; this.menu.classList.add('rm--enter');
        } else {
            snowEl.style.display = 'none';
            blurEl.classList.remove('entering'); blurEl.classList.add('exiting');
            blurEl.addEventListener('animationend', () => { blurEl.style.display = 'none'; blurEl.classList.remove('exiting'); }, { once: true });
            this.menu.classList.remove('rm--enter'); this.menu.classList.add('rm--exit');
            this.menu.addEventListener('animationend', () => { this.menu.style.display = 'none'; this.menu.classList.remove('rm--exit'); }, { once: true });
        }
    }

    syncUI() { this.bindings.forEach(f => f()); }

    _applyScrollFix(el) {
        el.addEventListener('wheel', e => {
            const p = el.scrollTop; el.scrollTop += e.deltaY;
            if (el.scrollTop !== p) { e.preventDefault(); e.stopPropagation(); }
        }, { passive: false });
    }

    addTab(label, iconId, groupOrCb, cb) {
        let group = '', fn;
        if (typeof iconId === 'function') { fn = iconId; }
        else if (typeof groupOrCb === 'function') { fn = groupOrCb; }
        else { group = groupOrCb || ''; fn = cb; }
        const icon = typeof iconId === 'string' && ico[iconId] ? iconId : 'misc';

        if (group && !this._groups[group]) {
            this._groups[group] = true;
            const l = document.createElement('div');
            l.className = 'rm-group-label'; l.textContent = group;
            this.sidebar.appendChild(l);
        }

        const tab = document.createElement('div');
        tab.className = 'rm-tab';
        tab.innerHTML = `${mkIco(icon)}<span>${label}</span>`;
        this.sidebar.appendChild(tab);

        const panel = document.createElement('div');
        panel.className = 'rm-panel';
        this._applyScrollFix(panel);
        this.panelsContainer.appendChild(panel);

        tab.addEventListener('click', () => {
            this.tabs.forEach(t => { t.tab.classList.remove('active'); t.panel.classList.remove('active'); });
            tab.classList.add('active'); panel.classList.add('active');
        });
        if (this.tabs.length === 0) { tab.classList.add('active'); panel.classList.add('active'); }

        const entry = { tab, panel };
        this.tabs.push(entry);
        if (fn) fn(panel);
        return entry;
    }

    addPanelGrid(c) {
        const g = document.createElement('div');
        g.className = 'rm-panel-grid'; c.appendChild(g); return g;
    }

    addSection(c, title, iconId) {
        const wrap = document.createElement('div'); wrap.className = 'rm-section';
        const card = document.createElement('div'); card.className = 'rm-section-card';
        const hd = document.createElement('div'); hd.className = 'rm-section-title';
        hd.innerHTML = (iconId && ico[iconId] ? `${ico[iconId]} ` : '') + title;
        const body = document.createElement('div'); body.className = 'rm-section-body';
        card.appendChild(hd); card.appendChild(body); wrap.appendChild(card); c.appendChild(wrap);
        body._section = wrap; return body;
    }

    _row(label) {
        const r = document.createElement('div'); r.className = 'rm-row';
        const l = document.createElement('span'); l.className = 'rm-row-label'; l.textContent = label;
        r.appendChild(l); return r;
    }

    addToggleRow(c, label, obj, key, onChange) {
        const row = this._row(label);
        const lbl = document.createElement('label'); lbl.className = 'rm-toggle';
        lbl.innerHTML = `<input type="checkbox" ${obj[key] ? 'checked' : ''}><span class="rm-slider"></span>`;
        const inp = lbl.querySelector('input');
        inp.addEventListener('change', e => {
            obj[key] = e.target.checked;
            lbl.classList.remove('popped'); void lbl.offsetWidth; lbl.classList.add('popped');
            lbl.addEventListener('animationend', () => lbl.classList.remove('popped'), { once: true });
            if (e.target.checked && typeof onChange === 'function') onChange(obj, key);
        });
        this.bindings.push(() => { inp.checked = !!obj[key]; });
        row.appendChild(lbl); c.appendChild(row); return row;
    }

    addSliderRow(c, label, obj, key, min, max, step) {
        const row = this._row(label);
        let v = parseFloat(obj[key]); if (isNaN(v)) v = min; v = Math.max(min, Math.min(max, v)); obj[key] = v;
        const wrap = document.createElement('div'); wrap.className = 'rm-slider-wrap';
        const track = document.createElement('div'); track.className = 'rm-crange';
        const fill = document.createElement('div'); fill.className = 'rm-crange-fill';
        const thumb = document.createElement('div'); thumb.className = 'rm-crange-thumb';
        track.appendChild(fill); track.appendChild(thumb);
        const val = document.createElement('span'); val.className = 'rm-range-val'; val.textContent = v;
        const decimals = step.toString().includes('.') ? step.toString().split('.')[1].length : 0;
        const snap = raw => parseFloat((Math.round((raw - min) / step) * step + min).toFixed(decimals));
        const update = n => { const pct = ((n - min) / (max - min)) * 100; fill.style.width = pct + '%'; thumb.style.left = pct + '%'; val.textContent = n; };
        update(v);
        track.addEventListener('mousedown', e => {
            e.preventDefault(); e.stopPropagation();
            const cleanup = () => { document.removeEventListener('mousemove', move); document.removeEventListener('mouseup', up); thumb.style.transform = 'translate(-50%,-50%)'; };
            const move = e2 => {
                if (!e2.buttons) { cleanup(); return; }
                const r = track.getBoundingClientRect();
                const n = snap(min + Math.max(0, Math.min(1, (e2.clientX - r.left) / r.width)) * (max - min));
                obj[key] = n; update(n);
                val.classList.remove('popping'); void val.offsetWidth; val.classList.add('popping');
                val.addEventListener('animationend', () => val.classList.remove('popping'), { once: true });
            };
            const up = e2 => { if (e2.buttons !== 0) return; cleanup(); };
            thumb.style.transform = 'translate(-50%,-50%) scale(1.35)';
            document.addEventListener('mousemove', move);
            document.addEventListener('mouseup', up);
            move(e);
        });
        this.bindings.push(() => update(obj[key]));
        wrap.appendChild(track); wrap.appendChild(val); row.appendChild(wrap); c.appendChild(row); return row;
    }

    addSelectRow(c, label, options, obj, key) {
        const row = this._row(label);
        const sel = document.createElement('select'); sel.className = 'rm-select';
        options.forEach(o => { const opt = document.createElement('option'); opt.value = o; opt.textContent = o; if (obj[key] === o) opt.selected = true; sel.appendChild(opt); });
        sel.addEventListener('change', e => { obj[key] = e.target.value; });
        this.bindings.push(() => { sel.value = obj[key]; });
        row.appendChild(sel); c.appendChild(row); return row;
    }

    addTextRow(c, label, obj, key, ph) {
        const row = this._row(label);
        const inp = document.createElement('input'); inp.type = 'text'; inp.className = 'rm-textinput';
        inp.value = obj[key] || ''; inp.placeholder = ph || '';
        inp.addEventListener('input', e => { obj[key] = e.target.value; });
        ['keydown','keypress','keyup'].forEach(ev => inp.addEventListener(ev, e => e.stopImmediatePropagation()));
        inp.addEventListener('pointerdown', e => e.stopImmediatePropagation());
        this.bindings.push(() => { inp.value = obj[key] || ''; });
        row.appendChild(inp); c.appendChild(row); return row;
    }

    addButton(c, label, obj, key, cb) {
        const row = this._row(label);
        const btn = document.createElement('div'); btn.className = 'rm-btn';
        btn.textContent = (obj && obj[key]) || label;
        btn.addEventListener('click', e => { this._ripple(btn, e); if (cb) cb(obj, key, btn); });
        row.appendChild(btn); c.appendChild(row); return row;
    }

    addColorRow(c, label, obj, key, onChange) {
        const row = this._row(label);
        const sw = document.createElement('div'); sw.className = 'rm-swatch';
        const refresh = () => { const col = obj[key]; sw.style.background = (col && typeof col === 'object' && col.h !== undefined) ? `hsl(${col.h},${col.s}%,${col.l}%)` : (typeof col === 'string' ? col : '#ffffff'); };
        refresh(); this.bindings.push(refresh);
        sw.addEventListener('click', () => this.openColorPicker(sw, obj, key, obj[key] ?? getComputedStyle(sw).backgroundColor, col => { sw.style.background = col; if (onChange) onChange(col); }));
        row.appendChild(sw); c.appendChild(row); return row;
    }

    openColorPicker(triggerEl, obj, key, initialColor, onChange) {
        document.querySelectorAll('.rm-picker').forEach(el => el.remove());
        const PW = 206, PH = 130;
        const popup = document.createElement('div'); popup.className = 'rm-picker';
        const cvs = document.createElement('canvas'); cvs.width = PW; cvs.height = PH; cvs.style.cssText = `width:${PW}px;height:${PH}px;`; popup.appendChild(cvs);
        const ctx2 = cvs.getContext('2d');
        const hueTrack = document.createElement('div'); hueTrack.className = 'rm-picker-track'; hueTrack.style.background = 'linear-gradient(to right,red,yellow,lime,cyan,blue,magenta,red)';
        const hueThumb = document.createElement('div'); hueThumb.className = 'rm-picker-thumb'; hueTrack.appendChild(hueThumb); popup.appendChild(hueTrack);
        const alphaTrack = document.createElement('div'); alphaTrack.className = 'rm-picker-track';
        const alphaThumb = document.createElement('div'); alphaThumb.className = 'rm-picker-thumb'; alphaTrack.appendChild(alphaThumb); popup.appendChild(alphaTrack);
        const preview = document.createElement('div'); preview.className = 'rm-picker-preview'; popup.appendChild(preview);
        const hexInput = document.createElement('input'); hexInput.className = 'rm-picker-hex'; hexInput.placeholder = '#rrggbbaa'; popup.appendChild(hexInput);
        document.body.appendChild(popup);
        const tr = triggerEl.getBoundingClientRect();
        let top = tr.bottom + 6, left = tr.left;
        if (left + popup.offsetWidth > window.innerWidth - 8) left = window.innerWidth - popup.offsetWidth - 8;
        if (top + popup.offsetHeight > window.innerHeight - 8) top = tr.top - popup.offsetHeight - 6;
        popup.style.top = top + 'px'; popup.style.left = left + 'px';
        let hue = 0, sat = 1, bri = 1, alpha = 1, cursorX = PW, cursorY = 0;
        const rgbaToHex = (r,g,b,a) => { const h = n => n.toString(16).padStart(2,'0'); return '#'+h(r)+h(g)+h(b)+(a<1?h(Math.round(a*255)):''); };
        const parseColor = str => { const t=document.createElement('canvas');t.width=t.height=1;const ct=t.getContext('2d');ct.fillStyle=(str&&str!=='none')?str:'#ffffff';ct.fillRect(0,0,1,1);const[r,g,b,a]=ct.getImageData(0,0,1,1).data;return{r,g,b,a:a/255}; };
        const rgbToHsv = (r,g,b) => { r/=255;g/=255;b/=255;const mx=Math.max(r,g,b),mn=Math.min(r,g,b),d=mx-mn;let h=0;if(d){switch(mx){case r:h=((g-b)/d+(g<b?6:0))*60;break;case g:h=((b-r)/d+2)*60;break;case b:h=((r-g)/d+4)*60;break;}}return{h,s:mx?d/mx:0,v:mx}; };
        const getRgb = (h,s,v) => { const f=(n,k=(n+h/60)%6)=>v-v*s*Math.max(Math.min(k,4-k,1),0);return[Math.round(f(5)*255),Math.round(f(3)*255),Math.round(f(1)*255)]; };
        const drawCanvas = () => { ctx2.fillStyle=`hsl(${hue},100%,50%)`;ctx2.fillRect(0,0,PW,PH);const gW=ctx2.createLinearGradient(0,0,PW,0);gW.addColorStop(0,'rgba(255,255,255,1)');gW.addColorStop(1,'rgba(255,255,255,0)');ctx2.fillStyle=gW;ctx2.fillRect(0,0,PW,PH);const gB=ctx2.createLinearGradient(0,0,0,PH);gB.addColorStop(0,'rgba(0,0,0,0)');gB.addColorStop(1,'rgba(0,0,0,1)');ctx2.fillStyle=gB;ctx2.fillRect(0,0,PW,PH);ctx2.strokeStyle='#fff';ctx2.lineWidth=1.5;ctx2.beginPath();ctx2.arc(cursorX,cursorY,5,0,Math.PI*2);ctx2.stroke();ctx2.strokeStyle='rgba(0,0,0,0.4)';ctx2.lineWidth=1;ctx2.beginPath();ctx2.arc(cursorX,cursorY,6.5,0,Math.PI*2);ctx2.stroke(); };
        const commit = () => { const[r,g,b]=getRgb(hue,sat,bri);const rgba=`rgba(${r},${g},${b},${alpha.toFixed(3)})`;obj[key]=rgba;triggerEl.style.background=rgba;preview.style.background=rgba;alphaTrack.style.background=`linear-gradient(to right,rgba(${r},${g},${b},0),rgba(${r},${g},${b},1))`;hexInput.value=rgbaToHex(r,g,b,alpha);if(typeof onChange==='function')onChange(rgba); };
        const clamp = (v,lo,hi) => Math.max(lo,Math.min(hi,v));
        const setHueThumb = h => { hueThumb.style.left=(h/360)*hueTrack.offsetWidth+'px'; };
        const setAlphaThumb = a => { alphaThumb.style.left=a*alphaTrack.offsetWidth+'px'; };
        const bindDrag = (el, onMove) => { el.addEventListener('mousedown',e=>{e.preventDefault();e.stopPropagation();onMove(e);const cleanup=()=>{document.removeEventListener('mousemove',mm);document.removeEventListener('mouseup',up);};const mm=e2=>{if(!e2.buttons){cleanup();return;}onMove(e2);};const up=e2=>{if(e2.buttons!==0)return;cleanup();};document.addEventListener('mousemove',mm);document.addEventListener('mouseup',up);}); };
        bindDrag(cvs, e=>{const r=cvs.getBoundingClientRect();cursorX=clamp(e.clientX-r.left,0,PW);cursorY=clamp(e.clientY-r.top,0,PH);sat=cursorX/PW;bri=1-cursorY/PH;drawCanvas();commit();});
        bindDrag(hueTrack, e=>{const r=hueTrack.getBoundingClientRect();hue=clamp((e.clientX-r.left)/r.width,0,1)*360;setHueThumb(hue);drawCanvas();commit();});
        bindDrag(alphaTrack, e=>{const r=alphaTrack.getBoundingClientRect();alpha=clamp((e.clientX-r.left)/r.width,0,1);setAlphaThumb(alpha);commit();});
        hexInput.addEventListener('change', () => { const{r,g,b,a}=parseColor(hexInput.value);alpha=a;const hsv=rgbToHsv(r,g,b);hue=hsv.h;sat=hsv.s;bri=hsv.v;cursorX=sat*PW;cursorY=(1-bri)*PH;setHueThumb(hue);setAlphaThumb(alpha);drawCanvas();commit(); });
        (function init(){const{r,g,b,a}=parseColor(initialColor||'#ff0000');alpha=a;const hsv=rgbToHsv(r,g,b);hue=hsv.h;sat=hsv.s;bri=hsv.v;cursorX=sat*PW;cursorY=(1-bri)*PH;setHueThumb(hue);setAlphaThumb(alpha);drawCanvas();commit();})();
        setTimeout(() => { document.addEventListener('mousedown', function outside(e) { if (!popup.contains(e.target) && e.target !== triggerEl) { popup.remove(); document.removeEventListener('mousedown', outside); } }); }, 0);
    }
}
