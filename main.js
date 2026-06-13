const Slider = new Swiper('.swiper', {
    effect: 'coverflow',
    initialSlide: 2,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',   
    coverflowEffect: {
      rotate: 5,
      stretch: 0,
      depth: 150,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
   
  });