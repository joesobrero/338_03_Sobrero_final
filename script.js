$(document).ready(function() {
    // VARIABLES
    // colors
    var black = '#000';
    var white = '#fff';
    var gray = '#aaa';
    var red = '#D81200';
    var blue = '#022B3A';
    // selectors
    var content = $('.container');
    var lines = $('#top-line,#bot-line');
    var story = $('#story-scroll');
    var story1 = $('#container1');
    var story2 = $('#container2');
    var scrollTrig = $('#scroll-trig');
    var storyTop = $('#topofpage');
    // event vars
    var storyView = 1;


    // functions
    function storyScroll() {
        lines.animate({
            backgroundColor: red
        }).delay(800).animate({
            backgroundColor: black
        });
        /*
        if(storyView == 1) {
            document.getElementById('container2').scrollIntoView(1000);
            storyView = 2;
        }
        else {
            document.getElementById('container1').scrollIntoView(1000);
            storyView = 1;
        }
        */
        if(storyView == 1) {
            story.animate({
                scrollTop: story2.offset().top
            }, 850);
            storyView = 2
        }
        else {
            story.animate({
                scrollTop: story1.offset().top
            }, 850);
            storyView = 1;
        }
    }

    // events
    content.fadeIn(800);
    scrollTrig.scroll(function() {
        storyScroll();
    });
});