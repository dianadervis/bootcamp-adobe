// function calculate(a, b){
//     const obj = {
//         add: ()=> {
//           return a+b;
//         },
//         sub: ()=>  {
//             return a-b;
//         }

// }
//     return obj;
// };

// const calculator  = calculate(10,5);
// console.log(calculator);
// console.log(calculator.add())
// console.log(calculator.sub())

const apiURL = `https://jsonplaceholder.typicode.com/users/1`;

fetch(apiURL)
  .then(response => response.json())
  .then(json => console.log(json.name))
  //.catch(error => console.log("error"));
