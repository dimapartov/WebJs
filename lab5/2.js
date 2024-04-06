class City {
    constructor(name, latitude, longitude) {
        this.towm = name;
        this.latitude = parseFloat(latitude).toFixed(2);
        this.longitude = parseFloat(longitude).toFixed(2);
    }
}
const cities = ['Moscow | 55.7522 | 37.6156', 'Beijing | 39.913818 | 116.363625'];
for (city of cities) {
    var cityData = city.split(" | ");
    console.log(new City(cityData[0], cityData[1], cityData[2]));
}