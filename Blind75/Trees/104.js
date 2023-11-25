// Maximum Depth of Binary Tree
// DFS
function maxDepth(root) {
    if (!root) {
        return 0
    }

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};

// DFS Interative
function maxDepth(root) {
    if (!root) {
        return 0
    }

    let stack = [[root, 1]]
    let res = 1

    while (stack.length > 0){
        let [node, depth] = stack.pop()

        if (node){
            res = Math.max(res, depth)
            stack.push([node.left, depth + 1])
            stack.push([node.right, depth + 1])
        }
    }

    return res
};

// BFS
function maxDepth(root) {
    if (!root) {
        return 0
    }

    let level = 0
    let queue = [root]

    while (queue.length > 0) {
        let levelSize = queue.length
        
        for (let i = 0; i < levelSize; i++){
            let node = queue.shift()
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        level++
    }

    return level
};