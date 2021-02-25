const name = document.querySelector(".name");
const price = document.querySelector(".price");
const image = document.querySelector(".image");

const product = {
  id: 7,
  name: "Magenta T-Shirt",
  price: 249,
  imageUrl: "https://via.placeholder.com/240x320?text=Magenta+T-Shirt",
};

function setAttributes(product) {
  image.src = product.imageUrl;
  image.alt = product.name;
  name.innerText = product.name;
  price.innerText = product.price;
}

var urlParams = new URLSearchParams(window.location.search);

// Skicka användaren till startsida om det inte finns en
// query string-parameter med namn "id"
if (!urlParams.has("id") || !urlParams.get("id")) {
    location.href = "/";
}

const productId = urlParams.get("id");

fetch(`/api/products/${productId}`)
.then(resp => resp.json())
.then(product => setAttributes(product));
