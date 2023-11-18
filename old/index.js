let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].style.opacity = '0';
    currentSlide = index;
    if (currentSlide >= slides.length) currentSlide = 0;
    slides[currentSlide].style.opacity = '1';
}

setInterval(() => {
    let nextSlide = currentSlide + 1;
    showSlide(nextSlide);
}, 3000); // Change images every 3 seconds

document.getElementById('requestQuoteForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var details = document.getElementById('details').value;
    var errorMessage = document.getElementById('error-message');

    if (name === "" || email === "" || phone === "" || details === "") {
        errorMessage.textContent = "All fields are required!";
    } else {
        errorMessage.textContent = "";
        // TODO: Implement the code to send the form data to a server or handle accordingly.
        alert('Quote requested successfully!');
    }
});

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', function () {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});
