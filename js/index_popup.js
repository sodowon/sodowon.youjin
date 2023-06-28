$(function(){ 

  $(".con2>div").click(function(){
    i = $(this).index()
    $(".con2_modal>div").eq(i).stop().fadeIn();
    $('body').css("overflow", "hidden");
  });
  
  $(".close").click(function(){
    $(".modal").stop().fadeOut();
    $('body').css("overflow", "scroll");
    $('body').css("overflowX", "hidden");
  });
  
  $(".con2_modal>.modal:first-child .color>li").click(function(){
    j = $(this).index();
    $(".con2_modal>.modal:first-child .con2_l_img>img").fadeOut();
    $(".con2_modal>.modal:first-child .con2_l_img>img").eq(j).fadeIn();
    $(".con2_modal>.modal:first-child .color li").removeClass("color_on");
    $(".con2_modal>.modal:first-child .color li").eq(j).addClass("color_on");
    $(".con2_modal>.modal:first-child .con2_r>img").fadeOut();
    $(".con2_modal>.modal:first-child .con2_r>img").eq(j).fadeIn();
  }); 

  $(".more").mouseover(function(){
    $(".more").css("background-color","#333");
    $(".more>a").css("color","#fff");
  });
  $(".more").mouseout(function(){
    $(".more").css("background-color","#fff");
    $(".more>a").css("color","#333");
  });

});

