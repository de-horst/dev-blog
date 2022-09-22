'use strict';

/* ---------- NAVBAR VARIABLES ---------- */
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');

/* ---------- NAV TOGGLE FUNCTION ---------- */
const navToggleFunc = function () {
    nav.classList.toggle('active');
}

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);

/* ---------- THEME TOGGLE VARIABLES ---------- */
const themeBtn = document.querySelectorAll('.theme-btn');


for (let i = 0; i < themeBtn.length; i++) {

    themeBtn[i].addEventListener('click', function () {

        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');

        for (let i = 0; i < themeBtn.length; i++) {

            themeBtn[i].classList.toggle('light');
            themeBtn[i].classList.toggle('dark');

        }

    })

}

/* ---------- A ---------- */