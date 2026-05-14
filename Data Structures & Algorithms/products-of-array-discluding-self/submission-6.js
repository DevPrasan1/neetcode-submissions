class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const leftMul =[];
    
        let l_mul = 1;
        let r_mul = 1;
        const len = nums.length;
        for(let i=0;i<len;i++){
            leftMul[i] = l_mul;
            l_mul = l_mul*nums[i];
        }
        for(let i=0;i<len;i++){
            leftMul[len-1-i] = leftMul[len-1-i]*r_mul;
            r_mul = r_mul*nums[len-1-i];
        }
       
        return leftMul;
    }
}
