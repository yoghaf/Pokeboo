class PokemonNavigation extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector(".nav .nav-item .nav-link.active").id;
  }
  render() {
    this.innerHTML = `
    <nav >
    <div class="mx-auto container px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center  ">
          <a href="#" class="text-black text-2xl font-bold">Pokeboo</a>
        </div>
        <button id="menu-toggle" class="flex items-center px-3 py-2  text-black  hover:font-semibold  sm:hidden">
          <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z"/>
          </svg>
        </button>
        <div class="hidden sm:flex sm:items-center sm:ml-6">
          <div class="flex sm:space-x-8">
            <a href="#" id="popular" class="cursor-pointer nav-link active text-black hover:font-semibold px-3 py-2 text-sm font-light">Popular</a>
            <a href="#" id="highest-attack" class="cursor-pointer nav-link text-black hover:font-semibold px-3 py-2 text-sm font-light">Highest Attack</a>
            <a href="#" id="highest-defense" class="cursor-pointer nav-link text-black hover:font-semibold px-3 py-2 text-sm font-light">Highest Defense</a>
            <a href="#" id="shiny" class="cursor-pointer nav-link text-black hover:font-semibold px-3 py-2 text-sm font-light">Shiny</a>
          </div>
        </div>
      </div>
      <div id="menu" class="hidden  border-b-2 border-b-black ">
        <div class="flex flex-col items-center pt-2 pb-3">
          <a href="#" id="popular" class="cursor-pointer nav-link active text-black hover:font-semibold py-2 text-sm font-light">Popular</a>
          <a href="#" id="highest-attack" class="cursor-pointer nav-link text-black hover:font-semibold py-2 text-sm font-light">Highest Attack</a>
          <a href="#" id="highest-defense" class="cursor-pointer nav-link text-black hover:font-semibold py-2 text-sm font-light">Highest Defense</a>
          <a href="#" id="shiny" class="cursor-pointer nav-link text-black hover:font-semibold py-2 text-sm font-light">Shiny</a>
        </div>
      </div>
    </div>
  </nav>
  
        `;
    const navItems = this.querySelectorAll(".nav .nav-item .nav-link");
    navItems.forEach((item) => {
      item.addEventListener("click", (event) => {
        navItems.forEach((nav) => {
          nav.classList.remove("active");
        });
        event.target.classList.add("active");
        if (this._clickEvent) {
          this._clickEvent(event);
        }
      });
    });
    const menuToggle = this.querySelector("#menu-toggle");
    const menu = this.querySelector("#menu");
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
}

customElements.define("pokemon-navigation", PokemonNavigation);
