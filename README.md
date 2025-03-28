Promise is one of the core concept in Javascript more especifically in async javascript program. 
this repository has 3 files of promisified version of aysncronous function such as fetch(), setTimeout(), fs.readFile(). 

in a nutshell:
Promise is a easier way to write asynchrounous code.

    **
       Promise class take a fuction as a argument and this function actually perform a asynchronous task.
       The first argument of this current function will be called when the async task will completed and 
       a funciton inside (.then) syntax will automatically get called.
    **

   
- The Promise class takes a function (executor function) as an argument.
- This function receives two parameters: resolve and reject. These are functions that control the outcome of the promise.
- When the asynchronous task completes successfully, you call resolve(value), and the .then() function automatically gets triggered, receiving the value.
- If the task fails, you call reject(error), which makes the .catch() function execute.
  


Example Code:
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task completed!"); // This will trigger .then()
    }, 2000);
});

myPromise.then((message) => {
    console.log(message); // Output after 2 sec: "Task completed!"
});
