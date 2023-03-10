import "./style/style.css";
import "regenerator-runtime";
import "./components/Navigation";
import "./components/Hero";
import "./components/Sitemap";
import "./components/Filter";
import "./components/Carousel";
import "./components/Footer";
import main from "./components/main";
import Scroll from "./helpers/Scroll";
document.addEventListener("DOMContentLoaded", () => {
  main();
  Scroll();
});
