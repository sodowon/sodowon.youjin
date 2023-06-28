$(function(){
    setInterval(function(){
      $(".visual_ul").stop().animate({marginLeft:"-100%"},2000,function(){
          $(".visual_ul").css({marginLeft:"0px"});
          $(".visual_ul>li").first().appendTo(".visual_ul");
      });
    },6000)  

  })