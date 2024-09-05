document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('nav-list--open');
    });

    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Implement login functionality here
        // If login is successful, close the modal
        closeModal('loginModal');
    });

    document.getElementById('signupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Implement signup functionality here
        // If signup is successful, close the modal
        closeModal('signupModal');
    });

    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const query = document.getElementById('query').value;
        
        // Here you can implement the logic to send the form data to the server or email
        
        // Example: Logging the data to the console
        console.log({
            name: name,
            email: email,
            query: query
        });
        
        alert("Thank you for contacting us! We'll get back to you soon.");
        
        // Reset the form
        document.getElementById('contactForm').reset();
    });
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function toggleNav() {
    var nav = document.getElementById("navbarNav");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}
