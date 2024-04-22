$(function() {
    
    //if ($(window).width() <= 768 || $(window).resize().width() <= 768) {

        //const $originalHeight = $('aside').height() + $('main').height() + $('footer').height()

/*         $('div.header div.gnb_area').css({
            height: $originalHeight
        })  */

        let $bg = $('div.gnb_bg')

        $('div.mobile').click(function() {
            $(this).toggleClass('on off');
            if ($bg.hasClass('open')) {
                $bg.removeClass('open').animate({
                    left: '-100%'
                });
                $('div.gnb_area').animate({
                    left: '-100%'
                });
                $('div.bgbg').fadeOut()
            } else {
                $bg.addClass('open').animate({
                left: 0
                });
                $('div.gnb_area').animate({
                    left: 0
                });
                $('div.bgbg').fadeIn()
                }
        })
        
/* 
        $(document).click(function(e) {
            if ($bg.hasClass('open') && $(e.target).parents('header').length == 0) {
                    $bg.removeClass('open').animate({
                        left: '-100%'
                    });
                    $('div.gnb_area').animate({
                        left: '-100%'
                    });
                    $('div.bgbg').fadeOut()
                    $('div.mobile').removeClass('off').addClass('on');
            }
        }) */

        $('div.bgbg').click(function() {
            $bg.removeClass('open').animate({
                left: '-100%'
            });
            $('div.gnb_area').animate({
                left: '-100%'
            });
            $('div.bgbg').fadeOut()
            $('div.mobile').removeClass('off').addClass('on');
        })

        let $depth = $('div.gnb_area ul')

        $depth.find('> li > div.open > span.pc_blind').click(function() {
            let $parentLi = $(this).closest('li')
            let $otherLis = $(this).closest('li').siblings('li')
            $otherLis.removeClass('on');
            $parentLi.toggleClass('on').find('> ul').slideDown();
            let $onLi = $depth.find('> li.on')
            let $noonLi = $onLi.siblings('li')
            if ($parentLi.hasClass('on')) {
                $(this).html('<i class="fa-solid fa-chevron-up"></i>')
            } else {
                $(this).html('<i class="fa-solid fa-chevron-down"></i>');
                $parentLi.find('> ul').slideUp();
            }
            $noonLi.find('> ul').slideUp();
            $noonLi.find('span.pc_blind').html('<i class="fa-solid fa-chevron-down"></i>');
        })

        
/* 
        $(document).on('click', function() {
            if ($('div.mobile').hasClass('off')) {
                $('footer').css({
                    display: 'none'
                })
                if ($('aside').length == 1) {
                    $('div.contents').css({
                        height: 'calc(100vh - 164px)',
                        overflow: 'hidden',
                        margin: 0
                    })
                } else {
                    $('div.contents').css({
                    height: 'calc(100vh - 60px)',
                    overflow: 'hidden',
                    margin: 0
                    })
                }
            } else if ($('div.mobile').hasClass('on')) {
                $('div.contents').css({
                    height: $originalHeight
                })
                $('footer').css({
                    display: 'block'
                })
            }
            

    }) */
//}
})
