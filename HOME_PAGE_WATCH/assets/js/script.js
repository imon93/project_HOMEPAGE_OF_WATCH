let burger = document.querySelector(".burger")
let nav = document.querySelector(".nav")
let navbarItem = document.querySelector(".navbar-items")

burger.addEventListener("click",()=>{
    navbarItem.classList.toggle("s-class")
    nav.classList.toggle("v-class")
});

// navbar scroll
window.addEventListener("scroll",()=>{
    let navbar=document.querySelector(".navbar");
    if(window.scrollY > 20){
        navbar.classList.add("scrolled")
    }
    else{
        navbar.classList.remove("scrolled")
    }
});

//ScrollReveal animation

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
}

ScrollReveal().reveal(".left_box h1",{
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".left_box h2",{
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".left_box p",{
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".left_box .btn",{
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".right img",{
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".text",{
    ...scrollRevealOption,
    origin: "top",
    delay: 2500,
});




$(document).ready(function(){

    $('.back_to_top').click(function() {
        $('html, body').animate({scrollTop: 0}, 500)
    });

    $(window).on('load', function() {
        $('.preloader_area').fadeOut(1000)
    });

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop()

        if (scrolling > 200) {
            // $('.navbar').css({'background' : '#0771b9'})
            $('.navbar').addClass('primary_color')
            $('.back_to_top').fadeIn(500)
        }
        else{
            $('.navbar').removeClass('primary_color')
            $('.back_to_top').fadeOut(500)
        }
    });

    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
});