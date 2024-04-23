window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var logoImg = document.querySelector('.navbar .logo img');
    var logoSpan = document.querySelector('.navbar .logo span');
    var optionsImg = document.querySelector('.navbar .options img');
    var underlineCol = document.querySelector('.opener h1 u');
    var favicon = document.querySelector('link[rel="icon"]');

    if (window.scrollY > 20) {
        navbar.style.backgroundColor = '#ffffff';
        setTimeout(function() {
            logoSpan.style.color = 'transparent';
            logoSpan.style.backgroundImage = 'linear-gradient(90deg, var(--color-callact) 0%, var(--color-middle) 25%, var(--color-middle-h2) 50%, var(--color-middle-h3) 75%, var(--color-middle-h4) 100%)';
            logoImg.src = 'static/images/logo.svg';
            optionsImg.src = 'static/images/ex-options.svg';
            favicon.href = 'static/images/logo.svg';
            underlineCol.style.textDecorationColor = "var(--color-middle-h4)";
        }, 520);
    } else {
        navbar.style.backgroundColor = 'transparent';
        setTimeout(function() {
            logoSpan.style.color = 'transparent';
            logoSpan.style.backgroundImage = 'linear-gradient(90deg, rgb(109, 109, 109) 0%, var(--color-neutral-2) 100%)';
            logoImg.src = 'static/images/ex-logo.svg';
            optionsImg.src = 'static/images/options.svg';
            favicon.href = 'static/images/ex-logo.svg';
            underlineCol.style.textDecorationColor = "rgb(255, 255, 255)";
        }, 520);
    }
});
