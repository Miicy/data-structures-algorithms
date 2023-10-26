class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function isValidBST(root) {
    return isValidBSTHelper(root, -Infinity, Infinity);
  }
  
  function isValidBSTHelper(node, min, max) {
    if (node === null) {
      return true;
    }
  
    // Check if the current node's value is within the valid range
    if (node.val <= min || node.val >= max) {
      return false;
    }
  
    // Recursively check the left and right subtrees
    const leftIsValid = isValidBSTHelper(node.left, min, node.val);
    const rightIsValid = isValidBSTHelper(node.right, node.val, max);
  
    return leftIsValid && rightIsValid;
  }
  
  // Example usage:
  // Create the tree from the given examples
  // Example 1: root = [2,1,3]
  const root1 = new TreeNode(2);
  root1.left = new TreeNode(1);
  root1.right = new TreeNode(3);
  console.log(isValidBST(root1)); // Output: true
  
  // Example 2: root = [5,1,4,null,null,3,6]
  const root2 = new TreeNode(5);
  root2.left = new TreeNode(1);
  root2.right = new TreeNode(4);
  root2.right.left = new TreeNode(3);
  root2.right.right = new TreeNode(6);
  console.log(isValidBST(root2)); // Output: false