class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      const numsObj = {};
      for(let num of nums){
        if(numsObj[num]){
            return true
        }else{
            numsObj[num] = true;
        }
      }
      return false;
    }
}
