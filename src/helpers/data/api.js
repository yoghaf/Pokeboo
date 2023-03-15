import axios from "axios";

require("dotenv").config();

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

const filtered = (value, data) => {
  if (value === "asc") {
    const newdata = data.sort((a, b) => a.name.localeCompare(b.name));
    return newdata;
  } else {
    const newdata = data.sort((a, b) => b.name.localeCompare(a.name));
    return newdata;
  }
};

export { fetchData, filtered };
