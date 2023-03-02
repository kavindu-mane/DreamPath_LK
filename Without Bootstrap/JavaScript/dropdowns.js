/* solution by kavindu manahara @group 7 */

// this javascript use for all pages dropdowns

let _location = ""
if (!location.href.includes("index.html")) {
    _location = "../";
} /// for change location

document.querySelector("#btn-menu").addEventListener('click', function () {
    let tag = document.querySelector("#nav-for-small-divice");
    let style = tag.currentStyle || window.getComputedStyle(tag);
    if (style.right !== "0px") {
        tag.style.right = "0";
        document.querySelector("#btn-menu img").src = _location +  "Images/cancel.svg";


    } else {
        tag.style.right = "-320px";
        document.querySelector("#btn-menu img").src = _location + "Images/menu.svg";


    }

}); /// side navbar position change


document.querySelector("#btn-more").addEventListener('click', function () {
    let tag = document.querySelector("#more-dropdown");
    let style = tag.currentStyle || window.getComputedStyle(tag);
    if (style.top == "200px") {
        tag.setAttribute("style", "z-index: 4; top:80px; opacity:1");
        document.querySelector("#btn-more").innerHTML = "More <span style='font-size: 12px; margin-bottom:5px'>&#11205;";
    } else {
        tag.setAttribute("style", "z-index: -1; top:200px; opacity:0");
        document.querySelector("#btn-more").innerHTML = "More <span style='font-size: 12px; margin-bottom:5px'>&#11206;";
    }
}); /// dropdown for large devices

document.querySelector("#small-btn-more").addEventListener('click', function () {
    let tag = document.querySelectorAll(".small-dropdown-itm");
    let style = tag[4].currentStyle || window.getComputedStyle(tag[4]);

    for (let val of tag) {

        if (style.display == "none") {
            val.setAttribute("style", "display:block;");
            document.querySelector("#small-btn-more").innerHTML = "More <span style='font-size: 10px;'>&#11205;";
        } else {
            val.setAttribute("style", "display:none;");
            document.querySelector("#small-btn-more").innerHTML = "More <span style='font-size: 10px;'>&#11206;";
        }

    }
}); /// dropdown for small devices

window.addEventListener("resize", function () {
    document.querySelector("#nav-for-small-divice").style.right = "-320px";

    document.querySelector("#btn-menu img").src = _location + "Images/menu.svg";

    // document.querySelector("#btn-menu img").src = "../Images/menu.svg";

    document.querySelector("#more-dropdown").setAttribute("style", "z-index: 0; top:200px; opacity:0");
    document.querySelector("#btn-more").innerHTML = "More <span style='font-size: 12px; margin-bottom:5px'>&#11206;";

    for (let reset of document.querySelectorAll(".small-dropdown-itm")) {
        reset.setAttribute("style", "display:none;");
    }
    document.querySelector("#small-btn-more").innerHTML = "More <span style='font-size: 10px;'>&#11206;";
});/// display size resize

document.querySelector("body").onclick = function () {
    if (document.querySelector("#more-dropdown").style.zIndex == 4) {
        document.getElementById("btn-more").click();
    }
} /// if backgroud click while dropdown active
