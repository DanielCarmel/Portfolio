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
            $('#navbarMenu').show();
            $('#navMenuIcon').css('z-index', 3);
        } else {
            $('#navbarMenu').hide();
        }
    });

    // Jump to section
    $("#bar-home, #bar-about, #bar-projects, #bar-contact").click(function() {
        $('#navMenuIcon').removeClass('is-active');
        $('#navbarMenu').hide();
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 2000);
        return false
    });

});