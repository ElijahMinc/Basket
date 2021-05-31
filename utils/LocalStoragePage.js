export class LocalStoragePage {
   constructor(CATALOG) {
      this.CATALOG = CATALOG;
      this.nameKey = 'catalog'
   }
   getProducts() {
      const getProductsFromStorage = localStorage.getItem(this.nameKey);
      if (getProductsFromStorage != null) {
         return JSON.parse(getProductsFromStorage);
      };
      return [];
   };
   putProduct(id) {
      const products = this.getProducts();
      const indexProduct = products.indexOf(id);
      let statusProduct = false; // не добавлен в корзину
      if (indexProduct === -1) { // если элемент, найденный по индексу не добавлен в корзину при клике
         products.push(id);
         statusProduct = true; // добавлен в корзину
      } else {
         products.splice(indexProduct, 1);
      }
      localStorage.setItem(this.nameKey, JSON.stringify(products));
      return { statusProduct, products };
   };
}