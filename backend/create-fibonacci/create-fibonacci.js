function generateFibonacci(n) {
    let bilanganAwal = [0, 1];
    for(let i = 2; i < n; i++) {
     bilanganAwal[i] = bilanganAwal[i - 2] + bilanganAwal[i - 1];
    }

    return bilanganAwal.join(', ')
}

console.log(generateFibonacci(10))