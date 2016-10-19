function sort(xs) {
    var n = xs.length;

    for (let k = Math.floor(n/2); k >= 1; k--) {
        sink(xs, k, n);
    }

    while (n > 1) {
        exch(xs, 1, n--);
        sink(xs, 1, n);
    }


}

function sink(a, k, n) {
    while (2*k <= n) {
        var j = 2 * k;
        if (j < n && less(a, j, j+1)) {
            j+=1;
        }
        if (!less(a, k, j)) {
            break;
        }
        exch(a, k, j);
        k = j;
    }
}

function exch(a, i, j) {
    const tmp = a[i - 1];
    a[i - 1] = a[j - 1];
    a[j - 1] = tmp;
}

function less(a, i, j) {
    return a[i - 1] < a[j - 1];
}


var foo = [10, 20, 1, 2, 45, 29]
sort(foo);
console.log(foo);
