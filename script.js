const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn'); // تأكد من إعطاء زر Yes هذا الـ ID في الـ HTML
const questionContent = document.getElementById('question-content');
const resultContent = document.getElementById('result-content');

// مصفوفة بالنصوص المتغيرة كل ما المستخدم يحاول يدوس No
const noMessages = [
    "لا، فكر تاني! 🥺",
    "متأكد؟! دي الكاميرا مفتوحة 😂",
    "حرام عليك، دوس Yes بقى! 😭",
    "بتهزر صح؟ كفاية عناد! 🙄",
    "خلاص مبقاش فيه أمل فيك.. 💔",
    "الزرار ده قرب يختفي على فكرة! ⚠️",
    "أنت الي جبته لنفسك بقى.. باي باي! 👋"
];

let clickCount = 0; // عداد المحاولات

function moveNoButton() {
    clickCount++; // زيادة عداد الضغطات

    if (clickCount <= 7) {
        // تحريك الزرار لمكان عشوائي داخل الشاشة
        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.style.position = 'absolute';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';

        // تغيير النص جوه زرار No (بناءً على العداد، ولو زاد عن عدد الرسائل بياخد أخر رسالة)
        let messageIndex = Math.min(clickCount - 1, noMessages.length - 1);
        noBtn.innerText = noMessages[messageIndex];

        // تكبير زر الـ Yes تدريجياً مع كل محاولة
        let currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        yesBtn.style.fontSize = (currentSize + 3) + 'px';
        
        let currentPadding = parseFloat(window.getComputedStyle(yesBtn).padding);
        yesBtn.style.padding = (currentPadding + 2) + 'px';

    } else {
        // بعد المحاولة السابعة، زر No هيختفي تماماً!
        noBtn.style.display = 'none';
        
        // ممكن كمان نخلي زر Yes ياخد مساحة أكبر أو يلمع
        yesBtn.style.transform = 'scale(1.1)';
    }
}

function sayYes() {
    // إخفاء محتوى السؤال وإظهار محتوى النتيجة
    questionContent.style.display = 'none';
    resultContent.style.display = 'block';
}
