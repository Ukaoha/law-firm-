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

