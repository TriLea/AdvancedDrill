// let slideIndex = 0;

// function showSlides() {
//     const slides = document.getElementsByClassName("slide");

//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 4000); // Change image every 2 seconds
// }

// showSlides();

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
