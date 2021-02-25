const tbody = document.querySelector("tbody");
const tableRowTemplate = document.querySelector("#table-row-template");

const deleteProduct = (id) => {

    fetch(`/api/products/${id}`, {
        method: "DELETE"
    }).then(resp => {
        if (resp.status == "204")
        location.reload();
    });
};

// arrow function expression
const mapToTableRowFragments = (products) => products.map(product => {

    const tableRowFragment = tableRowTemplate.content.cloneNode(true);

    tableRowFragment.querySelector(".id")
        .textContent = product.id;

    tableRowFragment.querySelector(".name")
        .textContent = product.name;

    const deleteButton = tableRowFragment.querySelector("button");

    deleteButton.addEventListener("click", () => deleteProduct(product.id));

    return tableRowFragment;
});

const renderTableRows = (products) => {
    const tableRowFragments = mapToTableRowFragments(products);
    tbody.append(...tableRowFragments);
}

// HTTP GET /api/products
fetch("/api/products") // returnerar Promise
    .then(resp => resp.json()) // returnerar en ny Promise
    .then(products => renderTableRows(products));
