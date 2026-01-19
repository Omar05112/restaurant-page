import wojakimage from "./wojak.png";
export const loadContactpage = () => {
  const content = document.getElementById("content");

  const contactContainer = document.createElement("div");
  contactContainer.setAttribute("id", "contact-container");
  content.appendChild(contactContainer);

  const dontcallme = document.createElement("div");
  dontcallme.setAttribute("id", "dontcallme");
  dontcallme.innerText = "Please don't call me.";
  contactContainer.appendChild(dontcallme);

  const reason = document.createElement("div");
  reason.setAttribute("id", "reason");
  reason.innerText =
    "but for legal reasons i have to provide a number so here you go man";
  contactContainer.appendChild(reason);

  const number = document.createElement("div");
  number.setAttribute("id", "number");
  number.innerText = "342712";
  contactContainer.appendChild(number);

  const wojak = document.createElement("img");
  wojak.src = wojakimage;
  wojak.setAttribute("id", "wojak");
  contactContainer.appendChild(wojak);
};
