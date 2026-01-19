import "./style.css";

import { loadHomepage } from "./home";
import { loadMenupage } from "./menu";
import { loadContactpage } from "./contact";

const content = document.getElementById("content");
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");

homeButton.style.backgroundColor = "rgb(175, 175, 156)";
loadHomepage();

homeButton.addEventListener("click", (e) => {
  content.innerHTML = "";

  loadHomepage();
});

menuButton.addEventListener("click", (e) => {
  content.innerHTML = "";
  loadMenupage();
});

contactButton.addEventListener("click", (e) => {
  content.innerHTML = "";
  loadContactpage();
});