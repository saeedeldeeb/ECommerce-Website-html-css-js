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
        <button onClick="deleteItemCart(${item.id})" class="delete_item"><i class="fa-solid fa-trash"></i></i></button>
      </div>
    `;
  });

  items_in_cart.innerHTML = items;
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
