// console.log("this is my first project on Frontend mentor")
// const navbar = document.querySelector("nav");
// navbar.onclick
// let widthWindow = document.window.width
// console.log(widthWindow)
console.log(document)
if (document.body.clientWidth <= 375) {
    document.querySelector('nav').style.display = 'none'
} else if (document.body.clientWidth > 375){
    document.querySelector('nav').style.display = 'inherit'
}