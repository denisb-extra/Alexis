$(document).ready(function ($) {
    window.addEventListener('scroll', onScroll);
    function onScroll(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
            shrinkOn = 30;
        if (distanceY > shrinkOn) {
            $("body" ).removeClass("not-scrolled");
        } else {
            $("body" ).addClass("not-scrolled");
        }
    }
    onScroll();
    
    
    $(".mobile_menu").simpleMobileMenu({
        "menuStyle": "accordion",
    });

    $(".open-button").on("click", function(){
        var cont = $(this).closest(".sidebar");
        cont.toggleClass("open");
    });

    $(".open-hidden").on("click", function(){
        var hidden = $(this).parent().find(".hidden");
        hidden.slideToggle();
    });

    document.addEventListener( 'wpcf7mailsent', function( event ) {
        var inputs = event.detail.inputs;
        thankyouPage = getFieldValueByName(inputs, "thankyou-page");
        if(thankyouPage) window.location = thankyouPage;
    }, false );
});

function getFieldValueByName(ar, name){
    var result = "";
    ar.forEach(function(item) {
        if(item.name == name) result = item.value;
    });
    return result;
}