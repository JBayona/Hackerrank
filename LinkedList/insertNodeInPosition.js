/*

You’re given the pointer to the head node of a linked list, an integer to add to the list and the position at which the integer must be inserted. Create a new node with the given integer, insert this node at the desired position and return the head node. A position of 0 indicates head, a position of 1 indicates one node away from the head and so on. The head pointer given may be null meaning that the initial list is empty.

Input Format 
You have to complete the Node* Insert(Node* head, int data, int position) method which takes three arguments - the head of the linked list, the integer to insert and the position at which the integer must be inserted. You should NOT read any input from stdin/console. position will always be between 0 and the number of the elements in the list (inclusive).

Output Format 
Insert the new node at the desired position and return the head of the updated linked list. Do NOT print anything to stdout/console.

Sample Input

NULL, data = 3, position = 0 
3 --> NULL, data = 4, position = 0

https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem
*/

/*
  Insert Node at a given position in a linked list 
  head can be NULL 
  First element in the linked list is at position 0
  Node is defined as
  var Node = function(data) {
    this.data = data;
    this.next = null;
  }
*/


// New Version

/*
  Insert Node at a given position in a linked list 
  head can be NULL 
  First element in the linked list is at position 0
  Node is defined as
  var Node = function(data) {
    this.data = data;
    this.next = null;
  }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function insert(head, data, position) {
    let prev = head;
    let newNode = new Node(data);
    //If list is empty
    if(!head) {
        return newNode;
    }
    if(position === 0) {
        newNode.next = head;
        head = newNode;
        return head;
    } else {
        while((position-1) > 0) {
            prev = prev.next;
            position--;
        }
        let next = prev.next;
        newNode.next = next;
        prev.next = newNode;
        return head;
    }
}



// This is a "method-only" submission.
// You only need to complete this method.

function insert(head, data, position) {
  let node = head;
  let newNode = new Node(data);
  //If list is empty
  if(!head) {
      return newNode;
  }
  if(position === 0) {
      newNode.next = head;
      head = newNode;
      return head;
  } else {
      while((position-1) > 0) {
          if(node.next != null){
              node = node.next;
              position--;
          }
          else{
              break;
          }
      }
      newNode.next = node.next;
      node.next = newNode;
      return head;
  }
}
