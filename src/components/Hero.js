import heroImage from "../assets/images/charizard.png";

class PokemonHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="flex flex-col items-center justify-center h-screen">
        <div class="flex flex-col items-center">
          <h1 class="text-3xl font-bold mb-6 text-center">Find Your Strongest Pokemon <br>Fighter Here</h1>
          <img src="${heroImage}" alt="Hero" class="w-80 mb-6" />
          <p class="text-lg text-center mb-6">Don't miss out on the chance to become the best pokemon trainer<br> out there - login now for free and start your journey today!</p>
          <button class="bg-blue-500 drop-shadow-xl hover:bg-blue-700 text-white font-bold py-2 text-center px-4 rounded-full">Explore Pokemon</button>
        </div>
      </section>
    `;
  }
}

customElements.define("pokemon-hero", PokemonHero);
