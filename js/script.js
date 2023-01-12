const swiper = new Swiper('.mySwiper', {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: '.slide-next',
    prevEl: '.slide-prev',
  },
});
