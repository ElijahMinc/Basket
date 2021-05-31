export class Basket {
   constructor(CATALOG, BASKET_PAGE, localStoragePage) {
      this.catalog = CATALOG;
      this.basketPage = BASKET_PAGE;
      this.localStoragePage = localStoragePage;
   };
   handleClickForCloseBtn() {
      this.basketPage.innerHTML = ``
   }
   setup() {
      const closeBtn = document.querySelector('[data-type="close-btn"]')
      closeBtn.addEventListener('click', () => this.handleClickForCloseBtn())
   }
   render() {
      const products = this.localStoragePage.getProducts();
      let product = ``;
      let totalPrice = 0;
      this.catalog.forEach(({ id, name, img, price }) => {
         if (products.indexOf(id) !== -1) {
            product += `
            <tr>
               <td>
                  <img src="${img}" alt="img" />
               </td>
               <td>
                  ${name}
               </td>
               <td>
                  ${price}
               </td>
            </tr>
            `
            totalPrice += +price;
         }
      })
      let basket = `
         <div class="basket-container">
            <table>
               ${product}
               <tr>
                  <td>
                     Total Price:
                  </td>
                  <td>
                     ${totalPrice}
                  </td>
               </tr>
            </table>
            <div class="basket-container__close" data-type="close-btn">X</div>
         </div>
      `;

      this.basketPage.innerHTML = basket;
      this.setup()
   }
}

