$(function(){


    // 모바일 gnb
    $('.btnToggle').click(function(){

        $('.m_gnb').stop().animate({'right':0},300);
        $('.dimBg').stop().fadeIn(300);


    });//btnToggle click

    $('.m_Xbtn').click(function(){
        $('.m_gnb').stop().animate({'right':'-280px'},250);
        $('.dimBg').stop().fadeOut(250);

    });//m_Xbtn click

    $('.gnbDiv .one').click(function(){
        $(this).stop().next('.two').slideToggle(300);
        // $('.gnbDiv .one').not(this).next('.two').slideUp(300);
    });

    $('.gnbDiv .one').eq(1).trigger('click');




    //section03 tab
    $('.btn li').click(function(){
        $('.btn li').removeClass('on');
        $(this).addClass('on');

        var i = $(this).index();

        $('.tabs>.cont_box').removeClass('on');
        $('.tabs>.cont_box').eq(i).addClass('on');
        // $("#"+$(this).data('id')).addClass('on');
    })
});//doc