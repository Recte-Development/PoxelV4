import {
    ColyShooter, ColyBehaviour, Component, Camera,
    Transform
} from "../structs";
import {Players} from "../main";
import {localPlayer, specCam, weaponCamera} from "./hooks/shooter";
import { config } from "./ui/config";
import { keysPressed, nullCheck, Vector3, buttonsPressed} from "./utils"
import { humanBonePaths } from "./humanbodybones";
import { w2s, onScreen } from "./render";

export function centerOfScreen(){
    
    const canvas = document.getElementById("espcanvas");
    return new Vector3(canvas.width / 2, canvas.height / 2, 0)
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
        const worldPos = trans.Find(window.ctx.createMstr(humanBonePaths.Neck)).position;
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

        switch (sortingMode) {
        case "Screen": // Closest to crosshair
            result.sort((a, b) =>
                Vector3.distance(Vector3.readFrom(w2s(canvas, Vector3.readFrom(new Component(a).position))), Vector3.readFrom(screenCenter)) -
                Vector3.distance(Vector3.readFrom(w2s(canvas, Vector3.readFrom(new Component(b).position))), Vector3.readFrom(screenCenter))
            );
            break;

        case "World": // Closest in world
            result.sort((a, b) =>
                Vector3.distance(Vector3.readFrom(new Component(a).position), Vector3.readFrom(localPos)) -
                Vector3.distance(Vector3.readFrom(new Component(b).position), Vector3.readFrom(localPos))
            );
            break;
    }
    });

    

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
    console.log(`Targetting: ${behave.colyView.Nickname.mstr()}`)

    let comp = new Component(lp.ptr);
    let comp1 = new Component(target.ptr);
   const canvas = document.getElementById("espcanvas");
   // silent aim
   new Component(weaponCamera).transform.LookAt_worldPosition(comp1.transform.Find(window.ctx.createMstr(humanBonePaths.Neck)).position);
                                                                                // pls stop using the old struct gen wtf is wrong with you
                                                                                // the params should automatically wrap strings
    // regular aim, commented it out to test silent aim 
   /*
    let screenPos = w2s(canvas, comp1.transform.Find(window.ctx.createMstr(humanBonePaths.Neck)).position);

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
    }));*/
    
}