const gearBtn = document.querySelector("#gear-btn");
const colorPalette = document.querySelector(".color-palette");
const colorBtns = document.querySelectorAll(".btn");

gearBtn.addEventListener("click", () => {
  const isOpen = colorPalette.classList.toggle("color-palette--show");
  gearBtn.setAttribute("aria-expanded", isOpen);
});

colorBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const {bg, text } = e.currentTarget.dataset;
    document.body.style.setProperty("--app-bg", bg);
    document.body.style.setProperty("--app-text", text);
  });
});
