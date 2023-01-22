export const getSafe = (fn, defaultVal) => {
    try {
      return fn();
    } catch (_e) {
      return defaultVal;
    }
  };