/*
Given a list of directory info including directory path, and all the files with contents in this directory, you need to find out all the groups of duplicate files in the file system in terms of their paths.

A group of duplicate files consists of at least two files that have exactly the same content.

A single directory info string in the input list has the following format:

"root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ... fn.txt(fn_content)"

It means there are n files (f1.txt, f2.txt ... fn.txt with content f1_content, f2_content ... fn_content, respectively) in directory root/d1/d2/.../dm. Note that n >= 1 and m >= 0. If m = 0, it means the directory is just the root directory.

The output is a list of group of duplicate file paths. For each group, it contains all the file paths of the files that have the same content. A file path is a string that has the following format:

"directory_path/file_name.txt"

Example 1:

Input:
["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]
Output:
[["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]


Note:

No order is required for the final output.
You may assume the directory name, file name and file content only has letters and digits, and the length of file content is in the range of [1,50].
The number of files given is in the range of [1,20000].
You may assume no files or directories share the same name in the same directory.
You may assume each given directory info represents a unique directory. Directory path and file info are separated by a single blank space.


Follow-up beyond contest:
Imagine you are given a real file system, how will you search files? DFS or BFS?
If the file content is very large (GB level), how will you modify your solution?
If you can only read the file by 1kb each time, how will you modify your solution?
What is the time complexity of your modified solution? What is the most time-consuming part and memory consuming part of it? How to optimize?
How to make sure the duplicated files you find are not false positive?
*/

/**
 * @param {string[]} paths
 * @return {string[][]}
 */

/*
  i: list of directory info: directory path, all files
  o: all groups of duplicate files & their paths

  c: duplicate files: >= 2 files with same content
  c: each group contains all file paths of files with same content
  c: filepath has format `directory_path/file_name.txt`

  2 distinct goals:
    1. get full file path
    2. group items with similar contents

  ex: ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]
  content  |  path
  'abcd'       "root/a/1.txt", "root/c/3.txt"
  'efgh'   |   "root/a/2.txt", "root/c/d/4.txt" "root/4.txt"

  edge: no file: "root/a"=> return nothing from this


  ~pseudocode~
  create groups object
  iterate over paths input
    ex. "root/a 1.txt(abcd) 2.txt(efgh)"
    1. split on a space
    2. path-to-here is the first element
    3. all other elements are filenames and text
    iterate over individual files (1:path.length - 1)
      extract the file contents (between parens)
      everything left of parens is filename
      groups[contents]: push in path-to-here plus filename (separated by '/')

  create result array
  iterate over groups
    add each group to result array

  return result array

*/
var findDuplicate = function(paths) {
  let groups = {};

  const addToGroups = (content, fullPath) => {
      if (!groups[content]) {
          groups[content] = [];
      }
      groups[content].push(fullPath);
  }

  paths.forEach(path => {
      let pathPieces = path.split(' ');
      let pathToHere = pathPieces[0];
      for (let i = 1; i < pathPieces.length; i++) {
          let [fileName, rightOfParen] = pathPieces[i].split('(');
          let contents = rightOfParen.slice(0, -1);
          let thisPath = pathToHere + '/' + fileName;
          addToGroups(contents, thisPath);
      }
  });


  let result = [];
  for (let key in groups) {
      if (groups[key].length > 1) {
          result.push(groups[key]);
      }
  }
  return result;
};