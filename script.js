const products = [
    { id: 1, name: "Helado de Chocolate", price: 500, img: "https://via.placeholder.com/200" },
    { id: 2, name: "Helado de Vainilla", price: 450, img: "https://via.placeholder.com/200" },
    { id: 3, name: "Helado de Frutilla", price: 480, img: "https://via.placeholder.com/200" },
];

const cart = [];

// Render product catalog
function renderCatalog() {
    const catalog = document.querySelector(".product-list");
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Precio: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
        `;
        catalog.appendChild(productCard);
    });
}

// Add product to cart
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

// Update cart display
function updateCart() {
    const cartItems = document.querySelector(".cart-items");
    const totalPrice = document.getElementById("total-price");
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(cartItem);
        total += item.price;
    });
    totalPrice.textContent = total.toFixed(2);
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    renderCatalog();
});
