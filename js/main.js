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

});

$.scrollify({
    section: ".panel",
    scrollSpeed: 1500,
    scrollbars: false,
    before: function(i, panels){
        var ref = panels[i].attr("data-section-name");
        $(".pagination .active").removeClass("active");
        $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
    },
    afterRender: function(){
        var pagination = "<ul class=\"pagination\">";
        var activeClass = "";
        $(".panel").each(function(i) {
            activeClass = "";
            if(i===0) {
              activeClass = "active";
            }
            pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
          });
    
          pagination += "</ul>";
          $(".home").append(pagination);
          $(".pagination a").on("click",$.scrollify.move);
    }
});