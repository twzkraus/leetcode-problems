/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return True if the path crosses itself at any point, that is, if at any time you are on a location you've previously visited. Return False otherwise.

Input: path = "NES"
Output: false
Explanation: Notice that the path doesn't cross any point more than once.

Example 2:
Input: path = "NESWW"
Output: true
Explanation: Notice that the path visits the origin twice.
*/

/**
 * @param {string} path
 * @return {boolean}
 */

/*
  i: string of path to take
  o: boolean whether point visited has been visited before

  split path to get vals
  keep track of coordinates visited
*/
var isPathCrossing = function(path) {
  let steps = path.split('');
  let position = [0, 0];
  let visited = {};

  var markPosition = () => {
      visited[`${position[0]},${position[1]}`] = true;
  };

  markPosition();

  for (let i = 0; i < steps.length; i++) {
      let step = steps[i];
      if (step === 'N') {
          position[1] += 1;
      } else if (step === 'E') {
          position[0] += 1;
      } else if (step === 'S') {
          position[1] -= 1;
      } else if (step === 'W') {
          position[0] -= 1;
      }
      if (visited[`${position[0]},${position[1]}`]) {
          return true;
      }
      markPosition();
  }
  return false;
};
