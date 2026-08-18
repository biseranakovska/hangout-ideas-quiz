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
    text: "How much energy do you have tonight?",
    low: "Barely enough to move",
    high: "Ready to run around",
  },
  {
    axis: "environment",
    text: "Indoors, or out under the sky?",
    low: "Cozy indoors",
    high: "Outside, always",
  },
  {
    axis: "romance",
    text: "How romantic are you feeling?",
    low: "Keep it light & fun",
    high: "Full swoon mode",
  },
  {
    axis: "budget",
    text: "What's tonight's budget vibe?",
    low: "Free or nearly free",
    high: "Let's splurge a little",
  },
  {
    axis: "social",
    text: "Just us, or out in the buzz?",
    low: "Just the two of us",
    high: "Out where it's lively",
  },
  {
    axis: "novelty",
    text: "Comfort favorite, or something new?",
    low: "Our usual favorite",
    high: "Something we've never done",
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
    name: "Cozy Night In",
    emoji: "🕯️",
    ideal: { energy: 1, environment: 1, romance: 3, budget: 1, social: 1, novelty: 1 },
    ideas: [
      { title: "Blanket Fort Movie Marathon", desc: "Build a pillow fort, pick a mini film festival, and don't leave the couch until the credits roll on the last one." },
      { title: "Cook a New Recipe Together", desc: "Pick a dish neither of you has made before, put on a playlist, and turn the kitchen into the date." },
      { title: "Board Game & Snack Night", desc: "Dig out the games you never get around to, make a snack board, and let the competitive side out." },
      { title: "Slow Morning-After Breakfast, Tonight", desc: "Make brinner — pancakes, eggs, all of it — and eat it by candlelight like it's the fanciest thing in the world." },
    ],
  },
  {
    name: "Comfort Classic",
    emoji: "🥂",
    ideal: { energy: 2, environment: 2, romance: 3, budget: 2, social: 2, novelty: 1 },
    ideas: [
      { title: "Revisit Your First Date Spot", desc: "Go back to wherever it all started, and notice what's changed since then — including you two." },
      { title: "Order the Usual, Watch the Usual", desc: "Get takeout from your go-to place and rewatch the show or movie you always come back to." },
      { title: "Recreate a Favorite Memory", desc: "Pick a date you both loved and do it again, on purpose, just because it was good the first time." },
    ],
  },
  {
    name: "Café & Chill",
    emoji: "☕",
    ideal: { energy: 2, environment: 3, romance: 2, budget: 2, social: 2, novelty: 2 },
    ideas: [
      { title: "Café Hop for the Best Latte in Town", desc: "Pick two or three cafés you've been meaning to try and rate the drinks as you go." },
      { title: "Bookstore Browsing + Coffee Date", desc: "Wander a bookstore, pick something for each other, then read the first chapter together over coffee." },
      { title: "Bakery Crawl", desc: "Small portions from a few different bakeries beats one big dessert — turn it into a taste test." },
    ],
  },
  {
    name: "Romantic Dinner",
    emoji: "🍷",
    ideal: { energy: 2, environment: 2, romance: 5, budget: 4, social: 3, novelty: 3 },
    ideas: [
      { title: "Candlelit Dinner at Home", desc: "Dim the lights, put the phones away, and make the meal feel like an occasion, no reservation needed.", budget: 2, social: 1 },
      { title: "Finally Book That Restaurant", desc: "The one you've both been saying 'we should go there' about for months — tonight's the night.", budget: 5, social: 3 },
      { title: "Rooftop Dinner With a View", desc: "Find the best view in town and eat somewhere above the noise of the street.", budget: 4, social: 3 },
      { title: "Wine & Cheese Tasting Night", desc: "A small spread, a few bottles to compare, and no rush to be anywhere else.", budget: 3, social: 2 },
    ],
  },
  {
    name: "Outdoor Adventure",
    emoji: "🌲",
    ideal: { energy: 5, environment: 5, romance: 2, budget: 3, social: 2, novelty: 4 },
    ideas: [
      { title: "Sunset Hike", desc: "Time a trail so you reach the top just as the sky starts to change color." },
      { title: "Bike Ride to Somewhere New", desc: "Pick a destination neither of you has biked to before and make the ride part of the date." },
      { title: "Kayaking or Paddleboarding", desc: "Get out on the water for an afternoon — it's harder to be distracted by your phone out there." },
      { title: "Stargazing Picnic", desc: "Drive somewhere the city lights fade, bring blankets and snacks, and just look up for a while." },
    ],
  },
  {
    name: "City Buzz Night Out",
    emoji: "🌆",
    ideal: { energy: 4, environment: 4, romance: 2, budget: 4, social: 5, novelty: 3 },
    ideas: [
      { title: "Live Music or a Local Gig", desc: "Find whoever's playing nearby tonight and go, even if you've never heard of the act." },
      { title: "Bar Hopping in a New Neighborhood", desc: "Pick a part of town you don't usually go to and let one drink lead to the next spot." },
      { title: "Night Market or Street Food Crawl", desc: "Skip the sit-down meal — graze your way through a market instead." },
      { title: "Dancing Somewhere New", desc: "Find a place with music you don't usually listen to and just move." },
    ],
  },
  {
    name: "Spontaneous New Experience",
    emoji: "🎨",
    ideal: { energy: 3, environment: 3, romance: 3, budget: 3, social: 3, novelty: 5 },
    ideas: [
      { title: "Pottery or Paint Night", desc: "Sign up for a walk-in class and make something you'll both keep, badly or beautifully." },
      { title: "Try a Cuisine You've Never Had", desc: "Pick a cuisine that's completely new to both of you and order enough to share everything." },
      { title: "Take a Random Stop and Explore", desc: "Get on a bus or train, get off somewhere you've never been, and see what you find." },
      { title: "Escape Room Challenge", desc: "An hour of solving things together under a countdown — good test of teamwork." },
    ],
  },
  {
    name: "Playful & Fun",
    emoji: "🎳",
    ideal: { energy: 4, environment: 3, romance: 1, budget: 2, social: 3, novelty: 3 },
    ideas: [
      { title: "Mini Golf Showdown", desc: "Loser buys ice cream. That's the whole rule and the whole point." },
      { title: "Arcade Night", desc: "Rack up tickets, be way too competitive about it, and see who walks out with the better prize." },
      { title: "Bowling Battle", desc: "Bad form encouraged. It's funnier that way." },
      { title: "Trampoline or Amusement Park", desc: "Pick the most ridiculous ride or activity there and do it first." },
    ],
  },
];

/* ==========================================================================
   State
   ========================================================================== */
const answers = {};        // { axis: value }
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
  qCountEl.textContent = `Question ${currentIndex + 1} of ${QUESTIONS.length}`;
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
  nextBtn.textContent = currentIndex === QUESTIONS.length - 1 ? "See my date idea" : "Next";
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
      { budget: a.budget ?? matchedCategory.ideal.budget, social: a.social ?? matchedCategory.ideal.social },
      { budget: answers.budget, social: answers.social },
      ["budget", "social"]
    );
    const db = axisDistance(
      { budget: b.budget ?? matchedCategory.ideal.budget, social: b.social ?? matchedCategory.ideal.social },
      { budget: answers.budget, social: answers.social },
      ["budget", "social"]
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
