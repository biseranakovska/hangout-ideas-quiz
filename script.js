/* ==========================================================================
   TONIGHT'S DATE — logic
   Everything you'd want to customize (questions, wording, date ideas)
   lives in the two data blocks below: QUESTIONS and CATEGORIES.
   The code underneath just reads from them, so you can freely edit,
   add, or remove entries without touching the logic.
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. QUESTIONS
   Each question rates 1–5 on one "axis" of mood. Add/remove/edit freely —
   just make sure every axis you use here also appears on every category
   below, or the scoring will treat it as a middle value (3).
   -------------------------------------------------------------------------- */
const QUESTIONS = [
  {
    axis: "energy",
    text: "Kolku energija imash?",
    low: "Gazo ne mi se mrda",
    high: "Mozhi i da trchame",
  },
  {
    axis: "environment",
    text: "Nadvor ili vnatre?",
    low: "Vnatre, na toplo",
    high: "Avanturist sum, nadvor",
  },
  {
    axis: "car",
    text: "Pesh ili so kola?",
    low: "Mi trebat chekori",
    high: "Najubo ti vozish ;)",
  },
  {
    axis: "budget",
    text: "Budget?",
    low: "Pivo is the best i can do",
    high: "Imam stazh i mi se troshi",
  },
  {
    axis: "social",
    text: "Socializing?",
    low: "Not today",
    high: "Kamarite level",
  },
  {
    axis: "novelty",
    text: "Neshto standard ili neshto novo?",
    low: "The usual",
    high: "Rekov avanturist sum",
  },
  {
    axis: "hunger",
    text: "Kolku si gladna?",
    low: "Full to the brim",
    high: "Bi te lapnala",
  },
];

/* --------------------------------------------------------------------------
   2. CATEGORIES
   Each category has an "ideal" score (1–5) on every axis above — this is
   the mood that category best fits. The quiz answers are compared against
   every category and the closest match wins.

   Each category also has a list of concrete "ideas". Every idea can
   optionally set its own budget/social level (1–5) so the app can pick
   the specific idea that best fits those two answers; if you skip them
   they default to the category's own ideal.
   -------------------------------------------------------------------------- */
const CATEGORIES = [
  {
    name: "Site Doma",
    emoji: "🕯️",
    ideal: {
      energy: 1,
      environment: 1,
      car: 1,
      budget: 1,
      social: 1,
      novelty: 1,
      hunger: 1,
    },
    ideas: [
      {
        title: "Minecraft Night",
        desc: "Good ol' minecraft/or other game night",
      },
    ],
  },
  {
    name: "Café & Chill",
    emoji: "☕",
    ideal: {
      energy: 3,
      environment: 2,
      car: 1,
      budget: 1,
      social: 4,
      novelty: 1,
      hunger: 1,
    },
    ideas: [
      {
        title: "Vezilka & Other",
        desc: "Same old, same old. Vezilka, radost, porta jazz & similar. Tamu ti bara dushata",
      },
    ],
  },
  {
    name: "Kakao",
    emoji: "☕",
    ideal: {
      energy: 3,
      environment: 5,
      car: 2,
      budget: 1,
      social: 1,
      novelty: 4,
      hunger: 2,
    },
    ideas: [
      {
        title: "Good ol' Kakao",
        desc: "Kakaoto go pram fenomenalno. + plazma",
      },
    ],
  },
  {
    name: "Order-to-go",
    emoji: "🍕",
    ideal: {
      energy: 4,
      environment: 5,
      car: 1,
      budget: 2,
      social: 1,
      novelty: 1,
      hunger: 4,
    },
    ideas: [
      { title: "Pizza-to-go", desc: "Pizza? Ordered? Patot? Pod noze" },
      {
        title: "Hot Dog Tradition",
        desc: "Tradition renewal posle  2 godini.",
      },
      {
        title: "Sladoled",
        desc: "Da te zapoznam so mojot omilen sladoled (od GT).",
      },
      {
        title: "Mini Krofni (mmm)",
        desc: "Mini krofni-to-go samo ovaj pat bez Jovana.",
      },
    ],
  },
  {
    name: "Dinner",
    emoji: "🍷",
    ideal: {
      energy: 3,
      environment: 3,
      car: 1,
      budget: 5,
      social: 3,
      novelty: 5,
      hunger: 5,
    },
    ideas: [
      {
        title: "THE Il Baffo",
        desc: "Tonights the night. Dushata ti bara za vo italijanskoto.",
        budget: 5,
        social: 3,
      },
      {
        title: "Nov Restoran",
        desc: "Odime negde kaj sho nemame dvete/dolgo ojdeno",
      },
    ],
  },
  {
    name: "Sucker za Kola",
    emoji: "🌆",
    ideal: {
      energy: 2,
      environment: 4,
      car: 5,
      budget: 1,
      social: 1,
      novelty: 4,
      hunger: 1,
    },
    ideas: [
      {
        title: "Novaci",
        desc: "Been there done that, samo ovajpat podaleku",
      },
      {
        title: "Rek",
        desc: "Dolgo vreme nemame ojdeno, a nekoj denoj se bash za rek",
      },
      {
        title: "Trip Without a Destination",
        desc: "Samo ke vozime man, kaj sho ke ne odnesi patot",
      },
    ],
  },
  {
    name: "Umetnichka Dusha",
    emoji: "🎨",
    ideal: {
      energy: 5,
      environment: 5,
      car: 2,
      budget: 1,
      social: 2,
      novelty: 5,
      hunger: 1,
    },
    ideas: [
      {
        title: "Color Hunting",
        desc: "Odbirame boja i go fakjame patot. Color hunting so pobednik na krajot",
      },
      {
        title: "Draw Each Other",
        desc: "Nokjta e dolga, so crtanje i ta odma ke pomini",
      },
    ],
  },
  {
    name: "Umetnichka Dusha",
    emoji: "🎨",
    ideal: {
      energy: 3,
      environment: 5,
      car: 2,
      budget: 1,
      social: 2,
      novelty: 5,
      hunger: 1,
    },
    ideas: [
      {
        title: "Draw Each Other",
        desc: "Nokjta e dolga, so crtanje i ta odma ke pomini",
      },
    ],
  },
  {
    name: "(Smiren) Sucker za Kola",
    emoji: "🎨",
    ideal: {
      energy: 1,
      environment: 4,
      car: 5,
      budget: 1,
      social: 1,
      novelty: 5,
      hunger: 1,
    },
    ideas: [
      {
        title: "Movie Night v Kola",
        desc: "Running out of ideas, ova e the best i can do za tvojot picky-ass (/j). V kola so laptop ili telefon",
      },
    ],
  },
  {
    name: "Fun & Games",
    emoji: "🎳",
    ideal: {
      energy: 3,
      environment: 4,
      car: 1,
      budget: 2,
      social: 3,
      novelty: 2,
      hunger: 1,
    },
    ideas: [
      {
        title: "Billiard rematch",
        desc: "The loser chasti (barem kifla). Iako damn well znajme koj ke pobedi",
      },
    ],
  },
  {
    name: "Party",
    emoji: "🎉",
    ideal: {
      energy: 4,
      environment: 3,
      car: 1,
      budget: 3,
      social: 5,
      novelty: 2,
      hunger: 1,
    },
    ideas: [
      {
        title: "Kamarite",
        desc: "Ti se odi na zabava? Samo ako chastish ti",
      },
    ],
  },
  {
    name: "Party",
    emoji: "🎉",
    ideal: {
      energy: 4,
      environment: 3,
      car: 1,
      budget: 3,
      social: 5,
      novelty: 2,
      hunger: 1,
    },
    ideas: [
      {
        title: "Kamarite",
        desc: "Ti se odi na zabava? Samo ako chastish ti",
      },
    ],
  },
];

/* ==========================================================================
   State
   ========================================================================== */
const answers = {}; // { axis: value }
let currentIndex = 0;
let matchedCategory = null;
let sortedIdeas = [];
let ideaIndex = 0;

/* ==========================================================================
   DOM refs
   ========================================================================== */
const panels = {
  intro: document.getElementById("intro"),
  quiz: document.getElementById("quiz"),
  result: document.getElementById("result"),
};
const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const restartBtn = document.getElementById("restartBtn");

const qCountEl = document.getElementById("qCount");
const qTextEl = document.getElementById("qText");
const dotScaleEl = document.getElementById("dotScale");
const lowLabelEl = document.getElementById("lowLabel");
const highLabelEl = document.getElementById("highLabel");
const progressStripEl = document.getElementById("progressStrip");

const resultEmojiEl = document.getElementById("resultEmoji");
const resultTitleEl = document.getElementById("resultTitle");
const resultDescEl = document.getElementById("resultDesc");
const resultTagsEl = document.getElementById("resultTags");

/* ==========================================================================
   Sky — ambient stars (decorative, purely visual)
   ========================================================================== */
function buildSky() {
  const sky = document.getElementById("sky");
  const count = window.innerWidth < 480 ? 30 : 50;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.className = "star";
    const size = Math.random() * 2.5 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 4}s`;
    star.style.animationDuration = `${3 + Math.random() * 3}s`;
    frag.appendChild(star);
  }
  sky.appendChild(frag);
}

/* ==========================================================================
   Panel switching
   ========================================================================== */
function showPanel(name) {
  Object.entries(panels).forEach(([key, el]) => {
    el.classList.toggle("is-active", key === name);
  });
}

/* ==========================================================================
   Progress strip
   ========================================================================== */
function buildProgressStrip() {
  progressStripEl.innerHTML = "";
  QUESTIONS.forEach(() => {
    const frame = document.createElement("div");
    frame.className = "progress-frame";
    progressStripEl.appendChild(frame);
  });
}
function updateProgressStrip() {
  const frames = progressStripEl.children;
  for (let i = 0; i < frames.length; i++) {
    frames[i].classList.toggle("filled", i < currentIndex);
    frames[i].classList.toggle("current", i === currentIndex);
  }
}

/* ==========================================================================
   Render a question
   ========================================================================== */
function renderQuestion() {
  const q = QUESTIONS[currentIndex];
  qCountEl.textContent = `Prashanje ${currentIndex + 1} od ${QUESTIONS.length}`;
  qTextEl.textContent = q.text;
  lowLabelEl.textContent = q.low;
  highLabelEl.textContent = q.high;

  dotScaleEl.innerHTML = "";
  for (let value = 1; value <= 5; value++) {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "dot";
    dot.setAttribute("role", "radio");
    dot.setAttribute("aria-label", `${value} of 5`);
    dot.dataset.value = value;
    if (answers[q.axis] === value) {
      dot.classList.add("selected");
      dot.setAttribute("aria-checked", "true");
    } else {
      dot.setAttribute("aria-checked", "false");
    }
    dot.addEventListener("click", () => selectDot(q.axis, value));
    dotScaleEl.appendChild(dot);
  }

  nextBtn.disabled = answers[q.axis] === undefined;
  nextBtn.textContent =
    currentIndex === QUESTIONS.length - 1 ? "See my date idea" : "Next";
  backBtn.style.visibility = currentIndex === 0 ? "hidden" : "visible";

  updateProgressStrip();
}

function selectDot(axis, value) {
  answers[axis] = value;
  [...dotScaleEl.children].forEach((dot) => {
    const isSelected = Number(dot.dataset.value) === value;
    dot.classList.toggle("selected", isSelected);
    dot.setAttribute("aria-checked", isSelected ? "true" : "false");
  });
  nextBtn.disabled = false;
}

/* ==========================================================================
   Navigation
   ========================================================================== */
startBtn.addEventListener("click", () => {
  showPanel("quiz");
  currentIndex = 0;
  buildProgressStrip();
  renderQuestion();
});

backBtn.addEventListener("click", () => {
  if (currentIndex === 0) return;
  currentIndex--;
  renderQuestion();
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < QUESTIONS.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    computeResult();
    showPanel("result");
  }
});

restartBtn.addEventListener("click", () => {
  Object.keys(answers).forEach((k) => delete answers[k]);
  currentIndex = 0;
  matchedCategory = null;
  sortedIdeas = [];
  ideaIndex = 0;
  showPanel("intro");
});

shuffleBtn.addEventListener("click", () => {
  if (sortedIdeas.length <= 1) return;
  ideaIndex = (ideaIndex + 1) % sortedIdeas.length;
  renderIdea(sortedIdeas[ideaIndex]);
});

/* ==========================================================================
   Scoring
   Distance-based match: the category whose "ideal" profile is closest
   to the six answers (by simple Euclidean distance) wins. Ties broken
   at random so repeat plays don't always land the same place.
   ========================================================================== */
function axisDistance(profileA, profileB, axes) {
  let sumSquares = 0;
  axes.forEach((axis) => {
    const a = profileA[axis] ?? 3;
    const b = profileB[axis] ?? 3;
    sumSquares += (a - b) ** 2;
  });
  return Math.sqrt(sumSquares);
}

function computeResult() {
  const axes = QUESTIONS.map((q) => q.axis);

  let best = [];
  let bestDistance = Infinity;
  CATEGORIES.forEach((cat) => {
    const d = axisDistance(answers, cat.ideal, axes);
    if (d < bestDistance - 0.0001) {
      bestDistance = d;
      best = [cat];
    } else if (Math.abs(d - bestDistance) < 0.0001) {
      best.push(cat);
    }
  });
  matchedCategory = best[Math.floor(Math.random() * best.length)];

  // Sort this category's ideas by how closely their budget/social level
  // (if set) matches the user's answers, so the first idea shown is the
  // best individual fit, not just a random pick from the category.
  sortedIdeas = [...matchedCategory.ideas].sort((a, b) => {
    const da = axisDistance(
      {
        budget: a.budget ?? matchedCategory.ideal.budget,
        social: a.social ?? matchedCategory.ideal.social,
      },
      { budget: answers.budget, social: answers.social },
      ["budget", "social"],
    );
    const db = axisDistance(
      {
        budget: b.budget ?? matchedCategory.ideal.budget,
        social: b.social ?? matchedCategory.ideal.social,
      },
      { budget: answers.budget, social: answers.social },
      ["budget", "social"],
    );
    return da - db;
  });
  ideaIndex = 0;
  renderIdea(sortedIdeas[0]);
}

function renderIdea(idea) {
  resultEmojiEl.textContent = matchedCategory.emoji;
  resultTitleEl.textContent = idea.title;
  resultDescEl.textContent = idea.desc;
  resultTagsEl.textContent = matchedCategory.name;

  // retrigger the "develop" animation on the polaroid photo
  const photo = document.getElementById("polaroidPhoto");
  photo.style.animation = "none";
  // eslint-disable-next-line no-unused-expressions
  photo.offsetHeight; // force reflow
  photo.style.animation = "";
}

/* ==========================================================================
   Init
   ========================================================================== */
buildSky();