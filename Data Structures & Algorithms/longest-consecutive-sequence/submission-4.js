class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let max = 0;
        let numSet = new Set(nums);
        for(let i=0;i<nums.length;i++){
            if(numSet.has(nums[i]-1)){
                continue;
            }else{
              let len = 1;
              while(numSet.has(nums[i] + len)){
                len++;
              }
              max = Math.max(max,len);
            }
        }
        return max;
    }
}
