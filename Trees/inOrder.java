/*
Complete the inOrder function in your editor below, which has  parameter: a pointer to the root of a binary tree.
It must print the values in the tree's inorder traversal as a single line of space-separated values.

Input Format

Our hidden tester code passes the root node of a binary tree to your inOrder function.

Constraints

1 Nodes in the tree  5-0-0

Output Format

Print the tree's inorder traversal as a single line of space-separated values.

https://www.hackerrank.com/challenges/tree-inorder-traversal/problem
*/

/* you only have to complete the function given below.  
Node is defined as  

class Node {
    int data;
    Node left;
    Node right;
}

*/

void inOrder(Node root) {
    if(root != null) {
        inOrder(root.left);
        System.out.print(root.data + " ");
        inOrder(root.right);
    }
}
