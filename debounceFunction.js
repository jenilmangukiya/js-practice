const debounce = (callback, delay) => {
  let timeOutId;
  return function (...arg) {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      callback(...arg);
    }, delay);
  };
};

const WithDebounce = debounce(() => {
  console.log("called");
}, 3000);
for (let i = 0; i < 50; i++) {
  WithDebounce();
}
