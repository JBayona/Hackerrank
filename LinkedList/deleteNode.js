/*

You’re given the pointer to the head node of a linked list and the position of a node to delete. Delete the node at the given position and return the head node. A position of 0 indicates head, a position of 1 indicates one node away from the head and so on. The list may become empty after you delete the node.

Input Format 
You have to complete the Node* Delete(Node* head, int position) method which takes two arguments - the head of the linked list and the position of the node to delete. You should NOT read any input from stdin/console. position will always be at least 0 and less than the number of the elements in the list.

Output Format 
Delete the node at the given position and return the head of the updated linked list. Do NOT print anything to stdout/console.

Sample Input

1 --> 2 --> 3 --> NULL, position = 0 
1 --> NULL , position = 0

Sample Output

2 --> 3 --> NULL
NULL

https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/problem
*/

/*
    Delete Node at a given position in a linked list
    head pointer input could be NULL as well for empty list
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function deleteNode(head, position) {
    if(!position) {
        return head.next;
    }
    let prev = head;
    while(position-1 > 0) {
        prev = prev.next;
        position--;
    }
    //Jump the node (remove)
    prev.next = prev.next.next;
    return head;
}
