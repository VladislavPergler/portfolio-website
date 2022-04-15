"use strict";

// SHOW MENU
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("nav__active");
      toggle.classList.toggle("toggle__active");
    });
  }
};
showMenu("nav-toggle", "nav-list");

//

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav__link");
const toggleActive = document.querySelectorAll(".toggle__active");

function linkAction() {
  const navMenu = document.getElementById("nav-list");
  const navToggle = document.getElementById("nav-toggle");
  navMenu.classList.remove("nav__active");
  navToggle.classList.remove("toggle__active");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

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

// ACCORDION
this.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".accordion__item");
  questions.forEach((question) =>
    question.addEventListener("click", () => {
      if (question.parentNode.classList.contains("active")) {
        question.parentNode.classList.toggle("active");
      } else {
        questions.forEach((question) =>
          question.parentNode.classList.remove("active")
        );
        question.parentNode.classList.add("active");
      }
    })
  );
});
