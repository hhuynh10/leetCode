// Construct Binary Tree from Preorder and Inorder Traversal
function buildTree(preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }

  let root = new TreeNode(preorder[0]);
  let mid = inorder.indexOf(preorder[0]);

  let leftInorder = inorder.slice(0, mid);
  let rightInorder = inorder.slice(mid + 1);

  let leftPreorder = preorder.slice(1, 1 + leftInorder.length);
  let rightPreorder = preorder.slice(1 + leftInorder.length);

  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);

  return root;
}
