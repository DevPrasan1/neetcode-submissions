class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output =[];
    
        let product = 1;
    
        const len = nums.length;
        for(let i=0;i<len;i++){
            output[i] = product;
            product = product*nums[i];
        }
        product = 1;
        for(let i=0;i<len;i++){
            output[len-1-i] = output[len-1-i]*product;
            product = product*nums[len-1-i];
        }
       
        return output;
    }
}
