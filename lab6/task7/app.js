function lockedProfile() {
    const buttons = document.querySelectorAll(".profile button");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const profile = this.parentNode;
            const hidden = profile.querySelector("div");
            const status = profile.querySelector("input[name$='Locked']:checked").value;

            if (status == "unlock") {
                if (hidden.style.display == "block") {
                    hidden.style.display = "none";
                    this.textContent = "Show more";
                } else {
                    hidden.style.display = "block";
                    this.textContent = "Hide it";
                }
            }
        });
    });
}