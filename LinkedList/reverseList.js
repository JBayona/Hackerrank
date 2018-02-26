/*
You are given the pointer to the head node of a linked list and you need to print all its elements in reverse order from tail to head, one element per line. The head pointer may be null meaning that the list is empty - in that case, do not print anything!

Input Format 
You have to complete the void ReversePrint(Node* head) method which takes one argument - the head of the linked list. You should NOT read any input from stdin/console.

Output Format 
Print the elements of the linked list in reverse order to stdout/console (using printf or cout) , one per line.

Sample Input

1 --> 2 --> NULL 
2 --> 1 --> 4 --> 5 --> NULL

https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list-in-reverse/problem
*/

function ListNode(val, next) {
  this.val = val;
  this.next = next || null;
}

function deleteDuplicates(head) {
  let reverse = reverseList(head);
  // Print reversed list
  while(reverse) {
    console.log(reverse.val);
    reverse = reverse.next;
  }
}

function reverseList(list){
  let current = list;
  let prev = null;
  while(current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8))))))));
console.log(deleteDuplicates(list));