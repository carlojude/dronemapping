AppName.Modules.ThemeModule = (function() {
    //Dependencies
    var core = AppName.Core;

    //////////////////////
    // Private Methods //
    ////////////////////
    var clicksRec = 0;
    var clicksCir = 0;
    var clicksLine = 0;
    var clicks = 0;

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

            if ($('.rectangle').css('display') == 'block') {
                $('.rectangle').css('display', 'none');
                $('#square').css('background-color', '#f4f4f4');
                clicksRec--;
            }
            if ($('.circle').css('display') == 'block') {
                $('.circle').css('display', 'none');
                $('#circle').css('background-color', '#f4f4f4');
                clicksCir--;
            }
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

            if ($('.rectangle').css('display') == 'block') {
                $('.rectangle').css('display', 'none');
                $('#square').css('background-color', '#f4f4f4');
                clicksRec--;
            }
            if ($('.circle').css('display') == 'block') {
                $('.circle').css('display', 'none');
                $('#circle').css('background-color', '#f4f4f4');
                clicksCir--;
            }
            if ($('#useImg1').css('display') == 'block') {
                $('#useImg1').toggleClass('hidden');
                $('#hideImg1').toggleClass('hidden');
            }
            if ($('#hideImg1').css('display') == 'block') {
                $('#hideImg1').toggleClass('hidden');
                $('#useImg1').toggleClass('hidden');
            }
        });
    }

    var square = function() {
        $('#square').click(function() {


            if (clicks == 0) {
                $('#square').css('background-color', 'gray');
                initDraw(document.getElementById('canvas'));

                function initDraw(canvas) {
                    var mouse = {
                        x: 0,
                        y: 0,
                        startX: 0,
                        startY: 0
                    };
                    var element = null;

                    function setMousePosition(e) {
                        var ev = e || window.event; //Moz || IE
                        if (ev.pageX) { //Moz
                            mouse.x = ev.pageX;
                            mouse.y = ev.pageY;
                        } else if (ev.clientX) { //IE
                            mouse.x = ev.clientX;
                            mouse.y = ev.clientY;
                        }
                    };

                    canvas.onmousemove = function(e) {
                        setMousePosition(e);
                        if (element !== null) {
                            element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
                            element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
                            element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
                            element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
                        }
                    }

                    canvas.onmousedown = function(e) {
                        if (element !== null) {
                            element = null;
                            canvas.style.cursor = "crosshair";
                            console.log("finsihed.");
                        } else {
                            console.log("begun.");
                            mouse.startX = mouse.x;
                            mouse.startY = mouse.y;
                            element = document.createElement('div');
                            element.className = 'rectangle';
                            element.id = 'resizable';
                            element.style.left = mouse.x + 'px';
                            element.style.top = mouse.y + 'px';
                            canvas.appendChild(element)
                            canvas.style.cursor = "crosshair";
                        }
                    }
                }
                clicks++;
            } else {
                $('#square').css('background-color', '#F4F4F4');
                $('.canvas').css('cursor', 'default');
                $('.canvas').removeAttr('id');
                clicks--;
            }
        });
    }

    var circle = function() {
        $('#circle').click(function() {
            initDraw(document.getElementById('canvas'));

            function initDraw(canvas) {

                canvas.width = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;

                function setMousePosition(e) {
                    var ev = e || window.event; //Moz || IE
                    if (ev.pageX) { //Moz
                        mouse.x = ev.pageX;
                        mouse.y = ev.pageY;
                    } else if (ev.clientX) { //IE
                        mouse.x = ev.clientX;
                        mouse.y = ev.clientY;
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
        }, 3000);
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

    var code = function() {

        $('#code').val(makeid());

        function makeid() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < 5; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }
    }

    var inputFile = function() {
        $('#upload').change(function() {
            var i = $(this).next('label').clone();
            var file = $('#upload')[0].files[0];
            var fileName = $('#upload')[0].files[0].name;
            var fileType = file["type"];
            var validImageTypes = ["image/gif", "image/jpeg", "image/png"];

            if ($.inArray(fileType, validImageTypes) < 0) {
                $('#uploadBtn').attr("disabled", true);
                $(this).next('label').text("Invalid File Type");
                $('#forUpload').css("background-color", "#cc0000");
            } else {
                $('#uploadBtn').attr("disabled", false);
                $('#forUpload').css("background-color", "#ffa800");
                if (this.files && this.files.length > 1) {
                    $(this).next('label').text(this.files.length + " files selected");
                } else {
                    $(this).next('label').text(fileName);
                }
            }
        });
    }


    var openImage = function() {
        $(':button').click(function() {
            var img = $('img[id="drag' + this.id + '"');
            open = $('button[id="' + this.id + '"');
            openId = open.attr('id');
            var close = $('button[id="hideImg' + this.id + '"');
            console.log(openId);

            if (open.text() == 'Open') {
                img.fadeIn();
                img.addClass('zoom');

                $('[id="overlay' + this.id + '"').css({
                    "background-color": "rgba(0, 0, 0, 0.7)"
                });
                wheelzoom(document.querySelector('img.zoom'));

                $('.canvas').attr("id", "canvas");

                if (open.css('display') == 'inline-block') {
                    open.toggleClass('hidden');
                    close.toggleClass('hidden');
                }
            } else {
                $('img[id="drag' + this.id + '"').fadeOut();
                $('img[id="drag' + this.id + '"').removeClass('zoom');
                $('.overlay').css({
                    "background-color": "transparent"
                });
                document.querySelector('img').dispatchEvent(new CustomEvent('wheelzoom.destroy'));

                $('.canvas').removeAttr('id');

                if ($('.rectangle').css('display') == 'block') {
                    $('.rectangle').css('display', 'none');
                    $('#square').css('background-color', '#f4f4f4');
                    clicksRec--;
                }
                if ($('.circle').css('display') == 'block') {
                    $('.circle').css('display', 'none');
                    $('#circle').css('background-color', '#f4f4f4');
                    clicksCir--;
                }
                if ($('button[id="hideImg' + this.id + '"').css('display') == 'inline-block') {
                    $('button[id="' + this.id + '"').toggleClass('hidden');
                    $('button[id="hideImg' + this.id + '"').toggleClass('hidden');
                }
            }
        });
    }

    var closeImage = function() {
        $(':button').click(function() {
            var close = $('button[id="' + this.id + openId + '"');

            if (close.text() == 'Close') {
                $('img[id="drag' + openId + '"').fadeOut();
                $('img[id="drag' + openId + '"').removeClass('zoom');
                $('.overlay').css({
                    "background-color": "transparent"
                });
                document.querySelector('img').dispatchEvent(new CustomEvent('wheelzoom.destroy'));

                $('.canvas').removeAttr('id');

                if ($('.rectangle').css('display') == 'block') {
                    $('.rectangle').css('display', 'none');
                    $('#square').css('background-color', '#f4f4f4');
                    clicksRec--;
                }
                if ($('.circle').css('display') == 'block') {
                    $('.circle').css('display', 'none');
                    $('#circle').css('background-color', '#f4f4f4');
                    clicksCir--;
                }
                if ($('button[id="' + this.id + openId + '"').css('display') == 'inline-block') {
                    $('button[id="' + open + '"').toggleClass('hidden');
                    $('button[id="' + this.id + openId + '"').toggleClass('hidden');
                }
            }
        });
    }

    var showShapes = function() {

        $('#square').click(function() {
            $('.rectangle').toggle();
            if (clicksRec == 0) {
                $('#square').css('background-color', 'gray');
                clicksRec++;
            } else {
                $('#square').css('background-color', '#f4f4f4');
                clicksRec--;
            }
        });

        $('#circle').click(function() {
            $('.circle').toggle();
            if (clicksCir == 0) {
                $('#circle').css('background-color', 'gray');
                clicksCir++;
            } else {
                $('#circle').css('background-color', '#f4f4f4');
                clicksCir--;
            }
        });

        $('#line').click(function() {
            $('.line').toggle();
            if (clicksLine == 0) {
                $('#line').css('background-color', 'gray');
                clicksLine++;
            } else {
                $('#line').css('background-color', '#f4f4f4');
                clicksLine--;
            }
        });
    }


    var controllers = function() {
        $('.rectangle').attr('id', 'draggable');
        $('.rectangle').draggable();
        $('.rectangle').attr('id', 'resizable');
        $('.rectangle').resizable();

        $('.circle').attr('id', 'draggable');
        $('.circle').draggable();
        $('.circle').attr('id', 'resizable');
        $('.circle').resizable();

        $('.line').attr('id', 'draggable');
        $('.line').draggable();
        $('.line').attr('id', 'resizable');
        $('.line').resizable();

        var rotation = 0;

        jQuery.fn.rotate = function(degrees) {
            $(this).css({
                '-webkit-transform': 'rotate(' + degrees + 'deg)',
                '-moz-transform': 'rotate(' + degrees + 'deg)',
                '-ms-transform': 'rotate(' + degrees + 'deg)',
                'transform': 'rotate(' + degrees + 'deg)'
            });
        };

        $('#rotateRight').click(function() {
            rotation += 5;
            $('.shape').rotate(rotation);
        });

        $('#rotateLeft').click(function() {
            rotation -= 5;
            $('.shape').rotate(rotation);
        });

        $('#rotateRightCirc').click(function() {
            rotation += 5;
            $('.circle').rotate(rotation);
        });

        $('#rotateLeftCirc').click(function() {
            rotation -= 5;
            $('.circle').rotate(rotation);
        });
    }

    var sizeListener = function() {
            var ppmWidth = 0;
            var ppmHeight = 0;
            var elevation = 0;

            (function($) {
                var rectangleHeight = 0;
                var rectangleWidth = 0;
                $('#elevation').change(function() {
                    elevation = $('#elevation').val();
                    console.log(elevation);

                    if (elevation == 2) {
                        ppmWidth = 419.0476;
                        ppmHeight = 424.2424;
                    }
                    if (elevation == 3) {
                        pmWidth = 205.3410;
                        ppmHeight = 208.1321;
                    }
                    if (elevation == 4) {
                        pmWidth = 200;
                        ppmHeight = 206.92;
                    }
                    if (elevation == 5) {
                        pmWidth = 161.9048;
                        ppmHeight = 148.1481;
                    }
                    if (elevation == 6) {
                        pmWidth = 133.3333;
                        ppmHeight = 161.6161;
                    }
                    if (elevation == 7) {
                        pmWidth = 123.8095;
                        ppmHeight = 121.2121;
                    }
                    if (elevation == 8) {
                        ppmWidth = 100;
                        ppmHeight = 103.46;
                    }
                    if (elevation == 10) {
                        ppmWidth = 80.9524;
                        ppmHeight = 74.0741;
                    }
                    if (elevation == 12) {
                        pmWidth = 66.6665;
                        ppmHeight = 68.9733;
                    }
                    if (elevation == 16) {
                        ppmWidth = 50.0125;
                        ppmHeight = 51.73;
                    }
                    if (elevation == 24) {
                        pmWidth = 33.3333;
                        ppmHeight = 40.4041;
                    }
                    if (elevation == 32) {
                        ppmWidth = 25;
                        ppmHeight = 25.865;
                    }
                });

                $(".rectangle").on("mresize", function() {
                    rectangleHeight = $(this).height();
                    rectangleWidth = $(this).width();
                    console.log("HEIGHT: " + rectangleHeight + "WIDTH: " + rectangleWidth);

                    var areaRec = 0;

                    var finalRecWidth = rectangleWidth / ppmWidth;
                    var finalRecHeight = rectangleHeight / ppmHeight;

                    areaRec = finalRecWidth * finalRecHeight;
                    var squared = "2";
                    $('#areaValue').text(areaRec.toFixed(2));
                    // $('#areaTotal').text(areaRec.toFixed(3));
                    console.log(areaRec.toFixed(2));
                }).each(function() {
                    $(this).data("mresize").throttle = 0;
                });

                $(".circle").on("mresize", function() {
                    var circleHeight = $(this).height();
                    var circleWidth = $(this).width();

                    var areaCir = 0;

                    var finalCirWidth = (circleWidth / 2) / ppmWidth;
                    var finalCirHeight = (circleHeight / 2) / ppmHeight;

                    areaCir = 3.14 * finalCirWidth * finalCirHeight;
                    var squared = "2";
                    $('#areaValueCirc').text(areaCir.toFixed(2));
                }).each(function() {
                    $(this).data("mresize").throttle = 0;
                });

                $(".line").on("mresize", function() {
                    var lineHeight = $(this).height();
                    var lineWidth = $(this).width();

                    var finalLineWidth = lineWidth / ppmWidth;
                    var finalLineHeight = lineHeight / ppmHeight;


                    $('#l-height').text(finalLineHeight.toFixed(2) + "m");
                    $('#l-width').text(finalLineWidth.toFixed(2) + "m");
                }).each(function() {
                    $(this).data("mresize").throttle = 0;
                });
            })(jQuery);
        }
        /////////////////////
        // Public Methods //
        ///////////////////
    var init = function() {
        matchHeight();
        screenLoader();
        owlCarouselBottom();
        // useImage();
        // closeImg();
        popover();
        focus();
        menu();
        verifyPassword();
        code();
        inputFile();
        // openImage();
        // closeImage();
        showShapes();
        controllers();
        sizeListener();
    };

    var resize = function() {
        matchHeight();
    };

    return {
        init: init,
        resize: resize
    };
})();