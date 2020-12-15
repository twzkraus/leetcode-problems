/*
Given the string croakOfFrogs, which represents a combination of the string "croak" from different frogs, that is, multiple frogs can croak at the same time, so multiple “croak” are mixed. Return the minimum number of different frogs to finish all the croak in the given string.

A valid "croak" means a frog is printing 5 letters ‘c’, ’r’, ’o’, ’a’, ’k’ sequentially. The frogs have to print all five letters to finish a croak. If the given string is not a combination of valid "croak" return -1.



Example 1:

Input: croakOfFrogs = "croakcroak"
Output: 1
Explanation: One frog yelling "croak" twice.
Example 2:

Input: croakOfFrogs = "crcoakroak"
Output: 2
Explanation: The minimum number of frogs is two.
The first frog could yell "crcoakroak".
The second frog could yell later "crcoakroak".
Example 3:

Input: croakOfFrogs = "croakcrook"
Output: -1
Explanation: The given string is an invalid combination of "croak" from different frogs.
Example 4:

Input: croakOfFrogs = "croakcroa"
Output: -1
*/

/*
  i: string croakOfFrogs
  o: min. # of different frogs to finish all croaks given

  c: valid croak: frog printing 5 letters 'croak' sequentially
  c: frogs need to print all 5 letters to finish a croak
  c: invalid combination: return -1

  ex: 'croakcroak': no overlap on croaks: 1 frog
  ex: 'cccrrroooaaakkk': 3 frogs
  ex: 'crcoakroak': overlap on croaks. 2 frogs at least
  ex: 'croakcrook': -1. invalid
  ex: 'croakcroa': -1. invalid.

  hl: look for overlap in croaks to determine number of frogs concurrently croaking

  idea: croak ends on a k. consider chars from first c to first k
    if there's more than just 'roa' between, it's possible to be multiple frogs

  idea: remove first of each 'c r o a k' chars, replace with placeholder
    any placeholder in between future croaks means another frog is croaking

  idea: start by looking for invalid. count chars, return -1 if counts are not equal for c r o a k

  ~~placeholder option~~
  set frog counter to 0
  create placeholder indicator, make it 1
  find first c in string, replace with placeholder
    keep doing that for other chars in c r o a k
  add 1 to placeholder
  ex: 1111122222
      1111222221
      1212121212
  max # returned: equal to placeholder. min: 1 (if not na: that would be -1)
  consider new string, look for overlap: if any, add 1 to frog counter

  f(x) countOverlap(str)
    iterate through string for 5 chars
    if, before you get to 5th count of this placeholder, you hit another placeholder, that means there is overlap--save the type of overlap (e.g. 2 in a group of 1's)

*/

var countOverlap = function(string, placeholder) {
  let overlaps = {};
  let countI = 0;
  let totalI = 5;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === placeholder) {
      countI++;
    }
    if (countI < totalI && string[i] !== placeholder) {
      overlaps[placeholder] = true;
    }
  }
  return Object.keys(overlaps).length;
}

var minNumberOfFrogs = function(croakOfFrogs) {
  let countOfFrogs = 0;

  let strCopy = croakOfFrogs.slice();
  let placeholder = 1;
  let croak = 'croak';
  let valid = true;
  while (strCopy.indexOf('k') >= 0 && valid) {
    croak.split('').forEach(char => {
      let i = strCopy.indexOf(char);
      if (i >= 0) {
        strCopy[i] = placeholder;
        console.log(strCopy);
      } else {
        valid = false;
      }
    });
  }
  if (!valid) {
    return -1;
  }

  for (let i = 1; i <= placeholder; i++) {
    countOfFrogs += countOverlap(strCopy, i);
  }

  return countOfFrogs;
};


