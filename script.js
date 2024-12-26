import { getFirestore, addDoc, collection, getDocs } from "./firebaseScript";

// const content1 = document.querySelector("#bodywrap");
// const content2 = document.querySelector("#card-container");
// const modal1 = document.querySelector("#member_modalLayer");
// const modal2 = document.querySelector("#modal__join__container");

// const btn1 = document.querySelector(".li-1");
// const btn2 = document.querySelector(".li-2");

// window.onload = function () {
//   content2.classList.add("switch");
//   // modal1.classList.add("switch");
//   // modal2.classList.add("switch");
// };

// btn1.addEventListener("click", () => {
//   if (content2.classList.contains("switch")) {
//   } else {
//     content2.classList.add("switch");
//     content1.classList.remove("switch");
//   }
// });

// btn2.addEventListener("click", () => {
//   if (content1.classList.contains("switch")) {
//   } else {
//     content1.classList.add("switch");
//     content2.classList.remove("switch");
//   }
// });

// document.addEventListener("DOMcontentLoaded", () => {
//   const navLinks = document.querySelectorAll("#nav-menu");
//   const sections = document.querySelectorAll(".section");

//   navLinks.forEach((link) => {
//     link.addEventListener("click", (event) => {
//       event.preventDefault(); // 기본 동작 방지 (스크롤 이동 방지)

//       // 모든 섹션 숨기기
//       sections.forEach((section) => {
//         section.style.display = "none";
//       });

//       // 클릭된 버튼의 대상 섹션 보이기
//       const targetId = link.dataset.target;
//       const targetSection = document.getElementById(targetId);
//       if (targetSection) {
//         targetSection.style.display = "block";
//       }
//     });
//   });
// });

const imgSelect = function () {
  let imgClick = document.querySelector(".modal__profile__img");
  let inputClick = document.querySelector(".inputImg");
  // console.log(imgClick, inputClick);

  imgClick.addEventListener("click", () => {
    console.log("??");

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
    // console.log(imageSrc);

    document.querySelector(".profile__img__text").style.display = "none";
  });
};
imgChange();
