export class Error {
   constructor(CATALOGError, errorPage) {
      this.CATALOGError = CATALOGError
      this.errorPage = errorPage
      this.render();
   }
   render() {
      let error = `
         <div class="error-container">
            <div class="error__body">
               <p class="error__text">Error: 228; У данных сейчас капризный период, вы только не огорчайтесь....</p>
            </div>
         </div>
      `
      this.errorPage.innerHTML = error;
   }
}