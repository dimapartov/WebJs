function solve() {
    document.querySelector("#searchBtn").addEventListener("click", onClick);

    function onClick() {
        let searchQuery = document.querySelector("#searchField").value.toLowerCase().trim();
        let tableRows = document.querySelectorAll("tbody tr");
        tableRows.forEach(row => {
            let cells = row.children;
            let found = false;
            Array.from(cells).forEach(cell => {
                let tableCellText = cell.textContent.toLowerCase();
                if (tableCellText.includes(searchQuery)) {
                    found = true;
                }
            });
            if (found && searchQuery.length > 0) {
                row.classList.add("select");
            } else {
                row.classList.remove("select");
            }
        });
    }
}