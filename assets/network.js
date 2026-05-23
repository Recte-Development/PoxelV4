import {Object } from "../structs.js"

export function TransformHierarchy(parent, indent = "", isLast = true) {

    let prefix = indent + (isLast ? "└─ " : "├─ ");
    console.log(prefix + new Object(parent.ptr).name);

    let newIndent = indent + (isLast ? "   " : "│  ");

    for (let i = 0; i < parent.childCount; i++) {
        let child = parent.GetChild(i);
        let lastChild = (i === parent.childCount - 1);
        TransformHierarchy(child, newIndent, lastChild);
    }
}