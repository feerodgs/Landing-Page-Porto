$(document).ready(function() {
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });

    $('.buttonSection').click(function(e) {
        e.preventDefault();

        $('#sectionContatoBlue').get(0).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
