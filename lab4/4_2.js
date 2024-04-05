function subtract(a, b) {
    return a[0] + a[1] - b
}

function one(a) {
    function two(b) {
        function three(c) {
            return a + b - c
        }

        return three
    }

    return two
}

num_1 = 23
num_2 = 6
num_3 = 10
console.log(subtract([num_1, num_2], num_3))
console.log(one(num_1)(num_2)(num_3))
num_1 = 1
num_2 = 17
num_3 = 30
console.log(subtract([num_1, num_2], num_3))
console.log(one(num_1)(num_2)(num_3))

num_1 = 42
num_2 = 58
num_3 = 100
console.log(subtract([num_1, num_2], num_3))
console.log(one(num_1)(num_2)(num_3))