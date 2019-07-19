export const checkInput = (payload) => {
  for (const key in payload) {
    if (payload[key] == null || payload[key] == '') {
      return false;
    }
  }
  return true;
};
