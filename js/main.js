let menuBtn = document.querySelector(".menuBtn");
let menuBox = document.querySelector(".menu_box");
let menuItem = document.querySelectorAll(".menuItem");
console.log(menuItem);
menuBtn.addEventListener("click", function () {
  menuToggle();
});

function menuToggle() {
  menuBox.classList.toggle("showToggle");
}

for (let i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener("click", function () {
    menuToggle();
  });
}
