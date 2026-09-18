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
    maxDepth(root) {

        // function traverse(node, depth){
        //     if(!node) return depth;
        //     return Math.max( traverse(node.left, depth+1), traverse(node.right, depth+1))
        // }
        // return traverse(root, 0)

            if(!root) return 0;
            return 1+ Math.max(this.maxDepth(root.left), this.maxDepth(root.right))
        }

}
