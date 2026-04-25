export const humanBonePaths = {
  // Root / Spine
  Hips: "Global/Root/gfx/Animated/poxel_rig_4/Armature.001/Rig1",
  Spine: "Global/Root/gfx/Animated/poxel_rig_4/Armature.001/Rig1/Spine1",
  Chest: "Global/Root/gfx/Animated/poxel_rig_4/Armature.001/Rig1/Spine1/Spine2",
  UpperChest: "Global/Root/gfx/Animated/poxel_rig_4/Armature.001/Rig1/Spine1/Spine2",

  Neck: "Global/Root/gfx/Animated/poxel_rig_4/Armature.001/Rig1/Spine1/Spine2/Neck1",

  Head: "Global/Root/gfx/Animated/poxel_rig_4/Armature.001/Rig1/Spine1/Spine2/Neck1/hat_parent/hat_0/default",

  // Left Arm
  LeftShoulder: "Global/Root/gfx/Animated/poxel_rig_4/Armature.001/Rig1/Spine1/Spine2/ArmL1",
  LeftUpperArm: "Global/Root/gfx/Animated/poxel_rig_4/Armature.001/Rig1/Spine1/Spine2/ArmL1",
  LeftLowerArm: "Global/Root/gfx/Animated/poxel_rig_4/Armature.001/Rig1/Spine1/Spine2/ArmL1/ArmL2",
  LeftHand: "Global/Root/gfx/Animated/poxel_rig_4/Armature.001/Rig1/Spine1/Spine2/ArmL1/ArmL2",

  // Right Arm
  RightShoulder: "Global/Root/gfx/Animated/poxel_rig_4/Armature.001/Rig1/Spine1/Spine2/ArmR1",
  RightUpperArm: "Global/Root/gfx/Animated/poxel_rig_4/Armature.001/Rig1/Spine1/Spine2/ArmR1",
  RightLowerArm: "Global/Root/gfx/Animated/poxel_rig_4/Armature.001/Rig1/Spine1/Spine2/ArmR1/ArmR2",
  RightHand: "Global/Root/gfx/Animated/poxel_rig_4/Armature.001/Rig1/Spine1/Spine2/ArmR1/ArmR2",

  // Left Leg
  LeftUpperLeg: "Global/Root/gfx/Animated/poxel_rig_4/Armature.001/Rig1/LegL1",
  LeftLowerLeg: "Global/Root/gfx/Animated/poxel_rig_4/Armature.001/Rig1/LegL1/LegL2",
  LeftFoot: "Global/Root/gfx/Animated/poxel_rig_4/Armature.001/Rig1/LegL1/LegL2",

  // Right Leg
  RightUpperLeg: "Global/Root/gfx/Animated/poxel_rig_4/Armature.001/Rig1/LegR1",
  RightLowerLeg: "Global/Root/gfx/Animated/poxel_rig_4/Armature.001/Rig1/LegR1/LegR2",
  RightFoot: "Global/Root/gfx/Animated/poxel_rig_4/Armature.001/Rig1/LegR1/LegR2"
};

export const boneLinks = [
    // Spine & torso
    { from: humanBonePaths.Hips,       to: humanBonePaths.Spine },
    { from: humanBonePaths.Spine,      to: humanBonePaths.Chest },
    { from: humanBonePaths.Chest,      to: humanBonePaths.Neck },
    //{ from: humanBonePaths.Neck,       to: humanBonePaths.Head },
    // head doesn't exist?

    // Right arm
    { from: humanBonePaths.Chest,         to: humanBonePaths.RightUpperArm },
    { from: humanBonePaths.RightUpperArm, to: humanBonePaths.RightLowerArm },
    { from: humanBonePaths.RightLowerArm, to: humanBonePaths.RightHand },

    // Left arm
    { from: humanBonePaths.Chest,        to: humanBonePaths.LeftUpperArm },
    { from: humanBonePaths.LeftUpperArm, to: humanBonePaths.LeftLowerArm },
    { from: humanBonePaths.LeftLowerArm, to: humanBonePaths.LeftHand },

    // Right leg
    { from: humanBonePaths.Hips,          to: humanBonePaths.RightUpperLeg },
    { from: humanBonePaths.RightUpperLeg, to: humanBonePaths.RightLowerLeg },
    { from: humanBonePaths.RightLowerLeg, to: humanBonePaths.RightFoot },

    // Left leg
    { from: humanBonePaths.Hips,         to: humanBonePaths.LeftUpperLeg },
    { from: humanBonePaths.LeftUpperLeg, to: humanBonePaths.LeftLowerLeg },
    { from: humanBonePaths.LeftLowerLeg, to: humanBonePaths.LeftFoot },
];


const CHICKEN = 'chicken';

export const chickenBonePaths = {
  ChickenRoot:          CHICKEN,
  ChickenBody:          `${CHICKEN}/body`,
  ChickenRightLeg:      `${CHICKEN}/leg_r`,
  ChickenLeftLeg:       `${CHICKEN}/leg_l`,
  ChickenRightWing:     `${CHICKEN}/wing_r`,
  ChickenLeftWing:      `${CHICKEN}/wing_l`,
};

const b = chickenBonePaths;

export const chickenBoneLinks = [
  
    { from: b.ChickenBody,     to: b.ChickenRoot   },
    { from: b.ChickenBody,     to: b.ChickenLeftLeg   },
    { from: b.ChickenBody,     to: b.ChickenRightLeg   },
    { from: b.ChickenBody,     to: b.ChickenRightWing   },
    { from: b.ChickenBody,     to: b.ChickenLeftWing   },
];

