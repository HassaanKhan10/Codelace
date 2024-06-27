// navbar change design on scroll
$(function () {
  var navbar = $(".nav-section");

  $(window).on("scroll", function () {
    navbar.toggleClass("scrolled", $(window).scrollTop() > 400);
  }).scroll();
});



/*
add class open in navbar section on mobile screen clicked
*/
$('.navbar-toggler').on('click', function () {
  $(".nav-section").toggleClass("open");
})



/*
navbar dropdown hover and click image change
*/
var tabLinks = document.querySelectorAll('.nav-section .nav-link');
var tabPanes = document.querySelectorAll('.nav-section .tab-pane');

tabLinks.forEach(function (link) {
  link.addEventListener('mouseover', function () {
    showTab(link);
  });

  link.addEventListener('mouseout', function () {
    hideTab(link);
  });
});


function showTab(link) {

  var targetPane = document.querySelector(link.getAttribute('data-bs-target'));
  if (targetPane) {

    tabPanes.forEach(function (pane) {
      if (pane === targetPane) {
        pane.classList.add('show');
        pane.classList.add('active');
      } else {
        pane.classList.remove('show');
        pane.classList.remove('active');
      }
    });
    link.classList.add('active');
  }
}


function hideTab(link) {

  var targetPane = document.querySelector(link.getAttribute('data-bs-target'));
  if (targetPane) {

    link.classList.remove('active');
    tabPanes.forEach(function (pane) {
      pane.classList.remove('show');
      pane.classList.remove('active');
    });
    var firstPane = document.querySelector('.nav-section .tab-pane');
    if (firstPane) {
      firstPane.classList.add('show');
      firstPane.classList.add('active');
    }
  }
}
var firstLink = document.querySelector('.nav-section .nav-link');
if (firstLink) {
  showTab(firstLink);
}



/*
languages dropdown selected
*/
$(document).ready(function () {
  $('.dropdown-menu li a').each(function () {
    $(this).on("click", function () {
      var selectedImageSrc = $(this).find('img').attr('src');

      // Add or remove the class 'lang-selected' to/from all dropdown menu items
      $('.dropdown-menu li a').removeClass("lang-selected");
      $(this).addClass("lang-selected");

      // Set the selected language image source
      $('.selected-lang-img').attr('src', selectedImageSrc);
    });
  });
});



/*
hero section images animation with random generate
*/
if ($('.header-section .column-two .swiper').length > 0) {
  $(document).ready(function () {
    const swiperTwo = new Swiper('.header-section .column-two .swiper', {
      // Optional parameters
      effect: "fade",
      slidesPerView: "1",
      allowTouchMove: false,
      loop: true,
      autoplay: {
        delay: 2500,
      },
    });

    var totalSlides = swiperTwo.slides.length;
    var randomSlideIndex = Math.floor(Math.random() * totalSlides);
    swiperTwo.slideTo(randomSlideIndex, 0); // The second argument '0' means no transition
    swiperTwo.autoplay.start();
  })
}




/*
partners slides start
*/
if ($('.partners-slides .swiper').length) {
  var partnersSwiper = new Swiper('.partners-slides .swiper', {
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      stopOnLastSlide: false,
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
    freeMode: true,
    speed: 3000,
    // breakpoints: {
    //   640: {
    //     slidesPerView: 1,
    //     spaceBetween: 20,
    //   },
    //   768: {
    //     slidesPerView: 2,
    //     spaceBetween: 24,
    //   },
    //   992: {
    //     slidesPerView: 3,
    //     spaceBetween: 18,
    //   },
    //   1200: {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //   },
    // },
  });
}



/*
 blog posts slider  
*/
if ($('.inspired-card .swiper').length > 0) {
  var swiper = new Swiper('.inspired-card .swiper', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}



/*
 accordion click image change and force one accordion always open
*/
let target = $(".explore-services-section .accordion-item .collapse:not(.collapsed)").get(0);

$(".explore-services-section .accordion-item .collapse").on("show.bs.collapse", function (e) {
  target = e.target;
});

$(".explore-services-section .accordion-item .collapse").on("hide.bs.collapse", function (ee) {
  if (ee.target == target)
    return false;
});

$(document).ready(function () {
  $('.explore-services-section .accordion-collapse').on('show.bs.collapse', function () {
    var $currentAccordion = $(this).closest('.accordion-item');
    $currentAccordion.addClass('show');
    $('.explore-services-section .accordion-item').not($currentAccordion).removeClass('show');

    // Image function
    var imgElement = $currentAccordion.closest(".row").find('.accordion-img');
    var newImgSrc = $currentAccordion.data('img');
    imgElement.attr('src', "assests/images/" + newImgSrc);
  });
});



/*
initiate bootstrap popover
*/
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl, {
  trigger: 'hover',
}))



/*
initiate bootstrap tooltip
*/
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



/*
skilled team slider in ai page
*/
if ($('.skilled-team-section .swiper').length > 0) {
  const teamSlider = new Swiper('.skilled-team-section .swiper', {
    slidesPerView: 1.2,
    centeredSlides: true,
    spaceBetween: 16,
    pagination: false,
    navigation: false,
    breakpoints: {
      992: {
        slidesPerView: 3,
        spaceBetween: 32,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 32,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 32,
      }
    },

  });
}



/* 
Tab-Pane change in ai page
*/
$(document).ready(function () {
  function cycleTabs() {
    var $activeTab = $('.analytics-leaders-section #myTab .tab-btn.active');
    var $nextTab = $activeTab.next('.analytics-leaders-section #myTab .tab-btn');

    if (!$nextTab.length) {
      // If no next tab, cycle back to the first tab
      $nextTab = $('.analytics-leaders-section #myTab .tab-btn').first();
    }

    $nextTab.tab('show');
  }

  // Initial cycle start
  var cycleInterval = setInterval(cycleTabs, 3000); // Cycle every 5 seconds

  // Pause cycle on tab click
  $('#myTab .tab-btn').on('click', function (e) {
    clearInterval(cycleInterval); // Pause the cycle
    cycleInterval = setInterval(cycleTabs, 3000); // Restart the cycle
  });
});



/* 
data analytics tools section in ai page
*/
if ($('.data-analytics-tools-section .swiper-container').length > 0) {
  // data analytic tools and section
  var swiper = new Swiper(".data-analytics-tools-section .swiper-container", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween: 16,
    pagination: false,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      640: {
        slidesPerView: 1
      }
    },
  });
}

$(document).ready(function () {
  if ($(".js-toc").length) {
    tocbot.init({
      tocSelector: '.js-toc',
      contentSelector: '.js-toc-content',
      headingSelector: 'h2, h3',
      collapseDepth: 6,
      headingsOffset: 100,
      scrollSmoothOffset: -100
    });
    tocbot.refresh()
  }

})

// companies marquee slider
$(document).ready(function () {
  if ($('.our-partners .owl-carousel.reverse').length) {
    $('.our-partners .owl-carousel.reverse').owlCarousel({
      autoWidth: true,
      loop: true,
      center: true,
      margin: 16,
      nav: false,
      autoplay: true, // Set to true if you want automatic sliding
      slideTransition: 'linear',
      autoplaySpeed: 5000,
      autoplayHoverPause: false,
      dots: false,
      rtl: true,
      touchDrag: false, // Disable touch drag/swipe if not needed
      mouseDrag: false, // Disable mouse drag/swipe if not needed
    });
  }

  if ($('.our-partners .owl-carousel').length) {
    $('.our-partners .owl-carousel').owlCarousel({
      autoWidth: true,
      loop: true,
      center: true,
      margin: 16,
      nav: false,
      autoplay: true, // Set to true if you want automatic sliding
      slideTransition: 'linear',
      autoplaySpeed: 5000,
      autoplayHoverPause: false,
      dots: false,
      // rtl: true,
      touchDrag: false, // Disable touch drag/swipe
      mouseDrag: false, // Disable mouse drag/swipe
    });
  }


});



// short button text in mobile screen
var bookMeetingBtn = document.querySelector("#bookMeeting span");
var defaultText = bookMeetingBtn?.innerHTML;
function changeText() {
  bookMeetingBtn.innerHTML = window.matchMedia("(max-width: 320px)").matches ? "Meet now" : defaultText;
}
if (bookMeetingBtn !== null) {
  changeText();
  window.addEventListener("resize", changeText);
}



// native share button
document.getElementById('shareWhatsapp').addEventListener('click', (e) => {
  e.preventDefault();
  let customMessage = "Hey, I'd like you to take a look at this solution for our company.\n" + window.location.href;
  let shareUrl = 'https://wa.me/?text=' + encodeURIComponent(customMessage);
  window.open(shareUrl, '_blank');

  $("#shareModal").modal('hide');
});

$('#shareMail').click(function (e) {
  e.preventDefault();
  let customMessage = "Hey, I'd like you to take a look at this solution for our company.\n" + window.location.href;
  let shareUrl = 'mailto:?subject=Check%20out%20this%20link&body=' + encodeURIComponent(customMessage);

  window.location.href = shareUrl;
  $("#shareModal").modal('hide');
});
$('#shareGmail').click(function (e) {
  e.preventDefault();
  let customMessage = "Hey, I'd like you to take a look at this solution for our company.\n" + window.location.href;
  let shareUrl = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=Check%20out%20this%20link&body=' + encodeURIComponent(customMessage);

  window.open(shareUrl, '_blank');
  $("#shareModal").modal('hide');
});


$('#copyLinkInput').val(window.location.href);
$("#copyLink").click(function (e) {
  e.preventDefault();
  $("#copyLinkInput").select();
  document.execCommand("copy");
  $("#copyLinkInput").blur();
});