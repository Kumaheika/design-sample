$(document).ready(function () {
  //圖片 lazyload
  $("img.lazy").lazyload({
    effect: "fadeIn"
  });
  //獲取現在螢幕上方
  $(window).scroll(function () {
    var scrollVal = $(this).scrollTop();
    console.log(scrollVal);
  });

  var $tab01 = $('div.tab01').offset().top;
  $('#gotab01').click(function() {
    var $body = $('body');
    $body.animate({
      scrollTop: $('div.tab01').offset().top
    }, 500, "swing");
    return false;
  });

});
