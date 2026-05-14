class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       const map = {};
       for(let i in nums){
          const requiredPair = target - nums[i];
          if(requiredPair in map){
            return [+map[requiredPair], +i];
          }
          map[nums[i]] = i;
       }
       return [0,0]
       
    }
}
