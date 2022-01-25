function findShortestStringRecursive(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  let next = findShortestStringRecursive(arr.slice(1))
  return arr[0].length <= next.length ? arr[0] : next;
}

if (require.main === module) {
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));

  console.log("");

  console.log("Expecting: 'b'");
  console.log("=>", findShortestStringRecursive(['b']));

  console.log("");

  console.log("Expecting: 'rose'");
  console.log("=>", findShortestStringRecursive(['rose', 'rose']));

}

module.exports = findShortestStringRecursive;

/**
 * 1. paraphrase
 * 
 * Find shortest string in an array using recursion.
 * 
 * 2. tests
 * 
 * 3. pseudocode
 * 
 * When down to the end, array will have 2 elements. Compare the two and return the shorter.
 * One level up, compare those two and return the shorter, always returning the novel one if equal length.
 * 
 * 4. code (above)
 * 5. refactor
 * 6. optimize given time
 */
