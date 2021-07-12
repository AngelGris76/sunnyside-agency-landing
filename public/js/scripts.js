const menuButton = document.getElementById("menu-button");
const mainMenu = document.getElementById("main-menu");

const toggleMenu = () => {
  mainMenu.classList.toggle("main-menu--hide");
};

menuButton.addEventListener("click", () => {
  toggleMenu();
});
