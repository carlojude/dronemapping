AppName.Modules.ThemeModule = (function() {
    //Dependencies
    var core = AppName.Core;

    //////////////////////
    // Private Methods //
    ////////////////////

    var matchHeight = function() {
        $.fn.equalHeights = function() {
            var max_height = 0;
            $(this).each(function() {
                max_height = Math.max($(this).height(), max_height);
            });
            $(this).each(function() {
                $(this).height(max_height);
            });
        };
        $('.match-height').equalHeights();
    }

    var owlCarouselBottom = function() {
        var owl = $('.owl-carousel');
        if (owl.length) {
            owl.owlCarousel({
                navigation: true,
                slideSpeed: 300,
                paginationSpeed: 400,
                items: 3,
                itemsDesktop: false,
                itemsDesktopSmall: false,
                itemsTablet: false,
                itemsMobile: false,
                loop: true,
                autoplay: true,
                autoplayTimeout: 6000,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 3
                    }
                }
            });
        }
        $('.slider-right').click(function() {
            owl.trigger('next.owl.carousel');
        })
        $('.slider-left').click(function() {
            owl.trigger('prev.owl.carousel', [300]);
        });
    }

    var owlCarouselHomeBanner = function() {
        var bannerMain = $('.banner-main');
        if (bannerMain.length) {
            bannerMain.owlCarousel({
                navigation: true,
                slideSpeed: 300,
                paginationSpeed: 400,
                items: 2,
                itemsDesktop: false,
                itemsDesktopSmall: false,
                itemsTablet: false,
                itemsMobile: false,
                loop: true,
                autoplay: true,
                autoplayTimeout: 5000
            });
        }
        $('.banner-arrow .slider-right').click(function() {
            bannerMain.trigger('next.owl.carousel');
        })
        $('.banner-arrow .slider-left').click(function() {
            bannerMain.trigger('prev.owl.carousel', [300]);
        });

        $('#toggle').click(function() {
            $(this).toggleClass('active');
            $('#overlay').toggleClass('open');
        });
    };

    var setCookies = function() {
        $('#closeCookie').click(function(e) {
            e.preventDefault();
            $('.cookies').remove();
            $('procubedServiceCookies', 'ProcubedServiceCookies', { expires: 365 });
        });
        if ($('procubedServiceCookies')) {
            $('.cookies').remove();
        }
    }

    var useImage = function() {

        $('#useImg1').click(function() {
            $('#drag1').fadeIn();
            $('#drag1').addClass('zoom');
            $('.overlay').css({
                "background-color": "rgba(0, 0, 0, 0.7)"
            });
            wheelzoom(document.querySelector('img.zoom'));

            $('.canvas').attr("id", "canvas");

            $('#hideImg1').toggleClass('hidden');
            $('#useImg1').toggleClass('hidden');
        });

        $('#hideImg1').click(function() {
            $('#drag1').fadeOut();
            $('#drag1').removeClass('zoom');
            $('.overlay').css({
                "background-color": "transparent"
            });

            $('.canvas').removeAttr('id');

            $('.rectangle').remove();
            $('.circle').remove();
            $('#useImg1').toggleClass('hidden');
            $('#hideImg1').toggleClass('hidden');
        });
    }

    var closeImg = function() {
        $('#closeImg').click(function() {
            $('#drag1').fadeOut();
            $('#drag1').removeClass('zoom');
            $('.overlay').css({
                "background-color": "transparent"
            });
            document.querySelector('img').dispatchEvent(new CustomEvent('wheelzoom.destroy'));

            $('.canvas').removeAttr('id');

            $('.rectangle').remove();
            $('.circle').remove();
            $('#useImg1').toggleClass('hidden');
            $('#hideImg1').toggleClass('hidden');
        });
    }

    var removeBox = function() {
        $('#removeBox').click(function() {
            $('.rectangle').remove();
            $('.circle').remove();
        });
    }

    var square = function() {
        $('#square').click(function() {
            initDraw(document.getElementById('canvas'));

            function initDraw(canvas) {
                function setMousePosition(e) {
                    var ev = e || window.event; //Moz || IE
                    if (ev.pageX) { //Moz
                        mouse.x = ev.pageX + window.pageXOffset;
                        mouse.y = ev.pageY + window.pageYOffset;
                    } else if (ev.clientX) { //IE
                        mouse.x = ev.clientX + document.body.scrollLeft;
                        mouse.y = ev.clientY + document.body.scrollTop;
                    }
                };
                var mouse = {
                    x: 0,
                    y: 0,
                    startX: 0,
                    startY: 0
                };
                var element = null;

                canvas.onmousemove = function(e) {
                    setMousePosition(e);
                    if (element !== null) {
                        element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
                        element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
                        element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
                        element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
                    }
                }

                canvas.onclick = function(e) {
                    if (element !== null) {
                        element = null;
                        canvas.style.cursor = "crosshair";
                        console.log("finsihed.");
                    } else {
                        console.log("begun.");
                        mouse.startX = mouse.x;
                        mouse.startY = mouse.y;
                        element = document.createElement('div');
                        element.className = 'rectangle'
                        element.style.left = mouse.x + 'px';
                        element.style.top = mouse.y + 'px';
                        canvas.appendChild(element)
                        canvas.style.cursor = "crosshair";
                    }
                }
            }
        });
    }

    var circle = function() {
        $('#circle').click(function() {
            initDraw(document.getElementById('canvas'));

            function initDraw(canvas) {
                function setMousePosition(e) {
                    var ev = e || window.event; //Moz || IE
                    if (ev.pageX) { //Moz
                        mouse.x = ev.pageX + window.pageXOffset;
                        mouse.y = ev.pageY + window.pageYOffset;
                    } else if (ev.clientX) { //IE
                        mouse.x = ev.clientX + document.body.scrollLeft;
                        mouse.y = ev.clientY + document.body.scrollTop;
                    }
                };
                var mouse = {
                    x: 0,
                    y: 0,
                    startX: 0,
                    startY: 0
                };
                var element = null;

                canvas.onmousemove = function(e) {
                    setMousePosition(e);
                    if (element !== null) {
                        element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
                        element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
                        element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
                        element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
                    }
                }

                canvas.onclick = function(e) {
                    if (element !== null) {
                        element = null;
                        canvas.style.cursor = "crosshair";
                        console.log("finsihed.");
                    } else {
                        console.log("begun.");
                        mouse.startX = mouse.x;
                        mouse.startY = mouse.y;
                        element = document.createElement('div');
                        element.className = 'circle'
                        element.style.left = mouse.x + 'px';
                        element.style.top = mouse.y + 'px';
                        canvas.appendChild(element)
                        canvas.style.cursor = "crosshair";
                    }
                }
            }
        });
    }

    var popover = function() {
        $('[data-toggle=popover]').popover();
    }

    var preloader = function() {
        $(window).load(function() {
            $(".se-pre-con").fadeOut('slow');
        });
    }

    var screenLoader = function() {
        setTimeout(function() {
            $(".se-pre-con").fadeOut('slow');
        }, 5000);
    }

    var focus = function() {
        //focus in
        $(":input").focus(function() {
            $('input[id="' + $(this).attr('id') + '"').css({
                "border-color": "#ffa800"
            });

            if ($(window).width() < 768) {
                $('label[for="' + $(this).attr('id') + '"').css({
                    "top": "10px",
                    "color": "#ffa800",
                    "font-size": "12px"
                });
            } else {
                $('label[for="' + $(this).attr('id') + '"').css({
                    "top": "10px",
                    "color": "#ffa800",
                    "font-size": "14px"
                });
            }
        });
        //foucs out
        $(":input").focusout(function() {
            if ($('input[id="' + $(this).attr('id') + '"').val() != "") {
                $('label[for="' + $(this).attr('id') + '"').css({
                    "top": "10px",
                    "color": "#cecece",
                    "font-size": "12px"
                });
            } else {
                if ($(window).width() < 768) {
                    $('input[id="' + $(this).attr('id') + '"').css({
                        "border-color": "#cecece"
                    });
                    $('label[for="' + $(this).attr('id') + '"').css({
                        "top": "45px",
                        "color": "#cecece",
                        "font-size": "14px"
                    });
                } else {
                    $('input[id="' + $(this).attr('id') + '"').css({
                        "border-color": "#cecece"
                    });
                    $('label[for="' + $(this).attr('id') + '"').css({
                        "top": "45px",
                        "color": "#cecece",
                        "font-size": "18px"
                    });
                }

            }

        });
        //select focus
        $("#industry").focus(function() {
            $('#forIndustry').css({
                "color": "#ffa800"
            });
        });
        $("#industry").focusout(function() {
            $('#forIndustry').css({
                "color": "#cecece"
            });
        });
    }

    var menu = function() {
        $('#btn-menu').click(function() {
            $('#btn-menu').toggleClass('active');
        });
    }

    var verifyPassword = function() {

        $('#confirmPass').keyup(function() {

            if ($('#confirmPass').val() != $('#password').val()) {
                $('#create').attr('disabled', true);
                $('#confirmPass').css("border-color", "red");
            } else {
                $('#create').attr('disabled', false);
            }
        });
    }

    /////////////////////
    // Public Methods //
    ///////////////////
    var init = function() {
        matchHeight();
        screenLoader();
        owlCarouselBottom();
        useImage();
        removeBox();
        square();
        circle();
        closeImg();
        popover();
        focus();
        menu();
        verifyPassword();
    };

    var resize = function() {
        matchHeight();
    };

    return {
        init: init,
        resize: resize
    };
})();