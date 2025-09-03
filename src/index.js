const imgs = [
  "/Script_Next-Image/img/marshall.webp",
  "/Script_Next-Image/img/gold.webp",
  "/Script_Next-Image/img/usopp.webp",
];

const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
const imagem = document.getElementById("imagem");

let indice = 0;

btnNext.addEventListener("click", () => {
  indice++;
  if (indice >= imgs.length) {
    indice = 0;
  }
  imagem.src = imgs[indice];
});

btnPrev.addEventListener("click", () => {
  indice--;
  if (indice < 0) {
    indice = 2;
  }
  imagem.src = imgs[indice];
});
