function solve() {
    var text = document.getElementById('text').value.toLowerCase();
    var namingConvention = document.getElementById('naming-convention').value.toLowerCase();
    var resultElement = document.getElementById("result");
    if (namingConvention == 'camel case') {
        resultElement.innerText = text.split(' ').map((word, index) => index !== 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word).join('');
    } else if (namingConvention == 'pascal case') {
        resultElement.innerText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    } else {
        resultElement.innerText = 'Error!';
    }
}