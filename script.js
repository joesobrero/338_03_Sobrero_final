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
    // event vars
    var storyView = 0;


    // functions
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

    // events
    content.fadeIn(800);
    story.scroll(function() {
        storyScroll();
    });
});