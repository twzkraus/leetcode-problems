/*
In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.



Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).


Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
All characters in words[i] and order are English lowercase letters.
*/

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */

/*
  i: sequence of words and order of alphabet
  o: boolean if words are sorted lexicographically

  helper function to compare words--
    compare indices of words in their alphabet. If index of first is less than index of second, return true
        if equal, move onto next char
  use js object to get indices of chars
*/
var isAlienSorted = function(words, order) {
  let indices = {};
  order.split('').forEach((char, i) => {
      indices[char] = i;
  });

  var word1isGreater = function(word1, word2) {
      let len = Math.min(word1.length, word2.length);
      for (let i = 0; i < len; i++) {
          let char1 = word1[i];
          let char2 = word2[i];
          if (indices[char1] > indices[char2]) {
              return true;
          } else if (indices[char1] < indices[char2]) {
              return false;
          }
      }
      // one word is longer: lexicographically sorted if first word is shorter
      return word1.length > word2.length;
  }

  for (let i = 0; i < words.length - 1; i++) {
      if (word1isGreater(words[i], words[i + 1])) {
          return false;
      }
  }
  return true;

};