class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let mapping = {};
        for(let i=0;i<nums.length;i++){
            const currentNumber = nums[i];
            const requiredNumber = target - currentNumber;
            if(requiredNumber in mapping){
                return [mapping[requiredNumber], i]
            }
            if(!mapping[currentNumber]){
                mapping[currentNumber] = i;
            }
        }
        return [-1,-1]
    }
}
