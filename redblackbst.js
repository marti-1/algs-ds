const RED = true;
const BLACK = false;

class Node {
    constructor (key, value, color) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
        // color of parent tree
        this.color = color;
        this.size = 0;
    }

}

class RBBST {

    constructor () {
        this.root = null;

    }

    isRed(node) {
        if (node == null) return false;
        return node.color == RED;
    }

    put (key, value) {
        this.root = this.putNode(this.root, key, value);
    }

    putNode (node, key, value) {
        if (node == null) {
            return new Node(key, value, RED);
        }

        if (key < node.key) {
            node.left = this.putNode(node.left, key, value);
        } else if (key > node.key) {
            node.right = this.putNode(node.right, key, value);
        } else {
            node.value = value;
        }

        // fix-up any right-leaning links
        if (this.isRed(node.right) && !this.isRed(node.left)) {
            node = this.rotateLeft(node);
        }
        if (this.isRed(node.left)  &&  this.isRed(node.left.left)) {
            node = this.rotateRight(node);
        }
        if (this.isRed(node.left)  &&  this.isRed(node.right)) {
            this.flipColors(node);
        }
        node.size = this.size(node.left) + this.size(node.right) + 1;

        return node;
    }

    nodeSize(node) {
        return node.size;
    }

    size() {
        return this.root.size;
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

    rotateLeft(h) {
        const x = h.right;
        h.right = x.left;
        x.left = h;
        x.color = h.color;
        h.color = RED;
        return x;
    }

    rotateRight(h) {
        const x = h.left
        h.left = x.right;
        x.right = h;
        x.color = h.color;
        h.color = RED;
        return x;
    }

    flipColors(h) {
        h.color = RED;
        h.left.color = BLACK;
        h.right.color = BLACK;
    }

    delete (key) {
        // TODO: implement me.
    }
}

module.exports = {
    RBBST: RBBST,
    Node: Node
}
