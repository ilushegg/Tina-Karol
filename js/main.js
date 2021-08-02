
function checkForm(el){
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let name = document.getElementById('name').value
    let select = document.getElementById('select').value
    let message = document.getElementById('message').value
    let fail = ""
    if (email == "" || phone == "" || name == "" || message == ""){
        fail = "Заполните все поля"
    }
    else if(name.length <= 10) {
        fail = "ФИО или назв. организации: не менее 10 символов"
    }
    else if(name.length > 50){
        fail = "ФИО или название орг.: не более 50 символов"
    }
    else if(email.includes("@") == false || email.includes(".") == false){
        fail = "Некорректный Email"
    }
    if (fail != ""){
        
        document.getElementById("error").innerHTML = fail
        error.style.padding = "7px"
        error.style.color = "#e67b51"
        error.style.fontSize = "13.3px"
        return false
    }else{
        window.location = "submit__form.html"
        return false
    }
}
$(document).ready(function(){
    $("#phone").mask("+380 (99) 999 99 99")
})
function UA(){
$(document).ready(function(){
    $("#phone").mask("+380 (99) 999 99 99")
})
}
function RU(){
    $(document).ready(function(){
        $("#phone").mask("+7 (999) 999-99-99")
    })
    }

$(function(){
    $('.slider__inner, .news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        
    });

    // $('.open__popup').click(function(e){
    //     e.preventDefault();
    //     $('.popup-bg__services').fadeIn(300);
    //     $('html').addClass('no-scroll');
    // })
    // $('.close__popup').click(function(){
    //     $('.popup-bg__services').fadeOut(300);
    //     $('html').addClass('no-scroll');
    // })
 

    $('select').styler();
    
    $('.header__btn-menu').on('click', function(){
        $('.menu ul').slideToggle();
      });




});
$(".popup-youtube").magnificPopup({
    type: "iframe",
    iframe: {
        markup: '<div class="mfp-iframe-scaler">'+
                  '<div class="mfp-close"></div>'+
                  '<iframe class="mfp-iframe" frameborder="0"  allow="autoplay" allowfullscreen></iframe>'+
                '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
      
        patterns: {
          youtube: {
            index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
            id: 'v=', // String that splits URL in a two parts, second part should be %id%
            // Or null - full URL will be returned
            // Or a function that should return %id%, for example:
            // id: function(url) { return 'parsed id'; }
      
            src: 'https://www.youtube.com/embed/%id%?rel=0&autoplay=1' // URL that will be set as a source for iframe.
          }
        }},
    preload: false
})

$(".gallery__list").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
        enabled: true
    }

})
// setTimeout(windowUp,1500)

// function windowUp() {
//     document.getElementById('tiser').click()
    
//     setTimeout(function(){
//         $.magnificPopup.close()
//     },45000)
// }

setTimeout(function() {

    $('#tiser').magnificPopup('open');

 }, 2000);

 $('.popup-content').magnificPopup({
    type: 'inline'
});