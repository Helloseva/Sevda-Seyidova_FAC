
//  navigation bar

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
mainNav.classList.toggle("active");
});


// about section / modal

var openEls = document.querySelectorAll("[data-open]");
var closeEls = document.querySelectorAll("[data-close]");
var isVisible = "mvisible";

for (var el of openEls) {
  el.addEventListener("click", function() {
    var modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (var el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.mvisible")) {
    document.querySelector(".modal.mvisible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.mvisible")) {
    document.querySelector(".modal.mvisible").classList.remove(isVisible);
  }
});
