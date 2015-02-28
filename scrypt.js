var main = function () {
  $('.banner').unslider({
    dots: true
  });
  $('.portfolio li div').click(function () {
    var category = $(this).attr('class');
    $('.portfolio li div').removeClass('active');
    $(this).addClass("active");
    switch (category) {
    case "btn-all":
      $('.work>div').addClass('selected');
      break;
    case "btn-brand":
      $('.work div').removeClass('selected');
      $('.branding').addClass('selected');
      break;
    case "btn-web":
      $('.work div').removeClass('selected');
      $('.webDesign').addClass('selected');
      break;
    case "btn-ui":
      $('.work div').removeClass('selected');
      $('.mobileUi').addClass('selected');
      break;
    case "btn-pic":
      $('.work div').removeClass('selected');
      $('.illustrations').addClass('selected');
      break;
    }
  });


};
$(document).ready(main);