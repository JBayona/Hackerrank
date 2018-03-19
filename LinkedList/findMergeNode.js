/*
Given pointers to the head nodes of  linked lists that merge together at some point, find the Node where the two lists merge.
It is guaranteed that the two head Nodes will be different, and neither will be NULL.

In the diagram below, the two lists converge at Node x:

[List #1] a--->b--->c
                     \
                      x--->y--->z--->NULL
                     /
     [List #2] p--->q
Complete the int FindMergeNode(Node* headA, Node* headB) method so that it finds and returns the data value of the Node where the two lists merge.

https://www.hackerrank.com/challenges/find-the-merge-point-of-two-joined-linked-lists/problem
*/

/*
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

//Opción 1
function findMergeNode(headA, headB) {
    let lenA = getListLength(headA); //O(m)
    let lenB = getListLength(headB); //O(n)
    let B = headB;
    for(let i = 0; i < lenA; i++) { //O(mn)
        B = headB;
        for(let j = 0; j < lenB; j++) {
            if(headA === B) {
                return headA.data;
            }
            B = B.next;
        }
        headA = headA.next;
    }
    return null; //Not merging point
}

function getListLength(head) {
    let len = 0;
    let curr = head;
    while(curr) {
        len++;
        curr = curr.next;
    }
    return len;
}