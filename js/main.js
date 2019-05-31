/*--------- PreLoader init ---------*/
function initPreLoader() {
    jQuery(".loader-container").delay(400).fadeOut()
}
jQuery(window).on("load", function () {
    "use strict";
    initPreLoader()
});

/*--------- Header slider ---------*/
$(document).ready(function () {
    $(".slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: !0,
        infinite: !1,
        cssEase: "linear",
        mobileFirst: !0,
        arrows: !1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !0
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: !0
            }
        }, {
            breakpoint: 250,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: !1
        }]
    })
}); 

/*--------- Testimonials slider ---------*/
$(document).ready(function () {
    $(".testim-slider").slick({
        arrows: !1,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: !0,
        infinite: !1,
        cssEase: "linear",
        speed: 1e3,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !0
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: !0
            }
        }, {
            breakpoint: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: !0
        }]
    })
});

/*--------- Animations on scroll ---------*/
(new WOW).init();

/*--------- Menu Scroller ---------*/
$(".scroller").on("click", function () {
    "use strict";
    var e = $(this).attr("href");
    return $("html, body").animate({
        scrollTop: $(e).offset().top + 1
    }, "slow"), !1
});

/* active button on menu */
$(".menu .menu__item a").on("click", function () {
    $(".menu").find(".active").removeClass("active"), $(this).addClass("active")
}); 

/* active button on scroll menu */
$(".menu").singlePageNav({
    speed: 1e3,
    currentClass: "active",
    offset: 80
}); 

/* fixed menu on scroll */
$(window).scroll(function () {
    var e = $(window).scrollTop(),
        o = $("#header");
    e > 0 ? o.addClass("nav-scroll") : o.removeClass("nav-scroll")
});

/*--------- Number counting ---------*/
var a = 0;
$(window).scroll(function () {
    var e = $(".facts").offset().top - window.innerHeight;
    0 == a && $(window).scrollTop() > e && ($(".counter").each(function () {
        var e = $(this),
            o = e.attr("data-count");
        $({
            countNum: e.text()
        }).animate({
            countNum: o
        }, {
            duration: 2e3,
            easing: "swing",
            step: function () {
                e.text(Math.floor(this.countNum))
            },
            complete: function () {
                e.text(this.countNum)
            }
        })
    }), a = 1)
});

window.matchMedia("(max-width: 823px)").matches && $(".hamburger, #header .menu .menu__item a").on("click", function (e) {
    $(".hamburger").toggleClass("is-active"), $(".menu").toggleClass("open"), e.preventDefault()
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaW5pdFByZUxvYWRlciIsImpRdWVyeSIsImRlbGF5IiwiZmFkZU91dCIsIndpbmRvdyIsIm9uIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzbGljayIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiZG90cyIsImluZmluaXRlIiwiY3NzRWFzZSIsIm1vYmlsZUZpcnN0IiwiYXJyb3dzIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInNwZWVkIiwiV09XIiwiaW5pdCIsInRoZV9pZCIsInRoaXMiLCJhdHRyIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsImZpbmQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwic2luZ2xlUGFnZU5hdiIsImN1cnJlbnRDbGFzcyIsInNjcm9sbCIsImJvZHlTY3JvbGwiLCJtZW51IiwiYSIsIm9Ub3AiLCJpbm5lckhlaWdodCIsImVhY2giLCIkdGhpcyIsImNvdW50VG8iLCJjb3VudE51bSIsInRleHQiLCJkdXJhdGlvbiIsImVhc2luZyIsInN0ZXAiLCJNYXRoIiwiZmxvb3IiLCJjb21wbGV0ZSIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiZSIsInRvZ2dsZUNsYXNzIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiJBQUNBLFFBQVNBLGlCQUNMQyxPQUFPLHFCQUFxQkMsTUFBTSxLQUFLQyxVQUUzQ0YsT0FBT0csUUFBUUMsR0FBRyxPQUFRLFdBQ3RCLFlBQ0FMLG1CQUtKTSxFQUFFQyxVQUFVQyxNQUFNLFdBQ2RGLEVBQUUsV0FBV0csT0FDVEMsYUFBYyxFQUNkQyxlQUFnQixFQUNoQkMsTUFBTSxFQUNOQyxVQUFVLEVBQ1ZDLFFBQVMsU0FDVEMsYUFBYSxFQUNiQyxRQUFRLEVBRVJDLGFBRUlDLFdBQVksS0FDWkMsVUFDSVQsYUFBYyxFQUNkQyxlQUFnQixFQUNoQkUsVUFBVSxLQUtkSyxXQUFZLElBQ1pDLFVBQ0lULGFBQWMsRUFDZEMsZUFBZ0IsRUFDaEJDLE1BQU0sS0FLVk0sV0FBWSxJQUNaUixhQUFjLEVBQ2RDLGVBQWdCLEVBQ2hCQyxNQUFNLFFBTWxCTixFQUFFQyxVQUFVQyxNQUFNLFdBQ2RGLEVBQUUsa0JBQWtCRyxPQUNoQk8sUUFBUSxFQUNSTixhQUFjLEVBQ2RDLGVBQWdCLEVBQ2hCQyxNQUFNLEVBQ05DLFVBQVUsRUFDVkMsUUFBUyxTQUNUTSxNQUFPLElBRVBILGFBRUlDLFdBQVksS0FDWkMsVUFDSVQsYUFBYyxFQUNkQyxlQUFnQixFQUNoQkUsVUFBVSxLQUtkSyxXQUFZLElBQ1pDLFVBQ0lULGFBQWMsRUFDZEMsZUFBZ0IsRUFDaEJDLE1BQU0sS0FLVk0sV0FBWSxJQUNaUixhQUFjLEVBQ2RDLGVBQWdCLEVBQ2hCQyxNQUFNLFNBT2xCLEdBQUlTLE1BQU1DLE9BSVZoQixFQUFFLGFBQWFELEdBQUcsUUFBUyxXQUN2QixZQUNBLElBQUlrQixHQUFTakIsRUFBRWtCLE1BQU1DLEtBQUssT0FNMUIsT0FMQW5CLEdBQUUsY0FBY29CLFNBQ1JDLFVBQVdyQixFQUFFaUIsR0FBUUssU0FBU0MsSUFBTSxHQUV4QyxTQUVHLElBSVh2QixFQUFFLHVCQUF1QkQsR0FBRyxRQUFTLFdBQ2pDQyxFQUFFLFNBQ0d3QixLQUFLLFdBQ0xDLFlBQVksVUFDakJ6QixFQUFFa0IsTUFBTVEsU0FBUyxZQUlyQjFCLEVBQUUsU0FBUzJCLGVBQ1BiLE1BQU8sSUFDUGMsYUFBYyxTQUNkTixPQUFRLEtBSVp0QixFQUFFRixRQUFRK0IsT0FBTyxXQUNiLEdBQUlDLEdBQWE5QixFQUFFRixRQUFRdUIsWUFDdkJVLEVBQU8vQixFQUFFLFVBQ1Q4QixHQUFhLEVBQ2JDLEVBQUtMLFNBQVMsY0FFZEssRUFBS04sWUFBWSxlQU16QixJQUFJTyxHQUFJLENBQ1JoQyxHQUFFRixRQUFRK0IsT0FBTyxXQUViLEdBQUlJLEdBQU9qQyxFQUFFLFVBQVVzQixTQUFTQyxJQUFNekIsT0FBT29DLFdBQ3BDLElBQUxGLEdBQVVoQyxFQUFFRixRQUFRdUIsWUFBY1ksSUFDbENqQyxFQUFFLFlBQVltQyxLQUFLLFdBQ2YsR0FBSUMsR0FBUXBDLEVBQUVrQixNQUNWbUIsRUFBVUQsRUFBTWpCLEtBQUssYUFDekJuQixJQUNJc0MsU0FBVUYsRUFBTUcsU0FDakJuQixTQUNLa0IsU0FBVUQsSUFJVkcsU0FBVSxJQUNWQyxPQUFRLFFBQ1JDLEtBQU0sV0FDRk4sRUFBTUcsS0FBS0ksS0FBS0MsTUFBTTFCLEtBQUtvQixZQUUvQk8sU0FBVSxXQUNOVCxFQUFNRyxLQUFLckIsS0FBS29CLGVBSWhDTixFQUFJLEtBS1JsQyxPQUFPZ0QsV0FBVyxzQkFBc0JDLFNBQ3hDL0MsRUFBRSwyQ0FBMkNELEdBQUcsUUFBUyxTQUFVaUQsR0FDL0RoRCxFQUFFLGNBQWNpRCxZQUFZLGFBQzVCakQsRUFBRSxTQUFTaUQsWUFBWSxRQUN2QkQsRUFBRUUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tIFByZUxvYWRlciBpbml0IC0tLS0tLS0tLSovXG5mdW5jdGlvbiBpbml0UHJlTG9hZGVyKCkge1xuICAgIGpRdWVyeSgnLmxvYWRlci1jb250YWluZXInKS5kZWxheSg0MDApLmZhZGVPdXQoKTtcbn1cbmpRdWVyeSh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGluaXRQcmVMb2FkZXIoKTtcbn0pO1xuXG5cbi8qLS0tLS0tLS0tIEhlYWRlciBzbGlkZXIgLS0tLS0tLS0tKi9cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuc2xpZGVyJykuc2xpY2soe1xuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxuICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcblxuICAgICAgICByZXNwb25zaXZlOiBbe1xuXG4gICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LCB7XG5cbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LCB7XG5cbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDI1MCxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgZG90czogZmFsc2VcbiAgICAgICAgfV1cbiAgICB9KTtcbn0pO1xuXG4vKi0tLS0tLS0tLSBUZXN0aW1vbmlhbHMgc2xpZGVyIC0tLS0tLS0tLSovXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnRlc3RpbS1zbGlkZXInKS5zbGljayh7XG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgY3NzRWFzZTogJ2xpbmVhcicsXG4gICAgICAgIHNwZWVkOiAxMDAwLFxuICAgICAgICAvLyBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgcmVzcG9uc2l2ZTogW3tcblxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSwge1xuXG4gICAgICAgICAgICBicmVha3BvaW50OiA2MDAsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSwge1xuXG4gICAgICAgICAgICBicmVha3BvaW50OiAzMDAsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgIGRvdHM6IHRydWVcbiAgICAgICAgICAgIC8vIHNldHRpbmdzOiBcInVuc2xpY2tcIiAvLyBkZXN0cm95cyBzbGlja1xuICAgICAgICB9XVxuICAgIH0pO1xufSk7XG5cbi8qLS0tLS0tLS0tIEFuaW1hdGlvbnMgb24gc2Nyb2xsIC0tLS0tLS0tLSovXG5uZXcgV09XKCkuaW5pdCgpO1xuXG5cbi8qLS0tLS0tLS0tIE1lbnUgU2Nyb2xsZXIgLS0tLS0tLS0tKi9cbiQoXCIuc2Nyb2xsZXJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgdmFyIHRoZV9pZCA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XG4gICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQodGhlX2lkKS5vZmZzZXQoKS50b3AgKyAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2xvd1wiXG4gICAgKTtcbiAgICByZXR1cm4gZmFsc2U7XG59KTtcblxuLyogYWN0aXZlIGJ1dHRvbiBvbiBtZW51ICovXG4kKFwiLm1lbnUgLm1lbnVfX2l0ZW0gYVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiLm1lbnVcIilcbiAgICAgICAgLmZpbmQoXCIuYWN0aXZlXCIpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xufSk7XG5cbi8qIGFjdGl2ZSBidXR0b24gb24gc2Nyb2xsIG1lbnUgKi9cbiQoXCIubWVudVwiKS5zaW5nbGVQYWdlTmF2KHtcbiAgICBzcGVlZDogMWUzLFxuICAgIGN1cnJlbnRDbGFzczogXCJhY3RpdmVcIixcbiAgICBvZmZzZXQ6IDgwXG59KTtcblxuLyogZml4ZWQgbWVudSBvbiBzY3JvbGwgKi9cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgIHZhciBib2R5U2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpLFxuICAgICAgICBtZW51ID0gJChcIiNoZWFkZXJcIik7XG4gICAgaWYgKGJvZHlTY3JvbGwgPiAwKSB7XG4gICAgICAgIG1lbnUuYWRkQ2xhc3MoXCJuYXYtc2Nyb2xsXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbnUucmVtb3ZlQ2xhc3MoXCJuYXYtc2Nyb2xsXCIpO1xuICAgIH1cbn0pO1xuXG5cbi8qLS0tLS0tLS0tIE51bWJlciBjb3VudGluZyAtLS0tLS0tLS0qL1xudmFyIGEgPSAwO1xuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgb1RvcCA9ICQoJy5mYWN0cycpLm9mZnNldCgpLnRvcCAtIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBpZiAoYSA9PSAwICYmICQod2luZG93KS5zY3JvbGxUb3AoKSA+IG9Ub3ApIHtcbiAgICAgICAgJCgnLmNvdW50ZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgY291bnRUbyA9ICR0aGlzLmF0dHIoJ2RhdGEtY291bnQnKTtcbiAgICAgICAgICAgICQoe1xuICAgICAgICAgICAgICAgIGNvdW50TnVtOiAkdGhpcy50ZXh0KClcbiAgICAgICAgICAgIH0pLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBjb3VudE51bTogY291bnRUb1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdzd2luZycsXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLnRleHQoTWF0aC5mbG9vcih0aGlzLmNvdW50TnVtKSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkdGhpcy50ZXh0KHRoaXMuY291bnROdW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBhID0gMTtcbiAgICB9XG59KTtcblxuXG5pZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDgyM3B4KScpLm1hdGNoZXMpIHtcbiAgICAkKCcuaGFtYnVyZ2VyLCAjaGVhZGVyIC5tZW51IC5tZW51X19pdGVtIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAkKCcuaGFtYnVyZ2VyJykudG9nZ2xlQ2xhc3MoXCJpcy1hY3RpdmVcIik7XG4gICAgICAgICQoJy5tZW51JykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xufSJdfQ==