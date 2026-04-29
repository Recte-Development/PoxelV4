import { loadAndInitPlugin } from "./assets/injection.js";
import { MenuUI, allowTypingInLilGuiInputs } from "./assets/hooks/uimain.js";
import { config } from "./assets/ui/config.js";
import { chatManager, shooterhooks, localPlayer, localPlayerPtr, localPlayerSessionId, currentMode, ctfmanager } from "./assets/hooks/hooks.js";
import {
	Schema, MapUIManager, Spectator, AimManager, GameTimer, ColyShooter, ColyView, ColyBehaviour, Physics, ColyHealth, NeckController, ColyTeamMember, GameModeManager, GameModeData, GameMode, MyRoomState, NetworkManager,
	RaycastHit, AFKManager, ChatUIManager, MovementController,
	Camera, Time, Input,
	Component, SettingsManager, SettingsConfiguration, NotificationManager,
	Ray, CharacterCamera, Weapon,
	Quaternion,
	ColyTransform,
} from "./structs.js"
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
import { main } from "./assets/aimbot.js";
import { CTFManager } from "./structfile/structs.js";
export let Players = new Map();
export let Chickens = new Map();
window.playermap = Players;
let init = false
export const ui = new MenuUI("Poxel", "4.0");

loadAndInitPlugin().then((ctx) => {

	document.addEventListener("keydown", (e) => {
		if (e.code.toLowerCase() == config.settings.toggle.toLowerCase()) {
			ui.togglevis();
		}
	});

	shooterhooks();

	ui.addTab("Visuals", "eye", (t) => {
		const g = ui.addPanelGrid(t);

		const settings = ui.addSection(g, "Settings", "eye");
		ui.addToggleRow(settings, "Team Check", config.visuals, "teamCheck");
		ui.addButton(settings, "Test Teleport", "Execute", "Execute", () => {
			try {
				let cT = new ColyTransform(new ColyShooter(localPlayerPtr).movementStateManager.colyTransform.ptr);
				console.log(cT);
				let v = new Vector3(0, 0, 0)
				cT.SendPositionUpdate(v.createPtr(), QuaternionUtils.random().createPtr(), 0);
			} catch (error) { console.error(error); }
		});

		const nametags = ui.addSection(g, "Nametags", "users");
		ui.addToggleRow(nametags, "Enabled", config.visuals, "nametags");
		ui.addToggleRow(nametags, "Health", config.visuals, "nametagsHealth");
		ui.addToggleRow(nametags, "Distance", config.visuals, "nametagsDistance");
		ui.addColorRow(nametags, "Color", config.visuals, "nametagsColor");

		const offscreenArrows = ui.addSection(g, "Off-Screen Arrows", "users");
		ui.addToggleRow(offscreenArrows, "Enabled", config.visuals, "offscreenarrows")
		ui.addSliderRow(offscreenArrows, "Off-Screen Arrow Size", config.visuals, "arrowsize", 0, 5, .1);
		ui.addSliderRow(offscreenArrows, "Off-Screen Arrow Distance", config.visuals, "arrowdist", 0, 400, .1);
		ui.addColorRow(offscreenArrows, "Off-Screen Arrow Color", config.visuals, "arrowcolor")
		const boxes = ui.addSection(g, "Boxes", "users");
		ui.addToggleRow(boxes, "Boxes", config.visuals, "boxes");
		ui.addColorRow(boxes, "Box Color", config.visuals, "boxColor");
		ui.addSliderRow(boxes, "Box Thickness", config.visuals, "boxThickness", 1, 10, .1);
		ui.addSelectRow(boxes, "Box Type", ["Outline", "Corner"], config.visuals, "boxType");
		ui.addToggleRow(boxes, "Filled Boxes", config.visuals, "filledBoxes");
		ui.addColorRow(boxes, "Filled Color", config.visuals, "filledBoxColor");



		const skeleton = ui.addSection(g, "Skeleton", "users");

		ui.addToggleRow(skeleton, "Skeleton", config.visuals, "skeleton");
		ui.addSliderRow(skeleton, "Skeleton Thickness", config.visuals, "skeletonThickness", 1, 10, .1);
		ui.addColorRow(skeleton, "Skeleton Color", config.visuals, "skeletonColor");

		const tracers = ui.addSection(g, "Tracers", "misc");
		ui.addToggleRow(tracers, "Enabled", config.visuals, "tracers");
		ui.addSliderRow(tracers, "Thickness", config.visuals, "tracerThickness", 1, 10, .1);
		ui.addColorRow(tracers, "Color", config.visuals, "tracerColor");
		ui.addSelectRow(tracers, "Screen Location", ["Bottom Center", "Top Center", "Center", "Bottom Left", "Bottom Right", "Top Left", "Top Right"], config.visuals, "tracerFrom");
		ui.addSelectRow(tracers, "Body Location", ["Feet", "Head"], config.visuals, "tracerTo");


		const chickens = ui.addSection(g, "Chickens", "misc");
		ui.addToggleRow(chickens, "Nametags", config.visuals, "chickenNametags");
		ui.addColorRow(chickens, "Nametag Color", config.visuals, "chickenNametagColor");
		ui.addToggleRow(chickens, "Skeleton", config.visuals, "chickenSkeletons");
		ui.addColorRow(chickens, "Skeleton Color", config.visuals, "chickenSkeletonColor");
		ui.addSliderRow(chickens, "Skeleton Thickness", config.visuals, "chickenSkeletonThickness", 1, 10, .1);


	});

	ui.addTab("Aimbot", "crosshair", (t) => {
		const g = ui.addPanelGrid(t);

		const aimbot = ui.addSection(g, "Aimbot", "crosshair");
		ui.addToggleRow(aimbot, "Enabled", config.rage, "aimbot");
		ui.addSelectRow(aimbot, "Type", ["Silent", "Mouse", "Magic", "Internal"], config.rage, "aimbotType");
		ui.addSelectRow(aimbot, "Aim Bone", ["Neck", "Chest", "Hips"], config.rage, "aimBone");
		ui.addSelectRow(aimbot, "Sort Mode", ["Screen", "World"], config.rage, "aimbotSorting");
		ui.addSelectRow(aimbot, "Aim Key", keyOptions, config.rage, "aimKey");
		ui.addSliderRow(aimbot, "Aim Speed", config.rage, "aimSpeed", .01, 1, .01);

		const fov = ui.addSection(g, "FOV", "eye");
		ui.addToggleRow(fov, "Draw FOV", config.rage, "drawFOV");
		ui.addToggleRow(fov, "FOV Check", config.rage, "fovCheck");
		ui.addToggleRow(fov, "Screen Check", config.rage, "screenCheck");
		ui.addToggleRow(fov, "Key Check", config.rage, "keyCheck");
		ui.addSliderRow(fov, "FOV Radius", config.rage, "aimbotFOV", 30, 300, 1);
		ui.addSliderRow(fov, "FOV Thickness", config.rage, "fovThickness", 1, 10, 1);
		ui.addColorRow(fov, "FOV Color", config.rage, "fovColor");
	});

	ui.addTab("Combat", "zap", (t) => {
		const g = ui.addPanelGrid(t);

		const weapons = ui.addSection(g, "Weapons", "zap");
		ui.addToggleRow(weapons, "Infinite Ammo", config.rage, "infAmmo");
		ui.addToggleRow(weapons, "No Recoil", config.rage, "noRecoil");
		ui.addToggleRow(weapons, "Wall Bang", config.rage, "wallBang");
		ui.addToggleRow(weapons, "Bullets Hit Random", config.rage, "randomHit");
		ui.addToggleRow(weapons, "One Shot Kill", config.rage, "oneShot");
		ui.addSliderRow(weapons, "Custom Damage", config.rage, "damage", 0, 300, 1);
		ui.addToggleRow(weapons, "Fire Rate Modifier", config.rage, "customFireRate");
		ui.addSliderRow(weapons, "Fire Rate", config.rage, "fireRate", 1, 300, 1);
		ui.addToggleRow(weapons, "Hold To Shoot", config.rage, "holdToShoot");
		ui.addToggleRow(weapons, "No Hands", config.rage, "noHands");
		ui.addToggleRow(weapons, "No Gun", config.rage, "noGun");
		ui.addToggleRow(weapons, "Fast Switch", config.rage, "fastSwitch");

		const exploits = ui.addSection(g, "Exploits", "misc");
		ui.addToggleRow(exploits, "Kill All", config.rage, "killAll");
		ui.addButton(exploits, "God Mode (Self)", "Execute", "Execute", () => {
			new ColyShooter(localPlayerPtr).SendRPCShoot(ctx.createMstr(localPlayerSessionId), Vector3.zero().createPtr(), 3, -999999999, null, false);
		});
		ui.addButton(exploits, "God Mode (All)", "Execute", "Execute", () => {
			Players.forEach((player) => {
				new ColyShooter(player.ptr).SendRPCShoot(ctx.createMstr(new ColyBehaviour(player).colyView.sessionId), Vector3.zero().createPtr(), 3, -999999999, null, false);
			});
		});
	});

	ui.addTab("Misc", "misc", (t) => {
		const g = ui.addPanelGrid(t);

		const movement = ui.addSection(g, "Movement", "misc");
		ui.addToggleRow(movement, "Anti-AFK", config.misc, "antiafk");
		ui.addToggleRow(movement, "Never Suicide", config.misc, "neverSuicide");
		ui.addToggleRow(movement, "Infinite Dash", config.misc, "infDash");
		ui.addToggleRow(movement, "Custom Dash Force", config.misc, "customDashForce");
		ui.addSliderRow(movement, "Dash Force", config.misc, "dashForce", 1, 250, 1);
		ui.addToggleRow(movement, "Flight", config.misc, "flight");
		ui.addSliderRow(movement, "Flight Speed", config.misc, "flightSpeed", 1, 75, 1);
		ui.addToggleRow(movement, "Third Person", config.misc, "thirdPerson");
		ui.addSliderRow(movement, "Camera Distance", config.misc, "thirdPersonDist", 1, 10, 0.5);

		const autofarm = ui.addSection(g, "Autofarm", "misc");
		ui.addToggleRow(autofarm, "Auto Capture Flag", config.rage, "autoCTF")
		const view = ui.addSection(g, "View", "eye");
		ui.addToggleRow(view, "No Muzzle Flash", config.misc, "noflash");
		ui.addToggleRow(view, "Aim View Model", config.misc, "aimingViewModel");
		ui.addSliderRow(view, "VM FOV", config.misc, "aimingViewModelFOV", 0, 3, .1);
		ui.addToggleRow(view, "Custom FOV", config.misc, "customFOV");
		ui.addSliderRow(view, "FOV Amount", config.misc, "customFOVAmount", 1, 180, 1);

		const chat = ui.addSection(g, "Chat", "misc");
		ui.addToggleRow(chat, "Chat Spam", config.misc, "chatSpam");
		ui.addTextRow(chat, "Spam Message", config.misc, "chatSpamMessage", "recte.cc");
		ui.addButton(chat, "Send Message", "Execute", "Execute1", () => {
			let instance = new ChatUIManager(chatManager);
			instance.SendChatMessage(window.ctx.createMstr(config.misc.chatSpamMessage));
		});
	});

	ui.addTab("Client", "palette", (t) => {
		const g = ui.addPanelGrid(t);

		const snow = ui.addSection(g, "Snow", "snow");
		ui.addToggleRow(snow, "Enabled", config.snow, "enabled", () => {
			const el = document.getElementById("recte-snow");
			if (el) el.style.display = config.snow.enabled ? "block" : "none";
			if (config.snow.enabled) ui._reinitSnow();
		});
		ui.addColorRow(snow, "Color", config.snow, "color");
		ui.addSliderRow(snow, "Amount", config.snow, "amount", 1, 100, 1);
		ui.addSliderRow(snow, "Size", config.snow, "size", 1, 20, 0.5);
		ui.addToggleRow(snow, "Random Size", config.snow, "randomSize");
		ui.addSliderRow(snow, "Speed", config.snow, "speed", 0.1, 10, 0.1);
		ui.addSliderRow(snow, "Opacity", config.snow, "opacity", 0.05, 1, 0.05);
		ui.addButton(snow, "Apply Snow", "Apply", "Apply", () => { ui._reinitSnow(); });

		const theme = ui.addSection(g, "Theme", "palette");
		const applyColors = () => ui._applyColors();
		ui.addColorRow(theme, "Accent", config.client, "accent", applyColors);
		ui.addColorRow(theme, "Text", config.client, "text", applyColors);
		ui.addColorRow(theme, "Subtext", config.client, "subtext", applyColors);
		ui.addColorRow(theme, "Muted", config.client, "muted", applyColors);
		ui.addColorRow(theme, "Card", config.client, "card", applyColors);
		ui.addColorRow(theme, "Card Hover", config.client, "cardHover", applyColors);
		ui.addColorRow(theme, "Border", config.client, "border", applyColors);
		ui.addColorRow(theme, "Border Hover", config.client, "borderHover", applyColors);
		ui.addColorRow(theme, "Background", config.client, "background", applyColors);


		const keybinds = ui.addSection(g, "Keybinds", "key");
		ui.addSelectRow(keybinds, "Menu Toggle Key", config.settings.keyOptions, config.settings, "toggle");
		ui.addSelectRow(keybinds, "Godmode Key", config.settings.keyOptions, config.settings, "godmodekey");
	});


	ui.addTab("Credits", "info", (t) => {
		const credits = ui.addSection(t, "Credits", "info");
		ui.addButton(credits, "Discord", { text: "Join our Discord!" }, "text", () => {
			window.open("https://recte.cc/invite", "_blank");
		});
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
	try {
		requestAnimationFrame(mainloop);
		esp();
		main();
		new CTFManager(ctfmanager).ShowPopupUI(ctx.createMstr("yay"))

		if (!init) {
			console.log("Recte Loaded & Shit"
			);
			init = true;
		}
	} catch { }

	if (keysPressed[config.settings.godmodekey.toLowerCase()]) {
		if (!toggleKeys.godmode) {
			new ColyShooter(localPlayerPtr).SendRPCShoot(ctx.createMstr(localPlayerSessionId), Vector3.zero().createPtr(), 3, -999999999, null, false);

			toggleKeys.godmode = true;
			NotificationManager.Show(ctx.createMstr("Recte"), ctx.createMstr("God Mode Enabled"), 3)
		}
	} else {
		toggleKeys.godmode = false;
	}

	document.querySelectorAll('.banner-container,[id^="kour-io_"],banner-container,banner_300x600,banner_300x250,banner_780x90').forEach(e => e.remove())

}
