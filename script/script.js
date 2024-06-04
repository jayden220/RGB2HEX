let num = document.getElementsByTagName('input')
let redVal = document.getElementsByClassName('red')[0]
let greenVal = document.getElementsByClassName('green')[0]
let blueVal = document.getElementsByClassName('blue')[0]
let convert = document.getElementsByTagName('button')[0]
let answer = document.getElementsByTagName('p')[0]

convert.addEventListener('click', Calc)

function cont(num) {
    if (num == 10) {
        return 'A'
    }else if(num == 11){
        return 'B'
    }else if(num == 12){
        return 'C'
    }else if(num == 13){
        return 'D'
    }else if(num == 14){
        return 'E'
    }else if(num == 15){
        return 'F'
    }else{
        return num
    }
}


function Calc(){
    let hex ='#'
    let redAnswer = parseInt(redVal.value / 16)
    let remainRed = redVal.value % 16
    let greenAnswer = parseInt(greenVal.value / 16)
    let remainGreen = greenVal.value % 16
    let blueAnswer = parseInt(blueVal.value / 16)
    let remainBlue = blueVal.value % 16
    redAnswer ? hex += cont(redAnswer) : redAnswer
    remainRed ? hex += cont(remainRed) : remainRed
    greenAnswer ? hex += cont(greenAnswer) : greenAnswer
    remainGreen ? hex += cont(remainGreen) : remainGreen
    blueAnswer ? hex += cont(blueAnswer) : blueAnswer
    remainBlue ? hex += cont(remainBlue) : remainBlue

    answer.innerText = hex
    
    }







