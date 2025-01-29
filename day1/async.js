// let p3=new Promise((resolve , reject)=>{
//  resolve("success");
// });
// p3.then(res=>console.log(res))
// .catch(er=>console.log(er))
// .finally(()=>console.log("finally"))
 

// function fetchusers(){
//     let x=fetch("https://jsonplaceholder.typicode.com/users");
//console.log(x)
//    x.then(res =>(
    //console.log(res.json)
//   
// let p = new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//         resolve("success")

//     },4000);
// });

// async function demo(){
//     console.log("start");
//     let x =await p;
//     console.log(x)
//     console.log("end")
// }
// demo();



 async function demo(){
 let response =  await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  console.log(data);
}
 demo()