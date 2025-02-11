console.log("Hello World")

function getComputerChoice() {
    const name = ['Rock', 'Paper', 'Scissor'] 
    const random = Math.floor(Math.random()*3)
    if (random == 0){
        return name[0]
    }
    else if (random == 1){
        return name[1]
    }
    else {
        return name[2]
    }
}

function getHumanChoice(move) {
    if (move == 'ROCK'){
        return 'Rock'
    }
    else if (move == 'PAPER'){
        return 'Paper'
    }
    else if (move == 'SCISSOR'){
        return 'Scissor'
    }
}

function score(p1, comp) {
    if (p1 == comp){
        return 'tie'
    }
    else if (p1 == 'Rock'){
        if (comp == 'Scissor'){
            return 'you win!'
        }
        else if (comp == 'Paper'){
            return 'you lose :('
        }
    }
    else if (p1 == 'Paper'){
        if (comp == 'Rock'){
            return 'you win!'
        }
        else if (comp == 'Scissor'){
            return 'you lose :('
        }
    }
    else if (p1 == 'Scissor'){
        if (comp == 'Paper'){
            return 'you win!'
        }
        else if (comp == 'Rock'){
            return 'you lose :('
        }
    }
}

humanScore = 0
compScore = 0

let p1 = prompt("choose between (Rock, Paper, Scissor:)")
p1 = p1.toUpperCase()
const plyr = getHumanChoice(p1)
console.log(plyr)

const comp = getComputerChoice()
console.log(comp)


console.log(score(plyr, comp))

