/*
You're given the pointer to the head node of a sorted linked list, where the data in the nodes is in ascending order.
Delete as few nodes as possible so that the list does not contain any value more than once.
The given head pointer may be null indicating that the list is empty.

For now do not be concerned with the memory deallocation. In common abstract data structure scenarios, deleting an element might
also require deallocating the memory occupied by it. For an initial intro to the topic of dynamic memory
please consult: http://www.cplusplus.com/doc/tutorial/dynamic/

Input Format 
You have to complete the Node* RemoveDuplicates(Node* head) method which takes one argument - the head of the sorted linked list.
You should NOT read any input from stdin/console.

Output Format 
Delete as few nodes as possible to ensure that no two nodes have the same data. Adjust the next pointers to ensure that
the remaining nodes form a single sorted linked list. Then return the head of the sorted updated linked list. Do NOT 
rint anything to stdout/console.

Sample Input

1 -> 1 -> 3 -> 3 -> 5 -> 6 -> NULL
NULL
Sample Output

1 -> 3 -> 5 -> 6 -> NULL
NULL

https://www.hackerrank.com/challenges/delete-duplicate-value-nodes-from-a-sorted-linked-list/problem
*/

//Opción 1

function removeDuplicates(head) {
    let currentVal = head.data;
    let current = head;
    let prev = head;
    while (current) {
        if(current.next && current.next.data !== currentVal) {
            currentVal = current.next.data;
            prev.next = current.next;
            prev = prev.next;
        }
        current = current.next
    }
    if(head.data === currentVal) {
      head.next = null;
    }
    return head;
}

//Opción 2

function removeDuplicates(head) {
    let currentVal = head.data;
    let current = head;
    let next_next = head;
    while (current.next != null) {
        /*Compare current node with the next node */
        if (current.data == current.next.data) {
            next_next = current.next.next;
            current.next = next_next;
        }
        else // advance if no deletion
           current = current.next;
    }
    return head;
}