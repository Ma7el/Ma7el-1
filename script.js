function addToCart(itemId, itemName, itemPrice) {
  var cartItems = document.getElementById("cart-items");
  var cartTotal = document.getElementById("cart-total");

  // Create li element for the cart item
  var listItem = document.createElement("li");
  listItem.innerHTML = itemName + " - $" + itemPrice.toFixed(2);
  listItem.setAttribute("data-price", itemPrice);
  listItem.classList.add("cart-item");

  // Append the cart item to the cart items list
  cartItems.appendChild(listItem);

  // Update the total price
  var totalPrice = calculateTotalPrice();
  cartTotal.innerHTML = "Total: $" + totalPrice.toFixed(2);
}

function calculateTotalPrice() {
  var cartItems = document.querySelectorAll(".cart-item");
  var totalPrice = 0;

  // Iterate over cart items to calculate total price
  cartItems.forEach(function(item) {
    var price = parseFloat(item.getAttribute("data-price"));
    totalPrice += price;
  });

  return totalPrice;
}

function checkout() {
  // Perform checkout actions (e.g., redirect to payment page, display confirmation, etc.)
  // ...
}

function viewCart() {
  // Redirect to cart.html
  window.location.href = 'cart.html';
}

function proceedToCheckout() {
  // Redirect to checkout.html
  window.location.href = 'order.html';
}

function submitOrder() {
  // Get the form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var size = document.getElementById('size').value;
  var location = document.getElementById('location').value;

  // Perform form validation or further processing here

  // Redirect or perform other actions after submitting the form
}

function submitOrder() {
  // Get the form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var size = document.getElementById('size').value;
  var location = document.getElementById('location').value;

  // Store the selected item and size in sessionStorage
  sessionStorage.setItem('selectedItem', name);
  sessionStorage.setItem('selectedSize', size);

  // Redirect or perform other actions after submitting the form
  window.location.href = 'order-summary.html'; // Replace 'order-summary.html' with your desired checkout summary page
}