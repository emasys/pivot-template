$(document)
    .ready(function () {

        $("#stock")
            .on('mouseenter', function () {

                $("#stockCont").show("slide", {
                    direction: "left"
                }, 500);
                $("#stockImg").hide("slide", {
                    direction: "right"
                }, 500);
            });

        $("#stock").on('mouseleave', function () {
            $("#stockCont").hide("slide", {
                direction: "left"
            }, 500);
            $("#stockImg").show("slide", {
                direction: "right"
            }, 500);
        });

        $("#portf").on('mouseenter', function () {

            $("#portCont").show("slide", {
                direction: "left"
            }, 500);
            $("#portImg").hide("slide", {
                direction: "right"
            }, 500);
        });

        $("#portf").on('mouseleave', function () {
            $("#portCont").hide("slide", {
                direction: "left"
            }, 500);
            $("#portImg").show("slide", {
                direction: "right"
            }, 500);
        });

        $("#finad").on('mouseenter', function () {

            $("#finadCont").show("slide", {
                direction: "left"
            }, 500);
            $("#finadImg").hide("slide", {
                direction: "right"
            }, 500);
        });

        $("#finad").on('mouseleave', function () {
            $("#finadCont").hide("slide", {
                direction: "left"
            }, 500);
            $("#finadImg").show("slide", {
                direction: "right"
            }, 500);
        });

        $("#assets").on('mouseenter', function () {

            $("#assetsCont").show("slide", {
                direction: "left"
            }, 500);
            $("#assetsImg").hide("slide", {
                direction: "right"
            }, 500);
        });

        $("#assets").on('mouseleave', function () {
            $("#assetsCont").hide("slide", {
                direction: "left"
            }, 500);
            $("#assetsImg").show("slide", {
                direction: "right"
            }, 500);
        });

        //slick
        $('.slider').slick({dots: true, autoplay: true, autoplaySpeed: 2000, speed: 1000});
        $('body').on('mouseenter mouseleave', '.dropdown', function (e) {
            var _d = $(e.target).closest('.dropdown');
            _d.addClass('show');
            setTimeout(function () {
                _d[_d.is(':hover')
                        ? 'addClass'
                        : 'removeClass']('show');
            }, 300);
        });
    })