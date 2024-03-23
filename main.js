
document.addEventListener("DOMContentLoaded", function() {
  const currentPage = window.location.href;
  const navLinks = document.querySelectorAll('.nav_link');
  navLinks.forEach(link => {
    if (link.href === currentPage) {
      link.parentElement.classList.add('active');
    }
  });
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      navLinks.forEach(link => {
        link.parentElement.classList.remove('active');
      });
      this.parentElement.classList.add('active');
    });
  });
});

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

const navLink = document.querySelectorAll(".nav_link");
const linesMobileMenu = document.querySelector(".menu");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
  linesMobileMenu.classList.remove("opened");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
  scrollTop.addEventListener("click", linkAction);
}
window.addEventListener("scroll", scrollTop);

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );

}

const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 1000,
  reset: true
});

sr.reveal(
   ``,
  {
    interval: 200
  }
);

 var imageSlides = document.getElementsByClassName('imageSlides');
 var circles = document.getElementsByClassName('circle');
 var leftArrow = document.getElementById('leftArrow');
 var rightArrow = document.getElementById('rightArrow');
 var counter = 0;

 function hideImages() {
   for (var i = 0; i < imageSlides.length; i++) {
     imageSlides[i].classList.remove('visible');
   }
 }

 function removeDots() {
   for (var i = 0; i < imageSlides.length; i++) {
     circles[i].classList.remove('dot');
   }
 }

 function imageLoop() {
   var currentImage = imageSlides[counter];
   var currentDot = circles[counter];
   currentImage.classList.add('visible');
   removeDots();
   currentDot.classList.add('dot');
   counter++;
 }

 function arrowClick(e) {
   var target = e.target;
   if (target == leftArrow) {
     clearInterval(imageSlideshowInterval);
     hideImages();
     removeDots();
     if (counter == 1) {
       counter = (imageSlides.length - 1);
       imageLoop();
       imageSlideshowInterval = setInterval(slideshow, 10000);
     } else {
       counter--;
       counter--;
       imageLoop();
       imageSlideshowInterval = setInterval(slideshow, 10000);
     }
   }
   else if (target == rightArrow) {
     clearInterval(imageSlideshowInterval);
     hideImages();
     removeDots();
     if (counter == imageSlides.length) {
       counter = 0;
       imageLoop();
       imageSlideshowInterval = setInterval(slideshow, 10000);
     } else {
       imageLoop();
       imageSlideshowInterval = setInterval(slideshow, 10000);
     }
   }
 }

 leftArrow.addEventListener('click', arrowClick);
 rightArrow.addEventListener('click', arrowClick);


 function slideshow() {
   if (counter < imageSlides.length) {
     imageLoop();
   } else {
     counter = 0;
     hideImages();
     imageLoop();
   }
 }

 setTimeout(slideshow, 1000);
 var imageSlideshowInterval = setInterval(slideshow, 8000);

 document.addEventListener('DOMContentLoaded', function () {
   const menutoggle = document.querySelector('.toggle');
   const navigation = document.querySelector('.navigation');
   const slides = document.querySelectorAll('.slides');
   const prev = document.querySelector('.prev');
   const next = document.querySelector('.next');
   let i = 0;

   // Toggle navigation menu
   if (menutoggle && navigation) {
     menutoggle.onclick = function () {
       menutoggle.classList.toggle('active');
       navigation.classList.toggle('active');
     }
   } else {
   }

   function ActiveSlide(n) {
     for (slide of slides)
       slide.classList.remove('active');
     slides[n].classList.add('active');
   }

   if (next) {
     next.addEventListener('click', function () {
       if (i == slides.length - 1) {
         i = 0;
         ActiveSlide(i);
       } else {
         i++;
         ActiveSlide(i);
       }
     });
   } else {
     console.error("Next button element not found.");
   }

   if (prev) {
     prev.addEventListener('click', function () {
       if (i == 0) {
         i = slides.length - 1;
         ActiveSlide(i);
       } else {
         i--;
         ActiveSlide(i);
       }
     });
   } else {
     console.error("Previous button element not found.");
   }
 });
 
 document.addEventListener('DOMContentLoaded', function () {
  var cloudKitchen = document.getElementById('cloud-kitchen');
  var conversion = document.getElementById('conversion');

  cloudKitchen.addEventListener('click', function () {
      window.location.href = './contact-us.html';
  });

  conversion.addEventListener('click', function () {
      window.location.href = './contact-us.html';
  });
});
