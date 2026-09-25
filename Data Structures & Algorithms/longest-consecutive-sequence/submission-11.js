class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length==0){
            return 0;
        }
        const sorted = nums.sort((a,b)=>a-b);
        let max = 1;
        let current = 1;
        for(let i=1;i<sorted.length;i++){
            if(sorted[i] == sorted[i-1]){
                continue;
            }else if(sorted[i] - sorted[i-1] == 1){
                current++;
                max = Math.max(current, max);
            }else{
                current = 1;
            }
        }
        return max;
    }
}
