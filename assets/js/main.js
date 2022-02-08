"use strict";

// SHOW MENU
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

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// CHANGE BACKGROUND HEADER
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 200) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// SHOW SCROLL TOP
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

//TYPED TEXT
const typeTarget = document.querySelector(".type");

function type() {
  new Typed(typeTarget, {
    strings: [
      "&#60;Frontend Developer/&#62;",
      "&#60;Consultant/&#62;",
      "&#60;Freelancer/&#62;",
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
  });
}
type();

// SENT FORM
(function () {
  emailjs.init("user_xyeZE32W3sPNT8QGG9nCU");
})();

const contactForm = document.getElementById("contact-form");

window.onload = function () {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    this.contact_number.value = (Math.random() * 100000) | 0;
    emailjs.sendForm("portfolio", "template", this).then(
      function () {
        console.log("SUCCESS!");
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
    contactForm.reset();
  });
};

// ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

function navHighlighter() {
  let scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", navHighlighter);
