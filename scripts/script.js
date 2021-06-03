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

// // Get the modal
// let modal = document.getElementById('myModal');

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// let images = document.getElementsByClassName('imgBox');
// let modalImg = document.getElementById('img01');
// let captionText = document.getElementById('caption');

// // Go through all of the images with our custom class
// for (let i = 0; i < images.length; i++) {
//     let img = images[i];
//     // and attach our click listener for this image.
//     img.addEventListener('click', () => {
//         modal.style.display = "block";
//         modalImg.src = this.src;
//         captionText.innerHTML = this.alt;
//     }
//     )
// }

function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
  }

// Get the <span> element that closes the modal
let span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = 'none';
}