/*
A linked list is said to contain a cycle if any node is visited more than once while traversing the list.

Complete the function provided for you in your editor. It has one parameter: a pointer to a Node object named
that points to the head of a linked list. Your function must return a boolean denoting whether or not there is
a cycle in the list. If there is a cycle, return true; otherwise, return false.

https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle/problem
*/

/*
    Detect a cycle in a Linked List.
    Note that the head may be 'null' if the list is empty.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function hasCycle(head) {
    let slow = head;
    let fast = head;
    
    while (slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) {
            return true;
        }
    }
    return false;
}