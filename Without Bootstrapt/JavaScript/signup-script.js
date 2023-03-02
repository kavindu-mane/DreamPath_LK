/* solution by Lakruwan Jayasthissa @group 7 */

localStorage.getItem("theme") == 'theme-dark' ? themeChange('theme-light') : themeChange('theme-dark');  /// loading theme set

window.onload = function () {
    if (window.location.href.includes("?value=employer")) {
        document.getElementById("employer").click();
    } else {
        document.getElementById("worker").click();
    }
} /// decide account type

document.querySelector('#theme').addEventListener('click', function () {
    themeChange(localStorage.getItem("theme"));
}); // theme change click event

function themeChange(theme) {

    if (theme === 'theme-dark') {
        document.documentElement.className = 'theme-light';
        localStorage.setItem('theme', 'theme-light');
        document.querySelector("#theme").src = '../Images/moon.svg';
        document.querySelector('#logo').src = "../Images/DreamPath.svg";

    } else {
        document.documentElement.className = 'theme-dark';
        localStorage.setItem('theme', 'theme-dark');
        document.querySelector("#theme").src = '../Images/sun.svg';
        document.querySelector('#logo').src = "../Images/DreamPath-white.svg";

    }
} /// theme change function

const name_ = document.getElementById("name");
const bday = document.getElementById("bday");

const companyName = document.getElementById("company-name");
const companyReg = document.getElementById("buss-reg");

const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConform = document.getElementById("passwordconform");
const submit = document.getElementById("submit-btn");

const employerBTN = document.getElementById("employer");
const workerBTN = document.getElementById("worker");

const nameDiv = document.getElementById("nameDiv");
const bdayDiv = document.getElementById("bdayDiv");
const companyDiv = document.getElementById("companyDiv");
const regDiv = document.getElementById("regDiv");
// email format validate
const mailformat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


for(let attr of document.querySelectorAll('.passwordHide')){
    attr.addEventListener('click' , function(){
        attr.style.visibility = "hidden";
        attr.nextElementSibling.style.visibility = "visible";
        attr.previousElementSibling.previousElementSibling.previousElementSibling.type = "text";
    });
} /// password hide to view

for(let attr of document.querySelectorAll('.passwordView')){
    attr.addEventListener('click' , function(){
        attr.style.visibility = "hidden";
        attr.previousElementSibling.style.visibility = "visible";
        attr.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.type = "password";
    });
} /// password view to hide

employerBTN.addEventListener('click', function () {
    nameDiv.style.display = "none";
    bdayDiv.style.display = "none";
    companyDiv.style.display = "block";
    regDiv.style.display = "block";
    document.querySelector("#heading span").textContent = "Employer";
    document.querySelector("#password-content").style.visibility = "hidden";

    for (let val of document.getElementsByClassName('field-div')) {
        val.className = "field-div";
    }
    document.getElementById("worker-form").reset();
}); /// employer selected

workerBTN.addEventListener('click', function () {
    nameDiv.style.display = "block";
    bdayDiv.style.display = "block";
    companyDiv.style.display = "none";
    regDiv.style.display = "none";
    document.querySelector("#heading span").textContent = "Worker";
    document.querySelector("#password-content").style.visibility = "hidden";

    for (let val of document.getElementsByClassName('field-div')) {
        val.className = "field-div";
    }
    document.getElementById("worker-form").reset();
}); /// worker selected

name_.addEventListener('focus', function () {
    document.getElementsByClassName('field-div').item(0).className = "field-div";
}); /// name focus event

bday.addEventListener('focus', function () {
    document.getElementsByClassName('field-div').item(1).className = "field-div";
    nameCheck();
}); /// bady focus event

window.addEventListener('load', function () {
    bdayCheck();
}); /// loading with bday function running

companyName.addEventListener('focus', function () {
    document.getElementsByClassName('field-div').item(2).className = "field-div";
}); /// company name focus event

companyReg.addEventListener('focus', function () {
    document.getElementsByClassName('field-div').item(3).className = "field-div";
    comNameCheck();
}); /// company registration focus event

email.addEventListener('focus', function () {
    document.getElementsByClassName('field-div').item(4).className = "field-div";
    comRegCheck();
    nameCheck();
    comNameCheck();
}); /// email focus event

password.addEventListener('focus', function () {
    document.getElementsByClassName('field-div').item(5).className = "field-div";
    document.querySelector("#password-content").style.visibility = "visible";
    comRegCheck();
    nameCheck();
    comNameCheck();
    emailCheck();
}); /// password focus event

password.addEventListener('input', function () {
    passwordCheck();

}); /// password focus event

passwordConform.addEventListener('focus', function () {
    document.getElementsByClassName('field-div').item(6).className = "field-div";
    comRegCheck();
    nameCheck();
    comNameCheck();
    emailCheck();
    passwordCheck();
}); /// password repeat focus event


document.getElementById("submit-btn").addEventListener('click', function () {

    if ((nameCheck() || (comNameCheck() && comRegCheck())) && emailCheck() && passwordCheck() && passwordConfirmCheck()) {
        document.getElementById("sign-up-container").setAttribute('style', "filter: blur(5px); -webkit-filter: blur(5px);");
        document.getElementById("create-success").setAttribute('style', "transform: scale(1);-o-transform: scale(1);" +
            "-ms-transform: scale(1); -moz-transform: scale(1);");

        setTimeout(function () {
            document.getElementById("worker-form").submit();
            document.getElementById("worker-form").reset();
        }, 3000);

    }
});/// register click

function nameCheck() {
    const nameVal = name_.value.trim();

    if (nameVal === "") {
        document.getElementsByClassName('field-div').item(0).className = "field-div error";
        document.getElementsByClassName('error-text').item(0).textContent = "This field cannot be blank"
        return false;
    } else {
        document.getElementsByClassName('field-div').item(0).className = "field-div correct";
        return true;
    }
} /// name check

function bdayCheck() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear() - 16;

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    let lastday = yyyy + '-' + mm + '-' + dd;
    bday.setAttribute("max", lastday);
    bday.setAttribute("value", lastday);
} ///chacek bday

function comNameCheck() {
    const comNameVal = companyName.value.trim();
    if (comNameVal === "") {
        document.getElementsByClassName('field-div').item(2).className = "field-div error";
        document.getElementsByClassName('error-text').item(2).textContent = "This field cannot be blank"
        return false;
    } else {
        document.getElementsByClassName('field-div').item(2).className = "field-div correct";
        return true;
    }
} /// company name check

function comRegCheck() {
    const comRegVal = companyReg.value.trim();
    if (comRegVal === "") {
        document.getElementsByClassName('field-div').item(3).className = "field-div error";
        document.getElementsByClassName('error-text').item(3).textContent = "This field cannot be blank"
        return false;
    } else {
        document.getElementsByClassName('field-div').item(3).className = "field-div correct";
        return true;
    }
} /// company reg number check

function emailCheck() {
    const emailVal = email.value.trim();
    if (emailVal === "") {
        document.getElementsByClassName('field-div').item(4).className = "field-div error";
        document.getElementsByClassName('error-text').item(4).textContent = "This field cannot be blank"
        return false;
    } else if (emailVal.match(mailformat)) {
        document.getElementsByClassName('field-div').item(4).className = "field-div correct";
        return true;
    } else {
        document.getElementsByClassName('field-div').item(4).className = "field-div error";
        document.getElementsByClassName('error-text').item(4).textContent = "Invalied email address"
        return false;
    }
}/// email check

function passwordCheck() {
    let passwordVal = password.value.trim();
    const upperArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerArr = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "1234567890";
    const spCharacters = "`~!@#$%^&*()_-+={}|\[]:;'<,>.?/";
    let successArr = [false, false, false, false, false];

    if (passwordVal === "") {
        document.getElementsByClassName('field-div').item(5).className = "field-div error";
        document.getElementsByClassName('error-text').item(5).textContent = "This field cannot be blank"
    } else if (passwordVal !== "") {

        for (let letter of passwordVal) {
            // console.log(letter);
            if (upperArr.includes(letter)) {
                document.getElementById("upp").innerHTML = "<span>&check;</span> one uppercase charactor";
                document.getElementById("upp").style.color = "#38cc87";
                successArr[0] = true;
            }

            if (lowerArr.includes(letter)) {
                document.getElementById("lower").innerHTML = "<span>&check;</span> one lowecase charactor";
                document.getElementById("lower").style.color = "#38cc87";
                successArr[1] = true;
            }

            if (numbers.includes(letter)) {
                document.getElementById("number").innerHTML = "<span>&check;</span> one number";
                document.getElementById("number").style.color = "#38cc87";
                successArr[2] = true;
            }

            if (spCharacters.includes(letter)) {
                document.getElementById("special").innerHTML = "<span>&check;</span> one special character";
                document.getElementById("special").style.color = "#38cc87";
                successArr[3] = true;
            }

            if (passwordVal.length < 8) {
                document.getElementsByClassName('field-div').item(5).className = "field-div error";
                document.getElementsByClassName('error-text').item(5).textContent = "Password is too short"
            } else {
                successArr[4] = true;
                document.getElementById("min").innerHTML = "<span>&check;</span> minimum 8 charactors";
                document.getElementById("min").style.color = "#38cc87";
            }

        }
    }

    if (!successArr[0] || passwordVal.length === 0) {
        document.getElementById("upp").innerHTML = "<span>&cross;</span> one uppercase charactor";
        document.getElementById("upp").style.color = "#ff3333";
    }

    if (!successArr[1] || passwordVal.length === 0) {
        document.getElementById("lower").innerHTML = "<span>&cross;</span> one lowecase charactor";
        document.getElementById("lower").style.color = "#ff3333";
    }

    if (!successArr[2] || passwordVal.length === 0) {
        document.getElementById("number").innerHTML = "<span>&cross;</span> one number";
        document.getElementById("number").style.color = "#ff3333";
    }

    if (!successArr[3] || passwordVal.length === 0) {
        document.getElementById("special").innerHTML = "<span>&cross;</span> one special character";
        document.getElementById("special").style.color = "#ff3333";
    }

    if (!successArr[4] || passwordVal.length === 0) {
        document.getElementById("min").innerHTML = "<span>&cross;</span> minimum 8 charactors";
        document.getElementById("min").style.color = "#ff3333";
    }

    if (successArr[0] && successArr[1] && successArr[2] && successArr[3] && successArr[4]) {
        document.getElementsByClassName('field-div').item(5).className = "field-div correct";
        return true;
    } else if (passwordVal.length > 0) {
        document.getElementsByClassName('field-div').item(5).className = "field-div error";
        document.getElementsByClassName('error-text').item(5).textContent = "Wrong character combination"
        return false;
    } else {
        return false;
    }


} /// password check

function passwordConfirmCheck() {
    const passwordVal = password.value.trim();
    const passwordConfirmVal = passwordConform.value.trim();

    if (passwordVal === passwordConfirmVal) {
        document.getElementsByClassName('field-div').item(6).className = "field-div correct";
        return true;
    } else {
        document.getElementsByClassName('field-div').item(5).className = "field-div error";
        document.getElementsByClassName('error-text').item(5).textContent = "Password isn't match"
        document.getElementsByClassName('field-div').item(6).className = "field-div error";
        document.getElementsByClassName('error-text').item(6).textContent = "Password isn't match"
        return false;
    }
}