let mainListDiv = document.getElementById("mainListDiv"),
  blockMobile = document.getElementById("blockMobile");
let links = document.querySelectorAll("nav .container .main_list ul li a");
let sections = document.querySelectorAll("section");
blockMobile.onclick = function () {
  "use strict";

  mainListDiv.classList.toggle("show_list");
  blockMobile.classList.toggle("active");
};
let loader = document.getElementById("demo");
window.addEventListener("load", () => {
  loader.style.display = "none";
});
//
// Swiper js



//Scroller Nav
window.onscroll = function () {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $("nav").css("background-color", "var(--secondary-color)");
  } else {
    $("nav").css("background-color", "transparent");
  }

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 300) {
      links.forEach((link) => {
        if (link.getAttribute("href") == "#" + section.getAttribute("id")) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });
};

//Global variables
var element;

//Custom cursor
(() => {
  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", (e) => {
    cursor.setAttribute(
      "style",
      `top:  ${e.pageY - 25}px; left: ${e.pageX - 25}px;`
    );
  });

  document.addEventListener("click", () => {
    cursor.classList.add("cursor--expand");
    //   console.log(cursor.classList);

    setTimeout(() => {
      cursor.classList.remove("cursor--expand");
    }, 500);
  });
})();


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});