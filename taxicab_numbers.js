const PQ = require('./pq');

class TNumber {

    constructor(a, b) {
        this.a = a;
        this.b = b;
        this.sum = a*a*a + b*b*b;
    }

}

class TaxicabNumbers {

    constructor(n) {
        this.n = n;
        this.q = new PQ((a, b) => a.sum > b.sum);
        for (let i = 1; i <= n; i++) {
            this.q.insert(new TNumber(i, i));
        }
        
    }

    find() {
        var acc = [];

        var prev = new TNumber(0, 0);
        while (!this.q.isEmpty()) {

            var curr = this.q.poll();
            if (curr.sum == prev.sum) {
                acc.push([curr, prev]);
            } 

            if (curr.b < this.n) {
                this.q.insert(new TNumber(curr.a, curr.b + 1));
            }

            prev = curr;
        }

        return acc;
    }
}

const tn = new TaxicabNumbers(20);
console.log(tn.find());
