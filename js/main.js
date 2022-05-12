let hamburger = document.querySelector('.hamburger')
let firstHero = document.querySelector('.hero')
let seeAll = document.querySelector('.top-part p')
let footer = document.querySelector('footer')
console.log(seeAll)


var currentState = 0
let mobileMenu = document.getElementById('mobile-menu')
hamburger.addEventListener('click', mobileNav = (e) => {
    mobileMenu.classList.toggle('display');
    currentState += 1
    
    if (currentState %2 == 1)  {
        hamburger.src = 'images/icon-close.svg';
    }
    else {
        hamburger.src = 'images/icon-hamburger.svg'
    }

    let firstInline = document.querySelector('.first-inline');
    firstInline.style.opacity = '0';
    setTimeout((e) => {
        // e.preventDefault()
        firstInline.style.opacity = '1';
    }, 1000);
} )

let currentWidth = document.addEventListener('change', () => console.log(document.body.clientWidth))

console.log(currentWidth)

let now = new Date()
console.log(now.getFullYear())