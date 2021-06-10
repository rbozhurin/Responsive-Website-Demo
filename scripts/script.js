window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

function toggle() {
    const header = document.querySelector('header');
    header.classList.toggle('active');
}

document.getElementById('sent')
    .addEventListener('click', (ev) => {
        ev.preventDefault();
        let contactForm = document.querySelector('.contactForm');
        let thanksMessage = document.querySelector('.hidden');

        contactForm.style.display = 'none';
        thanksMessage.style.display = 'block';
    });