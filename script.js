var input1 = document.getElementById('input1');
var operator = document.getElementById('operator');
var input2 = document.getElementById('input2');

var result = 0;

function calculate() {
    var v1 = input1.value;
    var v2 = operator.value;
    var v3 = input2.value;

    if(v2 == '+') {
        result = Number(v1) + Number(v3);
    }
    else if(v2 == '-') {
        result = Number(v1) - Number(v3);
    }
    else if(v2 == '*') {
        result = Number(v1) * Number(v3);
    }
    else if(v2 == '/') {
        result = Number(v1) / Number(v3);
    }
    else if(v2 == '%') {
        result = Number(v1) % Number(v3);
    }
    else {
        result = 'invalid';
    }
    document.getElementById('result').value = result;
}
function erase() {
    input1.value = " ";
    operator.value = " ";
    input2.value = " ";
    document.getElementById('result').value = " ";
}
