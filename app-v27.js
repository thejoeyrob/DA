import { QUESTIONS } from './questions.js';

const STORAGE_KEY = 'ellerbys-trakway-trivia-v25';
const SETTINGS_KEY = 'ellerbys-trakway-trivia-settings-v3';
const TEAM_DATA = {
  lion: { id: 'lion', name: 'Team Lion', short: 'Lion', shield: './team-lion.png' },
  sabre: { id: 'sabre', name: 'Team Sabre-X', short: 'Sabre-X', shield: './team-sabre-x.png' },
  solo: { id: 'solo', name: 'Solo Run', short: 'Solo', shield: './game-show-badge.png' }
};

const BANTER = {
  startLion: [
    { id: "jon-01", image: "./host-welcome.png", audio: "./jon-chesterfield-v2-01.mp3", text: "Now then, youth." },
    { id: "jon-02", image: "./host-think.png", audio: "./jon-chesterfield-v2-02.mp3", text: "Reet, let's crack on." },
    { id: "jon-03", image: "./host-welcome.png", audio: "./jon-chesterfield-v2-03.mp3", text: "Ey up, tha's away." },
  ],
  startSabre: [
    { id: "jon-01", image: "./host-welcome.png", audio: "./jon-chesterfield-v2-01.mp3", text: "Now then, youth." },
    { id: "jon-02", image: "./host-think.png", audio: "./jon-chesterfield-v2-02.mp3", text: "Reet, let's crack on." },
    { id: "jon-04", image: "./host-welcome.png", audio: "./jon-chesterfield-v2-04.mp3", text: "Go on then, mi duck." },
  ],
  soloStart: [
    { id: "jon-63", image: "./host-welcome.png", audio: "./jon-chesterfield-v2-63.mp3", text: "Solo job, youth." },
  ],
  question: [
    { id: "jon-05", image: "./host-ask.png", audio: "./jon-chesterfield-v2-05.mp3", text: "Get thi sen ready." },
    { id: "jon-06", image: "./host-think.png", audio: "./jon-chesterfield-v2-06.mp3", text: "Reet, have a think." },
    { id: "jon-07", image: "./host-ask.png", audio: "./jon-chesterfield-v2-07.mp3", text: "Don't rush it, youth." },
    { id: "jon-08", image: "./host-think.png", audio: "./jon-chesterfield-v2-08.mp3", text: "Use thi noggin." },
    { id: "jon-09", image: "./host-explain.png", audio: "./jon-chesterfield-v2-09.mp3", text: "Tha knows this one." },
    { id: "jon-10", image: "./host-think.png", audio: "./jon-chesterfield-v2-10.mp3", text: "Come on, tha's got it." },
    { id: "jon-11", image: "./host-explain.png", audio: "./jon-chesterfield-v2-11.mp3", text: "Have a proper look." },
    { id: "jon-12", image: "./host-ask.png", audio: "./jon-chesterfield-v2-12.mp3", text: "Think on, youth." },
    { id: "jon-13", image: "./host-ask.png", audio: "./jon-chesterfield-v2-13.mp3", text: "Don't get mardy now." },
    { id: "jon-14", image: "./host-think.png", audio: "./jon-chesterfield-v2-14.mp3", text: "Keep it simple, duck." },
    { id: "jon-15", image: "./host-ask.png", audio: "./jon-chesterfield-v2-15.mp3", text: "What's tha reckon then?" },
  ],
  clue: [
    { id: "jon-16", image: "./host-hint.png", audio: "./jon-chesterfield-v2-16.mp3", text: "Go on, pick one." },
    { id: "jon-17", image: "./host-hint.png", audio: "./jon-chesterfield-v2-17.mp3", text: "Choices are up." },
    { id: "jon-18", image: "./host-explain.png", audio: "./jon-chesterfield-v2-18.mp3", text: "Half a panel, youth." },
    { id: "jon-19", image: "./host-hint.png", audio: "./jon-chesterfield-v2-19.mp3", text: "Take thi hint then." },
    { id: "jon-20", image: "./host-think.png", audio: "./jon-chesterfield-v2-20.mp3", text: "Reet, have a gander." },
    { id: "jon-21", image: "./host-hint.png", audio: "./jon-chesterfield-v2-21.mp3", text: "One of them's reet." },
    { id: "jon-22", image: "./host-hint.png", audio: "./jon-chesterfield-v2-22.mp3", text: "Don't overcook it." },
  ],
  review: [
    { id: "jon-23", image: "./host-explain.png", audio: "./jon-chesterfield-v2-23.mp3", text: "Answer's up, youth." },
    { id: "jon-24", image: "./host-think.png", audio: "./jon-chesterfield-v2-24.mp3", text: "Reet, that's why." },
    { id: "jon-25", image: "./host-explain.png", audio: "./jon-chesterfield-v2-25.mp3", text: "Bank that one, duck." },
    { id: "jon-26", image: "./host-think.png", audio: "./jon-chesterfield-v2-26.mp3", text: "Remember that bit." },
    { id: "jon-27", image: "./host-explain.png", audio: "./jon-chesterfield-v2-27.mp3", text: "That's worth knowing." },
  ],
  correct: [
    { id: "jon-28", image: "./host-correct.png", audio: "./jon-chesterfield-v2-28.mp3", text: "Spot on, youth." },
    { id: "jon-29", image: "./host-correct.png", audio: "./jon-chesterfield-v2-29.mp3", text: "Bang on, duck." },
    { id: "jon-30", image: "./host-celebrate.png", audio: "./jon-chesterfield-v2-30.mp3", text: "Reet answer." },
    { id: "jon-31", image: "./host-correct.png", audio: "./jon-chesterfield-v2-31.mp3", text: "Panel in. Lovely." },
    { id: "jon-32", image: "./host-celebrate.png", audio: "./jon-chesterfield-v2-32.mp3", text: "That's more like it." },
    { id: "jon-33", image: "./host-correct.png", audio: "./jon-chesterfield-v2-33.mp3", text: "Tha's flying now." },
    { id: "jon-34", image: "./host-celebrate.png", audio: "./jon-chesterfield-v2-34.mp3", text: "Proper job, that." },
    { id: "jon-35", image: "./host-correct.png", audio: "./jon-chesterfield-v2-35.mp3", text: "Nice one, youth." },
    { id: "jon-36", image: "./host-correct.png", audio: "./jon-chesterfield-v2-36.mp3", text: "Tha'll do nicely." },
  ],
  wrong: [
    { id: "jon-37", image: "./host-wrong.png", audio: "./jon-chesterfield-v2-37.mp3", text: "Nay, not that one." },
    { id: "jon-38", image: "./host-explain.png", audio: "./jon-chesterfield-v2-38.mp3", text: "Nearly, mi duck." },
    { id: "jon-39", image: "./host-wrong.png", audio: "./jon-chesterfield-v2-39.mp3", text: "Wrong'un, youth." },
    { id: "jon-40", image: "./host-explain.png", audio: "./jon-chesterfield-v2-40.mp3", text: "Tha's had a wobble." },
    { id: "jon-41", image: "./host-wrong.png", audio: "./jon-chesterfield-v2-41.mp3", text: "That's gone sideways." },
    { id: "jon-42", image: "./host-explain.png", audio: "./jon-chesterfield-v2-42.mp3", text: "Bit daft, that." },
    { id: "jon-43", image: "./host-think.png", audio: "./jon-chesterfield-v2-43.mp3", text: "Ah well, crack on." },
    { id: "jon-44", image: "./host-wrong.png", audio: "./jon-chesterfield-v2-44.mp3", text: "Learn it and move on." },
    { id: "jon-45", image: "./host-explain.png", audio: "./jon-chesterfield-v2-45.mp3", text: "Better here than site." },
    { id: "jon-46", image: "./host-wrong.png", audio: "./jon-chesterfield-v2-46.mp3", text: "Don't do that again." },
  ],
  halfway: [
    { id: "jon-47", image: "./host-explain.png", audio: "./jon-chesterfield-v2-47.mp3", text: "Halfway, youth." },
    { id: "jon-48", image: "./host-correct.png", audio: "./jon-chesterfield-v2-48.mp3", text: "Reet, keep going." },
    { id: "jon-50", image: "./host-explain.png", audio: "./jon-chesterfield-v2-50.mp3", text: "Don't get cocky." },
  ],
  momentumLion: [
    { id: "jon-51", image: "./host-correct.png", audio: "./jon-chesterfield-v2-51.mp3", text: "Keep thi foot in." },
  ],
  momentumSabre: [
    { id: "jon-52", image: "./host-correct.png", audio: "./jon-chesterfield-v2-52.mp3", text: "It's getting tasty." },
  ],
  close: [
    { id: "jon-53", image: "./host-think.png", audio: "./jon-chesterfield-v2-53.mp3", text: "Neck and neck now." },
    { id: "jon-55", image: "./host-explain.png", audio: "./jon-chesterfield-v2-55.mp3", text: "Finish it reet." },
    { id: "jon-56", image: "./host-think.png", audio: "./jon-chesterfield-v2-56.mp3", text: "Nearly home, duck." },
    { id: "jon-57", image: "./host-think.png", audio: "./jon-chesterfield-v2-57.mp3", text: "Steady now, youth." },
  ],
  comeback: [
    { id: "jon-49", image: "./host-correct.png", audio: "./jon-chesterfield-v2-49.mp3", text: "Tha's making ground." },
  ],
  oneToGo: [
    { id: "jon-54", image: "./host-explain.png", audio: "./jon-chesterfield-v2-54.mp3", text: "One more, youth." },
  ],
  winner: [
    { id: "jon-58", image: "./host-celebrate.png", audio: "./jon-chesterfield-v2-58.mp3", text: "Reet, job done." },
    { id: "jon-59", image: "./host-celebrate.png", audio: "./jon-chesterfield-v2-59.mp3", text: "Tha's only gone and won." },
    { id: "jon-60", image: "./host-correct.png", audio: "./jon-chesterfield-v2-60.mp3", text: "Winner, winner, brew for dinner." },
    { id: "jon-61", image: "./host-celebrate.png", audio: "./jon-chesterfield-v2-61.mp3", text: "Ten panels. Sorted." },
    { id: "jon-62", image: "./host-celebrate.png", audio: "./jon-chesterfield-v2-62.mp3", text: "Tha's smashed that." },
  ],
  soloHalfway: [
    { id: "jon-47", image: "./host-explain.png", audio: "./jon-chesterfield-v2-47.mp3", text: "Halfway, youth." },
  ],
  soloCorrect: [
    { id: "jon-35", image: "./host-correct.png", audio: "./jon-chesterfield-v2-35.mp3", text: "Nice one, youth." },
    { id: "jon-31", image: "./host-correct.png", audio: "./jon-chesterfield-v2-31.mp3", text: "Panel in. Lovely." },
  ],
  soloWinner: [
    { id: "jon-64", image: "./host-celebrate.png", audio: "./jon-chesterfield-v2-64.mp3", text: "Reet, tha's done it." },
  ],
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[character]));

function freshState() {
  return {
    version: 5,
    screen: 'setup',
    config: { playType: 'teams', pack: 'all', audience: 'all', target: 10, mode: 'recall' },
    scores: { lion: 0, sabre: 0, solo: 0 },
    turn: 'lion',
    used: [],
    question: null,
    history: [],
    winner: null,
    banterUsed: [],
    milestones: []
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || saved.version !== 5) return freshState();
    return { ...freshState(), ...saved, config: { ...freshState().config, ...saved.config }, scores: { ...freshState().scores, ...saved.scores } };
  } catch {
    return freshState();
  }
}

function loadSettings() {
  try { return { muted: false, ...JSON.parse(localStorage.getItem(SETTINGS_KEY)) }; }
  catch { return { muted: false }; }
}

let state = loadState();
let settings = loadSettings();
let audioContext = null;
let installPrompt = null;
let toastTimer = null;
let hostTimer = null;
let hostAudio = null;
let mediaPrimed = false;

function save() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch { /* Gameplay continues if storage is unavailable. */ }
}

function saveSettings() {
  try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); }
  catch { /* Preference can safely fall back to the default. */ }
}

function randomIndex(length) {
  if (length <= 1) return 0;
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return Math.floor((array[0] / 4294967296) * length);
  }
  return Math.floor(Math.random() * length);
}

function randomChance(chance) {
  if (chance >= 1) return true;
  if (chance <= 0) return false;
  return randomIndex(1000) < Math.round(chance * 1000);
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = randomIndex(index + 1);
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function filteredQuestionIds() {
  return QUESTIONS.map((question, id) => ({ question, id })).filter(({ question }) => {
    const inPack = state.config.pack === 'all'
      || (state.config.pack === 'lift' && question.source.startsWith('Lift Plan'))
      || (state.config.pack === 'gs6' && question.source.startsWith('Overhead Line'));
    const forAudience = state.config.audience === 'all'
      || question.audience === 'All crew'
      || question.audience === state.config.audience;
    return inPack && forAudience;
  }).map(({ id }) => id);
}

function isSolo() { return state.config.playType === 'solo'; }
function activeTeam() { return isSolo() ? TEAM_DATA.solo : TEAM_DATA[state.turn]; }
function otherTeamId() { return state.turn === 'lion' ? 'sabre' : 'lion'; }
function formatScore(score) { return Number.isInteger(score) ? `${score}` : `${Math.floor(score)}½`; }

function showScreen(screen) {
  state.screen = screen;
  document.body.dataset.screen = screen;
  const map = { setup: '#setupScreen', toss: '#tossScreen', game: '#gameScreen', winner: '#winnerScreen' };
  Object.entries(map).forEach(([name, selector]) => { $(selector).hidden = name !== screen; });
  save();
  requestAnimationFrame(() => $('#screenRoot').focus({ preventScroll: true }));
}

function syncSetupForm() {
  const form = $('#setupForm');
  const config = state.config || freshState().config;
  for (const name of ['playType', 'pack', 'target', 'mode']) {
    const field = form.elements.namedItem(name);
    if (field) field.value = name === 'target' ? String(config[name]) : config[name];
  }
  $('#audienceSelect').value = config.audience;
  updateSetupModeUI();
}

function selectedPlayType() {
  return new FormData($('#setupForm')).get('playType') || 'teams';
}

function updateSetupModeUI() {
  const solo = selectedPlayType() === 'solo';
  $('#startModeCopy').innerHTML = solo
    ? '<b>Ready?</b> Your badge tracks the installation run panel by panel.'
    : '<b>Ready?</b> A fair coin toss chooses the first team.';
  $('#startModeLabel').textContent = solo ? 'Start solo challenge' : 'Start the showdown';
}

function startGame(event) {
  event.preventDefault();
  primeBanterAudio();
  dismissHost(true);
  const data = new FormData(event.currentTarget);
  state = freshState();
  state.config = {
    playType: data.get('playType') || 'teams',
    pack: data.get('pack'),
    audience: data.get('audience'),
    target: Number(data.get('target')),
    mode: data.get('mode')
  };

  if (isSolo()) {
    state.turn = 'solo';
    nextQuestion(false);
    showScreen('game');
    renderGame();
    setTimeout(() => showBanter('soloStart'), 260);
    return;
  }

  const coin = $('#coin');
  coin.className = 'coin';
  $('#coinFront').src = './game-show-badge.png';
  $('#coinBack').src = './game-show-badge.png';
  $('#coinResult').textContent = 'Fair toss · one tap';
  $('#tossButton').disabled = false;
  showScreen('toss');
  save();
}

function tossCoin() {
  primeBanterAudio();
  const button = $('#tossButton');
  if (button.disabled) return;
  button.disabled = true;
  state.turn = randomIndex(2) === 0 ? 'lion' : 'sabre';
  const coin = $('#coin');
  coin.className = 'coin';
  $('#coinFront').src = './game-show-badge.png';
  $('#coinBack').src = './game-show-badge.png';
  void coin.offsetWidth;
  coin.classList.add('tossing');
  playSound('coin');
  $('#coinResult').textContent = 'Badge in the air…';
  setTimeout(() => {
    coin.classList.remove('tossing');
    $('#coinFront').src = activeTeam().shield;
    $('#coinBack').src = activeTeam().shield;
    coin.classList.add('winner-face');
    $('#coinResult').textContent = `${activeTeam().name} starts`;
    announce(`${activeTeam().name} won the toss and takes the first question.`);
    vibrate([35, 40, 55]);
    showBanter(state.turn === 'lion' ? 'startLion' : 'startSabre');
    setTimeout(() => {
      dismissHost();
      nextQuestion(false);
      showScreen('game');
      renderGame();
    }, 1450);
  }, 1450);
}

function nextQuestion(advanceTurn = true) {
  if (state.winner) {
    showWinner();
    return;
  }
  if (!isSolo() && advanceTurn && state.question?.marked) state.turn = otherTeamId();
  let eligible = filteredQuestionIds();
  let available = eligible.filter((id) => !state.used.includes(id));
  if (!available.length) {
    state.used = state.used.filter((id) => !eligible.includes(id));
    available = eligible;
  }
  const id = available[randomIndex(available.length)];
  const question = QUESTIONS[id];
  const choices = shuffle([question.a, ...question.d]);
  state.used.push(id);
  state.question = {
    id,
    choices,
    selected: null,
    choicesVisible: state.config.mode === 'choices',
    clueUsed: false,
    revealed: false,
    marked: false,
    correct: null,
    gain: 0
  };
  save();
  announce(`${activeTeam().name}. New question in ${question.cat}.`);
}

function showChoices() {
  if (!state.question || state.question.revealed) return;
  state.question.choicesVisible = true;
  state.question.clueUsed = true;
  save();
  playSound('clue');
  showToast('Answer choices shown · this question is now worth ½ panel');
  renderGame();
  showBanter('clue', 1);
}

function selectChoice(index) {
  if (!state.question?.choicesVisible || state.question.revealed) return;
  state.question.selected = index;
  save();
  renderGame();
  const selectedButton = $(`.choice-button[data-index="${index}"]`);
  selectedButton?.focus({ preventScroll: true });
}

function revealAnswer() {
  if (!state.question || state.question.revealed) return;
  state.question.revealed = true;
  save();
  playSound('reveal');
  renderGame();
  announce(`Correct answer: ${QUESTIONS[state.question.id].a}`);
  showBanter('review', .78);
}

function lockChoice() {
  const current = state.question;
  if (!current || current.selected === null || current.revealed) return;
  const question = QUESTIONS[current.id];
  current.revealed = true;
  markAnswer(current.choices[current.selected] === question.a);
}

function markAnswer(correct) {
  const current = state.question;
  if (!current || current.marked) return;
  const team = activeTeam();
  const previousScore = state.scores[team.id] || 0;
  const gain = correct ? (current.clueUsed ? .5 : 1) : 0;
  current.marked = true;
  current.correct = correct;
  current.gain = gain;
  current.revealed = true;
  state.scores[team.id] = Math.min(state.config.target, previousScore + gain);
  state.history.push({
    questionId: current.id,
    teamId: team.id,
    correct,
    gain,
    clueUsed: current.clueUsed,
    selected: current.selected === null ? null : current.choices[current.selected]
  });
  if (state.scores[team.id] >= state.config.target) state.winner = team.id;
  save();
  playSound(correct ? 'correct' : 'wrong');
  vibrate(correct ? [30, 35, 60] : [80]);
  showToast(correct ? `${team.name} installs ${formatScore(gain)} panel` : 'No panel this turn · review the reason together');
  renderGame();

  const half = state.config.target / 2;
  const newScore = state.scores[team.id];
  const reachedHalf = previousScore < half && newScore >= half;
  if (reachedHalf && !state.milestones.includes(`${team.id}-half`)) {
    state.milestones.push(`${team.id}-half`);
    save();
    showBanter(isSolo() ? 'soloHalfway' : 'halfway');
  } else if (correct && isSolo()) {
    showBanter('soloCorrect', .72);
  } else if (correct) {
    const otherScore = state.scores[otherTeamId()] || 0;
    const remaining = Math.max(0, state.config.target - newScore);
    const cameBack = previousScore < otherScore && newScore >= otherScore;
    const hasMomentum = newScore >= half && newScore > otherScore;
    if (!state.winner && remaining === 1) {
      showBanter('oneToGo', .9);
    } else if (!state.winner && remaining > 0 && remaining <= 2) {
      showBanter('close', .84);
    } else if (cameBack) {
      showBanter('comeback', .78);
    } else if (hasMomentum && randomChance(.42)) {
      showBanter(team.id === 'lion' ? 'momentumLion' : 'momentumSabre');
    } else {
      showBanter('correct', .84);
    }
  } else {
    showBanter('wrong', .88);
  }
  announce(correct ? `Correct. ${team.name} gains ${formatScore(gain)} panel.` : 'Not quite. No panel awarded.');
}

function renderLane(teamId) {
  const team = TEAM_DATA[teamId];
  const score = state.scores[teamId];
  const target = state.config.target;
  const percent = Math.max(0, Math.min(100, (score / target) * 100));
  const markerOffset = (percent / 100) * 54;
  const steps = Array.from({ length: target }, (_, visualIndex) => {
    const panelIndex = target - 1 - visualIndex;
    const fill = Math.max(0, Math.min(1, score - panelIndex)) * 100;
    return `<div class="ladder-panel" style="--fill:${fill}%" aria-hidden="true"><span>${panelIndex + 1}</span></div>`;
  }).join('');
  const element = $(`#${teamId}Lane`);
  element.hidden = false;
  element.className = `race-lane ${teamId}-lane${state.turn === teamId && !state.winner ? ' active' : ''}`;
  element.setAttribute('aria-label', `${team.name}: ${formatScore(score)} of ${target} panels installed`);
  element.innerHTML = `
    <div class="lane-cap"><b>${team.short}</b><span>${formatScore(score)}<small>/${target}</small></span></div>
    <div class="ladder-track">
      <div class="ladder-panels">${steps}</div>
      <div class="moving-shield" style="bottom:calc(${percent}% - ${markerOffset}px)"><img src="${team.shield}" alt="${team.name} progress marker"></div>
    </div>
    <div class="lane-foot">Panels</div>`;
}

function renderSoloProgress() {
  const element = $('#soloProgress');
  const score = state.scores.solo;
  const target = state.config.target;
  const percent = Math.max(0, Math.min(100, (score / target) * 100));
  const markerOffset = (percent / 100) * 62;
  const steps = Array.from({ length: target }, (_, index) => {
    const fill = Math.max(0, Math.min(1, score - index)) * 100;
    return `<div class="solo-panel" style="--fill:${fill}%"><span>${index + 1}</span></div>`;
  }).join('');
  element.hidden = false;
  element.innerHTML = `
    <div class="solo-progress-copy"><b>Solo installation run</b><span>${formatScore(score)} of ${target} panels</span></div>
    <div class="solo-rail-wrap">
      <div class="solo-badge" style="left:calc(${percent}% - ${markerOffset}px)"><img src="./game-show-badge.png" alt="Your progress"></div>
      <div class="solo-panel-rail" style="--target:${target}">${steps}</div>
    </div>`;
  element.setAttribute('aria-label', `Solo progress: ${formatScore(score)} of ${target} panels installed`);
}

function renderChoices(question, current) {
  if (!current.choicesVisible) return '<p class="recall-prompt"><span aria-hidden="true">◉</span> Answer aloud from memory, then reveal to check.</p>';
  const letters = ['A', 'B', 'C', 'D'];
  return `<div class="choices" role="radiogroup" aria-label="Answer choices">${current.choices.map((choice, index) => {
    const selected = current.selected === index;
    const isCorrect = current.revealed && choice === question.a;
    const isWrong = current.revealed && selected && choice !== question.a;
    const classes = ['choice-button', selected ? 'selected' : '', isCorrect ? 'correct-answer' : '', isWrong ? 'wrong-answer' : ''].filter(Boolean).join(' ');
    return `<button class="${classes}" type="button" data-index="${index}" role="radio" aria-checked="${selected}" ${current.revealed ? 'disabled' : ''}><span class="choice-letter">${letters[index]}</span><span>${esc(choice)}</span></button>`;
  }).join('')}</div>`;
}

function renderAnswer(question) {
  return `<div class="answer-panel">
    <p class="answer-label">Correct answer</p>
    <h3>${esc(question.a)}</h3>
    <p>${esc(question.why)}</p>
    <p class="source-line">Training source · ${esc(question.source)}</p>
  </div>`;
}

function renderActions() {
  const current = state.question;
  if (!current.revealed) {
    if (!current.choicesVisible) {
      return `<button class="game-button clue" id="showChoicesButton" type="button">Show 4 choices · ½ panel</button><button class="game-button secondary" id="revealButton" type="button">Reveal correct answer</button><p class="reward-note">A correct answer from memory is worth one full panel</p>`;
    }
    return `<button class="game-button success" id="lockButton" type="button" ${current.selected === null ? 'disabled' : ''}>Lock in answer</button><button class="game-button secondary" id="revealButton" type="button">Reveal without scoring</button><p class="reward-note">${current.clueUsed ? 'Choices used · correct answer earns half a panel' : 'Correct answer earns one full panel'}</p>`;
  }
  if (!current.marked) {
    const reward = current.clueUsed ? '½' : '1';
    return `<button class="game-button success" id="correctButton" type="button">Correct · +${reward} panel</button><button class="game-button danger" id="wrongButton" type="button">Not quite · no panel</button><p class="reward-note">Facilitator: mark the spoken answer</p>`;
  }
  const label = state.winner ? (isSolo() ? 'Complete the solo run' : 'Celebrate the winner') : (isSolo() ? 'Next question' : 'Next team · next question');
  return `<button class="game-button full ${state.winner ? 'success' : ''}" id="nextButton" type="button">${label} →</button><p class="reward-note">${current.correct ? `Correct · ${formatScore(current.gain)} panel installed` : 'No panel installed · learning point reviewed'}</p>`;
}

function renderGame() {
  if (!state.question) return;
  const layout = $('.game-layout');
  layout.classList.toggle('solo-mode', isSolo());

  if (isSolo()) {
    $('#lionLane').hidden = true;
    $('#sabreLane').hidden = true;
    renderSoloProgress();
  } else {
    $('#soloProgress').hidden = true;
    renderLane('lion');
    renderLane('sabre');
  }

  const current = state.question;
  const question = QUESTIONS[current.id];
  const team = activeTeam();
  const answeredCount = state.history.length + (current.marked ? 0 : 1);
  $('#questionStage').innerHTML = `
    <header class="question-head">
      <div class="turn-team"><img src="${team.shield}" alt=""><span class="turn-copy"><small>${isSolo() ? 'Solo challenge' : 'Now playing'}</small><b>${team.name}</b></span></div>
      <div class="question-count"><b>Question ${answeredCount}</b><small>${state.config.mode === 'recall' ? 'Recall challenge' : 'Multiple choice'}</small></div>
    </header>
    <div class="question-scroll">
      <div class="question-body${current.choicesVisible ? ' has-choices' : ''}${current.revealed ? ' has-answer' : ''}">
        <div class="meta-row"><span class="pill">${esc(question.cat)}</span><span class="pill audience">For ${esc(question.audience)}</span></div>
        <h2 class="question-text">${esc(question.q)}</h2>
        ${renderChoices(question, current)}
        ${current.revealed ? renderAnswer(question) : ''}
      </div>
    </div>
    <div class="question-actions">${renderActions()}</div>`;

  $$('.choice-button').forEach((button) => button.addEventListener('click', () => selectChoice(Number(button.dataset.index))));
  $('#showChoicesButton')?.addEventListener('click', showChoices);
  $('#revealButton')?.addEventListener('click', revealAnswer);
  $('#lockButton')?.addEventListener('click', lockChoice);
  $('#correctButton')?.addEventListener('click', () => markAnswer(true));
  $('#wrongButton')?.addEventListener('click', () => markAnswer(false));
  $('#nextButton')?.addEventListener('click', () => {
    if (state.winner) showWinner();
    else {
      nextQuestion(true);
      renderGame();
      showBanter('question', .62);
    }
  });

  requestAnimationFrame(() => {
    const scroller = $('.question-scroll', $('#questionStage'));
    if (scroller) scroller.scrollTop = 0;
  });
}

function showWinner() {
  const winner = TEAM_DATA[state.winner];
  const winnerTurns = state.history.filter((item) => item.teamId === winner.id);
  const correct = winnerTurns.filter((item) => item.correct).length;
  const accuracy = winnerTurns.length ? Math.round((correct / winnerTurns.length) * 100) : 0;
  const clueCount = state.history.filter((item) => item.clueUsed).length;
  const solo = isSolo();
  $('#winnerScreen').innerHTML = `
    <div class="winner-card">
      <div class="winner-art"><img class="host" src="./host-celebrate.png" alt="Jon Ellerby celebrating"><img class="winner-shield" src="${winner.shield}" alt="${winner.name}"></div>
      <div class="winner-copy">
        <p class="eyebrow">${solo ? 'Installation run complete' : 'Installation complete'}</p>
        <h1 id="winnerTitle">${solo ? 'Solo run complete!' : `${winner.name} wins!`}</h1>
        <p class="winner-line">${solo ? 'You completed the panel run. Finish by reviewing any learning points that need another look.' : (winner.id === 'lion' ? 'The Lions laid the knowledge down panel by panel.' : 'Sabre-X cut through the challenge and reached the finish first.')} ${solo ? '' : 'Finish by reviewing the learning points together.'}</p>
        <div class="stat-grid"><div class="stat"><b>${state.config.target}</b><small>Panels</small></div><div class="stat"><b>${accuracy}%</b><small>Accuracy</small></div><div class="stat"><b>${clueCount}</b><small>Clues used</small></div></div>
        <div class="winner-actions"><button id="playAgainButton" class="primary-button" type="button">Play another game</button><button id="reviewButton" class="outline-button" type="button">Review learning points</button></div>
      </div>
    </div>`;
  showScreen('winner');
  playSound('winner');
  launchConfetti();
  $('#playAgainButton').addEventListener('click', resetToSetup);
  $('#reviewButton').addEventListener('click', showReview);
  setTimeout(() => showBanter(solo ? 'soloWinner' : 'winner'), 420);
  announce(solo ? 'Solo Trakway Trivia run complete.' : `${winner.name} wins the Trakway Trivia showdown.`);
}

function showReview() {
  const missed = state.history.filter((item) => !item.correct);
  $('#reviewList').innerHTML = missed.length ? missed.map((item) => {
    const question = QUESTIONS[item.questionId];
    return `<article class="review-item"><h3>${esc(question.q)}</h3><p><b>Correct:</b> ${esc(question.a)}</p><p>${esc(question.why)}</p><p class="source-line">${esc(question.source)}</p></article>`;
  }).join('') : '<div class="empty-review"><b>No missed questions.</b><p>Use the document references from the game to continue the discussion.</p></div>';
  $('#reviewDialog').showModal();
}

function resetToSetup() {
  $$('.confetti').forEach((piece) => piece.remove());
  dismissHost(true);
  const previousConfig = state.config;
  state = freshState();
  state.config = previousConfig;
  syncSetupForm();
  showScreen('setup');
}

function requestSetup() {
  const gameInProgress = (state.screen === 'game' || state.screen === 'winner') && state.history.length > 0;
  if (gameInProgress && !window.confirm('Return to setup? The current game will be cleared when you start another game.')) return;
  resetToSetup();
}

function primeBanterAudio() {
  if (mediaPrimed || settings.muted) return;
  mediaPrimed = true;
  const player = document.getElementById('banterPlayer');
  if (!player) return;
  const oldVolume = player.volume;
  player.src = './banter-silence.mp3';
  player.volume = 0;
  const promise = player.play();
  if (promise && typeof promise.then === 'function') {
    promise.then(() => { player.pause(); player.currentTime = 0; player.volume = oldVolume || .9; }).catch(() => { player.volume = oldVolume || .9; });
  }
}

function showBanter(kind, chance = 1) {
  if (!randomChance(chance)) return;
  const pool = (BANTER[kind] || []).filter((entry) => !state.banterUsed.includes(entry.id));
  if (!pool.length) return;
  const entry = pool[randomIndex(pool.length)];
  state.banterUsed.push(entry.id);
  save();
  showHost(entry);
}

function showHost(entry) {
  const host = $('#hostPop');
  clearTimeout(hostTimer);
  if (hostAudio) {
    hostAudio.pause();
    hostAudio.currentTime = 0;
  }
  host.classList.remove('visible', 'from-left', 'from-right');
  host.hidden = false;
  host.classList.add(randomIndex(2) ? 'from-right' : 'from-left');
  $('#hostImage').src = entry.image;
  $('#hostLine').textContent = entry.text;
  requestAnimationFrame(() => requestAnimationFrame(() => host.classList.add('visible')));
  if (!settings.muted && entry.audio) {
    hostAudio = document.getElementById('banterPlayer') || new Audio();
    hostAudio.src = entry.audio;
    hostAudio.preload = 'auto';
    hostAudio.volume = .92;
    hostAudio.currentTime = 0;
    hostAudio.load();
    hostAudio.play().catch(() => { /* Recorded clip only: if playback is blocked or missing, Jon stays silent and the text remains visible. */ });
  }
  const visualMs = Math.max(6200, Math.min(13500, 4300 + entry.text.length * 64));
  hostTimer = setTimeout(() => dismissHost(), visualMs);
  if (hostAudio) {
    const player = hostAudio;
    player.onloadedmetadata = () => {
      if (hostAudio !== player || !Number.isFinite(player.duration)) return;
      const recordedMs = Math.ceil(player.duration * 1000) + 850;
      if (recordedMs > visualMs) {
        clearTimeout(hostTimer);
        hostTimer = setTimeout(() => dismissHost(), Math.min(15000, recordedMs));
      }
    };
  }
}

function dismissHost(immediate = false) {
  clearTimeout(hostTimer);
  const host = $('#hostPop');
  if (!host) return;
  if (hostAudio) {
    hostAudio.pause();
    hostAudio.currentTime = 0;
  }
  host.classList.remove('visible');
  if (immediate) host.hidden = true;
  else setTimeout(() => { if (!host.classList.contains('visible')) host.hidden = true; }, 360);
}

function playSound(type) {
  if (settings.muted) return;
  const Audio = window.AudioContext || window.webkitAudioContext;
  if (!Audio) return;
  audioContext ||= new Audio();
  const patterns = {
    coin: [[330, 0, .08], [440, .1, .08], [554, .2, .1]],
    clue: [[392, 0, .08], [523, .12, .1]],
    reveal: [[311, 0, .08], [392, .11, .12]],
    correct: [[523, 0, .1], [659, .12, .1], [784, .24, .18]],
    wrong: [[220, 0, .16], [174, .18, .22]],
    winner: [[523, 0, .12], [659, .13, .12], [784, .26, .12], [1046, .4, .38]]
  };
  const now = audioContext.currentTime;
  (patterns[type] || []).forEach(([frequency, delay, duration]) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = type === 'wrong' ? 'sawtooth' : 'triangle';
    oscillator.frequency.setValueAtTime(frequency, now + delay);
    gain.gain.setValueAtTime(.0001, now + delay);
    gain.gain.exponentialRampToValueAtTime(.055, now + delay + .015);
    gain.gain.exponentialRampToValueAtTime(.0001, now + delay + duration);
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start(now + delay);
    oscillator.stop(now + delay + duration + .03);
  });
}

function toggleSound() {
  settings.muted = !settings.muted;
  saveSettings();
  renderSoundButton();
  if (settings.muted && hostAudio) {
    hostAudio.pause();
    hostAudio.currentTime = 0;
  }
  if (!settings.muted) playSound('clue');
  showToast(settings.muted ? 'Sound off' : 'Sound on');
}

function renderSoundButton() {
  $('#soundButton').setAttribute('aria-pressed', String(settings.muted));
  $('#soundButton').setAttribute('aria-label', settings.muted ? 'Turn sound on' : 'Turn sound off');
  $('#soundIcon').textContent = settings.muted ? '◖×' : '◖))';
}

async function toggleFullscreen() {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  } catch {
    showToast('Use your browser menu to enter full screen');
  }
}

function showToast(message) {
  clearTimeout(toastTimer);
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2900);
}

function announce(message) { $('#announcer').textContent = message; }
function vibrate(pattern) { if (!settings.muted && navigator.vibrate) navigator.vibrate(pattern); }

function launchConfetti() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const colours = ['#fed203', '#00a85a', '#ffffff', '#b7c6bd', '#e8b80b'];
  for (let index = 0; index < 72; index += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti';
    piece.style.left = `${randomIndex(1000) / 10}%`;
    piece.style.background = colours[randomIndex(colours.length)];
    piece.style.setProperty('--drift', `${randomIndex(240) - 120}px`);
    piece.style.setProperty('--duration', `${2.8 + randomIndex(25) / 10}s`);
    piece.style.animationDelay = `${randomIndex(900) / 1000}s`;
    document.body.append(piece);
    piece.addEventListener('animationend', () => piece.remove(), { once: true });
  }
}

function handleKeyboard(event) {
  if ($('#helpDialog').open || $('#reviewDialog').open || state.screen !== 'game') return;
  const current = state.question;
  if (!current) return;
  if (/^[1-4]$/.test(event.key) && current.choicesVisible && !current.revealed) {
    event.preventDefault();
    selectChoice(Number(event.key) - 1);
  } else if (event.key === 'Enter') {
    if (!current.revealed && current.selected !== null) { event.preventDefault(); lockChoice(); }
    else if (current.marked) { event.preventDefault(); state.winner ? showWinner() : (nextQuestion(true), renderGame()); }
  } else if (event.key.toLowerCase() === 'c' && current.revealed && !current.marked) {
    event.preventDefault(); markAnswer(true);
  } else if (event.key.toLowerCase() === 'x' && current.revealed && !current.marked) {
    event.preventDefault(); markAnswer(false);
  }
}

function initialiseInstall() {
  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installPrompt = event;
    $('#installButton').hidden = false;
  });
  $('#installButton').addEventListener('click', async () => {
    if (!installPrompt) {
      $('#helpDialog').showModal();
      return;
    }
    installPrompt.prompt();
    await installPrompt.userChoice;
    installPrompt = null;
    $('#installButton').hidden = true;
  });
  window.addEventListener('appinstalled', () => {
    installPrompt = null;
    $('#installButton').hidden = true;
    showToast('Trakway Trivia installed');
  });
}

function initialiseServiceWorker() {
  if (!('serviceWorker' in navigator) || location.protocol === 'file:') return;
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('./sw.js');
      $('#offlineStatus').textContent = 'Offline game ready';
      registration.addEventListener('updatefound', () => showToast('An app update is downloading'));
    } catch {
      $('#offlineStatus').textContent = 'Online mode';
    }
  });
}

function initialise() {
  syncSetupForm();
  renderSoundButton();
  $('#setupForm').addEventListener('submit', startGame);
  $('#setupForm').addEventListener('change', updateSetupModeUI);
  $('#tossButton').addEventListener('click', tossCoin);
  $('#homeButton').addEventListener('click', requestSetup);
  $('#helpButton').addEventListener('click', () => $('#helpDialog').showModal());
  $('#soundButton').addEventListener('click', toggleSound);
  $('#fullscreenButton').addEventListener('click', toggleFullscreen);
  $('#hostDismiss').addEventListener('click', () => dismissHost());
  document.addEventListener('keydown', handleKeyboard);
  initialiseInstall();
  initialiseServiceWorker();

  if (state.screen === 'game' && state.question) {
    showScreen('game');
    renderGame();
  } else if (state.screen === 'winner' && state.winner) {
    showWinner();
  } else if (state.screen === 'toss' && !isSolo()) {
    state.screen = 'setup';
    showScreen('setup');
  } else {
    showScreen('setup');
  }
}

initialise();
