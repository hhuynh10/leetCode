class TreeNode {
    constructor(val) {
        this.val = val; 
        this.left = null;
        this.right = null; 
    }
}

function searchBST(root, val){
    if (!root){
        return nul
    }

    if (val > root.val){
        return searchBST(root.right, val)
    } else if (val < root.val){
        return searchBST(root.left, val)
    } else {
        return root
    }
}