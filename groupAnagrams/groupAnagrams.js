/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

/*
  i: array of strings strs
  o: 2D array with anagrams grouped together
  c: 1 <= strs.length <= 10**4
     0 <= strs[i].length <= 100
     strs[i] consists of lower-case english letters
     ASSUME: No spaces
  strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
let expectedR     result = [['bat'],['nat', 'tan'],['ate', 'eat', 'tea']]
  strs = [""]
let expectedR     result = [[""]]
  strs = ["a"]
let expectedR     result = [["a"]]

  high level: examine characters present in each string. If they contain all the same chars in the same quantities, they are anagrams

  create result array
  create unique anagrams array
  for each string
    make a character count object including its characters and length
      iterate over unique anagrams array
        check each key in the current character counts array
          helper function--anagramAlreadyPresent
            if anagramAlreadyPresent
              add it to result array at the array of the existing anagram
            else
              push it as a new array into the result array
              add anagram object and result array index to unique anagrams array

  helper function: anagramAlreadyPresent
  i: character count object and unique anagrams array
  o: index of string's anagram in array, if applicable. Otherwise, false
    iterate over unique anagrams, compare it to character count object
      if exactly equal, return true
    return false

  helper function: getCharCount
    return object with keys of 'length' as well as each character in string and its counts
*/

var groupAnagrams = function(strs) {
  let result = [];
  let uniqueAnagrams = [];
  strs.forEach(string => {
    const thisCharCount = getCharCount(string);
    let indexOfThisAnagram;
    let found = false;
    let i = 0;
    while (!found && i < uniqueAnagrams.length) {
      indexOfThisAnagram = anagramAlreadyPresent(thisCharCount, uniqueAnagrams[i], i);
      if (indexOfThisAnagram >= 0) {
        found = true;
      }
      i++;
    }
    if (indexOfThisAnagram >= 0) {
      if (!result[indexOfThisAnagram]) {
        result[indexOfThisAnagram] = [];
      }
      result[indexOfThisAnagram].push(string);
    } else {
      result.push([string]);
      uniqueAnagrams.push(thisCharCount);
    }
  });
  return result;
};

var getCharCount = function(string) {
  let obj = {};
  obj.length = string.length;
  for (let i = 0; i < string.length; i++) {
    if (!obj[string[i]]) {
      obj[string[i]] = 1;
    } else {
      obj[string[i]]++;
    }
  }
  return obj;
};

var anagramAlreadyPresent = function(count, uniqueAnagram, index) {
  let keysToCount = 0;
  for (let key in count) {
    keysToCount++;
  }
  let keysCounted = 0;
  while (keysCounted < keysToCount) {
    for (let key in uniqueAnagram) {
      if (count[key] !== uniqueAnagram[key]) {
        return undefined;
      } else {
        keysCounted++;
      }
      if (keysCounted === keysToCount) {
        return index;
      }
    }
  }
};

/* Test Cases */
// let strs, expectedResult;
// strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
// expectedResult = [['bat'],['nat', 'tan'],['ate', 'eat', 'tea']];
// console.log(groupAnagrams(strs));
// strs = [""];
// expectedResult = [[""]];
// console.log(groupAnagrams(strs));
// strs = ["a"];
// expectedResult = [["a"]];
// console.log(groupAnagrams(strs));
