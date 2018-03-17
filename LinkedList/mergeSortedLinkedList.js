/*

You’re given the pointer to the head nodes of two sorted linked lists. The data in both lists will be sorted in ascending order.
Change the next pointers to obtain a single, merged linked list which also has data in ascending order.
Either head pointer given may be null meaning that the corresponding list is empty.

Input Format 
You have to complete the Node* MergeLists(Node* headA, Node* headB) method which takes two arguments - the heads of the two sorted linked lists to merge.
You should NOT read any input from stdin/console.

Output Format 
Change the next pointer of individual nodes so that nodes from both lists are merged into a single list.
Then return the head of this merged list. Do NOT print anything to stdout/console.

Sample Input

1 -> 3 -> 5 -> 6 -> NULL
2 -> 4 -> 7 -> NULL

15 -> NULL
12 -> NULL

NULL 
1 -> 2 -> NULL
Sample Output

1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> NULL
12 -> 15 -> NULL
1 -> 2 -> NULL
Explanation 
1. We merge elements in both list in sorted order and output.

https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists/problem
*/

function Node(val,  next) {
    this.val = val;
    this.next = next || null;
}

function mergeLinkedLists( headA, headB) {
    // Check if we could have a null value from one of the lists
    if(!headA) return headB
    if(!headB) return headA
    
    let newHead = null;
    let current = null;
    
    if(headA.val < headB.val) {
        newHead = headA;
        current = headA;
        headA = headA.next;
    } else {
        newHead = headB;
        current = headB;
        headB = headB.next
    }
    
    while(headA && headB) {
        if(headA.val < headB.val) {
        current.next = headA;
        headA = headA.next;
        } else {
        current.next = headB;
        headB = headB.next;
        }
        current = current.next;
    }

    if(!headA) {
    current.next = headB;
    } else {
    current.next = headA;
    }
    return newHead;
}


listA = new Node(1, new Node(3, new Node(5, new Node(6))));
listB = new Node(2, new Node(4, new Node(7)));
console.log(mergeLinkedLists(listA, listB));
