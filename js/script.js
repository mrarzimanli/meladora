$(window).on('load', function () {
    // Preloader
    $('.preloader img').fadeOut();
    $('.preloader').delay(400).fadeOut();

    // Scroll top button
    $offset = $("#main-header").height();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200)
            $('#btn-scroll-top').fadeIn(200);
        else
            $('#btn-scroll-top').fadeOut(200);

        if ($(this).scrollTop() > $offset + 50) {
            $("#main-header").addClass("fixed");
            if ($("#main-header").hasClass('page-header'))
                $('body').css("padding-top", $offset + "px");
        }
        else {
            $("#main-header").removeClass("fixed");
            if ($("#main-header").hasClass('page-header'))
                $('body').css("padding-top", 0);
        }
    });

});

$(function () {
    // Scroll top button
    $('#btn-scroll-top').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 0);
    });

    // Lang list
    $('.lang-list button').click(function () {
        $(this).stop(true, false, true).toggleClass('active');
        $('.lang-dropdown').stop(true, false, true).toggleClass('active');
    });


    // Search
    $('.btn-search, .btn-search-close').click(function () {
        $('.search-menu-full').toggleClass('active');
    });

    // Mobile menu
    $("#main-header .menu-toggle, .mobile-menu a").click(function () {
        $(".mobile-menu").toggleClass("active");
    });

    $(".mobile-menu").click(function (event) {
        if ($(event.target).is(this)) {
            $(this).removeClass("active")
        }
    });

    // Category
    const categorySwiper = new Swiper(".categorySwiper", {
        lazy: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 50
            }
        },
        autoplay: {
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            delay: 2000,
        },
    });

    // Blogs slider
    const blogsSwiper = new Swiper(".blogsSwiper", {
        lazy: true,
        loop: false,
        spaceBetween: 30,
        autoplay: {
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // Gallery slider
    const gallerySwiper = new Swiper(".gallerySwiper", {
        lazy: true,
        loop: false,
        autoplay: {
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 50
            }
        }
    });

    // Gallery Fancybox
    Fancybox.bind("[data-fancybox='gallery-image']", {
        // Your options go here
    });
    Fancybox.bind("[data-fancybox='gallery-video']", {
        // Your options go here
    });
})