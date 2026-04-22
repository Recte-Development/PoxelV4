import { loadAndInitPlugin } from "./assets/injection.js";
import { UiMain, allowTypingInLilGuiInputs } from "./assets/ui/uimain.js";
import { config } from "./assets/ui/config.js";
import { chatManager, shooterhooks, localPlayer, localPlayerPtr, localPlayerSessionId, currentMode } from "./assets/hooks/shooter.js";
import { Schema, Spectator, AimManager, GameTimer, ColyShooter, ColyView, ColyBehaviour, Physics, ColyHealth, NeckController, ColyTeamMember, GameModeManager, GameModeData, GameMode, MyRoomState, NetworkManager,
  RaycastHit, AFKManager, ChatUIManager, MovementController,
  Camera, Time,Input, 
  Component, SettingsManager, SettingsConfiguration, NotificationManager,
  Ray, CharacterCamera, Weapon,
  Quaternion,
  ColyTransform, } from "./structs.js"
import {
  keysPressed,
  randomFloatBetween,
  Vector3,
  LocalArray,
  QuaternionUtils,
  keyOptions,
  sleep,
} from "./assets/utils.js";
import { esp } from "./assets/render.js";
import {main} from "./assets/aimbot.js";
export let Players = new Map();
window.playermap = Players;
let init = false
export const ui = new UiMain("Recte - Poxel", "1.0.0");

  loadAndInitPlugin().then((ctx) => {
    
    document.addEventListener("keydown", (e) => {
      if (e.code.toLowerCase() == config.settings.toggle.toLowerCase()) {
        ui.togglevis();
      }
    });
    


    
    shooterhooks();

    ui.addTab("Visuals", (panel)=>{
      const settings = ui.addSection(panel, "Settings");
      ui.addToggleRow(settings, "Team Check", config.visuals, "teamCheck");

      ui.addButton(settings, "Test", "Execute", "Execute", ()=>{
        try{
        let cT = new ColyTransform(new ColyShooter(localPlayerPtr).movementStateManager.colyTransform.ptr);
        console.log(cT)
        cT.SendPositionUpdate(new Component(Players.values().next().value.ptr).transform.position, QuaternionUtils.random().createPtr(), 0);
        }
        catch (error) {console.error(error)}
      });
      
      


      const nametags = ui.addSection(panel, "Nametags");
      ui.addToggleRow(nametags, "Enabled", config.visuals, "nametags");
      ui.addToggleRow(nametags, "Health", config.visuals, "nametagsHealth");
      ui.addToggleRow(nametags, "Distance", config.visuals, "nametagsDistance");
      ui.addColorRow(nametags, "Color", config.visuals, "nametagsColor");
  
      /*
      boxes: false,
        boxType: "Corner",
        boxThickness: 2,
        boxColor: "#cad3f5",*/
      const boxes = ui.addSection(panel, "Boxes");
      ui.addToggleRow(boxes, "Enabled", config.visuals, "boxes");
      ui.addSliderRow(boxes, "Thickness", config.visuals, "boxThickness", 1, 10, .1);
      ui.addSelectRow(boxes, 'Type', ["Outline", "Corner"], config.visuals, 'boxType');
      ui.addColorRow(boxes, "Color", config.visuals, "boxColor");

      /*
        filledBoxes: false,
        filledBoxColor: "#ff69b4",

        skeleton: false,
        skeletonColor: "#8a2be2",
        skeletonThickness: 2,
      */

      const filledBoxes = ui.addSection(panel, "Filled Boxes");
      ui.addToggleRow(filledBoxes, "Enabled", config.visuals, "filledBoxes");
      ui.addColorRow(filledBoxes, "Color", config.visuals, "filledBoxColor");

      const skeleton = ui.addSection(panel, "Skeleton");
      ui.addToggleRow(skeleton, "Enabled", config.visuals, "skeleton");
      ui.addSliderRow(skeleton, "Thickness", config.visuals, "skeletonThickness", 1, 10, .1);
      ui.addColorRow(skeleton, "Color", config.visuals, "skeletonColor");

      /*
      tracers: true,
        tracerColor: "#8a2be2",
        tracerTo: "Feet",
        tracerFrom: "Bottom Center",
        tracerThickness: 2,
      */
      const tracers = ui.addSection(panel, "Tracers")
      ui.addToggleRow(tracers, 'Enabled', config.visuals, 'tracers');
      ui.addSliderRow(tracers, "Thickness", config.visuals, "tracerThickness", 1, 10, .1);
      ui.addColorRow(tracers, "Color", config.visuals, "tracerColor");
      ui.addSelectRow(tracers, 'Screen Location', ["Bottom Center", "Top Center", "Center", "Bottom Left", "Bottom Right", "Top Left", "Top Right"], config.visuals, 'tracerFrom');
      ui.addSelectRow(tracers, 'Body Location', ["Feet", "Head"], config.visuals, 'tracerTo');

    })
    
    ui.addTab("Misc", (panel)=>{
      const main = ui.addSection(panel, "Misc");
      ui.addToggleRow(main, "Anti-AFK", config.misc, "antiafk");
      ui.addToggleRow(main, "Never Suicide", config.misc, "neverSuicide");
      ui.addToggleRow(main, "No Muzzle Flash", config.misc, "noflash");
      ui.addToggleRow(main, "Infinite Dash", config.misc, "infDash");
      ui.addToggleRow(main, "Custom Dash Force", config.misc, "customDashForce");
      ui.addSliderRow(main, "Dash Force", config.misc, "dashForce", 1, 75, 1);
      
      ui.addToggleRow(main, "Aim View Model", config.misc, "aimingViewModel");
      ui.addSliderRow(main, "Aim View Model FOV", config.misc, "aimingViewModelFOV", 0, 3, .1);
      
      ui.addToggleRow(main, "Custom FOV", config.misc, "customFOV");
      ui.addSliderRow(main, "Custom FOV Amount", config.misc, "customFOVAmount", 1, 180, 1);

      ui.addToggleRow(main, "Flight", config.misc, "flight");
      ui.addSliderRow(main, "Flight Speed", config.misc, "flightSpeed", 1, 75, 1);

      ui.addToggleRow(main, "Third Person", config.misc, "thirdPerson");
      ui.addSliderRow(main, "Camera Distance", config.misc, "thirdPersonDist", 1, 10, 0.5);

      /*
      speed: false,
       speedAmount: 10,
       jumpHeight: false,
       jumpHeightAmount: 16,
       slopeAngle: false,
       slopeAngleAmount: 16,*/

      const chat = ui.addSection(panel, "Chat")
      ui.addToggleRow(chat, "Chat Spam", config.misc, "chatSpam");
      ui.addTextRow(chat, "Spam Message", config.misc, "chatSpamMessage", "recte.cc")
      ui.addButton(chat, "Send Message", "Execute", "Execute1", ()=>{
        let instance = new ChatUIManager(chatManager);
        instance.SendChatMessage(window.ctx.createMstr(config.misc.chatSpamMessage))
      })

    });

    ui.addTab("Aimbot", (panel) => {

      const aimbot = ui.addSection(panel, "Aimbot");
      ui.addToggleRow(aimbot, "Enabled", config.rage, "aimbot")

      const aimbotSettings = ui.addSection(panel, "Aimbot Settings");
      ui.addSelectRow(aimbotSettings, "Aimbot Type", ["Silent", "Mouse", "Magic", "Internal"], config.rage, "aimbotType")
      ui.addSelectRow(aimbotSettings, "Aim Bone", ["Neck", "Chest", "Hips"], config.rage, "aimBone")
      ui.addSelectRow(aimbotSettings, "Sort Mode", ["Screen", "World"], config.rage, "aimbotSorting")
      ui.addSelectRow(aimbotSettings, "Aim Key", keyOptions, config.rage, "aimKey");
      ui.addSliderRow(aimbotSettings, "Aim Speed", config.rage, "aimSpeed", .01, 1, .01);
      ui.addToggleRow(aimbotSettings, "Draw FOV", config.rage, "drawFOV");
      ui.addToggleRow(aimbotSettings, "FOV Check", config.rage, "fovCheck");
      ui.addToggleRow(aimbotSettings, "Screen Check", config.rage, "screenCheck");
      ui.addToggleRow(aimbotSettings, "Aim Key Check", config.rage, "keyCheck");
      ui.addSliderRow(aimbotSettings, "FOV", config.rage, "aimbotFOV", 30, 300, 1)
      ui.addSliderRow(aimbotSettings, "FOV Thickness", config.rage, "fovThickness", 1, 10, 1)
      ui.addColorRow(aimbotSettings, "FOV Color", config.rage, "fovColor");

      
/*
        drawFOV: false,
        fovCheck: false,
        aimbotFOV: 150,
        fovColor: "#880000",
        fovThickness: 2,

      /*
      const main = ui.addSection(panel, "Aimbot (ignore)");
      ui.addToggleRow(main, "Aimbot", config.rage, "aimbot");
      ui.addToggleRow(main, "Silent Aim", config.rage, "silentaim");
      ui.addToggleRow(main, "Visible Check", config.rage, "vischeck");
      //ui.addToggleRow(main, 'Aimbot', config.rage, 'aimbot'); // add magicbullet / silent aim
      ui.addSelectRow(
        main,
        "Aim Type",
        ["Center of screen", "Closest"],
        config.rage,
        "aimbottype",
      );
      ui.addSelectRow(main, "Aim Key", keyOptions, config.rage, "aimkey");
      ui.addSliderRow(
        main,
        "Aim Speed",
        config.rage,
        "aimspeed",
        0.01,
        1,
        0.01,
      );
      ui.addSelectRow(
        main,
        "Aim Bone",
        ["Head", "Legs", "Body"],
        config.rage,
        "aimbone",
      );
wallBang: false,
        randomHit: false,
        oneShot: false,
        damage: 0,

      ui.addToggleRow(main, "FOV", config.visuals, "fov");
      ui.addToggleRow(main, "FOV Circle", config.rage, "fovcirlce");
      ui.addSliderRow(main, "FOV Size", config.visuals, "fovsize", 1, 1000, 1);
      ui.addColorRow(main, "FOV Color", config.visuals, "fovcolor");
      ui.addToggleRow(main, "FOV Rainbow", config.visuals, "fovrainbow");*/
    });

    ui.addTab("Combat", (panel) =>{

      const weapons = ui.addSection(panel, "Weapons");
      ui.addToggleRow(weapons, "Infinite Ammo", config.rage, "infAmmo")
      ui.addToggleRow(weapons, "No Recoil", config.rage, "noRecoil")
      ui.addToggleRow(weapons, "Wall Bang", config.rage, "wallBang")
      ui.addToggleRow(weapons, "Bullets Hit Random", config.rage, "randomHit")
      ui.addToggleRow(weapons, "One Shot Kill", config.rage, "oneShot")
      ui.addSliderRow(weapons, "Custom Damage", config.rage, "damage", 0, 300, 1)

      ui.addToggleRow(weapons, "Fire Rate Modifier", config.rage, "customFireRate");
      ui.addSliderRow(weapons, "Fire Rate", config.rage, "fireRate", 1, 300, 1)


      ui.addToggleRow(weapons, "Hold To Shoot", config.rage, "holdToShoot");
      ui.addToggleRow(weapons, "No Hands", config.rage, "noHands");
      ui.addToggleRow(weapons, "No Gun", config.rage, "noGun");
      ui.addToggleRow(weapons, "Fast Switch", config.rage, "fastSwitch");

      const exploits = ui.addSection(panel, "Exploits");
      ui.addToggleRow(exploits, "Kill All", config.rage, "killAll")
      ui.addButton(exploits, "God Mode (Self)", "Execute", "Execute", ()=>{
         new ColyShooter(localPlayerPtr).SendRPCShoot(ctx.createMstr(localPlayerSessionId), Vector3.zero().createPtr(), 3, -999999999, null, false);
      });
      ui.addButton(exploits, "God Mode (All)", "Execute", "Execute", ()=>{
        Players.forEach((player) =>{
            new ColyShooter(player.ptr).SendRPCShoot(ctx.createMstr(new ColyBehaviour(player).colyView.sessionId), Vector3.zero().createPtr(), 3, -999999999, null, false);
        })
      });

    });

    ui.addTab("Settings", (panel) =>{
      const main = ui.addSection(panel, "Keybinds");
      
      ui.addSelectRow(main, 'Menu Toggle Key', config.settings.keyOptions, config.settings, 'toggle');
      ui.addSelectRow(main, 'Godmode Key', config.settings.keyOptions, config.settings, 'godmodekey');
    })

    ui.addTab("Credits", (panel) => {
      const main = ui.addSection(panel, "Credits");
      ui.addButton(
        main,
        "Discord",
        { text: "Join our Discord!" },
        "text",
        (obj, key, el) => {
          window.open("https://recte.cc/invite", "_blank");
        },
      );
    });

    allowTypingInLilGuiInputs();
    mainloop();
  });

const toggleKeys = {
    godmode: false,
    wallbang: false,
    chams: false,
    esp: false,
    loadout: false,
    invis: false,
    fly: false,
    spinbot: false
};

function mainloop(timestamp) {
  requestAnimationFrame(mainloop);
  esp();
  main();
  try {
    if (!init) {
        console.log("Recte Loaded & Shit"
      );
      init = true;
    }
  } catch {}

   if (keysPressed[config.settings.godmodekey.toLowerCase()]) {
        if (!toggleKeys.godmode) {
            new ColyShooter(localPlayerPtr).SendRPCShoot(ctx.createMstr(localPlayerSessionId), Vector3.zero().createPtr(), 3, -999999999, null, false);
      
            toggleKeys.godmode = true;
        }
    } else {
        toggleKeys.godmode = false;
    }

  document.querySelectorAll(".banner-container").forEach((rawr)=>{rawr.remove()})

}
