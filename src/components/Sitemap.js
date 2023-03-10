import pikachu from "../assets/images/pikachu.svg";
import caterpie from "../assets/images/caterpie.svg";
import beedril from "../assets/images/beedril.svg";

class PokemonSitemap extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
   
    <div class="mx-auto my-10">
      <h3 class="text-2xl font-semibold my-5 text-center">Featured Pokeboo</h3>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-0 p-5">
        <div class="w-full bg-white lg:w-3/4 lg:mx-auto bg-opacity-60 rounded-lg overflow-hidden drop-shadow-xl hover:drop-shadow-2xl transition duration-500 ease-in-out">
          <div class="flex items-center justify-center flex-1">
            <div class="">
              <img src="${pikachu}" alt="pikachu" class="w-28" />
            </div>
            <h3 class="text-2xl font-bold mb-2">Explore Pokemon</h3>
          </div>
          <div class="border-b-2 border-gray-400 border-opacity-30 p-6 flex-1 flex flex-col overflow-auto">
            <p class="text-gray-600 text-lg mb-4">Dive into the rich and immersive Pokemon World and discover over 500 different species of pokemon</p>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-center text-center">
            <button class="mx-auto bg-black bg-opacity-5 w-2/3 drop-shadow-xl hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded-full">Explore</button>
          </div>
        </div>
        <div class="w-full bg-white lg:w-3/4 lg:mx-auto bg-opacity-60 rounded-lg overflow-hidden drop-shadow-xl hover:drop-shadow-2xl transition duration-500 ease-in-out">
          <div class="flex items-center justify-center flex-1">
            <div class="">
              <img src="${beedril}" alt="pikachu" class="w-28" />
            </div>
            <h3 class="text-2xl font-bold mb-2">Learn Location</h3>
          </div>
          <div class="border-b-2 border-gray-400 border-opacity-30 p-6 flex-1 flex flex-col overflow-auto">
            <p class="text-gray-600 text-lg mb-4">Discover the world of Pokemon like never before with our advanced location feature - explore, catch, and train Pokemon in real-life locations!</p>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-center text-center">
            <button class="mx-auto bg-black bg-opacity-5 w-2/3 drop-shadow-xl hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded-full">Location</button>
          </div>
        </div>
        <div class="w-full bg-white lg:w-3/4 lg:mx-auto bg-opacity-60 rounded-lg overflow-hidden drop-shadow-xl hover:drop-shadow-2xl transition duration-500 ease-in-out">
          <div class="flex items-center justify-center flex-1">
            <div class="">
              <img src="${caterpie}" alt="pikachu" class="w-28" />
            </div>
            <h3 class="text-2xl font-bold mb-2">Catch Shiny</h3>
          </div>
          <div class="border-b-2 border-gray-400 border-opacity-30 p-6 flex-1 flex flex-col">
            <p class="text-gray-600 text-lg mb-4">Explore the vast Pokemon World and discover rare pokemon in unique locations</p>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-center text-center">
            <button class="mx-auto bg-black bg-opacity-5 w-2/3 drop-shadow-xl hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded-full">Unique</button>
          </div>
        </div>
      </div>
    </div>
  
      `;
  }
}

customElements.define("pokemon-sitemap", PokemonSitemap);
