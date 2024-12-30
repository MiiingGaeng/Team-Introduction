import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

// Firebase 구성 정보
const firebaseConfig = {
  apiKey: "AIzaSyD_G_08iBIVR1VBizfwuV8O5O-dgG0_AM4",
  authDomain: "team-c63b4.firebaseapp.com",
  projectId: "team-c63b4",
  storageBucket: "team-c63b4.firebasestorage.app",
  messagingSenderId: "540277860895",
  appId: "1:540277860895:web:16c07e14378222a965432a",
  measurementId: "G-8KKLB1HY80",
};
// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);
// Firestore 초기화
const db = getFirestore(app);

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
  memberLoad();
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
    heart: "♡",
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
    heart: "♡",
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
    heart: "♡",
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
    heart: "♡",
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
    heart: "♡",
  },
];

const memberImage = document.querySelector("#member_image");
const memberName = document.querySelector("#name");
const memberHeart = document.querySelector(".heart");
const memberMbti = document.querySelector("#mbti");
const memberHobby = document.querySelector("#hobby");
const memberLikes = document.querySelector("#likes");
const memberTmi = document.querySelector("#tmi");
const memberVlogLink = document.querySelector(".vlog");
const memberGitLink = document.querySelector(".github");
const memberModalBtn = document.querySelector("#member_modalBtn");

let memberCardsReload = () => {
  // console.log(member);

  // console.log("?");
  let memberCards = document.querySelectorAll(".cards");
  for (let i = 1; i < memberCards.length; i++) {
    // console.log(memberCards);

    memberCards[i].addEventListener("click", () => {
      modal1.classList.remove("switch");

      memberName.innerText = `${member[i - 1].name}`;
      memberMbti.innerText = `${member[i - 1].mbti}`;
      memberHobby.innerText = `${member[i - 1].hobby}`;
      memberLikes.innerText = `${member[i - 1].likes}`;
      memberTmi.innerText = `${member[i - 1].tmi}`;

      memberImage.innerHTML = `<img src="${member[i - 1].imageSrc}">`;

      memberHeart.innerHTML = `♡`;
      if (member[i - 1].heart === "♡") {
        memberHeart.addEventListener("click", () => {
          memberHeart.innerText = "♥︎";
          memberHeart.style.color = "#ff6a00";
          member[i - 1].heart = "♥︎";
        });
      } else {
        memberHeart.innerText = "♥︎";
      }

      if (member[i - 1].vlogLink.includes("tistory")) {
        memberVlogLink.innerHTML = `
        <a href="${member[i - 1].vlogLink}" target="_blank">
          <img src="./images/tstorylogo.png" alt="vlog">
        </a>
        `;
      } else {
        memberVlogLink.innerHTML = `
        <a href="${member[i - 1].vlogLink}" target="_blank">
          <img src="./images/velog_logo.jpeg" alt="vlog">
        </a>
        `;
      }

      memberGitLink.innerHTML = `
        <a href="${member[i - 1].gitLink}" target="_blank">
          <img src="./images/github_logo.svg" alt="vlog">
        </a>
        `;
    });
  }
};

// off
memberModalBtn.addEventListener("click", () => {
  if (!modal1.classList.contains("switch")) {
    modal1.classList.add("switch");
  }
});

//멤버추가 모달
const addCard = document.querySelector("#addCard");
const addBtn = document.querySelector("#add_modalBtn");

//on
addCard.addEventListener("click", () => {
  modal1.classList.add("switch");
  modal2.classList.remove("switch");
});

// off
addBtn.addEventListener("click", () => {
  if (!modal2.classList.contains("switch")) {
    modal2.classList.add("switch");
  }
});
//

let doc = {};
document.querySelector("#submit_btn").addEventListener("click", () => {
  // console.log("a");

  doc = {};
  let user = document.querySelectorAll(".textInput");
  let userArr = [];
  user.forEach((a) => {
    // console.log(a.value);

    if (a.value) {
      userArr.push(a.value);
    }
  });

  if (userArr.length == 8) {
    doc = {
      image: userArr[0],
      username: userArr[1],
      mbti: userArr[2],
      hobby: userArr[3],
      likes: userArr[4],
      tmi: userArr[5],
      blog: userArr[6],
      git: userArr[7],
    };
    addData();
    close();
    memberLoad();
  } else {
    alert("입력 확인해주세요.");
  }
});

const addData = async () => {
  await addDoc(collection(db, "members"), doc);
};

//

const close = () => {
  if (!modal2.classList.contains("switch")) {
    modal2.classList.add("switch");
  }
  let user = document.querySelectorAll(".textInput");
  user.forEach((a) => {
    // console.log(a.value);

    if (a.value) {
      a.value = "";
    }

    const preview = document.querySelector(".modal__profile__img");
    let ab = "https://cdn-icons-png.flaticon.com/512/5613/5613750.png";
    preview.style.backgroundImage = "url(  " + ab + "  )";
    preview.style.backgroundSize = "35%";
    document.querySelector(".profile__img__text").style.display = "block";
  });
};

let userImg = document.querySelector("#userimg");
userImg.addEventListener("change", () => {
  // console.log("!");

  const preview = document.querySelector(".modal__profile__img");
  if (isValidURL(userImg.value)) {
    // console.log("?");

    preview.style.backgroundImage = "url(" + userImg.value + ")";
    preview.style.backgroundSize = "cover";
    document.querySelector(".profile__img__text").style.display = "none";
  } else {
    let a = "https://cdn-icons-png.flaticon.com/512/5613/5613750.png";
    preview.style.backgroundImage = "url(  " + a + "  )";
    // console.log(preview.style.backgroundImage);

    preview.style.backgroundSize = "35%";
    document.querySelector(".profile__img__text").style.display = "block";
  }
});
function isValidURL(input) {
  console.log(input);

  const urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // 프로토콜
      "((([a-zA-Z0-9\\-]+\\.)+[a-zA-Z]{2,})|" + // 도메인 이름
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // IP 주소 (v4)
      "(\\:\\d+)?" + // 포트 번호
      "(\\/[-a-zA-Z0-9@:%_\\+.~#?&//=]*)?" + // 경로
      "(\\?[;&a-zA-Z0-9%_\\+.~#?&=]*)?" + // 쿼리 문자열
      "(\\#[-a-zA-Z0-9_]*)?$" // 프래그먼트
  );

  return urlPattern.test(input);
}
let randomImg = () => {
  let rNum = Math.floor(Math.random() * 4) + 1;

  return rNum;
};

const memberLoad = async function () {
  await fetchCollectionData();
  // 새로운 카드 생성
  let memberCards = document.querySelectorAll(".cards");
  for (let i = 6; i < member.length; i++) {
    // console.log(memberCards[i]);
    if (memberCards[i]) {
      memberCards[i].remove();
    }
  }
  for (let i = 5; i < member.length; i++) {
    const newCard = document.createElement("div");
    newCard.className = "cards";

    // 새로운 카드의 콘텐츠 추가

    newCard.innerHTML =
      `
    <div class="hover">
      <p>` +
      member[i].name +
      `</p>
    </div>
    <img
      src="./images/` +
      randomImg() +
      `.png"
      alt="New Member"
    />
  `;

    // console.log(i);
    content2.appendChild(newCard);
  }
  // 새로운 카드를 컨테이너에 추가

  memberCardsReload();
};

const fetchCollectionData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "members"));

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    // console.log(data);
    // console.log(data);

    data.forEach((x, i) => {
      member[i + 5] = {
        name: x.username,
        mbti: x.mbti,
        hobby: x.hobby,
        likes: x.likes,
        tmi: x.tmi,
        vlogLink: x.blog,
        gitLink: x.git,
        imageSrc: x.image,
        heart: "♡",
      };
    });

    // console.log(member);

    // member
  } catch (error) {
    console.error("Error fetching documents: ", error);
  }
};
