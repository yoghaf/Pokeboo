import axios from "axios";

const main = async () => {
  // fetching data
  console.log("tes");
  let offset = 0;
  const url = `https://pokeapi.co/api/v2/pokemon/`;

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
  console.log(data);
  const promises = data.map(async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (eror) {
      console.log(eror);
    }
  });
  const results = await Promise.all(promises);
  console.log(results);

  // add element carousel

  results.forEach((ele) => {
    const carousel = document.getElementById("list-poke");
    carousel.insertAdjacentHTML(
      "beforeend",
      `<div class="card border border-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl">
          <img src="${ele.sprites.front_default}" alt="${ele.name}" class="w-full h-48 object-contain">
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
            <button class="show mt-5 text-black border bg-white border-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded-full">Show Poke</button>
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

  //   add button loadmore

  const buttonload = document.getElementById("button-loadmore");
  buttonload.addEventListener("click", async () => {
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
    newresults.map((ele) => {
      const carousel = document.getElementById("list-poke");
      carousel.insertAdjacentHTML(
        "beforeend",
        `<div class="card border border-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl">
                <img src="${ele.sprites.front_default}" alt="${ele.name}" class="w-full h-48 object-contain">
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
                  <button class="show mt-5 text-black border bg-white border-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded-full">Show Poke</button>
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
