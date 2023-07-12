const questionsContainer = document.querySelector("#questions");
const questionHeaders = document.querySelector("#question-title");
const questionChoices = document.querySelector("#choices");
const timerEl = document.querySelector("#time");
const startEl = document.querySelector("#start-screen");
const startBtn = document.querySelector("#start");
const endEl = document.querySelector("#end-screen");
const finalScoreEl = document.querySelector("#final-score");
const initialsInput = document.querySelector("#initials");
const submitBtn = document.querySelector("#submit");

const questions = [
  {
    question:
      "What part of the HTML code would you link a CSS stylesheet under?",
    answer: "<head>",
    options: ["<body>", "<main>", "<head>", "<footer>"],
  },
  {
    question:
      "What JavaScript code would you use to select an id tag from the HTML code?",
    answer: "document.querySelector",
    options: [
      "document.querySelector",
      "addEventListener",
      "appendChild",
      "localStorage.setItem",
    ],
  },
  {
    question:
      "What git command would you use to create a copy of an existing Git repository?",
    answer: "git clone",
    options: [
      "git commit -m",
      "git push origin main",
      "git checkout",
      "git clone",
    ],
  },
  {
    question:
      "True/False: In order to create a new repository on GitHub, you must have an account.",
    answer: "True",
    options: ["True", "False"],
  },
  {
    question:
      "What JavaScript code would you use to execute a command on the webpage?",
    answer: "function",
    options: ["let", "function", "const", "var"],
  },
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 75;

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  startBtn.style.display = "none";
  startEl.style.display = "none";
  questionsContainer.style.display = "block";
  showQuestion();
  startTimer();
}

function showQuestion() {
  const question = questions[currentQuestion];
  questionHeaders.textContent = question.question;

  questionChoices.innerHTML = "";
}

function nextQuestion() {}

function startTimer() {
  timerEl = setInterval(() => {
    timeLeft--;
    if (timeLeft === 0) {
      clearInterval(timerEl);
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {}
