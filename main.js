
document.addEventListener("DOMContentLoaded", function() {
  // Get the current page URL
  const currentPage = window.location.href;

  // Get all the navigation links
  const navLinks = document.querySelectorAll('.nav_link');

  // Loop through each navigation link
  navLinks.forEach(link => {
    // Check if the link's href attribute matches the current page URL
    if (link.href === currentPage) {
      // If it matches, add the 'active' class to its parent <li> element
      link.parentElement.classList.add('active');
    }
  });
  
  // Add click event listener to each link
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      // Remove the 'active' class from all navigation items
      navLinks.forEach(link => {
        link.parentElement.classList.remove('active');
      });
      
      // Add the 'active' class to the clicked link's parent <li> element
      this.parentElement.classList.add('active');
    });
  });
});


/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav_menu class
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav_link");
const linesMobileMenu = document.querySelector(".menu");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav_link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
  // And also, the class "opened" on each line from the animated hamburguer menu:
  linesMobileMenu.classList.remove("opened");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");

  //Remove navMenu when scroll to top:
  scrollTop.addEventListener("click", linkAction);
}
window.addEventListener("scroll", scrollTop);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );

}

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 1000,
  reset: true
});

sr.reveal(
  // `.home_data, .home_img,
  //         .about_data, .about_img,
  //         .services_content, .menu_content,
  //         .app_data, .app_img,
  //         .contact_data, .contact_button,
  //         .footer_content, .franchise_intro, .franchise_container
  //         , .foods_content, .about-section`,
  {
    interval: 200
  }
);

// land

 // IMAGE SLIDES & CIRCLES ARRAYS, & COUNTER
 var imageSlides = document.getElementsByClassName('imageSlides');
 var circles = document.getElementsByClassName('circle');
 var leftArrow = document.getElementById('leftArrow');
 var rightArrow = document.getElementById('rightArrow');
 var counter = 0;

 // HIDE ALL IMAGES FUNCTION
 function hideImages() {
   for (var i = 0; i < imageSlides.length; i++) {
     imageSlides[i].classList.remove('visible');
   }
 }

 // REMOVE ALL DOTS FUNCTION
 function removeDots() {
   for (var i = 0; i < imageSlides.length; i++) {
     circles[i].classList.remove('dot');
   }
 }

 // SINGLE IMAGE LOOP/CIRCLES FUNCTION
 function imageLoop() {
   var currentImage = imageSlides[counter];
   var currentDot = circles[counter];
   currentImage.classList.add('visible');
   removeDots();
   currentDot.classList.add('dot');
   counter++;
 }

 // LEFT & RIGHT ARROW FUNCTION & CLICK EVENT LISTENERS
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


 // IMAGE SLIDE FUNCTION
 function slideshow() {
   if (counter < imageSlides.length) {
     imageLoop();
   } else {
     counter = 0;
     hideImages();
     imageLoop();
   }
 }

 // SHOW FIRST IMAGE, & THEN SET & CALL SLIDE INTERVAL
 setTimeout(slideshow, 1000);
 var imageSlideshowInterval = setInterval(slideshow, 8000);

 // land 

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
    //  console.error("Could not find elements with the specified classes.");
   }

   // Activate slide function
   function ActiveSlide(n) {
     for (slide of slides)
       slide.classList.remove('active');
     slides[n].classList.add('active');
   }

   // Next button click event
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

   // Previous button click event
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
