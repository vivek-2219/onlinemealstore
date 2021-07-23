function toggleMenu() {
    let bg = document.getElementById('burger');
    let nav = document.getElementById('navbar');

    if (nav.style.opacity != '0') {
        nav.style.opacity = '0';
    }
    else {
        nav.style.opacity = '1'
    }
}