export class Products {
   constructor(CATALOG, productsPage, basket, headerPage) {
      this.CATALOG = CATALOG;
      this.basket = basket;
      this.productsPage = productsPage;
      this.headerPage = headerPage
      this.render();
      this.setup();
   }
   get constants() {
      this.addProduct = `Добавить в корзину`;
      this.removeProduct = 'Удалить из корзины';
      this.activeClass = `products-container__button-active`;
      return {
         add: this.addProduct,
         remove: this.removeProduct,
         activeClass: this.activeClass,
      }
   }
   clickHandlerBtn(event) {
      const { add, remove, activeClass } = this.constants;
      const btn = event.target;
      const productId = btn.parentElement.dataset.id;
      const { statusProduct, products } = this.basket.putProduct(productId);
      if (statusProduct) {
         btn.innerHTML = remove;
         btn.classList.add(activeClass)
      } else {
         btn.innerHTML = add;
         btn.classList.remove(activeClass)
      }
      this.headerPage.render();
   }
   setup() {
      const btns = document.querySelectorAll('[data-type="btn"]');
      btns.forEach(el => el.addEventListener('click', (event) => this.clickHandlerBtn(event)));
   };
   render() {
      const { add, remove, activeClass } = this.constants;
      let products = ``;
      this.CATALOG.forEach(({ id, name, img, price }) => {
         const catalog = this.basket.getProducts();
         let statusBtn = ``;
         let statusClass = ``;
         if (catalog.indexOf(id) !== -1) { // если продукта нет в корзине
            statusBtn = remove;
            statusClass = ' ' + activeClass;
         } else {
            statusBtn = add;
            statusClass = ``;
         }
         products += `
               <div class="products-container__item" data-id="${id}">
                  <div class="products-container__img">
                     <img src="${img}" alt="img">
                  </div>
                  <div class="products-container__title">
                     ${name}
                  </div>
                  <div class="products-container__price">
                     ${price}
                  </div>
                     <button class="products-container__button${statusClass}" data-type="btn">${statusBtn}</button>
               </div>
            `
      });
      let productsContainer = `
               <div class="products-container">
                  ${products}
               </div>
               `;
      this.productsPage.innerHTML = productsContainer;
   }
}


