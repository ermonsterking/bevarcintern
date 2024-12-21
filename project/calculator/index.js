
// function for displaying operation on screen
 
    
let display=document.getElementById('screen')
let currentInput=""

function appendToDisplay(value){
    currentInput += value;
    display.value= currentInput;

}

function clearDisplay(){
    currentInput="";
    display.value=""
    
}
function caculate(){
    try{
        currentInput=eval(currentInput);
        display.value = currentInput;
    }
    catch(error){
         display.value=currentInput;
    }
}