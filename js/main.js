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
        $('#sections').toggleClass('blurBg');
        if($('#navMenuIcon').hasClass('is-active')){
            $('.overlay').width('100%')
        } else {
            $('.overlay').width('0%')
        }
    });

    // Jump to section from menu
    $("#bar-home, #bar-about, #bar-projects, #bar-contact").click(function() {
        $('#navMenuIcon').removeClass('is-active');
        $('#sections').removeClass('blurBg');
        $('.overlay').width('0%');
        currSection = $(this).attr('href');
        console.log(currSection)
        $('html, body').animate({
            scrollTop: $(currSection).offset().top
        }, 2000);
    });

    // Scroll between sections
    var currSection = '#home';
    var lastScrollTop = $(document).scrollTop();
    var sections = []
    $('#navbarMenu').children().each(function(){
        sections.push($(this).attr('href'))
    })
    var circularSectionsArray = new Circular(sections);

    // Scroll between sections smoothly
    $(document).scroll(throttle(function(){
        var currScrollTop = $(document).scrollTop();
        if(currScrollTop < lastScrollTop){
            // TO DO add scrolling up handle
            $('html, body').animate({scrollTop: $(circularSectionsArray.prev()).offset().top}, 2000);
            console.log(circularSectionsArray.prev())
        } else {
            // TO DO add scrolling down handle
            $('html, body').animate({scrollTop: $(circularSectionsArray.next()).offset().top}, 2000);
            console.log(circularSectionsArray.next())
        }

        lastScrollTop = currScrollTop
    }, 1000));

    function throttle(fn, wait) {
        var time = Date.now();
        return function() {
          if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
          }
        }
    }
    
    // Set the array of the sectoins
    function Circular(arr, startIntex){
        this.arr = arr;
        this.currentIndex = startIntex || 0;
    }
    
    Circular.prototype.next = function(){
        var i = this.currentIndex, arr = this.arr;
        this.currentIndex = i < arr.length-1 ? i+1 : 0;
        return this.current();
    }
    
    Circular.prototype.prev = function(){
        var i = this.currentIndex, arr = this.arr;
        this.currentIndex = i > 0 ? i-1 : arr.length-1;
        return this.current();
    }
    
    Circular.prototype.current = function(){
        return this.arr[this.currentIndex];
    }
    // End of circular array functions

});