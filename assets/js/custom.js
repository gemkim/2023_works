
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

function setCount() {
	const counters = document.querySelectorAll('.skill .count');
	const speed = 200;

	counters.forEach( counter => {
		window.addEventListener('scroll', () => {
			let isShow = counter.parentNode.classList.contains('show')
			if( !isShow ) {
				counter.innerText = 0
				return
			} else {
			setTimeout(() => {
				const animate = () => {
					const value = + counter.getAttribute('data-counter');
					const data = + counter.innerText;
				
					const time = value / speed;
					if(data < value) {
						counter.innerText = Math.ceil(data + time)
						setTimeout(animate, 50);
					} else {
						counter.innerText = value;
					}
					
				}
				animate();
			}, 1000)
			}
		})
	});



}

const swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 10,
	pagination: {
		el: ".swiper-pagination",
		type: "fraction", // bullets, progressbar, custom, Scrollbar
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		1024: {
			slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
			pagination: {
				el: ".swiper-pagination",
				type: "bullets", 
			},
		},
	},
});

const swiper2 = new Swiper(".banners", {
					
	slidesPerView: 1,
	spaceBetween: 10,
	speed : 4000,
	loop : true,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	pagination: {
		// el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		769: {
			slidesPerView: 3,  //브라우저가 1024보다 클 때
			spaceBetween: 30,
		},
	},
});

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

// 메일보내기 JS 
const form = document.querySelector('#form')

form.addEventListener('submit', function(event) {
	event.preventDefault();
	emailjs.sendForm('dev-mjkim', 'template_npdez1j', form, "6HCLOnDPBEHZfAOaZ")
		.then((res) => {
			alert('메일이 전달되었습니다 😍');
		}, (err) => {
			alert(JSON.stringify(err));
		});
});

(() => {
	setCount();
	setTimeout(() => {
		const body = document.querySelector('body')
		body.classList.add('active')
	}, 2000)

	// intro 효과 
	const main = document.querySelector('#main')
	main.classList.remove('show')

	const allLinks = document.querySelectorAll('a')
	allLinks.forEach( aLink => {
		console.log(aLink);
		aLink.addEventListener('click', e => {
			e.target.preventDefault()
		})
	});
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
			}, 2000)
		}
	}
}

const reg_name = /^[가-힣a-zA-Z]+$/; // 한글 + 영문만


function scrollAnimation(params) {
	const targetName = document.querySelector(params)
	let observer = new IntersectionObserver((target) => {
		if(target[0].isIntersecting){
			target[0].target.classList.add('show')
		} else{
			target[0].target.classList.remove('show')
		}
	
	})
	observer.observe(targetName)	
}

scrollAnimation('.about-intro')
scrollAnimation('.about-signature')
scrollAnimation('.learn')
scrollAnimation('.create')
scrollAnimation('.think')
scrollAnimation('.title-box')
scrollAnimation('.work-list.li1 .work-left')
scrollAnimation('.work-list.li2 .work-left')
scrollAnimation('.work-list.li3 .work-left')
scrollAnimation('.work-list.li4 .work-left')
scrollAnimation('.work-list.li1 .work-right')
scrollAnimation('.work-list.li2 .work-right')
scrollAnimation('.work-list.li3 .work-right')
scrollAnimation('.work-list.li4 .work-right')
scrollAnimation('.skill-01')
scrollAnimation('.skill-02')
scrollAnimation('.skill-03')
scrollAnimation('.skill-04')
scrollAnimation('.skill-05')
scrollAnimation('.skill-06')
scrollAnimation('.skill-07')
scrollAnimation('#contact')


// //프로젝트 text-hover 효과
// $(".work_tit_list ul li").hover(function () {
//     var num = $(".work_tit_list ul li").index($(this));
//     $(".work_view ul li img").removeClass("show"),
//         $(".work_view ul li img").eq(num).addClass("show").siblings().removeClass("show");
// });
// $(".work_text ul").click(function () {
//     event.preventDefault();
// });