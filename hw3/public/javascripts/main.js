//Ian Thompson

//html elements
var Orderbutton = document.getElementById("orderbutton");
var note = document.getElementById("notes");
var warning = document.getElementById("warning");
var numselected = document.getElementById("quantity");
var plain = document.getElementById("Plain");
var cherry = document.getElementById("Cherry");
var chocolate = document.getElementById("Chocolate");
var toppings = document.getElementById("topping");
var notetxt = document.getElementById("notetxt");
var numtxt = document.getElementById("numtxt");
var numplain = document.getElementById("numplain");
var numcherry = document.getElementById("numcherry");
var numchocolate = document.getElementById("numchocolate");
var orderText = document.getElementById("orderText");
var orderNotes = document.getElementById("orderNotes");
var monthButton = document.getElementById("month");
var Jan = document.getElementById("Jan");
var Feb = document.getElementById("Feb");
var Mar = document.getElementById("Mar");
var Apr = document.getElementById("Apr");
var May = document.getElementById("May");
var Jun = document.getElementById("Jun");
var Jul = document.getElementById("Jul");
var Aug = document.getElementById("Aug");
var Sep = document.getElementById("Sep");
var Oct = document.getElementById("Oct");
var Nov = document.getElementById("Nov");
var Dec = document.getElementById("Dec");
var selected = 0;

//remove warning initially
warning.style.display="none";

//sends a warning to the user that it cheescake contains dairy
function sendWarning(){
    warning.style.display="inline";
}

//sends the user to a newish page with thier stats of order
function sendOrder(){
    //clear unnecessary information
    numselected.style.display="none";
    plain.style.display="none";
    cherry.style.display="none";
    chocolate.style.display="none";
    Orderbutton.style.display="none";
    toppings.style.display="none";
    note.style.display="none";
    warning.style.display="none";
    notetxt.style.display="none";
    //change text to a thank you
    numtxt.textContent = "Thank you! Your order has been placed";

    var top = "";
    switch(selected){
        case 0: 
            top="No"
            break;
        case 1:
            top="Plain"
            break;
        case 2:
            top="Cherry"
            break;
        case 3:
            top="Chocolate"
            break;
        default:
            top="what?"
            break;
    }

    orderText.textContent="You ordered "+numselected.value+" Cheesecakes, with "+top+" Toppings";
    orderNotes.textContent="Notes: "+note.value;
}

//returns 1 if the input contains the word vegan, and 0 otherwise
function checkIfVegan(input){
    for(var i=0; i<input.length-1; i++){
        if(input[i]=="v"||input[i]=="V" && input.length>i+5){
            if((input[i+1]=="e"||input[i+1]=="E") && (input[i+2]=="g"||input[i+2]=="G") && (input[i+3]=="a"||input[i+3]=="A") && (input[i+4]=="n"||input[i+4]=="N")){
                return 1;
            }
        }
    }
    return 0;
}
