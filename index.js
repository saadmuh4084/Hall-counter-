// console.log(5);

// function test()
// {
//    var x =2;
//    console.log(x);
//    return true;
// }
// console.log(test());
//let myAge =10;
//let humandogratio=7;
//let mydogage= myAge* humandogratio;
//console.log(mydogage);
//let count = 0;

let countEl = document.getElementById("count-el"); 
let saveEl= document.getElementById("save-el"); 
console.log(countEl);

let count = 0;

function increment() {
    count +=  1;
    countEl.textContent = count;
}
function save(){
   let sp= count+" - "
   saveEl.textContent += sp 
   countEl.textContent = 0
   count=0
}