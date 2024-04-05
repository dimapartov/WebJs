function print_matrix(n) {
    matrix = Array.from({length: n}, () => Array(n).fill(n));
    matrix.forEach(row => {
        console.log(row.join(' '));
    });
}


print_matrix(3)
print_matrix(7)
print_matrix(2)