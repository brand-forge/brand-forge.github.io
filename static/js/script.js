function checkScroll() {
    var navbar = document.querySelector('.navbar');
    var logoImg = document.querySelector('.navbar .logo img');
    var logoSpan = document.querySelector('.navbar .logo span');
    var optionsImg = document.querySelector('.navbar .options img');
    var underlineCol = document.querySelector('.opener h1 u');
    var favicon = document.querySelector('link[rel="icon"]');

    if (window.scrollY > 20) {
        navbar.style.backgroundColor = '#ffffff';
        underlineCol.style.textDecorationColor = "var(--color-middle-h4)";
    } else {
        navbar.style.backgroundColor = 'transparent';
        underlineCol.style.textDecorationColor = "rgb(255, 255, 255)";
    }
}

checkScroll();

setInterval(checkScroll, 1);
