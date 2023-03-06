let mainListDiv = document.getElementById("mainListDiv"),
  blockMobile = document.getElementById("blockMobile");
let links = document.querySelectorAll("nav .container .main_list ul li a");
let sections = document.querySelectorAll("section");
blockMobile.onclick = function () {
  "use strict";

  mainListDiv.classList.toggle("show_list");
  blockMobile.classList.toggle("active");
};
 



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


 


// 

var loader = document.getElementById('preloader');
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      fade = loader;
        var intervalID = setInterval(function () {
              
            if (!fade.style.opacity) {
                fade.style.opacity = 1;
            }
              
              
            if (fade.style.opacity > 0) {
                fade.style.opacity -= 0.1;
            } 
              
            else {
                clearInterval(intervalID);
            }
              
        }, 150);
        loader.style.display = "none";
}
};

// 
// let buttonQuestion = document.querySelector(".plus");
// let inputAnswer = document.getElementById("inputAnswer1");

// buttonQuestion.onclick= function(){
//   inputAnswer.classList.toggle("answer")
// }
const buttons = document.querySelectorAll('.faq-toggle');



buttons.forEach((button) =>{
    button.addEventListener('click', () =>{
        button.parentNode.classList.toggle('active')
    })
})

// 
function sendMail() {
  var params = {
    email: document.getElementById("email").value,
  };

  const serverID = "service_2sod1q1";
  const templateID = "template_d3qnt0b";

  emailjs.send(serverID, templateID, params)
  .then((res) => {
    document.getElementById("email").value = "";
    console.log("res");
    alert("success");
  })
  .catch((err) => console.log(err));
  alert("success");
  console.log("ahmed")
}