/*
const m = new PQ((a,b) => a > b);

m.insert(10);
m.insert(20);
m.insert(2);
m.insert(1);
console.log(m.poll())
console.log(m.poll())
console.log(m.poll())
console.log(m.poll())
*/
class PQ {

    constructor (sfn) {
        this.q = []
        this.N = 0;
        this.sfn = sfn;
    }

    isEmpty() {
        return this.N == 0;
    }

    insert(x) {
        this.N+=1;
        this.q[this.N] = x;
        this.swim(this.N);
    }

    poll() {
        const max = this.q[1];
        this.exch(1, this.N);
        this.N -= 1;
        this.sink(1);
        return max;
    }

    peek() {
        return this.q[1];
    }

    parent(k) {
        return Math.floor(k / 2);
    }

    swim(k) {
        while (k > 1 && this.sfn(this.q[this.parent(k)], this.q[k])) {
            this.exch(k, this.parent(k));
            k = this.parent(k);
        }
    }

    sink(k) {
        while (2*k <= this.N) {
            var j = 2 * k;
            if (j < this.N && this.sfn(this.q[j], this.q[j+1])) {
                j+=1;
            }
            if (!this.sfn(this.q[k], this.q[j])) {
                break;
            }
            this.exch(k, j);
            k = j;
        }
    }

    exch(i, j) {
        const tmp = this.q[i];
        this.q[i] = this.q[j];
        this.q[j] = tmp;
    }

    size() {
        return this.N;
    }


}

module.exports = PQ;
