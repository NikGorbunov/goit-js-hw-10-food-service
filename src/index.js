import menuTpl from "./templaties/menu.hbs";
import menuItem from "./menu.json";
import "./sass/main.scss";

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const checkboxRef = document.querySelector(".theme-switch__toggle");
const menuList = document.querySelector(".js-menu");

const marcup = menuTpl(menuItem);
menuList.insertAdjacentHTML("beforeend", marcup);

const savedTheme = localStorage.getItem("theme");
const switchState = JSON.parse(localStorage.getItem("switcherCheckbox"));
checkboxRef.checked = switchState;

savedTheme
  ? document.body.classList.add(savedTheme)
  : document.body.classList.add(Theme.LIGHT);

checkboxRef.addEventListener("change", onClickForCheck);

function onClickForCheck() {
  document.body.classList.toggle(Theme.DARK);
  document.body.classList.toggle(Theme.LIGHT);

  setTheme();
}
function setTheme() {
  localStorage.setItem("switcherCheckbox", checkboxRef.checked);
  if (document.body.classList.contains(Theme.LIGHT)) {
    saveTheme(Theme.LIGHT);
  }

  if (document.body.classList.contains(Theme.DARK)) {
    saveTheme(Theme.DARK);
  }
}

function saveTheme(theme) {
  localStorage.setItem("theme", theme);
}
