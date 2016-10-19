/*
Design an algorithm to perform an inorder traversal of a binary search tree using only a constant amount of extra space.
*/

function traverse(node) {
    if (node == null) {
        return;
    }

    traverse(node.left);
    console.log(node.key);
    traverse(node.right);

}

const BST = require('./bst');

const bst = new BST.BST();

for (let i = 0; i < 20; i++) {
    bst.put(Math.floor(Math.random() * 256), "foo");
}

traverse(bst.root);
