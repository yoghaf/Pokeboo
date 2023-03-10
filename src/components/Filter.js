class FilterPokemon extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div  id="discover" class="mx-2 lg:mx-10 my-10">
    <h3 class="text-2xl font-semibold my-5 text-center">Discover Your Pokemon</h3>
        <div class="flex justify-between items-center bg-black bg-opacity-20  p-4 mb-5">
          <div class="flex">
            <label class="mr-2">Sort by:</label>
            <select id="filter" class="rounded-lg px-2 py-1 border border-gray-300">
              <option value="name_asc">Name A-Z</option>
              <option value="name_desc">Name Z-A</option>
            </select>
          </div>
          <div class="flex  ">
            <label class="mr-2">Search:</label>
            <input type="text" id="search" class="rounded-lg w-full px-1 py-1 border border-gray-300" placeholder="Search">
          </div>
        </div>
      `;
  }
}

customElements.define("pokemon-filter", FilterPokemon);
