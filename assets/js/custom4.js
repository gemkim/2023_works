


//스크롤 애니메이션
$(document).ready(function () {
    /*인트로 텍스트 효과+fixed 인트로*/
    $("#section1").removeClass("show");

    function main() {
        $("#section1").addClass("show");
    }
    setTimeout(main, 0);
});

//스크롤 타입셋
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    if (wScroll >= $("#section2").offset().top - $(window).height() / 2) {
        $("#section2").addClass("show");
    }
    if (wScroll >= $("#section3").offset().top - $(window).height() / 2) {
        $("#section3").addClass("show");
    }
    if (wScroll >= $("#section9").offset().top - $(window).height() / 2) {
        $("#section9").addClass("show");
    }
    if (wScroll >= $("#section10").offset().top - $(window).height() / 2) {
        $("#section10").addClass("show");
    }
    if (wScroll >= $("#section11").offset().top - $(window).height() / 2) {
        $("#section11").addClass("show");
    }
    if (wScroll >= $(".site01").offset().top - $(window).height() / 2) {
        $(".site01").addClass("show");
    }
    if (wScroll >= $(".site02").offset().top - $(window).height() / 2) {
        $(".site02").addClass("show");
    }
    if (wScroll >= $(".site03").offset().top - $(window).height() / 2) {
        $(".site03").addClass("show");
    }
    if (wScroll >= $(".site04").offset().top - $(window).height() / 2) {
        $(".site04").addClass("show");
    }
    if (wScroll >= $(".per-ani1").offset().top - $(window).height() / 3) {
        $(".per-ani1").addClass("show");
    }
    if (wScroll >= $(".per-ani2").offset().top - $(window).height() / 3) {
        $(".per-ani2").addClass("show");
    }
    if (wScroll >= $(".per-ani3").offset().top - $(window).height() / 3) {
        $(".per-ani3").addClass("show");
    }
    if (wScroll >= $(".per-ani4").offset().top - $(window).height() / 3) {
        $(".per-ani4").addClass("show");
    }
    if (wScroll >= $(".per-ani5").offset().top - $(window).height() / 3) {
        $(".per-ani5").addClass("show");
    }
    if (wScroll >= $("#section6").offset().top - $(window).height() / 2) {
        $("#section6").addClass("show");
    }
    if (wScroll >= $(".foot_content").offset().top - $(window).height() / 2) {
        $(".foot_content").addClass("show");
    }

    if (wScroll >= $(".foot_info").offset().top - $(window).height() / 2) {
        $(".foot_info").addClass("show");
    }
    if (wScroll >= $("#map").offset().top - $(window).height() / 2) {
        $("#map").addClass("show");
    }
    if (wScroll >= $(".foot_bottom").offset().top - $(window).height() / 2) {
        $(".foot_bottom").addClass("show");
    }
    if (wScroll >= $(".mailForm").offset().top - $(window).height() / 2) {
        $(".mailForm").addClass("show");
    }
});


// 맵 소스
var marker;

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 37.498045,
            lng: 127.028742
        },
        zoom: 17
    });

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {
            lat: 37.498045,
            lng: 127.028742
        }
    });
    marker.addListener('click', toggleBounce);
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}


//프로젝트 text-hover 효과
$(".work_tit_list ul a").hover(function () {
    var num = $(".work_tit_pic ul a").index($(this));
    $(".work_view_list img").removeClass("show"),
        $(".work_view .work_view_list img").eq(num).addClass("show").siblings().removeClass("show");
});
$(".work_tit_pic ul a").click(function () {
    event.preventDefault();
});


//스킬 카운트
$(function () {
    //imagesProgress();
    counter();
});

function counter() {
    if ($('.count').size()) {
        $c = $('.count');

        $c.each(function () {
            var $this = $(this);
            $this.data('target', parseInt($this.html()));
            $this.data('counted', false);
            $this.html('0');
        });

        $(window).on('scroll', function () {
            var speed = 3000;

            $c.each(function (i) {
                var $t = $(this);
                if (!$t.data('counted') && $(window).scrollTop() + $(window).height() >= $t.offset().top) {

                    $t.data('counted', true);

                    $t.animate({
                        dummy: 1
                    }, {
                        duration: speed,
                        step: function (now) {
                            var $this = $(this);
                            var val = Math.round($this.data('target') * now);
                            $this.html(val);
                        },
                        easing: 'easeInOutQuart'
                    });
                }
            });
        }).triggerHandler('scroll');
    }
}


//애니메이션 슬라이드 효과
var mySwiper = new Swiper('.swiper-container2', {
    slidesPerView: 4,
    spaceBetween: 24,


    breakpoints: {
        600: {
            slidesPerView: 1.4,
            spaceBetween: 24
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 24
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 24
        }
    }
});


//버튼 마우스효과
var docStyle = document.documentElement.style;

// setting CSS variables inside this JS where they 
// can be declaratively used inside the CSS file.
document.addEventListener('mousemove', function (e) {
    docStyle.setProperty('--mouse-x', e.clientX);
    docStyle.setProperty('--mouse-y', e.clientY);
});




//스와이퍼 효과
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    autoplay: {
        delay: 5000,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
