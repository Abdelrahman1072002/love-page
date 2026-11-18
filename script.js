const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const questionContent = document.getElementById('question-content');
const resultContent = document.getElementById('result-content');

const noMessages = [
    "لا، فكر تاني! 🥺",
    "متأكد؟! دي الكاميرا مفتوحة 😂",
    "حرام عليك، دوس Yes بقى! 😭",
    "بتهزر صح؟ كفاية عناد! 🙄",
    "خلاص مبقاش فيه أمل فيك.. 💔",
    "الزرار ده قرب يختفي على فكرة! ⚠️",
    "آخر فرصة ليك.. باي باي! 👋"
];

let moveCount = 0;
let yesScale = 1;

function moveNoButton() {
    moveCount++;

    if (moveCount <= 7) {
        noBtn.innerText = noMessages[moveCount - 1];

        const padding = 20;
        const maxX = window.innerWidth - noBtn.offsetWidth - padding;
        const maxY = window.innerHeight - noBtn.offsetHeight - padding;

        const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
        const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

        noBtn.style.position = 'fixed';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';

        yesScale += 0.25;
        yesBtn.style.transform = `scale(${yesScale})`;

    } else {
        noBtn.style.display = 'none';
    }
}

function sayYes() {
    questionContent.style.display = 'none';
    resultContent.style.display = 'block';
}
