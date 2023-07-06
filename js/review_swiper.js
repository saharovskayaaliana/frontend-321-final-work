const mySwiper = new Swiper(".swiper-container-dop", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".swiper-button-next-review",
        prevEl: ".swiper-button-prev"
    }
});