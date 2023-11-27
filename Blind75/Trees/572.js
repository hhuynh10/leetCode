// Subtree of Another Tree
function isSubtree(root, subRoot) {
  function isSameTree(root, subRoot) {
    if (!root && !subRoot) {
      return true;
    }
    if (!root || !subRoot) {
      return false;
    }
    if (root.val !== subRoot.val) {
      return false;
    }

    return (
      isSameTree(root.left, subRoot.left) &&
      isSameTree(root.right, subRoot.right)
    );
  }

  if (!subRoot) {
    return true;
  }
  if (!root) {
    return false;
  }
  if (isSameTree(root, subRoot)) {
    return true;
  }

  return isSubtree(root.right, subRoot) || isSubtree(root.left, subRoot);
}
