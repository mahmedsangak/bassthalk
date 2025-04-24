const questionsContainer = document.getElementById('questions-container');
const encouragement = document.getElementById('encouragement');
const progressText = document.getElementById('progress-text');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const totalQuestions = 30;
let currentPage = 1;

const encouragementMessages = [
  "ابدأ وبالتوفيق يا بطل! 🚀",
  "أول الغيث قطرة! ☁️",
  "أحسنت، كمّل كده! 💡",
  "يا سلام، أداء ممتاز! 🎉",
  "أنت بتفهم فعلاً! 🧠",
  "برافو يا عبقري! 👏",
  "خلاص قربنا ننجز! ⏳",
  "إنت نجم، فاضل القليل! ⭐",
  "السؤال الأخير! 👑"
];

function updateQuestions() {
  questionsContainer.innerHTML = "";

  const img = document.createElement('img');
  img.src = `${currentPage}.png`;
  img.alt = `سؤال ${currentPage}`;
  questionsContainer.appendChild(img);

  progressText.textContent = `السؤال ${currentPage} من ${totalQuestions}`;
  updateEncouragement(currentPage);
}

function updateEncouragement(current) {
  let index = Math.floor((current - 1) / 3); // كل 3 أسئلة رسالة
  encouragement.textContent = encouragementMessages[Math.min(index, encouragementMessages.length - 1)];
}

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    updateQuestions();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < totalQuestions) {
    currentPage++;
    updateQuestions();
  }
});

updateQuestions();

/* نافذة كلمة السر */
function showPasswordPopup() {
  document.getElementById('password-popup').style.display = 'flex';
  document.getElementById('pdf-password').value = '';
  document.getElementById('error-message').textContent = '';
}

function closePasswordPopup() {
  document.getElementById('password-popup').style.display = 'none';
}

function checkPassword() {
  const input = document.getElementById('pdf-password').value;
  if (input === "2899000") {
    // تحميل الملف
    const link = document.createElement('a');
    link.href = 're.pdf';
    link.download = 're.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    closePasswordPopup();
  } else {
    document.getElementById('error-message').textContent = "كلمة السر غير صحيحة!";
  }
}
