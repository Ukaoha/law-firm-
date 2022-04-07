"use strict";
//  navigate media quereies 
const hamburger = document.querySelector('.hamburger');
const navItem = document.querySelector('.nav__links')

hamburger.addEventListener('click', mobileMenu );

function mobileMenu(){
  hamburger.classList.toggle('active');
  navItem.classList.toggle('active');
}

const navLink = document.querySelectorAll('.nav__link');
navLink.forEach(n=> n.addEventListener('click', closeMenu));

function closeMenu() {
  hamburger.classList.remove('active');
  navItem.classList.remove('active')
}

// login page icon
function eyeIcon() {
  let eyePassword = document.getElementById('login_password');
  let hidePassword1 = document.getElementById('hide1');
  let hidePassword2 = document.getElementById('hide2');
  
  if(eyePassword.type === 'password'){
    eyePassword.type = "text";
    hidePassword1.style.display = 'inline-block';
    hidePassword2.style.display = 'none';
  } else {
    eyePassword.type = "password";
    hidePassword1.style.display = 'none';
    hidePassword2.style.display = 'inline-block';

  }
}
