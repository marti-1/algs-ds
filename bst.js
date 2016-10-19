class Node {
    constructor (key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {

    constructor () {
        this.root = null;

    }

    put (key, value) {
        this.root = this.putNode(this.root, key, value);
    }

    putNode (node, key, value) {
        if (node == null) return new Node(key, value);

        if (key < node.key) {
            node.left = this.putNode(node.left, key, value);
        } else if (key > node.key) {
            node.right = this.putNode(node.right, key, value);
        } else {
            node.value = value;
        }
        return node;
    }

    get (key) {
        var x = this.root;
        while (x != null) {
            if (key < x.key) {
                x = x.left;
            } else if (key > x.key) {
                x = x.right;
            } else {
                return x.value;
            }
        }

        return null;
    }

    delete (key) {
        // TODO: implement me.
    }
}

module.exports = {
    BST: BST,
    Node: Node
}
