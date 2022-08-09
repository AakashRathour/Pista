$(function () {
  var header = $(".Header");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      header.addClass("siteHeaderFixed");
    } else {
      header.removeClass("siteHeaderFixed");
    }
  });
});
$(document).ready(function () {
  $(".screen-slider").slick({
    dots: true,

    infinite: true,

    autoplaySpeed: 2500,

    slidesToShow: 4,

    slidesToScroll: 1,

    arrows: true,

    autoplay: true,

    responsive: [
      {
        breakpoint: 1024,

        settings: {
          slidesToShow: 3,

          slidesToScroll: 1,

          infinite: true,

          dots: false,
        },
      },

      {
        breakpoint: 600,

        settings: {
          slidesToShow: 2,

          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 480,

        settings: {
          slidesToShow: 1,

          slidesToScroll: 1,
        },
      },
    ],
  });
});
/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */
(function ($) {
  $.fn.unveil = function (threshold, callback) {
    var $w = $(window),
      th = threshold || 0,
      retina = window.devicePixelRatio > 1,
      attrib = retina ? "data-src-retina" : "data-src",
      images = this,
      loaded;
    this.one("unveil", function () {
      var source = this.getAttribute(attrib);
      source = source || this.getAttribute("data-src");
      if (source) {
        this.setAttribute("src", source);
        if (typeof callback === "function") callback.call(this);
      }
    });
    function unveil() {
      var inview = images.filter(function () {
        var $e = $(this);
        if ($e.is(":hidden")) return;
        var wt = $w.scrollTop(),
          wb = wt + $w.height(),
          et = $e.offset().top,
          eb = et + $e.height();
        return eb >= wt - th && et <= wb + th;
      });
      loaded = inview.trigger("unveil");
      images = images.not(loaded);
    }
    $w.on("scroll.unveil resize.unveil lookup.unveil", unveil);
    unveil();
    return this;
  };
})(window.jQuery || window.Zepto);

$(document).ready(function () {
  $("img").unveil();
});
$(function () {
  $("img").unveil();
});
$(document).ready(function () {
  $("img").unveil(200, function () {
    $(this).load(function () {
      this.style.opacity = 1;
    });
  });
});
