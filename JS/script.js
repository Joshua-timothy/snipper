"use strict";

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  //open navigation menu
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  //close navigation menu
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
