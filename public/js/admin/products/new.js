const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const product = {
    name: form.name.value,
    price: form.price.value,
    imageUrl: form.imageUrl.value,
  };

  fetch("/api/products", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(product),
  }).then((resp) => {
    if (resp.status == "204") {
      location.href = "/admin/products";
    }
  });
});
