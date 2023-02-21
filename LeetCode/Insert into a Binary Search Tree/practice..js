class TreeNode {
    constructor(val) {
        this.val = val; 
        this.left = null;
        this.right = null; 
    }
}

function insertIntoBST(root, val){
    if (root == null){
        return new TreeNode(val)
    }

    if (val > root.val){
        root.right = insertIntoBST(root.right, val)
    } else if (val < root.val){
        root.left = insertIntoBST(root.left, val)
    }
    return root
}