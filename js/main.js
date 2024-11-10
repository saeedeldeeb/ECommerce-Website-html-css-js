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

let count_item = document.querySelector('.count_item');
let price_cart_head = document.querySelector('.price_cart_head');
let count_item_cart = document.querySelector('.count_item_cart');
let price_cart_total = document.querySelector('.price_cart_total');

function getCartItems() {
  let total_price = 0;

  let items = '';
  product_cart.forEach((item) => {
    items += `
      <div class="item_cart">
        <img src="${item.img}" alt="">
        <div class="content">
          <h4>${item.name}</h4>
          <p class="price_cart">$${item.price}</p>
        </div>
        <button onClick="deleteItemCart(${item.id})" class="delete_item"><i class="fa-solid fa-trash"></i></i></button>
      </div>
    `;

    total_price += item.price;
  });

  items_in_cart.innerHTML = items;
  price_cart_head.innerHTML = `$${total_price}`;
  count_item.innerHTML = product_cart.length;
  count_item_cart.innerHTML = product_cart.length;
  price_cart_total.innerHTML = `$${total_price}`;
}

function deleteItemCart(index) {
  product_cart = product_cart.filter((product) => product.id !== index);
  getCartItems();
  console.log(product_cart);

  const icons = document.querySelectorAll('.fa-shopping-cart');
  icons.forEach((icon, idx) => {
    icon.classList.remove('active');
    product_cart.forEach((product) => {
      if (product.id === idx) {
        icon.classList.add('active');
      }
    });
  });
}

// back to top
let back_to_top = document.querySelector('.back_to_top');
back_to_top.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
