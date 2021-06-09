document.getElementById('sent')
    .addEventListener('click', (ev) => {
        ev.preventDefault();
        let contactForm = document.querySelector('.contactForm');
        let thanksMessage = document.querySelector('.hidden');

        contactForm.style.display = 'none';
        thanksMessage.style.display = 'block';
    });