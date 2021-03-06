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

//Opción 1 O(mn)
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

//Opcion 2
//O(m+n)

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

function findMergeNode(headA, headB) {
    let lenA = getListLength(headA); //O(m)
    let lenB = getListLength(headB); //O(n)
    let set = new Set();
    
    for(let i = 0; i < lenB; i++) {
        set.add(headB); //O(mlogn)
        headB = headB.next;
    }
    
    for(let i = 0; i < lenA; i++) { //O(nlogn)
        if(set.has(headA)) {
            return headA.data;
        }
        headA = headA.next;
    }
    return null; //Not merging point*/
    //Total O(m logn + n logn)
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

//Opción 3
//O(m log m + n log n)
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

function findMergeNode(headA, headB) {
    let lenA = getListLength(headA); //O(m)
    let lenB = getListLength(headB); //O(n)
    /*Sacamos la distancia de diferencia entre ambas listas, caminamos una lista
    con la diferencia y sabemos que despues ambas van a caminar en la misma velocidad
    caminando simultaneamente sabemos que en un punto se van a intersectar y ese es
    el valor que estamos buscando*/
    let d = Math.abs(lenA - lenB);
    for(let i = 0; i < d; i++) {
        headB = headB.next;
    }
    
    while(headA && headB) {
        if(headA === headB) {
            return headA.data;
        }
        headA = headA.next;
        headB = headB.next;
    }
    return null; //no merging point
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
