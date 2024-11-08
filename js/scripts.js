$(document).ready(function(e) {
    "use strict";

    function t() {
        e(window).scrollTop() > 40 && l > 991 ? e(".site-back-top").fadeIn() : e(".site-back-top").fadeOut()
    }

    function a() {
        e(".site-sticky #site-header .header-inner").removeAttr("style"), e(window).scrollTop() > 40 ? (e(".site-sticky #site-header").addClass("fixed"), e(".site-sticky #site-header .header-search").hide(), l > 991 && (e(".site-sticky #site-header .header-inner").css("padding-top", "20px"), e(".site-sticky #site-header .header-logo").css("top", "-40px"))) : (e(".site-sticky #site-header").removeClass("fixed"), e(".site-sticky #site-header .header-search").removeAttr("style"), l > 991 && (e(".site-sticky #site-header .header-inner").removeAttr("style"), e(".site-sticky #site-header .header-logo").css("top", -e(window).scrollTop())))
    }

    function i() {
        if (l > 991) {
            var t = e(".row").hasClass("col-half");
            e(".col-half").each(function() {
                e(this).children(".half").matchHeight(t)
            })
        } else e(".half").matchHeight("remove")
    }

    function o() {
        var t = e(".header-menu").clone(),
            a = e(".header-search").clone(),
            i = e(".footer-middle .address-list").clone().removeClass("nav-default text-small"),
            o = e(".footer-middle .social-icons").clone().removeClass("nav-default pull-right");
        e(t).appendTo(".site-nav"), e(a).appendTo(".site-nav"), e(i).appendTo(".site-nav"), e(o).appendTo(".site-nav"), e(".header-nav").on("click", function(t) {
            t.preventDefault();
            var a = e(".site-nav");
            e(a).is(":visible") ? (e(this).removeClass("active"), e(a).animate({
                left: "-250px"
            }, "slow", function() {
                e(a).hide()
            })) : (e("body,html").animate({
                scrollTop: 0
            }, 800), e(this).addClass("active"), e(a).show(), e(a).animate({
                left: "0px"
            }, "slow"))
        }), e(".site-nav ul li").each(function(t, a) {
            0 != e(this).find("ul").length && e(a).addClass("sub")
        }), e(".site-nav .sub > a").click(function(t) {
            t.preventDefault(), e(".site-nav .sub ul").slideUp("normal"), e(".site-nav .sub a").removeClass("opened");
            var a = e(this).siblings("ul");
            a.is(":visible") && (a.slideUp("normal"), e(this).removeClass("opened")), a.is(":visible") || (a.slideDown("normal"), e(this).addClass("opened"))
        })
    }

    function s() {
        991 > l ? e("body").css("position", "relative") : (e("body").removeAttr("style"), e(".site-nav").removeAttr("style"), e(".header-nav").removeClass("active"), e(".site-nav .sub ul").slideUp("normal"), e(".site-nav .sub a").removeClass("opened"))
    }
    var l = window.innerWidth;
    o(), s(), i();
    var n = (e(".bxslider").bxSlider({
        mode: "fade",
        adaptiveHeight: !0,
        captions: !1,
        pager: !0,
        controls: !1,
        auto: !0,
        autoControls: !0,
        prevText: "",
        nextText: "",
        onSlideAfter: function() {
            e(".bx-start").trigger("click")
        }
    }), e("#owl-works"));
    n.owlCarousel({
        items: 1,
        itemsDesktop: [1400, 1],
        itemsDesktopSmall: [1100, 1],
        itemsTablet: [600, 1],
        itemsMobile: [400, 1],
        pagination: !1,
        navigation: !0,
        navigationText: !1
    });
    var r = e("#owl-clients");
    r.owlCarousel({
        items: 1,
        itemsDesktop: [1400, 1],
        itemsDesktopSmall: [1100, 1],
        itemsTablet: [600, 1],
        itemsMobile: [400, 1],
        pagination: !0,
        navigation: !1,
        navigationText: !1,
        autoHeight: !0
    });
    var m = e("#owl-clients-big");
    m.owlCarousel({
        items: 4,
        itemsDesktop: [1400, 4],
        itemsDesktopSmall: [1100, 4],
        itemsTablet: [600, 2],
        itemsMobile: [400, 1],
        pagination: !0,
        navigation: !1,
        navigationText: !1,
        autoHeight: !0
    });
    var d = e("#owl-testimonials");
    d.owlCarousel({
        items: 1,
        itemsDesktop: [1400, 1],
        itemsDesktopSmall: [1100, 1],
        itemsTablet: [600, 1],
        itemsMobile: [400, 1],
        pagination: !0,
        navigation: !1,
        navigationText: !1,
        autoPlay: !0,
        autoHeight: !1
    });
    var c = e("#owl-blog");
    c.owlCarousel({
        items: 3,
        itemsDesktop: [1400, 3],
        itemsDesktopSmall: [1100, 2],
        itemsTablet: [600, 1],
        itemsMobile: [400, 1],
        pagination: !1,
        navigation: !0,
        navigationText: !1
    });
    var p = e("#owl-team");
    p.owlCarousel({
        items: 4,
        itemsDesktop: [1400, 4],
        itemsDesktopSmall: [1100, 3],
        itemsTablet: [600, 2],
        itemsMobile: [400, 1],
        pagination: !1,
        navigation: !0,
        navigationText: !1
    });
    var v = e("#owl-blog-gallery");
    v.owlCarousel({
        items: 1,
        itemsDesktop: [1400, 1],
        itemsDesktopSmall: [1100, 1],
        itemsTablet: [600, 1],
        itemsMobile: [400, 1],
        pagination: !0,
        navigation: !1,
        navigationText: !1,
        autoPlay: !0
    });
    var h = e("#owl-gallery");
    h.owlCarousel({
        items: 1,
        itemsDesktop: [1400, 1],
        itemsDesktopSmall: [1100, 1],
        itemsTablet: [600, 1],
        itemsMobile: [400, 1],
        pagination: !1,
        navigation: !1,
        navigationText: !1,
        autoPlay: !0
    }), e(".team-half-detail div:first, .team-half-list .team-member:first").addClass("active"), e(".team-half-list .team-member a").click(function(t) {
        t.preventDefault(), e(".team-half-list .team-member, .team-half-detail .active").removeClass("active"), e(this).parent(".team-member").addClass("active");
        var a = e(this).attr("href");
        e(a).addClass("active animated fadeIn"), 991 > l && e("html,body").animate({
            scrollTop: e(".team-half").offset().top
        }, 800)
    });
    var f = e(".masonry-list");
    f.imagesLoaded(function() {
        f.masonry({
            itemSelector: ".masonry-item",
            columnWidth: ".grid-sizer",
            isAnimated: !0
        })
    }), e(".video-full").fitVids(), e("a[data-rel^='prettyPhoto']").prettyPhoto({
        social_tools: !1
    }), e(".countTo").countTo(), e(".site-back-top").click(function(t) {
        return t.preventDefault(), e("body,html").animate({
            scrollTop: 0
        }, 800), !1
    }), e(".leave-new").click(function(t) {
        t.preventDefault();
        var a = e(".comment-form").offset();
        return e("html, body").animate({
            scrollTop: a.top
        }, 800), !1
    }), e(".google-map").width("100%").height("500px").gmap3({
        map: {
            options: {
                center: [51.5209564, .157134],
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
        },
        marker: {
            latLng: [51.5209564, .157134],
            callback: function() {
                e(this).css("border", "10px solid #ffffff")
            }
        }
    }), e(".google-map-big").width("100%").height("400px").gmap3({
        map: {
            options: {
                center: [51.5209564, .157134],
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
        },
        marker: {
            latLng: [51.5209564, .157134]
        }
    }), e.stellar({
        horizontalScrolling: !1
    }), e(window).scroll(function() {
        a(), t()
    }), e(window).load(function() {
        e(".site-loader").delay(100).fadeOut("slow")
    }), e(window).resize(function() {
        l = window.innerWidth, a(), t(), i(), s()
    })
});