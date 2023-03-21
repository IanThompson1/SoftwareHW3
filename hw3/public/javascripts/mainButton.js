buttonHandler = function(event){
    if(checkIfVegan(note.value) == 1){//checks if input has the word vegan
        sendWarning();
    }else if(selected==0){
        alert("Warning! You must select a topping");
    }else{
        sendOrder();
    }
}

$(function() {
    $("button").click(buttonHandler);
});