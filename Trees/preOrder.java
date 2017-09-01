/*
Complete the preOrder function in your editor below, which has  parameter: a 
pointer to the root of a binary tree. It must print the values in the tree's 
preorder traversal as a single line of space-separated values.

Input Format

Our hidden tester code passes the root node of a binary tree to your preOrder function.
*/

/* you only have to complete the function given below.  
Node is defined as  

class Node {
    int data;
    Node left;
    Node right;
}

*/

void preOrder(Node root) {
    if(root != null){
        System.out.print(root.data + " ");
        preOrder(root.left);
        preOrder(root.right);   
    }
}