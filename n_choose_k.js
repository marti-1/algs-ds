'use strict'

/*
 * Specific k = 2 case
 */
function combine2(head, rest) {
    if (rest.length == 1) {
        return [[head, rest[0]]];
    }

    return [[head, rest[0]]]
        .concat(combine(head, rest.slice(1)));
}

function choose2(xs) {
    if (xs.length == 2) {
        return [xs];
    }

    return combine(xs[0], xs.slice(1))
        .concat(choose2(xs.slice(1)));
}


/*
 * Generalisation for any k
 */
function combineK(head, rest, k) {

    if (rest.length == k - 1) {
        return [[head].concat(rest)];
    }

    return [[head].concat(rest.slice(0, k-1))]
        .concat(
            combineK(head, rest.slice(1), k)
        );
}

function chooseK(xs, k) {
    if (xs.length == k) {
        return [xs];
    }

    return combineK(xs[0], xs.slice(1), k)
        .concat(
            chooseK(xs.slice(1), k)
        );
}

console.log(combineK('a', ['b','c','d'], 2));
console.log(chooseK(['a', 'b','c','d'], 3));
