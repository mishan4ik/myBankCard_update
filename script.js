let sum = document.getElementById("sum")
let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");
let inp = document.getElementById("inp");
let answer = document.getElementById("answer")
let veriable = 50000;
sum.innerHTML = veriable;

btn.onclick = function() {
    

    

    if(veriable == 0){

        answer.innerHTML = "Поповніть баланс картки"

    }

    else if(inp.value > veriable){

        answer.innerHTML = "На Вашій карці не достаньо коштів"



    }
    else if(inp.value <= veriable){

        veriable = veriable - inp.value;

        sum.innerHTML = veriable;

    }
    

}
btn1.onclick =function() {

        veriable = veriable + Number(inp.value);

        sum.innerHTML = veriable;



}