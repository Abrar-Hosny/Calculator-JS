const display = document.getElementById("display");
function appendToDisplay(input){
// here the value of the input element
    display.value+=input;


}

function clearDisplay (){
display.value="";
}

function calculate (){
    try{
        display.value=eval(display.value);

    }
    catch(e){
        display.value="Error" ;
    }

    }
    