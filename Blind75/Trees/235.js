// Lowest COmmon Ancestor of a Binary Search Tree
function lowestCommonAncestor (root, p, q) {
    let current = root

    while (current !== null){
        if (p.val > current.val && q.val > current.val){
            current = current.right
        } else if (p.val < current.val && q.val < current.val){
            current = current.left
        } else {
            return current
        }
    }
};