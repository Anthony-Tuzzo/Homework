let pizzaToppings = ['Pepperoni', ' Sausage', ' Pineapple', ' Ham', ' Olives'];
let pizzaSize = [' Small', ' Medium', ' Large', ' X-Large'];
let pizzaCrust = [' NY Style ', ' Chicago Style ', ' STL Style '];
let greeting = "Benvenuti a la Pizzeria Tuzzo!";
function greetCustomer() {
    return (`${greeting} The available toppings today are ${pizzaToppings}`)
};
console.log(greetCustomer());
function getPizzaOrder() {
  return `One ${myPizza.size[1]} ${myPizza.crust[0]} crust pizza with ${myPizza.toppings[1]}, ${myPizza.toppings[2]}, and ${myPizza.toppings[4]} coming up!`
};
function getPizzaOrder() {
    return ("One" + pizzaSize[3] + pizzaCrust[0] + "pizza with " + pizzaToppings + " coming up!")
};
console.log(getPizzaOrder())
function preparePizza() {
    return ("Cooking" + pizzaSize[3] + pizzaCrust[0] + "pizza with " + pizzaToppings)
};
console.log(preparePizza())
function servePizza() {
    return ("Order up! Here's your" + pizzaSize[3] + pizzaCrust[0] + pizzaToppings + " Enjoy!")
};
console.log(servePizza())