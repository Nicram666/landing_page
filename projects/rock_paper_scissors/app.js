// const startButton = document.getElementById("startbutton");
// const pscore = document.getElementById("pscore");
// const cscore = document.getElementById('cscore');
// let gameInProgress = false;
// let rock = "rock";
// let paper = "paper";
// let scissors = "scissors";
// let pSelection
// let cSelection
// let cScore = 0;
// let pScore = 0;

// const getCChoice = () => {
//     let num = Math.random()
//     if (num < 0.33) {
//         cSelection = rock;
//     }
//     else if (num < 0.66) {
//         cSelection = paper;
//     }
//     else if (num < 1) {
//         cSelection = scissors;
//     }
// }

// const getPChoice =  ()=> {
//     pSelection = prompt(`choose rock, paper or scissors`,'')
//     if(pSelection !== scissors && pSelection !== rock && pSelection !== paper) {
//         alert('to play choose rock, paper or scissors')
//         getPChoice()
//     }
// }

// const startgame = () => {
//     getCChoice();
//     getPChoice();
//     if(pSelection === cSelection) {
//         alert(`its a draw, you have choosen ${pSelection} and computer have also chosen ${cSelection}. You have ${pScore} score and computer have ${cScore} score.`)
//     } 
//     else if (
//         pSelection === scissors && cSelection === paper ||
//         pSelection === paper && cSelection === rock ||
//         pSelection === rock && cSelection === scissors
//     ) {
//         pScore += 1
//         pscore.innerHTML = pScore.toString()
//         cscore.innerHTML = cScore.toString()
//         alert(`You have won! You have choosen ${pSelection} and computer have chosen ${cSelection}. You have ${pScore} score and computer have ${cScore} score.`)
// } else {
//     cScore += 1
//     pscore.innerHTML = pScore.toString()
//     cscore.innerHTML = cScore.toString()
//     alert(`You have lost, you have choosen ${pSelection} and computer have chosen ${cSelection}. You have ${pScore} score and computer have ${cScore} score.`)
// }
    
// }




// startButton.addEventListener('click', startgame)
const validateIsN = (number) => {
   return isNaN(number) ? 0 : parseInt(number)
}

const alertAboutResult = (number) => {
    alert(number)
}


const sumAll = (alertAboutResult, nextalertAboutResult, ...numbers) => {
    let sum = 0;
    for (const num of numbers) {
        console.log(num)
        sum += validateIsN(num)
    }
    alertAboutResult(sum)
}

console.log(sumAll(alertAboutResult, 1,2,3,4))

