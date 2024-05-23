// Here's I'm going to create a product type that has a name, price, and inventory, along with a function that changes the color of the product.
var products = [
    {
        name: "Khaadi kurtis",
        price: 2500,
        inventory: {
            stock: 22,
            colorOptions: ["black", "green", "blue", "white",]
        }
    },
    {
        name: "Stoneage jeans for Women",
        price: 2800,
        inventory: {
            stock: 8,
            colorOptions: ["black", "white", "blue"]
        }
    },
    {
        name: "Astore leather handbags",
        price: 2000,
        inventory: {
            stock: 20,
            colorOptions: ["black", "brown", "beige", "red"]
        }
    }
];
function changeColor(product, newColor) {
    product["color"] = newColor;
    if (newColor == 'red') {
        // Now I'm going to implement the condition of incrementing the price about 10% if red is selected.
        product.price += product.price * 0.1;
    }
    else if (newColor == 'purple') {
        // Now I'm going to implement the condition of incrementing the price about 16% if purple is selected.
        product.price += product.price * 0.16;
    }
    else if (newColor == 'pink') {
        // Now I'm going to implement the condition of incrementing the price about 20% if pink is selected.
        product.price += product.price * 0.2;
    }
    else if (newColor == 'green') {
        // Now I'm going to implement the condition of decrementing the price about 4% if black is selected.
        product.price -= product.price * 0.04;
    }
    else if (newColor == 'blue') {
        // Now I'm going to implement the condition of decrementing the price about 5% if blue is selected.
        product.price -= product.price * 0.05;
    }
    else {
        console.log("".concat(newColor, " color is not available"));
    }
}
;
// Now changing the color of the products.
changeColor(products[0], "red");
changeColor(products[1], "red");
changeColor(products[2], "red");
products.forEach(function (product) {
    console.log("Product Name: ".concat(product["name"]));
    console.log("Product Price: ".concat(product["price"]));
    console.log("Product Stock: ".concat(product.inventory.stock));
    console.log("Available Colors: ".concat(product.inventory.colorOptions, "\n"));
});
