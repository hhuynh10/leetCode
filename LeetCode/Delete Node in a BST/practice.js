class TreeNode {
    constructor(val) {
        this.val = val; 
        this.left = null;
        this.right = null; 
    }
}

var deleteNode = function(root, key) {
    if (!root){
        return null
    }

    if (key > root.val){
        root.right = deleteNode(root.right, key)
    } else if (key < root.val) {
        root.left = deleteNode(root.left, key)
    } else {
        if (!root.left){
            return root.right
        } else if (!root.right){
            return root.left
        }
        let current = root.right
        while (current.left){
            current = current.left
        }
        root.val = current.val
        root.right = deleteNode(root.right, root.val)
    }
    return root
};