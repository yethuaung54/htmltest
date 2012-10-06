
// (function(jQuery) {
    
//   var allPanels = jQuery('.accordion > dd').hide();
    
//   jQuery('.accordion > dt > a').click(function() {
//     allPanels.slideUp();
//     jQuery(this).parent().next().slideDown();
//     return false;
//   });

// })(jQuery);
$(document).ready(function(){
(function($) {
    
  var allPanels = $('.accordion > dd').hide();
    
  $('.accordion > dt > a').click(function() {
      $this = $(this);
      $target =  $this.parent().next();

      if(!$target.hasClass('active')){
         allPanels.removeClass('active').slideUp();
         $target.addClass('active').slideDown();
      }
      
    return false;
  });

})(jQuery);
});