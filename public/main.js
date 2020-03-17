const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}
const updateTeamName = (teamInput, teamName) => {
  const nameToChange = document.querySelector(teamInput).value
  document.querySelector(teamName).textContent = nameToChange
}

const teamOne = () => {
  updateTeamName('.team-1-input', '.team-1-name')
}

const teamTwo = () => {
  updateTeamName('.team-2-input', '.team-2-name')
}

const addTeamScore = teamScore => {
  if (document.querySelector(teamScore).textContent < 21) {
    const currentScore = document.querySelector(teamScore).textContent
    const addOne = parseInt(currentScore) + 1
    document.querySelector(teamScore).textContent = addOne
  }
  winConditions()
}

const addTeamOne = () => {
  addTeamScore('.team-1-score')
}

const addTeamTwo = () => {
  addTeamScore('.team-2-score')
}

const subTeamScore = teamScore => {
  if (document.querySelector(teamScore).textContent > 0) {
    const currentScore = document.querySelector(teamScore).textContent
    const addOne = parseInt(currentScore) - 1
    document.querySelector(teamScore).textContent = addOne
  }
}

const subTeamOne = () => {
  subTeamScore('.team-1-score')
}

const subTeamTwo = () => {
  subTeamScore('.team-2-score')
}

const winConditions = () => {
  if (
    document.querySelector('.team-1-score').textContent === '21' ||
    document.querySelector('.team-2-score').textContent === '21'
  ) {
    document.querySelector('.update-team-1-name').disabled = true
    document.querySelector('.update-team-2-name').disabled = true
    document.querySelector('.team-1-add-1-button').disabled = true
    document.querySelector('.team-2-add-1-button').disabled = true
    document.querySelector('.team-1-subtract-1-button').disabled = true
    document.querySelector('.team-2-subtract-1-button').disabled = true
    if (document.querySelector('.team-1-score').textContent === '21') {
      document.querySelector('.winner').textContent =
        document.querySelector('.team-1-name').textContent + ' won the game'
    } else if (document.querySelector('.team-2-score').textContent === '21') {
      document.querySelector('.winner').textContent =
        document.querySelector('.team-2-name').textContent + 'won the game'
    }
  }
}

const resetGame = () => {
  document.querySelector('.update-team-1-name').disabled = false
  document.querySelector('.update-team-2-name').disabled = false
  document.querySelector('.team-1-add-1-button').disabled = false
  document.querySelector('.team-2-add-1-button').disabled = false
  document.querySelector('.team-1-subtract-1-button').disabled = false
  document.querySelector('.team-2-subtract-1-button').disabled = false
  document.querySelector('.team-1-score').textContent = 0
  document.querySelector('.team-2-score').textContent = 0
  document.querySelector('.winner').textContent = ''
}

document.addEventListener('DOMContentLoaded', main)

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.update-team-1-name').addEventListener('click', teamOne)

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.update-team-2-name').addEventListener('click', teamTwo)

document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addTeamOne)
document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addTeamTwo)

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subTeamOne)
document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subTeamTwo)
document.querySelector('.reset').addEventListener('click', resetGame)
