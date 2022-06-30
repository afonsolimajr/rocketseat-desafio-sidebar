var menuOpened = true;

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeMenu() {
    menuOpened = !menuOpened;
    if (menuOpened) {
        profile.style.display = "flex";
        sidebar.style.width = "250px";
    } else {
        profile.style.display="none";
        sidebar.style.width = "55px";
    }
}
