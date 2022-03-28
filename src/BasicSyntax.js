export function romanToInteger(str) {
    var i, alph = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    for (var h = 0, j = 0, n = 0; j < str.length; j++) {
        i = alph[str.charAt(j).toUpperCase()];
        if (i) n += h = (h < i ? i - (h << 1) : i);
    }
    return n;
}