$(document).ready(function(){
    //Lightbox options
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })
    
    //Animation for profile and gallery rows- scroll method
    $(window).scroll(function(){
        let height = $(this).scrollTop();
        
        if(height >= 350){
            $('.myProfile').addClass('slideIn');
            $('.myMenu').addClass('customNav');
           } else {
            $('.myProfile').removeClass('slideIn');
            $('.myMenu').removeClass('customNav');
           }
        
        if(height >= 400){
            $('.gallery').addClass('animate');
           } else {
            $('.gallery').removeClass('animate');
           }
    });
       
    $('.galleryListItem').click(function(){
        let value = $(this).attr('data-filter');
        
        if(value === 'all'){
           $('.filter').show(300);
           } else {
               $('.filter').not('.' + value).hide(300);
               $('.filter').filter('.' + value).show(300);
           }
    });
    
    $('.galleryListItem').click(function(){
        $(this).addClass('activeItem').siblings().removeClass('activeItem');
    });
});