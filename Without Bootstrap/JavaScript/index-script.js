/* solution by kavindu manahara @group 7 */

// this javascript use for home page settings 

function returnValues() {
    return document.documentElement || document.body;
}

document.addEventListener('scroll', function () {

    if (returnValues().scrollTop < 100 && returnValues().scrollWidth > 992) {
        document.querySelector('#navbar').setAttribute("style", "background-color: transparent; box-shadow:none");
        document.querySelector('#logo').src = "Images/DreamPath-white.svg";

    } else {
        document.querySelector('#navbar').setAttribute("style", "background-color: var(--header-color); box-shadow:0 8px 8px #08080814");
        logoChange();
    }

});// header background change

window.addEventListener("resize", function () {
    if (returnValues().scrollWidth < 992) {
        document.querySelector('#navbar').setAttribute("style", "background-color: var(--header-color); box-shadow:0 8px 8px #08080814");
        logoChange();

    } else if (returnValues().scrollTop < 100) {
        document.querySelector('#navbar').setAttribute("style", "background-color: transparent; box-shadow:none");
        document.querySelector('#logo').src = "Images/DreamPath-white.svg";
    }

}); // resize detect and header background change

function logoChange() {
    if (localStorage.getItem("theme") === 'theme-dark') {
        document.querySelector('#logo').src = "Images/DreamPath-white.svg";
    } else {
        document.querySelector('#logo').src = "Images/DreamPath.svg";
    }
}// change logo

document.querySelector('#theme').addEventListener('click', function () {
    setTimeout(function () {  /// add small delay
        feedbackColorchange();
        accountCreateColorchange();
    }, 10);
}); // change backgroud color with theme change 

window.addEventListener('scroll', function () {
    feedbackColorchange();
    accountCreateColorchange();
}); /// home page background change

function feedbackColorchange() {
    let val_ = document.querySelector("#feedback").getBoundingClientRect().top;

    if (val_ <= window.innerHeight && window.innerHeight / 2 < val_) {
        let cal = (2 / window.innerHeight) * (window.innerHeight - val_);

        if (localStorage.getItem('theme') === 'theme-dark') {
            document.querySelector("#feedback").style.backgroundColor = 'rgba(20,40,80,' + cal.toFixed(2) + ')';
            document.querySelector("#feedback").style.boxShadow = '0px 0px 80px 120px rgba(20,40,80,' + cal.toFixed(2) + ')';
        } else {
            document.querySelector("#feedback").style.backgroundColor = 'rgba(166, 77, 255,' + cal.toFixed(2) + ')';
            document.querySelector("#feedback").style.boxShadow = '0px 0px 80px 120px rgba(166, 77, 255,' + cal.toFixed(2) + ')';
        }

    } else if (window.innerHeight / 2 > val_) {
        if (localStorage.getItem('theme') === 'theme-dark') {
            document.querySelector("#feedback").style.backgroundColor = 'rgba(20,40,80)';
            document.querySelector("#feedback").style.boxShadow = '0px 0px 80px 120px rgba(20,40,80)';
        } else {
            document.querySelector("#feedback").style.backgroundColor = 'rgba(166, 77, 255)';
            document.querySelector("#feedback").style.boxShadow = '0px 0px 80px 120px rgba(166, 77, 255)';
        }
    }

    if (val_ < window.innerHeight - 250) {
        if (window.innerWidth <= 460) {
            document.querySelector("#feedback-container").style.marginLeft = '10%';
        } else {
            document.querySelector("#feedback-container").style.marginLeft = '25%';
        }
    } else {
        document.querySelector("#feedback-container").style.marginLeft = '100%';
    }

}/// feedback changer

function accountCreateColorchange() {
    let val_ = document.querySelector("#create-account").getBoundingClientRect().top;

    if (val_ <= window.innerHeight && window.innerHeight / 2 < val_) {
        let cal = (2 / window.innerHeight) * (window.innerHeight - val_);

        if (localStorage.getItem('theme') === 'theme-dark') {
            document.querySelector("#create-account").style.backgroundColor = 'rgba(11, 82, 105,' + cal.toFixed(2) + ')';
            document.querySelector("#create-account").style.boxShadow = '0px 0px 80px 120px rgba(11, 82, 105,' + cal.toFixed(2) + ')';
        } else {
            document.querySelector("#create-account").style.backgroundColor = 'rgba(120, 104, 230,' + cal.toFixed(2) + ')';
            document.querySelector("#create-account").style.boxShadow = '0px 0px 80px 120px rgba(120, 104, 230,' + cal.toFixed(2) + ')';
        }

    } else if (window.innerHeight / 2 > val_) {
        if (localStorage.getItem('theme') === 'theme-dark') {
            document.querySelector("#create-account").style.backgroundColor = 'rgba(11, 82, 105)';
            document.querySelector("#create-account").style.boxShadow = '0px 0px 80px 120px rgba(11, 82, 105)';
        } else {
            document.querySelector("#create-account").style.backgroundColor = 'rgba(120, 104, 230)';
            document.querySelector("#create-account").style.boxShadow = '0px 0px 80px 120px rgba(120, 104, 230)';
        }
    }

    if (val_ < window.innerHeight - 250) {
        document.querySelector("#create-account").style.paddingTop = '30px';
    } else {
        document.querySelector("#create-account").style.paddingTop = window.innerHeight / 2 + 'px';
    }

}/// account create changer

let benifittArr = [
    [
        "<span>&check; </span>Access to career coaching and resume reviews",
        "Our fantastic in-house career coaches specialize in remote and flexible job search guidance!",
        "<span>&check; </span>Level up with skills courses, webinars, and more!",
        "Increase your chances of job search success with in-depth expert resources, events, and virtual job fairs."
    ],
    [
        "<span>&check; </span>We see every job before you do",
        "Save time, energy, and stress by letting our expert team vet the jobs and companies for you! You only see the best remote and flexible job listings available.",
        "<span>&check; </span>Access exclusive research on employers",
        "You can leverage exclusive hiring information on over 300 companies to help find the right employer, culture, and job faster and easier."
    ],
    [
        "<span>&check; </span>Top-notch friendly, helpful customer support",
        "Really! We have intelligent, friendly client support folks who you can easily talk to, and who genuinely care about helping you have a good experience.",
        "<span>&check; </span>Try FlexJobs with no risk and all the upside",
        "We want you to be happy with our service, and if for any reason you are not, simply request a refund within 30 days. It is that easy."
    ]
];

let benifitIndex = 0;

document.querySelector("#benifit-prev").addEventListener('click', function () {
    benifitMoves(-110, 110, 1);
}) /// benifit text previous button

document.querySelector("#benifit-next").addEventListener('click', function () {
    benifitMoves(110, -110, -1);
}) /// benifit text nexr button

function benifitMoves(val_1, val_2, btn) {
    let arr = document.querySelectorAll("#inner-container p");

    if (btn === 1 && (benifitIndex + btn) === 3) {
        benifitIndex = 0;
    } else if (btn === -1 && (benifitIndex + btn) === -1) {
        benifitIndex = 2;
    } else {
        benifitIndex += btn;
    }

    for (let line of arr) {
        line.style.transform = "translateX(" + val_1 + "%)";
    }

    setTimeout(function () {
        let tmp = 0;
        for (let line of arr) {
            line.setAttribute('style', "transition: 1ms; -o-transition: 1ms; -moz-transition: 1ms; -webkit-transition: 1ms;");
            line.style.transform = "translateX(" + val_2 + "%)";
            line.innerHTML = benifittArr[benifitIndex][tmp];
            tmp++;
        }
    }, 500);

    setTimeout(function () {
        for (let line of arr) {
            line.setAttribute('style', "transition: 500ms; -o-transition: 500ms; -moz-transition: 500ms; -webkit-transition: 500ms;");
            line.style.transform = "translateX(0)";
        }
    }, 600);
} /// benifit moves function


let feedbcakArr = [
    ["This is a tremendous service, and such a relief to be able to apply to jobs knowing that the companies have already been vetted.",
        "-T.G.H.Herath-<br>Manager<br>Vijaya grapics Pvt Ltd"
    ],

    ["DreamPath.lk is the best! You make a difference in the quality of a person's life. Thank you, keep up the amazing work!",
        "-W.W.Rodrigu-<br>Teacher<br>Sussex Collage"
    ],

    ["It's well worth the small fee for the quality of jobs listed. I never thought I would, but I found the perfect job within a month with DreamPath.lk!",
        "-T.M.Thanura Ruvin-<br>Cloud Delivery Engineer<br>Indu lanka Solutions Enterprise"
    ],

    ["KEEP UP THE GOOD WORK!!! In two weeks, I found a job... I could not believe it, but it happened. The pay, job, benefits, and working at home are all awesome!",
        "-M.S. Ishara Lakshani-<br>Business Analysts<br>Heyleys (pvt) Ltd"
    ],

    ["Thank you for the opportunity to find a great job! My local job market is very limited, and I found a great job I enjoy doing.",
        "-W.D.K. Kavindra Perera-<br>Site Engineer<br>RJ Enterprises (pvt)Ltd"
    ]
];

let feedbackIndex = 0;

document.querySelector("#feedback-left-move").addEventListener('click', function () {
    feedbackMoves(-110, 110, 1);
}) /// benifit text previous button

document.querySelector("#feedback-right-move").addEventListener('click', function () {
    feedbackMoves(110, -110, -1);
}) /// benifit text nexr button

function feedbackMoves(val_1, val_2, btn) {
    let arr = document.querySelectorAll("#feedback-content");

    if (btn === 1 && (feedbackIndex + btn) === 5) {
        feedbackIndex = 0;
    } else if (btn === -1 && (feedbackIndex + btn) === -1) {
        feedbackIndex = 2;
    } else {
        feedbackIndex += btn;
    }

    for (let line of arr) {
        line.style.transform = "translateX(" + val_1 + "%)";
    }

    setTimeout(function () {
        let tmp = 0;
        for (let line of arr) {
            line.setAttribute('style', "transition: 1ms; -o-transition: 1ms; -moz-transition: 1ms; -webkit-transition: 1ms;");
            line.style.transform = "translateX(" + val_2 + "%)";
            line.innerHTML = feedbcakArr[feedbackIndex][0];
            line.parentElement.nextElementSibling.innerHTML = feedbcakArr[feedbackIndex][1];
            tmp++;
        }
    }, 500);

    setTimeout(function () {
        for (let line of arr) {
            line.setAttribute('style', "transition: 500ms; -o-transition: 500ms; -moz-transition: 500ms; -webkit-transition: 500ms;");
            line.style.transform = "translateX(0)";
        }
    }, 600);
} /// feedback moves function