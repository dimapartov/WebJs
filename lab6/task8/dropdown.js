function addItem() {
    var text = document.getElementById("newItemText").value.trim();
    var value = document.getElementById("newItemValue").value.trim();
    if (text.length > 0 && value.length > 0) {
        let option = document.createElement("option");
        option.text = text;
        option.value = value;
        document.getElementById("menu").add(option);
    }
}