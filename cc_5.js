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
