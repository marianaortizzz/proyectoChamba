function toggleMenu() {
    const menu = document.getElementById('navbarMenu');
    const banner = document.querySelector('.banner');
    menu.classList.toggle('show');

    if (menu.classList.contains('show')) {
        banner.style.marginTop = `${menu.scrollHeight}px`;
    } else {
        banner.style.marginTop = '0px';
    }
}