function findShortestStringRecursive() {
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
 *
 */
