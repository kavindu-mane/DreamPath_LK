/* solution by kavindu manahara @group 7 */

document.querySelector('#theme').addEventListener('click', function () {
    themeChange(localStorage.getItem("theme"));
}); // theme change click event

let location_ = ""
if (!location.href.includes("index.html")) {
    location_ = "../";
} /// for change location

function themeChange(theme) {

    if (theme === 'theme-dark') {
        document.documentElement.className = 'theme-light';
        localStorage.setItem('theme', 'theme-light');


        document.querySelector("#theme").src = location_ + 'Images/moon.svg';

        if (document.documentElement.scrollTop < 100 && document.documentElement.scrollWidth > 992 && location.href.includes("index.html")) {

            document.querySelector('#logo').src = location_ + "Images/DreamPath-white.svg";

        } else {
            document.querySelector('#logo').src = location_ + "Images/DreamPath.svg";

        }

    } else {
        document.documentElement.className = 'theme-dark';
        localStorage.setItem('theme', 'theme-dark');
        document.querySelector("#theme").src = location_ + 'Images/sun.svg';
        document.querySelector('#logo').src = location_ + "Images/DreamPath-white.svg";

    }
} /// theme change function

window.addEventListener('load', function () {

    setTimeout(function () {
        try {
            document.querySelector("#chat-btn").style.right = "20px";
        } catch {
            /// nothing do in this 
        }

    }, 5000);

}); /// chat message contrall

window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector("#back-to-top").style.bottom = "15px";
    } else {
        document.querySelector("#back-to-top").style.bottom = "-50px";
    }
}); /// back to top button

let searchActive = false;

try {
    document.getElementById("search").onclick = function () {
        let element = document.getElementById("search-box");

        if (searchActive === false) {
            element.setAttribute('style', "transform:scale(1); -webkit-transform: scale(1); -o-transform: scale(1); -moz-transform: scale(1);");
            searchActive = true;
        } else {
            element.setAttribute('style', "transform:scale(0); -webkit-transform: scale(0); -o-transform: scale(0);-moz-transform: scale(0);");
            searchActive = false;
        }
    }
} catch {
    //don't need anything
}