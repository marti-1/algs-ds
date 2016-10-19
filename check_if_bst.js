'use strict'
/*
Given a binary tree where each 𝙽𝚘𝚍𝚎 contains a key, determine whether it is a binary search tree. Use extra space proportional to the height of the tree.
*/


const BST = require('./bst');


function isBST(obj) {
    if (obj == null) {
        return true;
    }

    if (obj.left != null && obj.left.key >= obj.key) {
        return false;
    }

    if (obj.right != null && obj.right.key <= obj.key) {
        return false;
    }

    return isBST(obj.left) && isBST(obj.right);
}



const a = new BST.Node(10, "hello");
const b = new BST.Node(20, "hello");
const c = new BST.Node(30, "hello");
const d = new BST.Node(40, "hello");
const e = new BST.Node(50, "hello");
const f = new BST.Node(60, "hello");


const notbst = new BST.BST();
e.right = d
f.left = e;
c.right = f;
c.left = a;
a.right = b;
notbst.root = c;


const bst = new BST.BST();
bst.put(30, "hello");
bst.put(10, "hello");
bst.put(20, "hello");
bst.put(60, "hello");
bst.put(40, "hello");
bst.put(50, "hello");

debugger;
console.log(isBST(notbst.root));
