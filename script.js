$(document).ready(function() {
    // VARIABLES
    // colors
    var black = '#000';
    var white = '#fff';
    var gray = '#aaa';
    var red = '#D81200';
    var blue = '#022B3A';
    // selectors
    //     story
    var content = $('.container');
    var lines = $('#top-line,#bot-line');
    var story = $('#story-scroll');
    var scrollButton = $('#scroll-button');
    var scrollButton2 = $('#scroll-button-2');
    var story1 = $('#container1');
    var story2 = $('#container2');
    //      menu
    var menuScroll = $('#menu-section-container');
    var appB = $('#app');
    var app = $('#menu-sect-0');
    var soupB = $('#soup');
    var soup = $('#menu-sect-1');
    var sandB = $('#sand');
    var sand = $('#menu-sect-2');
    var pastaB = $('#pasta');
    var pasta = $('#menu-sect-3');
    var pizzaB = $('#pizza');
    var pizza = $('#menu-sect-4');
    //      mobile menu
    var mobileNavB = $('#mobile-nav-button');
    var mobileNav = $('#mobile-nav');

    // event vars
    var storyView = 0;


    // functions
    //      story
    function storyScroll() {
        if(storyView == 0) {
            lines.animate({
                backgroundColor: red
            }).delay(800).animate({
                backgroundColor: black
            });
            story.animate({
                scrollTop: story2.offset().top
            }, 850);
            storyView = 1;
        }
    }
    function storyScrollB() {
        lines.animate({
            backgroundColor: red
        }).delay(800).animate({
            backgroundColor: black
        });
        story.animate({
            scrollTop: story2.offset().top
        }, 850);
        storyView = 1;
    }
    function storyScrollC() {
        lines.animate({
            backgroundColor: red
        }).delay(800).animate({
            backgroundColor: black
        });
        story.animate({
            scrollTop: story1.offset().top
        }, 850);
    }
    //      menu
    function showApp() {
        var desiredHeight = $(window).height() / 10 + 105;
        menuScroll.animate({
            scrollTop: app.offset().top - desiredHeight
        }, 0);
    }
    function showSoup() {
        var desiredHeight = $(window).height() / 10 + 105;
        menuScroll.animate({
            scrollTop: app.offset().top - desiredHeight
        }, 0).animate({
            scrollTop: soup.offset().top - desiredHeight
        }, 0);
    }
    function showSand() {
        var desiredHeight = $(window).height() / 10 + 105;
        menuScroll.animate({
            scrollTop: app.offset().top - desiredHeight
        }, 0).animate({
            scrollTop: sand.offset().top - desiredHeight
        }, 0);
    }
    function showPasta() {
        var desiredHeight = $(window).height() / 10 + 105;
        menuScroll.animate({
            scrollTop: app.offset().top - desiredHeight
        }, 0).animate({
            scrollTop: pasta.offset().top - desiredHeight
        }, 0);
    }
    function showPizza() {
        var desiredHeight = $(window).height() / 10 + 105;
        menuScroll.animate({
            scrollTop: app.offset().top - desiredHeight
        }, 0).animate({
            scrollTop: pizza.offset().top - desiredHeight
        }, 0);
    }
    //      mobile menu
    function showMobileNav() {
        mobileNav.fadeIn(850);
    }
    function hideMobileNav() {
        mobileNav.fadeOut(425);
    }

    // events
    content.fadeIn(800);
    //      story
    story.scroll(function() {
        storyScroll();
    });
    scrollButton.click(function() {
        storyScrollB();
    });
    scrollButton2.click(function() {
        storyScrollC();
    });
    //      menu
    appB.click(function() {
        showApp();
    });
    soupB.click(function() {
        showSoup();
    });
    sandB.click(function() {
        showSand();
    });
    pastaB.click(function() {
        showPasta();
    });
    pizzaB.click(function() {
        showPizza();
    });
    //      mobile menu
    mobileNavB.click(function() {
        showMobileNav();
    });
    mobileNav.click(function() {
        hideMobileNav();
    });

});