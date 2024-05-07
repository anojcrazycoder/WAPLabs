// In the code below there’s a setTimeout call scheduled, then a heavy calculation is run, that takes more than 100ms to finish.

// When will the scheduled function run?

// After the loop.
// Before the loop.
// In the beginning of the loop.
// What is console.log going to show?

let i = 0;

setTimeout(() => console.log(i), 100); // ?

// assume that the time to execute this function is >100ms

for(let j = 0; j < 100000000; j++) {

  i++;

}

/*
The scheduled function passed to setTimeout will run after the loop finishes.
This is because JavaScript has a single-threaded event loop,
and setTimeout does not pause the execution of the code that comes after it. 
Instead, it schedules the callback function to be executed after the specified
delay, but only when the JavaScript engine is free from the current executing context.

Since the loop is a heavy calculation that takes more than 100ms to finish, 
it will block the event loop. The setTimeout callback will be placed in
the event queue and will have to wait until the loop is completed and the call stack is clear.

The value of i logged by console.log will be the final value after the loop 
has finished incrementing i.If the loop increments i from 0 to 100000000, 
then console.log(i) will show 100000000.
*/