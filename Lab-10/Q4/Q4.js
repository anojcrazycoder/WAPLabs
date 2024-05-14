// 4. What's the output of the code below when running in Node.js? If for the same code running in browser, what's the output? Why is the output different?

var message = 'Hello World';

function logMessage() {
    console.log(this);
    console.log(this.message);

}

logMessage();

/*
Output in nodejs is:
undefined

When running the same code in browser, the output is:
Hello World 

In Node.js, external declarations do not automatically
 become part of the global object, unlike in browsers where they become
part of the 'window' object, which is the global object for browsers.
Therefore, in a browser environment, "Hello World" is printed, whereas in Node.js,
"undefined" is printed because the context of 'this' is global, and the global 
object does not contain variables such as 'message'. In summary, external declarations
do not become part of the global object in Node.js.

*/