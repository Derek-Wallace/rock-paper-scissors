
const weapons = [
  {
    name: "Rock",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Rock-paper-scissors_%28rock%29.png"
  },
  {
    name: "Paper",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rock-paper-scissors_%28paper%29.png/1200px-Rock-paper-scissors_%28paper%29.png"
  },
  {
    name: "Scissors",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rock-paper-scissors_%28scissors%29.png/1200px-Rock-paper-scissors_%28scissors%29.png"
  }
]
let win = 0
let loss = 0



function getWeapon(weaponName){
  let found = weapons.find(weapon => weapon.name == weaponName)
  drawGame(found)
}

function drawGame(weapon){
  let gameElem = document.getElementById("player-screen")
  gameElem.innerHTML = ` 
  <div>
    <h3 class="text-center" id="player-weapon">${weapon.name}</h3>
    <img src="${weapon.img}" class="img-fluid">
  </div>
  `
  generateCompWeapon()
}

function generateCompWeapon(){
  let weapon = Math.random()
  if (weapon >= .7){
    let compWeapon = { name: "Rock",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Rock-paper-scissors_%28rock%29.png"
}
    drawCompWeapon(compWeapon)
  }
  else if (weapon >= .4){
    let compWeapon = { name: "Paper",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rock-paper-scissors_%28paper%29.png/1200px-Rock-paper-scissors_%28paper%29.png"
  }
    drawCompWeapon(compWeapon)
  }
  else if (weapon >= 0){
    let compWeapon = { 
      name: "Scissors",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rock-paper-scissors_%28scissors%29.png/1200px-Rock-paper-scissors_%28scissors%29.png"
  }
    drawCompWeapon(compWeapon)
  }
}

function drawCompWeapon(compWeapon){
  let compElem = document.getElementById("comp-screen")
  compElem.innerHTML = `
  <div>
    <h3 class="text-center" id="comp-weapon">${compWeapon.name}</h3>
    <img src="${compWeapon.img}" class="img-fluid img-flip">
  </div>
  `
  setTimeout(whoWon, 100)
}

function whoWon(){
  let weapon = document.getElementById("player-weapon")
  let compWeapon = document.getElementById("comp-weapon")
  if (weapon.innerText == compWeapon.innerText){
    let outcomeElem = document.getElementById("outcome")
    outcomeElem.innerHTML = ` You tied `
  }
  else if (weapon.innerText == "Rock" && compWeapon.innerText == "Scissors"){
    let outcomeElem = document.getElementById("outcome")
    outcomeElem.innerHTML = ` You Won! `
    win++
    drawRecord()
  }
  else if (weapon.innerText == "Rock" && compWeapon.innerText == "Paper"){
    let outcomeElem = document.getElementById("outcome")
    outcomeElem.innerHTML = ` You lost `
    loss++
    drawRecord()
  }
  else if (weapon.innerText == "Paper" && compWeapon.innerText == "Rock"){
    let outcomeElem = document.getElementById("outcome")
    outcomeElem.innerHTML = ` You Won! `
    win++
    drawRecord()
  }
  else if (weapon.innerText == "Paper" && compWeapon.innerText == "Scissors"){
    let outcomeElem = document.getElementById("outcome")
    outcomeElem.innerHTML = ` You lost `
    loss++
    drawRecord()
  }
  else if (weapon.innerText == "Scissors" && compWeapon.innerText == "Paper"){
    let outcomeElem = document.getElementById("outcome")
    outcomeElem.innerHTML = ` You Won! `
    win++
    drawRecord()
  }
  else if (weapon.innerText == "Scissors" && compWeapon.innerText == "Rock"){
    let outcomeElem = document.getElementById("outcome")
    outcomeElem.innerHTML = ` You lost `
    loss++
    drawRecord()
  }
}

function drawRecord(){
  let recordElem = document.getElementById("record")
  recordElem.innerHTML = `
  ${win}-${loss}
  `
}

