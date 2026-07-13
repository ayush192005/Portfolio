var tl = document.querySelector(".navigation-section");

var tl = gsap.timeline()

tl.from(".navigation-section",{
    y:-40,
    opacity:0,var tl = document.querySelector(".navigation-section");

var tl = gsap.timeline()

tl.from(".navigation-section", {
    y: -40,
    opacity: 0,
    duration: 1.3,
})

//! ------ Navbar Animations  -------
var menu = document.querySelector(".nav i");
var close = document.querySelector(".full i");

var nav = gsap.timeline()

nav.to(".full", {
    right: 0,
    duration: 0.5,
})

nav.from(".full li", {
    x: 150,
    duration: 1,
    stagger: 0.2,
    opacity: 0,
})

nav.from(".full i", {
    opacity: 0,
})

nav.pause()

menu.addEventListener("click", function () {
    nav.play()
})

close.addEventListener("click", function () {
    nav.reverse()
})

//! ------ header Animations --------
function breakText() {

    var head1 = document.querySelectorAll(".hi .name");
    headings.forEach((heading) => {
        var text = head1.textContent;
        var letters = text.split("");
        var half = letters.length / 2;
        var clutter = "";

        letters.forEach(function (elem, idx) {
            if (idx < half) {
                clutter += `<span class="a">${elem}</span>`;
            } else {
                clutter += `<span class="b">${elem}</span>`;
            }
        });
        head1.innerHTML = clutter;
    });
}

breakText();

gsap.from(".a", {
    y: 100,
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.15,
})
gsap.from(".b", {
    y: 100,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.15,
})

    duration:1.3,
})

// var menu = document.querySelector(".openIcon");
// var close = document.querySelector(".close");

// var nav = gsap.timeline();

// nav.to(".mobileNavbar",{
//     right:0,
//     duration:0.5,
// })

// nav.from(".mobileNavbar li",{
//     x:150,
//     duration:0.7,
//     delay:0.2,
//     opacity:0,
//     stagger:0.15,
// })

// nav.from(".close", {
//     opacity:0,
// })

// nav.pause()

// menu.addEventListener("click", function(){
//     nav.play()
// })

// close.addEventListener("click", function(){
//     nav.reverse()
// })








var menu = document.querySelector(".nav i");
var close = document.querySelector(".full i");

var chac = gsap.timeline()

chac.to(".full",{
    right:0,
    duration:0.7,
})

chac.from(".full h4",{
   x:150,
   duration:1,
   stagger:0.1,
   opacity:0,
})

chac.from(".full i",{
    opacity:0,
})

chac.pause()

menu.addEventListener("click", function(){
    chac.play()
})

close.addEventListener("click",function(){
    chac.reverse()
})
