import express from 'express';
const routes = express.Router();



routes.get('/', (req, res) => {
    const toppings = ["Pepperoni", "Sausage", "Chicken", "Mushroom", "Olive", "Green Pepper", "Onion", "Banana Pepper", "Anchovies", "Pineapple"]
    res.render('custom-pizza', { toppings });
  });


routes.post("/customresult", (req, res) => {
    const size: string = req.body.size;
    const toppingCount: number = req.body.toppingcount;
    const gfCrust: boolean = !!req.body.glutenfree;
    const instructions: string = req.body.specialinstructions as string;
    let price: number = req.body.price;
    
    // price
    if (size === 'small') {
        price = 7 + toppingCount * .5
    } else if (size === 'medium') {
        price = 10 + toppingCount * 1
    } else {
        price = 12 + toppingCount * 1.25
    }
    if (gfCrust) {
        price += 2;
    }
    // Do they get free delivery?
    const freeDelivery: boolean = price >= 15;

    const displayPrice: string = price.toFixed(2);

    res.render("custom-pizza-result", { size, toppingCount, gfCrust, instructions, displayPrice, freeDelivery });
  });




export default routes;


// URL Path: “/custom-pizza”
// Query String: N/A
// Model: array of toppings: string
// HBS file: custom-pizza
// HBS techniques: {{#each /each }}
// View pizza builder results:
// URL Path:”/custom-pizza-results”
// Body: post size, toppings, gluten-free crust, special instructions
// Model: size, toppings, gluten-free crust, special instructions, price
// HBS file: custom-pizza-results.hbs
// HBS techniques: {{ expression }}, {{ #if   }}