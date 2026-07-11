var tl = document.querySelector(".navigation-section");

var tl = gsap.timeline()

tl.from(".navigation-section",{
    y:-40,
    opacity:0,
    duration:1.3,
})

var menu = document.querySelector(".openIcon");
var close = document.querySelector(".close");

var nav = gsap.timeline();

nav.to(".mobileNavbar",{
    left:90,
    duration:0.5,
})

nav.from(".mobileNavbar li",{
    x:150,
    duration:0.7,
    delay:0.2,
    opacity:0,
    stagger:0.15,
})

nav.from(".close", {
    opacity:0,
})

nav.pause()

menu.addEventListener("click", function(){
    nav.play()
})

close.addEventListener("click", function(){
    nav.reverse()
})
