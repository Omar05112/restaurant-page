import chefimage from "./chef.png";

export const loadHomepage = () => {

  const content = document.getElementById("content");

  const homeContainer = document.createElement("div");
  homeContainer.setAttribute("id", "home-container");
  content.appendChild(homeContainer);

  const restaurantName = document.createElement("div");
  restaurantName.setAttribute("id", "restaurant-name");
  restaurantName.innerText = "Sinner's Road Respite (or sth)";
  homeContainer.appendChild(restaurantName);

  const restaurantDescription = document.createElement("div");
  restaurantDescription.setAttribute("id", "restaurant-description");
  restaurantDescription.innerText =
    "Listen up man ik the game by now has been destroying you but hey we offer food here I'm not tryna rip you off or anything our meats are great and we definitely know how to cook please man just enter through that door";
  homeContainer.appendChild(restaurantDescription);

  const chefContainer = document.createElement("div");
  chefContainer.setAttribute("id", "chef-container");
  homeContainer.appendChild(chefContainer);

  const chef = document.createElement("img");
  chef.setAttribute("id", "chef");
  chef.src = chefimage;
  chefContainer.appendChild(chef);

  const imgDescription = document.createElement("div");
  imgDescription.setAttribute("id", "img-description");
  imgDescription.innerText =
    "Our chefs look like this wouldn't you let this guy cook food for you I mean look at him";
  chefContainer.appendChild(imgDescription);
};
