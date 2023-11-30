// Binary Tree Level Order Traversal
function levelOrder(root) {
    let result = []
    let queue = [root]

    while (queue.length > 0){
        let length = queue.length
        let level = []

        for (let i = 0; i < length; i++){
            let node = queue.shift()

            if (node){
                level.push(node.val)
                queue.push(node.left)
                queue.push(node.right)
            }
        }

        if (level.length > 0){
            result.push(level)
        }
    }

    return result
}