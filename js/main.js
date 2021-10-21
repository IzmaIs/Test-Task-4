let first = document.querySelectorAll('.main__first_button, .main__three_button, .main__two_button');
let i;

for (i = 0; i < first.length; i++) {
    first[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

