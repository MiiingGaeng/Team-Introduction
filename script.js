//변수

const title = document.querySelector("#start-page");
const content1 = document.querySelector("#team-page");
const content2 = document.querySelector("#card-container");
const modal1 = document.querySelector("#member_modalLayer");
const modal2 = document.querySelector("#modal__join__container");

const btn1 = document.querySelector(".li-1");
const btn2 = document.querySelector(".li-2");





// 시작

window.onload = function () {
  content1.classList.add("switch");
  // content2.classList.add("switch");
  // modal1.classList.add("switch");
  // modal2.classList.add("switch");
  title.classList.add("switch");
};





//네비버튼

// 팀소개
btn1.addEventListener("click", () => {
  if ((content2.classList.contains("switch")) && (title.classList.contains("switch"))) {
  } else {
    title.classList.add("switch");
    content2.classList.add("switch");
    content1.classList.remove("switch");
  }
});
// 멤버 소개
btn2.addEventListener("click", () => {
  if ((content1.classList.contains("switch")) && (title.classList.contains("switch"))) {
  } else {
    title.classList.add("switch");
    content1.classList.add("switch");
    content2.classList.remove("switch");
  }
});




//모달

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
