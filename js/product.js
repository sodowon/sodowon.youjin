/*슬라이드*/
$(function(){
    $(window).resize(function () {
        var width = $(window).width();
        let total = $(".con1_ul_wrap>li").length;
        let i = 0;
        if (width >= 1520) {       
            start();
            
            function start() {
                time = setInterval(function(){
                    $(".con1_ul_wrap").stop().animate({marginLeft:"-100%"},3000,function(){
                        $(".con1_ul_wrap").css({marginLeft:"0px"});
                        $(".con1_ul_wrap>li").first().appendTo(".con1_ul_wrap");
                    });
                },6000);
            }
            
            $(".next").on("click", function () {
                clearInterval(time);
                if (i == total - 1) {       
                    $(".con1_ul_wrap").stop().animate({marginLeft:"-100%"});
                i = 0;
                } else {
                    $(".con1_ul_wrap").stop().css({marginLeft:"0px"});
                    $(".con1_ul_wrap>li").first().appendTo(".con1_ul_wrap");
                i++;
                }
                start();
            });
            
            $(".prev").on("click", function () {
                clearInterval(time);
                if (i == 0) {
                    $(".con1_ul_wrap").stop().css({marginLeft:"0px"});
                    $(".con1_ul_wrap>li").first().appendTo(".con1_ul_wrap");
                i = total - 1;
                } else {
                    $(".con1_ul_wrap").stop().animate({marginRight:"-100%"});
                i--;
                }
                start();
            });
        } else {
            start();
            
            function start() {
                time = setInterval(function(){
                    $(".con1_ul_wrap").stop().animate({marginLeft:"-100%"},3000,function(){
                        $(".con1_ul_wrap").css({marginLeft:"0px"});
                        $(".con1_ul_wrap>li").first().appendTo(".con1_ul_wrap");
                    });
                },12000);
            }
            
            $(".next").on("click", function () {
                clearInterval(time);
                if (i == total - 1) {       
                    $(".con1_ul_wrap").stop().animate({marginLeft:"-100%"});
                i = 0;
                } else {
                    $(".con1_ul_wrap").stop().css({marginLeft:"0px"});
                    $(".con1_ul_wrap>li").first().appendTo(".con1_ul_wrap");
                i++;
                }
                start();
            });
            
            $(".prev").on("click", function () {
                clearInterval(time);
                if (i == 0) {
                    $(".con1_ul_wrap").stop().css({marginLeft:"0px"});
                    $(".con1_ul_wrap>li").first().appendTo(".con1_ul_wrap");
                i = total - 1;
                } else {
                    $(".con1_ul_wrap").stop().animate({marginRight:"-100%"});
                i--;
                }
                start();
            });
        }
    });
    $(window).trigger("resize");
});            
/*슬라이드 다음, 이전 버튼 */
$(function(){
    $(".con1_wrap").on("mouseenter",function(){
        $(".prev").stop().animate({opacity:"1", left:"10px"});
        $(".next").stop().animate({opacity:"1", right:"10px"});
      });
    
      $(".con1_wrap").on("mouseleave",function(){
        $(".prev").stop().animate({opacity:"0", left:"-50px"});
        $(".next").stop().animate({opacity:"0", right:"-50px"});
      });
});
/*con2 color*/
$(function(){ 

    $(".color>li").click(function(){
      j = $(this).index();
      $(".con2_l_img>li").fadeOut();
      $(".con2_l_img>li").eq(j).fadeIn();
      $(".color li").removeClass("color_on");
      $(".color li").eq(j).addClass("color_on");
      $(".con2_r>li").fadeOut();
      $(".con2_r>li").eq(j).fadeIn();
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