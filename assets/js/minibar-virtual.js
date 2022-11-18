const h1Txt = "Hi!";
const h2Txt = "My name is Ravien Sewpal";
const pTxt = "Web Developer";
let i = 0;
let j = 0;
let p = 0;

window.addEventListener("load", function () {
  //executeAsynchronously([typeWriter, typeWriter2, typeWriter3], 300);
  executeAsynchronously(typeWriter, 100);
  executeAsynchronously(typeWriter2, 1000);
  executeAsynchronously(typeWriter3, 4000);
});

function executeAsynchronously(functions, timeout) {
  // for (var i = 0; i < functions.length; i++) {
  //   setTimeout(functions[i], timeout);
  // }
  setTimeout(functions, timeout);
}
// The typewriter method for h1
function typeWriter() {
  if (i < h1Txt.length) {
    document.getElementById("hi-hero").innerHTML += h1Txt.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

// The typewriter method for h2
function typeWriter2() {
  const h2El = document.getElementById("hero-name");
  if (j < h2Txt.length) {
    h2El.innerHTML += h2Txt.charAt(j);
    j++;
    setTimeout(typeWriter2, 100);
  }
}

function typeWriter3() {
  if (p < pTxt.length) {
    document.getElementById("hero-position").innerHTML += pTxt.charAt(p);
    p++;
    setTimeout(typeWriter3, 100);
  }
}

$(document).ready(function () {
  var mainMenu = $(".main-menu");

  mainMenu.each(function () {
    var that = $(this),
      menuLink = that.find(".menu-link");
    var winWidth = $(window).width();

    menuLink.click(function (e) {
      var self = $(this),
        target = self.attr("href"),
        posTar = $(target).offset().top;
      winWidth = $(window).width();

      if (target.charAt(0) == "#") {
        e.preventDefault();

        self.parent().addClass("active");
        self.parent().siblings().removeClass("active");
      }

      $("body, html").animate(
        {
          scrollTop: posTar,
        },
        1000
      );

      if (winWidth < 600) {
        setTimeout(function () {
          $(".minibar").slideUp();
        }, 500);
      }
      return false;

      // if ( $(this).charAt(0) == '#' ) {
      //   e.preventDefault();

      //   var self = $(this), target = self.attr('href'), posTar = $(target).offset().top;
      //   winWidth = $(window).width();

      //   self.parent().addClass('active');
      //   self.parent().siblings().removeClass('active');

      //   $("body, html").animate({
      //     scrollTop: posTar
      //   }, 1000 );

      //   if(winWidth < 600) {
      //     setTimeout(function() {
      //       $('.minibar').slideUp();
      //     }, 500);
      //   }
      //   return false;
      // }
    });
  });

  $.fn.toggleSelected = function (options) {
    var defaults = $.extend({
      classes: "selected",
      itemSelector: this.children(),
    });

    return this.each(function () {
      var that = $(this);
      var o = defaults;
      var sel = o.itemSelector;

      sel.click(function () {
        var self = $(this);
        self.addClass(o.classes);
        self.siblings().removeClass(o.classes);
      });
    });
  };

  $('[data-toggle="selected"]').toggleSelected();
});

$(document).ready(function () {
  // Nice select
  $(".vg-select").niceSelect();

  // Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Page animation initialize
  new WOW().init();

  // Back to top
  var backTop = $(".btn-back_to_top");

  $(window).scroll(function () {
    if ($(document).scrollTop() > 400) {
      backTop.css("visibility", "visible");
    } else if ($(document).scrollTop() < 400) {
      backTop.css("visibility", "hidden");
    }
  });

  backTop.click(function () {
    $("html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
    return false;
  });

  var $grid = $(".gridder").isotope({
    itemSelector: ".grid-item",
    percentPosition: true,
  });

  // filter items on button click
  $(".filterable-button").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  $(".testi-carousel").owlCarousel({
    margin: 0,
    loop: true,
    autoplay: true,
    dots: false,
    autoplayTimeout: 4000,
    items: 1,
  });

  $(".toggle-menu").click(function () {
    $(".minibar").slideToggle();
  });

  $("#sideel").click(function () {
    $(this).parents(".config").toggleClass("active");
  });

  $("body").data("bodyClassList", "");

  $(".color-item").click(function () {
    var cls = $(this).data("class");

    $("body").attr("class", $("body").data("bodyClassList"));
    $("body").addClass(cls);
  });

  $("#change-page").on("change", function () {
    var url = $(this).val() + ".html";

    if ($(this).val()) {
      window.location.assign(url);
    }
  });

  $('[data-animate="scrolling"]').each(function () {
    var self = $(this);
    var target = $(this).data("target")
      ? $(this).data("target")
      : $(this).attr("href");

    self.click(function (e) {
      $("body, html").animate({ scrollTop: $(target).offset().top }, 1000);
      return false;
    });
  });
});

/*
 *  Counter
 *
 *  Require(" jquery.animateNumber.min.js ", " jquery.waypoints.min.js ")
 */
$(document).ready(function () {
  var counterInit = function () {
    if ($(".section-counter").length > 0) {
      $(".section-counter").waypoint(
        function (direction) {
          if (
            direction === "down" &&
            !$(this.element).hasClass("ftco-animated")
          ) {
            var comma_separator_number_step =
              $.animateNumber.numberStepFactories.separator(",");
            $(".number").each(function () {
              var $this = $(this),
                num = $this.data("number");
              $this.animateNumber(
                {
                  number: num,
                  numberStep: comma_separator_number_step,
                },
                5000
              );
            });
          }
        },
        { offset: "95%" }
      );
    }
  };
  counterInit();
});

let section = document.querySelectorAll(".scroll-effect");
let lists = document.querySelectorAll(".menu-item");
function activeLink(li) {
  lists.forEach((item) => item.classList.remove("active"));
  li.classList.add("active");
}
lists.forEach((item) =>
  item.addEventListener("click", function () {
    activeLink(this);
  })
);

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY + 300;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      const target = document.querySelector(`[href='#${id}']`).parentElement;
      activeLink(target);
    }
  });
};