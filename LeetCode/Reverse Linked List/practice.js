class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const f = new Node("F");

function reverseList(head){
    let prev = null
    let current = head
    while (current !== null){
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }
    console.log(prev)
    return prev
}

reverseList(a)