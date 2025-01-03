const carousel = document.querySelector('.carousel--popular .carousel-items');
let isDown = false, startX, scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.classList.add('active');
});

carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('active');
});

carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('active');
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5;
    carousel.scrollLeft = scrollLeft - walk;
});


const carouselItems = document.querySelector('.carousel--auctions .carousel-items');
const backButton = document.querySelector('.carousel.back');
const nextButton = document.querySelector('.carousel.next');
let scrollAmount = 0;

nextButton.addEventListener('click', () => {
    if (scrollAmount < carouselItems.scrollWidth - carouselItems.clientWidth) {
        scrollAmount += carouselItems.clientWidth;
        carouselItems.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
});

backButton.addEventListener('click', () => {
    if (scrollAmount > 0) {
        scrollAmount -= carouselItems.clientWidth;
        carouselItems.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const menu = document.getElementById('menu');
    const button = document.querySelector('.button--uniq');
  
    burgerMenu.addEventListener('click', function() {
      menu.classList.toggle('menu--active');
      button.classList.toggle('menu--active');
    });
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    const socialLogos = document.querySelectorAll('.social__logo img');

    socialLogos.forEach(logo => {
        const originalSrc = logo.src;
        const hoverSrc = originalSrc.replace('.png', '_hover.png');

        logo.addEventListener('mouseenter', function() {
            logo.src = hoverSrc;
        });

        logo.addEventListener('mouseleave', function() {
            logo.src = originalSrc;
        });
    });
});
