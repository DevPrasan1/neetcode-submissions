class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const leftMul =[];
        const rightMul =[];
        const output =[];
        let l_mul = 1;
        let r_mul = 1;
        const len = nums.length;
        for(let i=0;i<len;i++){
            leftMul[i] = l_mul;
            l_mul = l_mul*nums[i];
            rightMul[len-1-i] = r_mul;
            r_mul = r_mul*nums[len-1-i];
        }
        for(let i=0;i<len;i++){
          leftMul[i] = leftMul[i]*rightMul[i];
        }
        return leftMul;
    }
}
