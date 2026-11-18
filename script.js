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

let moveCount = 0; // عداد الحركات
let yesScale = 1;  // حجم زر Yes المبدئي

function moveNoButton() {
    moveCount++; // زيادة العداد مع كل محاولة

    if (moveCount <= 7) {
        // تغيير النص أولاً عشان نحسب عرض الزرار الجديد صح
        noBtn.innerText = noMessages[moveCount - 1];

        // حساب أقصى مساحة آمنة داخل الشاشة بترك هامش 20 بيكسل من الأطراف
        const padding = 20;
        const maxX = window.innerWidth - noBtn.offsetWidth - padding;
        const maxY = window.innerHeight - noBtn.offsetHeight - padding;

        // توليد إحداثيات عشوائية مضمونة داخل الشاشة
        const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
        const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

        // استخدام fixed بدل absolute عشان يتحرك بالنسبة للشاشة كلها بدقة
        noBtn.style.position = 'fixed';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';

        // تكبير زر Yes تدريجياً بشكل متناسق
        yesScale += 0.25;
        yesBtn.style.transform = `scale(${yesScale})`;

    } else {
        // بعد ما يتحرك 7 مرات، في المرة التامنة بيختفي تماماً
        noBtn.style.display = 'none';
    }
}

function sayYes() {
    questionContent.style.display = 'none';
    resultContent.style.display = 'block';
}
