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
