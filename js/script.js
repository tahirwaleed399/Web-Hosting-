let width = window.innerWidth;
let slides = 3;
if (window.innerWidth <= 1167) {
    slides = 1;
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: slides,
    spaceBetween: 100,
    responsive: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});


let hamburger = document.querySelector(".hamburger");

let cross = document.querySelector("#cross");
let list = document.querySelector("ul");
let overlay = document.querySelector(".overlay");


hamburger.addEventListener("click", () => {
    list.classList.add("open");
    overlay.classList.add("active");

    // if (list.classList.contains("open")) {
    //     overlay.classList.add("active");

    //     list.classList.remove("open");
    // } else {

    // }
});
cross.addEventListener("click", () => {
    overlay.classList.remove("active");

    list.classList.remove("open");
});



$('#headerMain').ripples({
    resolution: 700,
    dropRadius: 30,
    perturbance: 0.4,
});