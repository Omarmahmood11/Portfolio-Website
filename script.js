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
let observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // adjust if needed, 0.1 means 10% of the element is visible
    };

    let popUpObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('pop-up');
            }
        });
    }, observerOptions);

    // Observe each container
    document.querySelectorAll('.main-container, .card').forEach(container => {
        popUpObserver.observe(container);
    });
});
