let a = Number(prompt("Enter a value"));
let b = Number(prompt("Enter b value"));
let c = Number(prompt("Enter c value"));
if(a > b && a > c){
    console.log("a is greatest among b and c");
}else if(b > a && b > c){
    console.log("b is greatest among a and c");
}else{
    console.log("c is greatest among a and b");
}

