let x = Number(prompt("Enter x value"));
let y = Number(prompt("Enter y value"));
let z = Number(prompt("Enter z value"));
switch(true){
    case x > y && x > z :
        console.log("x is greatest among y and z");
        break;
    case y > x && y > z :
        console.log("y is greatest among x and z");
        break;
    default :
    console.log("z is greatest among x and y");
}