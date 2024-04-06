function search() {
    var input = document.getElementById("searchText").value.toLowerCase();
    var towns = document.querySelectorAll("#towns li");
    let count = 0;

    towns.forEach(town => {
        if (town.textContent.toUpperCase().includes(input.toUpperCase()) && input.length > 0) {
            town.style.fontWeight = "bold";
            town.style.textDecoration = "underline";
            count++;
        } else {
            town.style.fontWeight = "normal";
            town.style.textDecoration = "none";
        }
    });
    console.log(input.length)
    if (input.length > 0) {
        document.getElementById("result").innerText = `${count} matches found`;
    } else {
        document.getElementById("result").innerText = "";
    }
}