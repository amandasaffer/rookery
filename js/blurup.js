function preload(ele, imgName) {
  var c = new Image(); // create img element for preload
  var ele = '.' + ele; // add hyphen to beginning of class name
  
  // when the image element is loaded, set the background image
  c.onload = function(){
    $(ele).css('background-image','url(/img/' + imgName + ')');
  }

  // wait for image to load though
  c.src = '/img/' + imgName;
}

$(document).ready(function() {
  preload('-spacedojo', 'josh.jpg');
  preload('-sos', 'laura.jpg');
  preload('-tbb', 'couch.jpg');
  preload('-wizard-school', 'card-bg.jpg');
  preload('-betkong', 'esports.jpg');
  preload('-woofgang', 'sonya.jpg');
  preload('-testimonials', 'head.jpg');
  preload('landing', 'woods1.jpg');



  // ------------------
  // CASES SLIDER
  $('.featured-cases').slick({

    // define custom arrows
    prevArrow: '<div class="arrow-link"><div class="arrow left-arrow"><svg class="icon"><use xlink:href="#left-arrow"></use></svg></div></div>',
    nextArrow: '<div class="arrow-link"><div class="arrow right-arrow"><svg class="icon"><use xlink:href="#right-arrow"></use></svg></div></div>',
    fade: true,

    // fade speed
    speed: 1000,
    autoplay: true,

    // 5 second on each slide
    autoplaySpeed: 5000
  });


  // ------------------
  // TESTIMONIAL SLIDER
  $('.testimonial-box').slick({
    arrows: false,
    dots: true,
    fade: true,

    // fade speed
    speed: 1000,
    autoplay: true,

    // 10 second on each slide
    autoplaySpeed: 10000,
    pauseOnHover: false
  });
});

document.querySelector( "#site-menu" ).addEventListener( "click", function() {
  this.classList.toggle( "active" );
  document.body.classList.toggle( "menu-open" );
  $('#expanded-menu').fadeToggle(350).css('display', 'flex');
});

// smooth scroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1300);
        return false;
      }
    }
  });
});