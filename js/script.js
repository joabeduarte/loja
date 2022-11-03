const listaImagem = document.querySelectorAll(".ul-img");
const bigImg = document.querySelector("#imagem-principal");
const camisas = document.querySelectorAll(".preco-camisas li");

function handleClick(img) {
  const srcImg = img.target.src;
  const altImg = img.target.alt;
  bigImg.src = srcImg;
  bigImg.alt = altImg;

  camisas.forEach((camisa) => {
    camisa.classList.remove("active");
    if (camisa.className === bigImg.alt) {
      camisa.classList.add("active");
    }
  });
}

function handleImage(img) {
  img.addEventListener("click", handleClick);
}
listaImagem.forEach(handleImage);
