
$('.hamburger').hover(function() {
    $('.hamburger-text').addClass('hamburger-text-show');
}, function() {
    $('.hamburger-text').removeClass('hamburger-text-show');
});




$('.item-social').click(function() {
    $this = $(event.currentTarget);
    console.log($this);
});



