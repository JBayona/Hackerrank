/*
Given a reference to the head of a doubly-linked list and an integer.
Create a new Node object having data value  and insert it into a sorted linked list.

Complete the Node* SortedInsert(Node* head, int data) method in the editor below. It has two parameters:

: A reference to the head of a doubly-linked list of Node objects.
: An integer denoting the value of the  field for the Node you must insert into the list.
The method must insert a new Node into the sorted (in ascending order) doubly-linked list whose data value is 
without breaking any of the list's double links or causing it to become unsorted.

https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list/problem
*/

function sortedInsert(head, data) {
  if(!head) {
    return new Node(data);
  }
  current = head;
  while(current) {
    if(current.data >= data){
      let newNode = new Node(data);
      newNode.prev = current.prev;
      newNode.next = current;
      current.prev = newNode; //Actualizamos al nuevo nodo
      if(!newNode.prev) {
        return newNode;
      } else {
        newNode.prev.next = newNode;
        return head
      }
    }
    if(!current.next){
      let newNode = new Node(data);
      newNode.prev = current;
      current.next = newNode;
      break;
    }
    current = current.next;
  }
  return head;
}

head = null;
head = sortedInsert(head,1);
head = sortedInsert(head,4);
head = sortedInsert(head,2);
head = sortedInsert(head,3);
head = sortedInsert(head,7);
head = sortedInsert(head,6);
head = sortedInsert(head,9);
head = sortedInsert(head,10);
console.log(head);

/*function sortedInsert(head, data) {
    let newNode = new Node(data);
    let current = head;
    let next = null;
    let prev = null;
    if(!head) {
        head = newNode;
        return head;
    }
    while(current) {
      if(current.data <= newNode.data){
        if(current.next && current.next.data >= data) {
          //prev = current
          next = current.next;
          current.next = newNode;
          newNode.prev = current;
          newNode.next = next;
          next.prev = newNode;
          break;
        } else if (!current.next) {
          current.next = newNode;
          newNode.prev = current;
          break;
        }
      }
      current = current.next;
    }
    return head;
}*/