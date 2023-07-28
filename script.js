// let cartItems = []

// // Function to add an item to the cart
// function addToCart(productName, price, quantity){
//   const existingItem = cartItems.find(item => item.productName === productName);

//   if (existingItem) {
//     existingItem.quantity += quantity;
//   } else {
//     cartItems.push({ productName, price, quantity });
//   }	
// 	updateCartUI();
// }

// function openCart(){
// 	const cart = document.getElementsById('fa-shopping-cart');
// 	cartstyle.display = "block"
// }

// function to add click event to Truck Parts Section //

function event() {
  alert("div clicked");
}

document.getElementsByClassName('section-1-product').addEventListener('click', event);
















// Function to update the cart UI
// function updateCartUI() {
//   const cartItemsList = document.getElementById("cart-items-list");
//   cartItemsList.innerHTML = "";

//   cartItems.forEach((item) => {
//     const listItem = document.createElement("li");
//     listItem.innerHTML = `
//       <span>${item.productName} - $${item.price.toFixed(2)} x ${item.quantity}</span>
//       <button onclick="updateQuantity('${item.productName}', ${item.quantity - 1})">-</button>
//       <button onclick="updateQuantity('${item.productName}', ${item.quantity + 1})">+</button>
//       <button onclick="removeFromCart('${item.productName}')">Remove</button>
//     `;
//     cartItemsList.appendChild(listItem);
//   });

//   const totalCostElement = document.getElementById("total-cost");
//   totalCostElement.innerText = `$${calculateTotalCost().toFixed(2)}`;
// }

// // Function to remove an item from the cart
// function removeFromCart(productName) {
//   cartItems = cartItems.filter(item => item.productName !== productName);
//   updateCartUI();
// }

// // Function to update quantity of an item in the cart
// function updateQuantity(productName, quantity) {
//   const item = cartItems.find(item => item.productName === productName);

//   if (item) {
//     item.quantity = quantity;
//   }

//   updateCartUI();
// }

// // Function to calculate the total cost of the cart
// function calculateTotalCost() {
//   return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
// }



