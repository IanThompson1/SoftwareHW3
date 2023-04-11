// Ian Thompson

janHandler = function(event){
    monthButton.textContent = "Jan";
    postData();
}

$(function() {
    Jan.addEventListener('click', janHandler);
});

FebHandler = function(event){
    monthButton.textContent = "Feb";
    postData();
}



$(function() {
    Feb.addEventListener('click', FebHandler);
    postData();
});

MarHandler = function(event){
    monthButton.textContent = "Mar";
    postData();
}

$(function() {
    Mar.addEventListener('click', MarHandler);
});

AprHandler = function(event){
    monthButton.textContent = "Apr";
    postData();
}

$(function() {
    Apr.addEventListener('click', AprHandler);
});

MayHandler = function(event){
    monthButton.textContent = "May";
    postData();
}

$(function() {
    May.addEventListener('click', MayHandler);
});

JunHandler = function(event){
    monthButton.textContent = "Jun";
    postData();
}

$(function() {
    Jun.addEventListener('click', JunHandler);
});

JulHandler = function(event){
    monthButton.textContent = "Jul";
    postData();
}

$(function() {
    Jul.addEventListener('click', JulHandler);
});

AugHandler = function(event){
    monthButton.textContent = "Aug";
    postData();
}

$(function() {
    Aug.addEventListener('click', AugHandler);
});

SepHandler = function(event){
    monthButton.textContent = "Sep";
    postData();
}

$(function() {
    Sep.addEventListener('click', SepHandler);
});

OctHandler = function(event){
    monthButton.textContent = "Oct";
    postData();
}

$(function() {
    Oct.addEventListener('click', OctHandler);
});

NovHandler = function(event){
    monthButton.textContent = "Nov";
    postData();
}

$(function() {
    Nov.addEventListener('click', NovHandler);
});

DecHandler = function(event){
    monthButton.textContent = "Dec";
    postData();
}

$(function() {
    Dec.addEventListener('click', DecHandler);
});

//function that colllects and resets the post data
function postData(){
    $.post('/orders',null,function(req, res, next){
        var postData = req;
        var objData = JSON.parse(postData);
        $(".list").html("<li> "+objData[0].quantity+" "+ objData[0].topping +" </li>" + "<li> "+objData[1].quantity+" "+ objData[1].topping +" </li>" + "<li> "+objData[2].quantity+" "+ objData[2].topping +" </li>");
    });
}