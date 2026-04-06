import { SettingsManager, SettingsConfiguration, Camera, GameObject, Input, Time, Transform, MovementController, Player, ColyShooter, Spectator, ColyBehaviour, ColyView, ColyTeamMember, AFKManager, GameModeManager, MyRoomState, Gun, Component, ChatUIManager, GameModeData, NetworkManager, GameTimer, AimManager } from "../../structs.js";
import { config } from "../ui/config.js";
import { keysPressed, LocalArray, Quaternion, Vector3, nullCheck, ChatBypass, randomRange } from "../utils.js";
import { Players } from "../../main.js";
import { } from "../render.js";
import { main, getTargets } from "../aimbot.js";
export let currentMode = null;
export let localPlayer = null;
export let localPlayerPtr = null;
export let localPlayerSessionId = null;
export let chatManager = null;
export let weaponCamera = null;
export let settingsConfig = null;



export function shooterhooks() {
    /*window.ctx.hookPrefix({
          typeName: "BattleLab.CustomPropertiesExtentions",
          methodName: "StartGame",
          params: ['i32', 'i32', 'i32']
      }, (room, byte) => {
          window.unityInstance = window.unityGameInstance;
          console.log("byte", byte)
      })*/
    try {
        console.log("Starting Hooks")




        window.ctx.hookPrefix({
            typeName: "ColyShooter",
            methodName: "Update",
            params: ['i32', 'i32']
        }, (ptr) => {
            let player = new ColyBehaviour(ptr).colyView; // this no error
            let shooter = new ColyShooter(ptr);
            if (!Players.has(player.sessionId) && !player.isMine) {
                Players.set(player.sessionId, { 'ptr': ptr, 'timestamp': Date.now() })

                console.log(`Added: ${player.Nickname.mstr()} to the playerlist`)
            }
            if (player.isMine) {
                localPlayer = new ColyShooter(ptr);
                localPlayerPtr = ptr;
                localPlayerSessionId = player.sessionId
            }

            if (config.rage.killAll && !player.isMine) shooter.CommitSuicide();

            
                
        });

        let defaultDashForce = null;
        window.ctx.hookPrefix({
            typeName: "KinematicCharacterController.Examples.MovementController",
            methodName: "Update",
            params: ['i32', 'i32']
        }, (ptr) => {
            let mc = new MovementController(ptr);

            if (config.misc.infDash) mc.lastDashTime = 0;
            if (config.misc.customDashForce){
                if (!defaultDashForce) defaultDashForce = mc.dashForce;
                mc.dashForce = config.misc.dashForce;
            }
            else{
                if (!defaultDashForce) return;
                if (mc.dashForce != defaultDashForce) mc.dashForce = defaultDashForce
            }

                
        });
        window.ctx.hookPrefix({
            typeName: "MuzzleFlash",
            methodName: "Play",
            params: ['i32', 'i32', 'i32']
        }, (ptr, muzzleFlashSetParentNullTemp) => {
            return !config.misc.noflash
          
        });

        


        window.ctx.hookPrefix({
            typeName: "ColyShooter",
            methodName: "OnDisable",
            params: ['i32', 'i32']
        }, (ptr) => {
            let player = new ColyBehaviour(ptr).colyView; // this no error
            if (player.isMine) {
                localPlayer = null
            }
            if (Players.has(player.sessionId)) {
                Players.delete(player.sessionId);
                console.log(`Removed: ${player.Nickname.mstr()} from the playerlist`)
            }
        });

        window.ctx.hookPrefix({
            typeName: "AFKManager",
            methodName: "Update",
            params: ['i32', 'i32']
        }, (ptr) => {
            if (config.misc.antiafk) new AFKManager(ptr).ResetInactivityTimer();
        });
        

        window.ctx.hookPrefix({
            typeName: "AimManager",
            methodName: "Update",
            params: ['i32', 'i32']
        }, (ptr) => {
            am = new AimManager(ptr);
            weaponCamera = am.weaponCamera.ptr
            
        });

        /*window.ctx.hookPrefix({
            typeName: "UnityEngine.Camera",
            methodName: "set_fieldOfView",
            params: ['i32', "f32", 'i32']
        }, (ptr, _value) => {
            if (config.misc.customFOV) {
                Camera.set_fieldOfView_Injected(ptr, config.misc.customFOVAmount);
                return false;
            }
        });*/


        window.ctx.hookPrefix({
            typeName: "ChatUIManager",
            methodName: "Update",
            params: ['i32', 'i32']
        }, (ptr) => {
            if (!config.misc.chatSpam) {
                return;
            }
            chatManager = ptr;
            const instance = new ChatUIManager(ptr);
            instance.SendChatMessage(ChatBypass(config.misc.chatSpamMessage));
        })

        window.ctx.hookPrefix({
            typeName: "GameTimer",
            methodName: "SecondTick",
            params: ['i32', 'i32']
        }, (ptr) => {
            //console.log(new GameTimer(ptr).mode)
            currentMode = new GameTimer(ptr).mode
            //console.log(manager.current.shortName)

        })

        let defaultFireRates = new Map();
        let prevAmmoAmmounts = new Map();

        window.ctx.hookPrefix({
            typeName: "Gun",
            methodName: "Update",
            params: ['i32', 'i32']
        }, (ptr) => {
            let inst = new Gun(ptr);
            if (!inst) return;
            if (nullCheck(inst.shooter)) return;
            if (nullCheck(inst.current)) return;

            if (config.rage.infAmmo) {
                if (!prevAmmoAmmounts.has(inst.id)) {
                    prevAmmoAmmounts.set(inst.id, { ca: inst.currentAmmo, timestamp: Date.now() });
                }
                inst.currentAmmo = 999;
            }
            else{
                if (prevAmmoAmmounts.has(inst.id)) {
                    inst.currentAmmo = prevAmmoAmmounts.get(inst.id).ca;
                    prevAmmoAmmounts.delete(inst.id);
                }
            }

            if (config.rage.customFireRate) {
                if (!defaultFireRates.has(inst.id)) {
                    defaultFireRates.set(inst.id, { fr: inst.fireRate, timestamp: Date.now() });
                }
                inst.fireRate = config.rage.fireRate;
            } else {
                if (defaultFireRates.has(inst.id)) {
                    inst.fireRate = defaultFireRates.get(inst.id).fr;
                    defaultFireRates.delete(inst.id);
                }
            }

            //if (config.rage.fastSwitch) inst.aimFOVWorld = 40;
            if (config.rage.fastSwitch) inst.afterSwitchDontAllowShootFor = 0;
            if (config.rage.noHands) new GameObject(inst.handsModel.ptr).SetActive(false)
            if (config.rage.noGun) new GameObject(inst.gunGfx.ptr).SetActive(false)
            if (config.misc.aimingViewModel) inst.aimFOVWeapon = config.misc.aimingViewModelFOV

            inst.holdToShoot = config.rage.holdToShoot;
        });

        window.ctx.hookPrefix({
            typeName: "Gun",
            methodName: "ApplyRecoil",
            params: ['i32', 'i32']
        }, (ptr) =>{
            return !config.rage.noRecoil
        });
    }
    catch (error) {
        console.log(error)
    }
    console.log("Hooks Successful")

}
