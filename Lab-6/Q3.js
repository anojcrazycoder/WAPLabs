function printNumbers(from, to) {
    if (from > to) {
        console.log('The "from" number must be less than the "to" number.');
        return; // Exit the function if the condition is not met.
      }

    let current = from;
    let timerId = setInterval(function() {
      console.log(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
  
  // Test-case
  printNumbers(1, 5);//positive test case
  printNumbers(5, 1); // Negative test case