// Validate Binary Search Tree
function isValidBST (root) {
    function isValid(root, left, right){
        if (!root){
            return true
        }
        if (!(root.val > left && root.val < right)){
            return false
        }

        return (isValid(root.left, left, root.val) &&
                isValid(root.right, root.val, right))
    }

    return isValid(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
};