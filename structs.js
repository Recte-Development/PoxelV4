export class ColyShooter {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get currentGun() { return new Gun(window.ctx.call("ColyShooter", "get_currentGun", [this.ptr])); }
    get OnGunChange() { return this.ptr.readField(0x40, 'i32'); }
    set OnGunChange(v) { return this.ptr.writeField(0x40, 'i32', v); }
    get OnInventoryChange() { return this.ptr.readField(0x44, 'i32'); }
    set OnInventoryChange(v) { return this.ptr.writeField(0x44, 'i32', v); }
    get allyIndicator() { return new GameObject(this.ptr.readField(0x1C, 'i32')); }
    set allyIndicator(v) { return this.ptr.writeField(0x1C, 'i32', v); }
    get colyTeamMember() { return new ColyTeamMember(this.ptr.readField(0x58, 'i32')); }
    set colyTeamMember(v) { return this.ptr.writeField(0x58, 'i32', v); }
    get currentGunLocalIndex() { return this.ptr.readField(0x48, 'i32').val(); }
    set currentGunLocalIndex(v) { return this.ptr.writeField(0x48, 'i32', v); }
    get globalAnimator() { return new Animator(this.ptr.readField(0x18, 'i32')); }
    set globalAnimator(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get globalGunParent() { return new Transform(this.ptr.readField(0x30, 'i32')); }
    set globalGunParent(v) { return this.ptr.writeField(0x30, 'i32', v); }
    get gunPickupImageFx() { return new Image(this.ptr.readField(0x38, 'i32')); }
    set gunPickupImageFx(v) { return this.ptr.writeField(0x38, 'i32', v); }
    get hitLayers() { return new LayerMask(this.ptr.readField(0x34, 'i32')); }
    set hitLayers(v) { return this.ptr.writeField(0x34, 'i32', v); }
    get lasGunChangeTime() { return this.ptr.readField(0x14, 'f32').val(); }
    set lasGunChangeTime(v) { return this.ptr.writeField(0x14, 'f32', v); }
    get lastHitName() { return this.ptr.readField(0x0, 'i32'); }
    set lastHitName(v) { return this.ptr.writeField(0x0, 'i32', v); }
    get localGunParent() { return new Transform(this.ptr.readField(0x2C, 'i32')); }
    set localGunParent(v) { return this.ptr.writeField(0x2C, 'i32', v); }
    get movementStateManager() { return new MovementStateManager(this.ptr.readField(0x20, 'i32')); }
    set movementStateManager(v) { return this.ptr.writeField(0x20, 'i32', v); }
    get myInventory() { return this.ptr.readField(0x3C, 'i32'); }
    set myInventory(v) { return this.ptr.writeField(0x3C, 'i32', v); }
    get spawnTime() { return this.ptr.readField(0x5C, 'f32').val(); }
    set spawnTime(v) { return this.ptr.writeField(0x5C, 'f32', v); }
    get unregisterGunSwitch() { return this.ptr.readField(0x4C, 'i32'); }
    set unregisterGunSwitch(v) { return this.ptr.writeField(0x4C, 'i32', v); }
    get unregisterInventoryAdds() { return this.ptr.readField(0x50, 'i32'); }
    set unregisterInventoryAdds(v) { return this.ptr.writeField(0x50, 'i32', v); }
    get unregisterInventoryRemovals() { return this.ptr.readField(0x54, 'i32'); }
    set unregisterInventoryRemovals(v) { return this.ptr.writeField(0x54, 'i32', v); }
    get worldCamera() { return new Camera(this.ptr.readField(0x28, 'i32')); }
    set worldCamera(v) { return this.ptr.writeField(0x28, 'i32', v); }
    get worldCameraSpring() { return new Spring(this.ptr.readField(0x24, 'i32')); }
    set worldCameraSpring(v) { return this.ptr.writeField(0x24, 'i32', v); }
    _AddItemToInventory_b_32_0(x) { window.ctx.call("ColyShooter", "<AddItemToInventory>b__32_0", [this.ptr, x]); }
    _AddItemToInventory_b_32_1(x) { window.ctx.call("ColyShooter", "<AddItemToInventory>b__32_1", [this.ptr, x]); }
    _AddItemToInventory_b_32_2() { window.ctx.call("ColyShooter", "<AddItemToInventory>b__32_2", [this.ptr]); }
    _AddItemToInventory_b_32_3() { window.ctx.call("ColyShooter", "<AddItemToInventory>b__32_3", [this.ptr]); }
    _OnNetworkSpawned_b_27_1(index, weapon) { window.ctx.call("ColyShooter", "<OnNetworkSpawned>b__27_1", [this.ptr, index, weapon]); }
    _OnNetworkSpawned_b_27_3(index, weapon) { window.ctx.call("ColyShooter", "<OnNetworkSpawned>b__27_3", [this.ptr, index, weapon]); }
    _OnNetworkSpawned_b_27_5(current, previous) { window.ctx.call("ColyShooter", "<OnNetworkSpawned>b__27_5", [this.ptr, current, previous]); }
    _OnNetworkSpawned_b_27_6(originalTarget) { window.ctx.call("ColyShooter", "<OnNetworkSpawned>b__27_6", [this.ptr, originalTarget]); }
    _OnNetworkSpawned_b_27_7(data) { window.ctx.call("ColyShooter", "<OnNetworkSpawned>b__27_7", [this.ptr, data]); }
    AddItemToInventory(weapon, switchToNew) { window.ctx.call("ColyShooter", "AddItemToInventory", [this.ptr, weapon, switchToNew]); }
    CanPickWeapon(weaponId) { return window.ctx.call("ColyShooter", "CanPickWeapon", [this.ptr, weaponId]).val() === 1; }
    ChangeGun(newGunIndex) { window.ctx.call("ColyShooter", "ChangeGun", [this.ptr, newGunIndex]); }
    CleanupGunsOnGlobalPlayer() { window.ctx.call("ColyShooter", "CleanupGunsOnGlobalPlayer", [this.ptr]); }
    CommitSuicide() { window.ctx.call("ColyShooter", "CommitSuicide", [this.ptr]); }
    HandleShotRejectedByServer(targetSessionId) { window.ctx.call("ColyShooter", "HandleShotRejectedByServer", [this.ptr, targetSessionId]); }
    InitInventory(inventory, initialWeapon) { window.ctx.call("ColyShooter", "InitInventory", [this.ptr, inventory, initialWeapon]); }
    IntervalHitIdentification() { window.ctx.call("ColyShooter", "IntervalHitIdentification", [this.ptr]); }
    IsAbleToShoot(maxRange, opticDotPosition) { return window.ctx.call("ColyShooter", "IsAbleToShoot", [this.ptr, maxRange, opticDotPosition]).val() === 1; }
    OnDisable() { window.ctx.call("ColyShooter", "OnDisable", [this.ptr]); }
    OnNetworkSpawned(spawnInfo) { window.ctx.call("ColyShooter", "OnNetworkSpawned", [this.ptr, spawnInfo]); }
    RegularShoot(maxRange, opticDotPosition) { window.ctx.call("ColyShooter", "RegularShoot", [this.ptr, maxRange, opticDotPosition]); }
    SendRPCShoot(targetSessionId, hitPos, hitType, damage, shotId, isSuicide) { window.ctx.call("ColyShooter", "SendRPCShoot", [this.ptr, targetSessionId, hitPos, hitType, damage, shotId, isSuicide]); }
    SetCurrentGunLocalIndex(index) { window.ctx.call("ColyShooter", "SetCurrentGunLocalIndex", [this.ptr, index]); }
    ShotgunShoot(shotgun, maxRange, opticDotPosition) { window.ctx.call("ColyShooter", "ShotgunShoot", [this.ptr, shotgun, maxRange, opticDotPosition]); }
    ShowCurrentGunOnGlobalPlayer() { window.ctx.call("ColyShooter", "ShowCurrentGunOnGlobalPlayer", [this.ptr]); }
    TryIdentifyAlly(hit) { return window.ctx.call("ColyShooter", "TryIdentifyAlly", [this.ptr, hit]).val() === 1; }
    TryIdentifyTargetFromHit(hit, damage, hitName, hitColyView) { return window.ctx.call("ColyShooter", "TryIdentifyTargetFromHit", [this.ptr, hit, damage, hitName, hitColyView]).val() === 1; }
    TryShoot() { window.ctx.call("ColyShooter", "TryShoot", [this.ptr]); }
    Update() { window.ctx.call("ColyShooter", "Update", [this.ptr]); }
}

export class Spectator {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get availablePlayers() { return this.ptr.readField(0x4C, 'i32'); }
    set availablePlayers(v) { return this.ptr.writeField(0x4C, 'i32', v); }
    get currentMode() { return this.ptr.readField(0x48, 'i32'); }
    set currentMode(v) { return this.ptr.writeField(0x48, 'i32', v); }
    get currentPlayerIndex() { return this.ptr.readField(0x50, 'i32').val(); }
    set currentPlayerIndex(v) { return this.ptr.writeField(0x50, 'i32', v); }
    get currentTargetPlayer() { return new ColyView(this.ptr.readField(0x54, 'i32')); }
    set currentTargetPlayer(v) { return this.ptr.writeField(0x54, 'i32', v); }
    get cursorLocked() { return this.ptr.readField(0x60, 'i32').val() === 1; }
    set cursorLocked(v) { return this.ptr.writeField(0x60, 'i32', v); }
    get exitKey() { return new KeyCode(this.ptr.readField(0x3C, 'i32')); }
    set exitKey(v) { return this.ptr.writeField(0x3C, 'i32', v); }
    get fastMoveKey() { return new KeyCode(this.ptr.readField(0x40, 'i32')); }
    set fastMoveKey(v) { return this.ptr.writeField(0x40, 'i32', v); }
    get fastMoveSpeed() { return this.ptr.readField(0x14, 'f32').val(); }
    set fastMoveSpeed(v) { return this.ptr.writeField(0x14, 'f32', v); }
    get followDistance() { return this.ptr.readField(0x1C, 'f32').val(); }
    set followDistance(v) { return this.ptr.writeField(0x1C, 'f32', v); }
    get followHeight() { return this.ptr.readField(0x28, 'f32').val(); }
    set followHeight(v) { return this.ptr.writeField(0x28, 'f32', v); }
    get instance() { return new Spectator(this.ptr.readField(0x0, 'i32')); }
    set instance(v) { return this.ptr.writeField(0x0, 'i32', v); }
    get manualPosition() { return new Vector3(this.ptr.readField(0x64, 'i32')); }
    set manualPosition(v) { return this.ptr.writeField(0x64, 'i32', v); }
    get manualRotation() { return new Quaternion(this.ptr.readField(0x70, 'i32')); }
    set manualRotation(v) { return this.ptr.writeField(0x70, 'i32', v); }
    get maxFollowDistance() { return this.ptr.readField(0x24, 'f32').val(); }
    set maxFollowDistance(v) { return this.ptr.writeField(0x24, 'f32', v); }
    get minFollowDistance() { return this.ptr.readField(0x20, 'f32').val(); }
    set minFollowDistance(v) { return this.ptr.writeField(0x20, 'f32', v); }
    get mouseSensitivity() { return this.ptr.readField(0x18, 'f32').val(); }
    set mouseSensitivity(v) { return this.ptr.writeField(0x18, 'f32', v); }
    get mouseX() { return this.ptr.readField(0x58, 'f32').val(); }
    set mouseX(v) { return this.ptr.writeField(0x58, 'f32', v); }
    get mouseY() { return this.ptr.readField(0x5C, 'f32').val(); }
    set mouseY(v) { return this.ptr.writeField(0x5C, 'f32', v); }
    get moveSpeed() { return this.ptr.readField(0x10, 'f32').val(); }
    set moveSpeed(v) { return this.ptr.writeField(0x10, 'f32', v); }
    get nextPlayerKey() { return new KeyCode(this.ptr.readField(0x34, 'i32')); }
    set nextPlayerKey(v) { return this.ptr.writeField(0x34, 'i32', v); }
    get obstacleLayerMask() { return new LayerMask(this.ptr.readField(0x2C, 'i32')); }
    set obstacleLayerMask(v) { return this.ptr.writeField(0x2C, 'i32', v); }
    get prevPlayerKey() { return new KeyCode(this.ptr.readField(0x38, 'i32')); }
    set prevPlayerKey(v) { return this.ptr.writeField(0x38, 'i32', v); }
    get spectatorCamera() { return new Camera(this.ptr.readField(0x80, 'i32')); }
    set spectatorCamera(v) { return this.ptr.writeField(0x80, 'i32', v); }
    get toggleModeKey() { return new KeyCode(this.ptr.readField(0x30, 'i32')); }
    set toggleModeKey(v) { return this.ptr.writeField(0x30, 'i32', v); }
    get toggleUIKey() { return new KeyCode(this.ptr.readField(0x44, 'i32')); }
    set toggleUIKey(v) { return this.ptr.writeField(0x44, 'i32', v); }
    get uiVisible() { return this.ptr.readField(0x61, 'i32').val() === 1; }
    set uiVisible(v) { return this.ptr.writeField(0x61, 'i32', v); }
    FollowTargetPlayer() { window.ctx.call("Spectator", "FollowTargetPlayer", [this.ptr]); }
    GetAvailablePlayers() { return window.ctx.call("Spectator", "GetAvailablePlayers", [this.ptr]); }
    GetCurrentMode() { return window.ctx.call("Spectator", "GetCurrentMode", [this.ptr]); }
    GetCurrentPlayerIndex() { return window.ctx.call("Spectator", "GetCurrentPlayerIndex", [this.ptr]).val(); }
    GetCurrentTargetPlayer() { return new ColyView(window.ctx.call("Spectator", "GetCurrentTargetPlayer", [this.ptr])); }
    GetFollowDistance() { return window.ctx.call("Spectator", "GetFollowDistance", [this.ptr]).val(); }
    HandleFollowInput() { window.ctx.call("Spectator", "HandleFollowInput", [this.ptr]); }
    HandleInput() { window.ctx.call("Spectator", "HandleInput", [this.ptr]); }
    HandleManualInput() { window.ctx.call("Spectator", "HandleManualInput", [this.ptr]); }
    HideOtherCameras() { window.ctx.call("Spectator", "HideOtherCameras", [this.ptr]); }
    OnDestroy() { window.ctx.call("Spectator", "OnDestroy", [this.ptr]); }
    SetFollowDistance(distance) { window.ctx.call("Spectator", "SetFollowDistance", [this.ptr, distance]); }
    SetMode(mode) { window.ctx.call("Spectator", "SetMode", [this.ptr, mode]); }
    SetTargetPlayer(playerIndex) { window.ctx.call("Spectator", "SetTargetPlayer", [this.ptr, playerIndex]); }
    Start() { window.ctx.call("Spectator", "Start", [this.ptr]); }
    ToggleUI() { window.ctx.call("Spectator", "ToggleUI", [this.ptr]); }
    Update() { window.ctx.call("Spectator", "Update", [this.ptr]); }
    UpdatePlayerList() { window.ctx.call("Spectator", "UpdatePlayerList", [this.ptr]); }
    UpdateSpectator() { window.ctx.call("Spectator", "UpdateSpectator", [this.ptr]); }
    UpdateTargetPlayer() { window.ctx.call("Spectator", "UpdateTargetPlayer", [this.ptr]); }
}

export class ColyBehaviour {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get IsMine() { return window.ctx.call("ColyBehaviour", "get_IsMine", [this.ptr]).val() === 1; }
    get playerState() { return new Player(window.ctx.call("ColyBehaviour", "get_playerState", [this.ptr])); }
    get colyView() { return new ColyView(this.ptr.readField(0x10, 'i32')); }
    set colyView(v) { return this.ptr.writeField(0x10, 'i32', v); }
    InternalOnNetworkSpawned(spawnInfo) { window.ctx.call("ColyBehaviour", "InternalOnNetworkSpawned", [this.ptr, spawnInfo]); }
    OnNetworkSpawned(spawnInfo) { window.ctx.call("ColyBehaviour", "OnNetworkSpawned", [this.ptr, spawnInfo]); }
    TryGetColyBehaviour(behaviour) { return window.ctx.call("ColyBehaviour", "TryGetColyBehaviour", [this.ptr, behaviour]).val() === 1; }
}

export class ColyView {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get ActorNumber() { return window.ctx.call("ColyView", "get_ActorNumber", [this.ptr]).val(); }
    static get Mine() { return new ColyView(window.ctx.call("ColyView", "get_Mine", [])); }
    get Nickname() { return window.ctx.call("ColyView", "get_Nickname", [this.ptr]); }
    get BeforeDespawn() { return this.ptr.readField(0x18, 'i32'); }
    set BeforeDespawn(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get IsAI() { return this.ptr.readField(0x10, 'i32').val() === 1; }
    set IsAI(v) { return this.ptr.writeField(0x10, 'i32', v); }
    get allColyBehaviours() { return JSArray(this.ptr.readField(0x28, 'i32')); }
    set allColyBehaviours(v) { return this.ptr.writeField(0x28, 'i32', v); }
    get colyAI() { return new ColyAI(this.ptr.readField(0x14, 'i32')); }
    set colyAI(v) { return this.ptr.writeField(0x14, 'i32', v); }
    get isMine() { return this.ptr.readField(0x1C, 'i32').val() === 1; }
    set isMine(v) { return this.ptr.writeField(0x1C, 'i32', v); }
    get playerState() { return new Player(this.ptr.readField(0x24, 'i32')); }
    set playerState(v) { return this.ptr.writeField(0x24, 'i32', v); }
    get sessionId() { return this.ptr.readField(0x20, 'i32').mstr(); }
    set sessionId(v) { return this.ptr.writeField(0x20, 'i32', window.ctx.createMstr(v)); }
    get spawnTime() { return this.ptr.readField(0x2C, 'f32').val(); }
    set spawnTime(v) { return this.ptr.writeField(0x2C, 'f32', v); }
    static Find(viewId) { return new ColyView(window.ctx.call("ColyView", "Find", [viewId])); }
    HandleBeforeDespawn() { window.ctx.call("ColyView", "HandleBeforeDespawn", [this.ptr]); }
    Init(spawnInfo) { window.ctx.call("ColyView", "Init", [this.ptr, spawnInfo]); }
    static TryFind(viewId, foundView) { return window.ctx.call("ColyView", "TryFind", [viewId, foundView]).val() === 1; }
    static TryFindMine(view) { return window.ctx.call("ColyView", "TryFindMine", [view]).val() === 1; }
    TryGetColyBehaviour(behaviour) { return window.ctx.call("ColyView", "TryGetColyBehaviour", [this.ptr, behaviour]).val() === 1; }
}

export class ColyTeamMember {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get OnTeamChanged() { return this.ptr.readField(0x2C, 'i32'); }
    set OnTeamChanged(v) { return this.ptr.writeField(0x2C, 'i32', v); }
    get globalFlagHolderTransform() { return new Transform(this.ptr.readField(0x14, 'i32')); }
    set globalFlagHolderTransform(v) { return this.ptr.writeField(0x14, 'i32', v); }
    get holdingFlag() { return new Flag(this.ptr.readField(0x20, 'i32')); }
    set holdingFlag(v) { return this.ptr.writeField(0x20, 'i32', v); }
    get isTeams() { return this.ptr.readField(0x0, 'i32').val() === 1; }
    set isTeams(v) { return this.ptr.writeField(0x0, 'i32', v); }
    get localFlagHolderTransform() { return new Transform(this.ptr.readField(0x18, 'i32')); }
    set localFlagHolderTransform(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get team() { return new Team(this.ptr.readField(0x24, 'i32')); }
    set team(v) { return this.ptr.writeField(0x24, 'i32', v); }
    get teamIndex() { return this.ptr.readField(0x1C, 'i32'); }
    set teamIndex(v) { return this.ptr.writeField(0x1C, 'i32', v); }
    get unregisterOnTeamChange() { return this.ptr.readField(0x28, 'i32'); }
    set unregisterOnTeamChange(v) { return this.ptr.writeField(0x28, 'i32', v); }
    AmIYourEnemy() { return window.ctx.call("ColyTeamMember", "AmIYourEnemy", [this.ptr]).val() === 1; }
    GetFlagHolderTransform() { return new Transform(window.ctx.call("ColyTeamMember", "GetFlagHolderTransform", [this.ptr])); }
    static GetMyPlayerTeam() { return window.ctx.call("ColyTeamMember", "GetMyPlayerTeam", []).val(); }
    GetTeam() { return new Team(window.ctx.call("ColyTeamMember", "GetTeam", [this.ptr])); }
    HandleTeamChange(newTeam, previousTeam) { window.ctx.call("ColyTeamMember", "HandleTeamChange", [this.ptr, newTeam, previousTeam]); }
    HasAnyFlag() { return window.ctx.call("ColyTeamMember", "HasAnyFlag", [this.ptr]).val() === 1; }
    IsEnemy(hitColyView) { return window.ctx.call("ColyTeamMember", "IsEnemy", [this.ptr, hitColyView]).val() === 1; }
    OnDisable() { window.ctx.call("ColyTeamMember", "OnDisable", [this.ptr]); }
    OnNetworkSpawned(spawnInfo) { window.ctx.call("ColyTeamMember", "OnNetworkSpawned", [this.ptr, spawnInfo]); }
}

export class AFKManager {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get currentRoom() { return this.ptr.readField(0x18, 'i32'); }
    set currentRoom(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get lastActivityTime() { return this.ptr.readField(0x10, 'f32').val(); }
    set lastActivityTime(v) { return this.ptr.writeField(0x10, 'f32', v); }
    get warningShown() { return this.ptr.readField(0x14, 'i32').val() === 1; }
    set warningShown(v) { return this.ptr.writeField(0x14, 'i32', v); }
    _KickAFK_b_10_1() { window.ctx.call("AFKManager", "<KickAFK>b__10_1", [this.ptr]); }
    BannersForMainMenu() { window.ctx.call("AFKManager", "BannersForMainMenu", [this.ptr]); }
    KickAFK() { window.ctx.call("AFKManager", "KickAFK", [this.ptr]); }
    OnDisable() { window.ctx.call("AFKManager", "OnDisable", [this.ptr]); }
    OnEnable() { window.ctx.call("AFKManager", "OnEnable", [this.ptr]); }
    OnRoomChanged(newRoom) { window.ctx.call("AFKManager", "OnRoomChanged", [this.ptr, newRoom]); }
    ResetInactivityTimer() { window.ctx.call("AFKManager", "ResetInactivityTimer", [this.ptr]); }
    Update() { window.ctx.call("AFKManager", "Update", [this.ptr]); }
}

export class GameModeManager {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get current() { return new GameModeData(this.ptr.readField(0x4, 'i32')); }
    set current(v) { return this.ptr.writeField(0x4, 'i32', v); }
    get gameModeDatas() { return JSArray(this.ptr.readField(0x10, 'i32')); }
    set gameModeDatas(v) { return this.ptr.writeField(0x10, 'i32', v); }
    get instance() { return new GameModeManager(this.ptr.readField(0x0, 'i32')); }
    set instance(v) { return this.ptr.writeField(0x0, 'i32', v); }
    get previousModeSbyte() { return this.ptr.readField(0x14, 'i32'); }
    set previousModeSbyte(v) { return this.ptr.writeField(0x14, 'i32', v); }
    Awake() { window.ctx.call("GameModeManager", "Awake", [this.ptr]); }
    static GetGameModeFromSbyte(newModeSbyte) { return new GameModeData(window.ctx.call("GameModeManager", "GetGameModeFromSbyte", [newModeSbyte])); }
    OnEnable() { window.ctx.call("GameModeManager", "OnEnable", [this.ptr]); }
    static TryGetCurrent(_current) { return window.ctx.call("GameModeManager", "TryGetCurrent", [_current]).val() === 1; }
    Update() { window.ctx.call("GameModeManager", "Update", [this.ptr]); }
}

export class MyRoomState {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get aboutToShutdown() { return this.ptr.readField(0x48, 'i32').val() === 1; }
    set aboutToShutdown(v) { return this.ptr.writeField(0x48, 'i32', v); }
    get avgElo() { return this.ptr.readField(0x10, 'f32').val(); }
    set avgElo(v) { return this.ptr.writeField(0x10, 'f32', v); }
    get capturePoints() { return this.ptr.readField(0x3C, 'i32'); }
    set capturePoints(v) { return this.ptr.writeField(0x3C, 'i32', v); }
    get droppedTags() { return this.ptr.readField(0x44, 'i32'); }
    set droppedTags(v) { return this.ptr.writeField(0x44, 'i32', v); }
    get flags() { return this.ptr.readField(0x40, 'i32'); }
    set flags(v) { return this.ptr.writeField(0x40, 'i32', v); }
    get grenades() { return this.ptr.readField(0x38, 'i32'); }
    set grenades(v) { return this.ptr.writeField(0x38, 'i32', v); }
    get light() { return this.ptr.readField(0x19, 'i32'); }
    set light(v) { return this.ptr.writeField(0x19, 'i32', v); }
    get map() { return this.ptr.readField(0x18, 'i32'); }
    set map(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get matchLength() { return this.ptr.readField(0x1C, 'i32').val(); }
    set matchLength(v) { return this.ptr.writeField(0x1C, 'i32', v); }
    get maxPlayers() { return this.ptr.readField(0x20, 'i32').val(); }
    set maxPlayers(v) { return this.ptr.writeField(0x20, 'i32', v); }
    get mode() { return this.ptr.readField(0x1A, 'i32'); }
    set mode(v) { return this.ptr.writeField(0x1A, 'i32', v); }
    get players() { return this.ptr.readField(0x14, 'i32'); }
    set players(v) { return this.ptr.writeField(0x14, 'i32', v); }
    get region() { return this.ptr.readField(0x24, 'i32'); }
    set region(v) { return this.ptr.writeField(0x24, 'i32', v); }
    get spawnedItems() { return this.ptr.readField(0x34, 'i32'); }
    set spawnedItems(v) { return this.ptr.writeField(0x34, 'i32', v); }
    get startTime() { return this.ptr.readField(0x28, 'i32'); }
    set startTime(v) { return this.ptr.writeField(0x28, 'i32', v); }
    get teamScores() { return this.ptr.readField(0x30, 'i32').val(); }
    set teamScores(v) { return this.ptr.writeField(0x30, 'i32', v); }
}

export class Gun {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get AIFireRate() { return window.ctx.call("Gun", "get_AIFireRate", [this.ptr]).val(); }
    get aimDuration() { return window.ctx.call("Gun", "get_aimDuration", [this.ptr]).val(); }
    get currentAmmo() { return window.ctx.call("Gun", "get_currentAmmo", [this.ptr]).val(); }
    set currentAmmo(v) { window.ctx.call("Gun", "set_currentAmmo", [this.ptr, v]); }
    get FireRate() { return window.ctx.call("Gun", "get_FireRate", [this.ptr]).val(); }
    get HoldToShoot() { return window.ctx.call("Gun", "get_HoldToShoot", [this.ptr]).val() === 1; }
    get UsesAmmoSlots() { return window.ctx.call("Gun", "get_UsesAmmoSlots", [this.ptr]).val() === 1; }
    get ADSCenterPoint() { return new Transform(this.ptr.readField(0xB0, 'i32')); }
    set ADSCenterPoint(v) { return this.ptr.writeField(0xB0, 'i32', v); }
    get ADSRayPoint() { return new Transform(this.ptr.readField(0xAC, 'i32')); }
    set ADSRayPoint(v) { return this.ptr.writeField(0xAC, 'i32', v); }
    get OnAmmoChange() { return this.ptr.readField(0x4, 'i32').val(); }
    set OnAmmoChange(v) { return this.ptr.writeField(0x4, 'i32', v); }
    get _currentAmmo() { return this.ptr.readField(0xEC, 'i32').val(); }
    set _currentAmmo(v) { return this.ptr.writeField(0xEC, 'i32', v); }
    get afterSwitchDontAllowShootFor() { return this.ptr.readField(0x10C, 'f32').val(); }
    set afterSwitchDontAllowShootFor(v) { return this.ptr.writeField(0x10C, 'f32', v); }
    get aimFOVWeapon() { return this.ptr.readField(0xB8, 'f32').val(); }
    set aimFOVWeapon(v) { return this.ptr.writeField(0xB8, 'f32', v); }
    get aimFOVWorld() { return this.ptr.readField(0xB4, 'f32').val(); }
    set aimFOVWorld(v) { return this.ptr.writeField(0xB4, 'f32', v); }
    get allowAimAssist() { return this.ptr.readField(0x1C, 'i32').val() === 1; }
    set allowAimAssist(v) { return this.ptr.writeField(0x1C, 'i32', v); }
    get ammoSlotImages() { return JSArray(this.ptr.readField(0xD4, 'i32')); }
    set ammoSlotImages(v) { return this.ptr.writeField(0xD4, 'i32', v); }
    get ammoSlotsGradient() { return new Gradient(this.ptr.readField(0xDC, 'i32')); }
    set ammoSlotsGradient(v) { return this.ptr.writeField(0xDC, 'i32', v); }
    get ammoTxtColorGradient() { return new Gradient(this.ptr.readField(0xD0, 'i32')); }
    set ammoTxtColorGradient(v) { return this.ptr.writeField(0xD0, 'i32', v); }
    get ammoTxts() { return JSArray(this.ptr.readField(0xC8, 'i32')); }
    set ammoTxts(v) { return this.ptr.writeField(0xC8, 'i32', v); }
    get animator() { return new Animator(this.ptr.readField(0x60, 'i32')); }
    set animator(v) { return this.ptr.writeField(0x60, 'i32', v); }
    get backgroundColor() { return new Color(this.ptr.readField(0x34, 'i32')); }
    set backgroundColor(v) { return this.ptr.writeField(0x34, 'i32', v); }
    get baseDamage() { return this.ptr.readField(0x94, 'f32').val(); }
    set baseDamage(v) { return this.ptr.writeField(0x94, 'f32', v); }
    get bloom() { return this.ptr.readField(0xA4, 'f32').val(); }
    set bloom(v) { return this.ptr.writeField(0xA4, 'f32', v); }
    get bulletPrefab() { return new Bullet(this.ptr.readField(0x70, 'i32')); }
    set bulletPrefab(v) { return this.ptr.writeField(0x70, 'i32', v); }
    get bulletRow() { return this.ptr.readField(0x100, 'f32').val(); }
    set bulletRow(v) { return this.ptr.writeField(0x100, 'f32', v); }
    get cameraRecoilData() { return new RecoilData(this.ptr.readField(0xC4, 'i32')); }
    set cameraRecoilData(v) { return this.ptr.writeField(0xC4, 'i32', v); }
    get canAimAtAll() { return this.ptr.readField(0x54, 'i32').val() === 1; }
    set canAimAtAll(v) { return this.ptr.writeField(0x54, 'i32', v); }
    get colorizeAmmoSlots() { return this.ptr.readField(0xD8, 'i32').val() === 1; }
    set colorizeAmmoSlots(v) { return this.ptr.writeField(0xD8, 'i32', v); }
    get crosshairStyle() { return this.ptr.readField(0x48, 'i32'); }
    set crosshairStyle(v) { return this.ptr.writeField(0x48, 'i32', v); }
    get curVel() { return this.ptr.readField(0xF4, 'f32').val(); }
    set curVel(v) { return this.ptr.writeField(0xF4, 'f32', v); }
    get current() { return new Gun(this.ptr.readField(0x0, 'i32')); }
    set current(v) { return this.ptr.writeField(0x0, 'i32', v); }
    get damageRandom() { return this.ptr.readField(0xA0, 'f32').val(); }
    set damageRandom(v) { return this.ptr.writeField(0xA0, 'f32', v); }
    get defaultTexture() { return this.ptr.readField(0x20, 'i32').mstr(); }
    set defaultTexture(v) { return this.ptr.writeField(0x20, 'i32', window.ctx.createMstr(v)); }
    get fireRate() { return this.ptr.readField(0x88, 'f32').val(); }
    set fireRate(v) { return this.ptr.writeField(0x88, 'f32', v); }
    get globalHoldType() { return this.ptr.readField(0x4C, 'i32'); }
    set globalHoldType(v) { return this.ptr.writeField(0x4C, 'i32', v); }
    get gunGfx() { return new GameObject(this.ptr.readField(0x44, 'i32')); }
    set gunGfx(v) { return this.ptr.writeField(0x44, 'i32', v); }
    get handsModel() { return new GameObject(this.ptr.readField(0x74, 'i32')); }
    set handsModel(v) { return this.ptr.writeField(0x74, 'i32', v); }
    get headshotMulti() { return this.ptr.readField(0xA8, 'f32').val(); }
    set headshotMulti(v) { return this.ptr.writeField(0xA8, 'f32', v); }
    get holdToShoot() { return this.ptr.readField(0x56, 'i32').val() === 1; }
    set holdToShoot(v) { return this.ptr.writeField(0x56, 'i32', v); }
    get id() { return this.ptr.readField(0x10, 'i32').val(); }
    set id(v) { return this.ptr.writeField(0x10, 'i32', v); }
    get isGlobal() { return this.ptr.readField(0x5C, 'i32').val() === 1; }
    set isGlobal(v) { return this.ptr.writeField(0x5C, 'i32', v); }
    get isReloading() { return this.ptr.readField(0xF8, 'i32').val() === 1; }
    set isReloading(v) { return this.ptr.writeField(0xF8, 'i32', v); }
    get loadPitch() { return this.ptr.readField(0x120, 'f32').val(); }
    set loadPitch(v) { return this.ptr.writeField(0x120, 'f32', v); }
    get maxAmmo() { return this.ptr.readField(0x9C, 'i32').val(); }
    set maxAmmo(v) { return this.ptr.writeField(0x9C, 'i32', v); }
    get maxRange() { return this.ptr.readField(0x8C, 'f32').val(); }
    set maxRange(v) { return this.ptr.writeField(0x8C, 'f32', v); }
    get minRange() { return this.ptr.readField(0x90, 'f32').val(); }
    set minRange(v) { return this.ptr.writeField(0x90, 'f32', v); }
    get mobileHoldToShootFireRate() { return this.ptr.readField(0x58, 'i32').val(); }
    set mobileHoldToShootFireRate(v) { return this.ptr.writeField(0x58, 'i32', v); }
    get mobileShootOnRelease() { return this.ptr.readField(0x55, 'i32').val() === 1; }
    set mobileShootOnRelease(v) { return this.ptr.writeField(0x55, 'i32', v); }
    get muzzleFlash() { return new MuzzleFlash(this.ptr.readField(0x68, 'i32')); }
    set muzzleFlash(v) { return this.ptr.writeField(0x68, 'i32', v); }
    get muzzleFlashSetParentNullTemp() { return this.ptr.readField(0xE0, 'i32').val() === 1; }
    set muzzleFlashSetParentNullTemp(v) { return this.ptr.writeField(0xE0, 'i32', v); }
    get muzzleTransform() { return new Transform(this.ptr.readField(0x6C, 'i32')); }
    set muzzleTransform(v) { return this.ptr.writeField(0x6C, 'i32', v); }
    get myGunSkin() { return new GunSkin(this.ptr.readField(0x11C, 'i32')); }
    set myGunSkin(v) { return this.ptr.writeField(0x11C, 'i32', v); }
    get myTextureLoader() { return new MyTextureLoader(this.ptr.readField(0x28, 'i32')); }
    set myTextureLoader(v) { return this.ptr.writeField(0x28, 'i32', v); }
    get nextFireTime() { return this.ptr.readField(0x84, 'f32').val(); }
    set nextFireTime(v) { return this.ptr.writeField(0x84, 'f32', v); }
    get parentRecoilData() { return new RecoilData(this.ptr.readField(0xC0, 'i32')); }
    set parentRecoilData(v) { return this.ptr.writeField(0xC0, 'i32', v); }
    get physicalCharacterRecoil() { return this.ptr.readField(0x30, 'f32').val(); }
    set physicalCharacterRecoil(v) { return this.ptr.writeField(0x30, 'f32', v); }
    get previousAiming() { return this.ptr.readField(0xF1, 'i32').val() === 1; }
    set previousAiming(v) { return this.ptr.writeField(0xF1, 'i32', v); }
    get previousSprinting() { return this.ptr.readField(0xF0, 'i32').val() === 1; }
    set previousSprinting(v) { return this.ptr.writeField(0xF0, 'i32', v); }
    get progressiveReload() { return this.ptr.readField(0xE1, 'i32').val() === 1; }
    set progressiveReload(v) { return this.ptr.writeField(0xE1, 'i32', v); }
    get rarity() { return new ItemRarity(this.ptr.readField(0x18, 'i32')); }
    set rarity(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get reloadAudioSource() { return new AudioSource(this.ptr.readField(0x114, 'i32')); }
    set reloadAudioSource(v) { return this.ptr.writeField(0x114, 'i32', v); }
    get reloadClip() { return new AudioClip(this.ptr.readField(0xE8, 'i32')); }
    set reloadClip(v) { return this.ptr.writeField(0xE8, 'i32', v); }
    get reloadSounds() { return JSArray(this.ptr.readField(0x110, 'i32')); }
    set reloadSounds(v) { return this.ptr.writeField(0x110, 'i32', v); }
    get reloadTween() { return new Tween(this.ptr.readField(0xFC, 'i32')); }
    set reloadTween(v) { return this.ptr.writeField(0xFC, 'i32', v); }
    get renderAddressableName() { return this.ptr.readField(0x24, 'i32').mstr(); }
    set renderAddressableName(v) { return this.ptr.writeField(0x24, 'i32', window.ctx.createMstr(v)); }
    get shootPitchOverFire() { return new AnimationCurve(this.ptr.readField(0x50, 'i32')); }
    set shootPitchOverFire(v) { return this.ptr.writeField(0x50, 'i32', v); }
    get shootSource() { return new AudioSource(this.ptr.readField(0xE4, 'i32')); }
    set shootSource(v) { return this.ptr.writeField(0xE4, 'i32', v); }
    get shooter() { return new ColyShooter(this.ptr.readField(0xBC, 'i32')); }
    set shooter(v) { return this.ptr.writeField(0xBC, 'i32', v); }
    get skinId() { return this.ptr.readField(0x2C, 'i32').val(); }
    set skinId(v) { return this.ptr.writeField(0x2C, 'i32', v); }
    get soundSequenceCoroutine() { return new Coroutine(this.ptr.readField(0x118, 'i32')); }
    set soundSequenceCoroutine(v) { return this.ptr.writeField(0x118, 'i32', v); }
    get sprintSpeedMulti() { return this.ptr.readField(0x98, 'f32').val(); }
    set sprintSpeedMulti(v) { return this.ptr.writeField(0x98, 'f32', v); }
    get swayMulti() { return this.ptr.readField(0x78, 'f32').val(); }
    set swayMulti(v) { return this.ptr.writeField(0x78, 'f32', v); }
    get swayRegularMovementMulti() { return this.ptr.readField(0x80, 'f32').val(); }
    set swayRegularMovementMulti(v) { return this.ptr.writeField(0x80, 'f32', v); }
    get swayYMovementMulti() { return this.ptr.readField(0x7C, 'f32').val(); }
    set swayYMovementMulti(v) { return this.ptr.writeField(0x7C, 'f32', v); }
    get textFormat() { return this.ptr.readField(0xCC, 'i32').mstr(); }
    set textFormat(v) { return this.ptr.writeField(0xCC, 'i32', window.ctx.createMstr(v)); }
    get type() { return this.ptr.readField(0x14, 'i32').mstr(); }
    set type(v) { return this.ptr.writeField(0x14, 'i32', window.ctx.createMstr(v)); }
    get worldCameraController() { return new RuntimeAnimatorController(this.ptr.readField(0x64, 'i32')); }
    set worldCameraController(v) { return this.ptr.writeField(0x64, 'i32', v); }
    _DelayedReloadStart_b_99_0(ammoUpdateLive) { window.ctx.call("Gun", "<DelayedReloadStart>b__99_0", [this.ptr, ammoUpdateLive]); }
    _DelayedReloadStart_b_99_1() { window.ctx.call("Gun", "<DelayedReloadStart>b__99_1", [this.ptr]); }
    _ReAllocateMyAudio_b_116_0() { return window.ctx.call("Gun", "<ReAllocateMyAudio>b__116_0", [this.ptr]).val() === 1; }
    ApplyRecoil() { window.ctx.call("Gun", "ApplyRecoil", [this.ptr]); }
    CalculateDamage(distance, hitName) { return window.ctx.call("Gun", "CalculateDamage", [this.ptr, distance, hitName]).val(); }
    CanAim() { return window.ctx.call("Gun", "CanAim", [this.ptr]).val() === 1; }
    CanInspect() { return window.ctx.call("Gun", "CanInspect", [this.ptr]).val() === 1; }
    CanShoot(maxRange_, opticDot) { return window.ctx.call("Gun", "CanShoot", [this.ptr, maxRange_, opticDot]).val() === 1; }
    CanSprint() { return window.ctx.call("Gun", "CanSprint", [this.ptr]).val() === 1; }
    CanSwitch() { return window.ctx.call("Gun", "CanSwitch", [this.ptr]).val() === 1; }
    CancelInspect() { window.ctx.call("Gun", "CancelInspect", [this.ptr]); }
    CancelReload() { window.ctx.call("Gun", "CancelReload", [this.ptr]); }
    DelayedReloadStart(reloadDuration) { return window.ctx.call("Gun", "DelayedReloadStart", [this.ptr, reloadDuration]); }
    EnsureLayer() { window.ctx.call("Gun", "EnsureLayer", [this.ptr]); }
    FreeMyAudio() { window.ctx.call("Gun", "FreeMyAudio", [this.ptr]); }
    GetAnimationDuration(animName) { return window.ctx.call("Gun", "GetAnimationDuration", [this.ptr, animName]).val(); }
    GetBaseDamage() { return window.ctx.call("Gun", "GetBaseDamage", [this.ptr]).val(); }
    GetColor() { return (()=>{
					let structptr_8f47e0 = window.ctx.malloc(16);
					window.ctx.call("Gun", "GetColor", [structptr_8f47e0, this.ptr]);
					return structptr_8f47e0;
				})(); }
    GetFinalRenderAddressableName() { return window.ctx.call("Gun", "GetFinalRenderAddressableName", [this.ptr]); }
    GetFinalSkinId() { return window.ctx.call("Gun", "GetFinalSkinId", [this.ptr]).val(); }
    Init(_isGlobal, isCurrent, _skinId) { window.ctx.call("Gun", "Init", [this.ptr, _isGlobal, isCurrent, _skinId]); }
    InitForPreview() { window.ctx.call("Gun", "InitForPreview", [this.ptr]); }
    InitGlobal(isUIPreview, withSkinId) { window.ctx.call("Gun", "InitGlobal", [this.ptr, isUIPreview, withSkinId]); }
    IsFullAmmo() { return window.ctx.call("Gun", "IsFullAmmo", [this.ptr]).val() === 1; }
    IsRaycastShooting() { return window.ctx.call("Gun", "IsRaycastShooting", [this.ptr]).val() === 1; }
    LoadAllMySounds() { window.ctx.call("Gun", "LoadAllMySounds", [this.ptr]); }
    LoadMySkinIfNeeded() { return window.ctx.call("Gun", "LoadMySkinIfNeeded", [this.ptr]); }
    LoadMyTexture() { window.ctx.call("Gun", "LoadMyTexture", [this.ptr]); }
    OnAim(aimingNow) { window.ctx.call("Gun", "OnAim", [this.ptr, aimingNow]); }
    OnCancelInspect() { window.ctx.call("Gun", "OnCancelInspect", [this.ptr]); }
    OnDrawGizmos() { window.ctx.call("Gun", "OnDrawGizmos", [this.ptr]); }
    OnGunSwitchTick(isActive) { window.ctx.call("Gun", "OnGunSwitchTick", [this.ptr, isActive]); }
    OnInspect() { window.ctx.call("Gun", "OnInspect", [this.ptr]); }
    OnLocalUpdate() { window.ctx.call("Gun", "OnLocalUpdate", [this.ptr]); }
    OnSprint(sprintingNow) { window.ctx.call("Gun", "OnSprint", [this.ptr, sprintingNow]); }
    PlayShotAudio() { window.ctx.call("Gun", "PlayShotAudio", [this.ptr]); }
    PlaySoundSequence(sounds) { return window.ctx.call("Gun", "PlaySoundSequence", [this.ptr, sounds]); }
    ReAllocateMyAudio() { window.ctx.call("Gun", "ReAllocateMyAudio", [this.ptr]); }
    SetAnimationFloat(keyName, value) { window.ctx.call("Gun", "SetAnimationFloat", [this.ptr, keyName, value]); }
    SetAnimationTrigger(triggerName) { window.ctx.call("Gun", "SetAnimationTrigger", [this.ptr, triggerName]); }
    Shoot(shotId, at, hitname, animationName) { window.ctx.call("Gun", "Shoot", [this.ptr, shotId, at, hitname, animationName]); }
    static TryGetCurrent(_gun) { return window.ctx.call("Gun", "TryGetCurrent", [_gun]).val() === 1; }
    TryInspect() { window.ctx.call("Gun", "TryInspect", [this.ptr]); }
    TryReload() { window.ctx.call("Gun", "TryReload", [this.ptr]); }
    Update() { window.ctx.call("Gun", "Update", [this.ptr]); }
}

export class Component {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get gameObject() { return new GameObject(window.ctx.call("UnityEngine.Component", "get_gameObject", [this.ptr])); }
    get tag() { return window.ctx.call("UnityEngine.Component", "get_tag", [this.ptr]); }
    get transform() { return new Transform(window.ctx.call("UnityEngine.Component", "get_transform", [this.ptr])); }
    CompareTag(tag) { return window.ctx.call("UnityEngine.Component", "CompareTag", [this.ptr, tag]).val() === 1; }
    GetComponent_type(type) { return new Component(window.ctx.call("UnityEngine.Component", "GetComponent_22398", [this.ptr, type])); }
    GetComponent() { return window.ctx.call("UnityEngine.Component", "GetComponent", [this.ptr]); }
    GetComponentInChildren_t_includeInactive(t, includeInactive) { return new Component(window.ctx.call("UnityEngine.Component", "GetComponentInChildren_22400", [this.ptr, t, includeInactive])); }
    GetComponentInChildren() { return window.ctx.call("UnityEngine.Component", "GetComponentInChildren", [this.ptr]); }
    GetComponentInParent_t_includeInactive(t, includeInactive) { return new Component(window.ctx.call("UnityEngine.Component", "GetComponentInParent_22401", [this.ptr, t, includeInactive])); }
    GetComponentInParent() { return window.ctx.call("UnityEngine.Component", "GetComponentInParent", [this.ptr]); }
    GetComponents_type_results(type, results) { window.ctx.call("UnityEngine.Component", "GetComponents_22403", [this.ptr, type, results]); }
    GetComponents(results) { window.ctx.call("UnityEngine.Component", "GetComponents", [this.ptr, results]); }
    GetComponents() { return window.ctx.call("UnityEngine.Component", "GetComponents", [this.ptr]); }
    GetComponentsForListInternal(searchType, resultList) { window.ctx.call("UnityEngine.Component", "GetComponentsForListInternal", [this.ptr, searchType, resultList]); }
    static GetComponentsForListInternal_Injected(_unity_self, searchType, resultList) { window.ctx.call("UnityEngine.Component", "GetComponentsForListInternal_Injected", [_unity_self, searchType, resultList]); }
    GetComponentsInChildren(includeInactive) { return window.ctx.call("UnityEngine.Component", "GetComponentsInChildren", [this.ptr, includeInactive]); }
    GetComponentsInChildren(includeInactive, result) { window.ctx.call("UnityEngine.Component", "GetComponentsInChildren", [this.ptr, includeInactive, result]); }
    GetComponentsInChildren() { return window.ctx.call("UnityEngine.Component", "GetComponentsInChildren", [this.ptr]); }
    GetComponentsInChildren(results) { window.ctx.call("UnityEngine.Component", "GetComponentsInChildren", [this.ptr, results]); }
    GetComponentsInParent(includeInactive) { return window.ctx.call("UnityEngine.Component", "GetComponentsInParent", [this.ptr, includeInactive]); }
    GetComponentsInParent(includeInactive, results) { window.ctx.call("UnityEngine.Component", "GetComponentsInParent", [this.ptr, includeInactive, results]); }
    GetComponentsInParent() { return window.ctx.call("UnityEngine.Component", "GetComponentsInParent", [this.ptr]); }
    TryGetComponent_type_component(type, component) { return window.ctx.call("UnityEngine.Component", "TryGetComponent_22399", [this.ptr, type, component]).val() === 1; }
    TryGetComponent(component) { return window.ctx.call("UnityEngine.Component", "TryGetComponent", [this.ptr, component]).val() === 1; }
    static get_gameObject_Injected(_unity_self) { return (()=>{
					let structptr_973d32 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Component", "get_gameObject_Injected", [structptr_973d32, _unity_self]);
					return structptr_973d32;
				})(); }
    static get_transform_Injected(_unity_self) { return (()=>{
					let structptr_c2b17e = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Component", "get_transform_Injected", [structptr_c2b17e, _unity_self]);
					return structptr_c2b17e;
				})(); }
}

export class ChatUIManager {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get chatActive() { return this.ptr.readField(0x1C, 'i32').val() === 1; }
    set chatActive(v) { return this.ptr.writeField(0x1C, 'i32', v); }
    get chatGfx() { return new GameObject(this.ptr.readField(0x10, 'i32')); }
    set chatGfx(v) { return this.ptr.writeField(0x10, 'i32', v); }
    get chatUIMessages() { return JSArray(this.ptr.readField(0x18, 'i32')); }
    set chatUIMessages(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get messageIF() { return this.ptr.readField(0x14, 'i32'); }
    set messageIF(v) { return this.ptr.writeField(0x14, 'i32', v); }
    get messageTimestamps() { return this.ptr.readField(0x20, 'f32').val(); }
    set messageTimestamps(v) { return this.ptr.writeField(0x20, 'f32', v); }
    _Start_b_11_0(data) { window.ctx.call("ChatUIManager", "<Start>b__11_0", [this.ptr, data]); }
    AddMessage(text) { window.ctx.call("ChatUIManager", "AddMessage", [this.ptr, text]); }
    GetAvailableMessage() { return new ChatUIMessage(window.ctx.call("ChatUIManager", "GetAvailableMessage", [this.ptr])); }
    HandlePlayerCountChange(change, player) { window.ctx.call("ChatUIManager", "HandlePlayerCountChange", [this.ptr, change, player]); }
    LookForCommands(rawText) { window.ctx.call("ChatUIManager", "LookForCommands", [this.ptr, rawText]); }
    OnDisable() { window.ctx.call("ChatUIManager", "OnDisable", [this.ptr]); }
    OnEnable() { window.ctx.call("ChatUIManager", "OnEnable", [this.ptr]); }
    OnLockStateTick() { window.ctx.call("ChatUIManager", "OnLockStateTick", [this.ptr]); }
    OnSettingsChanged(newConf) { window.ctx.call("ChatUIManager", "OnSettingsChanged", [this.ptr, newConf]); }
    ProcessMessageAndAdd(data) { window.ctx.call("ChatUIManager", "ProcessMessageAndAdd", [this.ptr, data]); }
    SendChatMessage(body) { window.ctx.call("ChatUIManager", "SendChatMessage", [this.ptr, body]); }
    SetChat(newActive) { window.ctx.call("ChatUIManager", "SetChat", [this.ptr, newActive]); }
    SetChatGfx(newActive) { window.ctx.call("ChatUIManager", "SetChatGfx", [this.ptr, newActive]); }
    Start() { window.ctx.call("ChatUIManager", "Start", [this.ptr]); }
    ToggleChat() { return window.ctx.call("ChatUIManager", "ToggleChat", [this.ptr]).val() === 1; }
    Update() { window.ctx.call("ChatUIManager", "Update", [this.ptr]); }
}

export class GameModeData {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get HasTeams() { return window.ctx.call("GameModeData", "get_HasTeams", [this.ptr]).val() === 1; }
    get id() { return new GameMode(this.ptr.readField(0xC, 'i32')); }
    set id(v) { return this.ptr.writeField(0xC, 'i32', v); }
    get shortName() { return this.ptr.readField(0x10, 'i32').mstr(); }
    set shortName(v) { return this.ptr.writeField(0x10, 'i32', window.ctx.createMstr(v)); }
    get sprite() { return new Sprite(this.ptr.readField(0x14, 'i32')); }
    set sprite(v) { return this.ptr.writeField(0x14, 'i32', v); }
    get teams() { return JSArray(this.ptr.readField(0x18, 'i32')); }
    set teams(v) { return this.ptr.writeField(0x18, 'i32', v); }
}

export class NetworkManager {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    static get CurrentRoom() { return window.ctx.call("NetworkManager", "get_CurrentRoom", []); }
    static set CurrentRoom(v) { window.ctx.call("NetworkManager", "set_CurrentRoom", [v]); }
    static get InRoom() { return window.ctx.call("NetworkManager", "get_InRoom", []).val() === 1; }
    static get IsConnected() { return window.ctx.call("NetworkManager", "get_IsConnected", []).val() === 1; }
    static get MyActorNumber() { return window.ctx.call("NetworkManager", "get_MyActorNumber", []).val(); }
    static get MyPlayerID() { return window.ctx.call("NetworkManager", "get_MyPlayerID", []); }
    get NickName() { return window.ctx.call("NetworkManager", "get_NickName", [this.ptr]); }
    static get OfflineMode() { return window.ctx.call("NetworkManager", "get_OfflineMode", []).val() === 1; }
    get OnClientChanged() { return this.ptr.readField(0x10, 'i32'); }
    set OnClientChanged(v) { return this.ptr.writeField(0x10, 'i32', v); }
    get OnRoomChanged() { return this.ptr.readField(0x8, 'i32'); }
    set OnRoomChanged(v) { return this.ptr.writeField(0x8, 'i32', v); }
    get client() { return new ColyseusClient(this.ptr.readField(0x10, 'i32')); }
    set client(v) { return this.ptr.writeField(0x10, 'i32', v); }
    get clientInitialized() { return this.ptr.readField(0xC, 'i32').val() === 1; }
    set clientInitialized(v) { return this.ptr.writeField(0xC, 'i32', v); }
    get currentRoom() { return this.ptr.readField(0x4, 'i32'); }
    set currentRoom(v) { return this.ptr.writeField(0x4, 'i32', v); }
    get instance() { return new NetworkManager(this.ptr.readField(0x0, 'i32')); }
    set instance(v) { return this.ptr.writeField(0x0, 'i32', v); }
    get isConnected() { return this.ptr.readField(0x18, 'i32').val() === 1; }
    set isConnected(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get isMatchmaking() { return this.ptr.readField(0x19, 'i32').val() === 1; }
    set isMatchmaking(v) { return this.ptr.writeField(0x19, 'i32', v); }
    get nickname() { return this.ptr.readField(0x14, 'i32').mstr(); }
    set nickname(v) { return this.ptr.writeField(0x14, 'i32', window.ctx.createMstr(v)); }
    static ActorNumberOf(session) { return window.ctx.call("NetworkManager", "ActorNumberOf", [session]).val(); }
    Awake() { window.ctx.call("NetworkManager", "Awake", [this.ptr]); }
    static ConvertToDictionaryString(source) { return window.ctx.call("NetworkManager", "ConvertToDictionaryString", [source]); }
    CreateCustom(regionIndex, filters, onProgress) { window.ctx.call("NetworkManager", "CreateCustom", [this.ptr, regionIndex, filters, onProgress]); }
    CreateRoomOnServer(roomType, filters, customRoomId) { return window.ctx.call("NetworkManager", "CreateRoomOnServer", [this.ptr, roomType, filters, customRoomId]); }
    Disconnect() { window.ctx.call("NetworkManager", "Disconnect", [this.ptr]); }
    FindRoomOnServer(roomType, turnstileToken, onProgress, filters, attemptedRegions) { return window.ctx.call("NetworkManager", "FindRoomOnServer", [this.ptr, roomType, turnstileToken, onProgress, filters, attemptedRegions]); }
    static GetBaseUrl(forceMasterURL) { return window.ctx.call("NetworkManager", "GetBaseUrl", [forceMasterURL]); }
    static GetClient() { return new ColyseusClient(window.ctx.call("NetworkManager", "GetClient", [])); }
    static GetIsMatchmaking() { return window.ctx.call("NetworkManager", "GetIsMatchmaking", []).val() === 1; }
    GetOptionsForRoom() { return window.ctx.call("NetworkManager", "GetOptionsForRoom", [this.ptr]); }
    GetRoomCloseErrorInfo(code) { return window.ctx.call("NetworkManager", "GetRoomCloseErrorInfo", [this.ptr, code]); }
    InitializeClient() { return window.ctx.call("NetworkManager", "InitializeClient", [this.ptr]); }
    static IsRoomValidToJoinPreflight(roomId) { return window.ctx.call("NetworkManager", "IsRoomValidToJoinPreflight", [roomId]); }
    JoinFromReservation(reservation, fallbackToOffline, onProgress, createIfNotFound) { window.ctx.call("NetworkManager", "JoinFromReservation", [this.ptr, reservation, fallbackToOffline, onProgress, createIfNotFound]); }
    JoinRoomForce(fallbackToOffline, response, onProgress, createIfNotFound) { window.ctx.call("NetworkManager", "JoinRoomForce", [this.ptr, fallbackToOffline, response, onProgress, createIfNotFound]); }
    static NickNameOf(sessionId) { return window.ctx.call("NetworkManager", "NickNameOf", [sessionId]); }
    OnApplicationQuit() { window.ctx.call("NetworkManager", "OnApplicationQuit", [this.ptr]); }
    OnDestroy() { window.ctx.call("NetworkManager", "OnDestroy", [this.ptr]); }
    Play(fallbackToOffline, roomType, providedRoomId, filters, onProgress, createIfNotFound) { window.ctx.call("NetworkManager", "Play", [this.ptr, fallbackToOffline, roomType, providedRoomId, filters, onProgress, createIfNotFound]); }
    PlayOffline(reason, map, mode, onProgress) { window.ctx.call("NetworkManager", "PlayOffline", [this.ptr, reason, map, mode, onProgress]); }
    static SerializeValue(value) { return new JSONNode(window.ctx.call("NetworkManager", "SerializeValue", [value])); }
    SetNickname(newNickname) { window.ctx.call("NetworkManager", "SetNickname", [this.ptr, newNickname]); }
    Start() { window.ctx.call("NetworkManager", "Start", [this.ptr]); }
    static ToJSON(dict) { return window.ctx.call("NetworkManager", "ToJSON", [dict]); }
    static TryGetMyPlayer(player) { return window.ctx.call("NetworkManager", "TryGetMyPlayer", [player]).val() === 1; }
    static TryGetPlayer(sessionId, player) { return window.ctx.call("NetworkManager", "TryGetPlayer", [sessionId, player]).val() === 1; }
    WaitForFrames(frameCount) { return window.ctx.call("NetworkManager", "WaitForFrames", [this.ptr, frameCount]); }
}

export class GameTimer {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get OnTimerChange() { return this.ptr.readField(0x0, 'i32'); }
    set OnTimerChange(v) { return this.ptr.writeField(0x0, 'i32', v); }
    get gameStartTime() { return this.ptr.readField(0x18, 'i32'); }
    set gameStartTime(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get initialSecondsFrom2024() { return this.ptr.readField(0x8, 'i32'); }
    set initialSecondsFrom2024(v) { return this.ptr.writeField(0x8, 'i32', v); }
    get instance() { return new GameTimer(this.ptr.readField(0x4, 'i32')); }
    set instance(v) { return this.ptr.writeField(0x4, 'i32', v); }
    get map() { return this.ptr.readField(0x45, 'i32'); }
    set map(v) { return this.ptr.writeField(0x45, 'i32', v); }
    get matchLength() { return this.ptr.readField(0x20, 'i32'); }
    set matchLength(v) { return this.ptr.writeField(0x20, 'i32', v); }
    get mode() { return this.ptr.readField(0x38, 'i32').mstr(); }
    set mode(v) { return this.ptr.writeField(0x38, 'i32', window.ctx.createMstr(v)); }
    get playtestText() { return this.ptr.readField(0x3C, 'i32').mstr(); }
    set playtestText(v) { return this.ptr.writeField(0x3C, 'i32', window.ctx.createMstr(v)); }
    get preparedGameEndedPanel() { return this.ptr.readField(0x46, 'i32').val() === 1; }
    set preparedGameEndedPanel(v) { return this.ptr.writeField(0x46, 'i32', v); }
    get rankInfo() { return this.ptr.readField(0x40, 'i32').mstr(); }
    set rankInfo(v) { return this.ptr.writeField(0x40, 'i32', window.ctx.createMstr(v)); }
    get region() { return this.ptr.readField(0x44, 'i32'); }
    set region(v) { return this.ptr.writeField(0x44, 'i32', v); }
    get setSlowMo() { return this.ptr.readField(0x47, 'i32').val() === 1; }
    set setSlowMo(v) { return this.ptr.writeField(0x47, 'i32', v); }
    get textColorGradient() { return new Gradient(this.ptr.readField(0x2C, 'i32')); }
    set textColorGradient(v) { return this.ptr.writeField(0x2C, 'i32', v); }
    get textFormats() { return JSArray(this.ptr.readField(0x28, 'i32')); }
    set textFormats(v) { return this.ptr.writeField(0x28, 'i32', v); }
    get timeOffset() { return this.ptr.readField(0x18, 'i32'); }
    set timeOffset(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get timerTxts() { return JSArray(this.ptr.readField(0x10, 'i32')); }
    set timerTxts(v) { return this.ptr.writeField(0x10, 'i32', v); }
    get unregisterMatchLengthChange() { return this.ptr.readField(0x34, 'i32'); }
    set unregisterMatchLengthChange(v) { return this.ptr.writeField(0x34, 'i32', v); }
    get unregisterStartTimeChange() { return this.ptr.readField(0x30, 'i32'); }
    set unregisterStartTimeChange(v) { return this.ptr.writeField(0x30, 'i32', v); }
    _OnEnable_b_21_1(current, previous) { window.ctx.call("GameTimer", "<OnEnable>b__21_1", [this.ptr, current, previous]); }
    _OnEnable_b_21_3(current, previous) { window.ctx.call("GameTimer", "<OnEnable>b__21_3", [this.ptr, current, previous]); }
    static DelayedCall(t, x) { window.ctx.call("GameTimer", "DelayedCall", [t, x]); }
    static DelayedFrameCall(frameCount, x) { window.ctx.call("GameTimer", "DelayedFrameCall", [frameCount, x]); }
    FormatTimeLeft(index, timeLeftInSeconds) { return window.ctx.call("GameTimer", "FormatTimeLeft", [this.ptr, index, timeLeftInSeconds]); }
    GetModeAndRegionAndMap() { return (()=>{
					let structptr_31f03c = window.ctx.malloc(50);
					window.ctx.call("GameTimer", "GetModeAndRegionAndMap", [structptr_31f03c, this.ptr]);
					return structptr_31f03c;
				})(); }
    static GetNetworkTime() { return window.ctx.call("GameTimer", "GetNetworkTime", []).val(); }
    static GetPreciseMatchLife() { return window.ctx.call("GameTimer", "GetPreciseMatchLife", []).val(); }
    static GetSecondsFrom2024() { return window.ctx.call("GameTimer", "GetSecondsFrom2024", []).val(); }
    HandleMatchLengthChange(newMatchLength, previous) { window.ctx.call("GameTimer", "HandleMatchLengthChange", [this.ptr, newMatchLength, previous]); }
    HandleStartTimeChange(newStartTime, previous) { window.ctx.call("GameTimer", "HandleStartTimeChange", [this.ptr, newStartTime, previous]); }
    static IsSlowMotion() { return window.ctx.call("GameTimer", "IsSlowMotion", []).val() === 1; }
    OnDestroy() { window.ctx.call("GameTimer", "OnDestroy", [this.ptr]); }
    OnDisable() { window.ctx.call("GameTimer", "OnDisable", [this.ptr]); }
    OnEnable() { window.ctx.call("GameTimer", "OnEnable", [this.ptr]); }
    OnPrepareGameEndedPanel() { window.ctx.call("GameTimer", "OnPrepareGameEndedPanel", [this.ptr]); }
    static OnTimeOffsetChange(newOffset) { window.ctx.call("GameTimer", "OnTimeOffsetChange", [newOffset]); }
    SecondTick() { window.ctx.call("GameTimer", "SecondTick", [this.ptr]); }
    ShowPreGameEndUI() { window.ctx.call("GameTimer", "ShowPreGameEndUI", [this.ptr]); }
    Start() { window.ctx.call("GameTimer", "Start", [this.ptr]); }
    UnregisterEvents() { window.ctx.call("GameTimer", "UnregisterEvents", [this.ptr]); }
}

export class AimManager {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    static get Aiming() { return window.ctx.call("AimManager", "get_Aiming", []).val() === 1; }
    static set Aiming(v) { window.ctx.call("AimManager", "set_Aiming", [v]); }
    get FOV_MULTI_SPRINT() { return this.ptr.readField(0x0, 'f32').val(); }
    set FOV_MULTI_SPRINT(v) { return this.ptr.writeField(0x0, 'f32', v); }
    get aimVignette() { return new CanvasGroup(this.ptr.readField(0x4C, 'i32')); }
    set aimVignette(v) { return this.ptr.writeField(0x4C, 'i32', v); }
    get aiming() { return this.ptr.readField(0x8, 'i32').val() === 1; }
    set aiming(v) { return this.ptr.writeField(0x8, 'i32', v); }
    get aimingAsFloat() { return this.ptr.readField(0x10, 'f32').val(); }
    set aimingAsFloat(v) { return this.ptr.writeField(0x10, 'f32', v); }
    get canvasGroup() { return new CanvasGroup(this.ptr.readField(0x1C, 'i32')); }
    set canvasGroup(v) { return this.ptr.writeField(0x1C, 'i32', v); }
    get colyShooter() { return new ColyShooter(this.ptr.readField(0x18, 'i32')); }
    set colyShooter(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get defaultFOVWeapon() { return this.ptr.readField(0x54, 'f32').val(); }
    set defaultFOVWeapon(v) { return this.ptr.writeField(0x54, 'f32', v); }
    get defaultFOVWorld() { return this.ptr.readField(0x50, 'f32').val(); }
    set defaultFOVWorld(v) { return this.ptr.writeField(0x50, 'f32', v); }
    get gunFovLerpSpeed() { return this.ptr.readField(0x64, 'f32').val(); }
    set gunFovLerpSpeed(v) { return this.ptr.writeField(0x64, 'f32', v); }
    get initialFOV() { return this.ptr.readField(0x44, 'f32').val(); }
    set initialFOV(v) { return this.ptr.writeField(0x44, 'f32', v); }
    get instance() { return new AimManager(this.ptr.readField(0xC, 'i32')); }
    set instance(v) { return this.ptr.writeField(0xC, 'i32', v); }
    get originalWeaponContainerTransformCache() { return new Vector3(this.ptr.readField(0x24, 'i32')); }
    set originalWeaponContainerTransformCache(v) { return this.ptr.writeField(0x24, 'i32', v); }
    get smoothedAimingAsFloat() { return this.ptr.readField(0x14, 'f32').val(); }
    set smoothedAimingAsFloat(v) { return this.ptr.writeField(0x14, 'f32', v); }
    get targetFOVWeapon() { return this.ptr.readField(0x5C, 'f32').val(); }
    set targetFOVWeapon(v) { return this.ptr.writeField(0x5C, 'f32', v); }
    get targetFOVWorld() { return this.ptr.readField(0x58, 'f32').val(); }
    set targetFOVWorld(v) { return this.ptr.writeField(0x58, 'f32', v); }
    get weaponCamera() { return new Camera(this.ptr.readField(0x40, 'i32')); }
    set weaponCamera(v) { return this.ptr.writeField(0x40, 'i32', v); }
    get weaponContainer() { return new Transform(this.ptr.readField(0x20, 'i32')); }
    set weaponContainer(v) { return this.ptr.writeField(0x20, 'i32', v); }
    get weaponFOVVelocity() { return this.ptr.readField(0x6C, 'f32').val(); }
    set weaponFOVVelocity(v) { return this.ptr.writeField(0x6C, 'f32', v); }
    get worldCamera() { return new Camera(this.ptr.readField(0x3C, 'i32')); }
    set worldCamera(v) { return this.ptr.writeField(0x3C, 'i32', v); }
    get worldFOVVelocity() { return this.ptr.readField(0x68, 'f32').val(); }
    set worldFOVVelocity(v) { return this.ptr.writeField(0x68, 'f32', v); }
    get worldFovLerpSpeed() { return this.ptr.readField(0x60, 'f32').val(); }
    set worldFovLerpSpeed(v) { return this.ptr.writeField(0x60, 'f32', v); }
    _SetAiming_b_29_0(value) { window.ctx.call("AimManager", "<SetAiming>b__29_0", [this.ptr, value]); }
    _SetAiming_b_29_1(value) { window.ctx.call("AimManager", "<SetAiming>b__29_1", [this.ptr, value]); }
    HandleGunChange(gunIndex, gun) { window.ctx.call("AimManager", "HandleGunChange", [this.ptr, gunIndex, gun]); }
    OnDisable() { window.ctx.call("AimManager", "OnDisable", [this.ptr]); }
    OnEnable() { window.ctx.call("AimManager", "OnEnable", [this.ptr]); }
    OnSettingsChanged(newConf) { window.ctx.call("AimManager", "OnSettingsChanged", [this.ptr, newConf]); }
    SetAiming(isAiming) { window.ctx.call("AimManager", "SetAiming", [this.ptr, isAiming]); }
    Update() { window.ctx.call("AimManager", "Update", [this.ptr]); }
    UpdateTargetFOVs(sprinting) { window.ctx.call("AimManager", "UpdateTargetFOVs", [this.ptr, sprinting]); }
}

export class Schema {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get _refId() { return window.ctx.call("Colyseus.Schema.Schema", "get___refId", [this.ptr]).val(); }
    set _refId(v) { window.ctx.call("Colyseus.Schema.Schema", "set___refId", [this.ptr, v]); }
    get fieldChildPrimitiveTypes() { return window.ctx.call("Colyseus.Schema.Schema", "get_fieldChildPrimitiveTypes", [this.ptr]); }
    get fieldChildTypes() { return window.ctx.call("Colyseus.Schema.Schema", "get_fieldChildTypes", [this.ptr]); }
    get fieldsByIndex() { return window.ctx.call("Colyseus.Schema.Schema", "get_fieldsByIndex", [this.ptr]); }
    get fieldTypes() { return window.ctx.call("Colyseus.Schema.Schema", "get_fieldTypes", [this.ptr]); }
    get Item() { return new Object(window.ctx.call("Colyseus.Schema.Schema", "get_Item", [this.ptr, propertyName])); }
    set Item(v) { window.ctx.call("Colyseus.Schema.Schema", "set_Item", [this.ptr, propertyName, v]); }
    get _refId_k_BackingField() { return this.ptr.readField(0xC, 'i32').val(); }
    set _refId_k_BackingField(v) { return this.ptr.writeField(0xC, 'i32', v); }
    get _cachedMetadata() { return this.ptr.readField(0x0, 'i32'); }
    set _cachedMetadata(v) { return this.ptr.writeField(0x0, 'i32', v); }
    get _metadata() { return this.ptr.readField(0x8, 'i32'); }
    set _metadata(v) { return this.ptr.writeField(0x8, 'i32', v); }
    static CheckSchemaChild(toCheck) { return window.ctx.call("Colyseus.Schema.Schema", "CheckSchemaChild", [toCheck]).val() === 1; }
    static CreateMetadata(type) { return window.ctx.call("Colyseus.Schema.Schema", "CreateMetadata", [type]); }
    DeleteByIndex(index) { window.ctx.call("Colyseus.Schema.Schema", "DeleteByIndex", [this.ptr, index]); }
    GetByIndex(index) { return new Object(window.ctx.call("Colyseus.Schema.Schema", "GetByIndex", [this.ptr, index])); }
    GetFieldChildTypes() { return window.ctx.call("Colyseus.Schema.Schema", "GetFieldChildTypes", [this.ptr]); }
}

export class Physics {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    static get defaultPhysicsScene() { return (()=>{
					let structptr_0012c9 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Physics", "get_defaultPhysicsScene", [structptr_0012c9, ]);
					return structptr_0012c9;
				})(); }
    static get gravity() { return (()=>{
					let structptr_bde3f5 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Physics", "get_gravity", [structptr_bde3f5, ]);
					return structptr_bde3f5;
				})(); }
    static get invokeCollisionCallbacks() { return window.ctx.call("UnityEngine.Physics", "get_invokeCollisionCallbacks", []).val() === 1; }
    static get reuseCollisionCallbacks() { return window.ctx.call("UnityEngine.Physics", "get_reuseCollisionCallbacks", []).val() === 1; }
    get ContactEvent() { return this.ptr.readField(0xC, 'i32'); }
    set ContactEvent(v) { return this.ptr.writeField(0xC, 'i32', v); }
    get ContactModifyEvent() { return this.ptr.readField(0x0, 'i32'); }
    set ContactModifyEvent(v) { return this.ptr.writeField(0x0, 'i32', v); }
    get ContactModifyEventCCD() { return this.ptr.readField(0x4, 'i32'); }
    set ContactModifyEventCCD(v) { return this.ptr.writeField(0x4, 'i32', v); }
    get GenericContactModifyEvent() { return this.ptr.readField(0x8, 'i32').val() === 1; }
    set GenericContactModifyEvent(v) { return this.ptr.writeField(0x8, 'i32', v); }
    get s_ReusableCollision() { return new Collision(this.ptr.readField(0x10, 'i32')); }
    set s_ReusableCollision(v) { return this.ptr.writeField(0x10, 'i32', v); }
    static CapsuleCastNonAlloc(point1, point2, radius, direction, results, maxDistance, layerMask, queryTriggerInteraction) { return window.ctx.call("UnityEngine.Physics", "CapsuleCastNonAlloc", [point1, point2, radius, direction, results, maxDistance, layerMask, queryTriggerInteraction]).val(); }
    static ComputePenetration(colliderA, positionA, rotationA, colliderB, positionB, rotationB, direction, distance) { return window.ctx.call("UnityEngine.Physics", "ComputePenetration", [colliderA, positionA, rotationA, colliderB, positionB, rotationB, direction, distance]).val() === 1; }
    static GetBodyByInstanceID(entityId) { return new Component(window.ctx.call("UnityEngine.Physics", "GetBodyByInstanceID", [entityId])); }
    static GetBodyByInstanceID_Injected(entityId) { return (()=>{
					let structptr_f407e2 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Physics", "GetBodyByInstanceID_Injected", [structptr_f407e2, entityId]);
					return structptr_f407e2;
				})(); }
    static GetColliderByInstanceID(entityId) { return new Collider(window.ctx.call("UnityEngine.Physics", "GetColliderByInstanceID", [entityId])); }
    static GetColliderByInstanceID_Injected(entityId) { return (()=>{
					let structptr_429e2f = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Physics", "GetColliderByInstanceID_Injected", [structptr_429e2f, entityId]);
					return structptr_429e2f;
				})(); }
    static GetCollisionToReport(header, pair, flipped) { return new Collision(window.ctx.call("UnityEngine.Physics", "GetCollisionToReport", [header, pair, flipped])); }
    static GetIgnoreLayerCollision(layer1, layer2) { return window.ctx.call("UnityEngine.Physics", "GetIgnoreLayerCollision", [layer1, layer2]).val() === 1; }
    static Internal_RaycastAll(physicsScene, ray, maxDistance, mask, queryTriggerInteraction) { return window.ctx.call("UnityEngine.Physics", "Internal_RaycastAll", [physicsScene, ray, maxDistance, mask, queryTriggerInteraction]); }
    static Internal_RaycastAll_Injected(physicsScene, ray, maxDistance, mask, queryTriggerInteraction, ret) { window.ctx.call("UnityEngine.Physics", "Internal_RaycastAll_Injected", [physicsScene, ray, maxDistance, mask, queryTriggerInteraction, ret]); }
    static Linecast_start_end_hitInfo_layerMask_queryTriggerInteraction(start, end, hitInfo, layerMask, queryTriggerInteraction) { return window.ctx.call("UnityEngine.Physics", "Linecast_25083", [start, end, hitInfo, layerMask, queryTriggerInteraction]).val() === 1; }
    static Linecast_start_end_hitInfo_layerMask(start, end, hitInfo, layerMask) { return window.ctx.call("UnityEngine.Physics", "Linecast_25084", [start, end, hitInfo, layerMask]).val() === 1; }
    static OnSceneContact(scene, buffer, count) { window.ctx.call("UnityEngine.Physics", "OnSceneContact", [scene, buffer, count]); }
    static OnSceneContactModify(scene, buffer, count, isCCD) { window.ctx.call("UnityEngine.Physics", "OnSceneContactModify", [scene, buffer, count, isCCD]); }
    static OverlapCapsuleNonAlloc(point0, point1, radius, results, layerMask, queryTriggerInteraction) { return window.ctx.call("UnityEngine.Physics", "OverlapCapsuleNonAlloc", [point0, point1, radius, results, layerMask, queryTriggerInteraction]).val(); }
    static OverlapSphereNonAlloc_position_radius_results_layerMask_queryTriggerInteraction(position, radius, results, layerMask, queryTriggerInteraction) { return window.ctx.call("UnityEngine.Physics", "OverlapSphereNonAlloc_25105", [position, radius, results, layerMask, queryTriggerInteraction]).val(); }
    static OverlapSphereNonAlloc_position_radius_results_layerMask(position, radius, results, layerMask) { return window.ctx.call("UnityEngine.Physics", "OverlapSphereNonAlloc_25106", [position, radius, results, layerMask]).val(); }
    static OverlapSphereNonAlloc_position_radius_results(position, radius, results) { return window.ctx.call("UnityEngine.Physics", "OverlapSphereNonAlloc_25107", [position, radius, results]).val(); }
    static PhysXOnSceneContactModify(scene, buffer, count, isCCD) { window.ctx.call("UnityEngine.Physics", "PhysXOnSceneContactModify", [scene, buffer, count, isCCD]); }
    static Query_ComputePenetration(colliderA, positionA, rotationA, colliderB, positionB, rotationB, direction, distance) { return window.ctx.call("UnityEngine.Physics", "Query_ComputePenetration", [colliderA, positionA, rotationA, colliderB, positionB, rotationB, direction, distance]).val() === 1; }
    static Query_ComputePenetration_Injected(colliderA, positionA, rotationA, colliderB, positionB, rotationB, direction, distance) { return window.ctx.call("UnityEngine.Physics", "Query_ComputePenetration_Injected", [colliderA, positionA, rotationA, colliderB, positionB, rotationB, direction, distance]).val() === 1; }
    static Raycast_origin_direction_maxDistance_layerMask_queryTriggerInteraction(origin, direction, maxDistance, layerMask, queryTriggerInteraction) { return window.ctx.call("UnityEngine.Physics", "Raycast_25069", [origin, direction, maxDistance, layerMask, queryTriggerInteraction]).val() === 1; }
    static Raycast_origin_direction_maxDistance_layerMask(origin, direction, maxDistance, layerMask) { return window.ctx.call("UnityEngine.Physics", "Raycast_2791", [origin, direction, maxDistance, layerMask]).val() === 1; }
    static Raycast_origin_direction_maxDistance(origin, direction, maxDistance) { return window.ctx.call("UnityEngine.Physics", "Raycast_25070", [origin, direction, maxDistance]).val() === 1; }
    static Raycast_origin_direction(origin, direction) { return window.ctx.call("UnityEngine.Physics", "Raycast_25071", [origin, direction]).val() === 1; }
    static Raycast_origin_direction_hitInfo_maxDistance_layerMask_queryTriggerInteraction(origin, direction, hitInfo, maxDistance, layerMask, queryTriggerInteraction) { return window.ctx.call("UnityEngine.Physics", "Raycast_25072", [origin, direction, hitInfo, maxDistance, layerMask, queryTriggerInteraction]).val() === 1; }
    static Raycast_origin_direction_hitInfo_maxDistance_layerMask(origin, direction, hitInfo, maxDistance, layerMask) { return window.ctx.call("UnityEngine.Physics", "Raycast_2710", [origin, direction, hitInfo, maxDistance, layerMask]).val() === 1; }
    static Raycast_origin_direction_hitInfo_maxDistance(origin, direction, hitInfo, maxDistance) { return window.ctx.call("UnityEngine.Physics", "Raycast_25073", [origin, direction, hitInfo, maxDistance]).val() === 1; }
    static Raycast_origin_direction_hitInfo(origin, direction, hitInfo) { return window.ctx.call("UnityEngine.Physics", "Raycast_25074", [origin, direction, hitInfo]).val() === 1; }
    static Raycast_ray_maxDistance_layerMask_queryTriggerInteraction(ray, maxDistance, layerMask, queryTriggerInteraction) { return window.ctx.call("UnityEngine.Physics", "Raycast_25075", [ray, maxDistance, layerMask, queryTriggerInteraction]).val() === 1; }
    static Raycast_ray_maxDistance_layerMask(ray, maxDistance, layerMask) { return window.ctx.call("UnityEngine.Physics", "Raycast_25076", [ray, maxDistance, layerMask]).val() === 1; }
    static Raycast_ray_maxDistance(ray, maxDistance) { return window.ctx.call("UnityEngine.Physics", "Raycast_25077", [ray, maxDistance]).val() === 1; }
    static Raycast_ray(ray) { return window.ctx.call("UnityEngine.Physics", "Raycast_25078", [ray]).val() === 1; }
    static Raycast_ray_hitInfo_maxDistance_layerMask_queryTriggerInteraction(ray, hitInfo, maxDistance, layerMask, queryTriggerInteraction) { return window.ctx.call("UnityEngine.Physics", "Raycast_25079", [ray, hitInfo, maxDistance, layerMask, queryTriggerInteraction]).val() === 1; }
    static Raycast_ray_hitInfo_maxDistance_layerMask(ray, hitInfo, maxDistance, layerMask) { return window.ctx.call("UnityEngine.Physics", "Raycast_25080", [ray, hitInfo, maxDistance, layerMask]).val() === 1; }
    static Raycast_ray_hitInfo_maxDistance(ray, hitInfo, maxDistance) { return window.ctx.call("UnityEngine.Physics", "Raycast_25081", [ray, hitInfo, maxDistance]).val() === 1; }
    static Raycast_ray_hitInfo(ray, hitInfo) { return window.ctx.call("UnityEngine.Physics", "Raycast_25082", [ray, hitInfo]).val() === 1; }
    static RaycastAll_origin_direction_maxDistance_layerMask_queryTriggerInteraction(origin, direction, maxDistance, layerMask, queryTriggerInteraction) { return window.ctx.call("UnityEngine.Physics", "RaycastAll_25086", [origin, direction, maxDistance, layerMask, queryTriggerInteraction]); }
    static RaycastAll_origin_direction_maxDistance_layerMask(origin, direction, maxDistance, layerMask) { return window.ctx.call("UnityEngine.Physics", "RaycastAll_25087", [origin, direction, maxDistance, layerMask]); }
    static RaycastAll_origin_direction_maxDistance(origin, direction, maxDistance) { return window.ctx.call("UnityEngine.Physics", "RaycastAll_25088", [origin, direction, maxDistance]); }
    static RaycastAll_origin_direction(origin, direction) { return window.ctx.call("UnityEngine.Physics", "RaycastAll_25089", [origin, direction]); }
    static RaycastAll_ray_maxDistance_layerMask_queryTriggerInteraction(ray, maxDistance, layerMask, queryTriggerInteraction) { return window.ctx.call("UnityEngine.Physics", "RaycastAll_25090", [ray, maxDistance, layerMask, queryTriggerInteraction]); }
    static RaycastAll_ray_maxDistance_layerMask(ray, maxDistance, layerMask) { return window.ctx.call("UnityEngine.Physics", "RaycastAll_25091", [ray, maxDistance, layerMask]); }
    static RaycastAll_ray_maxDistance(ray, maxDistance) { return window.ctx.call("UnityEngine.Physics", "RaycastAll_25092", [ray, maxDistance]); }
    static RaycastAll_ray(ray) { return window.ctx.call("UnityEngine.Physics", "RaycastAll_25093", [ray]); }
    static RaycastNonAlloc_ray_results_maxDistance_layerMask_queryTriggerInteraction(ray, results, maxDistance, layerMask, queryTriggerInteraction) { return window.ctx.call("UnityEngine.Physics", "RaycastNonAlloc_25094", [ray, results, maxDistance, layerMask, queryTriggerInteraction]).val(); }
    static RaycastNonAlloc_ray_results_maxDistance_layerMask(ray, results, maxDistance, layerMask) { return window.ctx.call("UnityEngine.Physics", "RaycastNonAlloc_25095", [ray, results, maxDistance, layerMask]).val(); }
    static RaycastNonAlloc_ray_results_maxDistance(ray, results, maxDistance) { return window.ctx.call("UnityEngine.Physics", "RaycastNonAlloc_25096", [ray, results, maxDistance]).val(); }
    static RaycastNonAlloc_ray_results(ray, results) { return window.ctx.call("UnityEngine.Physics", "RaycastNonAlloc_25097", [ray, results]).val(); }
    static RaycastNonAlloc_origin_direction_results_maxDistance_layerMask_queryTriggerInteraction(origin, direction, results, maxDistance, layerMask, queryTriggerInteraction) { return window.ctx.call("UnityEngine.Physics", "RaycastNonAlloc_25098", [origin, direction, results, maxDistance, layerMask, queryTriggerInteraction]).val(); }
    static RaycastNonAlloc_origin_direction_results_maxDistance_layerMask(origin, direction, results, maxDistance, layerMask) { return window.ctx.call("UnityEngine.Physics", "RaycastNonAlloc_25099", [origin, direction, results, maxDistance, layerMask]).val(); }
    static RaycastNonAlloc_origin_direction_results_maxDistance(origin, direction, results, maxDistance) { return window.ctx.call("UnityEngine.Physics", "RaycastNonAlloc_25100", [origin, direction, results, maxDistance]).val(); }
    static RaycastNonAlloc_origin_direction_results(origin, direction, results) { return window.ctx.call("UnityEngine.Physics", "RaycastNonAlloc_25101", [origin, direction, results]).val(); }
    static ReportContacts(array) { window.ctx.call("UnityEngine.Physics", "ReportContacts", [array]); }
    static SendOnCollisionEnter(component, collision) { window.ctx.call("UnityEngine.Physics", "SendOnCollisionEnter", [component, collision]); }
    static SendOnCollisionEnter_Injected(component, collision) { window.ctx.call("UnityEngine.Physics", "SendOnCollisionEnter_Injected", [component, collision]); }
    static SendOnCollisionExit(component, collision) { window.ctx.call("UnityEngine.Physics", "SendOnCollisionExit", [component, collision]); }
    static SendOnCollisionExit_Injected(component, collision) { window.ctx.call("UnityEngine.Physics", "SendOnCollisionExit_Injected", [component, collision]); }
    static SendOnCollisionStay(component, collision) { window.ctx.call("UnityEngine.Physics", "SendOnCollisionStay", [component, collision]); }
    static SendOnCollisionStay_Injected(component, collision) { window.ctx.call("UnityEngine.Physics", "SendOnCollisionStay_Injected", [component, collision]); }
    static get_gravity_Injected(ret) { window.ctx.call("UnityEngine.Physics", "get_gravity_Injected", [ret]); }
}

export class ColyHealth {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get IsHealthProtected() { return window.ctx.call("ColyHealth", "get_IsHealthProtected", [this.ptr]).val() === 1; }
    get OnHealthChanged() { return this.ptr.readField(0x14, 'i32').val() === 1; }
    set OnHealthChanged(v) { return this.ptr.writeField(0x14, 'i32', v); }
    get damageCircle() { return new DamageCircleUI(this.ptr.readField(0x30, 'i32')); }
    set damageCircle(v) { return this.ptr.writeField(0x30, 'i32', v); }
    get health() { return this.ptr.readField(0x20, 'i32').val(); }
    set health(v) { return this.ptr.writeField(0x20, 'i32', v); }
    get healthVignette() { return new Image(this.ptr.readField(0x28, 'i32')); }
    set healthVignette(v) { return this.ptr.writeField(0x28, 'i32', v); }
    get healthVignetteColor() { return new Gradient(this.ptr.readField(0x2C, 'i32')); }
    set healthVignetteColor(v) { return this.ptr.writeField(0x2C, 'i32', v); }
    get lastRocketHitPredictionTime() { return this.ptr.readField(0x1C, 'f32').val(); }
    set lastRocketHitPredictionTime(v) { return this.ptr.writeField(0x1C, 'f32', v); }
    get lasthit_waypoint() { return new Transform(this.ptr.readField(0x18, 'i32')); }
    set lasthit_waypoint(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get unregisterHealthChange() { return this.ptr.readField(0x24, 'i32'); }
    set unregisterHealthChange(v) { return this.ptr.writeField(0x24, 'i32', v); }
    InitializeHealthListener() { window.ctx.call("ColyHealth", "InitializeHealthListener", [this.ptr]); }
    OnDestroy() { window.ctx.call("ColyHealth", "OnDestroy", [this.ptr]); }
    OnDisable() { window.ctx.call("ColyHealth", "OnDisable", [this.ptr]); }
    OnGotShot(message) { window.ctx.call("ColyHealth", "OnGotShot", [this.ptr, message]); }
    OnHealthChangedFromServer(currentHealth, previousHealth) { window.ctx.call("ColyHealth", "OnHealthChangedFromServer", [this.ptr, currentHealth, previousHealth]); }
    OnHealthChangedHandler(currentHealth, previousHealth, isPrediction) { window.ctx.call("ColyHealth", "OnHealthChangedHandler", [this.ptr, currentHealth, previousHealth, isPrediction]); }
    OnNetworkSpawned(spawnInfo) { window.ctx.call("ColyHealth", "OnNetworkSpawned", [this.ptr, spawnInfo]); }
    PredictDamage(damage) { window.ctx.call("ColyHealth", "PredictDamage", [this.ptr, damage]); }
    RecoverHealthToAuto() { window.ctx.call("ColyHealth", "RecoverHealthToAuto", [this.ptr]); }
}

export class NeckController {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get neckBone() { return new Transform(this.ptr.readField(0x10, 'i32')); }
    set neckBone(v) { return this.ptr.writeField(0x10, 'i32', v); }
    get neckRotation() { return this.ptr.readField(0x14, 'f32').val(); }
    set neckRotation(v) { return this.ptr.writeField(0x14, 'f32', v); }
    OnAnimatorMove() { window.ctx.call("NeckController", "OnAnimatorMove", [this.ptr]); }
    SetLocalXRot(xRot) { window.ctx.call("NeckController", "SetLocalXRot", [this.ptr, xRot]); }
}

export class GameMode {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class RaycastHit {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get collider() { return new Collider(window.ctx.call("UnityEngine.RaycastHit", "get_collider", [this.ptr])); }
    get distance() { return window.ctx.call("UnityEngine.RaycastHit", "get_distance", [this.ptr]).val(); }
    set distance(v) { window.ctx.call("UnityEngine.RaycastHit", "set_distance", [this.ptr, v]); }
    get normal() { return (()=>{
					let structptr_85b564 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.RaycastHit", "get_normal", [structptr_85b564, this.ptr]);
					return structptr_85b564;
				})(); }
    get point() { return (()=>{
					let structptr_f557c1 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.RaycastHit", "get_point", [structptr_f557c1, this.ptr]);
					return structptr_f557c1;
				})(); }
    get rigidbody() { return new Rigidbody(window.ctx.call("UnityEngine.RaycastHit", "get_rigidbody", [this.ptr])); }
    get transform() { return new Transform(window.ctx.call("UnityEngine.RaycastHit", "get_transform", [this.ptr])); }
    get m_Collider() { return new EntityId(this.ptr.readField(0x28, 'i32')); }
    set m_Collider(v) { return this.ptr.writeField(0x28, 'i32', v); }
    get m_Distance() { return this.ptr.readField(0x1C, 'f32').val(); }
    set m_Distance(v) { return this.ptr.writeField(0x1C, 'f32', v); }
    get m_FaceID() { return this.ptr.readField(0x18, 'i32'); }
    set m_FaceID(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get m_Normal() { return new Vector3(this.ptr.readField(0xC, 'i32')); }
    set m_Normal(v) { return this.ptr.writeField(0xC, 'i32', v); }
    get m_Point() { return new Vector3(this.ptr.readField(0x0, 'i32')); }
    set m_Point(v) { return this.ptr.writeField(0x0, 'i32', v); }
    get m_UV() { return new Vector2(this.ptr.readField(0x20, 'i32')); }
    set m_UV(v) { return this.ptr.writeField(0x20, 'i32', v); }
}

export class Camera {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get activeTexture() { return new RenderTexture(window.ctx.call("UnityEngine.Camera", "get_activeTexture", [this.ptr])); }
    get actualRenderingPath() { return new RenderingPath(window.ctx.call("UnityEngine.Camera", "get_actualRenderingPath", [this.ptr])); }
    static get allCameras() { return window.ctx.call("UnityEngine.Camera", "get_allCameras", []); }
    static get allCamerasCount() { return window.ctx.call("UnityEngine.Camera", "get_allCamerasCount", []).val(); }
    get allowDynamicResolution() { return window.ctx.call("UnityEngine.Camera", "get_allowDynamicResolution", [this.ptr]).val() === 1; }
    set allowDynamicResolution(v) { window.ctx.call("UnityEngine.Camera", "set_allowDynamicResolution", [this.ptr, v]); }
    get allowHDR() { return window.ctx.call("UnityEngine.Camera", "get_allowHDR", [this.ptr]).val() === 1; }
    set allowHDR(v) { window.ctx.call("UnityEngine.Camera", "set_allowHDR", [this.ptr, v]); }
    get allowMSAA() { return window.ctx.call("UnityEngine.Camera", "get_allowMSAA", [this.ptr]).val() === 1; }
    set allowMSAA(v) { window.ctx.call("UnityEngine.Camera", "set_allowMSAA", [this.ptr, v]); }
    get anamorphism() { return window.ctx.call("UnityEngine.Camera", "get_anamorphism", [this.ptr]).val(); }
    set anamorphism(v) { window.ctx.call("UnityEngine.Camera", "set_anamorphism", [this.ptr, v]); }
    get aperture() { return window.ctx.call("UnityEngine.Camera", "get_aperture", [this.ptr]).val(); }
    set aperture(v) { window.ctx.call("UnityEngine.Camera", "set_aperture", [this.ptr, v]); }
    get areVRStereoViewMatricesWithinSingleCullTolerance() { return window.ctx.call("UnityEngine.Camera", "get_areVRStereoViewMatricesWithinSingleCullTolerance", [this.ptr]).val() === 1; }
    get aspect() { return window.ctx.call("UnityEngine.Camera", "get_aspect", [this.ptr]).val(); }
    set aspect(v) { window.ctx.call("UnityEngine.Camera", "set_aspect", [this.ptr, v]); }
    get backgroundColor() { return (()=>{
					let structptr_b18883 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Camera", "get_backgroundColor", [structptr_b18883, this.ptr]);
					return structptr_b18883;
				})(); }
    set backgroundColor(v) { window.ctx.call("UnityEngine.Camera", "set_backgroundColor", [this.ptr, v]); }
    get barrelClipping() { return window.ctx.call("UnityEngine.Camera", "get_barrelClipping", [this.ptr]).val(); }
    set barrelClipping(v) { window.ctx.call("UnityEngine.Camera", "set_barrelClipping", [this.ptr, v]); }
    get bladeCount() { return window.ctx.call("UnityEngine.Camera", "get_bladeCount", [this.ptr]).val(); }
    set bladeCount(v) { window.ctx.call("UnityEngine.Camera", "set_bladeCount", [this.ptr, v]); }
    get cameraToWorldMatrix() { return (()=>{
					let structptr_b7db08 = window.ctx.malloc(64);
					window.ctx.call("UnityEngine.Camera", "get_cameraToWorldMatrix", [structptr_b7db08, this.ptr]);
					return structptr_b7db08;
				})(); }
    get cameraType() { return new CameraType(window.ctx.call("UnityEngine.Camera", "get_cameraType", [this.ptr])); }
    set cameraType(v) { window.ctx.call("UnityEngine.Camera", "set_cameraType", [this.ptr, v]); }
    get clearFlags() { return new CameraClearFlags(window.ctx.call("UnityEngine.Camera", "get_clearFlags", [this.ptr])); }
    set clearFlags(v) { window.ctx.call("UnityEngine.Camera", "set_clearFlags", [this.ptr, v]); }
    get clearStencilAfterLightingPass() { return window.ctx.call("UnityEngine.Camera", "get_clearStencilAfterLightingPass", [this.ptr]).val() === 1; }
    set clearStencilAfterLightingPass(v) { window.ctx.call("UnityEngine.Camera", "set_clearStencilAfterLightingPass", [this.ptr, v]); }
    get commandBufferCount() { return window.ctx.call("UnityEngine.Camera", "get_commandBufferCount", [this.ptr]).val(); }
    get cullingMask() { return window.ctx.call("UnityEngine.Camera", "get_cullingMask", [this.ptr]).val(); }
    set cullingMask(v) { window.ctx.call("UnityEngine.Camera", "set_cullingMask", [this.ptr, v]); }
    get cullingMatrix() { return (()=>{
					let structptr_1036a8 = window.ctx.malloc(64);
					window.ctx.call("UnityEngine.Camera", "get_cullingMatrix", [structptr_1036a8, this.ptr]);
					return structptr_1036a8;
				})(); }
    set cullingMatrix(v) { window.ctx.call("UnityEngine.Camera", "set_cullingMatrix", [this.ptr, v]); }
    static get current() { return new Camera(window.ctx.call("UnityEngine.Camera", "get_current", [])); }
    static get currentInternal() { return new Camera(window.ctx.call("UnityEngine.Camera", "get_currentInternal", [])); }
    get curvature() { return (()=>{
					let structptr_e4a7af = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.Camera", "get_curvature", [structptr_e4a7af, this.ptr]);
					return structptr_e4a7af;
				})(); }
    set curvature(v) { window.ctx.call("UnityEngine.Camera", "set_curvature", [this.ptr, v]); }
    get depth() { return window.ctx.call("UnityEngine.Camera", "get_depth", [this.ptr]).val(); }
    set depth(v) { window.ctx.call("UnityEngine.Camera", "set_depth", [this.ptr, v]); }
    get depthTextureMode() { return new DepthTextureMode(window.ctx.call("UnityEngine.Camera", "get_depthTextureMode", [this.ptr])); }
    set depthTextureMode(v) { window.ctx.call("UnityEngine.Camera", "set_depthTextureMode", [this.ptr, v]); }
    get eventMask() { return window.ctx.call("UnityEngine.Camera", "get_eventMask", [this.ptr]).val(); }
    set eventMask(v) { window.ctx.call("UnityEngine.Camera", "set_eventMask", [this.ptr, v]); }
    get farClipPlane() { return window.ctx.call("UnityEngine.Camera", "get_farClipPlane", [this.ptr]).val(); }
    set farClipPlane(v) { window.ctx.call("UnityEngine.Camera", "set_farClipPlane", [this.ptr, v]); }
    get fieldOfView() { return window.ctx.call("UnityEngine.Camera", "get_fieldOfView", [this.ptr]).val(); }
    set fieldOfView(v) { window.ctx.call("UnityEngine.Camera", "set_fieldOfView", [this.ptr, v]); }
    get focalLength() { return window.ctx.call("UnityEngine.Camera", "get_focalLength", [this.ptr]).val(); }
    set focalLength(v) { window.ctx.call("UnityEngine.Camera", "set_focalLength", [this.ptr, v]); }
    get focusDistance() { return window.ctx.call("UnityEngine.Camera", "get_focusDistance", [this.ptr]).val(); }
    set focusDistance(v) { window.ctx.call("UnityEngine.Camera", "set_focusDistance", [this.ptr, v]); }
    get forceIntoRenderTexture() { return window.ctx.call("UnityEngine.Camera", "get_forceIntoRenderTexture", [this.ptr]).val() === 1; }
    set forceIntoRenderTexture(v) { window.ctx.call("UnityEngine.Camera", "set_forceIntoRenderTexture", [this.ptr, v]); }
    get gateFit() { return window.ctx.call("UnityEngine.Camera", "get_gateFit", [this.ptr]); }
    set gateFit(v) { window.ctx.call("UnityEngine.Camera", "set_gateFit", [this.ptr, v]); }
    get iso() { return window.ctx.call("UnityEngine.Camera", "get_iso", [this.ptr]).val(); }
    set iso(v) { window.ctx.call("UnityEngine.Camera", "set_iso", [this.ptr, v]); }
    get isProcessingRenderRequest() { return window.ctx.call("UnityEngine.Camera", "get_isProcessingRenderRequest", [this.ptr]).val() === 1; }
    get layerCullDistances() { return window.ctx.call("UnityEngine.Camera", "get_layerCullDistances", [this.ptr]); }
    set layerCullDistances(v) { window.ctx.call("UnityEngine.Camera", "set_layerCullDistances", [this.ptr, v]); }
    get layerCullSpherical() { return window.ctx.call("UnityEngine.Camera", "get_layerCullSpherical", [this.ptr]).val() === 1; }
    set layerCullSpherical(v) { window.ctx.call("UnityEngine.Camera", "set_layerCullSpherical", [this.ptr, v]); }
    get layerCullSphericalInternal() { return window.ctx.call("UnityEngine.Camera", "get_layerCullSphericalInternal", [this.ptr]).val() === 1; }
    set layerCullSphericalInternal(v) { window.ctx.call("UnityEngine.Camera", "set_layerCullSphericalInternal", [this.ptr, v]); }
    get lensShift() { return (()=>{
					let structptr_574280 = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.Camera", "get_lensShift", [structptr_574280, this.ptr]);
					return structptr_574280;
				})(); }
    set lensShift(v) { window.ctx.call("UnityEngine.Camera", "set_lensShift", [this.ptr, v]); }
    static get main() { return new Camera(window.ctx.call("UnityEngine.Camera", "get_main", [])); }
    get nearClipPlane() { return window.ctx.call("UnityEngine.Camera", "get_nearClipPlane", [this.ptr]).val(); }
    set nearClipPlane(v) { window.ctx.call("UnityEngine.Camera", "set_nearClipPlane", [this.ptr, v]); }
    get nonJitteredProjectionMatrix() { return (()=>{
					let structptr_01a85e = window.ctx.malloc(64);
					window.ctx.call("UnityEngine.Camera", "get_nonJitteredProjectionMatrix", [structptr_01a85e, this.ptr]);
					return structptr_01a85e;
				})(); }
    set nonJitteredProjectionMatrix(v) { window.ctx.call("UnityEngine.Camera", "set_nonJitteredProjectionMatrix", [this.ptr, v]); }
    get opaqueSortMode() { return new OpaqueSortMode(window.ctx.call("UnityEngine.Camera", "get_opaqueSortMode", [this.ptr])); }
    set opaqueSortMode(v) { window.ctx.call("UnityEngine.Camera", "set_opaqueSortMode", [this.ptr, v]); }
    get orthographic() { return window.ctx.call("UnityEngine.Camera", "get_orthographic", [this.ptr]).val() === 1; }
    set orthographic(v) { window.ctx.call("UnityEngine.Camera", "set_orthographic", [this.ptr, v]); }
    get orthographicSize() { return window.ctx.call("UnityEngine.Camera", "get_orthographicSize", [this.ptr]).val(); }
    set orthographicSize(v) { window.ctx.call("UnityEngine.Camera", "set_orthographicSize", [this.ptr, v]); }
    get overrideSceneCullingMask() { return window.ctx.call("UnityEngine.Camera", "get_overrideSceneCullingMask", [this.ptr]).val(); }
    set overrideSceneCullingMask(v) { window.ctx.call("UnityEngine.Camera", "set_overrideSceneCullingMask", [this.ptr, v]); }
    get pixelHeight() { return window.ctx.call("UnityEngine.Camera", "get_pixelHeight", [this.ptr]).val(); }
    get pixelRect() { return (()=>{
					let structptr_58a416 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Camera", "get_pixelRect", [structptr_58a416, this.ptr]);
					return structptr_58a416;
				})(); }
    set pixelRect(v) { window.ctx.call("UnityEngine.Camera", "set_pixelRect", [this.ptr, v]); }
    get pixelWidth() { return window.ctx.call("UnityEngine.Camera", "get_pixelWidth", [this.ptr]).val(); }
    static get PreviewCullingLayer() { return window.ctx.call("UnityEngine.Camera", "get_PreviewCullingLayer", []).val(); }
    get previousViewProjectionMatrix() { return (()=>{
					let structptr_84bea4 = window.ctx.malloc(64);
					window.ctx.call("UnityEngine.Camera", "get_previousViewProjectionMatrix", [structptr_84bea4, this.ptr]);
					return structptr_84bea4;
				})(); }
    get projectionMatrix() { return (()=>{
					let structptr_fca68e = window.ctx.malloc(64);
					window.ctx.call("UnityEngine.Camera", "get_projectionMatrix", [structptr_fca68e, this.ptr]);
					return structptr_fca68e;
				})(); }
    set projectionMatrix(v) { window.ctx.call("UnityEngine.Camera", "set_projectionMatrix", [this.ptr, v]); }
    get projectionMatrixMode() { return window.ctx.call("UnityEngine.Camera", "get_projectionMatrixMode", [this.ptr]); }
    get rect() { return (()=>{
					let structptr_dfbe7c = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Camera", "get_rect", [structptr_dfbe7c, this.ptr]);
					return structptr_dfbe7c;
				})(); }
    set rect(v) { window.ctx.call("UnityEngine.Camera", "set_rect", [this.ptr, v]); }
    get renderCloudsInSceneView() { return window.ctx.call("UnityEngine.Camera", "get_renderCloudsInSceneView", [this.ptr]).val() === 1; }
    set renderCloudsInSceneView(v) { window.ctx.call("UnityEngine.Camera", "set_renderCloudsInSceneView", [this.ptr, v]); }
    get renderingPath() { return new RenderingPath(window.ctx.call("UnityEngine.Camera", "get_renderingPath", [this.ptr])); }
    set renderingPath(v) { window.ctx.call("UnityEngine.Camera", "set_renderingPath", [this.ptr, v]); }
    get scaledPixelHeight() { return window.ctx.call("UnityEngine.Camera", "get_scaledPixelHeight", [this.ptr]).val(); }
    get scaledPixelWidth() { return window.ctx.call("UnityEngine.Camera", "get_scaledPixelWidth", [this.ptr]).val(); }
    get scene() { return (()=>{
					let structptr_07b1ff = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Camera", "get_scene", [structptr_07b1ff, this.ptr]);
					return structptr_07b1ff;
				})(); }
    set scene(v) { window.ctx.call("UnityEngine.Camera", "set_scene", [this.ptr, v]); }
    get sceneCullingMask() { return window.ctx.call("UnityEngine.Camera", "get_sceneCullingMask", [this.ptr]).val(); }
    get sceneViewFilterMode() { return window.ctx.call("UnityEngine.Camera", "get_sceneViewFilterMode", [this.ptr]); }
    get sensorSize() { return (()=>{
					let structptr_81335f = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.Camera", "get_sensorSize", [structptr_81335f, this.ptr]);
					return structptr_81335f;
				})(); }
    set sensorSize(v) { window.ctx.call("UnityEngine.Camera", "set_sensorSize", [this.ptr, v]); }
    get shutterSpeed() { return window.ctx.call("UnityEngine.Camera", "get_shutterSpeed", [this.ptr]).val(); }
    set shutterSpeed(v) { window.ctx.call("UnityEngine.Camera", "set_shutterSpeed", [this.ptr, v]); }
    get skyboxMaterial() { return new Material(window.ctx.call("UnityEngine.Camera", "get_skyboxMaterial", [this.ptr])); }
    get stereoActiveEye() { return window.ctx.call("UnityEngine.Camera", "get_stereoActiveEye", [this.ptr]); }
    get stereoConvergence() { return window.ctx.call("UnityEngine.Camera", "get_stereoConvergence", [this.ptr]).val(); }
    set stereoConvergence(v) { window.ctx.call("UnityEngine.Camera", "set_stereoConvergence", [this.ptr, v]); }
    get stereoEnabled() { return window.ctx.call("UnityEngine.Camera", "get_stereoEnabled", [this.ptr]).val() === 1; }
    get stereoSeparation() { return window.ctx.call("UnityEngine.Camera", "get_stereoSeparation", [this.ptr]).val(); }
    set stereoSeparation(v) { window.ctx.call("UnityEngine.Camera", "set_stereoSeparation", [this.ptr, v]); }
    get stereoTargetEye() { return new StereoTargetEyeMask(window.ctx.call("UnityEngine.Camera", "get_stereoTargetEye", [this.ptr])); }
    set stereoTargetEye(v) { window.ctx.call("UnityEngine.Camera", "set_stereoTargetEye", [this.ptr, v]); }
    get stereoTargetEyeInternal() { return new StereoTargetEyeMask(window.ctx.call("UnityEngine.Camera", "get_stereoTargetEyeInternal", [this.ptr])); }
    set stereoTargetEyeInternal(v) { window.ctx.call("UnityEngine.Camera", "set_stereoTargetEyeInternal", [this.ptr, v]); }
    get targetDisplay() { return window.ctx.call("UnityEngine.Camera", "get_targetDisplay", [this.ptr]).val(); }
    set targetDisplay(v) { window.ctx.call("UnityEngine.Camera", "set_targetDisplay", [this.ptr, v]); }
    get targetTexture() { return new RenderTexture(window.ctx.call("UnityEngine.Camera", "get_targetTexture", [this.ptr])); }
    set targetTexture(v) { window.ctx.call("UnityEngine.Camera", "set_targetTexture", [this.ptr, v]); }
    get transparencySortAxis() { return (()=>{
					let structptr_8fe6b4 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Camera", "get_transparencySortAxis", [structptr_8fe6b4, this.ptr]);
					return structptr_8fe6b4;
				})(); }
    set transparencySortAxis(v) { window.ctx.call("UnityEngine.Camera", "set_transparencySortAxis", [this.ptr, v]); }
    get transparencySortMode() { return new TransparencySortMode(window.ctx.call("UnityEngine.Camera", "get_transparencySortMode", [this.ptr])); }
    set transparencySortMode(v) { window.ctx.call("UnityEngine.Camera", "set_transparencySortMode", [this.ptr, v]); }
    get useInteractiveLightBakingData() { return window.ctx.call("UnityEngine.Camera", "get_useInteractiveLightBakingData", [this.ptr]).val() === 1; }
    set useInteractiveLightBakingData(v) { window.ctx.call("UnityEngine.Camera", "set_useInteractiveLightBakingData", [this.ptr, v]); }
    get useJitteredProjectionMatrixForTransparentRendering() { return window.ctx.call("UnityEngine.Camera", "get_useJitteredProjectionMatrixForTransparentRendering", [this.ptr]).val() === 1; }
    set useJitteredProjectionMatrixForTransparentRendering(v) { window.ctx.call("UnityEngine.Camera", "set_useJitteredProjectionMatrixForTransparentRendering", [this.ptr, v]); }
    get useOcclusionCulling() { return window.ctx.call("UnityEngine.Camera", "get_useOcclusionCulling", [this.ptr]).val() === 1; }
    set useOcclusionCulling(v) { window.ctx.call("UnityEngine.Camera", "set_useOcclusionCulling", [this.ptr, v]); }
    get usePhysicalProperties() { return window.ctx.call("UnityEngine.Camera", "get_usePhysicalProperties", [this.ptr]).val() === 1; }
    set usePhysicalProperties(v) { window.ctx.call("UnityEngine.Camera", "set_usePhysicalProperties", [this.ptr, v]); }
    get velocity() { return (()=>{
					let structptr_fbf998 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Camera", "get_velocity", [structptr_fbf998, this.ptr]);
					return structptr_fbf998;
				})(); }
    get worldToCameraMatrix() { return (()=>{
					let structptr_ce8b09 = window.ctx.malloc(64);
					window.ctx.call("UnityEngine.Camera", "get_worldToCameraMatrix", [structptr_ce8b09, this.ptr]);
					return structptr_ce8b09;
				})(); }
    set worldToCameraMatrix(v) { window.ctx.call("UnityEngine.Camera", "set_worldToCameraMatrix", [this.ptr, v]); }
    get m_NonSerializedVersion() { return this.ptr.readField(0xC, 'i32'); }
    set m_NonSerializedVersion(v) { return this.ptr.writeField(0xC, 'i32', v); }
    get onPostRender() { return this.ptr.readField(0x8, 'i32'); }
    set onPostRender(v) { return this.ptr.writeField(0x8, 'i32', v); }
    get onPreCull() { return this.ptr.readField(0x0, 'i32'); }
    set onPreCull(v) { return this.ptr.writeField(0x0, 'i32', v); }
    get onPreRender() { return this.ptr.readField(0x4, 'i32'); }
    set onPreRender(v) { return this.ptr.writeField(0x4, 'i32', v); }
    AddCommandBuffer(evt, buffer) { window.ctx.call("UnityEngine.Camera", "AddCommandBuffer", [this.ptr, evt, buffer]); }
    AddCommandBufferAsync(evt, buffer, queueType) { window.ctx.call("UnityEngine.Camera", "AddCommandBufferAsync", [this.ptr, evt, buffer, queueType]); }
    AddCommandBufferAsyncImpl(evt, buffer, queueType) { window.ctx.call("UnityEngine.Camera", "AddCommandBufferAsyncImpl", [this.ptr, evt, buffer, queueType]); }
    static AddCommandBufferAsyncImpl_Injected(_unity_self, evt, buffer, queueType) { window.ctx.call("UnityEngine.Camera", "AddCommandBufferAsyncImpl_Injected", [_unity_self, evt, buffer, queueType]); }
    AddCommandBufferImpl(evt, buffer) { window.ctx.call("UnityEngine.Camera", "AddCommandBufferImpl", [this.ptr, evt, buffer]); }
    static AddCommandBufferImpl_Injected(_unity_self, evt, buffer) { window.ctx.call("UnityEngine.Camera", "AddCommandBufferImpl_Injected", [_unity_self, evt, buffer]); }
    static BumpNonSerializedVersion(cam) { window.ctx.call("UnityEngine.Camera", "BumpNonSerializedVersion", [cam]); }
    CalculateFrustumCorners(viewport, z, eye, outCorners) { window.ctx.call("UnityEngine.Camera", "CalculateFrustumCorners", [this.ptr, viewport, z, eye, outCorners]); }
    CalculateFrustumCornersInternal(viewport, z, eye, outCorners) { window.ctx.call("UnityEngine.Camera", "CalculateFrustumCornersInternal", [this.ptr, viewport, z, eye, outCorners]); }
    static CalculateFrustumCornersInternal_Injected(_unity_self, viewport, z, eye, outCorners) { window.ctx.call("UnityEngine.Camera", "CalculateFrustumCornersInternal_Injected", [_unity_self, viewport, z, eye, outCorners]); }
    CalculateObliqueMatrix(clipPlane) { return (()=>{
					let structptr_ab008d = window.ctx.malloc(64);
					window.ctx.call("UnityEngine.Camera", "CalculateObliqueMatrix", [structptr_ab008d, this.ptr, clipPlane]);
					return structptr_ab008d;
				})(); }
    static CalculateObliqueMatrix_Injected(_unity_self, clipPlane, ret) { window.ctx.call("UnityEngine.Camera", "CalculateObliqueMatrix_Injected", [_unity_self, clipPlane, ret]); }
    static CalculateProjectionMatrixFromPhysicalProperties(output, focalLength, sensorSize, lensShift, nearClip, farClip, gateFitParameters) { window.ctx.call("UnityEngine.Camera", "CalculateProjectionMatrixFromPhysicalProperties", [output, focalLength, sensorSize, lensShift, nearClip, farClip, gateFitParameters]); }
    static CalculateProjectionMatrixFromPhysicalPropertiesInternal(output, focalLength, sensorSize, lensShift, nearClip, farClip, gateAspect, gateFitMode) { window.ctx.call("UnityEngine.Camera", "CalculateProjectionMatrixFromPhysicalPropertiesInternal", [output, focalLength, sensorSize, lensShift, nearClip, farClip, gateAspect, gateFitMode]); }
    static CalculateProjectionMatrixFromPhysicalPropertiesInternal_Injected(output, focalLength, sensorSize, lensShift, nearClip, farClip, gateAspect, gateFitMode) { window.ctx.call("UnityEngine.Camera", "CalculateProjectionMatrixFromPhysicalPropertiesInternal_Injected", [output, focalLength, sensorSize, lensShift, nearClip, farClip, gateAspect, gateFitMode]); }
    CopyFrom(other) { window.ctx.call("UnityEngine.Camera", "CopyFrom", [this.ptr, other]); }
    static CopyFrom_Injected(_unity_self, other) { window.ctx.call("UnityEngine.Camera", "CopyFrom_Injected", [_unity_self, other]); }
    CopyStereoDeviceProjectionMatrixToNonJittered(eye) { window.ctx.call("UnityEngine.Camera", "CopyStereoDeviceProjectionMatrixToNonJittered", [this.ptr, eye]); }
    static CopyStereoDeviceProjectionMatrixToNonJittered_Injected(_unity_self, eye) { window.ctx.call("UnityEngine.Camera", "CopyStereoDeviceProjectionMatrixToNonJittered_Injected", [_unity_self, eye]); }
    static FieldOfViewToFocalLength(fieldOfView, sensorSize) { return window.ctx.call("UnityEngine.Camera", "FieldOfViewToFocalLength", [fieldOfView, sensorSize]).val(); }
    static FireOnPostRender(cam) { window.ctx.call("UnityEngine.Camera", "FireOnPostRender", [cam]); }
    static FireOnPreCull(cam) { window.ctx.call("UnityEngine.Camera", "FireOnPreCull", [cam]); }
    static FireOnPreRender(cam) { window.ctx.call("UnityEngine.Camera", "FireOnPreRender", [cam]); }
    static FocalLengthToFieldOfView(focalLength, sensorSize) { return window.ctx.call("UnityEngine.Camera", "FocalLengthToFieldOfView", [focalLength, sensorSize]).val(); }
    static GetAllCameras(cameras) { return window.ctx.call("UnityEngine.Camera", "GetAllCameras", [cameras]).val(); }
    static GetAllCamerasCount() { return window.ctx.call("UnityEngine.Camera", "GetAllCamerasCount", []).val(); }
    static GetAllCamerasImpl(cam) { return window.ctx.call("UnityEngine.Camera", "GetAllCamerasImpl", [cam]).val(); }
    static GetAllCamerasImpl_Injected(cam) { return window.ctx.call("UnityEngine.Camera", "GetAllCamerasImpl_Injected", [cam]).val(); }
    GetCameraBufferWarnings() { return window.ctx.call("UnityEngine.Camera", "GetCameraBufferWarnings", [this.ptr]); }
    static GetCameraBufferWarnings_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "GetCameraBufferWarnings_Injected", [_unity_self]); }
    GetCommandBuffers(evt) { return window.ctx.call("UnityEngine.Camera", "GetCommandBuffers", [this.ptr, evt]); }
    GetCommandBuffersImpl(evt) { return window.ctx.call("UnityEngine.Camera", "GetCommandBuffersImpl", [this.ptr, evt]); }
    static GetCommandBuffersImpl_Injected(_unity_self, evt) { return window.ctx.call("UnityEngine.Camera", "GetCommandBuffersImpl_Injected", [_unity_self, evt]); }
    static GetCullingParameters_Internal(camera, stereoAware, cullingParameters, managedCullingParametersSize) { return window.ctx.call("UnityEngine.Camera", "GetCullingParameters_Internal", [camera, stereoAware, cullingParameters, managedCullingParametersSize]).val() === 1; }
    static GetCullingParameters_Internal_Injected(camera, stereoAware, cullingParameters, managedCullingParametersSize) { return window.ctx.call("UnityEngine.Camera", "GetCullingParameters_Internal_Injected", [camera, stereoAware, cullingParameters, managedCullingParametersSize]).val() === 1; }
    GetFilterMode() { return window.ctx.call("UnityEngine.Camera", "GetFilterMode", [this.ptr]).val(); }
    static GetFilterMode_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "GetFilterMode_Injected", [_unity_self]).val(); }
    GetFrustumPlaneSizeAt(distance) { return (()=>{
					let structptr_a96e5e = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.Camera", "GetFrustumPlaneSizeAt", [structptr_a96e5e, this.ptr, distance]);
					return structptr_a96e5e;
				})(); }
    static GetFrustumPlaneSizeAt_Injected(_unity_self, distance, ret) { window.ctx.call("UnityEngine.Camera", "GetFrustumPlaneSizeAt_Injected", [_unity_self, distance, ret]); }
    GetGateFittedFieldOfView() { return window.ctx.call("UnityEngine.Camera", "GetGateFittedFieldOfView", [this.ptr]).val(); }
    static GetGateFittedFieldOfView_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "GetGateFittedFieldOfView_Injected", [_unity_self]).val(); }
    GetGateFittedLensShift() { return (()=>{
					let structptr_e28c29 = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.Camera", "GetGateFittedLensShift", [structptr_e28c29, this.ptr]);
					return structptr_e28c29;
				})(); }
    static GetGateFittedLensShift_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Camera", "GetGateFittedLensShift_Injected", [_unity_self, ret]); }
    GetLayerCullDistances() { return window.ctx.call("UnityEngine.Camera", "GetLayerCullDistances", [this.ptr]); }
    static GetLayerCullDistances_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Camera", "GetLayerCullDistances_Injected", [_unity_self, ret]); }
    GetLocalSpaceAim() { return (()=>{
					let structptr_365a83 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Camera", "GetLocalSpaceAim", [structptr_365a83, this.ptr]);
					return structptr_365a83;
				})(); }
    static GetLocalSpaceAim_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Camera", "GetLocalSpaceAim_Injected", [_unity_self, ret]); }
    GetStereoNonJitteredProjectionMatrix(eye) { return (()=>{
					let structptr_7e9b6a = window.ctx.malloc(64);
					window.ctx.call("UnityEngine.Camera", "GetStereoNonJitteredProjectionMatrix", [structptr_7e9b6a, this.ptr, eye]);
					return structptr_7e9b6a;
				})(); }
    static GetStereoNonJitteredProjectionMatrix_Injected(_unity_self, eye, ret) { window.ctx.call("UnityEngine.Camera", "GetStereoNonJitteredProjectionMatrix_Injected", [_unity_self, eye, ret]); }
    GetStereoProjectionMatrix(eye) { return (()=>{
					let structptr_599c3d = window.ctx.malloc(64);
					window.ctx.call("UnityEngine.Camera", "GetStereoProjectionMatrix", [structptr_599c3d, this.ptr, eye]);
					return structptr_599c3d;
				})(); }
    static GetStereoProjectionMatrix_Injected(_unity_self, eye, ret) { window.ctx.call("UnityEngine.Camera", "GetStereoProjectionMatrix_Injected", [_unity_self, eye, ret]); }
    GetStereoViewMatrix(eye) { return (()=>{
					let structptr_2f3a8f = window.ctx.malloc(64);
					window.ctx.call("UnityEngine.Camera", "GetStereoViewMatrix", [structptr_2f3a8f, this.ptr, eye]);
					return structptr_2f3a8f;
				})(); }
    static GetStereoViewMatrix_Injected(_unity_self, eye, ret) { window.ctx.call("UnityEngine.Camera", "GetStereoViewMatrix_Injected", [_unity_self, eye, ret]); }
    static HorizontalToVerticalFieldOfView(horizontalFieldOfView, aspectRatio) { return window.ctx.call("UnityEngine.Camera", "HorizontalToVerticalFieldOfView", [horizontalFieldOfView, aspectRatio]).val(); }
    OnlyUsedForTesting1() { window.ctx.call("UnityEngine.Camera", "OnlyUsedForTesting1", [this.ptr]); }
    OnlyUsedForTesting2() { window.ctx.call("UnityEngine.Camera", "OnlyUsedForTesting2", [this.ptr]); }
    RemoveAllCommandBuffers() { window.ctx.call("UnityEngine.Camera", "RemoveAllCommandBuffers", [this.ptr]); }
    RemoveAllCommandBuffersImpl() { window.ctx.call("UnityEngine.Camera", "RemoveAllCommandBuffersImpl", [this.ptr]); }
    static RemoveAllCommandBuffersImpl_Injected(_unity_self) { window.ctx.call("UnityEngine.Camera", "RemoveAllCommandBuffersImpl_Injected", [_unity_self]); }
    RemoveCommandBuffer(evt, buffer) { window.ctx.call("UnityEngine.Camera", "RemoveCommandBuffer", [this.ptr, evt, buffer]); }
    RemoveCommandBufferImpl(evt, buffer) { window.ctx.call("UnityEngine.Camera", "RemoveCommandBufferImpl", [this.ptr, evt, buffer]); }
    static RemoveCommandBufferImpl_Injected(_unity_self, evt, buffer) { window.ctx.call("UnityEngine.Camera", "RemoveCommandBufferImpl_Injected", [_unity_self, evt, buffer]); }
    RemoveCommandBuffers(evt) { window.ctx.call("UnityEngine.Camera", "RemoveCommandBuffers", [this.ptr, evt]); }
    RemoveCommandBuffersImpl(evt) { window.ctx.call("UnityEngine.Camera", "RemoveCommandBuffersImpl", [this.ptr, evt]); }
    static RemoveCommandBuffersImpl_Injected(_unity_self, evt) { window.ctx.call("UnityEngine.Camera", "RemoveCommandBuffersImpl_Injected", [_unity_self, evt]); }
    Render() { window.ctx.call("UnityEngine.Camera", "Render", [this.ptr]); }
    RenderDontRestore() { window.ctx.call("UnityEngine.Camera", "RenderDontRestore", [this.ptr]); }
    static RenderDontRestore_Injected(_unity_self) { window.ctx.call("UnityEngine.Camera", "RenderDontRestore_Injected", [_unity_self]); }
    RenderToCubemap_cubemap_faceMask(cubemap, faceMask) { return window.ctx.call("UnityEngine.Camera", "RenderToCubemap_19094", [this.ptr, cubemap, faceMask]).val() === 1; }
    RenderToCubemap_cubemap(cubemap) { return window.ctx.call("UnityEngine.Camera", "RenderToCubemap_19095", [this.ptr, cubemap]).val() === 1; }
    RenderToCubemap_cubemap_faceMask(cubemap, faceMask) { return window.ctx.call("UnityEngine.Camera", "RenderToCubemap_19096", [this.ptr, cubemap, faceMask]).val() === 1; }
    RenderToCubemap_cubemap(cubemap) { return window.ctx.call("UnityEngine.Camera", "RenderToCubemap_19097", [this.ptr, cubemap]).val() === 1; }
    RenderToCubemap_cubemap_faceMask_stereoEye(cubemap, faceMask, stereoEye) { return window.ctx.call("UnityEngine.Camera", "RenderToCubemap_19103", [this.ptr, cubemap, faceMask, stereoEye]).val() === 1; }
    RenderToCubemapEyeImpl(cubemap, faceMask, stereoEye) { return window.ctx.call("UnityEngine.Camera", "RenderToCubemapEyeImpl", [this.ptr, cubemap, faceMask, stereoEye]).val() === 1; }
    static RenderToCubemapEyeImpl_Injected(_unity_self, cubemap, faceMask, stereoEye) { return window.ctx.call("UnityEngine.Camera", "RenderToCubemapEyeImpl_Injected", [_unity_self, cubemap, faceMask, stereoEye]).val() === 1; }
    RenderToCubemapImpl(tex, faceMask) { return window.ctx.call("UnityEngine.Camera", "RenderToCubemapImpl", [this.ptr, tex, faceMask]).val() === 1; }
    static RenderToCubemapImpl_Injected(_unity_self, tex, faceMask) { return window.ctx.call("UnityEngine.Camera", "RenderToCubemapImpl_Injected", [_unity_self, tex, faceMask]).val() === 1; }
    RenderWithShader(shader, replacementTag) { window.ctx.call("UnityEngine.Camera", "RenderWithShader", [this.ptr, shader, replacementTag]); }
    static RenderWithShader_Injected(_unity_self, shader, replacementTag) { window.ctx.call("UnityEngine.Camera", "RenderWithShader_Injected", [_unity_self, shader, replacementTag]); }
    static Render_Injected(_unity_self) { window.ctx.call("UnityEngine.Camera", "Render_Injected", [_unity_self]); }
    Reset() { window.ctx.call("UnityEngine.Camera", "Reset", [this.ptr]); }
    ResetAspect() { window.ctx.call("UnityEngine.Camera", "ResetAspect", [this.ptr]); }
    static ResetAspect_Injected(_unity_self) { window.ctx.call("UnityEngine.Camera", "ResetAspect_Injected", [_unity_self]); }
    ResetCullingMatrix() { window.ctx.call("UnityEngine.Camera", "ResetCullingMatrix", [this.ptr]); }
    static ResetCullingMatrix_Injected(_unity_self) { window.ctx.call("UnityEngine.Camera", "ResetCullingMatrix_Injected", [_unity_self]); }
    ResetProjectionMatrix() { window.ctx.call("UnityEngine.Camera", "ResetProjectionMatrix", [this.ptr]); }
    static ResetProjectionMatrix_Injected(_unity_self) { window.ctx.call("UnityEngine.Camera", "ResetProjectionMatrix_Injected", [_unity_self]); }
    ResetReplacementShader() { window.ctx.call("UnityEngine.Camera", "ResetReplacementShader", [this.ptr]); }
    static ResetReplacementShader_Injected(_unity_self) { window.ctx.call("UnityEngine.Camera", "ResetReplacementShader_Injected", [_unity_self]); }
    ResetStereoProjectionMatrices() { window.ctx.call("UnityEngine.Camera", "ResetStereoProjectionMatrices", [this.ptr]); }
    static ResetStereoProjectionMatrices_Injected(_unity_self) { window.ctx.call("UnityEngine.Camera", "ResetStereoProjectionMatrices_Injected", [_unity_self]); }
    ResetStereoViewMatrices() { window.ctx.call("UnityEngine.Camera", "ResetStereoViewMatrices", [this.ptr]); }
    static ResetStereoViewMatrices_Injected(_unity_self) { window.ctx.call("UnityEngine.Camera", "ResetStereoViewMatrices_Injected", [_unity_self]); }
    ResetTransparencySortSettings() { window.ctx.call("UnityEngine.Camera", "ResetTransparencySortSettings", [this.ptr]); }
    static ResetTransparencySortSettings_Injected(_unity_self) { window.ctx.call("UnityEngine.Camera", "ResetTransparencySortSettings_Injected", [_unity_self]); }
    ResetWorldToCameraMatrix() { window.ctx.call("UnityEngine.Camera", "ResetWorldToCameraMatrix", [this.ptr]); }
    static ResetWorldToCameraMatrix_Injected(_unity_self) { window.ctx.call("UnityEngine.Camera", "ResetWorldToCameraMatrix_Injected", [_unity_self]); }
    static Reset_Injected(_unity_self) { window.ctx.call("UnityEngine.Camera", "Reset_Injected", [_unity_self]); }
    ScreenPointToRay_pos_eye(pos, eye) { return (()=>{
					let structptr_3862b7 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Camera", "ScreenPointToRay_19053", [structptr_3862b7, this.ptr, pos, eye]);
					return structptr_3862b7;
				})(); }
    ScreenPointToRay_pos_eye(pos, eye) { return (()=>{
					let structptr_cadf17 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Camera", "ScreenPointToRay_19054", [structptr_cadf17, this.ptr, pos, eye]);
					return structptr_cadf17;
				})(); }
    ScreenPointToRay_pos(pos) { return (()=>{
					let structptr_38483e = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Camera", "ScreenPointToRay_19055", [structptr_38483e, this.ptr, pos]);
					return structptr_38483e;
				})(); }
    static ScreenPointToRay_Injected(_unity_self, pos, eye, ret) { window.ctx.call("UnityEngine.Camera", "ScreenPointToRay_Injected", [_unity_self, pos, eye, ret]); }
    ScreenToViewportPoint(position) { return (()=>{
					let structptr_f1780b = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Camera", "ScreenToViewportPoint", [structptr_f1780b, this.ptr, position]);
					return structptr_f1780b;
				})(); }
    static ScreenToViewportPoint_Injected(_unity_self, position, ret) { window.ctx.call("UnityEngine.Camera", "ScreenToViewportPoint_Injected", [_unity_self, position, ret]); }
    ScreenToWorldPoint_position_eye(position, eye) { return (()=>{
					let structptr_a60711 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Camera", "ScreenToWorldPoint_19043", [structptr_a60711, this.ptr, position, eye]);
					return structptr_a60711;
				})(); }
    ScreenToWorldPoint_position(position) { return (()=>{
					let structptr_57c208 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Camera", "ScreenToWorldPoint_19046", [structptr_57c208, this.ptr, position]);
					return structptr_57c208;
				})(); }
    static ScreenToWorldPoint_Injected(_unity_self, position, eye, ret) { window.ctx.call("UnityEngine.Camera", "ScreenToWorldPoint_Injected", [_unity_self, position, eye, ret]); }
    SetLayerCullDistances(d) { window.ctx.call("UnityEngine.Camera", "SetLayerCullDistances", [this.ptr, d]); }
    static SetLayerCullDistances_Injected(_unity_self, d) { window.ctx.call("UnityEngine.Camera", "SetLayerCullDistances_Injected", [_unity_self, d]); }
    SetReplacementShader(shader, replacementTag) { window.ctx.call("UnityEngine.Camera", "SetReplacementShader", [this.ptr, shader, replacementTag]); }
    static SetReplacementShader_Injected(_unity_self, shader, replacementTag) { window.ctx.call("UnityEngine.Camera", "SetReplacementShader_Injected", [_unity_self, shader, replacementTag]); }
    SetStereoProjectionMatrix(eye, matrix) { window.ctx.call("UnityEngine.Camera", "SetStereoProjectionMatrix", [this.ptr, eye, matrix]); }
    static SetStereoProjectionMatrix_Injected(_unity_self, eye, matrix) { window.ctx.call("UnityEngine.Camera", "SetStereoProjectionMatrix_Injected", [_unity_self, eye, matrix]); }
    SetStereoViewMatrix(eye, matrix) { window.ctx.call("UnityEngine.Camera", "SetStereoViewMatrix", [this.ptr, eye, matrix]); }
    static SetStereoViewMatrix_Injected(_unity_self, eye, matrix) { window.ctx.call("UnityEngine.Camera", "SetStereoViewMatrix_Injected", [_unity_self, eye, matrix]); }
    SetTargetBuffers_colorBuffer_depthBuffer(colorBuffer, depthBuffer) { window.ctx.call("UnityEngine.Camera", "SetTargetBuffers_19023", [this.ptr, colorBuffer, depthBuffer]); }
    SetTargetBuffers_colorBuffer_depthBuffer(colorBuffer, depthBuffer) { window.ctx.call("UnityEngine.Camera", "SetTargetBuffers_19025", [this.ptr, colorBuffer, depthBuffer]); }
    SetTargetBuffersImpl(color, depth) { window.ctx.call("UnityEngine.Camera", "SetTargetBuffersImpl", [this.ptr, color, depth]); }
    static SetTargetBuffersImpl_Injected(_unity_self, color, depth) { window.ctx.call("UnityEngine.Camera", "SetTargetBuffersImpl_Injected", [_unity_self, color, depth]); }
    SetTargetBuffersMRTImpl(color, depth) { window.ctx.call("UnityEngine.Camera", "SetTargetBuffersMRTImpl", [this.ptr, color, depth]); }
    static SetTargetBuffersMRTImpl_Injected(_unity_self, color, depth) { window.ctx.call("UnityEngine.Camera", "SetTargetBuffersMRTImpl_Injected", [_unity_self, color, depth]); }
    static SetupCurrent(cur) { window.ctx.call("UnityEngine.Camera", "SetupCurrent", [cur]); }
    static SetupCurrent_Injected(cur) { window.ctx.call("UnityEngine.Camera", "SetupCurrent_Injected", [cur]); }
    SubmitBuiltInObjectIDRenderRequest(target, mipLevel, cubemapFace, depthSlice) { return window.ctx.call("UnityEngine.Camera", "SubmitBuiltInObjectIDRenderRequest", [this.ptr, target, mipLevel, cubemapFace, depthSlice]); }
    static SubmitBuiltInObjectIDRenderRequest_Injected(_unity_self, target, mipLevel, cubemapFace, depthSlice) { return window.ctx.call("UnityEngine.Camera", "SubmitBuiltInObjectIDRenderRequest_Injected", [_unity_self, target, mipLevel, cubemapFace, depthSlice]); }
    SubmitRenderRequest(renderRequest) { window.ctx.call("UnityEngine.Camera", "SubmitRenderRequest", [this.ptr, renderRequest]); }
    SubmitRenderRequestsInternal(requests) { window.ctx.call("UnityEngine.Camera", "SubmitRenderRequestsInternal", [this.ptr, requests]); }
    static SubmitRenderRequestsInternal_Injected(_unity_self, requests) { window.ctx.call("UnityEngine.Camera", "SubmitRenderRequestsInternal_Injected", [_unity_self, requests]); }
    TryGetCullingParameters_cullingParameters(cullingParameters) { return window.ctx.call("UnityEngine.Camera", "TryGetCullingParameters_19131", [this.ptr, cullingParameters]).val() === 1; }
    TryGetCullingParameters_stereoAware_cullingParameters(stereoAware, cullingParameters) { return window.ctx.call("UnityEngine.Camera", "TryGetCullingParameters_19132", [this.ptr, stereoAware, cullingParameters]).val() === 1; }
    static VerticalToHorizontalFieldOfView(verticalFieldOfView, aspectRatio) { return window.ctx.call("UnityEngine.Camera", "VerticalToHorizontalFieldOfView", [verticalFieldOfView, aspectRatio]).val(); }
    ViewportPointToRay_pos_eye(pos, eye) { return (()=>{
					let structptr_152f70 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Camera", "ViewportPointToRay_19050", [structptr_152f70, this.ptr, pos, eye]);
					return structptr_152f70;
				})(); }
    ViewportPointToRay_pos_eye(pos, eye) { return (()=>{
					let structptr_9c36ed = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Camera", "ViewportPointToRay_19051", [structptr_9c36ed, this.ptr, pos, eye]);
					return structptr_9c36ed;
				})(); }
    ViewportPointToRay_pos(pos) { return (()=>{
					let structptr_44b366 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Camera", "ViewportPointToRay_19052", [structptr_44b366, this.ptr, pos]);
					return structptr_44b366;
				})(); }
    static ViewportPointToRay_Injected(_unity_self, pos, eye, ret) { window.ctx.call("UnityEngine.Camera", "ViewportPointToRay_Injected", [_unity_self, pos, eye, ret]); }
    ViewportToScreenPoint(position) { return (()=>{
					let structptr_3f3b6d = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Camera", "ViewportToScreenPoint", [structptr_3f3b6d, this.ptr, position]);
					return structptr_3f3b6d;
				})(); }
    static ViewportToScreenPoint_Injected(_unity_self, position, ret) { window.ctx.call("UnityEngine.Camera", "ViewportToScreenPoint_Injected", [_unity_self, position, ret]); }
    ViewportToWorldPoint_position_eye(position, eye) { return (()=>{
					let structptr_25f104 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Camera", "ViewportToWorldPoint_19042", [structptr_25f104, this.ptr, position, eye]);
					return structptr_25f104;
				})(); }
    ViewportToWorldPoint_position(position) { return (()=>{
					let structptr_a7b62d = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Camera", "ViewportToWorldPoint_19045", [structptr_a7b62d, this.ptr, position]);
					return structptr_a7b62d;
				})(); }
    static ViewportToWorldPoint_Injected(_unity_self, position, eye, ret) { window.ctx.call("UnityEngine.Camera", "ViewportToWorldPoint_Injected", [_unity_self, position, eye, ret]); }
    WorldToScreenPoint_position_eye(position, eye) { return (()=>{
					let structptr_36fe24 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Camera", "WorldToScreenPoint_19040", [structptr_36fe24, this.ptr, position, eye]);
					return structptr_36fe24;
				})(); }
    WorldToScreenPoint_position(position) { return (()=>{
					let structptr_220a6e = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Camera", "WorldToScreenPoint_2706", [structptr_220a6e, this.ptr, position]);
					return structptr_220a6e;
				})(); }
    static WorldToScreenPoint_Injected(_unity_self, position, eye, ret) { window.ctx.call("UnityEngine.Camera", "WorldToScreenPoint_Injected", [_unity_self, position, eye, ret]); }
    WorldToViewportPoint_position_eye(position, eye) { return (()=>{
					let structptr_173c5f = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Camera", "WorldToViewportPoint_19041", [structptr_173c5f, this.ptr, position, eye]);
					return structptr_173c5f;
				})(); }
    WorldToViewportPoint_position(position) { return (()=>{
					let structptr_099074 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Camera", "WorldToViewportPoint_19044", [structptr_099074, this.ptr, position]);
					return structptr_099074;
				})(); }
    static WorldToViewportPoint_Injected(_unity_self, position, eye, ret) { window.ctx.call("UnityEngine.Camera", "WorldToViewportPoint_Injected", [_unity_self, position, eye, ret]); }
    static get_activeTexture_Injected(_unity_self) { return (()=>{
					let structptr_23ef30 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Camera", "get_activeTexture_Injected", [structptr_23ef30, _unity_self]);
					return structptr_23ef30;
				})(); }
    static get_actualRenderingPath_Injected(_unity_self) { return new RenderingPath(window.ctx.call("UnityEngine.Camera", "get_actualRenderingPath_Injected", [_unity_self])); }
    static get_allowDynamicResolution_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_allowDynamicResolution_Injected", [_unity_self]).val() === 1; }
    static get_allowHDR_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_allowHDR_Injected", [_unity_self]).val() === 1; }
    static get_allowMSAA_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_allowMSAA_Injected", [_unity_self]).val() === 1; }
    static get_anamorphism_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_anamorphism_Injected", [_unity_self]).val(); }
    static get_aperture_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_aperture_Injected", [_unity_self]).val(); }
    static get_areVRStereoViewMatricesWithinSingleCullTolerance_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_areVRStereoViewMatricesWithinSingleCullTolerance_Injected", [_unity_self]).val() === 1; }
    static get_aspect_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_aspect_Injected", [_unity_self]).val(); }
    static get_backgroundColor_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Camera", "get_backgroundColor_Injected", [_unity_self, ret]); }
    static get_barrelClipping_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_barrelClipping_Injected", [_unity_self]).val(); }
    static get_bladeCount_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_bladeCount_Injected", [_unity_self]).val(); }
    static get_cameraToWorldMatrix_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Camera", "get_cameraToWorldMatrix_Injected", [_unity_self, ret]); }
    static get_cameraType_Injected(_unity_self) { return new CameraType(window.ctx.call("UnityEngine.Camera", "get_cameraType_Injected", [_unity_self])); }
    static get_clearFlags_Injected(_unity_self) { return new CameraClearFlags(window.ctx.call("UnityEngine.Camera", "get_clearFlags_Injected", [_unity_self])); }
    static get_clearStencilAfterLightingPass_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_clearStencilAfterLightingPass_Injected", [_unity_self]).val() === 1; }
    static get_commandBufferCount_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_commandBufferCount_Injected", [_unity_self]).val(); }
    static get_cullingMask_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_cullingMask_Injected", [_unity_self]).val(); }
    static get_cullingMatrix_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Camera", "get_cullingMatrix_Injected", [_unity_self, ret]); }
    static get_currentInternal_Injected() { return (()=>{
					let structptr_0df0f9 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Camera", "get_currentInternal_Injected", [structptr_0df0f9, ]);
					return structptr_0df0f9;
				})(); }
    static get_curvature_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Camera", "get_curvature_Injected", [_unity_self, ret]); }
    static get_depthTextureMode_Injected(_unity_self) { return new DepthTextureMode(window.ctx.call("UnityEngine.Camera", "get_depthTextureMode_Injected", [_unity_self])); }
    static get_depth_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_depth_Injected", [_unity_self]).val(); }
    static get_eventMask_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_eventMask_Injected", [_unity_self]).val(); }
    static get_farClipPlane_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_farClipPlane_Injected", [_unity_self]).val(); }
    static get_fieldOfView_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_fieldOfView_Injected", [_unity_self]).val(); }
    static get_focalLength_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_focalLength_Injected", [_unity_self]).val(); }
    static get_focusDistance_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_focusDistance_Injected", [_unity_self]).val(); }
    static get_forceIntoRenderTexture_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_forceIntoRenderTexture_Injected", [_unity_self]).val() === 1; }
    static get_gateFit_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_gateFit_Injected", [_unity_self]); }
    static get_isProcessingRenderRequest_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_isProcessingRenderRequest_Injected", [_unity_self]).val() === 1; }
    static get_iso_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_iso_Injected", [_unity_self]).val(); }
    static get_layerCullSphericalInternal_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_layerCullSphericalInternal_Injected", [_unity_self]).val() === 1; }
    static get_lensShift_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Camera", "get_lensShift_Injected", [_unity_self, ret]); }
    static get_main_Injected() { return (()=>{
					let structptr_ccb081 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Camera", "get_main_Injected", [structptr_ccb081, ]);
					return structptr_ccb081;
				})(); }
    static get_nearClipPlane_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_nearClipPlane_Injected", [_unity_self]).val(); }
    static get_nonJitteredProjectionMatrix_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Camera", "get_nonJitteredProjectionMatrix_Injected", [_unity_self, ret]); }
    static get_opaqueSortMode_Injected(_unity_self) { return new OpaqueSortMode(window.ctx.call("UnityEngine.Camera", "get_opaqueSortMode_Injected", [_unity_self])); }
    static get_orthographicSize_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_orthographicSize_Injected", [_unity_self]).val(); }
    static get_orthographic_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_orthographic_Injected", [_unity_self]).val() === 1; }
    static get_overrideSceneCullingMask_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_overrideSceneCullingMask_Injected", [_unity_self]).val(); }
    static get_pixelHeight_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_pixelHeight_Injected", [_unity_self]).val(); }
    static get_pixelRect_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Camera", "get_pixelRect_Injected", [_unity_self, ret]); }
    static get_pixelWidth_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_pixelWidth_Injected", [_unity_self]).val(); }
    static get_previousViewProjectionMatrix_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Camera", "get_previousViewProjectionMatrix_Injected", [_unity_self, ret]); }
    static get_projectionMatrixMode_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_projectionMatrixMode_Injected", [_unity_self]); }
    static get_projectionMatrix_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Camera", "get_projectionMatrix_Injected", [_unity_self, ret]); }
    static get_rect_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Camera", "get_rect_Injected", [_unity_self, ret]); }
    static get_renderCloudsInSceneView_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_renderCloudsInSceneView_Injected", [_unity_self]).val() === 1; }
    static get_renderingPath_Injected(_unity_self) { return new RenderingPath(window.ctx.call("UnityEngine.Camera", "get_renderingPath_Injected", [_unity_self])); }
    static get_scaledPixelHeight_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_scaledPixelHeight_Injected", [_unity_self]).val(); }
    static get_scaledPixelWidth_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_scaledPixelWidth_Injected", [_unity_self]).val(); }
    static get_sceneCullingMask_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_sceneCullingMask_Injected", [_unity_self]).val(); }
    static get_scene_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Camera", "get_scene_Injected", [_unity_self, ret]); }
    static get_sensorSize_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Camera", "get_sensorSize_Injected", [_unity_self, ret]); }
    static get_shutterSpeed_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_shutterSpeed_Injected", [_unity_self]).val(); }
    static get_skyboxMaterial_Injected(_unity_self) { return (()=>{
					let structptr_4dfd5d = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Camera", "get_skyboxMaterial_Injected", [structptr_4dfd5d, _unity_self]);
					return structptr_4dfd5d;
				})(); }
    static get_stereoActiveEye_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_stereoActiveEye_Injected", [_unity_self]); }
    static get_stereoConvergence_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_stereoConvergence_Injected", [_unity_self]).val(); }
    static get_stereoEnabled_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_stereoEnabled_Injected", [_unity_self]).val() === 1; }
    static get_stereoSeparation_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_stereoSeparation_Injected", [_unity_self]).val(); }
    static get_stereoTargetEyeInternal_Injected(_unity_self) { return new StereoTargetEyeMask(window.ctx.call("UnityEngine.Camera", "get_stereoTargetEyeInternal_Injected", [_unity_self])); }
    static get_targetDisplay_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_targetDisplay_Injected", [_unity_self]).val(); }
    static get_targetTexture_Injected(_unity_self) { return (()=>{
					let structptr_f853b8 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Camera", "get_targetTexture_Injected", [structptr_f853b8, _unity_self]);
					return structptr_f853b8;
				})(); }
    static get_transparencySortAxis_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Camera", "get_transparencySortAxis_Injected", [_unity_self, ret]); }
    static get_transparencySortMode_Injected(_unity_self) { return new TransparencySortMode(window.ctx.call("UnityEngine.Camera", "get_transparencySortMode_Injected", [_unity_self])); }
    static get_useInteractiveLightBakingData_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_useInteractiveLightBakingData_Injected", [_unity_self]).val() === 1; }
    static get_useJitteredProjectionMatrixForTransparentRendering_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_useJitteredProjectionMatrixForTransparentRendering_Injected", [_unity_self]).val() === 1; }
    static get_useOcclusionCulling_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_useOcclusionCulling_Injected", [_unity_self]).val() === 1; }
    static get_usePhysicalProperties_Injected(_unity_self) { return window.ctx.call("UnityEngine.Camera", "get_usePhysicalProperties_Injected", [_unity_self]).val() === 1; }
    static get_velocity_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Camera", "get_velocity_Injected", [_unity_self, ret]); }
    static get_worldToCameraMatrix_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Camera", "get_worldToCameraMatrix_Injected", [_unity_self, ret]); }
    static set_allowDynamicResolution_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_allowDynamicResolution_Injected", [_unity_self, value]); }
    static set_allowHDR_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_allowHDR_Injected", [_unity_self, value]); }
    static set_allowMSAA_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_allowMSAA_Injected", [_unity_self, value]); }
    static set_anamorphism_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_anamorphism_Injected", [_unity_self, value]); }
    static set_aperture_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_aperture_Injected", [_unity_self, value]); }
    static set_aspect_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_aspect_Injected", [_unity_self, value]); }
    static set_backgroundColor_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_backgroundColor_Injected", [_unity_self, value]); }
    static set_barrelClipping_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_barrelClipping_Injected", [_unity_self, value]); }
    static set_bladeCount_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_bladeCount_Injected", [_unity_self, value]); }
    static set_cameraType_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_cameraType_Injected", [_unity_self, value]); }
    static set_clearFlags_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_clearFlags_Injected", [_unity_self, value]); }
    static set_clearStencilAfterLightingPass_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_clearStencilAfterLightingPass_Injected", [_unity_self, value]); }
    static set_cullingMask_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_cullingMask_Injected", [_unity_self, value]); }
    static set_cullingMatrix_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_cullingMatrix_Injected", [_unity_self, value]); }
    static set_curvature_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_curvature_Injected", [_unity_self, value]); }
    static set_depthTextureMode_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_depthTextureMode_Injected", [_unity_self, value]); }
    static set_depth_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_depth_Injected", [_unity_self, value]); }
    static set_eventMask_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_eventMask_Injected", [_unity_self, value]); }
    static set_farClipPlane_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_farClipPlane_Injected", [_unity_self, value]); }
    static set_fieldOfView_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_fieldOfView_Injected", [_unity_self, value]); }
    static set_focalLength_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_focalLength_Injected", [_unity_self, value]); }
    static set_focusDistance_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_focusDistance_Injected", [_unity_self, value]); }
    static set_forceIntoRenderTexture_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_forceIntoRenderTexture_Injected", [_unity_self, value]); }
    static set_gateFit_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_gateFit_Injected", [_unity_self, value]); }
    static set_iso_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_iso_Injected", [_unity_self, value]); }
    static set_layerCullSphericalInternal_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_layerCullSphericalInternal_Injected", [_unity_self, value]); }
    static set_lensShift_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_lensShift_Injected", [_unity_self, value]); }
    static set_nearClipPlane_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_nearClipPlane_Injected", [_unity_self, value]); }
    static set_nonJitteredProjectionMatrix_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_nonJitteredProjectionMatrix_Injected", [_unity_self, value]); }
    static set_opaqueSortMode_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_opaqueSortMode_Injected", [_unity_self, value]); }
    static set_orthographicSize_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_orthographicSize_Injected", [_unity_self, value]); }
    static set_orthographic_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_orthographic_Injected", [_unity_self, value]); }
    static set_overrideSceneCullingMask_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_overrideSceneCullingMask_Injected", [_unity_self, value]); }
    static set_pixelRect_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_pixelRect_Injected", [_unity_self, value]); }
    static set_projectionMatrix_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_projectionMatrix_Injected", [_unity_self, value]); }
    static set_rect_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_rect_Injected", [_unity_self, value]); }
    static set_renderCloudsInSceneView_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_renderCloudsInSceneView_Injected", [_unity_self, value]); }
    static set_renderingPath_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_renderingPath_Injected", [_unity_self, value]); }
    static set_scene_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_scene_Injected", [_unity_self, value]); }
    static set_sensorSize_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_sensorSize_Injected", [_unity_self, value]); }
    static set_shutterSpeed_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_shutterSpeed_Injected", [_unity_self, value]); }
    static set_stereoConvergence_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_stereoConvergence_Injected", [_unity_self, value]); }
    static set_stereoSeparation_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_stereoSeparation_Injected", [_unity_self, value]); }
    static set_stereoTargetEyeInternal_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_stereoTargetEyeInternal_Injected", [_unity_self, value]); }
    static set_targetDisplay_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_targetDisplay_Injected", [_unity_self, value]); }
    static set_targetTexture_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_targetTexture_Injected", [_unity_self, value]); }
    static set_transparencySortAxis_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_transparencySortAxis_Injected", [_unity_self, value]); }
    static set_transparencySortMode_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_transparencySortMode_Injected", [_unity_self, value]); }
    static set_useInteractiveLightBakingData_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_useInteractiveLightBakingData_Injected", [_unity_self, value]); }
    static set_useJitteredProjectionMatrixForTransparentRendering_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_useJitteredProjectionMatrixForTransparentRendering_Injected", [_unity_self, value]); }
    static set_useOcclusionCulling_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_useOcclusionCulling_Injected", [_unity_self, value]); }
    static set_usePhysicalProperties_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_usePhysicalProperties_Injected", [_unity_self, value]); }
    static set_worldToCameraMatrix_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Camera", "set_worldToCameraMatrix_Injected", [_unity_self, value]); }
}

export class Ray {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get direction() { return (()=>{
					let structptr_e12b4e = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Ray", "get_direction", [structptr_e12b4e, this.ptr]);
					return structptr_e12b4e;
				})(); }
    get origin() { return (()=>{
					let structptr_76356a = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Ray", "get_origin", [structptr_76356a, this.ptr]);
					return structptr_76356a;
				})(); }
    get m_Direction() { return new Vector3(this.ptr.readField(0xC, 'i32')); }
    set m_Direction(v) { return this.ptr.writeField(0xC, 'i32', v); }
    get m_Origin() { return new Vector3(this.ptr.readField(0x0, 'i32')); }
    set m_Origin(v) { return this.ptr.writeField(0x0, 'i32', v); }
    GetPoint(distance) { return (()=>{
					let structptr_4e766a = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Ray", "GetPoint", [structptr_4e766a, this.ptr, distance]);
					return structptr_4e766a;
				})(); }
    ToString_pointer() { return window.ctx.call("UnityEngine.Ray", "ToString_19403", [this.ptr]); }
    ToString_format_formatProvider(format, formatProvider) { return window.ctx.call("UnityEngine.Ray", "ToString_19404", [this.ptr, format, formatProvider]); }
}

export class Quaternion {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get eulerAngles() { return (()=>{
					let structptr_91d62b = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Quaternion", "get_eulerAngles", [structptr_91d62b, this.ptr]);
					return structptr_91d62b;
				})(); }
    static get identity() { return (()=>{
					let structptr_4d434f = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Quaternion", "get_identity", [structptr_4d434f, ]);
					return structptr_4d434f;
				})(); }
    get identityQuaternion() { return new Quaternion(this.ptr.readField(0x0, 'i32')); }
    set identityQuaternion(v) { return this.ptr.writeField(0x0, 'i32', v); }
    get w() { return this.ptr.readField(0xC, 'f32').val(); }
    set w(v) { return this.ptr.writeField(0xC, 'f32', v); }
    get x() { return this.ptr.readField(0x0, 'f32').val(); }
    set x(v) { return this.ptr.writeField(0x0, 'f32', v); }
    get y() { return this.ptr.readField(0x4, 'f32').val(); }
    set y(v) { return this.ptr.writeField(0x4, 'f32', v); }
    get z() { return this.ptr.readField(0x8, 'f32').val(); }
    set z(v) { return this.ptr.writeField(0x8, 'f32', v); }
    static Angle(a, b) { return window.ctx.call("UnityEngine.Quaternion", "Angle", [a, b]).val(); }
    static AngleAxis(angle, axis) { return (()=>{
					let structptr_fe80ee = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Quaternion", "AngleAxis", [structptr_fe80ee, angle, axis]);
					return structptr_fe80ee;
				})(); }
    static Dot(a, b) { return window.ctx.call("UnityEngine.Quaternion", "Dot", [a, b]).val(); }
    Equals_other(other) { return window.ctx.call("UnityEngine.Quaternion", "Equals_22064", [this.ptr, other]).val() === 1; }
    Equals_other(other) { return window.ctx.call("UnityEngine.Quaternion", "Equals_22065", [this.ptr, other]).val() === 1; }
    Equals_other(other) { return window.ctx.call("UnityEngine.Quaternion", "Equals_22066", [this.ptr, other]).val() === 1; }
    static Euler_x_y_z(x, y, z) { return (()=>{
					let structptr_a084c3 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Quaternion", "Euler_22061", [structptr_a084c3, x, y, z]);
					return structptr_a084c3;
				})(); }
    static Euler_euler(euler) { return (()=>{
					let structptr_83deca = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Quaternion", "Euler_22062", [structptr_83deca, euler]);
					return structptr_83deca;
				})(); }
    static FromToRotation(fromDirection, toDirection) { return (()=>{
					let structptr_2fc549 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Quaternion", "FromToRotation", [structptr_2fc549, fromDirection, toDirection]);
					return structptr_2fc549;
				})(); }
    GetHashCode() { return window.ctx.call("UnityEngine.Quaternion", "GetHashCode", [this.ptr]).val(); }
    static Internal_AngleAxis(angle, axis) { return (()=>{
					let structptr_94e906 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Quaternion", "Internal_AngleAxis", [structptr_94e906, angle, axis]);
					return structptr_94e906;
				})(); }
    static Internal_AngleAxis_Injected(angle, axis, ret) { window.ctx.call("UnityEngine.Quaternion", "Internal_AngleAxis_Injected", [angle, axis, ret]); }
    static Internal_FromEulerRad(euler) { return (()=>{
					let structptr_6b9046 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Quaternion", "Internal_FromEulerRad", [structptr_6b9046, euler]);
					return structptr_6b9046;
				})(); }
    static Internal_FromEulerRad_Injected(euler, ret) { window.ctx.call("UnityEngine.Quaternion", "Internal_FromEulerRad_Injected", [euler, ret]); }
    static Internal_FromToRotation(fromDirection, toDirection) { return (()=>{
					let structptr_d7bf6b = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Quaternion", "Internal_FromToRotation", [structptr_d7bf6b, fromDirection, toDirection]);
					return structptr_d7bf6b;
				})(); }
    static Internal_FromToRotation_Injected(fromDirection, toDirection, ret) { window.ctx.call("UnityEngine.Quaternion", "Internal_FromToRotation_Injected", [fromDirection, toDirection, ret]); }
    static Internal_Inverse(rotation) { return (()=>{
					let structptr_4647f7 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Quaternion", "Internal_Inverse", [structptr_4647f7, rotation]);
					return structptr_4647f7;
				})(); }
    static Internal_Inverse_Injected(rotation, ret) { window.ctx.call("UnityEngine.Quaternion", "Internal_Inverse_Injected", [rotation, ret]); }
    static Internal_Lerp(a, b, t) { return (()=>{
					let structptr_e580ad = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Quaternion", "Internal_Lerp", [structptr_e580ad, a, b, t]);
					return structptr_e580ad;
				})(); }
    static Internal_Lerp_Injected(a, b, t, ret) { window.ctx.call("UnityEngine.Quaternion", "Internal_Lerp_Injected", [a, b, t, ret]); }
    static Internal_LookRotation(forward, upwards) { return (()=>{
					let structptr_d9546c = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Quaternion", "Internal_LookRotation", [structptr_d9546c, forward, upwards]);
					return structptr_d9546c;
				})(); }
    static Internal_LookRotation_Injected(forward, upwards, ret) { window.ctx.call("UnityEngine.Quaternion", "Internal_LookRotation_Injected", [forward, upwards, ret]); }
    static Internal_MakePositive(euler) { return (()=>{
					let structptr_7e7641 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Quaternion", "Internal_MakePositive", [structptr_7e7641, euler]);
					return structptr_7e7641;
				})(); }
    static Internal_Slerp(a, b, t) { return (()=>{
					let structptr_fcd899 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Quaternion", "Internal_Slerp", [structptr_fcd899, a, b, t]);
					return structptr_fcd899;
				})(); }
    static Internal_Slerp_Injected(a, b, t, ret) { window.ctx.call("UnityEngine.Quaternion", "Internal_Slerp_Injected", [a, b, t, ret]); }
    static Internal_ToEulerRad(rotation) { return (()=>{
					let structptr_600fa5 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Quaternion", "Internal_ToEulerRad", [structptr_600fa5, rotation]);
					return structptr_600fa5;
				})(); }
    static Internal_ToEulerRad_Injected(rotation, ret) { window.ctx.call("UnityEngine.Quaternion", "Internal_ToEulerRad_Injected", [rotation, ret]); }
    static Inverse(rotation) { return (()=>{
					let structptr_f090c7 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Quaternion", "Inverse", [structptr_f090c7, rotation]);
					return structptr_f090c7;
				})(); }
    static IsEqualUsingDot(dot) { return window.ctx.call("UnityEngine.Quaternion", "IsEqualUsingDot", [dot]).val() === 1; }
    static Lerp(a, b, t) { return (()=>{
					let structptr_dfb582 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Quaternion", "Lerp", [structptr_dfb582, a, b, t]);
					return structptr_dfb582;
				})(); }
    static LookRotation_forward_upwards(forward, upwards) { return (()=>{
					let structptr_4afa4e = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Quaternion", "LookRotation_22048", [structptr_4afa4e, forward, upwards]);
					return structptr_4afa4e;
				})(); }
    static LookRotation_forward(forward) { return (()=>{
					let structptr_594807 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Quaternion", "LookRotation_22049", [structptr_594807, forward]);
					return structptr_594807;
				})(); }
    static Slerp(a, b, t) { return (()=>{
					let structptr_57ef63 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Quaternion", "Slerp", [structptr_57ef63, a, b, t]);
					return structptr_57ef63;
				})(); }
    ToString_pointer() { return window.ctx.call("UnityEngine.Quaternion", "ToString_22067", [this.ptr]); }
    ToString_format_formatProvider(format, formatProvider) { return window.ctx.call("UnityEngine.Quaternion", "ToString_22068", [this.ptr, format, formatProvider]); }
}

export class GameObject {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get active() { return window.ctx.call("UnityEngine.GameObject", "get_active", [this.ptr]).val() === 1; }
    set active(v) { window.ctx.call("UnityEngine.GameObject", "set_active", [this.ptr, v]); }
    get activeInHierarchy() { return window.ctx.call("UnityEngine.GameObject", "get_activeInHierarchy", [this.ptr]).val() === 1; }
    get activeSelf() { return window.ctx.call("UnityEngine.GameObject", "get_activeSelf", [this.ptr]).val() === 1; }
    get gameObject() { return new GameObject(window.ctx.call("UnityEngine.GameObject", "get_gameObject", [this.ptr])); }
    get isStatic() { return window.ctx.call("UnityEngine.GameObject", "get_isStatic", [this.ptr]).val() === 1; }
    set isStatic(v) { window.ctx.call("UnityEngine.GameObject", "set_isStatic", [this.ptr, v]); }
    get isStaticBatchable() { return window.ctx.call("UnityEngine.GameObject", "get_isStaticBatchable", [this.ptr]).val() === 1; }
    get layer() { return window.ctx.call("UnityEngine.GameObject", "get_layer", [this.ptr]).val(); }
    set layer(v) { window.ctx.call("UnityEngine.GameObject", "set_layer", [this.ptr, v]); }
    get scene() { return (()=>{
					let structptr_bd81a0 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.GameObject", "get_scene", [structptr_bd81a0, this.ptr]);
					return structptr_bd81a0;
				})(); }
    get sceneCullingMask() { return window.ctx.call("UnityEngine.GameObject", "get_sceneCullingMask", [this.ptr]).val(); }
    get tag() { return window.ctx.call("UnityEngine.GameObject", "get_tag", [this.ptr]); }
    set tag(v) { window.ctx.call("UnityEngine.GameObject", "set_tag", [this.ptr, v]); }
    get transform() { return new Transform(window.ctx.call("UnityEngine.GameObject", "get_transform", [this.ptr])); }
    get transformHandle() { return (()=>{
					let structptr_d3cbf7 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.GameObject", "get_transformHandle", [structptr_d3cbf7, this.ptr]);
					return structptr_d3cbf7;
				})(); }
    AddComponent_componentType(componentType) { return new Component(window.ctx.call("UnityEngine.GameObject", "AddComponent_22450", [this.ptr, componentType])); }
    AddComponent() { return window.ctx.call("UnityEngine.GameObject", "AddComponent", [this.ptr]); }
    AddComponentInternal(className) { return new Component(window.ctx.call("UnityEngine.GameObject", "AddComponentInternal", [this.ptr, className])); }
    static AddComponentInternal_Injected(_unity_self, className) { return (()=>{
					let structptr_8e985c = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.GameObject", "AddComponentInternal_Injected", [structptr_8e985c, _unity_self, className]);
					return structptr_8e985c;
				})(); }
    BroadcastMessage_methodName_options(methodName, options) { window.ctx.call("UnityEngine.GameObject", "BroadcastMessage_22447", [this.ptr, methodName, options]); }
    BroadcastMessage_methodName_parameter_options(methodName, parameter, options) { window.ctx.call("UnityEngine.GameObject", "BroadcastMessage_22476", [this.ptr, methodName, parameter, options]); }
    BroadcastMessage_methodName_parameter(methodName, parameter) { window.ctx.call("UnityEngine.GameObject", "BroadcastMessage_22477", [this.ptr, methodName, parameter]); }
    BroadcastMessage_methodName(methodName) { window.ctx.call("UnityEngine.GameObject", "BroadcastMessage_22478", [this.ptr, methodName]); }
    static BroadcastMessage_Injected(_unity_self, methodName, parameter, options) { window.ctx.call("UnityEngine.GameObject", "BroadcastMessage_Injected", [_unity_self, methodName, parameter, options]); }
    CompareTag_tag(tag) { return window.ctx.call("UnityEngine.GameObject", "CompareTag_22464", [this.ptr, tag]).val() === 1; }
    CompareTag_tag(tag) { return window.ctx.call("UnityEngine.GameObject", "CompareTag_22465", [this.ptr, tag]).val() === 1; }
    CompareTagHandle_Internal(tag) { return window.ctx.call("UnityEngine.GameObject", "CompareTagHandle_Internal", [this.ptr, tag]).val() === 1; }
    static CompareTagHandle_Internal_Injected(_unity_self, tag) { return window.ctx.call("UnityEngine.GameObject", "CompareTagHandle_Internal_Injected", [_unity_self, tag]).val() === 1; }
    CompareTag_Internal(tag) { return window.ctx.call("UnityEngine.GameObject", "CompareTag_Internal", [this.ptr, tag]).val() === 1; }
    static CompareTag_Internal_Injected(_unity_self, tag) { return window.ctx.call("UnityEngine.GameObject", "CompareTag_Internal_Injected", [_unity_self, tag]).val() === 1; }
    static CreatePrimitive(type) { return new GameObject(window.ctx.call("UnityEngine.GameObject", "CreatePrimitive", [type])); }
    static CreatePrimitive_Injected(type) { return (()=>{
					let structptr_6b4626 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.GameObject", "CreatePrimitive_Injected", [structptr_6b4626, type]);
					return structptr_6b4626;
				})(); }
    static Find(name) { return new GameObject(window.ctx.call("UnityEngine.GameObject", "Find", [name])); }
    static FindGameObjectWithTag(tag) { return new GameObject(window.ctx.call("UnityEngine.GameObject", "FindGameObjectWithTag", [tag])); }
    static FindGameObjectWithTag_Injected(tag) { return (()=>{
					let structptr_4e2fb3 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.GameObject", "FindGameObjectWithTag_Injected", [structptr_4e2fb3, tag]);
					return structptr_4e2fb3;
				})(); }
    static FindGameObjectsWithTag_tag_results(tag, results) { window.ctx.call("UnityEngine.GameObject", "FindGameObjectsWithTag_22444", [tag, results]); }
    static FindGameObjectsWithTag_tag(tag) { return window.ctx.call("UnityEngine.GameObject", "FindGameObjectsWithTag_22469", [tag]); }
    static FindGameObjectsWithTagForListInternal(tag, results) { window.ctx.call("UnityEngine.GameObject", "FindGameObjectsWithTagForListInternal", [tag, results]); }
    static FindGameObjectsWithTagForListInternal_Injected(tag, results) { window.ctx.call("UnityEngine.GameObject", "FindGameObjectsWithTagForListInternal_Injected", [tag, results]); }
    static FindGameObjectsWithTag_Injected(tag) { return window.ctx.call("UnityEngine.GameObject", "FindGameObjectsWithTag_Injected", [tag]); }
    static FindWithTag(tag) { return new GameObject(window.ctx.call("UnityEngine.GameObject", "FindWithTag", [tag])); }
    static Find_Injected(name) { return (()=>{
					let structptr_2ba912 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.GameObject", "Find_Injected", [structptr_2ba912, name]);
					return structptr_2ba912;
				})(); }
    GetComponent() { return window.ctx.call("UnityEngine.GameObject", "GetComponent", [this.ptr]); }
    GetComponent_type(type) { return new Component(window.ctx.call("UnityEngine.GameObject", "GetComponent_22423", [this.ptr, type])); }
    GetComponent_type(type) { return new Component(window.ctx.call("UnityEngine.GameObject", "GetComponent_22427", [this.ptr, type])); }
    GetComponentAtIndex_index(index) { return new Component(window.ctx.call("UnityEngine.GameObject", "GetComponentAtIndex_22453", [this.ptr, index])); }
    GetComponentAtIndex(index) { return window.ctx.call("UnityEngine.GameObject", "GetComponentAtIndex", [this.ptr, index]); }
    GetComponentByName(type) { return new Component(window.ctx.call("UnityEngine.GameObject", "GetComponentByName", [this.ptr, type])); }
    GetComponentByNameWithCase(type, caseSensitive) { return new Component(window.ctx.call("UnityEngine.GameObject", "GetComponentByNameWithCase", [this.ptr, type, caseSensitive])); }
    static GetComponentByNameWithCase_Injected(_unity_self, type, caseSensitive) { return (()=>{
					let structptr_05f8c8 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.GameObject", "GetComponentByNameWithCase_Injected", [structptr_05f8c8, _unity_self, type, caseSensitive]);
					return structptr_05f8c8;
				})(); }
    static GetComponentByName_Injected(_unity_self, type) { return (()=>{
					let structptr_2f40a2 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.GameObject", "GetComponentByName_Injected", [structptr_2f40a2, _unity_self, type]);
					return structptr_2f40a2;
				})(); }
    GetComponentCount() { return window.ctx.call("UnityEngine.GameObject", "GetComponentCount", [this.ptr]).val(); }
    static GetComponentCount_Injected(_unity_self) { return window.ctx.call("UnityEngine.GameObject", "GetComponentCount_Injected", [_unity_self]).val(); }
    GetComponentFastPath(type, oneFurtherThanResultValue) { window.ctx.call("UnityEngine.GameObject", "GetComponentFastPath", [this.ptr, type, oneFurtherThanResultValue]); }
    static GetComponentFastPath_Injected(_unity_self, type, oneFurtherThanResultValue) { window.ctx.call("UnityEngine.GameObject", "GetComponentFastPath_Injected", [_unity_self, type, oneFurtherThanResultValue]); }
    GetComponentInChildren_type_includeInactive(type, includeInactive) { return new Component(window.ctx.call("UnityEngine.GameObject", "GetComponentInChildren_22428", [this.ptr, type, includeInactive])); }
    GetComponentInChildren_type(type) { return new Component(window.ctx.call("UnityEngine.GameObject", "GetComponentInChildren_22429", [this.ptr, type])); }
    GetComponentInChildren() { return window.ctx.call("UnityEngine.GameObject", "GetComponentInChildren", [this.ptr]); }
    GetComponentInChildren(includeInactive) { return window.ctx.call("UnityEngine.GameObject", "GetComponentInChildren", [this.ptr, includeInactive]); }
    static GetComponentInChildren_Injected(_unity_self, type, includeInactive) { return (()=>{
					let structptr_477475 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.GameObject", "GetComponentInChildren_Injected", [structptr_477475, _unity_self, type, includeInactive]);
					return structptr_477475;
				})(); }
    GetComponentInParent_type_includeInactive(type, includeInactive) { return new Component(window.ctx.call("UnityEngine.GameObject", "GetComponentInParent_22430", [this.ptr, type, includeInactive])); }
    GetComponentInParent_type(type) { return new Component(window.ctx.call("UnityEngine.GameObject", "GetComponentInParent_22431", [this.ptr, type])); }
    GetComponentInParent() { return window.ctx.call("UnityEngine.GameObject", "GetComponentInParent", [this.ptr]); }
    GetComponentInParent(includeInactive) { return window.ctx.call("UnityEngine.GameObject", "GetComponentInParent", [this.ptr, includeInactive]); }
    static GetComponentInParent_Injected(_unity_self, type, includeInactive) { return (()=>{
					let structptr_e27955 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.GameObject", "GetComponentInParent_Injected", [structptr_e27955, _unity_self, type, includeInactive]);
					return structptr_e27955;
				})(); }
    GetComponentIndex(component) { return window.ctx.call("UnityEngine.GameObject", "GetComponentIndex", [this.ptr, component]).val(); }
    static GetComponentIndex_Injected(_unity_self, component) { return window.ctx.call("UnityEngine.GameObject", "GetComponentIndex_Injected", [_unity_self, component]).val(); }
    static GetComponent_Injected(_unity_self, type) { return (()=>{
					let structptr_92d4d0 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.GameObject", "GetComponent_Injected", [structptr_92d4d0, _unity_self, type]);
					return structptr_92d4d0;
				})(); }
    GetComponents_type(type) { return window.ctx.call("UnityEngine.GameObject", "GetComponents_22433", [this.ptr, type]); }
    GetComponents() { return window.ctx.call("UnityEngine.GameObject", "GetComponents", [this.ptr]); }
    GetComponents_type_results(type, results) { window.ctx.call("UnityEngine.GameObject", "GetComponents_22434", [this.ptr, type, results]); }
    GetComponents(results) { window.ctx.call("UnityEngine.GameObject", "GetComponents", [this.ptr, results]); }
    GetComponentsInChildren_type(type) { return window.ctx.call("UnityEngine.GameObject", "GetComponentsInChildren_22435", [this.ptr, type]); }
    GetComponentsInChildren_type_includeInactive(type, includeInactive) { return window.ctx.call("UnityEngine.GameObject", "GetComponentsInChildren_22436", [this.ptr, type, includeInactive]); }
    GetComponentsInChildren(includeInactive) { return window.ctx.call("UnityEngine.GameObject", "GetComponentsInChildren", [this.ptr, includeInactive]); }
    GetComponentsInChildren(includeInactive, results) { window.ctx.call("UnityEngine.GameObject", "GetComponentsInChildren", [this.ptr, includeInactive, results]); }
    GetComponentsInChildren() { return window.ctx.call("UnityEngine.GameObject", "GetComponentsInChildren", [this.ptr]); }
    GetComponentsInChildren(results) { window.ctx.call("UnityEngine.GameObject", "GetComponentsInChildren", [this.ptr, results]); }
    GetComponentsInParent_type(type) { return window.ctx.call("UnityEngine.GameObject", "GetComponentsInParent_22437", [this.ptr, type]); }
    GetComponentsInParent_type_includeInactive(type, includeInactive) { return window.ctx.call("UnityEngine.GameObject", "GetComponentsInParent_22438", [this.ptr, type, includeInactive]); }
    GetComponentsInParent(includeInactive, results) { window.ctx.call("UnityEngine.GameObject", "GetComponentsInParent", [this.ptr, includeInactive, results]); }
    GetComponentsInParent(includeInactive) { return window.ctx.call("UnityEngine.GameObject", "GetComponentsInParent", [this.ptr, includeInactive]); }
    GetComponentsInParent() { return window.ctx.call("UnityEngine.GameObject", "GetComponentsInParent", [this.ptr]); }
    GetComponentsInternal(type, useSearchTypeAsArrayReturnType, recursive, includeInactive, reverse, resultList) { return window.ctx.call("UnityEngine.GameObject", "GetComponentsInternal", [this.ptr, type, useSearchTypeAsArrayReturnType, recursive, includeInactive, reverse, resultList]); }
    static GetComponentsInternal_Injected(_unity_self, type, useSearchTypeAsArrayReturnType, recursive, includeInactive, reverse, resultList) { return window.ctx.call("UnityEngine.GameObject", "GetComponentsInternal_Injected", [_unity_self, type, useSearchTypeAsArrayReturnType, recursive, includeInactive, reverse, resultList]); }
    static GetScene_instanceID(instanceID) { return (()=>{
					let structptr_d3250d = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.GameObject", "GetScene_22492", [structptr_d3250d, instanceID]);
					return structptr_d3250d;
				})(); }
    static GetScene_entityId(entityId) { return (()=>{
					let structptr_ce104c = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.GameObject", "GetScene_22494", [structptr_ce104c, entityId]);
					return structptr_ce104c;
				})(); }
    static GetSceneInternal(entityId) { return (()=>{
					let structptr_29c038 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.GameObject", "GetSceneInternal", [structptr_29c038, entityId]);
					return structptr_29c038;
				})(); }
    static GetSceneInternal_Injected(entityId, ret) { window.ctx.call("UnityEngine.GameObject", "GetSceneInternal_Injected", [entityId, ret]); }
    static InstantiateGameObjects_sourceInstanceID_newInstanceIDs_newTransformInstanceIDs_count_destinationScene(sourceInstanceID, newInstanceIDs, newTransformInstanceIDs, count, destinationScene) { window.ctx.call("UnityEngine.GameObject", "InstantiateGameObjects_22489", [sourceInstanceID, newInstanceIDs, newTransformInstanceIDs, count, destinationScene]); }
    static InstantiateGameObjects_sourceInstanceID_count_newInstanceIDs_newTransformInstanceIDs_destinationScene(sourceInstanceID, count, newInstanceIDs, newTransformInstanceIDs, destinationScene) { window.ctx.call("UnityEngine.GameObject", "InstantiateGameObjects_22490", [sourceInstanceID, count, newInstanceIDs, newTransformInstanceIDs, destinationScene]); }
    static InstantiateGameObjects_sourceEntityId_count_newEntityIds_newTransformEntityIds_destinationScene(sourceEntityId, count, newEntityIds, newTransformEntityIds, destinationScene) { window.ctx.call("UnityEngine.GameObject", "InstantiateGameObjects_22491", [sourceEntityId, count, newEntityIds, newTransformEntityIds, destinationScene]); }
    static InstantiateGameObjects_Injected(sourceInstanceID, newInstanceIDs, newTransformInstanceIDs, count, destinationScene) { window.ctx.call("UnityEngine.GameObject", "InstantiateGameObjects_Injected", [sourceInstanceID, newInstanceIDs, newTransformInstanceIDs, count, destinationScene]); }
    Internal_AddComponentWithType(componentType) { return new Component(window.ctx.call("UnityEngine.GameObject", "Internal_AddComponentWithType", [this.ptr, componentType])); }
    static Internal_AddComponentWithType_Injected(_unity_self, componentType) { return (()=>{
					let structptr_2d8782 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.GameObject", "Internal_AddComponentWithType_Injected", [structptr_2d8782, _unity_self, componentType]);
					return structptr_2d8782;
				})(); }
    static Internal_CreateGameObject(self, name) { window.ctx.call("UnityEngine.GameObject", "Internal_CreateGameObject", [self, name]); }
    static Internal_CreateGameObject_Injected(self, name) { window.ctx.call("UnityEngine.GameObject", "Internal_CreateGameObject_Injected", [self, name]); }
    QueryComponentAtIndex(index) { return new Component(window.ctx.call("UnityEngine.GameObject", "QueryComponentAtIndex", [this.ptr, index])); }
    static QueryComponentAtIndex_Injected(_unity_self, index) { return (()=>{
					let structptr_7253cc = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.GameObject", "QueryComponentAtIndex_Injected", [structptr_7253cc, _unity_self, index]);
					return structptr_7253cc;
				})(); }
    SendMessage_methodName_options(methodName, options) { window.ctx.call("UnityEngine.GameObject", "SendMessage_22446", [this.ptr, methodName, options]); }
    SendMessage_methodName_value_options(methodName, value, options) { window.ctx.call("UnityEngine.GameObject", "SendMessage_22473", [this.ptr, methodName, value, options]); }
    SendMessage_methodName_value(methodName, value) { window.ctx.call("UnityEngine.GameObject", "SendMessage_22474", [this.ptr, methodName, value]); }
    SendMessage_methodName(methodName) { window.ctx.call("UnityEngine.GameObject", "SendMessage_22475", [this.ptr, methodName]); }
    SendMessageUpwards_methodName_options(methodName, options) { window.ctx.call("UnityEngine.GameObject", "SendMessageUpwards_22445", [this.ptr, methodName, options]); }
    SendMessageUpwards_methodName_value_options(methodName, value, options) { window.ctx.call("UnityEngine.GameObject", "SendMessageUpwards_22470", [this.ptr, methodName, value, options]); }
    SendMessageUpwards_methodName_value(methodName, value) { window.ctx.call("UnityEngine.GameObject", "SendMessageUpwards_22471", [this.ptr, methodName, value]); }
    SendMessageUpwards_methodName(methodName) { window.ctx.call("UnityEngine.GameObject", "SendMessageUpwards_22472", [this.ptr, methodName]); }
    static SendMessageUpwards_Injected(_unity_self, methodName, value, options) { window.ctx.call("UnityEngine.GameObject", "SendMessageUpwards_Injected", [_unity_self, methodName, value, options]); }
    static SendMessage_Injected(_unity_self, methodName, value, options) { window.ctx.call("UnityEngine.GameObject", "SendMessage_Injected", [_unity_self, methodName, value, options]); }
    SetActive(value) { window.ctx.call("UnityEngine.GameObject", "SetActive", [this.ptr, value]); }
    SetActiveRecursively(state) { window.ctx.call("UnityEngine.GameObject", "SetActiveRecursively", [this.ptr, state]); }
    static SetActiveRecursively_Injected(_unity_self, state) { window.ctx.call("UnityEngine.GameObject", "SetActiveRecursively_Injected", [_unity_self, state]); }
    static SetActive_Injected(_unity_self, value) { window.ctx.call("UnityEngine.GameObject", "SetActive_Injected", [_unity_self, value]); }
    static SetGameObjectsActive_instanceIds_instanceCount_active(instanceIds, instanceCount, active) { window.ctx.call("UnityEngine.GameObject", "SetGameObjectsActive_22484", [instanceIds, instanceCount, active]); }
    static SetGameObjectsActive_instanceIDs_active(instanceIDs, active) { window.ctx.call("UnityEngine.GameObject", "SetGameObjectsActive_22485", [instanceIDs, active]); }
    static SetGameObjectsActive_entityIds_active(entityIds, active) { window.ctx.call("UnityEngine.GameObject", "SetGameObjectsActive_22486", [entityIds, active]); }
    static SetGameObjectsActive_instanceIDs_active(instanceIDs, active) { window.ctx.call("UnityEngine.GameObject", "SetGameObjectsActive_22487", [instanceIDs, active]); }
    static SetGameObjectsActive_entityIds_active(entityIds, active) { window.ctx.call("UnityEngine.GameObject", "SetGameObjectsActive_22488", [entityIds, active]); }
    TryGetComponent(component) { return window.ctx.call("UnityEngine.GameObject", "TryGetComponent", [this.ptr, component]).val() === 1; }
    TryGetComponent_type_component(type, component) { return window.ctx.call("UnityEngine.GameObject", "TryGetComponent_22439", [this.ptr, type, component]).val() === 1; }
    TryGetComponentFastPath(type, oneFurtherThanResultValue) { window.ctx.call("UnityEngine.GameObject", "TryGetComponentFastPath", [this.ptr, type, oneFurtherThanResultValue]); }
    static TryGetComponentFastPath_Injected(_unity_self, type, oneFurtherThanResultValue) { window.ctx.call("UnityEngine.GameObject", "TryGetComponentFastPath_Injected", [_unity_self, type, oneFurtherThanResultValue]); }
    TryGetComponentInternal(type) { return new Component(window.ctx.call("UnityEngine.GameObject", "TryGetComponentInternal", [this.ptr, type])); }
    static TryGetComponentInternal_Injected(_unity_self, type) { return (()=>{
					let structptr_798115 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.GameObject", "TryGetComponentInternal_Injected", [structptr_798115, _unity_self, type]);
					return structptr_798115;
				})(); }
    static get_activeInHierarchy_Injected(_unity_self) { return window.ctx.call("UnityEngine.GameObject", "get_activeInHierarchy_Injected", [_unity_self]).val() === 1; }
    static get_activeSelf_Injected(_unity_self) { return window.ctx.call("UnityEngine.GameObject", "get_activeSelf_Injected", [_unity_self]).val() === 1; }
    static get_active_Injected(_unity_self) { return window.ctx.call("UnityEngine.GameObject", "get_active_Injected", [_unity_self]).val() === 1; }
    static get_isStaticBatchable_Injected(_unity_self) { return window.ctx.call("UnityEngine.GameObject", "get_isStaticBatchable_Injected", [_unity_self]).val() === 1; }
    static get_isStatic_Injected(_unity_self) { return window.ctx.call("UnityEngine.GameObject", "get_isStatic_Injected", [_unity_self]).val() === 1; }
    static get_layer_Injected(_unity_self) { return window.ctx.call("UnityEngine.GameObject", "get_layer_Injected", [_unity_self]).val(); }
    static get_sceneCullingMask_Injected(_unity_self) { return window.ctx.call("UnityEngine.GameObject", "get_sceneCullingMask_Injected", [_unity_self]).val(); }
    static get_scene_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.GameObject", "get_scene_Injected", [_unity_self, ret]); }
    static get_tag_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.GameObject", "get_tag_Injected", [_unity_self, ret]); }
    static get_transformHandle_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.GameObject", "get_transformHandle_Injected", [_unity_self, ret]); }
    static get_transform_Injected(_unity_self) { return (()=>{
					let structptr_afbcb6 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.GameObject", "get_transform_Injected", [structptr_afbcb6, _unity_self]);
					return structptr_afbcb6;
				})(); }
    static set_active_Injected(_unity_self, value) { window.ctx.call("UnityEngine.GameObject", "set_active_Injected", [_unity_self, value]); }
    static set_isStatic_Injected(_unity_self, value) { window.ctx.call("UnityEngine.GameObject", "set_isStatic_Injected", [_unity_self, value]); }
    static set_layer_Injected(_unity_self, value) { window.ctx.call("UnityEngine.GameObject", "set_layer_Injected", [_unity_self, value]); }
    static set_tag_Injected(_unity_self, value) { window.ctx.call("UnityEngine.GameObject", "set_tag_Injected", [_unity_self, value]); }
}

export class Animator {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get allowConstantClipSamplingOptimization() { return window.ctx.call("UnityEngine.Animator", "get_allowConstantClipSamplingOptimization", [this.ptr]).val() === 1; }
    set allowConstantClipSamplingOptimization(v) { window.ctx.call("UnityEngine.Animator", "set_allowConstantClipSamplingOptimization", [this.ptr, v]); }
    get angularVelocity() { return (()=>{
					let structptr_ec765e = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Animator", "get_angularVelocity", [structptr_ec765e, this.ptr]);
					return structptr_ec765e;
				})(); }
    get animatePhysics() { return window.ctx.call("UnityEngine.Animator", "get_animatePhysics", [this.ptr]).val() === 1; }
    set animatePhysics(v) { window.ctx.call("UnityEngine.Animator", "set_animatePhysics", [this.ptr, v]); }
    get applyRootMotion() { return window.ctx.call("UnityEngine.Animator", "get_applyRootMotion", [this.ptr]).val() === 1; }
    set applyRootMotion(v) { window.ctx.call("UnityEngine.Animator", "set_applyRootMotion", [this.ptr, v]); }
    get avatar() { return new Avatar(window.ctx.call("UnityEngine.Animator", "get_avatar", [this.ptr])); }
    set avatar(v) { window.ctx.call("UnityEngine.Animator", "set_avatar", [this.ptr, v]); }
    get avatarRoot() { return new Transform(window.ctx.call("UnityEngine.Animator", "get_avatarRoot", [this.ptr])); }
    get bodyPosition() { return (()=>{
					let structptr_3061ac = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Animator", "get_bodyPosition", [structptr_3061ac, this.ptr]);
					return structptr_3061ac;
				})(); }
    set bodyPosition(v) { window.ctx.call("UnityEngine.Animator", "set_bodyPosition", [this.ptr, v]); }
    get bodyPositionInternal() { return (()=>{
					let structptr_5c01e8 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Animator", "get_bodyPositionInternal", [structptr_5c01e8, this.ptr]);
					return structptr_5c01e8;
				})(); }
    set bodyPositionInternal(v) { window.ctx.call("UnityEngine.Animator", "set_bodyPositionInternal", [this.ptr, v]); }
    get bodyRotation() { return (()=>{
					let structptr_d1e5fe = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Animator", "get_bodyRotation", [structptr_d1e5fe, this.ptr]);
					return structptr_d1e5fe;
				})(); }
    set bodyRotation(v) { window.ctx.call("UnityEngine.Animator", "set_bodyRotation", [this.ptr, v]); }
    get bodyRotationInternal() { return (()=>{
					let structptr_a82b12 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Animator", "get_bodyRotationInternal", [structptr_a82b12, this.ptr]);
					return structptr_a82b12;
				})(); }
    set bodyRotationInternal(v) { window.ctx.call("UnityEngine.Animator", "set_bodyRotationInternal", [this.ptr, v]); }
    get cullingMode() { return new AnimatorCullingMode(window.ctx.call("UnityEngine.Animator", "get_cullingMode", [this.ptr])); }
    set cullingMode(v) { window.ctx.call("UnityEngine.Animator", "set_cullingMode", [this.ptr, v]); }
    get deltaPosition() { return (()=>{
					let structptr_137ae1 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Animator", "get_deltaPosition", [structptr_137ae1, this.ptr]);
					return structptr_137ae1;
				})(); }
    get deltaRotation() { return (()=>{
					let structptr_56edab = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Animator", "get_deltaRotation", [structptr_56edab, this.ptr]);
					return structptr_56edab;
				})(); }
    get feetPivotActive() { return window.ctx.call("UnityEngine.Animator", "get_feetPivotActive", [this.ptr]).val(); }
    set feetPivotActive(v) { window.ctx.call("UnityEngine.Animator", "set_feetPivotActive", [this.ptr, v]); }
    get fireEvents() { return window.ctx.call("UnityEngine.Animator", "get_fireEvents", [this.ptr]).val() === 1; }
    set fireEvents(v) { window.ctx.call("UnityEngine.Animator", "set_fireEvents", [this.ptr, v]); }
    get gravityWeight() { return window.ctx.call("UnityEngine.Animator", "get_gravityWeight", [this.ptr]).val(); }
    get hasBoundPlayables() { return window.ctx.call("UnityEngine.Animator", "get_hasBoundPlayables", [this.ptr]).val() === 1; }
    get hasRootMotion() { return window.ctx.call("UnityEngine.Animator", "get_hasRootMotion", [this.ptr]).val() === 1; }
    get hasTransformHierarchy() { return window.ctx.call("UnityEngine.Animator", "get_hasTransformHierarchy", [this.ptr]).val() === 1; }
    get humanScale() { return window.ctx.call("UnityEngine.Animator", "get_humanScale", [this.ptr]).val(); }
    get isHuman() { return window.ctx.call("UnityEngine.Animator", "get_isHuman", [this.ptr]).val() === 1; }
    get isInitialized() { return window.ctx.call("UnityEngine.Animator", "get_isInitialized", [this.ptr]).val() === 1; }
    get isMatchingTarget() { return window.ctx.call("UnityEngine.Animator", "get_isMatchingTarget", [this.ptr]).val() === 1; }
    get isOptimizable() { return window.ctx.call("UnityEngine.Animator", "get_isOptimizable", [this.ptr]).val() === 1; }
    get isRootPositionOrRotationControlledByCurves() { return window.ctx.call("UnityEngine.Animator", "get_isRootPositionOrRotationControlledByCurves", [this.ptr]).val() === 1; }
    get keepAnimatorControllerStateOnDisable() { return window.ctx.call("UnityEngine.Animator", "get_keepAnimatorControllerStateOnDisable", [this.ptr]).val() === 1; }
    set keepAnimatorControllerStateOnDisable(v) { window.ctx.call("UnityEngine.Animator", "set_keepAnimatorControllerStateOnDisable", [this.ptr, v]); }
    get keepAnimatorStateOnDisable() { return window.ctx.call("UnityEngine.Animator", "get_keepAnimatorStateOnDisable", [this.ptr]).val() === 1; }
    set keepAnimatorStateOnDisable(v) { window.ctx.call("UnityEngine.Animator", "set_keepAnimatorStateOnDisable", [this.ptr, v]); }
    get layerCount() { return window.ctx.call("UnityEngine.Animator", "get_layerCount", [this.ptr]).val(); }
    get layersAffectMassCenter() { return window.ctx.call("UnityEngine.Animator", "get_layersAffectMassCenter", [this.ptr]).val() === 1; }
    set layersAffectMassCenter(v) { window.ctx.call("UnityEngine.Animator", "set_layersAffectMassCenter", [this.ptr, v]); }
    get leftFeetBottomHeight() { return window.ctx.call("UnityEngine.Animator", "get_leftFeetBottomHeight", [this.ptr]).val(); }
    get linearVelocityBlending() { return window.ctx.call("UnityEngine.Animator", "get_linearVelocityBlending", [this.ptr]).val() === 1; }
    set linearVelocityBlending(v) { window.ctx.call("UnityEngine.Animator", "set_linearVelocityBlending", [this.ptr, v]); }
    get logWarnings() { return window.ctx.call("UnityEngine.Animator", "get_logWarnings", [this.ptr]).val() === 1; }
    set logWarnings(v) { window.ctx.call("UnityEngine.Animator", "set_logWarnings", [this.ptr, v]); }
    get parameterCount() { return window.ctx.call("UnityEngine.Animator", "get_parameterCount", [this.ptr]).val(); }
    get parameters() { return window.ctx.call("UnityEngine.Animator", "get_parameters", [this.ptr]); }
    get pivotPosition() { return (()=>{
					let structptr_89f0b8 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Animator", "get_pivotPosition", [structptr_89f0b8, this.ptr]);
					return structptr_89f0b8;
				})(); }
    get pivotWeight() { return window.ctx.call("UnityEngine.Animator", "get_pivotWeight", [this.ptr]).val(); }
    get playableGraph() { return (()=>{
					let structptr_b8f0b6 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Animator", "get_playableGraph", [structptr_b8f0b6, this.ptr]);
					return structptr_b8f0b6;
				})(); }
    get playbackTime() { return window.ctx.call("UnityEngine.Animator", "get_playbackTime", [this.ptr]).val(); }
    set playbackTime(v) { window.ctx.call("UnityEngine.Animator", "set_playbackTime", [this.ptr, v]); }
    get recorderMode() { return new AnimatorRecorderMode(window.ctx.call("UnityEngine.Animator", "get_recorderMode", [this.ptr])); }
    get recorderStartTime() { return window.ctx.call("UnityEngine.Animator", "get_recorderStartTime", [this.ptr]).val(); }
    set recorderStartTime(v) { window.ctx.call("UnityEngine.Animator", "set_recorderStartTime", [this.ptr, v]); }
    get recorderStopTime() { return window.ctx.call("UnityEngine.Animator", "get_recorderStopTime", [this.ptr]).val(); }
    set recorderStopTime(v) { window.ctx.call("UnityEngine.Animator", "set_recorderStopTime", [this.ptr, v]); }
    get rightFeetBottomHeight() { return window.ctx.call("UnityEngine.Animator", "get_rightFeetBottomHeight", [this.ptr]).val(); }
    get rootPosition() { return (()=>{
					let structptr_a1b660 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Animator", "get_rootPosition", [structptr_a1b660, this.ptr]);
					return structptr_a1b660;
				})(); }
    set rootPosition(v) { window.ctx.call("UnityEngine.Animator", "set_rootPosition", [this.ptr, v]); }
    get rootRotation() { return (()=>{
					let structptr_62e31c = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Animator", "get_rootRotation", [structptr_62e31c, this.ptr]);
					return structptr_62e31c;
				})(); }
    set rootRotation(v) { window.ctx.call("UnityEngine.Animator", "set_rootRotation", [this.ptr, v]); }
    get runtimeAnimatorController() { return new RuntimeAnimatorController(window.ctx.call("UnityEngine.Animator", "get_runtimeAnimatorController", [this.ptr])); }
    set runtimeAnimatorController(v) { window.ctx.call("UnityEngine.Animator", "set_runtimeAnimatorController", [this.ptr, v]); }
    get speed() { return window.ctx.call("UnityEngine.Animator", "get_speed", [this.ptr]).val(); }
    set speed(v) { window.ctx.call("UnityEngine.Animator", "set_speed", [this.ptr, v]); }
    get stabilizeFeet() { return window.ctx.call("UnityEngine.Animator", "get_stabilizeFeet", [this.ptr]).val() === 1; }
    set stabilizeFeet(v) { window.ctx.call("UnityEngine.Animator", "set_stabilizeFeet", [this.ptr, v]); }
    get supportsOnAnimatorMove() { return window.ctx.call("UnityEngine.Animator", "get_supportsOnAnimatorMove", [this.ptr]).val() === 1; }
    get targetPosition() { return (()=>{
					let structptr_fc0420 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Animator", "get_targetPosition", [structptr_fc0420, this.ptr]);
					return structptr_fc0420;
				})(); }
    get targetRotation() { return (()=>{
					let structptr_0ad4bf = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Animator", "get_targetRotation", [structptr_0ad4bf, this.ptr]);
					return structptr_0ad4bf;
				})(); }
    get updateMode() { return new AnimatorUpdateMode(window.ctx.call("UnityEngine.Animator", "get_updateMode", [this.ptr])); }
    set updateMode(v) { window.ctx.call("UnityEngine.Animator", "set_updateMode", [this.ptr, v]); }
    get velocity() { return (()=>{
					let structptr_896331 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Animator", "get_velocity", [structptr_896331, this.ptr]);
					return structptr_896331;
				})(); }
    get writeDefaultValuesOnDisable() { return window.ctx.call("UnityEngine.Animator", "get_writeDefaultValuesOnDisable", [this.ptr]).val() === 1; }
    set writeDefaultValuesOnDisable(v) { window.ctx.call("UnityEngine.Animator", "set_writeDefaultValuesOnDisable", [this.ptr, v]); }
    ApplyBuiltinRootMotion() { window.ctx.call("UnityEngine.Animator", "ApplyBuiltinRootMotion", [this.ptr]); }
    static ApplyBuiltinRootMotion_Injected(_unity_self) { window.ctx.call("UnityEngine.Animator", "ApplyBuiltinRootMotion_Injected", [_unity_self]); }
    CheckIfInIKPass() { window.ctx.call("UnityEngine.Animator", "CheckIfInIKPass", [this.ptr]); }
    ClearInternalControllerPlayable() { window.ctx.call("UnityEngine.Animator", "ClearInternalControllerPlayable", [this.ptr]); }
    static ClearInternalControllerPlayable_Injected(_unity_self) { window.ctx.call("UnityEngine.Animator", "ClearInternalControllerPlayable_Injected", [_unity_self]); }
    static ConvertStateMachineBehaviour(rawObjects) { return window.ctx.call("UnityEngine.Animator", "ConvertStateMachineBehaviour", [rawObjects]); }
    CrossFade_stateName_normalizedTransitionDuration_layer_normalizedTimeOffset(stateName, normalizedTransitionDuration, layer, normalizedTimeOffset) { window.ctx.call("UnityEngine.Animator", "CrossFade_17881", [this.ptr, stateName, normalizedTransitionDuration, layer, normalizedTimeOffset]); }
    CrossFade_stateName_normalizedTransitionDuration_layer(stateName, normalizedTransitionDuration, layer) { window.ctx.call("UnityEngine.Animator", "CrossFade_17882", [this.ptr, stateName, normalizedTransitionDuration, layer]); }
    CrossFade_stateName_normalizedTransitionDuration(stateName, normalizedTransitionDuration) { window.ctx.call("UnityEngine.Animator", "CrossFade_17883", [this.ptr, stateName, normalizedTransitionDuration]); }
    CrossFade_stateName_normalizedTransitionDuration_layer_normalizedTimeOffset_normalizedTransitionTime(stateName, normalizedTransitionDuration, layer, normalizedTimeOffset, normalizedTransitionTime) { window.ctx.call("UnityEngine.Animator", "CrossFade_17884", [this.ptr, stateName, normalizedTransitionDuration, layer, normalizedTimeOffset, normalizedTransitionTime]); }
    CrossFade_stateHashName_normalizedTransitionDuration_layer_normalizedTimeOffset_normalizedTransitionTime(stateHashName, normalizedTransitionDuration, layer, normalizedTimeOffset, normalizedTransitionTime) { window.ctx.call("UnityEngine.Animator", "CrossFade_17885", [this.ptr, stateHashName, normalizedTransitionDuration, layer, normalizedTimeOffset, normalizedTransitionTime]); }
    CrossFade_stateHashName_normalizedTransitionDuration_layer_normalizedTimeOffset(stateHashName, normalizedTransitionDuration, layer, normalizedTimeOffset) { window.ctx.call("UnityEngine.Animator", "CrossFade_17886", [this.ptr, stateHashName, normalizedTransitionDuration, layer, normalizedTimeOffset]); }
    CrossFade_stateHashName_normalizedTransitionDuration_layer(stateHashName, normalizedTransitionDuration, layer) { window.ctx.call("UnityEngine.Animator", "CrossFade_17887", [this.ptr, stateHashName, normalizedTransitionDuration, layer]); }
    CrossFade_stateHashName_normalizedTransitionDuration(stateHashName, normalizedTransitionDuration) { window.ctx.call("UnityEngine.Animator", "CrossFade_17888", [this.ptr, stateHashName, normalizedTransitionDuration]); }
    CrossFadeInFixedTime_stateName_fixedTransitionDuration(stateName, fixedTransitionDuration) { window.ctx.call("UnityEngine.Animator", "CrossFadeInFixedTime_17872", [this.ptr, stateName, fixedTransitionDuration]); }
    CrossFadeInFixedTime_stateName_fixedTransitionDuration_layer(stateName, fixedTransitionDuration, layer) { window.ctx.call("UnityEngine.Animator", "CrossFadeInFixedTime_17873", [this.ptr, stateName, fixedTransitionDuration, layer]); }
    CrossFadeInFixedTime_stateName_fixedTransitionDuration_layer_fixedTimeOffset(stateName, fixedTransitionDuration, layer, fixedTimeOffset) { window.ctx.call("UnityEngine.Animator", "CrossFadeInFixedTime_17874", [this.ptr, stateName, fixedTransitionDuration, layer, fixedTimeOffset]); }
    CrossFadeInFixedTime_stateName_fixedTransitionDuration_layer_fixedTimeOffset_normalizedTransitionTime(stateName, fixedTransitionDuration, layer, fixedTimeOffset, normalizedTransitionTime) { window.ctx.call("UnityEngine.Animator", "CrossFadeInFixedTime_17875", [this.ptr, stateName, fixedTransitionDuration, layer, fixedTimeOffset, normalizedTransitionTime]); }
    CrossFadeInFixedTime_stateHashName_fixedTransitionDuration_layer_fixedTimeOffset(stateHashName, fixedTransitionDuration, layer, fixedTimeOffset) { window.ctx.call("UnityEngine.Animator", "CrossFadeInFixedTime_17876", [this.ptr, stateHashName, fixedTransitionDuration, layer, fixedTimeOffset]); }
    CrossFadeInFixedTime_stateHashName_fixedTransitionDuration_layer(stateHashName, fixedTransitionDuration, layer) { window.ctx.call("UnityEngine.Animator", "CrossFadeInFixedTime_17877", [this.ptr, stateHashName, fixedTransitionDuration, layer]); }
    CrossFadeInFixedTime_stateHashName_fixedTransitionDuration(stateHashName, fixedTransitionDuration) { window.ctx.call("UnityEngine.Animator", "CrossFadeInFixedTime_17878", [this.ptr, stateHashName, fixedTransitionDuration]); }
    CrossFadeInFixedTime_stateHashName_fixedTransitionDuration_layer_fixedTimeOffset_normalizedTransitionTime(stateHashName, fixedTransitionDuration, layer, fixedTimeOffset, normalizedTransitionTime) { window.ctx.call("UnityEngine.Animator", "CrossFadeInFixedTime_17879", [this.ptr, stateHashName, fixedTransitionDuration, layer, fixedTimeOffset, normalizedTransitionTime]); }
    static CrossFadeInFixedTime_Injected(_unity_self, stateHashName, fixedTransitionDuration, layer, fixedTimeOffset, normalizedTransitionTime) { window.ctx.call("UnityEngine.Animator", "CrossFadeInFixedTime_Injected", [_unity_self, stateHashName, fixedTransitionDuration, layer, fixedTimeOffset, normalizedTransitionTime]); }
    static CrossFade_Injected(_unity_self, stateHashName, normalizedTransitionDuration, layer, normalizedTimeOffset, normalizedTransitionTime) { window.ctx.call("UnityEngine.Animator", "CrossFade_Injected", [_unity_self, stateHashName, normalizedTransitionDuration, layer, normalizedTimeOffset, normalizedTransitionTime]); }
    EvaluateController_pointer() { window.ctx.call("UnityEngine.Animator", "EvaluateController_17969", [this.ptr]); }
    EvaluateController_deltaTime(deltaTime) { window.ctx.call("UnityEngine.Animator", "EvaluateController_17970", [this.ptr, deltaTime]); }
    static EvaluateController_Injected(_unity_self, deltaTime) { window.ctx.call("UnityEngine.Animator", "EvaluateController_Injected", [_unity_self, deltaTime]); }
    ForceStateNormalizedTime(normalizedTime) { window.ctx.call("UnityEngine.Animator", "ForceStateNormalizedTime", [this.ptr, normalizedTime]); }
    GetAnimatorClipInfoCount(layerIndex, current) { return window.ctx.call("UnityEngine.Animator", "GetAnimatorClipInfoCount", [this.ptr, layerIndex, current]).val(); }
    static GetAnimatorClipInfoCount_Injected(_unity_self, layerIndex, current) { return window.ctx.call("UnityEngine.Animator", "GetAnimatorClipInfoCount_Injected", [_unity_self, layerIndex, current]).val(); }
    GetAnimatorClipInfoInternal(layerIndex, isCurrent, clips) { window.ctx.call("UnityEngine.Animator", "GetAnimatorClipInfoInternal", [this.ptr, layerIndex, isCurrent, clips]); }
    static GetAnimatorClipInfoInternal_Injected(_unity_self, layerIndex, isCurrent, clips) { window.ctx.call("UnityEngine.Animator", "GetAnimatorClipInfoInternal_Injected", [_unity_self, layerIndex, isCurrent, clips]); }
    GetAnimatorStateInfo(layerIndex, stateInfoIndex, info) { window.ctx.call("UnityEngine.Animator", "GetAnimatorStateInfo", [this.ptr, layerIndex, stateInfoIndex, info]); }
    static GetAnimatorStateInfo_Injected(_unity_self, layerIndex, stateInfoIndex, info) { window.ctx.call("UnityEngine.Animator", "GetAnimatorStateInfo_Injected", [_unity_self, layerIndex, stateInfoIndex, info]); }
    GetAnimatorStateName(layerIndex, current) { return window.ctx.call("UnityEngine.Animator", "GetAnimatorStateName", [this.ptr, layerIndex, current]); }
    static GetAnimatorStateName_Injected(_unity_self, layerIndex, current, ret) { window.ctx.call("UnityEngine.Animator", "GetAnimatorStateName_Injected", [_unity_self, layerIndex, current, ret]); }
    GetAnimatorTransitionInfo_layerIndex_info(layerIndex, info) { window.ctx.call("UnityEngine.Animator", "GetAnimatorTransitionInfo_17844", [this.ptr, layerIndex, info]); }
    GetAnimatorTransitionInfo_layerIndex(layerIndex) { return (()=>{
					let structptr_ab9267 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Animator", "GetAnimatorTransitionInfo_17845", [structptr_ab9267, this.ptr, layerIndex]);
					return structptr_ab9267;
				})(); }
    static GetAnimatorTransitionInfo_Injected(_unity_self, layerIndex, info) { window.ctx.call("UnityEngine.Animator", "GetAnimatorTransitionInfo_Injected", [_unity_self, layerIndex, info]); }
    GetBehaviour_type(type) { return new ScriptableObject(window.ctx.call("UnityEngine.Animator", "GetBehaviour_17830", [this.ptr, type])); }
    GetBehaviour() { return window.ctx.call("UnityEngine.Animator", "GetBehaviour", [this.ptr]); }
    static GetBehaviour_Injected(_unity_self, type) { return (()=>{
					let structptr_4449d7 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Animator", "GetBehaviour_Injected", [structptr_4449d7, _unity_self, type]);
					return structptr_4449d7;
				})(); }
    GetBehaviours() { return window.ctx.call("UnityEngine.Animator", "GetBehaviours", [this.ptr]); }
    GetBehaviours_fullPathHash_layerIndex(fullPathHash, layerIndex) { return window.ctx.call("UnityEngine.Animator", "GetBehaviours_17832", [this.ptr, fullPathHash, layerIndex]); }
    GetBoneTransform(humanBoneId) { return new Transform(window.ctx.call("UnityEngine.Animator", "GetBoneTransform", [this.ptr, humanBoneId])); }
    GetBoneTransformInternal(humanBoneId) { return new Transform(window.ctx.call("UnityEngine.Animator", "GetBoneTransformInternal", [this.ptr, humanBoneId])); }
    static GetBoneTransformInternal_Injected(_unity_self, humanBoneId) { return (()=>{
					let structptr_bee248 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Animator", "GetBoneTransformInternal_Injected", [structptr_bee248, _unity_self, humanBoneId]);
					return structptr_bee248;
				})(); }
    GetBool_name(name) { return window.ctx.call("UnityEngine.Animator", "GetBool_17754", [this.ptr, name]).val() === 1; }
    GetBool_id(id) { return window.ctx.call("UnityEngine.Animator", "GetBool_17755", [this.ptr, id]).val() === 1; }
    GetBoolID(id) { return window.ctx.call("UnityEngine.Animator", "GetBoolID", [this.ptr, id]).val() === 1; }
    static GetBoolID_Injected(_unity_self, id) { return window.ctx.call("UnityEngine.Animator", "GetBoolID_Injected", [_unity_self, id]).val() === 1; }
    GetBoolString(name) { return window.ctx.call("UnityEngine.Animator", "GetBoolString", [this.ptr, name]).val() === 1; }
    static GetBoolString_Injected(_unity_self, name) { return window.ctx.call("UnityEngine.Animator", "GetBoolString_Injected", [_unity_self, name]).val() === 1; }
    GetCurrentAnimatorClipInfo_layerIndex(layerIndex) { return window.ctx.call("UnityEngine.Animator", "GetCurrentAnimatorClipInfo_17849", [this.ptr, layerIndex]); }
    GetCurrentAnimatorClipInfo_layerIndex_clips(layerIndex, clips) { window.ctx.call("UnityEngine.Animator", "GetCurrentAnimatorClipInfo_17851", [this.ptr, layerIndex, clips]); }
    GetCurrentAnimatorClipInfoCount(layerIndex) { return window.ctx.call("UnityEngine.Animator", "GetCurrentAnimatorClipInfoCount", [this.ptr, layerIndex]).val(); }
    static GetCurrentAnimatorClipInfo_Injected(_unity_self, layerIndex) { return window.ctx.call("UnityEngine.Animator", "GetCurrentAnimatorClipInfo_Injected", [_unity_self, layerIndex]); }
    GetCurrentAnimatorStateInfo(layerIndex) { return (()=>{
					let structptr_84da9f = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Animator", "GetCurrentAnimatorStateInfo", [structptr_84da9f, this.ptr, layerIndex]);
					return structptr_84da9f;
				})(); }
    GetCurrentGraph(graph) { window.ctx.call("UnityEngine.Animator", "GetCurrentGraph", [this.ptr, graph]); }
    static GetCurrentGraph_Injected(_unity_self, graph) { window.ctx.call("UnityEngine.Animator", "GetCurrentGraph_Injected", [_unity_self, graph]); }
    GetCurrentStateName(layerIndex) { return window.ctx.call("UnityEngine.Animator", "GetCurrentStateName", [this.ptr, layerIndex]); }
    GetFloat_name(name) { return window.ctx.call("UnityEngine.Animator", "GetFloat_17748", [this.ptr, name]).val(); }
    GetFloat_id(id) { return window.ctx.call("UnityEngine.Animator", "GetFloat_17749", [this.ptr, id]).val(); }
    GetFloatID(id) { return window.ctx.call("UnityEngine.Animator", "GetFloatID", [this.ptr, id]).val(); }
    static GetFloatID_Injected(_unity_self, id) { return window.ctx.call("UnityEngine.Animator", "GetFloatID_Injected", [_unity_self, id]).val(); }
    GetFloatString(name) { return window.ctx.call("UnityEngine.Animator", "GetFloatString", [this.ptr, name]).val(); }
    static GetFloatString_Injected(_unity_self, name) { return window.ctx.call("UnityEngine.Animator", "GetFloatString_Injected", [_unity_self, name]).val(); }
    GetGoalPosition(goal) { return (()=>{
					let structptr_23a352 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Animator", "GetGoalPosition", [structptr_23a352, this.ptr, goal]);
					return structptr_23a352;
				})(); }
    static GetGoalPosition_Injected(_unity_self, goal, ret) { window.ctx.call("UnityEngine.Animator", "GetGoalPosition_Injected", [_unity_self, goal, ret]); }
    GetGoalRotation(goal) { return (()=>{
					let structptr_b3ce26 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Animator", "GetGoalRotation", [structptr_b3ce26, this.ptr, goal]);
					return structptr_b3ce26;
				})(); }
    static GetGoalRotation_Injected(_unity_self, goal, ret) { window.ctx.call("UnityEngine.Animator", "GetGoalRotation_Injected", [_unity_self, goal, ret]); }
    GetGoalWeightPosition(goal) { return window.ctx.call("UnityEngine.Animator", "GetGoalWeightPosition", [this.ptr, goal]).val(); }
    static GetGoalWeightPosition_Injected(_unity_self, goal) { return window.ctx.call("UnityEngine.Animator", "GetGoalWeightPosition_Injected", [_unity_self, goal]).val(); }
    GetGoalWeightRotation(goal) { return window.ctx.call("UnityEngine.Animator", "GetGoalWeightRotation", [this.ptr, goal]).val(); }
    static GetGoalWeightRotation_Injected(_unity_self, goal) { return window.ctx.call("UnityEngine.Animator", "GetGoalWeightRotation_Injected", [_unity_self, goal]).val(); }
    GetHintPosition(hint) { return (()=>{
					let structptr_5bfccd = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Animator", "GetHintPosition", [structptr_5bfccd, this.ptr, hint]);
					return structptr_5bfccd;
				})(); }
    static GetHintPosition_Injected(_unity_self, hint, ret) { window.ctx.call("UnityEngine.Animator", "GetHintPosition_Injected", [_unity_self, hint, ret]); }
    GetHintWeightPosition(hint) { return window.ctx.call("UnityEngine.Animator", "GetHintWeightPosition", [this.ptr, hint]).val(); }
    static GetHintWeightPosition_Injected(_unity_self, hint) { return window.ctx.call("UnityEngine.Animator", "GetHintWeightPosition_Injected", [_unity_self, hint]).val(); }
    GetIKHintPosition(hint) { return (()=>{
					let structptr_08b332 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Animator", "GetIKHintPosition", [structptr_08b332, this.ptr, hint]);
					return structptr_08b332;
				})(); }
    GetIKHintPositionWeight(hint) { return window.ctx.call("UnityEngine.Animator", "GetIKHintPositionWeight", [this.ptr, hint]).val(); }
    GetIKPosition(goal) { return (()=>{
					let structptr_134045 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Animator", "GetIKPosition", [structptr_134045, this.ptr, goal]);
					return structptr_134045;
				})(); }
    GetIKPositionWeight(goal) { return window.ctx.call("UnityEngine.Animator", "GetIKPositionWeight", [this.ptr, goal]).val(); }
    GetIKRotation(goal) { return (()=>{
					let structptr_8b5d50 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Animator", "GetIKRotation", [structptr_8b5d50, this.ptr, goal]);
					return structptr_8b5d50;
				})(); }
    GetIKRotationWeight(goal) { return window.ctx.call("UnityEngine.Animator", "GetIKRotationWeight", [this.ptr, goal]).val(); }
    GetInteger_name(name) { return window.ctx.call("UnityEngine.Animator", "GetInteger_17758", [this.ptr, name]).val(); }
    GetInteger_id(id) { return window.ctx.call("UnityEngine.Animator", "GetInteger_17759", [this.ptr, id]).val(); }
    GetIntegerID(id) { return window.ctx.call("UnityEngine.Animator", "GetIntegerID", [this.ptr, id]).val(); }
    static GetIntegerID_Injected(_unity_self, id) { return window.ctx.call("UnityEngine.Animator", "GetIntegerID_Injected", [_unity_self, id]).val(); }
    GetIntegerString(name) { return window.ctx.call("UnityEngine.Animator", "GetIntegerString", [this.ptr, name]).val(); }
    static GetIntegerString_Injected(_unity_self, name) { return window.ctx.call("UnityEngine.Animator", "GetIntegerString_Injected", [_unity_self, name]).val(); }
    GetLayerIndex(layerName) { return window.ctx.call("UnityEngine.Animator", "GetLayerIndex", [this.ptr, layerName]).val(); }
    static GetLayerIndex_Injected(_unity_self, layerName) { return window.ctx.call("UnityEngine.Animator", "GetLayerIndex_Injected", [_unity_self, layerName]).val(); }
    GetLayerName(layerIndex) { return window.ctx.call("UnityEngine.Animator", "GetLayerName", [this.ptr, layerIndex]); }
    static GetLayerName_Injected(_unity_self, layerIndex, ret) { window.ctx.call("UnityEngine.Animator", "GetLayerName_Injected", [_unity_self, layerIndex, ret]); }
    GetLayerWeight(layerIndex) { return window.ctx.call("UnityEngine.Animator", "GetLayerWeight", [this.ptr, layerIndex]).val(); }
    static GetLayerWeight_Injected(_unity_self, layerIndex) { return window.ctx.call("UnityEngine.Animator", "GetLayerWeight_Injected", [_unity_self, layerIndex]).val(); }
    GetNextAnimatorClipInfo_layerIndex(layerIndex) { return window.ctx.call("UnityEngine.Animator", "GetNextAnimatorClipInfo_17850", [this.ptr, layerIndex]); }
    GetNextAnimatorClipInfo_layerIndex_clips(layerIndex, clips) { window.ctx.call("UnityEngine.Animator", "GetNextAnimatorClipInfo_17853", [this.ptr, layerIndex, clips]); }
    GetNextAnimatorClipInfoCount(layerIndex) { return window.ctx.call("UnityEngine.Animator", "GetNextAnimatorClipInfoCount", [this.ptr, layerIndex]).val(); }
    static GetNextAnimatorClipInfo_Injected(_unity_self, layerIndex) { return window.ctx.call("UnityEngine.Animator", "GetNextAnimatorClipInfo_Injected", [_unity_self, layerIndex]); }
    GetNextAnimatorStateInfo(layerIndex) { return (()=>{
					let structptr_3b2cd6 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Animator", "GetNextAnimatorStateInfo", [structptr_3b2cd6, this.ptr, layerIndex]);
					return structptr_3b2cd6;
				})(); }
    GetNextStateName(layerIndex) { return window.ctx.call("UnityEngine.Animator", "GetNextStateName", [this.ptr, layerIndex]); }
    GetParameter(index) { return new AnimatorControllerParameter(window.ctx.call("UnityEngine.Animator", "GetParameter", [this.ptr, index])); }
    GetParameterInternal(index) { return new AnimatorControllerParameter(window.ctx.call("UnityEngine.Animator", "GetParameterInternal", [this.ptr, index])); }
    static GetParameterInternal_Injected(_unity_self, index) { return new AnimatorControllerParameter(window.ctx.call("UnityEngine.Animator", "GetParameterInternal_Injected", [_unity_self, index])); }
    GetQuaternion_name(name) { return (()=>{
					let structptr_55a134 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Animator", "GetQuaternion_17989", [structptr_55a134, this.ptr, name]);
					return structptr_55a134;
				})(); }
    GetQuaternion_id(id) { return (()=>{
					let structptr_4be0aa = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Animator", "GetQuaternion_17990", [structptr_4be0aa, this.ptr, id]);
					return structptr_4be0aa;
				})(); }
    GetRecorderStartTime() { return window.ctx.call("UnityEngine.Animator", "GetRecorderStartTime", [this.ptr]).val(); }
    static GetRecorderStartTime_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "GetRecorderStartTime_Injected", [_unity_self]).val(); }
    GetRecorderStopTime() { return window.ctx.call("UnityEngine.Animator", "GetRecorderStopTime", [this.ptr]).val(); }
    static GetRecorderStopTime_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "GetRecorderStopTime_Injected", [_unity_self]).val(); }
    GetStats() { return window.ctx.call("UnityEngine.Animator", "GetStats", [this.ptr]); }
    static GetStats_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Animator", "GetStats_Injected", [_unity_self, ret]); }
    GetVector_name(name) { return (()=>{
					let structptr_2a4908 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Animator", "GetVector_17985", [structptr_2a4908, this.ptr, name]);
					return structptr_2a4908;
				})(); }
    GetVector_id(id) { return (()=>{
					let structptr_b44b57 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Animator", "GetVector_17986", [structptr_b44b57, this.ptr, id]);
					return structptr_b44b57;
				})(); }
    HasState(layerIndex, stateID) { return window.ctx.call("UnityEngine.Animator", "HasState", [this.ptr, layerIndex, stateID]).val() === 1; }
    static HasState_Injected(_unity_self, layerIndex, stateID) { return window.ctx.call("UnityEngine.Animator", "HasState_Injected", [_unity_self, layerIndex, stateID]).val() === 1; }
    InternalGetBehaviours(type) { return window.ctx.call("UnityEngine.Animator", "InternalGetBehaviours", [this.ptr, type]); }
    InternalGetBehavioursByKey(fullPathHash, layerIndex, type) { return window.ctx.call("UnityEngine.Animator", "InternalGetBehavioursByKey", [this.ptr, fullPathHash, layerIndex, type]); }
    static InternalGetBehavioursByKey_Injected(_unity_self, fullPathHash, layerIndex, type) { return window.ctx.call("UnityEngine.Animator", "InternalGetBehavioursByKey_Injected", [_unity_self, fullPathHash, layerIndex, type]); }
    static InternalGetBehaviours_Injected(_unity_self, type) { return window.ctx.call("UnityEngine.Animator", "InternalGetBehaviours_Injected", [_unity_self, type]); }
    InterruptMatchTarget_pointer() { window.ctx.call("UnityEngine.Animator", "InterruptMatchTarget_17867", [this.ptr]); }
    InterruptMatchTarget_completeMatch(completeMatch) { window.ctx.call("UnityEngine.Animator", "InterruptMatchTarget_17868", [this.ptr, completeMatch]); }
    static InterruptMatchTarget_Injected(_unity_self, completeMatch) { window.ctx.call("UnityEngine.Animator", "InterruptMatchTarget_Injected", [_unity_self, completeMatch]); }
    IsBoneTransform(transform) { return window.ctx.call("UnityEngine.Animator", "IsBoneTransform", [this.ptr, transform]).val() === 1; }
    static IsBoneTransform_Injected(_unity_self, transform) { return window.ctx.call("UnityEngine.Animator", "IsBoneTransform_Injected", [_unity_self, transform]).val() === 1; }
    IsControlled(transform) { return window.ctx.call("UnityEngine.Animator", "IsControlled", [this.ptr, transform]).val() === 1; }
    IsInIKPass() { return window.ctx.call("UnityEngine.Animator", "IsInIKPass", [this.ptr]).val() === 1; }
    static IsInIKPass_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "IsInIKPass_Injected", [_unity_self]).val() === 1; }
    IsInTransition(layerIndex) { return window.ctx.call("UnityEngine.Animator", "IsInTransition", [this.ptr, layerIndex]).val() === 1; }
    static IsInTransition_Injected(_unity_self, layerIndex) { return window.ctx.call("UnityEngine.Animator", "IsInTransition_Injected", [_unity_self, layerIndex]).val() === 1; }
    IsParameterControlledByCurve_name(name) { return window.ctx.call("UnityEngine.Animator", "IsParameterControlledByCurve_17766", [this.ptr, name]).val() === 1; }
    IsParameterControlledByCurve_id(id) { return window.ctx.call("UnityEngine.Animator", "IsParameterControlledByCurve_17767", [this.ptr, id]).val() === 1; }
    IsParameterControlledByCurveID(id) { return window.ctx.call("UnityEngine.Animator", "IsParameterControlledByCurveID", [this.ptr, id]).val() === 1; }
    static IsParameterControlledByCurveID_Injected(_unity_self, id) { return window.ctx.call("UnityEngine.Animator", "IsParameterControlledByCurveID_Injected", [_unity_self, id]).val() === 1; }
    IsParameterControlledByCurveString(name) { return window.ctx.call("UnityEngine.Animator", "IsParameterControlledByCurveString", [this.ptr, name]).val() === 1; }
    static IsParameterControlledByCurveString_Injected(_unity_self, name) { return window.ctx.call("UnityEngine.Animator", "IsParameterControlledByCurveString_Injected", [_unity_self, name]).val() === 1; }
    MatchTarget_matchPosition_matchRotation_targetBodyPart_weightMask_startNormalizedTime_targetNormalizedTime_completeMatch(matchPosition, matchRotation, targetBodyPart, weightMask, startNormalizedTime, targetNormalizedTime, completeMatch) { window.ctx.call("UnityEngine.Animator", "MatchTarget_17863", [this.ptr, matchPosition, matchRotation, targetBodyPart, weightMask, startNormalizedTime, targetNormalizedTime, completeMatch]); }
    MatchTarget_matchPosition_matchRotation_targetBodyPart_weightMask_startNormalizedTime(matchPosition, matchRotation, targetBodyPart, weightMask, startNormalizedTime) { window.ctx.call("UnityEngine.Animator", "MatchTarget_17864", [this.ptr, matchPosition, matchRotation, targetBodyPart, weightMask, startNormalizedTime]); }
    MatchTarget_matchPosition_matchRotation_targetBodyPart_weightMask_startNormalizedTime_targetNormalizedTime(matchPosition, matchRotation, targetBodyPart, weightMask, startNormalizedTime, targetNormalizedTime) { window.ctx.call("UnityEngine.Animator", "MatchTarget_17865", [this.ptr, matchPosition, matchRotation, targetBodyPart, weightMask, startNormalizedTime, targetNormalizedTime]); }
    MatchTarget_matchPosition_matchRotation_targetBodyPart_weightMask_startNormalizedTime_targetNormalizedTime_completeMatch(matchPosition, matchRotation, targetBodyPart, weightMask, startNormalizedTime, targetNormalizedTime, completeMatch) { window.ctx.call("UnityEngine.Animator", "MatchTarget_17866", [this.ptr, matchPosition, matchRotation, targetBodyPart, weightMask, startNormalizedTime, targetNormalizedTime, completeMatch]); }
    static MatchTarget_Injected(_unity_self, matchPosition, matchRotation, targetBodyPart, weightMask, startNormalizedTime, targetNormalizedTime, completeMatch) { window.ctx.call("UnityEngine.Animator", "MatchTarget_Injected", [_unity_self, matchPosition, matchRotation, targetBodyPart, weightMask, startNormalizedTime, targetNormalizedTime, completeMatch]); }
    OnCullingModeChanged() { window.ctx.call("UnityEngine.Animator", "OnCullingModeChanged", [this.ptr]); }
    static OnCullingModeChanged_Injected(_unity_self) { window.ctx.call("UnityEngine.Animator", "OnCullingModeChanged_Injected", [_unity_self]); }
    OnUpdateModeChanged() { window.ctx.call("UnityEngine.Animator", "OnUpdateModeChanged", [this.ptr]); }
    static OnUpdateModeChanged_Injected(_unity_self) { window.ctx.call("UnityEngine.Animator", "OnUpdateModeChanged_Injected", [_unity_self]); }
    Play_stateName_layer(stateName, layer) { window.ctx.call("UnityEngine.Animator", "Play_17895", [this.ptr, stateName, layer]); }
    Play_stateName(stateName) { window.ctx.call("UnityEngine.Animator", "Play_17896", [this.ptr, stateName]); }
    Play_stateName_layer_normalizedTime(stateName, layer, normalizedTime) { window.ctx.call("UnityEngine.Animator", "Play_2086", [this.ptr, stateName, layer, normalizedTime]); }
    Play_stateNameHash_layer_normalizedTime(stateNameHash, layer, normalizedTime) { window.ctx.call("UnityEngine.Animator", "Play_17897", [this.ptr, stateNameHash, layer, normalizedTime]); }
    Play_stateNameHash_layer(stateNameHash, layer) { window.ctx.call("UnityEngine.Animator", "Play_17898", [this.ptr, stateNameHash, layer]); }
    Play_stateNameHash(stateNameHash) { window.ctx.call("UnityEngine.Animator", "Play_17899", [this.ptr, stateNameHash]); }
    PlayInFixedTime_stateName_layer(stateName, layer) { window.ctx.call("UnityEngine.Animator", "PlayInFixedTime_17889", [this.ptr, stateName, layer]); }
    PlayInFixedTime_stateName(stateName) { window.ctx.call("UnityEngine.Animator", "PlayInFixedTime_17890", [this.ptr, stateName]); }
    PlayInFixedTime_stateName_layer_fixedTime(stateName, layer, fixedTime) { window.ctx.call("UnityEngine.Animator", "PlayInFixedTime_17891", [this.ptr, stateName, layer, fixedTime]); }
    PlayInFixedTime_stateNameHash_layer_fixedTime(stateNameHash, layer, fixedTime) { window.ctx.call("UnityEngine.Animator", "PlayInFixedTime_17892", [this.ptr, stateNameHash, layer, fixedTime]); }
    PlayInFixedTime_stateNameHash_layer(stateNameHash, layer) { window.ctx.call("UnityEngine.Animator", "PlayInFixedTime_17893", [this.ptr, stateNameHash, layer]); }
    PlayInFixedTime_stateNameHash(stateNameHash) { window.ctx.call("UnityEngine.Animator", "PlayInFixedTime_17894", [this.ptr, stateNameHash]); }
    static PlayInFixedTime_Injected(_unity_self, stateNameHash, layer, fixedTime) { window.ctx.call("UnityEngine.Animator", "PlayInFixedTime_Injected", [_unity_self, stateNameHash, layer, fixedTime]); }
    static Play_Injected(_unity_self, stateNameHash, layer, normalizedTime) { window.ctx.call("UnityEngine.Animator", "Play_Injected", [_unity_self, stateNameHash, layer, normalizedTime]); }
    Rebind_pointer() { window.ctx.call("UnityEngine.Animator", "Rebind_17966", [this.ptr]); }
    Rebind_writeDefaultValues(writeDefaultValues) { window.ctx.call("UnityEngine.Animator", "Rebind_17967", [this.ptr, writeDefaultValues]); }
    static Rebind_Injected(_unity_self, writeDefaultValues) { window.ctx.call("UnityEngine.Animator", "Rebind_Injected", [_unity_self, writeDefaultValues]); }
    ResetControllerState(resetParameters) { window.ctx.call("UnityEngine.Animator", "ResetControllerState", [this.ptr, resetParameters]); }
    static ResetControllerState_Injected(_unity_self, resetParameters) { window.ctx.call("UnityEngine.Animator", "ResetControllerState_Injected", [_unity_self, resetParameters]); }
    ResetTrigger_name(name) { window.ctx.call("UnityEngine.Animator", "ResetTrigger_17764", [this.ptr, name]); }
    ResetTrigger_id(id) { window.ctx.call("UnityEngine.Animator", "ResetTrigger_17765", [this.ptr, id]); }
    ResetTriggerID(id) { window.ctx.call("UnityEngine.Animator", "ResetTriggerID", [this.ptr, id]); }
    static ResetTriggerID_Injected(_unity_self, id) { window.ctx.call("UnityEngine.Animator", "ResetTriggerID_Injected", [_unity_self, id]); }
    ResetTriggerString(name) { window.ctx.call("UnityEngine.Animator", "ResetTriggerString", [this.ptr, name]); }
    static ResetTriggerString_Injected(_unity_self, name) { window.ctx.call("UnityEngine.Animator", "ResetTriggerString_Injected", [_unity_self, name]); }
    ResolveHash(hash) { return window.ctx.call("UnityEngine.Animator", "ResolveHash", [this.ptr, hash]); }
    static ResolveHash_Injected(_unity_self, hash, ret) { window.ctx.call("UnityEngine.Animator", "ResolveHash_Injected", [_unity_self, hash, ret]); }
    SetBoneLocalRotation(humanBoneId, rotation) { window.ctx.call("UnityEngine.Animator", "SetBoneLocalRotation", [this.ptr, humanBoneId, rotation]); }
    SetBoneLocalRotationInternal(humanBoneId, rotation) { window.ctx.call("UnityEngine.Animator", "SetBoneLocalRotationInternal", [this.ptr, humanBoneId, rotation]); }
    static SetBoneLocalRotationInternal_Injected(_unity_self, humanBoneId, rotation) { window.ctx.call("UnityEngine.Animator", "SetBoneLocalRotationInternal_Injected", [_unity_self, humanBoneId, rotation]); }
    SetBool_name_value(name, value) { window.ctx.call("UnityEngine.Animator", "SetBool_17756", [this.ptr, name, value]); }
    SetBool_id_value(id, value) { window.ctx.call("UnityEngine.Animator", "SetBool_17757", [this.ptr, id, value]); }
    SetBoolID(id, value) { window.ctx.call("UnityEngine.Animator", "SetBoolID", [this.ptr, id, value]); }
    static SetBoolID_Injected(_unity_self, id, value) { window.ctx.call("UnityEngine.Animator", "SetBoolID_Injected", [_unity_self, id, value]); }
    SetBoolString(name, value) { window.ctx.call("UnityEngine.Animator", "SetBoolString", [this.ptr, name, value]); }
    static SetBoolString_Injected(_unity_self, name, value) { window.ctx.call("UnityEngine.Animator", "SetBoolString_Injected", [_unity_self, name, value]); }
    SetFloat_name_value(name, value) { window.ctx.call("UnityEngine.Animator", "SetFloat_17750", [this.ptr, name, value]); }
    SetFloat_name_value_dampTime_deltaTime(name, value, dampTime, deltaTime) { window.ctx.call("UnityEngine.Animator", "SetFloat_17751", [this.ptr, name, value, dampTime, deltaTime]); }
    SetFloat_id_value(id, value) { window.ctx.call("UnityEngine.Animator", "SetFloat_17752", [this.ptr, id, value]); }
    SetFloat_id_value_dampTime_deltaTime(id, value, dampTime, deltaTime) { window.ctx.call("UnityEngine.Animator", "SetFloat_17753", [this.ptr, id, value, dampTime, deltaTime]); }
    SetFloatID(id, value) { window.ctx.call("UnityEngine.Animator", "SetFloatID", [this.ptr, id, value]); }
    SetFloatIDDamp(id, value, dampTime, deltaTime) { window.ctx.call("UnityEngine.Animator", "SetFloatIDDamp", [this.ptr, id, value, dampTime, deltaTime]); }
    static SetFloatIDDamp_Injected(_unity_self, id, value, dampTime, deltaTime) { window.ctx.call("UnityEngine.Animator", "SetFloatIDDamp_Injected", [_unity_self, id, value, dampTime, deltaTime]); }
    static SetFloatID_Injected(_unity_self, id, value) { window.ctx.call("UnityEngine.Animator", "SetFloatID_Injected", [_unity_self, id, value]); }
    SetFloatString(name, value) { window.ctx.call("UnityEngine.Animator", "SetFloatString", [this.ptr, name, value]); }
    SetFloatStringDamp(name, value, dampTime, deltaTime) { window.ctx.call("UnityEngine.Animator", "SetFloatStringDamp", [this.ptr, name, value, dampTime, deltaTime]); }
    static SetFloatStringDamp_Injected(_unity_self, name, value, dampTime, deltaTime) { window.ctx.call("UnityEngine.Animator", "SetFloatStringDamp_Injected", [_unity_self, name, value, dampTime, deltaTime]); }
    static SetFloatString_Injected(_unity_self, name, value) { window.ctx.call("UnityEngine.Animator", "SetFloatString_Injected", [_unity_self, name, value]); }
    SetGoalPosition(goal, goalPosition) { window.ctx.call("UnityEngine.Animator", "SetGoalPosition", [this.ptr, goal, goalPosition]); }
    static SetGoalPosition_Injected(_unity_self, goal, goalPosition) { window.ctx.call("UnityEngine.Animator", "SetGoalPosition_Injected", [_unity_self, goal, goalPosition]); }
    SetGoalRotation(goal, goalRotation) { window.ctx.call("UnityEngine.Animator", "SetGoalRotation", [this.ptr, goal, goalRotation]); }
    static SetGoalRotation_Injected(_unity_self, goal, goalRotation) { window.ctx.call("UnityEngine.Animator", "SetGoalRotation_Injected", [_unity_self, goal, goalRotation]); }
    SetGoalWeightPosition(goal, value) { window.ctx.call("UnityEngine.Animator", "SetGoalWeightPosition", [this.ptr, goal, value]); }
    static SetGoalWeightPosition_Injected(_unity_self, goal, value) { window.ctx.call("UnityEngine.Animator", "SetGoalWeightPosition_Injected", [_unity_self, goal, value]); }
    SetGoalWeightRotation(goal, value) { window.ctx.call("UnityEngine.Animator", "SetGoalWeightRotation", [this.ptr, goal, value]); }
    static SetGoalWeightRotation_Injected(_unity_self, goal, value) { window.ctx.call("UnityEngine.Animator", "SetGoalWeightRotation_Injected", [_unity_self, goal, value]); }
    SetHintPosition(hint, hintPosition) { window.ctx.call("UnityEngine.Animator", "SetHintPosition", [this.ptr, hint, hintPosition]); }
    static SetHintPosition_Injected(_unity_self, hint, hintPosition) { window.ctx.call("UnityEngine.Animator", "SetHintPosition_Injected", [_unity_self, hint, hintPosition]); }
    SetHintWeightPosition(hint, value) { window.ctx.call("UnityEngine.Animator", "SetHintWeightPosition", [this.ptr, hint, value]); }
    static SetHintWeightPosition_Injected(_unity_self, hint, value) { window.ctx.call("UnityEngine.Animator", "SetHintWeightPosition_Injected", [_unity_self, hint, value]); }
    SetIKHintPosition(hint, hintPosition) { window.ctx.call("UnityEngine.Animator", "SetIKHintPosition", [this.ptr, hint, hintPosition]); }
    SetIKHintPositionWeight(hint, value) { window.ctx.call("UnityEngine.Animator", "SetIKHintPositionWeight", [this.ptr, hint, value]); }
    SetIKPosition(goal, goalPosition) { window.ctx.call("UnityEngine.Animator", "SetIKPosition", [this.ptr, goal, goalPosition]); }
    SetIKPositionWeight(goal, value) { window.ctx.call("UnityEngine.Animator", "SetIKPositionWeight", [this.ptr, goal, value]); }
    SetIKRotation(goal, goalRotation) { window.ctx.call("UnityEngine.Animator", "SetIKRotation", [this.ptr, goal, goalRotation]); }
    SetIKRotationWeight(goal, value) { window.ctx.call("UnityEngine.Animator", "SetIKRotationWeight", [this.ptr, goal, value]); }
    SetInteger_name_value(name, value) { window.ctx.call("UnityEngine.Animator", "SetInteger_17760", [this.ptr, name, value]); }
    SetInteger_id_value(id, value) { window.ctx.call("UnityEngine.Animator", "SetInteger_17761", [this.ptr, id, value]); }
    SetIntegerID(id, value) { window.ctx.call("UnityEngine.Animator", "SetIntegerID", [this.ptr, id, value]); }
    static SetIntegerID_Injected(_unity_self, id, value) { window.ctx.call("UnityEngine.Animator", "SetIntegerID_Injected", [_unity_self, id, value]); }
    SetIntegerString(name, value) { window.ctx.call("UnityEngine.Animator", "SetIntegerString", [this.ptr, name, value]); }
    static SetIntegerString_Injected(_unity_self, name, value) { window.ctx.call("UnityEngine.Animator", "SetIntegerString_Injected", [_unity_self, name, value]); }
    SetLayerWeight(layerIndex, weight) { window.ctx.call("UnityEngine.Animator", "SetLayerWeight", [this.ptr, layerIndex, weight]); }
    static SetLayerWeight_Injected(_unity_self, layerIndex, weight) { window.ctx.call("UnityEngine.Animator", "SetLayerWeight_Injected", [_unity_self, layerIndex, weight]); }
    SetLookAtPosition(lookAtPosition) { window.ctx.call("UnityEngine.Animator", "SetLookAtPosition", [this.ptr, lookAtPosition]); }
    SetLookAtPositionInternal(lookAtPosition) { window.ctx.call("UnityEngine.Animator", "SetLookAtPositionInternal", [this.ptr, lookAtPosition]); }
    static SetLookAtPositionInternal_Injected(_unity_self, lookAtPosition) { window.ctx.call("UnityEngine.Animator", "SetLookAtPositionInternal_Injected", [_unity_self, lookAtPosition]); }
    SetLookAtWeight_weight(weight) { window.ctx.call("UnityEngine.Animator", "SetLookAtWeight_17822", [this.ptr, weight]); }
    SetLookAtWeight_weight_bodyWeight(weight, bodyWeight) { window.ctx.call("UnityEngine.Animator", "SetLookAtWeight_17823", [this.ptr, weight, bodyWeight]); }
    SetLookAtWeight_weight_bodyWeight_headWeight(weight, bodyWeight, headWeight) { window.ctx.call("UnityEngine.Animator", "SetLookAtWeight_17824", [this.ptr, weight, bodyWeight, headWeight]); }
    SetLookAtWeight_weight_bodyWeight_headWeight_eyesWeight(weight, bodyWeight, headWeight, eyesWeight) { window.ctx.call("UnityEngine.Animator", "SetLookAtWeight_17825", [this.ptr, weight, bodyWeight, headWeight, eyesWeight]); }
    SetLookAtWeight_weight_bodyWeight_headWeight_eyesWeight_clampWeight(weight, bodyWeight, headWeight, eyesWeight, clampWeight) { window.ctx.call("UnityEngine.Animator", "SetLookAtWeight_17826", [this.ptr, weight, bodyWeight, headWeight, eyesWeight, clampWeight]); }
    SetLookAtWeightInternal(weight, bodyWeight, headWeight, eyesWeight, clampWeight) { window.ctx.call("UnityEngine.Animator", "SetLookAtWeightInternal", [this.ptr, weight, bodyWeight, headWeight, eyesWeight, clampWeight]); }
    static SetLookAtWeightInternal_Injected(_unity_self, weight, bodyWeight, headWeight, eyesWeight, clampWeight) { window.ctx.call("UnityEngine.Animator", "SetLookAtWeightInternal_Injected", [_unity_self, weight, bodyWeight, headWeight, eyesWeight, clampWeight]); }
    SetQuaternion_name_value(name, value) { window.ctx.call("UnityEngine.Animator", "SetQuaternion_17991", [this.ptr, name, value]); }
    SetQuaternion_id_value(id, value) { window.ctx.call("UnityEngine.Animator", "SetQuaternion_17992", [this.ptr, id, value]); }
    SetTarget(targetIndex, targetNormalizedTime) { window.ctx.call("UnityEngine.Animator", "SetTarget", [this.ptr, targetIndex, targetNormalizedTime]); }
    static SetTarget_Injected(_unity_self, targetIndex, targetNormalizedTime) { window.ctx.call("UnityEngine.Animator", "SetTarget_Injected", [_unity_self, targetIndex, targetNormalizedTime]); }
    SetTrigger_name(name) { window.ctx.call("UnityEngine.Animator", "SetTrigger_17762", [this.ptr, name]); }
    SetTrigger_id(id) { window.ctx.call("UnityEngine.Animator", "SetTrigger_17763", [this.ptr, id]); }
    SetTriggerID(id) { window.ctx.call("UnityEngine.Animator", "SetTriggerID", [this.ptr, id]); }
    static SetTriggerID_Injected(_unity_self, id) { window.ctx.call("UnityEngine.Animator", "SetTriggerID_Injected", [_unity_self, id]); }
    SetTriggerString(name) { window.ctx.call("UnityEngine.Animator", "SetTriggerString", [this.ptr, name]); }
    static SetTriggerString_Injected(_unity_self, name) { window.ctx.call("UnityEngine.Animator", "SetTriggerString_Injected", [_unity_self, name]); }
    SetVector_name_value(name, value) { window.ctx.call("UnityEngine.Animator", "SetVector_17987", [this.ptr, name, value]); }
    SetVector_id_value(id, value) { window.ctx.call("UnityEngine.Animator", "SetVector_17988", [this.ptr, id, value]); }
    StartPlayback() { window.ctx.call("UnityEngine.Animator", "StartPlayback", [this.ptr]); }
    static StartPlayback_Injected(_unity_self) { window.ctx.call("UnityEngine.Animator", "StartPlayback_Injected", [_unity_self]); }
    StartRecording(frameCount) { window.ctx.call("UnityEngine.Animator", "StartRecording", [this.ptr, frameCount]); }
    static StartRecording_Injected(_unity_self, frameCount) { window.ctx.call("UnityEngine.Animator", "StartRecording_Injected", [_unity_self, frameCount]); }
    StopPlayback() { window.ctx.call("UnityEngine.Animator", "StopPlayback", [this.ptr]); }
    static StopPlayback_Injected(_unity_self) { window.ctx.call("UnityEngine.Animator", "StopPlayback_Injected", [_unity_self]); }
    StopRecording() { window.ctx.call("UnityEngine.Animator", "StopRecording", [this.ptr]); }
    static StopRecording_Injected(_unity_self) { window.ctx.call("UnityEngine.Animator", "StopRecording_Injected", [_unity_self]); }
    static StringToHash(name) { return window.ctx.call("UnityEngine.Animator", "StringToHash", [name]).val(); }
    static StringToHash_Injected(name) { return window.ctx.call("UnityEngine.Animator", "StringToHash_Injected", [name]).val(); }
    Update(deltaTime) { window.ctx.call("UnityEngine.Animator", "Update", [this.ptr, deltaTime]); }
    static Update_Injected(_unity_self, deltaTime) { window.ctx.call("UnityEngine.Animator", "Update_Injected", [_unity_self, deltaTime]); }
    WriteDefaultPose() { window.ctx.call("UnityEngine.Animator", "WriteDefaultPose", [this.ptr]); }
    static WriteDefaultPose_Injected(_unity_self) { window.ctx.call("UnityEngine.Animator", "WriteDefaultPose_Injected", [_unity_self]); }
    WriteDefaultValues() { window.ctx.call("UnityEngine.Animator", "WriteDefaultValues", [this.ptr]); }
    static WriteDefaultValues_Injected(_unity_self) { window.ctx.call("UnityEngine.Animator", "WriteDefaultValues_Injected", [_unity_self]); }
    static get_allowConstantClipSamplingOptimization_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_allowConstantClipSamplingOptimization_Injected", [_unity_self]).val() === 1; }
    static get_angularVelocity_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Animator", "get_angularVelocity_Injected", [_unity_self, ret]); }
    static get_animatePhysics_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_animatePhysics_Injected", [_unity_self]).val() === 1; }
    static get_applyRootMotion_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_applyRootMotion_Injected", [_unity_self]).val() === 1; }
    static get_avatarRoot_Injected(_unity_self) { return (()=>{
					let structptr_38b04d = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Animator", "get_avatarRoot_Injected", [structptr_38b04d, _unity_self]);
					return structptr_38b04d;
				})(); }
    static get_avatar_Injected(_unity_self) { return (()=>{
					let structptr_0a2d84 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Animator", "get_avatar_Injected", [structptr_0a2d84, _unity_self]);
					return structptr_0a2d84;
				})(); }
    static get_bodyPositionInternal_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Animator", "get_bodyPositionInternal_Injected", [_unity_self, ret]); }
    static get_bodyRotationInternal_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Animator", "get_bodyRotationInternal_Injected", [_unity_self, ret]); }
    static get_cullingMode_Injected(_unity_self) { return new AnimatorCullingMode(window.ctx.call("UnityEngine.Animator", "get_cullingMode_Injected", [_unity_self])); }
    static get_deltaPosition_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Animator", "get_deltaPosition_Injected", [_unity_self, ret]); }
    static get_deltaRotation_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Animator", "get_deltaRotation_Injected", [_unity_self, ret]); }
    static get_feetPivotActive_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_feetPivotActive_Injected", [_unity_self]).val(); }
    static get_fireEvents_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_fireEvents_Injected", [_unity_self]).val() === 1; }
    static get_gravityWeight_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_gravityWeight_Injected", [_unity_self]).val(); }
    static get_hasBoundPlayables_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_hasBoundPlayables_Injected", [_unity_self]).val() === 1; }
    static get_hasRootMotion_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_hasRootMotion_Injected", [_unity_self]).val() === 1; }
    static get_hasTransformHierarchy_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_hasTransformHierarchy_Injected", [_unity_self]).val() === 1; }
    static get_humanScale_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_humanScale_Injected", [_unity_self]).val(); }
    static get_isHuman_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_isHuman_Injected", [_unity_self]).val() === 1; }
    static get_isInitialized_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_isInitialized_Injected", [_unity_self]).val() === 1; }
    static get_isMatchingTarget_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_isMatchingTarget_Injected", [_unity_self]).val() === 1; }
    static get_isOptimizable_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_isOptimizable_Injected", [_unity_self]).val() === 1; }
    static get_isRootPositionOrRotationControlledByCurves_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_isRootPositionOrRotationControlledByCurves_Injected", [_unity_self]).val() === 1; }
    static get_keepAnimatorStateOnDisable_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_keepAnimatorStateOnDisable_Injected", [_unity_self]).val() === 1; }
    static get_layerCount_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_layerCount_Injected", [_unity_self]).val(); }
    static get_layersAffectMassCenter_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_layersAffectMassCenter_Injected", [_unity_self]).val() === 1; }
    static get_leftFeetBottomHeight_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_leftFeetBottomHeight_Injected", [_unity_self]).val(); }
    static get_linearVelocityBlending_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_linearVelocityBlending_Injected", [_unity_self]).val() === 1; }
    static get_logWarnings_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_logWarnings_Injected", [_unity_self]).val() === 1; }
    static get_parameterCount_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_parameterCount_Injected", [_unity_self]).val(); }
    static get_parameters_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_parameters_Injected", [_unity_self]); }
    static get_pivotPosition_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Animator", "get_pivotPosition_Injected", [_unity_self, ret]); }
    static get_pivotWeight_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_pivotWeight_Injected", [_unity_self]).val(); }
    static get_playbackTime_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_playbackTime_Injected", [_unity_self]).val(); }
    static get_recorderMode_Injected(_unity_self) { return new AnimatorRecorderMode(window.ctx.call("UnityEngine.Animator", "get_recorderMode_Injected", [_unity_self])); }
    static get_rightFeetBottomHeight_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_rightFeetBottomHeight_Injected", [_unity_self]).val(); }
    static get_rootPosition_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Animator", "get_rootPosition_Injected", [_unity_self, ret]); }
    static get_rootRotation_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Animator", "get_rootRotation_Injected", [_unity_self, ret]); }
    static get_runtimeAnimatorController_Injected(_unity_self) { return (()=>{
					let structptr_872715 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Animator", "get_runtimeAnimatorController_Injected", [structptr_872715, _unity_self]);
					return structptr_872715;
				})(); }
    static get_speed_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_speed_Injected", [_unity_self]).val(); }
    static get_stabilizeFeet_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_stabilizeFeet_Injected", [_unity_self]).val() === 1; }
    static get_supportsOnAnimatorMove_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_supportsOnAnimatorMove_Injected", [_unity_self]).val() === 1; }
    static get_targetPosition_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Animator", "get_targetPosition_Injected", [_unity_self, ret]); }
    static get_targetRotation_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Animator", "get_targetRotation_Injected", [_unity_self, ret]); }
    static get_updateMode_Injected(_unity_self) { return new AnimatorUpdateMode(window.ctx.call("UnityEngine.Animator", "get_updateMode_Injected", [_unity_self])); }
    static get_velocity_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Animator", "get_velocity_Injected", [_unity_self, ret]); }
    static get_writeDefaultValuesOnDisable_Injected(_unity_self) { return window.ctx.call("UnityEngine.Animator", "get_writeDefaultValuesOnDisable_Injected", [_unity_self]).val() === 1; }
    static set_allowConstantClipSamplingOptimization_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Animator", "set_allowConstantClipSamplingOptimization_Injected", [_unity_self, value]); }
    static set_animatePhysics_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Animator", "set_animatePhysics_Injected", [_unity_self, value]); }
    static set_applyRootMotion_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Animator", "set_applyRootMotion_Injected", [_unity_self, value]); }
    static set_avatar_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Animator", "set_avatar_Injected", [_unity_self, value]); }
    static set_bodyPositionInternal_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Animator", "set_bodyPositionInternal_Injected", [_unity_self, value]); }
    static set_bodyRotationInternal_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Animator", "set_bodyRotationInternal_Injected", [_unity_self, value]); }
    static set_cullingMode_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Animator", "set_cullingMode_Injected", [_unity_self, value]); }
    static set_feetPivotActive_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Animator", "set_feetPivotActive_Injected", [_unity_self, value]); }
    static set_fireEvents_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Animator", "set_fireEvents_Injected", [_unity_self, value]); }
    static set_keepAnimatorStateOnDisable_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Animator", "set_keepAnimatorStateOnDisable_Injected", [_unity_self, value]); }
    static set_layersAffectMassCenter_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Animator", "set_layersAffectMassCenter_Injected", [_unity_self, value]); }
    static set_linearVelocityBlending_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Animator", "set_linearVelocityBlending_Injected", [_unity_self, value]); }
    static set_logWarnings_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Animator", "set_logWarnings_Injected", [_unity_self, value]); }
    static set_playbackTime_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Animator", "set_playbackTime_Injected", [_unity_self, value]); }
    static set_rootPosition_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Animator", "set_rootPosition_Injected", [_unity_self, value]); }
    static set_rootRotation_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Animator", "set_rootRotation_Injected", [_unity_self, value]); }
    static set_runtimeAnimatorController_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Animator", "set_runtimeAnimatorController_Injected", [_unity_self, value]); }
    static set_speed_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Animator", "set_speed_Injected", [_unity_self, value]); }
    static set_stabilizeFeet_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Animator", "set_stabilizeFeet_Injected", [_unity_self, value]); }
    static set_updateMode_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Animator", "set_updateMode_Injected", [_unity_self, value]); }
    static set_writeDefaultValuesOnDisable_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Animator", "set_writeDefaultValuesOnDisable_Injected", [_unity_self, value]); }
}

export class Transform {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get childCount() { return window.ctx.call("UnityEngine.Transform", "get_childCount", [this.ptr]).val(); }
    get constrainProportionsScale() { return window.ctx.call("UnityEngine.Transform", "get_constrainProportionsScale", [this.ptr]).val() === 1; }
    set constrainProportionsScale(v) { window.ctx.call("UnityEngine.Transform", "set_constrainProportionsScale", [this.ptr, v]); }
    get eulerAngles() { return (()=>{
					let structptr_1efe3f = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Transform", "get_eulerAngles", [structptr_1efe3f, this.ptr]);
					return structptr_1efe3f;
				})(); }
    set eulerAngles(v) { window.ctx.call("UnityEngine.Transform", "set_eulerAngles", [this.ptr, v]); }
    get forward() { return (()=>{
					let structptr_914f03 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Transform", "get_forward", [structptr_914f03, this.ptr]);
					return structptr_914f03;
				})(); }
    set forward(v) { window.ctx.call("UnityEngine.Transform", "set_forward", [this.ptr, v]); }
    get hasChanged() { return window.ctx.call("UnityEngine.Transform", "get_hasChanged", [this.ptr]).val() === 1; }
    set hasChanged(v) { window.ctx.call("UnityEngine.Transform", "set_hasChanged", [this.ptr, v]); }
    get hierarchyCapacity() { return window.ctx.call("UnityEngine.Transform", "get_hierarchyCapacity", [this.ptr]).val(); }
    set hierarchyCapacity(v) { window.ctx.call("UnityEngine.Transform", "set_hierarchyCapacity", [this.ptr, v]); }
    get hierarchyCount() { return window.ctx.call("UnityEngine.Transform", "get_hierarchyCount", [this.ptr]).val(); }
    get localEulerAngles() { return (()=>{
					let structptr_e2bab5 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Transform", "get_localEulerAngles", [structptr_e2bab5, this.ptr]);
					return structptr_e2bab5;
				})(); }
    set localEulerAngles(v) { window.ctx.call("UnityEngine.Transform", "set_localEulerAngles", [this.ptr, v]); }
    get localPosition() { return (()=>{
					let structptr_6dc0ce = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Transform", "get_localPosition", [structptr_6dc0ce, this.ptr]);
					return structptr_6dc0ce;
				})(); }
    set localPosition(v) { window.ctx.call("UnityEngine.Transform", "set_localPosition", [this.ptr, v]); }
    get localRotation() { return (()=>{
					let structptr_000bb7 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Transform", "get_localRotation", [structptr_000bb7, this.ptr]);
					return structptr_000bb7;
				})(); }
    set localRotation(v) { window.ctx.call("UnityEngine.Transform", "set_localRotation", [this.ptr, v]); }
    get localScale() { return (()=>{
					let structptr_35eaa9 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Transform", "get_localScale", [structptr_35eaa9, this.ptr]);
					return structptr_35eaa9;
				})(); }
    set localScale(v) { window.ctx.call("UnityEngine.Transform", "set_localScale", [this.ptr, v]); }
    get localToWorldMatrix() { return (()=>{
					let structptr_d7d40e = window.ctx.malloc(64);
					window.ctx.call("UnityEngine.Transform", "get_localToWorldMatrix", [structptr_d7d40e, this.ptr]);
					return structptr_d7d40e;
				})(); }
    get lossyScale() { return (()=>{
					let structptr_67b89f = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Transform", "get_lossyScale", [structptr_67b89f, this.ptr]);
					return structptr_67b89f;
				})(); }
    get parent() { return new Transform(window.ctx.call("UnityEngine.Transform", "get_parent", [this.ptr])); }
    set parent(v) { window.ctx.call("UnityEngine.Transform", "set_parent", [this.ptr, v]); }
    get parentInternal() { return new Transform(window.ctx.call("UnityEngine.Transform", "get_parentInternal", [this.ptr])); }
    set parentInternal(v) { window.ctx.call("UnityEngine.Transform", "set_parentInternal", [this.ptr, v]); }
    get position() { return (()=>{
					let structptr_69505c = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Transform", "get_position", [structptr_69505c, this.ptr]);
					return structptr_69505c;
				})(); }
    set position(v) { window.ctx.call("UnityEngine.Transform", "set_position", [this.ptr, v]); }
    get right() { return (()=>{
					let structptr_71befa = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Transform", "get_right", [structptr_71befa, this.ptr]);
					return structptr_71befa;
				})(); }
    set right(v) { window.ctx.call("UnityEngine.Transform", "set_right", [this.ptr, v]); }
    get root() { return new Transform(window.ctx.call("UnityEngine.Transform", "get_root", [this.ptr])); }
    get rotation() { return (()=>{
					let structptr_cf201d = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Transform", "get_rotation", [structptr_cf201d, this.ptr]);
					return structptr_cf201d;
				})(); }
    set rotation(v) { window.ctx.call("UnityEngine.Transform", "set_rotation", [this.ptr, v]); }
    get rotationOrder() { return new RotationOrder(window.ctx.call("UnityEngine.Transform", "get_rotationOrder", [this.ptr])); }
    set rotationOrder(v) { window.ctx.call("UnityEngine.Transform", "set_rotationOrder", [this.ptr, v]); }
    get up() { return (()=>{
					let structptr_528f77 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Transform", "get_up", [structptr_528f77, this.ptr]);
					return structptr_528f77;
				})(); }
    set up(v) { window.ctx.call("UnityEngine.Transform", "set_up", [this.ptr, v]); }
    get worldToLocalMatrix() { return (()=>{
					let structptr_4cf540 = window.ctx.malloc(64);
					window.ctx.call("UnityEngine.Transform", "get_worldToLocalMatrix", [structptr_4cf540, this.ptr]);
					return structptr_4cf540;
				})(); }
    DetachChildren() { window.ctx.call("UnityEngine.Transform", "DetachChildren", [this.ptr]); }
    static DetachChildren_Injected(_unity_self) { window.ctx.call("UnityEngine.Transform", "DetachChildren_Injected", [_unity_self]); }
    Find(n) { return new Transform(window.ctx.call("UnityEngine.Transform", "Find", [this.ptr, n])); }
    FindChild(n) { return new Transform(window.ctx.call("UnityEngine.Transform", "FindChild", [this.ptr, n])); }
    FindRelativeTransformWithPath(path, isActiveOnly) { return new Transform(window.ctx.call("UnityEngine.Transform", "FindRelativeTransformWithPath", [this.ptr, path, isActiveOnly])); }
    static FindRelativeTransformWithPath_Injected(_unity_self, path, isActiveOnly) { return (()=>{
					let structptr_9b9673 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Transform", "FindRelativeTransformWithPath_Injected", [structptr_9b9673, _unity_self, path, isActiveOnly]);
					return structptr_9b9673;
				})(); }
    GetChild(index) { return new Transform(window.ctx.call("UnityEngine.Transform", "GetChild", [this.ptr, index])); }
    GetChildCount() { return window.ctx.call("UnityEngine.Transform", "GetChildCount", [this.ptr]).val(); }
    static GetChildCount_Injected(_unity_self) { return window.ctx.call("UnityEngine.Transform", "GetChildCount_Injected", [_unity_self]).val(); }
    static GetChild_Injected(_unity_self, index) { return (()=>{
					let structptr_647a94 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Transform", "GetChild_Injected", [structptr_647a94, _unity_self, index]);
					return structptr_647a94;
				})(); }
    GetEnumerator() { return window.ctx.call("UnityEngine.Transform", "GetEnumerator", [this.ptr]); }
    GetLocalEulerAngles(order) { return (()=>{
					let structptr_d250e0 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Transform", "GetLocalEulerAngles", [structptr_d250e0, this.ptr, order]);
					return structptr_d250e0;
				})(); }
    static GetLocalEulerAngles_Injected(_unity_self, order, ret) { window.ctx.call("UnityEngine.Transform", "GetLocalEulerAngles_Injected", [_unity_self, order, ret]); }
    GetLocalPositionAndRotation(localPosition, localRotation) { window.ctx.call("UnityEngine.Transform", "GetLocalPositionAndRotation", [this.ptr, localPosition, localRotation]); }
    static GetLocalPositionAndRotation_Injected(_unity_self, localPosition, localRotation) { window.ctx.call("UnityEngine.Transform", "GetLocalPositionAndRotation_Injected", [_unity_self, localPosition, localRotation]); }
    GetParent() { return new Transform(window.ctx.call("UnityEngine.Transform", "GetParent", [this.ptr])); }
    static GetParent_Injected(_unity_self) { return (()=>{
					let structptr_bccac2 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Transform", "GetParent_Injected", [structptr_bccac2, _unity_self]);
					return structptr_bccac2;
				})(); }
    GetPositionAndRotation(position, rotation) { window.ctx.call("UnityEngine.Transform", "GetPositionAndRotation", [this.ptr, position, rotation]); }
    static GetPositionAndRotation_Injected(_unity_self, position, rotation) { window.ctx.call("UnityEngine.Transform", "GetPositionAndRotation_Injected", [_unity_self, position, rotation]); }
    GetRoot() { return new Transform(window.ctx.call("UnityEngine.Transform", "GetRoot", [this.ptr])); }
    static GetRoot_Injected(_unity_self) { return (()=>{
					let structptr_b8a5ed = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Transform", "GetRoot_Injected", [structptr_b8a5ed, _unity_self]);
					return structptr_b8a5ed;
				})(); }
    GetRotationOrderInternal() { return window.ctx.call("UnityEngine.Transform", "GetRotationOrderInternal", [this.ptr]).val(); }
    static GetRotationOrderInternal_Injected(_unity_self) { return window.ctx.call("UnityEngine.Transform", "GetRotationOrderInternal_Injected", [_unity_self]).val(); }
    GetSiblingIndex() { return window.ctx.call("UnityEngine.Transform", "GetSiblingIndex", [this.ptr]).val(); }
    static GetSiblingIndex_Injected(_unity_self) { return window.ctx.call("UnityEngine.Transform", "GetSiblingIndex_Injected", [_unity_self]).val(); }
    Internal_LookAt(worldPosition, worldUp) { window.ctx.call("UnityEngine.Transform", "Internal_LookAt", [this.ptr, worldPosition, worldUp]); }
    static Internal_LookAt_Injected(_unity_self, worldPosition, worldUp) { window.ctx.call("UnityEngine.Transform", "Internal_LookAt_Injected", [_unity_self, worldPosition, worldUp]); }
    InverseTransformDirection_direction(direction) { return (()=>{
					let structptr_17ce12 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Transform", "InverseTransformDirection_2792", [structptr_17ce12, this.ptr, direction]);
					return structptr_17ce12;
				})(); }
    InverseTransformDirection_x_y_z(x, y, z) { return (()=>{
					let structptr_008ab1 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Transform", "InverseTransformDirection_22938", [structptr_008ab1, this.ptr, x, y, z]);
					return structptr_008ab1;
				})(); }
    static InverseTransformDirection_Injected(_unity_self, direction, ret) { window.ctx.call("UnityEngine.Transform", "InverseTransformDirection_Injected", [_unity_self, direction, ret]); }
    InverseTransformDirections_directions_transformedDirections(directions, transformedDirections) { window.ctx.call("UnityEngine.Transform", "InverseTransformDirections_22940", [this.ptr, directions, transformedDirections]); }
    InverseTransformDirections_directions(directions) { window.ctx.call("UnityEngine.Transform", "InverseTransformDirections_22941", [this.ptr, directions]); }
    InverseTransformDirectionsInternal(directions, transformedDirections) { window.ctx.call("UnityEngine.Transform", "InverseTransformDirectionsInternal", [this.ptr, directions, transformedDirections]); }
    static InverseTransformDirectionsInternal_Injected(_unity_self, directions, transformedDirections) { window.ctx.call("UnityEngine.Transform", "InverseTransformDirectionsInternal_Injected", [_unity_self, directions, transformedDirections]); }
    InverseTransformPoint_position(position) { return (()=>{
					let structptr_cfa8ea = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Transform", "InverseTransformPoint_22957", [structptr_cfa8ea, this.ptr, position]);
					return structptr_cfa8ea;
				})(); }
    InverseTransformPoint_x_y_z(x, y, z) { return (()=>{
					let structptr_421a3a = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Transform", "InverseTransformPoint_22958", [structptr_421a3a, this.ptr, x, y, z]);
					return structptr_421a3a;
				})(); }
    static InverseTransformPoint_Injected(_unity_self, position, ret) { window.ctx.call("UnityEngine.Transform", "InverseTransformPoint_Injected", [_unity_self, position, ret]); }
    InverseTransformPoints_positions_transformedPositions(positions, transformedPositions) { window.ctx.call("UnityEngine.Transform", "InverseTransformPoints_22960", [this.ptr, positions, transformedPositions]); }
    InverseTransformPoints_positions(positions) { window.ctx.call("UnityEngine.Transform", "InverseTransformPoints_22961", [this.ptr, positions]); }
    InverseTransformPointsInternal(positions, transformedPositions) { window.ctx.call("UnityEngine.Transform", "InverseTransformPointsInternal", [this.ptr, positions, transformedPositions]); }
    static InverseTransformPointsInternal_Injected(_unity_self, positions, transformedPositions) { window.ctx.call("UnityEngine.Transform", "InverseTransformPointsInternal_Injected", [_unity_self, positions, transformedPositions]); }
    InverseTransformVector_vector(vector) { return (()=>{
					let structptr_3db5a6 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Transform", "InverseTransformVector_22947", [structptr_3db5a6, this.ptr, vector]);
					return structptr_3db5a6;
				})(); }
    InverseTransformVector_x_y_z(x, y, z) { return (()=>{
					let structptr_1efc62 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Transform", "InverseTransformVector_22948", [structptr_1efc62, this.ptr, x, y, z]);
					return structptr_1efc62;
				})(); }
    static InverseTransformVector_Injected(_unity_self, vector, ret) { window.ctx.call("UnityEngine.Transform", "InverseTransformVector_Injected", [_unity_self, vector, ret]); }
    InverseTransformVectors_vectors_transformedVectors(vectors, transformedVectors) { window.ctx.call("UnityEngine.Transform", "InverseTransformVectors_22950", [this.ptr, vectors, transformedVectors]); }
    InverseTransformVectors_vectors(vectors) { window.ctx.call("UnityEngine.Transform", "InverseTransformVectors_22951", [this.ptr, vectors]); }
    InverseTransformVectorsInternal(vectors, transformedVectors) { window.ctx.call("UnityEngine.Transform", "InverseTransformVectorsInternal", [this.ptr, vectors, transformedVectors]); }
    static InverseTransformVectorsInternal_Injected(_unity_self, vectors, transformedVectors) { window.ctx.call("UnityEngine.Transform", "InverseTransformVectorsInternal_Injected", [_unity_self, vectors, transformedVectors]); }
    IsChildOf(parent) { return window.ctx.call("UnityEngine.Transform", "IsChildOf", [this.ptr, parent]).val() === 1; }
    static IsChildOf_Injected(_unity_self, parent) { return window.ctx.call("UnityEngine.Transform", "IsChildOf_Injected", [_unity_self, parent]).val() === 1; }
    IsConstrainProportionsScale() { return window.ctx.call("UnityEngine.Transform", "IsConstrainProportionsScale", [this.ptr]).val() === 1; }
    static IsConstrainProportionsScale_Injected(_unity_self) { return window.ctx.call("UnityEngine.Transform", "IsConstrainProportionsScale_Injected", [_unity_self]).val() === 1; }
    IsNonUniformScaleTransform() { return window.ctx.call("UnityEngine.Transform", "IsNonUniformScaleTransform", [this.ptr]).val() === 1; }
    static IsNonUniformScaleTransform_Injected(_unity_self) { return window.ctx.call("UnityEngine.Transform", "IsNonUniformScaleTransform_Injected", [_unity_self]).val() === 1; }
    LookAt_target_worldUp(target, worldUp) { window.ctx.call("UnityEngine.Transform", "LookAt_22929", [this.ptr, target, worldUp]); }
    LookAt_target(target) { window.ctx.call("UnityEngine.Transform", "LookAt_22930", [this.ptr, target]); }
    LookAt_worldPosition_worldUp(worldPosition, worldUp) { window.ctx.call("UnityEngine.Transform", "LookAt_22931", [this.ptr, worldPosition, worldUp]); }
    LookAt_worldPosition(worldPosition) { window.ctx.call("UnityEngine.Transform", "LookAt_2731", [this.ptr, worldPosition]); }
    MoveAfterSibling(transform, notifyEditorAndMarkDirty) { window.ctx.call("UnityEngine.Transform", "MoveAfterSibling", [this.ptr, transform, notifyEditorAndMarkDirty]); }
    static MoveAfterSibling_Injected(_unity_self, transform, notifyEditorAndMarkDirty) { window.ctx.call("UnityEngine.Transform", "MoveAfterSibling_Injected", [_unity_self, transform, notifyEditorAndMarkDirty]); }
    Rotate_eulers_relativeTo(eulers, relativeTo) { window.ctx.call("UnityEngine.Transform", "Rotate_22921", [this.ptr, eulers, relativeTo]); }
    Rotate_eulers(eulers) { window.ctx.call("UnityEngine.Transform", "Rotate_22922", [this.ptr, eulers]); }
    Rotate_xAngle_yAngle_zAngle_relativeTo(xAngle, yAngle, zAngle, relativeTo) { window.ctx.call("UnityEngine.Transform", "Rotate_22923", [this.ptr, xAngle, yAngle, zAngle, relativeTo]); }
    Rotate_xAngle_yAngle_zAngle(xAngle, yAngle, zAngle) { window.ctx.call("UnityEngine.Transform", "Rotate_22924", [this.ptr, xAngle, yAngle, zAngle]); }
    Rotate_axis_angle_relativeTo(axis, angle, relativeTo) { window.ctx.call("UnityEngine.Transform", "Rotate_22926", [this.ptr, axis, angle, relativeTo]); }
    Rotate_axis_angle(axis, angle) { window.ctx.call("UnityEngine.Transform", "Rotate_22927", [this.ptr, axis, angle]); }
    RotateAround_point_axis_angle(point, axis, angle) { window.ctx.call("UnityEngine.Transform", "RotateAround_22928", [this.ptr, point, axis, angle]); }
    RotateAround_axis_angle(axis, angle) { window.ctx.call("UnityEngine.Transform", "RotateAround_22978", [this.ptr, axis, angle]); }
    RotateAroundInternal(axis, angle) { window.ctx.call("UnityEngine.Transform", "RotateAroundInternal", [this.ptr, axis, angle]); }
    static RotateAroundInternal_Injected(_unity_self, axis, angle) { window.ctx.call("UnityEngine.Transform", "RotateAroundInternal_Injected", [_unity_self, axis, angle]); }
    RotateAroundLocal(axis, angle) { window.ctx.call("UnityEngine.Transform", "RotateAroundLocal", [this.ptr, axis, angle]); }
    static RotateAroundLocal_Injected(_unity_self, axis, angle) { window.ctx.call("UnityEngine.Transform", "RotateAroundLocal_Injected", [_unity_self, axis, angle]); }
    static RotateAround_Injected(_unity_self, axis, angle) { window.ctx.call("UnityEngine.Transform", "RotateAround_Injected", [_unity_self, axis, angle]); }
    SendTransformChangedScale() { window.ctx.call("UnityEngine.Transform", "SendTransformChangedScale", [this.ptr]); }
    static SendTransformChangedScale_Injected(_unity_self) { window.ctx.call("UnityEngine.Transform", "SendTransformChangedScale_Injected", [_unity_self]); }
    SetAsFirstSibling() { window.ctx.call("UnityEngine.Transform", "SetAsFirstSibling", [this.ptr]); }
    static SetAsFirstSibling_Injected(_unity_self) { window.ctx.call("UnityEngine.Transform", "SetAsFirstSibling_Injected", [_unity_self]); }
    SetAsLastSibling() { window.ctx.call("UnityEngine.Transform", "SetAsLastSibling", [this.ptr]); }
    static SetAsLastSibling_Injected(_unity_self) { window.ctx.call("UnityEngine.Transform", "SetAsLastSibling_Injected", [_unity_self]); }
    SetConstrainProportionsScale(isLinked) { window.ctx.call("UnityEngine.Transform", "SetConstrainProportionsScale", [this.ptr, isLinked]); }
    static SetConstrainProportionsScale_Injected(_unity_self, isLinked) { window.ctx.call("UnityEngine.Transform", "SetConstrainProportionsScale_Injected", [_unity_self, isLinked]); }
    SetLocalEulerAngles(euler, order) { window.ctx.call("UnityEngine.Transform", "SetLocalEulerAngles", [this.ptr, euler, order]); }
    static SetLocalEulerAngles_Injected(_unity_self, euler, order) { window.ctx.call("UnityEngine.Transform", "SetLocalEulerAngles_Injected", [_unity_self, euler, order]); }
    SetLocalEulerHint(euler) { window.ctx.call("UnityEngine.Transform", "SetLocalEulerHint", [this.ptr, euler]); }
    static SetLocalEulerHint_Injected(_unity_self, euler) { window.ctx.call("UnityEngine.Transform", "SetLocalEulerHint_Injected", [_unity_self, euler]); }
    SetLocalPositionAndRotation(localPosition, localRotation) { window.ctx.call("UnityEngine.Transform", "SetLocalPositionAndRotation", [this.ptr, localPosition, localRotation]); }
    static SetLocalPositionAndRotation_Injected(_unity_self, localPosition, localRotation) { window.ctx.call("UnityEngine.Transform", "SetLocalPositionAndRotation_Injected", [_unity_self, localPosition, localRotation]); }
    SetParent_p(p) { window.ctx.call("UnityEngine.Transform", "SetParent_2139", [this.ptr, p]); }
    SetParent_parent_worldPositionStays(parent, worldPositionStays) { window.ctx.call("UnityEngine.Transform", "SetParent_22909", [this.ptr, parent, worldPositionStays]); }
    static SetParent_Injected(_unity_self, parent, worldPositionStays) { window.ctx.call("UnityEngine.Transform", "SetParent_Injected", [_unity_self, parent, worldPositionStays]); }
    SetPositionAndRotation(position, rotation) { window.ctx.call("UnityEngine.Transform", "SetPositionAndRotation", [this.ptr, position, rotation]); }
    static SetPositionAndRotation_Injected(_unity_self, position, rotation) { window.ctx.call("UnityEngine.Transform", "SetPositionAndRotation_Injected", [_unity_self, position, rotation]); }
    SetRotationOrderInternal(rotationOrder) { window.ctx.call("UnityEngine.Transform", "SetRotationOrderInternal", [this.ptr, rotationOrder]); }
    static SetRotationOrderInternal_Injected(_unity_self, rotationOrder) { window.ctx.call("UnityEngine.Transform", "SetRotationOrderInternal_Injected", [_unity_self, rotationOrder]); }
    SetSiblingIndex(index) { window.ctx.call("UnityEngine.Transform", "SetSiblingIndex", [this.ptr, index]); }
    static SetSiblingIndex_Injected(_unity_self, index) { window.ctx.call("UnityEngine.Transform", "SetSiblingIndex_Injected", [_unity_self, index]); }
    TransformDirection_direction(direction) { return (()=>{
					let structptr_1abe30 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Transform", "TransformDirection_22933", [structptr_1abe30, this.ptr, direction]);
					return structptr_1abe30;
				})(); }
    TransformDirection_x_y_z(x, y, z) { return (()=>{
					let structptr_aba7c1 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Transform", "TransformDirection_22934", [structptr_aba7c1, this.ptr, x, y, z]);
					return structptr_aba7c1;
				})(); }
    static TransformDirection_Injected(_unity_self, direction, ret) { window.ctx.call("UnityEngine.Transform", "TransformDirection_Injected", [_unity_self, direction, ret]); }
    TransformDirections_directions_transformedDirections(directions, transformedDirections) { window.ctx.call("UnityEngine.Transform", "TransformDirections_22936", [this.ptr, directions, transformedDirections]); }
    TransformDirections_directions(directions) { window.ctx.call("UnityEngine.Transform", "TransformDirections_22937", [this.ptr, directions]); }
    TransformDirectionsInternal(directions, transformedDirections) { window.ctx.call("UnityEngine.Transform", "TransformDirectionsInternal", [this.ptr, directions, transformedDirections]); }
    static TransformDirectionsInternal_Injected(_unity_self, directions, transformedDirections) { window.ctx.call("UnityEngine.Transform", "TransformDirectionsInternal_Injected", [_unity_self, directions, transformedDirections]); }
    TransformPoint_position(position) { return (()=>{
					let structptr_113c3e = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Transform", "TransformPoint_22952", [structptr_113c3e, this.ptr, position]);
					return structptr_113c3e;
				})(); }
    TransformPoint_x_y_z(x, y, z) { return (()=>{
					let structptr_a7f2a9 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Transform", "TransformPoint_22953", [structptr_a7f2a9, this.ptr, x, y, z]);
					return structptr_a7f2a9;
				})(); }
    static TransformPoint_Injected(_unity_self, position, ret) { window.ctx.call("UnityEngine.Transform", "TransformPoint_Injected", [_unity_self, position, ret]); }
    TransformPoints_positions_transformedPositions(positions, transformedPositions) { window.ctx.call("UnityEngine.Transform", "TransformPoints_22955", [this.ptr, positions, transformedPositions]); }
    TransformPoints_positions(positions) { window.ctx.call("UnityEngine.Transform", "TransformPoints_22956", [this.ptr, positions]); }
    TransformPointsInternal(positions, transformedPositions) { window.ctx.call("UnityEngine.Transform", "TransformPointsInternal", [this.ptr, positions, transformedPositions]); }
    static TransformPointsInternal_Injected(_unity_self, positions, transformedPositions) { window.ctx.call("UnityEngine.Transform", "TransformPointsInternal_Injected", [_unity_self, positions, transformedPositions]); }
    TransformVector_vector(vector) { return (()=>{
					let structptr_3caccd = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Transform", "TransformVector_22942", [structptr_3caccd, this.ptr, vector]);
					return structptr_3caccd;
				})(); }
    TransformVector_x_y_z(x, y, z) { return (()=>{
					let structptr_63dd53 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Transform", "TransformVector_22943", [structptr_63dd53, this.ptr, x, y, z]);
					return structptr_63dd53;
				})(); }
    static TransformVector_Injected(_unity_self, vector, ret) { window.ctx.call("UnityEngine.Transform", "TransformVector_Injected", [_unity_self, vector, ret]); }
    TransformVectors_vectors_transformedVectors(vectors, transformedVectors) { window.ctx.call("UnityEngine.Transform", "TransformVectors_22945", [this.ptr, vectors, transformedVectors]); }
    TransformVectors_vectors(vectors) { window.ctx.call("UnityEngine.Transform", "TransformVectors_22946", [this.ptr, vectors]); }
    TransformVectorsInternal(vectors, transformedVectors) { window.ctx.call("UnityEngine.Transform", "TransformVectorsInternal", [this.ptr, vectors, transformedVectors]); }
    static TransformVectorsInternal_Injected(_unity_self, vectors, transformedVectors) { window.ctx.call("UnityEngine.Transform", "TransformVectorsInternal_Injected", [_unity_self, vectors, transformedVectors]); }
    Translate_translation_relativeTo(translation, relativeTo) { window.ctx.call("UnityEngine.Transform", "Translate_22915", [this.ptr, translation, relativeTo]); }
    Translate_translation(translation) { window.ctx.call("UnityEngine.Transform", "Translate_22916", [this.ptr, translation]); }
    Translate_x_y_z_relativeTo(x, y, z, relativeTo) { window.ctx.call("UnityEngine.Transform", "Translate_22917", [this.ptr, x, y, z, relativeTo]); }
    Translate_x_y_z(x, y, z) { window.ctx.call("UnityEngine.Transform", "Translate_22918", [this.ptr, x, y, z]); }
    Translate_translation_relativeTo(translation, relativeTo) { window.ctx.call("UnityEngine.Transform", "Translate_22919", [this.ptr, translation, relativeTo]); }
    Translate_x_y_z_relativeTo(x, y, z, relativeTo) { window.ctx.call("UnityEngine.Transform", "Translate_22920", [this.ptr, x, y, z, relativeTo]); }
    static get_childCount_Injected(_unity_self) { return window.ctx.call("UnityEngine.Transform", "get_childCount_Injected", [_unity_self]).val(); }
    static get_hasChanged_Injected(_unity_self) { return window.ctx.call("UnityEngine.Transform", "get_hasChanged_Injected", [_unity_self]).val() === 1; }
    static get_localPosition_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Transform", "get_localPosition_Injected", [_unity_self, ret]); }
    static get_localRotation_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Transform", "get_localRotation_Injected", [_unity_self, ret]); }
    static get_localScale_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Transform", "get_localScale_Injected", [_unity_self, ret]); }
    static get_localToWorldMatrix_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Transform", "get_localToWorldMatrix_Injected", [_unity_self, ret]); }
    static get_lossyScale_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Transform", "get_lossyScale_Injected", [_unity_self, ret]); }
    static get_position_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Transform", "get_position_Injected", [_unity_self, ret]); }
    static get_rotation_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Transform", "get_rotation_Injected", [_unity_self, ret]); }
    static get_worldToLocalMatrix_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Transform", "get_worldToLocalMatrix_Injected", [_unity_self, ret]); }
    internal_getHierarchyCapacity() { return window.ctx.call("UnityEngine.Transform", "internal_getHierarchyCapacity", [this.ptr]).val(); }
    static internal_getHierarchyCapacity_Injected(_unity_self) { return window.ctx.call("UnityEngine.Transform", "internal_getHierarchyCapacity_Injected", [_unity_self]).val(); }
    internal_getHierarchyCount() { return window.ctx.call("UnityEngine.Transform", "internal_getHierarchyCount", [this.ptr]).val(); }
    static internal_getHierarchyCount_Injected(_unity_self) { return window.ctx.call("UnityEngine.Transform", "internal_getHierarchyCount_Injected", [_unity_self]).val(); }
    internal_setHierarchyCapacity(value) { window.ctx.call("UnityEngine.Transform", "internal_setHierarchyCapacity", [this.ptr, value]); }
    static internal_setHierarchyCapacity_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Transform", "internal_setHierarchyCapacity_Injected", [_unity_self, value]); }
    static set_hasChanged_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Transform", "set_hasChanged_Injected", [_unity_self, value]); }
    static set_localPosition_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Transform", "set_localPosition_Injected", [_unity_self, value]); }
    static set_localRotation_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Transform", "set_localRotation_Injected", [_unity_self, value]); }
    static set_localScale_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Transform", "set_localScale_Injected", [_unity_self, value]); }
    static set_position_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Transform", "set_position_Injected", [_unity_self, value]); }
    static set_rotation_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Transform", "set_rotation_Injected", [_unity_self, value]); }
}

export class Image {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get activeSprite() { return new Sprite(window.ctx.call("UnityEngine.UI.Image", "get_activeSprite", [this.ptr])); }
    get alphaHitTestMinimumThreshold() { return window.ctx.call("UnityEngine.UI.Image", "get_alphaHitTestMinimumThreshold", [this.ptr]).val(); }
    set alphaHitTestMinimumThreshold(v) { window.ctx.call("UnityEngine.UI.Image", "set_alphaHitTestMinimumThreshold", [this.ptr, v]); }
    static get defaultETC1GraphicMaterial() { return new Material(window.ctx.call("UnityEngine.UI.Image", "get_defaultETC1GraphicMaterial", [])); }
    get eventAlphaThreshold() { return window.ctx.call("UnityEngine.UI.Image", "get_eventAlphaThreshold", [this.ptr]).val(); }
    set eventAlphaThreshold(v) { window.ctx.call("UnityEngine.UI.Image", "set_eventAlphaThreshold", [this.ptr, v]); }
    get fillAmount() { return window.ctx.call("UnityEngine.UI.Image", "get_fillAmount", [this.ptr]).val(); }
    set fillAmount(v) { window.ctx.call("UnityEngine.UI.Image", "set_fillAmount", [this.ptr, v]); }
    get fillCenter() { return window.ctx.call("UnityEngine.UI.Image", "get_fillCenter", [this.ptr]).val() === 1; }
    set fillCenter(v) { window.ctx.call("UnityEngine.UI.Image", "set_fillCenter", [this.ptr, v]); }
    get fillClockwise() { return window.ctx.call("UnityEngine.UI.Image", "get_fillClockwise", [this.ptr]).val() === 1; }
    set fillClockwise(v) { window.ctx.call("UnityEngine.UI.Image", "set_fillClockwise", [this.ptr, v]); }
    get fillMethod() { return window.ctx.call("UnityEngine.UI.Image", "get_fillMethod", [this.ptr]); }
    set fillMethod(v) { window.ctx.call("UnityEngine.UI.Image", "set_fillMethod", [this.ptr, v]); }
    get fillOrigin() { return window.ctx.call("UnityEngine.UI.Image", "get_fillOrigin", [this.ptr]).val(); }
    set fillOrigin(v) { window.ctx.call("UnityEngine.UI.Image", "set_fillOrigin", [this.ptr, v]); }
    get flexibleHeight() { return window.ctx.call("UnityEngine.UI.Image", "get_flexibleHeight", [this.ptr]).val(); }
    get flexibleWidth() { return window.ctx.call("UnityEngine.UI.Image", "get_flexibleWidth", [this.ptr]).val(); }
    get hasBorder() { return window.ctx.call("UnityEngine.UI.Image", "get_hasBorder", [this.ptr]).val() === 1; }
    get layoutPriority() { return window.ctx.call("UnityEngine.UI.Image", "get_layoutPriority", [this.ptr]).val(); }
    get mainTexture() { return new Texture(window.ctx.call("UnityEngine.UI.Image", "get_mainTexture", [this.ptr])); }
    get material() { return new Material(window.ctx.call("UnityEngine.UI.Image", "get_material", [this.ptr])); }
    set material(v) { window.ctx.call("UnityEngine.UI.Image", "set_material", [this.ptr, v]); }
    get minHeight() { return window.ctx.call("UnityEngine.UI.Image", "get_minHeight", [this.ptr]).val(); }
    get minWidth() { return window.ctx.call("UnityEngine.UI.Image", "get_minWidth", [this.ptr]).val(); }
    get multipliedPixelsPerUnit() { return window.ctx.call("UnityEngine.UI.Image", "get_multipliedPixelsPerUnit", [this.ptr]).val(); }
    get overrideSprite() { return new Sprite(window.ctx.call("UnityEngine.UI.Image", "get_overrideSprite", [this.ptr])); }
    set overrideSprite(v) { window.ctx.call("UnityEngine.UI.Image", "set_overrideSprite", [this.ptr, v]); }
    get pixelsPerUnit() { return window.ctx.call("UnityEngine.UI.Image", "get_pixelsPerUnit", [this.ptr]).val(); }
    get pixelsPerUnitMultiplier() { return window.ctx.call("UnityEngine.UI.Image", "get_pixelsPerUnitMultiplier", [this.ptr]).val(); }
    set pixelsPerUnitMultiplier(v) { window.ctx.call("UnityEngine.UI.Image", "set_pixelsPerUnitMultiplier", [this.ptr, v]); }
    get preferredHeight() { return window.ctx.call("UnityEngine.UI.Image", "get_preferredHeight", [this.ptr]).val(); }
    get preferredWidth() { return window.ctx.call("UnityEngine.UI.Image", "get_preferredWidth", [this.ptr]).val(); }
    get preserveAspect() { return window.ctx.call("UnityEngine.UI.Image", "get_preserveAspect", [this.ptr]).val() === 1; }
    set preserveAspect(v) { window.ctx.call("UnityEngine.UI.Image", "set_preserveAspect", [this.ptr, v]); }
    get secondaryTextures() { return window.ctx.call("UnityEngine.UI.Image", "get_secondaryTextures", [this.ptr]); }
    get sprite() { return new Sprite(window.ctx.call("UnityEngine.UI.Image", "get_sprite", [this.ptr])); }
    set sprite(v) { window.ctx.call("UnityEngine.UI.Image", "set_sprite", [this.ptr, v]); }
    get type() { return new Type(window.ctx.call("UnityEngine.UI.Image", "get_type", [this.ptr])); }
    set type(v) { window.ctx.call("UnityEngine.UI.Image", "set_type", [this.ptr, v]); }
    get useSpriteMesh() { return window.ctx.call("UnityEngine.UI.Image", "get_useSpriteMesh", [this.ptr]).val() === 1; }
    set useSpriteMesh(v) { window.ctx.call("UnityEngine.UI.Image", "set_useSpriteMesh", [this.ptr, v]); }
    get m_AlphaHitTestMinimumThreshold() { return this.ptr.readField(0xA0, 'f32').val(); }
    set m_AlphaHitTestMinimumThreshold(v) { return this.ptr.writeField(0xA0, 'f32', v); }
    get m_CachedReferencePixelsPerUnit() { return this.ptr.readField(0xAC, 'f32').val(); }
    set m_CachedReferencePixelsPerUnit(v) { return this.ptr.writeField(0xAC, 'f32', v); }
    get m_FillAmount() { return this.ptr.readField(0x94, 'f32').val(); }
    set m_FillAmount(v) { return this.ptr.writeField(0x94, 'f32', v); }
    get m_FillCenter() { return this.ptr.readField(0x8D, 'i32').val() === 1; }
    set m_FillCenter(v) { return this.ptr.writeField(0x8D, 'i32', v); }
    get m_FillClockwise() { return this.ptr.readField(0x98, 'i32').val() === 1; }
    set m_FillClockwise(v) { return this.ptr.writeField(0x98, 'i32', v); }
    get m_FillMethod() { return this.ptr.readField(0x90, 'i32'); }
    set m_FillMethod(v) { return this.ptr.writeField(0x90, 'i32', v); }
    get m_FillOrigin() { return this.ptr.readField(0x9C, 'i32').val(); }
    set m_FillOrigin(v) { return this.ptr.writeField(0x9C, 'i32', v); }
    get m_OverrideSprite() { return new Sprite(this.ptr.readField(0x84, 'i32')); }
    set m_OverrideSprite(v) { return this.ptr.writeField(0x84, 'i32', v); }
    get m_PixelsPerUnitMultiplier() { return this.ptr.readField(0xA8, 'f32').val(); }
    set m_PixelsPerUnitMultiplier(v) { return this.ptr.writeField(0xA8, 'f32', v); }
    get m_PreserveAspect() { return this.ptr.readField(0x8C, 'i32').val() === 1; }
    set m_PreserveAspect(v) { return this.ptr.writeField(0x8C, 'i32', v); }
    get m_SecondaryTextures() { return JSArray(this.ptr.readField(0xB0, 'i32')); }
    set m_SecondaryTextures(v) { return this.ptr.writeField(0xB0, 'i32', v); }
    get m_Sprite() { return new Sprite(this.ptr.readField(0x80, 'i32')); }
    set m_Sprite(v) { return this.ptr.writeField(0x80, 'i32', v); }
    get m_Tracked() { return this.ptr.readField(0xA4, 'i32').val() === 1; }
    set m_Tracked(v) { return this.ptr.writeField(0xA4, 'i32', v); }
    get m_TrackedTexturelessImages() { return this.ptr.readField(0x18, 'i32'); }
    set m_TrackedTexturelessImages(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get m_Type() { return new Type(this.ptr.readField(0x88, 'i32')); }
    set m_Type(v) { return this.ptr.writeField(0x88, 'i32', v); }
    get m_UseSpriteMesh() { return this.ptr.readField(0xA5, 'i32').val() === 1; }
    set m_UseSpriteMesh(v) { return this.ptr.writeField(0xA5, 'i32', v); }
    get s_ETC1DefaultUI() { return new Material(this.ptr.readField(0x0, 'i32')); }
    set s_ETC1DefaultUI(v) { return this.ptr.writeField(0x0, 'i32', v); }
    get s_Initialized() { return this.ptr.readField(0x1C, 'i32').val() === 1; }
    set s_Initialized(v) { return this.ptr.writeField(0x1C, 'i32', v); }
    get s_TempNewSecondaryTextures() { return JSArray(this.ptr.readField(0x4, 'i32')); }
    set s_TempNewSecondaryTextures(v) { return this.ptr.writeField(0x4, 'i32', v); }
    get s_UVScratch() { return JSArray(this.ptr.readField(0xC, 'i32')); }
    set s_UVScratch(v) { return this.ptr.writeField(0xC, 'i32', v); }
    get s_Uv() { return JSArray(this.ptr.readField(0x14, 'i32')); }
    set s_Uv(v) { return this.ptr.writeField(0x14, 'i32', v); }
    get s_VertScratch() { return JSArray(this.ptr.readField(0x8, 'i32')); }
    set s_VertScratch(v) { return this.ptr.writeField(0x8, 'i32', v); }
    get s_Xy() { return JSArray(this.ptr.readField(0x10, 'i32')); }
    set s_Xy(v) { return this.ptr.writeField(0x10, 'i32', v); }
    static _CheckSecondaryTexturesChanged_g_Compare_93_0(array1, array2) { return window.ctx.call("UnityEngine.UI.Image", "<CheckSecondaryTexturesChanged>g__Compare|93_0", [array1, array2]).val() === 1; }
    _set_sprite_g_ResetAlphaHitThresholdIfNeeded_11_0() { window.ctx.call("UnityEngine.UI.Image", "<set_sprite>g__ResetAlphaHitThresholdIfNeeded|11_0", [this.ptr]); }
    _set_sprite_g_SpriteSupportsAlphaHitTest_11_1() { return window.ctx.call("UnityEngine.UI.Image", "<set_sprite>g__SpriteSupportsAlphaHitTest|11_1", [this.ptr]).val() === 1; }
    static AddQuad_vertexHelper_quadPositions_color_quadUVs(vertexHelper, quadPositions, color, quadUVs) { window.ctx.call("UnityEngine.UI.Image", "AddQuad_27121", [vertexHelper, quadPositions, color, quadUVs]); }
    static AddQuad_vertexHelper_posMin_posMax_color_uvMin_uvMax(vertexHelper, posMin, posMax, color, uvMin, uvMax) { window.ctx.call("UnityEngine.UI.Image", "AddQuad_27122", [vertexHelper, posMin, posMax, color, uvMin, uvMax]); }
    CalculateLayoutInputHorizontal() { window.ctx.call("UnityEngine.UI.Image", "CalculateLayoutInputHorizontal", [this.ptr]); }
    CalculateLayoutInputVertical() { window.ctx.call("UnityEngine.UI.Image", "CalculateLayoutInputVertical", [this.ptr]); }
    CheckSecondaryTexturesChanged_sprite(sprite) { return window.ctx.call("UnityEngine.UI.Image", "CheckSecondaryTexturesChanged_27112", [this.ptr, sprite]).val() === 1; }
    CheckSecondaryTexturesChanged_sprite_newSecondaryTextures(sprite, newSecondaryTextures) { return window.ctx.call("UnityEngine.UI.Image", "CheckSecondaryTexturesChanged_27113", [this.ptr, sprite, newSecondaryTextures]).val() === 1; }
    static ClearArray(array) { window.ctx.call("UnityEngine.UI.Image", "ClearArray", [array]); }
    DisableSpriteOptimizations() { window.ctx.call("UnityEngine.UI.Image", "DisableSpriteOptimizations", [this.ptr]); }
    GenerateFilledSprite(toFill, preserveAspect) { window.ctx.call("UnityEngine.UI.Image", "GenerateFilledSprite", [this.ptr, toFill, preserveAspect]); }
    GenerateSimpleSprite(vh, lPreserveAspect) { window.ctx.call("UnityEngine.UI.Image", "GenerateSimpleSprite", [this.ptr, vh, lPreserveAspect]); }
    GenerateSlicedSprite(toFill) { window.ctx.call("UnityEngine.UI.Image", "GenerateSlicedSprite", [this.ptr, toFill]); }
    GenerateSprite(vh, lPreserveAspect) { window.ctx.call("UnityEngine.UI.Image", "GenerateSprite", [this.ptr, vh, lPreserveAspect]); }
    GenerateTiledSprite(toFill) { window.ctx.call("UnityEngine.UI.Image", "GenerateTiledSprite", [this.ptr, toFill]); }
    GetAdjustedBorders(border, adjustedRect) { return (()=>{
					let structptr_270382 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.UI.Image", "GetAdjustedBorders", [structptr_270382, this.ptr, border, adjustedRect]);
					return structptr_270382;
				})(); }
    GetDrawingDimensions(shouldPreserveAspect) { return (()=>{
					let structptr_422557 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.UI.Image", "GetDrawingDimensions", [structptr_422557, this.ptr, shouldPreserveAspect]);
					return structptr_422557;
				})(); }
    IsRaycastLocationValid(screenPoint, eventCamera) { return window.ctx.call("UnityEngine.UI.Image", "IsRaycastLocationValid", [this.ptr, screenPoint, eventCamera]).val() === 1; }
    MapCoordinate(local, rect) { return (()=>{
					let structptr_6657dd = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.UI.Image", "MapCoordinate", [structptr_6657dd, this.ptr, local, rect]);
					return structptr_6657dd;
				})(); }
    OnAfterDeserialize() { window.ctx.call("UnityEngine.UI.Image", "OnAfterDeserialize", [this.ptr]); }
    OnBeforeSerialize() { window.ctx.call("UnityEngine.UI.Image", "OnBeforeSerialize", [this.ptr]); }
    OnCanvasHierarchyChanged() { window.ctx.call("UnityEngine.UI.Image", "OnCanvasHierarchyChanged", [this.ptr]); }
    OnDidApplyAnimationProperties() { window.ctx.call("UnityEngine.UI.Image", "OnDidApplyAnimationProperties", [this.ptr]); }
    OnDisable() { window.ctx.call("UnityEngine.UI.Image", "OnDisable", [this.ptr]); }
    OnEnable() { window.ctx.call("UnityEngine.UI.Image", "OnEnable", [this.ptr]); }
    OnPopulateMesh(toFill) { window.ctx.call("UnityEngine.UI.Image", "OnPopulateMesh", [this.ptr, toFill]); }
    PreserveSpriteAspectRatio(rect, spriteSize) { window.ctx.call("UnityEngine.UI.Image", "PreserveSpriteAspectRatio", [this.ptr, rect, spriteSize]); }
    static RadialCut_xy_uv_fill_invert_corner(xy, uv, fill, invert, corner) { return window.ctx.call("UnityEngine.UI.Image", "RadialCut_27125", [xy, uv, fill, invert, corner]).val() === 1; }
    static RadialCut_xy_cos_sin_invert_corner(xy, cos, sin, invert, corner) { window.ctx.call("UnityEngine.UI.Image", "RadialCut_27126", [xy, cos, sin, invert, corner]); }
    static RebuildImage(spriteAtlas) { window.ctx.call("UnityEngine.UI.Image", "RebuildImage", [spriteAtlas]); }
    SetNativeSize() { window.ctx.call("UnityEngine.UI.Image", "SetNativeSize", [this.ptr]); }
    SetSecondaryTextures(renderer) { window.ctx.call("UnityEngine.UI.Image", "SetSecondaryTextures", [this.ptr, renderer]); }
    static TrackImage(g) { window.ctx.call("UnityEngine.UI.Image", "TrackImage", [g]); }
    TrackSprite() { window.ctx.call("UnityEngine.UI.Image", "TrackSprite", [this.ptr]); }
    static UnTrackImage(g) { window.ctx.call("UnityEngine.UI.Image", "UnTrackImage", [g]); }
    UpdateMaterial() { window.ctx.call("UnityEngine.UI.Image", "UpdateMaterial", [this.ptr]); }
}

export class LayerMask {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get m_Mask() { return this.ptr.readField(0x0, 'i32').val(); }
    set m_Mask(v) { return this.ptr.writeField(0x0, 'i32', v); }
    static GetMask(layerNames) { return window.ctx.call("UnityEngine.LayerMask", "GetMask", [layerNames]).val(); }
    static NameToLayer(layerName) { return window.ctx.call("UnityEngine.LayerMask", "NameToLayer", [layerName]).val(); }
    static NameToLayer_Injected(layerName) { return window.ctx.call("UnityEngine.LayerMask", "NameToLayer_Injected", [layerName]).val(); }
}

export class MovementStateManager {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get CurrentState() { return window.ctx.call("MovementStateManager", "get_CurrentState", [this.ptr]); }
    set CurrentState(v) { window.ctx.call("MovementStateManager", "set_CurrentState", [this.ptr, v]); }
    get Crouching() { return this.ptr.readField(0x2, 'i32').val() === 1; }
    set Crouching(v) { return this.ptr.writeField(0x2, 'i32', v); }
    get Grounded() { return this.ptr.readField(0x0, 'i32').val() === 1; }
    set Grounded(v) { return this.ptr.writeField(0x0, 'i32', v); }
    get Sprinting() { return this.ptr.readField(0x1, 'i32').val() === 1; }
    set Sprinting(v) { return this.ptr.writeField(0x1, 'i32', v); }
    get _currentGroundState() { return this.ptr.readField(0x24, 'i32'); }
    set _currentGroundState(v) { return this.ptr.writeField(0x24, 'i32', v); }
    get _currentState() { return this.ptr.readField(0x20, 'i32'); }
    set _currentState(v) { return this.ptr.writeField(0x20, 'i32', v); }
    get cameraSpring() { return new Spring(this.ptr.readField(0x1C, 'i32')); }
    set cameraSpring(v) { return this.ptr.writeField(0x1C, 'i32', v); }
    get colyTransform() { return new ColyTransform(this.ptr.readField(0x14, 'i32')); }
    set colyTransform(v) { return this.ptr.writeField(0x14, 'i32', v); }
    get colyView() { return new ColyView(this.ptr.readField(0x10, 'i32')); }
    set colyView(v) { return this.ptr.writeField(0x10, 'i32', v); }
    get isBlocked() { return this.ptr.readField(0x3, 'i32').val() === 1; }
    set isBlocked(v) { return this.ptr.writeField(0x3, 'i32', v); }
    get lastSpherecast() { return this.ptr.readField(0x28, 'f32').val(); }
    set lastSpherecast(v) { return this.ptr.writeField(0x28, 'f32', v); }
    get weaponParent() { return new Spring(this.ptr.readField(0x18, 'i32')); }
    set weaponParent(v) { return this.ptr.writeField(0x18, 'i32', v); }
    ApplyRecoil() { window.ctx.call("MovementStateManager", "ApplyRecoil", [this.ptr]); }
    ApplyRecoilCustom(type) { window.ctx.call("MovementStateManager", "ApplyRecoilCustom", [this.ptr, type]); }
    InitRecoil(weaponRecoil, cameraRecoil) { window.ctx.call("MovementStateManager", "InitRecoil", [this.ptr, weaponRecoil, cameraRecoil]); }
    OnDisable() { window.ctx.call("MovementStateManager", "OnDisable", [this.ptr]); }
    OnEnable() { window.ctx.call("MovementStateManager", "OnEnable", [this.ptr]); }
    OnGroundedChange(isGrounded) { window.ctx.call("MovementStateManager", "OnGroundedChange", [this.ptr, isGrounded]); }
    Start() { window.ctx.call("MovementStateManager", "Start", [this.ptr]); }
    Update() { window.ctx.call("MovementStateManager", "Update", [this.ptr]); }
    UpdateMovementState(movementState) { window.ctx.call("MovementStateManager", "UpdateMovementState", [this.ptr, movementState]); }
}

export class Spring {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get _smoothDampPositionVelocity() { return new Vector3(this.ptr.readField(0x20, 'i32')); }
    set _smoothDampPositionVelocity(v) { return this.ptr.writeField(0x20, 'i32', v); }
    get _smoothDampVelocityX() { return this.ptr.readField(0x2C, 'f32').val(); }
    set _smoothDampVelocityX(v) { return this.ptr.writeField(0x2C, 'f32', v); }
    get _smoothDampVelocityY() { return this.ptr.readField(0x30, 'f32').val(); }
    set _smoothDampVelocityY(v) { return this.ptr.writeField(0x30, 'f32', v); }
    get _smoothDampVelocityZ() { return this.ptr.readField(0x34, 'f32').val(); }
    set _smoothDampVelocityZ(v) { return this.ptr.writeField(0x34, 'f32', v); }
    get bobblingMultiFromSettings() { return this.ptr.readField(0x0, 'f32').val(); }
    set bobblingMultiFromSettings(v) { return this.ptr.writeField(0x0, 'f32', v); }
    get currentMovementState() { return this.ptr.readField(0x5C, 'i32'); }
    set currentMovementState(v) { return this.ptr.writeField(0x5C, 'i32', v); }
    get handsHeightFromSettings() { return this.ptr.readField(0x4, 'f32').val(); }
    set handsHeightFromSettings(v) { return this.ptr.writeField(0x4, 'f32', v); }
    get interpolationMethod() { return new InterpolationMethod(this.ptr.readField(0x1C, 'i32')); }
    set interpolationMethod(v) { return this.ptr.writeField(0x1C, 'i32', v); }
    get isCamera() { return this.ptr.readField(0x10, 'i32').val() === 1; }
    set isCamera(v) { return this.ptr.writeField(0x10, 'i32', v); }
    get kinematicCharacterMotor() { return new KinematicCharacterMotor(this.ptr.readField(0x18, 'i32')); }
    set kinematicCharacterMotor(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get lastPositionY() { return this.ptr.readField(0x70, 'f32').val(); }
    set lastPositionY(v) { return this.ptr.writeField(0x70, 'f32', v); }
    get myShaker() { return new Shaker(this.ptr.readField(0x14, 'i32')); }
    set myShaker(v) { return this.ptr.writeField(0x14, 'i32', v); }
    get noiseOffsetX() { return this.ptr.readField(0x64, 'f32').val(); }
    set noiseOffsetX(v) { return this.ptr.writeField(0x64, 'f32', v); }
    get noiseOffsetY() { return this.ptr.readField(0x68, 'f32').val(); }
    set noiseOffsetY(v) { return this.ptr.writeField(0x68, 'f32', v); }
    get noiseOffsetZ() { return this.ptr.readField(0x6C, 'f32').val(); }
    set noiseOffsetZ(v) { return this.ptr.writeField(0x6C, 'f32', v); }
    get recoilData() { return new RecoilData(this.ptr.readField(0x60, 'i32')); }
    set recoilData(v) { return this.ptr.writeField(0x60, 'i32', v); }
    get recoilForce() { return new Vector3(this.ptr.readField(0x44, 'i32')); }
    set recoilForce(v) { return this.ptr.writeField(0x44, 'i32', v); }
    get recoilRotationForce() { return new Vector3(this.ptr.readField(0x50, 'i32')); }
    set recoilRotationForce(v) { return this.ptr.writeField(0x50, 'i32', v); }
    get smoothVelocityY() { return this.ptr.readField(0x78, 'f32').val(); }
    set smoothVelocityY(v) { return this.ptr.writeField(0x78, 'f32', v); }
    get velocity() { return new Vector3(this.ptr.readField(0x38, 'i32')); }
    set velocity(v) { return this.ptr.writeField(0x38, 'i32', v); }
    get velocityY() { return this.ptr.readField(0x74, 'f32').val(); }
    set velocityY(v) { return this.ptr.writeField(0x74, 'f32', v); }
    ApplyPerlinNoise(originalForce, noise) { return (()=>{
					let structptr_3a8fb0 = window.ctx.malloc(12);
					window.ctx.call("Spring", "ApplyPerlinNoise", [structptr_3a8fb0, this.ptr, originalForce, noise]);
					return structptr_3a8fb0;
				})(); }
    ApplyRecoil() { window.ctx.call("Spring", "ApplyRecoil", [this.ptr]); }
    ApplyRecoilCustom(type) { window.ctx.call("Spring", "ApplyRecoilCustom", [this.ptr, type]); }
    GetCurrentTransitionSpeed() { return window.ctx.call("Spring", "GetCurrentTransitionSpeed", [this.ptr]).val(); }
    GetTargetPosition() { return (()=>{
					let structptr_08b16d = window.ctx.malloc(12);
					window.ctx.call("Spring", "GetTargetPosition", [structptr_08b16d, this.ptr]);
					return structptr_08b16d;
				})(); }
    GetTargetRotation() { return (()=>{
					let structptr_f08713 = window.ctx.malloc(16);
					window.ctx.call("Spring", "GetTargetRotation", [structptr_f08713, this.ptr]);
					return structptr_f08713;
				})(); }
    Initialize(recoilData) { window.ctx.call("Spring", "Initialize", [this.ptr, recoilData]); }
    OnDisable() { window.ctx.call("Spring", "OnDisable", [this.ptr]); }
    OnEnable() { window.ctx.call("Spring", "OnEnable", [this.ptr]); }
    OnSettingsChanged(newConf) { window.ctx.call("Spring", "OnSettingsChanged", [this.ptr, newConf]); }
    TransitionTo(state) { window.ctx.call("Spring", "TransitionTo", [this.ptr, state]); }
    Update() { window.ctx.call("Spring", "Update", [this.ptr]); }
}

export class KeyCode {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class Vector3 {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    static get back() { return (()=>{
					let structptr_51da6e = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Vector3", "get_back", [structptr_51da6e, ]);
					return structptr_51da6e;
				})(); }
    static get down() { return (()=>{
					let structptr_8988c7 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Vector3", "get_down", [structptr_8988c7, ]);
					return structptr_8988c7;
				})(); }
    static get forward() { return (()=>{
					let structptr_bcc0b2 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Vector3", "get_forward", [structptr_bcc0b2, ]);
					return structptr_bcc0b2;
				})(); }
    get Item() { return window.ctx.call("UnityEngine.Vector3", "get_Item", [this.ptr, index]).val(); }
    set Item(v) { window.ctx.call("UnityEngine.Vector3", "set_Item", [this.ptr, index, v]); }
    static get left() { return (()=>{
					let structptr_2a971f = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Vector3", "get_left", [structptr_2a971f, ]);
					return structptr_2a971f;
				})(); }
    get magnitude() { return window.ctx.call("UnityEngine.Vector3", "get_magnitude", [this.ptr]).val(); }
    get normalized() { return (()=>{
					let structptr_9e25d7 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Vector3", "get_normalized", [structptr_9e25d7, this.ptr]);
					return structptr_9e25d7;
				})(); }
    static get one() { return (()=>{
					let structptr_1e6f0c = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Vector3", "get_one", [structptr_1e6f0c, ]);
					return structptr_1e6f0c;
				})(); }
    static get right() { return (()=>{
					let structptr_6f9e94 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Vector3", "get_right", [structptr_6f9e94, ]);
					return structptr_6f9e94;
				})(); }
    get sqrMagnitude() { return window.ctx.call("UnityEngine.Vector3", "get_sqrMagnitude", [this.ptr]).val(); }
    static get up() { return (()=>{
					let structptr_2e9bf6 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Vector3", "get_up", [structptr_2e9bf6, ]);
					return structptr_2e9bf6;
				})(); }
    static get zero() { return (()=>{
					let structptr_5c8fe7 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Vector3", "get_zero", [structptr_5c8fe7, ]);
					return structptr_5c8fe7;
				})(); }
    get backVector() { return new Vector3(this.ptr.readField(0x54, 'i32')); }
    set backVector(v) { return this.ptr.writeField(0x54, 'i32', v); }
    get downVector() { return new Vector3(this.ptr.readField(0x24, 'i32')); }
    set downVector(v) { return this.ptr.writeField(0x24, 'i32', v); }
    get forwardVector() { return new Vector3(this.ptr.readField(0x48, 'i32')); }
    set forwardVector(v) { return this.ptr.writeField(0x48, 'i32', v); }
    get leftVector() { return new Vector3(this.ptr.readField(0x30, 'i32')); }
    set leftVector(v) { return this.ptr.writeField(0x30, 'i32', v); }
    get negativeInfinityVector() { return new Vector3(this.ptr.readField(0x6C, 'i32')); }
    set negativeInfinityVector(v) { return this.ptr.writeField(0x6C, 'i32', v); }
    get oneVector() { return new Vector3(this.ptr.readField(0xC, 'i32')); }
    set oneVector(v) { return this.ptr.writeField(0xC, 'i32', v); }
    get positiveInfinityVector() { return new Vector3(this.ptr.readField(0x60, 'i32')); }
    set positiveInfinityVector(v) { return this.ptr.writeField(0x60, 'i32', v); }
    get rightVector() { return new Vector3(this.ptr.readField(0x3C, 'i32')); }
    set rightVector(v) { return this.ptr.writeField(0x3C, 'i32', v); }
    get upVector() { return new Vector3(this.ptr.readField(0x18, 'i32')); }
    set upVector(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get x() { return this.ptr.readField(0x0, 'f32').val(); }
    set x(v) { return this.ptr.writeField(0x0, 'f32', v); }
    get y() { return this.ptr.readField(0x4, 'f32').val(); }
    set y(v) { return this.ptr.writeField(0x4, 'f32', v); }
    get z() { return this.ptr.readField(0x8, 'f32').val(); }
    set z(v) { return this.ptr.writeField(0x8, 'f32', v); }
    get zeroVector() { return new Vector3(this.ptr.readField(0x0, 'i32')); }
    set zeroVector(v) { return this.ptr.writeField(0x0, 'i32', v); }
    static Angle_from_to(from, to) { return window.ctx.call("UnityEngine.Vector3", "Angle_22005", [from, to]).val(); }
    static Angle_from_to(from, to) { return window.ctx.call("UnityEngine.Vector3", "Angle_22006", [from, to]).val(); }
    static ClampMagnitude(vector, maxLength) { return (()=>{
					let structptr_ee22e3 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Vector3", "ClampMagnitude", [structptr_ee22e3, vector, maxLength]);
					return structptr_ee22e3;
				})(); }
    static Cross(lhs, rhs) { return (()=>{
					let structptr_9e5914 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Vector3", "Cross", [structptr_9e5914, lhs, rhs]);
					return structptr_9e5914;
				})(); }
    static Distance(a, b) { return window.ctx.call("UnityEngine.Vector3", "Distance", [a, b]).val(); }
    static Dot_lhs_rhs(lhs, rhs) { return window.ctx.call("UnityEngine.Vector3", "Dot_22001", [lhs, rhs]).val(); }
    static Dot_lhs_rhs(lhs, rhs) { return window.ctx.call("UnityEngine.Vector3", "Dot_22002", [lhs, rhs]).val(); }
    Equals_other(other) { return window.ctx.call("UnityEngine.Vector3", "Equals_21994", [this.ptr, other]).val() === 1; }
    Equals_other(other) { return window.ctx.call("UnityEngine.Vector3", "Equals_21995", [this.ptr, other]).val() === 1; }
    Equals_other(other) { return window.ctx.call("UnityEngine.Vector3", "Equals_21996", [this.ptr, other]).val() === 1; }
    GetHashCode() { return window.ctx.call("UnityEngine.Vector3", "GetHashCode", [this.ptr]).val(); }
    static Lerp(a, b, t) { return (()=>{
					let structptr_f07f79 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Vector3", "Lerp", [structptr_f07f79, a, b, t]);
					return structptr_f07f79;
				})(); }
    static Max_lhs_rhs(lhs, rhs) { return (()=>{
					let structptr_209b4c = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Vector3", "Max_22014", [structptr_209b4c, lhs, rhs]);
					return structptr_209b4c;
				})(); }
    static Max_lhs_rhs(lhs, rhs) { return (()=>{
					let structptr_dad67f = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Vector3", "Max_22015", [structptr_dad67f, lhs, rhs]);
					return structptr_dad67f;
				})(); }
    static Min_lhs_rhs(lhs, rhs) { return (()=>{
					let structptr_14ec7a = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Vector3", "Min_22012", [structptr_14ec7a, lhs, rhs]);
					return structptr_14ec7a;
				})(); }
    static Min_lhs_rhs(lhs, rhs) { return (()=>{
					let structptr_5eb29a = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Vector3", "Min_22013", [structptr_5eb29a, lhs, rhs]);
					return structptr_5eb29a;
				})(); }
    static MoveTowards(current, target, maxDistanceDelta) { return (()=>{
					let structptr_3bfecd = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Vector3", "MoveTowards", [structptr_3bfecd, current, target, maxDistanceDelta]);
					return structptr_3bfecd;
				})(); }
    static Normalize_value(value) { return (()=>{
					let structptr_d5cf42 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Vector3", "Normalize_21997", [structptr_d5cf42, value]);
					return structptr_d5cf42;
				})(); }
    static Normalize_value(value) { return (()=>{
					let structptr_4df623 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Vector3", "Normalize_21998", [structptr_4df623, value]);
					return structptr_4df623;
				})(); }
    Normalize_pointer() { window.ctx.call("UnityEngine.Vector3", "Normalize_21999", [this.ptr]); }
    static Project(vector, onNormal) { return (()=>{
					let structptr_b00cbb = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Vector3", "Project", [structptr_b00cbb, vector, onNormal]);
					return structptr_b00cbb;
				})(); }
    static ProjectOnPlane(vector, planeNormal) { return (()=>{
					let structptr_94c162 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Vector3", "ProjectOnPlane", [structptr_94c162, vector, planeNormal]);
					return structptr_94c162;
				})(); }
    static Scale_a_b(a, b) { return (()=>{
					let structptr_fa12b2 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Vector3", "Scale_21990", [structptr_fa12b2, a, b]);
					return structptr_fa12b2;
				})(); }
    Scale_scale(scale) { window.ctx.call("UnityEngine.Vector3", "Scale_21991", [this.ptr, scale]); }
    static SignedAngle(from, to, axis) { return window.ctx.call("UnityEngine.Vector3", "SignedAngle", [from, to, axis]).val(); }
    static SmoothDamp_current_target_currentVelocity_smoothTime(current, target, currentVelocity, smoothTime) { return (()=>{
					let structptr_e3f9ea = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Vector3", "SmoothDamp_21984", [structptr_e3f9ea, current, target, currentVelocity, smoothTime]);
					return structptr_e3f9ea;
				})(); }
    static SmoothDamp_current_target_currentVelocity_smoothTime_maxSpeed_deltaTime(current, target, currentVelocity, smoothTime, maxSpeed, deltaTime) { return (()=>{
					let structptr_9f8a66 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Vector3", "SmoothDamp_21985", [structptr_9f8a66, current, target, currentVelocity, smoothTime, maxSpeed, deltaTime]);
					return structptr_9f8a66;
				})(); }
    ToString_pointer() { return window.ctx.call("UnityEngine.Vector3", "ToString_22032", [this.ptr]); }
    ToString_format_formatProvider(format, formatProvider) { return window.ctx.call("UnityEngine.Vector3", "ToString_22033", [this.ptr, format, formatProvider]); }
}

export class Player {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get back() { return this.ptr.readField(0x2C, 'i32'); }
    set back(v) { return this.ptr.writeField(0x2C, 'i32', v); }
    get crouching() { return this.ptr.readField(0x3C, 'i32').val() === 1; }
    set crouching(v) { return this.ptr.writeField(0x3C, 'i32', v); }
    get currentKillStreak() { return this.ptr.readField(0x58, 'f32').val(); }
    set currentKillStreak(v) { return this.ptr.writeField(0x58, 'f32', v); }
    get dashing() { return this.ptr.readField(0x3B, 'i32').val() === 1; }
    set dashing(v) { return this.ptr.writeField(0x3B, 'i32', v); }
    get deaths() { return this.ptr.readField(0x26, 'i32'); }
    set deaths(v) { return this.ptr.writeField(0x26, 'i32', v); }
    get elo() { return this.ptr.readField(0x20, 'f32').val(); }
    set elo(v) { return this.ptr.writeField(0x20, 'f32', v); }
    get hat() { return this.ptr.readField(0x2A, 'i32'); }
    set hat(v) { return this.ptr.writeField(0x2A, 'i32', v); }
    get headshots() { return this.ptr.readField(0x60, 'f32').val(); }
    set headshots(v) { return this.ptr.writeField(0x60, 'f32', v); }
    get health() { return this.ptr.readField(0x38, 'i32'); }
    set health(v) { return this.ptr.writeField(0x38, 'i32', v); }
    get healthProtected() { return this.ptr.readField(0x40, 'i32').val() === 1; }
    set healthProtected(v) { return this.ptr.writeField(0x40, 'i32', v); }
    get inventory() { return this.ptr.readField(0x44, 'i32'); }
    set inventory(v) { return this.ptr.writeField(0x44, 'i32', v); }
    get kills() { return this.ptr.readField(0x24, 'i32'); }
    set kills(v) { return this.ptr.writeField(0x24, 'i32', v); }
    get killsWithWeapon() { return this.ptr.readField(0x5C, 'f32').val(); }
    set killsWithWeapon(v) { return this.ptr.writeField(0x5C, 'f32', v); }
    get lastGotShot() { return new Shot(this.ptr.readField(0x54, 'i32')); }
    set lastGotShot(v) { return this.ptr.writeField(0x54, 'i32', v); }
    get lastShootTime() { return this.ptr.readField(0x6C, 'f32').val(); }
    set lastShootTime(v) { return this.ptr.writeField(0x6C, 'f32', v); }
    get lastShotTime() { return this.ptr.readField(0x68, 'f32').val(); }
    set lastShotTime(v) { return this.ptr.writeField(0x68, 'f32', v); }
    get localWeaponIndex() { return this.ptr.readField(0x3E, 'i32'); }
    set localWeaponIndex(v) { return this.ptr.writeField(0x3E, 'i32', v); }
    get maxKillStreak() { return this.ptr.readField(0x30, 'i32'); }
    set maxKillStreak(v) { return this.ptr.writeField(0x30, 'i32', v); }
    get nickname() { return this.ptr.readField(0x18, 'i32').mstr(); }
    set nickname(v) { return this.ptr.writeField(0x18, 'i32', window.ctx.createMstr(v)); }
    get party() { return this.ptr.readField(0x4C, 'i32').mstr(); }
    set party(v) { return this.ptr.writeField(0x4C, 'i32', window.ctx.createMstr(v)); }
    get playerId() { return this.ptr.readField(0x14, 'i32').mstr(); }
    set playerId(v) { return this.ptr.writeField(0x14, 'i32', window.ctx.createMstr(v)); }
    get rigid() { return new ColyRigid(this.ptr.readField(0x34, 'i32')); }
    set rigid(v) { return this.ptr.writeField(0x34, 'i32', v); }
    get sceneLoaded() { return this.ptr.readField(0x3D, 'i32').val() === 1; }
    set sceneLoaded(v) { return this.ptr.writeField(0x3D, 'i32', v); }
    get score() { return this.ptr.readField(0x1C, 'i32'); }
    set score(v) { return this.ptr.writeField(0x1C, 'i32', v); }
    get selectedGunSkins() { return this.ptr.readField(0x10, 'i32'); }
    set selectedGunSkins(v) { return this.ptr.writeField(0x10, 'i32', v); }
    get skin() { return this.ptr.readField(0x28, 'i32'); }
    set skin(v) { return this.ptr.writeField(0x28, 'i32', v); }
    get spawned() { return this.ptr.readField(0x3A, 'i32').val() === 1; }
    set spawned(v) { return this.ptr.writeField(0x3A, 'i32', v); }
    get startPlayTime() { return this.ptr.readField(0x64, 'f32').val(); }
    set startPlayTime(v) { return this.ptr.writeField(0x64, 'f32', v); }
    get team() { return this.ptr.readField(0x3F, 'i32'); }
    set team(v) { return this.ptr.writeField(0x3F, 'i32', v); }
    get user() { return new PublicUserData(this.ptr.readField(0x50, 'i32')); }
    set user(v) { return this.ptr.writeField(0x50, 'i32', v); }
    get userId() { return this.ptr.readField(0x48, 'i32').mstr(); }
    set userId(v) { return this.ptr.writeField(0x48, 'i32', window.ctx.createMstr(v)); }
    get weaponClass() { return this.ptr.readField(0x39, 'i32'); }
    set weaponClass(v) { return this.ptr.writeField(0x39, 'i32', v); }
    get weaponsCollected() { return this.ptr.readField(0x2E, 'i32'); }
    set weaponsCollected(v) { return this.ptr.writeField(0x2E, 'i32', v); }
}

export class ColyAI {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get botParams() { return this.ptr.readField(0x50, 'i32'); }
    set botParams(v) { return this.ptr.writeField(0x50, 'i32', v); }
    get currentState() { return this.ptr.readField(0x14, 'i32'); }
    set currentState(v) { return this.ptr.writeField(0x14, 'i32', v); }
    get currentTarget() { return new ColyView(this.ptr.readField(0x40, 'i32')); }
    set currentTarget(v) { return this.ptr.writeField(0x40, 'i32', v); }
    get currentWaypointIndex() { return this.ptr.readField(0x3C, 'i32').val(); }
    set currentWaypointIndex(v) { return this.ptr.writeField(0x3C, 'i32', v); }
    get dashInput() { return this.ptr.readField(0x35, 'i32').val() === 1; }
    set dashInput(v) { return this.ptr.writeField(0x35, 'i32', v); }
    get jumpInput() { return this.ptr.readField(0x34, 'i32').val() === 1; }
    set jumpInput(v) { return this.ptr.writeField(0x34, 'i32', v); }
    get lastFoundTargetTime() { return this.ptr.readField(0x88, 'f32').val(); }
    set lastFoundTargetTime(v) { return this.ptr.writeField(0x88, 'f32', v); }
    get lastTickCycle() { return this.ptr.readField(0x20, 'i32').val(); }
    set lastTickCycle(v) { return this.ptr.writeField(0x20, 'i32', v); }
    get messageSentThisLife() { return this.ptr.readField(0x80, 'i32').val() === 1; }
    set messageSentThisLife(v) { return this.ptr.writeField(0x80, 'i32', v); }
    get movementInput() { return new Vector3(this.ptr.readField(0x24, 'i32')); }
    set movementInput(v) { return this.ptr.writeField(0x24, 'i32', v); }
    get neckController() { return new NeckController(this.ptr.readField(0x7C, 'i32')); }
    set neckController(v) { return this.ptr.writeField(0x7C, 'i32', v); }
    get neckXRot() { return this.ptr.readField(0x84, 'f32').val(); }
    set neckXRot(v) { return this.ptr.writeField(0x84, 'f32', v); }
    get nextFireTime() { return this.ptr.readField(0x8C, 'f32').val(); }
    set nextFireTime(v) { return this.ptr.writeField(0x8C, 'f32', v); }
    get normalizedExecutionTime() { return this.ptr.readField(0x1C, 'f32').val(); }
    set normalizedExecutionTime(v) { return this.ptr.writeField(0x1C, 'f32', v); }
    get obstacleLayer() { return new LayerMask(this.ptr.readField(0x48, 'i32')); }
    set obstacleLayer(v) { return this.ptr.writeField(0x48, 'i32', v); }
    get patrolPoints() { return JSArray(this.ptr.readField(0x38, 'i32')); }
    set patrolPoints(v) { return this.ptr.writeField(0x38, 'i32', v); }
    get playstyle() { return this.ptr.readField(0x18, 'i32'); }
    set playstyle(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get rotationSpeed() { return this.ptr.readField(0x4C, 'f32').val(); }
    set rotationSpeed(v) { return this.ptr.writeField(0x4C, 'f32', v); }
    get targetLayer() { return new LayerMask(this.ptr.readField(0x44, 'i32')); }
    set targetLayer(v) { return this.ptr.writeField(0x44, 'i32', v); }
    get targetYRotation() { return this.ptr.readField(0x30, 'f32').val(); }
    set targetYRotation(v) { return this.ptr.writeField(0x30, 'f32', v); }
    Attack() { window.ctx.call("ColyAI", "Attack", [this.ptr]); }
    Chase() { window.ctx.call("ColyAI", "Chase", [this.ptr]); }
    ChatTick() { window.ctx.call("ColyAI", "ChatTick", [this.ptr]); }
    EvaluateState() { window.ctx.call("ColyAI", "EvaluateState", [this.ptr]); }
    EvaluateTargets() { window.ctx.call("ColyAI", "EvaluateTargets", [this.ptr]); }
    GetParametersForPlaystyle(style) { return (()=>{
					let structptr_a91702 = window.ctx.malloc(50);
					window.ctx.call("ColyAI", "GetParametersForPlaystyle", [structptr_a91702, this.ptr, style]);
					return structptr_a91702;
				})(); }
    InitAI(_playstyle, ww, current) { window.ctx.call("ColyAI", "InitAI", [this.ptr, _playstyle, ww, current]); }
    OnDrawGizmos() { window.ctx.call("ColyAI", "OnDrawGizmos", [this.ptr]); }
    OnNetworkSpawned(spawnInfo) { window.ctx.call("ColyAI", "OnNetworkSpawned", [this.ptr, spawnInfo]); }
    Patrol() { window.ctx.call("ColyAI", "Patrol", [this.ptr]); }
    SendChatMessage(body) { window.ctx.call("ColyAI", "SendChatMessage", [this.ptr, body]); }
    SetState(newState) { window.ctx.call("ColyAI", "SetState", [this.ptr, newState]); }
    Update() { window.ctx.call("ColyAI", "Update", [this.ptr]); }
}

export class Flag {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get basePosition() { return new ColyVector3(this.ptr.readField(0x1C, 'i32')); }
    set basePosition(v) { return this.ptr.writeField(0x1C, 'i32', v); }
    get carriedBy() { return this.ptr.readField(0x14, 'i32').mstr(); }
    set carriedBy(v) { return this.ptr.writeField(0x14, 'i32', window.ctx.createMstr(v)); }
    get isAtBase() { return this.ptr.readField(0x11, 'i32').val() === 1; }
    set isAtBase(v) { return this.ptr.writeField(0x11, 'i32', v); }
    get position() { return new ColyVector3(this.ptr.readField(0x18, 'i32')); }
    set position(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get teamId() { return this.ptr.readField(0x10, 'i32'); }
    set teamId(v) { return this.ptr.writeField(0x10, 'i32', v); }
}

export class Team {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get color() { return new Color(this.ptr.readField(0xC, 'i32')); }
    set color(v) { return this.ptr.writeField(0xC, 'i32', v); }
    get name() { return this.ptr.readField(0x8, 'i32').mstr(); }
    set name(v) { return this.ptr.writeField(0x8, 'i32', window.ctx.createMstr(v)); }
}

export class Gradient {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get colorKeys() { return window.ctx.call("UnityEngine.Gradient", "get_colorKeys", [this.ptr]); }
    get m_Ptr() { return this.ptr.readField(0x8, 'i32'); }
    set m_Ptr(v) { return this.ptr.writeField(0x8, 'i32', v); }
    get m_RequiresNativeCleanup() { return this.ptr.readField(0xC, 'i32').val() === 1; }
    set m_RequiresNativeCleanup(v) { return this.ptr.writeField(0xC, 'i32', v); }
    Cleanup() { window.ctx.call("UnityEngine.Gradient", "Cleanup", [this.ptr]); }
    static Cleanup_Injected(_unity_self) { window.ctx.call("UnityEngine.Gradient", "Cleanup_Injected", [_unity_self]); }
    Equals_o(o) { return window.ctx.call("UnityEngine.Gradient", "Equals_21955", [this.ptr, o]).val() === 1; }
    Equals_other(other) { return window.ctx.call("UnityEngine.Gradient", "Equals_21956", [this.ptr, other]).val() === 1; }
    Evaluate(time) { return (()=>{
					let structptr_3256bc = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Gradient", "Evaluate", [structptr_3256bc, this.ptr, time]);
					return structptr_3256bc;
				})(); }
    static Evaluate_Injected(_unity_self, time, ret) { window.ctx.call("UnityEngine.Gradient", "Evaluate_Injected", [_unity_self, time, ret]); }
    Finalize() { window.ctx.call("UnityEngine.Gradient", "Finalize", [this.ptr]); }
    GetHashCode() { return window.ctx.call("UnityEngine.Gradient", "GetHashCode", [this.ptr]).val(); }
    static Init() { return (()=>{
					let structptr_326407 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Gradient", "Init", [structptr_326407, ]);
					return structptr_326407;
				})(); }
    Internal_Equals(other) { return window.ctx.call("UnityEngine.Gradient", "Internal_Equals", [this.ptr, other]).val() === 1; }
    static Internal_Equals_Injected(_unity_self, other) { return window.ctx.call("UnityEngine.Gradient", "Internal_Equals_Injected", [_unity_self, other]).val() === 1; }
    static get_colorKeys_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Gradient", "get_colorKeys_Injected", [_unity_self, ret]); }
}

export class Color {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    static get black() { return (()=>{
					let structptr_1a0cbf = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Color", "get_black", [structptr_1a0cbf, ]);
					return structptr_1a0cbf;
				})(); }
    static get blue() { return (()=>{
					let structptr_ce0507 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Color", "get_blue", [structptr_ce0507, ]);
					return structptr_ce0507;
				})(); }
    static get clear() { return (()=>{
					let structptr_074af4 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Color", "get_clear", [structptr_074af4, ]);
					return structptr_074af4;
				})(); }
    get gamma() { return (()=>{
					let structptr_01e66d = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Color", "get_gamma", [structptr_01e66d, this.ptr]);
					return structptr_01e66d;
				})(); }
    static get gray() { return (()=>{
					let structptr_4415ef = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Color", "get_gray", [structptr_4415ef, ]);
					return structptr_4415ef;
				})(); }
    static get gray5() { return (()=>{
					let structptr_5a674b = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Color", "get_gray5", [structptr_5a674b, ]);
					return structptr_5a674b;
				})(); }
    static get green() { return (()=>{
					let structptr_88196d = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Color", "get_green", [structptr_88196d, ]);
					return structptr_88196d;
				})(); }
    static get grey() { return (()=>{
					let structptr_2e2b95 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Color", "get_grey", [structptr_2e2b95, ]);
					return structptr_2e2b95;
				})(); }
    get linear() { return (()=>{
					let structptr_75ecf8 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Color", "get_linear", [structptr_75ecf8, this.ptr]);
					return structptr_75ecf8;
				})(); }
    static get magenta() { return (()=>{
					let structptr_86ff39 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Color", "get_magenta", [structptr_86ff39, ]);
					return structptr_86ff39;
				})(); }
    get maxColorComponent() { return window.ctx.call("UnityEngine.Color", "get_maxColorComponent", [this.ptr]).val(); }
    static get red() { return (()=>{
					let structptr_5747bf = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Color", "get_red", [structptr_5747bf, ]);
					return structptr_5747bf;
				})(); }
    static get white() { return (()=>{
					let structptr_97bd0f = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Color", "get_white", [structptr_97bd0f, ]);
					return structptr_97bd0f;
				})(); }
    static get yellow() { return (()=>{
					let structptr_ab0725 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Color", "get_yellow", [structptr_ab0725, ]);
					return structptr_ab0725;
				})(); }
    get a() { return this.ptr.readField(0xC, 'f32').val(); }
    set a(v) { return this.ptr.writeField(0xC, 'f32', v); }
    get b() { return this.ptr.readField(0x8, 'f32').val(); }
    set b(v) { return this.ptr.writeField(0x8, 'f32', v); }
    get g() { return this.ptr.readField(0x4, 'f32').val(); }
    set g(v) { return this.ptr.writeField(0x4, 'f32', v); }
    get r() { return this.ptr.readField(0x0, 'f32').val(); }
    set r(v) { return this.ptr.writeField(0x0, 'f32', v); }
    Equals_other(other) { return window.ctx.call("UnityEngine.Color", "Equals_21906", [this.ptr, other]).val() === 1; }
    Equals_other(other) { return window.ctx.call("UnityEngine.Color", "Equals_21907", [this.ptr, other]).val() === 1; }
    Equals_other(other) { return window.ctx.call("UnityEngine.Color", "Equals_21908", [this.ptr, other]).val() === 1; }
    GetHashCode() { return window.ctx.call("UnityEngine.Color", "GetHashCode", [this.ptr]).val(); }
    static HSVToRGB_H_S_V(H, S, V) { return (()=>{
					let structptr_5e1780 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Color", "HSVToRGB_21923", [structptr_5e1780, H, S, V]);
					return structptr_5e1780;
				})(); }
    static HSVToRGB_H_S_V_hdr(H, S, V, hdr) { return (()=>{
					let structptr_6e7b12 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Color", "HSVToRGB_2197", [structptr_6e7b12, H, S, V, hdr]);
					return structptr_6e7b12;
				})(); }
    static Lerp(a, b, t) { return (()=>{
					let structptr_8ae76f = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Color", "Lerp", [structptr_8ae76f, a, b, t]);
					return structptr_8ae76f;
				})(); }
    RGBMultiplied(multiplier) { return (()=>{
					let structptr_54e0e8 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Color", "RGBMultiplied", [structptr_54e0e8, this.ptr, multiplier]);
					return structptr_54e0e8;
				})(); }
    static RGBToHSV(rgbColor, H, S, V) { window.ctx.call("UnityEngine.Color", "RGBToHSV", [rgbColor, H, S, V]); }
    static RGBToHSVHelper(offset, dominantcolor, colorone, colortwo, H, S, V) { window.ctx.call("UnityEngine.Color", "RGBToHSVHelper", [offset, dominantcolor, colorone, colortwo, H, S, V]); }
    ToString_pointer() { return window.ctx.call("UnityEngine.Color", "ToString_21903", [this.ptr]); }
    ToString_format_formatProvider(format, formatProvider) { return window.ctx.call("UnityEngine.Color", "ToString_21904", [this.ptr, format, formatProvider]); }
}

export class Bullet {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get bulletGfx() { return new GameObject(this.ptr.readField(0x54, 'i32')); }
    set bulletGfx(v) { return this.ptr.writeField(0x54, 'i32', v); }
    get hitName() { return new HitType(this.ptr.readField(0x5C, 'i32')); }
    set hitName(v) { return this.ptr.writeField(0x5C, 'i32', v); }
    get impactPrefab() { return new GameObject(this.ptr.readField(0x1C, 'i32')); }
    set impactPrefab(v) { return this.ptr.writeField(0x1C, 'i32', v); }
    get initialSpeed() { return this.ptr.readField(0x24, 'f32').val(); }
    set initialSpeed(v) { return this.ptr.writeField(0x24, 'f32', v); }
    get initialized() { return this.ptr.readField(0x10, 'i32').val() === 1; }
    set initialized(v) { return this.ptr.writeField(0x10, 'i32', v); }
    get isGlobal() { return this.ptr.readField(0x18, 'i32').val() === 1; }
    set isGlobal(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get lifeDistance() { return this.ptr.readField(0x3C, 'f32').val(); }
    set lifeDistance(v) { return this.ptr.writeField(0x3C, 'f32', v); }
    get lifeEnded() { return this.ptr.readField(0x40, 'i32').val() === 1; }
    set lifeEnded(v) { return this.ptr.writeField(0x40, 'i32', v); }
    get mapLayerMask() { return new LayerMask(this.ptr.readField(0x14, 'i32')); }
    set mapLayerMask(v) { return this.ptr.writeField(0x14, 'i32', v); }
    get moveDir() { return new Vector3(this.ptr.readField(0x30, 'i32')); }
    set moveDir(v) { return this.ptr.writeField(0x30, 'i32', v); }
    get myShotId() { return this.ptr.readField(0x6C, 'i32').val(); }
    set myShotId(v) { return this.ptr.writeField(0x6C, 'i32', v); }
    get shootAt() { return new Vector3(this.ptr.readField(0x60, 'i32')); }
    set shootAt(v) { return this.ptr.writeField(0x60, 'i32', v); }
    get spawnTime() { return this.ptr.readField(0x50, 'f32').val(); }
    set spawnTime(v) { return this.ptr.writeField(0x50, 'f32', v); }
    get speed() { return this.ptr.readField(0x28, 'f32').val(); }
    set speed(v) { return this.ptr.writeField(0x28, 'f32', v); }
    get speedMultiCurve() { return new AnimationCurve(this.ptr.readField(0x2C, 'i32')); }
    set speedMultiCurve(v) { return this.ptr.writeField(0x2C, 'i32', v); }
    get startingPosition() { return new Vector3(this.ptr.readField(0x44, 'i32')); }
    set startingPosition(v) { return this.ptr.writeField(0x44, 'i32', v); }
    get stop() { return this.ptr.readField(0x58, 'i32').val() === 1; }
    set stop(v) { return this.ptr.writeField(0x58, 'i32', v); }
    get trailRenderer() { return new TrailRenderer(this.ptr.readField(0x20, 'i32')); }
    set trailRenderer(v) { return this.ptr.writeField(0x20, 'i32', v); }
    Init(shotId, _hitName, _shootAt, from, _isGlobal, expectedVisualForward) { window.ctx.call("Bullet", "Init", [this.ptr, shotId, _hitName, _shootAt, from, _isGlobal, expectedVisualForward]); }
    OnDespawn() { window.ctx.call("Bullet", "OnDespawn", [this.ptr]); }
    OnSpawn() { window.ctx.call("Bullet", "OnSpawn", [this.ptr]); }
    TryEndLife(force, isNaturally) { window.ctx.call("Bullet", "TryEndLife", [this.ptr, force, isNaturally]); }
    Update() { window.ctx.call("Bullet", "Update", [this.ptr]); }
}

export class RecoilData {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get aimJumpForceMulti() { return this.ptr.readField(0xC8, 'f32').val(); }
    set aimJumpForceMulti(v) { return this.ptr.writeField(0xC8, 'f32', v); }
    get aimLandForceMulti() { return this.ptr.readField(0xCC, 'f32').val(); }
    set aimLandForceMulti(v) { return this.ptr.writeField(0xCC, 'f32', v); }
    get aimPositionRecoilMulti() { return this.ptr.readField(0xBC, 'f32').val(); }
    set aimPositionRecoilMulti(v) { return this.ptr.writeField(0xBC, 'f32', v); }
    get aimRotationRecoilMulti() { return this.ptr.readField(0xC0, 'f32').val(); }
    set aimRotationRecoilMulti(v) { return this.ptr.writeField(0xC0, 'f32', v); }
    get aimTransitionSpeed() { return this.ptr.readField(0xC4, 'f32').val(); }
    set aimTransitionSpeed(v) { return this.ptr.writeField(0xC4, 'f32', v); }
    get blockedPosition() { return new Vector3(this.ptr.readField(0x7C, 'i32')); }
    set blockedPosition(v) { return this.ptr.writeField(0x7C, 'i32', v); }
    get blockedRotation() { return new Vector3(this.ptr.readField(0x88, 'i32')); }
    set blockedRotation(v) { return this.ptr.writeField(0x88, 'i32', v); }
    get blockedTransitionSpeed() { return this.ptr.readField(0xAC, 'f32').val(); }
    set blockedTransitionSpeed(v) { return this.ptr.writeField(0xAC, 'f32', v); }
    get crouchPosition() { return new Vector3(this.ptr.readField(0x94, 'i32')); }
    set crouchPosition(v) { return this.ptr.writeField(0x94, 'i32', v); }
    get crouchRotation() { return new Vector3(this.ptr.readField(0xA0, 'i32')); }
    set crouchRotation(v) { return this.ptr.writeField(0xA0, 'i32', v); }
    get defaultPosition() { return new Vector3(this.ptr.readField(0xC, 'i32')); }
    set defaultPosition(v) { return this.ptr.writeField(0xC, 'i32', v); }
    get defaultRotation() { return new Vector3(this.ptr.readField(0x18, 'i32')); }
    set defaultRotation(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get defaultTransitionSpeed() { return this.ptr.readField(0x24, 'f32').val(); }
    set defaultTransitionSpeed(v) { return this.ptr.writeField(0x24, 'f32', v); }
    get jumpingPosition() { return new Vector3(this.ptr.readField(0x44, 'i32')); }
    set jumpingPosition(v) { return this.ptr.writeField(0x44, 'i32', v); }
    get jumpingRotation() { return new Vector3(this.ptr.readField(0x50, 'i32')); }
    set jumpingRotation(v) { return this.ptr.writeField(0x50, 'i32', v); }
    get jumpingTransitionSpeed() { return this.ptr.readField(0x5C, 'f32').val(); }
    set jumpingTransitionSpeed(v) { return this.ptr.writeField(0x5C, 'f32', v); }
    get noiseAmplitudeAimingPos() { return new Vector3(this.ptr.readField(0x154, 'i32')); }
    set noiseAmplitudeAimingPos(v) { return this.ptr.writeField(0x154, 'i32', v); }
    get noiseAmplitudeAimingRot() { return new Vector3(this.ptr.readField(0x16C, 'i32')); }
    set noiseAmplitudeAimingRot(v) { return this.ptr.writeField(0x16C, 'i32', v); }
    get noiseAmplitudeRegularPos() { return new Vector3(this.ptr.readField(0x148, 'i32')); }
    set noiseAmplitudeRegularPos(v) { return this.ptr.writeField(0x148, 'i32', v); }
    get noiseAmplitudeRegularRot() { return new Vector3(this.ptr.readField(0x160, 'i32')); }
    set noiseAmplitudeRegularRot(v) { return this.ptr.writeField(0x160, 'i32', v); }
    get positionDuringJump() { return new Vector3(this.ptr.readField(0x100, 'i32')); }
    set positionDuringJump(v) { return this.ptr.writeField(0x100, 'i32', v); }
    get positionDuringJumpAndSprint() { return new Vector3(this.ptr.readField(0x10C, 'i32')); }
    set positionDuringJumpAndSprint(v) { return this.ptr.writeField(0x10C, 'i32', v); }
    get positionJumpAmount() { return new Vector3(this.ptr.readField(0xE8, 'i32')); }
    set positionJumpAmount(v) { return this.ptr.writeField(0xE8, 'i32', v); }
    get positionLandAmount() { return new Vector3(this.ptr.readField(0x130, 'i32')); }
    set positionLandAmount(v) { return this.ptr.writeField(0x130, 'i32', v); }
    get positionRecoilAmount() { return new Vector3(this.ptr.readField(0xD0, 'i32')); }
    set positionRecoilAmount(v) { return this.ptr.writeField(0xD0, 'i32', v); }
    get recoilRecoverySpeed() { return this.ptr.readField(0xB0, 'f32').val(); }
    set recoilRecoverySpeed(v) { return this.ptr.writeField(0xB0, 'f32', v); }
    get rotationDuringJump() { return new Vector3(this.ptr.readField(0x118, 'i32')); }
    set rotationDuringJump(v) { return this.ptr.writeField(0x118, 'i32', v); }
    get rotationDuringJumpAndSprint() { return new Vector3(this.ptr.readField(0x124, 'i32')); }
    set rotationDuringJumpAndSprint(v) { return this.ptr.writeField(0x124, 'i32', v); }
    get rotationJumpAmount() { return new Vector3(this.ptr.readField(0xF4, 'i32')); }
    set rotationJumpAmount(v) { return this.ptr.writeField(0xF4, 'i32', v); }
    get rotationLandAmount() { return new Vector3(this.ptr.readField(0x13C, 'i32')); }
    set rotationLandAmount(v) { return this.ptr.writeField(0x13C, 'i32', v); }
    get rotationRecoilAmount() { return new Vector3(this.ptr.readField(0xDC, 'i32')); }
    set rotationRecoilAmount(v) { return this.ptr.writeField(0xDC, 'i32', v); }
    get shootShake() { return new ShakePreset(this.ptr.readField(0xB4, 'i32')); }
    set shootShake(v) { return this.ptr.writeField(0xB4, 'i32', v); }
    get shootShakeAim() { return new ShakePreset(this.ptr.readField(0xB8, 'i32')); }
    set shootShakeAim(v) { return this.ptr.writeField(0xB8, 'i32', v); }
    get sprintingPosition() { return new Vector3(this.ptr.readField(0x60, 'i32')); }
    set sprintingPosition(v) { return this.ptr.writeField(0x60, 'i32', v); }
    get sprintingRotation() { return new Vector3(this.ptr.readField(0x6C, 'i32')); }
    set sprintingRotation(v) { return this.ptr.writeField(0x6C, 'i32', v); }
    get sprintingTransitionSpeed() { return this.ptr.readField(0x78, 'f32').val(); }
    set sprintingTransitionSpeed(v) { return this.ptr.writeField(0x78, 'f32', v); }
    get walkingPosition() { return new Vector3(this.ptr.readField(0x28, 'i32')); }
    set walkingPosition(v) { return this.ptr.writeField(0x28, 'i32', v); }
    get walkingRotation() { return new Vector3(this.ptr.readField(0x34, 'i32')); }
    set walkingRotation(v) { return this.ptr.writeField(0x34, 'i32', v); }
    get walkingTransitionSpeed() { return this.ptr.readField(0x40, 'f32').val(); }
    set walkingTransitionSpeed(v) { return this.ptr.writeField(0x40, 'f32', v); }
}

export class MuzzleFlash {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get bulletsParticleSystem() { return new ParticleSystemExtension(this.ptr.readField(0x1C, 'i32')); }
    set bulletsParticleSystem(v) { return this.ptr.writeField(0x1C, 'i32', v); }
    get myParticleSystem() { return new ParticleSystem(this.ptr.readField(0x10, 'i32')); }
    set myParticleSystem(v) { return this.ptr.writeField(0x10, 'i32', v); }
    get playParticlesFor() { return this.ptr.readField(0x20, 'f32').val(); }
    set playParticlesFor(v) { return this.ptr.writeField(0x20, 'f32', v); }
    get randomZRotation() { return this.ptr.readField(0x14, 'f32').val(); }
    set randomZRotation(v) { return this.ptr.writeField(0x14, 'f32', v); }
    get recursiveChildLookup() { return this.ptr.readField(0x18, 'i32').val() === 1; }
    set recursiveChildLookup(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get stopBulletsCoroutine() { return new Coroutine(this.ptr.readField(0x24, 'i32')); }
    set stopBulletsCoroutine(v) { return this.ptr.writeField(0x24, 'i32', v); }
    IenuStopBullets() { return window.ctx.call("MuzzleFlash", "IenuStopBullets", [this.ptr]); }
    Play(muzzleFlashSetParentNullTemp) { window.ctx.call("MuzzleFlash", "Play", [this.ptr, muzzleFlashSetParentNullTemp]); }
}

export class GunSkin {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get forGun() { return this.ptr.readField(0x38, 'i32').val(); }
    set forGun(v) { return this.ptr.writeField(0x38, 'i32', v); }
    get isPrefab() { return this.ptr.readField(0x32, 'i32').val() === 1; }
    set isPrefab(v) { return this.ptr.writeField(0x32, 'i32', v); }
    get material() { return this.ptr.readField(0x3C, 'i32').val(); }
    set material(v) { return this.ptr.writeField(0x3C, 'i32', v); }
    get texturePath() { return this.ptr.readField(0x34, 'i32').mstr(); }
    set texturePath(v) { return this.ptr.writeField(0x34, 'i32', window.ctx.createMstr(v)); }
    GetDefaultIdTypeBased() { return window.ctx.call("GunSkin", "GetDefaultIdTypeBased", [this.ptr]).val(); }
    IsDefaultItem() { return window.ctx.call("GunSkin", "IsDefaultItem", [this.ptr]).val() === 1; }
    IsSelected() { return window.ctx.call("GunSkin", "IsSelected", [this.ptr]).val() === 1; }
    ToString() { return window.ctx.call("GunSkin", "ToString", [this.ptr]); }
}

export class MyTextureLoader {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get instantiatedPrefab() { return new GameObject(this.ptr.readField(0x34, 'i32')); }
    set instantiatedPrefab(v) { return this.ptr.writeField(0x34, 'i32', v); }
    get isFallbackPrefab() { return this.ptr.readField(0x3C, 'i32').val() === 1; }
    set isFallbackPrefab(v) { return this.ptr.writeField(0x3C, 'i32', v); }
    get loadTextureOnEnableFallback() { return this.ptr.readField(0x38, 'i32').mstr(); }
    set loadTextureOnEnableFallback(v) { return this.ptr.writeField(0x38, 'i32', window.ctx.createMstr(v)); }
    get loaded() { return this.ptr.readField(0x10, 'i32').val() === 1; }
    set loaded(v) { return this.ptr.writeField(0x10, 'i32', v); }
    get materials() { return JSArray(this.ptr.readField(0x18, 'i32')); }
    set materials(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get meshRenderers() { return JSArray(this.ptr.readField(0x14, 'i32')); }
    set meshRenderers(v) { return this.ptr.writeField(0x14, 'i32', v); }
    get prefabHandle() { return new GameObject(this.ptr.readField(0x28, 'i32')); }
    set prefabHandle(v) { return this.ptr.writeField(0x28, 'i32', v); }
    get textureHandle() { return new Texture(this.ptr.readField(0x1C, 'i32')); }
    set textureHandle(v) { return this.ptr.writeField(0x1C, 'i32', v); }
    OnDestroy() { window.ctx.call("MyTextureLoader", "OnDestroy", [this.ptr]); }
    OnEnable() { window.ctx.call("MyTextureLoader", "OnEnable", [this.ptr]); }
    SetLayerRecursively(obj, layer) { window.ctx.call("MyTextureLoader", "SetLayerRecursively", [this.ptr, obj, layer]); }
    TryLoadAndSetTexture(addressablePath, materialToUse, isPrefab) { window.ctx.call("MyTextureLoader", "TryLoadAndSetTexture", [this.ptr, addressablePath, materialToUse, isPrefab]); }
}

export class ItemRarity {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class AudioSource {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get bypassEffects() { return window.ctx.call("UnityEngine.AudioSource", "get_bypassEffects", [this.ptr]).val() === 1; }
    set bypassEffects(v) { window.ctx.call("UnityEngine.AudioSource", "set_bypassEffects", [this.ptr, v]); }
    get bypassListenerEffects() { return window.ctx.call("UnityEngine.AudioSource", "get_bypassListenerEffects", [this.ptr]).val() === 1; }
    set bypassListenerEffects(v) { window.ctx.call("UnityEngine.AudioSource", "set_bypassListenerEffects", [this.ptr, v]); }
    get bypassReverbZones() { return window.ctx.call("UnityEngine.AudioSource", "get_bypassReverbZones", [this.ptr]).val() === 1; }
    set bypassReverbZones(v) { window.ctx.call("UnityEngine.AudioSource", "set_bypassReverbZones", [this.ptr, v]); }
    get clip() { return new AudioClip(window.ctx.call("UnityEngine.AudioSource", "get_clip", [this.ptr])); }
    set clip(v) { window.ctx.call("UnityEngine.AudioSource", "set_clip", [this.ptr, v]); }
    get containerActivePlayables() { return window.ctx.call("UnityEngine.AudioSource", "get_containerActivePlayables", [this.ptr]); }
    get dopplerLevel() { return window.ctx.call("UnityEngine.AudioSource", "get_dopplerLevel", [this.ptr]).val(); }
    set dopplerLevel(v) { window.ctx.call("UnityEngine.AudioSource", "set_dopplerLevel", [this.ptr, v]); }
    get generator() { return new IAudioGenerator(window.ctx.call("UnityEngine.AudioSource", "get_generator", [this.ptr])); }
    set generator(v) { window.ctx.call("UnityEngine.AudioSource", "set_generator", [this.ptr, v]); }
    get generatorDefinition() { return new IAudioGenerator(window.ctx.call("UnityEngine.AudioSource", "get_generatorDefinition", [this.ptr])); }
    set generatorDefinition(v) { window.ctx.call("UnityEngine.AudioSource", "set_generatorDefinition", [this.ptr, v]); }
    get generatorHandle() { return (()=>{
					let structptr_edd819 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.AudioSource", "get_generatorHandle", [structptr_edd819, this.ptr]);
					return structptr_edd819;
				})(); }
    get generatorHeader() { return window.ctx.call("UnityEngine.AudioSource", "get_generatorHeader", [this.ptr]); }
    get generatorInstance() { return (()=>{
					let structptr_7b8b50 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.AudioSource", "get_generatorInstance", [structptr_7b8b50, this.ptr]);
					return structptr_7b8b50;
				})(); }
    get generatorObject() { return new Object(window.ctx.call("UnityEngine.AudioSource", "get_generatorObject", [this.ptr])); }
    set generatorObject(v) { window.ctx.call("UnityEngine.AudioSource", "set_generatorObject", [this.ptr, v]); }
    get ignoreListenerPause() { return window.ctx.call("UnityEngine.AudioSource", "get_ignoreListenerPause", [this.ptr]).val() === 1; }
    set ignoreListenerPause(v) { window.ctx.call("UnityEngine.AudioSource", "set_ignoreListenerPause", [this.ptr, v]); }
    get ignoreListenerVolume() { return window.ctx.call("UnityEngine.AudioSource", "get_ignoreListenerVolume", [this.ptr]).val() === 1; }
    set ignoreListenerVolume(v) { window.ctx.call("UnityEngine.AudioSource", "set_ignoreListenerVolume", [this.ptr, v]); }
    get isContainerPlaying() { return window.ctx.call("UnityEngine.AudioSource", "get_isContainerPlaying", [this.ptr]).val() === 1; }
    get isPlaying() { return window.ctx.call("UnityEngine.AudioSource", "get_isPlaying", [this.ptr]).val() === 1; }
    get isVirtual() { return window.ctx.call("UnityEngine.AudioSource", "get_isVirtual", [this.ptr]).val() === 1; }
    get loop() { return window.ctx.call("UnityEngine.AudioSource", "get_loop", [this.ptr]).val() === 1; }
    set loop(v) { window.ctx.call("UnityEngine.AudioSource", "set_loop", [this.ptr, v]); }
    get maxDistance() { return window.ctx.call("UnityEngine.AudioSource", "get_maxDistance", [this.ptr]).val(); }
    set maxDistance(v) { window.ctx.call("UnityEngine.AudioSource", "set_maxDistance", [this.ptr, v]); }
    get maxVolume() { return window.ctx.call("UnityEngine.AudioSource", "get_maxVolume", [this.ptr]).val(); }
    set maxVolume(v) { window.ctx.call("UnityEngine.AudioSource", "set_maxVolume", [this.ptr, v]); }
    get minDistance() { return window.ctx.call("UnityEngine.AudioSource", "get_minDistance", [this.ptr]).val(); }
    set minDistance(v) { window.ctx.call("UnityEngine.AudioSource", "set_minDistance", [this.ptr, v]); }
    get minVolume() { return window.ctx.call("UnityEngine.AudioSource", "get_minVolume", [this.ptr]).val(); }
    set minVolume(v) { window.ctx.call("UnityEngine.AudioSource", "set_minVolume", [this.ptr, v]); }
    get mute() { return window.ctx.call("UnityEngine.AudioSource", "get_mute", [this.ptr]).val() === 1; }
    set mute(v) { window.ctx.call("UnityEngine.AudioSource", "set_mute", [this.ptr, v]); }
    get outputAudioMixerGroup() { return window.ctx.call("UnityEngine.AudioSource", "get_outputAudioMixerGroup", [this.ptr]); }
    set outputAudioMixerGroup(v) { window.ctx.call("UnityEngine.AudioSource", "set_outputAudioMixerGroup", [this.ptr, v]); }
    get panStereo() { return window.ctx.call("UnityEngine.AudioSource", "get_panStereo", [this.ptr]).val(); }
    set panStereo(v) { window.ctx.call("UnityEngine.AudioSource", "set_panStereo", [this.ptr, v]); }
    get pitch() { return window.ctx.call("UnityEngine.AudioSource", "get_pitch", [this.ptr]).val(); }
    set pitch(v) { window.ctx.call("UnityEngine.AudioSource", "set_pitch", [this.ptr, v]); }
    get playOnAwake() { return window.ctx.call("UnityEngine.AudioSource", "get_playOnAwake", [this.ptr]).val() === 1; }
    set playOnAwake(v) { window.ctx.call("UnityEngine.AudioSource", "set_playOnAwake", [this.ptr, v]); }
    get priority() { return window.ctx.call("UnityEngine.AudioSource", "get_priority", [this.ptr]).val(); }
    set priority(v) { window.ctx.call("UnityEngine.AudioSource", "set_priority", [this.ptr, v]); }
    get resource() { return window.ctx.call("UnityEngine.AudioSource", "get_resource", [this.ptr]); }
    set resource(v) { window.ctx.call("UnityEngine.AudioSource", "set_resource", [this.ptr, v]); }
    get reverbZoneMix() { return window.ctx.call("UnityEngine.AudioSource", "get_reverbZoneMix", [this.ptr]).val(); }
    set reverbZoneMix(v) { window.ctx.call("UnityEngine.AudioSource", "set_reverbZoneMix", [this.ptr, v]); }
    get rolloffFactor() { return window.ctx.call("UnityEngine.AudioSource", "get_rolloffFactor", [this.ptr]).val(); }
    set rolloffFactor(v) { window.ctx.call("UnityEngine.AudioSource", "set_rolloffFactor", [this.ptr, v]); }
    get rolloffMode() { return new AudioRolloffMode(window.ctx.call("UnityEngine.AudioSource", "get_rolloffMode", [this.ptr])); }
    set rolloffMode(v) { window.ctx.call("UnityEngine.AudioSource", "set_rolloffMode", [this.ptr, v]); }
    get spatialBlend() { return window.ctx.call("UnityEngine.AudioSource", "get_spatialBlend", [this.ptr]).val(); }
    set spatialBlend(v) { window.ctx.call("UnityEngine.AudioSource", "set_spatialBlend", [this.ptr, v]); }
    get spatialize() { return window.ctx.call("UnityEngine.AudioSource", "get_spatialize", [this.ptr]).val() === 1; }
    set spatialize(v) { window.ctx.call("UnityEngine.AudioSource", "set_spatialize", [this.ptr, v]); }
    get spatializePostEffects() { return window.ctx.call("UnityEngine.AudioSource", "get_spatializePostEffects", [this.ptr]).val() === 1; }
    set spatializePostEffects(v) { window.ctx.call("UnityEngine.AudioSource", "set_spatializePostEffects", [this.ptr, v]); }
    get spread() { return window.ctx.call("UnityEngine.AudioSource", "get_spread", [this.ptr]).val(); }
    set spread(v) { window.ctx.call("UnityEngine.AudioSource", "set_spread", [this.ptr, v]); }
    get time() { return window.ctx.call("UnityEngine.AudioSource", "get_time", [this.ptr]).val(); }
    set time(v) { window.ctx.call("UnityEngine.AudioSource", "set_time", [this.ptr, v]); }
    get timeSamples() { return window.ctx.call("UnityEngine.AudioSource", "get_timeSamples", [this.ptr]).val(); }
    set timeSamples(v) { window.ctx.call("UnityEngine.AudioSource", "set_timeSamples", [this.ptr, v]); }
    get velocityUpdateMode() { return new AudioVelocityUpdateMode(window.ctx.call("UnityEngine.AudioSource", "get_velocityUpdateMode", [this.ptr])); }
    set velocityUpdateMode(v) { window.ctx.call("UnityEngine.AudioSource", "set_velocityUpdateMode", [this.ptr, v]); }
    get volume() { return window.ctx.call("UnityEngine.AudioSource", "get_volume", [this.ptr]).val(); }
    set volume(v) { window.ctx.call("UnityEngine.AudioSource", "set_volume", [this.ptr, v]); }
    GetAmbisonicDecoderFloat(index, value) { return window.ctx.call("UnityEngine.AudioSource", "GetAmbisonicDecoderFloat", [this.ptr, index, value]).val() === 1; }
    static GetAmbisonicDecoderFloat_Injected(_unity_self, index, value) { return window.ctx.call("UnityEngine.AudioSource", "GetAmbisonicDecoderFloat_Injected", [_unity_self, index, value]).val() === 1; }
    GetAudioRandomContainerRuntimeMeterValue() { return window.ctx.call("UnityEngine.AudioSource", "GetAudioRandomContainerRuntimeMeterValue", [this.ptr]).val(); }
    static GetAudioRandomContainerRuntimeMeterValue_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioSource", "GetAudioRandomContainerRuntimeMeterValue_Injected", [_unity_self]).val(); }
    GetCustomCurve(type) { return new AnimationCurve(window.ctx.call("UnityEngine.AudioSource", "GetCustomCurve", [this.ptr, type])); }
    static GetCustomCurveHelper(source, type) { return new AnimationCurve(window.ctx.call("UnityEngine.AudioSource", "GetCustomCurveHelper", [source, type])); }
    static GetCustomCurveHelper_Injected(source, type) { return (()=>{
					let structptr_f5f90c = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.AudioSource", "GetCustomCurveHelper_Injected", [structptr_f5f90c, source, type]);
					return structptr_f5f90c;
				})(); }
    GetOutputData_numSamples_channel(numSamples, channel) { return window.ctx.call("UnityEngine.AudioSource", "GetOutputData_18429", [this.ptr, numSamples, channel]); }
    GetOutputData_samples_channel(samples, channel) { window.ctx.call("UnityEngine.AudioSource", "GetOutputData_18430", [this.ptr, samples, channel]); }
    static GetOutputDataHelper(source, samples, channel) { window.ctx.call("UnityEngine.AudioSource", "GetOutputDataHelper", [source, samples, channel]); }
    static GetOutputDataHelper_Injected(source, samples, channel) { window.ctx.call("UnityEngine.AudioSource", "GetOutputDataHelper_Injected", [source, samples, channel]); }
    static GetPitch(source) { return window.ctx.call("UnityEngine.AudioSource", "GetPitch", [source]).val(); }
    static GetPitch_Injected(source) { return window.ctx.call("UnityEngine.AudioSource", "GetPitch_Injected", [source]).val(); }
    GetSpatializerFloat(index, value) { return window.ctx.call("UnityEngine.AudioSource", "GetSpatializerFloat", [this.ptr, index, value]).val() === 1; }
    static GetSpatializerFloat_Injected(_unity_self, index, value) { return window.ctx.call("UnityEngine.AudioSource", "GetSpatializerFloat_Injected", [_unity_self, index, value]).val() === 1; }
    GetSpectrumData_numSamples_channel_window_safe(numSamples, channel, window_safe) { return window.ctx.call("UnityEngine.AudioSource", "GetSpectrumData_18431", [this.ptr, numSamples, channel, window_safe]); }
    GetSpectrumData_samples_channel_window_safe(samples, channel, window_safe) { window.ctx.call("UnityEngine.AudioSource", "GetSpectrumData_18432", [this.ptr, samples, channel, window_safe]); }
    static GetSpectrumDataHelper(source, samples, channel, window_safe) { window.ctx.call("UnityEngine.AudioSource", "GetSpectrumDataHelper", [source, samples, channel, window_safe]); }
    static GetSpectrumDataHelper_Injected(source, samples, channel, window_safe) { window.ctx.call("UnityEngine.AudioSource", "GetSpectrumDataHelper_Injected", [source, samples, channel, window_safe]); }
    Pause() { window.ctx.call("UnityEngine.AudioSource", "Pause", [this.ptr]); }
    static Pause_Injected(_unity_self) { window.ctx.call("UnityEngine.AudioSource", "Pause_Injected", [_unity_self]); }
    Play_delay(delay) { window.ctx.call("UnityEngine.AudioSource", "Play_18347", [this.ptr, delay]); }
    Play_pointer() { window.ctx.call("UnityEngine.AudioSource", "Play_18371", [this.ptr]); }
    Play_delay(delay) { window.ctx.call("UnityEngine.AudioSource", "Play_18372", [this.ptr, delay]); }
    static PlayClipAtPoint_clip_position(clip, position) { window.ctx.call("UnityEngine.AudioSource", "PlayClipAtPoint_18387", [clip, position]); }
    static PlayClipAtPoint_clip_position_volume(clip, position, volume) { window.ctx.call("UnityEngine.AudioSource", "PlayClipAtPoint_18388", [clip, position, volume]); }
    PlayDelayed(delay) { window.ctx.call("UnityEngine.AudioSource", "PlayDelayed", [this.ptr, delay]); }
    static PlayHelper(source, delay) { window.ctx.call("UnityEngine.AudioSource", "PlayHelper", [source, delay]); }
    static PlayHelper_Injected(source, delay) { window.ctx.call("UnityEngine.AudioSource", "PlayHelper_Injected", [source, delay]); }
    PlayOneShot_clip(clip) { window.ctx.call("UnityEngine.AudioSource", "PlayOneShot_18375", [this.ptr, clip]); }
    PlayOneShot_clip_volumeScale(clip, volumeScale) { window.ctx.call("UnityEngine.AudioSource", "PlayOneShot_18376", [this.ptr, clip, volumeScale]); }
    static PlayOneShotHelper(source, clip, volumeScale) { window.ctx.call("UnityEngine.AudioSource", "PlayOneShotHelper", [source, clip, volumeScale]); }
    static PlayOneShotHelper_Injected(source, clip, volumeScale) { window.ctx.call("UnityEngine.AudioSource", "PlayOneShotHelper_Injected", [source, clip, volumeScale]); }
    PlayScheduled(time) { window.ctx.call("UnityEngine.AudioSource", "PlayScheduled", [this.ptr, time]); }
    static Play_Injected(_unity_self, delay) { window.ctx.call("UnityEngine.AudioSource", "Play_Injected", [_unity_self, delay]); }
    SetAmbisonicDecoderFloat(index, value) { return window.ctx.call("UnityEngine.AudioSource", "SetAmbisonicDecoderFloat", [this.ptr, index, value]).val() === 1; }
    static SetAmbisonicDecoderFloat_Injected(_unity_self, index, value) { return window.ctx.call("UnityEngine.AudioSource", "SetAmbisonicDecoderFloat_Injected", [_unity_self, index, value]).val() === 1; }
    SetCustomCurve(type, curve) { window.ctx.call("UnityEngine.AudioSource", "SetCustomCurve", [this.ptr, type, curve]); }
    static SetCustomCurveHelper(source, type, curve) { window.ctx.call("UnityEngine.AudioSource", "SetCustomCurveHelper", [source, type, curve]); }
    static SetCustomCurveHelper_Injected(source, type, curve) { window.ctx.call("UnityEngine.AudioSource", "SetCustomCurveHelper_Injected", [source, type, curve]); }
    static SetPitch(source, pitch) { window.ctx.call("UnityEngine.AudioSource", "SetPitch", [source, pitch]); }
    static SetPitch_Injected(source, pitch) { window.ctx.call("UnityEngine.AudioSource", "SetPitch_Injected", [source, pitch]); }
    SetScheduledEndTime(time) { window.ctx.call("UnityEngine.AudioSource", "SetScheduledEndTime", [this.ptr, time]); }
    static SetScheduledEndTime_Injected(_unity_self, time) { window.ctx.call("UnityEngine.AudioSource", "SetScheduledEndTime_Injected", [_unity_self, time]); }
    SetScheduledStartTime(time) { window.ctx.call("UnityEngine.AudioSource", "SetScheduledStartTime", [this.ptr, time]); }
    static SetScheduledStartTime_Injected(_unity_self, time) { window.ctx.call("UnityEngine.AudioSource", "SetScheduledStartTime_Injected", [_unity_self, time]); }
    SetSpatializerFloat(index, value) { return window.ctx.call("UnityEngine.AudioSource", "SetSpatializerFloat", [this.ptr, index, value]).val() === 1; }
    static SetSpatializerFloat_Injected(_unity_self, index, value) { return window.ctx.call("UnityEngine.AudioSource", "SetSpatializerFloat_Injected", [_unity_self, index, value]).val() === 1; }
    SkipToNextElementIfHasContainer() { window.ctx.call("UnityEngine.AudioSource", "SkipToNextElementIfHasContainer", [this.ptr]); }
    static SkipToNextElementIfHasContainer_Injected(_unity_self) { window.ctx.call("UnityEngine.AudioSource", "SkipToNextElementIfHasContainer_Injected", [_unity_self]); }
    Stop_stopOneShots(stopOneShots) { window.ctx.call("UnityEngine.AudioSource", "Stop_18349", [this.ptr, stopOneShots]); }
    Stop_pointer() { window.ctx.call("UnityEngine.AudioSource", "Stop_18379", [this.ptr]); }
    static Stop_Injected(_unity_self, stopOneShots) { window.ctx.call("UnityEngine.AudioSource", "Stop_Injected", [_unity_self, stopOneShots]); }
    UnPause() { window.ctx.call("UnityEngine.AudioSource", "UnPause", [this.ptr]); }
    static UnPause_Injected(_unity_self) { window.ctx.call("UnityEngine.AudioSource", "UnPause_Injected", [_unity_self]); }
    static get_bypassEffects_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioSource", "get_bypassEffects_Injected", [_unity_self]).val() === 1; }
    static get_bypassListenerEffects_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioSource", "get_bypassListenerEffects_Injected", [_unity_self]).val() === 1; }
    static get_bypassReverbZones_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioSource", "get_bypassReverbZones_Injected", [_unity_self]).val() === 1; }
    static get_containerActivePlayables_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioSource", "get_containerActivePlayables_Injected", [_unity_self]); }
    static get_dopplerLevel_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioSource", "get_dopplerLevel_Injected", [_unity_self]).val(); }
    static get_generatorHeader_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioSource", "get_generatorHeader_Injected", [_unity_self]); }
    static get_generatorObject_Injected(_unity_self) { return (()=>{
					let structptr_ddc3b5 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.AudioSource", "get_generatorObject_Injected", [structptr_ddc3b5, _unity_self]);
					return structptr_ddc3b5;
				})(); }
    static get_ignoreListenerPause_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioSource", "get_ignoreListenerPause_Injected", [_unity_self]).val() === 1; }
    static get_ignoreListenerVolume_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioSource", "get_ignoreListenerVolume_Injected", [_unity_self]).val() === 1; }
    static get_isContainerPlaying_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioSource", "get_isContainerPlaying_Injected", [_unity_self]).val() === 1; }
    static get_isPlaying_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioSource", "get_isPlaying_Injected", [_unity_self]).val() === 1; }
    static get_isVirtual_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioSource", "get_isVirtual_Injected", [_unity_self]).val() === 1; }
    static get_loop_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioSource", "get_loop_Injected", [_unity_self]).val() === 1; }
    static get_maxDistance_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioSource", "get_maxDistance_Injected", [_unity_self]).val(); }
    static get_minDistance_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioSource", "get_minDistance_Injected", [_unity_self]).val(); }
    static get_mute_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioSource", "get_mute_Injected", [_unity_self]).val() === 1; }
    static get_outputAudioMixerGroup_Injected(_unity_self) { return (()=>{
					let structptr_53866b = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.AudioSource", "get_outputAudioMixerGroup_Injected", [structptr_53866b, _unity_self]);
					return structptr_53866b;
				})(); }
    static get_panStereo_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioSource", "get_panStereo_Injected", [_unity_self]).val(); }
    static get_playOnAwake_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioSource", "get_playOnAwake_Injected", [_unity_self]).val() === 1; }
    static get_priority_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioSource", "get_priority_Injected", [_unity_self]).val(); }
    static get_reverbZoneMix_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioSource", "get_reverbZoneMix_Injected", [_unity_self]).val(); }
    static get_rolloffMode_Injected(_unity_self) { return new AudioRolloffMode(window.ctx.call("UnityEngine.AudioSource", "get_rolloffMode_Injected", [_unity_self])); }
    static get_spatialBlend_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioSource", "get_spatialBlend_Injected", [_unity_self]).val(); }
    static get_spatializePostEffects_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioSource", "get_spatializePostEffects_Injected", [_unity_self]).val() === 1; }
    static get_spatialize_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioSource", "get_spatialize_Injected", [_unity_self]).val() === 1; }
    static get_spread_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioSource", "get_spread_Injected", [_unity_self]).val(); }
    static get_timeSamples_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioSource", "get_timeSamples_Injected", [_unity_self]).val(); }
    static get_time_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioSource", "get_time_Injected", [_unity_self]).val(); }
    static get_velocityUpdateMode_Injected(_unity_self) { return new AudioVelocityUpdateMode(window.ctx.call("UnityEngine.AudioSource", "get_velocityUpdateMode_Injected", [_unity_self])); }
    static get_volume_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioSource", "get_volume_Injected", [_unity_self]).val(); }
    static set_bypassEffects_Injected(_unity_self, value) { window.ctx.call("UnityEngine.AudioSource", "set_bypassEffects_Injected", [_unity_self, value]); }
    static set_bypassListenerEffects_Injected(_unity_self, value) { window.ctx.call("UnityEngine.AudioSource", "set_bypassListenerEffects_Injected", [_unity_self, value]); }
    static set_bypassReverbZones_Injected(_unity_self, value) { window.ctx.call("UnityEngine.AudioSource", "set_bypassReverbZones_Injected", [_unity_self, value]); }
    static set_dopplerLevel_Injected(_unity_self, value) { window.ctx.call("UnityEngine.AudioSource", "set_dopplerLevel_Injected", [_unity_self, value]); }
    static set_generatorObject_Injected(_unity_self, value) { window.ctx.call("UnityEngine.AudioSource", "set_generatorObject_Injected", [_unity_self, value]); }
    static set_ignoreListenerPause_Injected(_unity_self, value) { window.ctx.call("UnityEngine.AudioSource", "set_ignoreListenerPause_Injected", [_unity_self, value]); }
    static set_ignoreListenerVolume_Injected(_unity_self, value) { window.ctx.call("UnityEngine.AudioSource", "set_ignoreListenerVolume_Injected", [_unity_self, value]); }
    static set_loop_Injected(_unity_self, value) { window.ctx.call("UnityEngine.AudioSource", "set_loop_Injected", [_unity_self, value]); }
    static set_maxDistance_Injected(_unity_self, value) { window.ctx.call("UnityEngine.AudioSource", "set_maxDistance_Injected", [_unity_self, value]); }
    static set_minDistance_Injected(_unity_self, value) { window.ctx.call("UnityEngine.AudioSource", "set_minDistance_Injected", [_unity_self, value]); }
    static set_mute_Injected(_unity_self, value) { window.ctx.call("UnityEngine.AudioSource", "set_mute_Injected", [_unity_self, value]); }
    static set_outputAudioMixerGroup_Injected(_unity_self, value) { window.ctx.call("UnityEngine.AudioSource", "set_outputAudioMixerGroup_Injected", [_unity_self, value]); }
    static set_panStereo_Injected(_unity_self, value) { window.ctx.call("UnityEngine.AudioSource", "set_panStereo_Injected", [_unity_self, value]); }
    static set_playOnAwake_Injected(_unity_self, value) { window.ctx.call("UnityEngine.AudioSource", "set_playOnAwake_Injected", [_unity_self, value]); }
    static set_priority_Injected(_unity_self, value) { window.ctx.call("UnityEngine.AudioSource", "set_priority_Injected", [_unity_self, value]); }
    static set_reverbZoneMix_Injected(_unity_self, value) { window.ctx.call("UnityEngine.AudioSource", "set_reverbZoneMix_Injected", [_unity_self, value]); }
    static set_rolloffMode_Injected(_unity_self, value) { window.ctx.call("UnityEngine.AudioSource", "set_rolloffMode_Injected", [_unity_self, value]); }
    static set_spatialBlend_Injected(_unity_self, value) { window.ctx.call("UnityEngine.AudioSource", "set_spatialBlend_Injected", [_unity_self, value]); }
    static set_spatializePostEffects_Injected(_unity_self, value) { window.ctx.call("UnityEngine.AudioSource", "set_spatializePostEffects_Injected", [_unity_self, value]); }
    static set_spatialize_Injected(_unity_self, value) { window.ctx.call("UnityEngine.AudioSource", "set_spatialize_Injected", [_unity_self, value]); }
    static set_spread_Injected(_unity_self, value) { window.ctx.call("UnityEngine.AudioSource", "set_spread_Injected", [_unity_self, value]); }
    static set_timeSamples_Injected(_unity_self, value) { window.ctx.call("UnityEngine.AudioSource", "set_timeSamples_Injected", [_unity_self, value]); }
    static set_time_Injected(_unity_self, value) { window.ctx.call("UnityEngine.AudioSource", "set_time_Injected", [_unity_self, value]); }
    static set_velocityUpdateMode_Injected(_unity_self, value) { window.ctx.call("UnityEngine.AudioSource", "set_velocityUpdateMode_Injected", [_unity_self, value]); }
    static set_volume_Injected(_unity_self, value) { window.ctx.call("UnityEngine.AudioSource", "set_volume_Injected", [_unity_self, value]); }
}

export class AudioClip {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get ambisonic() { return window.ctx.call("UnityEngine.AudioClip", "get_ambisonic", [this.ptr]).val() === 1; }
    get channels() { return window.ctx.call("UnityEngine.AudioClip", "get_channels", [this.ptr]).val(); }
    get frequency() { return window.ctx.call("UnityEngine.AudioClip", "get_frequency", [this.ptr]).val(); }
    get isReadyToPlay() { return window.ctx.call("UnityEngine.AudioClip", "get_isReadyToPlay", [this.ptr]).val() === 1; }
    get length() { return window.ctx.call("UnityEngine.AudioClip", "get_length", [this.ptr]).val(); }
    get loadInBackground() { return window.ctx.call("UnityEngine.AudioClip", "get_loadInBackground", [this.ptr]).val() === 1; }
    get loadState() { return new AudioDataLoadState(window.ctx.call("UnityEngine.AudioClip", "get_loadState", [this.ptr])); }
    get loadType() { return new AudioClipLoadType(window.ctx.call("UnityEngine.AudioClip", "get_loadType", [this.ptr])); }
    get preloadAudioData() { return window.ctx.call("UnityEngine.AudioClip", "get_preloadAudioData", [this.ptr]).val() === 1; }
    get samples() { return window.ctx.call("UnityEngine.AudioClip", "get_samples", [this.ptr]).val(); }
    get m_PCMReaderCallback() { return this.ptr.readField(0xC, 'i32'); }
    set m_PCMReaderCallback(v) { return this.ptr.writeField(0xC, 'i32', v); }
    get m_PCMSetPositionCallback() { return this.ptr.readField(0x10, 'i32'); }
    set m_PCMSetPositionCallback(v) { return this.ptr.writeField(0x10, 'i32', v); }
    static Construct_Internal() { return new AudioClip(window.ctx.call("UnityEngine.AudioClip", "Construct_Internal", [])); }
    static Construct_Internal_Injected() { return (()=>{
					let structptr_90acb8 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.AudioClip", "Construct_Internal_Injected", [structptr_90acb8, ]);
					return structptr_90acb8;
				})(); }
    static Create_name_lengthSamples_channels_frequency__3D_stream(name, lengthSamples, channels, frequency, _3D, stream) { return new AudioClip(window.ctx.call("UnityEngine.AudioClip", "Create_18290", [name, lengthSamples, channels, frequency, _3D, stream])); }
    static Create_name_lengthSamples_channels_frequency__3D_stream_pcmreadercallback(name, lengthSamples, channels, frequency, _3D, stream, pcmreadercallback) { return new AudioClip(window.ctx.call("UnityEngine.AudioClip", "Create_18291", [name, lengthSamples, channels, frequency, _3D, stream, pcmreadercallback])); }
    static Create_name_lengthSamples_channels_frequency__3D_stream_pcmreadercallback_pcmsetpositioncallback(name, lengthSamples, channels, frequency, _3D, stream, pcmreadercallback, pcmsetpositioncallback) { return new AudioClip(window.ctx.call("UnityEngine.AudioClip", "Create_18292", [name, lengthSamples, channels, frequency, _3D, stream, pcmreadercallback, pcmsetpositioncallback])); }
    static Create_name_lengthSamples_channels_frequency_stream(name, lengthSamples, channels, frequency, stream) { return new AudioClip(window.ctx.call("UnityEngine.AudioClip", "Create_18293", [name, lengthSamples, channels, frequency, stream])); }
    static Create_name_lengthSamples_channels_frequency_stream_pcmreadercallback(name, lengthSamples, channels, frequency, stream, pcmreadercallback) { return new AudioClip(window.ctx.call("UnityEngine.AudioClip", "Create_18294", [name, lengthSamples, channels, frequency, stream, pcmreadercallback])); }
    static Create_name_lengthSamples_channels_frequency_stream_pcmreadercallback_pcmsetpositioncallback(name, lengthSamples, channels, frequency, stream, pcmreadercallback, pcmsetpositioncallback) { return new AudioClip(window.ctx.call("UnityEngine.AudioClip", "Create_18295", [name, lengthSamples, channels, frequency, stream, pcmreadercallback, pcmsetpositioncallback])); }
    CreateUserSound(name, lengthSamples, channels, frequency, stream) { window.ctx.call("UnityEngine.AudioClip", "CreateUserSound", [this.ptr, name, lengthSamples, channels, frequency, stream]); }
    static CreateUserSound_Injected(_unity_self, name, lengthSamples, channels, frequency, stream) { window.ctx.call("UnityEngine.AudioClip", "CreateUserSound_Injected", [_unity_self, name, lengthSamples, channels, frequency, stream]); }
    static GetData_clip_data_samplesOffset(clip, data, samplesOffset) { return window.ctx.call("UnityEngine.AudioClip", "GetData_18269", [clip, data, samplesOffset]).val() === 1; }
    GetData_data_offsetSamples(data, offsetSamples) { return window.ctx.call("UnityEngine.AudioClip", "GetData_18286", [this.ptr, data, offsetSamples]).val() === 1; }
    GetData_data_offsetSamples(data, offsetSamples) { return window.ctx.call("UnityEngine.AudioClip", "GetData_18287", [this.ptr, data, offsetSamples]).val() === 1; }
    static GetData_Injected(clip, data, samplesOffset) { return window.ctx.call("UnityEngine.AudioClip", "GetData_Injected", [clip, data, samplesOffset]).val() === 1; }
    GetName() { return window.ctx.call("UnityEngine.AudioClip", "GetName", [this.ptr]); }
    static GetName_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.AudioClip", "GetName_Injected", [_unity_self, ret]); }
    InvokePCMReaderCallback_Internal(data) { window.ctx.call("UnityEngine.AudioClip", "InvokePCMReaderCallback_Internal", [this.ptr, data]); }
    InvokePCMSetPositionCallback_Internal(position) { window.ctx.call("UnityEngine.AudioClip", "InvokePCMSetPositionCallback_Internal", [this.ptr, position]); }
    LoadAudioData() { return window.ctx.call("UnityEngine.AudioClip", "LoadAudioData", [this.ptr]).val() === 1; }
    static LoadAudioData_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioClip", "LoadAudioData_Injected", [_unity_self]).val() === 1; }
    static SetData_clip_data_samplesOffset(clip, data, samplesOffset) { return window.ctx.call("UnityEngine.AudioClip", "SetData_18270", [clip, data, samplesOffset]).val() === 1; }
    SetData_data_offsetSamples(data, offsetSamples) { return window.ctx.call("UnityEngine.AudioClip", "SetData_18288", [this.ptr, data, offsetSamples]).val() === 1; }
    SetData_data_offsetSamples(data, offsetSamples) { return window.ctx.call("UnityEngine.AudioClip", "SetData_18289", [this.ptr, data, offsetSamples]).val() === 1; }
    static SetData_Injected(clip, data, samplesOffset) { return window.ctx.call("UnityEngine.AudioClip", "SetData_Injected", [clip, data, samplesOffset]).val() === 1; }
    UnityEngine_Audio_IAudioGenerator_CreateInstance(context, nestedFormat, parameters) { return (()=>{
					let structptr_f8ceb8 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.AudioClip", "UnityEngine.Audio.IAudioGenerator.CreateInstance", [structptr_f8ceb8, this.ptr, context, nestedFormat, parameters]);
					return structptr_f8ceb8;
				})(); }
    UnloadAudioData() { return window.ctx.call("UnityEngine.AudioClip", "UnloadAudioData", [this.ptr]).val() === 1; }
    static UnloadAudioData_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioClip", "UnloadAudioData_Injected", [_unity_self]).val() === 1; }
    static get_ambisonic_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioClip", "get_ambisonic_Injected", [_unity_self]).val() === 1; }
    static get_channels_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioClip", "get_channels_Injected", [_unity_self]).val(); }
    static get_frequency_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioClip", "get_frequency_Injected", [_unity_self]).val(); }
    static get_isReadyToPlay_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioClip", "get_isReadyToPlay_Injected", [_unity_self]).val() === 1; }
    static get_length_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioClip", "get_length_Injected", [_unity_self]).val(); }
    static get_loadInBackground_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioClip", "get_loadInBackground_Injected", [_unity_self]).val() === 1; }
    static get_loadState_Injected(_unity_self) { return new AudioDataLoadState(window.ctx.call("UnityEngine.AudioClip", "get_loadState_Injected", [_unity_self])); }
    static get_loadType_Injected(_unity_self) { return new AudioClipLoadType(window.ctx.call("UnityEngine.AudioClip", "get_loadType_Injected", [_unity_self])); }
    static get_preloadAudioData_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioClip", "get_preloadAudioData_Injected", [_unity_self]).val() === 1; }
    static get_samples_Injected(_unity_self) { return window.ctx.call("UnityEngine.AudioClip", "get_samples_Injected", [_unity_self]).val(); }
}

export class Tween {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get active() { return window.ctx.call("DG.Tweening.Tween", "get_active", [this.ptr]).val() === 1; }
    set active(v) { window.ctx.call("DG.Tweening.Tween", "set_active", [this.ptr, v]); }
    get fullPosition() { return window.ctx.call("DG.Tweening.Tween", "get_fullPosition", [this.ptr]).val(); }
    set fullPosition(v) { window.ctx.call("DG.Tweening.Tween", "set_fullPosition", [this.ptr, v]); }
    get hasLoops() { return window.ctx.call("DG.Tweening.Tween", "get_hasLoops", [this.ptr]).val() === 1; }
    get isRelative() { return window.ctx.call("DG.Tweening.Tween", "get_isRelative", [this.ptr]).val() === 1; }
    set isRelative(v) { window.ctx.call("DG.Tweening.Tween", "set_isRelative", [this.ptr, v]); }
    get playedOnce() { return window.ctx.call("DG.Tweening.Tween", "get_playedOnce", [this.ptr]).val() === 1; }
    set playedOnce(v) { window.ctx.call("DG.Tweening.Tween", "set_playedOnce", [this.ptr, v]); }
    get position() { return window.ctx.call("DG.Tweening.Tween", "get_position", [this.ptr]).val(); }
    set position(v) { window.ctx.call("DG.Tweening.Tween", "set_position", [this.ptr, v]); }
    get _active_k_BackingField() { return this.ptr.readField(0x94, 'i32').val() === 1; }
    set _active_k_BackingField(v) { return this.ptr.writeField(0x94, 'i32', v); }
    get _isRelative_k_BackingField() { return this.ptr.readField(0x70, 'i32').val() === 1; }
    set _isRelative_k_BackingField(v) { return this.ptr.writeField(0x70, 'i32', v); }
    get _playedOnce_k_BackingField() { return this.ptr.readField(0xA6, 'i32').val() === 1; }
    set _playedOnce_k_BackingField(v) { return this.ptr.writeField(0xA6, 'i32', v); }
    get _position_k_BackingField() { return this.ptr.readField(0xA8, 'f32').val(); }
    set _position_k_BackingField(v) { return this.ptr.writeField(0xA8, 'f32', v); }
    get activeId() { return this.ptr.readField(0x9C, 'i32').val(); }
    set activeId(v) { return this.ptr.writeField(0x9C, 'i32', v); }
    get autoKill() { return this.ptr.readField(0x5C, 'i32').val() === 1; }
    set autoKill(v) { return this.ptr.writeField(0x5C, 'i32', v); }
    get completedLoops() { return this.ptr.readField(0xB0, 'i32').val(); }
    set completedLoops(v) { return this.ptr.writeField(0xB0, 'i32', v); }
    get creationLocked() { return this.ptr.readField(0xA4, 'i32').val() === 1; }
    set creationLocked(v) { return this.ptr.writeField(0xA4, 'i32', v); }
    get customEase() { return new EaseFunction(this.ptr.readField(0x78, 'i32')); }
    set customEase(v) { return this.ptr.writeField(0x78, 'i32', v); }
    get debugTargetId() { return this.ptr.readField(0x84, 'i32').mstr(); }
    set debugTargetId(v) { return this.ptr.writeField(0x84, 'i32', window.ctx.createMstr(v)); }
    get delay() { return this.ptr.readField(0x6C, 'f32').val(); }
    set delay(v) { return this.ptr.writeField(0x6C, 'f32', v); }
    get delayComplete() { return this.ptr.readField(0xBC, 'i32').val() === 1; }
    set delayComplete(v) { return this.ptr.writeField(0xBC, 'i32', v); }
    get duration() { return this.ptr.readField(0x60, 'f32').val(); }
    set duration(v) { return this.ptr.writeField(0x60, 'f32', v); }
    get easeOvershootOrAmplitude() { return this.ptr.readField(0x7C, 'f32').val(); }
    set easeOvershootOrAmplitude(v) { return this.ptr.writeField(0x7C, 'f32', v); }
    get easePeriod() { return this.ptr.readField(0x80, 'f32').val(); }
    set easePeriod(v) { return this.ptr.writeField(0x80, 'f32', v); }
    get easeType() { return new Ease(this.ptr.readField(0x74, 'i32')); }
    set easeType(v) { return this.ptr.writeField(0x74, 'i32', v); }
    get elapsedDelay() { return this.ptr.readField(0xB8, 'f32').val(); }
    set elapsedDelay(v) { return this.ptr.writeField(0xB8, 'f32', v); }
    get fullDuration() { return this.ptr.readField(0xAC, 'f32').val(); }
    set fullDuration(v) { return this.ptr.writeField(0xAC, 'f32', v); }
    get id() { return new Object(this.ptr.readField(0x20, 'i32')); }
    set id(v) { return this.ptr.writeField(0x20, 'i32', v); }
    get intId() { return this.ptr.readField(0x28, 'i32').val(); }
    set intId(v) { return this.ptr.writeField(0x28, 'i32', v); }
    get isBackwards() { return this.ptr.readField(0x1C, 'i32').val() === 1; }
    set isBackwards(v) { return this.ptr.writeField(0x1C, 'i32', v); }
    get isBlendable() { return this.ptr.readField(0x59, 'i32').val() === 1; }
    set isBlendable(v) { return this.ptr.writeField(0x59, 'i32', v); }
    get isComplete() { return this.ptr.readField(0xB5, 'i32').val() === 1; }
    set isComplete(v) { return this.ptr.writeField(0xB5, 'i32', v); }
    get isFrom() { return this.ptr.readField(0x58, 'i32').val() === 1; }
    set isFrom(v) { return this.ptr.writeField(0x58, 'i32', v); }
    get isIndependentUpdate() { return this.ptr.readField(0x34, 'i32').val() === 1; }
    set isIndependentUpdate(v) { return this.ptr.writeField(0x34, 'i32', v); }
    get isInverted() { return this.ptr.readField(0x1D, 'i32').val() === 1; }
    set isInverted(v) { return this.ptr.writeField(0x1D, 'i32', v); }
    get isPlaying() { return this.ptr.readField(0xB4, 'i32').val() === 1; }
    set isPlaying(v) { return this.ptr.writeField(0xB4, 'i32', v); }
    get isRecyclable() { return this.ptr.readField(0x5A, 'i32').val() === 1; }
    set isRecyclable(v) { return this.ptr.writeField(0x5A, 'i32', v); }
    get isSequenced() { return this.ptr.readField(0x95, 'i32').val() === 1; }
    set isSequenced(v) { return this.ptr.writeField(0x95, 'i32', v); }
    get isSpeedBased() { return this.ptr.readField(0x5B, 'i32').val() === 1; }
    set isSpeedBased(v) { return this.ptr.writeField(0x5B, 'i32', v); }
    get loopType() { return new LoopType(this.ptr.readField(0x68, 'i32')); }
    set loopType(v) { return this.ptr.writeField(0x68, 'i32', v); }
    get loops() { return this.ptr.readField(0x64, 'i32').val(); }
    set loops(v) { return this.ptr.writeField(0x64, 'i32', v); }
    get miscInt() { return this.ptr.readField(0xC0, 'i32').val(); }
    set miscInt(v) { return this.ptr.writeField(0xC0, 'i32', v); }
    get onComplete() { return new TweenCallback(this.ptr.readField(0x4C, 'i32')); }
    set onComplete(v) { return this.ptr.writeField(0x4C, 'i32', v); }
    get onKill() { return new TweenCallback(this.ptr.readField(0x50, 'i32')); }
    set onKill(v) { return this.ptr.writeField(0x50, 'i32', v); }
    get onPause() { return new TweenCallback(this.ptr.readField(0x3C, 'i32')); }
    set onPause(v) { return this.ptr.writeField(0x3C, 'i32', v); }
    get onPlay() { return new TweenCallback(this.ptr.readField(0x38, 'i32')); }
    set onPlay(v) { return this.ptr.writeField(0x38, 'i32', v); }
    get onRewind() { return new TweenCallback(this.ptr.readField(0x40, 'i32')); }
    set onRewind(v) { return this.ptr.writeField(0x40, 'i32', v); }
    get onStepComplete() { return new TweenCallback(this.ptr.readField(0x48, 'i32')); }
    set onStepComplete(v) { return this.ptr.writeField(0x48, 'i32', v); }
    get onUpdate() { return new TweenCallback(this.ptr.readField(0x44, 'i32')); }
    set onUpdate(v) { return this.ptr.writeField(0x44, 'i32', v); }
    get onWaypointChange() { return this.ptr.readField(0x54, 'i32').val(); }
    set onWaypointChange(v) { return this.ptr.writeField(0x54, 'i32', v); }
    get sequenceParent() { return new Sequence(this.ptr.readField(0x98, 'i32')); }
    set sequenceParent(v) { return this.ptr.writeField(0x98, 'i32', v); }
    get specialStartupMode() { return new SpecialStartupMode(this.ptr.readField(0xA0, 'i32')); }
    set specialStartupMode(v) { return this.ptr.writeField(0xA0, 'i32', v); }
    get startupDone() { return this.ptr.readField(0xA5, 'i32').val() === 1; }
    set startupDone(v) { return this.ptr.writeField(0xA5, 'i32', v); }
    get stringId() { return this.ptr.readField(0x24, 'i32').mstr(); }
    set stringId(v) { return this.ptr.writeField(0x24, 'i32', window.ctx.createMstr(v)); }
    get target() { return new Object(this.ptr.readField(0x2C, 'i32')); }
    set target(v) { return this.ptr.writeField(0x2C, 'i32', v); }
    get timeScale() { return this.ptr.readField(0x18, 'f32').val(); }
    set timeScale(v) { return this.ptr.writeField(0x18, 'f32', v); }
    get typeofT1() { return new Type(this.ptr.readField(0x88, 'i32')); }
    set typeofT1(v) { return this.ptr.writeField(0x88, 'i32', v); }
    get typeofT2() { return new Type(this.ptr.readField(0x8C, 'i32')); }
    set typeofT2(v) { return this.ptr.writeField(0x8C, 'i32', v); }
    get typeofTPlugOptions() { return new Type(this.ptr.readField(0x90, 'i32')); }
    set typeofTPlugOptions(v) { return this.ptr.writeField(0x90, 'i32', v); }
    get updateType() { return new UpdateType(this.ptr.readField(0x30, 'i32')); }
    set updateType(v) { return this.ptr.writeField(0x30, 'i32', v); }
    ApplyTween(prevPosition, prevCompletedLoops, newCompletedSteps, useInversePosition, updateMode, updateNotice) { return window.ctx.call("DG.Tweening.Tween", "ApplyTween", [this.ptr, prevPosition, prevCompletedLoops, newCompletedSteps, useInversePosition, updateMode, updateNotice]).val() === 1; }
    static DoGoto(t, toPosition, toCompletedLoops, updateMode) { return window.ctx.call("DG.Tweening.Tween", "DoGoto", [t, toPosition, toCompletedLoops, updateMode]).val() === 1; }
    static OnTweenCallback_callback_t(callback, t) { return window.ctx.call("DG.Tweening.Tween", "OnTweenCallback_12623", [callback, t]).val() === 1; }
    static OnTweenCallback(callback, t, param) { return window.ctx.call("DG.Tweening.Tween", "OnTweenCallback", [callback, t, param]).val() === 1; }
    Reset() { window.ctx.call("DG.Tweening.Tween", "Reset", [this.ptr]); }
    Startup() { return window.ctx.call("DG.Tweening.Tween", "Startup", [this.ptr]).val() === 1; }
    UpdateDelay(elapsed) { return window.ctx.call("DG.Tweening.Tween", "UpdateDelay", [this.ptr, elapsed]).val(); }
    Validate() { return window.ctx.call("DG.Tweening.Tween", "Validate", [this.ptr]).val() === 1; }
}

export class AnimationCurve {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get Item() { return (()=>{
					let structptr_d1b7d7 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.AnimationCurve", "get_Item", [structptr_d1b7d7, this.ptr, index]);
					return structptr_d1b7d7;
				})(); }
    get length() { return window.ctx.call("UnityEngine.AnimationCurve", "get_length", [this.ptr]).val(); }
    get m_Ptr() { return this.ptr.readField(0x8, 'i32'); }
    set m_Ptr(v) { return this.ptr.writeField(0x8, 'i32', v); }
    get m_RequiresNativeCleanup() { return this.ptr.readField(0xC, 'i32').val() === 1; }
    set m_RequiresNativeCleanup(v) { return this.ptr.writeField(0xC, 'i32', v); }
    static EaseInOut(timeStart, valueStart, timeEnd, valueEnd) { return new AnimationCurve(window.ctx.call("UnityEngine.AnimationCurve", "EaseInOut", [timeStart, valueStart, timeEnd, valueEnd])); }
    Equals_o(o) { return window.ctx.call("UnityEngine.AnimationCurve", "Equals_18848", [this.ptr, o]).val() === 1; }
    Equals_other(other) { return window.ctx.call("UnityEngine.AnimationCurve", "Equals_18849", [this.ptr, other]).val() === 1; }
    Evaluate(time) { return window.ctx.call("UnityEngine.AnimationCurve", "Evaluate", [this.ptr, time]).val(); }
    static Evaluate_Injected(_unity_self, time) { return window.ctx.call("UnityEngine.AnimationCurve", "Evaluate_Injected", [_unity_self, time]).val(); }
    Finalize() { window.ctx.call("UnityEngine.AnimationCurve", "Finalize", [this.ptr]); }
    GetHashCode() { return window.ctx.call("UnityEngine.AnimationCurve", "GetHashCode", [this.ptr]).val(); }
    static GetHashCode_Injected(_unity_self) { return window.ctx.call("UnityEngine.AnimationCurve", "GetHashCode_Injected", [_unity_self]).val(); }
    GetKey(index) { return (()=>{
					let structptr_bc5e28 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.AnimationCurve", "GetKey", [structptr_bc5e28, this.ptr, index]);
					return structptr_bc5e28;
				})(); }
    static GetKey_Injected(_unity_self, index, ret) { window.ctx.call("UnityEngine.AnimationCurve", "GetKey_Injected", [_unity_self, index, ret]); }
    static Internal_Create(keys) { return (()=>{
					let structptr_7d432b = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.AnimationCurve", "Internal_Create", [structptr_7d432b, keys]);
					return structptr_7d432b;
				})(); }
    static Internal_Create_Injected(keys) { return (()=>{
					let structptr_e0f381 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.AnimationCurve", "Internal_Create_Injected", [structptr_e0f381, keys]);
					return structptr_e0f381;
				})(); }
    static Internal_Destroy(ptr) { window.ctx.call("UnityEngine.AnimationCurve", "Internal_Destroy", [ptr]); }
    Internal_Equals(other) { return window.ctx.call("UnityEngine.AnimationCurve", "Internal_Equals", [this.ptr, other]).val() === 1; }
    static Internal_Equals_Injected(_unity_self, other) { return window.ctx.call("UnityEngine.AnimationCurve", "Internal_Equals_Injected", [_unity_self, other]).val() === 1; }
    static get_length_Injected(_unity_self) { return window.ctx.call("UnityEngine.AnimationCurve", "get_length_Injected", [_unity_self]).val(); }
}

export class Coroutine {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get m_Ptr() { return this.ptr.readField(0x8, 'i32'); }
    set m_Ptr(v) { return this.ptr.writeField(0x8, 'i32', v); }
    Finalize() { window.ctx.call("UnityEngine.Coroutine", "Finalize", [this.ptr]); }
    static ReleaseCoroutine(ptr) { window.ctx.call("UnityEngine.Coroutine", "ReleaseCoroutine", [ptr]); }
}

export class RuntimeAnimatorController {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get animationClips() { return window.ctx.call("UnityEngine.RuntimeAnimatorController", "get_animationClips", [this.ptr]); }
    static get_animationClips_Injected(_unity_self) { return window.ctx.call("UnityEngine.RuntimeAnimatorController", "get_animationClips_Injected", [_unity_self]); }
}

export class ChatUIMessage {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get canvasGroup() { return new CanvasGroup(this.ptr.readField(0x14, 'i32')); }
    set canvasGroup(v) { return this.ptr.writeField(0x14, 'i32', v); }
    get myText() { return this.ptr.readField(0x10, 'i32'); }
    set myText(v) { return this.ptr.writeField(0x10, 'i32', v); }
    get showTween() { return new Tween(this.ptr.readField(0x18, 'i32')); }
    set showTween(v) { return this.ptr.writeField(0x18, 'i32', v); }
    _ShowMessage_b_5_0() { window.ctx.call("ChatUIMessage", "<ShowMessage>b__5_0", [this.ptr]); }
    _ShowMessage_b_5_1() { window.ctx.call("ChatUIMessage", "<ShowMessage>b__5_1", [this.ptr]); }
    Init(text) { window.ctx.call("ChatUIMessage", "Init", [this.ptr, text]); }
    OnDisable() { window.ctx.call("ChatUIMessage", "OnDisable", [this.ptr]); }
    ResetMessage() { window.ctx.call("ChatUIMessage", "ResetMessage", [this.ptr]); }
    ShowMessage() { window.ctx.call("ChatUIMessage", "ShowMessage", [this.ptr]); }
}

export class Sprite {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get associatedAlphaSplitTexture() { return new Texture2D(window.ctx.call("UnityEngine.Sprite", "get_associatedAlphaSplitTexture", [this.ptr])); }
    get border() { return (()=>{
					let structptr_aa9aa8 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Sprite", "get_border", [structptr_aa9aa8, this.ptr]);
					return structptr_aa9aa8;
				})(); }
    get bounds() { return (()=>{
					let structptr_1af7a1 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Sprite", "get_bounds", [structptr_1af7a1, this.ptr]);
					return structptr_1af7a1;
				})(); }
    get extrude() { return window.ctx.call("UnityEngine.Sprite", "get_extrude", [this.ptr]).val(); }
    get packed() { return window.ctx.call("UnityEngine.Sprite", "get_packed", [this.ptr]).val() === 1; }
    get packingMode() { return new SpritePackingMode(window.ctx.call("UnityEngine.Sprite", "get_packingMode", [this.ptr])); }
    get packingRotation() { return new SpritePackingRotation(window.ctx.call("UnityEngine.Sprite", "get_packingRotation", [this.ptr])); }
    get pivot() { return (()=>{
					let structptr_5a0274 = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.Sprite", "get_pivot", [structptr_5a0274, this.ptr]);
					return structptr_5a0274;
				})(); }
    get pixelsPerUnit() { return window.ctx.call("UnityEngine.Sprite", "get_pixelsPerUnit", [this.ptr]).val(); }
    get rect() { return (()=>{
					let structptr_abf1d1 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Sprite", "get_rect", [structptr_abf1d1, this.ptr]);
					return structptr_abf1d1;
				})(); }
    get spriteAtlasTextureScale() { return window.ctx.call("UnityEngine.Sprite", "get_spriteAtlasTextureScale", [this.ptr]).val(); }
    get texture() { return new Texture2D(window.ctx.call("UnityEngine.Sprite", "get_texture", [this.ptr])); }
    get textureRect() { return (()=>{
					let structptr_c5f78d = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Sprite", "get_textureRect", [structptr_c5f78d, this.ptr]);
					return structptr_c5f78d;
				})(); }
    get textureRectOffset() { return (()=>{
					let structptr_297067 = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.Sprite", "get_textureRectOffset", [structptr_297067, this.ptr]);
					return structptr_297067;
				})(); }
    get triangles() { return window.ctx.call("UnityEngine.Sprite", "get_triangles", [this.ptr]); }
    get uv() { return window.ctx.call("UnityEngine.Sprite", "get_uv", [this.ptr]); }
    get vertices() { return window.ctx.call("UnityEngine.Sprite", "get_vertices", [this.ptr]); }
    AddScriptableObject(obj) { return window.ctx.call("UnityEngine.Sprite", "AddScriptableObject", [this.ptr, obj]).val() === 1; }
    static AddScriptableObject_Injected(_unity_self, obj) { return window.ctx.call("UnityEngine.Sprite", "AddScriptableObject_Injected", [_unity_self, obj]).val() === 1; }
    static Create_rect_pivot_pixelsToUnits_texture(rect, pivot, pixelsToUnits, texture) { return new Sprite(window.ctx.call("UnityEngine.Sprite", "Create_18786", [rect, pivot, pixelsToUnits, texture])); }
    static Create_rect_pivot_pixelsToUnits(rect, pivot, pixelsToUnits) { return new Sprite(window.ctx.call("UnityEngine.Sprite", "Create_18787", [rect, pivot, pixelsToUnits])); }
    static Create_texture_rect_pivot_pixelsPerUnit_extrude_meshType_border_generateFallbackPhysicsShape(texture, rect, pivot, pixelsPerUnit, extrude, meshType, border, generateFallbackPhysicsShape) { return new Sprite(window.ctx.call("UnityEngine.Sprite", "Create_18788", [texture, rect, pivot, pixelsPerUnit, extrude, meshType, border, generateFallbackPhysicsShape])); }
    static Create_texture_rect_pivot_pixelsPerUnit_extrude_meshType_border_generateFallbackPhysicsShape_secondaryTextures(texture, rect, pivot, pixelsPerUnit, extrude, meshType, border, generateFallbackPhysicsShape, secondaryTextures) { return new Sprite(window.ctx.call("UnityEngine.Sprite", "Create_18789", [texture, rect, pivot, pixelsPerUnit, extrude, meshType, border, generateFallbackPhysicsShape, secondaryTextures])); }
    static Create_texture_rect_pivot_pixelsPerUnit_extrude_meshType_border(texture, rect, pivot, pixelsPerUnit, extrude, meshType, border) { return new Sprite(window.ctx.call("UnityEngine.Sprite", "Create_18790", [texture, rect, pivot, pixelsPerUnit, extrude, meshType, border])); }
    static Create_texture_rect_pivot_pixelsPerUnit_extrude_meshType(texture, rect, pivot, pixelsPerUnit, extrude, meshType) { return new Sprite(window.ctx.call("UnityEngine.Sprite", "Create_18791", [texture, rect, pivot, pixelsPerUnit, extrude, meshType])); }
    static Create_texture_rect_pivot_pixelsPerUnit_extrude(texture, rect, pivot, pixelsPerUnit, extrude) { return new Sprite(window.ctx.call("UnityEngine.Sprite", "Create_18792", [texture, rect, pivot, pixelsPerUnit, extrude])); }
    static Create_texture_rect_pivot_pixelsPerUnit(texture, rect, pivot, pixelsPerUnit) { return new Sprite(window.ctx.call("UnityEngine.Sprite", "Create_18793", [texture, rect, pivot, pixelsPerUnit])); }
    static Create_texture_rect_pivot(texture, rect, pivot) { return new Sprite(window.ctx.call("UnityEngine.Sprite", "Create_2469", [texture, rect, pivot])); }
    static CreateSprite(texture, rect, pivot, pixelsPerUnit, extrude, meshType, border, generateFallbackPhysicsShape, secondaryTexture) { return new Sprite(window.ctx.call("UnityEngine.Sprite", "CreateSprite", [texture, rect, pivot, pixelsPerUnit, extrude, meshType, border, generateFallbackPhysicsShape, secondaryTexture])); }
    static CreateSpriteWithoutTextureScripting(rect, pivot, pixelsToUnits, texture) { return new Sprite(window.ctx.call("UnityEngine.Sprite", "CreateSpriteWithoutTextureScripting", [rect, pivot, pixelsToUnits, texture])); }
    static CreateSpriteWithoutTextureScripting_Injected(rect, pivot, pixelsToUnits, texture) { return (()=>{
					let structptr_2519d7 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Sprite", "CreateSpriteWithoutTextureScripting_Injected", [structptr_2519d7, rect, pivot, pixelsToUnits, texture]);
					return structptr_2519d7;
				})(); }
    static CreateSprite_Injected(texture, rect, pivot, pixelsPerUnit, extrude, meshType, border, generateFallbackPhysicsShape, secondaryTexture) { return (()=>{
					let structptr_376b60 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Sprite", "CreateSprite_Injected", [structptr_376b60, texture, rect, pivot, pixelsPerUnit, extrude, meshType, border, generateFallbackPhysicsShape, secondaryTexture]);
					return structptr_376b60;
				})(); }
    GetInnerUVs() { return (()=>{
					let structptr_4ecd76 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Sprite", "GetInnerUVs", [structptr_4ecd76, this.ptr]);
					return structptr_4ecd76;
				})(); }
    static GetInnerUVs_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Sprite", "GetInnerUVs_Injected", [_unity_self, ret]); }
    GetOuterUVs() { return (()=>{
					let structptr_6148bc = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Sprite", "GetOuterUVs", [structptr_6148bc, this.ptr]);
					return structptr_6148bc;
				})(); }
    static GetOuterUVs_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Sprite", "GetOuterUVs_Injected", [_unity_self, ret]); }
    GetPacked() { return window.ctx.call("UnityEngine.Sprite", "GetPacked", [this.ptr]).val(); }
    static GetPacked_Injected(_unity_self) { return window.ctx.call("UnityEngine.Sprite", "GetPacked_Injected", [_unity_self]).val(); }
    GetPackingMode() { return window.ctx.call("UnityEngine.Sprite", "GetPackingMode", [this.ptr]).val(); }
    static GetPackingMode_Injected(_unity_self) { return window.ctx.call("UnityEngine.Sprite", "GetPackingMode_Injected", [_unity_self]).val(); }
    GetPackingRotation() { return window.ctx.call("UnityEngine.Sprite", "GetPackingRotation", [this.ptr]).val(); }
    static GetPackingRotation_Injected(_unity_self) { return window.ctx.call("UnityEngine.Sprite", "GetPackingRotation_Injected", [_unity_self]).val(); }
    GetPadding() { return (()=>{
					let structptr_dc5daa = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Sprite", "GetPadding", [structptr_dc5daa, this.ptr]);
					return structptr_dc5daa;
				})(); }
    static GetPadding_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Sprite", "GetPadding_Injected", [_unity_self, ret]); }
    GetPhysicsShape_shapeIdx_physicsShape(shapeIdx, physicsShape) { return window.ctx.call("UnityEngine.Sprite", "GetPhysicsShape_18778", [this.ptr, shapeIdx, physicsShape]).val(); }
    GetPhysicsShape_shapeIdx(shapeIdx) { return (()=>{
					let structptr_d3e687 = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.Sprite", "GetPhysicsShape_18779", [structptr_d3e687, this.ptr, shapeIdx]);
					return structptr_d3e687;
				})(); }
    GetPhysicsShapeCount() { return window.ctx.call("UnityEngine.Sprite", "GetPhysicsShapeCount", [this.ptr]).val(); }
    static GetPhysicsShapeCount_Injected(_unity_self) { return window.ctx.call("UnityEngine.Sprite", "GetPhysicsShapeCount_Injected", [_unity_self]).val(); }
    static GetPhysicsShapeImpl(sprite, shapeIdx, physicsShape) { window.ctx.call("UnityEngine.Sprite", "GetPhysicsShapeImpl", [sprite, shapeIdx, physicsShape]); }
    static GetPhysicsShapeImpl_Injected(sprite, shapeIdx, physicsShape) { window.ctx.call("UnityEngine.Sprite", "GetPhysicsShapeImpl_Injected", [sprite, shapeIdx, physicsShape]); }
    GetPhysicsShapePointCount(shapeIdx) { return window.ctx.call("UnityEngine.Sprite", "GetPhysicsShapePointCount", [this.ptr, shapeIdx]).val(); }
    static GetPhysicsShapeSpanImpl(sprite, shapeIdx) { return (()=>{
					let structptr_f43a93 = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.Sprite", "GetPhysicsShapeSpanImpl", [structptr_f43a93, sprite, shapeIdx]);
					return structptr_f43a93;
				})(); }
    static GetPhysicsShapeSpanImpl_Injected(sprite, shapeIdx, ret) { window.ctx.call("UnityEngine.Sprite", "GetPhysicsShapeSpanImpl_Injected", [sprite, shapeIdx, ret]); }
    GetScriptableObjects(scriptableObjects) { return window.ctx.call("UnityEngine.Sprite", "GetScriptableObjects", [this.ptr, scriptableObjects]).val(); }
    GetScriptableObjectsCount() { return window.ctx.call("UnityEngine.Sprite", "GetScriptableObjectsCount", [this.ptr]).val(); }
    static GetScriptableObjectsCount_Injected(_unity_self) { return window.ctx.call("UnityEngine.Sprite", "GetScriptableObjectsCount_Injected", [_unity_self]).val(); }
    static GetScriptableObjects_Injected(_unity_self, scriptableObjects) { return window.ctx.call("UnityEngine.Sprite", "GetScriptableObjects_Injected", [_unity_self, scriptableObjects]).val(); }
    GetSecondaryTexture(index) { return new Texture2D(window.ctx.call("UnityEngine.Sprite", "GetSecondaryTexture", [this.ptr, index])); }
    GetSecondaryTextureCount() { return window.ctx.call("UnityEngine.Sprite", "GetSecondaryTextureCount", [this.ptr]).val(); }
    static GetSecondaryTextureCount_Injected(_unity_self) { return window.ctx.call("UnityEngine.Sprite", "GetSecondaryTextureCount_Injected", [_unity_self]).val(); }
    static GetSecondaryTexture_Injected(_unity_self, index) { return (()=>{
					let structptr_7dd7fa = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Sprite", "GetSecondaryTexture_Injected", [structptr_7dd7fa, _unity_self, index]);
					return structptr_7dd7fa;
				})(); }
    GetSecondaryTextures(secondaryTexture) { return window.ctx.call("UnityEngine.Sprite", "GetSecondaryTextures", [this.ptr, secondaryTexture]).val(); }
    static GetSecondaryTextures_Injected(_unity_self, secondaryTexture) { return window.ctx.call("UnityEngine.Sprite", "GetSecondaryTextures_Injected", [_unity_self, secondaryTexture]).val(); }
    GetTextureRect() { return (()=>{
					let structptr_fbee77 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Sprite", "GetTextureRect", [structptr_fbee77, this.ptr]);
					return structptr_fbee77;
				})(); }
    GetTextureRectOffset() { return (()=>{
					let structptr_70f193 = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.Sprite", "GetTextureRectOffset", [structptr_70f193, this.ptr]);
					return structptr_70f193;
				})(); }
    static GetTextureRectOffset_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Sprite", "GetTextureRectOffset_Injected", [_unity_self, ret]); }
    static GetTextureRect_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Sprite", "GetTextureRect_Injected", [_unity_self, ret]); }
    Internal_GetPhysicsShapePointCount(shapeIdx) { return window.ctx.call("UnityEngine.Sprite", "Internal_GetPhysicsShapePointCount", [this.ptr, shapeIdx]).val(); }
    static Internal_GetPhysicsShapePointCount_Injected(_unity_self, shapeIdx) { return window.ctx.call("UnityEngine.Sprite", "Internal_GetPhysicsShapePointCount_Injected", [_unity_self, shapeIdx]).val(); }
    OverrideGeometry(vertices, triangles) { window.ctx.call("UnityEngine.Sprite", "OverrideGeometry", [this.ptr, vertices, triangles]); }
    static OverrideGeometry_Injected(_unity_self, vertices, triangles) { window.ctx.call("UnityEngine.Sprite", "OverrideGeometry_Injected", [_unity_self, vertices, triangles]); }
    OverridePhysicsShape_physicsShapes(physicsShapes) { window.ctx.call("UnityEngine.Sprite", "OverridePhysicsShape_18782", [this.ptr, physicsShapes]); }
    static OverridePhysicsShape_sprite_physicsShape_idx(sprite, physicsShape, idx) { window.ctx.call("UnityEngine.Sprite", "OverridePhysicsShape_18784", [sprite, physicsShape, idx]); }
    static OverridePhysicsShapeCount(sprite, physicsShapeCount) { window.ctx.call("UnityEngine.Sprite", "OverridePhysicsShapeCount", [sprite, physicsShapeCount]); }
    static OverridePhysicsShapeCount_Injected(sprite, physicsShapeCount) { window.ctx.call("UnityEngine.Sprite", "OverridePhysicsShapeCount_Injected", [sprite, physicsShapeCount]); }
    static OverridePhysicsShape_Injected(sprite, physicsShape, idx) { window.ctx.call("UnityEngine.Sprite", "OverridePhysicsShape_Injected", [sprite, physicsShape, idx]); }
    RemoveScriptableObjectAt(i) { return window.ctx.call("UnityEngine.Sprite", "RemoveScriptableObjectAt", [this.ptr, i]).val() === 1; }
    static RemoveScriptableObjectAt_Injected(_unity_self, i) { return window.ctx.call("UnityEngine.Sprite", "RemoveScriptableObjectAt_Injected", [_unity_self, i]).val() === 1; }
    SetScriptableObjectAt(obj, i) { return window.ctx.call("UnityEngine.Sprite", "SetScriptableObjectAt", [this.ptr, obj, i]).val() === 1; }
    static SetScriptableObjectAt_Injected(_unity_self, obj, i) { return window.ctx.call("UnityEngine.Sprite", "SetScriptableObjectAt_Injected", [_unity_self, obj, i]).val() === 1; }
    static get_associatedAlphaSplitTexture_Injected(_unity_self) { return (()=>{
					let structptr_aab0da = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Sprite", "get_associatedAlphaSplitTexture_Injected", [structptr_aab0da, _unity_self]);
					return structptr_aab0da;
				})(); }
    static get_border_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Sprite", "get_border_Injected", [_unity_self, ret]); }
    static get_bounds_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Sprite", "get_bounds_Injected", [_unity_self, ret]); }
    static get_extrude_Injected(_unity_self) { return window.ctx.call("UnityEngine.Sprite", "get_extrude_Injected", [_unity_self]).val(); }
    static get_pivot_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Sprite", "get_pivot_Injected", [_unity_self, ret]); }
    static get_pixelsPerUnit_Injected(_unity_self) { return window.ctx.call("UnityEngine.Sprite", "get_pixelsPerUnit_Injected", [_unity_self]).val(); }
    static get_rect_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Sprite", "get_rect_Injected", [_unity_self, ret]); }
    static get_spriteAtlasTextureScale_Injected(_unity_self) { return window.ctx.call("UnityEngine.Sprite", "get_spriteAtlasTextureScale_Injected", [_unity_self]).val(); }
    static get_texture_Injected(_unity_self) { return (()=>{
					let structptr_22ca99 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Sprite", "get_texture_Injected", [structptr_22ca99, _unity_self]);
					return structptr_22ca99;
				})(); }
    static get_triangles_Injected(_unity_self) { return window.ctx.call("UnityEngine.Sprite", "get_triangles_Injected", [_unity_self]); }
    static get_uv_Injected(_unity_self) { return window.ctx.call("UnityEngine.Sprite", "get_uv_Injected", [_unity_self]); }
    static get_vertices_Injected(_unity_self) { return window.ctx.call("UnityEngine.Sprite", "get_vertices_Injected", [_unity_self]); }
}

export class ColyseusClient {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get Settings() { return new ColyseusSettings(window.ctx.call("Colyseus.ColyseusClient", "get_Settings", [this.ptr])); }
    set Settings(v) { window.ctx.call("Colyseus.ColyseusClient", "set_Settings", [this.ptr, v]); }
    get Auth() { return new Auth(this.ptr.readField(0x8, 'i32')); }
    set Auth(v) { return this.ptr.writeField(0x8, 'i32', v); }
    get Endpoint() { return this.ptr.readField(0xC, 'i32'); }
    set Endpoint(v) { return this.ptr.writeField(0xC, 'i32', v); }
    get Http() { return new HTTP(this.ptr.readField(0x10, 'i32')); }
    set Http(v) { return this.ptr.writeField(0x10, 'i32', v); }
    get _colyseusSettings() { return new ColyseusSettings(this.ptr.readField(0x14, 'i32')); }
    set _colyseusSettings(v) { return this.ptr.writeField(0x14, 'i32', v); }
    ConsumeSeatReservation(response, headers, previousRoom) { return window.ctx.call("Colyseus.ColyseusClient", "ConsumeSeatReservation", [this.ptr, response, headers, previousRoom]); }
    Create(roomName, options, headers) { return window.ctx.call("Colyseus.ColyseusClient", "Create", [this.ptr, roomName, options, headers]); }
    Create_roomName_options_headers(roomName, options, headers) { return window.ctx.call("Colyseus.ColyseusClient", "Create_11812", [this.ptr, roomName, options, headers]); }
    CreateConnection(room, options, headers) { return new ColyseusConnection(window.ctx.call("Colyseus.ColyseusClient", "CreateConnection", [this.ptr, room, options, headers])); }
    CreateMatchMakeRequest(method, roomName, options, headers) { return window.ctx.call("Colyseus.ColyseusClient", "CreateMatchMakeRequest", [this.ptr, method, roomName, options, headers]); }
    Join(roomName, options, headers) { return window.ctx.call("Colyseus.ColyseusClient", "Join", [this.ptr, roomName, options, headers]); }
    Join_roomName_options_headers(roomName, options, headers) { return window.ctx.call("Colyseus.ColyseusClient", "Join_11813", [this.ptr, roomName, options, headers]); }
    JoinById(roomId, options, headers) { return window.ctx.call("Colyseus.ColyseusClient", "JoinById", [this.ptr, roomId, options, headers]); }
    JoinById_roomId_options_headers(roomId, options, headers) { return window.ctx.call("Colyseus.ColyseusClient", "JoinById_11814", [this.ptr, roomId, options, headers]); }
    JoinOrCreate(roomName, options, headers) { return window.ctx.call("Colyseus.ColyseusClient", "JoinOrCreate", [this.ptr, roomName, options, headers]); }
    JoinOrCreate_roomName_options_headers(roomName, options, headers) { return window.ctx.call("Colyseus.ColyseusClient", "JoinOrCreate_11811", [this.ptr, roomName, options, headers]); }
    Reconnect(reconnectionToken, headers) { return window.ctx.call("Colyseus.ColyseusClient", "Reconnect", [this.ptr, reconnectionToken, headers]); }
    Reconnect_roomId_sessionId_headers(roomId, sessionId, headers) { return window.ctx.call("Colyseus.ColyseusClient", "Reconnect_11815", [this.ptr, roomId, sessionId, headers]); }
}

export class JSONNode {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get AsArray() { return new JSONArray(window.ctx.call("SimpleJSON.JSONNode", "get_AsArray", [this.ptr])); }
    get AsBool() { return window.ctx.call("SimpleJSON.JSONNode", "get_AsBool", [this.ptr]).val() === 1; }
    set AsBool(v) { window.ctx.call("SimpleJSON.JSONNode", "set_AsBool", [this.ptr, v]); }
    get AsDouble() { return window.ctx.call("SimpleJSON.JSONNode", "get_AsDouble", [this.ptr]).val(); }
    set AsDouble(v) { window.ctx.call("SimpleJSON.JSONNode", "set_AsDouble", [this.ptr, v]); }
    get AsFloat() { return window.ctx.call("SimpleJSON.JSONNode", "get_AsFloat", [this.ptr]).val(); }
    set AsFloat(v) { window.ctx.call("SimpleJSON.JSONNode", "set_AsFloat", [this.ptr, v]); }
    get AsInt() { return window.ctx.call("SimpleJSON.JSONNode", "get_AsInt", [this.ptr]).val(); }
    set AsInt(v) { window.ctx.call("SimpleJSON.JSONNode", "set_AsInt", [this.ptr, v]); }
    get AsLong() { return window.ctx.call("SimpleJSON.JSONNode", "get_AsLong", [this.ptr]).val(); }
    set AsLong(v) { window.ctx.call("SimpleJSON.JSONNode", "set_AsLong", [this.ptr, v]); }
    get AsObject() { return new JSONObject(window.ctx.call("SimpleJSON.JSONNode", "get_AsObject", [this.ptr])); }
    get AsULong() { return window.ctx.call("SimpleJSON.JSONNode", "get_AsULong", [this.ptr]).val(); }
    set AsULong(v) { window.ctx.call("SimpleJSON.JSONNode", "set_AsULong", [this.ptr, v]); }
    get Children() { return window.ctx.call("SimpleJSON.JSONNode", "get_Children", [this.ptr]); }
    get Count() { return window.ctx.call("SimpleJSON.JSONNode", "get_Count", [this.ptr]).val(); }
    get DeepChildren() { return window.ctx.call("SimpleJSON.JSONNode", "get_DeepChildren", [this.ptr]); }
    static get EscapeBuilder() { return window.ctx.call("SimpleJSON.JSONNode", "get_EscapeBuilder", []); }
    get Inline() { return window.ctx.call("SimpleJSON.JSONNode", "get_Inline", [this.ptr]).val() === 1; }
    set Inline(v) { window.ctx.call("SimpleJSON.JSONNode", "set_Inline", [this.ptr, v]); }
    get IsArray() { return window.ctx.call("SimpleJSON.JSONNode", "get_IsArray", [this.ptr]).val() === 1; }
    get IsBoolean() { return window.ctx.call("SimpleJSON.JSONNode", "get_IsBoolean", [this.ptr]).val() === 1; }
    get IsNull() { return window.ctx.call("SimpleJSON.JSONNode", "get_IsNull", [this.ptr]).val() === 1; }
    get IsNumber() { return window.ctx.call("SimpleJSON.JSONNode", "get_IsNumber", [this.ptr]).val() === 1; }
    get IsObject() { return window.ctx.call("SimpleJSON.JSONNode", "get_IsObject", [this.ptr]).val() === 1; }
    get IsString() { return window.ctx.call("SimpleJSON.JSONNode", "get_IsString", [this.ptr]).val() === 1; }
    get Item() { return new JSONNode(window.ctx.call("SimpleJSON.JSONNode", "get_Item", [this.ptr, aKey])); }
    set Item(v) { window.ctx.call("SimpleJSON.JSONNode", "set_Item", [this.ptr, aKey, v]); }
    get Keys() { return (()=>{
					let structptr_57c51c = window.ctx.malloc(50);
					window.ctx.call("SimpleJSON.JSONNode", "get_Keys", [structptr_57c51c, this.ptr]);
					return structptr_57c51c;
				})(); }
    get Linq() { return window.ctx.call("SimpleJSON.JSONNode", "get_Linq", [this.ptr]); }
    get Tag() { return new JSONNodeType(window.ctx.call("SimpleJSON.JSONNode", "get_Tag", [this.ptr])); }
    get Value() { return window.ctx.call("SimpleJSON.JSONNode", "get_Value", [this.ptr]); }
    set Value(v) { window.ctx.call("SimpleJSON.JSONNode", "set_Value", [this.ptr, v]); }
    get Values() { return (()=>{
					let structptr_92b70f = window.ctx.malloc(50);
					window.ctx.call("SimpleJSON.JSONNode", "get_Values", [structptr_92b70f, this.ptr]);
					return structptr_92b70f;
				})(); }
    get allowLineComments() { return this.ptr.readField(0x2, 'i32').val() === 1; }
    set allowLineComments(v) { return this.ptr.writeField(0x2, 'i32', v); }
    get forceASCII() { return this.ptr.readField(0x0, 'i32').val() === 1; }
    set forceASCII(v) { return this.ptr.writeField(0x0, 'i32', v); }
    get longAsString() { return this.ptr.readField(0x1, 'i32').val() === 1; }
    set longAsString(v) { return this.ptr.writeField(0x1, 'i32', v); }
    get m_EscapeBuilder() { return this.ptr.readField(0x0, 'i32'); }
    set m_EscapeBuilder(v) { return this.ptr.writeField(0x0, 'i32', v); }
    Add_aKey_aItem(aKey, aItem) { window.ctx.call("SimpleJSON.JSONNode", "Add_9207", [this.ptr, aKey, aItem]); }
    Add_aItem(aItem) { window.ctx.call("SimpleJSON.JSONNode", "Add_9208", [this.ptr, aItem]); }
    Clear() { window.ctx.call("SimpleJSON.JSONNode", "Clear", [this.ptr]); }
    Clone() { return new JSONNode(window.ctx.call("SimpleJSON.JSONNode", "Clone", [this.ptr])); }
    Equals(obj) { return window.ctx.call("SimpleJSON.JSONNode", "Equals", [this.ptr, obj]).val() === 1; }
    static Escape(aText) { return window.ctx.call("SimpleJSON.JSONNode", "Escape", [aText]); }
    GetEnumerator() { return (()=>{
					let structptr_533249 = window.ctx.malloc(50);
					window.ctx.call("SimpleJSON.JSONNode", "GetEnumerator", [structptr_533249, this.ptr]);
					return structptr_533249;
				})(); }
    GetHashCode() { return window.ctx.call("SimpleJSON.JSONNode", "GetHashCode", [this.ptr]).val(); }
    GetValueOrDefault(aKey, aDefault) { return new JSONNode(window.ctx.call("SimpleJSON.JSONNode", "GetValueOrDefault", [this.ptr, aKey, aDefault])); }
    HasKey(aKey) { return window.ctx.call("SimpleJSON.JSONNode", "HasKey", [this.ptr, aKey]).val() === 1; }
    static Parse(aJSON) { return new JSONNode(window.ctx.call("SimpleJSON.JSONNode", "Parse", [aJSON])); }
    static ParseElement(token, quoted) { return new JSONNode(window.ctx.call("SimpleJSON.JSONNode", "ParseElement", [token, quoted])); }
    Remove_aKey(aKey) { return new JSONNode(window.ctx.call("SimpleJSON.JSONNode", "Remove_9209", [this.ptr, aKey])); }
    Remove_aIndex(aIndex) { return new JSONNode(window.ctx.call("SimpleJSON.JSONNode", "Remove_9210", [this.ptr, aIndex])); }
    Remove_aNode(aNode) { return new JSONNode(window.ctx.call("SimpleJSON.JSONNode", "Remove_9211", [this.ptr, aNode])); }
    ToString_pointer() { return window.ctx.call("SimpleJSON.JSONNode", "ToString_9218", [this.ptr]); }
    ToString_aIndent(aIndent) { return window.ctx.call("SimpleJSON.JSONNode", "ToString_9219", [this.ptr, aIndent]); }
    WriteToStringBuilder(aSB, aIndent, aIndentInc, aMode) { window.ctx.call("SimpleJSON.JSONNode", "WriteToStringBuilder", [this.ptr, aSB, aIndent, aIndentInc, aMode]); }
}

export class CanvasGroup {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get alpha() { return window.ctx.call("UnityEngine.CanvasGroup", "get_alpha", [this.ptr]).val(); }
    set alpha(v) { window.ctx.call("UnityEngine.CanvasGroup", "set_alpha", [this.ptr, v]); }
    get blocksRaycasts() { return window.ctx.call("UnityEngine.CanvasGroup", "get_blocksRaycasts", [this.ptr]).val() === 1; }
    set blocksRaycasts(v) { window.ctx.call("UnityEngine.CanvasGroup", "set_blocksRaycasts", [this.ptr, v]); }
    get ignoreParentGroups() { return window.ctx.call("UnityEngine.CanvasGroup", "get_ignoreParentGroups", [this.ptr]).val() === 1; }
    set ignoreParentGroups(v) { window.ctx.call("UnityEngine.CanvasGroup", "set_ignoreParentGroups", [this.ptr, v]); }
    get interactable() { return window.ctx.call("UnityEngine.CanvasGroup", "get_interactable", [this.ptr]).val() === 1; }
    set interactable(v) { window.ctx.call("UnityEngine.CanvasGroup", "set_interactable", [this.ptr, v]); }
    IsRaycastLocationValid(sp, eventCamera) { return window.ctx.call("UnityEngine.CanvasGroup", "IsRaycastLocationValid", [this.ptr, sp, eventCamera]).val() === 1; }
    static get_alpha_Injected(_unity_self) { return window.ctx.call("UnityEngine.CanvasGroup", "get_alpha_Injected", [_unity_self]).val(); }
    static get_blocksRaycasts_Injected(_unity_self) { return window.ctx.call("UnityEngine.CanvasGroup", "get_blocksRaycasts_Injected", [_unity_self]).val() === 1; }
    static get_ignoreParentGroups_Injected(_unity_self) { return window.ctx.call("UnityEngine.CanvasGroup", "get_ignoreParentGroups_Injected", [_unity_self]).val() === 1; }
    static get_interactable_Injected(_unity_self) { return window.ctx.call("UnityEngine.CanvasGroup", "get_interactable_Injected", [_unity_self]).val() === 1; }
    static set_alpha_Injected(_unity_self, value) { window.ctx.call("UnityEngine.CanvasGroup", "set_alpha_Injected", [_unity_self, value]); }
    static set_blocksRaycasts_Injected(_unity_self, value) { window.ctx.call("UnityEngine.CanvasGroup", "set_blocksRaycasts_Injected", [_unity_self, value]); }
    static set_ignoreParentGroups_Injected(_unity_self, value) { window.ctx.call("UnityEngine.CanvasGroup", "set_ignoreParentGroups_Injected", [_unity_self, value]); }
    static set_interactable_Injected(_unity_self, value) { window.ctx.call("UnityEngine.CanvasGroup", "set_interactable_Injected", [_unity_self, value]); }
}

export class Object {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get hideFlags() { return new HideFlags(window.ctx.call("UnityEngine.Object", "get_hideFlags", [this.ptr])); }
    set hideFlags(v) { window.ctx.call("UnityEngine.Object", "set_hideFlags", [this.ptr, v]); }
    get name() { return window.ctx.call("UnityEngine.Object", "get_name", [this.ptr]); }
    set name(v) { window.ctx.call("UnityEngine.Object", "set_name", [this.ptr, v]); }
    get OffsetOfInstanceIDInCPlusPlusObject() { return this.ptr.readField(0x0, 'i32').val(); }
    set OffsetOfInstanceIDInCPlusPlusObject(v) { return this.ptr.writeField(0x0, 'i32', v); }
    get m_CachedPtr() { return this.ptr.readField(0x8, 'i32'); }
    set m_CachedPtr(v) { return this.ptr.writeField(0x8, 'i32', v); }
    static CheckNullArgument(arg, message) { window.ctx.call("UnityEngine.Object", "CheckNullArgument", [arg, message]); }
    static CompareBaseObjects(lhs, rhs) { return window.ctx.call("UnityEngine.Object", "CompareBaseObjects", [lhs, rhs]).val() === 1; }
    static CurrentThreadIsMainThread() { return window.ctx.call("UnityEngine.Object", "CurrentThreadIsMainThread", []).val() === 1; }
    static Destroy_obj_t(obj, t) { window.ctx.call("UnityEngine.Object", "Destroy_22674", [obj, t]); }
    static Destroy_obj(obj) { window.ctx.call("UnityEngine.Object", "Destroy_1974", [obj]); }
    static DestroyImmediate_obj_allowDestroyingAssets(obj, allowDestroyingAssets) { window.ctx.call("UnityEngine.Object", "DestroyImmediate_22675", [obj, allowDestroyingAssets]); }
    static DestroyImmediate_obj(obj) { window.ctx.call("UnityEngine.Object", "DestroyImmediate_22676", [obj]); }
    static DestroyImmediate_Injected(obj, allowDestroyingAssets) { window.ctx.call("UnityEngine.Object", "DestroyImmediate_Injected", [obj, allowDestroyingAssets]); }
    static DestroyObject_obj_t(obj, t) { window.ctx.call("UnityEngine.Object", "DestroyObject_22684", [obj, t]); }
    static DestroyObject_obj(obj) { window.ctx.call("UnityEngine.Object", "DestroyObject_22685", [obj]); }
    static Destroy_Injected(obj, t) { window.ctx.call("UnityEngine.Object", "Destroy_Injected", [obj, t]); }
    static DoesObjectWithInstanceIDExist(instanceID) { return window.ctx.call("UnityEngine.Object", "DoesObjectWithInstanceIDExist", [instanceID]).val() === 1; }
    static DoesObjectWithInstanceIDExist_Injected(instanceID) { return window.ctx.call("UnityEngine.Object", "DoesObjectWithInstanceIDExist_Injected", [instanceID]).val() === 1; }
    static DontDestroyOnLoad(target) { window.ctx.call("UnityEngine.Object", "DontDestroyOnLoad", [target]); }
    static DontDestroyOnLoad_Injected(target) { window.ctx.call("UnityEngine.Object", "DontDestroyOnLoad_Injected", [target]); }
    EnsureRunningOnMainThread() { window.ctx.call("UnityEngine.Object", "EnsureRunningOnMainThread", [this.ptr]); }
    Equals(other) { return window.ctx.call("UnityEngine.Object", "Equals", [this.ptr, other]).val() === 1; }
    static FindAnyObjectByType() { return window.ctx.call("UnityEngine.Object", "FindAnyObjectByType", []); }
    static FindAnyObjectByType(findObjectsInactive) { return window.ctx.call("UnityEngine.Object", "FindAnyObjectByType", [findObjectsInactive]); }
    static FindAnyObjectByType_type(type) { return new Object(window.ctx.call("UnityEngine.Object", "FindAnyObjectByType_22692", [type])); }
    static FindAnyObjectByType_type_findObjectsInactive(type, findObjectsInactive) { return new Object(window.ctx.call("UnityEngine.Object", "FindAnyObjectByType_22695", [type, findObjectsInactive])); }
    static FindFirstObjectByType() { return window.ctx.call("UnityEngine.Object", "FindFirstObjectByType", []); }
    static FindFirstObjectByType(findObjectsInactive) { return window.ctx.call("UnityEngine.Object", "FindFirstObjectByType", [findObjectsInactive]); }
    static FindFirstObjectByType_type(type) { return new Object(window.ctx.call("UnityEngine.Object", "FindFirstObjectByType_22691", [type])); }
    static FindFirstObjectByType_type_findObjectsInactive(type, findObjectsInactive) { return new Object(window.ctx.call("UnityEngine.Object", "FindFirstObjectByType_22694", [type, findObjectsInactive])); }
    static FindObjectFromInstanceID(instanceID) { return new Object(window.ctx.call("UnityEngine.Object", "FindObjectFromInstanceID", [instanceID])); }
    static FindObjectFromInstanceID_Injected(instanceID) { return (()=>{
					let structptr_472411 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Object", "FindObjectFromInstanceID_Injected", [structptr_472411, instanceID]);
					return structptr_472411;
				})(); }
    static FindObjectOfType() { return window.ctx.call("UnityEngine.Object", "FindObjectOfType", []); }
    static FindObjectOfType(includeInactive) { return window.ctx.call("UnityEngine.Object", "FindObjectOfType", [includeInactive]); }
    static FindObjectOfType_type(type) { return new Object(window.ctx.call("UnityEngine.Object", "FindObjectOfType_22690", [type])); }
    static FindObjectOfType_type_includeInactive(type, includeInactive) { return new Object(window.ctx.call("UnityEngine.Object", "FindObjectOfType_22693", [type, includeInactive])); }
    static FindObjectsByType_type_sortMode(type, sortMode) { return window.ctx.call("UnityEngine.Object", "FindObjectsByType_22679", [type, sortMode]); }
    static FindObjectsByType_type_findObjectsInactive_sortMode(type, findObjectsInactive, sortMode) { return window.ctx.call("UnityEngine.Object", "FindObjectsByType_22680", [type, findObjectsInactive, sortMode]); }
    static FindObjectsByType(sortMode) { return window.ctx.call("UnityEngine.Object", "FindObjectsByType", [sortMode]); }
    static FindObjectsByType(findObjectsInactive, sortMode) { return window.ctx.call("UnityEngine.Object", "FindObjectsByType", [findObjectsInactive, sortMode]); }
    static FindObjectsOfType_type(type) { return window.ctx.call("UnityEngine.Object", "FindObjectsOfType_22677", [type]); }
    static FindObjectsOfType_type_includeInactive(type, includeInactive) { return window.ctx.call("UnityEngine.Object", "FindObjectsOfType_22678", [type, includeInactive]); }
    static FindObjectsOfType() { return window.ctx.call("UnityEngine.Object", "FindObjectsOfType", []); }
    static FindObjectsOfType(includeInactive) { return window.ctx.call("UnityEngine.Object", "FindObjectsOfType", [includeInactive]); }
    static FindObjectsOfTypeAll(type) { return window.ctx.call("UnityEngine.Object", "FindObjectsOfTypeAll", [type]); }
    static FindObjectsOfTypeIncludingAssets(type) { return window.ctx.call("UnityEngine.Object", "FindObjectsOfTypeIncludingAssets", [type]); }
    static FindSceneObjectsOfType(type) { return window.ctx.call("UnityEngine.Object", "FindSceneObjectsOfType", [type]); }
    static ForceLoadFromInstanceID(instanceID) { return new Object(window.ctx.call("UnityEngine.Object", "ForceLoadFromInstanceID", [instanceID])); }
    static ForceLoadFromInstanceID_Injected(instanceID) { return (()=>{
					let structptr_66aed6 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Object", "ForceLoadFromInstanceID_Injected", [structptr_66aed6, instanceID]);
					return structptr_66aed6;
				})(); }
    GetCachedPtr() { return (()=>{
					let structptr_5eb970 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Object", "GetCachedPtr", [structptr_5eb970, this.ptr]);
					return structptr_5eb970;
				})(); }
    GetEntityId() { return (()=>{
					let structptr_e67163 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Object", "GetEntityId", [structptr_e67163, this.ptr]);
					return structptr_e67163;
				})(); }
    GetHashCode() { return window.ctx.call("UnityEngine.Object", "GetHashCode", [this.ptr]).val(); }
    GetInstanceID() { return window.ctx.call("UnityEngine.Object", "GetInstanceID", [this.ptr]).val(); }
    GetName() { return window.ctx.call("UnityEngine.Object", "GetName", [this.ptr]); }
    static GetName_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Object", "GetName_Injected", [_unity_self, ret]); }
    static GetOffsetOfInstanceIDInCPlusPlusObject() { return window.ctx.call("UnityEngine.Object", "GetOffsetOfInstanceIDInCPlusPlusObject", []).val(); }
    static GetPtrFromInstanceID(instanceID, objectType, isMonoBehaviour) { return (()=>{
					let structptr_dd4252 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Object", "GetPtrFromInstanceID", [structptr_dd4252, instanceID, objectType, isMonoBehaviour]);
					return structptr_dd4252;
				})(); }
    static GetPtrFromInstanceID_Injected(instanceID, objectType, isMonoBehaviour) { return (()=>{
					let structptr_9d0bfc = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Object", "GetPtrFromInstanceID_Injected", [structptr_9d0bfc, instanceID, objectType, isMonoBehaviour]);
					return structptr_9d0bfc;
				})(); }
    static Instantiate_original_position_rotation(original, position, rotation) { return new Object(window.ctx.call("UnityEngine.Object", "Instantiate_22668", [original, position, rotation])); }
    static Instantiate_original_position_rotation_parent(original, position, rotation, parent) { return new Object(window.ctx.call("UnityEngine.Object", "Instantiate_22669", [original, position, rotation, parent])); }
    static Instantiate_original(original) { return new Object(window.ctx.call("UnityEngine.Object", "Instantiate_22670", [original])); }
    static Instantiate_original_scene(original, scene) { return new Object(window.ctx.call("UnityEngine.Object", "Instantiate_22671", [original, scene])); }
    static Instantiate(original, parameters) { return window.ctx.call("UnityEngine.Object", "Instantiate", [original, parameters]); }
    static Instantiate(original, position, rotation, parameters) { return window.ctx.call("UnityEngine.Object", "Instantiate", [original, position, rotation, parameters]); }
    static Instantiate_original_parent(original, parent) { return new Object(window.ctx.call("UnityEngine.Object", "Instantiate_22672", [original, parent])); }
    static Instantiate_original_parent_instantiateInWorldSpace(original, parent, instantiateInWorldSpace) { return new Object(window.ctx.call("UnityEngine.Object", "Instantiate_22673", [original, parent, instantiateInWorldSpace])); }
    static Instantiate(original) { return window.ctx.call("UnityEngine.Object", "Instantiate", [original]); }
    static Instantiate(original, position, rotation) { return window.ctx.call("UnityEngine.Object", "Instantiate", [original, position, rotation]); }
    static Instantiate(original, position, rotation, parent) { return window.ctx.call("UnityEngine.Object", "Instantiate", [original, position, rotation, parent]); }
    static Instantiate(original, parent) { return window.ctx.call("UnityEngine.Object", "Instantiate", [original, parent]); }
    static Instantiate(original, parent, worldPositionStays) { return window.ctx.call("UnityEngine.Object", "Instantiate", [original, parent, worldPositionStays]); }
    static InstantiateAsync(original) { return window.ctx.call("UnityEngine.Object", "InstantiateAsync", [original]); }
    static InstantiateAsync(original, parent) { return window.ctx.call("UnityEngine.Object", "InstantiateAsync", [original, parent]); }
    static InstantiateAsync(original, position, rotation) { return window.ctx.call("UnityEngine.Object", "InstantiateAsync", [original, position, rotation]); }
    static InstantiateAsync(original, parent, position, rotation) { return window.ctx.call("UnityEngine.Object", "InstantiateAsync", [original, parent, position, rotation]); }
    static InstantiateAsync(original, count) { return window.ctx.call("UnityEngine.Object", "InstantiateAsync", [original, count]); }
    static InstantiateAsync(original, count, parent) { return window.ctx.call("UnityEngine.Object", "InstantiateAsync", [original, count, parent]); }
    static InstantiateAsync(original, count, position, rotation) { return window.ctx.call("UnityEngine.Object", "InstantiateAsync", [original, count, position, rotation]); }
    static InstantiateAsync(original, count, positions, rotations) { return window.ctx.call("UnityEngine.Object", "InstantiateAsync", [original, count, positions, rotations]); }
    static InstantiateAsync(original, count, parent, position, rotation) { return window.ctx.call("UnityEngine.Object", "InstantiateAsync", [original, count, parent, position, rotation]); }
    static InstantiateAsync(original, count, parent, position, rotation, cancellationToken) { return window.ctx.call("UnityEngine.Object", "InstantiateAsync", [original, count, parent, position, rotation, cancellationToken]); }
    static InstantiateAsync(original, count, parent, positions, rotations) { return window.ctx.call("UnityEngine.Object", "InstantiateAsync", [original, count, parent, positions, rotations]); }
    static InstantiateAsync(original, count, parent, positions, rotations, cancellationToken) { return window.ctx.call("UnityEngine.Object", "InstantiateAsync", [original, count, parent, positions, rotations, cancellationToken]); }
    static InstantiateAsync(original, parameters, cancellationToken) { return window.ctx.call("UnityEngine.Object", "InstantiateAsync", [original, parameters, cancellationToken]); }
    static InstantiateAsync(original, count, parameters, cancellationToken) { return window.ctx.call("UnityEngine.Object", "InstantiateAsync", [original, count, parameters, cancellationToken]); }
    static InstantiateAsync(original, position, rotation, parameters, cancellationToken) { return window.ctx.call("UnityEngine.Object", "InstantiateAsync", [original, position, rotation, parameters, cancellationToken]); }
    static InstantiateAsync(original, count, position, rotation, parameters, cancellationToken) { return window.ctx.call("UnityEngine.Object", "InstantiateAsync", [original, count, position, rotation, parameters, cancellationToken]); }
    static InstantiateAsync(original, count, positions, rotations, parameters, cancellationToken) { return window.ctx.call("UnityEngine.Object", "InstantiateAsync", [original, count, positions, rotations, parameters, cancellationToken]); }
    static Internal_CloneSingle(data) { return new Object(window.ctx.call("UnityEngine.Object", "Internal_CloneSingle", [data])); }
    static Internal_CloneSingleWithParams(data, parameters) { return new Object(window.ctx.call("UnityEngine.Object", "Internal_CloneSingleWithParams", [data, parameters])); }
    static Internal_CloneSingleWithParams_Injected(data, parameters) { return (()=>{
					let structptr_fd353c = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Object", "Internal_CloneSingleWithParams_Injected", [structptr_fd353c, data, parameters]);
					return structptr_fd353c;
				})(); }
    static Internal_CloneSingleWithParent(data, parent, worldPositionStays) { return new Object(window.ctx.call("UnityEngine.Object", "Internal_CloneSingleWithParent", [data, parent, worldPositionStays])); }
    static Internal_CloneSingleWithParent_Injected(data, parent, worldPositionStays) { return (()=>{
					let structptr_49903c = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Object", "Internal_CloneSingleWithParent_Injected", [structptr_49903c, data, parent, worldPositionStays]);
					return structptr_49903c;
				})(); }
    static Internal_CloneSingleWithScene(data, scene) { return new Object(window.ctx.call("UnityEngine.Object", "Internal_CloneSingleWithScene", [data, scene])); }
    static Internal_CloneSingleWithScene_Injected(data, scene) { return (()=>{
					let structptr_807e4f = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Object", "Internal_CloneSingleWithScene_Injected", [structptr_807e4f, data, scene]);
					return structptr_807e4f;
				})(); }
    static Internal_CloneSingle_Injected(data) { return (()=>{
					let structptr_7050dd = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Object", "Internal_CloneSingle_Injected", [structptr_7050dd, data]);
					return structptr_7050dd;
				})(); }
    static Internal_InstantiateAsyncWithParams(original, count, parameters, positions, positionsCount, rotations, rotationsCount) { return (()=>{
					let structptr_87827e = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Object", "Internal_InstantiateAsyncWithParams", [structptr_87827e, original, count, parameters, positions, positionsCount, rotations, rotationsCount]);
					return structptr_87827e;
				})(); }
    static Internal_InstantiateAsyncWithParams_Injected(original, count, parameters, positions, positionsCount, rotations, rotationsCount) { return (()=>{
					let structptr_714cf3 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Object", "Internal_InstantiateAsyncWithParams_Injected", [structptr_714cf3, original, count, parameters, positions, positionsCount, rotations, rotationsCount]);
					return structptr_714cf3;
				})(); }
    static Internal_InstantiateSingle(data, pos, rot) { return new Object(window.ctx.call("UnityEngine.Object", "Internal_InstantiateSingle", [data, pos, rot])); }
    static Internal_InstantiateSingleWithParams(data, position, rotation, parameters) { return new Object(window.ctx.call("UnityEngine.Object", "Internal_InstantiateSingleWithParams", [data, position, rotation, parameters])); }
    static Internal_InstantiateSingleWithParams_Injected(data, position, rotation, parameters) { return (()=>{
					let structptr_6913c4 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Object", "Internal_InstantiateSingleWithParams_Injected", [structptr_6913c4, data, position, rotation, parameters]);
					return structptr_6913c4;
				})(); }
    static Internal_InstantiateSingleWithParent(data, parent, pos, rot) { return new Object(window.ctx.call("UnityEngine.Object", "Internal_InstantiateSingleWithParent", [data, parent, pos, rot])); }
    static Internal_InstantiateSingleWithParent_Injected(data, parent, pos, rot) { return (()=>{
					let structptr_b57f82 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Object", "Internal_InstantiateSingleWithParent_Injected", [structptr_b57f82, data, parent, pos, rot]);
					return structptr_b57f82;
				})(); }
    static Internal_InstantiateSingle_Injected(data, pos, rot) { return (()=>{
					let structptr_512f6e = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Object", "Internal_InstantiateSingle_Injected", [structptr_512f6e, data, pos, rot]);
					return structptr_512f6e;
				})(); }
    static IsNativeObjectAlive(o) { return window.ctx.call("UnityEngine.Object", "IsNativeObjectAlive", [o]).val() === 1; }
    static IsPersistent(obj) { return window.ctx.call("UnityEngine.Object", "IsPersistent", [obj]).val() === 1; }
    static IsPersistent_Injected(obj) { return window.ctx.call("UnityEngine.Object", "IsPersistent_Injected", [obj]).val() === 1; }
    MarkDirty() { window.ctx.call("UnityEngine.Object", "MarkDirty", [this.ptr]); }
    static MarkDirty_Injected(_unity_self) { window.ctx.call("UnityEngine.Object", "MarkDirty_Injected", [_unity_self]); }
    SetName(name) { window.ctx.call("UnityEngine.Object", "SetName", [this.ptr, name]); }
    static SetName_Injected(_unity_self, name) { window.ctx.call("UnityEngine.Object", "SetName_Injected", [_unity_self, name]); }
    ToString_pointer() { return window.ctx.call("UnityEngine.Object", "ToString_22696", [this.ptr]); }
    static ToString_obj(obj) { return window.ctx.call("UnityEngine.Object", "ToString_22707", [obj]); }
    static ToString_Injected(obj, ret) { window.ctx.call("UnityEngine.Object", "ToString_Injected", [obj, ret]); }
    static get_hideFlags_Injected(_unity_self) { return new HideFlags(window.ctx.call("UnityEngine.Object", "get_hideFlags_Injected", [_unity_self])); }
    static set_hideFlags_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Object", "set_hideFlags_Injected", [_unity_self, value]); }
}

export class Collision {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    set Flipped(v) { window.ctx.call("UnityEngine.Collision", "set_Flipped", [this.ptr, v]); }
    get m_Flipped() { return this.ptr.readField(0x48, 'i32').val() === 1; }
    set m_Flipped(v) { return this.ptr.writeField(0x48, 'i32', v); }
    get m_Header() { return new ContactPairHeader(this.ptr.readField(0x8, 'i32')); }
    set m_Header(v) { return this.ptr.writeField(0x8, 'i32', v); }
    get m_LegacyContacts() { return JSArray(this.ptr.readField(0x4C, 'i32')); }
    set m_LegacyContacts(v) { return this.ptr.writeField(0x4C, 'i32', v); }
    get m_Pair() { return new ContactPair(this.ptr.readField(0x28, 'i32')); }
    set m_Pair(v) { return this.ptr.writeField(0x28, 'i32', v); }
    Reuse(header, pair) { window.ctx.call("UnityEngine.Collision", "Reuse", [this.ptr, header, pair]); }
}

export class Collider {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get attachedRigidbody() { return new Rigidbody(window.ctx.call("UnityEngine.Collider", "get_attachedRigidbody", [this.ptr])); }
    set enabled(v) { window.ctx.call("UnityEngine.Collider", "set_enabled", [this.ptr, v]); }
    set isTrigger(v) { window.ctx.call("UnityEngine.Collider", "set_isTrigger", [this.ptr, v]); }
    set sharedMaterial(v) { window.ctx.call("UnityEngine.Collider", "set_sharedMaterial", [this.ptr, v]); }
    ClosestPoint(position) { return (()=>{
					let structptr_50f170 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Collider", "ClosestPoint", [structptr_50f170, this.ptr, position]);
					return structptr_50f170;
				})(); }
    static ClosestPoint_Injected(_unity_self, position, ret) { window.ctx.call("UnityEngine.Collider", "ClosestPoint_Injected", [_unity_self, position, ret]); }
    static get_attachedRigidbody_Injected(_unity_self) { return (()=>{
					let structptr_fd6a4d = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Collider", "get_attachedRigidbody_Injected", [structptr_fd6a4d, _unity_self]);
					return structptr_fd6a4d;
				})(); }
    static set_enabled_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Collider", "set_enabled_Injected", [_unity_self, value]); }
    static set_isTrigger_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Collider", "set_isTrigger_Injected", [_unity_self, value]); }
    static set_sharedMaterial_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Collider", "set_sharedMaterial_Injected", [_unity_self, value]); }
}

export class DamageCircleUI {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get hitter() { return new ColyView(this.ptr.readField(0x1C, 'i32')); }
    set hitter(v) { return this.ptr.writeField(0x1C, 'i32', v); }
    get iconChild() { return new RectTransform(this.ptr.readField(0x14, 'i32')); }
    set iconChild(v) { return this.ptr.writeField(0x14, 'i32', v); }
    get iconYPositionOverHitterDistance() { return new AnimationCurve(this.ptr.readField(0x18, 'i32')); }
    set iconYPositionOverHitterDistance(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get playerParent() { return new Transform(this.ptr.readField(0x10, 'i32')); }
    set playerParent(v) { return this.ptr.writeField(0x10, 'i32', v); }
    Init(_hitter) { window.ctx.call("DamageCircleUI", "Init", [this.ptr, _hitter]); }
    Update() { window.ctx.call("DamageCircleUI", "Update", [this.ptr]); }
}

export class Rigidbody {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get angularDamping() { return window.ctx.call("UnityEngine.Rigidbody", "get_angularDamping", [this.ptr]).val(); }
    set angularDamping(v) { window.ctx.call("UnityEngine.Rigidbody", "set_angularDamping", [this.ptr, v]); }
    get angularDrag() { return window.ctx.call("UnityEngine.Rigidbody", "get_angularDrag", [this.ptr]).val(); }
    set angularDrag(v) { window.ctx.call("UnityEngine.Rigidbody", "set_angularDrag", [this.ptr, v]); }
    get angularVelocity() { return (()=>{
					let structptr_a2813f = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Rigidbody", "get_angularVelocity", [structptr_a2813f, this.ptr]);
					return structptr_a2813f;
				})(); }
    set angularVelocity(v) { window.ctx.call("UnityEngine.Rigidbody", "set_angularVelocity", [this.ptr, v]); }
    get automaticCenterOfMass() { return window.ctx.call("UnityEngine.Rigidbody", "get_automaticCenterOfMass", [this.ptr]).val() === 1; }
    set automaticCenterOfMass(v) { window.ctx.call("UnityEngine.Rigidbody", "set_automaticCenterOfMass", [this.ptr, v]); }
    get automaticInertiaTensor() { return window.ctx.call("UnityEngine.Rigidbody", "get_automaticInertiaTensor", [this.ptr]).val() === 1; }
    set automaticInertiaTensor(v) { window.ctx.call("UnityEngine.Rigidbody", "set_automaticInertiaTensor", [this.ptr, v]); }
    get centerOfMass() { return (()=>{
					let structptr_97547d = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Rigidbody", "get_centerOfMass", [structptr_97547d, this.ptr]);
					return structptr_97547d;
				})(); }
    set centerOfMass(v) { window.ctx.call("UnityEngine.Rigidbody", "set_centerOfMass", [this.ptr, v]); }
    get collisionDetectionMode() { return new CollisionDetectionMode(window.ctx.call("UnityEngine.Rigidbody", "get_collisionDetectionMode", [this.ptr])); }
    set collisionDetectionMode(v) { window.ctx.call("UnityEngine.Rigidbody", "set_collisionDetectionMode", [this.ptr, v]); }
    get constraints() { return new RigidbodyConstraints(window.ctx.call("UnityEngine.Rigidbody", "get_constraints", [this.ptr])); }
    set constraints(v) { window.ctx.call("UnityEngine.Rigidbody", "set_constraints", [this.ptr, v]); }
    get detectCollisions() { return window.ctx.call("UnityEngine.Rigidbody", "get_detectCollisions", [this.ptr]).val() === 1; }
    set detectCollisions(v) { window.ctx.call("UnityEngine.Rigidbody", "set_detectCollisions", [this.ptr, v]); }
    get drag() { return window.ctx.call("UnityEngine.Rigidbody", "get_drag", [this.ptr]).val(); }
    set drag(v) { window.ctx.call("UnityEngine.Rigidbody", "set_drag", [this.ptr, v]); }
    get excludeLayers() { return (()=>{
					let structptr_eb03b6 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Rigidbody", "get_excludeLayers", [structptr_eb03b6, this.ptr]);
					return structptr_eb03b6;
				})(); }
    set excludeLayers(v) { window.ctx.call("UnityEngine.Rigidbody", "set_excludeLayers", [this.ptr, v]); }
    get freezeRotation() { return window.ctx.call("UnityEngine.Rigidbody", "get_freezeRotation", [this.ptr]).val() === 1; }
    set freezeRotation(v) { window.ctx.call("UnityEngine.Rigidbody", "set_freezeRotation", [this.ptr, v]); }
    get includeLayers() { return (()=>{
					let structptr_dec943 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Rigidbody", "get_includeLayers", [structptr_dec943, this.ptr]);
					return structptr_dec943;
				})(); }
    set includeLayers(v) { window.ctx.call("UnityEngine.Rigidbody", "set_includeLayers", [this.ptr, v]); }
    get inertiaTensor() { return (()=>{
					let structptr_a700e3 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Rigidbody", "get_inertiaTensor", [structptr_a700e3, this.ptr]);
					return structptr_a700e3;
				})(); }
    set inertiaTensor(v) { window.ctx.call("UnityEngine.Rigidbody", "set_inertiaTensor", [this.ptr, v]); }
    get inertiaTensorRotation() { return (()=>{
					let structptr_d470fe = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Rigidbody", "get_inertiaTensorRotation", [structptr_d470fe, this.ptr]);
					return structptr_d470fe;
				})(); }
    set inertiaTensorRotation(v) { window.ctx.call("UnityEngine.Rigidbody", "set_inertiaTensorRotation", [this.ptr, v]); }
    get interpolation() { return new RigidbodyInterpolation(window.ctx.call("UnityEngine.Rigidbody", "get_interpolation", [this.ptr])); }
    set interpolation(v) { window.ctx.call("UnityEngine.Rigidbody", "set_interpolation", [this.ptr, v]); }
    get isKinematic() { return window.ctx.call("UnityEngine.Rigidbody", "get_isKinematic", [this.ptr]).val() === 1; }
    set isKinematic(v) { window.ctx.call("UnityEngine.Rigidbody", "set_isKinematic", [this.ptr, v]); }
    get linearDamping() { return window.ctx.call("UnityEngine.Rigidbody", "get_linearDamping", [this.ptr]).val(); }
    set linearDamping(v) { window.ctx.call("UnityEngine.Rigidbody", "set_linearDamping", [this.ptr, v]); }
    get linearVelocity() { return (()=>{
					let structptr_d1a765 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Rigidbody", "get_linearVelocity", [structptr_d1a765, this.ptr]);
					return structptr_d1a765;
				})(); }
    set linearVelocity(v) { window.ctx.call("UnityEngine.Rigidbody", "set_linearVelocity", [this.ptr, v]); }
    get mass() { return window.ctx.call("UnityEngine.Rigidbody", "get_mass", [this.ptr]).val(); }
    set mass(v) { window.ctx.call("UnityEngine.Rigidbody", "set_mass", [this.ptr, v]); }
    get maxAngularVelocity() { return window.ctx.call("UnityEngine.Rigidbody", "get_maxAngularVelocity", [this.ptr]).val(); }
    set maxAngularVelocity(v) { window.ctx.call("UnityEngine.Rigidbody", "set_maxAngularVelocity", [this.ptr, v]); }
    get maxDepenetrationVelocity() { return window.ctx.call("UnityEngine.Rigidbody", "get_maxDepenetrationVelocity", [this.ptr]).val(); }
    set maxDepenetrationVelocity(v) { window.ctx.call("UnityEngine.Rigidbody", "set_maxDepenetrationVelocity", [this.ptr, v]); }
    get maxLinearVelocity() { return window.ctx.call("UnityEngine.Rigidbody", "get_maxLinearVelocity", [this.ptr]).val(); }
    set maxLinearVelocity(v) { window.ctx.call("UnityEngine.Rigidbody", "set_maxLinearVelocity", [this.ptr, v]); }
    get position() { return (()=>{
					let structptr_c3a18c = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Rigidbody", "get_position", [structptr_c3a18c, this.ptr]);
					return structptr_c3a18c;
				})(); }
    set position(v) { window.ctx.call("UnityEngine.Rigidbody", "set_position", [this.ptr, v]); }
    get rotation() { return (()=>{
					let structptr_6a9894 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Rigidbody", "get_rotation", [structptr_6a9894, this.ptr]);
					return structptr_6a9894;
				})(); }
    set rotation(v) { window.ctx.call("UnityEngine.Rigidbody", "set_rotation", [this.ptr, v]); }
    get sleepThreshold() { return window.ctx.call("UnityEngine.Rigidbody", "get_sleepThreshold", [this.ptr]).val(); }
    set sleepThreshold(v) { window.ctx.call("UnityEngine.Rigidbody", "set_sleepThreshold", [this.ptr, v]); }
    get solverIterations() { return window.ctx.call("UnityEngine.Rigidbody", "get_solverIterations", [this.ptr]).val(); }
    set solverIterations(v) { window.ctx.call("UnityEngine.Rigidbody", "set_solverIterations", [this.ptr, v]); }
    get solverVelocityIterations() { return window.ctx.call("UnityEngine.Rigidbody", "get_solverVelocityIterations", [this.ptr]).val(); }
    set solverVelocityIterations(v) { window.ctx.call("UnityEngine.Rigidbody", "set_solverVelocityIterations", [this.ptr, v]); }
    get useGravity() { return window.ctx.call("UnityEngine.Rigidbody", "get_useGravity", [this.ptr]).val() === 1; }
    set useGravity(v) { window.ctx.call("UnityEngine.Rigidbody", "set_useGravity", [this.ptr, v]); }
    get velocity() { return (()=>{
					let structptr_cb087a = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Rigidbody", "get_velocity", [structptr_cb087a, this.ptr]);
					return structptr_cb087a;
				})(); }
    set velocity(v) { window.ctx.call("UnityEngine.Rigidbody", "set_velocity", [this.ptr, v]); }
    get worldCenterOfMass() { return (()=>{
					let structptr_957982 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Rigidbody", "get_worldCenterOfMass", [structptr_957982, this.ptr]);
					return structptr_957982;
				})(); }
    get worldInertiaTensorMatrix() { return (()=>{
					let structptr_693af7 = window.ctx.malloc(64);
					window.ctx.call("UnityEngine.Rigidbody", "get_worldInertiaTensorMatrix", [structptr_693af7, this.ptr]);
					return structptr_693af7;
				})(); }
    AddExplosionForce_explosionForce_explosionPosition_explosionRadius_upwardsModifier_mode(explosionForce, explosionPosition, explosionRadius, upwardsModifier, mode) { window.ctx.call("UnityEngine.Rigidbody", "AddExplosionForce_25283", [this.ptr, explosionForce, explosionPosition, explosionRadius, upwardsModifier, mode]); }
    AddExplosionForce_explosionForce_explosionPosition_explosionRadius_upwardsModifier(explosionForce, explosionPosition, explosionRadius, upwardsModifier) { window.ctx.call("UnityEngine.Rigidbody", "AddExplosionForce_25284", [this.ptr, explosionForce, explosionPosition, explosionRadius, upwardsModifier]); }
    AddExplosionForce_explosionForce_explosionPosition_explosionRadius(explosionForce, explosionPosition, explosionRadius) { window.ctx.call("UnityEngine.Rigidbody", "AddExplosionForce_25285", [this.ptr, explosionForce, explosionPosition, explosionRadius]); }
    static AddExplosionForce_Injected(_unity_self, explosionForce, explosionPosition, explosionRadius, upwardsModifier, mode) { window.ctx.call("UnityEngine.Rigidbody", "AddExplosionForce_Injected", [_unity_self, explosionForce, explosionPosition, explosionRadius, upwardsModifier, mode]); }
    AddForce_force_mode(force, mode) { window.ctx.call("UnityEngine.Rigidbody", "AddForce_25265", [this.ptr, force, mode]); }
    AddForce_force(force) { window.ctx.call("UnityEngine.Rigidbody", "AddForce_25266", [this.ptr, force]); }
    AddForce_x_y_z_mode(x, y, z, mode) { window.ctx.call("UnityEngine.Rigidbody", "AddForce_25267", [this.ptr, x, y, z, mode]); }
    AddForce_x_y_z(x, y, z) { window.ctx.call("UnityEngine.Rigidbody", "AddForce_25268", [this.ptr, x, y, z]); }
    AddForceAtPosition_force_position_mode(force, position, mode) { window.ctx.call("UnityEngine.Rigidbody", "AddForceAtPosition_25281", [this.ptr, force, position, mode]); }
    AddForceAtPosition_force_position(force, position) { window.ctx.call("UnityEngine.Rigidbody", "AddForceAtPosition_25282", [this.ptr, force, position]); }
    static AddForceAtPosition_Injected(_unity_self, force, position, mode) { window.ctx.call("UnityEngine.Rigidbody", "AddForceAtPosition_Injected", [_unity_self, force, position, mode]); }
    static AddForce_Injected(_unity_self, force, mode) { window.ctx.call("UnityEngine.Rigidbody", "AddForce_Injected", [_unity_self, force, mode]); }
    AddRelativeForce_force_mode(force, mode) { window.ctx.call("UnityEngine.Rigidbody", "AddRelativeForce_25269", [this.ptr, force, mode]); }
    AddRelativeForce_force(force) { window.ctx.call("UnityEngine.Rigidbody", "AddRelativeForce_25270", [this.ptr, force]); }
    AddRelativeForce_x_y_z_mode(x, y, z, mode) { window.ctx.call("UnityEngine.Rigidbody", "AddRelativeForce_25271", [this.ptr, x, y, z, mode]); }
    AddRelativeForce_x_y_z(x, y, z) { window.ctx.call("UnityEngine.Rigidbody", "AddRelativeForce_25272", [this.ptr, x, y, z]); }
    static AddRelativeForce_Injected(_unity_self, force, mode) { window.ctx.call("UnityEngine.Rigidbody", "AddRelativeForce_Injected", [_unity_self, force, mode]); }
    AddRelativeTorque_torque_mode(torque, mode) { window.ctx.call("UnityEngine.Rigidbody", "AddRelativeTorque_25277", [this.ptr, torque, mode]); }
    AddRelativeTorque_torque(torque) { window.ctx.call("UnityEngine.Rigidbody", "AddRelativeTorque_25278", [this.ptr, torque]); }
    AddRelativeTorque_x_y_z_mode(x, y, z, mode) { window.ctx.call("UnityEngine.Rigidbody", "AddRelativeTorque_25279", [this.ptr, x, y, z, mode]); }
    AddRelativeTorque_x_y_z(x, y, z) { window.ctx.call("UnityEngine.Rigidbody", "AddRelativeTorque_25280", [this.ptr, x, y, z]); }
    static AddRelativeTorque_Injected(_unity_self, torque, mode) { window.ctx.call("UnityEngine.Rigidbody", "AddRelativeTorque_Injected", [_unity_self, torque, mode]); }
    AddTorque_torque_mode(torque, mode) { window.ctx.call("UnityEngine.Rigidbody", "AddTorque_25273", [this.ptr, torque, mode]); }
    AddTorque_torque(torque) { window.ctx.call("UnityEngine.Rigidbody", "AddTorque_25274", [this.ptr, torque]); }
    AddTorque_x_y_z_mode(x, y, z, mode) { window.ctx.call("UnityEngine.Rigidbody", "AddTorque_25275", [this.ptr, x, y, z, mode]); }
    AddTorque_x_y_z(x, y, z) { window.ctx.call("UnityEngine.Rigidbody", "AddTorque_25276", [this.ptr, x, y, z]); }
    static AddTorque_Injected(_unity_self, torque, mode) { window.ctx.call("UnityEngine.Rigidbody", "AddTorque_Injected", [_unity_self, torque, mode]); }
    ClosestPointOnBounds(position) { return (()=>{
					let structptr_d60dcc = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Rigidbody", "ClosestPointOnBounds", [structptr_d60dcc, this.ptr, position]);
					return structptr_d60dcc;
				})(); }
    GetAccumulatedForce_step(step) { return (()=>{
					let structptr_705095 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Rigidbody", "GetAccumulatedForce_25261", [structptr_705095, this.ptr, step]);
					return structptr_705095;
				})(); }
    GetAccumulatedForce_pointer() { return (()=>{
					let structptr_a0bd96 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Rigidbody", "GetAccumulatedForce_25262", [structptr_a0bd96, this.ptr]);
					return structptr_a0bd96;
				})(); }
    static GetAccumulatedForce_Injected(_unity_self, step, ret) { window.ctx.call("UnityEngine.Rigidbody", "GetAccumulatedForce_Injected", [_unity_self, step, ret]); }
    GetAccumulatedTorque_step(step) { return (()=>{
					let structptr_2430a0 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Rigidbody", "GetAccumulatedTorque_25263", [structptr_2430a0, this.ptr, step]);
					return structptr_2430a0;
				})(); }
    GetAccumulatedTorque_pointer() { return (()=>{
					let structptr_8ffa9b = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Rigidbody", "GetAccumulatedTorque_25264", [structptr_8ffa9b, this.ptr]);
					return structptr_8ffa9b;
				})(); }
    static GetAccumulatedTorque_Injected(_unity_self, step, ret) { window.ctx.call("UnityEngine.Rigidbody", "GetAccumulatedTorque_Injected", [_unity_self, step, ret]); }
    GetPointVelocity(worldPoint) { return (()=>{
					let structptr_95bf8c = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Rigidbody", "GetPointVelocity", [structptr_95bf8c, this.ptr, worldPoint]);
					return structptr_95bf8c;
				})(); }
    static GetPointVelocity_Injected(_unity_self, worldPoint, ret) { window.ctx.call("UnityEngine.Rigidbody", "GetPointVelocity_Injected", [_unity_self, worldPoint, ret]); }
    GetRelativePointVelocity(relativePoint) { return (()=>{
					let structptr_1db02b = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.Rigidbody", "GetRelativePointVelocity", [structptr_1db02b, this.ptr, relativePoint]);
					return structptr_1db02b;
				})(); }
    static GetRelativePointVelocity_Injected(_unity_self, relativePoint, ret) { window.ctx.call("UnityEngine.Rigidbody", "GetRelativePointVelocity_Injected", [_unity_self, relativePoint, ret]); }
    Internal_ClosestPointOnBounds(point, outPos, distance) { window.ctx.call("UnityEngine.Rigidbody", "Internal_ClosestPointOnBounds", [this.ptr, point, outPos, distance]); }
    static Internal_ClosestPointOnBounds_Injected(_unity_self, point, outPos, distance) { window.ctx.call("UnityEngine.Rigidbody", "Internal_ClosestPointOnBounds_Injected", [_unity_self, point, outPos, distance]); }
    Internal_SweepTestAll(direction, maxDistance, queryTriggerInteraction) { return window.ctx.call("UnityEngine.Rigidbody", "Internal_SweepTestAll", [this.ptr, direction, maxDistance, queryTriggerInteraction]); }
    static Internal_SweepTestAll_Injected(_unity_self, direction, maxDistance, queryTriggerInteraction, ret) { window.ctx.call("UnityEngine.Rigidbody", "Internal_SweepTestAll_Injected", [_unity_self, direction, maxDistance, queryTriggerInteraction, ret]); }
    IsSleeping() { return window.ctx.call("UnityEngine.Rigidbody", "IsSleeping", [this.ptr]).val() === 1; }
    static IsSleeping_Injected(_unity_self) { return window.ctx.call("UnityEngine.Rigidbody", "IsSleeping_Injected", [_unity_self]).val() === 1; }
    Move(position, rotation) { window.ctx.call("UnityEngine.Rigidbody", "Move", [this.ptr, position, rotation]); }
    MovePosition(position) { window.ctx.call("UnityEngine.Rigidbody", "MovePosition", [this.ptr, position]); }
    static MovePosition_Injected(_unity_self, position) { window.ctx.call("UnityEngine.Rigidbody", "MovePosition_Injected", [_unity_self, position]); }
    MoveRotation(rotation) { window.ctx.call("UnityEngine.Rigidbody", "MoveRotation", [this.ptr, rotation]); }
    static MoveRotation_Injected(_unity_self, rotation) { window.ctx.call("UnityEngine.Rigidbody", "MoveRotation_Injected", [_unity_self, rotation]); }
    static Move_Injected(_unity_self, position, rotation) { window.ctx.call("UnityEngine.Rigidbody", "Move_Injected", [_unity_self, position, rotation]); }
    PublishTransform() { window.ctx.call("UnityEngine.Rigidbody", "PublishTransform", [this.ptr]); }
    static PublishTransform_Injected(_unity_self) { window.ctx.call("UnityEngine.Rigidbody", "PublishTransform_Injected", [_unity_self]); }
    ResetCenterOfMass() { window.ctx.call("UnityEngine.Rigidbody", "ResetCenterOfMass", [this.ptr]); }
    static ResetCenterOfMass_Injected(_unity_self) { window.ctx.call("UnityEngine.Rigidbody", "ResetCenterOfMass_Injected", [_unity_self]); }
    ResetInertiaTensor() { window.ctx.call("UnityEngine.Rigidbody", "ResetInertiaTensor", [this.ptr]); }
    static ResetInertiaTensor_Injected(_unity_self) { window.ctx.call("UnityEngine.Rigidbody", "ResetInertiaTensor_Injected", [_unity_self]); }
    SetDensity(density) { window.ctx.call("UnityEngine.Rigidbody", "SetDensity", [this.ptr, density]); }
    Sleep() { window.ctx.call("UnityEngine.Rigidbody", "Sleep", [this.ptr]); }
    static Sleep_Injected(_unity_self) { window.ctx.call("UnityEngine.Rigidbody", "Sleep_Injected", [_unity_self]); }
    SweepTest_direction_maxDistance_queryTriggerInteraction_hasHit(direction, maxDistance, queryTriggerInteraction, hasHit) { return (()=>{
					let structptr_d6ff01 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Rigidbody", "SweepTest_25288", [structptr_d6ff01, this.ptr, direction, maxDistance, queryTriggerInteraction, hasHit]);
					return structptr_d6ff01;
				})(); }
    SweepTest_direction_hitInfo_maxDistance_queryTriggerInteraction(direction, hitInfo, maxDistance, queryTriggerInteraction) { return window.ctx.call("UnityEngine.Rigidbody", "SweepTest_25289", [this.ptr, direction, hitInfo, maxDistance, queryTriggerInteraction]).val() === 1; }
    SweepTest_direction_hitInfo_maxDistance(direction, hitInfo, maxDistance) { return window.ctx.call("UnityEngine.Rigidbody", "SweepTest_25290", [this.ptr, direction, hitInfo, maxDistance]).val() === 1; }
    SweepTest_direction_hitInfo(direction, hitInfo) { return window.ctx.call("UnityEngine.Rigidbody", "SweepTest_25291", [this.ptr, direction, hitInfo]).val() === 1; }
    SweepTestAll_direction_maxDistance_queryTriggerInteraction(direction, maxDistance, queryTriggerInteraction) { return window.ctx.call("UnityEngine.Rigidbody", "SweepTestAll_25293", [this.ptr, direction, maxDistance, queryTriggerInteraction]); }
    SweepTestAll_direction_maxDistance(direction, maxDistance) { return window.ctx.call("UnityEngine.Rigidbody", "SweepTestAll_25294", [this.ptr, direction, maxDistance]); }
    SweepTestAll_direction(direction) { return window.ctx.call("UnityEngine.Rigidbody", "SweepTestAll_25295", [this.ptr, direction]); }
    static SweepTest_Injected(_unity_self, direction, maxDistance, queryTriggerInteraction, hasHit, ret) { window.ctx.call("UnityEngine.Rigidbody", "SweepTest_Injected", [_unity_self, direction, maxDistance, queryTriggerInteraction, hasHit, ret]); }
    WakeUp() { window.ctx.call("UnityEngine.Rigidbody", "WakeUp", [this.ptr]); }
    static WakeUp_Injected(_unity_self) { window.ctx.call("UnityEngine.Rigidbody", "WakeUp_Injected", [_unity_self]); }
    static get_angularDamping_Injected(_unity_self) { return window.ctx.call("UnityEngine.Rigidbody", "get_angularDamping_Injected", [_unity_self]).val(); }
    static get_angularVelocity_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Rigidbody", "get_angularVelocity_Injected", [_unity_self, ret]); }
    static get_automaticCenterOfMass_Injected(_unity_self) { return window.ctx.call("UnityEngine.Rigidbody", "get_automaticCenterOfMass_Injected", [_unity_self]).val() === 1; }
    static get_automaticInertiaTensor_Injected(_unity_self) { return window.ctx.call("UnityEngine.Rigidbody", "get_automaticInertiaTensor_Injected", [_unity_self]).val() === 1; }
    static get_centerOfMass_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Rigidbody", "get_centerOfMass_Injected", [_unity_self, ret]); }
    static get_collisionDetectionMode_Injected(_unity_self) { return new CollisionDetectionMode(window.ctx.call("UnityEngine.Rigidbody", "get_collisionDetectionMode_Injected", [_unity_self])); }
    static get_constraints_Injected(_unity_self) { return new RigidbodyConstraints(window.ctx.call("UnityEngine.Rigidbody", "get_constraints_Injected", [_unity_self])); }
    static get_detectCollisions_Injected(_unity_self) { return window.ctx.call("UnityEngine.Rigidbody", "get_detectCollisions_Injected", [_unity_self]).val() === 1; }
    static get_excludeLayers_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Rigidbody", "get_excludeLayers_Injected", [_unity_self, ret]); }
    static get_includeLayers_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Rigidbody", "get_includeLayers_Injected", [_unity_self, ret]); }
    static get_inertiaTensorRotation_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Rigidbody", "get_inertiaTensorRotation_Injected", [_unity_self, ret]); }
    static get_inertiaTensor_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Rigidbody", "get_inertiaTensor_Injected", [_unity_self, ret]); }
    static get_interpolation_Injected(_unity_self) { return new RigidbodyInterpolation(window.ctx.call("UnityEngine.Rigidbody", "get_interpolation_Injected", [_unity_self])); }
    static get_isKinematic_Injected(_unity_self) { return window.ctx.call("UnityEngine.Rigidbody", "get_isKinematic_Injected", [_unity_self]).val() === 1; }
    static get_linearDamping_Injected(_unity_self) { return window.ctx.call("UnityEngine.Rigidbody", "get_linearDamping_Injected", [_unity_self]).val(); }
    static get_linearVelocity_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Rigidbody", "get_linearVelocity_Injected", [_unity_self, ret]); }
    static get_mass_Injected(_unity_self) { return window.ctx.call("UnityEngine.Rigidbody", "get_mass_Injected", [_unity_self]).val(); }
    static get_maxAngularVelocity_Injected(_unity_self) { return window.ctx.call("UnityEngine.Rigidbody", "get_maxAngularVelocity_Injected", [_unity_self]).val(); }
    static get_maxDepenetrationVelocity_Injected(_unity_self) { return window.ctx.call("UnityEngine.Rigidbody", "get_maxDepenetrationVelocity_Injected", [_unity_self]).val(); }
    static get_maxLinearVelocity_Injected(_unity_self) { return window.ctx.call("UnityEngine.Rigidbody", "get_maxLinearVelocity_Injected", [_unity_self]).val(); }
    static get_position_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Rigidbody", "get_position_Injected", [_unity_self, ret]); }
    static get_rotation_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Rigidbody", "get_rotation_Injected", [_unity_self, ret]); }
    static get_sleepThreshold_Injected(_unity_self) { return window.ctx.call("UnityEngine.Rigidbody", "get_sleepThreshold_Injected", [_unity_self]).val(); }
    static get_solverIterations_Injected(_unity_self) { return window.ctx.call("UnityEngine.Rigidbody", "get_solverIterations_Injected", [_unity_self]).val(); }
    static get_solverVelocityIterations_Injected(_unity_self) { return window.ctx.call("UnityEngine.Rigidbody", "get_solverVelocityIterations_Injected", [_unity_self]).val(); }
    static get_useGravity_Injected(_unity_self) { return window.ctx.call("UnityEngine.Rigidbody", "get_useGravity_Injected", [_unity_self]).val() === 1; }
    static get_worldCenterOfMass_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Rigidbody", "get_worldCenterOfMass_Injected", [_unity_self, ret]); }
    static get_worldInertiaTensorMatrix_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Rigidbody", "get_worldInertiaTensorMatrix_Injected", [_unity_self, ret]); }
    static set_angularDamping_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Rigidbody", "set_angularDamping_Injected", [_unity_self, value]); }
    static set_angularVelocity_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Rigidbody", "set_angularVelocity_Injected", [_unity_self, value]); }
    static set_automaticCenterOfMass_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Rigidbody", "set_automaticCenterOfMass_Injected", [_unity_self, value]); }
    static set_automaticInertiaTensor_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Rigidbody", "set_automaticInertiaTensor_Injected", [_unity_self, value]); }
    static set_centerOfMass_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Rigidbody", "set_centerOfMass_Injected", [_unity_self, value]); }
    static set_collisionDetectionMode_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Rigidbody", "set_collisionDetectionMode_Injected", [_unity_self, value]); }
    static set_constraints_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Rigidbody", "set_constraints_Injected", [_unity_self, value]); }
    static set_detectCollisions_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Rigidbody", "set_detectCollisions_Injected", [_unity_self, value]); }
    static set_excludeLayers_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Rigidbody", "set_excludeLayers_Injected", [_unity_self, value]); }
    static set_includeLayers_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Rigidbody", "set_includeLayers_Injected", [_unity_self, value]); }
    static set_inertiaTensorRotation_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Rigidbody", "set_inertiaTensorRotation_Injected", [_unity_self, value]); }
    static set_inertiaTensor_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Rigidbody", "set_inertiaTensor_Injected", [_unity_self, value]); }
    static set_interpolation_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Rigidbody", "set_interpolation_Injected", [_unity_self, value]); }
    static set_isKinematic_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Rigidbody", "set_isKinematic_Injected", [_unity_self, value]); }
    static set_linearDamping_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Rigidbody", "set_linearDamping_Injected", [_unity_self, value]); }
    static set_linearVelocity_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Rigidbody", "set_linearVelocity_Injected", [_unity_self, value]); }
    static set_mass_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Rigidbody", "set_mass_Injected", [_unity_self, value]); }
    static set_maxAngularVelocity_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Rigidbody", "set_maxAngularVelocity_Injected", [_unity_self, value]); }
    static set_maxDepenetrationVelocity_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Rigidbody", "set_maxDepenetrationVelocity_Injected", [_unity_self, value]); }
    static set_maxLinearVelocity_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Rigidbody", "set_maxLinearVelocity_Injected", [_unity_self, value]); }
    static set_position_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Rigidbody", "set_position_Injected", [_unity_self, value]); }
    static set_rotation_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Rigidbody", "set_rotation_Injected", [_unity_self, value]); }
    static set_sleepThreshold_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Rigidbody", "set_sleepThreshold_Injected", [_unity_self, value]); }
    static set_solverIterations_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Rigidbody", "set_solverIterations_Injected", [_unity_self, value]); }
    static set_solverVelocityIterations_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Rigidbody", "set_solverVelocityIterations_Injected", [_unity_self, value]); }
    static set_useGravity_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Rigidbody", "set_useGravity_Injected", [_unity_self, value]); }
}

export class EntityId {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    static get None() { return (()=>{
					let structptr_21ee13 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.EntityId", "get_None", [structptr_21ee13, ]);
					return structptr_21ee13;
				})(); }
    get m_Data() { return this.ptr.readField(0x0, 'i32').val(); }
    set m_Data(v) { return this.ptr.writeField(0x0, 'i32', v); }
    CompareTo(other) { return window.ctx.call("UnityEngine.EntityId", "CompareTo", [this.ptr, other]).val(); }
    Equals_obj(obj) { return window.ctx.call("UnityEngine.EntityId", "Equals_22652", [this.ptr, obj]).val() === 1; }
    Equals_other(other) { return window.ctx.call("UnityEngine.EntityId", "Equals_22653", [this.ptr, other]).val() === 1; }
    GetHashCode() { return window.ctx.call("UnityEngine.EntityId", "GetHashCode", [this.ptr]).val(); }
    ToString() { return window.ctx.call("UnityEngine.EntityId", "ToString", [this.ptr]); }
}

export class Vector2 {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get Item() { return window.ctx.call("UnityEngine.Vector2", "get_Item", [this.ptr, index]).val(); }
    set Item(v) { window.ctx.call("UnityEngine.Vector2", "set_Item", [this.ptr, index, v]); }
    get magnitude() { return window.ctx.call("UnityEngine.Vector2", "get_magnitude", [this.ptr]).val(); }
    get normalized() { return (()=>{
					let structptr_1c325c = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.Vector2", "get_normalized", [structptr_1c325c, this.ptr]);
					return structptr_1c325c;
				})(); }
    static get one() { return (()=>{
					let structptr_2eb89f = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.Vector2", "get_one", [structptr_2eb89f, ]);
					return structptr_2eb89f;
				})(); }
    static get right() { return (()=>{
					let structptr_c3648c = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.Vector2", "get_right", [structptr_c3648c, ]);
					return structptr_c3648c;
				})(); }
    get sqrMagnitude() { return window.ctx.call("UnityEngine.Vector2", "get_sqrMagnitude", [this.ptr]).val(); }
    static get up() { return (()=>{
					let structptr_d6fccd = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.Vector2", "get_up", [structptr_d6fccd, ]);
					return structptr_d6fccd;
				})(); }
    static get zero() { return (()=>{
					let structptr_a39679 = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.Vector2", "get_zero", [structptr_a39679, ]);
					return structptr_a39679;
				})(); }
    get downVector() { return new Vector2(this.ptr.readField(0x18, 'i32')); }
    set downVector(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get leftVector() { return new Vector2(this.ptr.readField(0x20, 'i32')); }
    set leftVector(v) { return this.ptr.writeField(0x20, 'i32', v); }
    get negativeInfinityVector() { return new Vector2(this.ptr.readField(0x38, 'i32')); }
    set negativeInfinityVector(v) { return this.ptr.writeField(0x38, 'i32', v); }
    get oneVector() { return new Vector2(this.ptr.readField(0x8, 'i32')); }
    set oneVector(v) { return this.ptr.writeField(0x8, 'i32', v); }
    get positiveInfinityVector() { return new Vector2(this.ptr.readField(0x30, 'i32')); }
    set positiveInfinityVector(v) { return this.ptr.writeField(0x30, 'i32', v); }
    get rightVector() { return new Vector2(this.ptr.readField(0x28, 'i32')); }
    set rightVector(v) { return this.ptr.writeField(0x28, 'i32', v); }
    get upVector() { return new Vector2(this.ptr.readField(0x10, 'i32')); }
    set upVector(v) { return this.ptr.writeField(0x10, 'i32', v); }
    get x() { return this.ptr.readField(0x0, 'f32').val(); }
    set x(v) { return this.ptr.writeField(0x0, 'f32', v); }
    get y() { return this.ptr.readField(0x4, 'f32').val(); }
    set y(v) { return this.ptr.writeField(0x4, 'f32', v); }
    get zeroVector() { return new Vector2(this.ptr.readField(0x0, 'i32')); }
    set zeroVector(v) { return this.ptr.writeField(0x0, 'i32', v); }
    static Angle(from, to) { return window.ctx.call("UnityEngine.Vector2", "Angle", [from, to]).val(); }
    static Distance(a, b) { return window.ctx.call("UnityEngine.Vector2", "Distance", [a, b]).val(); }
    static Dot_lhs_rhs(lhs, rhs) { return window.ctx.call("UnityEngine.Vector2", "Dot_22137", [lhs, rhs]).val(); }
    static Dot_lhs_rhs(lhs, rhs) { return window.ctx.call("UnityEngine.Vector2", "Dot_22138", [lhs, rhs]).val(); }
    Equals_other(other) { return window.ctx.call("UnityEngine.Vector2", "Equals_22134", [this.ptr, other]).val() === 1; }
    Equals_other(other) { return window.ctx.call("UnityEngine.Vector2", "Equals_22135", [this.ptr, other]).val() === 1; }
    Equals_other(other) { return window.ctx.call("UnityEngine.Vector2", "Equals_22136", [this.ptr, other]).val() === 1; }
    GetHashCode() { return window.ctx.call("UnityEngine.Vector2", "GetHashCode", [this.ptr]).val(); }
    static Normalize(value) { return (()=>{
					let structptr_f5cfc8 = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.Vector2", "Normalize", [structptr_f5cfc8, value]);
					return structptr_f5cfc8;
				})(); }
    static Scale(a, b) { return (()=>{
					let structptr_5b6f29 = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.Vector2", "Scale", [structptr_5b6f29, a, b]);
					return structptr_5b6f29;
				})(); }
    ToString_pointer() { return window.ctx.call("UnityEngine.Vector2", "ToString_22131", [this.ptr]); }
    ToString_format_formatProvider(format, formatProvider) { return window.ctx.call("UnityEngine.Vector2", "ToString_22132", [this.ptr, format, formatProvider]); }
}

export class RenderTexture {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    static get active() { return new RenderTexture(window.ctx.call("UnityEngine.RenderTexture", "get_active", [])); }
    static set active(v) { window.ctx.call("UnityEngine.RenderTexture", "set_active", [v]); }
    get antiAliasing() { return window.ctx.call("UnityEngine.RenderTexture", "get_antiAliasing", [this.ptr]).val(); }
    set antiAliasing(v) { window.ctx.call("UnityEngine.RenderTexture", "set_antiAliasing", [this.ptr, v]); }
    get autoGenerateMips() { return window.ctx.call("UnityEngine.RenderTexture", "get_autoGenerateMips", [this.ptr]).val() === 1; }
    set autoGenerateMips(v) { window.ctx.call("UnityEngine.RenderTexture", "set_autoGenerateMips", [this.ptr, v]); }
    get bindTextureMS() { return window.ctx.call("UnityEngine.RenderTexture", "get_bindTextureMS", [this.ptr]).val() === 1; }
    set bindTextureMS(v) { window.ctx.call("UnityEngine.RenderTexture", "set_bindTextureMS", [this.ptr, v]); }
    get colorBuffer() { return (()=>{
					let structptr_bb1861 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.RenderTexture", "get_colorBuffer", [structptr_bb1861, this.ptr]);
					return structptr_bb1861;
				})(); }
    get depth() { return window.ctx.call("UnityEngine.RenderTexture", "get_depth", [this.ptr]).val(); }
    set depth(v) { window.ctx.call("UnityEngine.RenderTexture", "set_depth", [this.ptr, v]); }
    get depthBuffer() { return (()=>{
					let structptr_8cedd6 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.RenderTexture", "get_depthBuffer", [structptr_8cedd6, this.ptr]);
					return structptr_8cedd6;
				})(); }
    get depthStencilFormat() { return new GraphicsFormat(window.ctx.call("UnityEngine.RenderTexture", "get_depthStencilFormat", [this.ptr])); }
    set depthStencilFormat(v) { window.ctx.call("UnityEngine.RenderTexture", "set_depthStencilFormat", [this.ptr, v]); }
    get descriptor() { return (()=>{
					let structptr_ceef2a = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.RenderTexture", "get_descriptor", [structptr_ceef2a, this.ptr]);
					return structptr_ceef2a;
				})(); }
    set descriptor(v) { window.ctx.call("UnityEngine.RenderTexture", "set_descriptor", [this.ptr, v]); }
    get dimension() { return new TextureDimension(window.ctx.call("UnityEngine.RenderTexture", "get_dimension", [this.ptr])); }
    set dimension(v) { window.ctx.call("UnityEngine.RenderTexture", "set_dimension", [this.ptr, v]); }
    static get enabled() { return window.ctx.call("UnityEngine.RenderTexture", "get_enabled", []).val() === 1; }
    static set enabled(v) { window.ctx.call("UnityEngine.RenderTexture", "set_enabled", [v]); }
    get enableRandomWrite() { return window.ctx.call("UnityEngine.RenderTexture", "get_enableRandomWrite", [this.ptr]).val() === 1; }
    set enableRandomWrite(v) { window.ctx.call("UnityEngine.RenderTexture", "set_enableRandomWrite", [this.ptr, v]); }
    get enableShadingRate() { return window.ctx.call("UnityEngine.RenderTexture", "get_enableShadingRate", [this.ptr]).val() === 1; }
    set enableShadingRate(v) { window.ctx.call("UnityEngine.RenderTexture", "set_enableShadingRate", [this.ptr, v]); }
    get format() { return new RenderTextureFormat(window.ctx.call("UnityEngine.RenderTexture", "get_format", [this.ptr])); }
    set format(v) { window.ctx.call("UnityEngine.RenderTexture", "set_format", [this.ptr, v]); }
    get graphicsFormat() { return new GraphicsFormat(window.ctx.call("UnityEngine.RenderTexture", "get_graphicsFormat", [this.ptr])); }
    set graphicsFormat(v) { window.ctx.call("UnityEngine.RenderTexture", "set_graphicsFormat", [this.ptr, v]); }
    get height() { return window.ctx.call("UnityEngine.RenderTexture", "get_height", [this.ptr]).val(); }
    set height(v) { window.ctx.call("UnityEngine.RenderTexture", "set_height", [this.ptr, v]); }
    get isCubemap() { return window.ctx.call("UnityEngine.RenderTexture", "get_isCubemap", [this.ptr]).val() === 1; }
    set isCubemap(v) { window.ctx.call("UnityEngine.RenderTexture", "set_isCubemap", [this.ptr, v]); }
    get isPowerOfTwo() { return window.ctx.call("UnityEngine.RenderTexture", "get_isPowerOfTwo", [this.ptr]).val() === 1; }
    set isPowerOfTwo(v) { window.ctx.call("UnityEngine.RenderTexture", "set_isPowerOfTwo", [this.ptr, v]); }
    get isVolume() { return window.ctx.call("UnityEngine.RenderTexture", "get_isVolume", [this.ptr]).val() === 1; }
    set isVolume(v) { window.ctx.call("UnityEngine.RenderTexture", "set_isVolume", [this.ptr, v]); }
    get memorylessMode() { return new RenderTextureMemoryless(window.ctx.call("UnityEngine.RenderTexture", "get_memorylessMode", [this.ptr])); }
    set memorylessMode(v) { window.ctx.call("UnityEngine.RenderTexture", "set_memorylessMode", [this.ptr, v]); }
    get sRGB() { return window.ctx.call("UnityEngine.RenderTexture", "get_sRGB", [this.ptr]).val() === 1; }
    get stencilFormat() { return new GraphicsFormat(window.ctx.call("UnityEngine.RenderTexture", "get_stencilFormat", [this.ptr])); }
    set stencilFormat(v) { window.ctx.call("UnityEngine.RenderTexture", "set_stencilFormat", [this.ptr, v]); }
    get useDynamicScale() { return window.ctx.call("UnityEngine.RenderTexture", "get_useDynamicScale", [this.ptr]).val() === 1; }
    set useDynamicScale(v) { window.ctx.call("UnityEngine.RenderTexture", "set_useDynamicScale", [this.ptr, v]); }
    get useDynamicScaleExplicit() { return window.ctx.call("UnityEngine.RenderTexture", "get_useDynamicScaleExplicit", [this.ptr]).val() === 1; }
    set useDynamicScaleExplicit(v) { window.ctx.call("UnityEngine.RenderTexture", "set_useDynamicScaleExplicit", [this.ptr, v]); }
    get useMipMap() { return window.ctx.call("UnityEngine.RenderTexture", "get_useMipMap", [this.ptr]).val() === 1; }
    set useMipMap(v) { window.ctx.call("UnityEngine.RenderTexture", "set_useMipMap", [this.ptr, v]); }
    get volumeDepth() { return window.ctx.call("UnityEngine.RenderTexture", "get_volumeDepth", [this.ptr]).val(); }
    set volumeDepth(v) { window.ctx.call("UnityEngine.RenderTexture", "set_volumeDepth", [this.ptr, v]); }
    get vrUsage() { return new VRTextureUsage(window.ctx.call("UnityEngine.RenderTexture", "get_vrUsage", [this.ptr])); }
    set vrUsage(v) { window.ctx.call("UnityEngine.RenderTexture", "set_vrUsage", [this.ptr, v]); }
    get width() { return window.ctx.call("UnityEngine.RenderTexture", "get_width", [this.ptr]).val(); }
    set width(v) { window.ctx.call("UnityEngine.RenderTexture", "set_width", [this.ptr, v]); }
    ApplyDynamicScale() { window.ctx.call("UnityEngine.RenderTexture", "ApplyDynamicScale", [this.ptr]); }
    static ApplyDynamicScale_Injected(_unity_self) { window.ctx.call("UnityEngine.RenderTexture", "ApplyDynamicScale_Injected", [_unity_self]); }
    ConvertToEquirect(equirect, eye) { window.ctx.call("UnityEngine.RenderTexture", "ConvertToEquirect", [this.ptr, equirect, eye]); }
    static ConvertToEquirect_Injected(_unity_self, equirect, eye) { window.ctx.call("UnityEngine.RenderTexture", "ConvertToEquirect_Injected", [_unity_self, equirect, eye]); }
    Create() { return window.ctx.call("UnityEngine.RenderTexture", "Create", [this.ptr]).val() === 1; }
    static Create_Injected(_unity_self) { return window.ctx.call("UnityEngine.RenderTexture", "Create_Injected", [_unity_self]).val() === 1; }
    DiscardContents_discardColor_discardDepth(discardColor, discardDepth) { window.ctx.call("UnityEngine.RenderTexture", "DiscardContents_21615", [this.ptr, discardColor, discardDepth]); }
    DiscardContents_pointer() { window.ctx.call("UnityEngine.RenderTexture", "DiscardContents_21617", [this.ptr]); }
    static DiscardContents_Injected(_unity_self, discardColor, discardDepth) { window.ctx.call("UnityEngine.RenderTexture", "DiscardContents_Injected", [_unity_self, discardColor, discardDepth]); }
    GenerateMips() { window.ctx.call("UnityEngine.RenderTexture", "GenerateMips", [this.ptr]); }
    static GenerateMips_Injected(_unity_self) { window.ctx.call("UnityEngine.RenderTexture", "GenerateMips_Injected", [_unity_self]); }
    static GetActive() { return new RenderTexture(window.ctx.call("UnityEngine.RenderTexture", "GetActive", [])); }
    static GetActive_Injected() { return (()=>{
					let structptr_c68ddd = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.RenderTexture", "GetActive_Injected", [structptr_c68ddd, ]);
					return structptr_c68ddd;
				})(); }
    GetColorBuffer() { return (()=>{
					let structptr_81d647 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.RenderTexture", "GetColorBuffer", [structptr_81d647, this.ptr]);
					return structptr_81d647;
				})(); }
    static GetColorBuffer_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.RenderTexture", "GetColorBuffer_Injected", [_unity_self, ret]); }
    GetColorFormat(suppressWarnings) { return new GraphicsFormat(window.ctx.call("UnityEngine.RenderTexture", "GetColorFormat", [this.ptr, suppressWarnings])); }
    static GetColorFormat_Injected(_unity_self, suppressWarnings) { return new GraphicsFormat(window.ctx.call("UnityEngine.RenderTexture", "GetColorFormat_Injected", [_unity_self, suppressWarnings])); }
    static GetCompatibleFormat(renderTextureFormat, readWrite) { return new GraphicsFormat(window.ctx.call("UnityEngine.RenderTexture", "GetCompatibleFormat", [renderTextureFormat, readWrite])); }
    static GetDefaultColorFormat(format) { return new GraphicsFormat(window.ctx.call("UnityEngine.RenderTexture", "GetDefaultColorFormat", [format])); }
    static GetDefaultDepthStencilFormat(format, depth) { return new GraphicsFormat(window.ctx.call("UnityEngine.RenderTexture", "GetDefaultDepthStencilFormat", [format, depth])); }
    GetDepthBuffer() { return (()=>{
					let structptr_20912d = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.RenderTexture", "GetDepthBuffer", [structptr_20912d, this.ptr]);
					return structptr_20912d;
				})(); }
    static GetDepthBuffer_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.RenderTexture", "GetDepthBuffer_Injected", [_unity_self, ret]); }
    static GetDepthStencilFormatLegacy_depthBits_colorFormat(depthBits, colorFormat) { return new GraphicsFormat(window.ctx.call("UnityEngine.RenderTexture", "GetDepthStencilFormatLegacy_21650", [depthBits, colorFormat])); }
    static GetDepthStencilFormatLegacy_depthBits_format_disableFallback(depthBits, format, disableFallback) { return new GraphicsFormat(window.ctx.call("UnityEngine.RenderTexture", "GetDepthStencilFormatLegacy_21651", [depthBits, format, disableFallback])); }
    static GetDepthStencilFormatLegacy_depthBits_format(depthBits, format) { return new GraphicsFormat(window.ctx.call("UnityEngine.RenderTexture", "GetDepthStencilFormatLegacy_21652", [depthBits, format])); }
    static GetDepthStencilFormatLegacy_depthBits_shadowSamplingMode(depthBits, shadowSamplingMode) { return new GraphicsFormat(window.ctx.call("UnityEngine.RenderTexture", "GetDepthStencilFormatLegacy_21653", [depthBits, shadowSamplingMode])); }
    static GetDepthStencilFormatLegacy_depthBits_requestedShadowMap(depthBits, requestedShadowMap) { return new GraphicsFormat(window.ctx.call("UnityEngine.RenderTexture", "GetDepthStencilFormatLegacy_21654", [depthBits, requestedShadowMap])); }
    GetDescriptor() { return (()=>{
					let structptr_1207c9 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.RenderTexture", "GetDescriptor", [structptr_1207c9, this.ptr]);
					return structptr_1207c9;
				})(); }
    static GetDescriptor_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.RenderTexture", "GetDescriptor_Injected", [_unity_self, ret]); }
    GetIsPowerOfTwo() { return window.ctx.call("UnityEngine.RenderTexture", "GetIsPowerOfTwo", [this.ptr]).val() === 1; }
    static GetIsPowerOfTwo_Injected(_unity_self) { return window.ctx.call("UnityEngine.RenderTexture", "GetIsPowerOfTwo_Injected", [_unity_self]).val() === 1; }
    GetNativeDepthBufferPtr() { return (()=>{
					let structptr_08bee2 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.RenderTexture", "GetNativeDepthBufferPtr", [structptr_08bee2, this.ptr]);
					return structptr_08bee2;
				})(); }
    static GetNativeDepthBufferPtr_Injected(_unity_self) { return (()=>{
					let structptr_e3fc4f = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.RenderTexture", "GetNativeDepthBufferPtr_Injected", [structptr_e3fc4f, _unity_self]);
					return structptr_e3fc4f;
				})(); }
    static GetShadowSamplingModeForFormat_format(format) { return new ShadowSamplingMode(window.ctx.call("UnityEngine.RenderTexture", "GetShadowSamplingModeForFormat_21660", [format])); }
    static GetShadowSamplingModeForFormat_format(format) { return new ShadowSamplingMode(window.ctx.call("UnityEngine.RenderTexture", "GetShadowSamplingModeForFormat_21661", [format])); }
    static GetTemporary_desc(desc) { return new RenderTexture(window.ctx.call("UnityEngine.RenderTexture", "GetTemporary_21664", [desc])); }
    static GetTemporary_width_height_depthBuffer_format_antiAliasing_memorylessMode_vrUsage_useDynamicScale(width, height, depthBuffer, format, antiAliasing, memorylessMode, vrUsage, useDynamicScale) { return new RenderTexture(window.ctx.call("UnityEngine.RenderTexture", "GetTemporary_21666", [width, height, depthBuffer, format, antiAliasing, memorylessMode, vrUsage, useDynamicScale])); }
    static GetTemporary_width_height_depthBuffer_format_antiAliasing_memorylessMode_vrUsage(width, height, depthBuffer, format, antiAliasing, memorylessMode, vrUsage) { return new RenderTexture(window.ctx.call("UnityEngine.RenderTexture", "GetTemporary_21667", [width, height, depthBuffer, format, antiAliasing, memorylessMode, vrUsage])); }
    static GetTemporary_width_height_depthBuffer_format_antiAliasing_memorylessMode(width, height, depthBuffer, format, antiAliasing, memorylessMode) { return new RenderTexture(window.ctx.call("UnityEngine.RenderTexture", "GetTemporary_21668", [width, height, depthBuffer, format, antiAliasing, memorylessMode])); }
    static GetTemporary_width_height_depthBuffer_format_antiAliasing(width, height, depthBuffer, format, antiAliasing) { return new RenderTexture(window.ctx.call("UnityEngine.RenderTexture", "GetTemporary_21669", [width, height, depthBuffer, format, antiAliasing])); }
    static GetTemporary_width_height_depthBuffer_format(width, height, depthBuffer, format) { return new RenderTexture(window.ctx.call("UnityEngine.RenderTexture", "GetTemporary_21670", [width, height, depthBuffer, format])); }
    static GetTemporary_width_height_depthBuffer_format_readWrite_antiAliasing_memorylessMode_vrUsage_useDynamicScale(width, height, depthBuffer, format, readWrite, antiAliasing, memorylessMode, vrUsage, useDynamicScale) { return new RenderTexture(window.ctx.call("UnityEngine.RenderTexture", "GetTemporary_21671", [width, height, depthBuffer, format, readWrite, antiAliasing, memorylessMode, vrUsage, useDynamicScale])); }
    static GetTemporary_width_height_depthBuffer_format_readWrite_antiAliasing_memorylessMode_vrUsage(width, height, depthBuffer, format, readWrite, antiAliasing, memorylessMode, vrUsage) { return new RenderTexture(window.ctx.call("UnityEngine.RenderTexture", "GetTemporary_21672", [width, height, depthBuffer, format, readWrite, antiAliasing, memorylessMode, vrUsage])); }
    static GetTemporary_width_height_depthBuffer_format_readWrite_antiAliasing_memorylessMode(width, height, depthBuffer, format, readWrite, antiAliasing, memorylessMode) { return new RenderTexture(window.ctx.call("UnityEngine.RenderTexture", "GetTemporary_21673", [width, height, depthBuffer, format, readWrite, antiAliasing, memorylessMode])); }
    static GetTemporary_width_height_depthBuffer_format_readWrite_antiAliasing(width, height, depthBuffer, format, readWrite, antiAliasing) { return new RenderTexture(window.ctx.call("UnityEngine.RenderTexture", "GetTemporary_21674", [width, height, depthBuffer, format, readWrite, antiAliasing])); }
    static GetTemporary_width_height_depthBuffer_format_readWrite(width, height, depthBuffer, format, readWrite) { return new RenderTexture(window.ctx.call("UnityEngine.RenderTexture", "GetTemporary_21675", [width, height, depthBuffer, format, readWrite])); }
    static GetTemporary_width_height_depthBuffer_format(width, height, depthBuffer, format) { return new RenderTexture(window.ctx.call("UnityEngine.RenderTexture", "GetTemporary_21676", [width, height, depthBuffer, format])); }
    static GetTemporary_width_height_depthBuffer(width, height, depthBuffer) { return new RenderTexture(window.ctx.call("UnityEngine.RenderTexture", "GetTemporary_21677", [width, height, depthBuffer])); }
    static GetTemporary_width_height(width, height) { return new RenderTexture(window.ctx.call("UnityEngine.RenderTexture", "GetTemporary_21678", [width, height])); }
    static GetTemporaryImpl(width, height, depthStencilFormat, colorFormat, antiAliasing, memorylessMode, vrUsage, useDynamicScale, shadowSamplingMode) { return new RenderTexture(window.ctx.call("UnityEngine.RenderTexture", "GetTemporaryImpl", [width, height, depthStencilFormat, colorFormat, antiAliasing, memorylessMode, vrUsage, useDynamicScale, shadowSamplingMode])); }
    static GetTemporary_Internal(desc) { return new RenderTexture(window.ctx.call("UnityEngine.RenderTexture", "GetTemporary_Internal", [desc])); }
    static GetTemporary_Internal_Injected(desc) { return (()=>{
					let structptr_59670a = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.RenderTexture", "GetTemporary_Internal_Injected", [structptr_59670a, desc]);
					return structptr_59670a;
				})(); }
    GetTexelOffset() { return (()=>{
					let structptr_53ea3d = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.RenderTexture", "GetTexelOffset", [structptr_53ea3d, this.ptr]);
					return structptr_53ea3d;
				})(); }
    Initialize(width, height, depth, format, readWrite, mipCount) { window.ctx.call("UnityEngine.RenderTexture", "Initialize", [this.ptr, width, height, depth, format, readWrite, mipCount]); }
    static Internal_Create(rt) { window.ctx.call("UnityEngine.RenderTexture", "Internal_Create", [rt]); }
    IsCreated() { return window.ctx.call("UnityEngine.RenderTexture", "IsCreated", [this.ptr]).val() === 1; }
    static IsCreated_Injected(_unity_self) { return window.ctx.call("UnityEngine.RenderTexture", "IsCreated_Injected", [_unity_self]).val() === 1; }
    MarkRestoreExpected() { window.ctx.call("UnityEngine.RenderTexture", "MarkRestoreExpected", [this.ptr]); }
    static MarkRestoreExpected_Injected(_unity_self) { window.ctx.call("UnityEngine.RenderTexture", "MarkRestoreExpected_Injected", [_unity_self]); }
    Release() { window.ctx.call("UnityEngine.RenderTexture", "Release", [this.ptr]); }
    static ReleaseTemporary(temp) { window.ctx.call("UnityEngine.RenderTexture", "ReleaseTemporary", [temp]); }
    static ReleaseTemporary_Injected(temp) { window.ctx.call("UnityEngine.RenderTexture", "ReleaseTemporary_Injected", [temp]); }
    static Release_Injected(_unity_self) { window.ctx.call("UnityEngine.RenderTexture", "Release_Injected", [_unity_self]); }
    ResolveAA() { window.ctx.call("UnityEngine.RenderTexture", "ResolveAA", [this.ptr]); }
    ResolveAATo(rt) { window.ctx.call("UnityEngine.RenderTexture", "ResolveAATo", [this.ptr, rt]); }
    static ResolveAATo_Injected(_unity_self, rt) { window.ctx.call("UnityEngine.RenderTexture", "ResolveAATo_Injected", [_unity_self, rt]); }
    static ResolveAA_Injected(_unity_self) { window.ctx.call("UnityEngine.RenderTexture", "ResolveAA_Injected", [_unity_self]); }
    ResolveAntiAliasedSurface_pointer() { window.ctx.call("UnityEngine.RenderTexture", "ResolveAntiAliasedSurface_21620", [this.ptr]); }
    ResolveAntiAliasedSurface_target(target) { window.ctx.call("UnityEngine.RenderTexture", "ResolveAntiAliasedSurface_21621", [this.ptr, target]); }
    static SetActive(rt) { window.ctx.call("UnityEngine.RenderTexture", "SetActive", [rt]); }
    static SetActive_Injected(rt) { window.ctx.call("UnityEngine.RenderTexture", "SetActive_Injected", [rt]); }
    SetColorFormat(format) { window.ctx.call("UnityEngine.RenderTexture", "SetColorFormat", [this.ptr, format]); }
    static SetColorFormat_Injected(_unity_self, format) { window.ctx.call("UnityEngine.RenderTexture", "SetColorFormat_Injected", [_unity_self, format]); }
    SetGlobalShaderProperty(propertyName) { window.ctx.call("UnityEngine.RenderTexture", "SetGlobalShaderProperty", [this.ptr, propertyName]); }
    static SetGlobalShaderProperty_Injected(_unity_self, propertyName) { window.ctx.call("UnityEngine.RenderTexture", "SetGlobalShaderProperty_Injected", [_unity_self, propertyName]); }
    SetMipMapCount(count) { window.ctx.call("UnityEngine.RenderTexture", "SetMipMapCount", [this.ptr, count]); }
    static SetMipMapCount_Injected(_unity_self, count) { window.ctx.call("UnityEngine.RenderTexture", "SetMipMapCount_Injected", [_unity_self, count]); }
    SetRenderTextureDescriptor(desc) { window.ctx.call("UnityEngine.RenderTexture", "SetRenderTextureDescriptor", [this.ptr, desc]); }
    static SetRenderTextureDescriptor_Injected(_unity_self, desc) { window.ctx.call("UnityEngine.RenderTexture", "SetRenderTextureDescriptor_Injected", [_unity_self, desc]); }
    SetSRGBReadWrite(srgb) { window.ctx.call("UnityEngine.RenderTexture", "SetSRGBReadWrite", [this.ptr, srgb]); }
    static SetSRGBReadWrite_Injected(_unity_self, srgb) { window.ctx.call("UnityEngine.RenderTexture", "SetSRGBReadWrite_Injected", [_unity_self, srgb]); }
    SetShadowSamplingMode(samplingMode) { window.ctx.call("UnityEngine.RenderTexture", "SetShadowSamplingMode", [this.ptr, samplingMode]); }
    static SetShadowSamplingMode_Injected(_unity_self, samplingMode) { window.ctx.call("UnityEngine.RenderTexture", "SetShadowSamplingMode_Injected", [_unity_self, samplingMode]); }
    static SupportsStencil(rt) { return window.ctx.call("UnityEngine.RenderTexture", "SupportsStencil", [rt]).val() === 1; }
    static SupportsStencil_Injected(rt) { return window.ctx.call("UnityEngine.RenderTexture", "SupportsStencil_Injected", [rt]).val() === 1; }
    static ValidateRenderTextureDesc(desc) { window.ctx.call("UnityEngine.RenderTexture", "ValidateRenderTextureDesc", [desc]); }
    static WarnAboutFallbackTo16BitsDepth(format) { window.ctx.call("UnityEngine.RenderTexture", "WarnAboutFallbackTo16BitsDepth", [format]); }
    static get_antiAliasing_Injected(_unity_self) { return window.ctx.call("UnityEngine.RenderTexture", "get_antiAliasing_Injected", [_unity_self]).val(); }
    static get_autoGenerateMips_Injected(_unity_self) { return window.ctx.call("UnityEngine.RenderTexture", "get_autoGenerateMips_Injected", [_unity_self]).val() === 1; }
    static get_bindTextureMS_Injected(_unity_self) { return window.ctx.call("UnityEngine.RenderTexture", "get_bindTextureMS_Injected", [_unity_self]).val() === 1; }
    static get_depthStencilFormat_Injected(_unity_self) { return new GraphicsFormat(window.ctx.call("UnityEngine.RenderTexture", "get_depthStencilFormat_Injected", [_unity_self])); }
    static get_depth_Injected(_unity_self) { return window.ctx.call("UnityEngine.RenderTexture", "get_depth_Injected", [_unity_self]).val(); }
    static get_dimension_Injected(_unity_self) { return new TextureDimension(window.ctx.call("UnityEngine.RenderTexture", "get_dimension_Injected", [_unity_self])); }
    static get_enableRandomWrite_Injected(_unity_self) { return window.ctx.call("UnityEngine.RenderTexture", "get_enableRandomWrite_Injected", [_unity_self]).val() === 1; }
    static get_enableShadingRate_Injected(_unity_self) { return window.ctx.call("UnityEngine.RenderTexture", "get_enableShadingRate_Injected", [_unity_self]).val() === 1; }
    static get_height_Injected(_unity_self) { return window.ctx.call("UnityEngine.RenderTexture", "get_height_Injected", [_unity_self]).val(); }
    static get_memorylessMode_Injected(_unity_self) { return new RenderTextureMemoryless(window.ctx.call("UnityEngine.RenderTexture", "get_memorylessMode_Injected", [_unity_self])); }
    static get_sRGB_Injected(_unity_self) { return window.ctx.call("UnityEngine.RenderTexture", "get_sRGB_Injected", [_unity_self]).val() === 1; }
    static get_stencilFormat_Injected(_unity_self) { return new GraphicsFormat(window.ctx.call("UnityEngine.RenderTexture", "get_stencilFormat_Injected", [_unity_self])); }
    static get_useDynamicScaleExplicit_Injected(_unity_self) { return window.ctx.call("UnityEngine.RenderTexture", "get_useDynamicScaleExplicit_Injected", [_unity_self]).val() === 1; }
    static get_useDynamicScale_Injected(_unity_self) { return window.ctx.call("UnityEngine.RenderTexture", "get_useDynamicScale_Injected", [_unity_self]).val() === 1; }
    static get_useMipMap_Injected(_unity_self) { return window.ctx.call("UnityEngine.RenderTexture", "get_useMipMap_Injected", [_unity_self]).val() === 1; }
    static get_volumeDepth_Injected(_unity_self) { return window.ctx.call("UnityEngine.RenderTexture", "get_volumeDepth_Injected", [_unity_self]).val(); }
    static get_vrUsage_Injected(_unity_self) { return new VRTextureUsage(window.ctx.call("UnityEngine.RenderTexture", "get_vrUsage_Injected", [_unity_self])); }
    static get_width_Injected(_unity_self) { return window.ctx.call("UnityEngine.RenderTexture", "get_width_Injected", [_unity_self]).val(); }
    static set_antiAliasing_Injected(_unity_self, value) { window.ctx.call("UnityEngine.RenderTexture", "set_antiAliasing_Injected", [_unity_self, value]); }
    static set_autoGenerateMips_Injected(_unity_self, value) { window.ctx.call("UnityEngine.RenderTexture", "set_autoGenerateMips_Injected", [_unity_self, value]); }
    static set_bindTextureMS_Injected(_unity_self, value) { window.ctx.call("UnityEngine.RenderTexture", "set_bindTextureMS_Injected", [_unity_self, value]); }
    static set_depthStencilFormat_Injected(_unity_self, value) { window.ctx.call("UnityEngine.RenderTexture", "set_depthStencilFormat_Injected", [_unity_self, value]); }
    static set_depth_Injected(_unity_self, value) { window.ctx.call("UnityEngine.RenderTexture", "set_depth_Injected", [_unity_self, value]); }
    static set_dimension_Injected(_unity_self, value) { window.ctx.call("UnityEngine.RenderTexture", "set_dimension_Injected", [_unity_self, value]); }
    static set_enableRandomWrite_Injected(_unity_self, value) { window.ctx.call("UnityEngine.RenderTexture", "set_enableRandomWrite_Injected", [_unity_self, value]); }
    static set_enableShadingRate_Injected(_unity_self, value) { window.ctx.call("UnityEngine.RenderTexture", "set_enableShadingRate_Injected", [_unity_self, value]); }
    static set_height_Injected(_unity_self, value) { window.ctx.call("UnityEngine.RenderTexture", "set_height_Injected", [_unity_self, value]); }
    static set_memorylessMode_Injected(_unity_self, value) { window.ctx.call("UnityEngine.RenderTexture", "set_memorylessMode_Injected", [_unity_self, value]); }
    static set_stencilFormat_Injected(_unity_self, value) { window.ctx.call("UnityEngine.RenderTexture", "set_stencilFormat_Injected", [_unity_self, value]); }
    static set_useDynamicScaleExplicit_Injected(_unity_self, value) { window.ctx.call("UnityEngine.RenderTexture", "set_useDynamicScaleExplicit_Injected", [_unity_self, value]); }
    static set_useDynamicScale_Injected(_unity_self, value) { window.ctx.call("UnityEngine.RenderTexture", "set_useDynamicScale_Injected", [_unity_self, value]); }
    static set_useMipMap_Injected(_unity_self, value) { window.ctx.call("UnityEngine.RenderTexture", "set_useMipMap_Injected", [_unity_self, value]); }
    static set_volumeDepth_Injected(_unity_self, value) { window.ctx.call("UnityEngine.RenderTexture", "set_volumeDepth_Injected", [_unity_self, value]); }
    static set_vrUsage_Injected(_unity_self, value) { window.ctx.call("UnityEngine.RenderTexture", "set_vrUsage_Injected", [_unity_self, value]); }
    static set_width_Injected(_unity_self, value) { window.ctx.call("UnityEngine.RenderTexture", "set_width_Injected", [_unity_self, value]); }
}

export class RenderingPath {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class CameraType {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class CameraClearFlags {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class DepthTextureMode {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class OpaqueSortMode {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class Material {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get color() { return (()=>{
					let structptr_e61bd5 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Material", "get_color", [structptr_e61bd5, this.ptr]);
					return structptr_e61bd5;
				})(); }
    set color(v) { window.ctx.call("UnityEngine.Material", "set_color", [this.ptr, v]); }
    get doubleSidedGI() { return window.ctx.call("UnityEngine.Material", "get_doubleSidedGI", [this.ptr]).val() === 1; }
    set doubleSidedGI(v) { window.ctx.call("UnityEngine.Material", "set_doubleSidedGI", [this.ptr, v]); }
    get enabledKeywords() { return window.ctx.call("UnityEngine.Material", "get_enabledKeywords", [this.ptr]); }
    set enabledKeywords(v) { window.ctx.call("UnityEngine.Material", "set_enabledKeywords", [this.ptr, v]); }
    get enableInstancing() { return window.ctx.call("UnityEngine.Material", "get_enableInstancing", [this.ptr]).val() === 1; }
    set enableInstancing(v) { window.ctx.call("UnityEngine.Material", "set_enableInstancing", [this.ptr, v]); }
    get globalIlluminationFlags() { return new MaterialGlobalIlluminationFlags(window.ctx.call("UnityEngine.Material", "get_globalIlluminationFlags", [this.ptr])); }
    set globalIlluminationFlags(v) { window.ctx.call("UnityEngine.Material", "set_globalIlluminationFlags", [this.ptr, v]); }
    get mainTexture() { return new Texture(window.ctx.call("UnityEngine.Material", "get_mainTexture", [this.ptr])); }
    set mainTexture(v) { window.ctx.call("UnityEngine.Material", "set_mainTexture", [this.ptr, v]); }
    get mainTextureOffset() { return (()=>{
					let structptr_c19886 = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.Material", "get_mainTextureOffset", [structptr_c19886, this.ptr]);
					return structptr_c19886;
				})(); }
    set mainTextureOffset(v) { window.ctx.call("UnityEngine.Material", "set_mainTextureOffset", [this.ptr, v]); }
    get mainTextureScale() { return (()=>{
					let structptr_ed1ada = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.Material", "get_mainTextureScale", [structptr_ed1ada, this.ptr]);
					return structptr_ed1ada;
				})(); }
    set mainTextureScale(v) { window.ctx.call("UnityEngine.Material", "set_mainTextureScale", [this.ptr, v]); }
    get passCount() { return window.ctx.call("UnityEngine.Material", "get_passCount", [this.ptr]).val(); }
    get rawRenderQueue() { return window.ctx.call("UnityEngine.Material", "get_rawRenderQueue", [this.ptr]).val(); }
    get renderQueue() { return window.ctx.call("UnityEngine.Material", "get_renderQueue", [this.ptr]).val(); }
    set renderQueue(v) { window.ctx.call("UnityEngine.Material", "set_renderQueue", [this.ptr, v]); }
    get shader() { return new Shader(window.ctx.call("UnityEngine.Material", "get_shader", [this.ptr])); }
    set shader(v) { window.ctx.call("UnityEngine.Material", "set_shader", [this.ptr, v]); }
    get shaderKeywords() { return window.ctx.call("UnityEngine.Material", "get_shaderKeywords", [this.ptr]); }
    set shaderKeywords(v) { window.ctx.call("UnityEngine.Material", "set_shaderKeywords", [this.ptr, v]); }
    get k_ColorId() { return this.ptr.readField(0x0, 'i32').val(); }
    set k_ColorId(v) { return this.ptr.writeField(0x0, 'i32', v); }
    get k_MainTexId() { return this.ptr.readField(0x4, 'i32').val(); }
    set k_MainTexId(v) { return this.ptr.writeField(0x4, 'i32', v); }
    ComputeCRC() { return window.ctx.call("UnityEngine.Material", "ComputeCRC", [this.ptr]).val(); }
    static ComputeCRC_Injected(_unity_self) { return window.ctx.call("UnityEngine.Material", "ComputeCRC_Injected", [_unity_self]).val(); }
    CopyMatchingPropertiesFromMaterial(mat) { window.ctx.call("UnityEngine.Material", "CopyMatchingPropertiesFromMaterial", [this.ptr, mat]); }
    static CopyMatchingPropertiesFromMaterial_Injected(_unity_self, mat) { window.ctx.call("UnityEngine.Material", "CopyMatchingPropertiesFromMaterial_Injected", [_unity_self, mat]); }
    CopyPropertiesFromMaterial(mat) { window.ctx.call("UnityEngine.Material", "CopyPropertiesFromMaterial", [this.ptr, mat]); }
    static CopyPropertiesFromMaterial_Injected(_unity_self, mat) { window.ctx.call("UnityEngine.Material", "CopyPropertiesFromMaterial_Injected", [_unity_self, mat]); }
    static Create(scriptContents) { return new Material(window.ctx.call("UnityEngine.Material", "Create", [scriptContents])); }
    static CreateWithMaterial(self, source) { window.ctx.call("UnityEngine.Material", "CreateWithMaterial", [self, source]); }
    static CreateWithMaterial_Injected(self, source) { window.ctx.call("UnityEngine.Material", "CreateWithMaterial_Injected", [self, source]); }
    static CreateWithShader(self, shader) { window.ctx.call("UnityEngine.Material", "CreateWithShader", [self, shader]); }
    static CreateWithShader_Injected(self, shader) { window.ctx.call("UnityEngine.Material", "CreateWithShader_Injected", [self, shader]); }
    DisableKeyword_keyword(keyword) { window.ctx.call("UnityEngine.Material", "DisableKeyword_20195", [this.ptr, keyword]); }
    DisableKeyword_keyword(keyword) { window.ctx.call("UnityEngine.Material", "DisableKeyword_20202", [this.ptr, keyword]); }
    static DisableKeyword_Injected(_unity_self, keyword) { window.ctx.call("UnityEngine.Material", "DisableKeyword_Injected", [_unity_self, keyword]); }
    DisableLocalKeyword(keyword) { window.ctx.call("UnityEngine.Material", "DisableLocalKeyword", [this.ptr, keyword]); }
    static DisableLocalKeyword_Injected(_unity_self, keyword) { window.ctx.call("UnityEngine.Material", "DisableLocalKeyword_Injected", [_unity_self, keyword]); }
    EnableKeyword_keyword(keyword) { window.ctx.call("UnityEngine.Material", "EnableKeyword_2721", [this.ptr, keyword]); }
    EnableKeyword_keyword(keyword) { window.ctx.call("UnityEngine.Material", "EnableKeyword_20201", [this.ptr, keyword]); }
    static EnableKeyword_Injected(_unity_self, keyword) { window.ctx.call("UnityEngine.Material", "EnableKeyword_Injected", [_unity_self, keyword]); }
    EnableLocalKeyword(keyword) { window.ctx.call("UnityEngine.Material", "EnableLocalKeyword", [this.ptr, keyword]); }
    static EnableLocalKeyword_Injected(_unity_self, keyword) { window.ctx.call("UnityEngine.Material", "EnableLocalKeyword_Injected", [_unity_self, keyword]); }
    ExtractColorArray(name, values) { window.ctx.call("UnityEngine.Material", "ExtractColorArray", [this.ptr, name, values]); }
    ExtractColorArrayImpl(name, val) { window.ctx.call("UnityEngine.Material", "ExtractColorArrayImpl", [this.ptr, name, val]); }
    static ExtractColorArrayImpl_Injected(_unity_self, name, val) { window.ctx.call("UnityEngine.Material", "ExtractColorArrayImpl_Injected", [_unity_self, name, val]); }
    ExtractFloatArray(name, values) { window.ctx.call("UnityEngine.Material", "ExtractFloatArray", [this.ptr, name, values]); }
    ExtractFloatArrayImpl(name, val) { window.ctx.call("UnityEngine.Material", "ExtractFloatArrayImpl", [this.ptr, name, val]); }
    static ExtractFloatArrayImpl_Injected(_unity_self, name, val) { window.ctx.call("UnityEngine.Material", "ExtractFloatArrayImpl_Injected", [_unity_self, name, val]); }
    ExtractMatrixArray(name, values) { window.ctx.call("UnityEngine.Material", "ExtractMatrixArray", [this.ptr, name, values]); }
    ExtractMatrixArrayImpl(name, val) { window.ctx.call("UnityEngine.Material", "ExtractMatrixArrayImpl", [this.ptr, name, val]); }
    static ExtractMatrixArrayImpl_Injected(_unity_self, name, val) { window.ctx.call("UnityEngine.Material", "ExtractMatrixArrayImpl_Injected", [_unity_self, name, val]); }
    ExtractVectorArray(name, values) { window.ctx.call("UnityEngine.Material", "ExtractVectorArray", [this.ptr, name, values]); }
    ExtractVectorArrayImpl(name, val) { window.ctx.call("UnityEngine.Material", "ExtractVectorArrayImpl", [this.ptr, name, val]); }
    static ExtractVectorArrayImpl_Injected(_unity_self, name, val) { window.ctx.call("UnityEngine.Material", "ExtractVectorArrayImpl_Injected", [_unity_self, name, val]); }
    FindPass(passName) { return window.ctx.call("UnityEngine.Material", "FindPass", [this.ptr, passName]).val(); }
    static FindPass_Injected(_unity_self, passName) { return window.ctx.call("UnityEngine.Material", "FindPass_Injected", [_unity_self, passName]).val(); }
    GetBuffer(name) { return (()=>{
					let structptr_dcd385 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Material", "GetBuffer", [structptr_dcd385, this.ptr, name]);
					return structptr_dcd385;
				})(); }
    GetBufferImpl(name) { return (()=>{
					let structptr_e755e1 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Material", "GetBufferImpl", [structptr_e755e1, this.ptr, name]);
					return structptr_e755e1;
				})(); }
    static GetBufferImpl_Injected(_unity_self, name, ret) { window.ctx.call("UnityEngine.Material", "GetBufferImpl_Injected", [_unity_self, name, ret]); }
    GetColor_name(name) { return (()=>{
					let structptr_e496a8 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Material", "GetColor_20331", [structptr_e496a8, this.ptr, name]);
					return structptr_e496a8;
				})(); }
    GetColor_nameID(nameID) { return (()=>{
					let structptr_458599 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Material", "GetColor_20332", [structptr_458599, this.ptr, nameID]);
					return structptr_458599;
				})(); }
    GetColorArray_name(name) { return window.ctx.call("UnityEngine.Material", "GetColorArray_20343", [this.ptr, name]); }
    GetColorArray_nameID(nameID) { return window.ctx.call("UnityEngine.Material", "GetColorArray_20344", [this.ptr, nameID]); }
    GetColorArray_name_values(name, values) { window.ctx.call("UnityEngine.Material", "GetColorArray_20351", [this.ptr, name, values]); }
    GetColorArray_nameID_values(nameID, values) { window.ctx.call("UnityEngine.Material", "GetColorArray_20352", [this.ptr, nameID, values]); }
    GetColorArrayCountImpl(name) { return window.ctx.call("UnityEngine.Material", "GetColorArrayCountImpl", [this.ptr, name]).val(); }
    static GetColorArrayCountImpl_Injected(_unity_self, name) { return window.ctx.call("UnityEngine.Material", "GetColorArrayCountImpl_Injected", [_unity_self, name]).val(); }
    GetColorArrayImpl(name) { return window.ctx.call("UnityEngine.Material", "GetColorArrayImpl", [this.ptr, name]); }
    static GetColorArrayImpl_Injected(_unity_self, name, ret) { window.ctx.call("UnityEngine.Material", "GetColorArrayImpl_Injected", [_unity_self, name, ret]); }
    GetColorImpl(name) { return (()=>{
					let structptr_512118 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Material", "GetColorImpl", [structptr_512118, this.ptr, name]);
					return structptr_512118;
				})(); }
    static GetColorImpl_Injected(_unity_self, name, ret) { window.ctx.call("UnityEngine.Material", "GetColorImpl_Injected", [_unity_self, name, ret]); }
    GetConstantBuffer(name) { return (()=>{
					let structptr_7ce695 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Material", "GetConstantBuffer", [structptr_7ce695, this.ptr, name]);
					return structptr_7ce695;
				})(); }
    GetConstantBufferImpl(name) { return (()=>{
					let structptr_a1af62 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Material", "GetConstantBufferImpl", [structptr_a1af62, this.ptr, name]);
					return structptr_a1af62;
				})(); }
    static GetConstantBufferImpl_Injected(_unity_self, name, ret) { window.ctx.call("UnityEngine.Material", "GetConstantBufferImpl_Injected", [_unity_self, name, ret]); }
    static GetDefaultLineMaterial() { return new Material(window.ctx.call("UnityEngine.Material", "GetDefaultLineMaterial", [])); }
    static GetDefaultLineMaterial_Injected() { return (()=>{
					let structptr_7c1e50 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Material", "GetDefaultLineMaterial_Injected", [structptr_7c1e50, ]);
					return structptr_7c1e50;
				})(); }
    static GetDefaultMaterial() { return new Material(window.ctx.call("UnityEngine.Material", "GetDefaultMaterial", [])); }
    static GetDefaultMaterial_Injected() { return (()=>{
					let structptr_105098 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Material", "GetDefaultMaterial_Injected", [structptr_105098, ]);
					return structptr_105098;
				})(); }
    static GetDefaultParticleMaterial() { return new Material(window.ctx.call("UnityEngine.Material", "GetDefaultParticleMaterial", [])); }
    static GetDefaultParticleMaterial_Injected() { return (()=>{
					let structptr_e6782c = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Material", "GetDefaultParticleMaterial_Injected", [structptr_e6782c, ]);
					return structptr_e6782c;
				})(); }
    GetEnabledKeywords() { return window.ctx.call("UnityEngine.Material", "GetEnabledKeywords", [this.ptr]); }
    static GetEnabledKeywords_Injected(_unity_self) { return window.ctx.call("UnityEngine.Material", "GetEnabledKeywords_Injected", [_unity_self]); }
    GetFirstPropertyNameIdByAttribute(attributeFlag) { return window.ctx.call("UnityEngine.Material", "GetFirstPropertyNameIdByAttribute", [this.ptr, attributeFlag]).val(); }
    static GetFirstPropertyNameIdByAttribute_Injected(_unity_self, attributeFlag) { return window.ctx.call("UnityEngine.Material", "GetFirstPropertyNameIdByAttribute_Injected", [_unity_self, attributeFlag]).val(); }
    GetFloat_name(name) { return window.ctx.call("UnityEngine.Material", "GetFloat_20327", [this.ptr, name]).val(); }
    GetFloat_nameID(nameID) { return window.ctx.call("UnityEngine.Material", "GetFloat_20328", [this.ptr, nameID]).val(); }
    GetFloatArray_name(name) { return window.ctx.call("UnityEngine.Material", "GetFloatArray_20341", [this.ptr, name]); }
    GetFloatArray_nameID(nameID) { return window.ctx.call("UnityEngine.Material", "GetFloatArray_20342", [this.ptr, nameID]); }
    GetFloatArray_name_values(name, values) { window.ctx.call("UnityEngine.Material", "GetFloatArray_20349", [this.ptr, name, values]); }
    GetFloatArray_nameID_values(nameID, values) { window.ctx.call("UnityEngine.Material", "GetFloatArray_20350", [this.ptr, nameID, values]); }
    GetFloatArrayCountImpl(name) { return window.ctx.call("UnityEngine.Material", "GetFloatArrayCountImpl", [this.ptr, name]).val(); }
    static GetFloatArrayCountImpl_Injected(_unity_self, name) { return window.ctx.call("UnityEngine.Material", "GetFloatArrayCountImpl_Injected", [_unity_self, name]).val(); }
    GetFloatArrayImpl(name) { return window.ctx.call("UnityEngine.Material", "GetFloatArrayImpl", [this.ptr, name]); }
    static GetFloatArrayImpl_Injected(_unity_self, name, ret) { window.ctx.call("UnityEngine.Material", "GetFloatArrayImpl_Injected", [_unity_self, name, ret]); }
    GetFloatImpl(name) { return window.ctx.call("UnityEngine.Material", "GetFloatImpl", [this.ptr, name]).val(); }
    static GetFloatImpl_Injected(_unity_self, name) { return window.ctx.call("UnityEngine.Material", "GetFloatImpl_Injected", [_unity_self, name]).val(); }
    GetInt_name(name) { return window.ctx.call("UnityEngine.Material", "GetInt_20325", [this.ptr, name]).val(); }
    GetInt_nameID(nameID) { return window.ctx.call("UnityEngine.Material", "GetInt_20326", [this.ptr, nameID]).val(); }
    GetIntImpl(name) { return window.ctx.call("UnityEngine.Material", "GetIntImpl", [this.ptr, name]).val(); }
    static GetIntImpl_Injected(_unity_self, name) { return window.ctx.call("UnityEngine.Material", "GetIntImpl_Injected", [_unity_self, name]).val(); }
    GetInteger_name(name) { return window.ctx.call("UnityEngine.Material", "GetInteger_20329", [this.ptr, name]).val(); }
    GetInteger_nameID(nameID) { return window.ctx.call("UnityEngine.Material", "GetInteger_20330", [this.ptr, nameID]).val(); }
    GetMatrix_name(name) { return (()=>{
					let structptr_766b92 = window.ctx.malloc(64);
					window.ctx.call("UnityEngine.Material", "GetMatrix_20335", [structptr_766b92, this.ptr, name]);
					return structptr_766b92;
				})(); }
    GetMatrix_nameID(nameID) { return (()=>{
					let structptr_01ae49 = window.ctx.malloc(64);
					window.ctx.call("UnityEngine.Material", "GetMatrix_20336", [structptr_01ae49, this.ptr, nameID]);
					return structptr_01ae49;
				})(); }
    GetMatrixArray_name(name) { return window.ctx.call("UnityEngine.Material", "GetMatrixArray_20347", [this.ptr, name]); }
    GetMatrixArray_nameID(nameID) { return window.ctx.call("UnityEngine.Material", "GetMatrixArray_20348", [this.ptr, nameID]); }
    GetMatrixArray_name_values(name, values) { window.ctx.call("UnityEngine.Material", "GetMatrixArray_20355", [this.ptr, name, values]); }
    GetMatrixArray_nameID_values(nameID, values) { window.ctx.call("UnityEngine.Material", "GetMatrixArray_20356", [this.ptr, nameID, values]); }
    GetMatrixArrayCountImpl(name) { return window.ctx.call("UnityEngine.Material", "GetMatrixArrayCountImpl", [this.ptr, name]).val(); }
    static GetMatrixArrayCountImpl_Injected(_unity_self, name) { return window.ctx.call("UnityEngine.Material", "GetMatrixArrayCountImpl_Injected", [_unity_self, name]).val(); }
    GetMatrixArrayImpl(name) { return window.ctx.call("UnityEngine.Material", "GetMatrixArrayImpl", [this.ptr, name]); }
    static GetMatrixArrayImpl_Injected(_unity_self, name, ret) { window.ctx.call("UnityEngine.Material", "GetMatrixArrayImpl_Injected", [_unity_self, name, ret]); }
    GetMatrixImpl(name) { return (()=>{
					let structptr_6168b9 = window.ctx.malloc(64);
					window.ctx.call("UnityEngine.Material", "GetMatrixImpl", [structptr_6168b9, this.ptr, name]);
					return structptr_6168b9;
				})(); }
    static GetMatrixImpl_Injected(_unity_self, name, ret) { window.ctx.call("UnityEngine.Material", "GetMatrixImpl_Injected", [_unity_self, name, ret]); }
    GetPassName(pass) { return window.ctx.call("UnityEngine.Material", "GetPassName", [this.ptr, pass]); }
    static GetPassName_Injected(_unity_self, pass, ret) { window.ctx.call("UnityEngine.Material", "GetPassName_Injected", [_unity_self, pass, ret]); }
    GetPropertyCount() { return window.ctx.call("UnityEngine.Material", "GetPropertyCount", [this.ptr]).val(); }
    static GetPropertyCount_Injected(_unity_self) { return window.ctx.call("UnityEngine.Material", "GetPropertyCount_Injected", [_unity_self]).val(); }
    GetPropertyNames(type) { return window.ctx.call("UnityEngine.Material", "GetPropertyNames", [this.ptr, type]); }
    GetPropertyNamesImpl(propertyType) { return window.ctx.call("UnityEngine.Material", "GetPropertyNamesImpl", [this.ptr, propertyType]); }
    static GetPropertyNamesImpl_Injected(_unity_self, propertyType) { return window.ctx.call("UnityEngine.Material", "GetPropertyNamesImpl_Injected", [_unity_self, propertyType]); }
    GetShaderKeywords() { return window.ctx.call("UnityEngine.Material", "GetShaderKeywords", [this.ptr]); }
    static GetShaderKeywords_Injected(_unity_self) { return window.ctx.call("UnityEngine.Material", "GetShaderKeywords_Injected", [_unity_self]); }
    GetShaderPassEnabled(passName) { return window.ctx.call("UnityEngine.Material", "GetShaderPassEnabled", [this.ptr, passName]).val() === 1; }
    static GetShaderPassEnabled_Injected(_unity_self, passName) { return window.ctx.call("UnityEngine.Material", "GetShaderPassEnabled_Injected", [_unity_self, passName]).val() === 1; }
    GetTag_tag_searchFallbacks_defaultValue(tag, searchFallbacks, defaultValue) { return window.ctx.call("UnityEngine.Material", "GetTag_20222", [this.ptr, tag, searchFallbacks, defaultValue]); }
    GetTag_tag_searchFallbacks(tag, searchFallbacks) { return window.ctx.call("UnityEngine.Material", "GetTag_20223", [this.ptr, tag, searchFallbacks]); }
    GetTagImpl(tag, currentSubShaderOnly, defaultValue) { return window.ctx.call("UnityEngine.Material", "GetTagImpl", [this.ptr, tag, currentSubShaderOnly, defaultValue]); }
    static GetTagImpl_Injected(_unity_self, tag, currentSubShaderOnly, defaultValue, ret) { window.ctx.call("UnityEngine.Material", "GetTagImpl_Injected", [_unity_self, tag, currentSubShaderOnly, defaultValue, ret]); }
    GetTexture_name(name) { return new Texture(window.ctx.call("UnityEngine.Material", "GetTexture_20337", [this.ptr, name])); }
    GetTexture_nameID(nameID) { return new Texture(window.ctx.call("UnityEngine.Material", "GetTexture_20338", [this.ptr, nameID])); }
    GetTextureImpl(name) { return new Texture(window.ctx.call("UnityEngine.Material", "GetTextureImpl", [this.ptr, name])); }
    static GetTextureImpl_Injected(_unity_self, name) { return (()=>{
					let structptr_819f0f = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Material", "GetTextureImpl_Injected", [structptr_819f0f, _unity_self, name]);
					return structptr_819f0f;
				})(); }
    GetTextureOffset_name(name) { return (()=>{
					let structptr_16ae2e = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.Material", "GetTextureOffset_20361", [structptr_16ae2e, this.ptr, name]);
					return structptr_16ae2e;
				})(); }
    GetTextureOffset_nameID(nameID) { return (()=>{
					let structptr_5345eb = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.Material", "GetTextureOffset_20362", [structptr_5345eb, this.ptr, nameID]);
					return structptr_5345eb;
				})(); }
    GetTexturePropertyNameIDs_pointer() { return window.ctx.call("UnityEngine.Material", "GetTexturePropertyNameIDs_20236", [this.ptr]); }
    GetTexturePropertyNameIDs_outNames(outNames) { window.ctx.call("UnityEngine.Material", "GetTexturePropertyNameIDs_20240", [this.ptr, outNames]); }
    GetTexturePropertyNameIDsInternal(outNames) { window.ctx.call("UnityEngine.Material", "GetTexturePropertyNameIDsInternal", [this.ptr, outNames]); }
    static GetTexturePropertyNameIDsInternal_Injected(_unity_self, outNames) { window.ctx.call("UnityEngine.Material", "GetTexturePropertyNameIDsInternal_Injected", [_unity_self, outNames]); }
    static GetTexturePropertyNameIDs_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Material", "GetTexturePropertyNameIDs_Injected", [_unity_self, ret]); }
    GetTexturePropertyNames_pointer() { return window.ctx.call("UnityEngine.Material", "GetTexturePropertyNames_20235", [this.ptr]); }
    GetTexturePropertyNames_outNames(outNames) { window.ctx.call("UnityEngine.Material", "GetTexturePropertyNames_20239", [this.ptr, outNames]); }
    GetTexturePropertyNamesInternal(outNames) { window.ctx.call("UnityEngine.Material", "GetTexturePropertyNamesInternal", [this.ptr, outNames]); }
    static GetTexturePropertyNamesInternal_Injected(_unity_self, outNames) { window.ctx.call("UnityEngine.Material", "GetTexturePropertyNamesInternal_Injected", [_unity_self, outNames]); }
    static GetTexturePropertyNames_Injected(_unity_self) { return window.ctx.call("UnityEngine.Material", "GetTexturePropertyNames_Injected", [_unity_self]); }
    GetTextureScale_name(name) { return (()=>{
					let structptr_a14b38 = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.Material", "GetTextureScale_20363", [structptr_a14b38, this.ptr, name]);
					return structptr_a14b38;
				})(); }
    GetTextureScale_nameID(nameID) { return (()=>{
					let structptr_db18e3 = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.Material", "GetTextureScale_20364", [structptr_db18e3, this.ptr, nameID]);
					return structptr_db18e3;
				})(); }
    GetTextureScaleAndOffsetImpl(name) { return (()=>{
					let structptr_2a90e8 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Material", "GetTextureScaleAndOffsetImpl", [structptr_2a90e8, this.ptr, name]);
					return structptr_2a90e8;
				})(); }
    static GetTextureScaleAndOffsetImpl_Injected(_unity_self, name, ret) { window.ctx.call("UnityEngine.Material", "GetTextureScaleAndOffsetImpl_Injected", [_unity_self, name, ret]); }
    GetVector_name(name) { return (()=>{
					let structptr_dc3bed = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Material", "GetVector_20333", [structptr_dc3bed, this.ptr, name]);
					return structptr_dc3bed;
				})(); }
    GetVector_nameID(nameID) { return (()=>{
					let structptr_a14059 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Material", "GetVector_20334", [structptr_a14059, this.ptr, nameID]);
					return structptr_a14059;
				})(); }
    GetVectorArray_name(name) { return window.ctx.call("UnityEngine.Material", "GetVectorArray_20345", [this.ptr, name]); }
    GetVectorArray_nameID(nameID) { return window.ctx.call("UnityEngine.Material", "GetVectorArray_20346", [this.ptr, nameID]); }
    GetVectorArray_name_values(name, values) { window.ctx.call("UnityEngine.Material", "GetVectorArray_20353", [this.ptr, name, values]); }
    GetVectorArray_nameID_values(nameID, values) { window.ctx.call("UnityEngine.Material", "GetVectorArray_20354", [this.ptr, nameID, values]); }
    GetVectorArrayCountImpl(name) { return window.ctx.call("UnityEngine.Material", "GetVectorArrayCountImpl", [this.ptr, name]).val(); }
    static GetVectorArrayCountImpl_Injected(_unity_self, name) { return window.ctx.call("UnityEngine.Material", "GetVectorArrayCountImpl_Injected", [_unity_self, name]).val(); }
    GetVectorArrayImpl(name) { return window.ctx.call("UnityEngine.Material", "GetVectorArrayImpl", [this.ptr, name]); }
    static GetVectorArrayImpl_Injected(_unity_self, name, ret) { window.ctx.call("UnityEngine.Material", "GetVectorArrayImpl_Injected", [_unity_self, name, ret]); }
    HasBuffer_name(name) { return window.ctx.call("UnityEngine.Material", "HasBuffer_20187", [this.ptr, name]).val() === 1; }
    HasBuffer_nameID(nameID) { return window.ctx.call("UnityEngine.Material", "HasBuffer_20188", [this.ptr, nameID]).val() === 1; }
    HasBufferImpl(name) { return window.ctx.call("UnityEngine.Material", "HasBufferImpl", [this.ptr, name]).val() === 1; }
    static HasBufferImpl_Injected(_unity_self, name) { return window.ctx.call("UnityEngine.Material", "HasBufferImpl_Injected", [_unity_self, name]).val() === 1; }
    HasColor_name(name) { return window.ctx.call("UnityEngine.Material", "HasColor_20184", [this.ptr, name]).val() === 1; }
    HasColor_nameID(nameID) { return window.ctx.call("UnityEngine.Material", "HasColor_20185", [this.ptr, nameID]).val() === 1; }
    HasConstantBuffer_name(name) { return window.ctx.call("UnityEngine.Material", "HasConstantBuffer_20190", [this.ptr, name]).val() === 1; }
    HasConstantBuffer_nameID(nameID) { return window.ctx.call("UnityEngine.Material", "HasConstantBuffer_20191", [this.ptr, nameID]).val() === 1; }
    HasConstantBufferImpl(name) { return window.ctx.call("UnityEngine.Material", "HasConstantBufferImpl", [this.ptr, name]).val() === 1; }
    static HasConstantBufferImpl_Injected(_unity_self, name) { return window.ctx.call("UnityEngine.Material", "HasConstantBufferImpl_Injected", [_unity_self, name]).val() === 1; }
    HasFloat_name(name) { return window.ctx.call("UnityEngine.Material", "HasFloat_20168", [this.ptr, name]).val() === 1; }
    HasFloat_nameID(nameID) { return window.ctx.call("UnityEngine.Material", "HasFloat_20169", [this.ptr, nameID]).val() === 1; }
    HasFloatImpl(name) { return window.ctx.call("UnityEngine.Material", "HasFloatImpl", [this.ptr, name]).val() === 1; }
    static HasFloatImpl_Injected(_unity_self, name) { return window.ctx.call("UnityEngine.Material", "HasFloatImpl_Injected", [_unity_self, name]).val() === 1; }
    HasInt_name(name) { return window.ctx.call("UnityEngine.Material", "HasInt_20170", [this.ptr, name]).val() === 1; }
    HasInt_nameID(nameID) { return window.ctx.call("UnityEngine.Material", "HasInt_20171", [this.ptr, nameID]).val() === 1; }
    HasIntImpl(name) { return window.ctx.call("UnityEngine.Material", "HasIntImpl", [this.ptr, name]).val() === 1; }
    static HasIntImpl_Injected(_unity_self, name) { return window.ctx.call("UnityEngine.Material", "HasIntImpl_Injected", [_unity_self, name]).val() === 1; }
    HasInteger_name(name) { return window.ctx.call("UnityEngine.Material", "HasInteger_20173", [this.ptr, name]).val() === 1; }
    HasInteger_nameID(nameID) { return window.ctx.call("UnityEngine.Material", "HasInteger_20174", [this.ptr, nameID]).val() === 1; }
    HasMatrix_name(name) { return window.ctx.call("UnityEngine.Material", "HasMatrix_20179", [this.ptr, name]).val() === 1; }
    HasMatrix_nameID(nameID) { return window.ctx.call("UnityEngine.Material", "HasMatrix_20180", [this.ptr, nameID]).val() === 1; }
    HasMatrixImpl(name) { return window.ctx.call("UnityEngine.Material", "HasMatrixImpl", [this.ptr, name]).val() === 1; }
    static HasMatrixImpl_Injected(_unity_self, name) { return window.ctx.call("UnityEngine.Material", "HasMatrixImpl_Injected", [_unity_self, name]).val() === 1; }
    HasProperty_nameID(nameID) { return window.ctx.call("UnityEngine.Material", "HasProperty_20165", [this.ptr, nameID]).val() === 1; }
    HasProperty_name(name) { return window.ctx.call("UnityEngine.Material", "HasProperty_20166", [this.ptr, name]).val() === 1; }
    static HasProperty_Injected(_unity_self, nameID) { return window.ctx.call("UnityEngine.Material", "HasProperty_Injected", [_unity_self, nameID]).val() === 1; }
    HasTexture_name(name) { return window.ctx.call("UnityEngine.Material", "HasTexture_20176", [this.ptr, name]).val() === 1; }
    HasTexture_nameID(nameID) { return window.ctx.call("UnityEngine.Material", "HasTexture_20177", [this.ptr, nameID]).val() === 1; }
    HasTextureImpl(name) { return window.ctx.call("UnityEngine.Material", "HasTextureImpl", [this.ptr, name]).val() === 1; }
    static HasTextureImpl_Injected(_unity_self, name) { return window.ctx.call("UnityEngine.Material", "HasTextureImpl_Injected", [_unity_self, name]).val() === 1; }
    HasVector_name(name) { return window.ctx.call("UnityEngine.Material", "HasVector_20182", [this.ptr, name]).val() === 1; }
    HasVector_nameID(nameID) { return window.ctx.call("UnityEngine.Material", "HasVector_20183", [this.ptr, nameID]).val() === 1; }
    HasVectorImpl(name) { return window.ctx.call("UnityEngine.Material", "HasVectorImpl", [this.ptr, name]).val() === 1; }
    static HasVectorImpl_Injected(_unity_self, name) { return window.ctx.call("UnityEngine.Material", "HasVectorImpl_Injected", [_unity_self, name]).val() === 1; }
    IsKeywordEnabled_keyword(keyword) { return window.ctx.call("UnityEngine.Material", "IsKeywordEnabled_20196", [this.ptr, keyword]).val() === 1; }
    IsKeywordEnabled_keyword(keyword) { return window.ctx.call("UnityEngine.Material", "IsKeywordEnabled_20204", [this.ptr, keyword]).val() === 1; }
    static IsKeywordEnabled_Injected(_unity_self, keyword) { return window.ctx.call("UnityEngine.Material", "IsKeywordEnabled_Injected", [_unity_self, keyword]).val() === 1; }
    IsLocalKeywordEnabled(keyword) { return window.ctx.call("UnityEngine.Material", "IsLocalKeywordEnabled", [this.ptr, keyword]).val() === 1; }
    static IsLocalKeywordEnabled_Injected(_unity_self, keyword) { return window.ctx.call("UnityEngine.Material", "IsLocalKeywordEnabled_Injected", [_unity_self, keyword]).val() === 1; }
    Lerp(start, end, t) { window.ctx.call("UnityEngine.Material", "Lerp", [this.ptr, start, end, t]); }
    static Lerp_Injected(_unity_self, start, end, t) { window.ctx.call("UnityEngine.Material", "Lerp_Injected", [_unity_self, start, end, t]); }
    SetBuffer_name_value(name, value) { window.ctx.call("UnityEngine.Material", "SetBuffer_20301", [this.ptr, name, value]); }
    SetBuffer_nameID_value(nameID, value) { window.ctx.call("UnityEngine.Material", "SetBuffer_20302", [this.ptr, nameID, value]); }
    SetBuffer_name_value(name, value) { window.ctx.call("UnityEngine.Material", "SetBuffer_20303", [this.ptr, name, value]); }
    SetBuffer_nameID_value(nameID, value) { window.ctx.call("UnityEngine.Material", "SetBuffer_20304", [this.ptr, nameID, value]); }
    SetBufferImpl(name, value) { window.ctx.call("UnityEngine.Material", "SetBufferImpl", [this.ptr, name, value]); }
    static SetBufferImpl_Injected(_unity_self, name, value) { window.ctx.call("UnityEngine.Material", "SetBufferImpl_Injected", [_unity_self, name, value]); }
    SetColor_name_value(name, value) { window.ctx.call("UnityEngine.Material", "SetColor_20291", [this.ptr, name, value]); }
    SetColor_nameID_value(nameID, value) { window.ctx.call("UnityEngine.Material", "SetColor_20292", [this.ptr, nameID, value]); }
    SetColorArray_name_values_count(name, values, count) { window.ctx.call("UnityEngine.Material", "SetColorArray_20279", [this.ptr, name, values, count]); }
    SetColorArray_name_values(name, values) { window.ctx.call("UnityEngine.Material", "SetColorArray_20313", [this.ptr, name, values]); }
    SetColorArray_nameID_values(nameID, values) { window.ctx.call("UnityEngine.Material", "SetColorArray_20314", [this.ptr, nameID, values]); }
    SetColorArray_name_values(name, values) { window.ctx.call("UnityEngine.Material", "SetColorArray_20315", [this.ptr, name, values]); }
    SetColorArray_nameID_values(nameID, values) { window.ctx.call("UnityEngine.Material", "SetColorArray_20316", [this.ptr, nameID, values]); }
    SetColorArrayImpl(name, values, count) { window.ctx.call("UnityEngine.Material", "SetColorArrayImpl", [this.ptr, name, values, count]); }
    static SetColorArrayImpl_Injected(_unity_self, name, values, count) { window.ctx.call("UnityEngine.Material", "SetColorArrayImpl_Injected", [_unity_self, name, values, count]); }
    SetColorImpl(name, value) { window.ctx.call("UnityEngine.Material", "SetColorImpl", [this.ptr, name, value]); }
    static SetColorImpl_Injected(_unity_self, name, value) { window.ctx.call("UnityEngine.Material", "SetColorImpl_Injected", [_unity_self, name, value]); }
    SetConstantBuffer_name_value_offset_size(name, value, offset, size) { window.ctx.call("UnityEngine.Material", "SetConstantBuffer_20305", [this.ptr, name, value, offset, size]); }
    SetConstantBuffer_nameID_value_offset_size(nameID, value, offset, size) { window.ctx.call("UnityEngine.Material", "SetConstantBuffer_20306", [this.ptr, nameID, value, offset, size]); }
    SetConstantBuffer_name_value_offset_size(name, value, offset, size) { window.ctx.call("UnityEngine.Material", "SetConstantBuffer_20307", [this.ptr, name, value, offset, size]); }
    SetConstantBuffer_nameID_value_offset_size(nameID, value, offset, size) { window.ctx.call("UnityEngine.Material", "SetConstantBuffer_20308", [this.ptr, nameID, value, offset, size]); }
    SetConstantBufferImpl(name, value, offset, size) { window.ctx.call("UnityEngine.Material", "SetConstantBufferImpl", [this.ptr, name, value, offset, size]); }
    static SetConstantBufferImpl_Injected(_unity_self, name, value, offset, size) { window.ctx.call("UnityEngine.Material", "SetConstantBufferImpl_Injected", [_unity_self, name, value, offset, size]); }
    SetConstantGraphicsBufferImpl(name, value, offset, size) { window.ctx.call("UnityEngine.Material", "SetConstantGraphicsBufferImpl", [this.ptr, name, value, offset, size]); }
    static SetConstantGraphicsBufferImpl_Injected(_unity_self, name, value, offset, size) { window.ctx.call("UnityEngine.Material", "SetConstantGraphicsBufferImpl_Injected", [_unity_self, name, value, offset, size]); }
    SetEnabledKeywords(keywords) { window.ctx.call("UnityEngine.Material", "SetEnabledKeywords", [this.ptr, keywords]); }
    static SetEnabledKeywords_Injected(_unity_self, keywords) { window.ctx.call("UnityEngine.Material", "SetEnabledKeywords_Injected", [_unity_self, keywords]); }
    SetFloat_name_value(name, value) { window.ctx.call("UnityEngine.Material", "SetFloat_20287", [this.ptr, name, value]); }
    SetFloat_nameID_value(nameID, value) { window.ctx.call("UnityEngine.Material", "SetFloat_20288", [this.ptr, nameID, value]); }
    SetFloatArray_name_values_count(name, values, count) { window.ctx.call("UnityEngine.Material", "SetFloatArray_20277", [this.ptr, name, values, count]); }
    SetFloatArray_name_values(name, values) { window.ctx.call("UnityEngine.Material", "SetFloatArray_20309", [this.ptr, name, values]); }
    SetFloatArray_nameID_values(nameID, values) { window.ctx.call("UnityEngine.Material", "SetFloatArray_20310", [this.ptr, nameID, values]); }
    SetFloatArray_name_values(name, values) { window.ctx.call("UnityEngine.Material", "SetFloatArray_20311", [this.ptr, name, values]); }
    SetFloatArray_nameID_values(nameID, values) { window.ctx.call("UnityEngine.Material", "SetFloatArray_20312", [this.ptr, nameID, values]); }
    SetFloatArrayImpl(name, values, count) { window.ctx.call("UnityEngine.Material", "SetFloatArrayImpl", [this.ptr, name, values, count]); }
    static SetFloatArrayImpl_Injected(_unity_self, name, values, count) { window.ctx.call("UnityEngine.Material", "SetFloatArrayImpl_Injected", [_unity_self, name, values, count]); }
    SetFloatImpl(name, value) { window.ctx.call("UnityEngine.Material", "SetFloatImpl", [this.ptr, name, value]); }
    static SetFloatImpl_Injected(_unity_self, name, value) { window.ctx.call("UnityEngine.Material", "SetFloatImpl_Injected", [_unity_self, name, value]); }
    SetGraphicsBufferImpl(name, value) { window.ctx.call("UnityEngine.Material", "SetGraphicsBufferImpl", [this.ptr, name, value]); }
    static SetGraphicsBufferImpl_Injected(_unity_self, name, value) { window.ctx.call("UnityEngine.Material", "SetGraphicsBufferImpl_Injected", [_unity_self, name, value]); }
    SetInt_name_value(name, value) { window.ctx.call("UnityEngine.Material", "SetInt_20285", [this.ptr, name, value]); }
    SetInt_nameID_value(nameID, value) { window.ctx.call("UnityEngine.Material", "SetInt_20286", [this.ptr, nameID, value]); }
    SetIntImpl(name, value) { window.ctx.call("UnityEngine.Material", "SetIntImpl", [this.ptr, name, value]); }
    static SetIntImpl_Injected(_unity_self, name, value) { window.ctx.call("UnityEngine.Material", "SetIntImpl_Injected", [_unity_self, name, value]); }
    SetInteger_name_value(name, value) { window.ctx.call("UnityEngine.Material", "SetInteger_20289", [this.ptr, name, value]); }
    SetInteger_nameID_value(nameID, value) { window.ctx.call("UnityEngine.Material", "SetInteger_20290", [this.ptr, nameID, value]); }
    SetKeyword(keyword, value) { window.ctx.call("UnityEngine.Material", "SetKeyword", [this.ptr, keyword, value]); }
    SetLocalKeyword(keyword, value) { window.ctx.call("UnityEngine.Material", "SetLocalKeyword", [this.ptr, keyword, value]); }
    static SetLocalKeyword_Injected(_unity_self, keyword, value) { window.ctx.call("UnityEngine.Material", "SetLocalKeyword_Injected", [_unity_self, keyword, value]); }
    SetMatrix_name_value(name, value) { window.ctx.call("UnityEngine.Material", "SetMatrix_20295", [this.ptr, name, value]); }
    SetMatrix_nameID_value(nameID, value) { window.ctx.call("UnityEngine.Material", "SetMatrix_20296", [this.ptr, nameID, value]); }
    SetMatrixArray_name_values_count(name, values, count) { window.ctx.call("UnityEngine.Material", "SetMatrixArray_20280", [this.ptr, name, values, count]); }
    SetMatrixArray_name_values(name, values) { window.ctx.call("UnityEngine.Material", "SetMatrixArray_20321", [this.ptr, name, values]); }
    SetMatrixArray_nameID_values(nameID, values) { window.ctx.call("UnityEngine.Material", "SetMatrixArray_20322", [this.ptr, nameID, values]); }
    SetMatrixArray_name_values(name, values) { window.ctx.call("UnityEngine.Material", "SetMatrixArray_20323", [this.ptr, name, values]); }
    SetMatrixArray_nameID_values(nameID, values) { window.ctx.call("UnityEngine.Material", "SetMatrixArray_20324", [this.ptr, nameID, values]); }
    SetMatrixArrayImpl(name, values, count) { window.ctx.call("UnityEngine.Material", "SetMatrixArrayImpl", [this.ptr, name, values, count]); }
    static SetMatrixArrayImpl_Injected(_unity_self, name, values, count) { window.ctx.call("UnityEngine.Material", "SetMatrixArrayImpl_Injected", [_unity_self, name, values, count]); }
    SetMatrixImpl(name, value) { window.ctx.call("UnityEngine.Material", "SetMatrixImpl", [this.ptr, name, value]); }
    static SetMatrixImpl_Injected(_unity_self, name, value) { window.ctx.call("UnityEngine.Material", "SetMatrixImpl_Injected", [_unity_self, name, value]); }
    SetOverrideTag(tag, val) { window.ctx.call("UnityEngine.Material", "SetOverrideTag", [this.ptr, tag, val]); }
    static SetOverrideTag_Injected(_unity_self, tag, val) { window.ctx.call("UnityEngine.Material", "SetOverrideTag_Injected", [_unity_self, tag, val]); }
    SetPass(pass) { return window.ctx.call("UnityEngine.Material", "SetPass", [this.ptr, pass]).val() === 1; }
    static SetPass_Injected(_unity_self, pass) { return window.ctx.call("UnityEngine.Material", "SetPass_Injected", [_unity_self, pass]).val() === 1; }
    SetRenderTextureImpl(name, value, element) { window.ctx.call("UnityEngine.Material", "SetRenderTextureImpl", [this.ptr, name, value, element]); }
    static SetRenderTextureImpl_Injected(_unity_self, name, value, element) { window.ctx.call("UnityEngine.Material", "SetRenderTextureImpl_Injected", [_unity_self, name, value, element]); }
    SetShaderKeywords(names) { window.ctx.call("UnityEngine.Material", "SetShaderKeywords", [this.ptr, names]); }
    static SetShaderKeywords_Injected(_unity_self, names) { window.ctx.call("UnityEngine.Material", "SetShaderKeywords_Injected", [_unity_self, names]); }
    SetShaderPassEnabled(passName, enabled) { window.ctx.call("UnityEngine.Material", "SetShaderPassEnabled", [this.ptr, passName, enabled]); }
    static SetShaderPassEnabled_Injected(_unity_self, passName, enabled) { window.ctx.call("UnityEngine.Material", "SetShaderPassEnabled_Injected", [_unity_self, passName, enabled]); }
    SetTexture_name_value(name, value) { window.ctx.call("UnityEngine.Material", "SetTexture_20297", [this.ptr, name, value]); }
    SetTexture_nameID_value(nameID, value) { window.ctx.call("UnityEngine.Material", "SetTexture_20298", [this.ptr, nameID, value]); }
    SetTexture_name_value_element(name, value, element) { window.ctx.call("UnityEngine.Material", "SetTexture_20299", [this.ptr, name, value, element]); }
    SetTexture_nameID_value_element(nameID, value, element) { window.ctx.call("UnityEngine.Material", "SetTexture_20300", [this.ptr, nameID, value, element]); }
    SetTextureImpl(name, value) { window.ctx.call("UnityEngine.Material", "SetTextureImpl", [this.ptr, name, value]); }
    static SetTextureImpl_Injected(_unity_self, name, value) { window.ctx.call("UnityEngine.Material", "SetTextureImpl_Injected", [_unity_self, name, value]); }
    SetTextureOffset_name_value(name, value) { window.ctx.call("UnityEngine.Material", "SetTextureOffset_20357", [this.ptr, name, value]); }
    SetTextureOffset_nameID_value(nameID, value) { window.ctx.call("UnityEngine.Material", "SetTextureOffset_20358", [this.ptr, nameID, value]); }
    SetTextureOffsetImpl(name, offset) { window.ctx.call("UnityEngine.Material", "SetTextureOffsetImpl", [this.ptr, name, offset]); }
    static SetTextureOffsetImpl_Injected(_unity_self, name, offset) { window.ctx.call("UnityEngine.Material", "SetTextureOffsetImpl_Injected", [_unity_self, name, offset]); }
    SetTextureScale_name_value(name, value) { window.ctx.call("UnityEngine.Material", "SetTextureScale_20359", [this.ptr, name, value]); }
    SetTextureScale_nameID_value(nameID, value) { window.ctx.call("UnityEngine.Material", "SetTextureScale_20360", [this.ptr, nameID, value]); }
    SetTextureScaleImpl(name, scale) { window.ctx.call("UnityEngine.Material", "SetTextureScaleImpl", [this.ptr, name, scale]); }
    static SetTextureScaleImpl_Injected(_unity_self, name, scale) { window.ctx.call("UnityEngine.Material", "SetTextureScaleImpl_Injected", [_unity_self, name, scale]); }
    SetVector_name_value(name, value) { window.ctx.call("UnityEngine.Material", "SetVector_20293", [this.ptr, name, value]); }
    SetVector_nameID_value(nameID, value) { window.ctx.call("UnityEngine.Material", "SetVector_20294", [this.ptr, nameID, value]); }
    SetVectorArray_name_values_count(name, values, count) { window.ctx.call("UnityEngine.Material", "SetVectorArray_20278", [this.ptr, name, values, count]); }
    SetVectorArray_name_values(name, values) { window.ctx.call("UnityEngine.Material", "SetVectorArray_20317", [this.ptr, name, values]); }
    SetVectorArray_nameID_values(nameID, values) { window.ctx.call("UnityEngine.Material", "SetVectorArray_20318", [this.ptr, nameID, values]); }
    SetVectorArray_name_values(name, values) { window.ctx.call("UnityEngine.Material", "SetVectorArray_20319", [this.ptr, name, values]); }
    SetVectorArray_nameID_values(nameID, values) { window.ctx.call("UnityEngine.Material", "SetVectorArray_20320", [this.ptr, nameID, values]); }
    SetVectorArrayImpl(name, values, count) { window.ctx.call("UnityEngine.Material", "SetVectorArrayImpl", [this.ptr, name, values, count]); }
    static SetVectorArrayImpl_Injected(_unity_self, name, values, count) { window.ctx.call("UnityEngine.Material", "SetVectorArrayImpl_Injected", [_unity_self, name, values, count]); }
    static get_doubleSidedGI_Injected(_unity_self) { return window.ctx.call("UnityEngine.Material", "get_doubleSidedGI_Injected", [_unity_self]).val() === 1; }
    static get_enableInstancing_Injected(_unity_self) { return window.ctx.call("UnityEngine.Material", "get_enableInstancing_Injected", [_unity_self]).val() === 1; }
    static get_globalIlluminationFlags_Injected(_unity_self) { return new MaterialGlobalIlluminationFlags(window.ctx.call("UnityEngine.Material", "get_globalIlluminationFlags_Injected", [_unity_self])); }
    static get_passCount_Injected(_unity_self) { return window.ctx.call("UnityEngine.Material", "get_passCount_Injected", [_unity_self]).val(); }
    static get_rawRenderQueue_Injected(_unity_self) { return window.ctx.call("UnityEngine.Material", "get_rawRenderQueue_Injected", [_unity_self]).val(); }
    static get_renderQueue_Injected(_unity_self) { return window.ctx.call("UnityEngine.Material", "get_renderQueue_Injected", [_unity_self]).val(); }
    static get_shader_Injected(_unity_self) { return (()=>{
					let structptr_30a3f9 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Material", "get_shader_Injected", [structptr_30a3f9, _unity_self]);
					return structptr_30a3f9;
				})(); }
    static set_doubleSidedGI_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Material", "set_doubleSidedGI_Injected", [_unity_self, value]); }
    static set_enableInstancing_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Material", "set_enableInstancing_Injected", [_unity_self, value]); }
    static set_globalIlluminationFlags_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Material", "set_globalIlluminationFlags_Injected", [_unity_self, value]); }
    static set_renderQueue_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Material", "set_renderQueue_Injected", [_unity_self, value]); }
    static set_shader_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Material", "set_shader_Injected", [_unity_self, value]); }
}

export class StereoTargetEyeMask {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class TransparencySortMode {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class Avatar {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get isHuman() { return window.ctx.call("UnityEngine.Avatar", "get_isHuman", [this.ptr]).val() === 1; }
    get isValid() { return window.ctx.call("UnityEngine.Avatar", "get_isValid", [this.ptr]).val() === 1; }
    static get_isHuman_Injected(_unity_self) { return window.ctx.call("UnityEngine.Avatar", "get_isHuman_Injected", [_unity_self]).val() === 1; }
    static get_isValid_Injected(_unity_self) { return window.ctx.call("UnityEngine.Avatar", "get_isValid_Injected", [_unity_self]).val() === 1; }
}

export class AnimatorCullingMode {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class AnimatorRecorderMode {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class AnimatorUpdateMode {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class ScriptableObject {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    static CreateInstance_type(type) { return new ScriptableObject(window.ctx.call("UnityEngine.ScriptableObject", "CreateInstance_22606", [type])); }
    static CreateInstance() { return window.ctx.call("UnityEngine.ScriptableObject", "CreateInstance", []); }
    static CreateScriptableObject(self) { window.ctx.call("UnityEngine.ScriptableObject", "CreateScriptableObject", [self]); }
    static CreateScriptableObjectInstanceFromType(type, applyDefaultsAndReset) { return new ScriptableObject(window.ctx.call("UnityEngine.ScriptableObject", "CreateScriptableObjectInstanceFromType", [type, applyDefaultsAndReset])); }
    static CreateScriptableObjectInstanceFromType_Injected(type, applyDefaultsAndReset) { return (()=>{
					let structptr_ce76d3 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ScriptableObject", "CreateScriptableObjectInstanceFromType_Injected", [structptr_ce76d3, type, applyDefaultsAndReset]);
					return structptr_ce76d3;
				})(); }
}

export class AnimatorControllerParameter {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get name() { return window.ctx.call("UnityEngine.AnimatorControllerParameter", "get_name", [this.ptr]); }
    get m_DefaultBool() { return this.ptr.readField(0x18, 'i32').val() === 1; }
    set m_DefaultBool(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get m_DefaultFloat() { return this.ptr.readField(0x10, 'f32').val(); }
    set m_DefaultFloat(v) { return this.ptr.writeField(0x10, 'f32', v); }
    get m_DefaultInt() { return this.ptr.readField(0x14, 'i32').val(); }
    set m_DefaultInt(v) { return this.ptr.writeField(0x14, 'i32', v); }
    get m_Name() { return this.ptr.readField(0x8, 'i32').mstr(); }
    set m_Name(v) { return this.ptr.writeField(0x8, 'i32', window.ctx.createMstr(v)); }
    get m_Type() { return new AnimatorControllerParameterType(this.ptr.readField(0xC, 'i32')); }
    set m_Type(v) { return this.ptr.writeField(0xC, 'i32', v); }
    Equals(o) { return window.ctx.call("UnityEngine.AnimatorControllerParameter", "Equals", [this.ptr, o]).val() === 1; }
    GetHashCode() { return window.ctx.call("UnityEngine.AnimatorControllerParameter", "GetHashCode", [this.ptr]).val(); }
}

export class RotationOrder {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class Texture {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get dimension() { return new TextureDimension(window.ctx.call("UnityEngine.Texture", "get_dimension", [this.ptr])); }
    set dimension(v) { window.ctx.call("UnityEngine.Texture", "set_dimension", [this.ptr, v]); }
    get height() { return window.ctx.call("UnityEngine.Texture", "get_height", [this.ptr]).val(); }
    set height(v) { window.ctx.call("UnityEngine.Texture", "set_height", [this.ptr, v]); }
    get isReadable() { return window.ctx.call("UnityEngine.Texture", "get_isReadable", [this.ptr]).val() === 1; }
    get mipmapCount() { return window.ctx.call("UnityEngine.Texture", "get_mipmapCount", [this.ptr]).val(); }
    get texelSize() { return (()=>{
					let structptr_080db9 = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.Texture", "get_texelSize", [structptr_080db9, this.ptr]);
					return structptr_080db9;
				})(); }
    get width() { return window.ctx.call("UnityEngine.Texture", "get_width", [this.ptr]).val(); }
    set width(v) { window.ctx.call("UnityEngine.Texture", "set_width", [this.ptr, v]); }
    get wrapMode() { return new TextureWrapMode(window.ctx.call("UnityEngine.Texture", "get_wrapMode", [this.ptr])); }
    get GenerateAllMips() { return this.ptr.readField(0x0, 'i32').val(); }
    set GenerateAllMips(v) { return this.ptr.writeField(0x0, 'i32', v); }
    CreateNativeArrayLengthOverflowException() { return window.ctx.call("UnityEngine.Texture", "CreateNativeArrayLengthOverflowException", [this.ptr]); }
    CreateNonReadableException(t) { return window.ctx.call("UnityEngine.Texture", "CreateNonReadableException", [this.ptr, t]); }
    GetDataHeight() { return window.ctx.call("UnityEngine.Texture", "GetDataHeight", [this.ptr]).val(); }
    static GetDataHeight_Injected(_unity_self) { return window.ctx.call("UnityEngine.Texture", "GetDataHeight_Injected", [_unity_self]).val(); }
    GetDataWidth() { return window.ctx.call("UnityEngine.Texture", "GetDataWidth", [this.ptr]).val(); }
    static GetDataWidth_Injected(_unity_self) { return window.ctx.call("UnityEngine.Texture", "GetDataWidth_Injected", [_unity_self]).val(); }
    GetDimension() { return new TextureDimension(window.ctx.call("UnityEngine.Texture", "GetDimension", [this.ptr])); }
    static GetDimension_Injected(_unity_self) { return new TextureDimension(window.ctx.call("UnityEngine.Texture", "GetDimension_Injected", [_unity_self])); }
    GetPixelDataOffset(mipLevel, element) { return window.ctx.call("UnityEngine.Texture", "GetPixelDataOffset", [this.ptr, mipLevel, element]).val(); }
    static GetPixelDataOffset_Injected(_unity_self, mipLevel, element) { return window.ctx.call("UnityEngine.Texture", "GetPixelDataOffset_Injected", [_unity_self, mipLevel, element]).val(); }
    GetPixelDataSize(mipLevel, element) { return window.ctx.call("UnityEngine.Texture", "GetPixelDataSize", [this.ptr, mipLevel, element]).val(); }
    static GetPixelDataSize_Injected(_unity_self, mipLevel, element) { return window.ctx.call("UnityEngine.Texture", "GetPixelDataSize_Injected", [_unity_self, mipLevel, element]).val(); }
    GetTextureColorSpace_linear(linear) { return new TextureColorSpace(window.ctx.call("UnityEngine.Texture", "GetTextureColorSpace_21244", [this.ptr, linear])); }
    GetTextureColorSpace_format(format) { return new TextureColorSpace(window.ctx.call("UnityEngine.Texture", "GetTextureColorSpace_21245", [this.ptr, format])); }
    IgnoreMipmapLimitCannotBeToggledException(t) { return window.ctx.call("UnityEngine.Texture", "IgnoreMipmapLimitCannotBeToggledException", [this.ptr, t]); }
    ValidateFormat_format(format) { return window.ctx.call("UnityEngine.Texture", "ValidateFormat_21246", [this.ptr, format]).val() === 1; }
    ValidateFormat_format_usage(format, usage) { return window.ctx.call("UnityEngine.Texture", "ValidateFormat_21247", [this.ptr, format, usage]).val() === 1; }
    static get_isReadable_Injected(_unity_self) { return window.ctx.call("UnityEngine.Texture", "get_isReadable_Injected", [_unity_self]).val() === 1; }
    static get_mipmapCount_Injected(_unity_self) { return window.ctx.call("UnityEngine.Texture", "get_mipmapCount_Injected", [_unity_self]).val(); }
    static get_texelSize_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Texture", "get_texelSize_Injected", [_unity_self, ret]); }
    static get_wrapMode_Injected(_unity_self) { return new TextureWrapMode(window.ctx.call("UnityEngine.Texture", "get_wrapMode_Injected", [_unity_self])); }
}

export class Type {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get ChildPrimitiveType() { return this.ptr.readField(0x8, 'i32').mstr(); }
    set ChildPrimitiveType(v) { return this.ptr.writeField(0x8, 'i32', window.ctx.createMstr(v)); }
    get ChildType() { return new Type(this.ptr.readField(0xC, 'i32')); }
    set ChildType(v) { return this.ptr.writeField(0xC, 'i32', v); }
    get FieldType() { return this.ptr.readField(0x10, 'i32').mstr(); }
    set FieldType(v) { return this.ptr.writeField(0x10, 'i32', window.ctx.createMstr(v)); }
    get Index() { return this.ptr.readField(0x14, 'i32').val(); }
    set Index(v) { return this.ptr.writeField(0x14, 'i32', v); }
}

export class ColyTransform {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get OnAirState() { return this.ptr.readField(0x50, 'i32').val() === 1; }
    set OnAirState(v) { return this.ptr.writeField(0x50, 'i32', v); }
    get firstStateReceived() { return this.ptr.readField(0x68, 'i32').val() === 1; }
    set firstStateReceived(v) { return this.ptr.writeField(0x68, 'i32', v); }
    get inAir() { return this.ptr.readField(0x4D, 'i32').val() === 1; }
    set inAir(v) { return this.ptr.writeField(0x4D, 'i32', v); }
    get interpolationDelay() { return this.ptr.readField(0x1C, 'f32').val(); }
    set interpolationDelay(v) { return this.ptr.writeField(0x1C, 'f32', v); }
    get lastReceivedState() { return this.ptr.readField(0x58, 'i32'); }
    set lastReceivedState(v) { return this.ptr.writeField(0x58, 'i32', v); }
    get lastSentNeck() { return this.ptr.readField(0x40, 'f32').val(); }
    set lastSentNeck(v) { return this.ptr.writeField(0x40, 'f32', v); }
    get lastSentPosition() { return new Vector3(this.ptr.readField(0x24, 'i32')); }
    set lastSentPosition(v) { return this.ptr.writeField(0x24, 'i32', v); }
    get lastSentRotation() { return new Quaternion(this.ptr.readField(0x30, 'i32')); }
    set lastSentRotation(v) { return this.ptr.writeField(0x30, 'i32', v); }
    get lastServerTime() { return this.ptr.readField(0x60, 'i32'); }
    set lastServerTime(v) { return this.ptr.writeField(0x60, 'i32', v); }
    get movementCooldown() { return this.ptr.readField(0x14, 'f32').val(); }
    set movementCooldown(v) { return this.ptr.writeField(0x14, 'f32', v); }
    get neckController() { return new NeckController(this.ptr.readField(0x20, 'i32')); }
    set neckController(v) { return this.ptr.writeField(0x20, 'i32', v); }
    get positionBufferSize() { return this.ptr.readField(0x18, 'i32').val(); }
    set positionBufferSize(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get stateBuffer() { return this.ptr.readField(0x54, 'i32'); }
    set stateBuffer(v) { return this.ptr.writeField(0x54, 'i32', v); }
    get targetState() { return this.ptr.readField(0x5C, 'i32'); }
    set targetState(v) { return this.ptr.writeField(0x5C, 'i32', v); }
    get timeSinceLastMovement() { return this.ptr.readField(0x48, 'f32').val(); }
    set timeSinceLastMovement(v) { return this.ptr.writeField(0x48, 'f32', v); }
    get timeSinceLastSend() { return this.ptr.readField(0x44, 'f32').val(); }
    set timeSinceLastSend(v) { return this.ptr.writeField(0x44, 'f32', v); }
    get unregisterRigidChange() { return new Action(this.ptr.readField(0x6C, 'i32')); }
    set unregisterRigidChange(v) { return this.ptr.writeField(0x6C, 'i32', v); }
    get wasMoving() { return this.ptr.readField(0x4C, 'i32').val() === 1; }
    set wasMoving(v) { return this.ptr.writeField(0x4C, 'i32', v); }
    InitializeListeners() { window.ctx.call("ColyTransform", "InitializeListeners", [this.ptr]); }
    IsMoving() { return window.ctx.call("ColyTransform", "IsMoving", [this.ptr]).val() === 1; }
    OnDestroy() { window.ctx.call("ColyTransform", "OnDestroy", [this.ptr]); }
    OnDisable() { window.ctx.call("ColyTransform", "OnDisable", [this.ptr]); }
    OnEnable() { window.ctx.call("ColyTransform", "OnEnable", [this.ptr]); }
    OnNetworkSpawned(spawnInfo) { window.ctx.call("ColyTransform", "OnNetworkSpawned", [this.ptr, spawnInfo]); }
    OnRigidChange(current, previous) { window.ctx.call("ColyTransform", "OnRigidChange", [this.ptr, current, previous]); }
    SendPositionUpdate(newPosition, newRotation, neck) { window.ctx.call("ColyTransform", "SendPositionUpdate", [this.ptr, newPosition, newRotation, neck]); }
    SetAirLocal(inAirRn) { window.ctx.call("ColyTransform", "SetAirLocal", [this.ptr, inAirRn]); }
    UnregisterRigidChange() { window.ctx.call("ColyTransform", "UnregisterRigidChange", [this.ptr]); }
    Update() { window.ctx.call("ColyTransform", "Update", [this.ptr]); }
    UpdateLocalPlayer() { window.ctx.call("ColyTransform", "UpdateLocalPlayer", [this.ptr]); }
    UpdateRemotePlayer() { window.ctx.call("ColyTransform", "UpdateRemotePlayer", [this.ptr]); }
}

export class InterpolationMethod {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class KinematicCharacterMotor {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get AttachedRigidbody() { return new Rigidbody(window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "get_AttachedRigidbody", [this.ptr])); }
    get AttachedRigidbodyVelocity() { return (()=>{
					let structptr_116af0 = window.ctx.malloc(12);
					window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "get_AttachedRigidbodyVelocity", [structptr_116af0, this.ptr]);
					return structptr_116af0;
				})(); }
    get CharacterForward() { return (()=>{
					let structptr_0538ea = window.ctx.malloc(12);
					window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "get_CharacterForward", [structptr_0538ea, this.ptr]);
					return structptr_0538ea;
				})(); }
    get CharacterRight() { return (()=>{
					let structptr_ca8f01 = window.ctx.malloc(12);
					window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "get_CharacterRight", [structptr_ca8f01, this.ptr]);
					return structptr_ca8f01;
				})(); }
    get CharacterTransformToCapsuleBottom() { return (()=>{
					let structptr_c9683b = window.ctx.malloc(12);
					window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "get_CharacterTransformToCapsuleBottom", [structptr_c9683b, this.ptr]);
					return structptr_c9683b;
				})(); }
    get CharacterTransformToCapsuleBottomHemi() { return (()=>{
					let structptr_53332f = window.ctx.malloc(12);
					window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "get_CharacterTransformToCapsuleBottomHemi", [structptr_53332f, this.ptr]);
					return structptr_53332f;
				})(); }
    get CharacterTransformToCapsuleCenter() { return (()=>{
					let structptr_36c2c9 = window.ctx.malloc(12);
					window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "get_CharacterTransformToCapsuleCenter", [structptr_36c2c9, this.ptr]);
					return structptr_36c2c9;
				})(); }
    get CharacterTransformToCapsuleTop() { return (()=>{
					let structptr_00ce8a = window.ctx.malloc(12);
					window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "get_CharacterTransformToCapsuleTop", [structptr_00ce8a, this.ptr]);
					return structptr_00ce8a;
				})(); }
    get CharacterTransformToCapsuleTopHemi() { return (()=>{
					let structptr_7507ae = window.ctx.malloc(12);
					window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "get_CharacterTransformToCapsuleTopHemi", [structptr_7507ae, this.ptr]);
					return structptr_7507ae;
				})(); }
    get CharacterUp() { return (()=>{
					let structptr_ea77ad = window.ctx.malloc(12);
					window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "get_CharacterUp", [structptr_ea77ad, this.ptr]);
					return structptr_ea77ad;
				})(); }
    get InitialSimulationPosition() { return (()=>{
					let structptr_31fb51 = window.ctx.malloc(12);
					window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "get_InitialSimulationPosition", [structptr_31fb51, this.ptr]);
					return structptr_31fb51;
				})(); }
    get InitialSimulationRotation() { return (()=>{
					let structptr_4ca915 = window.ctx.malloc(16);
					window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "get_InitialSimulationRotation", [structptr_4ca915, this.ptr]);
					return structptr_4ca915;
				})(); }
    get Overlaps() { return window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "get_Overlaps", [this.ptr]); }
    get OverlapsCount() { return window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "get_OverlapsCount", [this.ptr]).val(); }
    get Transform() { return new Transform(window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "get_Transform", [this.ptr])); }
    get TransientPosition() { return (()=>{
					let structptr_a57663 = window.ctx.malloc(12);
					window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "get_TransientPosition", [structptr_a57663, this.ptr]);
					return structptr_a57663;
				})(); }
    get TransientRotation() { return (()=>{
					let structptr_6e0c45 = window.ctx.malloc(16);
					window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "get_TransientRotation", [structptr_6e0c45, this.ptr]);
					return structptr_6e0c45;
				})(); }
    set TransientRotation(v) { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "set_TransientRotation", [this.ptr, v]); }
    get Velocity() { return (()=>{
					let structptr_7196cc = window.ctx.malloc(12);
					window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "get_Velocity", [structptr_7196cc, this.ptr]);
					return structptr_7196cc;
				})(); }
    get AllowSteppingWithoutStableGrounding() { return this.ptr.readField(0x3C, 'i32').val() === 1; }
    set AllowSteppingWithoutStableGrounding(v) { return this.ptr.writeField(0x3C, 'i32', v); }
    get AttachedRigidbodyOverride() { return new Rigidbody(this.ptr.readField(0x1AC, 'i32')); }
    set AttachedRigidbodyOverride(v) { return this.ptr.writeField(0x1AC, 'i32', v); }
    get BaseVelocity() { return new Vector3(this.ptr.readField(0x1B0, 'i32')); }
    set BaseVelocity(v) { return this.ptr.writeField(0x1B0, 'i32', v); }
    get Capsule() { return new CapsuleCollider(this.ptr.readField(0x10, 'i32')); }
    set Capsule(v) { return this.ptr.writeField(0x10, 'i32', v); }
    get CapsuleHeight() { return this.ptr.readField(0x18, 'f32').val(); }
    set CapsuleHeight(v) { return this.ptr.writeField(0x18, 'f32', v); }
    get CapsulePhysicsMaterial() { return new PhysicsMaterial(this.ptr.readField(0x20, 'i32')); }
    set CapsulePhysicsMaterial(v) { return this.ptr.writeField(0x20, 'i32', v); }
    get CapsuleRadius() { return this.ptr.readField(0x14, 'f32').val(); }
    set CapsuleRadius(v) { return this.ptr.writeField(0x14, 'f32', v); }
    get CapsuleYOffset() { return this.ptr.readField(0x1C, 'f32').val(); }
    set CapsuleYOffset(v) { return this.ptr.writeField(0x1C, 'f32', v); }
    get CharacterController() { return new ICharacterController(this.ptr.readField(0x184, 'i32')); }
    set CharacterController(v) { return this.ptr.writeField(0x184, 'i32', v); }
    get CheckMovementInitialOverlaps() { return this.ptr.readField(0x78, 'i32').val() === 1; }
    set CheckMovementInitialOverlaps(v) { return this.ptr.writeField(0x78, 'i32', v); }
    get CollidableLayers() { return new LayerMask(this.ptr.readField(0xDC, 'i32')); }
    set CollidableLayers(v) { return this.ptr.writeField(0xDC, 'i32', v); }
    get DiscreteCollisionEvents() { return this.ptr.readField(0x30, 'i32').val() === 1; }
    set DiscreteCollisionEvents(v) { return this.ptr.writeField(0x30, 'i32', v); }
    get GroundDetectionExtraDistance() { return this.ptr.readField(0x24, 'f32').val(); }
    set GroundDetectionExtraDistance(v) { return this.ptr.writeField(0x24, 'f32', v); }
    get GroundingStatus() { return new CharacterGroundingReport(this.ptr.readField(0x7C, 'i32')); }
    set GroundingStatus(v) { return this.ptr.writeField(0x7C, 'i32', v); }
    get HasPlanarConstraint() { return this.ptr.readField(0x61, 'i32').val() === 1; }
    set HasPlanarConstraint(v) { return this.ptr.writeField(0x61, 'i32', v); }
    get IndexInCharacterSystem() { return this.ptr.readField(0x18C, 'i32').val(); }
    set IndexInCharacterSystem(v) { return this.ptr.writeField(0x18C, 'i32', v); }
    get InitialTickPosition() { return new Vector3(this.ptr.readField(0x190, 'i32')); }
    set InitialTickPosition(v) { return this.ptr.writeField(0x190, 'i32', v); }
    get InitialTickRotation() { return new Quaternion(this.ptr.readField(0x19C, 'i32')); }
    set InitialTickRotation(v) { return this.ptr.writeField(0x19C, 'i32', v); }
    get InteractiveRigidbodyHandling() { return this.ptr.readField(0x54, 'i32').val() === 1; }
    set InteractiveRigidbodyHandling(v) { return this.ptr.writeField(0x54, 'i32', v); }
    get KillRemainingMovementWhenExceedMaxMovementIterations() { return this.ptr.readField(0x7A, 'i32').val() === 1; }
    set KillRemainingMovementWhenExceedMaxMovementIterations(v) { return this.ptr.writeField(0x7A, 'i32', v); }
    get KillVelocityWhenExceedMaxMovementIterations() { return this.ptr.readField(0x79, 'i32').val() === 1; }
    set KillVelocityWhenExceedMaxMovementIterations(v) { return this.ptr.writeField(0x79, 'i32', v); }
    get LastGroundingStatus() { return new CharacterTransientGroundingReport(this.ptr.readField(0xB4, 'i32')); }
    set LastGroundingStatus(v) { return this.ptr.writeField(0xB4, 'i32', v); }
    get LastMovementIterationFoundAnyGround() { return this.ptr.readField(0x188, 'i32').val() === 1; }
    set LastMovementIterationFoundAnyGround(v) { return this.ptr.writeField(0x188, 'i32', v); }
    get LedgeAndDenivelationHandling() { return this.ptr.readField(0x44, 'i32').val() === 1; }
    set LedgeAndDenivelationHandling(v) { return this.ptr.writeField(0x44, 'i32', v); }
    get MaxDecollisionIterations() { return this.ptr.readField(0x74, 'i32').val(); }
    set MaxDecollisionIterations(v) { return this.ptr.writeField(0x74, 'i32', v); }
    get MaxMovementIterations() { return this.ptr.readField(0x70, 'i32').val(); }
    set MaxMovementIterations(v) { return this.ptr.writeField(0x70, 'i32', v); }
    get MaxStableDenivelationAngle() { return this.ptr.readField(0x50, 'f32').val(); }
    set MaxStableDenivelationAngle(v) { return this.ptr.writeField(0x50, 'f32', v); }
    get MaxStableDistanceFromLedge() { return this.ptr.readField(0x48, 'f32').val(); }
    set MaxStableDistanceFromLedge(v) { return this.ptr.writeField(0x48, 'f32', v); }
    get MaxStableSlopeAngle() { return this.ptr.readField(0x28, 'f32').val(); }
    set MaxStableSlopeAngle(v) { return this.ptr.writeField(0x28, 'f32', v); }
    get MaxStepHeight() { return this.ptr.readField(0x38, 'f32').val(); }
    set MaxStepHeight(v) { return this.ptr.writeField(0x38, 'f32', v); }
    get MaxVelocityForLedgeSnap() { return this.ptr.readField(0x4C, 'f32').val(); }
    set MaxVelocityForLedgeSnap(v) { return this.ptr.writeField(0x4C, 'f32', v); }
    get MinRequiredStepDepth() { return this.ptr.readField(0x40, 'f32').val(); }
    set MinRequiredStepDepth(v) { return this.ptr.writeField(0x40, 'f32', v); }
    get PlanarConstraintAxis() { return new Vector3(this.ptr.readField(0x64, 'i32')); }
    set PlanarConstraintAxis(v) { return this.ptr.writeField(0x64, 'i32', v); }
    get PreserveAttachedRigidbodyMomentum() { return this.ptr.readField(0x60, 'i32').val() === 1; }
    set PreserveAttachedRigidbodyMomentum(v) { return this.ptr.writeField(0x60, 'i32', v); }
    get RigidbodyInteractionType() { return new RigidbodyInteractionType(this.ptr.readField(0x58, 'i32')); }
    set RigidbodyInteractionType(v) { return this.ptr.writeField(0x58, 'i32', v); }
    get SimulatedCharacterMass() { return this.ptr.readField(0x5C, 'f32').val(); }
    set SimulatedCharacterMass(v) { return this.ptr.writeField(0x5C, 'f32', v); }
    get StableGroundLayers() { return new LayerMask(this.ptr.readField(0x2C, 'i32')); }
    set StableGroundLayers(v) { return this.ptr.writeField(0x2C, 'i32', v); }
    get StepHandling() { return new StepHandlingMethod(this.ptr.readField(0x34, 'i32')); }
    set StepHandling(v) { return this.ptr.writeField(0x34, 'i32', v); }
    get _attachedRigidbody() { return new Rigidbody(this.ptr.readField(0x130, 'i32')); }
    set _attachedRigidbody(v) { return this.ptr.writeField(0x130, 'i32', v); }
    get _attachedRigidbodyVelocity() { return new Vector3(this.ptr.readField(0x170, 'i32')); }
    set _attachedRigidbodyVelocity(v) { return this.ptr.writeField(0x170, 'i32', v); }
    get _cachedWorldForward() { return new Vector3(this.ptr.readField(0x208, 'i32')); }
    set _cachedWorldForward(v) { return this.ptr.writeField(0x208, 'i32', v); }
    get _cachedWorldRight() { return new Vector3(this.ptr.readField(0x214, 'i32')); }
    set _cachedWorldRight(v) { return this.ptr.writeField(0x214, 'i32', v); }
    get _cachedWorldUp() { return new Vector3(this.ptr.readField(0x1FC, 'i32')); }
    set _cachedWorldUp(v) { return this.ptr.writeField(0x1FC, 'i32', v); }
    get _cachedZeroVector() { return new Vector3(this.ptr.readField(0x220, 'i32')); }
    set _cachedZeroVector(v) { return this.ptr.writeField(0x220, 'i32', v); }
    get _characterForward() { return new Vector3(this.ptr.readField(0xFC, 'i32')); }
    set _characterForward(v) { return this.ptr.writeField(0xFC, 'i32', v); }
    get _characterRight() { return new Vector3(this.ptr.readField(0x108, 'i32')); }
    set _characterRight(v) { return this.ptr.writeField(0x108, 'i32', v); }
    get _characterTransformToCapsuleBottom() { return new Vector3(this.ptr.readField(0x140, 'i32')); }
    set _characterTransformToCapsuleBottom(v) { return this.ptr.writeField(0x140, 'i32', v); }
    get _characterTransformToCapsuleBottomHemi() { return new Vector3(this.ptr.readField(0x158, 'i32')); }
    set _characterTransformToCapsuleBottomHemi(v) { return this.ptr.writeField(0x158, 'i32', v); }
    get _characterTransformToCapsuleCenter() { return new Vector3(this.ptr.readField(0x134, 'i32')); }
    set _characterTransformToCapsuleCenter(v) { return this.ptr.writeField(0x134, 'i32', v); }
    get _characterTransformToCapsuleTop() { return new Vector3(this.ptr.readField(0x14C, 'i32')); }
    set _characterTransformToCapsuleTop(v) { return this.ptr.writeField(0x14C, 'i32', v); }
    get _characterTransformToCapsuleTopHemi() { return new Vector3(this.ptr.readField(0x164, 'i32')); }
    set _characterTransformToCapsuleTopHemi(v) { return this.ptr.writeField(0x164, 'i32', v); }
    get _characterUp() { return new Vector3(this.ptr.readField(0xF0, 'i32')); }
    set _characterUp(v) { return this.ptr.writeField(0xF0, 'i32', v); }
    get _initialSimulationPosition() { return new Vector3(this.ptr.readField(0x114, 'i32')); }
    set _initialSimulationPosition(v) { return this.ptr.writeField(0x114, 'i32', v); }
    get _initialSimulationRotation() { return new Quaternion(this.ptr.readField(0x120, 'i32')); }
    set _initialSimulationRotation(v) { return this.ptr.writeField(0x120, 'i32', v); }
    get _internalCharacterHits() { return JSArray(this.ptr.readField(0x1BC, 'i32')); }
    set _internalCharacterHits(v) { return this.ptr.writeField(0x1BC, 'i32', v); }
    get _internalProbedColliders() { return JSArray(this.ptr.readField(0x1C0, 'i32')); }
    set _internalProbedColliders(v) { return this.ptr.writeField(0x1C0, 'i32', v); }
    get _internalRigidbodyProjectionHits() { return JSArray(this.ptr.readField(0x1C8, 'i32')); }
    set _internalRigidbodyProjectionHits(v) { return this.ptr.writeField(0x1C8, 'i32', v); }
    get _isMovingFromAttachedRigidbody() { return this.ptr.readField(0x1F4, 'i32').val() === 1; }
    set _isMovingFromAttachedRigidbody(v) { return this.ptr.writeField(0x1F4, 'i32', v); }
    get _lastAttachedRigidbody() { return new Rigidbody(this.ptr.readField(0x1CC, 'i32')); }
    set _lastAttachedRigidbody(v) { return this.ptr.writeField(0x1CC, 'i32', v); }
    get _lastSolvedOverlapNormal() { return new Vector3(this.ptr.readField(0x1E4, 'i32')); }
    set _lastSolvedOverlapNormal(v) { return this.ptr.writeField(0x1E4, 'i32', v); }
    get _lastSolvedOverlapNormalDirty() { return this.ptr.readField(0x1E0, 'i32').val() === 1; }
    set _lastSolvedOverlapNormalDirty(v) { return this.ptr.writeField(0x1E0, 'i32', v); }
    get _movePositionDirty() { return this.ptr.readField(0x1D2, 'i32').val() === 1; }
    set _movePositionDirty(v) { return this.ptr.writeField(0x1D2, 'i32', v); }
    get _movePositionTarget() { return new Vector3(this.ptr.readField(0x1D4, 'i32')); }
    set _movePositionTarget(v) { return this.ptr.writeField(0x1D4, 'i32', v); }
    get _mustUnground() { return this.ptr.readField(0x1F5, 'i32').val() === 1; }
    set _mustUnground(v) { return this.ptr.writeField(0x1F5, 'i32', v); }
    get _mustUngroundTimeCounter() { return this.ptr.readField(0x1F8, 'f32').val(); }
    set _mustUngroundTimeCounter(v) { return this.ptr.writeField(0x1F8, 'f32', v); }
    get _overlaps() { return JSArray(this.ptr.readField(0x180, 'i32')); }
    set _overlaps(v) { return this.ptr.writeField(0x180, 'i32', v); }
    get _overlapsCount() { return this.ptr.readField(0x17C, 'i32').val(); }
    set _overlapsCount(v) { return this.ptr.writeField(0x17C, 'i32', v); }
    get _rigidbodiesPushedThisMove() { return this.ptr.readField(0x1C4, 'i32'); }
    set _rigidbodiesPushedThisMove(v) { return this.ptr.writeField(0x1C4, 'i32', v); }
    get _rigidbodyProjectionHitCount() { return this.ptr.readField(0x1F0, 'i32').val(); }
    set _rigidbodyProjectionHitCount(v) { return this.ptr.writeField(0x1F0, 'i32', v); }
    get _solveGrounding() { return this.ptr.readField(0x1D1, 'i32').val() === 1; }
    set _solveGrounding(v) { return this.ptr.writeField(0x1D1, 'i32', v); }
    get _solveMovementCollisions() { return this.ptr.readField(0x1D0, 'i32').val() === 1; }
    set _solveMovementCollisions(v) { return this.ptr.writeField(0x1D0, 'i32', v); }
    get _transform() { return new Transform(this.ptr.readField(0xE0, 'i32')); }
    set _transform(v) { return this.ptr.writeField(0xE0, 'i32', v); }
    get _transientPosition() { return new Vector3(this.ptr.readField(0xE4, 'i32')); }
    set _transientPosition(v) { return this.ptr.writeField(0xE4, 'i32', v); }
    get _transientRotation() { return new Quaternion(this.ptr.readField(0x22C, 'i32')); }
    set _transientRotation(v) { return this.ptr.writeField(0x22C, 'i32', v); }
    ApplyState(state, bypassInterpolation) { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "ApplyState", [this.ptr, state, bypassInterpolation]); }
    Awake() { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "Awake", [this.ptr]); }
    CharacterCollisionsOverlap(position, rotation, overlappedColliders, inflate, acceptOnlyStableGroundLayer) { return window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "CharacterCollisionsOverlap", [this.ptr, position, rotation, overlappedColliders, inflate, acceptOnlyStableGroundLayer]).val(); }
    CharacterCollisionsRaycast(position, direction, distance, closestHit, hits, acceptOnlyStableGroundLayer) { return window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "CharacterCollisionsRaycast", [this.ptr, position, direction, distance, closestHit, hits, acceptOnlyStableGroundLayer]).val(); }
    CharacterCollisionsSweep(position, rotation, direction, distance, closestHit, hits, inflate, acceptOnlyStableGroundLayer) { return window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "CharacterCollisionsSweep", [this.ptr, position, rotation, direction, distance, closestHit, hits, inflate, acceptOnlyStableGroundLayer]).val(); }
    CharacterGroundSweep(position, rotation, direction, distance, closestHit) { return window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "CharacterGroundSweep", [this.ptr, position, rotation, direction, distance, closestHit]).val() === 1; }
    CharacterOverlap(position, rotation, overlappedColliders, layers, triggerInteraction, inflate) { return window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "CharacterOverlap", [this.ptr, position, rotation, overlappedColliders, layers, triggerInteraction, inflate]).val(); }
    CharacterSweep(position, rotation, direction, distance, closestHit, hits, layers, triggerInteraction, inflate) { return window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "CharacterSweep", [this.ptr, position, rotation, direction, distance, closestHit, hits, layers, triggerInteraction, inflate]).val(); }
    CheckIfColliderValidForCollisions(coll) { return window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "CheckIfColliderValidForCollisions", [this.ptr, coll]).val() === 1; }
    CheckStepValidity(nbStepHits, characterPosition, characterRotation, innerHitDirection, stepCheckStartPos, hitCollider) { return window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "CheckStepValidity", [this.ptr, nbStepHits, characterPosition, characterRotation, innerHitDirection, stepCheckStartPos, hitCollider]).val() === 1; }
    ComputeCollisionResolutionForHitBody(hitNormal, characterVelocity, bodyVelocity, characterToBodyMassRatio, velocityChangeOnCharacter, velocityChangeOnBody) { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "ComputeCollisionResolutionForHitBody", [this.ptr, hitNormal, characterVelocity, bodyVelocity, characterToBodyMassRatio, velocityChangeOnCharacter, velocityChangeOnBody]); }
    DetectSteps(characterPosition, characterRotation, hitPoint, innerHitDirection, stabilityReport) { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "DetectSteps", [this.ptr, characterPosition, characterRotation, hitPoint, innerHitDirection, stabilityReport]); }
    EvaluateCrease(currentCharacterVelocity, previousCharacterVelocity, currentHitNormal, previousHitNormal, currentHitIsStable, previousHitIsStable, characterIsStable, isValidCrease, creaseDirection) { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "EvaluateCrease", [this.ptr, currentCharacterVelocity, previousCharacterVelocity, currentHitNormal, previousHitNormal, currentHitIsStable, previousHitIsStable, characterIsStable, isValidCrease, creaseDirection]); }
    EvaluateHitStability(hitCollider, hitNormal, hitPoint, atCharacterPosition, atCharacterRotation, withCharacterVelocity, stabilityReport) { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "EvaluateHitStability", [this.ptr, hitCollider, hitNormal, hitPoint, atCharacterPosition, atCharacterRotation, withCharacterVelocity, stabilityReport]); }
    ForceUnground(time) { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "ForceUnground", [this.ptr, time]); }
    GetDirectionTangentToSurface(direction, surfaceNormal) { return (()=>{
					let structptr_883d9f = window.ctx.malloc(12);
					window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "GetDirectionTangentToSurface", [structptr_883d9f, this.ptr, direction, surfaceNormal]);
					return structptr_883d9f;
				})(); }
    GetInteractiveRigidbody(onCollider) { return new Rigidbody(window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "GetInteractiveRigidbody", [this.ptr, onCollider])); }
    GetObstructionNormal(hitNormal, stableOnHit) { return (()=>{
					let structptr_5a599c = window.ctx.malloc(12);
					window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "GetObstructionNormal", [structptr_5a599c, this.ptr, hitNormal, stableOnHit]);
					return structptr_5a599c;
				})(); }
    GetState() { return (()=>{
					let structptr_e3b5bf = window.ctx.malloc(50);
					window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "GetState", [structptr_e3b5bf, this.ptr]);
					return structptr_e3b5bf;
				})(); }
    GetVelocityForMovePosition(fromPosition, toPosition, deltaTime) { return (()=>{
					let structptr_447643 = window.ctx.malloc(12);
					window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "GetVelocityForMovePosition", [structptr_447643, this.ptr, fromPosition, toPosition, deltaTime]);
					return structptr_447643;
				})(); }
    GetVelocityFromMovement(movement, deltaTime) { return (()=>{
					let structptr_9d11a8 = window.ctx.malloc(12);
					window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "GetVelocityFromMovement", [structptr_9d11a8, this.ptr, movement, deltaTime]);
					return structptr_9d11a8;
				})(); }
    GetVelocityFromRigidbodyMovement(interactiveRigidbody, atPoint, deltaTime, linearVelocity, angularVelocity) { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "GetVelocityFromRigidbodyMovement", [this.ptr, interactiveRigidbody, atPoint, deltaTime, linearVelocity, angularVelocity]); }
    HandleRemoveComponent() { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "HandleRemoveComponent", [this.ptr]); }
    HandleSimulatedRigidbodyInteraction(processedVelocity, hit, deltaTime) { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "HandleSimulatedRigidbodyInteraction", [this.ptr, processedVelocity, hit, deltaTime]); }
    HandleVelocityProjection(velocity, obstructionNormal, stableOnHit) { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "HandleVelocityProjection", [this.ptr, velocity, obstructionNormal, stableOnHit]); }
    InternalCharacterMove(transientVelocity, deltaTime) { return window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "InternalCharacterMove", [this.ptr, transientVelocity, deltaTime]).val() === 1; }
    InternalHandleVelocityProjection(stableOnHit, hitNormal, obstructionNormal, originalDirection, sweepState, previousHitIsStable, previousVelocity, previousObstructionNormal, transientVelocity, remainingMovementMagnitude, remainingMovementDirection) { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "InternalHandleVelocityProjection", [this.ptr, stableOnHit, hitNormal, obstructionNormal, originalDirection, sweepState, previousHitIsStable, previousVelocity, previousObstructionNormal, transientVelocity, remainingMovementMagnitude, remainingMovementDirection]); }
    InternalIsColliderValidForCollisions(coll) { return window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "InternalIsColliderValidForCollisions", [this.ptr, coll]).val() === 1; }
    IsStableOnNormal(normal) { return window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "IsStableOnNormal", [this.ptr, normal]).val() === 1; }
    IsStableWithSpecialCases(stabilityReport, velocity) { return window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "IsStableWithSpecialCases", [this.ptr, stabilityReport, velocity]).val() === 1; }
    MoveCharacter(toPosition) { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "MoveCharacter", [this.ptr, toPosition]); }
    MustUnground() { return window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "MustUnground", [this.ptr]).val() === 1; }
    OnDisable() { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "OnDisable", [this.ptr]); }
    OnEnable() { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "OnEnable", [this.ptr]); }
    OnValidate() { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "OnValidate", [this.ptr]); }
    ProbeGround(probingPosition, atRotation, probingDistance, groundingReport) { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "ProbeGround", [this.ptr, probingPosition, atRotation, probingDistance, groundingReport]); }
    ProcessVelocityForRigidbodyHits(processedVelocity, deltaTime) { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "ProcessVelocityForRigidbodyHits", [this.ptr, processedVelocity, deltaTime]); }
    Reset() { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "Reset", [this.ptr]); }
    RestrictVectorToPlane(vector, toPlane) { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "RestrictVectorToPlane", [this.ptr, vector, toPlane]); }
    SetCapsuleCollisionsActivation(collisionsActive) { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "SetCapsuleCollisionsActivation", [this.ptr, collisionsActive]); }
    SetCapsuleDimensions(radius, height, yOffset) { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "SetCapsuleDimensions", [this.ptr, radius, height, yOffset]); }
    SetGroundSolvingActivation(stabilitySolvingActive) { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "SetGroundSolvingActivation", [this.ptr, stabilitySolvingActive]); }
    SetMovementCollisionsSolvingActivation(movementCollisionsSolvingActive) { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "SetMovementCollisionsSolvingActivation", [this.ptr, movementCollisionsSolvingActive]); }
    SetPosition(position, bypassInterpolation) { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "SetPosition", [this.ptr, position, bypassInterpolation]); }
    SetPositionAndRotation(position, rotation, bypassInterpolation) { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "SetPositionAndRotation", [this.ptr, position, rotation, bypassInterpolation]); }
    SetTransientPosition(newPos) { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "SetTransientPosition", [this.ptr, newPos]); }
    StoreRigidbodyHit(hitRigidbody, hitVelocity, hitPoint, obstructionNormal, hitStabilityReport) { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "StoreRigidbodyHit", [this.ptr, hitRigidbody, hitVelocity, hitPoint, obstructionNormal, hitStabilityReport]); }
    Update() { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "Update", [this.ptr]); }
    UpdatePhase1(deltaTime) { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "UpdatePhase1", [this.ptr, deltaTime]); }
    UpdatePhase2(deltaTime) { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "UpdatePhase2", [this.ptr, deltaTime]); }
    ValidateData() { window.ctx.call("KinematicCharacterController.KinematicCharacterMotor", "ValidateData", [this.ptr]); }
}

export class Shaker {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get GlobalShakers() { return this.ptr.readField(0x0, 'i32'); }
    set GlobalShakers(v) { return this.ptr.writeField(0x0, 'i32', v); }
    get activeShakes() { return this.ptr.readField(0x14, 'i32'); }
    set activeShakes(v) { return this.ptr.writeField(0x14, 'i32', v); }
    get addToGlobalShakers() { return this.ptr.readField(0x10, 'i32').val() === 1; }
    set addToGlobalShakers(v) { return this.ptr.writeField(0x10, 'i32', v); }
    AddShake(shakeInstance) { window.ctx.call("MilkShake.Shaker", "AddShake", [this.ptr, shakeInstance]); }
    static AddShakeAll(shakeInstance) { window.ctx.call("MilkShake.Shaker", "AddShakeAll", [shakeInstance]); }
    Awake() { window.ctx.call("MilkShake.Shaker", "Awake", [this.ptr]); }
    OnDestroy() { window.ctx.call("MilkShake.Shaker", "OnDestroy", [this.ptr]); }
    Shake(shakeData, seed) { return new ShakeInstance(window.ctx.call("MilkShake.Shaker", "Shake", [this.ptr, shakeData, seed])); }
    static ShakeAll(shakeData, seed) { return new ShakeInstance(window.ctx.call("MilkShake.Shaker", "ShakeAll", [shakeData, seed])); }
    static ShakeAllFromPoint(point, maxDistance, shakeData, shakeInstances, seed) { window.ctx.call("MilkShake.Shaker", "ShakeAllFromPoint", [point, maxDistance, shakeData, shakeInstances, seed]); }
    static ShakeAllSeparate(shakeData, shakeInstances, seed) { window.ctx.call("MilkShake.Shaker", "ShakeAllSeparate", [shakeData, shakeInstances, seed]); }
    ShakeFromPoint(point, maxDistance, shakeData, seed) { return new ShakeInstance(window.ctx.call("MilkShake.Shaker", "ShakeFromPoint", [this.ptr, point, maxDistance, shakeData, seed])); }
    Update() { window.ctx.call("MilkShake.Shaker", "Update", [this.ptr]); }
}

export class Shot {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get byId() { return this.ptr.readField(0x10, 'i32').mstr(); }
    set byId(v) { return this.ptr.writeField(0x10, 'i32', window.ctx.createMstr(v)); }
    get gunId() { return this.ptr.readField(0x14, 'i32'); }
    set gunId(v) { return this.ptr.writeField(0x14, 'i32', v); }
}

export class ColyRigid {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get air() { return this.ptr.readField(0x18, 'i32').val() === 1; }
    set air(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get neck() { return this.ptr.readField(0x19, 'i32'); }
    set neck(v) { return this.ptr.writeField(0x19, 'i32', v); }
    get position() { return new ColyVector3(this.ptr.readField(0x10, 'i32')); }
    set position(v) { return this.ptr.writeField(0x10, 'i32', v); }
    get rotationY() { return this.ptr.readField(0x14, 'f32').val(); }
    set rotationY(v) { return this.ptr.writeField(0x14, 'f32', v); }
}

export class PublicUserData {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get createdAt() { return this.ptr.readField(0x18, 'i32').mstr(); }
    set createdAt(v) { return this.ptr.writeField(0x18, 'i32', window.ctx.createMstr(v)); }
    get pfp() { return this.ptr.readField(0x14, 'i32').mstr(); }
    set pfp(v) { return this.ptr.writeField(0x14, 'i32', window.ctx.createMstr(v)); }
    get username() { return this.ptr.readField(0x10, 'i32').mstr(); }
    set username(v) { return this.ptr.writeField(0x10, 'i32', window.ctx.createMstr(v)); }
}

export class ColyVector3 {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get x() { return this.ptr.readField(0x10, 'f32').val(); }
    set x(v) { return this.ptr.writeField(0x10, 'f32', v); }
    get y() { return this.ptr.readField(0x14, 'f32').val(); }
    set y(v) { return this.ptr.writeField(0x14, 'f32', v); }
    get z() { return this.ptr.readField(0x18, 'f32').val(); }
    set z(v) { return this.ptr.writeField(0x18, 'f32', v); }
}

export class TrailRenderer {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get alignment() { return new LineAlignment(window.ctx.call("UnityEngine.TrailRenderer", "get_alignment", [this.ptr])); }
    set alignment(v) { window.ctx.call("UnityEngine.TrailRenderer", "set_alignment", [this.ptr, v]); }
    get applyActiveColorSpace() { return window.ctx.call("UnityEngine.TrailRenderer", "get_applyActiveColorSpace", [this.ptr]).val() === 1; }
    set applyActiveColorSpace(v) { window.ctx.call("UnityEngine.TrailRenderer", "set_applyActiveColorSpace", [this.ptr, v]); }
    get autodestruct() { return window.ctx.call("UnityEngine.TrailRenderer", "get_autodestruct", [this.ptr]).val() === 1; }
    set autodestruct(v) { window.ctx.call("UnityEngine.TrailRenderer", "set_autodestruct", [this.ptr, v]); }
    get colorGradient() { return new Gradient(window.ctx.call("UnityEngine.TrailRenderer", "get_colorGradient", [this.ptr])); }
    set colorGradient(v) { window.ctx.call("UnityEngine.TrailRenderer", "set_colorGradient", [this.ptr, v]); }
    get emitting() { return window.ctx.call("UnityEngine.TrailRenderer", "get_emitting", [this.ptr]).val() === 1; }
    set emitting(v) { window.ctx.call("UnityEngine.TrailRenderer", "set_emitting", [this.ptr, v]); }
    get endColor() { return (()=>{
					let structptr_4cc957 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.TrailRenderer", "get_endColor", [structptr_4cc957, this.ptr]);
					return structptr_4cc957;
				})(); }
    set endColor(v) { window.ctx.call("UnityEngine.TrailRenderer", "set_endColor", [this.ptr, v]); }
    get endWidth() { return window.ctx.call("UnityEngine.TrailRenderer", "get_endWidth", [this.ptr]).val(); }
    set endWidth(v) { window.ctx.call("UnityEngine.TrailRenderer", "set_endWidth", [this.ptr, v]); }
    get generateLightingData() { return window.ctx.call("UnityEngine.TrailRenderer", "get_generateLightingData", [this.ptr]).val() === 1; }
    set generateLightingData(v) { window.ctx.call("UnityEngine.TrailRenderer", "set_generateLightingData", [this.ptr, v]); }
    get maskInteraction() { return new SpriteMaskInteraction(window.ctx.call("UnityEngine.TrailRenderer", "get_maskInteraction", [this.ptr])); }
    set maskInteraction(v) { window.ctx.call("UnityEngine.TrailRenderer", "set_maskInteraction", [this.ptr, v]); }
    get minVertexDistance() { return window.ctx.call("UnityEngine.TrailRenderer", "get_minVertexDistance", [this.ptr]).val(); }
    set minVertexDistance(v) { window.ctx.call("UnityEngine.TrailRenderer", "set_minVertexDistance", [this.ptr, v]); }
    get numCapVertices() { return window.ctx.call("UnityEngine.TrailRenderer", "get_numCapVertices", [this.ptr]).val(); }
    set numCapVertices(v) { window.ctx.call("UnityEngine.TrailRenderer", "set_numCapVertices", [this.ptr, v]); }
    get numCornerVertices() { return window.ctx.call("UnityEngine.TrailRenderer", "get_numCornerVertices", [this.ptr]).val(); }
    set numCornerVertices(v) { window.ctx.call("UnityEngine.TrailRenderer", "set_numCornerVertices", [this.ptr, v]); }
    get numPositions() { return window.ctx.call("UnityEngine.TrailRenderer", "get_numPositions", [this.ptr]).val(); }
    get positionCount() { return window.ctx.call("UnityEngine.TrailRenderer", "get_positionCount", [this.ptr]).val(); }
    get shadowBias() { return window.ctx.call("UnityEngine.TrailRenderer", "get_shadowBias", [this.ptr]).val(); }
    set shadowBias(v) { window.ctx.call("UnityEngine.TrailRenderer", "set_shadowBias", [this.ptr, v]); }
    get startColor() { return (()=>{
					let structptr_b82752 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.TrailRenderer", "get_startColor", [structptr_b82752, this.ptr]);
					return structptr_b82752;
				})(); }
    set startColor(v) { window.ctx.call("UnityEngine.TrailRenderer", "set_startColor", [this.ptr, v]); }
    get startWidth() { return window.ctx.call("UnityEngine.TrailRenderer", "get_startWidth", [this.ptr]).val(); }
    set startWidth(v) { window.ctx.call("UnityEngine.TrailRenderer", "set_startWidth", [this.ptr, v]); }
    get textureMode() { return new LineTextureMode(window.ctx.call("UnityEngine.TrailRenderer", "get_textureMode", [this.ptr])); }
    set textureMode(v) { window.ctx.call("UnityEngine.TrailRenderer", "set_textureMode", [this.ptr, v]); }
    get textureScale() { return (()=>{
					let structptr_8761ed = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.TrailRenderer", "get_textureScale", [structptr_8761ed, this.ptr]);
					return structptr_8761ed;
				})(); }
    set textureScale(v) { window.ctx.call("UnityEngine.TrailRenderer", "set_textureScale", [this.ptr, v]); }
    get time() { return window.ctx.call("UnityEngine.TrailRenderer", "get_time", [this.ptr]).val(); }
    set time(v) { window.ctx.call("UnityEngine.TrailRenderer", "set_time", [this.ptr, v]); }
    get widthCurve() { return new AnimationCurve(window.ctx.call("UnityEngine.TrailRenderer", "get_widthCurve", [this.ptr])); }
    set widthCurve(v) { window.ctx.call("UnityEngine.TrailRenderer", "set_widthCurve", [this.ptr, v]); }
    get widthMultiplier() { return window.ctx.call("UnityEngine.TrailRenderer", "get_widthMultiplier", [this.ptr]).val(); }
    set widthMultiplier(v) { window.ctx.call("UnityEngine.TrailRenderer", "set_widthMultiplier", [this.ptr, v]); }
    AddPosition(position) { window.ctx.call("UnityEngine.TrailRenderer", "AddPosition", [this.ptr, position]); }
    static AddPosition_Injected(_unity_self, position) { window.ctx.call("UnityEngine.TrailRenderer", "AddPosition_Injected", [_unity_self, position]); }
    AddPositions_positions(positions) { window.ctx.call("UnityEngine.TrailRenderer", "AddPositions_19677", [this.ptr, positions]); }
    AddPositions_positions(positions) { window.ctx.call("UnityEngine.TrailRenderer", "AddPositions_19684", [this.ptr, positions]); }
    AddPositions_positions(positions) { window.ctx.call("UnityEngine.TrailRenderer", "AddPositions_19685", [this.ptr, positions]); }
    AddPositionsWithNativeContainer(positions, length) { window.ctx.call("UnityEngine.TrailRenderer", "AddPositionsWithNativeContainer", [this.ptr, positions, length]); }
    static AddPositionsWithNativeContainer_Injected(_unity_self, positions, length) { window.ctx.call("UnityEngine.TrailRenderer", "AddPositionsWithNativeContainer_Injected", [_unity_self, positions, length]); }
    static AddPositions_Injected(_unity_self, positions) { window.ctx.call("UnityEngine.TrailRenderer", "AddPositions_Injected", [_unity_self, positions]); }
    BakeMesh_mesh_useTransform(mesh, useTransform) { window.ctx.call("UnityEngine.TrailRenderer", "BakeMesh_19663", [this.ptr, mesh, useTransform]); }
    BakeMesh_mesh_camera_useTransform(mesh, camera, useTransform) { window.ctx.call("UnityEngine.TrailRenderer", "BakeMesh_19664", [this.ptr, mesh, camera, useTransform]); }
    static BakeMesh_Injected(_unity_self, mesh, camera, useTransform) { window.ctx.call("UnityEngine.TrailRenderer", "BakeMesh_Injected", [_unity_self, mesh, camera, useTransform]); }
    Clear() { window.ctx.call("UnityEngine.TrailRenderer", "Clear", [this.ptr]); }
    static Clear_Injected(_unity_self) { window.ctx.call("UnityEngine.TrailRenderer", "Clear_Injected", [_unity_self]); }
    GetColorGradientCopy() { return new Gradient(window.ctx.call("UnityEngine.TrailRenderer", "GetColorGradientCopy", [this.ptr])); }
    static GetColorGradientCopy_Injected(_unity_self) { return (()=>{
					let structptr_a8090e = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.TrailRenderer", "GetColorGradientCopy_Injected", [structptr_a8090e, _unity_self]);
					return structptr_a8090e;
				})(); }
    GetPosition(index) { return (()=>{
					let structptr_66f7ba = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.TrailRenderer", "GetPosition", [structptr_66f7ba, this.ptr, index]);
					return structptr_66f7ba;
				})(); }
    static GetPosition_Injected(_unity_self, index, ret) { window.ctx.call("UnityEngine.TrailRenderer", "GetPosition_Injected", [_unity_self, index, ret]); }
    GetPositions_positions(positions) { return window.ctx.call("UnityEngine.TrailRenderer", "GetPositions_19673", [this.ptr, positions]).val(); }
    GetPositions_positions(positions) { return window.ctx.call("UnityEngine.TrailRenderer", "GetPositions_19680", [this.ptr, positions]).val(); }
    GetPositions_positions(positions) { return window.ctx.call("UnityEngine.TrailRenderer", "GetPositions_19681", [this.ptr, positions]).val(); }
    GetPositionsWithNativeContainer(positions, length) { return window.ctx.call("UnityEngine.TrailRenderer", "GetPositionsWithNativeContainer", [this.ptr, positions, length]).val(); }
    static GetPositionsWithNativeContainer_Injected(_unity_self, positions, length) { return window.ctx.call("UnityEngine.TrailRenderer", "GetPositionsWithNativeContainer_Injected", [_unity_self, positions, length]).val(); }
    static GetPositions_Injected(_unity_self, positions) { return window.ctx.call("UnityEngine.TrailRenderer", "GetPositions_Injected", [_unity_self, positions]).val(); }
    GetVisiblePositions_positions(positions) { return window.ctx.call("UnityEngine.TrailRenderer", "GetVisiblePositions_19674", [this.ptr, positions]).val(); }
    GetVisiblePositions_positions(positions) { return window.ctx.call("UnityEngine.TrailRenderer", "GetVisiblePositions_19682", [this.ptr, positions]).val(); }
    GetVisiblePositions_positions(positions) { return window.ctx.call("UnityEngine.TrailRenderer", "GetVisiblePositions_19683", [this.ptr, positions]).val(); }
    GetVisiblePositionsWithNativeContainer(positions, length) { return window.ctx.call("UnityEngine.TrailRenderer", "GetVisiblePositionsWithNativeContainer", [this.ptr, positions, length]).val(); }
    static GetVisiblePositionsWithNativeContainer_Injected(_unity_self, positions, length) { return window.ctx.call("UnityEngine.TrailRenderer", "GetVisiblePositionsWithNativeContainer_Injected", [_unity_self, positions, length]).val(); }
    static GetVisiblePositions_Injected(_unity_self, positions) { return window.ctx.call("UnityEngine.TrailRenderer", "GetVisiblePositions_Injected", [_unity_self, positions]).val(); }
    GetWidthCurveCopy() { return new AnimationCurve(window.ctx.call("UnityEngine.TrailRenderer", "GetWidthCurveCopy", [this.ptr])); }
    static GetWidthCurveCopy_Injected(_unity_self) { return (()=>{
					let structptr_eb2749 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.TrailRenderer", "GetWidthCurveCopy_Injected", [structptr_eb2749, _unity_self]);
					return structptr_eb2749;
				})(); }
    SetColorGradient(curve) { window.ctx.call("UnityEngine.TrailRenderer", "SetColorGradient", [this.ptr, curve]); }
    static SetColorGradient_Injected(_unity_self, curve) { window.ctx.call("UnityEngine.TrailRenderer", "SetColorGradient_Injected", [_unity_self, curve]); }
    SetPosition(index, position) { window.ctx.call("UnityEngine.TrailRenderer", "SetPosition", [this.ptr, index, position]); }
    static SetPosition_Injected(_unity_self, index, position) { window.ctx.call("UnityEngine.TrailRenderer", "SetPosition_Injected", [_unity_self, index, position]); }
    SetPositions_positions(positions) { window.ctx.call("UnityEngine.TrailRenderer", "SetPositions_19675", [this.ptr, positions]); }
    SetPositions_positions(positions) { window.ctx.call("UnityEngine.TrailRenderer", "SetPositions_19678", [this.ptr, positions]); }
    SetPositions_positions(positions) { window.ctx.call("UnityEngine.TrailRenderer", "SetPositions_19679", [this.ptr, positions]); }
    SetPositionsWithNativeContainer(positions, count) { window.ctx.call("UnityEngine.TrailRenderer", "SetPositionsWithNativeContainer", [this.ptr, positions, count]); }
    static SetPositionsWithNativeContainer_Injected(_unity_self, positions, count) { window.ctx.call("UnityEngine.TrailRenderer", "SetPositionsWithNativeContainer_Injected", [_unity_self, positions, count]); }
    static SetPositions_Injected(_unity_self, positions) { window.ctx.call("UnityEngine.TrailRenderer", "SetPositions_Injected", [_unity_self, positions]); }
    SetWidthCurve(curve) { window.ctx.call("UnityEngine.TrailRenderer", "SetWidthCurve", [this.ptr, curve]); }
    static SetWidthCurve_Injected(_unity_self, curve) { window.ctx.call("UnityEngine.TrailRenderer", "SetWidthCurve_Injected", [_unity_self, curve]); }
    static get_alignment_Injected(_unity_self) { return new LineAlignment(window.ctx.call("UnityEngine.TrailRenderer", "get_alignment_Injected", [_unity_self])); }
    static get_applyActiveColorSpace_Injected(_unity_self) { return window.ctx.call("UnityEngine.TrailRenderer", "get_applyActiveColorSpace_Injected", [_unity_self]).val() === 1; }
    static get_autodestruct_Injected(_unity_self) { return window.ctx.call("UnityEngine.TrailRenderer", "get_autodestruct_Injected", [_unity_self]).val() === 1; }
    static get_emitting_Injected(_unity_self) { return window.ctx.call("UnityEngine.TrailRenderer", "get_emitting_Injected", [_unity_self]).val() === 1; }
    static get_endColor_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.TrailRenderer", "get_endColor_Injected", [_unity_self, ret]); }
    static get_endWidth_Injected(_unity_self) { return window.ctx.call("UnityEngine.TrailRenderer", "get_endWidth_Injected", [_unity_self]).val(); }
    static get_generateLightingData_Injected(_unity_self) { return window.ctx.call("UnityEngine.TrailRenderer", "get_generateLightingData_Injected", [_unity_self]).val() === 1; }
    static get_maskInteraction_Injected(_unity_self) { return new SpriteMaskInteraction(window.ctx.call("UnityEngine.TrailRenderer", "get_maskInteraction_Injected", [_unity_self])); }
    static get_minVertexDistance_Injected(_unity_self) { return window.ctx.call("UnityEngine.TrailRenderer", "get_minVertexDistance_Injected", [_unity_self]).val(); }
    static get_numCapVertices_Injected(_unity_self) { return window.ctx.call("UnityEngine.TrailRenderer", "get_numCapVertices_Injected", [_unity_self]).val(); }
    static get_numCornerVertices_Injected(_unity_self) { return window.ctx.call("UnityEngine.TrailRenderer", "get_numCornerVertices_Injected", [_unity_self]).val(); }
    static get_positionCount_Injected(_unity_self) { return window.ctx.call("UnityEngine.TrailRenderer", "get_positionCount_Injected", [_unity_self]).val(); }
    static get_shadowBias_Injected(_unity_self) { return window.ctx.call("UnityEngine.TrailRenderer", "get_shadowBias_Injected", [_unity_self]).val(); }
    static get_startColor_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.TrailRenderer", "get_startColor_Injected", [_unity_self, ret]); }
    static get_startWidth_Injected(_unity_self) { return window.ctx.call("UnityEngine.TrailRenderer", "get_startWidth_Injected", [_unity_self]).val(); }
    static get_textureMode_Injected(_unity_self) { return new LineTextureMode(window.ctx.call("UnityEngine.TrailRenderer", "get_textureMode_Injected", [_unity_self])); }
    static get_textureScale_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.TrailRenderer", "get_textureScale_Injected", [_unity_self, ret]); }
    static get_time_Injected(_unity_self) { return window.ctx.call("UnityEngine.TrailRenderer", "get_time_Injected", [_unity_self]).val(); }
    static get_widthMultiplier_Injected(_unity_self) { return window.ctx.call("UnityEngine.TrailRenderer", "get_widthMultiplier_Injected", [_unity_self]).val(); }
    static set_alignment_Injected(_unity_self, value) { window.ctx.call("UnityEngine.TrailRenderer", "set_alignment_Injected", [_unity_self, value]); }
    static set_applyActiveColorSpace_Injected(_unity_self, value) { window.ctx.call("UnityEngine.TrailRenderer", "set_applyActiveColorSpace_Injected", [_unity_self, value]); }
    static set_autodestruct_Injected(_unity_self, value) { window.ctx.call("UnityEngine.TrailRenderer", "set_autodestruct_Injected", [_unity_self, value]); }
    static set_emitting_Injected(_unity_self, value) { window.ctx.call("UnityEngine.TrailRenderer", "set_emitting_Injected", [_unity_self, value]); }
    static set_endColor_Injected(_unity_self, value) { window.ctx.call("UnityEngine.TrailRenderer", "set_endColor_Injected", [_unity_self, value]); }
    static set_endWidth_Injected(_unity_self, value) { window.ctx.call("UnityEngine.TrailRenderer", "set_endWidth_Injected", [_unity_self, value]); }
    static set_generateLightingData_Injected(_unity_self, value) { window.ctx.call("UnityEngine.TrailRenderer", "set_generateLightingData_Injected", [_unity_self, value]); }
    static set_maskInteraction_Injected(_unity_self, value) { window.ctx.call("UnityEngine.TrailRenderer", "set_maskInteraction_Injected", [_unity_self, value]); }
    static set_minVertexDistance_Injected(_unity_self, value) { window.ctx.call("UnityEngine.TrailRenderer", "set_minVertexDistance_Injected", [_unity_self, value]); }
    static set_numCapVertices_Injected(_unity_self, value) { window.ctx.call("UnityEngine.TrailRenderer", "set_numCapVertices_Injected", [_unity_self, value]); }
    static set_numCornerVertices_Injected(_unity_self, value) { window.ctx.call("UnityEngine.TrailRenderer", "set_numCornerVertices_Injected", [_unity_self, value]); }
    static set_shadowBias_Injected(_unity_self, value) { window.ctx.call("UnityEngine.TrailRenderer", "set_shadowBias_Injected", [_unity_self, value]); }
    static set_startColor_Injected(_unity_self, value) { window.ctx.call("UnityEngine.TrailRenderer", "set_startColor_Injected", [_unity_self, value]); }
    static set_startWidth_Injected(_unity_self, value) { window.ctx.call("UnityEngine.TrailRenderer", "set_startWidth_Injected", [_unity_self, value]); }
    static set_textureMode_Injected(_unity_self, value) { window.ctx.call("UnityEngine.TrailRenderer", "set_textureMode_Injected", [_unity_self, value]); }
    static set_textureScale_Injected(_unity_self, value) { window.ctx.call("UnityEngine.TrailRenderer", "set_textureScale_Injected", [_unity_self, value]); }
    static set_time_Injected(_unity_self, value) { window.ctx.call("UnityEngine.TrailRenderer", "set_time_Injected", [_unity_self, value]); }
    static set_widthMultiplier_Injected(_unity_self, value) { window.ctx.call("UnityEngine.TrailRenderer", "set_widthMultiplier_Injected", [_unity_self, value]); }
}

export class ShakePreset {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get FadeIn() { return window.ctx.call("MilkShake.ShakePreset", "get_FadeIn", [this.ptr]).val(); }
    set FadeIn(v) { window.ctx.call("MilkShake.ShakePreset", "set_FadeIn", [this.ptr, v]); }
    get FadeOut() { return window.ctx.call("MilkShake.ShakePreset", "get_FadeOut", [this.ptr]).val(); }
    set FadeOut(v) { window.ctx.call("MilkShake.ShakePreset", "set_FadeOut", [this.ptr, v]); }
    get PositionInfluence() { return (()=>{
					let structptr_743fe4 = window.ctx.malloc(12);
					window.ctx.call("MilkShake.ShakePreset", "get_PositionInfluence", [structptr_743fe4, this.ptr]);
					return structptr_743fe4;
				})(); }
    set PositionInfluence(v) { window.ctx.call("MilkShake.ShakePreset", "set_PositionInfluence", [this.ptr, v]); }
    get RotationInfluence() { return (()=>{
					let structptr_c03530 = window.ctx.malloc(12);
					window.ctx.call("MilkShake.ShakePreset", "get_RotationInfluence", [structptr_c03530, this.ptr]);
					return structptr_c03530;
				})(); }
    set RotationInfluence(v) { window.ctx.call("MilkShake.ShakePreset", "set_RotationInfluence", [this.ptr, v]); }
    get Roughness() { return window.ctx.call("MilkShake.ShakePreset", "get_Roughness", [this.ptr]).val(); }
    set Roughness(v) { window.ctx.call("MilkShake.ShakePreset", "set_Roughness", [this.ptr, v]); }
    get ShakeType() { return new ShakeType(window.ctx.call("MilkShake.ShakePreset", "get_ShakeType", [this.ptr])); }
    set ShakeType(v) { window.ctx.call("MilkShake.ShakePreset", "set_ShakeType", [this.ptr, v]); }
    get Strength() { return window.ctx.call("MilkShake.ShakePreset", "get_Strength", [this.ptr]).val(); }
    set Strength(v) { window.ctx.call("MilkShake.ShakePreset", "set_Strength", [this.ptr, v]); }
    get fadeIn() { return this.ptr.readField(0x18, 'f32').val(); }
    set fadeIn(v) { return this.ptr.writeField(0x18, 'f32', v); }
    get fadeOut() { return this.ptr.readField(0x1C, 'f32').val(); }
    set fadeOut(v) { return this.ptr.writeField(0x1C, 'f32', v); }
    get positionInfluence() { return new Vector3(this.ptr.readField(0x20, 'i32')); }
    set positionInfluence(v) { return this.ptr.writeField(0x20, 'i32', v); }
    get rotationInfluence() { return new Vector3(this.ptr.readField(0x2C, 'i32')); }
    set rotationInfluence(v) { return this.ptr.writeField(0x2C, 'i32', v); }
    get roughness() { return this.ptr.readField(0x14, 'f32').val(); }
    set roughness(v) { return this.ptr.writeField(0x14, 'f32', v); }
    get shakeType() { return new ShakeType(this.ptr.readField(0xC, 'i32')); }
    set shakeType(v) { return this.ptr.writeField(0xC, 'i32', v); }
    get strength() { return this.ptr.readField(0x10, 'f32').val(); }
    set strength(v) { return this.ptr.writeField(0x10, 'f32', v); }
}

export class ParticleSystemExtension {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get isPlaying() { return window.ctx.call("ParticleSystemExtension", "get_isPlaying", [this.ptr]).val() === 1; }
    set isPlaying(v) { window.ctx.call("ParticleSystemExtension", "set_isPlaying", [this.ptr, v]); }
    get _isPlaying() { return this.ptr.readField(0x14, 'i32').val() === 1; }
    set _isPlaying(v) { return this.ptr.writeField(0x14, 'i32', v); }
    get myParticleSystem() { return new ParticleSystem(this.ptr.readField(0x10, 'i32')); }
    set myParticleSystem(v) { return this.ptr.writeField(0x10, 'i32', v); }
    Awake() { window.ctx.call("ParticleSystemExtension", "Awake", [this.ptr]); }
    Start() { window.ctx.call("ParticleSystemExtension", "Start", [this.ptr]); }
}

export class ParticleSystem {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get automaticCullingEnabled() { return window.ctx.call("UnityEngine.ParticleSystem", "get_automaticCullingEnabled", [this.ptr]).val() === 1; }
    get collision() { return (()=>{
					let structptr_593858 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ParticleSystem", "get_collision", [structptr_593858, this.ptr]);
					return structptr_593858;
				})(); }
    get colorBySpeed() { return (()=>{
					let structptr_2dc8db = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ParticleSystem", "get_colorBySpeed", [structptr_2dc8db, this.ptr]);
					return structptr_2dc8db;
				})(); }
    get colorOverLifetime() { return (()=>{
					let structptr_c4bc4d = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ParticleSystem", "get_colorOverLifetime", [structptr_c4bc4d, this.ptr]);
					return structptr_c4bc4d;
				})(); }
    get customData() { return (()=>{
					let structptr_4d4f1d = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ParticleSystem", "get_customData", [structptr_4d4f1d, this.ptr]);
					return structptr_4d4f1d;
				})(); }
    get duration() { return window.ctx.call("UnityEngine.ParticleSystem", "get_duration", [this.ptr]).val(); }
    get emission() { return (()=>{
					let structptr_07176e = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ParticleSystem", "get_emission", [structptr_07176e, this.ptr]);
					return structptr_07176e;
				})(); }
    get emissionRate() { return window.ctx.call("UnityEngine.ParticleSystem", "get_emissionRate", [this.ptr]).val(); }
    set emissionRate(v) { window.ctx.call("UnityEngine.ParticleSystem", "set_emissionRate", [this.ptr, v]); }
    get enableEmission() { return window.ctx.call("UnityEngine.ParticleSystem", "get_enableEmission", [this.ptr]).val() === 1; }
    set enableEmission(v) { window.ctx.call("UnityEngine.ParticleSystem", "set_enableEmission", [this.ptr, v]); }
    get externalForces() { return (()=>{
					let structptr_ffe96a = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ParticleSystem", "get_externalForces", [structptr_ffe96a, this.ptr]);
					return structptr_ffe96a;
				})(); }
    get forceOverLifetime() { return (()=>{
					let structptr_63359e = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ParticleSystem", "get_forceOverLifetime", [structptr_63359e, this.ptr]);
					return structptr_63359e;
				})(); }
    get gravityModifier() { return window.ctx.call("UnityEngine.ParticleSystem", "get_gravityModifier", [this.ptr]).val(); }
    set gravityModifier(v) { window.ctx.call("UnityEngine.ParticleSystem", "set_gravityModifier", [this.ptr, v]); }
    get has3DParticleRotations() { return window.ctx.call("UnityEngine.ParticleSystem", "get_has3DParticleRotations", [this.ptr]).val() === 1; }
    get hasNonUniformParticleSizes() { return window.ctx.call("UnityEngine.ParticleSystem", "get_hasNonUniformParticleSizes", [this.ptr]).val() === 1; }
    get inheritVelocity() { return (()=>{
					let structptr_4a9e73 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ParticleSystem", "get_inheritVelocity", [structptr_4a9e73, this.ptr]);
					return structptr_4a9e73;
				})(); }
    get isEmitting() { return window.ctx.call("UnityEngine.ParticleSystem", "get_isEmitting", [this.ptr]).val() === 1; }
    get isPaused() { return window.ctx.call("UnityEngine.ParticleSystem", "get_isPaused", [this.ptr]).val() === 1; }
    get isPlaying() { return window.ctx.call("UnityEngine.ParticleSystem", "get_isPlaying", [this.ptr]).val() === 1; }
    get isStopped() { return window.ctx.call("UnityEngine.ParticleSystem", "get_isStopped", [this.ptr]).val() === 1; }
    get lifetimeByEmitterSpeed() { return (()=>{
					let structptr_5b08fb = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ParticleSystem", "get_lifetimeByEmitterSpeed", [structptr_5b08fb, this.ptr]);
					return structptr_5b08fb;
				})(); }
    get lights() { return (()=>{
					let structptr_979f46 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ParticleSystem", "get_lights", [structptr_979f46, this.ptr]);
					return structptr_979f46;
				})(); }
    get limitVelocityOverLifetime() { return (()=>{
					let structptr_5dca48 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ParticleSystem", "get_limitVelocityOverLifetime", [structptr_5dca48, this.ptr]);
					return structptr_5dca48;
				})(); }
    get loop() { return window.ctx.call("UnityEngine.ParticleSystem", "get_loop", [this.ptr]).val() === 1; }
    set loop(v) { window.ctx.call("UnityEngine.ParticleSystem", "set_loop", [this.ptr, v]); }
    get main() { return (()=>{
					let structptr_b44367 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ParticleSystem", "get_main", [structptr_b44367, this.ptr]);
					return structptr_b44367;
				})(); }
    get maxParticles() { return window.ctx.call("UnityEngine.ParticleSystem", "get_maxParticles", [this.ptr]).val(); }
    set maxParticles(v) { window.ctx.call("UnityEngine.ParticleSystem", "set_maxParticles", [this.ptr, v]); }
    get noise() { return (()=>{
					let structptr_536b68 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ParticleSystem", "get_noise", [structptr_536b68, this.ptr]);
					return structptr_536b68;
				})(); }
    get particleCount() { return window.ctx.call("UnityEngine.ParticleSystem", "get_particleCount", [this.ptr]).val(); }
    get playbackSpeed() { return window.ctx.call("UnityEngine.ParticleSystem", "get_playbackSpeed", [this.ptr]).val(); }
    set playbackSpeed(v) { window.ctx.call("UnityEngine.ParticleSystem", "set_playbackSpeed", [this.ptr, v]); }
    get playOnAwake() { return window.ctx.call("UnityEngine.ParticleSystem", "get_playOnAwake", [this.ptr]).val() === 1; }
    set playOnAwake(v) { window.ctx.call("UnityEngine.ParticleSystem", "set_playOnAwake", [this.ptr, v]); }
    get proceduralSimulationSupported() { return window.ctx.call("UnityEngine.ParticleSystem", "get_proceduralSimulationSupported", [this.ptr]).val() === 1; }
    get randomSeed() { return window.ctx.call("UnityEngine.ParticleSystem", "get_randomSeed", [this.ptr]).val(); }
    set randomSeed(v) { window.ctx.call("UnityEngine.ParticleSystem", "set_randomSeed", [this.ptr, v]); }
    get rotationBySpeed() { return (()=>{
					let structptr_d1c8d6 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ParticleSystem", "get_rotationBySpeed", [structptr_d1c8d6, this.ptr]);
					return structptr_d1c8d6;
				})(); }
    get rotationOverLifetime() { return (()=>{
					let structptr_8afe0b = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ParticleSystem", "get_rotationOverLifetime", [structptr_8afe0b, this.ptr]);
					return structptr_8afe0b;
				})(); }
    get scalingMode() { return new ParticleSystemScalingMode(window.ctx.call("UnityEngine.ParticleSystem", "get_scalingMode", [this.ptr])); }
    set scalingMode(v) { window.ctx.call("UnityEngine.ParticleSystem", "set_scalingMode", [this.ptr, v]); }
    get shape() { return (()=>{
					let structptr_993333 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ParticleSystem", "get_shape", [structptr_993333, this.ptr]);
					return structptr_993333;
				})(); }
    get simulationSpace() { return new ParticleSystemSimulationSpace(window.ctx.call("UnityEngine.ParticleSystem", "get_simulationSpace", [this.ptr])); }
    set simulationSpace(v) { window.ctx.call("UnityEngine.ParticleSystem", "set_simulationSpace", [this.ptr, v]); }
    get sizeBySpeed() { return (()=>{
					let structptr_b92f3d = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ParticleSystem", "get_sizeBySpeed", [structptr_b92f3d, this.ptr]);
					return structptr_b92f3d;
				})(); }
    get sizeOverLifetime() { return (()=>{
					let structptr_19f285 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ParticleSystem", "get_sizeOverLifetime", [structptr_19f285, this.ptr]);
					return structptr_19f285;
				})(); }
    get startColor() { return (()=>{
					let structptr_f79c90 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.ParticleSystem", "get_startColor", [structptr_f79c90, this.ptr]);
					return structptr_f79c90;
				})(); }
    set startColor(v) { window.ctx.call("UnityEngine.ParticleSystem", "set_startColor", [this.ptr, v]); }
    get startDelay() { return window.ctx.call("UnityEngine.ParticleSystem", "get_startDelay", [this.ptr]).val(); }
    set startDelay(v) { window.ctx.call("UnityEngine.ParticleSystem", "set_startDelay", [this.ptr, v]); }
    get startLifetime() { return window.ctx.call("UnityEngine.ParticleSystem", "get_startLifetime", [this.ptr]).val(); }
    set startLifetime(v) { window.ctx.call("UnityEngine.ParticleSystem", "set_startLifetime", [this.ptr, v]); }
    get startRotation() { return window.ctx.call("UnityEngine.ParticleSystem", "get_startRotation", [this.ptr]).val(); }
    set startRotation(v) { window.ctx.call("UnityEngine.ParticleSystem", "set_startRotation", [this.ptr, v]); }
    get startRotation3D() { return (()=>{
					let structptr_f498b9 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.ParticleSystem", "get_startRotation3D", [structptr_f498b9, this.ptr]);
					return structptr_f498b9;
				})(); }
    set startRotation3D(v) { window.ctx.call("UnityEngine.ParticleSystem", "set_startRotation3D", [this.ptr, v]); }
    get startSize() { return window.ctx.call("UnityEngine.ParticleSystem", "get_startSize", [this.ptr]).val(); }
    set startSize(v) { window.ctx.call("UnityEngine.ParticleSystem", "set_startSize", [this.ptr, v]); }
    get startSpeed() { return window.ctx.call("UnityEngine.ParticleSystem", "get_startSpeed", [this.ptr]).val(); }
    set startSpeed(v) { window.ctx.call("UnityEngine.ParticleSystem", "set_startSpeed", [this.ptr, v]); }
    get subEmitters() { return (()=>{
					let structptr_28d26c = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ParticleSystem", "get_subEmitters", [structptr_28d26c, this.ptr]);
					return structptr_28d26c;
				})(); }
    get textureSheetAnimation() { return (()=>{
					let structptr_840980 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ParticleSystem", "get_textureSheetAnimation", [structptr_840980, this.ptr]);
					return structptr_840980;
				})(); }
    get time() { return window.ctx.call("UnityEngine.ParticleSystem", "get_time", [this.ptr]).val(); }
    set time(v) { window.ctx.call("UnityEngine.ParticleSystem", "set_time", [this.ptr, v]); }
    get totalTime() { return window.ctx.call("UnityEngine.ParticleSystem", "get_totalTime", [this.ptr]).val(); }
    get trails() { return (()=>{
					let structptr_452c0e = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ParticleSystem", "get_trails", [structptr_452c0e, this.ptr]);
					return structptr_452c0e;
				})(); }
    get trigger() { return (()=>{
					let structptr_18a6bc = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ParticleSystem", "get_trigger", [structptr_18a6bc, this.ptr]);
					return structptr_18a6bc;
				})(); }
    get useAutoRandomSeed() { return window.ctx.call("UnityEngine.ParticleSystem", "get_useAutoRandomSeed", [this.ptr]).val() === 1; }
    set useAutoRandomSeed(v) { window.ctx.call("UnityEngine.ParticleSystem", "set_useAutoRandomSeed", [this.ptr, v]); }
    get velocityOverLifetime() { return (()=>{
					let structptr_b47b40 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ParticleSystem", "get_velocityOverLifetime", [structptr_b47b40, this.ptr]);
					return structptr_b47b40;
				})(); }
    AllocateAxisOfRotationAttribute() { window.ctx.call("UnityEngine.ParticleSystem", "AllocateAxisOfRotationAttribute", [this.ptr]); }
    static AllocateAxisOfRotationAttribute_Injected(_unity_self) { window.ctx.call("UnityEngine.ParticleSystem", "AllocateAxisOfRotationAttribute_Injected", [_unity_self]); }
    AllocateCustomDataAttribute(stream) { window.ctx.call("UnityEngine.ParticleSystem", "AllocateCustomDataAttribute", [this.ptr, stream]); }
    static AllocateCustomDataAttribute_Injected(_unity_self, stream) { window.ctx.call("UnityEngine.ParticleSystem", "AllocateCustomDataAttribute_Injected", [_unity_self, stream]); }
    AllocateMeshIndexAttribute() { window.ctx.call("UnityEngine.ParticleSystem", "AllocateMeshIndexAttribute", [this.ptr]); }
    static AllocateMeshIndexAttribute_Injected(_unity_self) { window.ctx.call("UnityEngine.ParticleSystem", "AllocateMeshIndexAttribute_Injected", [_unity_self]); }
    Clear_withChildren(withChildren) { window.ctx.call("UnityEngine.ParticleSystem", "Clear_24613", [this.ptr, withChildren]); }
    Clear_pointer() { window.ctx.call("UnityEngine.ParticleSystem", "Clear_24614", [this.ptr]); }
    static Clear_Injected(_unity_self, withChildren) { window.ctx.call("UnityEngine.ParticleSystem", "Clear_Injected", [_unity_self, withChildren]); }
    static CopyManagedJobData(systemPtr, particleData) { window.ctx.call("UnityEngine.ParticleSystem", "CopyManagedJobData", [systemPtr, particleData]); }
    Emit_position_velocity_size_lifetime_color(position, velocity, size, lifetime, color) { window.ctx.call("UnityEngine.ParticleSystem", "Emit_24521", [this.ptr, position, velocity, size, lifetime, color]); }
    Emit_particle(particle) { window.ctx.call("UnityEngine.ParticleSystem", "Emit_24522", [this.ptr, particle]); }
    Emit_count(count) { window.ctx.call("UnityEngine.ParticleSystem", "Emit_24617", [this.ptr, count]); }
    Emit_emitParams_count(emitParams, count) { window.ctx.call("UnityEngine.ParticleSystem", "Emit_24619", [this.ptr, emitParams, count]); }
    EmitOld_Internal(particle) { window.ctx.call("UnityEngine.ParticleSystem", "EmitOld_Internal", [this.ptr, particle]); }
    static EmitOld_Internal_Injected(_unity_self, particle) { window.ctx.call("UnityEngine.ParticleSystem", "EmitOld_Internal_Injected", [_unity_self, particle]); }
    static Emit_Injected(_unity_self, emitParams, count) { window.ctx.call("UnityEngine.ParticleSystem", "Emit_Injected", [_unity_self, emitParams, count]); }
    Emit_Internal(count) { window.ctx.call("UnityEngine.ParticleSystem", "Emit_Internal", [this.ptr, count]); }
    static Emit_Internal_Injected(_unity_self, count) { window.ctx.call("UnityEngine.ParticleSystem", "Emit_Internal_Injected", [_unity_self, count]); }
    GetCustomParticleData(customData, streamIndex) { return window.ctx.call("UnityEngine.ParticleSystem", "GetCustomParticleData", [this.ptr, customData, streamIndex]).val(); }
    static GetCustomParticleData_Injected(_unity_self, customData, streamIndex) { return window.ctx.call("UnityEngine.ParticleSystem", "GetCustomParticleData_Injected", [_unity_self, customData, streamIndex]).val(); }
    GetManagedJobData() { return window.ctx.call("UnityEngine.ParticleSystem", "GetManagedJobData", [this.ptr]); }
    static GetManagedJobData_Injected(_unity_self) { return window.ctx.call("UnityEngine.ParticleSystem", "GetManagedJobData_Injected", [_unity_self]); }
    GetManagedJobHandle() { return (()=>{
					let structptr_a2cc03 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ParticleSystem", "GetManagedJobHandle", [structptr_a2cc03, this.ptr]);
					return structptr_a2cc03;
				})(); }
    static GetManagedJobHandle_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.ParticleSystem", "GetManagedJobHandle_Injected", [_unity_self, ret]); }
    GetParticleCurrentColor(particle) { return (()=>{
					let structptr_d7deff = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ParticleSystem", "GetParticleCurrentColor", [structptr_d7deff, this.ptr, particle]);
					return structptr_d7deff;
				})(); }
    static GetParticleCurrentColor_Injected(_unity_self, particle, ret) { window.ctx.call("UnityEngine.ParticleSystem", "GetParticleCurrentColor_Injected", [_unity_self, particle, ret]); }
    GetParticleCurrentSize(particle) { return window.ctx.call("UnityEngine.ParticleSystem", "GetParticleCurrentSize", [this.ptr, particle]).val(); }
    GetParticleCurrentSize3D(particle) { return (()=>{
					let structptr_5f1dd7 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.ParticleSystem", "GetParticleCurrentSize3D", [structptr_5f1dd7, this.ptr, particle]);
					return structptr_5f1dd7;
				})(); }
    static GetParticleCurrentSize3D_Injected(_unity_self, particle, ret) { window.ctx.call("UnityEngine.ParticleSystem", "GetParticleCurrentSize3D_Injected", [_unity_self, particle, ret]); }
    static GetParticleCurrentSize_Injected(_unity_self, particle) { return window.ctx.call("UnityEngine.ParticleSystem", "GetParticleCurrentSize_Injected", [_unity_self, particle]).val(); }
    GetParticleMeshIndex(particle) { return window.ctx.call("UnityEngine.ParticleSystem", "GetParticleMeshIndex", [this.ptr, particle]).val(); }
    static GetParticleMeshIndex_Injected(_unity_self, particle) { return window.ctx.call("UnityEngine.ParticleSystem", "GetParticleMeshIndex_Injected", [_unity_self, particle]).val(); }
    GetParticles_particles_size_offset(particles, size, offset) { return window.ctx.call("UnityEngine.ParticleSystem", "GetParticles_24581", [this.ptr, particles, size, offset]).val(); }
    GetParticles_particles_size(particles, size) { return window.ctx.call("UnityEngine.ParticleSystem", "GetParticles_24582", [this.ptr, particles, size]).val(); }
    GetParticles_particles(particles) { return window.ctx.call("UnityEngine.ParticleSystem", "GetParticles_24583", [this.ptr, particles]).val(); }
    GetParticles_particles_size_offset(particles, size, offset) { return window.ctx.call("UnityEngine.ParticleSystem", "GetParticles_24585", [this.ptr, particles, size, offset]).val(); }
    GetParticles_particles_size(particles, size) { return window.ctx.call("UnityEngine.ParticleSystem", "GetParticles_24586", [this.ptr, particles, size]).val(); }
    GetParticles_particles(particles) { return window.ctx.call("UnityEngine.ParticleSystem", "GetParticles_24587", [this.ptr, particles]).val(); }
    GetParticlesWithNativeArray(particles, particlesLength, size, offset) { return window.ctx.call("UnityEngine.ParticleSystem", "GetParticlesWithNativeArray", [this.ptr, particles, particlesLength, size, offset]).val(); }
    static GetParticlesWithNativeArray_Injected(_unity_self, particles, particlesLength, size, offset) { return window.ctx.call("UnityEngine.ParticleSystem", "GetParticlesWithNativeArray_Injected", [_unity_self, particles, particlesLength, size, offset]).val(); }
    static GetParticles_Injected(_unity_self, particles, size, offset) { return window.ctx.call("UnityEngine.ParticleSystem", "GetParticles_Injected", [_unity_self, particles, size, offset]).val(); }
    GetPlaybackState() { return (()=>{
					let structptr_f61379 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ParticleSystem", "GetPlaybackState", [structptr_f61379, this.ptr]);
					return structptr_f61379;
				})(); }
    static GetPlaybackState_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.ParticleSystem", "GetPlaybackState_Injected", [_unity_self, ret]); }
    GetTrailDataInternal(trailData) { window.ctx.call("UnityEngine.ParticleSystem", "GetTrailDataInternal", [this.ptr, trailData]); }
    static GetTrailDataInternal_Injected(_unity_self, trailData) { window.ctx.call("UnityEngine.ParticleSystem", "GetTrailDataInternal_Injected", [_unity_self, trailData]); }
    GetTrails_pointer() { return (()=>{
					let structptr_319257 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ParticleSystem", "GetTrails_24593", [structptr_319257, this.ptr]);
					return structptr_319257;
				})(); }
    GetTrails_trailData(trailData) { return window.ctx.call("UnityEngine.ParticleSystem", "GetTrails_24594", [this.ptr, trailData]).val(); }
    IsAlive_withChildren(withChildren) { return window.ctx.call("UnityEngine.ParticleSystem", "IsAlive_24615", [this.ptr, withChildren]).val() === 1; }
    IsAlive_pointer() { return window.ctx.call("UnityEngine.ParticleSystem", "IsAlive_24616", [this.ptr]).val() === 1; }
    static IsAlive_Injected(_unity_self, withChildren) { return window.ctx.call("UnityEngine.ParticleSystem", "IsAlive_Injected", [_unity_self, withChildren]).val() === 1; }
    Pause_withChildren(withChildren) { window.ctx.call("UnityEngine.ParticleSystem", "Pause_24608", [this.ptr, withChildren]); }
    Pause_pointer() { window.ctx.call("UnityEngine.ParticleSystem", "Pause_24609", [this.ptr]); }
    static Pause_Injected(_unity_self, withChildren) { window.ctx.call("UnityEngine.ParticleSystem", "Pause_Injected", [_unity_self, withChildren]); }
    Play_withChildren(withChildren) { window.ctx.call("UnityEngine.ParticleSystem", "Play_24606", [this.ptr, withChildren]); }
    Play_pointer() { window.ctx.call("UnityEngine.ParticleSystem", "Play_24607", [this.ptr]); }
    static Play_Injected(_unity_self, withChildren) { window.ctx.call("UnityEngine.ParticleSystem", "Play_Injected", [_unity_self, withChildren]); }
    static ResetPreMappedBufferMemory() { window.ctx.call("UnityEngine.ParticleSystem", "ResetPreMappedBufferMemory", []); }
    static ScheduleManagedJob(parameters, additionalData) { return (()=>{
					let structptr_b22915 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.ParticleSystem", "ScheduleManagedJob", [structptr_b22915, parameters, additionalData]);
					return structptr_b22915;
				})(); }
    static ScheduleManagedJob_Injected(parameters, additionalData, ret) { window.ctx.call("UnityEngine.ParticleSystem", "ScheduleManagedJob_Injected", [parameters, additionalData, ret]); }
    SetCustomParticleData(customData, streamIndex) { window.ctx.call("UnityEngine.ParticleSystem", "SetCustomParticleData", [this.ptr, customData, streamIndex]); }
    static SetCustomParticleData_Injected(_unity_self, customData, streamIndex) { window.ctx.call("UnityEngine.ParticleSystem", "SetCustomParticleData_Injected", [_unity_self, customData, streamIndex]); }
    SetManagedJobHandle(handle) { window.ctx.call("UnityEngine.ParticleSystem", "SetManagedJobHandle", [this.ptr, handle]); }
    static SetManagedJobHandle_Injected(_unity_self, handle) { window.ctx.call("UnityEngine.ParticleSystem", "SetManagedJobHandle_Injected", [_unity_self, handle]); }
    static SetMaximumPreMappedBufferCounts(vertexBuffersCount, indexBuffersCount) { window.ctx.call("UnityEngine.ParticleSystem", "SetMaximumPreMappedBufferCounts", [vertexBuffersCount, indexBuffersCount]); }
    SetParticles_particles_size_offset(particles, size, offset) { window.ctx.call("UnityEngine.ParticleSystem", "SetParticles_24574", [this.ptr, particles, size, offset]); }
    SetParticles_particles_size(particles, size) { window.ctx.call("UnityEngine.ParticleSystem", "SetParticles_24575", [this.ptr, particles, size]); }
    SetParticles_particles(particles) { window.ctx.call("UnityEngine.ParticleSystem", "SetParticles_24576", [this.ptr, particles]); }
    SetParticles_particles_size_offset(particles, size, offset) { window.ctx.call("UnityEngine.ParticleSystem", "SetParticles_24578", [this.ptr, particles, size, offset]); }
    SetParticles_particles_size(particles, size) { window.ctx.call("UnityEngine.ParticleSystem", "SetParticles_24579", [this.ptr, particles, size]); }
    SetParticles_particles(particles) { window.ctx.call("UnityEngine.ParticleSystem", "SetParticles_24580", [this.ptr, particles]); }
    SetParticlesAndTrails_particles_trailData_size_offset(particles, trailData, size, offset) { window.ctx.call("UnityEngine.ParticleSystem", "SetParticlesAndTrails_24595", [this.ptr, particles, trailData, size, offset]); }
    SetParticlesAndTrails_particles_trailData_size(particles, trailData, size) { window.ctx.call("UnityEngine.ParticleSystem", "SetParticlesAndTrails_24596", [this.ptr, particles, trailData, size]); }
    SetParticlesAndTrails_particles_trailData(particles, trailData) { window.ctx.call("UnityEngine.ParticleSystem", "SetParticlesAndTrails_24597", [this.ptr, particles, trailData]); }
    SetParticlesAndTrails_particles_trailData_size_offset(particles, trailData, size, offset) { window.ctx.call("UnityEngine.ParticleSystem", "SetParticlesAndTrails_24599", [this.ptr, particles, trailData, size, offset]); }
    SetParticlesAndTrails_particles_trailData_size(particles, trailData, size) { window.ctx.call("UnityEngine.ParticleSystem", "SetParticlesAndTrails_24600", [this.ptr, particles, trailData, size]); }
    SetParticlesAndTrails_particles_trailData(particles, trailData) { window.ctx.call("UnityEngine.ParticleSystem", "SetParticlesAndTrails_24601", [this.ptr, particles, trailData]); }
    SetParticlesAndTrailsWithNativeArray(particles, trailData, particlesLength, size, offset) { window.ctx.call("UnityEngine.ParticleSystem", "SetParticlesAndTrailsWithNativeArray", [this.ptr, particles, trailData, particlesLength, size, offset]); }
    static SetParticlesAndTrailsWithNativeArray_Injected(_unity_self, particles, trailData, particlesLength, size, offset) { window.ctx.call("UnityEngine.ParticleSystem", "SetParticlesAndTrailsWithNativeArray_Injected", [_unity_self, particles, trailData, particlesLength, size, offset]); }
    static SetParticlesAndTrails_Injected(_unity_self, particles, trailData, size, offset) { window.ctx.call("UnityEngine.ParticleSystem", "SetParticlesAndTrails_Injected", [_unity_self, particles, trailData, size, offset]); }
    SetParticlesWithNativeArray(particles, particlesLength, size, offset) { window.ctx.call("UnityEngine.ParticleSystem", "SetParticlesWithNativeArray", [this.ptr, particles, particlesLength, size, offset]); }
    static SetParticlesWithNativeArray_Injected(_unity_self, particles, particlesLength, size, offset) { window.ctx.call("UnityEngine.ParticleSystem", "SetParticlesWithNativeArray_Injected", [_unity_self, particles, particlesLength, size, offset]); }
    static SetParticles_Injected(_unity_self, particles, size, offset) { window.ctx.call("UnityEngine.ParticleSystem", "SetParticles_Injected", [_unity_self, particles, size, offset]); }
    SetPlaybackState(playbackState) { window.ctx.call("UnityEngine.ParticleSystem", "SetPlaybackState", [this.ptr, playbackState]); }
    static SetPlaybackState_Injected(_unity_self, playbackState) { window.ctx.call("UnityEngine.ParticleSystem", "SetPlaybackState_Injected", [_unity_self, playbackState]); }
    SetTrails(trailData) { window.ctx.call("UnityEngine.ParticleSystem", "SetTrails", [this.ptr, trailData]); }
    static SetTrails_Injected(_unity_self, trailData) { window.ctx.call("UnityEngine.ParticleSystem", "SetTrails_Injected", [_unity_self, trailData]); }
    Simulate_t_withChildren_restart_fixedTimeStep(t, withChildren, restart, fixedTimeStep) { window.ctx.call("UnityEngine.ParticleSystem", "Simulate_24602", [this.ptr, t, withChildren, restart, fixedTimeStep]); }
    Simulate_t_withChildren_restart(t, withChildren, restart) { window.ctx.call("UnityEngine.ParticleSystem", "Simulate_24603", [this.ptr, t, withChildren, restart]); }
    Simulate_t_withChildren(t, withChildren) { window.ctx.call("UnityEngine.ParticleSystem", "Simulate_24604", [this.ptr, t, withChildren]); }
    Simulate_t(t) { window.ctx.call("UnityEngine.ParticleSystem", "Simulate_24605", [this.ptr, t]); }
    static Simulate_Injected(_unity_self, t, withChildren, restart, fixedTimeStep) { window.ctx.call("UnityEngine.ParticleSystem", "Simulate_Injected", [_unity_self, t, withChildren, restart, fixedTimeStep]); }
    Stop_withChildren_stopBehavior(withChildren, stopBehavior) { window.ctx.call("UnityEngine.ParticleSystem", "Stop_24610", [this.ptr, withChildren, stopBehavior]); }
    Stop_withChildren(withChildren) { window.ctx.call("UnityEngine.ParticleSystem", "Stop_24611", [this.ptr, withChildren]); }
    Stop_pointer() { window.ctx.call("UnityEngine.ParticleSystem", "Stop_24612", [this.ptr]); }
    static Stop_Injected(_unity_self, withChildren, stopBehavior) { window.ctx.call("UnityEngine.ParticleSystem", "Stop_Injected", [_unity_self, withChildren, stopBehavior]); }
    TriggerSubEmitter_subEmitterIndex(subEmitterIndex) { window.ctx.call("UnityEngine.ParticleSystem", "TriggerSubEmitter_24621", [this.ptr, subEmitterIndex]); }
    TriggerSubEmitter_subEmitterIndex_particle(subEmitterIndex, particle) { window.ctx.call("UnityEngine.ParticleSystem", "TriggerSubEmitter_24622", [this.ptr, subEmitterIndex, particle]); }
    TriggerSubEmitter_subEmitterIndex_particles(subEmitterIndex, particles) { window.ctx.call("UnityEngine.ParticleSystem", "TriggerSubEmitter_24623", [this.ptr, subEmitterIndex, particles]); }
    TriggerSubEmitterForAllParticles(subEmitterIndex) { window.ctx.call("UnityEngine.ParticleSystem", "TriggerSubEmitterForAllParticles", [this.ptr, subEmitterIndex]); }
    static TriggerSubEmitterForAllParticles_Injected(_unity_self, subEmitterIndex) { window.ctx.call("UnityEngine.ParticleSystem", "TriggerSubEmitterForAllParticles_Injected", [_unity_self, subEmitterIndex]); }
    TriggerSubEmitterForParticle(subEmitterIndex, particle) { window.ctx.call("UnityEngine.ParticleSystem", "TriggerSubEmitterForParticle", [this.ptr, subEmitterIndex, particle]); }
    static TriggerSubEmitterForParticle_Injected(_unity_self, subEmitterIndex, particle) { window.ctx.call("UnityEngine.ParticleSystem", "TriggerSubEmitterForParticle_Injected", [_unity_self, subEmitterIndex, particle]); }
    TriggerSubEmitterForParticles(subEmitterIndex, particles) { window.ctx.call("UnityEngine.ParticleSystem", "TriggerSubEmitterForParticles", [this.ptr, subEmitterIndex, particles]); }
    static TriggerSubEmitterForParticles_Injected(_unity_self, subEmitterIndex, particles) { window.ctx.call("UnityEngine.ParticleSystem", "TriggerSubEmitterForParticles_Injected", [_unity_self, subEmitterIndex, particles]); }
    static UserJobCanBeScheduled() { return window.ctx.call("UnityEngine.ParticleSystem", "UserJobCanBeScheduled", []).val() === 1; }
    static get_has3DParticleRotations_Injected(_unity_self) { return window.ctx.call("UnityEngine.ParticleSystem", "get_has3DParticleRotations_Injected", [_unity_self]).val() === 1; }
    static get_hasNonUniformParticleSizes_Injected(_unity_self) { return window.ctx.call("UnityEngine.ParticleSystem", "get_hasNonUniformParticleSizes_Injected", [_unity_self]).val() === 1; }
    static get_isEmitting_Injected(_unity_self) { return window.ctx.call("UnityEngine.ParticleSystem", "get_isEmitting_Injected", [_unity_self]).val() === 1; }
    static get_isPaused_Injected(_unity_self) { return window.ctx.call("UnityEngine.ParticleSystem", "get_isPaused_Injected", [_unity_self]).val() === 1; }
    static get_isPlaying_Injected(_unity_self) { return window.ctx.call("UnityEngine.ParticleSystem", "get_isPlaying_Injected", [_unity_self]).val() === 1; }
    static get_isStopped_Injected(_unity_self) { return window.ctx.call("UnityEngine.ParticleSystem", "get_isStopped_Injected", [_unity_self]).val() === 1; }
    static get_particleCount_Injected(_unity_self) { return window.ctx.call("UnityEngine.ParticleSystem", "get_particleCount_Injected", [_unity_self]).val(); }
    static get_proceduralSimulationSupported_Injected(_unity_self) { return window.ctx.call("UnityEngine.ParticleSystem", "get_proceduralSimulationSupported_Injected", [_unity_self]).val() === 1; }
    static get_randomSeed_Injected(_unity_self) { return window.ctx.call("UnityEngine.ParticleSystem", "get_randomSeed_Injected", [_unity_self]).val(); }
    static get_time_Injected(_unity_self) { return window.ctx.call("UnityEngine.ParticleSystem", "get_time_Injected", [_unity_self]).val(); }
    static get_totalTime_Injected(_unity_self) { return window.ctx.call("UnityEngine.ParticleSystem", "get_totalTime_Injected", [_unity_self]).val(); }
    static get_useAutoRandomSeed_Injected(_unity_self) { return window.ctx.call("UnityEngine.ParticleSystem", "get_useAutoRandomSeed_Injected", [_unity_self]).val() === 1; }
    static set_randomSeed_Injected(_unity_self, value) { window.ctx.call("UnityEngine.ParticleSystem", "set_randomSeed_Injected", [_unity_self, value]); }
    static set_time_Injected(_unity_self, value) { window.ctx.call("UnityEngine.ParticleSystem", "set_time_Injected", [_unity_self, value]); }
    static set_useAutoRandomSeed_Injected(_unity_self, value) { window.ctx.call("UnityEngine.ParticleSystem", "set_useAutoRandomSeed_Injected", [_unity_self, value]); }
}

export class IAudioGenerator {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    CreateInstance(context, nestedFormat, creationParameters) { return (()=>{
					let structptr_b7b917 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Audio.IAudioGenerator", "CreateInstance", [structptr_b7b917, this.ptr, context, nestedFormat, creationParameters]);
					return structptr_b7b917;
				})(); }
}

export class AudioRolloffMode {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class AudioVelocityUpdateMode {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class AudioDataLoadState {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class AudioClipLoadType {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class EaseFunction {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    BeginInvoke(time, duration, overshootOrAmplitude, period, callback, object) { return window.ctx.call("DG.Tweening.EaseFunction", "BeginInvoke", [this.ptr, time, duration, overshootOrAmplitude, period, callback, object]); }
    EndInvoke(result) { return window.ctx.call("DG.Tweening.EaseFunction", "EndInvoke", [this.ptr, result]).val(); }
    Invoke(time, duration, overshootOrAmplitude, period) { return window.ctx.call("DG.Tweening.EaseFunction", "Invoke", [this.ptr, time, duration, overshootOrAmplitude, period]).val(); }
}

export class Ease {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class LoopType {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class TweenCallback {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    BeginInvoke(callback, object) { return window.ctx.call("DG.Tweening.TweenCallback", "BeginInvoke", [this.ptr, callback, object]); }
    EndInvoke(result) { window.ctx.call("DG.Tweening.TweenCallback", "EndInvoke", [this.ptr, result]); }
    Invoke() { window.ctx.call("DG.Tweening.TweenCallback", "Invoke", [this.ptr]); }
}

export class Sequence {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get _sequencedObjs() { return this.ptr.readField(0xC8, 'i32'); }
    set _sequencedObjs(v) { return this.ptr.writeField(0xC8, 'i32', v); }
    get lastTweenInsertTime() { return this.ptr.readField(0xCC, 'f32').val(); }
    set lastTweenInsertTime(v) { return this.ptr.writeField(0xCC, 'f32', v); }
    get sequencedTweens() { return this.ptr.readField(0xC4, 'i32'); }
    set sequencedTweens(v) { return this.ptr.writeField(0xC4, 'i32', v); }
    static ApplyInternalCycle(s, fromPos, toPos, updateMode, useInverse, prevPosIsInverse, multiCycleStep) { return window.ctx.call("DG.Tweening.Sequence", "ApplyInternalCycle", [s, fromPos, toPos, updateMode, useInverse, prevPosIsInverse, multiCycleStep]).val() === 1; }
    ApplyTween(prevPosition, prevCompletedLoops, newCompletedSteps, useInversePosition, updateMode, updateNotice) { return window.ctx.call("DG.Tweening.Sequence", "ApplyTween", [this.ptr, prevPosition, prevCompletedLoops, newCompletedSteps, useInversePosition, updateMode, updateNotice]).val() === 1; }
    static DoAppendInterval(inSequence, interval) { return new Sequence(window.ctx.call("DG.Tweening.Sequence", "DoAppendInterval", [inSequence, interval])); }
    static DoApplyTween(s, prevPosition, prevCompletedLoops, newCompletedSteps, useInversePosition, updateMode) { return window.ctx.call("DG.Tweening.Sequence", "DoApplyTween", [s, prevPosition, prevCompletedLoops, newCompletedSteps, useInversePosition, updateMode]).val() === 1; }
    static DoInsert(inSequence, t, atPosition) { return new Sequence(window.ctx.call("DG.Tweening.Sequence", "DoInsert", [inSequence, t, atPosition])); }
    static DoInsertCallback(inSequence, callback, atPosition) { return new Sequence(window.ctx.call("DG.Tweening.Sequence", "DoInsertCallback", [inSequence, callback, atPosition])); }
    static DoPrepend(inSequence, t) { return new Sequence(window.ctx.call("DG.Tweening.Sequence", "DoPrepend", [inSequence, t])); }
    static DoPrependInterval(inSequence, interval) { return new Sequence(window.ctx.call("DG.Tweening.Sequence", "DoPrependInterval", [inSequence, interval])); }
    static DoStartup(s) { return window.ctx.call("DG.Tweening.Sequence", "DoStartup", [s]).val() === 1; }
    static IsAnyCallbackSet(s) { return window.ctx.call("DG.Tweening.Sequence", "IsAnyCallbackSet", [s]).val() === 1; }
    Reset() { window.ctx.call("DG.Tweening.Sequence", "Reset", [this.ptr]); }
    static Setup(s) { window.ctx.call("DG.Tweening.Sequence", "Setup", [s]); }
    static StableSortSequencedObjs(list) { window.ctx.call("DG.Tweening.Sequence", "StableSortSequencedObjs", [list]); }
    Startup() { return window.ctx.call("DG.Tweening.Sequence", "Startup", [this.ptr]).val() === 1; }
    UpdateDelay(elapsed) { return window.ctx.call("DG.Tweening.Sequence", "UpdateDelay", [this.ptr, elapsed]).val(); }
    Validate() { return window.ctx.call("DG.Tweening.Sequence", "Validate", [this.ptr]).val() === 1; }
}

export class SpecialStartupMode {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class UpdateType {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class Texture2D {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get activeMipmapLimit() { return window.ctx.call("UnityEngine.Texture2D", "get_activeMipmapLimit", [this.ptr]).val(); }
    static get blackTexture() { return new Texture2D(window.ctx.call("UnityEngine.Texture2D", "get_blackTexture", [])); }
    get calculatedMipmapLevel() { return window.ctx.call("UnityEngine.Texture2D", "get_calculatedMipmapLevel", [this.ptr]).val(); }
    get desiredMipmapLevel() { return window.ctx.call("UnityEngine.Texture2D", "get_desiredMipmapLevel", [this.ptr]).val(); }
    get format() { return new TextureFormat(window.ctx.call("UnityEngine.Texture2D", "get_format", [this.ptr])); }
    static get grayTexture() { return new Texture2D(window.ctx.call("UnityEngine.Texture2D", "get_grayTexture", [])); }
    get ignoreMipmapLimit() { return window.ctx.call("UnityEngine.Texture2D", "get_ignoreMipmapLimit", [this.ptr]).val() === 1; }
    set ignoreMipmapLimit(v) { window.ctx.call("UnityEngine.Texture2D", "set_ignoreMipmapLimit", [this.ptr, v]); }
    get isPreProcessed() { return window.ctx.call("UnityEngine.Texture2D", "get_isPreProcessed", [this.ptr]).val() === 1; }
    get isReadable() { return window.ctx.call("UnityEngine.Texture2D", "get_isReadable", [this.ptr]).val() === 1; }
    static get linearGrayTexture() { return new Texture2D(window.ctx.call("UnityEngine.Texture2D", "get_linearGrayTexture", [])); }
    get loadAllMips() { return window.ctx.call("UnityEngine.Texture2D", "get_loadAllMips", [this.ptr]).val() === 1; }
    set loadAllMips(v) { window.ctx.call("UnityEngine.Texture2D", "set_loadAllMips", [this.ptr, v]); }
    get loadedMipmapLevel() { return window.ctx.call("UnityEngine.Texture2D", "get_loadedMipmapLevel", [this.ptr]).val(); }
    get loadingMipmapLevel() { return window.ctx.call("UnityEngine.Texture2D", "get_loadingMipmapLevel", [this.ptr]).val(); }
    get minimumMipmapLevel() { return window.ctx.call("UnityEngine.Texture2D", "get_minimumMipmapLevel", [this.ptr]).val(); }
    set minimumMipmapLevel(v) { window.ctx.call("UnityEngine.Texture2D", "set_minimumMipmapLevel", [this.ptr, v]); }
    get mipmapLimitGroup() { return window.ctx.call("UnityEngine.Texture2D", "get_mipmapLimitGroup", [this.ptr]); }
    static get normalTexture() { return new Texture2D(window.ctx.call("UnityEngine.Texture2D", "get_normalTexture", [])); }
    static get redTexture() { return new Texture2D(window.ctx.call("UnityEngine.Texture2D", "get_redTexture", [])); }
    get requestedMipmapLevel() { return window.ctx.call("UnityEngine.Texture2D", "get_requestedMipmapLevel", [this.ptr]).val(); }
    set requestedMipmapLevel(v) { window.ctx.call("UnityEngine.Texture2D", "set_requestedMipmapLevel", [this.ptr, v]); }
    get streamingMipmaps() { return window.ctx.call("UnityEngine.Texture2D", "get_streamingMipmaps", [this.ptr]).val() === 1; }
    get streamingMipmapsPriority() { return window.ctx.call("UnityEngine.Texture2D", "get_streamingMipmapsPriority", [this.ptr]).val(); }
    get vtOnly() { return window.ctx.call("UnityEngine.Texture2D", "get_vtOnly", [this.ptr]).val() === 1; }
    static get whiteTexture() { return new Texture2D(window.ctx.call("UnityEngine.Texture2D", "get_whiteTexture", [])); }
    Apply_updateMipmaps_makeNoLongerReadable(updateMipmaps, makeNoLongerReadable) { window.ctx.call("UnityEngine.Texture2D", "Apply_2468", [this.ptr, updateMipmaps, makeNoLongerReadable]); }
    Apply_updateMipmaps(updateMipmaps) { window.ctx.call("UnityEngine.Texture2D", "Apply_21352", [this.ptr, updateMipmaps]); }
    Apply_pointer() { window.ctx.call("UnityEngine.Texture2D", "Apply_21353", [this.ptr]); }
    ApplyImpl(updateMipmaps, makeNoLongerReadable) { window.ctx.call("UnityEngine.Texture2D", "ApplyImpl", [this.ptr, updateMipmaps, makeNoLongerReadable]); }
    static ApplyImpl_Injected(_unity_self, updateMipmaps, makeNoLongerReadable) { window.ctx.call("UnityEngine.Texture2D", "ApplyImpl_Injected", [_unity_self, updateMipmaps, makeNoLongerReadable]); }
    ClearMinimumMipmapLevel() { window.ctx.call("UnityEngine.Texture2D", "ClearMinimumMipmapLevel", [this.ptr]); }
    static ClearMinimumMipmapLevel_Injected(_unity_self) { window.ctx.call("UnityEngine.Texture2D", "ClearMinimumMipmapLevel_Injected", [_unity_self]); }
    ClearRequestedMipmapLevel() { window.ctx.call("UnityEngine.Texture2D", "ClearRequestedMipmapLevel", [this.ptr]); }
    static ClearRequestedMipmapLevel_Injected(_unity_self) { window.ctx.call("UnityEngine.Texture2D", "ClearRequestedMipmapLevel_Injected", [_unity_self]); }
    Compress(highQuality) { window.ctx.call("UnityEngine.Texture2D", "Compress", [this.ptr, highQuality]); }
    static Compress_Injected(_unity_self, highQuality) { window.ctx.call("UnityEngine.Texture2D", "Compress_Injected", [_unity_self, highQuality]); }
    CopyPixels_src(src) { window.ctx.call("UnityEngine.Texture2D", "CopyPixels_21367", [this.ptr, src]); }
    CopyPixels_src_srcElement_srcMip_dstMip(src, srcElement, srcMip, dstMip) { window.ctx.call("UnityEngine.Texture2D", "CopyPixels_21368", [this.ptr, src, srcElement, srcMip, dstMip]); }
    CopyPixels_src_srcElement_srcMip_srcX_srcY_srcWidth_srcHeight_dstMip_dstX_dstY(src, srcElement, srcMip, srcX, srcY, srcWidth, srcHeight, dstMip, dstX, dstY) { window.ctx.call("UnityEngine.Texture2D", "CopyPixels_21369", [this.ptr, src, srcElement, srcMip, srcX, srcY, srcWidth, srcHeight, dstMip, dstX, dstY]); }
    CopyPixels_Full(src) { window.ctx.call("UnityEngine.Texture2D", "CopyPixels_Full", [this.ptr, src]); }
    static CopyPixels_Full_Injected(_unity_self, src) { window.ctx.call("UnityEngine.Texture2D", "CopyPixels_Full_Injected", [_unity_self, src]); }
    CopyPixels_Region(src, srcElement, srcMip, srcX, srcY, srcWidth, srcHeight, dstMip, dstX, dstY) { window.ctx.call("UnityEngine.Texture2D", "CopyPixels_Region", [this.ptr, src, srcElement, srcMip, srcX, srcY, srcWidth, srcHeight, dstMip, dstX, dstY]); }
    static CopyPixels_Region_Injected(_unity_self, src, srcElement, srcMip, srcX, srcY, srcWidth, srcHeight, dstMip, dstX, dstY) { window.ctx.call("UnityEngine.Texture2D", "CopyPixels_Region_Injected", [_unity_self, src, srcElement, srcMip, srcX, srcY, srcWidth, srcHeight, dstMip, dstX, dstY]); }
    CopyPixels_Slice(src, srcElement, srcMip, dstMip) { window.ctx.call("UnityEngine.Texture2D", "CopyPixels_Slice", [this.ptr, src, srcElement, srcMip, dstMip]); }
    static CopyPixels_Slice_Injected(_unity_self, src, srcElement, srcMip, dstMip) { window.ctx.call("UnityEngine.Texture2D", "CopyPixels_Slice_Injected", [_unity_self, src, srcElement, srcMip, dstMip]); }
    static CreateExternalTexture(width, height, format, mipChain, linear, nativeTex) { return new Texture2D(window.ctx.call("UnityEngine.Texture2D", "CreateExternalTexture", [width, height, format, mipChain, linear, nativeTex])); }
    static GenerateAtlas(sizes, padding, atlasSize, results) { return window.ctx.call("UnityEngine.Texture2D", "GenerateAtlas", [sizes, padding, atlasSize, results]).val() === 1; }
    static GenerateAtlasImpl(sizes, padding, atlasSize, rect) { window.ctx.call("UnityEngine.Texture2D", "GenerateAtlasImpl", [sizes, padding, atlasSize, rect]); }
    static GenerateAtlasImpl_Injected(sizes, padding, atlasSize, rect) { window.ctx.call("UnityEngine.Texture2D", "GenerateAtlasImpl_Injected", [sizes, padding, atlasSize, rect]); }
    GetImageDataSize() { return window.ctx.call("UnityEngine.Texture2D", "GetImageDataSize", [this.ptr]).val(); }
    static GetImageDataSize_Injected(_unity_self) { return window.ctx.call("UnityEngine.Texture2D", "GetImageDataSize_Injected", [_unity_self]).val(); }
    GetPixel_x_y(x, y) { return (()=>{
					let structptr_c869a6 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Texture2D", "GetPixel_21347", [structptr_c869a6, this.ptr, x, y]);
					return structptr_c869a6;
				})(); }
    GetPixel_x_y_mipLevel(x, y, mipLevel) { return (()=>{
					let structptr_55db7e = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Texture2D", "GetPixel_21348", [structptr_55db7e, this.ptr, x, y, mipLevel]);
					return structptr_55db7e;
				})(); }
    GetPixelBilinear_u_v(u, v) { return (()=>{
					let structptr_4cfc6d = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Texture2D", "GetPixelBilinear_1685", [structptr_4cfc6d, this.ptr, u, v]);
					return structptr_4cfc6d;
				})(); }
    GetPixelBilinear_u_v_mipLevel(u, v, mipLevel) { return (()=>{
					let structptr_3ebcfd = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Texture2D", "GetPixelBilinear_21349", [structptr_3ebcfd, this.ptr, u, v, mipLevel]);
					return structptr_3ebcfd;
				})(); }
    GetPixelBilinearImpl(image, mip, u, v) { return (()=>{
					let structptr_e23b27 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Texture2D", "GetPixelBilinearImpl", [structptr_e23b27, this.ptr, image, mip, u, v]);
					return structptr_e23b27;
				})(); }
    static GetPixelBilinearImpl_Injected(_unity_self, image, mip, u, v, ret) { window.ctx.call("UnityEngine.Texture2D", "GetPixelBilinearImpl_Injected", [_unity_self, image, mip, u, v, ret]); }
    GetPixelData(mipLevel) { return (()=>{
					let structptr_678fa0 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Texture2D", "GetPixelData", [structptr_678fa0, this.ptr, mipLevel]);
					return structptr_678fa0;
				})(); }
    GetPixelImpl(image, mip, x, y) { return (()=>{
					let structptr_7b41ff = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Texture2D", "GetPixelImpl", [structptr_7b41ff, this.ptr, image, mip, x, y]);
					return structptr_7b41ff;
				})(); }
    static GetPixelImpl_Injected(_unity_self, image, mip, x, y, ret) { window.ctx.call("UnityEngine.Texture2D", "GetPixelImpl_Injected", [_unity_self, image, mip, x, y, ret]); }
    GetPixels_x_y_blockWidth_blockHeight_miplevel(x, y, blockWidth, blockHeight, miplevel) { return window.ctx.call("UnityEngine.Texture2D", "GetPixels_21313", [this.ptr, x, y, blockWidth, blockHeight, miplevel]); }
    GetPixels_x_y_blockWidth_blockHeight(x, y, blockWidth, blockHeight) { return window.ctx.call("UnityEngine.Texture2D", "GetPixels_21314", [this.ptr, x, y, blockWidth, blockHeight]); }
    GetPixels_miplevel(miplevel) { return window.ctx.call("UnityEngine.Texture2D", "GetPixels_21366", [this.ptr, miplevel]); }
    GetPixels_pointer() { return window.ctx.call("UnityEngine.Texture2D", "GetPixels_2466", [this.ptr]); }
    GetPixels32_miplevel(miplevel) { return window.ctx.call("UnityEngine.Texture2D", "GetPixels32_21315", [this.ptr, miplevel]); }
    GetPixels32_pointer() { return window.ctx.call("UnityEngine.Texture2D", "GetPixels32_21316", [this.ptr]); }
    static GetPixels32_Injected(_unity_self, miplevel) { return window.ctx.call("UnityEngine.Texture2D", "GetPixels32_Injected", [_unity_self, miplevel]); }
    static GetPixels_Injected(_unity_self, x, y, blockWidth, blockHeight, miplevel) { return window.ctx.call("UnityEngine.Texture2D", "GetPixels_Injected", [_unity_self, x, y, blockWidth, blockHeight, miplevel]); }
    GetRawTextureData_pointer() { return window.ctx.call("UnityEngine.Texture2D", "GetRawTextureData_21312", [this.ptr]); }
    GetRawTextureData() { return (()=>{
					let structptr_8e1a5d = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Texture2D", "GetRawTextureData", [structptr_8e1a5d, this.ptr]);
					return structptr_8e1a5d;
				})(); }
    static GetRawTextureData_Injected(_unity_self) { return window.ctx.call("UnityEngine.Texture2D", "GetRawTextureData_Injected", [_unity_self]); }
    GetWritableImageData(frame) { return (()=>{
					let structptr_3cdd2f = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Texture2D", "GetWritableImageData", [structptr_3cdd2f, this.ptr, frame]);
					return structptr_3cdd2f;
				})(); }
    static GetWritableImageData_Injected(_unity_self, frame) { return (()=>{
					let structptr_3734a9 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Texture2D", "GetWritableImageData_Injected", [structptr_3734a9, _unity_self, frame]);
					return structptr_3734a9;
				})(); }
    IgnoreMipmapLimit() { return window.ctx.call("UnityEngine.Texture2D", "IgnoreMipmapLimit", [this.ptr]).val() === 1; }
    static IgnoreMipmapLimit_Injected(_unity_self) { return window.ctx.call("UnityEngine.Texture2D", "IgnoreMipmapLimit_Injected", [_unity_self]).val() === 1; }
    static Internal_Create(mono, w, h, mipCount, format, colorSpace, flags, nativeTex, ignoreMipmapLimit, mipmapLimitGroupName) { window.ctx.call("UnityEngine.Texture2D", "Internal_Create", [mono, w, h, mipCount, format, colorSpace, flags, nativeTex, ignoreMipmapLimit, mipmapLimitGroupName]); }
    static Internal_CreateEmptyImpl(mono) { return window.ctx.call("UnityEngine.Texture2D", "Internal_CreateEmptyImpl", [mono]).val() === 1; }
    static Internal_CreateImpl(mono, w, h, mipCount, format, colorSpace, flags, nativeTex, ignoreMipmapLimit, mipmapLimitGroupName) { return window.ctx.call("UnityEngine.Texture2D", "Internal_CreateImpl", [mono, w, h, mipCount, format, colorSpace, flags, nativeTex, ignoreMipmapLimit, mipmapLimitGroupName]).val() === 1; }
    static Internal_CreateImpl_Injected(mono, w, h, mipCount, format, colorSpace, flags, nativeTex, ignoreMipmapLimit, mipmapLimitGroupName) { return window.ctx.call("UnityEngine.Texture2D", "Internal_CreateImpl_Injected", [mono, w, h, mipCount, format, colorSpace, flags, nativeTex, ignoreMipmapLimit, mipmapLimitGroupName]).val() === 1; }
    IsRequestedMipmapLevelLoaded() { return window.ctx.call("UnityEngine.Texture2D", "IsRequestedMipmapLevelLoaded", [this.ptr]).val() === 1; }
    static IsRequestedMipmapLevelLoaded_Injected(_unity_self) { return window.ctx.call("UnityEngine.Texture2D", "IsRequestedMipmapLevelLoaded_Injected", [_unity_self]).val() === 1; }
    LoadRawTextureData_data_size(data, size) { window.ctx.call("UnityEngine.Texture2D", "LoadRawTextureData_21350", [this.ptr, data, size]); }
    LoadRawTextureData_data(data) { window.ctx.call("UnityEngine.Texture2D", "LoadRawTextureData_21351", [this.ptr, data]); }
    LoadRawTextureData(data) { window.ctx.call("UnityEngine.Texture2D", "LoadRawTextureData", [this.ptr, data]); }
    LoadRawTextureDataImpl(data, size) { return window.ctx.call("UnityEngine.Texture2D", "LoadRawTextureDataImpl", [this.ptr, data, size]).val() === 1; }
    LoadRawTextureDataImplArray(data) { return window.ctx.call("UnityEngine.Texture2D", "LoadRawTextureDataImplArray", [this.ptr, data]).val() === 1; }
    static LoadRawTextureDataImplArray_Injected(_unity_self, data) { return window.ctx.call("UnityEngine.Texture2D", "LoadRawTextureDataImplArray_Injected", [_unity_self, data]).val() === 1; }
    static LoadRawTextureDataImpl_Injected(_unity_self, data, size) { return window.ctx.call("UnityEngine.Texture2D", "LoadRawTextureDataImpl_Injected", [_unity_self, data, size]).val() === 1; }
    PackTextures_textures_padding_maximumAtlasSize_makeNoLongerReadable(textures, padding, maximumAtlasSize, makeNoLongerReadable) { return window.ctx.call("UnityEngine.Texture2D", "PackTextures_21317", [this.ptr, textures, padding, maximumAtlasSize, makeNoLongerReadable]); }
    PackTextures_textures_padding_maximumAtlasSize(textures, padding, maximumAtlasSize) { return window.ctx.call("UnityEngine.Texture2D", "PackTextures_21318", [this.ptr, textures, padding, maximumAtlasSize]); }
    PackTextures_textures_padding(textures, padding) { return window.ctx.call("UnityEngine.Texture2D", "PackTextures_21319", [this.ptr, textures, padding]); }
    static PackTextures_Injected(_unity_self, textures, padding, maximumAtlasSize, makeNoLongerReadable) { return window.ctx.call("UnityEngine.Texture2D", "PackTextures_Injected", [_unity_self, textures, padding, maximumAtlasSize, makeNoLongerReadable]); }
    ReadPixels_source_destX_destY_recalculateMipMaps(source, destX, destY, recalculateMipMaps) { window.ctx.call("UnityEngine.Texture2D", "ReadPixels_21359", [this.ptr, source, destX, destY, recalculateMipMaps]); }
    ReadPixels_source_destX_destY(source, destX, destY) { window.ctx.call("UnityEngine.Texture2D", "ReadPixels_21360", [this.ptr, source, destX, destY]); }
    ReadPixelsImpl(source, destX, destY, recalculateMipMaps) { window.ctx.call("UnityEngine.Texture2D", "ReadPixelsImpl", [this.ptr, source, destX, destY, recalculateMipMaps]); }
    static ReadPixelsImpl_Injected(_unity_self, source, destX, destY, recalculateMipMaps) { window.ctx.call("UnityEngine.Texture2D", "ReadPixelsImpl_Injected", [_unity_self, source, destX, destY, recalculateMipMaps]); }
    Reinitialize_width_height(width, height) { return window.ctx.call("UnityEngine.Texture2D", "Reinitialize_1565", [this.ptr, width, height]).val() === 1; }
    Reinitialize_width_height_format_hasMipMap(width, height, format, hasMipMap) { return window.ctx.call("UnityEngine.Texture2D", "Reinitialize_21354", [this.ptr, width, height, format, hasMipMap]).val() === 1; }
    Reinitialize_width_height_format_hasMipMap(width, height, format, hasMipMap) { return window.ctx.call("UnityEngine.Texture2D", "Reinitialize_21355", [this.ptr, width, height, format, hasMipMap]).val() === 1; }
    ReinitializeImpl(width, height) { return window.ctx.call("UnityEngine.Texture2D", "ReinitializeImpl", [this.ptr, width, height]).val() === 1; }
    static ReinitializeImpl_Injected(_unity_self, width, height) { return window.ctx.call("UnityEngine.Texture2D", "ReinitializeImpl_Injected", [_unity_self, width, height]).val() === 1; }
    ReinitializeWithFormatImpl(width, height, format, hasMipMap) { return window.ctx.call("UnityEngine.Texture2D", "ReinitializeWithFormatImpl", [this.ptr, width, height, format, hasMipMap]).val() === 1; }
    static ReinitializeWithFormatImpl_Injected(_unity_self, width, height, format, hasMipMap) { return window.ctx.call("UnityEngine.Texture2D", "ReinitializeWithFormatImpl_Injected", [_unity_self, width, height, format, hasMipMap]).val() === 1; }
    ReinitializeWithTextureFormatImpl(width, height, textureFormat, hasMipMap) { return window.ctx.call("UnityEngine.Texture2D", "ReinitializeWithTextureFormatImpl", [this.ptr, width, height, textureFormat, hasMipMap]).val() === 1; }
    static ReinitializeWithTextureFormatImpl_Injected(_unity_self, width, height, textureFormat, hasMipMap) { return window.ctx.call("UnityEngine.Texture2D", "ReinitializeWithTextureFormatImpl_Injected", [_unity_self, width, height, textureFormat, hasMipMap]).val() === 1; }
    Resize_width_height(width, height) { return window.ctx.call("UnityEngine.Texture2D", "Resize_21356", [this.ptr, width, height]).val() === 1; }
    Resize_width_height_format_hasMipMap(width, height, format, hasMipMap) { return window.ctx.call("UnityEngine.Texture2D", "Resize_21357", [this.ptr, width, height, format, hasMipMap]).val() === 1; }
    Resize_width_height_format_hasMipMap(width, height, format, hasMipMap) { return window.ctx.call("UnityEngine.Texture2D", "Resize_21358", [this.ptr, width, height, format, hasMipMap]).val() === 1; }
    SetAllPixels32(colors, miplevel) { window.ctx.call("UnityEngine.Texture2D", "SetAllPixels32", [this.ptr, colors, miplevel]); }
    static SetAllPixels32_Injected(_unity_self, colors, miplevel) { window.ctx.call("UnityEngine.Texture2D", "SetAllPixels32_Injected", [_unity_self, colors, miplevel]); }
    SetBlockOfPixels32(x, y, blockWidth, blockHeight, colors, miplevel) { window.ctx.call("UnityEngine.Texture2D", "SetBlockOfPixels32", [this.ptr, x, y, blockWidth, blockHeight, colors, miplevel]); }
    static SetBlockOfPixels32_Injected(_unity_self, x, y, blockWidth, blockHeight, colors, miplevel) { window.ctx.call("UnityEngine.Texture2D", "SetBlockOfPixels32_Injected", [_unity_self, x, y, blockWidth, blockHeight, colors, miplevel]); }
    SetIgnoreMipmapLimitAndReload(value) { window.ctx.call("UnityEngine.Texture2D", "SetIgnoreMipmapLimitAndReload", [this.ptr, value]); }
    static SetIgnoreMipmapLimitAndReload_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Texture2D", "SetIgnoreMipmapLimitAndReload_Injected", [_unity_self, value]); }
    SetPixel_x_y_color(x, y, color) { window.ctx.call("UnityEngine.Texture2D", "SetPixel_21342", [this.ptr, x, y, color]); }
    SetPixel_x_y_color_mipLevel(x, y, color, mipLevel) { window.ctx.call("UnityEngine.Texture2D", "SetPixel_21343", [this.ptr, x, y, color, mipLevel]); }
    SetPixelData(data, mipLevel, sourceDataStartIndex) { window.ctx.call("UnityEngine.Texture2D", "SetPixelData", [this.ptr, data, mipLevel, sourceDataStartIndex]); }
    SetPixelData(data, mipLevel, sourceDataStartIndex) { window.ctx.call("UnityEngine.Texture2D", "SetPixelData", [this.ptr, data, mipLevel, sourceDataStartIndex]); }
    SetPixelDataImpl(data, mipLevel, elementSize, dataArraySize, sourceDataStartIndex) { return window.ctx.call("UnityEngine.Texture2D", "SetPixelDataImpl", [this.ptr, data, mipLevel, elementSize, dataArraySize, sourceDataStartIndex]).val() === 1; }
    SetPixelDataImplArray(data, mipLevel, elementSize, dataArraySize, sourceDataStartIndex) { return window.ctx.call("UnityEngine.Texture2D", "SetPixelDataImplArray", [this.ptr, data, mipLevel, elementSize, dataArraySize, sourceDataStartIndex]).val() === 1; }
    static SetPixelDataImplArray_Injected(_unity_self, data, mipLevel, elementSize, dataArraySize, sourceDataStartIndex) { return window.ctx.call("UnityEngine.Texture2D", "SetPixelDataImplArray_Injected", [_unity_self, data, mipLevel, elementSize, dataArraySize, sourceDataStartIndex]).val() === 1; }
    static SetPixelDataImpl_Injected(_unity_self, data, mipLevel, elementSize, dataArraySize, sourceDataStartIndex) { return window.ctx.call("UnityEngine.Texture2D", "SetPixelDataImpl_Injected", [_unity_self, data, mipLevel, elementSize, dataArraySize, sourceDataStartIndex]).val() === 1; }
    SetPixelImpl(image, mip, x, y, color) { window.ctx.call("UnityEngine.Texture2D", "SetPixelImpl", [this.ptr, image, mip, x, y, color]); }
    static SetPixelImpl_Injected(_unity_self, image, mip, x, y, color) { window.ctx.call("UnityEngine.Texture2D", "SetPixelImpl_Injected", [_unity_self, image, mip, x, y, color]); }
    SetPixels_x_y_blockWidth_blockHeight_colors_miplevel(x, y, blockWidth, blockHeight, colors, miplevel) { window.ctx.call("UnityEngine.Texture2D", "SetPixels_21344", [this.ptr, x, y, blockWidth, blockHeight, colors, miplevel]); }
    SetPixels_x_y_blockWidth_blockHeight_colors(x, y, blockWidth, blockHeight, colors) { window.ctx.call("UnityEngine.Texture2D", "SetPixels_21345", [this.ptr, x, y, blockWidth, blockHeight, colors]); }
    SetPixels_colors_miplevel(colors, miplevel) { window.ctx.call("UnityEngine.Texture2D", "SetPixels_21346", [this.ptr, colors, miplevel]); }
    SetPixels_colors(colors) { window.ctx.call("UnityEngine.Texture2D", "SetPixels_2467", [this.ptr, colors]); }
    SetPixels32_colors_miplevel(colors, miplevel) { window.ctx.call("UnityEngine.Texture2D", "SetPixels32_21362", [this.ptr, colors, miplevel]); }
    SetPixels32_colors(colors) { window.ctx.call("UnityEngine.Texture2D", "SetPixels32_21363", [this.ptr, colors]); }
    SetPixels32_x_y_blockWidth_blockHeight_colors_miplevel(x, y, blockWidth, blockHeight, colors, miplevel) { window.ctx.call("UnityEngine.Texture2D", "SetPixels32_21364", [this.ptr, x, y, blockWidth, blockHeight, colors, miplevel]); }
    SetPixels32_x_y_blockWidth_blockHeight_colors(x, y, blockWidth, blockHeight, colors) { window.ctx.call("UnityEngine.Texture2D", "SetPixels32_21365", [this.ptr, x, y, blockWidth, blockHeight, colors]); }
    SetPixelsImpl(x, y, w, h, pixel, miplevel, frame) { window.ctx.call("UnityEngine.Texture2D", "SetPixelsImpl", [this.ptr, x, y, w, h, pixel, miplevel, frame]); }
    static SetPixelsImpl_Injected(_unity_self, x, y, w, h, pixel, miplevel, frame) { window.ctx.call("UnityEngine.Texture2D", "SetPixelsImpl_Injected", [_unity_self, x, y, w, h, pixel, miplevel, frame]); }
    UpdateExternalTexture(nativeTex) { window.ctx.call("UnityEngine.Texture2D", "UpdateExternalTexture", [this.ptr, nativeTex]); }
    static UpdateExternalTexture_Injected(_unity_self, nativeTex) { window.ctx.call("UnityEngine.Texture2D", "UpdateExternalTexture_Injected", [_unity_self, nativeTex]); }
    ValidateFormat_format_width_height(format, width, height) { return window.ctx.call("UnityEngine.Texture2D", "ValidateFormat_21323", [this.ptr, format, width, height]).val() === 1; }
    ValidateFormat_format_width_height(format, width, height) { return window.ctx.call("UnityEngine.Texture2D", "ValidateFormat_21324", [this.ptr, format, width, height]).val() === 1; }
    static get_activeMipmapLimit_Injected(_unity_self) { return window.ctx.call("UnityEngine.Texture2D", "get_activeMipmapLimit_Injected", [_unity_self]).val(); }
    static get_blackTexture_Injected() { return (()=>{
					let structptr_78c7b5 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Texture2D", "get_blackTexture_Injected", [structptr_78c7b5, ]);
					return structptr_78c7b5;
				})(); }
    static get_calculatedMipmapLevel_Injected(_unity_self) { return window.ctx.call("UnityEngine.Texture2D", "get_calculatedMipmapLevel_Injected", [_unity_self]).val(); }
    static get_desiredMipmapLevel_Injected(_unity_self) { return window.ctx.call("UnityEngine.Texture2D", "get_desiredMipmapLevel_Injected", [_unity_self]).val(); }
    static get_format_Injected(_unity_self) { return new TextureFormat(window.ctx.call("UnityEngine.Texture2D", "get_format_Injected", [_unity_self])); }
    static get_grayTexture_Injected() { return (()=>{
					let structptr_6221a3 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Texture2D", "get_grayTexture_Injected", [structptr_6221a3, ]);
					return structptr_6221a3;
				})(); }
    static get_isPreProcessed_Injected(_unity_self) { return window.ctx.call("UnityEngine.Texture2D", "get_isPreProcessed_Injected", [_unity_self]).val() === 1; }
    static get_isReadable_Injected(_unity_self) { return window.ctx.call("UnityEngine.Texture2D", "get_isReadable_Injected", [_unity_self]).val() === 1; }
    static get_linearGrayTexture_Injected() { return (()=>{
					let structptr_877be8 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Texture2D", "get_linearGrayTexture_Injected", [structptr_877be8, ]);
					return structptr_877be8;
				})(); }
    static get_loadAllMips_Injected(_unity_self) { return window.ctx.call("UnityEngine.Texture2D", "get_loadAllMips_Injected", [_unity_self]).val() === 1; }
    static get_loadedMipmapLevel_Injected(_unity_self) { return window.ctx.call("UnityEngine.Texture2D", "get_loadedMipmapLevel_Injected", [_unity_self]).val(); }
    static get_loadingMipmapLevel_Injected(_unity_self) { return window.ctx.call("UnityEngine.Texture2D", "get_loadingMipmapLevel_Injected", [_unity_self]).val(); }
    static get_minimumMipmapLevel_Injected(_unity_self) { return window.ctx.call("UnityEngine.Texture2D", "get_minimumMipmapLevel_Injected", [_unity_self]).val(); }
    static get_mipmapLimitGroup_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Texture2D", "get_mipmapLimitGroup_Injected", [_unity_self, ret]); }
    static get_normalTexture_Injected() { return (()=>{
					let structptr_21e367 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Texture2D", "get_normalTexture_Injected", [structptr_21e367, ]);
					return structptr_21e367;
				})(); }
    static get_redTexture_Injected() { return (()=>{
					let structptr_0d6076 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Texture2D", "get_redTexture_Injected", [structptr_0d6076, ]);
					return structptr_0d6076;
				})(); }
    static get_requestedMipmapLevel_Injected(_unity_self) { return window.ctx.call("UnityEngine.Texture2D", "get_requestedMipmapLevel_Injected", [_unity_self]).val(); }
    static get_streamingMipmapsPriority_Injected(_unity_self) { return window.ctx.call("UnityEngine.Texture2D", "get_streamingMipmapsPriority_Injected", [_unity_self]).val(); }
    static get_streamingMipmaps_Injected(_unity_self) { return window.ctx.call("UnityEngine.Texture2D", "get_streamingMipmaps_Injected", [_unity_self]).val() === 1; }
    static get_vtOnly_Injected(_unity_self) { return window.ctx.call("UnityEngine.Texture2D", "get_vtOnly_Injected", [_unity_self]).val() === 1; }
    static get_whiteTexture_Injected() { return (()=>{
					let structptr_074858 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Texture2D", "get_whiteTexture_Injected", [structptr_074858, ]);
					return structptr_074858;
				})(); }
    static set_loadAllMips_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Texture2D", "set_loadAllMips_Injected", [_unity_self, value]); }
    static set_minimumMipmapLevel_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Texture2D", "set_minimumMipmapLevel_Injected", [_unity_self, value]); }
    static set_requestedMipmapLevel_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Texture2D", "set_requestedMipmapLevel_Injected", [_unity_self, value]); }
}

export class SpritePackingMode {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class SpritePackingRotation {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class ColyseusSettings {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get Headers() { return window.ctx.call("Colyseus.ColyseusSettings", "get_Headers", [this.ptr]); }
    get WebRequestEndpoint() { return window.ctx.call("Colyseus.ColyseusSettings", "get_WebRequestEndpoint", [this.ptr]); }
    get WebSocketEndpoint() { return window.ctx.call("Colyseus.ColyseusSettings", "get_WebSocketEndpoint", [this.ptr]); }
    get _headersDictionary() { return this.ptr.readField(0x1C, 'i32').mstr(); }
    set _headersDictionary(v) { return this.ptr.writeField(0x1C, 'i32', window.ctx.createMstr(v)); }
    get _requestHeaders() { return JSArray(this.ptr.readField(0x18, 'i32')); }
    set _requestHeaders(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get colyseusServerAddress() { return this.ptr.readField(0xC, 'i32').mstr(); }
    set colyseusServerAddress(v) { return this.ptr.writeField(0xC, 'i32', window.ctx.createMstr(v)); }
    get colyseusServerPort() { return this.ptr.readField(0x10, 'i32').mstr(); }
    set colyseusServerPort(v) { return this.ptr.writeField(0x10, 'i32', window.ctx.createMstr(v)); }
    get useSecureProtocol() { return this.ptr.readField(0x14, 'i32').val() === 1; }
    set useSecureProtocol(v) { return this.ptr.writeField(0x14, 'i32', v); }
    BuildWebRequestEndpoint() { return window.ctx.call("Colyseus.ColyseusSettings", "BuildWebRequestEndpoint", [this.ptr]); }
    BuildWebSocketEndpoint() { return window.ctx.call("Colyseus.ColyseusSettings", "BuildWebSocketEndpoint", [this.ptr]); }
    static Clone(orig) { return new ColyseusSettings(window.ctx.call("Colyseus.ColyseusSettings", "Clone", [orig])); }
    GetBaseEndpoint(scheme) { return window.ctx.call("Colyseus.ColyseusSettings", "GetBaseEndpoint", [this.ptr, scheme]); }
    GetPort() { return window.ctx.call("Colyseus.ColyseusSettings", "GetPort", [this.ptr]).val(); }
    GetRequestHeaders() { return window.ctx.call("Colyseus.ColyseusSettings", "GetRequestHeaders", [this.ptr]); }
    GetWebRequestEndpointScheme() { return window.ctx.call("Colyseus.ColyseusSettings", "GetWebRequestEndpointScheme", [this.ptr]); }
    GetWebSocketEndpointScheme() { return window.ctx.call("Colyseus.ColyseusSettings", "GetWebSocketEndpointScheme", [this.ptr]); }
    SetRequestHeaders(headers) { window.ctx.call("Colyseus.ColyseusSettings", "SetRequestHeaders", [this.ptr, headers]); }
    ShouldIncludeServerPort() { return window.ctx.call("Colyseus.ColyseusSettings", "ShouldIncludeServerPort", [this.ptr]).val() === 1; }
}

export class Auth {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get Token() { return window.ctx.call("Colyseus.Auth", "get_Token", [this.ptr]); }
    set Token(v) { window.ctx.call("Colyseus.Auth", "set_Token", [this.ptr, v]); }
    get OnChangeHandlers() { return this.ptr.readField(0xC, 'i32'); }
    set OnChangeHandlers(v) { return this.ptr.writeField(0xC, 'i32', v); }
    get PATH() { return this.ptr.readField(0x0, 'i32').mstr(); }
    set PATH(v) { return this.ptr.writeField(0x0, 'i32', window.ctx.createMstr(v)); }
    get TOKEN_CACHE_KEY() { return this.ptr.readField(0x4, 'i32').mstr(); }
    set TOKEN_CACHE_KEY(v) { return this.ptr.writeField(0x4, 'i32', window.ctx.createMstr(v)); }
    get _client() { return new ColyseusClient(this.ptr.readField(0x8, 'i32')); }
    set _client(v) { return this.ptr.writeField(0x8, 'i32', v); }
    get initialized() { return this.ptr.readField(0x10, 'i32').val() === 1; }
    set initialized(v) { return this.ptr.writeField(0x10, 'i32', v); }
    GetUserData() { return window.ctx.call("Colyseus.Auth", "GetUserData", [this.ptr]); }
    OnChange(callback) { return window.ctx.call("Colyseus.Auth", "OnChange", [this.ptr, callback]); }
    RegisterWithEmailAndPassword(email, password, options) { return window.ctx.call("Colyseus.Auth", "RegisterWithEmailAndPassword", [this.ptr, email, password, options]); }
    RegisterWithEmailAndPassword_email_password_options(email, password, options) { return window.ctx.call("Colyseus.Auth", "RegisterWithEmailAndPassword_11789", [this.ptr, email, password, options]); }
    SendResetPasswordEmail(email, password) { return window.ctx.call("Colyseus.Auth", "SendResetPasswordEmail", [this.ptr, email, password]); }
    SignInAnonymously(options) { return window.ctx.call("Colyseus.Auth", "SignInAnonymously", [this.ptr, options]); }
    SignInAnonymously_options(options) { return window.ctx.call("Colyseus.Auth", "SignInAnonymously_11791", [this.ptr, options]); }
    SignInWithEmailAndPassword(email, password) { return window.ctx.call("Colyseus.Auth", "SignInWithEmailAndPassword", [this.ptr, email, password]); }
    SignInWithEmailAndPassword_email_password(email, password) { return window.ctx.call("Colyseus.Auth", "SignInWithEmailAndPassword_11790", [this.ptr, email, password]); }
    SignInWithProvider(providerName, settings) { return window.ctx.call("Colyseus.Auth", "SignInWithProvider", [this.ptr, providerName, settings]); }
    SignInWithProvider_providerName_settings(providerName, settings) { return window.ctx.call("Colyseus.Auth", "SignInWithProvider_11792", [this.ptr, providerName, settings]); }
    SignOut() { window.ctx.call("Colyseus.Auth", "SignOut", [this.ptr]); }
    emitChange(authData) { window.ctx.call("Colyseus.Auth", "emitChange", [this.ptr, authData]); }
    getAuthData(authData) { return window.ctx.call("Colyseus.Auth", "getAuthData", [this.ptr, authData]); }
}

export class HTTP {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get AuthToken() { return this.ptr.readField(0x8, 'i32').mstr(); }
    set AuthToken(v) { return this.ptr.writeField(0x8, 'i32', window.ctx.createMstr(v)); }
    get _settings() { return new ColyseusSettings(this.ptr.readField(0xC, 'i32')); }
    set _settings(v) { return this.ptr.writeField(0xC, 'i32', v); }
    _Delete_uriPath_jsonBody_headers(uriPath, jsonBody, headers) { return window.ctx.call("Colyseus.HTTP", "Delete_11775", [this.ptr, uriPath, jsonBody, headers]); }
    _Delete(uriPath, jsonBody, headers) { return window.ctx.call("Colyseus.HTTP", "Delete", [this.ptr, uriPath, jsonBody, headers]); }
    Get_uriPath_headers(uriPath, headers) { return window.ctx.call("Colyseus.HTTP", "Get_11773", [this.ptr, uriPath, headers]); }
    Get(uriPath, headers) { return window.ctx.call("Colyseus.HTTP", "Get", [this.ptr, uriPath, headers]); }
    GetRequestURL(pathWithQueryString) { return window.ctx.call("Colyseus.HTTP", "GetRequestURL", [this.ptr, pathWithQueryString]); }
    Post_uriPath_jsonBody_headers(uriPath, jsonBody, headers) { return window.ctx.call("Colyseus.HTTP", "Post_11774", [this.ptr, uriPath, jsonBody, headers]); }
    Post(uriPath, jsonBody, headers) { return window.ctx.call("Colyseus.HTTP", "Post", [this.ptr, uriPath, jsonBody, headers]); }
    Put_uriPath_jsonBody_headers(uriPath, jsonBody, headers) { return window.ctx.call("Colyseus.HTTP", "Put_11776", [this.ptr, uriPath, jsonBody, headers]); }
    Put(uriPath, jsonBody, headers) { return window.ctx.call("Colyseus.HTTP", "Put", [this.ptr, uriPath, jsonBody, headers]); }
    Request(uriMethod, uriPath, jsonBody, headers) { return window.ctx.call("Colyseus.HTTP", "Request", [this.ptr, uriMethod, uriPath, jsonBody, headers]); }
    Request_uriMethod_uriPath_jsonBody_headers(uriMethod, uriPath, jsonBody, headers) { return window.ctx.call("Colyseus.HTTP", "Request_1296", [this.ptr, uriMethod, uriPath, jsonBody, headers]); }
}

export class ColyseusConnection {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get IsOpen() { return this.ptr.readField(0x1C, 'i32').val() === 1; }
    set IsOpen(v) { return this.ptr.writeField(0x1C, 'i32', v); }
    get ProcessingMessageQueue() { return this.ptr.readField(0x1D, 'i32').val() === 1; }
    set ProcessingMessageQueue(v) { return this.ptr.writeField(0x1D, 'i32', v); }
    Initialize() { window.ctx.call("Colyseus.ColyseusConnection", "Initialize", [this.ptr]); }
    _OnClose(code) { window.ctx.call("Colyseus.ColyseusConnection", "_OnClose", [this.ptr, code]); }
    _OnOpen() { window.ctx.call("Colyseus.ColyseusConnection", "_OnOpen", [this.ptr]); }
}

export class JSONArray {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get Children() { return window.ctx.call("SimpleJSON.JSONArray", "get_Children", [this.ptr]); }
    get Count() { return window.ctx.call("SimpleJSON.JSONArray", "get_Count", [this.ptr]).val(); }
    get Inline() { return window.ctx.call("SimpleJSON.JSONArray", "get_Inline", [this.ptr]).val() === 1; }
    set Inline(v) { window.ctx.call("SimpleJSON.JSONArray", "set_Inline", [this.ptr, v]); }
    get IsArray() { return window.ctx.call("SimpleJSON.JSONArray", "get_IsArray", [this.ptr]).val() === 1; }
    get Item() { return new JSONNode(window.ctx.call("SimpleJSON.JSONArray", "get_Item", [this.ptr, aKey])); }
    set Item(v) { window.ctx.call("SimpleJSON.JSONArray", "set_Item", [this.ptr, aKey, v]); }
    get Tag() { return new JSONNodeType(window.ctx.call("SimpleJSON.JSONArray", "get_Tag", [this.ptr])); }
    get inline() { return this.ptr.readField(0xC, 'i32').val() === 1; }
    set inline(v) { return this.ptr.writeField(0xC, 'i32', v); }
    get m_List() { return this.ptr.readField(0x8, 'i32'); }
    set m_List(v) { return this.ptr.writeField(0x8, 'i32', v); }
    Add(aKey, aItem) { window.ctx.call("SimpleJSON.JSONArray", "Add", [this.ptr, aKey, aItem]); }
    Clear() { window.ctx.call("SimpleJSON.JSONArray", "Clear", [this.ptr]); }
    Clone() { return new JSONNode(window.ctx.call("SimpleJSON.JSONArray", "Clone", [this.ptr])); }
    GetEnumerator() { return (()=>{
					let structptr_1ff152 = window.ctx.malloc(50);
					window.ctx.call("SimpleJSON.JSONArray", "GetEnumerator", [structptr_1ff152, this.ptr]);
					return structptr_1ff152;
				})(); }
    Remove_aIndex(aIndex) { return new JSONNode(window.ctx.call("SimpleJSON.JSONArray", "Remove_9300", [this.ptr, aIndex])); }
    Remove_aNode(aNode) { return new JSONNode(window.ctx.call("SimpleJSON.JSONArray", "Remove_9301", [this.ptr, aNode])); }
    WriteToStringBuilder(aSB, aIndent, aIndentInc, aMode) { window.ctx.call("SimpleJSON.JSONArray", "WriteToStringBuilder", [this.ptr, aSB, aIndent, aIndentInc, aMode]); }
}

export class JSONObject {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get Children() { return window.ctx.call("SimpleJSON.JSONObject", "get_Children", [this.ptr]); }
    get Count() { return window.ctx.call("SimpleJSON.JSONObject", "get_Count", [this.ptr]).val(); }
    get Inline() { return window.ctx.call("SimpleJSON.JSONObject", "get_Inline", [this.ptr]).val() === 1; }
    set Inline(v) { window.ctx.call("SimpleJSON.JSONObject", "set_Inline", [this.ptr, v]); }
    get IsObject() { return window.ctx.call("SimpleJSON.JSONObject", "get_IsObject", [this.ptr]).val() === 1; }
    get Item() { return new JSONNode(window.ctx.call("SimpleJSON.JSONObject", "get_Item", [this.ptr, aIndex])); }
    set Item(v) { window.ctx.call("SimpleJSON.JSONObject", "set_Item", [this.ptr, aIndex, v]); }
    get Tag() { return new JSONNodeType(window.ctx.call("SimpleJSON.JSONObject", "get_Tag", [this.ptr])); }
    get inline() { return this.ptr.readField(0xC, 'i32').val() === 1; }
    set inline(v) { return this.ptr.writeField(0xC, 'i32', v); }
    get m_Dict() { return this.ptr.readField(0x8, 'i32'); }
    set m_Dict(v) { return this.ptr.writeField(0x8, 'i32', v); }
    Add(aKey, aItem) { window.ctx.call("SimpleJSON.JSONObject", "Add", [this.ptr, aKey, aItem]); }
    Clear() { window.ctx.call("SimpleJSON.JSONObject", "Clear", [this.ptr]); }
    Clone() { return new JSONNode(window.ctx.call("SimpleJSON.JSONObject", "Clone", [this.ptr])); }
    GetEnumerator() { return (()=>{
					let structptr_6a07f0 = window.ctx.malloc(50);
					window.ctx.call("SimpleJSON.JSONObject", "GetEnumerator", [structptr_6a07f0, this.ptr]);
					return structptr_6a07f0;
				})(); }
    GetValueOrDefault(aKey, aDefault) { return new JSONNode(window.ctx.call("SimpleJSON.JSONObject", "GetValueOrDefault", [this.ptr, aKey, aDefault])); }
    HasKey(aKey) { return window.ctx.call("SimpleJSON.JSONObject", "HasKey", [this.ptr, aKey]).val() === 1; }
    Remove_aKey(aKey) { return new JSONNode(window.ctx.call("SimpleJSON.JSONObject", "Remove_9326", [this.ptr, aKey])); }
    Remove_aIndex(aIndex) { return new JSONNode(window.ctx.call("SimpleJSON.JSONObject", "Remove_9327", [this.ptr, aIndex])); }
    Remove_aNode(aNode) { return new JSONNode(window.ctx.call("SimpleJSON.JSONObject", "Remove_9328", [this.ptr, aNode])); }
    WriteToStringBuilder(aSB, aIndent, aIndentInc, aMode) { window.ctx.call("SimpleJSON.JSONObject", "WriteToStringBuilder", [this.ptr, aSB, aIndent, aIndentInc, aMode]); }
}

export class JSONNodeType {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class HideFlags {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class ContactPairHeader {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get body() { return new Component(window.ctx.call("UnityEngine.ContactPairHeader", "get_body", [this.ptr])); }
    get hasRemovedBody() { return window.ctx.call("UnityEngine.ContactPairHeader", "get_hasRemovedBody", [this.ptr]).val() === 1; }
    get otherBody() { return new Component(window.ctx.call("UnityEngine.ContactPairHeader", "get_otherBody", [this.ptr])); }
    get m_BodyID() { return new EntityId(this.ptr.readField(0x0, 'i32')); }
    set m_BodyID(v) { return this.ptr.writeField(0x0, 'i32', v); }
    get m_Flags() { return new CollisionPairHeaderFlags(this.ptr.readField(0x10, 'i32')); }
    set m_Flags(v) { return this.ptr.writeField(0x10, 'i32', v); }
    get m_NbPairs() { return this.ptr.readField(0xC, 'i32'); }
    set m_NbPairs(v) { return this.ptr.writeField(0xC, 'i32', v); }
    get m_OtherBodyID() { return new EntityId(this.ptr.readField(0x4, 'i32')); }
    set m_OtherBodyID(v) { return this.ptr.writeField(0x4, 'i32', v); }
    get m_RelativeVelocity() { return new Vector3(this.ptr.readField(0x14, 'i32')); }
    set m_RelativeVelocity(v) { return this.ptr.writeField(0x14, 'i32', v); }
    get m_StartPtr() { return new IntPtr(this.ptr.readField(0x8, 'i32')); }
    set m_StartPtr(v) { return this.ptr.writeField(0x8, 'i32', v); }
    GetContactPair(index) { return window.ctx.call("UnityEngine.ContactPairHeader", "GetContactPair", [this.ptr, index]); }
    GetContactPair_Internal(index) { return window.ctx.call("UnityEngine.ContactPairHeader", "GetContactPair_Internal", [this.ptr, index]); }
}

export class ContactPair {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get collider() { return new Collider(window.ctx.call("UnityEngine.ContactPair", "get_collider", [this.ptr])); }
    get hasRemovedCollider() { return window.ctx.call("UnityEngine.ContactPair", "get_hasRemovedCollider", [this.ptr]).val() === 1; }
    get isCollisionEnter() { return window.ctx.call("UnityEngine.ContactPair", "get_isCollisionEnter", [this.ptr]).val() === 1; }
    get isCollisionExit() { return window.ctx.call("UnityEngine.ContactPair", "get_isCollisionExit", [this.ptr]).val() === 1; }
    get isCollisionStay() { return window.ctx.call("UnityEngine.ContactPair", "get_isCollisionStay", [this.ptr]).val() === 1; }
    get otherCollider() { return new Collider(window.ctx.call("UnityEngine.ContactPair", "get_otherCollider", [this.ptr])); }
    get m_ColliderID() { return new EntityId(this.ptr.readField(0x0, 'i32')); }
    set m_ColliderID(v) { return this.ptr.writeField(0x0, 'i32', v); }
    get m_Events() { return new CollisionPairEventFlags(this.ptr.readField(0x12, 'i32')); }
    set m_Events(v) { return this.ptr.writeField(0x12, 'i32', v); }
    get m_Flags() { return new CollisionPairFlags(this.ptr.readField(0x10, 'i32')); }
    set m_Flags(v) { return this.ptr.writeField(0x10, 'i32', v); }
    get m_ImpulseSum() { return new Vector3(this.ptr.readField(0x14, 'i32')); }
    set m_ImpulseSum(v) { return this.ptr.writeField(0x14, 'i32', v); }
    get m_NbPoints() { return this.ptr.readField(0xC, 'i32'); }
    set m_NbPoints(v) { return this.ptr.writeField(0xC, 'i32', v); }
    get m_OtherColliderID() { return new EntityId(this.ptr.readField(0x4, 'i32')); }
    set m_OtherColliderID(v) { return this.ptr.writeField(0x4, 'i32', v); }
    get m_StartPtr() { return new IntPtr(this.ptr.readField(0x8, 'i32')); }
    set m_StartPtr(v) { return this.ptr.writeField(0x8, 'i32', v); }
    ExtractContactsArray(managedContainer, flipped) { return window.ctx.call("UnityEngine.ContactPair", "ExtractContactsArray", [this.ptr, managedContainer, flipped]).val(); }
    GetContactPoint(index) { return window.ctx.call("UnityEngine.ContactPair", "GetContactPoint", [this.ptr, index]); }
    GetContactPoint_Internal(index) { return window.ctx.call("UnityEngine.ContactPair", "GetContactPoint_Internal", [this.ptr, index]); }
}

export class RectTransform {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get anchoredPosition() { return (()=>{
					let structptr_408a2f = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.RectTransform", "get_anchoredPosition", [structptr_408a2f, this.ptr]);
					return structptr_408a2f;
				})(); }
    set anchoredPosition(v) { window.ctx.call("UnityEngine.RectTransform", "set_anchoredPosition", [this.ptr, v]); }
    get anchoredPosition3D() { return (()=>{
					let structptr_57736d = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.RectTransform", "get_anchoredPosition3D", [structptr_57736d, this.ptr]);
					return structptr_57736d;
				})(); }
    set anchoredPosition3D(v) { window.ctx.call("UnityEngine.RectTransform", "set_anchoredPosition3D", [this.ptr, v]); }
    get anchorMax() { return (()=>{
					let structptr_aead16 = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.RectTransform", "get_anchorMax", [structptr_aead16, this.ptr]);
					return structptr_aead16;
				})(); }
    set anchorMax(v) { window.ctx.call("UnityEngine.RectTransform", "set_anchorMax", [this.ptr, v]); }
    get anchorMin() { return (()=>{
					let structptr_589dfd = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.RectTransform", "get_anchorMin", [structptr_589dfd, this.ptr]);
					return structptr_589dfd;
				})(); }
    set anchorMin(v) { window.ctx.call("UnityEngine.RectTransform", "set_anchorMin", [this.ptr, v]); }
    get drivenByObject() { return new Object(window.ctx.call("UnityEngine.RectTransform", "get_drivenByObject", [this.ptr])); }
    set drivenByObject(v) { window.ctx.call("UnityEngine.RectTransform", "set_drivenByObject", [this.ptr, v]); }
    get drivenProperties() { return new DrivenTransformProperties(window.ctx.call("UnityEngine.RectTransform", "get_drivenProperties", [this.ptr])); }
    set drivenProperties(v) { window.ctx.call("UnityEngine.RectTransform", "set_drivenProperties", [this.ptr, v]); }
    get offsetMax() { return (()=>{
					let structptr_d1f77e = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.RectTransform", "get_offsetMax", [structptr_d1f77e, this.ptr]);
					return structptr_d1f77e;
				})(); }
    set offsetMax(v) { window.ctx.call("UnityEngine.RectTransform", "set_offsetMax", [this.ptr, v]); }
    get offsetMin() { return (()=>{
					let structptr_775885 = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.RectTransform", "get_offsetMin", [structptr_775885, this.ptr]);
					return structptr_775885;
				})(); }
    set offsetMin(v) { window.ctx.call("UnityEngine.RectTransform", "set_offsetMin", [this.ptr, v]); }
    get pivot() { return (()=>{
					let structptr_5aa6f1 = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.RectTransform", "get_pivot", [structptr_5aa6f1, this.ptr]);
					return structptr_5aa6f1;
				})(); }
    set pivot(v) { window.ctx.call("UnityEngine.RectTransform", "set_pivot", [this.ptr, v]); }
    get rect() { return (()=>{
					let structptr_63cfd3 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.RectTransform", "get_rect", [structptr_63cfd3, this.ptr]);
					return structptr_63cfd3;
				})(); }
    get sendChildDimensionsChange() { return window.ctx.call("UnityEngine.RectTransform", "get_sendChildDimensionsChange", [this.ptr]).val() === 1; }
    set sendChildDimensionsChange(v) { window.ctx.call("UnityEngine.RectTransform", "set_sendChildDimensionsChange", [this.ptr, v]); }
    get sizeDelta() { return (()=>{
					let structptr_e7ab6a = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.RectTransform", "get_sizeDelta", [structptr_e7ab6a, this.ptr]);
					return structptr_e7ab6a;
				})(); }
    set sizeDelta(v) { window.ctx.call("UnityEngine.RectTransform", "set_sizeDelta", [this.ptr, v]); }
    get reapplyDrivenProperties() { return this.ptr.readField(0x0, 'i32'); }
    set reapplyDrivenProperties(v) { return this.ptr.writeField(0x0, 'i32', v); }
    ForceUpdateRectTransforms() { window.ctx.call("UnityEngine.RectTransform", "ForceUpdateRectTransforms", [this.ptr]); }
    static ForceUpdateRectTransforms_Injected(_unity_self) { window.ctx.call("UnityEngine.RectTransform", "ForceUpdateRectTransforms_Injected", [_unity_self]); }
    GetLocalCorners(fourCornersArray) { window.ctx.call("UnityEngine.RectTransform", "GetLocalCorners", [this.ptr, fourCornersArray]); }
    GetParentSize() { return (()=>{
					let structptr_d37f06 = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.RectTransform", "GetParentSize", [structptr_d37f06, this.ptr]);
					return structptr_d37f06;
				})(); }
    GetRectInParentSpace() { return (()=>{
					let structptr_bb0fa4 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.RectTransform", "GetRectInParentSpace", [structptr_bb0fa4, this.ptr]);
					return structptr_bb0fa4;
				})(); }
    GetWorldCorners(fourCornersArray) { window.ctx.call("UnityEngine.RectTransform", "GetWorldCorners", [this.ptr, fourCornersArray]); }
    static SendReapplyDrivenProperties(driven) { window.ctx.call("UnityEngine.RectTransform", "SendReapplyDrivenProperties", [driven]); }
    SetInsetAndSizeFromParentEdge(edge, inset, size) { window.ctx.call("UnityEngine.RectTransform", "SetInsetAndSizeFromParentEdge", [this.ptr, edge, inset, size]); }
    SetSizeWithCurrentAnchors(axis, size) { window.ctx.call("UnityEngine.RectTransform", "SetSizeWithCurrentAnchors", [this.ptr, axis, size]); }
    static get_anchorMax_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.RectTransform", "get_anchorMax_Injected", [_unity_self, ret]); }
    static get_anchorMin_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.RectTransform", "get_anchorMin_Injected", [_unity_self, ret]); }
    static get_anchoredPosition_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.RectTransform", "get_anchoredPosition_Injected", [_unity_self, ret]); }
    static get_drivenByObject_Injected(_unity_self) { return (()=>{
					let structptr_f42c9d = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.RectTransform", "get_drivenByObject_Injected", [structptr_f42c9d, _unity_self]);
					return structptr_f42c9d;
				})(); }
    static get_drivenProperties_Injected(_unity_self) { return new DrivenTransformProperties(window.ctx.call("UnityEngine.RectTransform", "get_drivenProperties_Injected", [_unity_self])); }
    static get_pivot_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.RectTransform", "get_pivot_Injected", [_unity_self, ret]); }
    static get_rect_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.RectTransform", "get_rect_Injected", [_unity_self, ret]); }
    static get_sendChildDimensionsChange_Injected(_unity_self) { return window.ctx.call("UnityEngine.RectTransform", "get_sendChildDimensionsChange_Injected", [_unity_self]).val() === 1; }
    static get_sizeDelta_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.RectTransform", "get_sizeDelta_Injected", [_unity_self, ret]); }
    static set_anchorMax_Injected(_unity_self, value) { window.ctx.call("UnityEngine.RectTransform", "set_anchorMax_Injected", [_unity_self, value]); }
    static set_anchorMin_Injected(_unity_self, value) { window.ctx.call("UnityEngine.RectTransform", "set_anchorMin_Injected", [_unity_self, value]); }
    static set_anchoredPosition_Injected(_unity_self, value) { window.ctx.call("UnityEngine.RectTransform", "set_anchoredPosition_Injected", [_unity_self, value]); }
    static set_drivenByObject_Injected(_unity_self, value) { window.ctx.call("UnityEngine.RectTransform", "set_drivenByObject_Injected", [_unity_self, value]); }
    static set_drivenProperties_Injected(_unity_self, value) { window.ctx.call("UnityEngine.RectTransform", "set_drivenProperties_Injected", [_unity_self, value]); }
    static set_pivot_Injected(_unity_self, value) { window.ctx.call("UnityEngine.RectTransform", "set_pivot_Injected", [_unity_self, value]); }
    static set_sendChildDimensionsChange_Injected(_unity_self, value) { window.ctx.call("UnityEngine.RectTransform", "set_sendChildDimensionsChange_Injected", [_unity_self, value]); }
    static set_sizeDelta_Injected(_unity_self, value) { window.ctx.call("UnityEngine.RectTransform", "set_sizeDelta_Injected", [_unity_self, value]); }
}

export class CollisionDetectionMode {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class RigidbodyConstraints {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class RigidbodyInterpolation {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class GraphicsFormat {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class TextureDimension {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class RenderTextureFormat {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class RenderTextureMemoryless {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class VRTextureUsage {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class ShadowSamplingMode {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class MaterialGlobalIlluminationFlags {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class Shader {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get disableBatching() { return new DisableBatchingType(window.ctx.call("UnityEngine.Shader", "get_disableBatching", [this.ptr])); }
    static get enabledGlobalKeywords() { return window.ctx.call("UnityEngine.Shader", "get_enabledGlobalKeywords", []); }
    static get globalKeywords() { return window.ctx.call("UnityEngine.Shader", "get_globalKeywords", []); }
    static get globalMaximumLOD() { return window.ctx.call("UnityEngine.Shader", "get_globalMaximumLOD", []).val(); }
    static set globalMaximumLOD(v) { window.ctx.call("UnityEngine.Shader", "set_globalMaximumLOD", [v]); }
    static get globalRenderPipeline() { return window.ctx.call("UnityEngine.Shader", "get_globalRenderPipeline", []); }
    static set globalRenderPipeline(v) { window.ctx.call("UnityEngine.Shader", "set_globalRenderPipeline", [v]); }
    static get globalShaderHardwareTier() { return new ShaderHardwareTier(window.ctx.call("UnityEngine.Shader", "get_globalShaderHardwareTier", [])); }
    static set globalShaderHardwareTier(v) { window.ctx.call("UnityEngine.Shader", "set_globalShaderHardwareTier", [v]); }
    get isSupported() { return window.ctx.call("UnityEngine.Shader", "get_isSupported", [this.ptr]).val() === 1; }
    get keywordSpace() { return (()=>{
					let structptr_605424 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Shader", "get_keywordSpace", [structptr_605424, this.ptr]);
					return structptr_605424;
				})(); }
    static get maximumChunksOverride() { return window.ctx.call("UnityEngine.Shader", "get_maximumChunksOverride", []).val(); }
    static set maximumChunksOverride(v) { window.ctx.call("UnityEngine.Shader", "set_maximumChunksOverride", [v]); }
    get maximumLOD() { return window.ctx.call("UnityEngine.Shader", "get_maximumLOD", [this.ptr]).val(); }
    set maximumLOD(v) { window.ctx.call("UnityEngine.Shader", "set_maximumLOD", [this.ptr, v]); }
    get passCount() { return window.ctx.call("UnityEngine.Shader", "get_passCount", [this.ptr]).val(); }
    get renderQueue() { return window.ctx.call("UnityEngine.Shader", "get_renderQueue", [this.ptr]).val(); }
    get subshaderCount() { return window.ctx.call("UnityEngine.Shader", "get_subshaderCount", [this.ptr]).val(); }
    static CheckPropertyIndex(s, propertyIndex) { window.ctx.call("UnityEngine.Shader", "CheckPropertyIndex", [s, propertyIndex]); }
    static CreateFromCompiledData(compiledData, dependencies) { return new Shader(window.ctx.call("UnityEngine.Shader", "CreateFromCompiledData", [compiledData, dependencies])); }
    static CreateFromCompiledData_Injected(compiledData, dependencies) { return (()=>{
					let structptr_4bb92c = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Shader", "CreateFromCompiledData_Injected", [structptr_4bb92c, compiledData, dependencies]);
					return structptr_4bb92c;
				})(); }
    static DisableKeyword_keyword(keyword) { window.ctx.call("UnityEngine.Shader", "DisableKeyword_19927", [keyword]); }
    static DisableKeyword_keyword(keyword) { window.ctx.call("UnityEngine.Shader", "DisableKeyword_19934", [keyword]); }
    static DisableKeywordFast(keyword) { window.ctx.call("UnityEngine.Shader", "DisableKeywordFast", [keyword]); }
    static DisableKeywordFast_Injected(keyword) { window.ctx.call("UnityEngine.Shader", "DisableKeywordFast_Injected", [keyword]); }
    static DisableKeyword_Injected(keyword) { window.ctx.call("UnityEngine.Shader", "DisableKeyword_Injected", [keyword]); }
    static EnableKeyword_keyword(keyword) { window.ctx.call("UnityEngine.Shader", "EnableKeyword_19926", [keyword]); }
    static EnableKeyword_keyword(keyword) { window.ctx.call("UnityEngine.Shader", "EnableKeyword_19933", [keyword]); }
    static EnableKeywordFast(keyword) { window.ctx.call("UnityEngine.Shader", "EnableKeywordFast", [keyword]); }
    static EnableKeywordFast_Injected(keyword) { window.ctx.call("UnityEngine.Shader", "EnableKeywordFast_Injected", [keyword]); }
    static EnableKeyword_Injected(keyword) { window.ctx.call("UnityEngine.Shader", "EnableKeyword_Injected", [keyword]); }
    static ExtractGlobalFloatArray(name, values) { window.ctx.call("UnityEngine.Shader", "ExtractGlobalFloatArray", [name, values]); }
    static ExtractGlobalFloatArrayImpl(name, val) { window.ctx.call("UnityEngine.Shader", "ExtractGlobalFloatArrayImpl", [name, val]); }
    static ExtractGlobalFloatArrayImpl_Injected(name, val) { window.ctx.call("UnityEngine.Shader", "ExtractGlobalFloatArrayImpl_Injected", [name, val]); }
    static ExtractGlobalMatrixArray(name, values) { window.ctx.call("UnityEngine.Shader", "ExtractGlobalMatrixArray", [name, values]); }
    static ExtractGlobalMatrixArrayImpl(name, val) { window.ctx.call("UnityEngine.Shader", "ExtractGlobalMatrixArrayImpl", [name, val]); }
    static ExtractGlobalMatrixArrayImpl_Injected(name, val) { window.ctx.call("UnityEngine.Shader", "ExtractGlobalMatrixArrayImpl_Injected", [name, val]); }
    static ExtractGlobalPropertyNames(type, names) { window.ctx.call("UnityEngine.Shader", "ExtractGlobalPropertyNames", [type, names]); }
    static ExtractGlobalPropertyNamesImpl(propertyType, names) { window.ctx.call("UnityEngine.Shader", "ExtractGlobalPropertyNamesImpl", [propertyType, names]); }
    static ExtractGlobalVectorArray(name, values) { window.ctx.call("UnityEngine.Shader", "ExtractGlobalVectorArray", [name, values]); }
    static ExtractGlobalVectorArrayImpl(name, val) { window.ctx.call("UnityEngine.Shader", "ExtractGlobalVectorArrayImpl", [name, val]); }
    static ExtractGlobalVectorArrayImpl_Injected(name, val) { window.ctx.call("UnityEngine.Shader", "ExtractGlobalVectorArrayImpl_Injected", [name, val]); }
    static Find(name) { return new Shader(window.ctx.call("UnityEngine.Shader", "Find", [name])); }
    static FindBuiltin(name) { return new Shader(window.ctx.call("UnityEngine.Shader", "FindBuiltin", [name])); }
    static FindBuiltin_Injected(name) { return (()=>{
					let structptr_bb0ed2 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Shader", "FindBuiltin_Injected", [structptr_bb0ed2, name]);
					return structptr_bb0ed2;
				})(); }
    FindPassTagValue_passIndex_tagName(passIndex, tagName) { return (()=>{
					let structptr_7c9019 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Shader", "FindPassTagValue_19950", [structptr_7c9019, this.ptr, passIndex, tagName]);
					return structptr_7c9019;
				})(); }
    FindPassTagValue_subshaderIndex_passIndex_tagName(subshaderIndex, passIndex, tagName) { return (()=>{
					let structptr_cdaae9 = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Shader", "FindPassTagValue_19951", [structptr_cdaae9, this.ptr, subshaderIndex, passIndex, tagName]);
					return structptr_cdaae9;
				})(); }
    FindPropertyIndex(propertyName) { return window.ctx.call("UnityEngine.Shader", "FindPropertyIndex", [this.ptr, propertyName]).val(); }
    static FindPropertyIndex_Injected(_unity_self, propertyName) { return window.ctx.call("UnityEngine.Shader", "FindPropertyIndex_Injected", [_unity_self, propertyName]).val(); }
    FindSubshaderTagValue(subshaderIndex, tagName) { return (()=>{
					let structptr_aa26ed = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Shader", "FindSubshaderTagValue", [structptr_aa26ed, this.ptr, subshaderIndex, tagName]);
					return structptr_aa26ed;
				})(); }
    FindTextureStack(propertyIndex, stackName, layerIndex) { return window.ctx.call("UnityEngine.Shader", "FindTextureStack", [this.ptr, propertyIndex, stackName, layerIndex]).val() === 1; }
    static FindTextureStackImpl(s, propertyIdx, stackName, layerIndex) { return window.ctx.call("UnityEngine.Shader", "FindTextureStackImpl", [s, propertyIdx, stackName, layerIndex]).val() === 1; }
    static FindTextureStackImpl_Injected(s, propertyIdx, stackName, layerIndex) { return window.ctx.call("UnityEngine.Shader", "FindTextureStackImpl_Injected", [s, propertyIdx, stackName, layerIndex]).val() === 1; }
    static GetAllGlobalKeywords() { return window.ctx.call("UnityEngine.Shader", "GetAllGlobalKeywords", []); }
    static GetAllGlobalKeywords_Injected(ret) { window.ctx.call("UnityEngine.Shader", "GetAllGlobalKeywords_Injected", [ret]); }
    GetDependency(name) { return new Shader(window.ctx.call("UnityEngine.Shader", "GetDependency", [this.ptr, name])); }
    static GetDependency_Injected(_unity_self, name) { return (()=>{
					let structptr_da1b1a = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Shader", "GetDependency_Injected", [structptr_da1b1a, _unity_self, name]);
					return structptr_da1b1a;
				})(); }
    static GetEnabledGlobalKeywords() { return window.ctx.call("UnityEngine.Shader", "GetEnabledGlobalKeywords", []); }
    static GetEnabledGlobalKeywords_Injected(ret) { window.ctx.call("UnityEngine.Shader", "GetEnabledGlobalKeywords_Injected", [ret]); }
    static GetGlobalColor_name(name) { return (()=>{
					let structptr_94ec6a = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Shader", "GetGlobalColor_20037", [structptr_94ec6a, name]);
					return structptr_94ec6a;
				})(); }
    static GetGlobalColor_nameID(nameID) { return (()=>{
					let structptr_089aa3 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Shader", "GetGlobalColor_20038", [structptr_089aa3, nameID]);
					return structptr_089aa3;
				})(); }
    static GetGlobalFloat_name(name) { return window.ctx.call("UnityEngine.Shader", "GetGlobalFloat_20031", [name]).val(); }
    static GetGlobalFloat_nameID(nameID) { return window.ctx.call("UnityEngine.Shader", "GetGlobalFloat_20032", [nameID]).val(); }
    static GetGlobalFloatArray_name(name) { return window.ctx.call("UnityEngine.Shader", "GetGlobalFloatArray_20043", [name]); }
    static GetGlobalFloatArray_nameID(nameID) { return window.ctx.call("UnityEngine.Shader", "GetGlobalFloatArray_20044", [nameID]); }
    static GetGlobalFloatArray_name_values(name, values) { window.ctx.call("UnityEngine.Shader", "GetGlobalFloatArray_20049", [name, values]); }
    static GetGlobalFloatArray_nameID_values(nameID, values) { window.ctx.call("UnityEngine.Shader", "GetGlobalFloatArray_20050", [nameID, values]); }
    static GetGlobalFloatArrayCountImpl(name) { return window.ctx.call("UnityEngine.Shader", "GetGlobalFloatArrayCountImpl", [name]).val(); }
    static GetGlobalFloatArrayImpl(name) { return window.ctx.call("UnityEngine.Shader", "GetGlobalFloatArrayImpl", [name]); }
    static GetGlobalFloatArrayImpl_Injected(name, ret) { window.ctx.call("UnityEngine.Shader", "GetGlobalFloatArrayImpl_Injected", [name, ret]); }
    static GetGlobalFloatImpl(name) { return window.ctx.call("UnityEngine.Shader", "GetGlobalFloatImpl", [name]).val(); }
    static GetGlobalInt_name(name) { return window.ctx.call("UnityEngine.Shader", "GetGlobalInt_20029", [name]).val(); }
    static GetGlobalInt_nameID(nameID) { return window.ctx.call("UnityEngine.Shader", "GetGlobalInt_20030", [nameID]).val(); }
    static GetGlobalIntImpl(name) { return window.ctx.call("UnityEngine.Shader", "GetGlobalIntImpl", [name]).val(); }
    static GetGlobalInteger_name(name) { return window.ctx.call("UnityEngine.Shader", "GetGlobalInteger_20033", [name]).val(); }
    static GetGlobalInteger_nameID(nameID) { return window.ctx.call("UnityEngine.Shader", "GetGlobalInteger_20034", [nameID]).val(); }
    static GetGlobalMatrix_name(name) { return (()=>{
					let structptr_fa09d3 = window.ctx.malloc(64);
					window.ctx.call("UnityEngine.Shader", "GetGlobalMatrix_20039", [structptr_fa09d3, name]);
					return structptr_fa09d3;
				})(); }
    static GetGlobalMatrix_nameID(nameID) { return (()=>{
					let structptr_485bf6 = window.ctx.malloc(64);
					window.ctx.call("UnityEngine.Shader", "GetGlobalMatrix_20040", [structptr_485bf6, nameID]);
					return structptr_485bf6;
				})(); }
    static GetGlobalMatrixArray_name(name) { return window.ctx.call("UnityEngine.Shader", "GetGlobalMatrixArray_20047", [name]); }
    static GetGlobalMatrixArray_nameID(nameID) { return window.ctx.call("UnityEngine.Shader", "GetGlobalMatrixArray_20048", [nameID]); }
    static GetGlobalMatrixArray_name_values(name, values) { window.ctx.call("UnityEngine.Shader", "GetGlobalMatrixArray_20053", [name, values]); }
    static GetGlobalMatrixArray_nameID_values(nameID, values) { window.ctx.call("UnityEngine.Shader", "GetGlobalMatrixArray_20054", [nameID, values]); }
    static GetGlobalMatrixArrayCountImpl(name) { return window.ctx.call("UnityEngine.Shader", "GetGlobalMatrixArrayCountImpl", [name]).val(); }
    static GetGlobalMatrixArrayImpl(name) { return window.ctx.call("UnityEngine.Shader", "GetGlobalMatrixArrayImpl", [name]); }
    static GetGlobalMatrixArrayImpl_Injected(name, ret) { window.ctx.call("UnityEngine.Shader", "GetGlobalMatrixArrayImpl_Injected", [name, ret]); }
    static GetGlobalMatrixImpl(name) { return (()=>{
					let structptr_c1b79d = window.ctx.malloc(64);
					window.ctx.call("UnityEngine.Shader", "GetGlobalMatrixImpl", [structptr_c1b79d, name]);
					return structptr_c1b79d;
				})(); }
    static GetGlobalMatrixImpl_Injected(name, ret) { window.ctx.call("UnityEngine.Shader", "GetGlobalMatrixImpl_Injected", [name, ret]); }
    static GetGlobalPropertyCount() { return window.ctx.call("UnityEngine.Shader", "GetGlobalPropertyCount", []).val(); }
    static GetGlobalPropertyCountImpl(propertyType) { return window.ctx.call("UnityEngine.Shader", "GetGlobalPropertyCountImpl", [propertyType]).val(); }
    static GetGlobalPropertyNames(type, names) { window.ctx.call("UnityEngine.Shader", "GetGlobalPropertyNames", [type, names]); }
    static GetGlobalTexture_name(name) { return new Texture(window.ctx.call("UnityEngine.Shader", "GetGlobalTexture_20041", [name])); }
    static GetGlobalTexture_nameID(nameID) { return new Texture(window.ctx.call("UnityEngine.Shader", "GetGlobalTexture_20042", [nameID])); }
    static GetGlobalTextureImpl(name) { return new Texture(window.ctx.call("UnityEngine.Shader", "GetGlobalTextureImpl", [name])); }
    static GetGlobalTextureImpl_Injected(name) { return (()=>{
					let structptr_f1530c = window.ctx.malloc(50);
					window.ctx.call("UnityEngine.Shader", "GetGlobalTextureImpl_Injected", [structptr_f1530c, name]);
					return structptr_f1530c;
				})(); }
    static GetGlobalVector_name(name) { return (()=>{
					let structptr_3588c2 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Shader", "GetGlobalVector_20035", [structptr_3588c2, name]);
					return structptr_3588c2;
				})(); }
    static GetGlobalVector_nameID(nameID) { return (()=>{
					let structptr_c67554 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Shader", "GetGlobalVector_20036", [structptr_c67554, nameID]);
					return structptr_c67554;
				})(); }
    static GetGlobalVectorArray_name(name) { return window.ctx.call("UnityEngine.Shader", "GetGlobalVectorArray_20045", [name]); }
    static GetGlobalVectorArray_nameID(nameID) { return window.ctx.call("UnityEngine.Shader", "GetGlobalVectorArray_20046", [nameID]); }
    static GetGlobalVectorArray_name_values(name, values) { window.ctx.call("UnityEngine.Shader", "GetGlobalVectorArray_20051", [name, values]); }
    static GetGlobalVectorArray_nameID_values(nameID, values) { window.ctx.call("UnityEngine.Shader", "GetGlobalVectorArray_20052", [nameID, values]); }
    static GetGlobalVectorArrayCountImpl(name) { return window.ctx.call("UnityEngine.Shader", "GetGlobalVectorArrayCountImpl", [name]).val(); }
    static GetGlobalVectorArrayImpl(name) { return window.ctx.call("UnityEngine.Shader", "GetGlobalVectorArrayImpl", [name]); }
    static GetGlobalVectorArrayImpl_Injected(name, ret) { window.ctx.call("UnityEngine.Shader", "GetGlobalVectorArrayImpl_Injected", [name, ret]); }
    static GetGlobalVectorImpl(name) { return (()=>{
					let structptr_c4ab45 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Shader", "GetGlobalVectorImpl", [structptr_c4ab45, name]);
					return structptr_c4ab45;
				})(); }
    static GetGlobalVectorImpl_Injected(name, ret) { window.ctx.call("UnityEngine.Shader", "GetGlobalVectorImpl_Injected", [name, ret]); }
    GetPassCountInSubshader(subshaderIndex) { return window.ctx.call("UnityEngine.Shader", "GetPassCountInSubshader", [this.ptr, subshaderIndex]).val(); }
    static GetPassCountInSubshader_Injected(_unity_self, subshaderIndex) { return window.ctx.call("UnityEngine.Shader", "GetPassCountInSubshader_Injected", [_unity_self, subshaderIndex]).val(); }
    static GetPropertyAttributes_shader_propertyIndex(shader, propertyIndex) { return window.ctx.call("UnityEngine.Shader", "GetPropertyAttributes_20062", [shader, propertyIndex]); }
    GetPropertyAttributes_propertyIndex(propertyIndex) { return window.ctx.call("UnityEngine.Shader", "GetPropertyAttributes_20076", [this.ptr, propertyIndex]); }
    static GetPropertyAttributes_Injected(shader, propertyIndex) { return window.ctx.call("UnityEngine.Shader", "GetPropertyAttributes_Injected", [shader, propertyIndex]); }
    GetPropertyCount() { return window.ctx.call("UnityEngine.Shader", "GetPropertyCount", [this.ptr]).val(); }
    static GetPropertyCount_Injected(_unity_self) { return window.ctx.call("UnityEngine.Shader", "GetPropertyCount_Injected", [_unity_self]).val(); }
    GetPropertyDefaultFloatValue(propertyIndex) { return window.ctx.call("UnityEngine.Shader", "GetPropertyDefaultFloatValue", [this.ptr, propertyIndex]).val(); }
    static GetPropertyDefaultIntValue_shader_propertyIndex(shader, propertyIndex) { return window.ctx.call("UnityEngine.Shader", "GetPropertyDefaultIntValue_20063", [shader, propertyIndex]).val(); }
    GetPropertyDefaultIntValue_propertyIndex(propertyIndex) { return window.ctx.call("UnityEngine.Shader", "GetPropertyDefaultIntValue_20080", [this.ptr, propertyIndex]).val(); }
    static GetPropertyDefaultIntValue_Injected(shader, propertyIndex) { return window.ctx.call("UnityEngine.Shader", "GetPropertyDefaultIntValue_Injected", [shader, propertyIndex]).val(); }
    static GetPropertyDefaultValue(shader, propertyIndex) { return (()=>{
					let structptr_174557 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Shader", "GetPropertyDefaultValue", [structptr_174557, shader, propertyIndex]);
					return structptr_174557;
				})(); }
    static GetPropertyDefaultValue_Injected(shader, propertyIndex, ret) { window.ctx.call("UnityEngine.Shader", "GetPropertyDefaultValue_Injected", [shader, propertyIndex, ret]); }
    GetPropertyDefaultVectorValue(propertyIndex) { return (()=>{
					let structptr_ea73a3 = window.ctx.malloc(16);
					window.ctx.call("UnityEngine.Shader", "GetPropertyDefaultVectorValue", [structptr_ea73a3, this.ptr, propertyIndex]);
					return structptr_ea73a3;
				})(); }
    static GetPropertyDescription_shader_propertyIndex(shader, propertyIndex) { return window.ctx.call("UnityEngine.Shader", "GetPropertyDescription_20060", [shader, propertyIndex]); }
    GetPropertyDescription_propertyIndex(propertyIndex) { return window.ctx.call("UnityEngine.Shader", "GetPropertyDescription_20074", [this.ptr, propertyIndex]); }
    static GetPropertyDescription_Injected(shader, propertyIndex, ret) { window.ctx.call("UnityEngine.Shader", "GetPropertyDescription_Injected", [shader, propertyIndex, ret]); }
    static GetPropertyFlags_shader_propertyIndex(shader, propertyIndex) { return new ShaderPropertyFlags(window.ctx.call("UnityEngine.Shader", "GetPropertyFlags_20061", [shader, propertyIndex])); }
    GetPropertyFlags_propertyIndex(propertyIndex) { return new ShaderPropertyFlags(window.ctx.call("UnityEngine.Shader", "GetPropertyFlags_20075", [this.ptr, propertyIndex])); }
    static GetPropertyFlags_Injected(shader, propertyIndex) { return new ShaderPropertyFlags(window.ctx.call("UnityEngine.Shader", "GetPropertyFlags_Injected", [shader, propertyIndex])); }
    static GetPropertyName_shader_propertyIndex(shader, propertyIndex) { return window.ctx.call("UnityEngine.Shader", "GetPropertyName_20057", [shader, propertyIndex]); }
    GetPropertyName_propertyIndex(propertyIndex) { return window.ctx.call("UnityEngine.Shader", "GetPropertyName_20071", [this.ptr, propertyIndex]); }
    static GetPropertyNameId_shader_propertyIndex(shader, propertyIndex) { return window.ctx.call("UnityEngine.Shader", "GetPropertyNameId_20058", [shader, propertyIndex]).val(); }
    GetPropertyNameId_propertyIndex(propertyIndex) { return window.ctx.call("UnityEngine.Shader", "GetPropertyNameId_20072", [this.ptr, propertyIndex]).val(); }
    static GetPropertyNameId_Injected(shader, propertyIndex) { return window.ctx.call("UnityEngine.Shader", "GetPropertyNameId_Injected", [shader, propertyIndex]).val(); }
    static GetPropertyName_Injected(shader, propertyIndex, ret) { window.ctx.call("UnityEngine.Shader", "GetPropertyName_Injected", [shader, propertyIndex, ret]); }
    GetPropertyRangeLimits(propertyIndex) { return (()=>{
					let structptr_a991ea = window.ctx.malloc(8);
					window.ctx.call("UnityEngine.Shader", "GetPropertyRangeLimits", [structptr_a991ea, this.ptr, propertyIndex]);
					return structptr_a991ea;
				})(); }
    static GetPropertyTextureDefaultName_shader_propertyIndex(shader, propertyIndex) { return window.ctx.call("UnityEngine.Shader", "GetPropertyTextureDefaultName_20066", [shader, propertyIndex]); }
    GetPropertyTextureDefaultName_propertyIndex(propertyIndex) { return window.ctx.call("UnityEngine.Shader", "GetPropertyTextureDefaultName_20082", [this.ptr, propertyIndex]); }
    static GetPropertyTextureDefaultName_Injected(shader, propertyIndex, ret) { window.ctx.call("UnityEngine.Shader", "GetPropertyTextureDefaultName_Injected", [shader, propertyIndex, ret]); }
    static GetPropertyTextureDimension_shader_propertyIndex(shader, propertyIndex) { return new TextureDimension(window.ctx.call("UnityEngine.Shader", "GetPropertyTextureDimension_20065", [shader, propertyIndex])); }
    GetPropertyTextureDimension_propertyIndex(propertyIndex) { return new TextureDimension(window.ctx.call("UnityEngine.Shader", "GetPropertyTextureDimension_20081", [this.ptr, propertyIndex])); }
    static GetPropertyTextureDimension_Injected(shader, propertyIndex) { return new TextureDimension(window.ctx.call("UnityEngine.Shader", "GetPropertyTextureDimension_Injected", [shader, propertyIndex])); }
    static GetPropertyType_shader_propertyIndex(shader, propertyIndex) { return new ShaderPropertyType(window.ctx.call("UnityEngine.Shader", "GetPropertyType_20059", [shader, propertyIndex])); }
    GetPropertyType_propertyIndex(propertyIndex) { return new ShaderPropertyType(window.ctx.call("UnityEngine.Shader", "GetPropertyType_20073", [this.ptr, propertyIndex])); }
    static GetPropertyType_Injected(shader, propertyIndex) { return new ShaderPropertyType(window.ctx.call("UnityEngine.Shader", "GetPropertyType_Injected", [shader, propertyIndex])); }
    static IDToTag(name) { return window.ctx.call("UnityEngine.Shader", "IDToTag", [name]); }
    static IDToTag_Injected(name, ret) { window.ctx.call("UnityEngine.Shader", "IDToTag_Injected", [name, ret]); }
    Internal_FindPassTagValue(passIndex, tagName) { return window.ctx.call("UnityEngine.Shader", "Internal_FindPassTagValue", [this.ptr, passIndex, tagName]).val(); }
    Internal_FindPassTagValueInSubShader(subShaderIndex, passIndex, tagName) { return window.ctx.call("UnityEngine.Shader", "Internal_FindPassTagValueInSubShader", [this.ptr, subShaderIndex, passIndex, tagName]).val(); }
    static Internal_FindPassTagValueInSubShader_Injected(_unity_self, subShaderIndex, passIndex, tagName) { return window.ctx.call("UnityEngine.Shader", "Internal_FindPassTagValueInSubShader_Injected", [_unity_self, subShaderIndex, passIndex, tagName]).val(); }
    static Internal_FindPassTagValue_Injected(_unity_self, passIndex, tagName) { return window.ctx.call("UnityEngine.Shader", "Internal_FindPassTagValue_Injected", [_unity_self, passIndex, tagName]).val(); }
    Internal_FindSubshaderTagValue(subShaderIndex, tagName) { return window.ctx.call("UnityEngine.Shader", "Internal_FindSubshaderTagValue", [this.ptr, subShaderIndex, tagName]).val(); }
    static Internal_FindSubshaderTagValue_Injected(_unity_self, subShaderIndex, tagName) { return window.ctx.call("UnityEngine.Shader", "Internal_FindSubshaderTagValue_Injected", [_unity_self, subShaderIndex, tagName]).val(); }
    static IsKeywordEnabled_keyword(keyword) { return window.ctx.call("UnityEngine.Shader", "IsKeywordEnabled_19928", [keyword]).val() === 1; }
    static IsKeywordEnabled_keyword(keyword) { return window.ctx.call("UnityEngine.Shader", "IsKeywordEnabled_19936", [keyword]).val() === 1; }
    static IsKeywordEnabledFast(keyword) { return window.ctx.call("UnityEngine.Shader", "IsKeywordEnabledFast", [keyword]).val() === 1; }
    static IsKeywordEnabledFast_Injected(keyword) { return window.ctx.call("UnityEngine.Shader", "IsKeywordEnabledFast_Injected", [keyword]).val() === 1; }
    static IsKeywordEnabled_Injected(keyword) { return window.ctx.call("UnityEngine.Shader", "IsKeywordEnabled_Injected", [keyword]).val() === 1; }
    static PropertyToID(name) { return window.ctx.call("UnityEngine.Shader", "PropertyToID", [name]).val(); }
    static PropertyToID_Injected(name) { return window.ctx.call("UnityEngine.Shader", "PropertyToID_Injected", [name]).val(); }
    static SetGlobalBuffer_name_value(name, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalBuffer_20007", [name, value]); }
    static SetGlobalBuffer_nameID_value(nameID, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalBuffer_20008", [nameID, value]); }
    static SetGlobalBuffer_name_value(name, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalBuffer_20009", [name, value]); }
    static SetGlobalBuffer_nameID_value(nameID, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalBuffer_20010", [nameID, value]); }
    static SetGlobalBufferImpl(name, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalBufferImpl", [name, value]); }
    static SetGlobalBufferImpl_Injected(name, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalBufferImpl_Injected", [name, value]); }
    static SetGlobalColor_name_value(name, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalColor_19999", [name, value]); }
    static SetGlobalColor_nameID_value(nameID, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalColor_20000", [nameID, value]); }
    static SetGlobalConstantBuffer_name_value_offset_size(name, value, offset, size) { window.ctx.call("UnityEngine.Shader", "SetGlobalConstantBuffer_20011", [name, value, offset, size]); }
    static SetGlobalConstantBuffer_nameID_value_offset_size(nameID, value, offset, size) { window.ctx.call("UnityEngine.Shader", "SetGlobalConstantBuffer_20012", [nameID, value, offset, size]); }
    static SetGlobalConstantBuffer_name_value_offset_size(name, value, offset, size) { window.ctx.call("UnityEngine.Shader", "SetGlobalConstantBuffer_20013", [name, value, offset, size]); }
    static SetGlobalConstantBuffer_nameID_value_offset_size(nameID, value, offset, size) { window.ctx.call("UnityEngine.Shader", "SetGlobalConstantBuffer_20014", [nameID, value, offset, size]); }
    static SetGlobalConstantBufferImpl(name, value, offset, size) { window.ctx.call("UnityEngine.Shader", "SetGlobalConstantBufferImpl", [name, value, offset, size]); }
    static SetGlobalConstantBufferImpl_Injected(name, value, offset, size) { window.ctx.call("UnityEngine.Shader", "SetGlobalConstantBufferImpl_Injected", [name, value, offset, size]); }
    static SetGlobalConstantGraphicsBufferImpl(name, value, offset, size) { window.ctx.call("UnityEngine.Shader", "SetGlobalConstantGraphicsBufferImpl", [name, value, offset, size]); }
    static SetGlobalConstantGraphicsBufferImpl_Injected(name, value, offset, size) { window.ctx.call("UnityEngine.Shader", "SetGlobalConstantGraphicsBufferImpl_Injected", [name, value, offset, size]); }
    static SetGlobalFloat_name_value(name, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalFloat_19993", [name, value]); }
    static SetGlobalFloat_nameID_value(nameID, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalFloat_19994", [nameID, value]); }
    static SetGlobalFloatArray_name_values_count(name, values, count) { window.ctx.call("UnityEngine.Shader", "SetGlobalFloatArray_19984", [name, values, count]); }
    static SetGlobalFloatArray_name_values(name, values) { window.ctx.call("UnityEngine.Shader", "SetGlobalFloatArray_20017", [name, values]); }
    static SetGlobalFloatArray_nameID_values(nameID, values) { window.ctx.call("UnityEngine.Shader", "SetGlobalFloatArray_20018", [nameID, values]); }
    static SetGlobalFloatArray_name_values(name, values) { window.ctx.call("UnityEngine.Shader", "SetGlobalFloatArray_20019", [name, values]); }
    static SetGlobalFloatArray_nameID_values(nameID, values) { window.ctx.call("UnityEngine.Shader", "SetGlobalFloatArray_20020", [nameID, values]); }
    static SetGlobalFloatArrayImpl(name, values, count) { window.ctx.call("UnityEngine.Shader", "SetGlobalFloatArrayImpl", [name, values, count]); }
    static SetGlobalFloatArrayImpl_Injected(name, values, count) { window.ctx.call("UnityEngine.Shader", "SetGlobalFloatArrayImpl_Injected", [name, values, count]); }
    static SetGlobalFloatImpl(name, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalFloatImpl", [name, value]); }
    static SetGlobalGraphicsBufferImpl(name, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalGraphicsBufferImpl", [name, value]); }
    static SetGlobalGraphicsBufferImpl_Injected(name, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalGraphicsBufferImpl_Injected", [name, value]); }
    static SetGlobalInt_name_value(name, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalInt_19991", [name, value]); }
    static SetGlobalInt_nameID_value(nameID, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalInt_19992", [nameID, value]); }
    static SetGlobalIntImpl(name, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalIntImpl", [name, value]); }
    static SetGlobalInteger_name_value(name, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalInteger_19995", [name, value]); }
    static SetGlobalInteger_nameID_value(nameID, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalInteger_19996", [nameID, value]); }
    static SetGlobalMatrix_name_value(name, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalMatrix_20001", [name, value]); }
    static SetGlobalMatrix_nameID_value(nameID, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalMatrix_20002", [nameID, value]); }
    static SetGlobalMatrixArray_name_values_count(name, values, count) { window.ctx.call("UnityEngine.Shader", "SetGlobalMatrixArray_19986", [name, values, count]); }
    static SetGlobalMatrixArray_name_values(name, values) { window.ctx.call("UnityEngine.Shader", "SetGlobalMatrixArray_20025", [name, values]); }
    static SetGlobalMatrixArray_nameID_values(nameID, values) { window.ctx.call("UnityEngine.Shader", "SetGlobalMatrixArray_20026", [nameID, values]); }
    static SetGlobalMatrixArray_name_values(name, values) { window.ctx.call("UnityEngine.Shader", "SetGlobalMatrixArray_20027", [name, values]); }
    static SetGlobalMatrixArray_nameID_values(nameID, values) { window.ctx.call("UnityEngine.Shader", "SetGlobalMatrixArray_20028", [nameID, values]); }
    static SetGlobalMatrixArrayImpl(name, values, count) { window.ctx.call("UnityEngine.Shader", "SetGlobalMatrixArrayImpl", [name, values, count]); }
    static SetGlobalMatrixArrayImpl_Injected(name, values, count) { window.ctx.call("UnityEngine.Shader", "SetGlobalMatrixArrayImpl_Injected", [name, values, count]); }
    static SetGlobalMatrixImpl(name, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalMatrixImpl", [name, value]); }
    static SetGlobalMatrixImpl_Injected(name, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalMatrixImpl_Injected", [name, value]); }
    static SetGlobalRayTracingAccelerationStructure_name_value(name, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalRayTracingAccelerationStructure_20015", [name, value]); }
    static SetGlobalRayTracingAccelerationStructure_nameID_value(nameID, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalRayTracingAccelerationStructure_20016", [nameID, value]); }
    static SetGlobalRayTracingAccelerationStructureImpl(name, accelerationStructure) { window.ctx.call("UnityEngine.Shader", "SetGlobalRayTracingAccelerationStructureImpl", [name, accelerationStructure]); }
    static SetGlobalRayTracingAccelerationStructureImpl_Injected(name, accelerationStructure) { window.ctx.call("UnityEngine.Shader", "SetGlobalRayTracingAccelerationStructureImpl_Injected", [name, accelerationStructure]); }
    static SetGlobalRenderTextureImpl(name, value, element) { window.ctx.call("UnityEngine.Shader", "SetGlobalRenderTextureImpl", [name, value, element]); }
    static SetGlobalRenderTextureImpl_Injected(name, value, element) { window.ctx.call("UnityEngine.Shader", "SetGlobalRenderTextureImpl_Injected", [name, value, element]); }
    static SetGlobalTexture_name_value(name, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalTexture_20003", [name, value]); }
    static SetGlobalTexture_nameID_value(nameID, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalTexture_20004", [nameID, value]); }
    static SetGlobalTexture_name_value_element(name, value, element) { window.ctx.call("UnityEngine.Shader", "SetGlobalTexture_20005", [name, value, element]); }
    static SetGlobalTexture_nameID_value_element(nameID, value, element) { window.ctx.call("UnityEngine.Shader", "SetGlobalTexture_20006", [nameID, value, element]); }
    static SetGlobalTextureImpl(name, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalTextureImpl", [name, value]); }
    static SetGlobalTextureImpl_Injected(name, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalTextureImpl_Injected", [name, value]); }
    static SetGlobalVector_name_value(name, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalVector_19997", [name, value]); }
    static SetGlobalVector_nameID_value(nameID, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalVector_19998", [nameID, value]); }
    static SetGlobalVectorArray_name_values_count(name, values, count) { window.ctx.call("UnityEngine.Shader", "SetGlobalVectorArray_19985", [name, values, count]); }
    static SetGlobalVectorArray_name_values(name, values) { window.ctx.call("UnityEngine.Shader", "SetGlobalVectorArray_20021", [name, values]); }
    static SetGlobalVectorArray_nameID_values(nameID, values) { window.ctx.call("UnityEngine.Shader", "SetGlobalVectorArray_20022", [nameID, values]); }
    static SetGlobalVectorArray_name_values(name, values) { window.ctx.call("UnityEngine.Shader", "SetGlobalVectorArray_20023", [name, values]); }
    static SetGlobalVectorArray_nameID_values(nameID, values) { window.ctx.call("UnityEngine.Shader", "SetGlobalVectorArray_20024", [nameID, values]); }
    static SetGlobalVectorArrayImpl(name, values, count) { window.ctx.call("UnityEngine.Shader", "SetGlobalVectorArrayImpl", [name, values, count]); }
    static SetGlobalVectorArrayImpl_Injected(name, values, count) { window.ctx.call("UnityEngine.Shader", "SetGlobalVectorArrayImpl_Injected", [name, values, count]); }
    static SetGlobalVectorImpl(name, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalVectorImpl", [name, value]); }
    static SetGlobalVectorImpl_Injected(name, value) { window.ctx.call("UnityEngine.Shader", "SetGlobalVectorImpl_Injected", [name, value]); }
    static SetKeyword(keyword, value) { window.ctx.call("UnityEngine.Shader", "SetKeyword", [keyword, value]); }
    static SetKeywordFast(keyword, value) { window.ctx.call("UnityEngine.Shader", "SetKeywordFast", [keyword, value]); }
    static SetKeywordFast_Injected(keyword, value) { window.ctx.call("UnityEngine.Shader", "SetKeywordFast_Injected", [keyword, value]); }
    static TagToID(name) { return window.ctx.call("UnityEngine.Shader", "TagToID", [name]).val(); }
    static TagToID_Injected(name) { return window.ctx.call("UnityEngine.Shader", "TagToID_Injected", [name]).val(); }
    static WarmupAllShaders() { window.ctx.call("UnityEngine.Shader", "WarmupAllShaders", []); }
    static get_disableBatching_Injected(_unity_self) { return new DisableBatchingType(window.ctx.call("UnityEngine.Shader", "get_disableBatching_Injected", [_unity_self])); }
    static get_globalRenderPipeline_Injected(ret) { window.ctx.call("UnityEngine.Shader", "get_globalRenderPipeline_Injected", [ret]); }
    static get_isSupported_Injected(_unity_self) { return window.ctx.call("UnityEngine.Shader", "get_isSupported_Injected", [_unity_self]).val() === 1; }
    static get_keywordSpace_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.Shader", "get_keywordSpace_Injected", [_unity_self, ret]); }
    static get_maximumLOD_Injected(_unity_self) { return window.ctx.call("UnityEngine.Shader", "get_maximumLOD_Injected", [_unity_self]).val(); }
    static get_passCount_Injected(_unity_self) { return window.ctx.call("UnityEngine.Shader", "get_passCount_Injected", [_unity_self]).val(); }
    static get_renderQueue_Injected(_unity_self) { return window.ctx.call("UnityEngine.Shader", "get_renderQueue_Injected", [_unity_self]).val(); }
    static get_subshaderCount_Injected(_unity_self) { return window.ctx.call("UnityEngine.Shader", "get_subshaderCount_Injected", [_unity_self]).val(); }
    static set_globalRenderPipeline_Injected(value) { window.ctx.call("UnityEngine.Shader", "set_globalRenderPipeline_Injected", [value]); }
    static set_maximumLOD_Injected(_unity_self, value) { window.ctx.call("UnityEngine.Shader", "set_maximumLOD_Injected", [_unity_self, value]); }
}

export class AnimatorControllerParameterType {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class TextureWrapMode {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class TextureColorSpace {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class CapsuleCollider {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get center() { return (()=>{
					let structptr_bc7853 = window.ctx.malloc(12);
					window.ctx.call("UnityEngine.CapsuleCollider", "get_center", [structptr_bc7853, this.ptr]);
					return structptr_bc7853;
				})(); }
    set center(v) { window.ctx.call("UnityEngine.CapsuleCollider", "set_center", [this.ptr, v]); }
    get direction() { return window.ctx.call("UnityEngine.CapsuleCollider", "get_direction", [this.ptr]).val(); }
    set direction(v) { window.ctx.call("UnityEngine.CapsuleCollider", "set_direction", [this.ptr, v]); }
    get height() { return window.ctx.call("UnityEngine.CapsuleCollider", "get_height", [this.ptr]).val(); }
    set height(v) { window.ctx.call("UnityEngine.CapsuleCollider", "set_height", [this.ptr, v]); }
    get radius() { return window.ctx.call("UnityEngine.CapsuleCollider", "get_radius", [this.ptr]).val(); }
    set radius(v) { window.ctx.call("UnityEngine.CapsuleCollider", "set_radius", [this.ptr, v]); }
    static get_center_Injected(_unity_self, ret) { window.ctx.call("UnityEngine.CapsuleCollider", "get_center_Injected", [_unity_self, ret]); }
    static get_direction_Injected(_unity_self) { return window.ctx.call("UnityEngine.CapsuleCollider", "get_direction_Injected", [_unity_self]).val(); }
    static get_height_Injected(_unity_self) { return window.ctx.call("UnityEngine.CapsuleCollider", "get_height_Injected", [_unity_self]).val(); }
    static get_radius_Injected(_unity_self) { return window.ctx.call("UnityEngine.CapsuleCollider", "get_radius_Injected", [_unity_self]).val(); }
    static set_center_Injected(_unity_self, value) { window.ctx.call("UnityEngine.CapsuleCollider", "set_center_Injected", [_unity_self, value]); }
    static set_direction_Injected(_unity_self, value) { window.ctx.call("UnityEngine.CapsuleCollider", "set_direction_Injected", [_unity_self, value]); }
    static set_height_Injected(_unity_self, value) { window.ctx.call("UnityEngine.CapsuleCollider", "set_height_Injected", [_unity_self, value]); }
    static set_radius_Injected(_unity_self, value) { window.ctx.call("UnityEngine.CapsuleCollider", "set_radius_Injected", [_unity_self, value]); }
}

export class PhysicsMaterial {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    static Internal_CreateDynamicsMaterial(mat, name) { window.ctx.call("UnityEngine.PhysicsMaterial", "Internal_CreateDynamicsMaterial", [mat, name]); }
    static Internal_CreateDynamicsMaterial_Injected(mat, name) { window.ctx.call("UnityEngine.PhysicsMaterial", "Internal_CreateDynamicsMaterial_Injected", [mat, name]); }
}

export class ICharacterController {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    AfterCharacterUpdate(deltaTime) { window.ctx.call("KinematicCharacterController.ICharacterController", "AfterCharacterUpdate", [this.ptr, deltaTime]); }
    BeforeCharacterUpdate(deltaTime) { window.ctx.call("KinematicCharacterController.ICharacterController", "BeforeCharacterUpdate", [this.ptr, deltaTime]); }
    OnDiscreteCollisionDetected(hitCollider) { window.ctx.call("KinematicCharacterController.ICharacterController", "OnDiscreteCollisionDetected", [this.ptr, hitCollider]); }
    OnGroundHit(hitCollider, hitNormal, hitPoint, hitStabilityReport) { window.ctx.call("KinematicCharacterController.ICharacterController", "OnGroundHit", [this.ptr, hitCollider, hitNormal, hitPoint, hitStabilityReport]); }
    OnMovementHit(hitCollider, hitNormal, hitPoint, hitStabilityReport) { window.ctx.call("KinematicCharacterController.ICharacterController", "OnMovementHit", [this.ptr, hitCollider, hitNormal, hitPoint, hitStabilityReport]); }
    PostGroundingUpdate(deltaTime) { window.ctx.call("KinematicCharacterController.ICharacterController", "PostGroundingUpdate", [this.ptr, deltaTime]); }
    ProcessHitStabilityReport(hitCollider, hitNormal, hitPoint, atCharacterPosition, atCharacterRotation, hitStabilityReport) { window.ctx.call("KinematicCharacterController.ICharacterController", "ProcessHitStabilityReport", [this.ptr, hitCollider, hitNormal, hitPoint, atCharacterPosition, atCharacterRotation, hitStabilityReport]); }
    UpdateRotation(currentRotation, deltaTime) { window.ctx.call("KinematicCharacterController.ICharacterController", "UpdateRotation", [this.ptr, currentRotation, deltaTime]); }
    UpdateVelocity(currentVelocity, deltaTime) { window.ctx.call("KinematicCharacterController.ICharacterController", "UpdateVelocity", [this.ptr, currentVelocity, deltaTime]); }
}

export class CharacterGroundingReport {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get FoundAnyGround() { return this.ptr.readField(0x0, 'i32').val() === 1; }
    set FoundAnyGround(v) { return this.ptr.writeField(0x0, 'i32', v); }
    get GroundCollider() { return new Collider(this.ptr.readField(0x28, 'i32')); }
    set GroundCollider(v) { return this.ptr.writeField(0x28, 'i32', v); }
    get GroundNormal() { return new Vector3(this.ptr.readField(0x4, 'i32')); }
    set GroundNormal(v) { return this.ptr.writeField(0x4, 'i32', v); }
    get GroundPoint() { return new Vector3(this.ptr.readField(0x2C, 'i32')); }
    set GroundPoint(v) { return this.ptr.writeField(0x2C, 'i32', v); }
    get InnerGroundNormal() { return new Vector3(this.ptr.readField(0x10, 'i32')); }
    set InnerGroundNormal(v) { return this.ptr.writeField(0x10, 'i32', v); }
    get IsStableOnGround() { return this.ptr.readField(0x1, 'i32').val() === 1; }
    set IsStableOnGround(v) { return this.ptr.writeField(0x1, 'i32', v); }
    get OuterGroundNormal() { return new Vector3(this.ptr.readField(0x1C, 'i32')); }
    set OuterGroundNormal(v) { return this.ptr.writeField(0x1C, 'i32', v); }
    get SnappingPrevented() { return this.ptr.readField(0x2, 'i32').val() === 1; }
    set SnappingPrevented(v) { return this.ptr.writeField(0x2, 'i32', v); }
    CopyFrom(transientGroundingReport) { window.ctx.call("KinematicCharacterController.CharacterGroundingReport", "CopyFrom", [this.ptr, transientGroundingReport]); }
}

export class CharacterTransientGroundingReport {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get FoundAnyGround() { return this.ptr.readField(0x0, 'i32').val() === 1; }
    set FoundAnyGround(v) { return this.ptr.writeField(0x0, 'i32', v); }
    get GroundNormal() { return new Vector3(this.ptr.readField(0x4, 'i32')); }
    set GroundNormal(v) { return this.ptr.writeField(0x4, 'i32', v); }
    get InnerGroundNormal() { return new Vector3(this.ptr.readField(0x10, 'i32')); }
    set InnerGroundNormal(v) { return this.ptr.writeField(0x10, 'i32', v); }
    get IsStableOnGround() { return this.ptr.readField(0x1, 'i32').val() === 1; }
    set IsStableOnGround(v) { return this.ptr.writeField(0x1, 'i32', v); }
    get OuterGroundNormal() { return new Vector3(this.ptr.readField(0x1C, 'i32')); }
    set OuterGroundNormal(v) { return this.ptr.writeField(0x1C, 'i32', v); }
    get SnappingPrevented() { return this.ptr.readField(0x2, 'i32').val() === 1; }
    set SnappingPrevented(v) { return this.ptr.writeField(0x2, 'i32', v); }
    CopyFrom(groundingReport) { window.ctx.call("KinematicCharacterController.CharacterTransientGroundingReport", "CopyFrom", [this.ptr, groundingReport]); }
}

export class RigidbodyInteractionType {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class StepHandlingMethod {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class ShakeInstance {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get CurrentRoughness() { return window.ctx.call("MilkShake.ShakeInstance", "get_CurrentRoughness", [this.ptr]).val(); }
    get CurrentStrength() { return window.ctx.call("MilkShake.ShakeInstance", "get_CurrentStrength", [this.ptr]).val(); }
    get IsFinished() { return window.ctx.call("MilkShake.ShakeInstance", "get_IsFinished", [this.ptr]).val() === 1; }
    get IsPaused() { return window.ctx.call("MilkShake.ShakeInstance", "get_IsPaused", [this.ptr]).val() === 1; }
    set IsPaused(v) { window.ctx.call("MilkShake.ShakeInstance", "set_IsPaused", [this.ptr, v]); }
    get State() { return new ShakeState(window.ctx.call("MilkShake.ShakeInstance", "get_State", [this.ptr])); }
    set State(v) { window.ctx.call("MilkShake.ShakeInstance", "set_State", [this.ptr, v]); }
    get _IsPaused_k_BackingField() { return this.ptr.readField(0x1C, 'i32').val() === 1; }
    set _IsPaused_k_BackingField(v) { return this.ptr.writeField(0x1C, 'i32', v); }
    get _State_k_BackingField() { return new ShakeState(this.ptr.readField(0x18, 'i32')); }
    set _State_k_BackingField(v) { return this.ptr.writeField(0x18, 'i32', v); }
    get RemoveWhenStopped() { return this.ptr.readField(0x14, 'i32').val() === 1; }
    set RemoveWhenStopped(v) { return this.ptr.writeField(0x14, 'i32', v); }
    get RoughnessScale() { return this.ptr.readField(0x10, 'f32').val(); }
    set RoughnessScale(v) { return this.ptr.writeField(0x10, 'f32', v); }
    get ShakeParameters() { return new ShakeParameters(this.ptr.readField(0x8, 'i32')); }
    set ShakeParameters(v) { return this.ptr.writeField(0x8, 'i32', v); }
    get StrengthScale() { return this.ptr.readField(0xC, 'f32').val(); }
    set StrengthScale(v) { return this.ptr.writeField(0xC, 'f32', v); }
    get baseSeed() { return this.ptr.readField(0x20, 'i32').val(); }
    set baseSeed(v) { return this.ptr.writeField(0x20, 'i32', v); }
    get fadeInTime() { return this.ptr.readField(0x38, 'f32').val(); }
    set fadeInTime(v) { return this.ptr.writeField(0x38, 'f32', v); }
    get fadeOutTime() { return this.ptr.readField(0x3C, 'f32').val(); }
    set fadeOutTime(v) { return this.ptr.writeField(0x3C, 'f32', v); }
    get fadeTimer() { return this.ptr.readField(0x34, 'f32').val(); }
    set fadeTimer(v) { return this.ptr.writeField(0x34, 'f32', v); }
    get lastUpdatedFrame() { return this.ptr.readField(0x48, 'i32').val(); }
    set lastUpdatedFrame(v) { return this.ptr.writeField(0x48, 'i32', v); }
    get noiseTimer() { return this.ptr.readField(0x30, 'f32').val(); }
    set noiseTimer(v) { return this.ptr.writeField(0x30, 'f32', v); }
    get pauseFadeTime() { return this.ptr.readField(0x44, 'f32').val(); }
    set pauseFadeTime(v) { return this.ptr.writeField(0x44, 'f32', v); }
    get pauseTimer() { return this.ptr.readField(0x40, 'f32').val(); }
    set pauseTimer(v) { return this.ptr.writeField(0x40, 'f32', v); }
    get seed1() { return this.ptr.readField(0x24, 'f32').val(); }
    set seed1(v) { return this.ptr.writeField(0x24, 'f32', v); }
    get seed2() { return this.ptr.readField(0x28, 'f32').val(); }
    set seed2(v) { return this.ptr.writeField(0x28, 'f32', v); }
    get seed3() { return this.ptr.readField(0x2C, 'f32').val(); }
    set seed3(v) { return this.ptr.writeField(0x2C, 'f32', v); }
    Pause(fadeTime) { window.ctx.call("MilkShake.ShakeInstance", "Pause", [this.ptr, fadeTime]); }
    Resume(fadeTime) { window.ctx.call("MilkShake.ShakeInstance", "Resume", [this.ptr, fadeTime]); }
    Start(fadeTime) { window.ctx.call("MilkShake.ShakeInstance", "Start", [this.ptr, fadeTime]); }
    Stop(fadeTime, removeWhenStopped) { window.ctx.call("MilkShake.ShakeInstance", "Stop", [this.ptr, fadeTime, removeWhenStopped]); }
    TogglePaused(fadeTime) { window.ctx.call("MilkShake.ShakeInstance", "TogglePaused", [this.ptr, fadeTime]); }
    UpdateShake(deltaTime) { return (()=>{
					let structptr_fc48b7 = window.ctx.malloc(50);
					window.ctx.call("MilkShake.ShakeInstance", "UpdateShake", [structptr_fc48b7, this.ptr, deltaTime]);
					return structptr_fc48b7;
				})(); }
    getNoise(x, y) { return window.ctx.call("MilkShake.ShakeInstance", "getNoise", [this.ptr, x, y]).val(); }
    getPositionShake() { return (()=>{
					let structptr_feb2eb = window.ctx.malloc(12);
					window.ctx.call("MilkShake.ShakeInstance", "getPositionShake", [structptr_feb2eb, this.ptr]);
					return structptr_feb2eb;
				})(); }
    getRotationShake() { return (()=>{
					let structptr_c8f438 = window.ctx.malloc(12);
					window.ctx.call("MilkShake.ShakeInstance", "getRotationShake", [structptr_c8f438, this.ptr]);
					return structptr_c8f438;
				})(); }
}

export class LineAlignment {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class SpriteMaskInteraction {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class LineTextureMode {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class ShakeType {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class ParticleSystemScalingMode {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class ParticleSystemSimulationSpace {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class TextureFormat {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class CollisionPairHeaderFlags {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class CollisionPairEventFlags {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class CollisionPairFlags {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class DrivenTransformProperties {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class DisableBatchingType {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class ShaderHardwareTier {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class ShaderPropertyFlags {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class ShaderPropertyType {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class ShakeState {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
}

export class ShakeParameters {
    constructor(ptr) { this.ptr = ptr; this.ptrRef = v => v?.ptr ?? v; }
    get FadeIn() { return window.ctx.call("MilkShake.ShakeParameters", "get_FadeIn", [this.ptr]).val(); }
    set FadeIn(v) { window.ctx.call("MilkShake.ShakeParameters", "set_FadeIn", [this.ptr, v]); }
    get FadeOut() { return window.ctx.call("MilkShake.ShakeParameters", "get_FadeOut", [this.ptr]).val(); }
    set FadeOut(v) { window.ctx.call("MilkShake.ShakeParameters", "set_FadeOut", [this.ptr, v]); }
    get PositionInfluence() { return (()=>{
					let structptr_ce660d = window.ctx.malloc(12);
					window.ctx.call("MilkShake.ShakeParameters", "get_PositionInfluence", [structptr_ce660d, this.ptr]);
					return structptr_ce660d;
				})(); }
    set PositionInfluence(v) { window.ctx.call("MilkShake.ShakeParameters", "set_PositionInfluence", [this.ptr, v]); }
    get RotationInfluence() { return (()=>{
					let structptr_1cc59e = window.ctx.malloc(12);
					window.ctx.call("MilkShake.ShakeParameters", "get_RotationInfluence", [structptr_1cc59e, this.ptr]);
					return structptr_1cc59e;
				})(); }
    set RotationInfluence(v) { window.ctx.call("MilkShake.ShakeParameters", "set_RotationInfluence", [this.ptr, v]); }
    get Roughness() { return window.ctx.call("MilkShake.ShakeParameters", "get_Roughness", [this.ptr]).val(); }
    set Roughness(v) { window.ctx.call("MilkShake.ShakeParameters", "set_Roughness", [this.ptr, v]); }
    get ShakeType() { return new ShakeType(window.ctx.call("MilkShake.ShakeParameters", "get_ShakeType", [this.ptr])); }
    set ShakeType(v) { window.ctx.call("MilkShake.ShakeParameters", "set_ShakeType", [this.ptr, v]); }
    get Strength() { return window.ctx.call("MilkShake.ShakeParameters", "get_Strength", [this.ptr]).val(); }
    set Strength(v) { window.ctx.call("MilkShake.ShakeParameters", "set_Strength", [this.ptr, v]); }
    get fadeIn() { return this.ptr.readField(0x14, 'f32').val(); }
    set fadeIn(v) { return this.ptr.writeField(0x14, 'f32', v); }
    get fadeOut() { return this.ptr.readField(0x18, 'f32').val(); }
    set fadeOut(v) { return this.ptr.writeField(0x18, 'f32', v); }
    get positionInfluence() { return new Vector3(this.ptr.readField(0x1C, 'i32')); }
    set positionInfluence(v) { return this.ptr.writeField(0x1C, 'i32', v); }
    get rotationInfluence() { return new Vector3(this.ptr.readField(0x28, 'i32')); }
    set rotationInfluence(v) { return this.ptr.writeField(0x28, 'i32', v); }
    get roughness() { return this.ptr.readField(0x10, 'f32').val(); }
    set roughness(v) { return this.ptr.writeField(0x10, 'f32', v); }
    get shakeType() { return new ShakeType(this.ptr.readField(0x8, 'i32')); }
    set shakeType(v) { return this.ptr.writeField(0x8, 'i32', v); }
    get strength() { return this.ptr.readField(0xC, 'f32').val(); }
    set strength(v) { return this.ptr.writeField(0xC, 'f32', v); }
}
