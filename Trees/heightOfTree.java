/*
The height of a binary tree is the number of edges between the tree's root and its furthest leaf.
https://www.hackerrank.com/challenges/tree-height-of-a-binary-tree/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=trees
*/

  /*
    class Node 
      int data;
      Node left;
      Node right;
  */

public static int height(Node root) {
      // Write your code here.
      if(root == null) {
          return -1;
      }
      int left = height(root.left);
      int right = height(root.right);
      return Math.max(left, right) + 1;
  }