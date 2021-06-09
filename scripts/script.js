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