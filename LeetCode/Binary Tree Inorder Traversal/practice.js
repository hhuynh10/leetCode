class TreeNode {
    constructor(val) {
        this.val = val; 
        this.left = null;
        this.right = null; 
    }
}

var inorderTraversal = function(root) {
    let list = []
    
    function inorder(root){
        if(!root){
            return
        }
        inorder(root.left)
        list.push(root.val)
        inorder(root.right)
    }

    inorder(root)
    return list
};