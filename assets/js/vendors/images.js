$(window).load(function() {
    var clicksRec = 0;
    var clicksCir = 0;
    var clicksLine = 0;

    //image1
    $('#useImg1').click(function() {
        var click = 0;
        $('#drag1').fadeIn();
        $('#drag1').addClass('zoom');
        $('.overlay1').css({
            "background-color": "rgba(0, 0, 0, 0.7)"
        });
        wheelzoom(document.querySelector('img.zoom'));

        $('.canvas').attr("id", "canvas");

        if (click == 0) {
            $('#useImg1').toggleClass('hidden');
            $('#hideImg1').toggleClass('hidden');

            //disable other btn
            for (var i = 1; i < 50; i++) {
                $('#useImg' + i).attr('disabled', true);
            }
            click++;
        } else {
            $('#hideImg1').toggleClass('hidden');
            $('#useImg1').toggleClass('hidden');
            for (var k = 1; k < 50; k++) {
                $('#useImg' + k).attr('disabled', false);
            }
            click--;
        }

        //disable other btn
        $('#useImg2').attr('disabled', true);
    });

    $('#hideImg1').click(function() {
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
        if ($('.line').css('display') == 'block') {
            $('.line').css('display', 'none');
            $('#line').css('background-color', '#f4f4f4');
            clicksLine--;
        }
        if ($('#hideImg1').css('display') == 'inline-block') {
            $('#hideImg1').toggleClass('hidden');
            $('#useImg1').toggleClass('hidden');
            for (var k = 1; k < 50; k++) {
                $('#useImg' + k).attr('disabled', false);
            }
        }
    });

    //image2
    $('#useImg2').click(function() {
        var click = 0;
        $('#drag2').fadeIn();
        $('#drag2').addClass('zoom');
        $('.overlay').css({
            "background-color": "rgba(0, 0, 0, 0.7)"
        });
        wheelzoom(document.querySelector('img.zoom'));

        $('.canvas').attr("id", "canvas");

        if (click == 0) {
            $('#useImg2').toggleClass('hidden');
            $('#hideImg2').toggleClass('hidden');

            //disable other btn
            for (var i = 1; i < 50; i++) {
                $('#useImg' + i).attr('disabled', true);
            }
            click++;
        } else {
            $('#hideImg2').toggleClass('hidden');
            $('#useImg2').toggleClass('hidden');
            for (var k = 1; k < 50; k++) {
                $('#useImg' + k).attr('disabled', false);
            }
            click--;
        }
    });

    $('#hideImg2').click(function() {
        document.querySelector('img').dispatchEvent(new CustomEvent('wheelzoom.destroy'));
        $('#drag2').fadeOut();
        $('#drag2').removeClass('zoom');
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
        if ($('.line').css('display') == 'block') {
            $('.line').css('display', 'none');
            $('#line').css('background-color', '#f4f4f4');
            clicksLine--;
        }
        if ($('#hideImg2').css('display') == 'inline-block') {
            $('#hideImg2').toggleClass('hidden');
            $('#useImg2').toggleClass('hidden');
            for (var k = 1; k < 50; k++) {
                $('#useImg' + k).attr('disabled', false);
            }
        }
    });

    //image3
    $('#useImg3').click(function() {
        var click = 0;
        $('#drag3').fadeIn();
        $('#drag3').addClass('zoom');
        $('.overlay').css({
            "background-color": "rgba(0, 0, 0, 0.7)"
        });
        wheelzoom(document.querySelector('img.zoom'));

        $('.canvas').attr("id", "canvas");

        if (click == 0) {
            $('#useImg3').toggleClass('hidden');
            $('#hideImg3').toggleClass('hidden');

            //disable other btn
            for (var i = 1; i < 50; i++) {
                $('#useImg' + i).attr('disabled', true);
            }
            click++;
        } else {
            $('#hideImg3').toggleClass('hidden');
            $('#useImg3').toggleClass('hidden');
            for (var k = 1; k < 50; k++) {
                $('#useImg' + k).attr('disabled', false);
            }
            click--;
        }
    });

    $('#hideImg3').click(function() {
        $('#drag3').fadeOut();
        $('#drag3').removeClass('zoom');
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
        if ($('.line').css('display') == 'block') {
            $('.line').css('display', 'none');
            $('#line').css('background-color', '#f4f4f4');
            clicksLine--;
        }
        if ($('#hideImg3').css('display') == 'inline-block') {
            $('#hideImg3').toggleClass('hidden');
            $('#useImg3').toggleClass('hidden');
            for (var k = 1; k < 50; k++) {
                $('#useImg' + k).attr('disabled', false);
            }
        }
    });

    //image4
    $('#useImg4').click(function() {
        var click = 0;
        $('#drag4').fadeIn();
        $('#drag4').addClass('zoom');
        $('.overlay').css({
            "background-color": "rgba(0, 0, 0, 0.7)"
        });
        wheelzoom(document.querySelector('img.zoom'));

        $('.canvas').attr("id", "canvas");

        if (click == 0) {
            $('#useImg4').toggleClass('hidden');
            $('#hideImg4').toggleClass('hidden');

            //disable other btn
            for (var i = 1; i < 50; i++) {
                $('#useImg' + i).attr('disabled', true);
            }
            click++;
        } else {
            $('#hideImg4').toggleClass('hidden');
            $('#useImg4').toggleClass('hidden');
            for (var k = 1; k < 50; k++) {
                $('#useImg' + k).attr('disabled', false);
            }
            click--;
        }
    });

    $('#hideImg4').click(function() {
        $('#drag4').fadeOut();
        $('#drag4').removeClass('zoom');
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
        if ($('.line').css('display') == 'block') {
            $('.line').css('display', 'none');
            $('#line').css('background-color', '#f4f4f4');
            clicksLine--;
        }
        if ($('#hideImg4').css('display') == 'inline-block') {
            $('#hideImg4').toggleClass('hidden');
            $('#useImg4').toggleClass('hidden');
            for (var k = 1; k < 50; k++) {
                $('#useImg' + k).attr('disabled', false);
            }
        }
    });

    //image5
    $('#useImg5').click(function() {
        var click = 0;
        $('#drag5').fadeIn();
        $('#drag5').addClass('zoom');
        $('.overlay').css({
            "background-color": "rgba(0, 0, 0, 0.7)"
        });
        wheelzoom(document.querySelector('img.zoom'));

        $('.canvas').attr("id", "canvas");

        if (click == 0) {
            $('#useImg5').toggleClass('hidden');
            $('#hideImg5').toggleClass('hidden');

            //disable other btn
            for (var i = 1; i < 50; i++) {
                $('#useImg' + i).attr('disabled', true);
            }
            click++;
        } else {
            $('#hideImg5').toggleClass('hidden');
            $('#useImg5').toggleClass('hidden');
            for (var k = 1; k < 50; k++) {
                $('#useImg' + k).attr('disabled', false);
            }
            click--;
        }

    });

    $('#hideImg4').click(function() {
        $('#drag5').fadeOut();
        $('#drag5').removeClass('zoom');
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
        if ($('.line').css('display') == 'block') {
            $('.line').css('display', 'none');
            $('#line').css('background-color', '#f4f4f4');
            clicksLine--;
        }
        if ($('#hideImg5').css('display') == 'inline-block') {
            $('#hideImg5').toggleClass('hidden');
            $('#useImg5').toggleClass('hidden');
            for (var k = 1; k < 50; k++) {
                $('#useImg' + k).attr('disabled', false);
            }
        }
    });

    //image6
    $('#useImg6').click(function() {
        var click = 0;
        $('#drag6').fadeIn();
        $('#drag6').addClass('zoom');
        $('.overlay').css({
            "background-color": "rgba(0, 0, 0, 0.7)"
        });
        wheelzoom(document.querySelector('img.zoom'));

        $('.canvas').attr("id", "canvas");

        if (click == 0) {
            $('#useImg6').toggleClass('hidden');
            $('#hideImg6').toggleClass('hidden');

            //disable other btn
            for (var i = 1; i < 50; i++) {
                $('#useImg' + i).attr('disabled', true);
            }
            click++;
        } else {
            $('#hideImg6').toggleClass('hidden');
            $('#useImg6').toggleClass('hidden');
            for (var k = 1; k < 50; k++) {
                $('#useImg' + k).attr('disabled', false);
            }
            click--;
        }
    });

    $('#hideImg6').click(function() {
        $('#drag6').fadeOut();
        $('#drag6').removeClass('zoom');
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
        if ($('.line').css('display') == 'block') {
            $('.line').css('display', 'none');
            $('#line').css('background-color', '#f4f4f4');
            clicksLine--;
        }
        if ($('#hideImg6').css('display') == 'inline-block') {
            $('#hideImg6').toggleClass('hidden');
            $('#useImg6').toggleClass('hidden');
            for (var k = 1; k < 50; k++) {
                $('#useImg' + k).attr('disabled', false);
            }
        }
    });

    //image7
    $('#useImg7').click(function() {
        var click = 0;

        $('#drag7').fadeIn();
        $('#drag7').addClass('zoom');
        $('.overlay').css({
            "background-color": "rgba(0, 0, 0, 0.7)"
        });
        wheelzoom(document.querySelector('img.zoom'));

        $('.canvas').attr("id", "canvas");

        if (click == 0) {
            $('#useImg7').toggleClass('hidden');
            $('#hideImg7').toggleClass('hidden');

            //disable other btn
            for (var i = 1; i < 50; i++) {
                $('#useImg' + i).attr('disabled', true);
            }
            click++;
        } else {
            $('#hideImg7').toggleClass('hidden');
            $('#useImg7').toggleClass('hidden');
            for (var k = 1; k < 50; k++) {
                $('#useImg' + k).attr('disabled', false);
            }
            click--;
        }
    });

    $('#hideImg7').click(function() {
        $('#drag7').fadeOut();
        $('#drag7').removeClass('zoom');
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
        if ($('.line').css('display') == 'block') {
            $('.line').css('display', 'none');
            $('#line').css('background-color', '#f4f4f4');
            clicksLine--;
        }
        if ($('#hideImg7').css('display') == 'inline-block') {
            $('#hideImg7').toggleClass('hidden');
            $('#useImg7').toggleClass('hidden');
            for (var k = 1; k < 50; k++) {
                $('#useImg' + k).attr('disabled', false);
            }
        }
    });

    //image8
    $('#useImg8').click(function() {
        var click = 0;

        $('#drag8').fadeIn();
        $('#drag8').addClass('zoom');
        $('.overlay').css({
            "background-color": "rgba(0, 0, 0, 0.7)"
        });
        wheelzoom(document.querySelector('img.zoom'));

        $('.canvas').attr("id", "canvas");

        if (click == 0) {
            $('#useImg8').toggleClass('hidden');
            $('#hideImg8').toggleClass('hidden');

            //disable other btn
            for (var i = 1; i < 50; i++) {
                $('#useImg' + i).attr('disabled', true);
            }
            click++;
        } else {
            $('#hideImg8').toggleClass('hidden');
            $('#useImg8').toggleClass('hidden');
            for (var k = 1; k < 50; k++) {
                $('#useImg' + k).attr('disabled', false);
            }
            click--;
        }
    });

    $('#hideImg8').click(function() {
        $('#drag8').fadeOut();
        $('#drag8').removeClass('zoom');
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
        if ($('.line').css('display') == 'block') {
            $('.line').css('display', 'none');
            $('#line').css('background-color', '#f4f4f4');
            clicksLine--;
        }
        if ($('#hideImg8').css('display') == 'inline-block') {
            $('#hideImg8').toggleClass('hidden');
            $('#useImg8').toggleClass('hidden');
            for (var k = 1; k < 50; k++) {
                $('#useImg' + k).attr('disabled', false);
            }
        }
    });

    //image9
    $('#useImg9').click(function() {
        var click = 0;

        $('#drag9').fadeIn();
        $('#drag9').addClass('zoom');
        $('.overlay').css({
            "background-color": "rgba(0, 0, 0, 0.7)"
        });
        wheelzoom(document.querySelector('img.zoom'));

        $('.canvas').attr("id", "canvas");

        if (click == 0) {
            $('#useImg9').toggleClass('hidden');
            $('#hideImg9').toggleClass('hidden');

            //disable other btn
            for (var i = 1; i < 50; i++) {
                $('#useImg' + i).attr('disabled', true);
            }
            click++;
        } else {
            $('#hideImg9').toggleClass('hidden');
            $('#useImg9').toggleClass('hidden');
            for (var k = 1; k < 50; k++) {
                $('#useImg' + k).attr('disabled', false);
            }
            click--;
        }
    });

    $('#hideImg9').click(function() {
        $('#drag9').fadeOut();
        $('#drag9').removeClass('zoom');
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
        if ($('.line').css('display') == 'block') {
            $('.line').css('display', 'none');
            $('#line').css('background-color', '#f4f4f4');
            clicksLine--;
        }
        if ($('#hideImg9').css('display') == 'inline-block') {
            $('#hideImg9').toggleClass('hidden');
            $('#useImg9').toggleClass('hidden');
            for (var k = 1; k < 50; k++) {
                $('#useImg' + k).attr('disabled', false);
            }
        }
    });

    //image10
    $('#useImg10').click(function() {
        var click = 0;

        $('#drag10').fadeIn();
        $('#drag10').addClass('zoom');
        $('.overlay').css({
            "background-color": "rgba(0, 0, 0, 0.7)"
        });
        wheelzoom(document.querySelector('img.zoom'));

        $('.canvas').attr("id", "canvas");

        if (click == 0) {
            $('#useImg10').toggleClass('hidden');
            $('#hideImg10').toggleClass('hidden');

            //disable other btn
            for (var i = 1; i < 50; i++) {
                $('#useImg' + i).attr('disabled', true);
            }
            click++;
        } else {
            $('#hideImg10').toggleClass('hidden');
            $('#useImg10').toggleClass('hidden');
            for (var k = 1; k < 50; k++) {
                $('#useImg' + k).attr('disabled', false);
            }
            click--;
        }
    });

    $('#hideImg10').click(function() {
        $('#drag10').fadeOut();
        $('#drag10').removeClass('zoom');
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
        if ($('.line').css('display') == 'block') {
            $('.line').css('display', 'none');
            $('#line').css('background-color', '#f4f4f4');
            clicksLine--;
        }
        if ($('#hideImg10').css('display') == 'inline-block') {
            $('#hideImg10').toggleClass('hidden');
            $('#useImg10').toggleClass('hidden');
            for (var k = 1; k < 50; k++) {
                $('#useImg' + k).attr('disabled', false);
            }
        }
    });

    //image11
    $('#useImg11').click(function() {
        var click = 0;
        $('#drag11').fadeIn();
        $('#drag11').addClass('zoom');
        $('.overlay').css({
            "background-color": "rgba(0, 0, 0, 0.7)"
        });
        wheelzoom(document.querySelector('img.zoom'));

        $('.canvas').attr("id", "canvas");

        if (click == 0) {
            $('#useImg11').toggleClass('hidden');
            $('#hideImg11').toggleClass('hidden');

            //disable other btn
            for (var i = 1; i < 50; i++) {
                $('#useImg' + i).attr('disabled', true);
            }
            click++;
        } else {
            $('#hideImg11').toggleClass('hidden');
            $('#useImg11').toggleClass('hidden');
            for (var k = 1; k < 50; k++) {
                $('#useImg' + k).attr('disabled', false);
            }
            click--;
        }
    });

    $('#hideImg11').click(function() {
        $('#drag11').fadeOut();
        $('#drag11').removeClass('zoom');
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
        if ($('.line').css('display') == 'block') {
            $('.line').css('display', 'none');
            $('#line').css('background-color', '#f4f4f4');
            clicksLine--;
        }
        if ($('#hideImg11').css('display') == 'inline-block') {
            $('#hideImg11').toggleClass('hidden');
            $('#useImg11').toggleClass('hidden');
            for (var k = 1; k < 50; k++) {
                $('#useImg' + k).attr('disabled', false);
            }
        }
    });

    //image12
    $('#useImg12').click(function() {
        var click = 0;
        $('#drag12').fadeIn();
        $('#drag12').addClass('zoom');
        $('.overlay').css({
            "background-color": "rgba(0, 0, 0, 0.7)"
        });
        wheelzoom(document.querySelector('img.zoom'));

        $('.canvas').attr("id", "canvas");

        if (click == 0) {
            $('#useImg12').toggleClass('hidden');
            $('#hideImg12').toggleClass('hidden');

            //disable other btn
            for (var i = 1; i < 50; i++) {
                $('#useImg' + i).attr('disabled', true);
            }
            click++;
        } else {
            $('#hideImg12').toggleClass('hidden');
            $('#useImg12').toggleClass('hidden');
            for (var k = 1; k < 50; k++) {
                $('#useImg' + k).attr('disabled', false);
            }
            click--;
        }
    });

    $('#hideImg12').click(function() {
        $('#drag12').fadeOut();
        $('#drag12').removeClass('zoom');
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
        if ($('.line').css('display') == 'block') {
            $('.line').css('display', 'none');
            $('#line').css('background-color', '#f4f4f4');
            clicksLine--;
        }
        if ($('#hideImg12').css('display') == 'inline-block') {
            $('#hideImg12').toggleClass('hidden');
            $('#useImg12').toggleClass('hidden');
            for (var k = 1; k < 50; k++) {
                $('#useImg' + k).attr('disabled', false);
            }
        }
    });

    //image13
    $('#useImg13').click(function() {
        var click = 0;
        $('#drag13').fadeIn();
        $('#drag13').addClass('zoom');
        $('.overlay').css({
            "background-color": "rgba(0, 0, 0, 0.7)"
        });
        wheelzoom(document.querySelector('img.zoom'));

        $('.canvas').attr("id", "canvas");

        if (click == 0) {
            $('#useImg13').toggleClass('hidden');
            $('#hideImg13').toggleClass('hidden');

            //disable other btn
            for (var i = 1; i < 50; i++) {
                $('#useImg' + i).attr('disabled', true);
            }
            click++;
        } else {
            $('#hideImg13').toggleClass('hidden');
            $('#useImg13').toggleClass('hidden');
            for (var k = 1; k < 50; k++) {
                $('#useImg' + k).attr('disabled', false);
            }
            click--;
        }
    });

    $('#hideImg13').click(function() {
        $('#drag13').fadeOut();
        $('#drag13').removeClass('zoom');
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
        if ($('.line').css('display') == 'block') {
            $('.line').css('display', 'none');
            $('#line').css('background-color', '#f4f4f4');
            clicksLine--;
        }
        if ($('#hideImg13').css('display') == 'inline-block') {
            $('#hideImg13').toggleClass('hidden');
            $('#useImg13').toggleClass('hidden');
            for (var k = 1; k < 50; k++) {
                $('#useImg' + k).attr('disabled', false);
            }
        }
    });
});