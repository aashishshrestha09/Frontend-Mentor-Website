const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header')
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', () => {

    // Close Hamburger menu
    if(header.classList.contains('open')) {
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach((element) => {
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        })

    // Open Hamburger menu
    } else { 
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach((element) => {
            element.classList.remove('fade-out')
            element.classList.add('fade-in')
        })
    }
})