import { Players } from "../main";
import {
  Physics,
  RaycastHit,
  Camera,
  Component,
  Ray,
  Quaternion, GameObject, Transform, MyRoomState,

  ColyShooter, ColyBehaviour, ColyView, ColyHealth, NeckController, ColyTransform, Type, ColyTeamMember, GameModeData, GameModeManager, GameMode,
} from "../structs";
import {
  DistanceFromCenter,
  buttonsPressed,
  keysPressed,
  nullCheck,
  Vector3, strip, TypeUtils
} from "./utils";
import { config } from "./ui/config";
import { humanBonePaths, boneLinks } from "./humanbodybones";
import { localPlayer, gameModeManager, currentRoom, currentMode } from "./hooks/shooter";

window.offset = 2;
export let onscreen = [];
export let closestplayer = null;
export let closestdist = Infinity;


export function w2s(canvas, worldpoint) {
  try {
    let p1 = Camera.main.WorldToScreenPoint_position(worldpoint);
    let p2 = Camera.main.ScreenToViewportPoint(p1);
    var yea = Vector3.readFrom(p2);
    yea.x *= window.innerWidth;
    yea.y *= window.innerHeight;
    yea.y = canvas.height - yea.y;
    return yea;
  }
  catch {
    return Vector3.zero;
  }
}

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
export function onScreen(screenPos, canvas) {

  return screenPos.x > 0.1 && screenPos.x < window.innerWidth - 5 && screenPos.y > 0.1 && screenPos.y < window.innerHeight - 5 && screenPos.z > 0;
}

export function isTeam(player) {

  if (!localPlayer) return true;
  const lp = localPlayer;
  if (!lp) return true;
  if (currentMode == "FFA") return false;


  them = player.playerState.team.val();
  if (them >= 511) them -= 511;
  if (them >= 256) them -= 256;
  me = new ColyBehaviour(lp.ptr).playerState.team.val();
  if (me >= 511) me -= 511;
  if (me >= 256) me -= 256;
  return me == them;
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

  const ctx2d = canvas.getContext("2d");
  ctx2d.clearRect(0, 0, canvas.width, canvas.height);
  

  if (!window.unityInstance) return;

  if (config.rage.drawFOV) {
    ESPThings.DrawFOV(ctx2d, config.rage.aimbotFOV, config.rage.fovColor, config.rage.fovThickness)
  }
  if (!localPlayer) return;

  const anyVisuals = config.visuals.nametags || config.visuals.tracers ||
    config.visuals.boxes || config.visuals.filledBoxes ||
    config.visuals.skeleton;
  if (!anyVisuals) return;

  // Cache local transform once
  const selfComp = new Component(localPlayer.ptr);
  const selfTransform = selfComp?.transform;

  // Cache config flags once


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

  // Cache bone path mstrs to avoid recreating strings every frame
  const neckMstr = window.ctx.createMstr(humanBonePaths.Neck);

  Players.forEach((player) => {
    try {
      const behaviour = new ColyBehaviour(player.ptr);
      if (nullCheck(behaviour.colyView)) return;

      const { colyView, playerState } = behaviour;
      if (teamCheck && isTeam(behaviour)) {
        //console.log(`Hiding: ${strip(colyView.Nickname.mstr())}`)
        return;
      }

      const component = new Component(player.ptr);
      if (nullCheck(component) || nullCheck(component.transform)) return;

      const compTransform = component.transform;

      const headWorldPos = compTransform.Find(neckMstr).position;
      const headVec = Vector3.readFrom(headWorldPos);
      if (!headVec) return;
      headVec.y += 0.2;

      const footWorldPos = compTransform.position;
      if (!footWorldPos) return;

      const headScreen = w2s(canvas, headVec.createPtr());
      const footScreen = w2s(canvas, footWorldPos);
      if (!headScreen || !footScreen) return;
      if (!onScreen(headScreen, canvas)) return;

      const esp = new ESPThings(ctx2d, footScreen, headScreen);

      if (nametags) {
        const health = playerState.health.val() - 65536;
        const nickname = strip(colyView.Nickname.mstr());

        let text = nickname;
        text += ` | ${playerState.team.val()} | `
        if (nametagsHealth) text += `\n[${health}hp]`;
        if (nametagsDistance && selfTransform) {
          const dist = Vector3.readFrom(selfTransform.position)
            .distance(Vector3.readFrom(compTransform.position));
          text += `\n[${dist}m]`;
        }
        esp.DrawText(text, headScreen.x, headScreen.y + 2, 12, nametagsColor);
      }

      if (tracers && tracerOrigin) {
        const tracerTo2 = tracerTo === "Feet"
          ? new Vector3(headScreen.x, footScreen.y, 0)
          : headScreen;
        esp.DrawLine(tracerOrigin, tracerTo2, tracerColor, tracerThickness);
      }

      if (boxes) {
        boxType === "Outline"
          ? esp.DrawBox(boxThickness, boxColor)
          : esp.DrawCornerBox(boxColor, boxThickness, false);
      }

      if (filledBoxes) esp.DrawFilledBox(filledBoxColor);

      if (skeleton) {
        for (const { from, to } of boneLinks) {
          try {
            const fromPos = w2s(canvas, compTransform.Find(window.ctx.createMstr(from)).position);
            const toPos = w2s(canvas, compTransform.Find(window.ctx.createMstr(to)).position);
            if (fromPos && toPos) esp.DrawLine(fromPos, toPos, skeletonColor, skeletonThickness);
          } catch { }
        }
      }

    } catch (err) {
      console.error(err);
    }
  });

  onscreen.length = 0;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function lerpAngle(a, b, t) {
  const delta = normalizeAngle(b - a);
  return normalizeAngle(a + delta * t);
}

function normalizeAngle(a) {
  a %= 360;
  if (a > 180) a -= 360;
  if (a < -180) a += 360;
  return a;
}

class ESPThings {
  constructor(ctx, feetpos, headpos) {
    this.feetpos = feetpos;
    this.headpos = headpos;
    this.ctx = ctx;
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
