class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const mapping = {};
        for(let num of nums){
            if(mapping[num]){
                return true;
            }else{
                mapping[num] = true;
            }
        }
        return false;
    }
}
