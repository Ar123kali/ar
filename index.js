// Simple cart functionality
let cart = [];

document.addEventListener("DOMContentLoaded", function() {
    const cartCount = document.querySelector('a[href="#"]').textContent;

    // Listen for 'Add to Cart' button clicks
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const product = e.target.getAttribute('data-product');
            const price = parseFloat(e.target.getAttribute('data-price'));

            // Add product to cart array
            cart.push({ product, price });

            // Update cart count in the header
            const cartCountElement = document.querySelector('a[href="#"]');
            cartCountElement.textContent = `Cart (${cart.length})`;

            console.log(cart); // You can replace this with more detailed cart management logic
        });
    });
});
