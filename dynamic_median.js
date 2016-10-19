/*
Design a data type that supports insert in logarithmic time, find-the-median in constant time, and remove-the-median in logarithmic time.
*/

const PQ = require('./pq');

class Median {

    constructor() {
        // max PQ for the left (n/2) side of the array
        this.left = new PQ((a, b) => a < b);
        // min PQ for the right (n/2) side of the array
        this.right = new PQ((a, b) => a > b);
        this.median = [];
    }

    insert(x) {
        debugger;
        this.median.push(x);

        if (this.left.isEmpty() && 
            this.right.isEmpty() &&
            this.median.length <= 2) {
            return;
        }

        if (this.median.length == 3) {
            this.median.sort((a,b) => a - b);
            this.left.insert(this.median[0]);
            this.right.insert(this.median[2]);
            this.median = [this.median[1]];
        } else if (this.median.length == 2) {
            this.median.push(this.left.poll());
            this.median.push(this.right.poll());
            this.median.sort((a,b) => a - b);

            this.left.insert(this.median[0]);
            this.right.insert(this.median[3]);
            this.median = [this.median[1], this.median[2]];
        }
    }

    calc() {
        return this.sum(this.median) / this.median.length;
    }

    sum(xs) {
        var acc = 0;
        for (let x of xs) {
            acc+=x;
        }
        return acc;
    }

}

const m = new Median();
for (i = 10; i >= 1; i--) {
    m.insert(i);
}

console.log(m.calc());
