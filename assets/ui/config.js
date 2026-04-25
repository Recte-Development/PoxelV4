export let config = {
    rage: {

        aimbot: false,
        aimKey: "RightMouse",
        aimSpeed: 1,
        aimbotSorting: "Screen",

        aimbotType: "Silent",
        aimBone: "Neck", 

        wallBang: false,
        randomHit: false,
        oneShot: false,
        damage: 0,

        drawFOV: false,
        fovCheck: false,
        aimbotFOV: 150,
        fovColor: "#880000",
        fovThickness: 2,

        keyCheck: false,
        screenCheck: false,

        killAll: false,

        infAmmo: false,
        noRecoil: false,
        customFireRate: false,
        fireRate: 60,
        holdToShoot: true,

        fastSwitch: true,
        noHands: false,
        noGun: false,


    },
    misc: {
        antiafk: true,

        chatSpam: false,
        chatSpamMessage: "recte.cc owns this shitty game",

        infDash: false,
        customDashForce: false,
        dashForce: 3,

        flight: false,
        flightSpeed: 15,

        noflash: false,

        aimingViewModel: false,
        aimingViewModelFOV: 60,

        customFOV: false,
        customFOVAmount: 120,

        neverSuicide: false,

        thirdPerson: false,
        thirdPersonDist: 3,
    },
    visuals: {
        teamCheck: true,

        nametags: true,
        nametagsHealth: false,
        nametagsDistance: false,
        nametagsColor: "#9a95b9",

        tracers: false,
        tracerColor: "#8a2be2",
        tracerTo: "Feet",
        tracerFrom: "Bottom Center",
        tracerThickness: 2,

        boxes: false,
        boxType: "Corner",
        boxThickness: 2,
        boxColor: "#ff69b4",

        filledBoxes: false,
        filledBoxColor: "#ff69b44d",

        skeleton: false,
        skeletonColor: "#8a2be2",
        skeletonThickness: 2,

        chickenNametags: false,
        chickenNametagColor: "#9a95b9",

        chickenSkeletons: false,
        chickenSkeletonColor: "#8a2be2",
        chickenSkeletonThickness: 2,
        
    },
    client: {
        accent:      '#7c6aff',
        text:        '#e8e6ff',
        subtext:     '#9896b8',
        muted:       '#555470',
        card:        'rgba(255,255,255,0.04)',
        cardHover:   'rgba(255,255,255,0.07)',
        border:      'rgba(255,255,255,0.07)',
        borderHover: 'rgba(255,255,255,0.14)',
        background:  '#0b0b10',
    },
    snow: {
        enabled: true,
        color: '#cad3f5',
        amount: 20,
        size: 5,
        randomSize: true,
        speed: 1.5,
        opacity: 0.7,
    },
    settings: {
        toggle: 'ShiftRight',
        keyOptions: [
            "ShiftLeft", "Ctrl", "Alt", "ShiftRight",
            "Space", "CapsLock", "Tab",
            "Q", "E", "R", "F", "V", "B", "0", "Insert", "F9", "O", "I", "P", "Backquote", "G", "C", "L", "F", "None"
        ],
        godmodekey: "None",
        wallbangkey: "None",
        chamskey: "None",
        espkey: "None",
        boxplayers: "None",
        killbuilds: "None",
        loadoutkey: "None",
        inviskey: "None",
        flykey: "None",
        spinbotkey: "None"
    }
};