const products = require("./api");

function findProduct(produnctId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const filterProduct = products.find(p => p.pid = produnctId);
            filterProduct ? resolve({message: "Product Found", result: filterProduct}) : reject(new Error("Product Not Found"));
        }, 1000)
    })
}

module.exports = {findProduct};