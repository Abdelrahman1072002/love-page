const noBtn = document.getElementById('no-btn');
const questionContent = document.getElementById('question-content');
const resultContent = document.getElementById('result-content');

function moveNoButton() {
    // احصل على أبعاد نافذة العرض (viewport)
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    // توليد إحداثيات عشوائية
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // تطبيق الإحداثيات الجديدة لتحريك الزر
    noBtn.style.position = 'absolute'; // تأكد من أن الموضع absolute
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

function sayYes() {
    // إخفاء محتوى السؤال وإظهار محتوى النتيجة
    questionContent.style.display = 'none';
    resultContent.style.display = 'block';
}