var a = 0;
function count() {
    a = a + 1;
    $('.about_company_dark_item h3').html(a);
    return a;
}
$(function(){    
    $(window).scroll(function() {
        if($(this).scrollTop() >= 1000) {
            $('.about_company_dark_item').addClass('anim');
            $('.about_company_dark_item h3 span').addClass('counter');
        }
        if($(this).scrollTop() >= 2500) {
            $('.competences_chart_item_value span').addClass('counter');
            $('.competences_chart_item_line span').addClass('start');            
        }
    });
});

$(document).ready(function() {
    $('a.left_menu__home').click(function(){        
    	$('html, body').animate({
    		scrollTop:$('#video').offset().top - $('#header').offset().top
    	}, 500);
    	return false;
    });
    $('a.left_menu__about').click(function(){        
    	$('html, body').animate({
    		scrollTop:$('#home_about').offset().top - 50
    	}, 500);
    	return false;
    });
    $('a.left_menu__key').click(function(){        
    	$('html, body').animate({
    		scrollTop:$('#home_activities').offset().top - 200
    	}, 500);
    	return false;
    });
    $('a.left_menu__portfolio').click(function(){        
    	$('html, body').animate({
    		scrollTop:$('#home_competences').offset().top - 100
    	}, 500);
    	return false;
    });
    $('a.left_menu__news').click(function(){        
    	$('html, body').animate({
    		scrollTop:$('#home_news').offset().top - 100
    	}, 500);
    	return false;
    });
    $(".video__btn i.fa").eq(1).hide();
    $('.video__btn').click(function () {
        var mediaVideo = $("#video video").get(0);
        if (mediaVideo.paused) {
            mediaVideo.play();
            $(".video__btn i.fa").eq(0).show();
            $(".video__btn i.fa").eq(1).hide();
            
        } else {
            mediaVideo.pause();
            $(".video__btn i.fa").eq(0).hide();
            $(".video__btn i.fa").eq(1).show();
       }
     });
     $('.logo_nav nav ul a').click(function () {
        $(this).parents('li').addClass('active');
        //console.log(1)
        return false;
    });
});

var slider = tns({
    container: '.news-slider',
  "items": 3,
  "slideBy": "page",
  "mouseDrag": true,
  "swipeAngle": false,
  "speed": 400,
  controls: false,
  navPosition: "bottom"
  });

  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.logo_nav nav ul.mobile_menu'),
    menuItem = document.querySelectorAll('.logo_nav nav li'), 
    closeBtn = document.querySelector('.logo_nav nav .close_menu'),   
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    closeBtn.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });    

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('.logo_nav nav li.active').classList.remove('active');
        })
    })
    
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})