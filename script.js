const imgSelect = function () {
  let imgClick = document.querySelector(".modal__profile__img");
  let inputClick = document.querySelector(".inputImg");
  console.log(imgClick, inputClick);

  imgClick.addEventListener("click", () => {
    inputClick.click();
  });
};
imgSelect();
const imgChange = function () {
  const fileDOM = document.querySelector(".inputImg");
  const preview = document.querySelector(".modal__profile__img");
  fileDOM.addEventListener("change", () => {
    const imageSrc = URL.createObjectURL(fileDOM.files[0]);
    preview.style.backgroundImage = "url(" + imageSrc + ")";
    preview.style.backgroundSize = "cover";
    console.log(imageSrc);

    document.querySelector(".profile__img__text").style.display = "none";
  });
};
imgChange();
