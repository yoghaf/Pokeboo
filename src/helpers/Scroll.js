const Scroll = () => {
  const smoothScrollAnchor = document.querySelectorAll("a[href^='#']");

  for (let anchor = 0; anchor < smoothScrollAnchor.length; anchor++) {
    const element = smoothScrollAnchor[anchor];

    element.addEventListener("click", (e) => {
      e.preventDefault();
          behavior: "smooth",
        });
    });
  }
};
export default Scroll;
