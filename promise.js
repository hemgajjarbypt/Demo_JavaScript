// const promiseOne = new Promise(function(resolve, reject){
//     //do an async task
//     setTimeout(function(){
//         console.log("Async task is Completed.");
//         resolve();
//     },2000)
// })

// promiseOne.then(function(){
//     console.log("Promise Consumed");
// })



// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({name:"John", email:"john@google.com"});
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user.name);
// })



// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if (!error) {
//             resolve({name:"Merry", email:"merry@google.com"})
//         }
//         else{
//             reject('Error Somthing went wrong')
//         }
//     }, 1000)
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.name;
// }).then((myname) => {
//     console.log(myname);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("Finally"))



// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if (!error) {
//             resolve({name:"Merry", email:"merry@google.com"})
//         }
//         else{
//             reject('Error Somthing went wrong')
//         }
//     }, 1000)
// })

// async function consumePromiseFive(){
//      try {
//         const response = await promiseFive
//         console.log(response);
//      } catch (error) {
//         console.log(error);
//      }
// }

// consumePromiseFive()




fetch('https://randomuser.me/api/')
    .then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data.results[0].name.first);
    }).catch((error) => console.log(error))