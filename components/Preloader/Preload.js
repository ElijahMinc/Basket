export class Preload {
   constructor(preloadPage) {
      this.preloadPage = preloadPage;
      this.body = document.querySelector('body');
      this.#render();
   }
   removeRender() {
      this.body.classList.remove('hidden');
      this.preloadPage.innerHTML = ``;
   }
   #render() {
      this.body.classList.add('hidden')
      let preload = `
         <div class="preload-container">
            <img src="components/Preloader/img/preload.svg" class="preload-container__preload"/>
         </div>
      `;
      this.preloadPage.innerHTML = preload;
   }
}

