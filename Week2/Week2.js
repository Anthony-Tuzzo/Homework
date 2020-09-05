const pizzaPlace = "Pizzeria Tuzzo";
let numberOfToppings = 16;
console.log(pizzaPlace);
console.log(numberOfToppings);
console.log(
  pizzaPlace + " has " + numberOfToppings + " different toppings on offer"
);

if (numberOfToppings >= 10) {
  console.log("A whole lot of pizza.");
} else {
  console.log("Quality, not quantity");
}

for (let i = 1; i < numberOfToppings; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
