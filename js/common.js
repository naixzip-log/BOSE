//fullpage 실행제이쿼리
$(document).ready(function(){
    $('#fullpage > div').addClass('fp-auto-height-responsive');
    
    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        anchors: ['page01', 'page02', 'page03', 'page04', 'page05'],
	    menu: '#pagebtn',
        afterLoad: function(origin, destination, direction){
            $('.headphone > *, .soundbar > *, .speaker > *').addClass('active');
            
            if(destination.index == 4){ //마지막 페이지가 활성화된다면
                $('footer').addClass('active');
            }
            
            if(destination.index == 3){ //4번째 페이지가 활성화된다면
                $('.scroll').fadeIn(0);
            }
        },
        onLeave: function(origin, destination, direction){ //매페이지를 떠날때
            $('footer').removeClass('active');
            
            $('.headphone > *, .soundbar > *, .speaker > *').removeClass('active');
            
            //4번째 페이지를 떠날때, 아래방향으로 이동될때
            if(origin.index == 3 && direction =='down'){
                $('.scroll').fadeOut(0);
            }
        },
        afterRender : function(){//풀페이지 초기실행
            var divTop = $('.community.active').offset.top;

            var wTop = window.scrollTop;
            if(wTop == divTop){
                $('.scroll').fadeOut(300);
            }

        }
        
    });
});



//gnb
$(document).ready(function(){
    var main = '.gnb .mainnav';
    var sub = '.gnb .subnav';
    var speed = 'fast';
    
    $(main).mouseenter(function(){
        $(this).next().stop().slideDown(speed);
        $(this).parent().mouseleave(function(){
            $(sub).stop().slideUp(speed);
        });
    });
    
});



//panel
$(document).ready(function(){
    $('.panelicon a').click(function(e){
        e.preventDefault();
        
        $(this).toggleClass('active');
        $('.panel, .gnb').toggleClass('active');
        
        //패널을 닫을때 가로사이즈도 1024보다 작으면 서브네비를 slideup
        var w = $(window).width();
        var has = $(this).hasClass('active'); //active클래스를 갖고있으면 true반환, 갖고있지않으면 false반환
        
        if(w < 1024 && !has){
            $('.panel .subnav').slideUp(0);
        }
    });
    
    //패널 메뉴 오픈
    $(window).resize(function(){
        var w = $(window).width();
        
        //패널 메뉴 오픈은 태블릿부터 처리
        if(w < 1024){
            $('.panel .mainnav').off('click'); //resize시 click이벤트가 중복되서 제거하고 시작
            $('.panel .mainnav').click(function(e){
                e.preventDefault();
                
                $('.panel .subnav').stop().slideUp('fast');
                $(this).next().stop().slideToggle('fast');
            });
        }else{ //pc사이즈일때
            $('.panel .subnav').stop().slideDown(0);
        }
    });
    
    //초기실행
    $(window).trigger('resize'); //초기실행때도 resize이벤트 명령 발생
});


    
    
    
    
    
    
    








    