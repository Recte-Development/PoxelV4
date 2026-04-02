import {
    ColyShooter, ColyBehaviour, Component, Camera,
    Transform
} from "../structs";
import {Players} from "../main";
import {localPlayer, weaponCamera} from "./hooks/shooter";
import { config } from "./ui/config";
import { keysPressed, nullCheck, Vector3, buttonsPressed} from "./utils"
import { humanBonePaths } from "./humanbodybones";
import { w2s, onScreen } from "./render";

export function centerOfScreen(){
    
    const canvas = document.getElementById("espcanvas");
    return new Vector3(canvas.width / 2, canvas.height / 2, 0)
}

function compareTo(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  if (a === b) return 0;
  if (!isNaN(a)) return 1;
  return !isNaN(b) ? -1 : 0;
}

export function getTargets() {
    if (!Players || Players.size === 0) return [];

    const screenCenter = centerOfScreen();
    const sortingMode = config.aimbotSorting;
    
    let selftransform = new Component(localPlayer.ptr)
    //console.log('comp',selftransform)
    selftransform = selftransform.transform
    if (!selftransform ) {
        console.log("som wrong")
        return []};
    if (!selftransform.position){
        console.log("selftransform.position invalid")
        return [];
    }
    const localPos = selftransform.position;

    const result = [];

    const canvas = document.getElementById("espcanvas");
    Players.forEach((player, key) => {
        shooter = new ColyShooter(player.ptr);
        const behaviour = new ColyBehaviour(player.ptr);
        if (!shooter || behaviour.playerState.health < 1 ) {
            return;
        }

        if (isTeam(behaviour)) return;

        const comp = new Component(player.ptr);
        if(!comp && nullCheck(comp.transform)) {
            console.log("component null")
            return;
        }
        const trans = comp.transform;
        if (!trans){
            console.log("transform null")
            return;
        }

        //console.log(trans)
        const worldPos = trans.Find(window.ctx.createMstr(humanBonePaths[config.rage.aimBone])).position;
        if (!worldPos) {
            console.log("worldPos null")
            return;}

        const screenPos = w2s(canvas, worldPos);
        if (!screenPos) {
            console.log("screenPos null or screenPos.z <= 0")
            return;}

        if (!onScreen(screenPos)) return;

        if (config.rage.fovCheck){
            if (Vector3.distance(centerOfScreen(), screenPos) > config.rage.aimbotFOV) return;
        }
        result.push(shooter);
    });

        switch (sortingMode) {
        case "Screen": // Closest to crosshair
            result.sort((a, b) =>{
                let comp1 = new Component(a.ptr);
                let comp2 = new Component(b.ptr);

                let screenPos1 = Vector3.readFrom(w2s(canvas, Vector3.readFrom(comp1.transform.position)));
                let screenPos2 = Vector3.readFrom(w2s(canvas, Vector3.readFrom(comp2.transform.position)));

                let center = screenCenter;

                let dist1 = Vector3.distance(center, screenPos1);
                let dist2 = Vector3.distance(center, screenPos2);

                return compareTo(dist1, dist2)
            }

                
            );
            break;

        case "World": // Closest in world
            result.sort((a, b) =>
                {
                let comp1 = new Component(a.ptr);
                let comp2 = new Component(b.ptr);

                let worldPos1 = Vector3.readFrom(comp1.transform.position);
                let worldPos2 = Vector3.readFrom(comp2.transform.position);

                let center = screenCenter;

                let dist1 = Vector3.distance(localPos, worldPos1);
                let dist2 = Vector3.distance(localPos, worldPos2);

                return compareTo(dist1, dist2)
            }
            );
            break;
    }
    

    

    return result;
}

let lp = null

export function main(){
    if (!config.rage.aimbot) return;
    if (!(keysPressed["Key" + config.rage.aimKey] || keysPressed[config.rage.aimKey] || buttonsPressed[config.rage.aimKey])) return;

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
        // Mostly made for testing
        case "Magic": {
            var wc = new Component(weaponCamera).transform;

            trans = comp1.transform.Find(window.ctx.createMstr(humanBonePaths[config.rage.aimBone]));

            wc.position = trans;
            wc.position.y += 2;

            wc.LookAt_worldPosition(trans);
            break;
        }
        case "Silent": {
            new Component(weaponCamera).transform.LookAt_worldPosition(comp1.transform.Find(window.ctx.createMstr(humanBonePaths[config.rage.aimBone])).position);
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