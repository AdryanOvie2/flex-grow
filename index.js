const ul = document.getElementById("basic");
const list = document.querySelectorAll("li");

list.forEach(li => {
    li.addEventListener("click", function () {
        list.forEach(element => {
            if (element !== li) {
                element.classList.remove("toggle");
            }
        });
        li.classList.toggle("toggle");
    });
});