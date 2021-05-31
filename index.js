import { HEADER_PAGE, PRODUCTS_PAGE, BASKET_PAGE, PRELOAD_PAGE, ERROR_PAGE } from './root/constants.js'; // root
import { LocalStoragePage } from './utils/LocalStoragePage.js' // LocalStoragePage
import { Header } from './components/Header/Header.js'; // Header
import { Products } from './components/Products/Products.js'; // Products
import { Basket } from './components/Basket/Basket.js'; // Products
import { Preload } from './components/Preloader/Preload.js'; // Preloader
import { Error } from './components/Error/Error.js' // Error

const getProducts = async () => {
   const response = await fetch('server/catalog.json');
   let errorStatus = false
   try {
      const result = await response.json();
      return result
   } catch (error) {
      errorStatus = true
      return { error, errorStatus }
   }
}// getPRODUCTS

const productsPage = (
   CATALOG,
   PRODUCTS_PAGE,
   BASKET_PAGE
) => {

   const localStoragePage = new LocalStoragePage(CATALOG); // LocalStoragePage
   const basketPage = new Basket(CATALOG, BASKET_PAGE, localStoragePage); //Basket
   const headerPage = new Header(CATALOG, HEADER_PAGE, localStoragePage, basketPage); // Header
   const productsPage = new Products(CATALOG, PRODUCTS_PAGE, localStoragePage, headerPage); // Products
}

const errorPage = (error, ERROR_PAGE) => {
   const errorPage = new Error(error, ERROR_PAGE);
}

const preloadPage = new Preload(PRELOAD_PAGE); // Preloader

(async function render() {

   let CATALOG = await getProducts();
   console.log(CATALOG)
   if (CATALOG.errorStatus) {
      preloadPage.removeRender();
      errorPage(CATALOG.error, ERROR_PAGE)
   } else {
      setTimeout(() => {
         preloadPage.removeRender();
         productsPage(CATALOG, PRODUCTS_PAGE, BASKET_PAGE);
      }, 1000);
   }
})();