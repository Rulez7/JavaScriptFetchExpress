// ES6-moduler (EcmaScript 2015)
// Express är ett webbramverk som låter oss koppla in extra funktionalitet (middleware)
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 5000;

// Detta är middleware
// Express.static tar allt innehåll under mappen public och gör det tillgängligt i roten
app.use(express.static("public"));
app.use(bodyParser.json());

const products = [
    { id: 1, name: "Black T-Shirt", price: 249, imageUrl: "https://via.placeholder.com/240x320?text=Black+T-Shirt" },
    { id: 2, name: "Red T-Shirt", price: 249, imageUrl: "https://via.placeholder.com/240x320?text=Red+T-Shirt" },
    { id: 3, name: "Green T-Shirt", price: 249, imageUrl: "https://via.placeholder.com/240x320?text=Green+T-Shirt" },
    { id: 4, name: "Purple T-Shirt", price: 249, imageUrl: "https://via.placeholder.com/240x320?text=Purple+T-Shirt" },
    { id: 5, name: "Blue T-Shirt", price: 249, imageUrl: "https://via.placeholder.com/240x320?text=Blue+T-Shirt" },
    { id: 6, name: "Yellow T-Shirt", price: 249, imageUrl: "https://via.placeholder.com/240x320?text=Yellow+T-Shirt" },
    { id: 7, name: "Magenta T-Shirt", price: 249, imageUrl: "https://via.placeholder.com/240x320?text=Magenta+T-Shirt" },
    { id: 8, name: "Orange T-Shirt", price: 249, imageUrl: "https://via.placeholder.com/240x320?text=Orange+T-Shirt" },
    { id: 9, name: "White T-Shirt", price: 249, imageUrl: "https://via.placeholder.com/240x320?text=White+T-Shirt" }
];

// Definiera route - callback kommer köras när vi får in 
// ett HTTP GET till resurs "/". (POST, PUT, DELETE, PATCH, HEAD)
// Dessa kallas api endpoints

// HTTP GET /api/products
app.get("/api/products", (req, res) => {
    res.end(JSON.stringify(products));
});

app.get("/api/products/:id", (req, res) => {

    const productId = req.params.id;

    const product = products.find(product => product.id == productId);

    if (!product) {
        res.status(404).end();
    } else {
        res.end(JSON.stringify(product));
    }
});

// HTTP DELETE /api/products/id
// Be backend radera den produkten
app.delete("/api/products/:id", (req, res) => {
    const productId = req.params.id;

    const productIndex = products.findIndex(product => product.id == productId);

    if (productIndex > -1) {
        products.splice(productIndex, 1);
        res.status(204).end();
    } else {
        res.status(404).end();
    } 
});

let nextProductId = 10;

// HTTP POST /api/products
app.post("/api/products", (req, res) => {
    const product = req.body;

    product.id = nextProductId++;

    products.push(product);

    res.status(204).end();
});

// HTTP GET http://localhost:5000
app.listen(port, () => {
    console.log("Server online!");
});