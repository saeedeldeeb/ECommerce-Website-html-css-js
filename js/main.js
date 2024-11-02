// open & close cart

const cart = document.querySelector('.cart');

function openCart() {
  cart.classList.add('active');
}

function closeCart() {
  cart.classList.remove('active');
}

/* add to cart */

var all_products_json;

var items_in_cart = document.querySelector('.items_in_cart');
let product_cart = [];

function addToCart(id, element) {
  product_cart.push(all_products_json.find((product) => product.id === id));
  element.classList.add('active');
  getCartItems();
}

function getCartItems() {
  let items = '';
  product_cart.forEach((item) => {
    items += `
      <div class="item_cart">
        <img src="${item.img}" alt="">
        <div class="content">
          <h4>${item.name}</h4>
          <p class="price_cart">$${item.price}</p>
        </div>
        <button class="delete_item"><i class="fa-solid fa-trash"></i></i></button>
      </div>
    `;
  });

  items_in_cart.innerHTML = items;
}
