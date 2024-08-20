/***** Question 2 ********/
function SumSquares(list) {
  let sum = 0;

  for (let element of list) {
    if (Array.isArray(element)) {
      sum += SumSquares(element); // Recursively call SumSquares for nested lists
    } else if (typeof element === 'number') {
      sum += element * element; // Square the number and add to the sum
    }
  }

  return sum;
}

