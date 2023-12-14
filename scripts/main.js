// "use strict";
// import Swiper from "swiper-bundle.min.js";

const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

const tabItem = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tabs__content-item");

tabItem.forEach(function (element) {
  element.addEventListener("click", open);
});

function open(event) {
  const tabTarget = event.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function (item) {
    item.classList.remove("tabs__btn-item_active");
  });

  tabTarget.classList.add("tabs__btn-item_active");

  tabContent.forEach(function (item) {
    item.classList.remove("tabs__content-item_active");
  });

  document
    .querySelector(`#${button}`)
    .classList.add("tabs__content-item_active");
}

const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu-list");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu__list_active");
});
