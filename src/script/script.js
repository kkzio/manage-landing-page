// splide carousel
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    arrows: false,
    pagination: false,
    type: 'loop',
    focus: 'center',
    perPage: 3,
    breakpoints: {
      1024: {
        perPage: 2,
        pagination: true,
      },
      600: {
        perPage: 1,
        pagination: true,
      },
    },
    autoplay: true,
    interval: 5000,
  });

  splide.on( 'pagination:mounted', function (data) {
    // add class to the UL element
    data.list.classList.add( 'splide-pagnation');
  });

  splide.mount();
});

// button menu
const openMenu = document.querySelector('.open-menu');
const mobileMenu = document.querySelector('#mobile-menu .navigations');

openMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  openMenu.classList.toggle('active');
})
