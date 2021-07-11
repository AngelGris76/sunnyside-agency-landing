const menuButton = document.getElementById("menu-button");
const mainMenu = document.getElementById("main-menu");

const toggleMenu = () => {
  mainMenu.classList.toggle("main-menu--hide");
  if (mainMenu.ariaHidden === "true") mainMenu.ariaHidden = "false";
  else mainMenu.ariaHidden = "true";
};

menuButton.addEventListener("click", () => {
  toggleMenu();
});
