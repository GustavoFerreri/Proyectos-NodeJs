class Calculator{
    constructor(prevOpeTextElement,currOpeTextElement){
        this.prevOpeTextElement = prevOpeTextElement;
        this.currOpeTextElement = currOpeTextElement;
        this.clear();
    }
    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    appendNumber(number){
        if(number == '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    chooseOperation(operation){
        if(this.currentOperand==='') return
        if(this.previousOperand !== ''){this.compute()}
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }
    compute(){
        let computation
        console.log(this.operation)
        const prev = parseFloat(this.previousOperand)
        const current   = parseFloat(this.currentOperand)
        if(isNaN(current) || isNaN(prev))return
        switch (this.operation){
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }
    getDiplayNumber(number){
        const stringNumber = number.toString()
        const intergerDigits= parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let intergerDisplay
        if(isNaN(intergerDigits)) {
            intergerDisplay =''
        } else {
            intergerDisplay = intergerDigits.toLocaleString('en', {maximumFractionDigits: 0})
        }
        if (decimalDigits != null){
            return `${intergerDisplay}.${decimalDigits}`
        } else {
            return intergerDisplay
        }
    }
    updateDisplay(){
        this.currOpeTextElement.innerText = this.getDiplayNumber(this.currentOperand)
        if (this.operation != null){
            this.prevOpeTextElement.innerText= `${this.getDiplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.prevOpeTextElement.innerText= ''
        }
    }
}

const numberButtons = document.querySelectorAll('[dataNumber]')
const oparationButtons = document.querySelectorAll('[dataOperator]')
const equalsButtons = document.querySelector('[dataEquals]')
const delButtons = document.querySelector('[dataDelete]')
const allClearButtons = document.querySelector('[dataAllClear]')
const prevOpeTextElement = document.querySelector('[dataPreviousOperand]')
const currOpeTextElement = document.querySelector('[dataCurrentOperand]')

const calculator = new Calculator(prevOpeTextElement,currOpeTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

oparationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)                                                              
        calculator.updateDisplay()
    })
})

equalsButtons.addEventListener('click', button =>{
    calculator.compute()
    calculator.updateDisplay()
})

allClearButtons.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

delButtons.addEventListener('click', button =>{
    calculator.delete()
    calculator.updateDisplay()
})