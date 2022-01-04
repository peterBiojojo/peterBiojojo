function is_touch_device() {
    return "ontouchstart" in window || "onmsgesturechange" in window
}

function mk_prettyPhoto_init() {
    jQuery(".mk-lightbox").prettyPhoto({
        animation_speed: "fast",
        slideshow: 5e3,
        autoplay_slideshow: !1,
        opacity: .8,
        show_title: !0,
        allow_resize: !0,
        default_width: 500,
        default_height: 344,
        counter_separator_label: "/",
        theme: "mk-prettyphoto",
        horizontal_padding: 5,
        hideflash: !1,
        wmode: "opaque",
        autoplay: !0,
        modal: !1,
        deeplinking: !0,
        overlay_gallery: !0
    })
}

function mk_flexslider_init() {
    jQuery(".mk-flexslider.mk-script-call").each(function () {
        var e = jQuery(this),
            t = e.attr("data-selector"),
            n = e.attr("data-animation"),
            r = e.attr("data-easing"),
            i = e.attr("data-direction"),
            s = e.attr("data-smoothHeight") == "true" ? !0 : !1,
            o = e.attr("data-slideshowSpeed"),
            u = e.attr("data-animationSpeed"),
            a = e.attr("data-controlNav") == "true" ? !0 : !1,
            f = e.attr("data-directionNav") == "true" ? !0 : !1,
            l = e.attr("data-pauseOnHover") == "true" ? !0 : !1,
            c = e.attr("data-isCarousel") == "true" ? !0 : !1;
        if (t != undefined) var h = t;
        else var h = ".mk-flex-slides > li"; if (c == 1) var p = parseInt(e.attr("data-itemWidth")),
        d = parseInt(e.attr("data-itemMargin")), v = parseInt(e.attr("data-minItems")), m = parseInt(e.attr("data-maxItems")), g = parseInt(e.attr("data-move"));
        else var p = d = v = m = g = 0;
        e.flexslider({
            selector: h,
            animation: n,
            easing: r,
            direction: i,
            smoothHeight: s,
            slideshow: !0,
            slideshowSpeed: o,
            animationSpeed: u,
            controlNav: a,
            directionNav: f,
            pauseOnHover: l,
            prevText: "",
            nextText: "",
            itemWidth: p,
            itemMargin: d,
            minItems: v,
            maxItems: m,
            move: g
        })
    })
}
jQuery.exists = function (e) {
    return jQuery(e).length > 0
};
(function (e) {
    "use strict";

    function t() {
        e.exists(".jp-jplayer") && e(".jp-jplayer.mk-blog-audio").each(function () {
            var t = "#" + e(this).siblings(".jp-audio").attr("id"),
                n, r, i;
            n = e(this).attr("data-ogg");
            r = e(this).attr("data-mp3");
            e(this).jPlayer({
                ready: function () {
                    e(this).jPlayer("setMedia", {
                        mp3: r,
                        ogg: n
                    })
                },
                play: function () {
                    e(this).jPlayer("pauseOthers")
                },
                swfPath: i,
                supplied: "mp3, ogg",
                cssSelectorAncestor: t,
                wmode: "window"
            })
        })
    }

    function n() {
        e(".mk-lightbox").prettyPhoto({
            animation_speed: "fast",
            slideshow: 5e3,
            autoplay_slideshow: !1,
            opacity: .8,
            show_title: !0,
            allow_resize: !0,
            default_width: 500,
            default_height: 344,
            counter_separator_label: "/",
            theme: "mk-prettyphoto",
            horizontal_padding: 5,
            hideflash: !1,
            wmode: "opaque",
            autoplay: !0,
            modal: !1,
            deeplinking: !1,
            overlay_gallery: !0,
            gallery_markup: ""
        })
    }

    function r() {
        e(".mk-flexslider.mk-script-call").each(function () {
            (e(this).parents(".mk-tabs").length || e(this).parents(".mk-accordion").length) && e(this).removeData("flexslider");
            var t = e(this),
                n = t.attr("data-selector"),
                r = t.attr("data-animation"),
                i = t.attr("data-easing"),
                s = t.attr("data-direction"),
                o = t.attr("data-smoothHeight") == "true" ? !0 : !1,
                u = t.attr("data-slideshowSpeed"),
                a = t.attr("data-animationSpeed"),
                f = t.attr("data-controlNav") == "true" ? !0 : !1,
                l = t.attr("data-directionNav") == "true" ? !0 : !1,
                c = t.attr("data-pauseOnHover") == "true" ? !0 : !1,
                h = t.attr("data-isCarousel") == "true" ? !0 : !1;
            if (n != undefined) var p = n;
            else var p = ".mk-flex-slides > li"; if (h == 1) var d = parseInt(t.attr("data-itemWidth")),
            v = parseInt(t.attr("data-itemMargin")), m = parseInt(t.attr("data-minItems")), g = parseInt(t.attr("data-maxItems")), y = parseInt(t.attr("data-move"));
            else var d = v = m = g = y = 0;
            t.flexslider({
                selector: p,
                animation: r,
                easing: i,
                direction: s,
                smoothHeight: o,
                slideshow: !0,
                slideshowSpeed: u,
                animationSpeed: a,
                controlNav: f,
                directionNav: l,
                pauseOnHover: c,
                prevText: "",
                nextText: "",
                itemWidth: d,
                itemMargin: v,
                minItems: m,
                maxItems: g,
                move: y
            })
        })
    }

    function i() {
        mk_header_parallax == 1 && e(".mk-header-bg").addClass("mk-parallax-enabled");
        mk_body_parallax == 1 && e("body").addClass("mk-parallax-enabled");
        mk_banner_parallax == 1 && e("#mk-header").addClass("mk-parallax-enabled");
        mk_page_parallax == 1 && e("#theme-page").addClass("mk-parallax-enabled");
        mk_footer_parallax == 1 && e("#mk-footer").addClass("mk-parallax-enabled");
        e(".mk-parallax-enabled").each(function () {
            is_touch_device() || e(this).parallax("49%", -0.2)
        })
    }
    e(document).ready(function () {
        function s() {
            e.exists(".mk-animate-element") && e(".mk-animate-element:in-viewport").each(function (t) {
                var n = e(this);
                n.hasClass("mk-in-viewport") || setTimeout(function () {
                    n.addClass("mk-in-viewport")
                }, 200 * t)
            })
        }

        function o() {
            e("#mk-ajax-search-input").autocomplete({
                delay: 50,
                minLength: 2,
                appendTo: e("#mk-nav-search-wrapper"),
                search: function (t, n) {
                    e(this).parent("form").addClass("ajax-searching")
                },
                source: function (t, n) {
                    e.getJSON(ajaxurl + "?callback=?&action=mk_ajax_search", t, n)
                },
                select: function (e, t) {
                    window.location.href = t.item.link
                },
                response: function (t, n) {
                    e(this).parent("form").removeClass("ajax-searching").addClass("ajax-search-complete")
                }
            }).data("ui-autocomplete")._renderItem = function (t, n) {
                return e("<li>").append("<a>" + n.image + "<span class='search-title'>" + n.label + "</span><span class='search-date'>" + n.date + "</span></a>").appendTo(t)
            }
        }

        function u() {
            e("body").on("click", ".mk-love-this", function () {
                var t = e(this),
                    n = t.attr("id");
                if (t.hasClass("item-loved")) return !1;
                if (t.hasClass("item-inactive")) return !1;
                var r = {
                    action: "mk_love_post",
                    post_id: n
                };
                e.post(ajaxurl, r, function (e) {
                    t.find("span").html(e);
                    t.addClass("item-loved")
                });
                t.addClass("item-inactive");
                return !1
            })
        }

        function a() {
            var t = e("body");
            t.on("click", ".add_to_cart_button", function () {
                var t = e(this).parents(".product:eq(0)").addClass("adding-to-cart").removeClass("added-to-cart")
            });
            t.bind("added_to_cart", function () {
                e(".adding-to-cart").removeClass("adding-to-cart").addClass("added-to-cart")
            })
        }

        function f() {
            e.exists(".mk-products") && e(".mk-products").each(function () {
                if (!e(this).parents(".mk-woocommerce-carousel").length) {
                    var t = e(this),
                        n = ".mk-products .product";
                    t.isotope({
                        itemSelector: n,
                        masonry: {
                            columnWidth: 1
                        }
                    });
                    e(window).on("debouncedresize", function (e) {
                        $woo_container.isotope("reLayout")
                    });
                    e(".mk-products > .product").each(function (t) {
                        e(this).delay(t * 200).animate({
                            opacity: 1
                        }, "fast")
                    }).promise().done(function () {
                        setTimeout(function () {
                            t.isotope("reLayout")
                        }, 1e3)
                    })
                }
            })
        }

        function l() {
            e(".twitter-share").on("click", function () {
                var t = e(this).attr("data-url"),
                    n = e(this).attr("data-title");
                window.open("http://twitter.com/intent/tweet?text=" + n + " " + t, "twitterWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0");
                return !1
            });
            e(".pinterest-share").on("click", function () {
                var t = e(this).attr("data-url"),
                    n = e(this).attr("data-title"),
                    r = e(this).attr("data-image");
                window.open("http://pinterest.com/pin/create/button/?url=" + t + "&media=" + r + "&description=" + n, "twitterWindow", "height=320,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0");
                return !1
            });
            e(".facebook-share").on("click", function () {
                var t = e(this).attr("data-url");
                window.open("https://www.facebook.com/sharer/sharer.php?u=" + t, "facebookWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0");
                return !1
            });
            e(".googleplus-share").on("click", function () {
                var t = e(this).attr("data-url");
                window.open("https://plus.google.com/share?url=" + t, "googlePlusWindow", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0");
                return !1
            })
        }

        function c() {
            var t;
            e.exists(".mk-boxed-enabled") ? t = e("#mk-boxed-layout").width() : t = e("html").width();
            e(".mk-section-video video, .mk-section-video .mejs-overlay, .mk-section-video .mejs-container").css({
                width: t,
                height: parseInt(t / 1.777)
            });
            e(".mk-section-video").css("width", t);
            e(".mk-section-video video, .mk-section-video object").attr({
                width: t,
                height: parseInt(t / 1.777)
            })
        }

        function h() {
            e(".newspaper-item-footer").each(function () {
                e(this).find(".newspaper-item-comment").click(function () {
                    e(this).parents(".newspaper-item-footer").find(".newspaper-social-share").slideUp(200).end().find(".newspaper-comments-list").slideDown(200);
                    setTimeout(function () {
                        e(".mk-theme-loop").isotope("reLayout")
                    }, 300)
                });
                e(this).find(".newspaper-item-share").click(function () {
                    e(this).parents(".newspaper-item-footer").find(".newspaper-comments-list").slideUp(200).end().find(".newspaper-social-share").slideDown(200);
                    setTimeout(function () {
                        e(".mk-theme-loop").isotope("reLayout")
                    }, 300)
                })
            })
        }

        function p() {
            if (e(window).width() > mk_responsive_nav_width) {
                e("body").removeClass("mk-responsive").addClass("mk-desktop");
                e("#mk-responsive-nav").hide();
                g();
                y()
            }
            if (e(window).width() < mk_responsive_nav_width) {
                if (!e.exists("#mk-responsive-nav")) {
                    e(".main-navigation-ul").clone().attr({
                        id: "mk-responsive-nav",
                        "class": ""
                    }).insertAfter(".mk-header-inner");
                    e("#mk-responsive-nav > li > ul, #mk-responsive-nav > li > div").each(function () {
                        e(this).siblings("a").append('<span class="mk-moon-arrow-down mk-nav-arrow mk-nav-sub-closed"></span>')
                    });
                    e(".mk-header-inner").attr("style", "");
                    e("#mk-responsive-nav").append(e(".responsive-searchform"));
                    e(".mk-nav-arrow").click(function (t) {
                        if (e(this).hasClass("mk-nav-sub-closed")) {
                            e(this).parent().siblings("ul").slideDown(300);
                            e(this).parent().siblings("div").slideDown(300);
                            e(this).removeClass("mk-nav-sub-closed").addClass("mk-nav-sub-opened")
                        } else {
                            e(this).parent().siblings("ul").slideUp(300);
                            e(this).parent().siblings("div").slideUp(300);
                            e(this).removeClass("mk-nav-sub-opened").addClass("mk-nav-sub-closed")
                        }
                        t.preventDefault()
                    })
                }
                e("#mk-responsive-nav li, #mk-responsive-nav li a, #mk-responsive-nav ul, #mk-responsive-nav div").attr("style", "");
                e("body").removeClass("mk-desktop").addClass("mk-responsive");
                e("mk-header-padding-wrapper").css("padding", 0)
            }
        }

        function d() {
            if (e(".mk-theme-loop").hasClass("isotop-enabled")) {
                var r, i;
                r = e(".mk-theme-loop");
                i = ".mk-isotop-item";
                r.isotope({
                    itemSelector: i,
                    animationEngine: "best-available",
                    masonry: {
                        columnWidth: 1
                    }
                });
                e("#mk-filter-portfolio ul li a").click(function () {
                    var t;
                    t = e(this);
                    t.parents(".portfolio-grid").find(".ajax-container").animate({
                        height: 0,
                        opacity: 0
                    }, 500);
                    if (t.hasClass(".current")) return !1;
                    var n = t.parents("#mk-filter-portfolio ul");
                    n.find(".current").removeClass("current");
                    t.addClass("current");
                    var i = e(this).attr("data-filter");
                    r.isotope({
                        filter: i
                    });
                    return !1
                });
                e(".mk-loadmore-button").hide();
                if (e(".mk-theme-loop").hasClass("scroll-load-style") || e(".mk-theme-loop").hasClass("load-button-style")) {
                    e.exists(".mk-pagination") && e(".mk-loadmore-button").css("display", "block");
                    e(".mk-pagination").hide();
                    e(".mk-loadmore-button").on("click", function () {
                        e(this).hasClass("pagination-loading") || e(this).addClass("pagination-loading")
                    });
                    r.infinitescroll({
                        navSelector: ".mk-pagination",
                        nextSelector: ".mk-pagination a:first",
                        itemSelector: i,
                        bufferPx: 70,
                        loading: {
                            finishedMsg: "No more pages to load.",
                            img: mk_images_dir + "/load-more-loading.gif",
                            msg: null,
                            msgText: "",
                            selector: ".mk-loadmore-button",
                            speed: 300,
                            start: undefined
                        },
                        errorCallback: function () {
                            e(".mk-loadmore-button").html("No More Posts").addClass("disable-pagination")
                        }
                    }, function (i) {
                        var s = e(i);
                        s.imagesLoaded(function () {
                            e(this).parent().siblings(".mk-loadmore-button").removeClass("pagination-loading");
                            r.isotope("appended", s);
                            r.isotope("reLayout");
                            t();
                            h();
                            n();
                            l();
                            k()
                        })
                    });
                    if (e(".mk-theme-loop.isotop-enabled").hasClass("load-button-style")) {
                        e(window).unbind(".infscr");
                        e(".mk-loadmore-button").click(function () {
                            r.infinitescroll("retrieve");
                            return !1
                        })
                    }
                } else e(".mk-loadmore-button").hide()
            }
        }

        function v() {
            if (e.exists(".mk-blog-container.isotop-enabled") || e.exists(".mk-portfolio-container") || e.exists(".mk-news-container")) {
                e(".mk-blog-container.isotop-enabled>article, .mk-portfolio-container>article, .mk-news-container>article").each(function (t) {
                    e(this).delay(t * 150).animate({
                        opacity: 1
                    }, 500)
                }).promise().done(function () {
                    setTimeout(function () {
                        e(".mk-theme-loop").isotope("reLayout")
                    }, 1500)
                });
                setTimeout(function () {
                    e(".mk-theme-loop").isotope("reLayout")
                }, 2500)
            }
        }

        function m() {
            if (!e.exists(".mk-blog-showcase")) return;
            e(".mk-blog-showcase ul li").each(function () {
                e(this).on("hover", function () {
                    e(this).siblings("li").removeClass("mk-blog-first-el").end().addClass("mk-blog-first-el")
                })
            })
        }

        function g() {
            e(".main-navigation-ul").dcMegaMenu({
                rowItems: "6",
                speed: 200,
                effect: "fade",
                fullWidth: !0
            })
        }

        function y() {
            var t = e("#mk-main-navigation").height();
            e(".main-navigation-ul div.sub-container").css("top", t);
            if (e(".mk-header-inner").hasClass("mk-fixed")) {
                e("#mk-nav-search-wrapper").css("top", t);
                e(".modern-style-nav .mk-shopping-cart-box").css("top", t)
            } else {
                e("#mk-nav-search-wrapper").css("top", t - 15);
                e(".modern-style-nav .mk-shopping-cart-box").css("top", t - 18)
            }
        }

        function b() {
            e(".mk-nav-responsive-link").click(function () {
                if (e("body").hasClass("mk-opened-nav")) {
                    e("body").removeClass("mk-opened-nav").addClass("mk-closed-nav");
                    e("#mk-responsive-nav").slideUp(300)
                } else {
                    e("body").removeClass("mk-closed-nav").addClass("mk-opened-nav");
                    e("#mk-responsive-nav").slideDown(300)
                }
            })
        }

        function T() {
            x = e(window).scrollTop();
            if (x > S) {
                if (!e(".mk-header-nav-container").hasClass("mk-fixed")) {
                    e(".mk-header-toolbar").hide();
                    e(".mk-header-padding-wrapper").css("padding-top", w);
                    e(".mk-header-nav-container").addClass("mk-fixed").css("top", E)
                }
            } else if (e(".mk-header-nav-container").hasClass("mk-fixed")) {
                e(".mk-header-toolbar").show();
                e(".mk-header-nav-container").css({
                    top: 0
                }).removeClass("mk-fixed");
                e(".mk-header-padding-wrapper").css("padding-top", "")
            }
        }

        function N() {
            var t = e(window).scrollTop(),
                n = e("#mk-header.modern-style-nav .mk-header-inner .main-navigation-ul > li > a, .mk-header-inner #mk-header-search, #mk-header.modern-style-nav .mk-header-inner .mk-header-start-tour, .mk-header-inner,#mk-header.modern-style-nav .mk-search-trigger"),
                r = parseInt(e("#mk-header").attr("data-height")),
                i = parseInt(e("#mk-header").attr("data-sticky-height")),
                s = 0;
            if (t > S) {
                if (!e(".mk-header-inner").hasClass("mk-fixed")) {
                    e(".mk-header-toolbar").hide();
                    e(".mk-header-padding-wrapper").css("padding-top", r + "px");
                    e(".mk-header-inner").addClass("mk-fixed").css({
                        top: E
                    })
                }
            } else if (e(".mk-header-inner").hasClass("mk-fixed")) {
                e(".mk-header-toolbar").show();
                e(".mk-header-inner").css({
                    top: 0
                }).removeClass("mk-fixed");
                e(".mk-header-padding-wrapper").css("padding-top", "")
            }
            if (e(window).width() > mk_responsive_nav_width) {
                t < r - i ? s = r - t : s = i;
                n.css({
                    height: s + "px",
                    lineHeight: s + "px"
                })
            }
        }

        function C() {
            e(".mk-header-toolbar #mk-header-searchform .text-input").on("focus", function () {
                if (e(".mk-header-toolbar #mk-header-searchform .text-input").hasClass("on-close-state")) {
                    e(".mk-header-toolbar #mk-header-searchform .text-input").removeClass("on-close-state").animate({
                        width: "200px"
                    }, 200);
                    return !1
                }
            });
            e(".mk-header-toolbar .mk-header-searchform").click(function (e) {
                e.stopPropagation ? e.stopPropagation() : window.event && (window.event.cancelBubble = !0)
            });
            e(".widget .mk-searchform .text-input").focus(function () {
                e(this).parent().find(".mk-icon-remove-sign").css("opacity", .5)
            });
            e(".widget .mk-searchform .text-input").blur(function () {
                e(this).parent().find(".mk-icon-remove-sign").css("opacity", 0)
            });
            e("html").click(function () {
                e(this).find(".mk-header-toolbar #mk-header-searchform .text-input").addClass("on-close-state").animate({
                    width: 90
                }, 300)
            });
            e(".mk-searchform .mk-icon-remove-sign, .mk-notfound-search .mk-icon-remove-sign").on("click", function () {
                e(this).siblings("#mk-header-searchform .text-input, .mk-searchform .text-input, .mk-notfound-search .notfound-text-input").val(" ").focus()
            })
        }

        function k() {
            e(".mk-toggle-trigger").on("click", function () {
                if (!e(this).hasClass("mk-toggle-active")) {
                    e(".mk-box-to-trigger").fadeOut(100);
                    e(this).parent().find(".mk-box-to-trigger").fadeIn(150);
                    e(".mk-toggle-trigger").removeClass("mk-toggle-active");
                    e(this).addClass("mk-toggle-active")
                } else {
                    e(".mk-box-to-trigger").fadeOut(100);
                    e(this).removeClass("mk-toggle-active")
                }
                return !1
            })
        }

        function L() {
            e.exists(".mk-milestone") && e(".mk-milestone:in-viewport").each(function () {
                var t = e(this),
                    n = t.find(".milestone-number").attr("data-stop"),
                    r = parseInt(t.find(".milestone-number").attr("data-speed"));
                if (!e(this).hasClass("scroll-animated")) {
                    e(this).addClass("scroll-animated");
                    e({
                        countNum: t.find(".milestone-number").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function () {
                            t.find(".milestone-number").text(Math.floor(this.countNum))
                        },
                        complete: function () {
                            t.find(".milestone-number").text(this.countNum)
                        }
                    })
                }
            })
        }

        function A() {
            e.exists(".mk-skill-meter") && e(".mk-skill-meter .progress-outer:in-viewport").each(function () {
                var t = e(this);
                if (!t.hasClass("scroll-animated")) {
                    t.addClass("scroll-animated");
                    t.animate({
                        width: e(this).attr("data-width") + "%"
                    }, 2e3)
                }
            })
        }

        function O() {
            e.exists(".mk-chart") && e(window).on("load", function () {
                e(".mk-chart").each(function () {
                    var t, n, r;
                    t = e(this);
                    n = e(this).parent().width();
                    r = t.attr("data-barSize");
                    if (n < r) {
                        r = n;
                        t.css("line-height", r);
                        t.find("i").css({
                            "line-height": r + "px",
                            "font-size": r / 3
                        })
                    }
                    t.hasClass("chart-animated") || t.easyPieChart({
                        animate: 1300,
                        lineCap: "round",
                        lineWidth: t.attr("data-lineWidth"),
                        size: r,
                        barColor: t.attr("data-barColor"),
                        trackColor: t.attr("data-trackColor"),
                        scaleColor: "transparent",
                        onStep: function (e) {
                            this.$el.find(".chart-percent span").text(Math.ceil(e))
                        }
                    })
                })
            })
        }

        function M() {
            e("html").niceScroll({
                scrollspeed: 50,
                mousescrollstep: 40,
                cursorwidth: 8,
                cursorborder: 0,
                cursorcolor: "#797979",
                cursorborderradius: 6,
                autohidemode: !0,
                horizrailenabled: !1,
                zindex: 9999
            })
        }

        function _() {
            var t, n = e("#mk-main-navigation"),
                r = n.find("a"),
                i = r.map(function () {
                    var t = e(this).attr("href");
                    if (/^#\w/.test(t) && e(t).length) return e(t)
                });
            if (e.exists("#wpadminbar")) var s = e("#wpadminbar").height();
            else s = 0;
            var o = parseInt(e("#mk-header").attr("data-sticky-height"));
            r.click(function (t) {
                var n = e(this).attr("href");
                if (typeof e(n).offset() != "undefined") var r = e(n).offset().top;
                else var r = 0;
                var i = n === "#" ? 0 : r - (s + o - 1) + "px";
                e("html, body").stop().animate({
                    scrollTop: i
                }, {
                    duration: 1200,
                    easing: "easeInOutExpo"
                });
                t.preventDefault()
            });
            e(window).scroll(function () {
                if (!i.length) return !1;
                var n = e(this).scrollTop() + (s + o),
                    u = i.map(function () {
                        if (e(this).offset().top < n) return this
                    });
                u = u[u.length - 1];
                var a = u && u.length ? u[0].id : "";
                if (t !== a) {
                    t = a;
                    r.parent().removeClass("current-menu-item").end().filter("[href=#" + a + "]").parent().addClass("current-menu-item")
                }
            })
        }
        n();
        i();
        r();
        is_touch_device() || e("body").addClass("mk-transform");
        s();
        e(window).scroll(function () {
            s()
        });
        e(window).load(function () {
            e.exists(".icon-box-boxed.blured-box, .mk-employee-item.employee-item-blur") && !is_touch_device() && e(".icon-box-boxed.blured-box, .mk-employee-item.employee-item-blur").blurjs({
                source: ".mk-blur-parent",
                radius: 22,
                overlay: "rgba(255,255,255,0.6)"
            })
        });
        if (e.exists(".mk-tabs, .mk-news-tab, .mk-woo-tabs")) {
            e(".mk-tabs, .mk-news-tab, .mk-woo-tabs").tabs();
            e(".mk-tabs.vertical-style").each(function () {
                e(this).find(".mk-tabs-pane").css("minHeight", e(this).find(".mk-tabs-tabs").height() - 1)
            });
            e(".mk-tabs .mk-tabs-tabs li a").on("click", function () {
                r()
            })
        }
        if (e.exists(".mk-page-section-frist")) {
            e(".mk-main-wrapper").hide();
            e("#theme-page").css("padding-top", 0)
        }
        e.exists(".main-nav-side-search") && o();
        e.exists(".portfolio-ajax-enabled") && e(".portfolio-grid.portfolio-ajax-enabled").ajaxPortfolio();
        u();
        a();
        e(window).load(function () {
            f()
        });
        l();
        if (e.exists(".mk-section-video")) {
            setTimeout(function () {
                c();
                e(".mk-section-video").css("visibility", "visible");
                e(".mk-video-preload").fadeOut(1e3)
            }, 3e3);
            (!is_touch_device() || e(window).width() > 960) && e(".mk-section-video video").mediaelementplayer({
                enableKeyboard: !1,
                iPadUseNativeControls: !1,
                pauseOtherPlayers: !0,
                iPhoneUseNativeControls: !1,
                AndroidUseNativeControls: !1
            });
            e(window).on("debouncedresize", function () {
                c()
            })
        }
        e(window).scroll(function () {
            e(this).scrollTop() > 700 ? e(".mk-go-top, .mk-quick-contact-wrapper").removeClass("off").addClass("on") : e(".mk-go-top, .mk-quick-contact-wrapper").removeClass("on").addClass("off")
        });
        e(".mk-go-top, .mk-back-top-link, .single-back-top a, .divider-go-top, .comments-back-top").click(function () {
            e("html, body").animate({
                scrollTop: 0
            }, 800);
            return !1
        });
        e(".mk-classic-comments").click(function () {
            e("html, body").animate({
                scrollTop: e("#comments").offset().top
            }, 800)
        });
        e.exists(".mk-portfolio-orientation") && e(".mk-portfolio-orientation a").on("click", function () {
            e(this).siblings().removeClass("current").end().addClass("current");
            var t = "." + e(this).parent().attr("data-view");
            e(this).hasClass("mk-grid-view") ? e(t).removeClass("mk-portfolio-list").addClass("mk-portfolio-grid") : e(t).removeClass("mk-portfolio-grid").addClass("mk-portfolio-list");
            e(".mk-theme-loop").isotope("reLayout");e(".mk-theme-loop").isotope("reLayout");
            return !1
        });
        if (e.exists(".mk-accordion")) {
            e.tools.toolsTabs.addEffect("slide", function (e, t) {
                this.getPanes().slideUp(250);
                this.getPanes().eq(e).slideDown(250, function () {
                    t.call()
                })
            });
            e(".mk-accordion").each(function () {
                if (e(this).hasClass("accordion-action")) {
                    var t = e(this).attr("data-initialIndex");
                    if (t == undefined || t == 0) t = 0;
                    e(this).toolsTabs("div.mk-accordion-pane", {
                        toolsTabs: ".mk-accordion-tab",
                        effect: "slide",
                        initialIndex: t,
                        slideInSpeed: 400,
                        slideOutSpeed: 400
                    })
                } else e(".toggle-action .mk-accordion-tab").toggle(function () {
                    e(this).addClass("current");
                    e(this).siblings(".mk-accordion-pane").slideDown(150)
                }, function () {
                    e(this).removeClass("current");
                    e(this).siblings(".mk-accordion-pane").slideUp(150)
                })
            })
        }
        e.exists(".mk-toggle-title") && e(".mk-toggle-title").toggle(function () {
            e(this).addClass("active-toggle");
            e(this).siblings(".mk-toggle-pane").slideDown(200)
        }, function () {
            e(this).removeClass("active-toggle");
            e(this).siblings(".mk-toggle-pane").slideUp(200)
        });
        e(".box-close-btn").on("click", function () {
            e(this).parent().fadeOut(300);
            return !1
        });
        e(".mk-tooltip").each(function () {
            e(this).find(".tooltip-init").hover(function () {
                e(this).siblings(".tooltip-text").animate({
                    opacity: 1
                }, 400)
            }, function () {
                e(this).siblings(".tooltip-text").animate({
                    opacity: 0
                }, 400)
            })
        });
        h();
        e(window).load(function () {
            p();
            e(".modern-style-nav .header-logo, .modern-style-nav .header-logo a").css("width", e(".header-logo img").width())
        });
        e(window).on("debouncedresize", function () {
            p()
        });
        e(".filter-faq li a").click(function () {
            e(this).parent().siblings().children().removeClass("current");
            e(this).addClass("current");
            var t = e(this).attr("data-filter");
            t === "" ? e(".mk-faq-container .mk-faq-toggle").slideDown(200).removeClass("hidden") : e(".mk-faq-container .mk-faq-toggle").each(function () {
                e(this).hasClass(t) ? e(this).slideDown(200).removeClass("hidden") : e(this).slideUp(200).addClass("hidden")
            });
            return !1
        });
        if (e.exists(".mk-blog-container.isotop-enabled") || e.exists(".mk-portfolio-container") || e.exists(".mk-news-container")) {
            e(window).load(function () {
                e(window).unbind("keydown");
                d();
                v()
            });
            e(window).on("debouncedresize", function () {
                e(".mk-theme-loop").isotope("reLayout")
            })
        }
        t();
        e(".widget_recent_portfolio li").each(function () {
            e(this).find(".portfolio-widget-thumb").hover(function () {
                e(this).siblings(".portfolio-widget-info").animate({
                    opacity: 1
                }, 200)
            }, function () {
                e(this).siblings(".portfolio-widget-info").animate({
                    opacity: 0
                }, 200)
            })
        });
        if (e.tools.validator != undefined) {
            e.tools.validator.addEffect("contact_form", function (t) {
                e.each(t, function (e, t) {
                    var n = t.input;
                    n.addClass("mk-invalid")
                })
            }, function (e) {
                e.removeClass("mk-invalid")
            });
            e(".mk-contact-form").validator({
                effect: "contact_form"
            }).submit(function (t) {
                var n = e(this);
                if (!t.isDefaultPrevented()) {
                    e(this).find(".mk-contact-loading").fadeIn("slow");
                    e.post(this.action, {
                        to: e('input[name="contact_to"]').val().replace("*", "@"),
                        name: e('input[name="contact_name"]').val(),
                        email: e('input[name="contact_email"]').val(),
                        content: e('textarea[name="contact_content"]').val()
                    }, function () {
                        n.fadeIn("fast", function () {
                            e(this).find(".mk-contact-loading").fadeOut("slow");
                            e(this).find(".mk-contact-success").delay(2e3).fadeIn("slow").delay(8e3).fadeOut();
                            e(this).find("input, textarea").val("")
                        })
                    });
                    t.preventDefault()
                }
            })
        }
        m();
        b();
        var w = e(".mk-header-inner").height(),
            E = 0,
            S;
        e.exists("#wpadminbar") && (E = e("#wpadminbar").height());
        var x = 0;
        x = e(window).scrollTop();
        e("#mk-header").hasClass("classic-style-nav") ? S = E + w * 2 : S = E;
        x > S && !(is_touch_device() || e(window).width() < mk_responsive_nav_width || mk_header_sticky === !1) && (e("#mk-header").hasClass("classic-style-nav") ? T() : N());
        e(window).scroll(function () {
            if (is_touch_device() || mk_header_sticky === !1 || e(window).width() < mk_responsive_nav_width) return;
            e("#mk-header").hasClass("classic-style-nav") ? T() : N();
            y();
            setTimeout(function () {
                y()
            }, 1e3)
        });
        C();
        e(".mk-header-login, .mk-header-signup, .mk-quick-contact-wrapper, .blog-share-container, .news-share-buttons, .main-nav-side-search").click(function (e) {
            e.stopPropagation ? e.stopPropagation() : window.event && (window.event.cancelBubble = !0)
        });
        e("html").click(function () {
            e(this).find(".mk-login-register, #mk-header-subscribe, #mk-quick-contact, .single-share-buttons, .single-share-box, .blog-social-share, .news-share-buttons, #mk-nav-search-wrapper").fadeOut(100);
            e(".mk-quick-contact-link").removeClass("quick-contact-active");
            e(".mk-toggle-trigger").removeClass("mk-toggle-active")
        });
        e(".mk-forget-password").on("click", function () {
            e("#mk-forget-panel").siblings().hide().end().show()
        });
        e(".mk-create-account").on("click", function () {
            e("#mk-register-panel").siblings().hide().end().show()
        });
        e(".mk-return-login").on("click", function () {
            e("#mk-login-panel").siblings().hide().end().show()
        });
        e(".mk-quick-contact-link").on("click", function () {
            if (!e(this).hasClass("quick-contact-active")) {
                e("#mk-quick-contact").fadeIn(150);
                e(this).addClass("quick-contact-active")
            } else {
                e("#mk-quick-contact").fadeOut(100);
                e(this).removeClass("quick-contact-active")
            }
            return !1
        });
        k();
        e(document).ready(function () {
            A();
            O();
            L()
        });
        e(window).scroll(function () {
            A();
            O();
            L()
        });
        e(window).width() > 690 && e("body").outerHeight(!0) > e(window).height() && mk_smooth_scroll == 1 && M();
        e(".mk-smooth").bind("click", function (t) {
            if (e.exists("#wpadminbar")) var n = e("#wpadminbar").height();
            else n = 0;
            var r = e(".mk-header-inner").height();
            e("body, html").animate({
                scrollTop: e(e(this).attr("href")).offset().top - (r + n) + "px"
            }, {
                duration: 1200,
                easing: "easeInOutExpo"
            });
            return !1
        });
        _()
    })
})(jQuery);
(function (e, t, n) {
    "use strict";
    var r = e.document,
        i = e.Modernizr,
        s = function (e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }, o = "Moz Webkit O Ms".split(" "),
        u = function (e) {
            var t = r.documentElement.style,
                n;
            if (typeof t[e] == "string") return e;
            e = s(e);
            for (var i = 0, u = o.length; i < u; i++) {
                n = o[i] + e;
                if (typeof t[n] == "string") return n
            }
        }, a = u("transform"),
        f = u("transitionProperty"),
        l = {
            csstransforms: function () {
                return !!a
            },
            csstransforms3d: function () {
                var e = !! u("perspective");
                if (e) {
                    var n = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
                        r = "@media (" + n.join("transform-3d),(") + "modernizr)",
                        i = t("<style>" + r + "{#modernizr{height:3px}}" + "</style>").appendTo("head"),
                        s = t('<div id="modernizr" />').appendTo("html");
                    e = s.height() === 3, s.remove(), i.remove()
                }
                return e
            },
            csstransitions: function () {
                return !!f
            }
        }, c;
    if (i)
        for (c in l) i.hasOwnProperty(c) || i.addTest(c, l[c]);
    else {
        i = e.Modernizr = {
            _version: "1.6ish: miniModernizr for Isotope"
        };
        var h = " ",
            p;
        for (c in l) p = l[c](), i[c] = p, h += " " + (p ? "" : "no-") + c;
        t("html").addClass(h)
    } if (i.csstransforms) {
        var d = i.csstransforms3d ? {
            translate: function (e) {
                return "translate3d(" + e[0] + "px, " + e[1] + "px, 0) "
            },
            scale: function (e) {
                return "scale3d(" + e + ", " + e + ", 1) "
            }
        } : {
            translate: function (e) {
                return "translate(" + e[0] + "px, " + e[1] + "px) "
            },
            scale: function (e) {
                return "scale(" + e + ") "
            }
        }, v = function (e, n, r) {
                var i = t.data(e, "isoTransform") || {}, s = {}, o, u = {}, f;
                s[n] = r, t.extend(i, s);
                for (o in i) f = i[o], u[o] = d[o](f);
                var l = u.translate || "",
                    c = u.scale || "",
                    h = l + c;
                t.data(e, "isoTransform", i), e.style[a] = h
            };
        t.cssNumber.scale = !0, t.cssHooks.scale = {
            set: function (e, t) {
                v(e, "scale", t)
            },
            get: function (e, n) {
                var r = t.data(e, "isoTransform");
                return r && r.scale ? r.scale : 1
            }
        }, t.fx.step.scale = function (e) {
            t.cssHooks.scale.set(e.elem, e.now + e.unit)
        }, t.cssNumber.translate = !0, t.cssHooks.translate = {
            set: function (e, t) {
                v(e, "translate", t)
            },
            get: function (e, n) {
                var r = t.data(e, "isoTransform");
                return r && r.translate ? r.translate : [0, 0]
            }
        }
    }
    var m, g;
    i.csstransitions && (m = {
        WebkitTransitionProperty: "webkitTransitionEnd",
        MozTransitionProperty: "transitionend",
        OTransitionProperty: "oTransitionEnd otransitionend",
        transitionProperty: "transitionend"
    }[f], g = u("transitionDuration"));
    var y = t.event,
        b = t.event.handle ? "handle" : "dispatch",
        w;
    y.special.smartresize = {
        setup: function () {
            t(this).bind("resize", y.special.smartresize.handler)
        },
        teardown: function () {
            t(this).unbind("resize", y.special.smartresize.handler)
        },
        handler: function (e, t) {
            var n = this,
                r = arguments;
            e.type = "smartresize", w && clearTimeout(w), w = setTimeout(function () {
                y[b].apply(n, r)
            }, t === "execAsap" ? 0 : 100)
        }
    }, t.fn.smartresize = function (e) {
        return e ? this.bind("smartresize", e) : this.trigger("smartresize", ["execAsap"])
    }, t.Isotope = function (e, n, r) {
        this.element = t(n), this._create(e), this._init(r)
    };
    var E = ["width", "height"],
        S = t(e);
    t.Isotope.settings = {
        resizable: !0,
        layoutMode: "masonry",
        containerClass: "isotope",
        itemClass: "isotope-item",
        hiddenClass: "isotope-hidden",
        hiddenStyle: {
            opacity: 0,
            scale: .001
        },
        visibleStyle: {
            opacity: 1,
            scale: 1
        },
        containerStyle: {
            position: "relative",
            overflow: "hidden"
        },
        animationEngine: "best-available",
        animationOptions: {
            queue: !1,
            duration: 800
        },
        sortBy: "original-order",
        sortAscending: !0,
        resizesContainer: !0,
        transformsEnabled: !0,
        itemPositionDataEnabled: !1
    }, t.Isotope.prototype = {
        _create: function (e) {
            this.options = t.extend({}, t.Isotope.settings, e), this.styleQueue = [], this.elemCount = 0;
            var n = this.element[0].style;
            this.originalStyle = {};
            var r = E.slice(0);
            for (var i in this.options.containerStyle) r.push(i);
            for (var s = 0, o = r.length; s < o; s++) i = r[s], this.originalStyle[i] = n[i] || "";
            this.element.css(this.options.containerStyle), this._updateAnimationEngine(), this._updateUsingTransforms();
            var u = {
                "original-order": function (e, t) {
                    return t.elemCount++, t.elemCount
                },
                random: function () {
                    return Math.random()
                }
            };
            this.options.getSortData = t.extend(this.options.getSortData, u), this.reloadItems(), this.offset = {
                left: parseInt(this.element.css("padding-left") || 0, 10),
                top: parseInt(this.element.css("padding-top") || 0, 10)
            };
            var a = this;
            setTimeout(function () {
                a.element.addClass(a.options.containerClass)
            }, 0), this.options.resizable && S.bind("smartresize.isotope", function () {
                a.resize()
            }), this.element.delegate("." + this.options.hiddenClass, "click", function () {
                return !1
            })
        },
        _getAtoms: function (e) {
            var t = this.options.itemSelector,
                n = t ? e.filter(t).add(e.find(t)) : e,
                r = {
                    position: "absolute"
                };
            return n = n.filter(function (e, t) {
                return t.nodeType === 1
            }), this.usingTransforms && (r.left = 0, r.top = 0), n.css(r).addClass(this.options.itemClass), this.updateSortData(n, !0), n
        },
        _init: function (e) {
            this.$filteredAtoms = this._filter(this.$allAtoms), this._sort(), this.reLayout(e)
        },
        option: function (e) {
            if (t.isPlainObject(e)) {
                this.options = t.extend(!0, this.options, e);
                var n;
                for (var r in e) n = "_update" + s(r), this[n] && this[n]()
            }
        },
        _updateAnimationEngine: function () {
            var e = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, ""),
                t;
            switch (e) {
            case "css":
            case "none":
                t = !1;
                break;
            case "jquery":
                t = !0;
                break;
            default:
                t = !i.csstransitions
            }
            this.isUsingJQueryAnimation = t, this._updateUsingTransforms()
        },
        _updateTransformsEnabled: function () {
            this._updateUsingTransforms()
        },
        _updateUsingTransforms: function () {
            var e = this.usingTransforms = this.options.transformsEnabled && i.csstransforms && i.csstransitions && !this.isUsingJQueryAnimation;
            e || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale), this.getPositionStyles = e ? this._translate : this._positionAbs
        },
        _filter: function (e) {
            var t = this.options.filter === "" ? "*" : this.options.filter;
            if (!t) return e;
            var n = this.options.hiddenClass,
                r = "." + n,
                i = e.filter(r),
                s = i;
            if (t !== "*") {
                s = i.filter(t);
                var o = e.not(r).not(t).addClass(n);
                this.styleQueue.push({
                    $el: o,
                    style: this.options.hiddenStyle
                })
            }
            return this.styleQueue.push({
                $el: s,
                style: this.options.visibleStyle
            }), s.removeClass(n), e.filter(t)
        },
        updateSortData: function (e, n) {
            var r = this,
                i = this.options.getSortData,
                s, o;
            e.each(function () {
                s = t(this), o = {};
                for (var e in i)!n && e === "original-order" ? o[e] = t.data(this, "isotope-sort-data")[e] : o[e] = i[e](s, r);
                t.data(this, "isotope-sort-data", o)
            })
        },
        _sort: function () {
            var e = this.options.sortBy,
                t = this._getSorter,
                n = this.options.sortAscending ? 1 : -1,
                r = function (r, i) {
                    var s = t(r, e),
                        o = t(i, e);
                    return s === o && e !== "original-order" && (s = t(r, "original-order"), o = t(i, "original-order")), (s > o ? 1 : s < o ? -1 : 0) * n
                };
            this.$filteredAtoms.sort(r)
        },
        _getSorter: function (e, n) {
            return t.data(e, "isotope-sort-data")[n]
        },
        _translate: function (e, t) {
            return {
                translate: [e, t]
            }
        },
        _positionAbs: function (e, t) {
            return {
                left: e,
                top: t
            }
        },
        _pushPosition: function (e, t, n) {
            t = Math.round(t + this.offset.left), n = Math.round(n + this.offset.top);
            var r = this.getPositionStyles(t, n);
            this.styleQueue.push({
                $el: e,
                style: r
            }), this.options.itemPositionDataEnabled && e.data("isotope-item-position", {
                x: t,
                y: n
            })
        },
        layout: function (e, t) {
            var n = this.options.layoutMode;
            this["_" + n + "Layout"](e);
            if (this.options.resizesContainer) {
                var r = this["_" + n + "GetContainerSize"]();
                this.styleQueue.push({
                    $el: this.element,
                    style: r
                })
            }
            this._processStyleQueue(e, t), this.isLaidOut = !0
        },
        _processStyleQueue: function (e, n) {
            var r = this.isLaidOut ? this.isUsingJQueryAnimation ? "animate" : "css" : "css",
                s = this.options.animationOptions,
                o = this.options.onLayout,
                u, a, f, l;
            a = function (e, t) {
                t.$el[r](t.style, s)
            };
            if (this._isInserting && this.isUsingJQueryAnimation) a = function (e, t) {
                u = t.$el.hasClass("no-transition") ? "css" : r, t.$el[u](t.style, s)
            };
            else if (n || o || s.complete) {
                var c = !1,
                    h = [n, o, s.complete],
                    p = this;
                f = !0, l = function () {
                    if (c) return;
                    var t;
                    for (var n = 0, r = h.length; n < r; n++) t = h[n], typeof t == "function" && t.call(p.element, e, p);
                    c = !0
                };
                if (this.isUsingJQueryAnimation && r === "animate") s.complete = l, f = !1;
                else if (i.csstransitions) {
                    var d = 0,
                        v = this.styleQueue[0],
                        y = v && v.$el,
                        b;
                    while (!y || !y.length) {
                        b = this.styleQueue[d++];
                        if (!b) return;
                        y = b.$el
                    }
                    var w =
                        parseFloat(getComputedStyle(y[0])[g]);
                    w > 0 && (a = function (e, t) {
                        t.$el[r](t.style, s).one(m, l)
                    }, f = !1)
                }
            }
            t.each(this.styleQueue, a), f && l(), this.styleQueue = []
        },
        resize: function () {
            this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
        },
        reLayout: function (e) {
            this["_" + this.options.layoutMode + "Reset"](), this.layout(this.$filteredAtoms, e)
        },
        addItems: function (e, t) {
            var n = this._getAtoms(e);
            this.$allAtoms = this.$allAtoms.add(n), t && t(n)
        },
        insert: function (e, t) {
            this.element.append(e);
            var n = this;
            this.addItems(e, function (e) {
                var r = n._filter(e);
                n._addHideAppended(r), n._sort(), n.reLayout(), n._revealAppended(r, t)
            })
        },
        appended: function (e, t) {
            var n = this;
            this.addItems(e, function (e) {
                n._addHideAppended(e), n.layout(e), n._revealAppended(e, t)
            })
        },
        _addHideAppended: function (e) {
            this.$filteredAtoms = this.$filteredAtoms.add(e), e.addClass("no-transition"), this._isInserting = !0, this.styleQueue.push({
                $el: e,
                style: this.options.hiddenStyle
            })
        },
        _revealAppended: function (e, t) {
            var n = this;
            setTimeout(function () {
                e.removeClass("no-transition"), n.styleQueue.push({
                    $el: e,
                    style: n.options.visibleStyle
                }), n._isInserting = !1, n._processStyleQueue(e, t)
            }, 10)
        },
        reloadItems: function () {
            this.$allAtoms = this._getAtoms(this.element.children())
        },
        remove: function (e, t) {
            this.$allAtoms = this.$allAtoms.not(e), this.$filteredAtoms = this.$filteredAtoms.not(e);
            var n = this,
                r = function () {
                    e.remove(), t && t.call(n.element)
                };
            e.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({
                $el: e,
                style: this.options.hiddenStyle
            }), this._sort(), this.reLayout(r)) : r()
        },
        shuffle: function (e) {
            this.updateSortData(this.$allAtoms), this.options.sortBy = "random", this._sort(), this.reLayout(e)
        },
        destroy: function () {
            var e = this.usingTransforms,
                t = this.options;
            this.$allAtoms.removeClass(t.hiddenClass + " " + t.itemClass).each(function () {
                var t = this.style;
                t.position = "", t.top = "", t.left = "", t.opacity = "", e && (t[a] = "")
            });
            var n = this.element[0].style;
            for (var r in this.originalStyle) n[r] = this.originalStyle[r];
            this.element.unbind(".isotope").undelegate("." + t.hiddenClass, "click").removeClass(t.containerClass).removeData("isotope"), S.unbind(".isotope")
        },
        _getSegments: function (e) {
            var t = this.options.layoutMode,
                n = e ? "rowHeight" : "columnWidth",
                r = e ? "height" : "width",
                i = e ? "rows" : "cols",
                o = this.element[r](),
                u, a = this.options[t] && this.options[t][n] || this.$filteredAtoms["outer" + s(r)](!0) || o;
            u = Math.floor(o / a), u = Math.max(u, 1), this[t][i] = u, this[t][n] = a
        },
        _checkIfSegmentsChanged: function (e) {
            var t = this.options.layoutMode,
                n = e ? "rows" : "cols",
                r = this[t][n];
            return this._getSegments(e), this[t][n] !== r
        },
        _masonryReset: function () {
            this.masonry = {}, this._getSegments();
            var e = this.masonry.cols;
            this.masonry.colYs = [];
            while (e--) this.masonry.colYs.push(0)
        },
        _masonryLayout: function (e) {
            var n = this,
                r = n.masonry;
            e.each(function () {
                var e = t(this),
                    i = Math.ceil(e.outerWidth(!0) / r.columnWidth);
                i = Math.min(i, r.cols);
                if (i === 1) n._masonryPlaceBrick(e, r.colYs);
                else {
                    var s = r.cols + 1 - i,
                        o = [],
                        u, a;
                    for (a = 0; a < s; a++) u = r.colYs.slice(a, a + i), o[a] = Math.max.apply(Math, u);
                    n._masonryPlaceBrick(e, o)
                }
            })
        },
        _masonryPlaceBrick: function (e, t) {
            var n = Math.min.apply(Math, t),
                r = 0;
            for (var i = 0, s = t.length; i < s; i++)
                if (t[i] === n) {
                    r = i;
                    break
                }
            var o = this.masonry.columnWidth * r,
                u = n;
            this._pushPosition(e, o, u);
            var a = n + e.outerHeight(!0),
                f = this.masonry.cols + 1 - s;
            for (i = 0; i < f; i++) this.masonry.colYs[r + i] = a
        },
        _masonryGetContainerSize: function () {
            var e = Math.max.apply(Math, this.masonry.colYs);
            return {
                height: e
            }
        },
        _masonryResizeChanged: function () {
            return this._checkIfSegmentsChanged()
        },
        _fitRowsReset: function () {
            this.fitRows = {
                x: 0,
                y: 0,
                height: 0
            }
        },
        _fitRowsLayout: function (e) {
            var n = this,
                r = this.element.width(),
                i = this.fitRows;
            e.each(function () {
                var e = t(this),
                    s = e.outerWidth(!0),
                    o = e.outerHeight(!0);
                i.x !== 0 && s + i.x > r && (i.x = 0, i.y = i.height), n._pushPosition(e, i.x, i.y), i.height = Math.max(i.y + o, i.height), i.x += s
            })
        },
        _fitRowsGetContainerSize: function () {
            return {
                height: this.fitRows.height
            }
        },
        _fitRowsResizeChanged: function () {
            return !0
        },
        _cellsByRowReset: function () {
            this.cellsByRow = {
                index: 0
            }, this._getSegments(), this._getSegments(!0)
        },
        _cellsByRowLayout: function (e) {
            var n = this,
                r = this.cellsByRow;
            e.each(function () {
                var e = t(this),
                    i = r.index % r.cols,
                    s = Math.floor(r.index / r.cols),
                    o = (i + .5) * r.columnWidth - e.outerWidth(!0) / 2,
                    u = (s + .5) * r.rowHeight - e.outerHeight(!0) / 2;
                n._pushPosition(e, o, u), r.index++
            })
        },
        _cellsByRowGetContainerSize: function () {
            return {
                height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
            }
        },
        _cellsByRowResizeChanged: function () {
            return this._checkIfSegmentsChanged()
        },
        _straightDownReset: function () {
            this.straightDown = {
                y: 0
            }
        },
        _straightDownLayout: function (e) {
            var n = this;
            e.each(function (e) {
                var r = t(this);
                n._pushPosition(r, 0, n.straightDown.y), n.straightDown.y += r.outerHeight(!0)
            })
        },
        _straightDownGetContainerSize: function () {
            return {
                height: this.straightDown.y
            }
        },
        _straightDownResizeChanged: function () {
            return !0
        },
        _masonryHorizontalReset: function () {
            this.masonryHorizontal = {}, this._getSegments(!0);
            var e = this.masonryHorizontal.rows;
            this.masonryHorizontal.rowXs = [];
            while (e--) this.masonryHorizontal.rowXs.push(0)
        },
        _masonryHorizontalLayout: function (e) {
            var n = this,
                r = n.masonryHorizontal;
            e.each(function () {
                var e = t(this),
                    i = Math.ceil(e.outerHeight(!0) / r.rowHeight);
                i = Math.min(i, r.rows);
                if (i === 1) n._masonryHorizontalPlaceBrick(e, r.rowXs);
                else {
                    var s = r.rows + 1 - i,
                        o = [],
                        u, a;
                    for (a = 0; a < s; a++) u = r.rowXs.slice(a, a + i), o[a] = Math.max.apply(Math, u);
                    n._masonryHorizontalPlaceBrick(e, o)
                }
            })
        },
        _masonryHorizontalPlaceBrick: function (e, t) {
            var n = Math.min.apply(Math, t),
                r = 0;
            for (var i = 0, s = t.length; i < s; i++)
                if (t[i] === n) {
                    r = i;
                    break
                }
            var o = n,
                u = this.masonryHorizontal.rowHeight * r;
            this._pushPosition(e, o, u);
            var a = n + e.outerWidth(!0),
                f = this.masonryHorizontal.rows + 1 - s;
            for (i = 0; i < f; i++) this.masonryHorizontal.rowXs[r + i] = a
        },
        _masonryHorizontalGetContainerSize: function () {
            var e = Math.max.apply(Math, this.masonryHorizontal.rowXs);
            return {
                width: e
            }
        },
        _masonryHorizontalResizeChanged: function () {
            return this._checkIfSegmentsChanged(!0)
        },
        _fitColumnsReset: function () {
            this.fitColumns = {
                x: 0,
                y: 0,
                width: 0
            }
        },
        _fitColumnsLayout: function (e) {
            var n = this,
                r = this.element.height(),
                i = this.fitColumns;
            e.each(function () {
                var e = t(this),
                    s = e.outerWidth(!0),
                    o = e.outerHeight(!0);
                i.y !== 0 && o + i.y > r && (i.x = i.width, i.y = 0), n._pushPosition(e, i.x, i.y), i.width = Math.max(i.x + s, i.width), i.y += o
            })
        },
        _fitColumnsGetContainerSize: function () {
            return {
                width: this.fitColumns.width
            }
        },
        _fitColumnsResizeChanged: function () {
            return !0
        },
        _cellsByColumnReset: function () {
            this.cellsByColumn = {
                index: 0
            }, this._getSegments(), this._getSegments(!0)
        },
        _cellsByColumnLayout: function (e) {
            var n = this,
                r = this.cellsByColumn;
            e.each(function () {
                var e = t(this),
                    i = Math.floor(r.index / r.rows),
                    s = r.index % r.rows,
                    o = (i + .5) * r.columnWidth - e.outerWidth(!0) / 2,
                    u = (s + .5) * r.rowHeight - e.outerHeight(!0) / 2;
                n._pushPosition(e, o, u), r.index++
            })
        },
        _cellsByColumnGetContainerSize: function () {
            return {
                width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
            }
        },
        _cellsByColumnResizeChanged: function () {
            return this._checkIfSegmentsChanged(!0)
        },
        _straightAcrossReset: function () {
            this.straightAcross = {
                x: 0
            }
        },
        _straightAcrossLayout: function (e) {
            var n = this;
            e.each(function (e) {
                var r = t(this);
                n._pushPosition(r, n.straightAcross.x, 0), n.straightAcross.x += r.outerWidth(!0)
            })
        },
        _straightAcrossGetContainerSize: function () {
            return {
                width: this.straightAcross.x
            }
        },
        _straightAcrossResizeChanged: function () {
            return !0
        }
    }, t.fn.imagesLoaded = function (e) {
        function n() {
            e.call(i, s)
        }

        function r(e) {
            var i = e.target;
            i.src !== u && t.inArray(i, a) === -1 && (a.push(i), --o <= 0 && (setTimeout(n), s.unbind(".imagesLoaded", r)))
        }
        var i = this,
            s = i.find("img").add(i.filter("img")),
            o = s.length,
            u = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
            a = [];
        return o || n(), s.bind("load.imagesLoaded error.imagesLoaded", r).each(function () {
            var e = this.src;
            this.src = u, this.src = e
        }), i
    };
    var x = function (t) {
        e.console && e.console.error(t)
    };
    t.fn.isotope = function (e, n) {
        if (typeof e == "string") {
            var r = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
                var n = t.data(this, "isotope");
                if (!n) {
                    x("cannot call methods on isotope prior to initialization; attempted to call method '" + e + "'");
                    return
                }
                if (!t.isFunction(n[e]) || e.charAt(0) === "_") {
                    x("no such method '" + e + "' for isotope instance");
                    return
                }
                n[e].apply(n, r)
            })
        } else this.each(function () {
            var r = t.data(this, "isotope");
            r ? (r.option(e), r._init(n)) : t.data(this, "isotope", new t.Isotope(e, this, n))
        });
        return this
    }
})(window, jQuery);
(function (e) {
    var t = e.event,
        n, r;
    n = t.special.debouncedresize = {
        setup: function () {
            e(this).on("resize", n.handler)
        },
        teardown: function () {
            e(this).off("resize", n.handler)
        },
        handler: function (e, i) {
            var s = this,
                o = arguments,
                u = function () {
                    e.type = "debouncedresize";
                    t.dispatch.apply(s, o)
                };
            r && clearTimeout(r);
            i ? u() : r = setTimeout(u, n.threshold)
        },
        threshold: 150
    }
})(jQuery);
(function (e) {
    var t = e(window),
        n = t.height();
    t.resize(function () {
        n = t.height()
    });
    e.fn.parallax = function (r, i, s) {
        function l() {
            var s = t.scrollTop();
            o.each(function () {
                var t = e(this),
                    f = t.offset().top,
                    l = u(t);
                if (f + l < s || f > s + n) return;
                o.css("backgroundPosition", r + " " + Math.round((a - s) * i) + "px")
            })
        }
        var o = e(this),
            u, a, f = 0;
        o.each(function () {
            a = o.offset().top
        });
        s ? u = function (e) {
            return e.outerHeight(!0)
        } : u = function (e) {
            return e.height()
        };
        if (arguments.length < 1 || r === null) r = "50%";
        if (arguments.length < 2 || i === null) i = .1;
        if (arguments.length < 3 || s === null) s = !0;
        t.bind("scroll", l).resize(l);
        l()
    }
})(jQuery);
(function (e) {
    e.fn.dcMegaMenu = function (t) {
        var n = {
            classParent: "dc-mega",
            classContainer: "sub-container",
            classSubParent: "mega-hdr",
            classSubLink: "mega-hdr",
            classWidget: "dc-extra",
            rowItems: 6,
            speed: "fast",
            effect: "fade",
            event: "hover",
            fullWidth: !1,
            onLoad: function () {},
            beforeOpen: function () {},
            beforeClose: function () {}
        }, r = parseInt(e(".mk-mega-nav").attr("data-megawidth")) - 100,
            t = e.extend(n, t),
            i = this;
        return i.each(function (t) {
            function l() {
                var t = e(".sub", this);
                e(this).addClass("mega-hover");
                n.effect === "fade" && e(t).fadeIn(n.speed);
                n.effect === "slide" && e(t).show(n.speed);
                n.beforeOpen.call(this)
            }

            function c(t) {
                var r = e(".sub", t);
                e(t).addClass("mega-hover");
                n.effect === "fade" && e(r).fadeIn(n.speed);
                n.effect === "slide" && e(r).show(n.speed);
                n.beforeOpen.call(this)
            }

            function h() {
                var t = e(".sub", this);
                e(this).removeClass("mega-hover");
                e(t).hide();
                n.beforeClose.call(this)
            }

            function p(t) {
                var r = e(".sub", t);
                e(t).removeClass("mega-hover");
                e(r).hide();
                n.beforeClose.call(this)
            }

            function d() {
                e("li", i).removeClass("mega-hover");
                e(".sub", i).hide()
            }

            function v() {
                var t = u + "-li",
                    v = i.outerWidth();
                e("> li", i).each(function () {
                    var u = e("> ul", this),
                        l = e("> a", this);
                    if (u.length) {
                        u.addClass("sub").wrap('<div class="' + a + '" />');
                        var c = e(this).position();
                        pl = c.left;
                        if (e("ul.mk_mega_menu", u).length) {
                            e(this).addClass(t);
                            e("." + a, this).addClass("mega");
                            e("> li", u).each(function () {
                                if (!e(this).hasClass(f)) {
                                    e(this).addClass("mega-unit");
                                    if (e("> ul", this).length) {
                                        e(this).addClass(s);
                                        e("> a", this).addClass(s + "-a")
                                    } else {
                                        e(this).addClass(o);
                                        e("> a", this).addClass(o + "-a")
                                    }
                                }
                            });
                            var h = e(".mega-unit", this);
                            rowSize = parseInt(n.rowItems);
                            for (var p = 0; p < h.length; p += rowSize) h.slice(p, p + rowSize).wrapAll('<div class="row" />');
                            u.show();
                            var d = e(this).width(),
                                m = pl + d,
                                g = v - m,
                                y = u.outerWidth(),
                                b = u.parent("." + a).outerWidth(),
                                w = b - y;
                            if (n.fullWidth === !0) {
                                var E = v - w;
                                u.parent("." + a).css({
                                    width: r
                                });
                                i.addClass("full-width")
                            }
                            var S = e(".mega-unit", u).outerWidth(!0),
                                x = e(".row:eq(0) .mega-unit", u).length,
                                T = S * x,
                                N = T + w;
                            e(".row", this).each(function () {
                                e(".mega-unit:last", this).addClass("last");
                                var t = undefined;
                                e(".mega-unit > a", this).each(function () {
                                    var n = parseInt(e(this).height());
                                    if (t === undefined || t < n) t = n
                                });
                                e(".mega-unit > a", this).css("height", t + "px");
                                e(this).css("width", T + "px")
                            });
                            if (n.fullWidth === !0) L = {
                                left: 0
                            };
                            else {
                                var C = g < C ? C + C - g : (N - d) / 2,
                                    k = pl - C,
                                    L = {
                                        left: pl + "px",
                                        marginLeft: -C + "px"
                                    };
                                k < 0 ? L = {
                                    left: 0
                                } : g < C && (L = {
                                    right: 0
                                })
                            }
                            e("." + a, this).css(L);
                            e(".row", u).each(function () {
                                var t = e(this).height();
                                e(".mega-unit", this).css({
                                    height: t + "px"
                                });
                                e(this).parent(".row").css({
                                    height: t + "px"
                                })
                            });
                            u.hide()
                        } else e("." + a, this).addClass("non-mega").css("left", pl + "px"); if (!e("ul", u).hasClass("mk_mega_menu")) {
                            e("." + a, this).addClass("mk-nested-sub");
                            $mk_nested_ul = e(".mk-nested-sub > ul", this);
                            $mk_nested_width = $mk_nested_ul.width();
                            $mk_nested_ul.find("ul").css("left", $mk_nested_width + "px");
                            $mk_nested_ul.find("li").each(function () {
                                var t = e("> ul", this);
                                t.length && jQuery(this).append('<i class="mk-mega-icon mk-icon-angle-right"></i>');
                                jQuery(this).hover(function () {
                                    jQuery(this).find("> ul").stop(!0, !0).delay(100).fadeIn(100)
                                }, function () {
                                    jQuery(this).find("> ul").stop(!0, !0).delay(100).fadeOut(100)
                                })
                            })
                        }
                    }
                });
                var m = e("> li > a", i).outerHeight(!0);
                e("." + a, i).css({
                    top: m + "px"
                }).css("z-index", "1000");
                if (n.event == "hover") {
                    var g = {
                        sensitivity: 1,
                        interval: 30,
                        over: l,
                        timeout: 50,
                        out: h
                    };
                    e("li", i).hoverIntent(g)
                }
                if (n.event == "click") {
                    e("body").mouseup(function (t) {
                        e(t.target).parents(".mega-hover").length || d()
                    });
                    e("> li > a." + u, i).click(function (t) {
                        var n = e(this).parent();
                        n.hasClass("mega-hover") ? p(n) : c(n);
                        t.preventDefault()
                    })
                }
                n.onLoad.call(this)
            }
            var s = n.classSubParent,
                o = n.classSubLink,
                u = n.classParent,
                a = n.classContainer,
                f = n.classWidget;
            v()
        })
    }
})(jQuery);
(function (e) {
    e.fn.hoverIntent = function (t, n) {
        var r = {
            sensitivity: 7,
            interval: 100,
            timeout: 0
        };
        r = e.extend(r, n ? {
            over: t,
            out: n
        } : t);
        var i, s, o, u, a = function (e) {
                i = e.pageX;
                s = e.pageY
            }, f = function (t, n) {
                n.hoverIntent_t = clearTimeout(n.hoverIntent_t);
                if (Math.abs(o - i) + Math.abs(u - s) < r.sensitivity) {
                    e(n).unbind("mousemove", a);
                    n.hoverIntent_s = 1;
                    return r.over.apply(n, [t])
                }
                o = i;
                u = s;
                n.hoverIntent_t = setTimeout(function () {
                    f(t, n)
                }, r.interval)
            }, l = function (e, t) {
                t.hoverIntent_t = clearTimeout(t.hoverIntent_t);
                t.hoverIntent_s = 0;
                return r.out.apply(t, [e])
            }, c = function (t) {
                var n = (t.type == "mouseover" ? t.fromElement : t.toElement) || t.relatedTarget;
                while (n && n != this) try {
                    n = n.parentNode
                } catch (t) {
                    n = this
                }
                if (n == this) return !1;
                var i = jQuery.extend({}, t),
                    s = this;
                s.hoverIntent_t && (s.hoverIntent_t = clearTimeout(s.hoverIntent_t));
                if (t.type == "mouseover") {
                    o = i.pageX;
                    u = i.pageY;
                    e(s).bind("mousemove", a);
                    s.hoverIntent_s != 1 && (s.hoverIntent_t = setTimeout(function () {
                        f(i, s)
                    }, r.interval))
                } else {
                    e(s).unbind("mousemove", a);
                    s.hoverIntent_s == 1 && (s.hoverIntent_t = setTimeout(function () {
                        l(i, s)
                    }, r.timeout))
                }
            };
        return this.mouseover(c).mouseout(c)
    }
})(jQuery);
(function (e) {
    e.fn.addBack = e.fn.addBack || e.fn.andSelf;
    e.fn.extend({
        actual: function (t, n) {
            if (!this[t]) throw '$.actual => The jQuery method "' + t + '" you called does not exist';
            var r = {
                absolute: !1,
                clone: !1,
                includeMargin: !1
            }, i = e.extend(r, n),
                s = this.eq(0),
                o, u;
            if (i.clone === !0) {
                o = function () {
                    var e = "position: absolute !important; top: -1000 !important; ";
                    s = s.clone().attr("style", e).appendTo("body")
                };
                u = function () {
                    s.remove()
                }
            } else {
                var f = [],
                    l = "",
                    c;
                o = function () {
                    c = s.parents().addBack().filter(":hidden");
                    l += "visibility: hidden !important; display: block !important; ";
                    i.absolute === !0 && (l += "position: absolute !important; ");
                    c.each(function () {
                        var t = e(this);
                        f.push(t.attr("style"));
                        t.attr("style", l)
                    })
                };
                u = function () {
                    c.each(function (t) {
                        var n = e(this),
                            r = f[t];
                        r === undefined ? n.removeAttr("style") : n.attr("style", r)
                    })
                }
            }
            o();
            var h = /(outer)/.test(t) ? s[t](i.includeMargin) : s[t]();
            u();
            return h
        }
    })
})(jQuery);
(function (e) {
    function t(t, n, r) {
        var i = t.offset().top,
            s = t.offset().left,
            o = r.position.split(/,?\s+/),
            u = o[0];
        o = o[1];
        i -= n.outerHeight() - r.offset[0];
        s += t.outerWidth() + r.offset[1];
        /iPad/i.test(navigator.userAgent) && (i -= e(window).scrollTop());
        r = n.outerHeight() + t.outerHeight();
        u == "center" && (i += r / 2);
        u == "bottom" && (i += r);
        t = t.outerWidth();
        o == "center" && (s -= (t + n.outerWidth()) / 2);
        o == "left" && (s -= t);
        return {
            top: i,
            left: s
        }
    }

    function n(e) {
        function t() {
            return this.getAttribute("type") == e
        }
        t.key = "[type=" + e + "]";
        return t
    }

    function r(n, r, i) {
        function s(t, n, r) {
            if ( !! i.grouped || !t.length) {
                var s;
                if (r === !1 || e.isArray(r)) {
                    s = f.messages[n.key || n] || f.messages["*"];
                    s = s[i.lang] || f.messages["*"].en;
                    (n = s.match(/\$\d/g)) && e.isArray(r) && e.each(n, function (e) {
                        s = s.replace(this, r[e])
                    })
                } else s = r[i.lang] || r;
                t.push(s)
            }
        }
        var u = this,
            a = r.add(u);
        n = n.not(":button, :image, :reset, :submit");
        e.extend(u, {
            getConf: function () {
                return i
            },
            getForm: function () {
                return r
            },
            getInputs: function () {
                return n
            },
            reflow: function () {
                n.each(function () {
                    var n = e(this),
                        r = n.data("msg.el");
                    if (r) {
                        n = t(n, r, i);
                        r.css({
                            top: n.top,
                            left: n.left
                        })
                    }
                });
                return u
            },
            invalidate: function (t, r) {
                if (!r) {
                    var s = [];
                    e.each(t, function (e, t) {
                        e = n.filter("[name='" + e + "']");
                        if (e.length) {
                            e.trigger("OI", [t]);
                            s.push({
                                input: e,
                                messages: [t]
                            })
                        }
                    });
                    t = s;
                    r = e.Event()
                }
                r.type = "onFail";
                a.trigger(r, [t]);
                r.isDefaultPrevented() || c[i.effect][0].call(u, t, r);
                return u
            },
            reset: function (t) {
                t = t || n;
                t.removeClass(i.errorClass).each(function () {
                    var t = e(this).data("msg.el");
                    if (t) {
                        t.remove();
                        e(this).data("msg.el", null)
                    }
                }).unbind(i.errorInputEvent || "");
                return u
            },
            destroy: function () {
                r.unbind(i.formEvent + ".V").unbind("reset.V");
                n.unbind(i.inputEvent + ".V").unbind("change.V");
                return u.reset()
            },
            checkValidity: function (t, r) {
                t = t || n;
                t = t.not(":disabled");
                if (!t.length) return !0;
                r = r || e.Event();
                r.type = "onBeforeValidate";
                a.trigger(r, [t]);
                if (r.isDefaultPrevented()) return r.result;
                var f = [];
                t.not(":radio:not(:checked)").each(function () {
                    var t = [],
                        n = e(this).data("messages", t),
                        c = o && n.is(":date") ? "onHide.v" : i.errorInputEvent + ".v";
                    n.unbind(c);
                    e.each(l, function () {
                        var e = this,
                            o = e[0];
                        if (n.filter(o).length) {
                            e = e[1].call(u, n, n.val());
                            if (e !== !0) {
                                r.type = "onBeforeFail";
                                a.trigger(r, [n, o]);
                                if (r.isDefaultPrevented()) return !1;
                                var f = n.attr(i.messageAttr);
                                if (f) {
                                    t = [f];
                                    return !1
                                }
                                s(t, o, e)
                            }
                        }
                    });
                    if (t.length) {
                        f.push({
                            input: n,
                            messages: t
                        });
                        n.trigger("OI", [t]);
                        i.errorInputEvent && n.bind(c, function (e) {
                            u.checkValidity(n, e)
                        })
                    }
                    if (i.singleError && f.length) return !1
                });
                var h = c[i.effect];
                if (!h) throw 'Validator: cannot find effect "' + i.effect + '"';
                if (f.length) {
                    u.invalidate(f, r);
                    return !1
                }
                h[1].call(u, t, r);
                r.type = "onSuccess";
                a.trigger(r, [t]);
                t.unbind(i.errorInputEvent + ".v");
                return !0
            }
        });
        e.each("onBeforeValidate,onBeforeFail,onFail,onSuccess".split(","), function (t, n) {
            e.isFunction(i[n]) && e(u).bind(n, i[n]);
            u[n] = function (t) {
                t && e(u).bind(n, t);
                return u
            }
        });
        i.formEvent && r.bind(i.formEvent + ".V", function (e) {
            if (!u.checkValidity(null, e)) return e.preventDefault()
        });
        r.bind("reset.V", function () {
            u.reset()
        });
        n[0] && n[0].validity && n.each(function () {
            this.oninvalid = function () {
                return !1
            }
        });
        r[0] && (r[0].checkValidity = u.checkValidity);
        i.inputEvent && n.bind(i.inputEvent + ".V", function (t) {
            u.checkValidity(e(this), t)
        });
        n.filter(":checkbox, select").filter("[required]").bind("change.V", function (t) {
            var n = e(this);
            (this.checked || n.is("select") && e(this).val()) && c[i.effect][1].call(u, n, t)
        });
        var p = n.filter(":radio").change(function (e) {
            u.checkValidity(p, e)
        });
        e(window).resize(function () {
            u.reflow()
        })
    }
    e.tools = e.tools || {
        version: "1.2.5"
    };
    var i = /\[type=([a-z]+)\]/,
        s = /^-?[0-9]*(\.[0-9]+)?$/,
        o = e.tools.dateinput,
        u = /^([a-z0-9_\.\-\+]+)@([\da-z\.\-]+)\.([a-z\.]{2,6})$/i,
        a = /^(https?:\/\/)?[\da-z\.\-]+\.[a-z\.]{2,6}[#&+_\?\/\w \.\-=]*$/i,
        f;
    f = e.tools.validator = {
        conf: {
            grouped: !1,
            effect: "default",
            errorClass: "invalid",
            inputEvent: null,
            errorInputEvent: "keyup",
            formEvent: "submit",
            lang: "en",
            message: "<div/>",
            messageAttr: "data-message",
            messageClass: "error",
            offset: [0, 0],
            position: "center right",
            singleError: !1,
            speed: "normal"
        },
        messages: {
            "*": {
                en: "Please correct this value"
            }
        },
        localize: function (t, n) {
            e.each(n, function (e, n) {
                f.messages[e] = f.messages[e] || {};
                f.messages[e][t] = n
            })
        },
        localizeFn: function (t, n) {
            f.messages[t] = f.messages[t] || {};
            e.extend(f.messages[t], n)
        },
        fn: function (t, r, s) {
            if (e.isFunction(r)) s = r;
            else {
                typeof r == "string" && (r = {
                    en: r
                });
                this.messages[t.key || t] = r
            } if (r = i.exec(t)) t = n(r[1]);
            l.push([t, s])
        },
        addEffect: function (e, t, n) {
            c[e] = [t, n]
        }
    };
    var l = [],
        c = {
            "default": [
                function (n) {
                    var r = this.getConf();
                    e.each(n, function (n, i) {
                        n = i.input;
                        n.addClass(r.errorClass);
                        var s = n.data("msg.el");
                        if (!s) {
                            s = e(r.message).addClass(r.messageClass).appendTo(document.body);
                            n.data("msg.el", s)
                        }
                        s.css({
                            visibility: "hidden"
                        }).find("p").remove();
                        e.each(i.messages, function (t, n) {
                            e("<p/>").html(n).appendTo(s)
                        });
                        s.outerWidth() == s.parent().width() && s.add(s.find("p")).css({
                            display: "inline"
                        });
                        i = t(n, s, r);
                        s.css({
                            visibility: "visible",
                            position: "absolute",
                            top: i.top,
                            left: i.left
                        }).fadeIn(r.speed)
                    })
                },
                function (t) {
                    var n = this.getConf();
                    t.removeClass(n.errorClass).each(function () {
                        var t = e(this).data("msg.el");
                        t && t.css({
                            visibility: "hidden"
                        })
                    })
                }
            ]
        };
    e.each("email,url,number".split(","), function (t, n) {
        e.expr[":"][n] = function (e) {
            return e.getAttribute("type") === n
        }
    });
    e.fn.oninvalid = function (e) {
        return this[e ? "bind" : "trigger"]("OI", e)
    };
    f.fn(":email", "Please enter a valid email address", function (e, t) {
        return !t || u.test(t)
    });
    f.fn(":url", "Please enter a valid URL", function (e, t) {
        return !t || a.test(t)
    });
    f.fn(":number", "Please enter a numeric value.", function (e, t) {
        return s.test(t)
    });
    f.fn("[max]", "Please enter a value smaller than $1", function (e, t) {
        if (t === "" || o && e.is(":date")) return !0;
        e = e.attr("max");
        return parseFloat(t) <= parseFloat(e) ? !0 : [e]
    });
    f.fn("[min]", "Please enter a value larger than $1", function (e, t) {
        if (t === "" || o && e.is(":date")) return !0;
        e = e.attr("min");
        return parseFloat(t) >= parseFloat(e) ? !0 : [e]
    });
    f.fn("[required]", "Please complete this mandatory field.", function (e, t) {
        return e.is(":checkbox") ? e.is(":checked") : !! t
    });
    f.fn("[pattern]", function (e) {
        var t = new RegExp("^" + e.attr("pattern") + "$");
        return t.test(e.val())
    });
    e.fn.validator = function (t) {
        var n = this.data("validator");
        if (n) {
            n.destroy();
            this.removeData("validator")
        }
        t = e.extend(!0, {}, f.conf, t);
        if (this.is("form")) return this.each(function () {
            var i = e(this);
            n = new r(i.find(":input"), i, t);
            i.data("validator", n)
        });
        n = new r(this, this.eq(0).closest("form"), t);
        return this.data("validator", n)
    }
})(jQuery);
(function (e) {
    "use strict";
    e.belowthefold = function (t, n) {
        var r = e(window).height() + e(window).scrollTop();
        return r <= e(t).offset().top - n.threshold
    };
    e.abovethetop = function (t, n) {
        var r = e(window).scrollTop();
        return r >= e(t).offset().top + e(t).height() - n.threshold
    };
    e.rightofscreen = function (t, n) {
        var r = e(window).width() + e(window).scrollLeft();
        return r <= e(t).offset().left - n.threshold
    };
    e.leftofscreen = function (t, n) {
        var r = e(window).scrollLeft();
        return r >= e(t).offset().left + e(t).width() - n.threshold
    };
    e.inviewport = function (t, n) {
        return !e.rightofscreen(t, n) && !e.leftofscreen(t, n) && !e.belowthefold(t, n) && !e.abovethetop(t, n)
    };
    e.extend(e.expr[":"], {
        "below-the-fold": function (t) {
            return e.belowthefold(t, {
                threshold: 0
            })
        },
        "above-the-top": function (t) {
            return e.abovethetop(t, {
                threshold: 0
            })
        },
        "left-of-screen": function (t) {
            return e.leftofscreen(t, {
                threshold: 0
            })
        },
        "right-of-screen": function (t) {
            return e.rightofscreen(t, {
                threshold: 0
            })
        },
        "in-viewport": function (t) {
            return e.inviewport(t, {
                threshold: -40
            })
        }
    })
})(jQuery);
(function (e, t) {
    var n, r, i;
    n = r = e.jQuery;
    i = r.ScrollTo = r.ScrollTo || {
        config: {
            duration: 400,
            easing: "swing",
            callback: t,
            durationMode: "each",
            offsetTop: 0,
            offsetLeft: 0
        },
        configure: function (e) {
            r.extend(i.config, e || {});
            return this
        },
        scroll: function (t, n) {
            var s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S;
            s = t.pop();
            o = s.$container;
            u = o.get(0);
            a = s.$target;
            f = r("<span/>").css({
                position: "absolute",
                top: "0px",
                left: "0px"
            });
            l = o.css("position");
            o.css("position", "relative");
            f.appendTo(o);
            v = f.offset().top;
            m = a.offset().top;
            g = m - v - parseInt(n.offsetTop, 10);
            y = f.offset().left;
            b = a.offset().left;
            w = b - y - parseInt(n.offsetLeft, 10);
            c = u.scrollTop;
            h = u.scrollLeft;
            f.remove();
            o.css("position", l);
            E = {};
            S = function (e) {
                t.length === 0 ? typeof n.callback == "function" && n.callback.apply(this, [e]) : i.scroll(t, n);
                return !0
            };
            if (n.onlyIfOutside) {
                p = c + o.height();
                d = h + o.width();
                c < g && g < p && (g = c);
                h < w && w < d && (w = h)
            }
            g !== c && (E.scrollTop = g);
            w !== h && (E.scrollLeft = w);
            if (r.browser.safari && u === document.body) {
                e.scrollTo(E.scrollLeft, E.scrollTop);
                S()
            } else E.scrollTop || E.scrollLeft ? o.animate(E, n.duration, n.easing, S) : S();
            return !0
        },
        fn: function (e) {
            var t, n, s, o;
            t = [];
            var u = r(this);
            if (u.length === 0) return this;
            n = r.extend({}, i.config, e);
            s = u.parent();
            o = s.get(0);
            while (s.length === 1 && o !== document.body && o !== document) {
                var a, f;
                a = s.css("overflow-y") !== "visible" && o.scrollHeight !== o.clientHeight;
                f = s.css("overflow-x") !== "visible" && o.scrollWidth !== o.clientWidth;
                if (a || f) {
                    t.push({
                        $container: s,
                        $target: u
                    });
                    u = s
                }
                s = s.parent();
                o = s.get(0)
            }
            t.push({
                $container: r(r.browser.msie || r.browser.mozilla ? "html" : "body"),
                $target: u
            });
            n.durationMode === "all" && (n.duration /= t.length);
            i.scroll(t, n);
            return this
        }
    };
    r.fn.ScrollTo = r.ScrollTo.fn
})(window);
(function (e) {
    function t(t, r, i) {
        var s = this,
            u = t.add(this),
            a = t.find(i.toolsTabs),
            f = r.jquery ? r : t.children(r),
            l;
        a.length || (a = t.children());
        f.length || (f = t.parent().find(r));
        f.length || (f = e(r));
        e.extend(this, {
            click: function (t, r) {
                var f = a.eq(t);
                if (typeof t == "string" && t.replace("#", "")) {
                    f = a.filter("[href*=" + t.replace("#", "") + "]");
                    t = Math.max(a.index(f), 0)
                }
                if (i.rotate) {
                    var p = a.length - 1;
                    if (t < 0) return s.click(p, r);
                    if (t > p) return s.click(0, r)
                }
                if (!f.length) {
                    if (l >= 0) return s;
                    t = i.initialIndex;
                    f = a.eq(t)
                }
                if (t === l) return s;
                r = r || e.Event();
                r.type = "onBeforeClick";
                u.trigger(r, [t]);
                if (!r.isDefaultPrevented()) {
                    n[i.effect].call(s, t, function () {
                        r.type = "onClick";
                        u.trigger(r, [t])
                    });
                    l = t;
                    a.removeClass(i.current);
                    f.addClass(i.current);
                    return s
                }
            },
            getConf: function () {
                return i
            },
            getTabs: function () {
                return a
            },
            getPanes: function () {
                return f
            },
            getCurrentPane: function () {
                return f.eq(l)
            },
            getCurrentTab: function () {
                return a.eq(l)
            },
            getIndex: function () {
                return l
            },
            next: function () {
                return s.click(l + 1)
            },
            prev: function () {
                return s.click(l - 1)
            },
            destroy: function () {
                a.unbind(i.event).removeClass(i.current);
                f.find("a[href^=#]").unbind("click.T");
                return s
            }
        });
        e.each("onBeforeClick,onClick".split(","), function (t, n) {
            e.isFunction(i[n]) && e(s).bind(n, i[n]);
            s[n] = function (t) {
                t && e(s).bind(n, t);
                return s
            }
        });
        if (i.history && e.fn.history) {
            e.tools.history.init(a);
            i.event = "history"
        }
        a.each(function (t) {
            e(this).bind(i.event, function (e) {
                s.click(t, e);
                return e.preventDefault()
            })
        });
        f.find("a[href^=#]").bind("click.T", function (t) {
            s.click(e(this).attr("href"), t)
        });
        location.hash && i.toolsTabs == "a" && t.find("[href=" + location.hash + "]").length ? s.click(location.hash) : (i.initialIndex === 0 || i.initialIndex > 0) && s.click(i.initialIndex)
    }
    e.tools = e.tools || {
        version: "1.2.5"
    };
    e.tools.toolsTabs = {
        conf: {
            toolsTabs: "a",
            current: "current",
            onBeforeClick: null,
            onClick: null,
            effect: "default",
            initialIndex: 0,
            event: "click",
            rotate: !1,
            history: !1
        },
        addEffect: function (e, t) {
            n[e] = t
        }
    };
    var n = {
        "default": function (e, t) {
            this.getPanes().addClass("visuallyhidden").eq(e).removeClass("visuallyhidden");
            t.call()
        },
        fade: function (e, t) {
            var n = this.getConf(),
                r = n.fadeOutSpeed,
                i = this.getPanes();
            r ? i.fadeOut(r) : i.hide();
            i.eq(e).fadeIn(n.fadeInSpeed, t)
        },
        slide: function (e, t) {
            this.getPanes().slideUp(100);
            this.getPanes().eq(e).slideDown(100, t)
        },
        ajax: function (e, t) {
            this.getPanes().eq(0).load(this.getTabs().eq(e).attr("href"), t)
        }
    }, r;
    e.tools.toolsTabs.addEffect("horizontal", function (t, n) {
        r || (r = this.getPanes().eq(0).width());
        this.getCurrentPane().animate({
            width: 0
        }, function () {
            e(this).hide()
        });
        this.getPanes().eq(t).animate({
            width: r
        }, function () {
            e(this).show();
            n.call()
        })
    });
    e.fn.toolsTabs = function (n, r) {
        var i = this.data("toolsTabs");
        if (i) {
            i.destroy();
            this.removeData("toolsTabs")
        }
        e.isFunction(r) && (r = {
            onBeforeClick: r
        });
        r = e.extend({}, e.tools.toolsTabs.conf, r);
        this.each(function () {
            i = new t(e(this), n, r);
            e(this).data("toolsTabs", i)
        });
        return r.api ? i : this
    }
})(jQuery);
(function (e) {
    e.fn.extend({
        photostream_widget: function (t) {
            function r(t, n, r, i) {
                var s = t.feed;
                if (!s) return !1;
                var o = "";
                o += "<ul>";
                for (var u = 0; u < s.entries.length; u++) {
                    var a = s.entries[u],
                        f = a.content;
                    o += "<li>" + f + '<div class="clearboth"></div></li>'
                }
                o += "</ul>";
                n.removeClass("photostream");
                n.html(o);
                n.find("li").each(function () {
                    pin_img_src = e(this).find("img").attr("src");
                    pin_img_src = pin_img_src.replace("_b.jpg", "_c.jpg");
                    pin_url = "http://www.pinterest.com" + e(this).find("a").attr("href");
                    pin_desc = e(this).find("p:nth-child(2)").html();
                    pin_desc = pin_desc.replace("'", "`");
                    e(this).empty();
                    e(this).append('<div class="pinterest-widget-img"><img src="' + pin_img_src + '" alt="' + pin_desc + '"><div class="pinterest-item-overlay"><a target="_blank" href="' + pin_url + '" class="pinterest-widget-permalink"></a><a href="' + pin_img_src + '" class="mk-pinterest-lightbox pinterest-widget-zoom" rel="' + n.attr("id") + '"></a></div></div>');
                    e(this).append("<a class='pinterest-widget-title' target='_blank' href='" + pin_url + "' title='" + pin_desc + "'>" + pin_desc + "</a>")
                })
            }
            var n = {
                user: "artbees",
                limit: 10,
                social_network: "instagram"
            }, t = e.extend(n, t);
            return this.each(function () {
                var n = t,
                    r = e(this);
                if (n.social_network == "instagram") {
                    r.append("<ul></ul>");
                    var i = "15317038.22c41e6.6c58236d21254b12a6de0a9c4ebd6787";
                    url = "https://api.instagram.com/v1/users/search?q=" + n.user + "&access_token=" + i + "&count=10&callback=?";
                    e.getJSON(url, function (t) {
                        e.each(t.data, function (t, s) {
                            var u = s.username;
                            if (u == n.user) {
                                var a = s.id;
                                if (a != "") {
                                    url = "https://api.instagram.com/v1/users/" + a + "/media/recent/?access_token=" + i + "&count=" + n.limit + "&callback=?";
                                    e.getJSON(url, function (t) {
                                        e.each(t.data, function (t, n) {
                                            var i = n.images.thumbnail.url,
                                                s = n.link,
                                                o = "";
                                            n.caption != null && (o = n.caption.text);
                                            var u = e("<img/>").attr({
                                                src: i,
                                                alt: o
                                            }),
                                                a = e("<a/>").attr({
                                                    href: s,
                                                    target: "_blank",
                                                    title: o
                                                }),
                                                f = e(a).append(u),
                                                l = e("<li/>").append(f);
                                            e("ul", r).append(l)
                                        })
                                    })
                                }
                            }
                        })
                    })
                }
            })
        }
    })
})(jQuery);
(function (e) {
    e.fn.countdown = function (t, n) {
        function i() {
            eventDate = Date.parse(r.date) / 1e3;
            currentDate = Math.floor(e.now() / 1e3);
            if (eventDate <= currentDate) {
                n.call(this);
                clearInterval(interval)
            }
            seconds = eventDate - currentDate;
            days = Math.floor(seconds / 86400);
            seconds -= days * 60 * 60 * 24;
            hours = Math.floor(seconds / 3600);
            seconds -= hours * 60 * 60;
            minutes = Math.floor(seconds / 60);
            seconds -= minutes * 60;
            days == 1 ? thisEl.find(".timeRefDays").text("day") : thisEl.find(".timeRefDays").text("days");
            hours == 1 ? thisEl.find(".timeRefHours").text("hour") : thisEl.find(".timeRefHours").text("hours");
            minutes == 1 ? thisEl.find(".timeRefMinutes").text("minute") : thisEl.find(".timeRefMinutes").text("minutes");
            seconds == 1 ? thisEl.find(".timeRefSeconds").text("second") : thisEl.find(".timeRefSeconds").text("seconds");
            if (r["format"] == "on") {
                days = String(days).length >= 2 ? days : "0" + days;
                hours = String(hours).length >= 2 ? hours : "0" + hours;
                minutes = String(minutes).length >= 2 ? minutes : "0" + minutes;
                seconds = String(seconds).length >= 2 ? seconds : "0" + seconds
            }
            if (!isNaN(eventDate)) {
                thisEl.find(".days").text(days);
                thisEl.find(".hours").text(hours);
                thisEl.find(".minutes").text(minutes);
                thisEl.find(".seconds").text(seconds)
            } else {
                alert("Invalid date. Here's an example: 12 Tuesday 2012 17:30:00");
                clearInterval(interval)
            }
        }
        thisEl = e(this);
        var r = {
            date: null,
            format: null
        };
        t && e.extend(r, t);
        i();
        interval = setInterval(i, 1e3)
    }
})(jQuery);
(function (e) {
    e.flexslider = function (t, n) {
        var r = e(t),
            i = e.extend({}, e.flexslider.defaults, n),
            s = i.namespace,
            o = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
            u = o ? "touchend" : "click",
            a = i.direction === "vertical",
            f = i.reverse,
            l = i.itemWidth > 0,
            c = i.animation === "fade",
            h = i.asNavFor !== "",
            p = {};
        e.data(t, "flexslider", r);
        p = {
            init: function () {
                r.animating = !1;
                r.currentSlide = i.startAt;
                r.animatingTo = r.currentSlide;
                r.atEnd = r.currentSlide === 0 || r.currentSlide === r.last;
                r.containerSelector = i.selector.substr(0, i.selector.search(" "));
                r.slides = e(i.selector, r);
                r.container = e(r.containerSelector, r);
                r.count = r.slides.length;
                r.syncExists = e(i.sync).length > 0;
                i.animation === "slide" && (i.animation = "swing");
                r.prop = a ? "top" : "marginLeft";
                r.args = {};
                r.manualPause = !1;
                r.transitions = !i.video && !c && i.useCSS && function () {
                    var e = document.createElement("div"),
                        t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var n in t)
                        if (e.style[t[n]] !== undefined) {
                            r.pfx = t[n].replace("Perspective", "").toLowerCase();
                            r.prop = "-" + r.pfx + "-transform";
                            return !0
                        }
                    return !1
                }();
                i.controlsContainer !== "" && (r.controlsContainer = e(i.controlsContainer).length > 0 && e(i.controlsContainer));
                i.manualControls !== "" && (r.manualControls = e(i.manualControls).length > 0 && e(i.manualControls));
                if (i.randomize) {
                    r.slides.sort(function () {
                        return Math.round(Math.random()) - .5
                    });
                    r.container.empty().append(r.slides)
                }
                r.doMath();
                h && p.asNav.setup();
                r.setup("init");
                i.controlNav && p.controlNav.setup();
                i.directionNav && p.directionNav.setup();
                i.keyboard && (e(r.containerSelector).length === 1 || i.multipleKeyboard) && e(document).bind("keyup", function (e) {
                    var t = e.keyCode;
                    if (!r.animating && (t === 39 || t === 37)) {
                        var n = t === 39 ? r.getTarget("next") : t === 37 ? r.getTarget("prev") : !1;
                        r.flexAnimate(n, i.pauseOnAction)
                    }
                });
                i.mousewheel && r.bind("mousewheel", function (e, t, n, s) {
                    e.preventDefault();
                    var o = t < 0 ? r.getTarget("next") : r.getTarget("prev");
                    r.flexAnimate(o, i.pauseOnAction)
                });
                i.pausePlay && p.pausePlay.setup();
                if (i.slideshow) {
                    i.pauseOnHover && r.hover(function () {
                        !r.manualPlay && !r.manualPause && r.pause()
                    }, function () {
                        !r.manualPause && !r.manualPlay && r.play()
                    });
                    i.initDelay > 0 ? setTimeout(r.play, i.initDelay) : r.play()
                }
                o && i.touch && p.touch();
                (!c || c && i.smoothHeight) && e(window).bind("resize focus", p.resize);
                setTimeout(function () {
                    i.start(r)
                }, 200)
            },
            asNav: {
                setup: function () {
                    r.asNav = !0;
                    r.animatingTo = Math.floor(r.currentSlide / r.move);
                    r.currentItem = r.currentSlide;
                    r.slides.removeClass(s + "active-slide").eq(r.currentItem).addClass(s + "active-slide");
                    r.slides.click(function (t) {
                        t.preventDefault();
                        var n = e(this),
                            s = n.index();
                        if (!e(i.asNavFor).data("flexslider").animating && !n.hasClass("active")) {
                            r.direction = r.currentItem < s ? "next" : "prev";
                            r.flexAnimate(s, i.pauseOnAction, !1, !0, !0)
                        }
                    })
                }
            },
            controlNav: {
                setup: function () {
                    r.manualControls ? p.controlNav.setupManual() : p.controlNav.setupPaging()
                },
                setupPaging: function () {
                    var t = i.controlNav === "thumbnails" ? "control-thumbs" : "control-paging",
                        n = 1,
                        a;
                    r.controlNavScaffold = e('<ol class="' + s + "control-nav " + s + t + '"></ol>');
                    if (r.pagingCount > 1)
                        for (var f = 0; f < r.pagingCount; f++) {
                            a = i.controlNav === "thumbnails" ? '<img src="' + r.slides.eq(f).attr("data-thumb") + '"/>' : '<a><i class="mk-icon-circle-blank"></i></a>';
                            r.controlNavScaffold.append("<li>" + a + "</li>");
                            n++
                        }
                    r.controlsContainer ? e(r.controlsContainer).append(r.controlNavScaffold) : r.append(r.controlNavScaffold);
                    p.controlNav.set();
                    p.controlNav.active();
                    r.controlNavScaffold.delegate("a, img", u, function (t) {
                        t.preventDefault();
                        var n = e(this),
                            o = r.controlNav.index(n);
                        if (!n.hasClass(s + "active")) {
                            r.direction = o > r.currentSlide ? "next" : "prev";
                            r.flexAnimate(o, i.pauseOnAction)
                        }
                    });
                    o && r.controlNavScaffold.delegate("a", "click touchstart", function (e) {
                        e.preventDefault()
                    })
                },
                setupManual: function () {
                    r.controlNav = r.manualControls;
                    p.controlNav.active();
                    r.controlNav.live(u, function (t) {
                        t.preventDefault();
                        var n = e(this),
                            o = r.controlNav.index(n);
                        if (!n.hasClass(s + "active")) {
                            o > r.currentSlide ? r.direction = "next" : r.direction = "prev";
                            r.flexAnimate(o, i.pauseOnAction)
                        }
                    });
                    o && r.controlNav.live("click touchstart", function (e) {
                        e.preventDefault()
                    })
                },
                set: function () {
                    var t = i.controlNav === "thumbnails" ? "img" : "a";
                    r.controlNav = e("." + s + "control-nav li " + t, r.controlsContainer ? r.controlsContainer : r)
                },
                active: function () {
                    r.controlNav.removeClass(s + "active").eq(r.animatingTo).addClass(s + "active")
                },
                update: function (t, n) {
                    r.pagingCount > 1 && t === "add" ? r.controlNavScaffold.append(e("<li><a>" + r.count + "</a></li>")) : r.pagingCount === 1 ? r.controlNavScaffold.find("li").remove() : r.controlNav.eq(n).closest("li").remove();
                    p.controlNav.set();
                    r.pagingCount > 1 && r.pagingCount !== r.controlNav.length ? r.update(n, t) : p.controlNav.active()
                }
            },
            directionNav: {
                setup: function () {
                    var t = e('<ul class="' + s + 'direction-nav"><li><a class="' + s + 'prev" href="#">' + i.directionNavArrowsLeft + i.prevText + '</a></li><li><a class="' + s + 'next" href="#">' + i.directionNavArrowsRight + i.nextText + "</a></li></ul>");
                    if (r.controlsContainer) {
                        e(r.controlsContainer).append(t);
                        r.directionNav = e("." + s + "direction-nav li a", r.controlsContainer)
                    } else {
                        r.append(t);
                        r.directionNav = e("." + s + "direction-nav li a", r)
                    }
                    p.directionNav.update();
                    r.directionNav.bind(u, function (t) {
                        t.preventDefault();
                        var n = e(this).hasClass(s + "next") ? r.getTarget("next") : r.getTarget("prev");
                        r.flexAnimate(n, i.pauseOnAction)
                    });
                    o && r.directionNav.bind("click touchstart", function (e) {
                        e.preventDefault()
                    })
                },
                update: function () {
                    var e = s + "disabled";
                    r.pagingCount === 1 ? r.directionNav.addClass(e) : i.animationLoop ? r.directionNav.removeClass(e) : r.animatingTo === 0 ? r.directionNav.removeClass(e).filter("." + s + "prev").addClass(e) : r.animatingTo === r.last ? r.directionNav.removeClass(e).filter("." + s + "next").addClass(e) : r.directionNav.removeClass(e)
                }
            },
            pausePlay: {
                setup: function () {
                    var t = e('<div class="' + s + 'pauseplay"><a></a></div>');
                    if (r.controlsContainer) {
                        r.controlsContainer.append(t);
                        r.pausePlay = e("." + s + "pauseplay a", r.controlsContainer)
                    } else {
                        r.append(t);
                        r.pausePlay = e("." + s + "pauseplay a", r)
                    }
                    p.pausePlay.update(i.slideshow ? s + "pause" : s + "play");
                    r.pausePlay.bind(u, function (t) {
                        t.preventDefault();
                        if (e(this).hasClass(s + "pause")) {
                            r.manualPause = !0;
                            r.manualPlay = !1;
                            r.pause()
                        } else {
                            r.manualPause = !1;
                            r.manualPlay = !0;
                            r.play()
                        }
                    });
                    o && r.pausePlay.bind("click touchstart", function (e) {
                        e.preventDefault()
                    })
                },
                update: function (e) {
                    e === "play" ? r.pausePlay.removeClass(s + "pause").addClass(s + "play").text(i.playText) : r.pausePlay.removeClass(s + "play").addClass(s + "pause").text(i.pauseText)
                }
            },
            touch: function () {
                function d(u) {
                    if (r.animating) u.preventDefault();
                    else if (u.touches.length === 1) {
                        r.pause();
                        o = a ? r.h : r.w;
                        h = Number(new Date);
                        s = l && f && r.animatingTo === r.last ? 0 : l && f ? r.limit - (r.itemW + i.itemMargin) * r.move * r.animatingTo : l && r.currentSlide === r.last ? r.limit : l ? (r.itemW + i.itemMargin) * r.move * r.currentSlide : f ? (r.last - r.currentSlide + r.cloneOffset) * o : (r.currentSlide + r.cloneOffset) * o;
                        e = a ? u.touches[0].pageY : u.touches[0].pageX;
                        n = a ? u.touches[0].pageX : u.touches[0].pageY;
                        t.addEventListener("touchmove", v, !1);
                        t.addEventListener("touchend", m, !1)
                    }
                }

                function v(t) {
                    u = a ? e - t.touches[0].pageY : e - t.touches[0].pageX;
                    p = a ? Math.abs(u) < Math.abs(t.touches[0].pageX - n) : Math.abs(u) < Math.abs(t.touches[0].pageY - n);
                    if (!p || Number(new Date) - h > 500) {
                        t.preventDefault();
                        if (!c && r.transitions) {
                            i.animationLoop || (u /= r.currentSlide === 0 && u < 0 || r.currentSlide === r.last && u > 0 ? Math.abs(u) / o + 2 : 1);
                            r.setProps(s + u, "setTouch")
                        }
                    }
                }

                function m(a) {
                    t.removeEventListener("touchmove", v, !1);
                    if (r.animatingTo === r.currentSlide && !p && u !== null) {
                        var l = f ? -u : u,
                            d = l > 0 ? r.getTarget("next") : r.getTarget("prev");
                        r.canAdvance(d) && (Number(new Date) - h < 550 && Math.abs(l) > 50 || Math.abs(l) > o / 2) ? r.flexAnimate(d, i.pauseOnAction) : c || r.flexAnimate(r.currentSlide, i.pauseOnAction, !0)
                    }
                    t.removeEventListener("touchend", m, !1);
                    e = null;
                    n = null;
                    u = null;
                    s = null
                }
                var e, n, s, o, u, h, p = !1;
                t.addEventListener("touchstart", d, !1)
            },
            resize: function () {
                if (!r.animating && r.is(":visible")) {
                    l || r.doMath();
                    if (c) p.smoothHeight();
                    else if (l) {
                        r.slides.width(r.computedW);
                        r.update(r.pagingCount);
                        r.setProps()
                    } else if (a) {
                        r.viewport.height(r.h);
                        r.setProps(r.h, "setTotal")
                    } else {
                        i.smoothHeight && p.smoothHeight();
                        r.newSlides.width(r.computedW);
                        r.setProps(r.computedW, "setTotal")
                    }
                }
            },
            smoothHeight: function (e) {
                if (!a || c) {
                    var t = c ? r : r.viewport;
                    e ? t.animate({
                        height: r.slides.eq(r.animatingTo).height()
                    }, e) : t.height(r.slides.eq(r.animatingTo).height())
                }
            },
            sync: function (t) {
                var n = e(i.sync).data("flexslider"),
                    s = r.animatingTo;
                switch (t) {
                case "animate":
                    n.flexAnimate(s, i.pauseOnAction, !1, !0);
                    break;
                case "play":
                    !n.playing && !n.asNav && n.play();
                    break;
                case "pause":
                    n.pause()
                }
            }
        };
        r.flexAnimate = function (t, n, u, d, v) {
            h && r.pagingCount === 1 && (r.direction = r.currentItem < t ? "next" : "prev");
            if (!r.animating && (r.canAdvance(t, v) || u) && r.is(":visible")) {
                if (h && d) {
                    var m = e(i.asNavFor).data("flexslider");
                    r.atEnd = t === 0 || t === r.count - 1;
                    m.flexAnimate(t, !0, !1, !0, v);
                    r.direction = r.currentItem < t ? "next" : "prev";
                    m.direction = r.direction;
                    if (Math.ceil((t + 1) / r.visible) - 1 === r.currentSlide || t === 0) {
                        r.currentItem = t;
                        r.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide");
                        return !1
                    }
                    r.currentItem = t;
                    r.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide");
                    t = Math.floor(t / r.visible)
                }
                r.animating = !0;
                r.animatingTo = t;
                i.before(r);
                n && r.pause();
                r.syncExists && !v && p.sync("animate");
                i.controlNav && p.controlNav.active();
                l || r.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide");
                r.atEnd = t === 0 || t === r.last;
                i.directionNav && p.directionNav.update();
                if (t === r.last) {
                    i.end(r);
                    i.animationLoop || r.pause()
                }
                if (!c) {
                    var g = a ? r.slides.filter(":first").height() : r.computedW,
                        y, b, w;

                    if (l) {
                        y = i.itemWidth > r.w ? i.itemMargin * 2 : i.itemMargin;
                        w = (r.itemW + y) * r.move * r.animatingTo;
                        b = w > r.limit && r.visible !== 1 ? r.limit : w
                    } else r.currentSlide === 0 && t === r.count - 1 && i.animationLoop && r.direction !== "next" ? b = f ? (r.count + r.cloneOffset) * g : 0 : r.currentSlide === r.last && t === 0 && i.animationLoop && r.direction !== "prev" ? b = f ? 0 : (r.count + 1) * g : b = f ? (r.count - 1 - t + r.cloneOffset) * g : (t + r.cloneOffset) * g;
                    r.setProps(b, "", i.animationSpeed);
                    if (r.transitions) {
                        if (!i.animationLoop || !r.atEnd) {
                            r.animating = !1;
                            r.currentSlide = r.animatingTo
                        }
                        r.container.unbind("webkitTransitionEnd transitionend");
                        r.container.bind("webkitTransitionEnd transitionend", function () {
                            r.wrapup(g)
                        })
                    } else r.container.animate(r.args, i.animationSpeed, i.easing, function () {
                        r.wrapup(g)
                    })
                } else if (!o) {
                    r.slides.eq(r.currentSlide).fadeOut(i.animationSpeed, i.easing);
                    r.slides.eq(t).fadeIn(i.animationSpeed, i.easing, r.wrapup)
                } else {
                    r.slides.eq(r.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    });
                    r.slides.eq(t).css({
                        opacity: 1,
                        zIndex: 2
                    });
                    r.animating = !1;
                    r.currentSlide = r.animatingTo
                }
                i.smoothHeight && p.smoothHeight(i.animationSpeed)
            }
        };
        r.wrapup = function (e) {
            !c && !l && (r.currentSlide === 0 && r.animatingTo === r.last && i.animationLoop ? r.setProps(e, "jumpEnd") : r.currentSlide === r.last && r.animatingTo === 0 && i.animationLoop && r.setProps(e, "jumpStart"));
            r.animating = !1;
            r.currentSlide = r.animatingTo;
            i.after(r)
        };
        r.animateSlides = function () {
            r.animating || r.flexAnimate(r.getTarget("next"))
        };
        r.pause = function () {
            clearInterval(r.animatedSlides);
            r.playing = !1;
            i.pausePlay && p.pausePlay.update("play");
            r.syncExists && p.sync("pause")
        };
        r.play = function () {
            r.animatedSlides = setInterval(r.animateSlides, i.slideshowSpeed);
            r.playing = !0;
            i.pausePlay && p.pausePlay.update("pause");
            r.syncExists && p.sync("play")
        };
        r.canAdvance = function (e, t) {
            var n = h ? r.pagingCount - 1 : r.last;
            return t ? !0 : h && r.currentItem === r.count - 1 && e === 0 && r.direction === "prev" ? !0 : h && r.currentItem === 0 && e === r.pagingCount - 1 && r.direction !== "next" ? !1 : e === r.currentSlide && !h ? !1 : i.animationLoop ? !0 : r.atEnd && r.currentSlide === 0 && e === n && r.direction !== "next" ? !1 : r.atEnd && r.currentSlide === n && e === 0 && r.direction === "next" ? !1 : !0
        };
        r.getTarget = function (e) {
            r.direction = e;
            return e === "next" ? r.currentSlide === r.last ? 0 : r.currentSlide + 1 : r.currentSlide === 0 ? r.last : r.currentSlide - 1
        };
        r.setProps = function (e, t, n) {
            var s = function () {
                var n = e ? e : (r.itemW + i.itemMargin) * r.move * r.animatingTo,
                    s = function () {
                        if (l) return t === "setTouch" ? e : f && r.animatingTo === r.last ? 0 : f ? r.limit - (r.itemW + i.itemMargin) * r.move * r.animatingTo : r.animatingTo === r.last ? r.limit : n;
                        switch (t) {
                        case "setTotal":
                            return f ? (r.count - 1 - r.currentSlide + r.cloneOffset) * e : (r.currentSlide + r.cloneOffset) * e;
                        case "setTouch":
                            return f ? e : e;
                        case "jumpEnd":
                            return f ? e : r.count * e;
                        case "jumpStart":
                            return f ? r.count * e : e;
                        default:
                            return e
                        }
                    }();
                return s * -1 + "px"
            }();
            if (r.transitions) {
                s = a ? "translate3d(0," + s + ",0)" : "translate3d(" + s + ",0,0)";
                n = n !== undefined ? n / 1e3 + "s" : "0s";
                r.container.css("-" + r.pfx + "-transition-duration", n)
            }
            r.args[r.prop] = s;
            (r.transitions || n === undefined) && r.container.css(r.args)
        };
        r.setup = function (t) {
            if (!c) {
                var n, u;
                if (t === "init") {
                    r.viewport = e('<div class="' + s + 'viewport"></div>').css({
                        overflow: "hidden",
                        position: "relative"
                    }).appendTo(r).append(r.container);
                    r.cloneCount = 0;
                    r.cloneOffset = 0;
                    if (f) {
                        u = e.makeArray(r.slides).reverse();
                        r.slides = e(u);
                        r.container.empty().append(r.slides)
                    }
                }
                if (i.animationLoop && !l) {
                    r.cloneCount = 2;
                    r.cloneOffset = 1;
                    t !== "init" && r.container.find(".clone").remove();
                    r.container.append(r.slides.first().clone().addClass("clone")).prepend(r.slides.last().clone().addClass("clone"))
                }
                r.newSlides = e(i.selector, r);
                n = f ? r.count - 1 - r.currentSlide + r.cloneOffset : r.currentSlide + r.cloneOffset;
                if (a && !l) {
                    r.container.height((r.count + r.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
                    setTimeout(function () {
                        r.newSlides.css({
                            display: "block"
                        });
                        r.doMath();
                        r.viewport.height(r.h);
                        r.setProps(n * r.h, "init")
                    }, t === "init" ? 100 : 0)
                } else {
                    r.container.width((r.count + r.cloneCount) * 200 + "%");
                    r.setProps(n * r.computedW, "init");
                    setTimeout(function () {
                        r.doMath();
                        r.newSlides.css({
                            width: r.computedW,
                            "float": "left",
                            display: "block"
                        });
                        i.smoothHeight && p.smoothHeight()
                    }, t === "init" ? 100 : 0)
                }
            } else {
                r.slides.css({
                    width: "100%",
                    "float": "left",
                    marginRight: "-100%",
                    position: "relative"
                });
                t === "init" && (o ? r.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + i.animationSpeed / 1e3 + "s ease",
                    zIndex: 1
                }).eq(r.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : r.slides.eq(r.currentSlide).fadeIn(i.animationSpeed, i.easing));
                i.smoothHeight && p.smoothHeight()
            }
            l || r.slides.removeClass(s + "active-slide").eq(r.currentSlide).addClass(s + "active-slide")
        };
        r.doMath = function () {
            var e = r.slides.first(),
                t = i.itemMargin,
                n = i.minItems,
                s = i.maxItems;
            r.w = r.width();
            r.h = e.height();
            r.boxPadding = e.outerWidth() - e.width();
            if (l) {
                r.itemT = i.itemWidth + t;
                r.minW = n ? n * r.itemT : r.w;
                r.maxW = s ? s * r.itemT : r.w;
                r.itemW = r.minW > r.w ? (r.w - t * n) / n : r.maxW < r.w ? (r.w - t * s) / s : i.itemWidth > r.w ? r.w : i.itemWidth;
                r.visible = Math.floor(r.w / (r.itemW + t));
                r.move = i.move > 0 && i.move < r.visible ? i.move : r.visible;
                r.pagingCount = Math.ceil((r.count - r.visible) / r.move + 1);
                r.last = r.pagingCount - 1;
                r.limit = r.pagingCount === 1 ? 0 : i.itemWidth > r.w ? (r.itemW + t * 2) * r.count - r.w - t : (r.itemW + t) * r.count - r.w - t
            } else {
                r.itemW = r.w;
                r.pagingCount = r.count;
                r.last = r.count - 1
            }
            r.computedW = r.itemW - r.boxPadding
        };
        r.update = function (e, t) {
            r.doMath();
            if (!l) {
                e < r.currentSlide ? r.currentSlide += 1 : e <= r.currentSlide && e !== 0 && (r.currentSlide -= 1);
                r.animatingTo = r.currentSlide
            }
            if (i.controlNav && !r.manualControls)
                if (t === "add" && !l || r.pagingCount > r.controlNav.length) p.controlNav.update("add");
                else if (t === "remove" && !l || r.pagingCount < r.controlNav.length) {
                if (l && r.currentSlide > r.last) {
                    r.currentSlide -= 1;
                    r.animatingTo -= 1
                }
                p.controlNav.update("remove", r.last)
            }
            i.directionNav && p.directionNav.update()
        };
        r.addSlide = function (t, n) {
            var s = e(t);
            r.count += 1;
            r.last = r.count - 1;
            a && f ? n !== undefined ? r.slides.eq(r.count - n).after(s) : r.container.prepend(s) : n !== undefined ? r.slides.eq(n).before(s) : r.container.append(s);
            r.update(n, "add");
            r.slides = e(i.selector + ":not(.clone)", r);
            r.setup();
            i.added(r)
        };
        r.removeSlide = function (t) {
            var n = isNaN(t) ? r.slides.index(e(t)) : t;
            r.count -= 1;
            r.last = r.count - 1;
            isNaN(t) ? e(t, r.slides).remove() : a && f ? r.slides.eq(r.last).remove() : r.slides.eq(t).remove();
            r.doMath();
            r.update(n, "remove");
            r.slides = e(i.selector + ":not(.clone)", r);
            r.setup();
            i.removed(r)
        };
        p.init()
    };
    e.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        directionNavArrowsLeft: '<i class="mk-icon-chevron-left"></i>',
        directionNavArrowsRight: '<i class="mk-icon-chevron-right"></i>',
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 0,
        maxItems: 0,
        move: 0,
        start: function () {},
        before: function () {},
        after: function () {},
        end: function () {},
        added: function () {},
        removed: function () {}
    };
    e.fn.flexslider = function (t) {
        t === undefined && (t = {});
        if (typeof t == "object") return this.each(function () {
            var n = e(this),
                r = t.selector ? t.selector : ".slides > li",
                i = n.find(r);
            if (i.length === 1) {
                i.fadeIn(400);
                t.start && t.start(n)
            } else n.data("flexslider") === undefined && new e.flexslider(this, t)
        });
        var n = e(this).data("flexslider");
        switch (t) {
        case "play":
            n.play();
            break;
        case "pause":
            n.pause();
            break;
        case "next":
            n.flexAnimate(n.getTarget("next"), !0);
            break;
        case "prev":
        case "previous":
            n.flexAnimate(n.getTarget("prev"), !0);
            break;
        default:
            typeof t == "number" && n.flexAnimate(t, !0)
        }
    }
})(jQuery);
(function (e) {
    e.fn.cookieBar = function (t) {
        var n = e.extend({
            closeButton: "none",
            secure: !1,
            cookieName: "jupiter_notification_bar",
            path: "/",
            domain: ""
        }, t);
        return this.each(function () {
            var r = e(this);
            r.hide();
            if (n.closeButton == "none") {
                r.append('<a class="cookiebar-close">Continue</a>');
                n = e.extend({
                    closeButton: ".cookiebar-close"
                }, t)
            }
            e.cookie(n.cookieName) != "hide" && r.show();
            r.find(n.closeButton).click(function () {
                r.hide();
                e.cookie(n.cookieName, "hide", {
                    path: n.path,
                    secure: n.secure,
                    domain: n.domain,
                    expires: 30
                });
                return !1
            })
        })
    };
    e.cookieBar = function (t) {
        e(".cookie-message").cookieBar(t)
    }
})(jQuery);
(function (e) {
    e.cookie = function (t, n, r) {
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(n)) || n === null || n === undefined)) {
            r = e.extend({}, r);
            if (n === null || n === undefined) r.expires = -1;
            if (typeof r.expires == "number") {
                var i = r.expires,
                    s = r.expires = new Date;
                s.setDate(s.getDate() + i)
            }
            n = String(n);
            return document.cookie = [encodeURIComponent(t), "=", r.raw ? n : encodeURIComponent(n), r.expires ? "; expires=" + r.expires.toUTCString() : "", r.path ? "; path=" + r.path : "", r.domain ? "; domain=" + r.domain : "", r.secure ? "; secure" : ""].join("")
        }
        r = n || {};
        var o = r.raw ? function (e) {
                return e
            } : decodeURIComponent,
            u = document.cookie.split("; ");
        for (var a = 0, f; f = u[a] && u[a].split("="); a++)
            if (o(f[0]) === t) return o(f[1] || "");
        return null
    }
})(jQuery);
(function (e) {
    e.easyPieChart = function (t, n) {
        var r, i, s, o, u, a, f, l, c = this;
        this.el = t;
        this.$el = e(t);
        this.$el.data("easyPieChart", this);
        this.init = function () {
            var t, r;
            c.options = e.extend({}, e.easyPieChart.defaultOptions, n);
            t = parseInt(c.$el.data("percent"), 10);
            c.percentage = 0;
            c.canvas = e("<canvas width='" + c.options.size + "' height='" + c.options.size + "'></canvas>").get(0);
            c.$el.append(c.canvas);
            typeof G_vmlCanvasManager != "undefined" && G_vmlCanvasManager !== null && G_vmlCanvasManager.initElement(c.canvas);
            c.ctx = c.canvas.getContext("2d");
            if (window.devicePixelRatio > 1) {
                r = window.devicePixelRatio;
                e(c.canvas).css({
                    width: c.options.size,
                    height: c.options.size
                });
                c.canvas.width *= r;
                c.canvas.height *= r;
                c.ctx.scale(r, r)
            }
            c.ctx.translate(c.options.size / 2, c.options.size / 2);
            c.$el.addClass("easyPieChart");
            c.$el.css({
                width: c.options.size,
                height: c.options.size,
                lineHeight: "" + c.options.size + "px"
            });
            c.update(t);
            return c
        };
        this.update = function (e) {
            e = parseFloat(e) || 0;
            c.options.animate === !1 ? s(e) : i(c.percentage, e);
            return c
        };
        f = function () {
            var e, t, n;
            c.ctx.fillStyle = c.options.scaleColor;
            c.ctx.lineWidth = 1;
            n = [];
            for (e = t = 0; t <= 24; e = ++t) n.push(r(e));
            return n
        };
        r = function (e) {
            var t;
            t = e % 6 === 0 ? 0 : c.options.size * .017;
            c.ctx.save();
            c.ctx.rotate(e * Math.PI / 12);
            c.ctx.fillRect(c.options.size / 2 - t, 0, -c.options.size * .05 + t, 1);
            c.ctx.restore()
        };
        l = function () {
            var e;
            e = c.options.size / 2 - c.options.lineWidth / 2;
            c.options.scaleColor !== !1 && (e -= c.options.size * .08);
            c.ctx.beginPath();
            c.ctx.arc(0, 0, e, 0, Math.PI * 2, !0);
            c.ctx.closePath();
            c.ctx.strokeStyle = c.options.trackColor;
            c.ctx.lineWidth = c.options.lineWidth;
            c.ctx.stroke()
        };
        a = function () {
            c.options.scaleColor !== !1 && f();
            c.options.trackColor !== !1 && l()
        };
        s = function (t) {
            var n;
            a();
            c.ctx.strokeStyle = e.isFunction(c.options.barColor) ? c.options.barColor(t) : c.options.barColor;
            c.ctx.lineCap = c.options.lineCap;
            c.ctx.lineWidth = c.options.lineWidth;
            n = c.options.size / 2 - c.options.lineWidth / 2;
            c.options.scaleColor !== !1 && (n -= c.options.size * .08);
            c.ctx.save();
            c.ctx.rotate(-Math.PI / 2);
            c.ctx.beginPath();
            c.ctx.arc(0, 0, n, 0, Math.PI * 2 * t / 100, !1);
            c.ctx.stroke();
            c.ctx.restore()
        };
        u = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
                return window.setTimeout(e, 1e3 / 60)
            }
        }();
        i = function (e, t) {
            var n, r;
            c.options.onStart.call(c);
            c.percentage = t;
            r = Date.now();
            n = function () {
                var i, f;
                f = Date.now() - r;
                f < c.options.animate && u(n);
                c.ctx.clearRect(-c.options.size / 2, -c.options.size / 2, c.options.size, c.options.size);
                a.call(c);
                i = [o(f, e, t - e, c.options.animate)];
                c.options.onStep.call(c, i);
                s.call(c, i);
                if (f >= c.options.animate) return c.options.onStop.call(c)
            };
            u(n)
        };
        o = function (e, t, n, r) {
            var i, s;
            i = function (e) {
                return Math.pow(e, 2)
            };
            s = function (e) {
                return e < 1 ? i(e) : 2 - i(e / 2 * -2 + 2)
            };
            e /= r / 2;
            return n / 2 * s(e) + t
        };
        return this.init()
    };
    e.easyPieChart.defaultOptions = {
        barColor: "#ef1e25",
        trackColor: "#f2f2f2",
        scaleColor: "#dfe0e0",
        lineCap: "round",
        size: 110,
        lineWidth: 3,
        animate: !1,
        onStart: e.noop,
        onStop: e.noop,
        onStep: e.noop
    };
    e.fn.easyPieChart = function (t) {
        return e.each(this, function (n, r) {
            var i;
            i = e(r);
            if (!i.data("easyPieChart")) return i.data("easyPieChart", new e.easyPieChart(r, t))
        })
    };
    return void 0
})(jQuery);
(function (e, t, n, r) {
    "use strict";

    function o(t, n) {
        this.element = e(t);
        this.settings = e.extend({}, s, n);
        this.init()
    }
    var i = "ajaxPortfolio",
        s = {
            propertyName: "value"
        };
    o.prototype = {
        init: function () {
            var n = this;
            this.grid = this.element.find(".mk-portfolio-container"), this.items = this.grid.children();
            if (this.items.length < 1) return !1;
            this.ajaxDiv = this.element.find("div.ajax-container"), this.filter = this.element.find("#mk-filter-portfolio"), this.loader = this.element.find(".portfolio-loader"), this.triggers = this.items.find(".project-load"), this.closeBtn = this.ajaxDiv.find(".close-ajax"), this.nextBtn = this.ajaxDiv.find(".next-ajax"), this.prevBtn = this.ajaxDiv.find(".prev-ajax"), this.api = {}, this.id = null, this.win = e(t), this.current = 0, this.breakpointT = 989, this.breakpointP = 767, this.columns = this.grid.data("columns"), this.real_col = this.columns;
            this.loader.fadeIn();
            if (this.items.length == 1) {
                this.nextBtn.remove();
                this.prevBtn.remove()
            }
            this.grid.waitForImages(function () {
                n.loader.fadeOut();
                n.bind_handler()
            })
        },
        bind_handler: function () {
            var t = this;
            t.filter.find("a").click(function () {
                t.triggers.removeClass("active");
                t.grid.removeClass("grid-open");
                t.close_project();
                t.filter.find("a").removeClass("active_sort");
                e(this).addClass("active_sort");
                var n = e(this).attr("data-filter");
                t.grid.isotope({
                    filter: n
                });
                return !1
            });
            t.triggers.on("click", function () {
                var n = e(this),
                    r = n.parents(".mk-portfolio-item");
                t.current = r.index();
                if (n.hasClass("active")) return !1;
                t.close_project();
                t.triggers.removeClass("active");
                n.addClass("active");
                t.grid.addClass("grid-open");
                t.loader.fadeIn();
                t.id = n.data("post-id");
                t.load_project();
                return !1
            });
            t.nextBtn.on("click", function () {
                if (t.current == t.triggers.length - 1) {
                    t.triggers.eq(0).trigger("click");
                    return !1
                }
                t.triggers.eq(t.current + 1).trigger("click");
                return !1
            });
            t.prevBtn.on("click", function () {
                if (t.current == 0) {
                    t.triggers.eq(t.triggers.length - 1).trigger("click");
                    return !1
                }
                t.triggers.eq(t.current - 1).trigger("click");
                return !1
            });
            t.closeBtn.on("click", function () {
                t.close_project();
                t.triggers.removeClass("active");
                t.grid.removeClass("grid-open");
                return !1
            })
        },
        close_project: function () {
            var e = this,
                t = e.ajaxDiv.find(".ajax_project"),
                n = t.actual("outerHeight");
            e.ajaxDiv.height() > 0 ? e.ajaxDiv.css("height", n + "px").transition({
                height: 0,
                opacity: 0
            }, 600) : e.ajaxDiv.transition({
                height: 0,
                opacity: 0
            }, 600)
        },
        load_project: function () {
            var t = this;
            e.post(ajaxurl, {
                action: "mk_ajax_portfolio",
                id: t.id
            }, function (e) {
                t.ajaxDiv.find(".ajax_project").remove();
                t.ajaxDiv.append(e);
                t.project_factory();
                mk_prettyPhoto_init();
                setTimeout(function () {
                    mk_flexslider_init()
                }, 2e3)
            })
        },
        project_factory: function () {
            var t = this,
                n = this.ajaxDiv.find(".ajax_project");
            n.waitForImages(function () {
                e("html:not(:animated),body:not(:animated)").animate({
                    scrollTop: t.ajaxDiv.offset().top - 160
                }, 700);
                mk_flexslider_init();
                t.loader.fadeOut(function () {
                    var e = n.actual("outerHeight");
                    t.ajaxDiv.transition({
                        opacity: 1,
                        height: e
                    }, 400, function () {
                        t.ajaxDiv.css({
                            height: "auto"
                        })
                    })
                })
            })
        }
    };
    e.fn[i] = function (t) {
        return this.each(function () {
            e.data(this, "plugin_" + i) || e.data(this, "plugin_" + i, new o(this, t))
        })
    }
})(jQuery, window, document);
(function (e) {
    e.fn.addBack = e.fn.addBack || e.fn.andSelf;
    e.fn.extend({
        actual: function (t, n) {
            if (!this[t]) throw '$.actual => The jQuery method "' + t + '" you called does not exist';
            var r = {
                absolute: !1,
                clone: !1,
                includeMargin: !1
            }, i = e.extend(r, n),
                s = this.eq(0),
                o, u;
            if (i.clone === !0) {
                o = function () {
                    var e = "position: absolute !important; top: -1000 !important; ";
                    s = s.clone().attr("style", e).appendTo("body")
                };
                u = function () {
                    s.remove()
                }
            } else {
                var f = [],
                    l = "",
                    c;
                o = function () {
                    c = s.parents().addBack().filter(":hidden");
                    l += "visibility: hidden !important; display: block !important; ";
                    i.absolute === !0 && (l += "position: absolute !important; ");
                    c.each(function () {
                        var t = e(this);
                        f.push(t.attr("style"));
                        t.attr("style", l)
                    })
                };
                u = function () {
                    c.each(function (t) {
                        var n = e(this),
                            r = f[t];
                        r === undefined ? n.removeAttr("style") : n.attr("style", r)
                    })
                }
            }
            o();
            var h = /(outer)/.test(t) ? s[t](i.includeMargin) : s[t]();
            u();
            return h
        }
    })
})(jQuery);
(function (e) {
    var t = "waitForImages";
    e.waitForImages = {
        hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage", "cursor"]
    };
    e.expr[":"].uncached = function (t) {
        if (!e(t).is('img[src!=""]')) return !1;
        var n = new Image;
        n.src = t.src;
        return !n.complete
    };
    e.fn.waitForImages = function (n, r, i) {
        var s = 0,
            u = 0;
        if (e.isPlainObject(arguments[0])) {
            i = arguments[0].waitForAll;
            r = arguments[0].each;
            n = arguments[0].finished
        }
        n = n || e.noop;
        r = r || e.noop;
        i = !! i;
        if (!e.isFunction(n) || !e.isFunction(r)) throw new TypeError("An invalid callback was supplied.");
        return this.each(function () {
            var a = e(this),
                f = [],
                c = e.waitForImages.hasImageProperties || [],
                h = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
            i ? a.find("*").addBack().each(function () {
                var t = e(this);
                t.is("img:uncached") && f.push({
                    src: t.attr("src"),
                    element: t[0]
                });
                e.each(c, function (e, n) {
                    var r = t.css(n),
                        i;
                    if (!r) return !0;
                    while (i = h.exec(r)) f.push({
                        src: i[2],
                        element: t[0]
                    })
                })
            }) : a.find("img:uncached").each(function () {
                f.push({
                    src: this.src,
                    element: this
                })
            });
            s = f.length;
            u = 0;
            s === 0 && n.call(a[0]);
            e.each(f, function (i, f) {
                var l = new Image;
                e(l).on("load." + t + " error." + t, function (e) {
                    u++;
                    r.call(f.element, u, s, e.type == "load");
                    if (u == s) {
                        n.call(a[0]);
                        return !1
                    }
                });
                l.src = f.src
            })
        })
    }
})(jQuery);
(function (e) {
    var t = !1,
        n = !1,
        r = 5e3,
        i = 2e3,
        s = 0,
        o = function () {
            var e = document.getElementsByTagName("script"),
                e = e[e.length - 1].src.split("?")[0];
            return 0 < e.split("/").length ? e.split("/").slice(0, -1).join("/") + "/" : ""
        }(),
        u = ["ms", "moz", "webkit", "o"],
        f = window.requestAnimationFrame || !1,
        l = window.cancelAnimationFrame || !1;
    if (!f)
        for (var c in u) {
            var h = u[c];
            f || (f = window[h + "RequestAnimationFrame"]);
            l || (l = window[h + "CancelAnimationFrame"] || window[h + "CancelRequestAnimationFrame"])
        }
    var p = window.MutationObserver || window.WebKitMutationObserver || !1,
        d = {
            zindex: "auto",
            cursoropacitymin: 0,
            cursoropacitymax: 1,
            cursorcolor: "#424242",
            cursorwidth: "5px",
            cursorborder: "1px solid #fff",
            cursorborderradius: "5px",
            scrollspeed: 60,
            mousescrollstep: 24,
            touchbehavior: !1,
            hwacceleration: !0,
            usetransition: !0,
            boxzoom: !1,
            dblclickzoom: !0,
            gesturezoom: !0,
            grabcursorenabled: !0,
            autohidemode: !0,
            background: "",
            iframeautoresize: !0,
            cursorminheight: 32,
            preservenativescrolling: !0,
            railoffset: !1,
            bouncescroll: !0,
            spacebarenabled: !0,
            railpadding: {
                top: 0,
                right: 0,
                left: 0,
                bottom: 0
            },
            disableoutline: !0,
            horizrailenabled: !0,
            railalign: "right",
            railvalign: "bottom",
            enabletranslate3d: !0,
            enablemousewheel: !0,
            enablekeyboard: !0,
            smoothscroll: !0,
            sensitiverail: !0,
            enablemouselockapi: !0,
            cursorfixedheight: !1,
            directionlockdeadzone: 6,
            hidecursordelay: 400,
            nativeparentscrolling: !0,
            enablescrollonselection: !0,
            overflowx: !0,
            overflowy: !0,
            cursordragspeed: .3,
            rtlmode: !1,
            cursordragontouch: !1,
            oneaxismousemode: "auto"
        }, v = !1,
        m = function () {
            if (v) return v;
            var e = document.createElement("DIV"),
                t = {
                    haspointerlock: "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document
                };
            t.isopera = "opera" in window;
            t.isopera12 = t.isopera && "getUserMedia" in navigator;
            t.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(window.operamini);
            t.isie = "all" in document && "attachEvent" in e && !t.isopera;
            t.isieold = t.isie && !("msInterpolationMode" in e.style);
            t.isie7 = t.isie && !t.isieold && (!("documentMode" in document) || 7 == document.documentMode);
            t.isie8 = t.isie && "documentMode" in document && 8 == document.documentMode;
            t.isie9 = t.isie && "performance" in window && 9 <= document.documentMode;
            t.isie10 = t.isie && "performance" in window && 10 <= document.documentMode;
            t.isie9mobile = /iemobile.9/i.test(navigator.userAgent);
            t.isie9mobile && (t.isie9 = !1);
            t.isie7mobile = !t.isie9mobile && t.isie7 && /iemobile/i.test(navigator.userAgent);
            t.ismozilla = "MozAppearance" in e.style;
            t.iswebkit = "WebkitAppearance" in e.style;
            t.ischrome = "chrome" in window;
            t.ischrome22 = t.ischrome && t.haspointerlock;
            t.ischrome26 = t.ischrome && "transition" in e.style;
            t.cantouch = "ontouchstart" in document.documentElement || "ontouchstart" in window;
            t.hasmstouch = window.navigator.msPointerEnabled || !1;
            t.ismac = /^mac$/i.test(navigator.platform);
            t.isios = t.cantouch && /iphone|ipad|ipod/i.test(navigator.platform);
            t.isios4 = t.isios && !("seal" in Object);
            t.isandroid = /android/i.test(navigator.userAgent);
            t.trstyle = !1;
            t.hastransform = !1;
            t.hastranslate3d = !1;
            t.transitionstyle = !1;
            t.hastransition = !1;
            t.transitionend = !1;
            for (var n = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"], r = 0; r < n.length; r++)
                if ("undefined" != typeof e.style[n[r]]) {
                    t.trstyle = n[r];
                    break
                }
            t.hastransform = 0 != t.trstyle;
            t.hastransform && (e.style[t.trstyle] = "translate3d(1px,2px,3px)", t.hastranslate3d = /translate3d/.test(e.style[t.trstyle]));
            t.transitionstyle = !1;
            t.prefixstyle = "";
            t.transitionend = !1;
            for (var n = "transition webkitTransition MozTransition OTransition OTransition msTransition KhtmlTransition".split(" "), i = " -webkit- -moz- -o- -o -ms- -khtml-".split(" "), s = "transitionend webkitTransitionEnd transitionend otransitionend oTransitionEnd msTransitionEnd KhtmlTransitionEnd".split(" "), r = 0; r < n.length; r++)
                if (n[r] in e.style) {
                    t.transitionstyle = n[r];
                    t.prefixstyle = i[r];
                    t.transitionend = s[r];
                    break
                }
            t.ischrome26 && (t.prefixstyle = i[1]);
            t.hastransition = t.transitionstyle;
            e: {
                n = ["-moz-grab", "-webkit-grab", "grab"];
                if (t.ischrome && !t.ischrome22 || t.isie) n = [];
                for (r = 0; r < n.length; r++)
                    if (i = n[r], e.style.cursor = i, e.style.cursor == i) {
                        n = i;
                        break e
                    }
                n = "url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize"
            }
            t.cursorgrabvalue = n;
            t.hasmousecapture = "setCapture" in e;
            t.hasMutationObserver = !1 !== p;
            return v = t
        }, g = function (u, a) {
            function c() {
                var e = b.win;
                if ("zIndex" in e) return e.zIndex();
                for (; 0 < e.length && 9 != e[0].nodeType;) {
                    var t = e.css("zIndex");
                    if (!isNaN(t) && 0 != t) return parseInt(t);
                    e = e.parent()
                }
                return !1
            }

            function h(e, t, n) {
                t = e.css(t);
                e = parseFloat(t);
                return isNaN(e) ? (e = x[t] || 0, n = 3 == e ? n ? b.win.outerHeight() - b.win.innerHeight() : b.win.outerWidth() - b.win.innerWidth() : 1, b.isie8 && e && (e += 1), n ? e : 0) : e
            }

            function v(e, t, n, r) {
                b._bind(e, t, function (r) {
                    r = r ? r : window.event;
                    var i = {
                        original: r,
                        target: r.target || r.srcElement,
                        type: "wheel",
                        deltaMode: "MozMousePixelScroll" == r.type ? 0 : 1,
                        deltaX: 0,
                        deltaZ: 0,
                        preventDefault: function () {
                            r.preventDefault ? r.preventDefault() : r.returnValue = !1;
                            return !1
                        },
                        stopImmediatePropagation: function () {
                            r.stopImmediatePropagation ? r.stopImmediatePropagation() : r.cancelBubble = !0
                        }
                    };
                    "mousewheel" == t ? (i.deltaY = -0.025 * r.wheelDelta, r.wheelDeltaX && (i.deltaX = -0.025 * r.wheelDeltaX)) : i.deltaY = r.detail;
                    return n.call(e, i)
                }, r)
            }

            function g(e, t, n) {
                var r, i;
                0 == e.deltaMode ? (r = -Math.floor(e.deltaX * (b.opt.mousescrollstep / 54)), i = -Math.floor(e.deltaY * (b.opt.mousescrollstep / 54))) : 1 == e.deltaMode && (r = -Math.floor(e.deltaX * b.opt.mousescrollstep), i = -Math.floor(e.deltaY * b.opt.mousescrollstep));
                t && b.opt.oneaxismousemode && 0 == r && i && (r = i, i = 0);
                r && (b.scrollmom && b.scrollmom.stop(), b.lastdeltax += r, b.debounced("mousewheelx", function () {
                    var e = b.lastdeltax;
                    b.lastdeltax = 0;
                    b.rail.drag || b.doScrollLeftBy(e)
                }, 120));
                if (i) {
                    if (b.opt.nativeparentscrolling && n && !b.ispage && !b.zoomactive)
                        if (0 > i) {
                            if (b.getScrollTop() >= b.page.maxh) return !0
                        } else if (0 >= b.getScrollTop()) return !0;
                    b.scrollmom && b.scrollmom.stop();
                    b.lastdeltay += i;
                    b.debounced("mousewheely", function () {
                        var e = b.lastdeltay;
                        b.lastdeltay = 0;
                        b.rail.drag || b.doScrollBy(e)
                    }, 120)
                }
                e.stopImmediatePropagation();
                return e.preventDefault()
            }
            var b = this;
            this.version = "3.5.1";
            this.name = "nicescroll";
            this.me = a;
            this.opt = {
                doc: e("body"),
                win: !1
            };
            e.extend(this.opt, d);
            this.opt.snapbackspeed = 80;
            if (u)
                for (var w in b.opt) "undefined" != typeof u[w] && (b.opt[w] = u[w]);
            this.iddoc = (this.doc = b.opt.doc) && this.doc[0] ? this.doc[0].id || "" : "";
            this.ispage = /BODY|HTML/.test(b.opt.win ? b.opt.win[0].nodeName : this.doc[0].nodeName);
            this.haswrapper = !1 !== b.opt.win;
            this.win = b.opt.win || (this.ispage ? e(window) : this.doc);
            this.docscroll = this.ispage && !this.haswrapper ? e(window) : this.win;
            this.body = e("body");
            this.iframe = this.isfixed = this.viewport = !1;
            this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName;
            this.istextarea = "TEXTAREA" == this.win[0].nodeName;
            this.forcescreen = !1;
            this.canshowonmouseevent = "scroll" != b.opt.autohidemode;
            this.page = this.view = this.onzoomout = this.onzoomin = this.onscrollcancel = this.onscrollend = this.onscrollstart = this.onclick = this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = !1;
            this.scroll = {
                x: 0,
                y: 0
            };
            this.scrollratio = {
                x: 0,
                y: 0
            };
            this.cursorheight = 20;
            this.scrollvaluemax = 0;
            this.observerremover = this.observer = this.scrollmom = this.scrollrunning = this.checkrtlmode = !1;
            do this.id = "ascrail" + i++; while (document.getElementById(this.id));
            this.hasmousefocus = this.hasfocus = this.zoomactive = this.zoom = this.selectiondrag = this.cursorfreezed = this.cursor = this.rail = !1;
            this.visibility = !0;
            this.hidden = this.locked = !1;
            this.cursoractive = !0;
            this.overflowx = b.opt.overflowx;
            this.overflowy = b.opt.overflowy;
            this.nativescrollingarea = !1;
            this.checkarea = 0;
            this.events = [];
            this.saved = {};
            this.delaylist = {};
            this.synclist = {};
            this.lastdeltay = this.lastdeltax = 0;
            this.detected = m();
            var E = e.extend({}, this.detected);
            this.ishwscroll = (this.canhwscroll = E.hastransform && b.opt.hwacceleration) && b.haswrapper;
            this.istouchcapable = !1;
            E.cantouch && E.ischrome && !E.isios && !E.isandroid && (this.istouchcapable = !0, E.cantouch = !1);
            E.cantouch && E.ismozilla && !E.isios && !E.isandroid && (this.istouchcapable = !0, E.cantouch = !1);
            b.opt.enablemouselockapi || (E.hasmousecapture = !1, E.haspointerlock = !1);
            this.delayed = function (e, t, n, r) {
                var i = b.delaylist[e],
                    s = (new Date).getTime();
                if (!r && i && i.tt) return !1;
                i && i.tt && clearTimeout(i.tt);
                if (i && i.last + n > s && !i.tt) b.delaylist[e] = {
                    last: s + n,
                    tt: setTimeout(function () {
                        b.delaylist[e].tt = 0;
                        t.call()
                    }, n)
                };
                else if (!i || !i.tt) b.delaylist[e] = {
                    last: s,
                    tt: 0
                }, setTimeout(function () {
                    t.call()
                }, 0)
            };
            this.debounced = function (e, t, n) {
                var r = b.delaylist[e];
                (new Date).getTime();
                b.delaylist[e] = t;
                r || setTimeout(function () {
                    var t = b.delaylist[e];
                    b.delaylist[e] = !1;
                    t.call()
                }, n)
            };
            this.synched = function (e, t) {
                b.synclist[e] = t;
                (function () {
                    b.onsync || (f(function () {
                        b.onsync = !1;
                        for (e in b.synclist) {
                            var t = b.synclist[e];
                            t && t.call(b);
                            b.synclist[e] = !1
                        }
                    }), b.onsync = !0)
                })();
                return e
            };
            this.unsynched = function (e) {
                b.synclist[e] && (b.synclist[e] = !1)
            };
            this.css = function (e, t) {
                for (var n in t) b.saved.css.push([e, n, e.css(n)]), e.css(n, t[n])
            };
            this.scrollTop = function (e) {
                return "undefined" == typeof e ? b.getScrollTop() : b.setScrollTop(e)
            };
            this.scrollLeft = function (e) {
                return "undefined" == typeof e ? b.getScrollLeft() : b.setScrollLeft(e)
            };
            BezierClass = function (e, t, n, r, i, s, o) {
                this.st = e;
                this.ed = t;
                this.spd = n;
                this.p1 = r || 0;
                this.p2 = i || 1;
                this.p3 = s || 0;
                this.p4 = o || 1;
                this.ts = (new Date).getTime();
                this.df = this.ed - this.st
            };
            BezierClass.prototype = {
                B2: function (e) {
                    return 3 * e * e * (1 - e)
                },
                B3: function (e) {
                    return 3 * e * (1 - e) * (1 - e)
                },
                B4: function (e) {
                    return (1 - e) * (1 - e) * (1 - e)
                },
                getNow: function () {
                    var e = 1 - ((new Date).getTime() - this.ts) / this.spd,
                        t = this.B2(e) + this.B3(e) + this.B4(e);
                    return 0 > e ? this.ed : this.st + Math.round(this.df * t)
                },
                update: function (
                    e, t) {
                    this.st = this.getNow();
                    this.ed = e;
                    this.spd = t;
                    this.ts = (new Date).getTime();
                    this.df = this.ed - this.st;
                    return this
                }
            };
            if (this.ishwscroll) {
                this.doc.translate = {
                    x: 0,
                    y: 0,
                    tx: "0px",
                    ty: "0px"
                };
                E.hastranslate3d && E.isios && this.doc.css("-webkit-backface-visibility", "hidden");
                var S = function () {
                    var e = b.doc.css(E.trstyle);
                    return e && "matrix" == e.substr(0, 6) ? e.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/) : !1
                };
                this.getScrollTop = function (e) {
                    if (!e) {
                        if (e = S()) return 16 == e.length ? -e[13] : -e[5];
                        if (b.timerscroll && b.timerscroll.bz) return b.timerscroll.bz.getNow()
                    }
                    return b.doc.translate.y
                };
                this.getScrollLeft = function (e) {
                    if (!e) {
                        if (e = S()) return 16 == e.length ? -e[12] : -e[4];
                        if (b.timerscroll && b.timerscroll.bh) return b.timerscroll.bh.getNow()
                    }
                    return b.doc.translate.x
                };
                this.notifyScrollEvent = document.createEvent ? function (e) {
                    var t = document.createEvent("UIEvents");
                    t.initUIEvent("scroll", !1, !0, window, 1);
                    e.dispatchEvent(t)
                } : document.fireEvent ? function (e) {
                    var t = document.createEventObject();
                    e.fireEvent("onscroll");
                    t.cancelBubble = !0
                } : function (e, t) {};
                E.hastranslate3d && b.opt.enabletranslate3d ? (this.setScrollTop = function (e, t) {
                    b.doc.translate.y = e;
                    b.doc.translate.ty = -1 * e + "px";
                    b.doc.css(E.trstyle, "translate3d(" + b.doc.translate.tx + "," + b.doc.translate.ty + ",0px)");
                    t || b.notifyScrollEvent(b.win[0])
                }, this.setScrollLeft = function (e, t) {
                    b.doc.translate.x = e;
                    b.doc.translate.tx = -1 * e + "px";
                    b.doc.css(E.trstyle, "translate3d(" + b.doc.translate.tx + "," + b.doc.translate.ty + ",0px)");
                    t || b.notifyScrollEvent(b.win[0])
                }) : (this.setScrollTop = function (e, t) {
                    b.doc.translate.y = e;
                    b.doc.translate.ty = -1 * e + "px";
                    b.doc.css(E.trstyle, "translate(" + b.doc.translate.tx + "," + b.doc.translate.ty + ")");
                    t || b.notifyScrollEvent(b.win[0])
                }, this.setScrollLeft = function (e, t) {
                    b.doc.translate.x = e;
                    b.doc.translate.tx = -1 * e + "px";
                    b.doc.css(E.trstyle, "translate(" + b.doc.translate.tx + "," + b.doc.translate.ty + ")");
                    t || b.notifyScrollEvent(b.win[0])
                })
            } else this.getScrollTop = function () {
                return b.docscroll.scrollTop()
            }, this.setScrollTop = function (e) {
                return b.docscroll.scrollTop(e)
            }, this.getScrollLeft = function () {
                return b.docscroll.scrollLeft()
            }, this.setScrollLeft = function (e) {
                return b.docscroll.scrollLeft(e)
            };
            this.getTarget = function (e) {
                return e ? e.target ? e.target : e.srcElement ? e.srcElement : !1 : !1
            };
            this.hasParent = function (e, t) {
                if (!e) return !1;
                for (var n = e.target || e.srcElement || e || !1; n && n.id != t;) n = n.parentNode || !1;
                return !1 !== n
            };
            var x = {
                thin: 1,
                medium: 3,
                thick: 5
            };
            this.getOffset = function () {
                if (b.isfixed) return {
                    top: parseFloat(b.win.css("top")),
                    left: parseFloat(b.win.css("left"))
                };
                if (!b.viewport) return b.win.offset();
                var e = b.win.offset(),
                    t = b.viewport.offset();
                return {
                    top: e.top - t.top + b.viewport.scrollTop(),
                    left: e.left - t.left + b.viewport.scrollLeft()
                }
            };
            this.updateScrollBar = function (e) {
                if (b.ishwscroll) b.rail.css({
                    height: b.win.innerHeight()
                }), b.railh && b.railh.css({
                    width: b.win.innerWidth()
                });
                else {
                    var t = b.getOffset(),
                        n = t.top,
                        r = t.left,
                        n = n + h(b.win, "border-top-width", !0);
                    b.win.outerWidth();
                    b.win.innerWidth();
                    var r = r + (b.rail.align ? b.win.outerWidth() - h(b.win, "border-right-width") - b.rail.width : h(b.win, "border-left-width")),
                        i = b.opt.railoffset;
                    i && (i.top && (n += i.top), b.rail.align && i.left && (r += i.left));
                    b.locked || b.rail.css({
                        top: n,
                        left: r,
                        height: e ? e.h : b.win.innerHeight()
                    });
                    b.zoom && b.zoom.css({
                        top: n + 1,
                        left: 1 == b.rail.align ? r - 20 : r + b.rail.width + 4
                    });
                    b.railh && !b.locked && (n = t.top, r = t.left, e = b.railh.align ? n + h(b.win, "border-top-width", !0) + b.win.innerHeight() - b.railh.height : n + h(b.win, "border-top-width", !0), r += h(b.win, "border-left-width"), b.railh.css({
                        top: e,
                        left: r,
                        width: b.railh.width
                    }))
                }
            };
            this.doRailClick = function (e, t, n) {
                var r;
                b.locked || (b.cancelEvent(e), t ? (t = n ? b.doScrollLeft : b.doScrollTop, r = n ? (e.pageX - b.railh.offset().left - b.cursorwidth / 2) * b.scrollratio.x : (e.pageY - b.rail.offset().top - b.cursorheight / 2) * b.scrollratio.y, t(r)) : (t = n ? b.doScrollLeftBy : b.doScrollBy, r = n ? b.scroll.x : b.scroll.y, e = n ? e.pageX - b.railh.offset().left : e.pageY - b.rail.offset().top, n = n ? b.view.w : b.view.h, r >= e ? t(n) : t(-n)))
            };
            b.hasanimationframe = f;
            b.hascancelanimationframe = l;
            b.hasanimationframe ? b.hascancelanimationframe || (l = function () {
                b.cancelAnimationFrame = !0
            }) : (f = function (e) {
                return setTimeout(e, 15 - Math.floor(+(new Date) / 1e3) % 16)
            }, l = clearInterval);
            this.init = function () {
                b.saved.css = [];
                if (E.isie7mobile || E.isoperamini) return !0;
                E.hasmstouch && b.css(b.ispage ? e("html") : b.win, {
                    "-ms-touch-action": "none"
                });
                b.zindex = "auto";
                b.zindex = !b.ispage && "auto" == b.opt.zindex ? c() || "auto" : b.opt.zindex;
                !b.ispage && "auto" != b.zindex && b.zindex > s && (s = b.zindex);
                b.isie && 0 == b.zindex && "auto" == b.opt.zindex && (b.zindex = "auto");
                if (!b.ispage || !E.cantouch && !E.isieold && !E.isie9mobile) {
                    var i = b.docscroll;
                    b.ispage && (i = b.haswrapper ? b.win : b.doc);
                    E.isie9mobile || b.css(i, {
                        "overflow-y": "hidden"
                    });
                    b.ispage && E.isie7 && ("BODY" == b.doc[0].nodeName ? b.css(e("html"), {
                        "overflow-y": "hidden"
                    }) : "HTML" == b.doc[0].nodeName && b.css(e("body"), {
                        "overflow-y": "hidden"
                    }));
                    E.isios && !b.ispage && !b.haswrapper && b.css(e("body"), {
                        "-webkit-overflow-scrolling": "touch"
                    });
                    var u = e(document.createElement("div"));
                    u.css({
                        position: "relative",
                        top: 0,
                        "float": "right",
                        width: b.opt.cursorwidth,
                        height: "0px",
                        "background-color": b.opt.cursorcolor,
                        border: b.opt.cursorborder,
                        "background-clip": "padding-box",
                        "-webkit-border-radius": b.opt.cursorborderradius,
                        "-moz-border-radius": b.opt.cursorborderradius,
                        "border-radius": b.opt.cursorborderradius
                    });
                    u.hborder = parseFloat(u.outerHeight() - u.innerHeight());
                    b.cursor = u;
                    var a = e(document.createElement("div"));
                    a.attr("id", b.id);
                    a.addClass("nicescroll-rails");
                    var f, l, h = ["left", "right"],
                        d;
                    for (d in h) l = h[d], (f = b.opt.railpadding[l]) ? a.css("padding-" + l, f + "px") : b.opt.railpadding[l] = 0;
                    a.append(u);
                    a.width = Math.max(parseFloat(b.opt.cursorwidth), u.outerWidth()) + b.opt.railpadding.left + b.opt.railpadding.right;
                    a.css({
                        width: a.width + "px",
                        zIndex: b.zindex,
                        background: b.opt.background,
                        cursor: "default"
                    });
                    a.visibility = !0;
                    a.scrollable = !0;
                    a.align = "left" == b.opt.railalign ? 0 : 1;
                    b.rail = a;
                    u = b.rail.drag = !1;
                    b.opt.boxzoom && !b.ispage && !E.isieold && (u = document.createElement("div"), b.bind(u, "click", b.doZoom), b.zoom = e(u), b.zoom.css({
                        cursor: "pointer",
                        "z-index": b.zindex,
                        backgroundImage: "url(" + o + "zoomico.png)",
                        height: 18,
                        width: 18,
                        backgroundPosition: "0px 0px"
                    }), b.opt.dblclickzoom && b.bind(b.win, "dblclick", b.doZoom), E.cantouch && b.opt.gesturezoom && (b.ongesturezoom = function (e) {
                        1.5 < e.scale && b.doZoomIn(e);.8 > e.scale && b.doZoomOut(e);
                        return b.cancelEvent(e)
                    }, b.bind(b.win, "gestureend", b.ongesturezoom)));
                    b.railh = !1;
                    if (b.opt.horizrailenabled) {
                        b.css(i, {
                            "overflow-x": "hidden"
                        });
                        u = e(document.createElement("div"));
                        u.css({
                            position: "relative",
                            top: 0,
                            height: b.opt.cursorwidth,
                            width: "0px",
                            "background-color": b.opt.cursorcolor,
                            border: b.opt.cursorborder,
                            "background-clip": "padding-box",
                            "-webkit-border-radius": b.opt.cursorborderradius,
                            "-moz-border-radius": b.opt.cursorborderradius,
                            "border-radius": b.opt.cursorborderradius
                        });
                        u.wborder = parseFloat(u.outerWidth() - u.innerWidth());
                        b.cursorh = u;
                        var v = e(document.createElement("div"));
                        v.attr("id", b.id + "-hr");
                        v.addClass("nicescroll-rails");
                        v.height = Math.max(parseFloat(b.opt.cursorwidth), u.outerHeight());
                        v.css({
                            height: v.height + "px",
                            zIndex: b.zindex,
                            background: b.opt.background
                        });
                        v.append(u);
                        v.visibility = !0;
                        v.scrollable = !0;
                        v.align = "top" == b.opt.railvalign ? 0 : 1;
                        b.railh = v;
                        b.railh.drag = !1
                    }
                    b.ispage ? (a.css({
                        position: "fixed",
                        top: "0px",
                        height: "100%"
                    }), a.align ? a.css({
                        right: "0px"
                    }) : a.css({
                        left: "0px"
                    }), b.body.append(a), b.railh && (v.css({
                        position: "fixed",
                        left: "0px",
                        width: "100%"
                    }), v.align ? v.css({
                        bottom: "0px"
                    }) : v.css({
                        top: "0px"
                    }), b.body.append(v))) : (b.ishwscroll ? ("static" == b.win.css("position") && b.css(b.win, {
                        position: "relative"
                    }), i = "HTML" == b.win[0].nodeName ? b.body : b.win, b.zoom && (b.zoom.css({
                        position: "absolute",
                        top: 1,
                        right: 0,
                        "margin-right": a.width + 4
                    }), i.append(b.zoom)), a.css({
                        position: "absolute",
                        top: 0
                    }), a.align ? a.css({
                        right: 0
                    }) : a.css({
                        left: 0
                    }), i.append(a), v && (v.css({
                        position: "absolute",
                        left: 0,
                        bottom: 0
                    }), v.align ? v.css({
                        bottom: 0
                    }) : v.css({
                        top: 0
                    }), i.append(v))) : (b.isfixed = "fixed" == b.win.css("position"), i = b.isfixed ? "fixed" : "absolute", b.isfixed || (b.viewport = b.getViewport(b.win[0])), b.viewport && (b.body = b.viewport, 0 == /fixed|relative|absolute/.test(b.viewport.css("position")) && b.css(b.viewport, {
                        position: "relative"
                    })), a.css({
                        position: i
                    }), b.zoom && b.zoom.css({
                        position: i
                    }), b.updateScrollBar(), b.body.append(a), b.zoom && b.body.append(b.zoom), b.railh && (v.css({
                        position: i
                    }), b.body.append(v))), E.isios && b.css(b.win, {
                        "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                        "-webkit-touch-callout": "none"
                    }), E.isie && b.opt.disableoutline && b.win.attr("hideFocus", "true"), E.iswebkit && b.opt.disableoutline && b.win.css({
                        outline: "none"
                    }));
                    !1 === b.opt.autohidemode ? (b.autohidedom = !1, b.rail.css({
                        opacity: b.opt.cursoropacitymax
                    }), b.railh && b.railh.css({
                        opacity: b.opt.cursoropacitymax
                    })) : !0 === b.opt.autohidemode || "leave" === b.opt.autohidemode ? (b.autohidedom = e().add(b.rail), E.isie8 && (b.autohidedom = b.autohidedom.add(b.cursor)), b.railh && (b.autohidedom = b.autohidedom.add(b.railh)), b.railh && E.isie8 && (b.autohidedom = b.autohidedom.add(b.cursorh))) : "scroll" == b.opt.autohidemode ? (b.autohidedom = e().add(b.rail), b.railh && (b.autohidedom = b.autohidedom.add(b.railh))) : "cursor" == b.opt.autohidemode ? (b.autohidedom = e().add(b.cursor), b.railh && (b.autohidedom = b.autohidedom.add(b.cursorh))) : "hidden" == b.opt.autohidemode && (b.autohidedom = !1, b.hide(), b.locked = !1);
                    if (E.isie9mobile) b.scrollmom = new y(b), b.onmangotouch = function (e) {
                        e = b.getScrollTop();
                        var t = b.getScrollLeft();
                        if (e == b.scrollmom.lastscrolly && t == b.scrollmom.lastscrollx) return !0;
                        var n = e - b.mangotouch.sy,
                            r = t - b.mangotouch.sx;
                        if (0 != Math.round(Math.sqrt(Math.pow(r, 2) + Math.pow(n, 2)))) {
                            var i = 0 > n ? -1 : 1,
                                s = 0 > r ? -1 : 1,
                                o = +(new Date);
                            b.mangotouch.lazy && clearTimeout(b.mangotouch.lazy);
                            80 < o - b.mangotouch.tm || b.mangotouch.dry != i || b.mangotouch.drx != s ? (b.scrollmom.stop(), b.scrollmom.reset(t, e), b.mangotouch.sy = e, b.mangotouch.ly = e, b.mangotouch.sx = t, b.mangotouch.lx = t, b.mangotouch.dry = i, b.mangotouch.drx = s, b.mangotouch.tm = o) : (b.scrollmom.stop(), b.scrollmom.update(b.mangotouch.sx - r, b.mangotouch.sy - n), b.mangotouch.tm = o, n = Math.max(Math.abs(b.mangotouch.ly - e), Math.abs(b.mangotouch.lx - t)), b.mangotouch.ly = e, b.mangotouch.lx = t, 2 < n && (b.mangotouch.lazy = setTimeout(function () {
                                b.mangotouch.lazy = !1;
                                b.mangotouch.dry = 0;
                                b.mangotouch.drx = 0;
                                b.mangotouch.tm = 0;
                                b.scrollmom.doMomentum(30)
                            }, 100)))
                        }
                    }, a = b.getScrollTop(), v = b.getScrollLeft(), b.mangotouch = {
                        sy: a,
                        ly: a,
                        dry: 0,
                        sx: v,
                        lx: v,
                        drx: 0,
                        lazy: !1,
                        tm: 0
                    }, b.bind(b.docscroll, "scroll", b.onmangotouch);
                    else {
                        if (E.cantouch || b.istouchcapable || b.opt.touchbehavior || E.hasmstouch) {
                            b.scrollmom = new y(b);
                            b.ontouchstart = function (t) {
                                if (t.pointerType && 2 != t.pointerType) return !1;
                                b.hasmoving = !1;
                                if (!b.locked) {
                                    if (E.hasmstouch)
                                        for (var n = t.target ? t.target : !1; n;) {
                                            var r = e(n).getNiceScroll();
                                            if (0 < r.length && r[0].me == b.me) break;
                                            if (0 < r.length) return !1;
                                            if ("DIV" == n.nodeName && n.id == b.id) break;
                                            n = n.parentNode ? n.parentNode : !1
                                        }
                                    b.cancelScroll();
                                    if ((n = b.getTarget(t)) && /INPUT/i.test(n.nodeName) && /range/i.test(n.type)) return b.stopPropagation(t);
                                    !("clientX" in t) && "changedTouches" in t && (t.clientX = t.changedTouches[0].clientX, t.clientY = t.changedTouches[0].clientY);
                                    b.forcescreen && (r = t, t = {
                                        original: t.original ? t.original : t
                                    }, t.clientX = r.screenX, t.clientY = r.screenY);
                                    b.rail.drag = {
                                        x: t.clientX,
                                        y: t.clientY,
                                        sx: b.scroll.x,
                                        sy: b.scroll.y,
                                        st: b.getScrollTop(),
                                        sl: b.getScrollLeft(),
                                        pt: 2,
                                        dl: !1
                                    };
                                    if (b.ispage || !b.opt.directionlockdeadzone) b.rail.drag.dl = "f";
                                    else {
                                        var r = e(window).width(),
                                            i = e(window).height(),
                                            s = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                                            o = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
                                            i = Math.max(0, o - i),
                                            r = Math.max(0, s - r);
                                        b.rail.drag.ck = !b.rail.scrollable && b.railh.scrollable ? 0 < i ? "v" : !1 : b.rail.scrollable && !b.railh.scrollable ? 0 < r ? "h" : !1 : !1;
                                        b.rail.drag.ck || (b.rail.drag.dl = "f")
                                    }
                                    b.opt.touchbehavior && b.isiframe && E.isie && (r = b.win.position(), b.rail.drag.x += r.left, b.rail.drag.y += r.top);
                                    b.hasmoving = !1;
                                    b.lastmouseup = !1;
                                    b.scrollmom.reset(t.clientX, t.clientY);
                                    if (!E.cantouch && !this.istouchcapable && !E.hasmstouch) {
                                        if (!n || !/INPUT|SELECT|TEXTAREA/i.test(n.nodeName)) return !b.ispage && E.hasmousecapture && n.setCapture(), b.opt.touchbehavior ? (n.onclick && !n._onclick && (n._onclick = n.onclick, n.onclick = function (e) {
                                            if (b.hasmoving) return !1;
                                            n._onclick.call(this, e)
                                        }), b.cancelEvent(t)) : b.stopPropagation(t);
                                        /SUBMIT|CANCEL|BUTTON/i.test(e(n).attr("type")) && (pc = {
                                            tg: n,
                                            click: !1
                                        }, b.preventclick = pc)
                                    }
                                }
                            };
                            b.ontouchend = function (e) {
                                if (e.pointerType && 2 != e.pointerType) return !1;
                                if (b.rail.drag && 2 == b.rail.drag.pt && (b.scrollmom.doMomentum(), b.rail.drag = !1, b.hasmoving && (b.lastmouseup = !0, b.hideCursor(), E.hasmousecapture && document.releaseCapture(), !E.cantouch))) return b.cancelEvent(e)
                            };
                            var m = b.opt.touchbehavior && b.isiframe && !E.hasmousecapture;
                            b.ontouchmove = function (t, n) {
                                if (t.pointerType && 2 != t.pointerType) return !1;
                                if (b.rail.drag && 2 == b.rail.drag.pt) {
                                    if (E.cantouch && "undefined" == typeof t.original) return !0;
                                    b.hasmoving = !0;
                                    b.preventclick && !b.preventclick.click && (b.preventclick.click = b.preventclick.tg.onclick || !1, b.preventclick.tg.onclick = b.onpreventclick);
                                    t = e.extend({
                                        original: t
                                    }, t);
                                    "changedTouches" in t && (t.clientX = t.changedTouches[0].clientX, t.clientY = t.changedTouches[0].clientY);
                                    if (b.forcescreen) {
                                        var r = t;
                                        t = {
                                            original: t.original ? t.original : t
                                        };
                                        t.clientX = r.screenX;
                                        t.clientY = r.screenY
                                    }
                                    r = ofy = 0;
                                    if (m && !n) {
                                        var i = b.win.position(),
                                            r = -i.left;
                                        ofy = -i.top
                                    }
                                    var s = t.clientY + ofy,
                                        i = s - b.rail.drag.y,
                                        o = t.clientX + r,
                                        u = o - b.rail.drag.x,
                                        a = b.rail.drag.st - i;
                                    b.ishwscroll && b.opt.bouncescroll ? 0 > a ? a = Math.round(a / 2) : a > b.page.maxh && (a = b.page.maxh + Math.round((a - b.page.maxh) / 2)) : (0 > a && (s = a = 0), a > b.page.maxh && (a = b.page.maxh, s = 0));
                                    if (b.railh && b.railh.scrollable) {
                                        var f = b.rail.drag.sl - u;
                                        b.ishwscroll && b.opt.bouncescroll ? 0 > f ? f = Math.round(f / 2) : f > b.page.maxw && (f = b.page.maxw + Math.round((f - b.page.maxw) / 2)) : (0 > f && (o = f = 0), f > b.page.maxw && (f = b.page.maxw, o = 0))
                                    }
                                    r = !1;
                                    if (b.rail.drag.dl) r = !0, "v" == b.rail.drag.dl ? f = b.rail.drag.sl : "h" == b.rail.drag.dl && (a = b.rail.drag.st);
                                    else {
                                        var i = Math.abs(i),
                                            u = Math.abs(u),
                                            l = b.opt.directionlockdeadzone;
                                        if ("v" == b.rail.drag.ck) {
                                            if (i > l && u <= .3 * i) return b.rail.drag = !1, !0;
                                            u > l && (b.rail.drag.dl = "f", e("body").scrollTop(e("body").scrollTop()))
                                        } else if ("h" == b.rail.drag.ck) {
                                            if (u > l && i <= .3 * u) return b.rail.drag = !1, !0;
                                            i > l && (b.rail.drag.dl = "f", e("body").scrollLeft(e("body").scrollLeft()))
                                        }
                                    }
                                    b.synched("touchmove", function () {
                                        b.rail.drag && 2 == b.rail.drag.pt && (b.prepareTransition && b.prepareTransition(0), b.rail.scrollable && b.setScrollTop(a), b.scrollmom.update(o, s), b.railh && b.railh.scrollable ? (b.setScrollLeft(f), b.showCursor(a, f)) : b.showCursor(a), E.isie10 && document.selection.clear())
                                    });
                                    E.ischrome && b.istouchcapable && (r = !1);
                                    if (r) return b.cancelEvent(t)
                                }
                            }
                        }
                        b.onmousedown = function (e, t) {
                            if (!b.rail.drag || 1 == b.rail.drag.pt) {
                                if (b.locked) return b.cancelEvent(e);
                                b.cancelScroll();
                                b.rail.drag = {
                                    x: e.clientX,
                                    y: e.clientY,
                                    sx: b.scroll.x,
                                    sy: b.scroll.y,
                                    pt: 1,
                                    hr: !! t
                                };
                                var n = b.getTarget(e);
                                !b.ispage && E.hasmousecapture && n.setCapture();
                                b.isiframe && !E.hasmousecapture && (b.saved.csspointerevents = b.doc.css("pointer-events"), b.css(b.doc, {
                                    "pointer-events": "none"
                                }));
                                return b.cancelEvent(e)
                            }
                        };
                        b.onmouseup = function (e) {
                            if (b.rail.drag && (E.hasmousecapture && document.releaseCapture(), b.isiframe && !E.hasmousecapture && b.doc.css("pointer-events", b.saved.csspointerevents), 1 == b.rail.drag.pt)) return b.rail.drag = !1, b.cancelEvent(e)
                        };
                        b.onmousemove = function (e) {
                            if (b.rail.drag && 1 == b.rail.drag.pt) {
                                if (E.ischrome && 0 == e.which) return b.onmouseup(e);
                                b.cursorfreezed = !0;
                                if (b.rail.drag.hr) {
                                    b.scroll.x = b.rail.drag.sx + (e.clientX - b.rail.drag.x);
                                    0 > b.scroll.x && (b.scroll.x = 0);
                                    var t = b.scrollvaluemaxw;
                                    b.scroll.x > t && (b.scroll.x = t)
                                } else b.scroll.y = b.rail.drag.sy + (e.clientY - b.rail.drag.y), 0 > b.scroll.y && (b.scroll.y = 0), t = b.scrollvaluemax, b.scroll.y > t && (b.scroll.y = t);
                                b.synched("mousemove", function () {
                                    b.rail.drag && 1 == b.rail.drag.pt && (b.showCursor(), b.rail.drag.hr ? b.doScrollLeft(Math.round(b.scroll.x * b.scrollratio.x), b.opt.cursordragspeed) : b.doScrollTop(Math.round(b.scroll.y * b.scrollratio.y), b.opt.cursordragspeed))
                                });
                                return b.cancelEvent(e)
                            }
                        };
                        if (E.cantouch || b.opt.touchbehavior) b.onpreventclick = function (e) {
                            if (b.preventclick) return b.preventclick.tg.onclick = b.preventclick.click, b.preventclick = !1, b.cancelEvent(e)
                        }, b.bind(b.win, "mousedown", b.ontouchstart), b.onclick = E.isios ? !1 : function (e) {
                            return b.lastmouseup ? (b.lastmouseup = !1, b.cancelEvent(e)) : !0
                        }, b.opt.grabcursorenabled && E.cursorgrabvalue && (b.css(b.ispage ? b.doc : b.win, {
                            cursor: E.cursorgrabvalue
                        }), b.css(b.rail, {
                            cursor: E.cursorgrabvalue
                        }));
                        else {
                            var g = function (e) {
                                if (b.selectiondrag) {
                                    if (e) {
                                        var t = b.win.outerHeight();
                                        e = e.pageY - b.selectiondrag.top;
                                        0 < e && e < t && (e = 0);
                                        e >= t && (e -= t);
                                        b.selectiondrag.df = e
                                    }
                                    0 != b.selectiondrag.df && (b.doScrollBy(2 * -Math.floor(b.selectiondrag.df / 6)), b.debounced("doselectionscroll", function () {
                                        g()
                                    }, 50))
                                }
                            };
                            b.hasTextSelected = "getSelection" in document ? function () {
                                return 0 < document.getSelection().rangeCount
                            } : "selection" in document ? function () {
                                return "None" != document.selection.type
                            } : function () {
                                return !1
                            };
                            b.onselectionstart = function (e) {
                                b.ispage || (b.selectiondrag = b.win.offset())
                            };
                            b.onselectionend = function (e) {
                                b.selectiondrag = !1
                            };
                            b.onselectiondrag = function (e) {
                                b.selectiondrag && b.hasTextSelected() && b.debounced("selectionscroll", function () {
                                    g(e)
                                }, 250)
                            }
                        }
                        E.hasmstouch && (b.css(b.rail, {
                            "-ms-touch-action": "none"
                        }), b.css(b.cursor, {
                            "-ms-touch-action": "none"
                        }), b.bind(b.win, "MSPointerDown", b.ontouchstart), b.bind(document, "MSPointerUp", b.ontouchend), b.bind(document, "MSPointerMove", b.ontouchmove), b.bind(b.cursor, "MSGestureHold", function (e) {
                            e.preventDefault()
                        }), b.bind(b.cursor, "contextmenu", function (e) {
                            e.preventDefault()
                        }));
                        this.istouchcapable && (b.bind(b.win, "touchstart", b.ontouchstart), b.bind(document, "touchend", b.ontouchend), b.bind(document, "touchcancel", b.ontouchend), b.bind(document, "touchmove", b.ontouchmove));
                        b.bind(b.cursor, "mousedown", b.onmousedown);
                        b.bind(b.cursor, "mouseup", b.onmouseup);
                        b.railh && (b.bind(b.cursorh, "mousedown", function (e) {
                            b.onmousedown(e, !0)
                        }), b.bind(b.cursorh, "mouseup", function (e) {
                            if (!b.rail.drag || 2 != b.rail.drag.pt) return b.rail.drag = !1, b.hasmoving = !1, b.hideCursor(), E.hasmousecapture && document.releaseCapture(), b.cancelEvent(e)
                        }));
                        if (b.opt.cursordragontouch || !E.cantouch && !b.opt.touchbehavior) b.rail.css({
                            cursor: "default"
                        }), b.railh && b.railh.css({
                            cursor: "default"
                        }), b.jqbind(b.rail, "mouseenter", function () {
                            b.canshowonmouseevent && b.showCursor();
                            b.rail.active = !0
                        }), b.jqbind(b.rail, "mouseleave", function () {
                            b.rail.active = !1;
                            b.rail.drag || b.hideCursor()
                        }), b.opt.sensitiverail && (b.bind(b.rail, "click", function (e) {
                            b.doRailClick(e, !1, !1)
                        }), b.bind(b.rail, "dblclick", function (e) {
                            b.doRailClick(e, !0, !1)
                        }), b.bind(b.cursor, "click", function (e) {
                            b.cancelEvent(e)
                        }), b.bind(b.cursor, "dblclick", function (e) {
                            b.cancelEvent(e)
                        })), b.railh && (b.jqbind(b.railh, "mouseenter", function () {
                            b.canshowonmouseevent && b.showCursor();
                            b.rail.active = !0
                        }), b.jqbind(b.railh, "mouseleave", function () {
                            b.rail.active = !1;
                            b.rail.drag || b.hideCursor()
                        }), b.opt.sensitiverail && (b.bind(b.railh, "click", function (e) {
                            b.doRailClick(e, !1, !0)
                        }), b.bind(b.railh, "dblclick", function (e) {
                            b.doRailClick(e, !0, !0)
                        }), b.bind(b.cursorh, "click", function (e) {
                            b.cancelEvent(e)
                        }), b.bind(b.cursorh, "dblclick", function (e) {
                            b.cancelEvent(e)
                        })));
                        !E.cantouch && !b.opt.touchbehavior ? (b.bind(E.hasmousecapture ? b.win : document, "mouseup", b.onmouseup), b.bind(document, "mousemove", b.onmousemove), b.onclick && b.bind(document, "click", b.onclick), !b.ispage && b.opt.enablescrollonselection && (b.bind(b.win[0], "mousedown", b.onselectionstart), b.bind(document, "mouseup", b.onselectionend), b.bind(b.cursor, "mouseup", b.onselectionend), b.cursorh && b.bind(b.cursorh, "mouseup", b.onselectionend), b.bind(document, "mousemove", b.onselectiondrag)), b.zoom && (b.jqbind(b.zoom, "mouseenter", function () {
                            b.canshowonmouseevent && b.showCursor();
                            b.rail.active = !0
                        }), b.jqbind(b.zoom, "mouseleave", function () {
                            b.rail.active = !1;
                            b.rail.drag || b.hideCursor()
                        }))) : (b.bind(E.hasmousecapture ? b.win : document, "mouseup", b.ontouchend), b.bind(document, "mousemove", b.ontouchmove), b.onclick && b.bind(document, "click", b.onclick), b.opt.cursordragontouch && (b.bind(b.cursor, "mousedown", b.onmousedown), b.bind(b.cursor, "mousemove", b.onmousemove), b.cursorh && b.bind(b.cursorh, "mousedown", function (e) {
                            b.onmousedown(e, !0)
                        }), b.cursorh && b.bind(b.cursorh, "mousemove", b.onmousemove)));
                        b.opt.enablemousewheel && (b.isiframe || b.bind(E.isie && b.ispage ? document : b.win, "mousewheel", b.onmousewheel), b.bind(b.rail, "mousewheel", b.onmousewheel), b.railh && b.bind(b.railh, "mousewheel", b.onmousewheelhr));
                        !b.ispage && !E.cantouch && !/HTML|BODY/.test(b.win[0].nodeName) && (b.win.attr("tabindex") || b.win.attr({
                            tabindex: r++
                        }), b.jqbind(b.win, "focus", function (e) {
                            t = b.getTarget(e).id || !0;
                            b.hasfocus = !0;
                            b.canshowonmouseevent && b.noticeCursor()
                        }), b.jqbind(b.win, "blur", function (e) {
                            t = !1;
                            b.hasfocus = !1
                        }), b.jqbind(b.win, "mouseenter", function (e) {
                            n = b.getTarget(e).id || !0;
                            b.hasmousefocus = !0;
                            b.canshowonmouseevent && b.noticeCursor()
                        }), b.jqbind(b.win, "mouseleave", function () {
                            n = !1;
                            b.hasmousefocus = !1;
                            b.rail.drag || b.hideCursor()
                        }))
                    }
                    b.onkeypress = function (e) {
                        if (b.locked && 0 == b.page.maxh) return !0;
                        e = e ? e : window.e;
                        var r = b.getTarget(e);
                        if (r && /INPUT|TEXTAREA|SELECT|OPTION/.test(r.nodeName) && (!r.getAttribute("type") && !r.type || !/submit|button|cancel/i.tp)) return !0;
                        if (b.hasfocus || b.hasmousefocus && !t || b.ispage && !t && !n) {
                            r = e.keyCode;
                            if (b.locked && 27 != r) return b.cancelEvent(e);
                            var i = e.ctrlKey || !1,
                                s = e.shiftKey || !1,
                                o = !1;
                            switch (r) {
                            case 38:
                            case 63233:
                                b.doScrollBy(72);
                                o = !0;
                                break;
                            case 40:
                            case 63235:
                                b.doScrollBy(-72);
                                o = !0;
                                break;
                            case 37:
                            case 63232:
                                b.railh && (i ? b.doScrollLeft(0) : b.doScrollLeftBy(72), o = !0);
                                break;
                            case 39:
                            case 63234:
                                b.railh && (i ? b.doScrollLeft(b.page.maxw) : b.doScrollLeftBy(-72), o = !0);
                                break;
                            case 33:
                            case 63276:
                                b.doScrollBy(b.view.h);
                                o = !0;
                                break;
                            case 34:
                            case 63277:
                                b.doScrollBy(-b.view.h);
                                o = !0;
                                break;
                            case 36:
                            case 63273:
                                b.railh && i ? b.doScrollPos(0, 0) : b.doScrollTo(0);
                                o = !0;
                                break;
                            case 35:
                            case 63275:
                                b.railh && i ? b.doScrollPos(b.page.maxw, b.page.maxh) : b.doScrollTo(b.page.maxh);
                                o = !0;
                                break;
                            case 32:
                                b.opt.spacebarenabled && (s ? b.doScrollBy(b.view.h) : b.doScrollBy(-b.view.h), o = !0);
                                break;
                            case 27:
                                b.zoomactive && (b.doZoom(), o = !0)
                            }
                            if (o) return b.cancelEvent(e)
                        }
                    };
                    b.opt.enablekeyboard && b.bind(document, E.isopera && !E.isopera12 ? "keypress" : "keydown", b.onkeypress);
                    b.bind(window, "resize", b.lazyResize);
                    b.bind(window, "orientationchange", b.lazyResize);
                    b.bind(window, "load", b.lazyResize);
                    if (E.ischrome && !b.ispage && !b.haswrapper) {
                        var w = b.win.attr("style"),
                            a = parseFloat(b.win.css("width")) + 1;
                        b.win.css("width", a);
                        b.synched("chromefix", function () {
                            b.win.attr("style", w)
                        })
                    }
                    b.onAttributeChange = function (e) {
                        b.lazyResize(250)
                    };
                    !b.ispage && !b.haswrapper && (!1 !== p ? (b.observer = new p(function (e) {
                        e.forEach(b.onAttributeChange)
                    }), b.observer.observe(b.win[0], {
                        childList: !0,
                        characterData: !1,
                        attributes: !0,
                        subtree: !1
                    }), b.observerremover = new p(function (e) {
                        e.forEach(function (e) {
                            if (0 < e.removedNodes.length)
                                for (var t in e.removedNodes)
                                    if (e.removedNodes[t] == b.win[0]) return b.remove()
                        })
                    }), b.observerremover.observe(b.win[0].parentNode, {
                        childList: !0,
                        characterData: !1,
                        attributes: !1,
                        subtree: !1
                    })) : (b.bind(b.win, E.isie && !E.isie9 ? "propertychange" : "DOMAttrModified", b.onAttributeChange), E.isie9 && b.win[0].attachEvent("onpropertychange", b.onAttributeChange), b.bind(b.win, "DOMNodeRemoved", function (e) {
                        e.target == b.win[0] && b.remove()
                    })));
                    !b.ispage && b.opt.boxzoom && b.bind(window, "resize", b.resizeZoom);
                    b.istextarea && b.bind(b.win, "mouseup", b.lazyResize);
                    b.checkrtlmode = !0;
                    b.lazyResize(30)
                }
                if ("IFRAME" == this.doc[0].nodeName) {
                    var S = function (t) {
                        b.iframexd = !1;
                        try {
                            var n = "contentDocument" in this ? this.contentDocument : this.contentWindow.document
                        } catch (r) {
                            b.iframexd = !0, n = !1
                        }
                        if (b.iframexd) return "console" in window && console.log("NiceScroll error: policy restriced iframe"), !0;
                        b.forcescreen = !0;
                        b.isiframe && (b.iframe = {
                            doc: e(n),
                            html: b.doc.contents().find("html")[0],
                            body: b.doc.contents().find("body")[0]
                        }, b.getContentSize = function () {
                            return {
                                w: Math.max(b.iframe.html.scrollWidth, b.iframe.body.scrollWidth),
                                h: Math.max(b.iframe.html.scrollHeight, b.iframe.body.scrollHeight)
                            }
                        }, b.docscroll = e(b.iframe.body));
                        !E.isios && b.opt.iframeautoresize && !b.isiframe && (b.win.scrollTop(0), b.doc.height(""), t = Math.max(n.getElementsByTagName("html")[0].scrollHeight, n.body.scrollHeight), b.doc.height(t));
                        b.lazyResize(30);
                        E.isie7 && b.css(e(b.iframe.html), {
                            "overflow-y": "hidden"
                        });
                        b.css(e(b.iframe.body), {
                            "overflow-y": "hidden"
                        });
                        E.isios && b.haswrapper && b.css(e(n.body), {
                            "-webkit-transform": "translate3d(0,0,0)"
                        });
                        "contentWindow" in this ? b.bind(this.contentWindow, "scroll", b.onscroll) : b.bind(n, "scroll", b.onscroll);
                        b.opt.enablemousewheel && b.bind(n, "mousewheel", b.onmousewheel);
                        b.opt.enablekeyboard && b.bind(n, E.isopera ? "keypress" : "keydown", b.onkeypress);
                        if (E.cantouch || b.opt.touchbehavior) b.bind(n, "mousedown", b.ontouchstart), b.bind(n, "mousemove", function (e) {
                            b.ontouchmove(e, !0)
                        }), b.opt.grabcursorenabled && E.cursorgrabvalue && b.css(e(n.body), {
                            cursor: E.cursorgrabvalue
                        });
                        b.bind(n, "mouseup", b.ontouchend);
                        b.zoom && (b.opt.dblclickzoom && b.bind(n, "dblclick", b.doZoom), b.ongesturezoom && b.bind(n, "gestureend", b.ongesturezoom))
                    };
                    this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function () {
                        S.call(b.doc[0], !1)
                    }, 500);
                    b.bind(this.doc, "load", S)
                }
            };
            this.showCursor = function (e, t) {
                b.cursortimeout && (clearTimeout(b.cursortimeout), b.cursortimeout = 0);
                if (b.rail) {
                    b.autohidedom && (b.autohidedom.stop().css({
                        opacity: b.opt.cursoropacitymax
                    }), b.cursoractive = !0);
                    if (!b.rail.drag || 1 != b.rail.drag.pt) "undefined" != typeof e && !1 !== e && (b.scroll.y = Math.round(1 * e / b.scrollratio.y)), "undefined" != typeof t && (b.scroll.x = Math.round(1 * t / b.scrollratio.x));
                    b.cursor.css({
                        height: b.cursorheight,
                        top: b.scroll.y
                    });
                    b.cursorh && (!b.rail.align && b.rail.visibility ? b.cursorh.css({
                        width: b.cursorwidth,
                        left: b.scroll.x + b.rail.width
                    }) : b.cursorh.css({
                        width: b.cursorwidth,
                        left: b.scroll.x
                    }), b.cursoractive = !0);
                    b.zoom && b.zoom.stop().css({
                        opacity: b.opt.cursoropacitymax
                    })
                }
            };
            this.hideCursor = function (e) {
                !b.cursortimeout && b.rail && b.autohidedom && (!b.hasmousefocus || "leave" != b.opt.autohidemode) && (b.cursortimeout = setTimeout(function () {
                    if (!b.rail.active || !b.showonmouseevent) b.autohidedom.stop().animate({
                        opacity: b.opt.cursoropacitymin
                    }), b.zoom && b.zoom.stop().animate({
                        opacity: b.opt.cursoropacitymin
                    }), b.cursoractive = !1;
                    b.cursortimeout = 0
                }, e || b.opt.hidecursordelay))
            };
            this.noticeCursor = function (e, t, n) {
                b.showCursor(t, n);
                b.rail.active || b.hideCursor(e)
            };
            this.getContentSize = b.ispage ? function () {
                return {
                    w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                    h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }
            } : b.haswrapper ? function () {
                return {
                    w: b.doc.outerWidth() + parseInt(b.win.css("paddingLeft")) + parseInt(b.win.css("paddingRight")),
                    h: b.doc.outerHeight() + parseInt(b.win.css("paddingTop")) + parseInt(b.win.css("paddingBottom"))
                }
            } : function () {
                return {
                    w: b.docscroll[0].scrollWidth,
                    h: b.docscroll[0].scrollHeight
                }
            };
            this.onResize = function (e, t) {
                if (!b || !b.win) return !1;
                if (!b.haswrapper && !b.ispage) {
                    if ("none" == b.win.css("display")) return b.visibility && b.hideRail().hideRailHr(), !1;
                    !b.hidden && !b.visibility && b.showRail().showRailHr()
                }
                var n = b.page.maxh,
                    r = b.page.maxw,
                    i = b.view.w;
                b.view = {
                    w: b.ispage ? b.win.width() : parseInt(b.win[0].clientWidth),
                    h: b.ispage ? b.win.height() : parseInt(b.win[0].clientHeight)
                };
                b.page = t ? t : b.getContentSize();
                b.page.maxh = Math.max(0, b.page.h - b.view.h);
                b.page.maxw = Math.max(0, b.page.w - b.view.w);
                if (b.page.maxh == n && b.page.maxw == r && b.view.w == i) {
                    if (b.ispage) return b;
                    n = b.win.offset();
                    if (b.lastposition && (r = b.lastposition, r.top == n.top && r.left == n.left)) return b;
                    b.lastposition = n
                }
                0 == b.page.maxh ? (b.hideRail(), b.scrollvaluemax = 0, b.scroll.y = 0, b.scrollratio.y = 0, b.cursorheight = 0, b.setScrollTop(0), b.rail.scrollable = !1) : b.rail.scrollable = !0;
                0 == b.page.maxw ? (b.hideRailHr(), b.scrollvaluemaxw = 0, b.scroll.x = 0, b.scrollratio.x = 0, b.cursorwidth = 0, b.setScrollLeft(0), b.railh.scrollable = !1) : b.railh.scrollable = !0;
                b.locked = 0 == b.page.maxh && 0 == b.page.maxw;
                if (b.locked) return b.ispage || b.updateScrollBar(b.view), !1;
                !b.hidden && !b.visibility ? b.showRail().showRailHr() : !b.hidden && !b.railh.visibility && b.showRailHr();
                b.istextarea && b.win.css("resize") && "none" != b.win.css("resize") && (b.view.h -= 20);
                b.cursorheight = Math.min(b.view.h, Math.round(b.view.h * (b.view.h / b.page.h)));
                b.cursorheight = b.opt.cursorfixedheight ? b.opt.cursorfixedheight : Math.max(b.opt.cursorminheight, b.cursorheight);
                b.cursorwidth = Math.min(b.view.w, Math.round(b.view.w * (b.view.w / b.page.w)));
                b.cursorwidth = b.opt.cursorfixedheight ? b.opt.cursorfixedheight : Math.max(b.opt.cursorminheight, b.cursorwidth);
                b.scrollvaluemax = b.view.h - b.cursorheight - b.cursor.hborder;
                b.railh && (b.railh.width = 0 < b.page.maxh ? b.view.w - b.rail.width : b.view.w, b.scrollvaluemaxw = b.railh.width - b.cursorwidth - b.cursorh.wborder);
                b.checkrtlmode && b.railh && (b.checkrtlmode = !1, b.opt.rtlmode && 0 == b.scroll.x && b.setScrollLeft(b.page.maxw));
                b.ispage || b.updateScrollBar(b.view);
                b.scrollratio = {
                    x: b.page.maxw / b.scrollvaluemaxw,
                    y: b.page.maxh / b.scrollvaluemax
                };
                b.getScrollTop() > b.page.maxh ? b.doScrollTop(b.page.maxh) : (b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y)), b.scroll.x = Math.round(b.getScrollLeft() * (1 / b.scrollratio.x)), b.cursoractive && b.noticeCursor());
                b.scroll.y && 0 == b.getScrollTop() && b.doScrollTo(Math.floor(b.scroll.y * b.scrollratio.y));
                return b
            };
            this.resize = b.onResize;
            this.lazyResize = function (e) {
                e = isNaN(e) ? 30 : e;
                b.delayed("resize", b.resize, e);
                return b
            };
            this._bind = function (e, t, n, r) {
                b.events.push({
                    e: e,
                    n: t,
                    f: n,
                    b: r,
                    q: !1
                });
                e.addEventListener ? e.addEventListener(t, n, r || !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n
            };
            this.jqbind = function (t, n, r) {
                b.events.push({
                    e: t,
                    n: n,
                    f: r,
                    q: !0
                });
                e(t).bind(n, r)
            };
            this.bind = function (e, t, n, r) {
                var i = "jquery" in e ? e[0] : e;
                "mousewheel" == t ? "onwheel" in b.win ? b._bind(i, "wheel", n, r || !1) : (e = "undefined" != typeof document.onmousewheel ? "mousewheel" : "DOMMouseScroll", v(i, e, n, r || !1), "DOMMouseScroll" == e && v(i, "MozMousePixelScroll", n, r || !1)) : i.addEventListener ? (E.cantouch && /mouseup|mousedown|mousemove/.test(t) && b._bind(i, "mousedown" == t ? "touchstart" : "mouseup" == t ? "touchend" : "touchmove", function (e) {
                    if (e.touches) {
                        if (2 > e.touches.length) {
                            var t = e.touches.length ? e.touches[0] : e;
                            t.original = e;
                            n.call(this, t)
                        }
                    } else e.changedTouches && (t = e.changedTouches[0], t.original = e, n.call(this, t))
                }, r || !1), b._bind(i, t, n, r || !1), E.cantouch && "mouseup" == t && b._bind(i, "touchcancel", n, r || !1)) : b._bind(i, t, function (e) {
                    (e = e || window.event || !1) && e.srcElement && (e.target = e.srcElement);
                    "pageY" in e || (e.pageX = e.clientX + document.documentElement.scrollLeft, e.pageY = e.clientY + document.documentElement.scrollTop);
                    return !1 === n.call(i, e) || !1 === r ? b.cancelEvent(e) : !0
                })
            };
            this._unbind = function (e, t, n, r) {
                e.removeEventListener ? e.removeEventListener(t, n, r) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = !1
            };
            this.unbindAll = function () {
                for (var e = 0; e < b.events.length; e++) {
                    var t = b.events[e];
                    t.q ? t.e.unbind(t.n, t.f) : b._unbind(t.e, t.n, t.f, t.b)
                }
            };
            this.cancelEvent = function (e) {
                e = e.original ? e.original : e ? e : window.event || !1;
                if (!e) return !1;
                e.preventDefault && e.preventDefault();
                e.stopPropagation && e.stopPropagation();
                e.preventManipulation && e.preventManipulation();
                e.cancelBubble = !0;
                e.cancel = !0;
                return e.returnValue = !1
            };
            this.stopPropagation = function (e) {
                e = e.original ? e.original : e ? e : window.event || !1;
                if (!e) return !1;
                if (e.stopPropagation) return e.stopPropagation();
                e.cancelBubble && (e.cancelBubble = !0);
                return !1
            };
            this.showRail = function () {
                0 != b.page.maxh && (b.ispage || "none" != b.win.css("display")) && (b.visibility = !0, b.rail.visibility = !0, b.rail.css("display", "block"));
                return b
            };
            this.showRailHr = function () {
                if (!b.railh) return b;
                0 != b.page.maxw && (b.ispage || "none" != b.win.css("display")) && (b.railh.visibility = !0, b.railh.css("display", "block"));
                return b
            };
            this.hideRail = function () {
                b.visibility = !1;
                b.rail.visibility = !1;
                b.rail.css("display", "none");
                return b
            };
            this.hideRailHr = function () {
                if (!b.railh) return b;
                b.railh.visibility = !1;
                b.railh.css("display", "none");
                return b
            };
            this.show = function () {
                b.hidden = !1;
                b.locked = !1;
                return b.showRail().showRailHr()
            };
            this.hide = function () {
                b.hidden = !0;
                b.locked = !0;
                return b.hideRail().hideRailHr()
            };
            this.toggle = function () {
                return b.hidden ? b.show() : b.hide()
            };
            this.remove = function () {
                b.stop();
                b.cursortimeout && clearTimeout(b.cursortimeout);
                b.doZoomOut();
                b.unbindAll();
                E.isie9 && b.win[0].detachEvent("onpropertychange", b.onAttributeChange);
                !1 !== b.observer && b.observer.disconnect();
                !1 !== b.observerremover && b.observerremover.disconnect();
                b.events = null;
                b.cursor && b.cursor.remove();
                b.cursorh && b.cursorh.remove();
                b.rail && b.rail.remove();
                b.railh && b.railh.remove();
                b.zoom && b.zoom.remove();
                for (var t = 0; t < b.saved.css.length; t++) {
                    var n = b.saved.css[t];
                    n[0].css(n[1], "undefined" == typeof n[2] ? "" : n[2])
                }
                b.saved = !1;
                b.me.data("__nicescroll", "");
                var r = e.nicescroll;
                r.each(function (e) {
                    if (this && this.id === b.id) {
                        delete r[e];
                        for (var t = ++e; t < r.length; t++, e++) r[e] = r[t];
                        r.length--;
                        r.length && delete r[r.length]
                    }
                });
                for (var i in b) b[i] = null, delete b[i];
                b = null
            };
            this.scrollstart = function (e) {
                this.onscrollstart = e;
                return b
            };
            this.scrollend = function (e) {
                this.onscrollend = e;
                return b
            };
            this.scrollcancel = function (e) {
                this.onscrollcancel = e;
                return b
            };
            this.zoomin = function (e) {
                this.onzoomin = e;
                return b
            };
            this.zoomout = function (e) {
                this.onzoomout = e;
                return b
            };
            this.isScrollable = function (t) {
                t = t.target ? t.target : t;
                if ("OPTION" == t.nodeName) return !0;
                for (; t && 1 == t.nodeType && !/BODY|HTML/.test(t.nodeName);) {
                    var n = e(t),
                        n = n.css("overflowY") || n.css("overflowX") || n.css("overflow") || "";
                    if (/scroll|auto/.test(
                        n)) return t.clientHeight != t.scrollHeight;
                    t = t.parentNode ? t.parentNode : !1
                }
                return !1
            };
            this.getViewport = function (t) {
                for (t = t && t.parentNode ? t.parentNode : !1; t && 1 == t.nodeType && !/BODY|HTML/.test(t.nodeName);) {
                    var n = e(t);
                    if (/fixed|absolute/.test(n.css("position"))) return n;
                    var r = n.css("overflowY") || n.css("overflowX") || n.css("overflow") || "";
                    if (/scroll|auto/.test(r) && t.clientHeight != t.scrollHeight || 0 < n.getNiceScroll().length) return n;
                    t = t.parentNode ? t.parentNode : !1
                }
                return !1
            };
            this.onmousewheel = function (e) {
                if (b.locked) return b.debounced("checkunlock", b.resize, 250), !0;
                if (b.rail.drag) return b.cancelEvent(e);
                "auto" == b.opt.oneaxismousemode && 0 != e.deltaX && (b.opt.oneaxismousemode = !1);
                if (b.opt.oneaxismousemode && 0 == e.deltaX && !b.rail.scrollable) return b.railh && b.railh.scrollable ? b.onmousewheelhr(e) : !0;
                var t = +(new Date),
                    n = !1;
                b.opt.preservenativescrolling && b.checkarea + 600 < t && (b.nativescrollingarea = b.isScrollable(e), n = !0);
                b.checkarea = t;
                if (b.nativescrollingarea) return !0;
                if (e = g(e, !1, n)) b.checkarea = 0;
                return e
            };
            this.onmousewheelhr = function (e) {
                if (b.locked || !b.railh.scrollable) return !0;
                if (b.rail.drag) return b.cancelEvent(e);
                var t = +(new Date),
                    n = !1;
                b.opt.preservenativescrolling && b.checkarea + 600 < t && (b.nativescrollingarea = b.isScrollable(e), n = !0);
                b.checkarea = t;
                return b.nativescrollingarea ? !0 : b.locked ? b.cancelEvent(e) : g(e, !0, n)
            };
            this.stop = function () {
                b.cancelScroll();
                b.scrollmon && b.scrollmon.stop();
                b.cursorfreezed = !1;
                b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y));
                b.noticeCursor();
                return b
            };
            this.getTransitionSpeed = function (e) {
                var t = Math.round(10 * b.opt.scrollspeed);
                e = Math.min(t, Math.round(e / 20 * b.opt.scrollspeed));
                return 20 < e ? e : 0
            };
            b.opt.smoothscroll ? b.ishwscroll && E.hastransition && b.opt.usetransition ? (this.prepareTransition = function (e, t) {
                var n = t ? 20 < e ? e : 0 : b.getTransitionSpeed(e),
                    r = n ? E.prefixstyle + "transform " + n + "ms ease-out" : "";
                if (!b.lasttransitionstyle || b.lasttransitionstyle != r) b.lasttransitionstyle = r, b.doc.css(E.transitionstyle, r);
                return n
            }, this.doScrollLeft = function (e, t) {
                var n = b.scrollrunning ? b.newscrolly : b.getScrollTop();
                b.doScrollPos(e, n, t)
            }, this.doScrollTop = function (e, t) {
                var n = b.scrollrunning ? b.newscrollx : b.getScrollLeft();
                b.doScrollPos(n, e, t)
            }, this.doScrollPos = function (e, t, n) {
                var r = b.getScrollTop(),
                    i = b.getScrollLeft();
                (0 > (b.newscrolly - r) * (t - r) || 0 > (b.newscrollx - i) * (e - i)) && b.cancelScroll();
                0 == b.opt.bouncescroll && (0 > t ? t = 0 : t > b.page.maxh && (t = b.page.maxh), 0 > e ? e = 0 : e > b.page.maxw && (e = b.page.maxw));
                if (b.scrollrunning && e == b.newscrollx && t == b.newscrolly) return !1;
                b.newscrolly = t;
                b.newscrollx = e;
                b.newscrollspeed = n || !1;
                if (b.timer) return !1;
                b.timer = setTimeout(function () {
                    var n = b.getScrollTop(),
                        r = b.getScrollLeft(),
                        i, s;
                    i = e - r;
                    s = t - n;
                    i = Math.round(Math.sqrt(Math.pow(i, 2) + Math.pow(s, 2)));
                    i = b.newscrollspeed && 1 < b.newscrollspeed ? b.newscrollspeed : b.getTransitionSpeed(i);
                    b.newscrollspeed && 1 >= b.newscrollspeed && (i *= b.newscrollspeed);
                    b.prepareTransition(i, !0);
                    b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm);
                    0 < i && (!b.scrollrunning && b.onscrollstart && b.onscrollstart.call(b, {
                        type: "scrollstart",
                        current: {
                            x: r,
                            y: n
                        },
                        request: {
                            x: e,
                            y: t
                        },
                        end: {
                            x: b.newscrollx,
                            y: b.newscrolly
                        },
                        speed: i
                    }), E.transitionend ? b.scrollendtrapped || (b.scrollendtrapped = !0, b.bind(b.doc, E.transitionend, b.onScrollEnd, !1)) : (b.scrollendtrapped && clearTimeout(b.scrollendtrapped), b.scrollendtrapped = setTimeout(b.onScrollEnd, i)), b.timerscroll = {
                        bz: new BezierClass(n, b.newscrolly, i, 0, 0, .58, 1),
                        bh: new BezierClass(r, b.newscrollx, i, 0, 0, .58, 1)
                    }, b.cursorfreezed || (b.timerscroll.tm = setInterval(function () {
                        b.showCursor(b.getScrollTop(), b.getScrollLeft())
                    }, 60)));
                    b.synched("doScroll-set", function () {
                        b.timer = 0;
                        b.scrollendtrapped && (b.scrollrunning = !0);
                        b.setScrollTop(b.newscrolly);
                        b.setScrollLeft(b.newscrollx);
                        b.scrollendtrapped || b.onScrollEnd()
                    })
                }, 50)
            }, this.cancelScroll = function () {
                if (!b.scrollendtrapped) return !0;
                var e = b.getScrollTop(),
                    t = b.getScrollLeft();
                b.scrollrunning = !1;
                E.transitionend || clearTimeout(E.transitionend);
                b.scrollendtrapped = !1;
                b._unbind(b.doc, E.transitionend, b.onScrollEnd);
                b.prepareTransition(0);
                b.setScrollTop(e);
                b.railh && b.setScrollLeft(t);
                b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm);
                b.timerscroll = !1;
                b.cursorfreezed = !1;
                b.showCursor(e, t);
                return b
            }, this.onScrollEnd = function () {
                b.scrollendtrapped && b._unbind(b.doc, E.transitionend, b.onScrollEnd);
                b.scrollendtrapped = !1;
                b.prepareTransition(0);
                b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm);
                b.timerscroll = !1;
                var e = b.getScrollTop(),
                    t = b.getScrollLeft();
                b.setScrollTop(e);
                b.railh && b.setScrollLeft(t);
                b.noticeCursor(!1, e, t);
                b.cursorfreezed = !1;
                0 > e ? e = 0 : e > b.page.maxh && (e = b.page.maxh);
                0 > t ? t = 0 : t > b.page.maxw && (t = b.page.maxw);
                if (e != b.newscrolly || t != b.newscrollx) return b.doScrollPos(t, e, b.opt.snapbackspeed);
                b.onscrollend && b.scrollrunning && b.onscrollend.call(b, {
                    type: "scrollend",
                    current: {
                        x: t,
                        y: e
                    },
                    end: {
                        x: b.newscrollx,
                        y: b.newscrolly
                    }
                });
                b.scrollrunning = !1
            }) : (this.doScrollLeft = function (e, t) {
                var n = b.scrollrunning ? b.newscrolly : b.getScrollTop();
                b.doScrollPos(e, n, t)
            }, this.doScrollTop = function (e, t) {
                var n = b.scrollrunning ? b.newscrollx : b.getScrollLeft();
                b.doScrollPos(n, e, t)
            }, this.doScrollPos = function (e, t, n) {
                function r() {
                    if (b.cancelAnimationFrame) return !0;
                    b.scrollrunning = !0;
                    if (c = 1 - c) return b.timer = f(r) || 1;
                    var e = 0,
                        t = sy = b.getScrollTop();
                    if (b.dst.ay) {
                        var t = b.bzscroll ? b.dst.py + b.bzscroll.getNow() * b.dst.ay : b.newscrolly,
                            n = t - sy;
                        if (0 > n && t < b.newscrolly || 0 < n && t > b.newscrolly) t = b.newscrolly;
                        b.setScrollTop(t);
                        t == b.newscrolly && (e = 1)
                    } else e = 1;
                    var i = sx = b.getScrollLeft();
                    if (b.dst.ax) {
                        i = b.bzscroll ? b.dst.px + b.bzscroll.getNow() * b.dst.ax : b.newscrollx;
                        n = i - sx;
                        if (0 > n && i < b.newscrollx || 0 < n && i > b.newscrollx) i = b.newscrollx;
                        b.setScrollLeft(i);
                        i == b.newscrollx && (e += 1)
                    } else e += 1;
                    2 == e ? (b.timer = 0, b.cursorfreezed = !1, b.bzscroll = !1, b.scrollrunning = !1, 0 > t ? t = 0 : t > b.page.maxh && (t = b.page.maxh), 0 > i ? i = 0 : i > b.page.maxw && (i = b.page.maxw), i != b.newscrollx || t != b.newscrolly ? b.doScrollPos(i, t) : b.onscrollend && b.onscrollend.call(b, {
                        type: "scrollend",
                        current: {
                            x: sx,
                            y: sy
                        },
                        end: {
                            x: b.newscrollx,
                            y: b.newscrolly
                        }
                    })) : b.timer = f(r) || 1
                }
                t = "undefined" == typeof t || !1 === t ? b.getScrollTop(!0) : t;
                if (b.timer && b.newscrolly == t && b.newscrollx == e) return !0;
                b.timer && l(b.timer);
                b.timer = 0;
                var i = b.getScrollTop(),
                    s = b.getScrollLeft();
                (0 > (b.newscrolly - i) * (t - i) || 0 > (b.newscrollx - s) * (e - s)) && b.cancelScroll();
                b.newscrolly = t;
                b.newscrollx = e;
                if (!b.bouncescroll || !b.rail.visibility) 0 > b.newscrolly ? b.newscrolly = 0 : b.newscrolly > b.page.maxh && (b.newscrolly = b.page.maxh);
                if (!b.bouncescroll || !b.railh.visibility) 0 > b.newscrollx ? b.newscrollx = 0 : b.newscrollx > b.page.maxw && (b.newscrollx = b.page.maxw);
                b.dst = {};
                b.dst.x = e - s;
                b.dst.y = t - i;
                b.dst.px = s;
                b.dst.py = i;
                var o = Math.round(Math.sqrt(Math.pow(b.dst.x, 2) + Math.pow(b.dst.y, 2)));
                b.dst.ax = b.dst.x / o;
                b.dst.ay = b.dst.y / o;
                var u = 0,
                    a = o;
                0 == b.dst.x ? (u = i, a = t, b.dst.ay = 1, b.dst.py = 0) : 0 == b.dst.y && (u = s, a = e, b.dst.ax = 1, b.dst.px = 0);
                o = b.getTransitionSpeed(o);
                n && 1 >= n && (o *= n);
                b.bzscroll = 0 < o ? b.bzscroll ? b.bzscroll.update(a, o) : new BezierClass(u, a, o, 0, 1, 0, 1) : !1;
                if (!b.timer) {
                    (i == b.page.maxh && t >= b.page.maxh || s == b.page.maxw && e >= b.page.maxw) && b.checkContentSize();
                    var c = 1;
                    b.cancelAnimationFrame = !1;
                    b.timer = 1;
                    b.onscrollstart && !b.scrollrunning && b.onscrollstart.call(b, {
                        type: "scrollstart",
                        current: {
                            x: s,
                            y: i
                        },
                        request: {
                            x: e,
                            y: t
                        },
                        end: {
                            x: b.newscrollx,
                            y: b.newscrolly
                        },
                        speed: o
                    });
                    r();
                    (i == b.page.maxh && t >= i || s == b.page.maxw && e >= s) && b.checkContentSize();
                    b.noticeCursor()
                }
            }, this.cancelScroll = function () {
                b.timer && l(b.timer);
                b.timer = 0;
                b.bzscroll = !1;
                b.scrollrunning = !1;
                return b
            }) : (this.doScrollLeft = function (e, t) {
                var n = b.getScrollTop();
                b.doScrollPos(e, n, t)
            }, this.doScrollTop = function (e, t) {
                var n = b.getScrollLeft();
                b.doScrollPos(n, e, t)
            }, this.doScrollPos = function (e, t, n) {
                var r = e > b.page.maxw ? b.page.maxw : e;
                0 > r && (r = 0);
                var i = t > b.page.maxh ? b.page.maxh : t;
                0 > i && (i = 0);
                b.synched("scroll", function () {
                    b.setScrollTop(i);
                    b.setScrollLeft(r)
                })
            }, this.cancelScroll = function () {});
            this.doScrollBy = function (e, t) {
                var n = 0,
                    n = t ? Math.floor((b.scroll.y - e) * b.scrollratio.y) : (b.timer ? b.newscrolly : b.getScrollTop(!0)) - e;
                if (b.bouncescroll) {
                    var r = Math.round(b.view.h / 2);
                    n < -r ? n = -r : n > b.page.maxh + r && (n = b.page.maxh + r)
                }
                b.cursorfreezed = !1;
                py = b.getScrollTop(!0);
                if (0 > n && 0 >= py) return b.noticeCursor();
                if (n > b.page.maxh && py >= b.page.maxh) return b.checkContentSize(), b.noticeCursor();
                b.doScrollTop(n)
            };
            this.doScrollLeftBy = function (e, t) {
                var n = 0,
                    n = t ? Math.floor((b.scroll.x - e) * b.scrollratio.x) : (b.timer ? b.newscrollx : b.getScrollLeft(!0)) - e;
                if (b.bouncescroll) {
                    var r = Math.round(b.view.w / 2);
                    n < -r ? n = -r : n > b.page.maxw + r && (n = b.page.maxw + r)
                }
                b.cursorfreezed = !1;
                px = b.getScrollLeft(!0);
                if (0 > n && 0 >= px || n > b.page.maxw && px >= b.page.maxw) return b.noticeCursor();
                b.doScrollLeft(n)
            };
            this.doScrollTo = function (e, t) {
                t && Math.round(e * b.scrollratio.y);
                b.cursorfreezed = !1;
                b.doScrollTop(e)
            };
            this.checkContentSize = function () {
                var e = b.getContentSize();
                (e.h != b.page.h || e.w != b.page.w) && b.resize(!1, e)
            };
            b.onscroll = function (e) {
                b.rail.drag || b.cursorfreezed || b.synched("scroll", function () {
                    b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y));
                    b.railh && (b.scroll.x = Math.round(b.getScrollLeft() * (1 / b.scrollratio.x)));
                    b.noticeCursor()
                })
            };
            b.bind(b.docscroll, "scroll", b.onscroll);
            this.doZoomIn = function (t) {
                if (!b.zoomactive) {
                    b.zoomactive = !0;
                    b.zoomrestore = {
                        style: {}
                    };
                    var n = "position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),
                        r = b.win[0].style,
                        i;
                    for (i in n) {
                        var o = n[i];
                        b.zoomrestore.style[o] = "undefined" != typeof r[o] ? r[o] : ""
                    }
                    b.zoomrestore.style.width = b.win.css("width");
                    b.zoomrestore.style.height = b.win.css("height");
                    b.zoomrestore.padding = {
                        w: b.win.outerWidth() - b.win.width(),
                        h: b.win.outerHeight() - b.win.height()
                    };
                    E.isios4 && (b.zoomrestore.scrollTop = e(window).scrollTop(), e(window).scrollTop(0));
                    b.win.css({
                        position: E.isios4 ? "absolute" : "fixed",
                        top: 0,
                        left: 0,
                        "z-index": s + 100,
                        margin: "0px"
                    });
                    n = b.win.css("backgroundColor");
                    ("" == n || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(n)) && b.win.css("backgroundColor", "#fff");
                    b.rail.css({
                        "z-index": s + 101
                    });
                    b.zoom.css({
                        "z-index": s + 102
                    });
                    b.zoom.css("backgroundPosition", "0px -18px");
                    b.resizeZoom();
                    b.onzoomin && b.onzoomin.call(b);
                    return b.cancelEvent(t)
                }
            };
            this.doZoomOut = function (t) {
                if (b.zoomactive) return b.zoomactive = !1, b.win.css("margin", ""), b.win.css(b.zoomrestore.style), E.isios4 && e(window).scrollTop(b.zoomrestore.scrollTop), b.rail.css({
                    "z-index": b.zindex
                }), b.zoom.css({
                    "z-index": b.zindex
                }), b.zoomrestore = !1, b.zoom.css("backgroundPosition", "0px 0px"), b.onResize(), b.onzoomout && b.onzoomout.call(b), b.cancelEvent(t)
            };
            this.doZoom = function (e) {
                return b.zoomactive ? b.doZoomOut(e) : b.doZoomIn(e)
            };
            this.resizeZoom = function () {
                if (b.zoomactive) {
                    var t = b.getScrollTop();
                    b.win.css({
                        width: e(window).width() - b.zoomrestore.padding.w + "px",
                        height: e(window).height() - b.zoomrestore.padding.h + "px"
                    });
                    b.onResize();
                    b.setScrollTop(Math.min(b.page.maxh, t))
                }
            };
            this.init();
            e.nicescroll.push(this)
        }, y = function (e) {
            var t = this;
            this.nc = e;
            this.steptime = this.lasttime = this.speedy = this.speedx = this.lasty = this.lastx = 0;
            this.snapy = this.snapx = !1;
            this.demuly = this.demulx = 0;
            this.lastscrolly = this.lastscrollx = -1;
            this.timer = this.chky = this.chkx = 0;
            this.time = function () {
                return +(new Date)
            };
            this.reset = function (e, n) {
                t.stop();
                var r = t.time();
                t.steptime = 0;
                t.lasttime = r;
                t.speedx = 0;
                t.speedy = 0;
                t.lastx = e;
                t.lasty = n;
                t.lastscrollx = -1;
                t.lastscrolly = -1
            };
            this.update = function (e, n) {
                var r = t.time();
                t.steptime = r - t.lasttime;
                t.lasttime = r;
                var r = n - t.lasty,
                    i = e - t.lastx,
                    s = t.nc.getScrollTop(),
                    o = t.nc.getScrollLeft(),
                    s = s + r,
                    o = o + i;
                t.snapx = 0 > o || o > t.nc.page.maxw;
                t.snapy = 0 > s || s > t.nc.page.maxh;
                t.speedx = i;
                t.speedy = r;
                t.lastx = e;
                t.lasty = n
            };
            this.stop = function () {
                t.nc.unsynched("domomentum2d");
                t.timer && clearTimeout(t.timer);
                t.timer = 0;
                t.lastscrollx = -1;
                t.lastscrolly = -1
            };
            this.doSnapy = function (e, n) {
                var r = !1;
                0 > n ? (n = 0, r = !0) : n > t.nc.page.maxh && (n = t.nc.page.maxh, r = !0);
                0 > e ? (e = 0, r = !0) : e > t.nc.page.maxw && (e = t.nc.page.maxw, r = !0);
                r && t.nc.doScrollPos(e, n, t.nc.opt.snapbackspeed)
            };
            this.doMomentum = function (e) {
                var n = t.time(),
                    r = e ? n + e : t.lasttime;
                e = t.nc.getScrollLeft();
                var i = t.nc.getScrollTop(),
                    s = t.nc.page.maxh,
                    o = t.nc.page.maxw;
                t.speedx = 0 < o ? Math.min(60, t.speedx) : 0;
                t.speedy = 0 < s ? Math.min(60, t.speedy) : 0;
                r = r && 60 >= n - r;
                if (0 > i || i > s || 0 > e || e > o) r = !1;
                e = t.speedx && r ? t.speedx : !1;
                if (t.speedy && r && t.speedy || e) {
                    var u = Math.max(16, t.steptime);
                    50 < u && (e = u / 50, t.speedx *= e, t.speedy *= e, u = 50);
                    t.demulxy = 0;
                    t.lastscrollx = t.nc.getScrollLeft();
                    t.chkx = t.lastscrollx;
                    t.lastscrolly = t.nc.getScrollTop();
                    t.chky = t.lastscrolly;
                    var a = t.lastscrollx,
                        f = t.lastscrolly,
                        l = function () {
                            var e = 600 < t.time() - n ? .04 : .02;
                            t.speedx && (a = Math.floor(t.lastscrollx - t.speedx * (1 - t.demulxy)), t.lastscrollx = a, 0 > a || a > o) && (e = .1);
                            t.speedy && (f = Math.floor(t.lastscrolly - t.speedy * (1 - t.demulxy)), t.lastscrolly = f, 0 > f || f > s) && (e = .1);
                            t.demulxy = Math.min(1, t.demulxy + e);
                            t.nc.synched("domomentum2d", function () {
                                t.speedx && (t.nc.getScrollLeft() != t.chkx && t.stop(), t.chkx = a, t.nc.setScrollLeft(a));
                                t.speedy && (t.nc.getScrollTop() != t.chky && t.stop(), t.chky = f, t.nc.setScrollTop(f));
                                t.timer || (t.nc.hideCursor(), t.doSnapy(a, f))
                            });
                            1 > t.demulxy ? t.timer = setTimeout(l, u) : (t.stop(), t.nc.hideCursor(), t.doSnapy(a, f))
                        };
                    l()
                } else t.doSnapy(t.nc.getScrollLeft(), t.nc.getScrollTop())
            }
        }, b = e.fn.scrollTop;
    e.cssHooks.pageYOffset = {
        get: function (t, n, r) {
            return (n = e.data(t, "__nicescroll") || !1) && n.ishwscroll ? n.getScrollTop() : b.call(t)
        },
        set: function (t, n) {
            var r = e.data(t, "__nicescroll") || !1;
            r && r.ishwscroll ? r.setScrollTop(parseInt(n)) : b.call(t, n);
            return this
        }
    };
    e.fn.scrollTop = function (t) {
        if ("undefined" == typeof t) {
            var n = this[0] ? e.data(this[0], "__nicescroll") || !1 : !1;
            return n && n.ishwscroll ? n.getScrollTop() : b.call(this)
        }
        return this.each(function () {
            var n = e.data(this, "__nicescroll") || !1;
            n && n.ishwscroll ? n.setScrollTop(parseInt(t)) : b.call(e(this), t)
        })
    };
    var w = e.fn.scrollLeft;
    e.cssHooks.pageXOffset = {
        get: function (t, n, r) {
            return (n = e.data(t, "__nicescroll") || !1) && n.ishwscroll ? n.getScrollLeft() : w.call(t)
        },
        set: function (t, n) {
            var r = e.data(t, "__nicescroll") || !1;
            r && r.ishwscroll ? r.setScrollLeft(parseInt(n)) : w.call(t, n);
            return this
        }
    };
    e.fn.scrollLeft = function (t) {
        if ("undefined" == typeof t) {
            var n = this[0] ? e.data(this[0], "__nicescroll") || !1 : !1;
            return n && n.ishwscroll ? n.getScrollLeft() : w.call(this)
        }
        return this.each(function () {
            var n = e.data(this, "__nicescroll") || !1;
            n && n.ishwscroll ? n.setScrollLeft(parseInt(t)) : w.call(e(this), t)
        })
    };
    var E = function (t) {
        var n = this;
        this.length = 0;
        this.name = "nicescrollarray";
        this.each = function (e) {
            for (var t = 0, r = 0; t < n.length; t++) e.call(n[t], r++);
            return n
        };
        this.push = function (e) {
            n[n.length] = e;
            n.length++
        };
        this.eq = function (e) {
            return n[e]
        };
        if (t)
            for (a = 0; a < t.length; a++) {
                var r = e.data(t[a], "__nicescroll") || !1;
                r && (this[this.length] = r, this.length++)
            }
        return this
    };
    (function (e, t, n) {
        for (var r = 0; r < t.length; r++) n(e, t[r])
    })(E.prototype, "show hide toggle onResize resize remove stop doScrollPos".split(" "), function (e, t) {
        e[t] = function () {
            var e = arguments;
            return this.each(function () {
                this[t].apply(this, e)
            })
        }
    });
    e.fn.getNiceScroll = function (t) {
        return "undefined" == typeof t ? new E(this) : this[t] && e.data(this[t], "__nicescroll") || !1
    };
    e.extend(e.expr[":"], {
        nicescroll: function (t) {
            return e.data(t, "__nicescroll") ? !0 : !1
        }
    });
    e.fn.niceScroll = function (t, n) {
        "undefined" == typeof n && "object" == typeof t && !("jquery" in t) && (n = t, t = !1);
        var r = new E;
        "undefined" == typeof n && (n = {});
        t && (n.doc = e(t), n.win = e(this));
        var i = !("doc" in n);
        !i && !("win" in n) && (n.win = e(this));
        this.each(function () {
            var t = e(this).data("__nicescroll") || !1;
            t || (n.doc = i ? e(this) : n.doc, t = new g(n, e(this)), e(this).data("__nicescroll", t));
            r.push(t)
        });
        return 1 == r.length ? r[0] : r
    };
    window.NiceScroll = {
        getjQuery: function () {
            return e
        }
    };
    e.nicescroll || (e.nicescroll = new E, e.nicescroll.options = d)
})(jQuery);
(function (e) {
    e.fn.blurjs = function (t) {
        function n() {
            this.a = this.b = this.g = this.r = 0;
            this.next = null
        }
        var r = document.createElement("canvas"),
            i = !1,
            s = e(this).selector.replace(/[^a-zA-Z0-9]/g, "");
        if (r.getContext) {
            var t = e.extend({
                source: "body",
                radius: 5,
                overlay: "",
                offset: {
                    x: 0,
                    y: 0
                },
                optClass: "",
                cache: !1,
                cacheKeyPrefix: "blurjs-",
                draggable: !1,
                debug: !1
            }, t),
                o = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259],
                u = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
            return this.each(function () {
                var a = e(this),
                    f = e(t.source),
                    c = f.css("backgroundImage").replace(/"/g, "").replace(/url\(|\)$/ig, "");
                ctx = r.getContext("2d");
                tempImg = new Image;
                tempImg.onload = function () {
                    if (i) e = tempImg.src;
                    else {
                        r.style.display = "none";
                        r.width = tempImg.width;
                        r.height = tempImg.height;
                        ctx.drawImage(tempImg, 0, 0);
                        var e = r.width,
                            l = r.height,
                            h = t.radius;
                        if (!(isNaN(h) || 1 > h)) {
                            var h = h | 0,
                                p = r.getContext("2d"),
                                d;
                            try {
                                try {
                                    d = p.getImageData(0, 0, e, l)
                                } catch (v) {
                                    try {
                                        netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead"), d = p.getImageData(0, 0, e, l)
                                    } catch (m) {
                                        throw alert("Cannot access local image"), Error("unable to access local image data: " + m)
                                    }
                                }
                            } catch (g) {
                                throw alert("Cannot access image"), Error("unable to access image data: " + g)
                            }
                            var b = d.data,
                                w, E, x, T, N, C, k, L, M, _, D, j, F, q, U, z, W, X, V;
                            w = h + h + 1;
                            var $ = e - 1,
                                J = l - 1,
                                K = h + 1,
                                Q = K * (K + 1) / 2,
                                G = new n,
                                Y = G;
                            for (x = 1; x < w; x++)
                                if (Y = Y.next = new n, x == K) var Z = Y;
                            Y.next = G;
                            Y = x = null;
                            C = N = 0;
                            var et = o[h],
                                tt = u[h];
                            for (E = 0; E < l; E++) {
                                F = q = U = k = L = M = 0;
                                _ = K * (z = b[N]);
                                D = K * (W = b[N + 1]);
                                j = K * (X = b[N + 2]);
                                k += Q * z;
                                L += Q * W;
                                M += Q * X;
                                Y = G;
                                for (x = 0; x < K; x++) Y.r = z, Y.g = W, Y.b = X, Y = Y.next;
                                for (x = 1; x < K; x++) T = N + (($ < x ? $ : x) << 2), k += (Y.r = z = b[T]) * (V = K - x), L += (Y.g = W = b[T + 1]) * V, M += (Y.b = X = b[T + 2]) * V, F += z, q += W, U += X, Y = Y.next;
                                x = G;
                                Y = Z;
                                for (w = 0; w < e; w++) b[N] = k * et >> tt, b[N + 1] = L * et >> tt, b[N + 2] = M * et >> tt, k -= _, L -= D, M -= j, _ -= x.r, D -= x.g, j -= x.b, T = C + ((T = w + h + 1) < $ ? T : $) << 2, F += x.r = b[T], q += x.g = b[T + 1], U += x.b = b[T + 2], k += F, L += q, M += U, x = x.next, _ += z = Y.r, D += W = Y.g, j += X = Y.b, F -= z, q -= W, U -= X, Y = Y.next, N += 4;
                                C += e
                            }
                            for (w = 0; w < e; w++) {
                                q = U = F = L = M = k = 0;
                                N = w << 2;
                                _ = K * (z = b[N]);
                                D = K * (W = b[N + 1]);
                                j = K * (X = b[N + 2]);
                                k += Q * z;
                                L += Q * W;
                                M += Q * X;
                                Y = G;
                                for (x = 0; x < K; x++) Y.r = z, Y.g = W, Y.b = X, Y = Y.next;
                                T = e;
                                for (x = 1; x <= h; x++) N = T + w << 2, k += (Y.r = z = b[N]) * (V = K - x), L += (Y.g = W = b[N + 1]) * V, M += (Y.b = X = b[N + 2]) * V, F += z, q += W, U += X, Y = Y.next, x < J && (T += e);
                                N = w;
                                x = G;
                                Y = Z;
                                for (E = 0; E < l; E++) T = N << 2, b[T] = k * et >> tt, b[T + 1] = L * et >> tt, b[T + 2] = M * et >> tt, k -= _, L -= D, M -= j, _ -= x.r, D -= x.g, j -= x.b, T = w + ((T = E + K) < J ? T : J) * e << 2, k += F += x.r = b[T], L += q += x.g = b[T + 1], M += U += x.b = b[T + 2], x = x.next, _ += z = Y.r, D += W = Y.g, j += X = Y.b, F -= z, q -= W, U -= X, Y = Y.next, N += e
                            }
                            p.putImageData(d, 0, 0)
                        }
                        0 != t.overlay && (ctx.beginPath(), ctx.rect(0, 0, tempImg.width, tempImg.width), ctx.fillStyle = t.overlay, ctx.fill());
                        var e = r.toDataURL();
                        if (t.cache) try {
                            t.debug && console.log("Cache Set"), localStorage.setItem(t.cacheKeyPrefix + s + "-" + c + "-data-image", e)
                        } catch (nt) {
                            console.log(nt)
                        }
                    }
                    l = f.css("backgroundAttachment");
                    h = "fixed" == l ? "" : "-" + (a.offset().left - f.offset().left - t.offset.x) + "px -" + (a.offset().top - f.offset().top - t.offset.y) + "px";
                    a.css({
                        "background-image": 'url("' + e + '")',
                        "background-repeat": f.css("backgroundRepeat"),
                        "background-position": h,
                        "background-attachment": l
                    });
                    0 != t.optClass && a.addClass(t.optClass);
                    t.draggable && (a.css({
                        "background-attachment": "fixed",
                        "background-position": "0 0"
                    }), a.draggable())
                };
                Storage.prototype.cacheChecksum = function (e) {
                    var n = "",
                        r;
                    for (r in e) var i = e[r],
                    n = "[object Object]" == i.toString() ? n + (i.x.toString() + i.y.toString() + ",").replace(/[^a-zA-Z0-9]/g, "") : n + (i + ",").replace(/[^a-zA-Z0-9]/g, "");
                    this.getItem(t.cacheKeyPrefix + s + "-" + c + "-options-cache") != n && (this.removeItem(t.cacheKeyPrefix + s + "-" + c + "-options-cache"), this.setItem(t.cacheKeyPrefix + s + "-" + c + "-options-cache", n), t.debug && console.log("Settings Changed, Cache Emptied"))
                };
                var h = null;
                t.cache && (localStorage.cacheChecksum(t), h = localStorage.getItem(t.cacheKeyPrefix + s + "-" + c + "-data-image"));
                null != h ? (t.debug && console.log("Cache Used"), i = !0, tempImg.src = h) : (t.debug && console.log("Source Used"), tempImg.src = c)
            })
        }
    }
})(jQuery);
(function (e, t, n) {
    "use strict";
    t.infinitescroll = function (e, n, r) {
        this.element = t(r);
        this._create(e, n) || (this.failed = !0)
    };
    t.infinitescroll.defaults = {
        loading: {
            finished: n,
            finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
            img: "data:image/gif;base64,R0lGODlh3AATAPQeAPDy+MnQ6LW/4N3h8MzT6rjC4sTM5r/I5NHX7N7j8c7U6tvg8OLl8uXo9Ojr9b3G5MfP6Ovu9tPZ7PT1+vX2+tbb7vf4+8/W69jd7rC73vn5/O/x+K243ai02////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQECgD/ACwAAAAA3AATAAAF/6AnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEj0BAScpHLJbDqf0Kh0Sq1ar9isdioItAKGw+MAKYMFhbF63CW438f0mg1R2O8EuXj/aOPtaHx7fn96goR4hmuId4qDdX95c4+RBIGCB4yAjpmQhZN0YGYGXitdZBIVGAsLoq4BBKQDswm1CQRkcG6ytrYKubq8vbfAcMK9v7q7EMO1ycrHvsW6zcTKsczNz8HZw9vG3cjTsMIYqQkCLBwHCgsMDQ4RDAYIqfYSFxDxEfz88/X38Onr16+Bp4ADCco7eC8hQYMAEe57yNCew4IVBU7EGNDiRn8Z831cGLHhSIgdFf9chIeBg7oA7gjaWUWTVQAGE3LqBDCTlc9WOHfm7PkTqNCh54rePDqB6M+lR536hCpUqs2gVZM+xbrTqtGoWqdy1emValeXKzggYBBB5y1acFNZmEvXAoN2cGfJrTv3bl69Ffj2xZt3L1+/fw3XRVw4sGDGcR0fJhxZsF3KtBTThZxZ8mLMgC3fRatCbYMNFCzwLEqLgE4NsDWs/tvqdezZf13Hvk2A9Szdu2X3pg18N+68xXn7rh1c+PLksI/Dhe6cuO3ow3NfV92bdArTqC2Ebd3A8vjf5QWfH6Bg7Nz17c2fj69+fnq+8N2Lty+fuP78/eV2X13neIcCeBRwxorbZrA1ANoCDGrgoG8RTshahQ9iSKEEzUmYIYfNWViUhheCGJyIP5E4oom7WWjgCeBFAJNv1DVV01MAdJhhjdkplWNzO/5oXI846njjVEIqR2OS2B1pE5PVscajkxhMycqLJghQSwT40PgfAl4GqNSXYdZXJn5gSkmmmmJu1aZYb14V51do+pTOCmA40AqVCIhG5IJ9PvYnhIFOxmdqhpaI6GeHCtpooisuutmg+Eg62KOMKuqoTaXgicQWoIYq6qiklmoqFV0UoeqqrLbq6quwxirrrLTWauutJ4QAACH5BAUKABwALAcABADOAAsAAAX/IPd0D2dyRCoUp/k8gpHOKtseR9yiSmGbuBykler9XLAhkbDavXTL5k2oqFqNOxzUZPU5YYZd1XsD72rZpBjbeh52mSNnMSC8lwblKZGwi+0QfIJ8CncnCoCDgoVnBHmKfByGJimPkIwtiAeBkH6ZHJaKmCeVnKKTHIihg5KNq4uoqmEtcRUtEREMBggtEr4QDrjCuRC8h7/BwxENeicSF8DKy82pyNLMOxzWygzFmdvD2L3P0dze4+Xh1Arkyepi7dfFvvTtLQkZBC0T/FX3CRgCMOBHsJ+EHYQY7OinAGECgQsB+Lu3AOK+CewcWjwxQeJBihtNGHSoQOE+iQ3//4XkwBBhRZMcUS6YSXOAwIL8PGqEaSJCiYt9SNoCmnJPAgUVLChdaoFBURN8MAzl2PQphwQLfDFd6lTowglHve6rKpbjhK7/pG5VinZP1qkiz1rl4+tr2LRwWU64cFEihwEtZgbgR1UiHaMVvxpOSwBA37kzGz9e8G+B5MIEKLutOGEsAH2ATQwYfTmuX8aETWdGPZmiZcccNSzeTCA1Sw0bdiitC7LBWgu8jQr8HRzqgpK6gX88QbrB14z/kF+ELpwB8eVQj/JkqdylAudji/+ts3039vEEfK8Vz2dlvxZKG0CmbkKDBvllRd6fCzDvBLKBDSCeffhRJEFebFk1k/Mv9jVIoIJZSeBggwUaNeB+Qk34IE0cXlihcfRxkOAJFFhwGmKlmWDiakZhUJtnLBpnWWcnKaAZcxI0piFGGLBm1mc90kajSCveeBVWKeYEoU2wqeaQi0PetoE+rr14EpVC7oAbAUHqhYExbn2XHHsVqbcVew9tx8+XJKk5AZsqqdlddGpqAKdbAYBn1pcczmSTdWvdmZ17c1b3FZ99vnTdCRFM8OEcAhLwm1NdXnWcBBSMRWmfkWZqVlsmLIiAp/o1gGV2vpS4lalGYsUOqXrddcKCmK61aZ8SjEpUpVFVoCpTj4r661Km7kBHjrDyc1RAIQAAIfkEBQoAGwAsBwAEAM4ACwAABf/gtmUCd4goQQgFKj6PYKi0yrrbc8i4ohQt12EHcal+MNSQiCP8gigdz7iCioaCIvUmZLp8QBzW0EN2vSlCuDtFKaq4RyHzQLEKZNdiQDhRDVooCwkbfm59EAmKi4SGIm+AjIsKjhsqB4mSjT2IOIOUnICeCaB/mZKFNTSRmqVpmJqklSqskq6PfYYCDwYHDC4REQwGCBLGxxIQDsHMwhAIX8bKzcENgSLGF9PU1j3Sy9zX2NrgzQziChLk1BHWxcjf7N046tvN82715czn9Pryz6Ilc4ACj4EBOCZM8KEnAYYADBRKnACAYUMFv1wotIhCEcaJCisqwJFgAUSQGyX/kCSVUUTIdKMwJlyo0oXHlhskwrTJciZHEXsgaqS4s6PJiCAr1uzYU8kBBSgnWFqpoMJMUjGtDmUwkmfVmVypakWhEKvXsS4nhLW5wNjVroJIoc05wSzTr0PtiigpYe4EC2vj4iWrFu5euWIMRBhacaVJhYQBEFjA9jHjyQ0xEABwGceGAZYjY0YBOrRLCxUp29QM+bRkx5s7ZyYgVbTqwwti2ybJ+vLtDYpycyZbYOlptxdx0kV+V7lC5iJAyyRrwYKxAdiz82ng0/jnAdMJFz0cPi104Ec1Vj9/M6F173vKL/feXv156dw11tlqeMMnv4V5Ap53GmjQQH97nFfg+IFiucfgRX5Z8KAgbUlQ4IULIlghhhdOSB6AgX0IVn8eReghen3NRIBsRgnH4l4LuEidZBjwRpt6NM5WGwoW0KSjCwX6yJSMab2GwwAPDXfaBCtWpluRTQqC5JM5oUZAjUNS+VeOLWpJEQ7VYQANW0INJSZVDFSnZphjSikfmzE5N4EEbQI1QJmnWXCmHulRp2edwDXF43txukenJwvI9xyg9Q26Z3MzGUcBYFEChZh6DVTq34AU8Iflh51Sd+CnKFYQ6mmZkhqfBKfSxZWqA9DZanWjxmhrWwi0qtCrt/43K6WqVjjpmhIqgEGvculaGKklKstAACEAACH5BAUKABwALAcABADOAAsAAAX/ICdyQmaMYyAUqPgIBiHPxNpy79kqRXH8wAPsRmDdXpAWgWdEIYm2llCHqjVHU+jjJkwqBTecwItShMXkEfNWSh8e1NGAcLgpDGlRgk7EJ/6Ae3VKfoF/fDuFhohVeDeCfXkcCQqDVQcQhn+VNDOYmpSWaoqBlUSfmowjEA+iEAEGDRGztAwGCDcXEA60tXEiCrq8vREMEBLIyRLCxMWSHMzExnbRvQ2Sy7vN0zvVtNfU2tLY3rPgLdnDvca4VQS/Cpk3ABwSLQkYAQwT/P309vcI7OvXr94jBQMJ/nskkGA/BQBRLNDncAIAiDcG6LsxAWOLiQzmeURBKWSLCQbv/1F0eDGinJUKR47YY1IEgQASKk7Yc7ACRwZm7mHweRJoz59BJUogisKCUaFMR0x4SlJBVBFTk8pZivTR0K73rN5wqlXEAq5Fy3IYgHbEzQ0nLy4QSoCjXLoom96VOJEeCosK5n4kkFfqXjl94wa+l1gvAcGICbewAOAxY8l/Ky/QhAGz4cUkGxu2HNozhwMGBnCUqUdBg9UuW9eUynqSwLHIBujePef1ZGQZXcM+OFuEBeBhi3OYgLyqcuaxbT9vLkf4SeqyWxSQpKGB2gQpm1KdWbu72rPRzR9Ne2Nu9Kzr/1Jqj0yD/fvqP4aXOt5sW/5qsXXVcv1Nsp8IBUAmgswGF3llGgeU1YVXXKTN1FlhWFXW3gIE+DVChApysACHHo7Q4A35lLichh+ROBmLKAzgYmYEYDAhCgxKGOOMn4WR4kkDaoBBOxJtdNKQxFmg5JIWIBnQc07GaORfUY4AEkdV6jHlCEISSZ5yTXpp1pbGZbkWmcuZmQCaE6iJ0FhjMaDjTMsgZaNEHFRAQVp3bqXnZED1qYcECOz5V6BhSWCoVJQIKuKQi2KFKEkEFAqoAo7uYSmO3jk61wUUMKmknJ4SGimBmAa0qVQBhAAAIfkEBQoAGwAsBwAEAM4ACwAABf/gJm5FmRlEqhJC+bywgK5pO4rHI0D3pii22+Mg6/0Ej96weCMAk7cDkXf7lZTTnrMl7eaYoy10JN0ZFdco0XAuvKI6qkgVFJXYNwjkIBcNBgR8TQoGfRsJCRuCYYQQiI+ICosiCoGOkIiKfSl8mJkHZ4U9kZMbKaI3pKGXmJKrngmug4WwkhA0lrCBWgYFCCMQFwoQDRHGxwwGCBLMzRLEx8iGzMMO0cYNeCMKzBDW19lnF9DXDIY/48Xg093f0Q3s1dcR8OLe8+Y91OTv5wrj7o7B+7VNQqABIoRVCMBggsOHE36kSoCBIcSH3EbFangxogJYFi8CkJhqQciLJEf/LDDJEeJIBT0GsOwYUYJGBS0fjpQAMidGmyVP6sx4Y6VQhzs9VUwkwqaCCh0tmKoFtSMDmBOf9phg4SrVrROuasRQAaxXpVUhdsU6IsECZlvX3kwLUWzRt0BHOLTbNlbZG3vZinArge5Dvn7wbqtQkSYAAgtKmnSsYKVKo2AfW048uaPmG386i4Q8EQMBAIAnfB7xBxBqvapJ9zX9WgRS2YMpnvYMGdPK3aMjt/3dUcNI4blpj7iwkMFWDXDvSmgAlijrt9RTR78+PS6z1uAJZIe93Q8g5zcsWCi/4Y+C8bah5zUv3vv89uft30QP23punGCx5954oBBwnwYaNCDY/wYrsYeggnM9B2Fpf8GG2CEUVWhbWAtGouEGDy7Y4IEJVrbSiXghqGKIo7z1IVcXIkKWWR361QOLWWnIhwERpLaaCCee5iMBGJQmJGyPFTnbkfHVZGRtIGrg5HALEJAZbu39BuUEUmq1JJQIPtZilY5hGeSWsSk52G9XqsmgljdIcABytq13HyIM6RcUA+r1qZ4EBF3WHWB29tBgAzRhEGhig8KmqKFv8SeCeo+mgsF7YFXa1qWSbkDpom/mqR1PmHCqJ3fwNRVXjC7S6CZhFVCQ2lWvZiirhQq42SACt25IK2hv8TprriUV1usGgeka7LFcNmCldMLi6qZMgFLgpw16Cipb7bC1knXsBiEAACH5BAUKABsALAcABADOAAsAAAX/4FZsJPkUmUGsLCEUTywXglFuSg7fW1xAvNWLF6sFFcPb42C8EZCj24EJdCp2yoegWsolS0Uu6fmamg8n8YYcLU2bXSiRaXMGvqV6/KAeJAh8VgZqCX+BexCFioWAYgqNi4qAR4ORhRuHY408jAeUhAmYYiuVlpiflqGZa5CWkzc5fKmbbhIpsAoQDRG8vQwQCBLCwxK6vb5qwhfGxxENahvCEA7NzskSy7vNzzzK09W/PNHF1NvX2dXcN8K55cfh69Luveol3vO8zwi4Yhj+AQwmCBw4IYclDAAJDlQggVOChAoLKkgFkSCAHDwWLKhIEOONARsDKryogFPIiAUb/95gJNIiw4wnI778GFPhzBKFOAq8qLJEhQpiNArjMcHCmlTCUDIouTKBhApELSxFWiGiVKY4E2CAekPgUphDu0742nRrVLJZnyrFSqKQ2ohoSYAMW6IoDpNJ4bLdILTnAj8KUF7UeENjAKuDyxIgOuGiOI0EBBMgLNew5AUrDTMGsFixwBIaNCQuAXJB57qNJ2OWm2Aj4skwCQCIyNkhhtMkdsIuodE0AN4LJDRgfLPtn5YDLdBlraAByuUbBgxQwICxMOnYpVOPej074OFdlfc0TqC62OIbcppHjV4o+LrieWhfT8JC/I/T6W8oCl29vQ0XjLdBaA3s1RcPBO7lFvpX8BVoG4O5jTXRQRDuJ6FDTzEWF1/BCZhgbyAKE9qICYLloQYOFtahVRsWYlZ4KQJHlwHS/IYaZ6sZd9tmu5HQm2xi1UaTbzxYwJk/wBF5g5EEYOBZeEfGZmNdFyFZmZIR4jikbLThlh5kUUVJGmRT7sekkziRWUIACABk3T4qCsedgO4xhgGcY7q5pHJ4klBBTQRJ0CeHcoYHHUh6wgfdn9uJdSdMiebGJ0zUPTcoS286FCkrZxnYoYYKWLkBowhQoBeaOlZAgVhLidrXqg2GiqpQpZ4apwSwRtjqrB3muoF9BboaXKmshlqWqsWiGt2wphJkQbAU5hoCACH5BAUKABsALAcABADOAAsAAAX/oGFw2WZuT5oZROsSQnGaKjRvilI893MItlNOJ5v5gDcFrHhKIWcEYu/xFEqNv6B1N62aclysF7fsZYe5aOx2yL5aAUGSaT1oTYMBwQ5VGCAJgYIJCnx1gIOBhXdwiIl7d0p2iYGQUAQBjoOFSQR/lIQHnZ+Ue6OagqYzSqSJi5eTpTxGcjcSChANEbu8DBAIEsHBChe5vL13G7fFuscRDcnKuM3H0La3EA7Oz8kKEsXazr7Cw9/Gztar5uHHvte47MjktznZ2w0G1+D3BgirAqJmJMAQgMGEgwgn5Ei0gKDBhBMALGRYEOJBb5QcWlQo4cbAihZz3GgIMqFEBSM1/4ZEOWPAgpIIJXYU+PIhRG8ja1qU6VHlzZknJNQ6UanCjQkWCIGSUGEjAwVLjc44+DTqUQtPPS5gejUrTa5TJ3g9sWCr1BNUWZI161StiQUDmLYdGfesibQ3XMq1OPYthrwuA2yU2LBs2cBHIypYQPPlYAKFD5cVvNPtW8eVGbdcQADATsiNO4cFAPkvHpedPzc8kUcPgNGgZ5RNDZG05reoE9s2vSEP79MEGiQGy1qP8LA4ZcdtsJE48ONoLTBtTV0B9LsTnPceoIDBDQvS7W7vfjVY3q3eZ4A339J4eaAmKqU/sV58HvJh2RcnIBsDUw0ABqhBA5aV5V9XUFGiHfVeAiWwoFgJJrIXRH1tEMiDFV4oHoAEGlaWhgIGSGBO2nFomYY3mKjVglidaNYJGJDkWW2xxTfbjCbVaOGNqoX2GloR8ZeTaECS9pthRGJH2g0b3Agbk6hNANtteHD2GJUucfajCQBy5OOTQ25ZgUPvaVVQmbKh9510/qQpwXx3SQdfk8tZJOd5b6JJFplT3ZnmmX3qd5l1eg5q00HrtUkUn0AKaiGjClSAgKLYZcgWXwocGRcCFGCKwSB6ceqphwmYRUFYT/1WKlOdUpipmxW0mlCqHjYkAaeoZlqrqZ4qd+upQKaapn/AmgAegZ8KUtYtFAQQAgAh+QQFCgAbACwHAAQAzgALAAAF/+C2PUcmiCiZGUTrEkKBis8jQEquKwU5HyXIbEPgyX7BYa5wTNmEMwWsSXsqFbEh8DYs9mrgGjdK6GkPY5GOeU6ryz7UFopSQEzygOGhJBjoIgMDBAcBM0V/CYqLCQqFOwobiYyKjn2TlI6GKC2YjJZknouaZAcQlJUHl6eooJwKooobqoewrJSEmyKdt59NhRKFMxLEEA4RyMkMEAjDEhfGycqAG8TQx9IRDRDE3d3R2ctD1RLg0ttKEnbY5wZD3+zJ6M7X2RHi9Oby7u/r9g38UFjTh2xZJBEBMDAboogAgwkQI07IMUORwocSJwCgWDFBAIwZOaJIsOBjRogKJP8wTODw5ESVHVtm3AhzpEeQElOuNDlTZ0ycEUWKWFASqEahGwYUPbnxoAgEdlYSqDBkgoUNClAlIHbSAoOsqCRQnQHxq1axVb06FWFxLIqyaze0Tft1JVqyE+pWXMD1pF6bYl3+HTqAWNW8cRUFzmih0ZAAB2oGKukSAAGGRHWJgLiR6AylBLpuHKKUMlMCngMpDSAa9QIUggZVVvDaJobLeC3XZpvgNgCmtPcuwP3WgmXSq4do0DC6o2/guzcseECtUoO0hmcsGKDgOt7ssBd07wqesAIGZC1YIBa7PQHvb1+SFo+++HrJSQfB33xfav3i5eX3Hnb4CTJgegEq8tH/YQEOcIJzbm2G2EoYRLgBXFpVmFYDcREV4HIcnmUhiGBRouEMJGJGzHIspqgdXxK0yCKHRNXoIX4uorCdTyjkyNtdPWrA4Up82EbAbzMRxxZRR54WXVLDIRmRcag5d2R6ugl3ZXzNhTecchpMhIGVAKAYpgJjjsSklBEd99maZoo535ZvdamjBEpusJyctg3h4X8XqodBMx0tiNeg/oGJaKGABpogS40KSqiaEgBqlQWLUtqoVQnytekEjzo0hHqhRorppOZt2p923M2AAV+oBtpAnnPNoB6HaU6mAAIU+IXmi3j2mtFXuUoHKwXpzVrsjcgGOauKEjQrwq157hitGq2NoWmjh7z6Wmxb0m5w66+2VRAuXN/yFUAIACH5BAUKABsALAcABADOAAsAAAX/4CZuRiaM45MZqBgIRbs9AqTcuFLE7VHLOh7KB5ERdjJaEaU4ClO/lgKWjKKcMiJQ8KgumcieVdQMD8cbBeuAkkC6LYLhOxoQ2PF5Ys9PKPBMen17f0CCg4VSh32JV4t8jSNqEIOEgJKPlkYBlJWRInKdiJdkmQlvKAsLBxdABA4RsbIMBggtEhcQsLKxDBC2TAS6vLENdJLDxMZAubu8vjIbzcQRtMzJz79S08oQEt/guNiyy7fcvMbh4OezdAvGrakLAQwyABsELQkY9BP+//ckyPDD4J9BfAMh1GsBoImMeQUN+lMgUJ9CiRMa5msxoB9Gh/o8GmxYMZXIgxtR/yQ46S/gQAURR0pDwYDfywoyLPip5AdnCwsMFPBU4BPFhKBDi444quCmDKZOfwZ9KEGpCKgcN1jdALSpPqIYsabS+nSqvqplvYqQYAeDPgwKwjaMtiDl0oaqUAyo+3TuWwUAMPpVCfee0cEjVBGQq2ABx7oTWmQk4FglZMGN9fGVDMCuiH2AOVOu/PmyxM630gwM0CCn6q8LjVJ8GXvpa5Uwn95OTC/nNxkda1/dLSK475IjCD6dHbK1ZOa4hXP9DXs5chJ00UpVm5xo2qRpoxptwF2E4/IbJpB/SDz9+q9b1aNfQH08+p4a8uvX8B53fLP+ycAfemjsRUBgp1H20K+BghHgVgt1GXZXZpZ5lt4ECjxYR4ScUWiShEtZqBiIInRGWnERNnjiBglw+JyGnxUmGowsyiiZg189lNtPGACjV2+S9UjbU0JWF6SPvEk3QZEqsZYTk3UAaRSUnznJI5LmESCdBVSyaOWUWLK4I5gDUYVeV1T9l+FZClCAUVA09uSmRHBCKAECFEhW51ht6rnmWBXkaR+NjuHpJ40D3DmnQXt2F+ihZxlqVKOfQRACACH5BAUKABwALAcABADOAAsAAAX/ICdyUCkUo/g8mUG8MCGkKgspeC6j6XEIEBpBUeCNfECaglBcOVfJFK7YQwZHQ6JRZBUqTrSuVEuD3nI45pYjFuWKvjjSkCoRaBUMWxkwBGgJCXspQ36Bh4EEB0oKhoiBgyNLjo8Ki4QElIiWfJqHnISNEI+Ql5J9o6SgkqKkgqYihamPkW6oNBgSfiMMDQkGCBLCwxIQDhHIyQwQCGMKxsnKVyPCF9DREQ3MxMPX0cu4wt7J2uHWx9jlKd3o39MiuefYEcvNkuLt5O8c1ePI2tyELXGQwoGDAQf+iEC2xByDCRAjTlAgIUWCBRgCPJQ4AQBFXAs0coT40WLIjRxL/47AcHLkxIomRXL0CHPERZkpa4q4iVKiyp0tR/7kwHMkTUBBJR5dOCEBAVcKKtCAyOHpowXCpk7goABqBZdcvWploACpBKkpIJI1q5OD2rIWE0R1uTZu1LFwbWL9OlKuWb4c6+o9i3dEgw0RCGDUG9KlRw56gDY2qmCByZBaASi+TACA0TucAaTteCcy0ZuOK3N2vJlx58+LRQyY3Xm0ZsgjZg+oPQLi7dUcNXi0LOJw1pgNtB7XG6CBy+U75SYfPTSQAgZTNUDnQHt67wnbZyvwLgKiMN3oCZB3C76tdewpLFgIP2C88rbi4Y+QT3+8S5USMICZXWj1pkEDeUU3lOYGB3alSoEiMIjgX4WlgNF2EibIwQIXauWXSRg2SAOHIU5IIIMoZkhhWiJaiFVbKo6AQEgQXrTAazO1JhkBrBG3Y2Y6EsUhaGn95hprSN0oWpFE7rhkeaQBchGOEWnwEmc0uKWZj0LeuNV3W4Y2lZHFlQCSRjTIl8uZ+kG5HU/3sRlnTG2ytyadytnD3HrmuRcSn+0h1dycexIK1KCjYaCnjCCVqOFFJTZ5GkUUjESWaUIKU2lgCmAKKQIUjHapXRKE+t2og1VgankNYnohqKJ2CmKplso6GKz7WYCgqxeuyoF8u9IQAgA7",
            msg: null,
            msgText: "<em>Loading the next set of posts...</em>",
            selector: null,
            speed: "fast",
            start: n
        },
        state: {
            isDuringAjax: !1,
            isInvalidPage: !1,
            isDestroyed: !1,
            isDone: !1,
            isPaused: !1,
            isBeyondMaxPage: !1,
            currPage: 1
        },
        debug: !1,
        behavior: n,
        binder: t(e),
        nextSelector: "div.navigation a:first",
        navSelector: "div.navigation",
        contentSelector: null,
        extraScrollPx: 150,
        itemSelector: "div.post",
        animate: !1,
        pathParse: n,
        dataType: "html",
        appendCallback: !0,
        bufferPx: 40,
        errorCallback: function () {},
        infid: 0,
        pixelsFromNavToBottom: n,
        path: n,
        prefill: !1,
        maxPage: n
    };
    t.infinitescroll.prototype = {
        _binding: function (e) {
            var t = this,
                r = t.options;
            r.v = "2.0b2.120520";
            if ( !! r.behavior && this["_binding_" + r.behavior] !== n) {
                this["_binding_" + r.behavior].call(this);
                return
            }
            if (e !== "bind" && e !== "unbind") {
                this._debug("Binding value  " + e + " not valid");
                return !1
            }
            e === "unbind" ? this.options.binder.unbind("smartscroll.infscr." + t.options.infid) : this.options.binder[e]("smartscroll.infscr." + t.options.infid, function () {
                t.scroll()
            });
            this._debug("Binding", e)
        },
        _create: function (r, i) {
            var s = t.extend(!0, {}, t.infinitescroll.defaults, r);
            this.options = s;
            var o = t(e),
                u = this;
            if (!u._validate(r)) return !1;
            var a = t(s.nextSelector).attr("href");
            if (!a) {
                this._debug("Navigation selector not found");
                return !1
            }
            s.path = s.path || this._determinepath(a);
            s.contentSelector = s.contentSelector || this.element;
            s.loading.selector = s.loading.selector || s.contentSelector;
            s.loading.msg = s.loading.msg || t('<div id="infscr-loading"><img alt="Loading..." src="' + s.loading.img + '" /><div>' + s.loading.msgText + "</div></div>");
            (new Image).src = s.loading.img;
            if (s.pixelsFromNavToBottom === n) {
                s.pixelsFromNavToBottom = t(document).height() - t(s.navSelector).offset().top;
                this._debug("pixelsFromNavToBottom: " + s.pixelsFromNavToBottom)
            }
            var f = this;
            s.loading.start = s.loading.start || function () {
                t(s.navSelector).hide();
                s.loading.msg.appendTo(s.loading.selector).show(s.loading.speed, t.proxy(function () {
                    this.beginAjax(s)
                }, f))
            };
            s.loading.finished = s.loading.finished || function () {
                s.state.isBeyondMaxPage || s.loading.msg.fadeOut(s.loading.speed)
            };
            s.callback = function (e, r, u) { !! s.behavior && e["_callback_" + s.behavior] !== n && e["_callback_" + s.behavior].call(t(s.contentSelector)[0], r, u);
                i && i.call(t(s.contentSelector)[0], r, s, u);
                s.prefill && o.bind("resize.infinite-scroll", e._prefill)
            };
            r.debug && Function.prototype.bind && (typeof console == "object" || typeof console == "function") && typeof console.log == "object" && ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"].forEach(function (e) {
                console[e] = this.call(console[e], console)
            }, Function.prototype.bind);
            this._setup();
            s.prefill && this._prefill();
            return !0
        },
        _prefill: function () {
            function n() {
                return r.options.contentSelector.height() <= i.height()
            }
            var r = this,
                i = t(e);
            this._prefill = function () {
                n() && r.scroll();
                i.bind("resize.infinite-scroll", function () {
                    if (n()) {
                        i.unbind("resize.infinite-scroll");
                        r.scroll()
                    }
                })
            };

            this._prefill()
        },
        _debug: function () {
            if (!0 !== this.options.debug) return;
            typeof console != "undefined" && typeof console.log == "function" ? Array.prototype.slice.call(arguments).length === 1 && typeof Array.prototype.slice.call(arguments)[0] == "string" ? console.log(Array.prototype.slice.call(arguments).toString()) : console.log(Array.prototype.slice.call(arguments)) : !Function.prototype.bind && typeof console != "undefined" && typeof console.log == "object" && Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments))
        },
        _determinepath: function (e) {
            var t = this.options;
            if (!t.behavior || this["_determinepath_" + t.behavior] === n) {
                if (!t.pathParse) {
                    if (e.match(/^(.*?)\b2\b(.*?$)/)) e = e.match(/^(.*?)\b2\b(.*?$)/).slice(1);
                    else if (e.match(/^(.*?)2(.*?$)/)) {
                        if (e.match(/^(.*?page=)2(\/.*|$)/)) {
                            e = e.match(/^(.*?page=)2(\/.*|$)/).slice(1);
                            return e
                        }
                        e = e.match(/^(.*?)2(.*?$)/).slice(1)
                    } else {
                        if (e.match(/^(.*?page=)1(\/.*|$)/)) {
                            e = e.match(/^(.*?page=)1(\/.*|$)/).slice(1);
                            return e
                        }
                        this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.");
                        t.state.isInvalidPage = !0
                    }
                    this._debug("determinePath", e);
                    return e
                }
                this._debug("pathParse manual");
                return t.pathParse(e, this.options.state.currPage + 1)
            }
            return this["_determinepath_" + t.behavior].call(this, e)
        },
        _error: function (e) {
            var t = this.options;
            if ( !! t.behavior && this["_error_" + t.behavior] !== n) {
                this["_error_" + t.behavior].call(this, e);
                return
            }
            e !== "destroy" && e !== "end" && (e = "unknown");
            this._debug("Error", e);
            (e === "end" || t.state.isBeyondMaxPage) && this._showdonemsg();
            t.state.isDone = !0;
            t.state.currPage = 1;
            t.state.isPaused = !1;
            t.state.isBeyondMaxPage = !1;
            this._binding("unbind")
        },
        _loadcallback: function (r, i, s) {
            var o = this.options,
                u = this.options.callback,
                a = o.state.isDone ? "done" : o.appendCallback ? "append" : "no-append",
                f;
            if ( !! o.behavior && this["_loadcallback_" + o.behavior] !== n) {
                this["_loadcallback_" + o.behavior].call(this, r, i);
                return
            }
            switch (a) {
            case "done":
                this._showdonemsg();
                return !1;
            case "no-append":
                if (o.dataType === "html") {
                    i = "<div>" + i + "</div>";
                    i = t(i).find(o.itemSelector)
                }
                break;
            case "append":
                var l = r.children();
                if (l.length === 0) return this._error("end");
                f = document.createDocumentFragment();
                while (r[0].firstChild) f.appendChild(r[0].firstChild);
                this._debug("contentSelector", t(o.contentSelector)[0]);
                t(o.contentSelector)[0].appendChild(f);
                i = l.get()
            }
            o.loading.finished.call(t(o.contentSelector)[0], o);
            if (o.animate) {
                var c = t(e).scrollTop() + t(o.loading.msg).height() + o.extraScrollPx + "px";
                t("html,body").animate({
                    scrollTop: c
                }, 800, function () {
                    o.state.isDuringAjax = !1
                })
            }
            o.animate || (o.state.isDuringAjax = !1);
            u(this, i, s);
            o.prefill && this._prefill()
        },
        _nearbottom: function () {
            var r = this.options,
                i = 0 + t(document).height() - r.binder.scrollTop() - t(e).height();
            if (!r.behavior || this["_nearbottom_" + r.behavior] === n) {
                this._debug("math:", i, r.pixelsFromNavToBottom);
                return i - r.bufferPx < r.pixelsFromNavToBottom
            }
            return this["_nearbottom_" + r.behavior].call(this)
        },
        _pausing: function (e) {
            var t = this.options;
            if (!t.behavior || this["_pausing_" + t.behavior] === n) {
                e !== "pause" && e !== "resume" && e !== null && this._debug("Invalid argument. Toggling pause value instead");
                e = !e || e !== "pause" && e !== "resume" ? "toggle" : e;
                switch (e) {
                case "pause":
                    t.state.isPaused = !0;
                    break;
                case "resume":
                    t.state.isPaused = !1;
                    break;
                case "toggle":
                    t.state.isPaused = !t.state.isPaused
                }
                this._debug("Paused", t.state.isPaused);
                return !1
            }
            this["_pausing_" + t.behavior].call(this, e);
            return
        },
        _setup: function () {
            var e = this.options;
            if (!e.behavior || this["_setup_" + e.behavior] === n) {
                this._binding("bind");
                return !1
            }
            this["_setup_" + e.behavior].call(this);
            return
        },
        _showdonemsg: function () {
            var e = this.options;
            if ( !! e.behavior && this["_showdonemsg_" + e.behavior] !== n) {
                this["_showdonemsg_" + e.behavior].call(this);
                return
            }
            e.loading.msg.find("img").hide().parent().find("div").html(e.loading.finishedMsg).animate({
                opacity: 1
            }, 2e3, function () {
                t(this).parent().fadeOut(e.loading.speed)
            });
            e.errorCallback.call(t(e.contentSelector)[0], "done")
        },
        _validate: function (e) {
            for (var n in e)
                if (n.indexOf && n.indexOf("Selector") > -1 && t(e[n]).length === 0) {
                    this._debug("Your " + n + " found no elements.");
                    return !1
                }
            return !0
        },
        bind: function () {
            this._binding("bind")
        },
        destroy: function () {
            this.options.state.isDestroyed = !0;
            this.options.loading.finished();
            return this._error("destroy")
        },
        pause: function () {
            this._pausing("pause")
        },
        resume: function () {
            this._pausing("resume")
        },
        beginAjax: function (e) {
            var r = this,
                i = e.path,
                s, o, u, a;
            e.state.currPage++;
            if (e.maxPage != n && e.state.currPage > e.maxPage) {
                e.state.isBeyondMaxPage = !0;
                this.destroy();
                return
            }
            s = t(e.contentSelector).is("table, tbody") ? t("<tbody/>") : t("<div/>");
            o = typeof i == "function" ? i(e.state.currPage) : i.join(e.state.currPage);
            r._debug("heading into ajax", o);
            u = e.dataType === "html" || e.dataType === "json" ? e.dataType : "html+callback";
            e.appendCallback && e.dataType === "html" && (u += "+callback");
            switch (u) {
            case "html+callback":
                r._debug("Using HTML via .load() method");
                s.load(o + " " + e.itemSelector, n, function (e) {
                    r._loadcallback(s, e, o)
                });
                break;
            case "html":
                r._debug("Using " + u.toUpperCase() + " via $.ajax() method");
                t.ajax({
                    url: o,
                    dataType: e.dataType,
                    complete: function (e, t) {
                        a = typeof e.isResolved != "undefined" ? e.isResolved() : t === "success" || t === "notmodified";
                        a ? r._loadcallback(s, e.responseText, o) : r._error("end")
                    }
                });
                break;
            case "json":
                r._debug("Using " + u.toUpperCase() + " via $.ajax() method");
                t.ajax({
                    dataType: "json",
                    type: "GET",
                    url: o,
                    success: function (t, i, u) {
                        a = typeof u.isResolved != "undefined" ? u.isResolved() : i === "success" || i === "notmodified";
                        if (e.appendCallback)
                            if (e.template !== n) {
                                var l = e.template(t);
                                s.append(l);
                                a ? r._loadcallback(s, l) : r._error("end")
                            } else {
                                r._debug("template must be defined.");
                                r._error("end")
                            } else a ? r._loadcallback(s, t, o) : r._error("end")
                    },
                    error: function () {
                        r._debug("JSON ajax request failed.");
                        r._error("end")
                    }
                })
            }
        },
        retrieve: function (e) {
            e = e || null;
            var r = this,
                i = r.options;
            if ( !! i.behavior && this["retrieve_" + i.behavior] !== n) {
                this["retrieve_" + i.behavior].call(this, e);
                return
            }
            if (i.state.isDestroyed) {
                this._debug("Instance is destroyed");
                return !1
            }
            i.state.isDuringAjax = !0;
            i.loading.start.call(t(i.contentSelector)[0], i)
        },
        scroll: function () {
            var e = this.options,
                t = e.state;
            if ( !! e.behavior && this["scroll_" + e.behavior] !== n) {
                this["scroll_" + e.behavior].call(this);
                return
            }
            if (t.isDuringAjax || t.isInvalidPage || t.isDone || t.isDestroyed || t.isPaused) return;
            if (!this._nearbottom()) return;
            this.retrieve()
        },
        toggle: function () {
            this._pausing()
        },
        unbind: function () {
            this._binding("unbind")
        },
        update: function (e) {
            t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
        }
    };
    t.fn.infinitescroll = function (e, n) {
        var r = typeof e;
        switch (r) {
        case "string":
            var i = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
                var n = t.data(this, "infinitescroll");
                if (!n) return !1;
                if (!t.isFunction(n[e]) || e.charAt(0) === "_") return !1;
                n[e].apply(n, i)
            });
            break;
        case "object":
            this.each(function () {
                var r = t.data(this, "infinitescroll");
                if (r) r.update(e);
                else {
                    r = new t.infinitescroll(e, n, this);
                    r.failed || t.data(this, "infinitescroll", r)
                }
            })
        }
        return this
    };
    var r = t.event,
        i;
    r.special.smartscroll = {
        setup: function () {
            t(this).bind("scroll", r.special.smartscroll.handler)
        },
        teardown: function () {
            t(this).unbind("scroll", r.special.smartscroll.handler)
        },
        handler: function (e, n) {
            var r = this,
                s = arguments;
            e.type = "smartscroll";
            i && clearTimeout(i);
            i = setTimeout(function () {
                t(r).trigger("smartscroll", s)
            }, n === "execAsap" ? 0 : 100)
        }
    };
    t.fn.smartscroll = function (e) {
        return e ? this.bind("smartscroll", e) : this.trigger("smartscroll", ["execAsap"])
    }
})(window, jQuery);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, t, n, r, i) {
        return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
    },
    easeInQuad: function (e, t, n, r, i) {
        return r * (t /= i) * t + n
    },
    easeOutQuad: function (e, t, n, r, i) {
        return -r * (t /= i) * (t - 2) + n
    },
    easeInOutQuad: function (e, t, n, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function (e, t, n, r, i) {
        return r * (t /= i) * t * t + n
    },
    easeOutCubic: function (e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t + 1) + n
    },
    easeInOutCubic: function (e, t, n, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t * t + n : r / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function (e, t, n, r, i) {
        return r * (t /= i) * t * t * t + n
    },
    easeOutQuart: function (e, t, n, r, i) {
        return -r * ((t = t / i - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function (e, t, n, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t * t * t + n : -r / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function (e, t, n, r, i) {
        return r * (t /= i) * t * t * t * t + n
    },
    easeOutQuint: function (e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function (e, t, n, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function (e, t, n, r, i) {
        return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
    },
    easeOutSine: function (e, t, n, r, i) {
        return r * Math.sin(t / i * (Math.PI / 2)) + n
    },
    easeInOutSine: function (e, t, n, r, i) {
        return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
    },
    easeInExpo: function (e, t, n, r, i) {
        return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
    },
    easeOutExpo: function (e, t, n, r, i) {
        return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
    },
    easeInOutExpo: function (e, t, n, r, i) {
        return t == 0 ? n : t == i ? n + r : (t /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
    },
    easeInCirc: function (e, t, n, r, i) {
        return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
    },
    easeOutCirc: function (e, t, n, r, i) {
        return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
    },
    easeInOutCirc: function (e, t, n, r, i) {
        return (t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function (e, t, n, r, i) {
        var s = 1.70158,
            o = 0,
            u = r;
        if (t == 0) return n;
        if ((t /= i) == 1) return n + r;
        o || (o = i * .3);
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n
    },
    easeOutElastic: function (e, t, n, r, i) {
        var s = 1.70158,
            o = 0,
            u = r;
        if (t == 0) return n;
        if ((t /= i) == 1) return n + r;
        o || (o = i * .3);
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n
    },
    easeInOutElastic: function (e, t, n, r, i) {
        var s = 1.70158,
            o = 0,
            u = r;
        if (t == 0) return n;
        if ((t /= i / 2) == 2) return n + r;
        o || (o = i * .3 * 1.5);
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return t < 1 ? -0.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n : u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n
    },
    easeInBack: function (e, t, n, r, i, s) {
        s == undefined && (s = 1.70158);
        return r * (t /= i) * t * ((s + 1) * t - s) + n
    },
    easeOutBack: function (e, t, n, r, i, s) {
        s == undefined && (s = 1.70158);
        return r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n
    },
    easeInOutBack: function (e, t, n, r, i, s) {
        s == undefined && (s = 1.70158);
        return (t /= i / 2) < 1 ? r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n : r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
    },
    easeInBounce: function (e, t, n, r, i) {
        return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
    },
    easeOutBounce: function (e, t, n, r, i) {
        return (t /= i) < 1 / 2.75 ? r * 7.5625 * t * t + n : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    },
    easeInOutBounce: function (e, t, n, r, i) {
        return t < i / 2 ? jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n : jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n
    }
});