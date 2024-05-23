// Here's I'm going to create a product type that has a name, price, and inventory, along with a function that changes the color of the product.

/*1. Define a type alias named Product to represent a product with the following
properties:
• name (string): The name of the product.
• price (number): The price of the product.
• inventory (object): An object containing inventory details including:
• stock (number): The number of products available.
• colorOptions (string[ ]): An array listing available colors.
2. Create an array named products containing at least three product objects. Each
product object should include a name, price, and inventory details.
3. Implement a function named changeColor that takes a product object and a new
color as input. This function should update the color property of the product and
adjust the price based on the new color (implement your own logic, e.g., increase by
10% for red, decrease by 5% for blue).
4. Display each product's name, price, stock, and available colors. Iterate through the
products array and print each product's details.*/

// Here's the code:
type Product ={
    name: string,
    price: number,
    inventory: {
        stock: number,
        colorOptions: (string[ ])
    }
}
let products:Product[]= [
    {
        name: "Khaadi kurtis",
        price: 2500,
        inventory: {
            stock: 22,
            colorOptions: ["black","green","blue","white",]
        }
    },
    {
        name: "Stoneage jeans for Women",
        price: 2800,
        inventory: {
            stock: 8,
            colorOptions: ["black","white","blue"]
        }
    },
    {
        name: "Astore leather handbags",
        price: 2000 ,
        inventory: {
            stock: 20,
            colorOptions: ["black","brown","beige","red"]
        }
    }
]

function changeColor(product:Product,newColor:string) {
    product["color"] = newColor
    if (newColor == 'red') {
        // Now I'm going to implement the condition of incrementing the price about 10% if red is selected.
        product.price += product.price * 0.1
    }
    else if (newColor == 'purple') {
        // Now I'm going to implement the condition of incrementing the price about 16% if purple is selected.
        product.price += product.price * 0.16
    }
    else if (newColor == 'pink') {
        // Now I'm going to implement the condition of incrementing the price about 20% if pink is selected.
        product.price += product.price * 0.2
    }
    else if (newColor == 'green') {
            // Now I'm going to implement the condition of decrementing the price about 4% if black is selected.
            product.price -= product.price * 0.04
    }
    else if (newColor == 'blue') {
            // Now I'm going to implement the condition of decrementing the price about 5% if blue is selected.
            product.price -= product.price * 0.05
    }
    
    else{
        
        console.log(`${newColor} color is not available`);
    }
};
// Now changing the color of the products.
changeColor(products[0], "red")
changeColor(products[1],"red")
changeColor(products[2],"red")

products.forEach((product) => { 
    console.log(`Product Name: ${product["name"]}`);
    console.log(`Product Price: ${product["price"]}`);
    console.log(`Product Stock: ${product.inventory.stock}`);
    console.log(`Available Colors: ${product.inventory.colorOptions}\n`);
 });
