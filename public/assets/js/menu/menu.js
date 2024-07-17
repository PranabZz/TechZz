const menu = document.querySelector(".menu-block");
const menuMain = menu.querySelector(".site-menu-main");
const submenus = menu.getElementsByClassName("sub-menu");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
const menuOverlay = document.querySelector(".menu-overlay");
let currentSubMenu;
let subMenuStack = [];
let subMenuTitleStack = [];

function getLastElement(array) {
    return array[array.length - 1];
}
function getSecondLastElement(array) {
    return array[array.length - 2];
}

menuMain.addEventListener("click", (e) => {
    if (!menu.classList.contains("active")) {
        return;
    }
    const navItemWithChildren = e.target.closest(".nav-item-has-children");
    if (navItemWithChildren) {
        console.log("Clicked on nav item with children:", navItemWithChildren.className);
        showSubMenu(navItemWithChildren);
    }
});

goBack.addEventListener("click", () => {
    const lastSubMenuId = getLastElement(subMenuStack);
    const secondLastSubMenuTitle = getSecondLastElement(subMenuTitleStack);
    console.log("Going back from submenu:", document.getElementById(lastSubMenuId).className);

    subMenuStack.pop();
    subMenuTitleStack.pop();

    if (subMenuStack.length >= 0) {
        document.getElementById(lastSubMenuId).style.animation = "slideRight 0.5s ease forwards";
        menu.querySelector(".current-menu-title").textContent = secondLastSubMenuTitle;
        setTimeout(() => {
            document.getElementById(lastSubMenuId).classList.remove("active");
        }, 300);
    }

    if (subMenuStack.length === 0) {
        menu.querySelector(".mobile-menu-head").classList.remove("active");
    }
    console.log("Submenu stack after going back:", subMenuStack.map(id => document.getElementById(id).className));
});

menuTrigger.addEventListener("click", () => {
    console.log("Menu trigger clicked");
    toggleMenu();
});

closeMenu.addEventListener("click", () => {
    console.log("Close menu clicked");
    toggleMenu();
});

menuOverlay.addEventListener("click", () => {
    console.log("Menu overlay clicked");
    toggleMenu();
});

function toggleMenu() {
    menu.classList.toggle("active");
    menuOverlay.classList.toggle("active");
    console.log("Menu toggled. Active status:", menu.classList.contains("active"));
}

function showSubMenu(navItemWithChildren) {
    for (let i = 0; i < submenus.length; i++) {
        submenus[i].classList.remove("active");
    }
    
    currentSubMenu = navItemWithChildren.querySelector(".sub-menu");
    subMenuStack.push(currentSubMenu.id);
    currentSubMenu.classList.add("active");
    currentSubMenu.style.animation = "slideLeft 0.5s ease forwards";

    const menuTitle = navItemWithChildren.querySelector(".drop-trigger").textContent;
    subMenuTitleStack.push(menuTitle);

    menu.querySelector(".current-menu-title").textContent = menuTitle;
    menu.querySelector(".mobile-menu-head").classList.add("active");

    console.log("Showing submenu:", currentSubMenu.className);
    console.log("Submenu stack:", subMenuStack.map(id => document.getElementById(id).className));
    console.log("Submenu title stack:", subMenuTitleStack);
}

window.onresize = () => {
    if (window.innerWidth > 991 && menu.classList.contains("active")) {
        toggleMenu();
    }
    console.log("Window resized to:", window.innerWidth);
};
