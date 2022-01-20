//  Maximum and Minimum Value among 5 random 3 digit numbers 

const firstNum = Math.floor(Math.random() * 900) + 100;
const secondNum = Math.floor(Math.random() * 900) + 100;
const thirdNum = Math.floor(Math.random() * 900) + 100;
const fourthNum = Math.floor(Math.random() * 900) + 100;
const fifthNum = Math.floor(Math.random() * 900) + 100;
console.log("Random Numbers : " + firstNum + "," + secondNum + "," + thirdNum + "," + fourthNum + "," + fifthNum);
let maxNum = firstNum;
if (secondNum > maxNum) maxNum = secondNum;
if (thirdNum > maxNum) maxNum = thirdNum;
if (fourthNum > maxNum) maxNum = fourthNum;
if (fifthNum > maxNum) maxNum = fifthNum;
console.log("Maximum Number = " + maxNum);
let minNum = firstNum;
if (secondNum < minNum) minNum = secondNum;
if (thirdNum < minNum) minNum = thirdNum;
if (fourthNum < minNum) minNum = fourthNum;
if (fifthNum < minNum) minNum = fifthNum;
console.log("Minimum Number = " + minNum);