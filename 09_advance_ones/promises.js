// javascript is synchronous and single threaded language
// synchronous code is executed line by line and each line waits for the previous line to finish before executing
// asynchronous code is executed without blocking the main thread and can run in the background while the main thread continues to execute

// promises are a way to handle asynchronous code in javascript
// a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value

// a promise can be in one of three states:
// 1. pending: initial state, neither fulfilled nor rejected
// 2. fulfilled: meaning that the operation completed successfully and the promise has a value
// 3. rejected: meaning that the operation failed and the promise has a reason for the failure

// execution context is the environment in which a piece of code is executed. It consists of the variable environment, the scope chain, and the this value. When a function is called, a new execution context is created for that function and added to the call stack. When the function returns, its execution context is removed from the call stack.It executes one line of code at a time and waits for the previous line to finish before executing the next line. This is why javascript is called a synchronous language. However, with the introduction of promises, we can handle asynchronous code in a more elegant way. Promises allow us to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain.

// Blocking Code vs Non Blocking Code
// Blocking code is code that blocks the execution of other code until it finishes. For example, a long-running loop or a synchronous function that takes a long time to execute can block the main thread and prevent other code from running. example : read a large file synchronously, it will block the main thread until the file is read completely, preventing any other code from running during that time.

// Non-blocking code, on the other hand, allows other code to run while it is executing. For example, an asynchronous function that uses promises or callbacks can allow other code to run while it is waiting for a response from a server or a database. example : read a large file asynchronously, it will allow other code to run while it is reading the file, and once the file is read completely, it will execute a callback function or resolve a promise with the file data.

// Example of blocking code
function blockingCode() {
  for (let i = 0; i < 1000000000; i++) {
    // do something
  }
  console.log("Blocking code finished");
}

// Example of non-blocking code
function nonBlockingCode() {
  setTimeout(() => {
    console.log("Non-blocking code finished");
  }, 1000);
}
// which is better Blocking or Non Blocking code?
// Non-blocking code is generally better because it allows other code to run while it is executing, which can improve the performance and responsiveness of your application. Blocking code can cause the main thread to become unresponsive, which can lead to a poor user experience. However, there may be some cases where blocking code is necessary, such as when you need to perform a critical operation that must be completed before any other code can run. In general, it's best to use non-blocking code whenever possible to ensure that your application remains responsive and performs well.But don't always say that non blocking code is best as imagine an example of database query that needs to be executed before any other code can run, in that case blocking code may be necessary to ensure that the query is completed before any other code is executed.

// example where non blocking code is not recommended is suppose we have a user data which we have to store in database and then we have to send a response to the user, in that case we can use blocking code to ensure that the data is stored in the database before sending the response to the user. If we use non-blocking code, there is a chance that the response is sent before the data is stored in the database, which can lead to inconsistencies and errors in our application.

// both are best methods as what matters is the use case of that particular thing 

// creating a promise

