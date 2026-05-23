import { Chickens, Players } from "../main";
import {
	Physics,
	RaycastHit,
	Camera,
	Component,
	Ray,
	Quaternion, GameObject, Transform, MyRoomState, Collider,

	ColyShooter, ColyBehaviour, ColyView, ColyHealth, NeckController, ColyTransform, Type, ColyTeamMember, GameModeData, GameModeManager, GameMode,
	CursorController,
} from "../structs";
import {
	DistanceFromCenter,
	buttonsPressed,
	keysPressed,
	nullCheck,
	Vector3, strip, TypeUtils
} from "./utils";
import { config } from "./ui/config";
import { humanBonePaths, boneLinks, chickenBoneLinks, chickenBonePaths } from "./humanbodybones";
import { localPlayer, localPlayerPtr, gameModeManager, currentRoom, currentMode, curlock } from "./hooks/hooks";
import { TransformHierarchy } from "./network"
import { ScreenNode } from "three/webgpu";
window.offset = 2;
export let onscreen = [];
export let closestplayer = null;
export let closestdist = Infinity;
export let bullets = [];
let _cam = null;
let _camPos = null;
let _camFwd = null;
let _ctx2d = null;
let _espCanvas = null;
let _headBuf = null;

export function refreshCamera() {
	try {
		const cam = Camera.main;
		const camTransform = new Component(cam.ptr).transform;
		_cam = cam;
		_camPos = Vector3.readFrom(camTransform.position);
		_camFwd = Vector3.readFrom(camTransform.forward);
	} catch (e) {
		_cam = null;
	}
}



function isVisible(player) {
	if (!_camPos) return false;

	//let comps = new Component(player.ptr).gameObject.GetComponentByName("UnityEngine.Component")
	//console.log(comps)

	var campos = _camPos; // already a Vector3
	var pcpos = Vector3.readFrom(new Component(player.ptr).transform.position);

	var direction = pcpos.subtract(campos).createPtr();
	var camposPtr = campos.createPtr();

	let hitinfo = window.ctx.malloc(0x48);
	var layermask = ~((1 << 0) | (1 << 3) | (1 << 13));

	var dist = parseFloat(pcpos.distance(campos));
	var hit = Physics.Raycast_origin_direction_hitInfo_maxDistance_layerMask(camposPtr, direction, hitinfo, dist, layermask);



	return !hit;
}

export function w2s(canvas, worldpoint) {
	try {
		//if (!_cam) return new Vector3(0, 0, 0);
		const wp = Vector3.readFrom(worldpoint);
		//const dot = (wp.x - _camPos.x) * _camFwd.x + (wp.y - _camPos.y) * _camFwd.y + (wp.z - _camPos.z) * _camFwd.z;
		//if (dot <= 0) return new Vector3(0, 0, 0);
		const yea = Vector3.readFrom(_cam.WorldToViewportPoint_position(worldpoint));
		//console.log("yea y", yea.y)
		yea.x *= window.innerWidth;
		yea.y *= window.innerHeight;
		yea.y = window.innerHeight - yea.y;
		//yea.z = dot;
		return yea;
	} catch (e) {
		console.log(e)
		return Vector3.zero;
	}
}

setInterval(() => { if (_ctx2d == undefined) return; _ctx2d.clearRect(0, 0, window.innerWidth, window.innerHeight); }, 100)
function gettextscale(head, feet) {
	const height = Math.abs(feet.y - head.y);
	return Math.max(0.5, Math.min(1, height / 120));
}

function drawtext(ctx, color, x, ystart, text, direction = "up", scale, size) {
	const centerx = Math.round(x);
	let y = ystart;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.font = `${size}px sans-serif`;
	ctx.fillStyle = color;

	const drawy = Math.round(y) + 5;
	ctx.strokeStyle = "black";
	ctx.lineWidth = 2;
	ctx.strokeText(text, centerx, drawy);
	ctx.fillText(text, centerx, drawy);
	y += direction === "up" ? -size : size;
}

export function normalizeVector2(vec) {
	const magnitude = Math.sqrt(vec.x * vec.x + vec.y * vec.y);
	if (magnitude > 0) {
		return { x: vec.x / magnitude, y: vec.y / magnitude };
	} else {
		return { x: 0, y: 0 };
	}
}

function drawTriangleArrow(ctx, position, angleDegrees, color, size) {
	const basePoints = [
		{ x: -10, y: -10 },
		{ x: 25, y: 0 },
		{ x: -10, y: 10 },
	];
	const points = basePoints.map((p) => ({ x: p.x * size, y: p.y * size }));
	ctx.save();
	ctx.translate(position.x, position.y);
	ctx.rotate((angleDegrees * Math.PI) / 180);
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.moveTo(points[0].x, points[0].y);
	ctx.lineTo(points[1].x, points[1].y);
	ctx.lineTo(points[2].x, points[2].y);
	ctx.closePath();
	ctx.fill();
	ctx.restore();
}
/*
public static bool OnScreen(Vector3 pos)
	{
	  return pos.x > 0.01f && pos.x < (float)(Screen.width - 5) && pos.y > 0.01f && pos.y < (float)(Screen.height - 5) && pos.z > 0f;
	}
*/
export function onScreen(screenPos) {

	return screenPos.x > 0.1 && screenPos.x < window.innerWidth - 5 && screenPos.y > 0.1 && screenPos.y < window.innerHeight - 5 && screenPos.z > 0;
}
export function onScreenZ(screenPos) {
	return screenPos.z > -1;
}

const modes = ["FFA", "Megaheads", "Gun Gamble", "Rocket Arena"];

export function isTeam(player) {

	if (!localPlayer) return true;
	const lp = localPlayer;
	if (!lp) return true;

	if (modes.includes(currentMode)) return false;


	them = player.playerState.team;
	if (them >= 511) them -= 511;
	if (them >= 256) them -= 256;
	me = new ColyBehaviour(lp.ptr).playerState.team;
	if (me >= 511) me -= 511;
	if (me >= 256) me -= 256;
	return me == them;
}
export function isTeamNum(flag) {
	if (flag >= 511) flag -= 511;
	if (flag >= 256) flag -= 256;
	me = new ColyBehaviour(localPlayerPtr).playerState.team;
	if (me >= 511) me -= 511;
	if (me >= 256) me -= 256;
	return me == flag;
}



export function esp() {

	const { nametags, nametagsHealth, nametagsDistance, nametagsColor,
		tracers, tracerTo, tracerFrom, tracerColor, tracerThickness,
		boxes, boxType, boxThickness, boxColor,
		filledBoxes, filledBoxColor,
		skeleton, skeletonColor, skeletonThickness,
		teamCheck } = config.visuals;

	let canvas = document.getElementById("espcanvas");
	if (!canvas) {
		canvas = document.createElement("canvas");
		canvas.id = "espcanvas";
		Object.assign(canvas.style, {
			position: "fixed", top: "0", left: "0",
			pointerEvents: "none", zIndex: "99999999"
		});
		document.body.appendChild(canvas);
	}

	if (canvas.width !== window.innerWidth) canvas.width = window.innerWidth;
	if (canvas.height !== window.innerHeight) canvas.height = window.innerHeight;

	// Cache ctx2d — getContext on the same canvas always returns the same object
	// but the lookup itself has overhead, so skip it when canvas hasn't changed
	if (canvas !== _espCanvas) {
		_espCanvas = canvas;
		_ctx2d = canvas.getContext("2d");
	}
	const ctx2d = _ctx2d;
	ctx2d.clearRect(0, 0, canvas.width, canvas.height);

	if (!window.unityInstance) return;

	refreshCamera();

	if (config.rage.drawFOV) {
		ESPThings.DrawFOV(ctx2d, config.rage.aimbotFOV, config.rage.fovColor, config.rage.fovThickness);
	}
	if (!localPlayer) return;


	const anyVisuals = nametags || tracers || boxes || filledBoxes || skeleton;
	if (!anyVisuals) return;

	// Cache self position once for distance labels
	const selfTransform = new Component(localPlayer.ptr).transform;
	const selfPos = (nametagsDistance && selfTransform)
		? Vector3.readFrom(selfTransform.position) : null;

	// Pre-compute tracer origin once
	let tracerOrigin = null;
	if (tracers) {
		switch (tracerFrom) {
			case "Center": tracerOrigin = new Vector3(canvas.width / 2, canvas.height / 2, 0); break;
			case "Bottom Center": tracerOrigin = new Vector3(canvas.width / 2, canvas.height, 0); break;
			case "Top Center": tracerOrigin = new Vector3(canvas.width / 2, 0, 0); break;
			case "Top Left": tracerOrigin = new Vector3(0, 0, 0); break;
			case "Top Right": tracerOrigin = new Vector3(canvas.width, 0, 0); break;
			case "Bottom Left": tracerOrigin = new Vector3(0, canvas.height, 0); break;
			case "Bottom Right": tracerOrigin = new Vector3(canvas.width, canvas.height, 0); break;
		}
	}

	// Pre-compute all mstrs once per frame, not per player
	const neckMstr = humanBonePaths.Neck;
	const boneLinkMstrs = skeleton ? boneLinks.map(({ from, to }) => ({
		from: from,
		to: to,
	})) : null;

	// Lazy-init reusable head position buffer (avoids per-player malloc)
	if (!_headBuf) _headBuf = window.ctx.malloc(0xc);
	Players.forEach((player) => {
		try {
			const behaviour = new ColyBehaviour(player.ptr);
			if (nullCheck(behaviour.colyView)) return;

			const { colyView, playerState } = behaviour;
			if (teamCheck && isTeam(behaviour)) return;

			// Get transform once — avoids calling get_transform twice
			const compTransform = new Component(player.ptr).transform;
			if (nullCheck(compTransform)) return;

			const headWorldPos = compTransform.Find(neckMstr).position;
			const headVec = Vector3.readFrom(headWorldPos);
			if (!headVec) return;
			headVec.y += 0.2;

			const footWorldPos = compTransform.position;
			if (!footWorldPos) return;

			// Write into reusable buffer instead of allocating a new ptr each frame
			headVec.writeTo(_headBuf);
			const headScreen = w2s(canvas, _headBuf);
			const footScreen = w2s(canvas, footWorldPos);
			if (!onScreen(headScreen)) {
				if (config.visuals.offscreenarrows) {
					var center = new Vector3(canvas.width / 2, canvas.height / 2, 0);
					var dx = headScreen.x - center.x;
					var dy = headScreen.y - center.y;

					if (headScreen.z < 0) {
						dx = -dx;
						dy = -dy;
					}
					var dir = normalizeVector2({ x: dx, y: dy });
					var arrowpos = {
						x: center.x + dir.x * config.visuals.arrowdist,
						y: center.y + dir.y * config.visuals.arrowdist
					};
					var angle = Math.atan2(dir.y, dir.x) * (180 / Math.PI);
					if (config.visuals.offscreenarrows) {
						drawTriangleArrow(
							ctx2d,
							arrowpos,
							angle,
							config.visuals.arrowcolor,
							config.visuals.arrowsize
						);
					}
				}
				return
			}

			const espObj = new ESPThings(ctx2d, footScreen, headScreen);

			if (nametags) {
				const health = playerState.health - 65536;
				let text = strip(colyView.Nickname);
				if (nametagsHealth) text += `\n[${health}hp]`;
				if (selfPos) {
					const fp = Vector3.readFrom(footWorldPos);
					text += `\n[${Math.round(Math.hypot(fp.x - selfPos.x, fp.y - selfPos.y, fp.z - selfPos.z))}m]`;
				}
				//text += ` | ${isVisible(player)}`
				espObj.DrawText(text, headScreen.x, headScreen.y + 2, 12, nametagsColor);
			}

			if (tracers && tracerOrigin) {
				const tracerTo2 = tracerTo === "Feet"
					? new Vector3(headScreen.x, footScreen.y, 0)
					: headScreen;
				espObj.DrawLine(tracerOrigin, tracerTo2, tracerColor, tracerThickness);
			}

			if (boxes) {
				boxType === "Outline"
					? espObj.DrawBox(boxThickness, boxColor)
					: espObj.DrawCornerBox(boxColor, boxThickness, false);
			}

			if (filledBoxes) espObj.DrawFilledBox(filledBoxColor);

			if (skeleton) {
				for (const { from, to } of boneLinkMstrs) {
					try {
						const fromPos = w2s(canvas, compTransform.Find(from).position);
						const toPos = w2s(canvas, compTransform.Find(to).position);
						if (fromPos && toPos) espObj.DrawLine(fromPos, toPos, skeletonColor, skeletonThickness);
					} catch { }
				}
			}

		} catch (e) {Players.splice(Players.indexOf(player), 1); console.log(e)  }
	});


	const chickenBoneLinkmStrs = config.visuals.chickenSkeletons ? chickenBoneLinks.map(({ from, to }) => ({
		from: from,
		to: to,
	})) : null;
	Chickens.forEach((chicken) => {
		const comp = new Component(chicken.ptr);
		const compTransform = comp.transform;

		const screen = w2s(canvas, comp.transform.position)
		if (!onScreen(screen)) return;

		//if (config.visuals.chickenNametags){
		//drawtext(ctx2d, config.visuals.chickenNametagColor, screen.x, screen.y, "Chicken")}


		const espObj = new ESPThings(ctx2d, screen, screen);
		if (config.visuals.chickenNametags) {
			espObj.DrawText("Chicken", screen.x, screen.y - 5, 12, config.visuals.chickenNametagColor);
		}
		if (config.visuals.chickenSkeletons && chickenBoneLinkmStrs) {
			for (const { from, to } of chickenBoneLinkmStrs) {
				try {
					const fromPos = w2s(canvas, compTransform.Find(from).position);
					const toPos = w2s(canvas, compTransform.Find(to).position);
					if (fromPos && toPos) espObj.DrawLine(fromPos, toPos, config.visuals.chickenSkeletonColor, config.visuals.chickenSkeletonThickness);
				} catch { }
			}
		}
	})
	const now = performance.now();
	const frameDelta = now - lastTime;
	lastTime = now;

	if (config.visuals.bulletTracers) try {
		const { bulletTracerStartColor, bulletTracerEndColor, bulletTracerThickness, bulletTracerLifetime: lifeDur } = config.visuals;
		const tracer = new ESPThings(_ctx2d, null, null);
		bullets.forEach((bullet) => {
			bullet.timeSince += frameDelta;
			if (bullet.timeSince > lifeDur) {
				bullets.splice(bullets.indexOf(bullet), 1);
				return;
			}
			const startS = w2s(canvas, bullet.start);
			const endS = w2s(canvas, bullet.end);
			if (!onScreenZ(startS) || !onScreenZ(endS)) return;
			const t = bullet.timeSince / lifeDur;
			tracer.DrawLine(startS, endS, lerpHexColor(bulletTracerStartColor, bulletTracerEndColor, t), bulletTracerThickness);
		});
	} catch (e) { console.log(e) }
	onscreen.length = 0;

}
let lastTime = performance.now();

export function lerpAngle(a, b, t) {
	const delta = normalizeAngle(b - a);
	return normalizeAngle(a + delta * t);
}

export function normalizeAngle(a) {
	a %= 360;
	if (a > 180) a -= 360;
	if (a < -180) a += 360;
	return a;
}
function lerp(a, b, t) {
	return a + (b - a) * t;
}



function lerpHexColor(hex1, hex2, t) {
	const c1 = hexToRgb(hex1);
	const c2 = hexToRgb(hex2);

	const r = Math.round(lerp(c1[0], c2[0], t));
	const g = Math.round(lerp(c1[1], c2[1], t));
	const b = Math.round(lerp(c1[2], c2[2], t));

	return rgbToHex(r, g, b);
}



function hexToRgb(color) {
	const rgba = color.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
	if (rgba) return [+rgba[1], +rgba[2], +rgba[3]];
	let hex = color.replace("#", "");
	if (hex.length === 3) hex = hex.split("").map(c => c + c).join("");
	if (hex.length === 8) hex = hex.slice(0, 6);
	const num = parseInt(hex, 16);
	return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

function rgbToHex(r, g, b) {
	return (
		"#" +
		[r, g, b]
			.map(v => v.toString(16).padStart(2, "0"))
			.join("")
	);
}


class ESPThings {
	constructor(ctx, feetpos, headpos) {
		this.feetpos = feetpos;
		this.headpos = headpos;
		this.ctx = ctx
	}

	static getRainbowColor() {
		const hue = (Date.now() * 0.05) % 360;
		return `hsl(${hue}, 100%, 50%)`;
	}

	DrawBox(thickness, color) {
		const height = this.feetpos.y - this.headpos.y;
		const width = height * 0.6;
		const x = this.headpos.x - width / 2;
		const y = this.headpos.y;

		this.ctx.beginPath();
		this.ctx.rect(x, y, width, height);
		this.ctx.strokeStyle = color;
		this.ctx.lineWidth = thickness;
		this.ctx.stroke();
	}

	DrawCornerBox(color, thickness = 2, outline = false) {
		const height = this.feetpos.y - this.headpos.y;
		const width = height * 0.6;
		const x = this.headpos.x - width / 2;
		const y = this.headpos.y;

		const segmentW = width / 4;
		const segmentH = segmentW;

		const drawEdge = (x1, y1, x2, y2, strokeStyle, lineWidth) => {
			this.ctx.beginPath();
			this.ctx.moveTo(x1, y1);
			this.ctx.lineTo(x2, y2);
			this.ctx.strokeStyle = strokeStyle;
			this.ctx.lineWidth = lineWidth;
			this.ctx.stroke();
		};

		if (outline) {
			const outlineColor = "black";
			const outlineThickness = thickness + 2;

			// Top Left
			drawEdge(
				x - 1,
				y - 1,
				x - 1,
				y + segmentH + 1,
				outlineColor,
				outlineThickness,
			); // vertical
			drawEdge(
				x - 1,
				y - 1,
				x + segmentW + 1,
				y - 1,
				outlineColor,
				outlineThickness,
			); // horizontal

			// Top Right
			drawEdge(
				x + width + 1,
				y - 1,
				x + width + 1,
				y + segmentH + 1,
				outlineColor,
				outlineThickness,
			);
			drawEdge(
				x + width - segmentW - 1,
				y - 1,
				x + width + 1,
				y - 1,
				outlineColor,
				outlineThickness,
			);

			// Bottom Left
			drawEdge(
				x - 1,
				y + height - segmentH - 1,
				x - 1,
				y + height + 1,
				outlineColor,
				outlineThickness,
			);
			drawEdge(
				x - 1,
				y + height + 1,
				x + segmentW + 1,
				y + height + 1,
				outlineColor,
				outlineThickness,
			);

			// Bottom Right
			drawEdge(
				x + width + 1,
				y + height - segmentH - 1,
				x + width + 1,
				y + height + 1,
				outlineColor,
				outlineThickness,
			);
			drawEdge(
				x + width - segmentW - 1,
				y + height + 1,
				x + width + 1,
				y + height + 1,
				outlineColor,
				outlineThickness,
			);
		}

		// Colored main box lines

		// Top Left
		drawEdge(x, y, x, y + segmentH, color, thickness); // vertical
		drawEdge(x, y, x + segmentW, y, color, thickness); // horizontal

		// Top Right
		drawEdge(x + width, y, x + width - segmentW, y, color, thickness);
		drawEdge(x + width, y, x + width, y + segmentH, color, thickness);

		// Bottom Left
		drawEdge(x, y + height, x + segmentW, y + height, color, thickness);
		drawEdge(x, y + height, x, y + height - segmentH, color, thickness);

		// Bottom Right
		drawEdge(
			x + width,
			y + height,
			x + width - segmentW,
			y + height,
			color,
			thickness,
		);
		drawEdge(
			x + width,
			y + height,
			x + width,
			y + height - segmentH,
			color,
			thickness,
		);
	}

	static DrawFOV(ctx, radius, color, thickness = 2) {
		ctx.beginPath();
		ctx.arc(
			window.innerWidth / 2,
			window.innerHeight / 2,
			radius,
			0,
			Math.PI * 2,
		);
		ctx.strokeStyle = color;
		ctx.lineWidth = thickness;
		ctx.stroke();
	}

	DrawFilledBox(color) {
		const height = Math.abs(this.feetpos.y - this.headpos.y);
		const width = height * 0.6;

		const x = this.headpos.x - width / 2;
		const y = this.headpos.y;

		this.ctx.fillStyle = color;
		this.ctx.fillRect(x, y, width, height);
	}

	DrawText(text, x, y, size = 16, color = "white") {
		this.ctx.font = `${size}px "Fredoka", sans-serif`;
		this.ctx.fillStyle = color;
		this.ctx.textAlign = "center";
		this.ctx.textBaseline = "middle";
		this.ctx.fillText(text, x, y);
	}
	DrawLine(from, to, color = "red", lineWidth = 2) {
		this.ctx.beginPath();
		this.ctx.moveTo(from.x, from.y);
		this.ctx.lineTo(to.x, to.y);
		this.ctx.strokeStyle = color;
		this.ctx.lineWidth = lineWidth;
		this.ctx.stroke();
	}
	static StaticDrawLine(from, to, color = "red", lineWidth = 2) {
		_ctx2d.beginPath();
		_ctx2d.moveTo(from.x, from.y);
		_ctx2d.lineTo(to.x, to.y);
		_ctx2d.strokeStyle = color;
		_ctx2d.lineWidth = lineWidth;
		_ctx2d.stroke();
	}
	DrawHealthBar(health, maxHealth = 150, barWidth = 4, color, shield) {
		const height = this.feetpos.y - this.headpos.y;
		const boxwidth = height * 0.6;
		const x = this.headpos.x - boxwidth / 2 - barWidth + (shield ? -5 : -10);
		const y = this.headpos.y;

		health = Math.max(0, Math.min(health, maxHealth));
		const healthRatio = health / maxHealth;
		const filledHeight = height * healthRatio;

		this.ctx.beginPath();
		this.ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
		this.ctx.fillRect(x, y, barWidth, height);

		this.ctx.beginPath();
		if (!shield)
			this.ctx.fillStyle =
				health > 60 ? color : health > 30 ? "#ffff00" : "#ff0000";
		else this.ctx.fillStyle = color;

		this.ctx.fillRect(x, y + (height - filledHeight), barWidth, filledHeight);
	}
}
