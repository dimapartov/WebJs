function printMatrix(n) {
    var matrix = Array.from({length: n}, () => Array(n).fill(n));
    matrix.forEach(row => {console.log(row.join(' '))});
}
printMatrix(3)
printMatrix(7)
printMatrix(2)