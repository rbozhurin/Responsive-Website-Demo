window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

function toggle() {
    const header = document.querySelector('header');
    header.classList.toggle('active');
}

//About Us Section
function readMore() {
    let button = document.querySelector('.btn');
    let divExtra = document.querySelector('.extra');

    divExtra.style.display = divExtra.style.display !== 'block' ? 'block' : 'none';
    button.textContent = button.textContent === 'Read Our Story' ? 'Less' : 'Read Our Story';
}

//After Sending a Message in Contact Form
document.getElementById('sent')
    .addEventListener('click', (ev) => {
        ev.preventDefault();
        let contactForm = document.querySelector('.contactForm');
        let thanksMessage = document.querySelector('.hidden');

        contactForm.style.display = 'none';
        thanksMessage.style.display = 'block';
    })

//Popup Images
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
}

//Counter
$(function () {
    function isScrolledIntoView($elem) {
        let docViewTop = $(window).scrollTop();
        let docViewBottom = docViewTop + $(window).height();
        let elemTop = $elem.offset().top;
        let elemBottom = elemTop + $elem.height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function count($this) {
        let current = parseInt($this.html(), 10);
        if (isScrolledIntoView($this) && !$this.data("isCounting") && current < $this.data('count')) {
            $this.html(++current);
            $this.data("isCounting", true);
            setTimeout(function () {
                $this.data("isCounting", false);
                count($this);
            }, 5);
        }
    }

    $('.counter-value').each(function () {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        $(this).data("isCounting", false);
    });

    function startCount() {
        $('.counter-value').each(function () {
            count($(this));
        });
    };

    $(window).scroll(function () {
        startCount();
    });

    startCount();
});


