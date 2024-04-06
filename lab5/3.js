const array1 = ["Chips", "5", "CoaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"];
const array2 = ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"];
var products = new Map();
class Product {
    constructor(productName, quantity) {
        this.name = productName;
        this.quantity = parseInt(quantity);
    }
    addQuantity(quantity) {
        this.quantity += parseInt(quantity);
    }
    toString() {
        return `${this.name} -> ${this.quantity}`;
    }
}
for (let i = 0; i < array1.length; i += 2) {
    products.set(array1[i], new Product(array1[i], array1[i + 1]));
}
for (let i = 0; i < array2.length; i += 2) {
    if (!products.has(array2[i])) {
        products.set(array2[i], new Product(array2[i], array2[i + 1]));
    } else {
        products.get(array2[i]).addQuantity(array2[i + 1]);
    }
}
products.forEach(item => console.log(item.toString()));