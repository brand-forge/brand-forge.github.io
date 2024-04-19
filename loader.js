document.addEventListener("DOMContentLoaded", function() {
    var typingText = document.getElementById("typing-text");
    var text = typingText.getAttribute("text").trim();

    typeWriter(text, typingText);

    var delay = 3000;

    setTimeout(function() {
        var loadingPrompt = document.querySelector(".loading-prompt");
        loadingPrompt.style.display = "none";
        document.querySelector(".loading-prompt-content").style.display = "block";
    }, delay);
});

function typeWriter(text, element) {
    var i = 0;
    var speed = 50;

    function type() {
        if (i < text.length) {
            if (text.charAt(i) === '<') {
                var endIndex = text.indexOf('>', i);
                var tag = text.slice(i, endIndex + 1);
                element.innerHTML += tag;
                i = endIndex + 1;
                if (tag === '<br>') {
                    setTimeout(type, 4000);
                } else {
                    setTimeout(type, speed);
                }
            } else {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
    }

    type();
}