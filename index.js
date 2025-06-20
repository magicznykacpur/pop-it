let linksMenuIcon = document.getElementById("links-menu-icon");
let linksMenu = document.getElementById("links-menu");

const showLinksMenu = () => {
  linksMenu.classList.remove("hidden");
  linksMenu.classList.add("flex-col");
};

const hideLinksMenu = () => {
  linksMenu.classList.add("hidden");
  linksMenu.classList.remove("flex-col");
};

linksMenuIcon.addEventListener("click", () => {
  if (linksMenu.classList.contains("hidden")) {
    showLinksMenu();
  } else {
    hideLinksMenu();
  }
});

window.addEventListener("click", (event) => {
  if (
    !linksMenuIcon.contains(event.target) &&
    !linksMenu.contains(event.target) &&
    !linksMenu.classList.contains("hidden")
  ) {
    hideLinksMenu();
  }
});

let header = document.getElementById("header");
const bgColors = ["#ffbf69", "#ff2f2d"];
const backgrounds = ["assets/background.png", "assets/background2.png"];
let currentBackground = 0;

const changeHeaderBackground = () => {
  if (currentBackground === backgrounds.length - 1) {
    currentBackground = 0;
    header.style.backgroundImage = `url(${backgrounds[currentBackground]})`;
    header.style.backgroundColor = bgColors[currentBackground];
  } else {
    currentBackground++;
    header.style.backgroundImage = `url(${backgrounds[currentBackground]})`;
    header.style.backgroundColor = bgColors[currentBackground];
  }
};

setInterval(changeHeaderBackground, 3000);

let rulesSection = document.getElementById("rules-section");
const grids = ["assets/bg-grid.png", "assets/bg-grid2.png"];
let currentRulesSectionBgGrid = 0;

const changeGrid = () => {
  if (currentRulesSectionBgGrid === grids.length - 1) {
    currentRulesSectionBgGrid = 0;
    rulesSection.style.backgroundImage = `url(${grids[currentRulesSectionBgGrid]})`;
  } else {
    currentRulesSectionBgGrid++;
    rulesSection.style.backgroundImage = `url(${grids[currentRulesSectionBgGrid]})`;
  }
};

setInterval(changeGrid, 3000);
