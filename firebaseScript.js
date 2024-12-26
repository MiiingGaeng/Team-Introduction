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

let doc = {};
document.querySelector("#submit").addEventListener("click", () => {
  doc = {};
  let user = document.querySelectorAll(".textInput");
  let userArr = [];
  user.forEach((a) => {
    console.log(a.value);

    if (a.value) {
      userArr.push(a.value);
    }
    console.log(userArr);
  });
  if (userArr.length == 7) {
    doc = {
      username: userArr[0],
      mbti: userArr[1],
      reason: userArr[2],
      hobby: userArr[3],
      tmi: userArr[4],
      blog: userArr[5],
      git: userArr[6],
    };
    console.log(doc);
  } else {
    alert("입력 확인해주세요.");
  }
  addData();
});

const addData = async () => {
  await addDoc(collection(db, "members"), doc);
};

// $("#id").click(async function () {
//   let doc = {};
//   await addDoc(collection(db, "콜렉션이름"), doc);
// });

// let docs = await getDocs(collection(db, "콜렉션이름"));
// docs.forEach((doc) => {
//   let row = doc.data();
//   console.log(row);
// });
