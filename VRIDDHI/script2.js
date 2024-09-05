document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('nav-list--open');
    });

    const requestForm = document.getElementById('request-form');
    const recommendationList = document.getElementById('recommendation-list');

    requestForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // const customerName = document.getElementById('customer-name').value;
        // const customerEmail = document.getElementById('customer-email').value;
        // const cropRecommendation = document.getElementById('crop-recommendation').value;

        // const recommendationItem = document.createElement('li');
        // recommendationItem.innerHTML = `
        //     <h3>${customerName} (${customerEmail})</h3>
        //     <p>${cropRecommendation}</p>
        // `;
        // recommendationList.appendChild(recommendationItem);

        requestForm.reset();
    });
});
