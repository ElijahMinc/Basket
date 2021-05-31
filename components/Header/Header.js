export class Header {
   constructor(CATALOG, headerPage, LocalStoragePage, basket) {
      this.CATALOG = CATALOG;
      this.headerPage = headerPage;
      this.LocalStoragePage = LocalStoragePage;
      this.basket = basket
      this.render();
      this.setup();
   }
   clickHandleForOpenBasket() {
      this.basket.render()
   }
   setup() {
      const basket = document.querySelector('[data-type="basket"]');
      basket.addEventListener('click', () => this.clickHandleForOpenBasket())
   }
   render() {
      let count = this.LocalStoragePage.getProducts().length;
      let header = `
         <div class="header-container">
            <div class="header-container__basket" data-type="basket">
               ${count}: Count
            </div>
         </div>
      `;

      this.headerPage.innerHTML = header;
      this.setup();
   }
}
