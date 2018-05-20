/*
You’re given the pointer to the head node of a doubly linked list. Reverse the order of the nodes in the list. The head node might be NULL to indicate that the list is empty.

Input Format 
You have to complete the Node* Reverse(Node* head) method which takes one argument - the head of the doubly linked list. You should NOT read any input from stdin/console.

Output Format 
Change the next and prev pointers of all the nodes so that the direction of the list is reversed. Then returnthe head node of the reversed list. Do NOT print anything to stdout/console.

Sample Input

NULL 
NULL <-- 2 <--> 4 <--> 6 --> NULL

Sample Output

NULL
NULL <-- 6 <--> 4 <--> 2 --> NULL

https://www.hackerrank.com/challenges/reverse-a-doubly-linked-list/problem

*/


function Node(val, next, prev) {
    this.data = val;
    this.next = next || null;
    this.prev = prev || null;
}

function reverse(head) {
    let current = head;
    let tmp = null;
    /*swap next and prev nodes for all
    nodes of linked list*/
    while(current) {
        tmp = current.prev;
        current.prev = current.next;
        current.next = temp;
        current = current.prev;
    }

    /*before changing head,check for those cases like
    empty list and list with only one node*/
    if(tmp) {
        head = tmp.prev;
    } 

    return head;
}

/*function reverse(head) {
    let current = head;
    let prev = null;
    let next = null;
    while(current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current.prev = next;
        current = next;
    }
    return head;
}*/

node = new Node(2);
node1 = new Node(4);
node2 = new Node(6);

node.next = node1;
node1.prev = node;
node1.next = node2;
node2.prev = node1;
doubleLinkedList = node;
console.log(reverse(node));
