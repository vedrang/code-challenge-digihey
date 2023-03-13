module.exports = function encode(str) {
  let count = 1;
  let encodedArr = [];
  const arr = str.split("");
  arr.forEach((char, i) => {
    const prevChar = i - 1;
    if (i === 0) return;
    if (arr[prevChar] === char) {
      count++;
    } else {
      encodedArr.push(`${arr[prevChar]}${count}`);
      count = 1;
    }
  });
  encodedArr.push(`${arr[arr.length - 1]}${count}`);
  return encodedArr.join("");
};
