const runeBtn = document.getElementById('runeBtn')
const runeContainer = document.querySelector('.rune-container')
const runeSelect = document.getElementById('runeSelect')
const runes = ["el", "eld", "tir", "nef", "eth", "ith", "tal", "ral", "ort", "thul", "amn", "sol", "shael", "dol", "hel", "io", "lum", "ko", "fal", "lem", "pul", "um", "mal", "ist", "gul", "vex", "ohm", "lo", "sur", "ber", "jah", "cham", "zod"]
const rune = document.getElementById('rune')
const cain = document.querySelector('.cain')

// function getRandomRune() {
//   const randomRune =  runes[Math.floor(Math.random() * runes.length)].repeat(3)
//   console.log(randomRune);
// }

let runeCount = 18
let randomRunes = []

function getRunes() {
  for(let i = 0; i < runeCount; i++) {
    const rune = runes[Math.floor(Math.random() * runes.length)]
    randomRunes.push(rune)
  }
  console.log(randomRunes)
}

function generateRunes() {
  randomRunes.forEach(rune => {
    const runeEl = document.createElement('div')
    runeEl.classList.add('rune')
    runeEl.innerHTML = `
      <img src="./img/${rune}.png" />
      <p class="runeName">${rune}</p>
    `
    runeEl.addEventListener('click', () => runeEl.classList.toggle('active'))
    runeContainer.appendChild(runeEl)
  })
}

function addRuneToDOM() {
  randomRunes = getRunes();
  rune.innerHTML = randomRunes;
}

function clearRunes() {
  randomRunes = []
  runeContainer.innerHTML = ""
}

function runeSound() {
  var audio = new Audio('./audio/rune.wav');
  audio.play();
}

runeBtn.addEventListener('click', () => {
  clearRunes()
  getRunes()
  generateRunes()
  runeSound()
})

runeSelect.addEventListener('change', e => {
  runeCount = e.target.value
})

cain.addEventListener('click', () => {
  var cainGreeting = new Audio('./audio/stayawhile.mp3');
  cainGreeting.play();
})