var people_count = 30;
var category = "Students";
var day = "Sunday";
var priceTable = [ [8.45, 9.80, 10.46], [10.90, 15.60, 16], [15, 20, 22.50] ];
var days = ["Friday", "Saturday", "Sunday"];
var categories = ["Students", "Corporate", "Regular"];
var dayIndex = days.indexOf(day);
var categoryIndex = categories.indexOf(category);
var totalPrice = 0;

switch (true) {
    case (people_count >= 30 && category === "Students"):
        totalPrice = people_count * priceTable[categoryIndex][dayIndex] * 0.85;
        break;
    case (category === "Corporate" && people_count >= 10):
        totalPrice = (people_count - 10) * priceTable[categoryIndex][dayIndex];
        break;
    case (category === "Regular" && people_count >= 10 && people_count <= 20):
        totalPrice = people_count * priceTable[categoryIndex][dayIndex] * 0.95;
        break;
    default:
        totalPrice = people_count * priceTable[categoryIndex][dayIndex];
}

console.log(`Общая цена: ${totalPrice.toFixed(2)}`);