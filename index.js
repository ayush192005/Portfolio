const links = document.querySelectorAll(".navLinks a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("showMenu");

        menuIcon.classList.remove("fa-solid","fa-xmark");
        menuIcon.classList.add("ri-menu-line");

    });

});
document.addEventListener("DOMContentLoaded", () => {

    const accordions = document.querySelectorAll(".banners");

    accordions.forEach((accordion) => {

        const header = accordion.querySelector(".card-header");
        const content = accordion.querySelector(".progress-section");
        const icon = accordion.querySelector(".down-icon");

        header.addEventListener("click", () => {

            // Close other accordions
            accordions.forEach((item) => {

                if (item !== accordion) {
                    item.querySelector(".progress-section").classList.remove("active");
                    item.querySelector(".down-icon").classList.remove("rotate");
                }

            });

            // Toggle current accordion
            content.classList.toggle("active");
            icon.classList.toggle("rotate");

        });

    });

});
