$(function(){ 

  $(".con2>div").click(function(){
    i = $(this).index()
    $(".con2_modal>div").eq(i).stop().fadeIn();
    $('body').css("overflow", "hidden");
  });
  
  $(".modal_content").click(function(){
    $(".modal").stop().fadeOut();
    $('body').css("overflow", "scroll");
    $('body').css("overflowX", "hidden");
  });
  
  $(".modal_text>a").mouseover(function(){
    $(".modal_text>a").css({background:"#333",color:"#fff"});
  });
  $(".modal_text>a").mouseout(function(){
    $(".modal_text>a").css({background:"#fff",color:"#333"});
  });

});
