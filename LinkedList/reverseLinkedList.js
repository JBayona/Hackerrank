/*
You’re given the pointer to the head node of a linked list. Change the next pointers of the nodes so that their order is reversed. The head pointer given may be null meaning that the initial list is empty.

Input Format 
You have to complete the Node* Reverse(Node* head) method which takes one argument - the head of the linked list. You should NOT read any input from stdin/console.

Output Format 
Change the next pointers of the nodes that their order is reversed and return the head of the reversed linked list. Do NOT print anything to stdout/console.

Sample Input

NULL 
2 --> 3 --> NULL

Sample Output

NULL
3 --> 2 --> NULL
Explanation 
1. Empty list remains empty 
2. List is reversed from 2,3 to 3,2

https://www.hackerrank.com/challenges/reverse-a-linked-list/problem
*/

/*
    Reverse a linked list and return the head
    The input list will have at least one element
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function reverseLinkedList(head) {
    let next = null;
    let current = head;
    let prev = null;
    while(current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
