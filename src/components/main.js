import axios, { all } from "axios";
import { async } from "regenerator-runtime";

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

  //add element carousel

  results.map((ele) => {
    const carousel = document.getElementById("list-poke");
    carousel.insertAdjacentHTML(
      "beforeend",
      `<div class="card border border-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl">
        <img src="${ele.sprites.front_default}" alt="${ele.name}" class="w-full h-48 object-contain">
        <div class="p-4">
          <h3 class="text-xl font-bold mb-2">${ele.name}</h3>
          <button class="text-black border bg-white border-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded-full">Show Poke</button>
        </div>
      </div>`
    );
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
                <button class="text-black border bg-white border-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded-full">Show Poke</button>
              </div>
            </div>`
      );
    });
  });
};

export default main;
