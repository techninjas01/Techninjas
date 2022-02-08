$(document).ready(function() {
    $('.responsive-menu-button').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('no-hamburgler');
    });


    $('#preloader').show();

    //Set the carousel options
    $('#quote-carousel').carousel({
        pause: true,
        autoPlay: false,
        //                interval: 4000,
    });

    //tab section
    $('button.tab_btn').click(function() {
        $('.tab_btn').removeClass("tab_btn_active");
        $(this).addClass("tab_btn_active");
    });



    //active link --
    $.each($('.navbar-nav').find('li'), function() {
        $(this).toggleClass('active_nav',
            window.location.pathname.indexOf($(this).find('a').attr('href')) > -1);
    });


    //    $("#tm2").on("click", function () {
    //           $("#dropdown_lit").addClass("active_nav");
    //        }); 

    $(".dropdown").hover(
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("fast");
            $(this).toggleClass('open');
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("fast");
            $(this).toggleClass('open');
        }
    );


    $('.dropdown21').on('click', function() {
        $(this).toggleClass('active');
    });
    $('.dropdown21').removeClass('active');




}); //end ready function


// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200); // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200); // Else fade out the arrow
    }
});
$('#return-to-top').click(function() { // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 800);
});

//smoothscroll

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

// end smooth scroll


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}






// To attach Backstrech as the body's background
//$.backstretch("images/banner.jpg");

// You may also attach Backstretch to a block-level element
function openNav() {
    document.getElementById("mySidenav").style.width = "75%";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//$('body').on('click', function(){
//  if( parseInt( $('#mySidenav').css('width') ) > 0 ){
//    closeNav();
//  }
//});





//header scroll
var header, dropdown_li, dropdown_lit, yPos;

function yScroll() {
    pagetop = document.getElementById('header');
    dropdown_list = document.getElementById('dropdown_li');
    dropdown_list2 = document.getElementById('dropdown_lit');

    yPos = window.pageYOffset;
    if (yPos > 566) {
        pagetop.style.height = "85px";
        pagetop.style.transition = "all 0.3s ease-out";
        pagetop.style.paddingTop = "10px";
        pagetop.style.paddingBottom = "10px";
        pagetop.style.borderBottom = "1px solid #F9462F";
        dropdown_list.style.paddingBottom = "24px";
        dropdown_list2.style.paddingBottom = "24px";
    } else {
        pagetop.style.height = "96px";
        pagetop.style.transition = "all 0.3s ease-out";
        pagetop.style.paddingTop = "15px";
        pagetop.style.borderBottom = "unset";
        dropdown_list.style.paddingBottom = "28px";
        dropdown_list2.style.paddingBottom = "28px";
    }
}
window.addEventListener("scroll", yScroll);



window.onload = function() {
    $('#preloader').hide();
};