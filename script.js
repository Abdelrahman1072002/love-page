const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn'); // تأكد إنك مديله ID في الـ HTML
const questionContent = document.getElementById('question-content');
const resultContent = document.getElementById('result-content');

// مصفوفة فيها نصوص بتتغير كل ما يدوس على No
const noMessages = [
    "لا، فكر تاني! 🥺",
    "متأكد؟! دي الكاميرا مفتوحة 😂",
    "خلاص، مفيش هرب بقى دوس Yes! 😌"
];

let clickCount = 0; // عداد لحساب عدد مرات الضغط على No

function moveNoButton() {
    clickCount++; // زيادة عدد المحاولات

    if (clickCount <= 2) {
        // لو لسه أول أو تاني مرة، حرك الزرار مكان عشوائي
        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.style.position = 'absolute';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';

        // تغيير الكلام جوه زرار No حسب المحاولة
        noBtn.innerText = noMessages[clickCount - 1];

        // تكبير زر الـ Yes شوية مع كل محاولة (بنكبر الـ padding أو الـ font-size)
        let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        yesBtn.style.fontSize = (currentSize + 4) + 'px';
        
        let currentPadding = parseFloat(window.getComputedStyle(yesBtn).padding);
        yesBtn.style.padding = (currentPadding + 2) + 'px';

    } else {
        // بعد المرتين، الزرار بيثبت في مكانه ومش بيتحرك تاني، وممكن نثبت رسالة نهائية
        noBtn.innerText = "خلاص استسلم بقى! 💔";
        noBtn.style.pointerEvents = 'none'; // بنقفل الـ click عليه نهائي لو حابب
    }
}

function sayYes() {
    // إخفاء محتوى السؤال وإظهار محتوى النتيجة
    questionContent.style.display = 'none';
    resultContent.style.display = 'block';
}
