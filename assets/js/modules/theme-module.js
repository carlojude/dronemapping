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
        var clicks = 0;
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
            if ($('img[id="drag' + this.id + '"').css('display') == 'none') {
                $('img[id="drag' + this.id + '"').fadeIn();
                $('img[id="drag' + this.id + '"').addClass('zoom');

                $('[id="overlay' + this.id + '"').css({
                    "background-color": "rgba(0, 0, 0, 0.7)"
                });
                wheelzoom(document.querySelector('img.zoom'));

                $('.canvas').attr("id", "canvas");

                $('button[id="hideImg' + this.id + '"').toggleClass('hidden');
                $('button[id="' + this.id + '"').toggleClass('hidden');
            } else {
                $('img[id="drag' + this.id + '"').fadeOut();
                $('img[id="drag' + this.id + '"').removeClass('zoom');
                $('.overlay').css({
                    "background-color": "transparent"
                });

                $('.canvas').removeAttr('id');

                $('.rectangle').remove();
                $('.circle').remove();
                $('button[id="' + this.id + '"').toggleClass('hidden');
                $('button[id="hideImg' + this.id + '"').toggleClass('hidden');
            }
            console.log(this.id);
        });
    }

    var showRectangle = function() {
        var clicks = 0;
        $('#square').click(function() {
            if (clicks == 0) {
                $('#square').css('background-color', 'gray');
                $('.rectangle').toggleClass('hidden');
                clicks++;
            } else {
                $('#square').css('background-color', '#F4F4F4');
                $('.rectangle').toggleClass('hidden');
                clicks--;
            }


        });
    }

    var controllers = function() {
        $('.rectangle').attr('id', 'draggable');
        $('.rectangle').draggable();
        $('.rectangle').attr('id', 'resizable');
        $('.rectangle').resizable();

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
            $('.rectangle').rotate(rotation);
        });

        $('#rotateLeft').click(function() {
            rotation -= 5;
            $('.rectangle').rotate(rotation);
        });

        (function(e) {
            function t() {
                var e = document.createElement("p");
                var t = false;
                if (e.addEventListener) e.addEventListener("DOMAttrModified", function() { t = true }, false);
                else if (e.attachEvent) e.attachEvent("onDOMAttrModified", function() { t = true });
                else return false;
                e.setAttribute("id", "target");
                return t
            }

            function n(t, n) {
                if (t) {
                    var r = this.data("attr-old-value");
                    if (n.attributeName.indexOf("style") >= 0) {
                        if (!r["style"]) r["style"] = {};
                        var i = n.attributeName.split(".");
                        n.attributeName = i[0];
                        n.oldValue = r["style"][i[1]];
                        n.newValue = i[1] + ":" + this.prop("style")[e.camelCase(i[1])];
                        r["style"][i[1]] = n.newValue
                    } else {
                        n.oldValue = r[n.attributeName];
                        n.newValue = this.attr(n.attributeName);
                        r[n.attributeName] = n.newValue
                    }
                    this.data("attr-old-value", r)
                }
            }
            var r = window.MutationObserver || window.WebKitMutationObserver;
            e.fn.attrchange = function(i) {
                var s = { trackValues: false, callback: e.noop };
                if (typeof i === "function") { s.callback = i } else { e.extend(s, i) }
                if (s.trackValues) {
                    e(this).each(function(t, n) {
                        var r = {};
                        for (var i, t = 0, s = n.attributes, o = s.length; t < o; t++) {
                            i = s.item(t);
                            r[i.nodeName] = i.value
                        }
                        e(this).data("attr-old-value", r)
                    })
                }
                if (r) {
                    var o = { subtree: false, attributes: true, attributeOldValue: s.trackValues };
                    var u = new r(function(t) {
                        t.forEach(function(t) {
                            var n = t.target;
                            if (s.trackValues) { t.newValue = e(n).attr(t.attributeName) }
                            s.callback.call(n, t)
                        })
                    });
                    return this.each(function() { u.observe(this, o) })
                } else if (t()) {
                    return this.on("DOMAttrModified", function(e) {
                        if (e.originalEvent) e = e.originalEvent;
                        e.attributeName = e.attrName;
                        e.oldValue = e.prevValue;
                        s.callback.call(this, e)
                    })
                } else if ("onpropertychange" in document.body) {
                    return this.on("propertychange", function(t) {
                        t.attributeName = window.event.propertyName;
                        n.call(e(this), s.trackValues, t);
                        s.callback.call(this, t)
                    })
                }
                return this
            }
        })(jQuery)
    }

    var computation = function() {



        var imgHeight = 768; //image file height
        var imgWidth = 1024; //image file width
        var focalLength = 25;
        var sensorHeight = 4.56;
        var distance = 1; //distance of drone from the ground
        var actualHeight = 1000; //height of assumed reference
        var objectHeight = 0; //height of object in canvas
        var pixelPerMetric = 0; //for every __ px there will be __ inch

        objectHeight = (focalLength * actualHeight * imgHeight) / (distance * sensorHeight);
        pixelPerMetric = objectHeight / actualHeight;

        $(function() {
            var prevHeight = $('#test').height();
            $('.rectangle').attrchange({
                callback: function(e) {
                    var curHeight = $(this).height();
                    if (prevHeight !== curHeight) {
                        prevHeight = curHeight;
                    }
                }
            }).resizable();
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
        // square();
        // circle();
        closeImg();
        popover();
        focus();
        menu();
        verifyPassword();
        code();
        inputFile();
        // openImage();
        showRectangle();
        controllers();
        computation();
    };

    var resize = function() {
        matchHeight();
    };

    return {
        init: init,
        resize: resize
    };
})();