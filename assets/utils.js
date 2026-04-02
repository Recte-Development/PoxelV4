export const keyOptions = [
  "RightMouse",
  "LeftMouse",
  "MiddleMouse",
  "BackMouse",
  "ForwardMouse",
  "Shift",
  "Ctrl",
  "Alt",
  "Space",
  "CapsLock",
  "Tab",
  "Q",
  "E",
  "R",
  "F",
  "V",
  "B",
  "0",
  "Insert",
  "F9",
  "O",
  "I",
  "P",
  "Backquote",
];

export function strip(label) {
    let cleanLabel = label
        // Color tags: <color=#RRGGBB> or <color=#RRGGBBAA> or <color=name>
        .replace(/<color=(#[0-9a-fA-F]{6,8}|[a-zA-Z]+)>|<\/color>/g, '')
        // Bold
        .replace(/<b>|<\/b>/g, '')
        // Italic
        .replace(/<i>|<\/i>/g, '')
        // Size: <size=50>
        .replace(/<size=\d+(\.\d+)?>|<\/size>/g, '')
        // Material: <material=2>
        .replace(/<material=\d+>|<\/material>/g, '')
        // Quad (self-closing): <quad material=1 size=1 x=0 y=0 width=0.1 height=0.1/>
        .replace(/<quad[^>]*\/>/g, '')
        // Sprite: <sprite=0> or <sprite name="SpriteName"> or <sprite index=0>
        .replace(/<sprite(=\d+| name="[^"]*"| index=\d+)[^>]*>/g, '')
        // Mark: <mark=#ffff00aa>
        .replace(/<mark=(#[0-9a-fA-F]{6,8}|[a-zA-Z]+)>|<\/mark>/g, '')
        // Strikethrough
        .replace(/<s>|<\/s>/g, '')
        // Underline
        .replace(/<u>|<\/u>/g, '')
        // Font: <font="FontName">
        .replace(/<font(="[^"]*")?>|<\/font>/g, '')
        // Alpha: <alpha=#ff>
        .replace(/<alpha=#[0-9a-fA-F]{2}>/g, '')
        // Line height: <line-height=100%>
        .replace(/<line-height=\d+(\.\d+)?%?>|<\/line-height>/g, '')
        // Line indent: <line-indent=15%>
        .replace(/<line-indent=\d+(\.\d+)?%?>|<\/line-indent>/g, '')
        // Link: <link="id">
        .replace(/<link(="[^"]*")?>|<\/link>/g, '')
        // Lowercase / Uppercase / Smallcaps / Allcaps
        .replace(/<(lowercase|uppercase|smallcaps|allcaps)>|<\/(lowercase|uppercase|smallcaps|allcaps)>/g, '')
        // Margin: <margin=5em>
        .replace(/<margin(-left|-right)?=\d+(\.\d+)?(em|px|%)?>/g, '')
        // Noparse (strip the tags but leave inner content)
        .replace(/<noparse>|<\/noparse>/g, '')
        // Nobr (no line break)
        .replace(/<nobr>|<\/nobr>/g, '')
        // Page break
        .replace(/<page>/g, '')
        // Pos: <pos=10%>
        .replace(/<pos=\d+(\.\d+)?(em|px|%)?>/g, '')
        // Rotate: <rotate=45>
        .replace(/<rotate=-?\d+(\.\d+)?>|<\/rotate>/g, '')
        // Space: <space=1em>
        .replace(/<space=\d+(\.\d+)?(em|px)?>/g, '')
        // Style: <style="H1">
        .replace(/<style(="[^"]*")?>|<\/style>/g, '')
        // Subscript / Superscript
        .replace(/<(sub|sup)>|<\/(sub|sup)>/g, '')
        // Vertical offset: <voffset=1em>
        .replace(/<voffset=-?\d+(\.\d+)?(em|px)?>|<\/voffset>/g, '')
        // Width: <width=60%>
        .replace(/<width=\d+(\.\d+)?(em|px|%)?>/g, '');

    return cleanLabel;
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export function nullCheck(ptrOrWrapperInstance) {
    var className = null
    if (ptrOrWrapperInstance.ptr != undefined)
        className = ptrOrWrapperInstance.ptr.getClassName()
    if (ptrOrWrapperInstance.getClassName != undefined)
        className = ptrOrWrapperInstance.getClassName()
    return (!className || className == null || className == undefined || className == "")
 }
export const keysPressed = {};
export let buttonsPressed = {
  LeftMouse: false,
  RightMouse: false,
  MiddleMouse: false,
  BackMouse: false,
  ForwardMouse: false,
};

window.addEventListener("keydown", function (e) {
  keysPressed[e.key] = true;
  keysPressed[e.code] = true;
});

window.addEventListener("keyup", function (e) {
  keysPressed[e.key] = false;
  keysPressed[e.code] = false;
});

window.addEventListener("mousedown", function (e) {
  switch (e.button) {
    case 0:
      buttonsPressed.LeftMouse = true;
      break;
    case 1:
      buttonsPressed.MiddleMouse = true;
      break;
    case 2:
      buttonsPressed.RightMouse = true;
      break;
    case 3:
      buttonsPressed.BackMouse = true;
      e.preventDefault(); // Prevent browser back
      break;
    case 4:
      buttonsPressed.ForwardMouse = true;
      e.preventDefault(); // Prevent browser forward
      break;
  }
});

window.addEventListener("mouseup", function (e) {
  switch (e.button) {
    case 0:
      buttonsPressed.LeftMouse = false;
      break;
    case 1:
      buttonsPressed.MiddleMouse = false;
      break;
    case 2:
      buttonsPressed.RightMouse = false;
      break;
    case 3:
      buttonsPressed.BackMouse = false;
      break;
    case 4:
      buttonsPressed.ForwardMouse = false;
      break;
  }
});

export function DistanceFromCenter(pos) {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const dx = pos.x - centerX;
  const dy = pos.y - centerY;

  //return Math.sqrt(dx * dx + dy * dy);
  return Math.hypot(dx, dy);
}

export class Obscured {
  // NOTE: To get the value needed for a malloc call, add the last field's offset + it's size + a few extra for memory alignment
  static createType(type, memory, val) {
    window.ctx.call(
      "CodeStage.AntiCheat.Detectors.ObscuredCheatingDetector",
      "StopDetection",
      [null],
    );

    const mem = window.ctx.malloc(memory);
    window.ctx.call(
      `CodeStage.AntiCheat.ObscuredTypes.Obscured${type}`,
      ".ctor",
      [null, val, mem],
    );
    return mem;
  }

  static createFloat(val) {
    return Obscured.createType("Float", 0x18, val);
  }

  static createBool(val) {
    return Obscured.createType("Bool", 0xe, val);
  }

  static createByte(val) {
    return Obscured.createType("Byte", 0x8, val);
  }

  static createChar(val) {
    return Obscured.createType("Char", 0xc, val);
  }

  static createInt(val) {
    return Obscured.createType("Int", 0x14, val);
  }

  static createDecimal(val) {
    return Obscured.createType("Decimal", 0x34, val);
  }

  static createDouble(val) {
    return Obscured.createType("Double", 0x2c, val);
  }

  static createLong(val) {
    return Obscured.createType("Long", 0x24, val);
  }

  static createShort(val) {
    return Obscured.createType("Short", 0xc, val);
  }

  static createString(val) {
    return Obscured.createType("String", 0x24, val);
  }
}

export class Obscured2 {
  static FIXED_KEY = 0x12345678; //W key
  static writeObscuredInt(i, baseOffset, value) {
    const encrypted = value ^ Obscured2.FIXED_KEY;
    i.writeField(baseOffset, "i32", Obscured2.FIXED_KEY); // currentCryptoKey
    i.writeField(baseOffset + 0x4, "i32", encrypted); // hiddenValue
    i.writeField(baseOffset + 0x8, "bool", true); // inited
    i.writeField(baseOffset + 0xc, "i32", value); // fakeValue
    i.writeField(baseOffset + 0x10, "bool", true); // fakeValueActive
  }

  static writeObscuredFloat(i, baseOffset, value) {
    const key = Obscured2.FIXED_KEY;
    const floatAsInt = Obscured2.FloatToIntBits(value);
    const encrypted = floatAsInt ^ key;

    i.writeField(baseOffset, "i32", key); // currentCryptoKey
    i.writeField(baseOffset + 0x4, "i32", encrypted); // hiddenValue (verschlüsselt als int)
    i.writeField(baseOffset + 0x8, "bool", true); // inited
    i.writeField(baseOffset + 0xc, "f32", value); // fakeValue
    i.writeField(baseOffset + 0x10, "bool", true); // fakeValueActive
  }

  static FloatToIntBits(f) {
    const buf = new ArrayBuffer(4);
    new DataView(buf).setFloat32(0, f, true);
    return new DataView(buf).getInt32(0, true);
  }
}

export class QuaternionUtils {
  constructor(x = 0, y = 0, z = 0, w = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  static random() {
    // Generate random unit quaternion (uniform rotation)
    const u1 = Math.random();
    const u2 = Math.random();
    const u3 = Math.random();

    const sqrt1MinusU1 = Math.sqrt(1 - u1);
    const sqrtU1 = Math.sqrt(u1);

    const x = sqrt1MinusU1 * Math.sin(2 * Math.PI * u2);
    const y = sqrt1MinusU1 * Math.cos(2 * Math.PI * u2);
    const z = sqrtU1 * Math.sin(2 * Math.PI * u3);
    const w = sqrtU1 * Math.cos(2 * Math.PI * u3);

    return new Quaternion(x, y, z, w);
  }
  static zero() {
    return new Quaternion(0, 0, 0, 0);
  }
  static readFrom(ptr) {
    return new Quaternion(
      ptr.readField(0x0, "f32").val(),
      ptr.readField(0x4, "f32").val(),
      ptr.readField(0x8, "f32").val(),
      ptr.readField(0xc, "f32").val(),
    );
  }
  writeTo(ptr) {
    ptr.writeField(0x0, "f32", this.x);
    ptr.writeField(0x4, "f32", this.y);
    ptr.writeField(0x8, "f32", this.z);
    ptr.writeField(0xc, "f32", this.w);
  }
  createPtr() {
    const ptr = ctx.malloc(0x10);
    this.writeTo(ptr);
    return ptr;
  }
  static Euler(xDeg = 0, yDeg = 0, zDeg = 0) {
    const radX = xDeg * (Math.PI / 180);
    const radY = yDeg * (Math.PI / 180);
    const radZ = zDeg * (Math.PI / 180);

    const cx = Math.cos(radX / 2),
      sx = Math.sin(radX / 2);
    const cy = Math.cos(radY / 2),
      sy = Math.sin(radY / 2);
    const cz = Math.cos(radZ / 2),
      sz = Math.sin(radZ / 2);

    const w = cx * cy * cz + sx * sy * sz;
    const x = sx * cy * cz - cx * sy * sz;
    const y = cx * sy * cz + sx * cy * sz;
    const z = cx * cy * sz - sx * sy * cz;

    return new Quaternion(x, y, z, w);
  }
}

export function multiplyQuaternions(a, b) {
  return new Quaternion(
    a.w * b.x + a.x * b.w + a.y * b.z - a.z * b.y,
    a.w * b.y - a.x * b.z + a.y * b.w + a.z * b.x,
    a.w * b.z + a.x * b.y - a.y * b.x + a.z * b.w,
    a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z,
  );
}
export function randomFloatBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export class Vector3 {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  normalize() {
    const mag = this.magnitude();
    if (mag === 0) return new Vector3(0, 0, 0);
    return new Vector3(this.x / mag, this.y / mag, this.z / mag);
  }

  static zero() {
    return new Vector3(0, 0, 0);
  }
  static readFrom(ptr) {
    return new Vector3(
      ptr.readField(0x0, "f32").val(),
      ptr.readField(0x4, "f32").val(),
      ptr.readField(0x8, "f32").val(),
    );
  }
  equals(vec) {
    return this.x === vec.x && this.y === vec.y && this.z === vec.z;
  }
  add(x, y, z) {
    this.x += x;
    this.y += y;
    this.z += z;
  }
  subtract(vec) {
    return new Vector3(this.x - vec.x, this.y - vec.y, this.z - vec.z);
  }
  multiply(scalar) {
    return new Vector3(this.x * scalar, this.y * scalar, this.z * scalar);
  }
  distance(other) {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    const dz = this.z - other.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz).toFixed();
  }
  writeTo(ptr) {
    ptr.writeField(0x0, "f32", this.x);
    ptr.writeField(0x4, "f32", this.y);
    ptr.writeField(0x8, "f32", this.z);
  }
  createPtr() {
    const ptr = ctx.malloc(0xc);
    this.writeTo(ptr);
    return ptr;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    const dz = a.z - b.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
}

export class LocalArray {
  static JSArray(ptr) {
    let returnarray = [];
    length = this.GetLength(ptr);
    for (let i = 0; i < length; i++) {
      returnarray.push(this.GetValue(ptr, i));
    }
    return returnarray;
  }
  static SetValue(ptr, i, value) {
    window.ctx.call("System.Array", "SetValueImpl", [ptr, value, i]);
  }
  static GetLength(ptr) {
    return window.ctx.call("System.Array", "get_Length", [ptr]).val();
  }
  static GetValue(ptr, i) {
    return window.ctx.call("System.Array", "GetValueImpl", [ptr, i]);
  }
}

export function getroastmsg() {
  let messages = [
    "Bow Down To Recte.cc",
    "You're A Fucking Furry",
    "LOL KYS",
    "Go Fucking Die You Whore",
    "What Time You Tryna Fuck? Sike Nah Bitch",
    "Recte Owns This Chat, Bitch.",
    "Suck My Left Nut, Peasant",
    "Fuck A Sheep You Furry",
    "Penis In My Ass",
    "Go Find Your Dad At 7/11 Buying Milk",
    "I Dont Give No Shit!",
    "Recte Runs This Game, Bitch.",
    "HAHA!",
    "Suck This Fat Dose Of Recte Dick",
    "Recte Gang On Top!",
    "We Didn't Ask For Your Input, Bitch!",
    "Recte Owns You And All!",
    "#RetardMoment!",
    "#AutisticKidsInTheArea!",
    "Recte On Top!",
    "30 HOT SINGLES ARE NEAR YOU AND WANTING TO FUCK",
    "5 GRANDMAS WHO ARE SILENCED AND FORCED TO FUCK YOU IN YOUR CITY FOR MONEY",
    "My Cum Drips Out Of Retarded Gilfs",
    "Ching Chong Wong Chong",
    "Chingy Changy Wang Wang",
    "Get wrecked, you chink!",
    "You play like a faggot, learn to aim!",
    "Only bitches play like that, pathetic!",
    "Can't believe I'm losing to a nigger like you!",
    "You're such a queer, go back to the closet!",
    "Even my grandma plays better than you, and she's a cunt!",
    "Why don't you go back to your sand nigger country, loser?",
    "You're such a faggot, probably got no balls!",
    "Typical slut, can't handle a real challenge!",
    "I bet your mom regrets not swallowing you, you spic!",
    "What are you, some kind of dyke?",
    "Go back to the kitchen where you belong, you whore!",
    "Can't believe I'm getting owned by a kike like you!",
    "You're about as useful as a tranny in a pride parade!",
    "Only cunts like you would resort to camping!",
    "Hey retard, got anything better to do than suck at games?",
    "Go back to your shithole, nobody wants you here!",
    "I'd say you play like a girl, but that'd be an insult to girls!",
    "Even my pet dog has better skills than you, you bitch!",
    "Why don't you go join a white trash clan, fits your skills perfectly!",
    "Recte yourself, you filthy scrub!",
    "I'm gonna destroy you with my recte cheat!",
    "You're such a nigger, go die in a hole!",
    "My recte cheat is gonna make you cry like a little faggot!",
    "You're nothing but a cunt, get out of my lobby!",
    "You're so bad, you make me sick!",
    "Go back to kindergarten, you bitch!",
    "Recte is the only reason I'm winning, unlike your sorry ass!",
    "You're a disgrace to humanity, uninstall the game immediately!",
    "You're just a spic, nothing more!",
    "You're a joke, go back to playing with your dolls!",
    "I'm gonna make you regret ever crossing paths with me, you cock!",
    "Do you even know how to use your brain, you retard?",
    "I'm gonna use my recte cheat to ruin your day, you worthless piece of shit!",
    "You're a waste of oxygen, just like your parents!",
    "I hope you get hit by a bus, you kike!",
    "Get ready to get destroyed by my recte hack, loser!",
    "You're about to experience pain like never before, you wanker!",
    "Recte, you filthy niggers!",
    "Recte, go back to your shantytown, you worthless spics!",
    "Recte, you're nothing but a bunch of chinks!",
    "Recte, I'll make sure your whole family regrets ever existing, you dirty kikes!",
    "Recte, you're lower than dirt, you should be exterminated, you towelheads!",
    "Recte, why don't you go overdose on crack, you worthless injuns!",
    "Recte, you're not even worth the bullet it would take to put you down, you pathetic honkies!",
    "Recte, I hope your whole race dies in a fire, you disgusting crackers!",
    "Recte, why don't you go rob a liquor store, you criminal gooks!",
    "Recte, I'll make sure your children are born with defects, you degenerate wops!",
    "Recte, you're just a pack of wild animals, you filthy ragheads!",
    "Recte, go pick some cotton, you lazy coons!",
    "Recte, I'll hang you all from the nearest tree, you worthless mudbloods!",
    "Recte, I'll make sure your graves are desecrated, you filthy gypsies!",
    "Recte, you're a cancer on society, you disgusting goyim!",
    "Recte, why don't you go back to the plantation, you lazy darkies!",
    "Recte, I'll send you back to the cotton fields where you belong, you worthless darkies!",
    "Recte, you're just a bunch of welfare leeches, you scummy rednecks!",
    "Recte, I'll make you wish slavery never ended, you inbred hillbillies!",
    "Recte, you're not even worth the dirt on my shoes, you pathetic yokels!",
    "Git gud noobs, I'm owning with recte, you filthy kike!",
    "Get rekt you nigger plebs, recte all day, you fucking bastards!",
    "Recte makes me unstoppable, you dirty chink losers, go fuck yourselves.",
    "Lol, you're all trash. Recte ftw, spics! Go suck a dick, niggers!",
    "Haha, suck it you towelhead coons. Recte domination, you cocksuckers!",
    "Can't handle my skills with recte, you slant-eyed gooks! Fuck off, niggers!",
    "Cry more, recte is too OP for you sand nigger weaklings. Eat shit!",
    "I'm on top with recte, while you all suck honkies, fuckers, niggers.",
    "Recte users like me own noobs like you all day, every day, wetback! Fuck you, niggers!",
    "You're all fags compared to me and my recte hacks, you motherfuckers, niggers.",
    "Recte = easy wins, you micks! Go to hell, niggers!",
    "No skill needed when you have recte, queers! Fucking losers, niggers!",
    "Recte making me king, while you're all just krauts, assholes, niggers.",
    "I'm the nazi king with my recte hacks, go fuck yourselves, niggers.",
    "Recte for life, wrecking all you redneck fools, fuck off, niggers!",
    "Lmao, recte turning me into a god amongst jigaboos, you cocksuckers, niggers.",
    "Bow down to the recte master, you wop plebeians, go to hell, niggers!",
    "Recte is my secret weapon, making me unbeatable, slope, eat shit, niggers!",
    "Suck on that, kaffirs! Recte supremacy, motherfuckers, niggers!",
    "I'm untouchable with recte, while you're all just crackers, fucking assholes, niggers.",
    "Git gud noobs, I'm owning with recte, you filthy kike! Get rekt you nigger plebs, recte all day, you fucking bastards!",
    "Recte makes me unstoppable, you dirty chink losers, go fuck yourselves, you sand nigger cocksuckers!",
    "Lol, you're all trash. Recte ftw, spics! Go suck a dick, niggers, you towelhead motherfuckers!",
    "Haha, suck it you towelhead coons. Recte domination, you cocksucking wop niggers!",
    "Can't handle my skills with recte, you slant-eyed gooks! Fuck off, niggers, you mick pussies!",
    "Cry more, recte is too OP for you sand nigger weaklings. Eat shit, you wetback fucking assholes!",
    "I'm on top with recte, while you all suck honkies, fuckers, niggers, you faggoty kraut assholes!",
    "Recte users like me own noobs like you all day, every day, wetback! Fuck you, niggers, you queer motherfuckers!",
    "You're all fags compared to me and my recte hacks, you motherfucking kike niggers!",
    "Recte = easy wins, you micks! Go to hell, niggers, you faggoty queers!",
    "No skill needed when you have recte, queers! Fucking losers, niggers, you wetback assholes!",
    "Recte making me king, while you're all just krauts, assholes, niggers, you spic motherfuckers!",
    "I'm the nazi king with my recte hacks, go fuck yourselves, niggers, you fucking chink pussies!",
    "Recte for life, wrecking all you redneck fools, fuck off, niggers, you fucking jigaboo cocksuckers!",
    "Lmao, recte turning me into a god amongst jigaboos, you cocksucking nigger motherfuckers!",
    "Bow down to the recte master, you wop plebeians, go to hell, niggers, you fucking towelhead assholes!",
    "Recte is my secret weapon, making me unbeatable, slope, eat shit, niggers, you fucking honkie pussies!",
    "Suck on that, kaffirs! Recte supremacy, motherfuckers, niggers, you fucking cracker assholes!",
    "I'm untouchable with recte, while you're all just crackers, fucking assholes, niggers, you faggoty coons!",
    "Get recte'd, you  motherfuckers, go die in a fire, niggers, you fucking dyke assholes!",
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}
