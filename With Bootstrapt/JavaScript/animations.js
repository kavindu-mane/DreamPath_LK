/* solution by kavindu manahara @group 7 */

// this javascript use for home page career animations 

let index = 1; // for image changers
let career = 0; // for carier emage changers
let moseInctive = [true, true, true, true];

setInterval(function () {
    if (index < 4) {
        document.querySelector("#main-container img").style.opacity = 0;

        setTimeout(function () {
            document.querySelector("#main-container img").src = "../Images/img-" + (index + 1) + ".png";
            document.querySelector("#main-container img").style.opacity = 0.8;
            index++;
        }, 1000);

    } else {

        document.querySelector("#main-container img").style.opacity = 0;
        setTimeout(function () {
            document.querySelector("#main-container img").src = "../Images/img-1.png";
            document.querySelector("#main-container img").style.opacity = 0.8;
        }, 1000);

        index = 1;
    }
}, 10000); /// change image in main container

let myObj = {
    "Web developer": ["Web Developer", "../Images/web-developer.png"],
    "Graphic Designer": ["Graphic Designer", "../Images/grapic-designer.png"],
    "Social Media Manager": ["Social Media Manager", "../Images/social-media-manager.png"],
    "Customer Care Agent": ["Customer Care Agent", "../Images/customer-care.png"],
    "Digital Artist": ["Digital Artist", "../Images/digital-artist.png"],
    "Online Tutoring": ["Online Tutoring", "../Images/online-titoring.png"],
    "UI/UX Developer": ["UI/UX Developer", "../Images/ui-designer.png"],
    "App developer": ["APP Developer", "../Images/mobile-developer.png"],
    "HR Manager": ["HR Manager", "../Images/hr-manager.png"]
}

document.querySelector(".details-container-1").addEventListener('mouseenter', function () { moseInctive[0] = false });
document.querySelector(".details-container-2").addEventListener('mouseenter', function () { moseInctive[1] = false });
document.querySelector(".details-container-3").addEventListener('mouseenter', function () { moseInctive[2] = false });
document.querySelector(".details-container-4").addEventListener('mouseenter', function () { moseInctive[3] = false });

document.querySelector(".details-container-1").addEventListener('mouseleave', function () { moseInctive[0] = true });
document.querySelector(".details-container-2").addEventListener('mouseleave', function () { moseInctive[1] = true });
document.querySelector(".details-container-3").addEventListener('mouseleave', function () { moseInctive[2] = true });
document.querySelector(".details-container-4").addEventListener('mouseleave', function () { moseInctive[3] = true });

setInterval(function () {

    let rows = [];

    switch (career) {
        case 5:
            rows[0] = myObj[Object.keys(myObj)[career + 1]];
            rows[1] = myObj[Object.keys(myObj)[career + 2]];
            rows[2] = myObj[Object.keys(myObj)[career + 3]];
            rows[3] = myObj[Object.keys(myObj)[0]];
            career++;
            break;
        case 6:
            rows[0] = myObj[Object.keys(myObj)[career + 1]];
            rows[1] = myObj[Object.keys(myObj)[career + 2]];
            rows[2] = myObj[Object.keys(myObj)[0]];
            rows[3] = myObj[Object.keys(myObj)[1]];
            career++;
            break;
        case 7:
            rows[0] = myObj[Object.keys(myObj)[career + 1]];
            rows[1] = myObj[Object.keys(myObj)[0]];
            rows[2] = myObj[Object.keys(myObj)[1]];
            rows[3] = myObj[Object.keys(myObj)[2]];
            career++;
            break;
        case 8:
            rows[0] = myObj[Object.keys(myObj)[0]];
            rows[1] = myObj[Object.keys(myObj)[1]];
            rows[2] = myObj[Object.keys(myObj)[2]];
            rows[3] = myObj[Object.keys(myObj)[3]];
            career = 0;
            break;
        default:
            rows[0] = myObj[Object.keys(myObj)[career + 1]];
            rows[1] = myObj[Object.keys(myObj)[career + 2]];
            rows[2] = myObj[Object.keys(myObj)[career + 3]];
            rows[3] = myObj[Object.keys(myObj)[career + 4]];
            career++;

    }

    for (let i = 1; i < 5; i++) {

        if (moseInctive[i - 1]) { // check mouse over or not 

            document.querySelector(".details-container-" + i).setAttribute('style', "-webkit-transform: scale(0.5); transform: scale(0.5);");

            setTimeout(function () {
                document.querySelector(".details-container-" + i + ' img').src = rows[i - 1][1];
                document.querySelector("#img-" + i + ' p').innerHTML = rows[i - 1][0];
                document.querySelector(".details-container-" + i).setAttribute('style', "-webkit-transform: scale(1); transform: scale(1);");
            }, 500);
        }
    }

}, 10000);