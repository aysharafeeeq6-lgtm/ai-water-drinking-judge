/* ==========================================================
   AI Water Drinking Judge - Comedy Edition (script.js)
   ==========================================================
   This script runs our hilarious, intentionally useless AI judge.
   Zero medical advice, 100% comedy!
   ========================================================== */

// ==========================================================
// STEP 1: SELECTING HTML ELEMENTS
// Grab input elements and display areas from index.html
// ==========================================================
const nameInput = document.getElementById("nameInput");
const glassesInput = document.getElementById("glassesInput");
const ageInput = document.getElementById("ageInput");
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");

// Buttons
const judgeBtn = document.getElementById("judgeBtn");
const rejudgeBtn = document.getElementById("rejudgeBtn");

// Water Glass Visual elements
const waterLiquid = document.getElementById("waterLiquid");
const currentGlassesDisplay = document.getElementById("currentGlassesDisplay");

// Result Card elements
const resultBox = document.getElementById("resultBox");
const placeholderText = document.getElementById("placeholderText");
const resultContent = document.getElementById("resultContent");
const personTag = document.getElementById("personTag");
const resultBadge = document.getElementById("resultBadge");
const resultTitle = document.getElementById("resultTitle");
const resultMessage = document.getElementById("resultMessage");
const statScore = document.getElementById("statScore");
const statCategory = document.getElementById("statCategory");
const statConfidence = document.getElementById("statConfidence");


// ==========================================================
// STEP 2: 25 HILARIOUS, INTENTIONALLY USELESS VERDICTS
// A rich list of comedy judgments to randomly choose from.
// ==========================================================
const funnyVerdicts = [
  {
    title: "⚖️ VERDICT: HYDRATION CRIMINAL",
    judgment: "You attacked that glass like it owed you money. The water was completely innocent, yet you showed zero mercy.",
    score: "9.2 / 10",
    category: "Crime Level: EXTREME",
    badge: "GUILTY AS CHARGED"
  },
  {
    title: "🌵 VERDICT: HONORARY CACTUS",
    judgment: "Scientists are amazed your internal organs haven't turned into powdered chalk. A potted plastic plant has absorbed more moisture today.",
    score: "1.4 / 10",
    category: "Hazard: Sahara Drought",
    badge: "DUST BOWL"
  },
  {
    title: "🌊 VERDICT: TSUNAMI HAZARD",
    judgment: "You drank so much water that marine biologists are currently scouting your stomach for endangered coral reefs.",
    score: "10.5 / 10",
    category: "Threat: Flash Flood",
    badge: "AQUATIC THREAT"
  },
  {
    title: "💀 VERDICT: MUMMY IN DISGUISE",
    judgment: "Your cells are currently holding a candlelight vigil begging for a single droplet of moisture. Please drink something.",
    score: "2.1 / 10",
    category: "State: Ancient Relic",
    badge: "DESICCATED"
  },
  {
    title: "☕ VERDICT: 98% COFFEE, 2% PANIC",
    judgment: "Water? Never heard of her. Your bloodstream is 100% dark roast espresso and anxious, vibrating thoughts.",
    score: "3.8 / 10",
    category: "Fuel: Pure Caffeine",
    badge: "HIGH VOLTAGE"
  },
  {
    title: "🦭 VERDICT: SEA LION COSPLAYER",
    judgment: "You don't just drink water—you inhale it with the majestic, unhinged grace of an aquatic mammal at feeding time.",
    score: "9.7 / 10",
    category: "Species: Hydro-Beast",
    badge: "MAJESTIC"
  },
  {
    title: "🧃 VERDICT: SIPPER OF CHAOS",
    judgment: "You take one microscopic bird-sip every four hours and genuinely convince yourself you're a wellness influencer.",
    score: "4.5 / 10",
    category: "Delusion: Maximum",
    badge: "MICRO-SIPPER"
  },
  {
    title: "🌪️ VERDICT: GULPING GHOST",
    judgment: "We heard the aggressive gulping sounds from three zip codes away. Did you breathe at all, or just flood your chest?",
    score: "8.1 / 10",
    category: "Violation: Noise Hazard",
    badge: "TURBO GULP"
  },
  {
    title: "🧙‍♂️ VERDICT: HYDRATION ALCHEMIST",
    judgment: "You claim you drank water, but our AI suspects 80% of it was boba tea, energy drinks, and pure wishful thinking.",
    score: "5.0 / 10",
    category: "Potion: Very Suspicious",
    badge: "QUESTIONABLE"
  },
  {
    title: "🧊 VERDICT: CHILL OVERLORD",
    judgment: "You don't just drink water; you inspect the ice cubes with the solemn scrutiny of a Michelin-star sommelier.",
    score: "8.9 / 10",
    category: "Pretension: Premium",
    badge: "FROSTBYTE"
  },
  {
    title: "🐪 VERDICT: OFFICIALLY A CAMEL",
    judgment: "You haven't had a sip since last Tuesday and somehow you are still walking around functioning. Are you storing liquid in your spine?",
    score: "2.7 / 10",
    category: "Phenomenon: Humpback",
    badge: "DESERT NOMAD"
  },
  {
    title: "🏆 VERDICT: THE OLYMPIC GUZZLER",
    judgment: "If drinking room-temperature tap water were an Olympic sport, you'd bring home gold and a violently full bladder.",
    score: "10 / 10",
    category: "Class: Hydro-Chugger",
    badge: "GOLD MEDAL"
  },
  {
    title: "👻 VERDICT: HYDRATED BY OSMOSIS ONLY",
    judgment: "You genuinely believe that standing near a shower or looking at photographs of lakes counts toward your daily fluid intake.",
    score: "0.8 / 10",
    category: "Effort: Non-Existent",
    badge: "GHOST STATUS"
  },
  {
    title: "🦖 VERDICT: PREHISTORIC TAP BEAST",
    judgment: "You drank straight out of the bathroom faucet without a cup like a velociraptor discovering modern plumbing for the first time.",
    score: "7.3 / 10",
    category: "Etiquette: Jurassic",
    badge: "FERAL"
  },
  {
    title: "💧 VERDICT: WATER SNOB",
    judgment: "You know the exact mineral parts-per-million of your tap water. Please stop cornering people at parties to discuss alkaline filters.",
    score: "8.6 / 10",
    category: "Social Threat: Severe",
    badge: "SNOB ALERT"
  },
  {
    title: "🐸 VERDICT: SWAMP ROYALTY",
    judgment: "You belong on a damp lily pad wearing a tiny crown. Your hydration habits are eccentric, moist, and mildly alarming.",
    score: "7.9 / 10",
    category: "Biome: Mud Sanctuary",
    badge: "SWAMP LORD"
  },
  {
    title: "🚨 VERDICT: RESERVOIR THREAT LEVEL 5",
    judgment: "The municipal water authority has dispatched a squad car to monitor your kitchen sink. Back away from the tap slowly.",
    score: "9.9 / 10",
    category: "Risk: Municipal Drought",
    badge: "WANTED"
  },
  {
    title: "🧽 VERDICT: SENTIENT SPONGE",
    judgment: "Someone splashed two drops of liquid near you and you expanded by 400% without even blinking.",
    score: "8.4 / 10",
    category: "Material: Loofah Core",
    badge: "ABSORBENT"
  },
  {
    title: "🎭 VERDICT: HYDRATION FRAUD",
    judgment: "You lug around a gigantic 2-liter motivational water bottle all day, yet the water line hasn't moved 1 millimeter.",
    score: "3.2 / 10",
    category: "Lifestyle: Fake Fitness",
    badge: "IMPOSTOR"
  },
  {
    title: "🛸 VERDICT: ALIEN INFILTRATOR",
    judgment: "Our neural scanner indicates you don't even possess organs that process H2O. Please report back to the mother ship.",
    score: "1.0 / 10",
    category: "Origin: Sector 7",
    badge: "EXTRATERRESTRIAL"
  },
  {
    title: "⚡ VERDICT: OVERCLOCKED HYDRATOR",
    judgment: "You chugged 4 glasses in 12 seconds flat and now your body is vibrating through the floorboards at 144Hz.",
    score: "9.1 / 10",
    category: "Physics: Quantum Glitch",
    badge: "OVERCLOCKED"
  },
  {
    title: "🐢 VERDICT: REPTILIAN SLOW-SIPPER",
    judgment: "It took you 6 hours to finish half a mug of water. Glaciers melt faster than your swallowing reflex.",
    score: "3.9 / 10",
    category: "Velocity: Sub-Glacial",
    badge: "SLOW MOTION"
  },
  {
    title: "🍹 VERDICT: LIQUID DENIAL",
    judgment: "You counted the melted ice at the bottom of a fast-food soda cup as 2 glasses of pure water. The court rejects your claim.",
    score: "4.1 / 10",
    category: "Accounting: Embezzlement",
    badge: "FRAUD"
  },
  {
    title: "🦾 VERDICT: CYBORG SHORT-CIRCUIT",
    judgment: "You poured water near yourself and sparks shot out of your collar. Are you constructed from copper wires and Raspberry Pis?",
    score: "2.0 / 10",
    category: "Hardware: Corrupted",
    badge: "ERROR 404"
  },
  {
    title: "👑 VERDICT: EMPEROR OF H2O",
    judgment: "Water molecules bow in reverence when you enter the kitchen. You don't drink water; you conduct an aqueous symphony.",
    score: "10 / 10",
    category: "Royalty: Oceanic Crown",
    badge: "GOD-TIER"
  }
];

// Keep track of the last index so we don't repeat the same verdict twice in a row
let lastVerdictIndex = -1;


// ==========================================================
// STEP 3: WATER GLASS VISUAL FUNCTION
// Smoothly fills up the animated glass with water & bubbles.
// ==========================================================
function updateWaterGlassVisual(numberOfGlasses) {
  const count = Math.max(0, numberOfGlasses);
  const maxVisualGlasses = 12;

  // Calculate fill percentage (0% to 100%)
  const percentage = Math.min((count / maxVisualGlasses) * 100, 100);

  // Apply height transition
  waterLiquid.style.height = `${percentage}%`;

  // Update count text
  currentGlassesDisplay.textContent = count;
}


// ==========================================================
// STEP 4: STEPPER BUTTON LISTENERS (- and +)
// ==========================================================
decreaseBtn.addEventListener("click", () => {
  let currentValue = parseInt(glassesInput.value, 10) || 0;
  if (currentValue > 0) {
    currentValue -= 1;
    glassesInput.value = currentValue;
    updateWaterGlassVisual(currentValue);
  }
});

increaseBtn.addEventListener("click", () => {
  let currentValue = parseInt(glassesInput.value, 10) || 0;
  if (currentValue < 20) {
    currentValue += 1;
    glassesInput.value = currentValue;
    updateWaterGlassVisual(currentValue);
  }
});

// When the user directly types a number
glassesInput.addEventListener("input", () => {
  let value = parseInt(glassesInput.value, 10);
  if (isNaN(value) || value < 0) {
    value = 0;
  } else if (value > 20) {
    value = 20;
    glassesInput.value = 20;
  }
  updateWaterGlassVisual(value);
});


// ==========================================================
// STEP 5: GENERATE RANDOM COMEDY VERDICT
// Picks a random funny verdict and displays "[Name]'s Official Hydration Verdict"
// ==========================================================
function generateRandomVerdict() {
  // 1. Get the user's name (or fallback if empty)
  const rawName = nameInput.value.trim();
  const userName = rawName.length > 0 ? rawName : "Suspect";

  // 2. Pick a random verdict from the list, making sure it's different from the last one
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * funnyVerdicts.length);
  } while (randomIndex === lastVerdictIndex && funnyVerdicts.length > 1);

  lastVerdictIndex = randomIndex;
  const verdict = funnyVerdicts[randomIndex];

  // 3. Populate the results in the HTML
  personTag.textContent = `${userName}'s Official Hydration Verdict`;
  resultBadge.textContent = verdict.badge;
  resultTitle.textContent = verdict.title;
  resultMessage.textContent = `"${verdict.judgment}"`;
  statScore.textContent = verdict.score;
  statCategory.textContent = verdict.category;

  // Funny AI confidence messages
  const confidenceQuotes = [
    "99.9% Fabricated",
    "0 Brain Cells Used",
    "Certified by Nobody",
    "100% Fake Science",
    "Court Adjourned"
  ];
  const randomConfidence = confidenceQuotes[Math.floor(Math.random() * confidenceQuotes.length)];
  statConfidence.textContent = randomConfidence;

  // 4. Reveal the result box with an animation
  placeholderText.style.display = "none";
  resultContent.style.display = "flex";

  // Add the pop animation class, remove it after animation finishes so it can re-trigger
  resultContent.classList.remove("verdict-pop");
  void resultContent.offsetWidth; // Force browser DOM reflow
  resultContent.classList.add("verdict-pop");
}


// ==========================================================
// STEP 6: ATTACH EVENT LISTENERS TO BUTTONS
// ==========================================================

// "Judge My Water Intake" button click
judgeBtn.addEventListener("click", generateRandomVerdict);

// "JUDGE ME AGAIN" button click (generates another random verdict!)
rejudgeBtn.addEventListener("click", generateRandomVerdict);

// Initialize the water glass on page load
updateWaterGlassVisual(parseInt(glassesInput.value, 10) || 5);


// ==========================================================
// STEP 7: OPENING COVER / SPLASH SCREEN TRANSITION
// Smoothly hides the splash screen and reveals the main judge.
// ==========================================================
const splashScreen = document.getElementById("splashScreen");
const startBtn = document.getElementById("startBtn");

if (startBtn && splashScreen) {
  startBtn.addEventListener("click", () => {
    // Add the CSS class that triggers the smooth fade-out and scale
    splashScreen.classList.add("splash-hidden");

    // After the 0.45s transition completes, hide it completely from layout
    setTimeout(() => {
      splashScreen.style.display = "none";
    }, 450);
  });
}

