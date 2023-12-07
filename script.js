openNav = () => {
    document.getElementById('side-menu').style.width = '350px';
}

closeNav = () => {
    document.getElementById('side-menu').style.width = '0';
}

document.getElementById('hamburger').addEventListener('click', openNav);

