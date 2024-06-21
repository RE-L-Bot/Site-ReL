export function clickMenuHeader(e) {

    const MenuStyle = document.getElementById("MenuBurguerHederMobile")

    if (MenuStyle.style.display == "" || MenuStyle.style.display == "none") {
        e.target.innerHTML = "menu_open"
        MenuStyle.style.display = "block"
    } else {
        e.target.innerHTML = "menu"
        MenuStyle.style.display = "none"
    }

    document.addEventListener("resize", mudarMenu, false);

    function mudarMenu() {
        if (document.innerWidth > 700) {
            document.getElementById("MenuBurguerHederMobile").style.display = "none"
            document.removeEventListener("resize", mudarMenu, false)
        }
    }
}

export function clickMenuDash(e) {

    const MenuStyle = document.getElementById("MenuBurguerDash")

    if (MenuStyle.style.display == "" || MenuStyle.style.display == "none") {
        e.target.innerHTML = "menu_open"
        MenuStyle.style.display = "block"
    } else {
        e.target.innerHTML = "menu"
        MenuStyle.style.display = "none"
    }

    document.addEventListener("resize", mudarMenu, false);

    function mudarMenu() {
        if (document.innerWidth > 700) {
            document.getElementById("MenuBurguerDash").style.display = "none"
            document.removeEventListener("resize", mudarMenu, false)
        }
    }
}

export function changeVisibilityOptionsSelectMenu(e) {

    const div = document.getElementById("selectMenuOptionsDc")

    if (div.style.display == "") {
        div.style.display = "block"
    } else {
        div.style.display = ""
    }

}