import axios from "axios";

require("dotenv").config();

const main = async () => {
  // fetching data

  const dataAll = [];
  const urls = process.env.URL_API;

  let offset = 0;

  const url = urls;

  const fetchData = async (url, offset) => {
    try {
      const response = await axios.get(`${url}?offset=${offset}`);
      const newdata = response.data.results.map((ele) => ele);
      const dataurl = newdata.map((ele) => ele.url);
      return dataurl;
    } catch (error) {
      console.log(error);
    }
  };

  const data = await fetchData(url);

  const promises = data.map(async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (eror) {
      console.log(eror);
    }
  });
  const results = await Promise.all(promises);
  dataAll.push(...results);
  console.log(dataAll);

  // add element carousel

  results.forEach((ele) => {
    const carousel = document.getElementById("list-poke");
    carousel.insertAdjacentHTML(
      "beforeend",
      `<div class="card border border-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${ele.id}.png" alt="${ele.name}" class="w-full h-48 object-contain">
          <div class="p-4">
            <h3 class="text-xl font-bold mb-2">${ele.name}</h3>
            <div class="stat hidden">
            ${ele.stats
              .map(
                (stat) =>
                  `<ol class="grid grid-cols-2 gap-x-4 border-b-2 border-black border-opacity-25">
                      <li class="font-medium text-gray-700">${stat.stat.name} :</li>
                      <li class="font-bold">${stat.base_stat}</li>
                    </ol>`
              )
              .join("")}
            
            
            </div>
            <button class="show mt-5 text-black border bg-white border-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded-full">Show Stat</button>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-center text-center">
          <button class="mx-auto bg-black bg-opacity-5 w-2/3 drop-shadow-xl hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded-full">Choose Pokemon</button>
        </div>
        </div>`
    );
  });

  //   add filter
  const filterpokemon = document.getElementById("filter");
  filterpokemon.addEventListener("change", async () => {
    const selectedValue = filterpokemon.value;

    const filtered = (value, data) => {
      if (value === "asc") {
        const newdata = data.sort((a, b) => a.name.localeCompare(b.name));
        return newdata;
      } else {
        const newdata = data.sort((a, b) => b.name.localeCompare(a.name));
        return newdata;
      }
    };
    const newresults = filtered(selectedValue, dataAll);

    const carousel = document.getElementById("list-poke");
    carousel.innerHTML = "";

    newresults.forEach((ele) => {
      carousel.insertAdjacentHTML(
        "beforeend",
        `<div class="card border border-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${ele.id}.png" alt="${ele.name}" class="w-full h-48 object-contain">
              <div class="p-4">
                <h3 class="text-xl font-bold mb-2">${ele.name}</h3>
                <div class="stat hidden">
                  ${ele.stats
                    .map(
                      (stat) =>
                        `<ol class="grid grid-cols-2 gap-x-4 border-b-2 border-black border-opacity-25">
                          <li class="font-medium text-gray-700">${stat.stat.name} :</li>
                          <li class="font-bold">${stat.base_stat}</li>
                        </ol>`
                    )
                    .join("")}
                </div>
                <button class="show mt-5 text-black border bg-white border-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded-full">Show Stat</button>
              </div>
               <div class="p-6 flex-1 flex flex-col justify-center text-center">
            <button class="mx-auto bg-black bg-opacity-5 w-2/3 drop-shadow-xl hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded-full">Choose Pokemon</button>
          </div>
            </div>`
      );
    });
    const buttons = document.querySelectorAll(".show");
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const currentCard = event.target.closest(".card");
        const currentStat = currentCard.querySelector(".stat");
        currentStat.classList.toggle("hidden");
        currentStat.classList.toggle("active");
      });
    });
  });

  //add search

  const searchbutton = document.getElementById("search-button");
  searchbutton.addEventListener("click", async () => {
    const searchpokemon = document.getElementById("search");
    const searchvalue = searchpokemon.value;
    const filtered = (value, data) => {
      if (value) {
        const searchresult = data.filter((item) => item.name.includes(value));
        return searchresult;
      }
    };

    const newresults = filtered(searchvalue, dataAll);
    const carousel = document.getElementById("list-poke");
    carousel.innerHTML = "";

    newresults.forEach((ele) => {
      carousel.insertAdjacentHTML(
        "beforeend",
        `<div class="card border border-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${ele.id}.png" alt="${ele.name}" class="w-full h-48 object-contain">
          <div class="p-4">
            <h3 class="text-xl font-bold mb-2">${ele.name}</h3>
            <div class="stat hidden">
              ${ele.stats
                .map(
                  (stat) =>
                    `<ol class="grid grid-cols-2 gap-x-4 border-b-2 border-black border-opacity-25">
                      <li class="font-medium text-gray-700">${stat.stat.name} :</li>
                      <li class="font-bold">${stat.base_stat}</li>
                    </ol>`
                )
                .join("")}
            </div>
            <button class="show mt-5 text-black border bg-white border-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded-full">Show Stat</button>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-center text-center">
          <button class="mx-auto bg-black bg-opacity-5 w-2/3 drop-shadow-xl hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded-full">Choose Pokemon</button>
        </div>
        </div>`
      );
    });
    const buttons = document.querySelectorAll(".show");
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const currentCard = event.target.closest(".card");
        const currentStat = currentCard.querySelector(".stat");
        currentStat.classList.toggle("hidden");
        currentStat.classList.toggle("active");
      });
    });
  });

  // buttonshow
  const buttons = document.querySelectorAll(".show");
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const currentCard = event.target.closest(".card");
      const currentStat = currentCard.querySelector(".stat");
      currentStat.classList.toggle("hidden");
      currentStat.classList.toggle("active");
    });
  });

  //   add button loadmore

  const buttonload = document.getElementById("button-loadmore");
  buttonload.addEventListener("click", async () => {
    const carousel = document.getElementById("list-poke");
    offset += 20;
    const newdata = await fetchData(url, offset);
    const newpromise = newdata.map(async (url) => {
      try {
        const response = await axios.get(url);
        return response.data;
      } catch (eror) {
        console.log(eror);
      }
    });
    const newresults = await Promise.all(newpromise);
    dataAll.push(...newresults);
    console.log(dataAll);

    newresults.map((ele) => {
      carousel.insertAdjacentHTML(
        "beforeend",
        `<div class="card border border-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${ele.id}.png" alt="${ele.name}" class="w-full h-48 object-contain">
                <div class="p-4">
                  <h3 class="text-xl font-bold mb-2">${ele.name}</h3>
                  <div class="stat hidden">
                  ${ele.stats
                    .map(
                      (stat) =>
                        `<ol class="grid grid-cols-2 gap-x-4 border-b-2 border-black border-opacity-25">
                            <li class="font-medium text-gray-700">${stat.stat.name} :</li>
                            <li class="font-bold">${stat.base_stat}</li>
                          </ol>`
                    )
                    .join("")}
                  
                
                
                  </div >
                  <button class="show mt-5 text-black border bg-white border-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded-full">Show Stat</button>
                </div>
                <div class="p-6 flex-1 flex flex-col justify-center text-center">
                <button class="mx-auto bg-black bg-opacity-5 w-2/3 drop-shadow-xl hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded-full">Choose Pokemon</button>
              </div>
              </div>`
      );
    });

    // buttonshow
    const buttons = document.querySelectorAll(".show");
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const currentCard = event.target.closest(".card");
        const currentStat = currentCard.querySelector(".stat");
        currentStat.classList.toggle("hidden");
        currentStat.classList.toggle("active");
      });
    });
  });
};

export default main;
