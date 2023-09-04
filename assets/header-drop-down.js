const listMenu = document.querySelectorAll('.list-menu--inline li');
const headerDropDown = document.querySelector('.header__drop-down');

function onMouseOver() {
    if (headerDropDown.classList.contains('inactive')) {
        headerDropDown.classList.remove('inactive')
        headerDropDown.classList.add('active')
    }
}

function onMouseOut() {
    if (headerDropDown.classList.contains('active')) {
        headerDropDown.classList.remove('active')
        headerDropDown.classList.add('inactive')
    }
}

listMenu.forEach((link, i) => { 
    link.addEventListener('mouseover', onMouseOver)
    link.addEventListener('mouseout', onMouseOut)
})

console.log(listMenu)


