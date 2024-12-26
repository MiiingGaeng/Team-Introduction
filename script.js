//변수

const title = document.querySelector("#start-page");
const content1 = document.querySelector("#team-page");
const content2 = document.querySelector("#card-container");
const modal1 = document.querySelector("#member_modalLayer");
const modal2 = document.querySelector("#member_add_layer");

const btn1 = document.querySelector(".li-1");
const btn2 = document.querySelector(".li-2");

// 시작

window.onload = function () {
  content1.classList.add("switch");
  content2.classList.add("switch");
  modal1.classList.add("switch");
  modal2.classList.add("switch");
  // title.classList.add("switch");
};

//네비버튼

// 팀소개
btn1.addEventListener("click", () => {
  if (
    content2.classList.contains("switch") &&
    title.classList.contains("switch")
  ) {
  } else {
    title.classList.add("switch");
    content2.classList.add("switch");
    content1.classList.remove("switch");
  }
});
// 멤버 소개
btn2.addEventListener("click", () => {
  if (
    content1.classList.contains("switch") &&
    title.classList.contains("switch")
  ) {
  } else {
    title.classList.add("switch");
    content1.classList.add("switch");
    content2.classList.remove("switch");
  }
});

//멤버인포 모달
// on
var member = [
  {
    name: "김도현",
    mbti: "INTJ",
    hobby: "음악작업 / 사진촬영 / 영상편집",
    likes: "귀여운 동물친구들",
    tmi: "미용실 안간지 7년됐습니다! 자연펌 개꿀",
    vlogLink: "https://velog.io/@doni_kim/posts",
    gitLink: "https://github.com/woodie2933",
    imageSrc: "./images/도현.png",
  },
  {
    name: "김민경",
    mbti: "ENTP",
    hobby: "러닝 / 영화감상 / 야구관람",
    likes: "사람들",
    tmi: "내년 하프마라톤 도전합니다!",
    vlogLink: "https://velog.io/@miiing_gaeng/posts",
    gitLink: "https://github.com/MiiingGaeng",
    imageSrc: "./images/민경.png",
  },
  {
    name: "김선제",
    mbti: "ISTP",
    hobby: "게임 / 독서 / 음악감상",
    likes: "고양이(코코)🐈‍⬛",
    tmi: "고양이를 키웁니다!",
    vlogLink: "https://seondev01.tistory.com/",
    gitLink: "https://github.com/UrePu",
    imageSrc: "./images/선제.png",
  },
  {
    name: "윤주하",
    mbti: "INTP",
    hobby: "클라이밍 / 영화감상 / 게임",
    likes: "여행",
    tmi: "영어 이름 Judy 입니다!🐰",
    vlogLink: "https://ijooha.tistory.com/",
    gitLink: "https://github.com/ijooha16",
    imageSrc: "./images/주하.png",
  },
  {
    name: "이정민",
    mbti: "INFJ",
    hobby: "운동 / OTT관람 / 게임",
    likes: "엽떡과 피자",
    tmi: "엽떡 혼자 다 먹을 수 있습니다",
    vlogLink: "https://jungmin7618.tistory.com/",
    gitLink: "https://github.com/JungminLee97",
    imageSrc: "./images/정민.png",
  },
];

const memberImage = document.querySelector("#member_image");
const memberName = document.querySelector("#name");
const memberMbti = document.querySelector("#mbti");
const memberHobby = document.querySelector("#hobby");
const memberLikes = document.querySelector("#likes");
const memberTmi = document.querySelector("#tmi");
const memberVlogLink = document.querySelector(".vlog");
const memberGitLink = document.querySelector(".github");
const memberModalBtn = document.querySelector("#member_modalBtn");

console.log(memberVlogLink);

const memberCards = document.querySelectorAll(".cards");
memberCards.forEach((card, i) => {
  card.addEventListener("click", () => {
    modal1.classList.remove("switch");

    memberName.innerText = `${member[i].name}`;
    memberMbti.innerText = `${member[i].mbti}`;
    memberHobby.innerText = `${member[i].hobby}`;
    memberLikes.innerText = `${member[i].likes}`;
    memberTmi.innerText = `${member[i].tmi}`;

    memberImage.innerHTML = `<img src="${member[i].imageSrc}">`;

    if (member[i].vlogLink.includes("tistory")) {
      memberVlogLink.innerHTML = `
      <a href="${member[i].vlogLink}">
        <img src="./images/tstorylogo.png" alt="vlog">
      </a>
      `;
    } else {
      memberVlogLink.innerHTML = `
      <a href="${member[i].vlogLink}">
        <img src="./images/velog_logo.jpeg" alt="vlog">
      </a>
      `;
    }

    memberGitLink.innerHTML = `
      <a href="${member[i].gitLink}">
        <img src="./images/github_logo.svg" alt="vlog">
      </a>
      `;
  });
});

// off
memberModalBtn.addEventListener("click", () => {
  if (!modal1.classList.contains("switch")) {
    modal1.classList.add("switch");
  }
});

//멤버추가 모달
const addCard = document.querySelector("#addCard");
const addBtn = document.querySelector("#add_modalBtn");

addCard.addEventListener("click", () => {
  modal1.classList.add("switch");
  modal2.classList.remove("switch");
});

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

// off
addBtn.addEventListener("click", () => {
  if (!modal2.classList.contains("switch")) {
    modal2.classList.add("switch");
  }
});
