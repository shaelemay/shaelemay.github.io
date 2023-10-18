window.onload = function(){
    $("body").fadeIn();
    $('.info').toggleClass('fadeleft');
    $('.pkmn-image-bg').toggleClass('rotate');
    
}
$(".image-container")
    .css("display", "flex")
    .hide()
    .fadeIn(1000);