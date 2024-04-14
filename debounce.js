// Debouncing is like a waiting game for functions.
// It waits for a set amount of time after the last call before actually executing the function.
// This ensures you only get the latest or most stable data, especially for frequent user interactions like typing or scrolling.

let timeOutId;
const debounce = (callback, delay) => {
  clearTimeout(timeOutId);
  timeOutId = setTimeout(() => {
    callback();
  }, delay);
};

for (let i = 0; i < 50; i++) {
  debounce(() => {
    console.log("called");
  }, 3000);
}
