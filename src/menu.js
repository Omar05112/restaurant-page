import roachimage from "./roach.png";
import redimage from "./red.png";

export const loadMenupage = () => {
  const content = document.getElementById("content");

  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("id", "home-container");
  content.appendChild(menuContainer);

  const disclaimerContainer = document.createElement("div");
  disclaimerContainer.setAttribute("id", "disclaimer-container");
  menuContainer.appendChild(disclaimerContainer);

  const disclaimerText = document.createElement("div");
  disclaimerText.setAttribute("id", "disclaimer-text");
  disclaimerText.innerText = "Disclaimer:";
  disclaimerContainer.appendChild(disclaimerText);

  const disclaimerDesc = document.createElement("div");
  disclaimerDesc.setAttribute("id", "disclaimer-desc");
  disclaimerDesc.innerText =
    "ay look man we don't wanna eat each other so our diet only consists of 2 insects that we cycle through";
  disclaimerContainer.appendChild(disclaimerDesc);

  const foodContainer = document.createElement("div");
  foodContainer.setAttribute("id", "food-container");
  menuContainer.appendChild(foodContainer);

  const thisiswhatweoffer = document.createElement("h1");
  thisiswhatweoffer.setAttribute("id", "thisiswhatweoffer");
  thisiswhatweoffer.innerText = "This is what we offer";
  foodContainer.appendChild(thisiswhatweoffer);

  const fornowig = document.createElement("h5");
  fornowig.setAttribute("id", "fornowig");
  fornowig.innerText = "for now i guess";
  foodContainer.appendChild(fornowig);

  const everyday = document.createElement("div");
  everyday.setAttribute("id", "everyday");
  everyday.innerText =
    "we don't have different menus everyday since there's no concept of time here just take it or leave it man";
  foodContainer.appendChild(everyday);

  const firstmeal = document.createElement("div");
  firstmeal.setAttribute("id", "firstmeal");
  foodContainer.appendChild(firstmeal);

  const red = document.createElement("img");
  red.setAttribute("id", "red");
  red.src = redimage;
  firstmeal.appendChild(red);

  const reddesc = document.createElement("div");
  reddesc.setAttribute("id", "reddesc");
  reddesc.innerText =
    "you can find these everywhere and mostly as pets sorry if we took yours they do taste good tho, 7 clams";
  firstmeal.appendChild(reddesc);

  const secondmeal = document.createElement("div");
  secondmeal.setAttribute("id", "secondmeal");
  foodContainer.appendChild(secondmeal);

  const roach = document.createElement("img");
  roach.setAttribute("id", "roach");
  roach.src = roachimage;
  secondmeal.appendChild(roach);

  const roachdesc = document.createElement("div");
  roachdesc.setAttribute("id", "roachdesc");
  roachdesc.innerText =
    "everybody hates these so we decided to cook them up out of spite, 19 shillings";
  secondmeal.appendChild(roachdesc);
};
