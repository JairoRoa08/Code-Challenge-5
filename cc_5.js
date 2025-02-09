// Task 1: Object Properties
const customer = {
    name: "Jimmy Butler",
    age: 33,
    email: "JButler@gmail.com"
};

console.log('Name: ${customer.name}');
console.log('Age: ${customer.age}');
console.log('Email: ${customer.email}');
// Task 2: Object Methods
const order = {
    orderID: 12345,
    totalAmount: 150,
    status: "Processing",

    displayOrder: function() {
        console.log('Order ID: ${this.orderId}');
        console.log('Total Amount: $${this.totalAmount}');
        console.log('Status: ${this.status}');
    }
};
order.displayOrder();
//Task 3: Array Manipulation (push, pop, shift, unshift)
let cartItems = ["Basketball", "Hoop","Net"];
cartItems.Items.push("Air Pump");
cartItems.pop();
cartItems.unshift("Backboard");
cartItems.shift();

console.log(cartItems);
// Task 4: Map Method
let prices = [100, 200, 300];
let discountedPrices = prices.map(price => price*0.9);
console.log(discountedPrices);
