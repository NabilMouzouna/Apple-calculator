
import CALCULATOR from "./Calculator.class.js";


// Variables environment
const OUTPUT = document.querySelector("#output") as HTMLDivElement;
const NUMBERS = document.querySelectorAll("#numbers") as NodeListOf<HTMLButtonElement>;
const OPERATORS = document.querySelectorAll("#operators") as NodeListOf<HTMLButtonElement>;
const COMMA = document.querySelector("#comma") as HTMLButtonElement
const Calculator = new CALCULATOR();

// choosenOp is a variable that will take in the future an opration as a value so that We can do X choosen Operator Y = result

let ChoosenOp :any;


NUMBERS.forEach((btn) => { 
    btn.addEventListener("click",() => {
        // if(EqualClicked) OUTPUT.innerText = "0";
        if(OUTPUT.innerText == "0") {
            OUTPUT.innerText = btn.innerText
        }
        else {
            OUTPUT.innerText += btn.innerText
        }
     })
 })
 COMMA.addEventListener("click",() => { 
   let commaExist:boolean = false;
   for(let i=0;i<OUTPUT.innerText.length;i++){
    if(OUTPUT.innerText.charAt(i) == COMMA.innerText) {
        commaExist = true;
        break
    }

   }
   if(!commaExist) OUTPUT.innerText += ".";
 })

OPERATORS.forEach((operator) => { 
    operator.addEventListener("click",() => { 
        // storing the first value in X
        
        switch (operator.innerText) {
            case "+":
            Calculator.setX(parseFloat(OUTPUT.innerText))
            ChoosenOp = Calculator.Add
            OUTPUT.innerText = "0"
            break;
        case "-":
            Calculator.setX(parseFloat(OUTPUT.innerText))
            ChoosenOp = Calculator.Sub
            OUTPUT.innerText = "0"
            break;
        case "x":
            Calculator.setX(parseFloat(OUTPUT.innerText))
            ChoosenOp = Calculator.Mul
            OUTPUT.innerText = "0"
            break;
        case "/":
            Calculator.setX(parseFloat(OUTPUT.innerText))
            ChoosenOp = Calculator.Devide
            OUTPUT.innerText = "0"
            break;
        case "+/-":
            Calculator.setX(parseFloat(OUTPUT.innerText))
            OUTPUT.innerText = Calculator.Signing().toString();
            break;
        case "%":
            Calculator.setX(parseFloat(OUTPUT.innerText))
            OUTPUT.innerText = Calculator.Percent().toString();
            break;
        case "AC":
            Calculator.setX(0);
            Calculator.setY(0);
            OUTPUT.innerText = "0";
            break;
        case "=":
            let RESULT = 0;
            Calculator.setY(parseFloat(OUTPUT.innerText))
            RESULT = Math.floor(ChoosenOp(Calculator.getX(),Calculator.getX())*10000)/10000;
            OUTPUT.innerText = RESULT.toString();
            break;
        default:
            break;
       }
     })
     
 })
