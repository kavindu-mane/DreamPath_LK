/* solution by Thakshila Dulanjani @group 7 */

const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit-btn");
// email format validate
const mailformat =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; 


password.addEventListener('focus' , function(){
    document.getElementsByClassName('field-div').item(1).className = "field-div";
    emailCheck();
}); /// password focus event

email.addEventListener('focus' , function(){
    document.getElementsByClassName('field-div').item(0).className = "field-div";
}); /// email focus event

function submitFunc(){

    if(emailCheck() && passwordCheck()){
        document.getElementById("worker-form").reset();
        return true;
    }else{
        return false;
    }
} /// login click

let classError = "fa-solid fa-circle-exclamation color-red input-icon fa-sm";
let classSuccess = "fa-solid fa-circle-check color-green input-icon fa-sm position-absolute end-0 top-50 pe-1";

function emailCheck(){
    const emailVal = email.value.trim();
    if(emailVal === ""){
        document.getElementsByClassName('field-div').item(0).className = "field-div error position-relative";
        document.getElementsByClassName('input-icon').item(0).className = classError;
        document.getElementsByClassName('error-text').item(0).textContent = "This field cannot be blank"
        return false;
    }else if(emailVal.match(mailformat)){
        document.getElementsByClassName('field-div').item(0).className = "field-div success position-relative";
        document.getElementsByClassName('input-icon').item(0).className = classSuccess;
        return true;
    }else{
        document.getElementsByClassName('field-div').item(0).className = "field-div error position-relative";
        document.getElementsByClassName('input-icon').item(0).className = classError;
        document.getElementsByClassName('error-text').item(0).textContent = "Invalied email address"
        return false;
    }
}/// email check

function passwordCheck(){
    const passwordVal = password.value.trim();
    if(passwordVal === ""){
        document.getElementsByClassName('field-div').item(1).className = "field-div error position-relative";
        document.getElementsByClassName('error-text').item(1).textContent = "This field cannot be blank"
        document.getElementsByClassName('input-icon').item(1).className = classError;
        return false;
    }else if(passwordVal.length < 8){
        document.getElementsByClassName('field-div').item(1).className = "field-div error position-relative";
        document.getElementsByClassName('error-text').item(1).textContent = "Password is too short"
        document.getElementsByClassName('input-icon').item(1).className = classError;
        return false;
    }else{
        document.getElementsByClassName('field-div').item(1).className = "field-div success position-relative";
        document.getElementsByClassName('input-icon').item(1).className = classSuccess;
        return true;
    }
} /// password check

let attr_1 = document.querySelector('.passwordHide'); /// get password hide class
let attr_2 = document.querySelector('.passwordView'); /// get password view class

// attr_1.addEventListener('click' , function(){
    
//         attr_1.style.visibility = "hidden";
//         attr_1.nextElementSibling.style.visibility = "visible";
//         attr_1.previousElementSibling.previousElementSibling.previousElementSibling.type = "text";
// });/// password hide to view


// attr_2.addEventListener('click' , function(){
//         attr_2.style.visibility = "hidden";
//         attr_2.previousElementSibling.style.visibility = "visible";
//         attr_2.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.type = "password";
// }); /// password view to hide
