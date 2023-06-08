// function myFunction(section) {
//     var navList = document.getElementById("menu");

//     if (!section.classList.contains("change")) {
//         section.classList.add("change");
//         navList.style.display = "flex";
//     } else {
//         section.classList.remove("change");
//         navList.style.display = "none";
//     }
// }


const menubar = document.querySelector(".bar");

function openmenu() {
  var menu = document.getElementById("menu");
  menubar.classList.add("change");
  menu.style.top = "64px";
}

function closemenu() {
  var menu = document.getElementById("menu");
  menubar.classList.remove("change");
  menu.style.top = "-500px";
}

menubar.addEventListener("click", function() {
  var menu = document.getElementById("menu");
  if (menu.style.top === "64px") {
    closemenu();
  } else {
    openmenu();
  } 
});
