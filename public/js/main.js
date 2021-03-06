$(document).ready(function(){
    // progress bar
    $(document).on("scroll", function(){
        var bar = (($(document).scrollTop()) / ($(document).height() - $(window).height())) / ($(window).width() / ($(window).width()))
        $("div.bar").css("width",  100 * bar + "%")
    });

});

$.scrollify({
    section: ".panel",
    scrollSpeed: 1000,
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