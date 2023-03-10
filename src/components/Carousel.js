class Carousel extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
  
      <div class="carousel relative container mx-auto">
      <div id="list-poke"  class="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10  p-5">
     
      </div>
      <div class="flex justify-center my-10">
        <button id="button-loadmore" class="text-white bg-blue-500 shadow-lg hover:bg-blue-700 font-bold py-2 px-4 rounded-full">
          Load More
        </button>
      </div>
    </div>
    
        `;
  }
}

customElements.define("pokemon-carousel", Carousel);
