(function ($) {
	"use strict";


/*===========================================
	=            Windows Load          =
=============================================*/
$(window).on('load', function () {
    preloader();
    wowAnimation();
    aosAnimation();
});


/*===========================================
	=            Preloader          =
=============================================*/
function preloader() {
	$('#preloader').delay(0).fadeOut();
};


/*===========================================
	=    		Mobile Menu			      =
=============================================*/
//SubMenu Dropdown Toggle
if ($('.tgmenu__wrap li.menu-item-has-children ul').length) {
	$('.tgmenu__wrap .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="plus-line"></span></div>');
}

//Mobile Nav Hide Show
if ($('.tgmobile__menu').length) {

	var mobileMenuContent = $('.tgmenu__wrap .tgmenu__main-menu').html();
	$('.tgmobile__menu .tgmobile__menu-box .tgmobile__menu-outer').append(mobileMenuContent);

	//Dropdown Button
	$('.tgmobile__menu li.menu-item-has-children .dropdown-btn').on('click', function () {
		$(this).toggleClass('open');
		$(this).prev('ul').slideToggle(300);
	});
	//Menu Toggle Btn
	$('.mobile-nav-toggler').on('click', function () {
		$('body').addClass('mobile-menu-visible');
	});

	//Menu Toggle Btn
	$('.tgmobile__menu-backdrop, .tgmobile__menu .close-btn').on('click', function () {
		$('body').removeClass('mobile-menu-visible');
	});
};


/*===========================================
	=     Menu sticky & Scroll to top      =
=============================================*/
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("#sticky-header").removeClass("sticky-menu");
		$('.scroll-to-target').removeClass('open');
        $("#header-fixed-height").removeClass("active-height");

	} else {
		$("#sticky-header").addClass("sticky-menu");
		$('.scroll-to-target').addClass('open');
        $("#header-fixed-height").addClass("active-height");
	}
});


/*===========================================
	=           Scroll Up  	         =
=============================================*/
if ($('.scroll-to-target').length) {
  $(".scroll-to-target").on('click', function () {
    var target = $(this).attr('data-target');
    // animate
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 0);

  });
}


/*===========================================
	=          Data Background    =
=============================================*/
$("[data-background]").each(function () {
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
});

$("[data-bg-color]").each(function () {
	$(this).css("background-color", $(this).attr("data-bg-color"));
});


/*=============================================
	=            Header Search            =
=============================================*/
$(".search-open-btn").on("click", function () {
    $(".search__popup").addClass("search-opened");
    $(".search-popup-overlay").addClass("search-popup-overlay-open");
});
$(".search-close-btn").on("click", function () {
    $(".search__popup").removeClass("search-opened");
    $(".search-popup-overlay").removeClass("search-popup-overlay-open");
});

/*=============================================
=     Offcanvas Menu      =
=============================================*/
$(".menu-tigger").on("click", function () {
	$(".offCanvas__info, .offCanvas__overly").addClass("active");
	return false;
});
$(".menu-close, .offCanvas__overly").on("click", function () {
	$(".offCanvas__info, .offCanvas__overly").removeClass("active");
});

$(".demo-trigger").on("click", function () {
    $(".offCanvas__info1, .offCanvas__overly").addClass("active");
    return false;
});
$(".menu-close, .offCanvas__overly").on("click", function () {
    $(".offCanvas__info1, .offCanvas__overly").removeClass("active");
});


/*=============================================
	=        Slider Active		      =
=============================================*/
var sliderSwiper = new Swiper('.slider-active', {
    spaceBetween: 0,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 6000,
    },
});


/*=============================================
	=        Slider Active Two	      =
=============================================*/
var sliderSwiper = new Swiper('.slider-active-two', {
    spaceBetween: 0,
    effect: "fade",
    // loop: true,
    // autoplay: {
    //     delay: 6000,
    // },
    // Navigation arrows
    navigation: {
        nextEl: ".slider-button-next",
        prevEl: ".slider-button-prev",
    },
});

/*=============================================
	=        Slider Active Three		      =
=============================================*/
var sliderSwiper = new Swiper('.slider-active-three', {
    spaceBetween: 0,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 6000,
    },
});


/*=============================================
	=        Project Active		      =
=============================================*/
var projectSwiper = new Swiper('.project_active', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    // autoplay: {
    //     delay: 6000,
    // },
    breakpoints: {
        '1500': {
            slidesPerView: 3,
        },
        '1200': {
            slidesPerView: 3,
        },
        '992': {
            slidesPerView: 3,
        },
        '768': {
            slidesPerView: 2,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: ".project-button-next",
        prevEl: ".project-button-prev",
    },
});


/*=============================================
	=        Project Active Two	      =
=============================================*/
var projectTwoSwiper = new Swiper('.project__active-two', {
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 6000,
    },
    // Navigation arrows
    navigation: {
        nextEl: ".projectTwo-button-next",
        prevEl: ".projectTwo-button-prev",
    },
});

/*=============================================
	=        Brand Active		      =
=============================================*/
var brandSwiper = new Swiper('.brand-active', {
    // Optional parameters
    slidesPerView: 5,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        '1500': {
            slidesPerView: 5,
        },
        '1200': {
            slidesPerView: 5,
        },
        '992': {
            slidesPerView: 4,
        },
        '768': {
            slidesPerView: 3,
        },
        '576': {
            slidesPerView: 3,
        },
        '0': {
            slidesPerView: 2,
        },
    },
});


/*=============================================
	=          History active              =
=============================================*/
var swiper2 = new Swiper(".history__active", {
    spaceBetween: 24,
    loop: true,
    slidesPerView: 5,
    centeredSlides: true,
    autoplay: {
        delay: 6000,
    },
    breakpoints: {
        '1500': {
            slidesPerView: 5,
        },
        '1200': {
            slidesPerView: 5,
        },
        '992': {
            slidesPerView: 5,
        },
        '768': {
            slidesPerView: 3,
        },
        '576': {
            slidesPerView: 1.5,
        },
        '0': {
            slidesPerView: 1,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: ".history-button-next",
        prevEl: ".history-button-prev",
    },
});


/*=============================================
	=        Blog Thumb Active		      =
=============================================*/
var blogThumbSwiper = new Swiper('.blog-thumb-active', {
    spaceBetween: 0,
    effect: "fade",
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: ".blog-button-next",
        prevEl: ".blog-button-prev",
    },
});

/*=============================================
	=        Related Shop Active		      =
=============================================*/
var shopSwiper = new Swiper('.related__shop-active', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    autoplay: {
        delay: 6000,
    },
    breakpoints: {
        '1500': {
            slidesPerView: 4,
        },
        '1200': {
            slidesPerView: 4,
        },
        '992': {
            slidesPerView: 3,
        },
        '768': {
            slidesPerView: 2,
        },
        '576': {
            slidesPerView: 2,
        },
        '0': {
            slidesPerView: 1,
        },
    },
});


/*=============================================
	=        Similar Project Active		      =
=============================================*/
var similarSwiper = new Swiper('.similar__project-active', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    autoplay: {
        delay: 6000,
    },
    breakpoints: {
        '1500': {
            slidesPerView: 2,
        },
        '1200': {
            slidesPerView: 2,
        },
        '992': {
            slidesPerView: 2,
        },
        '768': {
            slidesPerView: 2,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
    navigation: {
        nextEl: ".testimonial-button-next",
        prevEl: ".testimonial-button-prev",
    },
});
var AwardSwiper = new Swiper('.AwardSwiper', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    autoplay: {
        delay: 6000,
    },
    breakpoints: {
        '1500': {
            slidesPerView: 3,
        },
        '1200': {
            slidesPerView: 3,
        },
        '992': {
            slidesPerView: 3,
        },
        '768': {
            slidesPerView: 2,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
    navigation: {
        nextEl: ".testimonial-button-next",
        prevEl: ".testimonial-button-prev",
    },
});

var AwardSwiper1 = new Swiper('.AwardSwiper1', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: {
        delay: 6000,
    },
    breakpoints: {
        '1500': {
            slidesPerView: 1,
        },
        '1200': {
            slidesPerView: 1,
        },
        '992': {
            slidesPerView: 1,
        },
        '768': {
            slidesPerView: 1,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
    navigation: {
        nextEl: ".testimonial-button-next",
        prevEl: ".testimonial-button-prev",
    },
});
/*=============================================
	=       Testimonial Active        =
=============================================*/
var swiper2 = new Swiper(".testimonial__active", {
    spaceBetween: 24,
    loop: true,
    slidesPerView: 2,
    autoplay: {
        delay: 6000,
    },
    breakpoints: {
        '1500': {
            slidesPerView: 2,
        },
        '1200': {
            slidesPerView: 2,
        },
        '992': {
            slidesPerView: 2,
        },
        '768': {
            slidesPerView: 2,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: ".testimonial-button-next",
        prevEl: ".testimonial-button-prev",
    },
});

var Careerswiper = new Swiper(".Careerswiper__active", {
    spaceBetween: 24,
    loop: true,
    slidesPerView: 2,
    autoplay: {
        delay: 6000,
    },
    breakpoints: {
        '1500': {
            slidesPerView: 3,
        },
        '1200': {
            slidesPerView: 3,
        },
        '992': {
            slidesPerView: 3,
        },
        '768': {
            slidesPerView: 2,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: ".testimonial-button-next",
        prevEl: ".testimonial-button-prev",
    },
});
// -----------------------------------------------------
var swiperThumbs = new Swiper(".swiper-thumbs", {
    slidesPerView: 4,
    spaceBetween: 0,
    arrows:true,
    autoplay: true,
    loop: true,
    breakpoints: {
     1920: {
       slidesPerView: 4
     },
     992: {
       slidesPerView: 3
     },
     480: {
       slidesPerView: 2
     }
   }
});

var swiperMain = new Swiper(".swiper-main", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiperThumbs
  }
});
$('.Industries_section .swiper-thumbs .swiper-slide').hover(function() {
  $( this ).trigger( "click" );
}); 
/*=============================================
	=        Team Social Active 	       =
=============================================*/
$('.social-toggle-icon').on('click', function () {
	$(this).parent().find('ul').slideToggle(400);
	$(this).find('i').toggleClass('fa-times');
	return false;
});


/*=============================================
	=    		Services Active  	       =
=============================================*/
function mediaSize() {
    /* Set the matchMedia */
    if (window.matchMedia('(min-width: 768px)').matches) {
        const panels = document.querySelectorAll('.col-custom')
        panels.forEach(panel => {
            panel.addEventListener('click', () => {
                removeActiveClasses()
                panel.classList.add('active')
            })
        })

        function removeActiveClasses() {
            panels.forEach(panel => {
                panel.classList.remove('active')
            })
        }

    } else {
    /* Reset for CSS changes â€“ Still need a better way to do this! */
        $(".col-custom").addClass("active");
    }
};
mediaSize();

/*===========================================
	=       TweenMax Active   =
=============================================*/
$(".tg-motion-effects").mousemove(function (e) {
    parallaxIt(e, ".tg-motion-effects1", 15);
    parallaxIt(e, ".tg-motion-effects2", 5);
    parallaxIt(e, ".tg-motion-effects3", -10);
    parallaxIt(e, ".tg-motion-effects4", 30);
    parallaxIt(e, ".tg-motion-effects5", -50);
    parallaxIt(e, ".tg-motion-effects6", -20);
});
function parallaxIt(e, target_class, movement) {
    var $wrap = $(e.target).parents(".tg-motion-effects");
    if (!$wrap.length) return;
    var $target = $wrap.find(target_class);
    var relX = e.pageX - $wrap.offset().left;
    var relY = e.pageY - $wrap.offset().top;

    TweenMax.to($target, 1, {
      x: ((relX - $wrap.width() / 2) / $wrap.width()) * movement,
      y: ((relY - $wrap.height() / 2) / $wrap.height()) * movement,
    });
};


/*=============================================
	=    		Isotope	Active  	      =
=============================================*/
$('.project-active-two').imagesLoaded(function () {
	// init Isotope
	var $grid = $('.project-active-two').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			columnWidth: '.grid-item',
		}
	});
	// filter items on button click
	$('.project__menu-nav').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});

});
//for menu active class
	$('.project__menu-nav button').on('click', function (event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});



/*===========================================
	=         Marquee Active         =
=============================================*/
if ($(".marquee_mode").length) {
    $('.marquee_mode').marquee({
        speed: 20,
        gap: 35,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        pauseOnHover: true,
        startVisible:true,
    });
}


/*=============================================
	=    	 Slider Range Active  	         =
=============================================*/
$("#slider-range").slider({
	range: true,
	min: 10,
	max: 400,
	values: [60, 300],
	slide: function (event, ui) {
		$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
	}
});
$("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));


/*=============================================
	=    		Cart Active 	        =
=============================================*/
$('.qtybutton-box span').on("click", function () {
	var $input = $(this).parents('.num-block').find('input.in-num');
	if ($(this).hasClass('minus')) {
		var count = parseFloat($input.val()) - 1;
		count = count < 1 ? 1 : count;
		if (count < 2) {
			$(this).addClass('dis');
		}
		else {
			$(this).removeClass('dis');
		}
		$input.val(count);
	}
	else {
		var count = parseFloat($input.val()) + 1
		$input.val(count);
		if (count > 1) {
			$(this).parents('.num-block').find(('.minus')).removeClass('dis');
		}
	}
	$input.change();
	return false;
});




/*===========================================
      =       Odometer Active    =
=============================================*/
$('.odometer').appear(function (e) {
	var odo = $(".odometer");
	odo.each(function () {
		var countNumber = $(this).attr("data-count");
		$(this).html(countNumber);
	});
});


/*===========================================
	=        Magnific Popup    =
=============================================*/
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
		enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


/*===========================================
	=        Wow Active      =
=============================================*/
function wowAnimation() {
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: false,
		live: true
	});
	wow.init();
}


/*===========================================
	=           Aos Active       =
=============================================*/
function aosAnimation() {
	AOS.init({
		duration: 1000,
		mirror: true,
		once: true,
		disable: 'mobile',
	});
}

/*===========================================
	=    		 Cart Active  	         =
=============================================*/
$(window).on("load", function () {
if ($(".curved-circle").length) {
    $(".curved-circle").circleType({
        position: "absolute",
        dir: 1,
        radius: 280,
        forceHeight: true,
        forceWidth: true,
    });
}
});
// -----------------------------------------------------
$(".modal").on('shown.bs.modal', function() {
  // $('.modal-backdrop').css('background', '#000000');
  $('.modal-backdrop').addClass('modal_bg_color');
});

// ------------------------------------------------------------------

// const seconds = document.querySelector(".seconds .number"),
//   minutes = document.querySelector(".minutes .number"),
//   hours = document.querySelector(".hours .number"),
//   days = document.querySelector(".days .number");

// let secValue = 11,
//   minValue = 6,
//   hourValue = 3,
//   dayValue = 30;

// const timeFunction = setInterval(() => {
//   secValue--;

//   if (secValue === 0) {
//     minValue--;
//     secValue = 60;
//   }
//   if (minValue === 0) {
//     hourValue--;
//     minValue = 60;
//   }
//   if (hourValue === 0) {
//     dayValue--;
//     hourValue = 24;
//   }

//   if (dayValue === 0) {
//     clearInterval(timeFunction);
//   }
//   seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
//   minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
//   hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
//   days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
// }, 1000); //1000ms = 1s


// const daysElement = document.querySelector(".days .number");
// const hoursElement = document.querySelector(".hours .number");
// const minutesElement = document.querySelector(".minutes .number");
// const secondsElement = document.querySelector(".seconds .number");

// // Set the target date
// const targetDate = new Date("2025-01-23T12:00:00");

// // Reset the target date to ensure accurate calculations
// targetDate.setHours(12, 0, 0, 0);

// function updateCountdown() {
//     const now = new Date();
//     const remainingTime = targetDate - now; // Time difference in milliseconds

//     if (remainingTime <= 0) {
// registerBtn.onclick = () => {
//                 window.location.href = "https://itme2022.india-itme.com/"; // Replace with your URL
//             }
//         return;
//     }

//     // Convert milliseconds to days, hours, minutes, and seconds
//     const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

//     // Update the DOM elements with formatted values
//     daysElement.textContent = days < 10 ? `0${days}` : days;
//     hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
//     minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
//     secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
// }

// // Start updating the countdown every second
// const countdownInterval = setInterval(updateCountdown, 1000);


// ------------------------------------------------------------------------------------------------
// For Register Click Timer start ----------------------------------
document.addEventListener("DOMContentLoaded", () => {
    // Get all elements with the trigger class
    const register_clicks = document.querySelectorAll(".register_click");
    const modal_open = document.getElementById("timer_Modal1");
    const close_timer_Modal = document.getElementById("close_timer_Modal1");

    // Countdown Timer Elements
    const daysElement = document.querySelector(".days .number");
    const hoursElement = document.querySelector(".hours .number");
    const minutesElement = document.querySelector(".minutes .number");
    const secondsElement = document.querySelector(".seconds .number");

    // Set the target date for countdown
    const targetDate = new Date("2025-02-21T12:00:00");

    function isCountdownFinished0() {
        const now = new Date();
        return now >= targetDate; // Returns true if countdown has expired
    }

    function updateCountdown0() {
        const now = new Date();
        const remainingTime = targetDate - now;

        if (remainingTime <= 0) {
            if (modal_open.classList.contains("active")) { // Check if modal is open
            modal_open.classList.remove("active"); 
            window.open("https://india-itme.com/#/ITME2026", "_blank");
        }
        return;
        } else {
            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            // Update the timer elements
            daysElement.textContent = days < 10 ? `0${days}` : days;
            hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
            minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
            secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
        }
    }

    // Attach click event to all triggers
    register_clicks.forEach((trigger) => {
        trigger.addEventListener("click", () => {
            if (isCountdownFinished0()) {

                // Redirect if countdown is finished
                window.open("https://india-itme.com/#/ITME2026", "_blank");
            } else {
                // Open the modal if the countdown is still active
                modal_open.classList.add("active");
            }
        });
    });

    // Close modal on clicking the close button
    if (close_timer_Modal) {
        close_timer_Modal.addEventListener("click", () => {
            modal_open.classList.remove("active");
        });
    }

    // Run the countdown every second
    const countdownInterval = setInterval(() => {
        updateCountdown0();
        // Only redirect if modal is currently open and countdown reaches 0
        if (targetDate - new Date() <= 0 && modal_open.classList.contains("active")) {
            clearInterval(countdownInterval);
            modal_open.classList.remove("active");
            window.open("https://india-itme.com/#/ITME2026", "_blank");
        }
    }, 1000);
     
    // Initial call to set countdown immediately
    updateCountdown0();
});
// For Register Click Timer end ----------------------------------

// For Booking Click Timer start ----------------------------------
document.addEventListener("DOMContentLoaded", () => {
    // Get all elements with the trigger class
    const booking_click = document.querySelectorAll(".booking_click");
    const modal_open = document.getElementById("timer_Modal1");
    const close_timer_Modal = document.getElementById("close_timer_Modal1");

    // Countdown Timer Elements
    const daysElement = document.querySelector(".days1 .number1");
    const hoursElement = document.querySelector(".hours1 .number1");
    const minutesElement = document.querySelector(".minutes1 .number1");
    const secondsElement = document.querySelector(".seconds1 .number1");

    // Set the target date for countdown
    const targetDate = new Date("2025-02-18T17:30:00");

    function isCountdownFinished1() {
        const now = new Date();
        return now >= targetDate; // Returns true if countdown has expired
    }

    function updateCountdown1() {
        const now = new Date();
        const remainingTime = targetDate - now;

        if (remainingTime <= 0) {
            if (modal_open.classList.contains("active")) { // Check if modal is open
            modal_open.classList.remove("active"); 
            window.open("https://india-itme.com/#/ITME2026", "_blank");
        }
        return;
        } else {
            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            // Update the timer elements
            daysElement.textContent = days < 10 ? `0${days}` : days;
            hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
            minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
            secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
        }
    }

    // Attach click event to all triggers
    booking_click.forEach((trigger) => {
        trigger.addEventListener("click", () => {
            if (isCountdownFinished1()) {

                // Redirect if countdown is finished
                window.open("https://india-itme.com/#/ITME2026", "_blank");
            } else {
                // Open the modal if the countdown is still active
                modal_open.classList.add("active");
            }
        });
    });

    // Close modal on clicking the close button
    if (close_timer_Modal) {
        close_timer_Modal.addEventListener("click", () => {
            modal_open.classList.remove("active");
        });
    }
    const countdownInterval1 = setInterval(() => {
        updateCountdown1();
        // Only redirect if modal is currently open and countdown reaches 0
        if (targetDate - new Date() <= 0 && modal_open.classList.contains("active")) {
            clearInterval(countdownInterval1);
            modal_open.classList.remove("active");
            window.open("https://india-itme.com/#/ITME2026", "_blank");
        }
    }, 1000);
     
    // Initial call to set countdown immediately
    updateCountdown1();
});
// For Booking Click Timer end ----------------------------------

// For Visitors Click Timer start ----------------------------------
document.addEventListener("DOMContentLoaded", () => {
    // Get all elements with the trigger class
    const visitor_header_footer_clicks = document.querySelectorAll(".visitor_header_footer_click");
    const modal_open = document.getElementById("timer_Modal");
    const close_timer_Modal = document.getElementById("close_timer_Modal");


    // Countdown Timer Elements
    const daysElement = document.querySelector(".days .number");
    const hoursElement = document.querySelector(".hours .number");
    const minutesElement = document.querySelector(".minutes .number");
    const secondsElement = document.querySelector(".seconds .number");

    // Set the target date for countdown
    const targetDate = new Date("2025-02-21T12:00:00");

    function isCountdownFinished2() {
        const now = new Date();
        return now >= targetDate; // Returns true if countdown has expired
    }

    function updateCountdown2() {
        const now = new Date();
        const remainingTime = targetDate - now;

        if (remainingTime <= 0) {
            if (modal_open.classList.contains("active")) { // Check if modal is open
            modal_open.classList.remove("active"); 
            window.open("https://india-itme.com/#/visitorregistration/ITME2026", "_blank");
        }
        return;
        } else {
            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            // Update the timer elements
            daysElement.textContent = days < 10 ? `0${days}` : days;
            hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
            minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
            secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
        }
    }

    // Attach click event to all triggers
    visitor_header_footer_clicks.forEach((trigger) => {
        trigger.addEventListener("click", () => {
            if (isCountdownFinished2()) {

                // Redirect if countdown is finished
                window.open("https://india-itme.com/#/visitorregistration/ITME2026", "_blank");
            } else {
                // Open the modal if the countdown is still active
                modal_open.classList.add("active");
            }
        });
    });

    // Close modal on clicking the close button
    if (close_timer_Modal) {
        close_timer_Modal.addEventListener("click", () => {
            modal_open.classList.remove("active");
        });
    }
    const countdownInterval1 = setInterval(() => {
        updateCountdown2();
        // Only redirect if modal is currently open and countdown reaches 0
        if (targetDate - new Date() <= 0 && modal_open.classList.contains("active")) {
            clearInterval(countdownInterval1);
            modal_open.classList.remove("active");
            window.open("https://india-itme.com/#/visitorregistration/ITME2026", "_blank");
        }
    }, 1000);
     
    // Initial call to set countdown immediately
    updateCountdown2();

});
// For Visitors Click Timer end ----------------------------------

// For Login Click Timer start ----------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const login_btn_clicks = document.querySelectorAll(".login_btn_click");
    const modal_open = document.getElementById("timer_Modal2");
    const close_timer_Modal = document.getElementById("close_timer_Modal2");


    // Countdown Timer Elements
    const daysElement = document.querySelector(".days2 .number2");
    const hoursElement = document.querySelector(".hours2 .number2");
    const minutesElement = document.querySelector(".minutes2 .number2");
    const secondsElement = document.querySelector(".seconds2 .number2");


    // Set the target date for countdown
    const targetDate = new Date("2025-02-21T12:12:00");

    function isCountdownFinished3() {
        const now = new Date();
        return now >= targetDate; // Returns true if countdown has expired
    }

    function updateCountdown3() {
        const now = new Date();
        const remainingTime = targetDate - now;

        if (remainingTime <= 0) {
            if (modal_open.classList.contains("active")) { // Check if modal is open
            modal_open.classList.remove("active"); 
            window.open("https://india-itme.com/", "_blank");
        }
        return;
        } else {
            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            // Update the timer elements
            daysElement.textContent = days < 10 ? `0${days}` : days;
            hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
            minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
            secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
        }
    }

    // Attach click event to all triggers
    login_btn_clicks.forEach((trigger) => {
        trigger.addEventListener("click", () => {
            if (isCountdownFinished3()) {

                // Redirect if countdown is finished
                window.open("https://india-itme.com/", "_blank");
            } else {
                // Open the modal if the countdown is still active
                modal_open.classList.add("active");
            }
        });
    });

    // Close modal on clicking the close button
    if (close_timer_Modal) {
        close_timer_Modal.addEventListener("click", () => {
            modal_open.classList.remove("active");
        });
    }
    const countdownInterval1 = setInterval(() => {
        updateCountdown3();
        // Only redirect if modal is currently open and countdown reaches 0
        if (targetDate - new Date() <= 0 && modal_open.classList.contains("active")) {
            clearInterval(countdownInterval1);
            modal_open.classList.remove("active");
            window.open("https://india-itme.com/", "_blank");
        }
    }, 1000);
     
    // Initial call to set countdown immediately
    updateCountdown3();
});
// For Login Click Timer end ----------------------------------






// ------------------------------------------------------------------------------------------

$(document).ready(function() {    
   $('#accordionExample .hide').hide();
   $('.chapters_section .accordion-body').click(function(){
        event.preventDefault();
        window.location = "index-of-product.html";
           $(this).parent().next().slideToggle()
                  .siblings('.hide').slideUp();
           return false;
   });
});

})(jQuery);