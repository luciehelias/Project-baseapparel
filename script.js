const errorElements = document.querySelectorAll(".error");
const inputEmail = document.getElementById("inputEmail");
const submitButton = document.querySelector(".submit-button");

const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submitButton.addEventListener('click', function(e){
    e.preventDefault()
    if (emailFormat.test(inputEmail.value)){
        alert('Email is valid. Form submitted successfully!');
    } 
    else{
       errorElements[0].style.display ='block'; 
       errorElements[1].style.display ='block'; 
       inputEmail.style.border = '2px solid red';
       inputEmail.style.opacity ='1';
       inputEmail.style.color ='black'
    }
});