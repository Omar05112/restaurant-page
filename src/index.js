import "./style.css";

import { loadHomepage } from "./home";
import { loadMenupage } from "./menu";
import { loadContactpage } from "./contact";

const content = document.getElementById("content");
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");

let elements = document.querySelectorAll(".buttons");

elements.forEach((el) => {
  el.addEventListener("click", () => {
    elements.forEach((el) => el.classList.remove("active"));
    el.classList.add("active");
  });
});

loadHomepage();
homeButton.classList.add("active");

homeButton.addEventListener("click", (e) => {
  content.innerHTML = "";
  loadHomepage();
});

menuButton.addEventListener("click", (e) => {
  if (loadHomepage) {
    homeButton.classList.remove("active");
  }
  content.innerHTML = "";
  loadMenupage();
});

contactButton.addEventListener("click", (e) => {
  if (loadHomepage) {
    homeButton.classList.remove("active");
  }
  content.innerHTML = "";
  loadContactpage();
});
