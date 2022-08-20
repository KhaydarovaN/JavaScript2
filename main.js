var elForm = document.querySelector('.form');
var elInput1 = document.querySelector('.son');
var elInput2 = document.querySelector('.daraja');
var elBox1 = document.querySelector('.box1');

elForm.addEventListener('submit', function(evt){
    evt.preventDefault();

    var son = Number(elInput1.value);
    var daraja = Number(elInput2.value);

    var s = 1;
    for(var i = 1; i <= daraja; i++){
        s *= son;
    }

    elBox1.textContent = "Daraja: " + s;
});