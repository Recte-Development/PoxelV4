import {
    ColyShooter, ColyBehaviour, Component, Camera,
    Transform, CharacterCamera
} from "../structs";
import {Players} from "../main";
import {localPlayer, weaponCamera, movementcontroller, charcam} from "./hooks/shooter";
import { config } from "./ui/config";
import { keysPressed, nullCheck, Vector3, buttonsPressed} from "./utils"
import { humanBonePaths } from "./humanbodybones";
import { w2s, onScreen, isTeam, lerpAngle, normalizeAngle } from "./render";

export function centerOfScreen(){
    
    const canvas = document.getElementById("espcanvas");
    return new Vector3(canvas.width / 2, canvas.height / 2, 0)
}


export function getTargets() {
    if (!Players || Players.size === 0) return [];

    const canvas = document.getElementById("espcanvas");
    if (!canvas) return [];

    const screenCenterX = canvas.width / 2;
    const screenCenterY = canvas.height / 2;
    const sortingMode = config.rage.aimbotSorting;
    const boneKey = window.ctx.createMstr(humanBonePaths[config.rage.aimBone]);

    const selfTransform = new Component(localPlayer.ptr).transform;
    if (!selfTransform) return [];
    const localPos = Vector3.readFrom(selfTransform.position);

    const entries = [];

    Players.forEach((player) => {
        try {
            const behaviour = new ColyBehaviour(player.ptr);
            if (nullCheck(behaviour.colyView)) return;
            if (behaviour.playerState.health < 1) return;
            if (isTeam(behaviour)) return;

            const trans = new Component(player.ptr).transform;
            if (!trans) return;

            const worldPos = trans.Find(boneKey).position;
            if (!worldPos) return;

            const screenPos = w2s(canvas, worldPos);
            if (!onScreen(screenPos) && !config.rage.screenCheck) return;

            const screenDist = Math.hypot(screenPos.x - screenCenterX, screenPos.y - screenCenterY);
            if (config.rage.fovCheck && screenDist > config.rage.aimbotFOV) return;

            const wp = Vector3.readFrom(worldPos);
            const worldDist = Math.hypot(wp.x - localPos.x, wp.y - localPos.y, wp.z - localPos.z);

            entries.push({ ptr: player.ptr, screenDist, worldDist });
        } catch {}
    });

    if (sortingMode === "Screen") {
        entries.sort((a, b) => a.screenDist - b.screenDist);
    } else if (sortingMode === "World") {
        entries.sort((a, b) => a.worldDist - b.worldDist);
    }

    return entries.map(e => new ColyShooter(e.ptr));
}

let lp = null

export function main(){
    if (!config.rage.aimbot) return;
    let keyboardMatch = keysPressed["Key" + config.rage.aimKey] || keysPressed[config.rage.aimKey];
    let mouseMatch = buttonsPressed[config.rage.aimKey];
    let isPressed = (keyboardMatch || mouseMatch);

    if (config.rage.keyCheck && !isPressed) return null;

    if (!localPlayer) return;
    lp = localPlayer;
    if (!lp) return;
    const targets = getTargets();
    if (targets.length == 0) return;


    const target = targets[0]
    let behave = new ColyBehaviour(target.ptr);

    let comp = new Component(lp.ptr);
    let comp1 = new Component(target.ptr);
    const canvas = document.getElementById("espcanvas");
    switch (config.rage.aimbotType)
    {
        case "Internal": {
            let aimoffset = 0;
            switch (config.rage.aimBone) {
                case "Chest": aimoffset = -0.6; break;
                case "Hips":  aimoffset = -1.1; break;
            }

            const selfPos   = Vector3.readFrom(comp.transform.position);
            const targetPos = Vector3.readFrom(comp1.transform.position);

            const dx = targetPos.x - selfPos.x;
            const dy = (targetPos.y + aimoffset) - selfPos.y;
            const dz = targetPos.z - selfPos.z;

            const targetYrot = normalizeAngle(Math.atan2(dx, dz) * (180 / Math.PI));
            const targetXrot = Math.max(-90, Math.min(90, Math.atan2(dy, Math.sqrt(dx * dx + dz * dz)) * (180 / Math.PI)));

            const charcamInst = new CharacterCamera(charcam);
            const currentY = normalizeAngle(movementcontroller.currentYRot);
            const currentX = normalizeAngle(-charcamInst.xRot);

            const yrot = lerpAngle(currentY, targetYrot, config.rage.aimSpeed);
            const xrot = -lerpAngle(currentX, targetXrot, config.rage.aimSpeed);

            movementcontroller.currentYRot = yrot;
            charcamInst.xRot = xrot;

            break;
        }
        case "Silent": {
            // weaponCamera is only active whenever you're aiming in
            // switching to the CharacterCamera instance is active regardless of aim
            new CharacterCamera(charcam).Transform.LookAt_worldPosition(comp1.transform.Find(window.ctx.createMstr(humanBonePaths[config.rage.aimBone])).position);
            
            
            //new Component(weaponCamera).transform.LookAt_worldPosition(comp1.transform.Find(window.ctx.createMstr(humanBonePaths[config.rage.aimBone])).position);
            break;
        }
        case "Mouse": {
            let screenPos = w2s(canvas, comp1.transform.Find(window.ctx.createMstr(humanBonePaths[config.rage.aimBone])).position);

            let smoothing = config.rage.aimSpeed;
            let moveX = (screenPos.x - centerOfScreen().x) * smoothing;
            let moveY = (screenPos.y - centerOfScreen().y) * smoothing;

            document.dispatchEvent(new MouseEvent("mousemove", {
                clientX: centerOfScreen().x,
                clientY: centerOfScreen().y,
                movementX: moveX,
                movementY: moveY,
                bubbles: true,
                composed: true
            }));
            break;
        }
   }

   
   
    
}