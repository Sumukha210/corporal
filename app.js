// const portfolio = document.querySelector(".portfolio");
const portfolioImages = document.querySelectorAll(".portfolio img");
const ModalImg = document.querySelector(".modal-img");

portfolioImages.forEach(e => {
  e.setAttribute("data-bs-toggle", "modal");
  e.setAttribute("data-bs-target", "#exampleModal");

  e.addEventListener("click", e => {
    console.log(e.target.getAttribute("src"));
    ModalImg.setAttribute("src", e.target.getAttribute("src"));
  });
});

// portfolio.addEventListener("click", e => {
//   //   console.log(e);
//   //   console.log(e.target.localName);
//   //   if (e.target.localName === "img") {
//   //     console.log("True");
//   //   }
// });
