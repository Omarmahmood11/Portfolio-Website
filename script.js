$(document).ready(function() {
    $(window).scroll(function() {
        $('.progress-bar').each(function() {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if(bottom_of_window > bottom_of_object) {
                $(this).animate({'width': $(this).attr('aria-valuenow') + '%'}, 1000);
            }
        });
    });
});
