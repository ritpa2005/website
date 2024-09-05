document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('nav-list--open');
    });

    const productForm = document.getElementById('product-form');
    const productList = document.getElementById('product-list');

    productForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const productName = document.getElementById('product-name').value;
        const productDescription = document.getElementById('product-description').value;
        const productPrice = document.getElementById('product-price').value;
        const productImage = document.getElementById('product-image').files[0];

        const reader = new FileReader();
        reader.onload = function(e) {
            const productItem = document.createElement('li');
            productItem.innerHTML = `
                <img src="${e.target.result}" alt="${productName}" style="max-width: 150px; max-height: 150px;">
                <h3>${productName}</h3>
                <p>${productDescription}</p>
                <p>Price: INR ${productPrice}</p>
            `;
            productList.appendChild(productItem);
        };
        reader.readAsDataURL(productImage);

        productForm.reset();
    });
});
