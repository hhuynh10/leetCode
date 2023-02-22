var kthSmallest = function(root, k) {
    let arr = []
    inOrder(root, arr)

    return findKth(arr, k)
};

function inOrder(root, arr){
    if (!root){
        return
    }

    inOrder(root.left, arr)
    arr.push(root.val)
    inOrder(root.right, arr)
}

function findKth(arr, k){
    for (let i = 0; i < arr.length; i++){
        if(i === k-1){
            return arr[i]
        }
    }
}