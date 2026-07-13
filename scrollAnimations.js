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
    var headings = document.querySelectorAll(".hi, .name , h4");

    headings.forEach(function (h1) {
        var text = h1.textContent;
        var letters = text.split("");
        var half = Math.floor(letters.length / 2);
        var clutter = " ";

        letters.forEach(function (elem, idx) {
            if (idx < half) {
                clutter += `<span class="a">${elem}</span>`;
            } else {
                clutter += `<span class="b">${elem}</span>`;
            }
        });

        h1.innerHTML = clutter;
    });
}

breakTheText();

gsap.from(".hi .a", {
    y: 80,
    duraton: 1,
    delay: 1.5,
    opacity: 0,
    stagger: 0.15,
})

gsap.from(".hi .b", {
    y: 80,
    duraton: 1,
    delay: 1.5,
    opacity: 0,
    stagger: -0.15,
})

gsap.from(".name .a", {
    y: 50,
    duraton: 0.8,
    delay: 1,
    opacity: 0,
    stagger: 0.15,
    ease: "bounce.out",    
})

gsap.from(".name .b", {
    y: 50,
    duraton: 0.8,
    delay: 1,
    opacity: 0,
    stagger: 0.15,
    ease: "bounce.out",
})

gsap.from("h4 .a", {
    y: 80,
    duraton: 0.5,
    delay: 2,
    opacity: 0,
    stagger: 0.15,
})

gsap.from("h4 .b", {
    y: 80,
    duraton: 0.5,
    delay: 2,
    opacity: 0,
    stagger: 0.15,
    
})
