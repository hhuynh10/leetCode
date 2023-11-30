// Kth Smallest Element in a BST
function kthSmallest(root, k) {
  let res = [];

  function inorder(root) {
    if (!root) {
      return;
    }
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  }

  inorder(root);

  for (let i = 0; i < res.length; i++) {
    if (k === i + 1) {
      return res[i];
    }
  }
}
