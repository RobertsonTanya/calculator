var firstNumber = 0;
var trigger = false;
var secondNumber = 0;
var dot = document.getElementById('dot');
var display = document.getElementById('display');
var operator = '';


function press(num){
    if(num == '.') {
        dot.disabled = true;
    }
    if(firstNumber == 0 && !trigger){
        firstNumber += num;
        display.innerHTML = firstNumber;
    } else if (!trigger){
        firstNumber += num.toString();
        display.innerHTML = firstNumber;
    } else if(secondNumber == 0 && trigger){
        secondNumber += num;
        display.innerHTML = secondNumber;
    } else if(trigger){
        secondNumber += num.toString();
        display.innerHTML = secondNumber;
    }
}
function setOP(op){
    dot.disabled = false;
    trigger = true;
    operator = op;
}
function calculate(){
    var result = 0;
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    if(operator == '/'){
        result = firstNumber/secondNumber;
    } else if(operator == '*'){
        result = firstNumber*secondNumber;
    } else if(operator == '+'){
        result = firstNumber+secondNumber;
    } else if(operator == '-'){
        result = firstNumber-secondNumber;
    }
    firstNumber = 0;
    secondNumber = 0;
    firstNumber = result;
    display.innerHTML = result;
    trigger = false;
    dot.disabled = false;
}
function clr(){
    dot.disabled = false;
    firstNumber = 0;
    secondNumber = 0;
    trigger = false;
    display.innerHTML = 0;
}