$('document').ready(function(){
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    //自己改
    autoplay: {
      delay: 1500,
    },  
    effect: 'slide',
    speed: 400, 
});
});