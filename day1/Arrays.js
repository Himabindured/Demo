// let users = [ "bhanu", "ramya"]
// users.map((user, i)=>{
//     console.log(user, i);
// })
// let x = users.forEach((user, i)=> {
//     return user;
// });
// console.log(x);

let userData = {
    name:"bindu",
    age :20,
    city:"hyderabad"
};
console.log(userData.name , typeof(userData));

let x =JSON.stringify(userData);
console.log(x , typeof(x));

let y = JSON.parse(x);
console.log(y);