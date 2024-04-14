// Throttling is like a speed bump for functions.
// It limits how often they can be called within a certain time window (delay).
// This prevents them from running too fast and overwhelming the system.

const Throttle = (callback, delay) => {
  let lastTime = 0;
  return (...arg) => {
    console.log("call init");
    const now = new Date().getTime();
    if (now - lastTime < delay) return;
    lastTime = now;
    callback(...arg);
  };
};

const withThrottle = Throttle((i) => {
  console.log("i", i);
}, 3000);

const arr = Array(50).fill(null);

async function call() {
  for (let i = 0; i < arr.length; i++) {
    await new Promise((res, rej) => {
      setTimeout(() => {
        withThrottle(i);
        return res(true);
      }, 1000);
    });
  }
}
call();
