// fn.js
export function checkEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return false;
  }
  return true;
}

export function checkPassword(password) {
  if (!password || password.length < 8) {
    return false;
  }
  return true;
}
