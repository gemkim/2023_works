// Header Scrolls
let prevY = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', (e) => {
	let currentScrollY = e.currentTarget.pageYOffset; // 현재 스크롤 위치

	handleScrollHeader(currentScrollY) // scroll시, header 위치값


})


function handleScrollHeader( scrollY ){
	if(scrollY < prevY ){
		header.style.top = 0 + 'px';
		header.style.backgroundColor = '#ffffff40';
		if(scrollY <= header.clientHeight) header.style.backgroundColor = 'transparent';
	} else {
		header.style.top = -100 + 'px';
	}
	prevY = scrollY;
}

let observer = new IntersectionObserver((e) => {
	console.log(e);
	e.forEach( tag => {
		if( tag.isIntersecting ){
			tag.target.style.opacity = 1
		} else{
			tag.target.style.opacity = 0
		}
	});
})

const learn = document.querySelector('#learn')
observer.observe(learn);

// function addShowClassName(id ){
	
// 	const area = document.querySelector( '#' + id)
// 	console.log(area);
// 	area.addEventListener('scroll', () => {
// 		console.log('test');
// 		let currentScrollY = window.screenTop; // 현재 스크롤 위치
		
// 		console.log(currentScrollY);
// 	})
// 	if (scrollY >= area.offsetTop - window.innerHeight / 2) {
// 		area.classList.add('show')
// 	}
// }


//스크롤 타입셋
// $(window).scroll(function () {
// 	let wScroll = $(this).scrollTop();
// 	console.log(wScroll);

// 	if (wScroll >= $("#about").offset().top - $(window).height() / 2) {
// 			$("#about").addClass("show");
// 	}
// 	if (wScroll >= $("#learn").offset().top - $(window).height() / 2) {
// 			$("#learn").addClass("show");
// 	}
// 	if (wScroll >= $("#think").offset().top - $(window).height() / 2) {
// 			$("#think").addClass("show");
// 	}
// 	if (wScroll >= $("#create").offset().top - $(window).height() / 2) {
// 			$("#create").addClass("show");
// 	}
// 	if (wScroll >= $("#profile_txt").offset().top - $(window).height() / 2) {
// 			$("#profile_txt").addClass("show");
// 	}
// 	if (wScroll >= $(".work_tit_list").offset().top - $(window).height() / 2) {
// 			$(".work_tit_list").addClass("show");
// 	}
// 	if (wScroll >= $(".site01").offset().top - $(window).height() / 2) {
// 			$(".site01").addClass("show");
// 	}
// 	if (wScroll >= $(".site02").offset().top - $(window).height() / 2) {
// 			$(".site02").addClass("show");
// 	}
// 	if (wScroll >= $(".site03").offset().top - $(window).height() / 2) {
// 			$(".site03").addClass("show");
// 	}
// 	if (wScroll >= $(".site04").offset().top - $(window).height() / 2) {
// 			$(".site04").addClass("show");
// 	}
// 	if (wScroll >= $(".skill1").offset().top - $(window).height() / 2) {
// 			$(".skill1").addClass("show");
// 	}
// 	if (wScroll >= $(".skill2").offset().top - $(window).height() / 2) {
// 			$(".skill2").addClass("show");
// 	}
// 	if (wScroll >= $(".skill3").offset().top - $(window).height() / 2) {
// 			$(".skill3").addClass("show");
// 	}
// 	if (wScroll >= $(".skill4").offset().top - $(window).height() / 2) {
// 			$(".skill4").addClass("show");
// 	}
// 	if (wScroll >= $(".skill5").offset().top - $(window).height() / 2) {
// 			$(".skill5").addClass("show");
// 	}
// 	if (wScroll >= $(".skill6").offset().top - $(window).height() / 2) {
// 			$(".skill6").addClass("show");
// 	}
// 	if (wScroll >= $("#section5").offset().top - $(window).height() / 2) {
// 			$("#section5").addClass("show");
// 	}
// 	if (wScroll >= $(".profile1").offset().top - $(window).height() / 2) {
// 			$(".profile1").addClass("show");
// 	}
// 	if (wScroll >= $(".contact_info").offset().top - $(window).height() / 2) {
// 			$(".contact_info").addClass("show");
// 	}
// 	if (wScroll >= $("#map").offset().top - $(window).height() / 2) {
// 			$("#map").addClass("show");
// 	}
// 	if (wScroll >= $(".mailForm").offset().top - $(window).height() / 2) {
// 			$(".mailForm").addClass("show");
// 	}
// });



// Map
function myMap(){
	const mapOptions = { 
		center:new google.maps.LatLng(37.4969959, 127.0533122),
		zoom:13
	};
	const map = new google.maps.Map( 
		document.getElementById("googleMap"), mapOptions
	);
}

/*마우스 효과*/
let mouseX = 0;
let mouseY = 0;
let shapeX = 0;
let shapeY = 0;
let speed = .25;
const mouseShape = document.querySelector('.cursor');

FollowCursor();

function FollowCursor() {
  let delayX = mouseX - shapeX;	// X 거리차이
  let delayY = mouseY - shapeY;	// Y 거리차이
  shapeX = shapeX + (delayX * speed);
  shapeY = shapeY + (delayY * speed);
  
  mouseShape.style.left = shapeX + 'px';
  mouseShape.style.top = shapeY + 'px';
  
  requestAnimationFrame(FollowCursor);
}
const linkAll = document.querySelectorAll('a');
const btnAll = document.querySelectorAll('button');

TrensformCursorSize(linkAll)
TrensformCursorSize(btnAll)
function TrensformCursorSize(cursor){
	cursor.forEach(link => {
		link.addEventListener('mouseover', (e) => {
			mouseShape.style.width = 50 + 'px'
			mouseShape.style.height = 50 + 'px'
		})
		link.addEventListener('mouseout', (e) => {
			mouseShape.style.width = 200 + 'px'
			mouseShape.style.height = 200 + 'px'
		})
	});
}
window.addEventListener('mousemove', (e) => {
	mouseX = e.pageX;
  mouseY = e.pageY;
})

// main - my story 버튼 무빙
document.addEventListener('mousemove', function (e) {
	const docStyle = document.documentElement.style;
    docStyle.setProperty('--mouse-x', e.clientX);
    docStyle.setProperty('--mouse-y', e.clientY);
});



(() => {
	counter();
	imagesProgress();
})()

function counter() {
	const lists = document.querySelectorAll('.skills .count')
	lists.forEach( list => {
		let value = list.innerHTML
		countingType(value, list)
	});
}

function countingType(value, list){
	/* 각자리로 나누어 올리기 위해 쪼개려는 것 */
	let current = new Array(value.length).fill(0);
	let arrayNum = String(value).split('').reverse();

	/* 올라갈 때 걸리는 시간 균등하게 하기위해. 단, 최대 0.06초씩은 되도록 */
	const total = arrayNum.reduce((pre, cur)=>Number(pre)+Number(cur));
	const eachTime = Math.min(1000/total, 60);
	let time = 0
	for(let j = 0; j < arrayNum.length; j++){
		for(let i = 0; i <= arrayNum[j]; i++){
			setTimeout(()=>{
				current[ arrayNum.length - j - 1 ] = i;
				list.innerHTML = current.join('');
			}, eachTime * ( time + i ))
		}
		time += arrayNum[j] - 1;
	}
}


// function imagesProgress() {
//     var $container = $('#progress'),
//         $progressBar = $container.find('.progress-bar'),
//         $progressText = $container.find('.progress-text'),
//         imgLoad = imagesLoaded('body'),
//         imgTotal = imgLoad.images.length,
//         imgLoaded = 0,
//         current = 0,
//         progressTimer = setInterval(updateProgress, 1000 / 60);

//     imgLoad.on('progress', function () {
//         imgLoaded++;
//     });

//     function updateProgress() {
//         var target = (imgLoaded / imgTotal) * 100;

//         current += (target - current) * 0.1;
//         $progressText.text(Math.floor(current) + '%');

//         if (current >= 100) {
//             clearInterval(progressTimer);
//             $progressBar.add($progressText).delay(500)
//                 .animate({
//                     opacity: 0
//                 }, 100, function () {
//                     $container.animate({
//                         top: '-110%'
//                     }, 1000, 'easeInOutQuint');
//                 });
//             $('body').addClass('active');
//         }
//         if (current > 99.98) {
//             current = 100;
//         }
//     }
// };





//Dot 메뉴
// var dot = $("#dot > ul > li");
// var cont = $("#contents > section");

// dot.click(function (e) {
//     e.preventDefault();
//     var target = $(this);
//     var index = target.index();
//     //alert(index);
//     var section = cont.eq(index);
//     var offset = section.offset().top;
//     $("html,body").animate({
//         scrollTop: offset
//     }, 600, "easeInOutExpo");
// });

// $(window).scroll(function () {
//     var wScroll = $(this).scrollTop();
//     if (wScroll > 200) {
//         $(".overlay_nav").addClass("add");
//     } else if (wScroll == 0) {
//         $(".overlay_nav").removeClass("add");
//     }
//     if (wScroll > 200) {
//         $("#dot ul").addClass("add");
//     } else if (wScroll == 0) {
//         $("#dot ul").removeClass("add");
//     }
//     if (wScroll >= cont.eq(0).offset().top) {
//         dot.removeClass("current");
//         dot.eq(0).addClass("current");
//     }
//     if (wScroll >= cont.eq(1).offset().top) {
//         dot.removeClass("current");
//         dot.eq(1).addClass("current");
//     }
//     if (wScroll >= cont.eq(2).offset().top) {
//         dot.removeClass("current");
//         dot.eq(2).addClass("current");
//     }
//     if (wScroll >= cont.eq(3).offset().top) {
//         dot.removeClass("current");
//         dot.eq(3).addClass("current");
//     }
//     if (wScroll >= cont.eq(4).offset().top) {
//         dot.removeClass("current");
//         dot.eq(4).addClass("current");
//     }
//     if (wScroll >= cont.eq(5).offset().top) {
//         dot.removeClass("current");
//         dot.eq(5).addClass("current");
//     }
// });




//프로젝트 text-hover 효과
$(".work_tit_list ul li").hover(function () {
    var num = $(".work_tit_list ul li").index($(this));
    $(".work_view ul li img").removeClass("show"),
        $(".work_view ul li img").eq(num).addClass("show").siblings().removeClass("show");
});
$(".work_text ul").click(function () {
    event.preventDefault();
});

