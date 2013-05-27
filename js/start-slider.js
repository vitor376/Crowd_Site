//Start Unslider

$(function() {
   $('.banner').unslider({
				arrows: true,
				fluid: true,
				dots: true,
			});
});

var unslider = $('.banner').unslider();
    
    $('.unslider-arrow').click(function() {
        var fn = this.className.split(' ')[1];
        
        //  Either do unslider.data('unslider').next() or .prev() depending on the className
        unslider.data('unslider')[fn]();
    });