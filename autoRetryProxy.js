const autoRetryProxy = (fn, options = {}) => {
  const defaultOptions = {
    retry: 3,
    delay: 1000,
  };

  const retryOptions = { ...defaultOptions, ...options };
  return async (...arg) => {
    let attempts = 0;
    let error;
    while (attempts < retryOptions.retry) {
      try {
        return await fn(...arg);
      } catch (e) {
        attempts++;
        error = e;
        console.warn(
          `Proxy request failed. Attempt ${attempts} of ${retryOptions.retries}`
        );

        await new Promise((res, rej) => setTimeout(res, retryOptions.delay));
      }
    }

    throw error;
  };
};

const fail = autoRetryProxy(
  () => {
    throw new Error("I am failed");
  },
  { retry: 5, delay: 3000 }
);

const success = autoRetryProxy(
  () => {
    console.log("success");
  },
  { retry: 5, delay: 3000 }
);

fail();
success();
