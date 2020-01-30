function main(input) {
    N = parseInt(input.split('\n')[0], 10);
    A = input.split('\n')[1].split(' ');

    L = []
    for (var i = 0; i < N; i++) {
        L.push(parseInt(A[i], 10));
    }
    
    var res = 0
    var flag = false
    while (true) {
        for (var i = 0; i < N; i++) {
            if (L[i]%2 !== 0) {
                flag = true;
            } else {
                L[i] = L[i] / 2
            }
        }
        if (flag) {
            break
        }
        res++
    }

    console.log(res)
}
 

main(require('fs').readFileSync('/dev/stdin', 'utf8'));