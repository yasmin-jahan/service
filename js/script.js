
$(document).ready(function () {

  var swiper = new Swiper(".hero_swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });




  // $('#tabs-nav li:first-child').addClass('active');
  // $('.tab-content').hide();
  // $('.tab-content:first').show();

  // accordian
  const items = document.querySelectorAll('.accordion button');

  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
    }
  }

  items.forEach((item) => item.addEventListener('click', toggleAccordion));

  // accordian




  // max-MatchHeight
  // function MatchHeight() {
  //   $('.testimonial_comment h3').matchHeight({});
  // }
  // MatchHeight(); 
  // max-MatchHeight



  // Apply matchHeight to elements with class "work_text"
  // function MatchHeight() {
  //   $('.work_text p').matchHeight();
  // }

  // // Call the function
  // MatchHeight();

  // testimonial-swiper

  var swiper = new Swiper(".testimonial_swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".testimonial_pagination",
      clickable: true,

    },
    navigation: {
      nextEl: ".testimonial_next_btn",
      prevEl: ".testimonial_prev_btn",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  //tab
  // Show the first tab and hide the rest
  const tabs = document.querySelectorAll(".tab");

  function tabify(tab) {
    const tabList = tab.querySelector(".tab__list");

    if (tabList) {
      const tabItems = [...tabList.children];
      const tabContent = tab.querySelector(".tab__content");
      const tabContentItems = [...tabContent.children];
      let tabIndex = 0;

      tabIndex = tabItems.findIndex((item, index) => {
        return [...item.classList].indexOf("is--active") > -1;
      });

      tabIndex > -1 ? (tabIndex = tabIndex) : (tabIndex = 0);

      function setTab(index) {
        tabItems.forEach((x, index) => x.classList.remove("is--active"));
        tabContentItems.forEach((x, index) => x.classList.remove("is--active"));

        tabItems[index].classList.add("is--active");
        tabContentItems[index].classList.add("is--active");
      }

      tabItems.forEach((x, index) =>
        x.addEventListener("click", () => setTab(index))
      );
      setTab(tabIndex);
      tab.querySelectorAll(".tab").forEach((tabContent) => tabify(tabContent));
    }
  }

  tabs.forEach(tabify);




  // menu
  $(".hamburger").click(function () {
    $(".header_nav").addClass("header_mobile_nav_active")
    $(".black_overlay").fadeIn();
  });

  $(".close-btn").click(function () {
    $(".header_nav").removeClass("header_mobile_nav_active")
    $(".black_overlay").fadeOut();
  });

  $(".black_overlay").click(function () {
    $(".header_nav").removeClass('header_mobile_nav_active');
    $(".black_overlay").fadeOut();
  });

 

  // menu

});


// tab
$(document).ready(function () {

  $('ul.tabs li').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })

})

// tab

// $(document).ready(function (){
//   $("#contact").click(function (){
// $(".tabs_ul_section").addClass(".second_tab_active")
//   });

// });



  // let isSmallScreen = () => window.innerWidth <= 767;

  // let serviceClickedOnce = false;

  // $('.mega_menu_a').click(function (e) {
  //   if (isSmallScreen()) {
  //     e.preventDefault(); // Prevent immediate link navigation
  //     let $parent = $(this).parent();

  //     // Toggle dropdown
  //     $parent.toggleClass('show');

  //     // If already clicked once, follow link
  //     if (serviceClickedOnce) {
  //       window.location.href = $(this).attr('href');
  //     }

  //     // Set flag
  //     serviceClickedOnce = true;

  //     // Reset the flag after 1 second
  //     setTimeout(() => {
  //       serviceClickedOnce = false;
  //     }, 1000);
  //   }
  // });
  
// $(document).ready(function () {
//   $('.main_header_nav ul li:has(ul) > a').each(function () {
//     $(this).append('<span class="mean-expand"> <i class="fa-solid fa-angle-down"></i></span>')
//   });

//   if ($(window).width() <= 767) {
//     $(".main_header_nav ul li:has(ul) > a .mean-expand").on("click", function (e) {
//       e.preventDefault();
//       if ($(this).parent().hasClass("active")) {
//         $(this).parent().removeClass("active");
//         $(this).parent()
//           .siblings("ul")
//           .slideUp(200);
//       } else {
//         $(".main_header_nav ul li:has(ul) > a").removeClass("active");
//         $(this).parent().addClass("active");
//         $(".main_header_nav li ul").slideUp(200);
//         $(this).parent()
//           .siblings("ul")
//           .slideDown(200);
//       }
//     });
//   }

// });


// $(document).ready(function () {
//   // Add dropdown icons
//   $('.main_header_nav ul li:has(ul) > a').each(function () {
//     $(this).append('<span class="mean-expand"><i class="fa-solid fa-angle-down"></i></span>');
//   });

//   // Handle click on dropdown icon
//   $('.main_header_nav').on('click', '.mean-expand', function (e) {
//     e.preventDefault();
//     e.stopPropagation(); // Prevent anchor click

//     let parentLi = $(this).closest('li');

//     if (parentLi.hasClass("active")) {
//       parentLi.removeClass("active");
//       parentLi.children("ul").slideUp(200);
//     } else {
//       $(".main_header_nav ul li").removeClass("active");
//       $(".main_header_nav li ul").slideUp(200);
//       parentLi.addClass("active");
//       parentLi.children("ul").slideDown(200);
//     }
//   });
  
 
// });

$(document).ready(function () {
  // Add dropdown icons (only once)
  $('.main_header_nav ul li:has(ul) > a').each(function () {
    if (!$(this).find('.mean-expand').length) {
      $(this).append('<span class="mean-expand"><i class="fa-solid fa-angle-down"></i></span>');
    }
  });

  // Handle click on dropdown icon
  $('.main_header_nav').on('click', '.mean-expand', function (e) {
    e.preventDefault();
    e.stopPropagation(); // Prevent anchor click

    let parentLi = $(this).closest('li');
    let isMobile = $(window).width() < 575;

    if (parentLi.hasClass("active")) {
      parentLi.removeClass("active");

      if (isMobile) {
        parentLi.children("ul").slideUp(200);
      } else {
        parentLi.children("ul").hide(); // instantly hide
      }
    } else {
      $(".main_header_nav ul li").removeClass("active");
      $(".main_header_nav li ul").each(function () {
        if (isMobile) {
          $(this).slideUp(200);
        } else {
          $(this).hide(); // instantly hide
        }
      });

      parentLi.addClass("active");

      if (isMobile) {
        parentLi.children("ul").slideDown(200);
      } else {
        parentLi.children("ul").show(); // instantly show
      }
    }
  });
});



// faq-page-section
// faq-page-section


