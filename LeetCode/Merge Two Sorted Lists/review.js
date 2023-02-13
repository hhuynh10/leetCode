class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new ListNode(3);
const b = new ListNode(5);
const c = new ListNode(6);
const d = new ListNode(1);
const f = new ListNode(7);

a.next = b
b.next = c

d.next = f

function mergeTwoLists(list1, list2){
    let dummy = new ListNode()
    let tail = dummy

    while(list1 && list2){
        let isL2greater = list2.val >= list1.val
        let isL2lesser = list1.val > list2.val

        if (isL2greater){
            tail.next = list1
            list1 = list1.next
        }
        if (isL2lesser){
            tail.next = list2
            list2 = list2.next
        }
        tail = tail.next
    }
    tail.next = list1 || list2
    return dummy.next
}

console.log(mergeTwoLists(a, d))