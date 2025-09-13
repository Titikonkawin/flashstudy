document.addEventListener('DOMContentLoaded', () => {
  const toggleDarkBtn = document.getElementById('toggle-dark');
  const startQuizBtn = document.getElementById('start-quiz');
  const quizContainer = document.getElementById('quiz-container');

  let isDarkMode = false;

  // สลับโหมดกลางคืน
  toggleDarkBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      toggleDarkBtn.textContent = '☀️ โหมดปกติ';
    } else {
      document.body.classList.remove('dark-mode');
      toggleDarkBtn.textContent = '🌙 โหมดกลางคืน';
    }
  });

  // ตัวอย่างคำถาม Quiz
  const quizData = [
    { question: "พื้นที่สามเหลี่ยมคำนวณยังไง?", answer: "1/2xฐานxสูง" },
    { question: "พีทาโกรัสคือสูตรอะไร?", answer: "a² + b² = c²" },
  ];

  let currentIndex = 0;
  let score = 0;

  // เริ่ม Quiz
  startQuizBtn.addEventListener('click', () => {
    currentIndex = 0;
    score = 0;
    quizContainer.innerHTML = '';
    showQuestion();
  });

  // แสดงคำถาม
  function showQuestion() {
    if (currentIndex >= quizData.length) {
      quizContainer.innerHTML = `<p>🎉 จบ Quiz! คะแนนของคุณ: ${score} / ${quizData.length}</p>`;
      return;
    }

    const q = quizData[currentIndex];

    quizContainer.innerHTML = `
      <p><b>คำถาม:</b> ${q.question}</p>
      <input type="text" id="answer-input" placeholder="พิมพ์คำตอบที่นี่" autofocus />
      <br/>
      <button id="submit-answer" class="btn" style="margin-top: 15px;">ส่งคำตอบ</button>
    `;

    document.getElementById('submit-answer').addEventListener('click', checkAnswer);
  }

  // ตรวจคำตอบ
  function checkAnswer() {
    const userAnswer = document.getElementById('answer-input').value.trim().toLowerCase();
    const correctAnswer = quizData[currentIndex].answer.trim().toLowerCase();

    if (userAnswer === correctAnswer) {
      alert('ถูกต้อง! 🎉');
      score++;
    } else {
      alert(`ผิด! คำตอบที่ถูกคือ: ${quizData[currentIndex].answer}`);
    }

    currentIndex++;
    showQuestion();
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const toggleDarkBtn = document.getElementById('toggle-dark');
  const startQuizBtn = document.getElementById('start-quiz');
  const quizContainer = document.getElementById('quiz-container');
  const subjectSelect = document.getElementById('subject');

  let isDarkMode = false;

  toggleDarkBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      toggleDarkBtn.textContent = '☀️ โหมดปกติ';
    } else {
      document.body.classList.remove('dark-mode');
      toggleDarkBtn.textContent = '🌙 โหมดกลางคืน';
    }
  });

  // ข้อมูลคำถามแยกตามวิชา
  const quizDataBySubject = {
    math: [
      { question: "พื้นที่สามเหลี่ยมคำนวณยังไง?", answer: "1/2xฐานxสูง" },
      { question: "พีทาโกรัสคือสูตรอะไร?", answer: "a² + b² = c²" },
    ],
    science: [
    { question: "น้ำเดือดที่อุณหภูมิเท่าไหร่?", answer: "100" },
    ],
    english: [
      { question: "คำว่า 'Hello' แปลว่าอะไร?", answer: "สวัสดี" },
      { question: "คำว่า 'Apple' หมายถึงอะไร?", answer: "แอปเปิล" },
    ],
  };

  let currentIndex = 0;
  let score = 0;
  let currentQuiz = [];

  startQuizBtn.addEventListener('click', () => {
    const selectedSubject = subjectSelect.value;
    currentQuiz = quizDataBySubject[selectedSubject] || [];
    currentIndex = 0;
    score = 0;
    quizContainer.innerHTML = '';
    if (currentQuiz.length === 0) {
      quizContainer.innerHTML = '<p>ยังไม่มีคำถามสำหรับวิชานี้</p>';
      return;
    }
    showQuestion();
  });

  function showQuestion() {
    if (currentIndex >= currentQuiz.length) {
      quizContainer.innerHTML = `<p>🎉 จบ Quiz! คะแนนของคุณ: ${score} / ${currentQuiz.length}</p>`;
      return;
    }

    const q = currentQuiz[currentIndex];

    quizContainer.innerHTML = `
      <p><b>คำถาม:</b> ${q.question}</p>
      <input type="text" id="answer-input" placeholder="พิมพ์คำตอบที่นี่" autofocus />
      <br/>
      <button id="submit-answer" class="btn" style="margin-top: 15px;">ส่งคำตอบ</button>
    `;

    document.getElementById('submit-answer').addEventListener('click', checkAnswer);
  }

  function checkAnswer() {
    const userAnswer = document.getElementById('answer-input').value.trim().toLowerCase();
    const correctAnswer = currentQuiz[currentIndex].answer.trim().toLowerCase();

    if (userAnswer === correctAnswer) {
      alert('ถูกต้อง! 🎉');
      score++;
    } else {
      alert(`ผิด! คำตอบที่ถูกคือ: ${currentQuiz[currentIndex].answer}`);
    }

    currentIndex++;
    showQuestion();
  }
});
