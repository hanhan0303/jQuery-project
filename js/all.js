$('document').ready(function () {
  //下拉選單效果
  $('.dropdown').click(function (event) {
    event.preventDefault();
    $('.dropdown').toggleClass('active');
    $('.dropdown-open').slideToggle();
  });

  //RWD菜單顯示
  $('.menu-open').click(function (event) {
    $('.menu').slideToggle();
  });

  $(window).on('resize', function (e) {
    if ($(this).width() > 414) {
      $('.menu').css('display', 'flex');
    } else {
      $('.menu').css('display', 'none');
    }
  });

  //滑到下面再顯示按鈕

  function showBtnCondition() {
    if ($(this).scrollTop() > 300) {
      $('.top-btn').fadeIn();
    } else {
      $('.top-btn').fadeOut();
    }
  }
  $(window).scroll(showBtnCondition);
  //回到頂端按鈕-點擊之後用1秒的速度往上滑動
  $('.top-btn').click(function (event) {
    event.preventDefault();
    $('html,body').animate(
      {
        scrollTop: 0,
      },
      1000,
    );
  });
});
