fetch('js/items.json')
  .then((response) => response.json())
  .then((data) => {
    const swiper_items_sale = document.getElementById('swiper_items_sale');

    all_products_json = data;
    data.forEach((item) => {
      if (item.old_price) {
        const sale_percent = Math.floor(
          ((item.old_price - item.price) / item.old_price) * 100
        );
        swiper_items_sale.innerHTML += `
          <div class="product swiper-slide">

            <div class="icons">
              <span><i class="fa-solid fa-heart"></i></span>
              <span><i onclick="addToCart(${item.id}, this)" class="fa-solid fa-shopping-cart"></i></span>
              <span><i class="fa-solid fa-share"></i></span>
            </div>
            <span class="sale_percent">%${sale_percent}</span>

            <div class="img_product">
              <img src="${item.img}" alt="">
              <img class="img_hover" src="${item.img_hover}" alt="">
            </div>

            <h3 class="name_product"><a href="#">
              ${item.name}
            </a></h3>

            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>

            <div class="price">
              <p><span>$${item.price}</span></p>
              <p class="old_price">$${item.old_price}</p>
            </div>
          </div>
      `;
      }
    });
  });
