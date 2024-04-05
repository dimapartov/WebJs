const array1 = ['Hey', 'hello', 2, 4, 'Peter', 'e'];
const array2 = ['Petar', 10, 'hey', 4, 'hello', '2'];
const array3 = ['R', 'u', 's', 's', 'i', 'a'];
const array4 = ['R', 'u', 't'];

function displayCommonElements(array1, array2) {
    var elemets = array1.filter(element => array2.includes(element));
    console.log(elemets.join(`\n`));
}

displayCommonElements(array1, array2);
displayCommonElements(array3, array4);