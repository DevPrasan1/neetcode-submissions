/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
       let max = 0;
       function traverse(root, depth){
         if(!root){
            return 0;
        }
        const leftDepth = root.left ?  (1+ traverse(root.left, depth+1)) : 0;
        const rightDepth = root.right ? (1 +traverse(root.right, depth+1)): 0;
      
        max = Math.max(max, leftDepth+depth, rightDepth+depth, leftDepth+rightDepth);
          console.log(`Node ${root.val} depth ${depth}  lD ${leftDepth} & rD ${rightDepth} max=${max}`)
        return Math.max(leftDepth, rightDepth);
       }
        traverse(root, 0);
        return max;
    }
}
