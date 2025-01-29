//without parameters
// function demo(){
//     console.log("function is executing")
// }
// demo();

// //!function with parameters and arguments
// // !let a=10; //parameter, 10=arguments
// 5,6
// 8,9
// 3,4

// function add(a, b){
//     console.log(a+b);

// }
// add(5,6);
// add(3, 4);

//anonyumus function
// function(){

// }

//function expression
// let x= function(){
//     console.log("anoyumus is not executing but executing with variable")
// }
// x();

//iife
// (
//     function(){
//         console.log("iife")
//     }
// )();

//arrow function
// let x = () => {
//     console.log("executed");
// }
// x()

// implicit returns and explicit returns
// function test1(a,b){
//     return a+b;
// }
// console.log(test1(5,5));

// let x =(a, b) =>{
// return a*b;
// }
// console.log(x(2,4));

// let y=(a,b)=>
//     a+b;

// console.log(y(3,4));
// higher order function
// function hof(a){
//     return a();
// }
// let x = hof(function(){return "callback function"});
// console.log(x);

// let y = function(){return "call function"};
// console.log(y());

// let users = []

//closure

function x(){
    let a = 10;
    const b = 20;
    console.log(a, b);
    function y(){
        let p = "js"
        var q = "reactjs"
        console.log(p, q);
        function z(){
            const username = "bindu"
            console.log(username);
            console.log(a);
            console.log(q);
        }
        z();
    }
    y();

}
x();
