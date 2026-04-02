import { ColyShooter, Spectator, ColyBehaviour, ColyView, ColyTeamMember, AFKManager, GameModeManager, MyRoomState, Gun, Component, ChatUIManager, GameModeData, NetworkManager, GameTimer, AimManager } from "../../structs.js";
import { config } from "../ui/config.js";
import { keysPressed, LocalArray, Quaternion, Vector3 } from "../utils.js";
import { Players } from "../../main.js";
import { } from "../render.js";
import { main, getTargets } from "../aimbot.js";
export let specCam = null;
export let currentMode = null;
export let localPlayer = null;
export let chatManager = null;
export let currentRoom = null;
export let weaponCamera = null;

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
            }
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
            typeName: "Spectator",
            methodName: "Update",
            params: ['i32', 'i32']
        }, (ptr) => {
            specCam = new Spectator(ptr).spectatorCamera.ptr
        });

        window.ctx.hookPrefix({
            typeName: "AimManager",
            methodName: "Update",
            params: ['i32', 'i32']
        }, (ptr) => {
            weaponCamera = new AimManager(ptr).weaponCamera.ptr
        });


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
            instance.SendChatMessage(config.misc.chatSpamMessage);
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

        window.ctx.hookPrefix({
            typeName: "Gun",
            methodName: "Shoot",
            params: ['i32', 'i32', 'i32', 'i32', 'i32', 'i32']
        }, (ptr, shotid, at, hittype, animationName) => {
            console.log("Shot: ", Vector3.readFrom(at))
            //console.log(new GameTimer(ptr).mode)

            //console.log(manager.current.shortName)

        })


        window.ctx.hookPrefix({
            typeName: "AFKManager",
            methodName: "OnRoomChanged",
            params: ['i32', 'i32', 'i32']
        }, (ptr, newRoom) => {
            currentRoom = newRoom
        })


        /*
        // this stops you from joining matches somehow :shrug:
        window.ctx.hookPrefix({
            typeName: "ColyShooter",
            methodName: "SendRPCShoot",
            params: ['i32', 'i32', 'i32', 'i32', 'i32', 'i32', 'i32', 'i32']
        }, (ptr, targetSessionId, hitPos, hitType, damage, shotId, isSuicide) =>{
            if (new ColyShooter(ptr) != localPlayer) return;
            console.log("shot called")
            
        })
        */

        /*
        let gun = new Gun(ptr);
        if (gun.shooter == localPlayer) {
            const targets = getTargets();
            if (targets.length == 0) return;
        
        
            const target = targets[0]
            let behave = new ColyBehaviour(target.ptr);
            console.log(`Targetting: ${behave.colyView.Nickname.mstr()}`)
        
            let comp1 = new Component(target.ptr);
            at = comp1.transform.position
            
        }*/


    }
    catch (error) {
        console.log(error)
    }
    console.log("Hooks Successful")

}
