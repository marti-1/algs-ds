'use strict'

function combine2(head, rest, sumsAcc) {
    const sum = head + rest[0];
    var r = sumsAcc.get(sum);
    if (r === undefined) {
        r = [];
    }
    r.push([head, rest[0]]);
    sumsAcc.set(sum, r);

    if (rest.length == 1) {
        return sumsAcc;
    }

    return combine2(
        head,
        rest.slice(1),
        sumsAcc
    );
}

function choose2(xs, acc) {
    if (xs.length == 2) {
        const [a, b] = xs;
        const sum = a + b;
        var r = acc.get(sum);
        if (r === undefined) {
            r = [];
        }
        r.push([a,b]);
        acc.set(sum, r);
        return acc;
    }

    return choose2(
        xs.slice(1),
        combine2(xs[0], xs.slice(1), acc)
    );
}

const acc = new Map();

const a = [10, 1, 3, 8, 5, 2];

console.log(choose2(a, acc));
