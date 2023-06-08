function myFunction(section) {
    var navList = document.getElementById("menu");

    if (!section.classList.contains("change")) {
        section.classList.add("change");
        navList.style.display = "flex";
    } else {
        section.classList.remove("change");
        navList.style.display = "none";
    }
}