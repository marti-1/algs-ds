'use strict'
/*
Suppose that you are tracking n web sites and m users and you want to support the following API:

User visits a website.
* How many times has a given user visited a given site?
* What data structure or data structures would you use?
*/

const BST = require('./bst');

var tracker = new BST.BST();

function visit(key, bst) {

    const m = bst.get(key);
    if (m) {
        bst.put(key, m+1);
    } else {
        bst.put(key, 1);
    }

    return bst;
}

tracker = visit('mm:google.com', tracker)
tracker = visit('mm:google.com', tracker)
tracker = visit('mm:google.com', tracker)
tracker = visit('mm:google.com', tracker)
tracker = visit('mm:google.com', tracker)

tracker = visit('mm:facebook.com', tracker)

tracker = visit('spacemonkey:facebook.com', tracker)

console.log(tracker.get('mm:google.com'))
console.log(tracker.get('mm:facebook.com'))
console.log(tracker.get('spacemonkey:facebook.com'))
