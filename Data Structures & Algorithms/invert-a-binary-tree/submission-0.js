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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root) return null;
        if(root.length==0){
            return [];
        }
        function revert(root){
            if(!root) return;
            let tmp = root.left;
            root.left = root.right;
            root.right = tmp;
            revert(root.left);
            revert(root.right);
            return root;
        }
        revert(root);
        return root;
    }
}
