function findShortestStringRecursive(arr) {
  // if(arr.length === 1) {
  //   return arr[0];
  // }
  // else {
  //   return arr[0].length > arr[1].length 
  //     ? findShortestStringRecursive(arr.slice(1)) 
  //     : findShortestStringRecursive([...arr.slice(0,1),...arr.slice(2)]);
  // }

  // cleaner solution

  if(arr.length === 1) {
    return arr[0];
  }
  else {
    const next = findShortestStringRecursive(arr.slice(1));
    return arr[0].length > next.length ? next : arr[0];
  }
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
