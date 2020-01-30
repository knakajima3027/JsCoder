function main(input) {
    const s = input;
    var res = 0;

    for (var i = 0; i < 3; i++) {
        if (s[i] === '1') {
            res++;
        }
    }
    console.log(res);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));