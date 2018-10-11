$(document).ready(function(){
    // progress bar
    $(document).on("scroll", function(){
        var barTotal = ($(window).height() * 2) + ($(window).width() * 2)
        var scrollTotal = $(document).height() - $(window).height()
        var pixels = $(document).scrollTop()
        var pc = pixels / scrollTotal
        var barAcross = $(window).width() / barTotal
        var barDown = $(window).height() / barTotal
        var bar1 = pc / barAcross
        var bar2 = (pc - barAcross) / barDown
        var bar3 = (pc - barAcross - barDown) / barAcross
        var bar4 = (pc - barAcross - barDown - barAcross) / barDown
        $("div.bar-1").css("width",  100 * bar1 + "%")
        $("div.bar-2").css("height", 100 * bar2 + "%")
        $("div.bar-3").css("width",  100 * bar3 + "%")
        $("div.bar-4").css("height", 100 * bar4 + "%")
    });
    
    // Open menu
    $('#navMenuIcon').click(function(){
        $('#navMenuIcon').toggleClass('is-active');
        if($('#navMenuIcon').hasClass('is-active')){
            $('.overlay').width('100%')
        } else {
            $('.overlay').width('0%')
        }
    });

    // Jump to section from menu
    $("#bar-home, #bar-about, #bar-projects, #bar-contact").click(function() {
        $('#navMenuIcon').removeClass('is-active');
        $('.overlay').width('0%');
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 2000);
        return false
    });


    // Scroll between sections
    var lastScrollTop = 0;

    $(window).scroll(function(){
        var currPageOffset = $(document).scrollTop();

        if(currPageOffset > lastScrollTop){
            // TO DO add scrolling thing
            console.log('down');
        } else {
            // TO DO add scrolling thing
            console.log('up');
        }

        lastScrollTop = currPageOffset <= 0 ? 0 : currPageOffset;
    });
});