let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides();

// const parallaxImage = document.querySelector('.parallax-bg');

// window.addEventListener('scroll', function() {
//     let offset = window.scrollY;
//     parallaxImage.style.top = offset * 0.5 + 'px'; 
// });
