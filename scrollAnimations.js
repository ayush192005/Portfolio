         var tl = document.querySelector(".navigation-section");

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
function breakTheText() {
    var h1 = document.querySelector("h1 .hi");
    var h1Text = h1.textContent;
    var splitteText = h1Text.split("");
    var clutter = "";
    splitteText.forEach(function () {
        clutter += `<span>${elem}</span>`
    })

    h1.innerHTML = clutter;
}

breakTheText();

gsap.from(" hkjkfjk           ", {
    y: 70,
    duraton: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.15,
})

         
