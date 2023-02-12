class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node(5);
const b = new Node(2);
const c = new Node(7);
const d = new Node(11);
const f = new Node(8);

a.next = b
b.next = c
c.next = d
d.next = f

function total(head){
    let total = 0
    let current = head
    while (current != null){
        total += current.val
        current = current.next
    }
    console.log(total)
    return total
}

total(a)