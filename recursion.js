/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  //basecase
  if (i === nums.length) return 1;
  //normalcase
  return nums[i] * product(nums, i+1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, longestSoFar=0) {
  //basecase
  if (i === words.length) return longestSoFar;
  //normalcase
  if (words[i].length > longestSoFar) longestSoFar = words[i].length;
  return longest(words, i+1, longestSoFar)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, newStr="") {
  //basecase
  if (i >= str.length) return newStr;
  //normalcase
  newStr += str[i];
  return everyOther(str, i + 2, newStr)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0, palindrome=true) {
  //basecase
  if (i >= str.length) return palindrome;
  //normalcase
  if (str[i] !== str[str.length - i - 1]) palindrome = false;
  return isPalindrome(str, i + 1, palindrome)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  //basecase
  if (idx === arr.length) return -1;
  //normalcase
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=str.length-1, newStr="") {
  //basecase
  if (i === 0) return newStr;
  //normalcase
  newStr += str[i];
  return revString(str, i - 1, newStr)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
