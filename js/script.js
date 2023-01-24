var bodyDir = $('body').css('direction')
console.log(bodyDir)
var dirAr
if(bodyDir == "rtl"){
  dirAr= true
}
else{
  dirAr = false
}



$(".toggle-side-menu-classification").click(function(){
    $(".side-menu-classification").toggleClass("show");
    $(".overlay-sidemenu").toggleClass("show");
  })
  $(".close-side-menu-classification").click(function(){
    $(".side-menu-classification").removeClass("show");
    $(".overlay-sidemenu").removeClass("show");
  })


/* -------------- upload profile pic ---------------- */
if ($(".profile").length > 0) {
    const imgDiv = document.querySelector('.profile-pic');
    const img = document.querySelector('#photo');
    const file = document.querySelector('#file');
    const uploadBtn = document.querySelector('#uploadBtn');

    //if user hover on img div 

    imgDiv.addEventListener('mouseenter', function(){
        uploadBtn.style.display = "block";
    });

    //if we hover out from img div

    imgDiv.addEventListener('mouseleave', function(){
        uploadBtn.style.display = "none";
    });

    //when we choose a pic to upload

    file.addEventListener('change', function(){
    const choosedFile = this.files[0];
    if (choosedFile) {
        const reader = new FileReader(); 
        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
        });
        reader.readAsDataURL(choosedFile);
    }
    });
}


/* -------------------------------- jquery -------------------------------- */ 

$('select').niceSelect();



$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:false,
        navText: ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            992:{
                items:2
            }
        }
    })
});

$(function () {
    $("#your-rate").rateYo({
        starWidth: "15px",
        ratedFill: "#FFC107",
        rating: 0,
        fullStar: true,
        rtl:dirAr
      });
});


var navbar = document.getElementsByClassName("navbar");
var sticky = navbar[0].offsetHeight ;


// make nav bar static on scroll 
if ($("#home").length > 0) {
    window.addEventListener("scroll" , function(){
        if (this.document.documentElement.scrollTop >= sticky) {
            $(navbar).css("position", "fixed");
            $(navbar).addClass("bg-main-color");
        } else {
            $(navbar).removeClass("bg-main-color")
            $(navbar).css("position", "sticky");
        }
    })
}
else{
    $(navbar).addClass("bg-main-color")
}

    // counter
window.addEventListener("scroll" , function(){
    if ($(".counters").length > 0) {
        var counters = document.querySelectorAll('.counter');
        var counterStart = counters[0].offsetTop - 500;
        var speed = 200;
        if(this.document.documentElement.scrollTop > counterStart){
            counters.forEach(counter => {
                var upTo = function(){
                    var target = Number(counter.getAttribute('data-target')) 
                    var count = Number(counter.innerText)
                    var inc = Math.ceil(target / speed) ;
                    setTimeout (upTo,100)

                    if(count < target){
                        counter.innerText = count + inc ;
                    } else counter.innerText= target;
                }
                upTo();  
            });
        }
    }
        
})

$('.our-aqars .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsiveClass:true,
    rtl:true,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        992:{
            items:3
        }
    }
});
$('.our-country .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsiveClass:true,
    rtl:true,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
$('.client-comment .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsiveClass:true,
    rtl:true,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        992:{
            items:3
        }
    }
});



if ($(".fav").length > 0) {
    function favFunction(x) {
        x.classList.toggle("fa-solid");
        x.classList.toggle("fa-regular")
      }
}

// change password type
var pass = document.getElementById('user-pass')
function passFunction(x) {
    x.classList.toggle("bi-unlock");
    if( pass.type == "password"){
        pass.setAttribute("type","text");
    }else{
        pass.setAttribute("type","password");
    }
}


// price slider

var $slider = $("#slider");
var $fill = $(".bar .fill");

function setBar() {
	$fill.css("width", $slider.val() + "%");
}

$slider.on("input", setBar);

setBar();



  // ----- scroll top ------

  var btn = $('#scroll-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
  

var changeSlide = 4; // mobile -1, desktop + 1
// Resize and refresh page. slider-two slideBy bug remove
var slide = changeSlide;
if ($(window).width() < 600) {
    var slide = changeSlide;
    slide--;
} else if ($(window).width() > 999) {
    var slide = changeSlide;
    slide++;
} else {
    var slide = changeSlide;
}

$('.one').owlCarousel({
    nav: false,
    items: 1,
    autoplay: 5000,
  rtl:dirAr
})
$('.two').owlCarousel({
    nav: false,
    margin: 15,
    rtl:true,
    responsive: {
        0: {
            items: changeSlide - 1,
            slideBy: changeSlide - 1
        },
        600: {
            items: changeSlide,
            slideBy: changeSlide
        },
        1000: {
            items: changeSlide + 1,
            slideBy: changeSlide + 1
        }
    }
})
var owl = $('.one');
owl.owlCarousel();
owl.on('translated.owl.carousel', function (event) {
    $(".right").removeClass("nonr");
    $(".left").removeClass("nonl");
    if ($('.one .owl-next').is(".disabled")) {
        $(".slider .right").addClass("nonr");
    }
    if ($('.one .owl-prev').is(".disabled")) {
        $(".slider .left").addClass("nonl");
    }
    $('.slider-two .item').removeClass("active");
    var c = $(".slider .owl-item.active").index();
    $('.slider-two .item').eq(c).addClass("active");
    var d = Math.ceil((c + 1) / (slide)) - 1;
    $(".slider-two .owl-dots .owl-dot").eq(d).trigger('click');
})
$('.right').click(function () {
    $(".slider .owl-next").trigger('click');
});
$('.left').click(function () {
    $(".slider .owl-prev").trigger('click');
});
$('.slider-two .item').click(function () {
    var b = $(".item").index(this);
    $(".slider .owl-dots .owl-dot").eq(b).trigger('click');
    $(".slider-two .item").removeClass("active");
    $(this).addClass("active");
});
var owl2 = $('.two');
owl2.owlCarousel();
owl2.on('translated.owl.carousel', function (event) {
    $(".right-t").removeClass("nonr-t");
    $(".left-t").removeClass("nonl-t");
    if ($('.two .owl-next').is(".disabled")) {
        $(".slider-two .right-t").addClass("nonr-t");
    }
    if ($('.two .owl-prev').is(".disabled")) {
        $(".slider-two .left-t").addClass("nonl-t");
    }
})
$('.right-t').click(function () {
    $(".slider-two .owl-prev").trigger('click');
});
$('.left-t').click(function () {
    $(".slider-two .owl-next").trigger('click');
});