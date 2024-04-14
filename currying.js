// Curry help you define pre argument to any function so we can you the same function multiple time without passing same data again and again
// maybe useful Not sure.
// did't understand this and also curring with placeholder.

const add = (a, b) => {
  return a + b;
};

const curry = (fn) => {
  return (a) => {
    return (b) => {
      return fn(a, b);
    };
  };
};

// Create an carry addition function
const addCurry = curry(add);

// From addCurry create AddFive function
const addFive = addCurry(5);

// From AddFive get result of our requirement
const result = addFive(10);

// print the result
console.log("result", result);
