
$(window).scroll(function(e){
 
    parallax();
});
   function parallax(){
    var scrolled = $(window).scrollTop();
    $('.content').css('top', -(scrolled * 0.2) + 'px');
}