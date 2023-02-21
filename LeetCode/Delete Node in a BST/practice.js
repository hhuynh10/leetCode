class TreeNode {
    constructor(val) {
        this.val = val; 
        this.left = null;
        this.right = null; 
    }
}

function minValueNode(root){
    let current = root
    while (current && current.left){
        return current
    }
}

function deleteNode(root, key){
    if (!root){
        return null
    }

    if (val > root.val){
        root.right = remove(root.right, val)
    } else if (val < root.val) {
        root.left = remove(root.left, val)
    } else {
        if (!root.left){
            return root.right
        } else if (!root.right){
            return root.left
        } else {
            let minNode = minValueNode(root.right)
            root.val = minNode.val
            root.right = remove(root.right, minNode.val)
        }
    }
    return root
}