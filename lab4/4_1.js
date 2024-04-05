function min_(a, b) {
    return Math.min(a[0], a[1], b)
}

function min_2(a, b) {
    function res(c) {
        return Math.min(a, b, c)
    }

    return res
}


num_1 = 2
num_2 = 5
num_3 = 3
console.log(min_([num_1, num_2], num_3))
console.log(min_2(num_1, num_2)(num_3))


num_1 = 600
num_2 = 342
num_3 = 123
console.log(min_([num_1, num_2], num_3))
console.log(min_2(num_1, num_2)(num_3))


num_1 = 25
num_2 = 21
num_3 = 4
console.log(min_([num_1, num_2], num_3))
console.log(min_2(num_1, num_2)(num_3))