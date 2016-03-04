$(function(){
    window.console.log('site ok');

    $('.avatar').on('animationend', function() {
   		$(this).removeClass('avatarFadeIn').removeClass('avatarScale3d');
    }).on('webkitAnimationEnd', function () {
        $(this).removeClass('avatarFadeIn').removeClass('avatarScale3d');
    });

    $('.avatar').click(function(){
    	$(this).addClass('avatarScale3d');
    });
});