console.log('index.js loaded');

document.querySelector('.hamburger-menu').addEventListener('click', function () {
    console.log("Hamburger menu clicked"); // For debugging
    document.getElementById('overlay').style.display = 'flex';
});

document.getElementById('overlay').addEventListener('click', function() {
    this.style.display = 'none';
});
