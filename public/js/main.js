const productCardGrid = document.querySelector(".product-card-grid");
const productCardTemplate = document.querySelector("#product-card-template");

// arrow function expression
const mapToProductCardFragments = (products) => products.map(product => {

    const productCardFragment = productCardTemplate.content.cloneNode(true);

    const img = productCardFragment.querySelector("img");

    img.src = product.imageUrl;
    img.alt = product.name;

    productCardFragment.querySelector(".name")
        .textContent = product.name;

    productCardFragment.querySelector(".price")
        .textContent = product.price;

    return productCardFragment;
});

const renderProductCards = (products) => {
    const productCardsFragments = mapToProductCardFragments(products);
    productCardGrid.append(...productCardsFragments);
}

// HTTP GET /api/products
fetch("/api/products") // returnerar Promise
    .then(resp => resp.json()) // returnerar en ny Promise
    .then(products => renderProductCards(products));
