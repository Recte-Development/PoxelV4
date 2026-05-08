import { Weapon, StaticWaypointObject, FlagStaticWaypointObject, FlagObject, CursorController, MapUIManager, DroppedTag, SpawnedItem, Object, ChickenController, SettingsManager, NotificationManager, SettingsConfiguration, Camera, GameObject, Input, Time, Transform, MovementController, Player, ColyShooter, Spectator, ColyBehaviour, ColyView, ColyTeamMember, AFKManager, GameModeManager, MyRoomState, Gun, Component, ChatUIManager, GameModeData, NetworkManager, GameTimer, AimManager, CharacterCamera, Quaternion, ColyVector3, Bullet } from "../../structs.js";
import { config } from "../ui/config.js";
import { keysPressed, LocalArray, Vector3, nullCheck, ChatBypass, randomRange, QuaternionUtils } from "../utils.js";
import { Chickens, Players } from "../../main.js";
import { bullets, esp, isTeamNum } from "../render.js";
import { main, getTargets } from "../aimbot.js";
import { humanBonePaths } from "../humanbodybones.js";
import { TransformHierarchy } from "../network.js";
export let currentMode = null;
export let localPlayer = null;
export let localPlayerPtr = null;
export let localPlayerSessionId = null;
export let chatManager = null;
export let weaponCamera = null;
export let currBulletID = 0
export let settingsConfig = null;
let ignoreNextShoot = false;
export let movementcontroller = null;
export let charcam = null;
export let ctfcollider = null;
let _tpDeltaX = 0;
let _tpDeltaY = 0;
let _tpWasActive = false;
let _gfxGameObject = null;
let _gfxPlayerPtr = null;
export let curlock = null;
function _getGfxGameObject() {
    if (_gfxGameObject && _gfxPlayerPtr === localPlayer?.ptr) return _gfxGameObject;
    _gfxGameObject = null;
    _gfxPlayerPtr = null;
    if (!localPlayer) return null;
    try {
        const playerTrans = new Component(localPlayer.ptr).transform;
        const gfxTrans = playerTrans.Find(window.ctx.createMstr("Global/Root/gfx"));
        if (nullCheck(gfxTrans)) return null;
        _gfxGameObject = new Component(gfxTrans.ptr).gameObject;
        _gfxPlayerPtr = localPlayer.ptr;
    } catch (e) {
        console.warn("getGfxGameObject:", e);
    }
    return _gfxGameObject;
}

function _setPlayerModelVisible(visible) {
    const go = _getGfxGameObject();
    if (go) go.SetActive(visible);
}

function _normalizeAngle(a) {
    a %= 360;
    if (a > 180) a -= 360;
    if (a < -180) a += 360;
    return a;
}

let firstLoad = false;
export let ctfmanager = null
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
            typeName: 'LobbyUIManager',
            methodName: 'Start',
            params: ['i32', 'i32']
        }, (ptr) => {
            if (!firstLoad) {
                const isFirefox = typeof InstallTrigger !== 'undefined';

                if (!isFirefox) {
                    NotificationManager.Show(ctx.createMstr("Recte"), ctx.createMstr("You're not using FireFox.\nSome cheats may not work please use Firefox for support"), 0)
                }

                NotificationManager.Show(ctx.createMstr("Recte"), ctx.createMstr(`Recte has been injected\nPress: ${config.settings.toggle} to toggle the UI`), 3)
                firstLoad = true
            }
            document.querySelectorAll('.banner-container').forEach(el => el.remove())
        });
        document.addEventListener('mousemove', (e) => {
            if (!config.misc.thirdPerson) return;
            _tpDeltaX += e.movementX;
            _tpDeltaY += e.movementY;
        });

        window.ctx.hookPrefix({
            typeName: 'KinematicCharacterController.Examples.CharacterCamera',
            methodName: 'Update',
            params: ['i32', 'i32']
        }, (ptr) => {
            charcam = ptr;


            const tpActive = config.misc.thirdPerson;

            if (tpActive) {
                _setPlayerModelVisible(true);
            } else if (_tpWasActive) {
                _setPlayerModelVisible(false);
                _gfxGameObject = null;
                _gfxPlayerPtr = null;
            }
            _tpWasActive = tpActive;

            if (!tpActive || !localPlayer || !movementcontroller) return;

            try {
                const sensitivity = 0.2;
                const camInst = new CharacterCamera(ptr);

                // Apply accumulated mouse delta to angles
                // movementY is negative when mouse moves up, so + here gives correct look-up behaviour
                let xRot = camInst.xRot + _tpDeltaY * sensitivity;
                xRot = Math.max(-89, Math.min(89, xRot));
                camInst.xRot = xRot;

                const yRot = _normalizeAngle(movementcontroller.currentYRot + _tpDeltaX * sensitivity);
                movementcontroller.currentYRot = yRot;

                _tpDeltaX = 0;
                _tpDeltaY = 0;

                // Compute offset direction from yaw + pitch
                const yRad = yRot * Math.PI / 180;
                const xRad = xRot * Math.PI / 180;
                const cosX = Math.cos(xRad);

                // Get player head position
                const playerTrans = new Component(localPlayer.ptr).transform;
                const headPos = Vector3.readFrom(
                    playerTrans.Find(window.ctx.createMstr(humanBonePaths.Neck)).position
                );

                const dist = config.misc.thirdPersonDist;
                const camPos = new Vector3(
                    headPos.x - Math.sin(yRad) * cosX * dist,
                    headPos.y + Math.sin(xRad) * dist + 0.5,
                    headPos.z - Math.cos(yRad) * cosX * dist
                );

                const camTrans = camInst.Transform;
                camTrans.position = camPos.createPtr();
                camTrans.rotation = Quaternion.Euler_x_y_z(xRot, yRot, 0);
            } catch (e) {
                console.warn("thirdPerson:", e);
            }

            return false;
        })
        window.ctx.hookPrefix({
            typeName: 'ColyShooter',
            methodName: 'CommitSuicide',
            params: ['i32', 'i32']
        }, (ptr) => {
            return !config.misc.neverSuicide;
        })
        window.ctx.hookPrefix({
            typeName: 'CursorController',
            methodName: 'Start',
            params: ['i32', 'i32']
        }, (ptr) => {
            var cc = new CursorController(ptr)

            //var mum = new MapUIManager(ptr)
            //console.log(mum.IsPaused)
            //mum.isPaused = false
            curlock = ptr

        })

        window.ctx.hookPrefix({
            typeName: 'CTFManager',
            methodName: 'Initialize',
            params: ['i32', 'i32']
        }, (ptr) => {

            ctfmanager = ptr
            //var mum = new MapUIManager(ptr)
            //console.log(mum.IsPaused)
            //mum.isPaused = false


        })


        window.ctx.hookPrefix({
            typeName: "ColyShooter",
            methodName: "Update",
            params: ['i32', 'i32']
        }, (ptr) => {

            let player = new ColyBehaviour(ptr).colyView; // this no error
            let shooter = new ColyShooter(ptr);
            if (!Players.has(player.sessionId) && !player.isMine) {
                Players.set(player.sessionId, { 'ptr': ptr, 'timestamp': Date.now() })
            }
            if (player.isMine) {
                localPlayer = new ColyShooter(ptr);
                localPlayerPtr = ptr;
                localPlayerSessionId = player.sessionId
            }

            if (config.rage.killAll && !player.isMine) shooter.CommitSuicide();
        });

        window.ctx.hookPostfix({
            typeName: "ColyShooter",
            methodName: "Update",
            params: ['i32', 'i32']
        }, (ptr) => {


        });


        window.ctx.hookPrefix({
            typeName: "FlagObject",
            methodName: "Update",
            params: ['i32', 'i32']
        }, (ptr) => {
            if (!config.rage.autoCTF) return true
            var f = new FlagObject(ptr)
            if (!isTeamNum(f.myFlag.teamId.val())) {
                new ColyShooter(localPlayerPtr).movementStateManager.colyTransform.SendPositionUpdate(new Component(ptr).transform.position, new Component(ptr).transform.rotation, 0)
                console.log(f.ctfPoint.lastMyFlagCarriedBy)
                //if (f.ctfPoint.lastMyFlagAtBase) {
                f.OnPlayerTouched(new ColyBehaviour(localPlayerPtr).colyView.ptr)
                f.ctfPoint.TryPickUpFlag()
                f.ctfPoint.UpdateFlagState()
                //}
            } else {
                //f.ctfPoint.lastTriggerTime = 0
                //console.log(f.ctfPoint.lastTriggerTime)
                if (f.ctfPoint.lastMyFlagAtBase) {
                    var myctfpointtrans = new Component(f.ctfPoint.ptr).transform;
                    //f.OnTriggerEnter()
                    new ColyShooter(localPlayerPtr).movementStateManager.colyTransform.SendPositionUpdate(myctfpointtrans.position, myctfpointtrans.rotation, 0)
                    f.OnPlayerTouched(new ColyBehaviour(localPlayerPtr).colyView.ptr)

                    f.ctfPoint.OnPlayerTouched(new ColyBehaviour(localPlayerPtr).colyView.ptr)
                    f.ctfPoint.UpdateFlagState()
                    f.ctfPoint.ReinitializeWaypoint()
                    new StaticWaypointObject(f.myWaypointObject.ptr).TryAddMyself()
                    //f.ctfPoint.TryPickUpFlag()
                }
            }

        });


        window.ctx.hookPrefix({
            typeName: 'ColyShooter',
            methodName: 'SendRPCShoot',
            params: ['i32', 'i32', 'i32', 'i32', 'i32', 'i32', 'i32', 'i32']
        }, (ptr, targetsessionid, hitpos, hittype, damage, shotid, isSuicide) => {
            if (ignoreNextShoot) {
                ignoreNextShoot = false;
                return;
            }

            const targets = getTargets();
            if (targets.length == 0) return;


            const target = targets[0]

            if (config.rage.aimbotType === "Magic" && config.rage.aimbot) {
                hitpos = new Component(target.ptr).transform.position
                targetsessionid = ctx.createMstr(new ColyBehaviour(target.ptr).colyView.sessionId)
            }


            if (target && config.rage.wallBang && targetsessionid.mstr() === "") {
                targetsessionid = ctx.createMstr(new ColyBehaviour(target.ptr).colyView.sessionId);
            }

            let finalTarget = targetsessionid;
            let finalHitPos = hitpos;
            let finalDamage = damage.val();

            if (config.rage.randomHit) {
                if (targetsessionid.mstr() === "") {
                    const player = Players[Math.floor(Math.random() * Players.length)];

                    finalTarget = ctx.createMstr(new ColyBehaviour(player.ptr).colyView.sessionId);
                    finalHitPos = new Component(player.ptr).transform.position
                    hittype = 4;
                }
            }

            if (config.rage.oneShot) {
                finalDamage = 150;
            } else if (config.rage.damage !== 0) {
                finalDamage = config.rage.damage;
            }

            ignoreNextShoot = true;
            if (finalDamage <= 0) finalDamage = damage;
            new ColyShooter(ptr).SendRPCShoot(
                finalTarget,
                finalHitPos,
                hittype,
                finalDamage,
                shotid,
                isSuicide
            );

            return false;
        });

        let defaultDashForce = null;
        window.ctx.hookPrefix({
            typeName: "KinematicCharacterController.Examples.MovementController",
            methodName: "Update",
            params: ['i32', 'i32']
        }, (ptr) => {

            let mc = new MovementController(ptr);
            movementcontroller = mc;
            if (config.misc.infDash) mc.lastDashTime = 0;
            if (config.misc.customDashForce) {
                if (!defaultDashForce) defaultDashForce = mc.dashForce;
                mc.dashForce = config.misc.dashForce;
            }
            else {
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
            typeName: "Bullet",
            methodName: "OnSpawn",
            params: ['i32', 'i32']
        }, (ptr) => {
            console.log("spawn called")
            //console.log("start pos", Vector3.readFrom(new Component(ptr).transform.position))
            let curpos = new Component(ptr).transform.position
            //console.log("start", Vector3.readFrom(curpos))
              var endadd = Vector3.readFrom(new Component(ptr).transform.forward).multiply(new Bullet(ptr).lifeDistance)
                var endpos = Vector3.readFrom(new Component(ptr).transform.position)
                  endpos.add(endadd.x, endadd.y, endadd.z)
                  
            //let needtochangey = Vector3.readFrom(curpos)
            //needtochangey.y = Vector3.readFrom(new Component(Camera.main.ptr).transform.position).y
            let st = new Bullet(ptr).spawnTime
            //console.log(st)
            bullets.push({ start: curpos, end: endpos.createPtr(), id: st, ended: false, timeSince:0 /*to be determined*/ })
           // currBulletID++;
        });

 /*       window.ctx.hookPrefix({
            typeName: "Bullet",
            methodName: "Update",
            params: ['i32', 'i32']
        }, (ptr) => {
            let inst = new Bullet(ptr)
            bullets.forEach((bullet) => {
                
                //console.log(new Object(ptr).GetInstanceID(), bullet.id)
                console.log(inst.spawnTime)
                let trans = new Component(ptr).transform
                if (inst.spawnTime == bullet.id) {
                    var endadd = Vector3.readFrom(trans.forward).multiply(inst.lifeDistance)
                    var endpos = Vector3.readFrom(trans.position)
                    endpos.add(endadd.x, endadd.y, endadd.z)
                  
                    bullet.end = endpos.createPtr()
                    if (inst.lifeEnded) {
                        bullet.ended = true
                        
                    } 
                }
            })
        });

      */



        window.ctx.hookPrefix({
            typeName: "AimManager",
            methodName: "Update",
            params: ['i32', 'i32']
        }, (ptr) => {
            try { esp(); } catch (e) { console.log(e) }
            am = new AimManager(ptr);
            weaponCamera = am.weaponCamera.ptr


        });
        window.ctx.hookPrefix({
            typeName: "PlayerInput",
            methodName: "Update",
            params: ['i32', 'i32']
        }, (ptr) => {

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
            else {
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
        }, (ptr) => {
            return !config.rage.noRecoil
        });

        window.ctx.hookPrefix({
            typeName: "ChickenController",
            methodName: "Update",
            params: ['i32', 'i32']
        }, (ptr) => {

            let id = new Object(ptr).GetInstanceID()
            if (!Chickens.has(id)) {
                console.log("chicken added")
                Chickens.set(id, { 'ptr': ptr, 'timestamp': Date.now() })
                let trans = new Component(ptr).transform;
                TransformHierarchy(trans)
            }
        });

        window.ctx.hookPrefix({
            typeName: "ChickenController",
            methodName: "Die",
            params: ['i32', 'i32']
        }, (ptr) => {

            let id = new Object(ptr).GetInstanceID()
            if (Chickens.has(id)) {
                Chickens.delete(id)
            }
        });

        // potential item esp
        window.ctx.hookPrefix({
            typeName: "SpawnableItemsManager",
            methodName: "OnItemAdded",
            params: ['i32', 'i32', 'i32', 'i32']
        }, (ptr, key, item) => {
            //let it = new SpawnedItem(item).type
            //console.log(`Spawned Item! Key: ${key.mstr()} Item: ${it.mstr()}`)
        });

        /*window.ctx.hookPrefix({
            typeName: "SpawnableRewardItem",
            methodName: "Init_8724",
            params: ['i32', 'i32', 'i32']
        }, (ptr, item) =>{
            let dt = new DroppedTag(item);
            console.log(`dogtag dropped`)
            console.log(dt)
            let lp = new ColyShooter(localPlayerPtr);
            let colyTransform = lp.movementStateManager.colyTransform;
            let ps = dt.position;
            let pos = new Vector3(ps.x, ps.y, ps.z);
            colyTransform.SendPositionUpdate(pos, Quaternion.identity, 0)
        });*/
    }
    catch (error) {
        console.log(error)
    }
    console.log("Hooks Successful")

}
