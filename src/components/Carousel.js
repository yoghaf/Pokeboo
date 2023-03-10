class Carousel extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
  
      <div class="carousel relative container mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10  p-5">
        <div class="card border border-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="pikachu" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-bold mb-2">Pikachu</h3>
            <button class="text-black border bg-white border-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded-full">Show Poke</button>
          </div>
        </div>
        <div class="card border border-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="squirtle" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-bold mb-2">Squirtle</h3>
            <button class="text-black border bg-white border-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded-full">Show Poke</button>
          </div>
        </div>
        <div class="card border border-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="charmander" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-bold mb-2">Charmander</h3>
            <button class="text-black border bg-white border-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded-full">Show Poke</button>
          </div>
        </div>
        <div class="card border border-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="pikachu" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-bold mb-2">Pikachu</h3>
            <button class="text-black border bg-white border-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded-full">Show Poke</button>
          </div>
        </div>
        <div class="card border border-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="squirtle" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-bold mb-2">Squirtle</h3>
            <button class="text-black border bg-white border-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded-full">Show Poke</button>
          </div>
        </div>
        <div class="card border border-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="charmander" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-bold mb-2">Charmander</h3>
            <button class="text-black border bg-white border-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded-full">Show Poke</button>
          </div>
        </div>
       
    
      </div>
      <div class="flex justify-center my-10">
        <button class="text-white bg-blue-500 shadow-lg hover:bg-blue-700 font-bold py-2 px-4 rounded-full">
          Load More
        </button>
      </div>
    </div>
    
        `;
  }
}

customElements.define("pokemon-carousel", Carousel);
