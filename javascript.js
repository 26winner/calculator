const numbers = document.querySelectorAll(".number")
const calculatorScreen = document.querySelector(`.calculator-screen`)

let prevNumber = ''
let calculationOperator =''
let currentNumber = ''
 

const updateScreen = (number) => {
    calculatorScreen.value = number 
}

const inputNumber = (number) => {
    //calculatorScreen.value = Number
    if (currentNumber === '0'){
        currentNumber = number
    }else{
        currentNumber += number
    }
}
numbers.forEach((number) => {
    number.addEventListener("click",(event) => {
        //console.log(numbers) 
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (Event) => {
        
        inputOperator(Event.target.value)
    })
})

const inputOperator = (operator) => {
    if(calculationOperator === ''){
        prevNumber = currentNumber
    }

    calculationOperator = operator
    currentNumber ='0'
} 

const equalSing = document.querySelector('.equal-sing')

equalSing. addEventListener('click', (Event) => {
        console.log('equal button is pressed')
        calculate()
        updateScreen(currentNumber)

    })

const calculate = () => {
    let result = ''
    switch(calculationOperator){
        case "+":
         // result = parseInt(prevNumber) + parseInt (currentNumber) 
         result = parseFloat(prevNumber) + parseFloat (currentNumber)
        break
         case "-":
            result = prevNumber - currentNumber
        break
         case  "*" :
            result = prevNumber * currentNumber
        break
          case "/" :
            result = prevNumber / currentNumber
        break
            default:
            return

    }
    currentNumber = result
    calculationOperator =''
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    //console.log('AC button is pressed')
    clearALL()
    updateScreen(currentNumber)
})

const clearALL = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
} 


const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', () => {
    //console.log(event.target.value)
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot 
}
