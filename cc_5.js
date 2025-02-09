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

//Task 5: Filter Method
let inventory = [5, 0, 12, 8, 0];
let availableInventory = inventory.filter(quantity => quantity > 0);
console.log(availableInventory);

//Task 6: Reduce Method
let sales = [500, 300, 200, 400];
let totalRevenue = sales.reduce((total, sale) => total + sale,0);
console.log('Total Revenue: $${totalRevenue}');

//Task 7: find() Method
let customers = ["Alice","Bob", "Charlie", "David"];
let foundCustomer = customers.find(customer => customer === "Charlie");
console.log(foundCustomer);

// Task 8: Function Declaration
function calculateTax (amount, taxRate) {
    let tax = amount * taxRate;
    return tax;
}
let amount = 500;
let taxRate = 0.08;

console.log('The tax on $${amount} at rate of ${taxRate * 100}% is $${calculateTax(amount, taxRate)}');

// Task 9: Function Expression
const applyDiscount = function(price, discount) {
    return price - (price * discount);
};
let price = 300;
let discount = 0.01;

console.log('The discounted price is $${applyDiscount(price, discount)}');

// Task 10: Loyalty Points
const calculatePoints = purchaseAmount => Math.floor(purchaseAmount/10);
let purchaseAmount= 150;
console.log('Points earned: ${calculatePoints(purchaseAmount)}');
