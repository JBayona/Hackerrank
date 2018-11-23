/*
You’re given the pointer to the head nodes of two linked lists. Compare the data in the nodes of the linked lists to check if they are equal.
The lists are equal only if they have the same number of nodes and corresponding nodes contain the same data.
Either head pointer given may be null meaning that the corresponding list is empty.

Input Format 
You have to complete the int CompareLists(Node* headA, Node* headB) method which takes two arguments - the heads of the two linked lists to compare.
You should NOT read any input from stdin/console.

Output Format 
Compare the two linked lists and return 1 if the lists are equal. Otherwise, return 0. Do NOT print anything to stdout/console.

Sample Input

NULL, 1 --> NULL 
1 --> 2 --> NULL, 1 --> 2 --> NULL

Sample Output

0
1
*/
/*
    Compare two Linked Lists A and B
    Return 1 if they are identical and 0 if they are not.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function compareLinkedLists( headA, headB) {
    let currentA = headA;
    let currentB = headB;
    while(currentA && currentB) {
        if (currentA.data === currentB.data){
            currentA = currentA.next;
            currentB = currentB.next;
        } else {
            return 0;
        }
    }
    return currentA === null && currentB === null ? 1 : 0
}
