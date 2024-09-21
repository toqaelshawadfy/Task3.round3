////Filtering an Array////
function getEvenNumbers(arr){
    return arr.filter(num => num % 2 === 0);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = getEvenNumbers(numbers);
console.log(evenNumbers); 

/////Find the Largest Number/////////////
function getLargestNumber(arr) {
    return Math.max(...arr);
}
const mynumbers=[1,5,7,2,9]
const largestNumber = getLargestNumber(mynumbers);
console.log(largestNumber)

///////////Reverse a String///////
function reverseString(str) {
    return str.split('').reverse().join('');
}
const string = "Hello, World!";
const reversedString = reverseString(string);
console.log(reversedString)

///Remove Duplicates/////
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
const exNumbers=[1,6,7,9,0,1,3,3,9]
const removeDuplicatesNumbers=removeDuplicates(exNumbers)
console.log(removeDuplicatesNumbers)
  
  
  