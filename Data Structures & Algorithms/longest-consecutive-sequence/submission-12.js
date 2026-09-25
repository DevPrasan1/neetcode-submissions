class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length==0){
            return 0;
        }
        // let max = 1;
        // let current = 1;

        // const sorted = nums.sort((a,b)=>a-b);
        // for(let i=1;i<sorted.length;i++){
        //     if(sorted[i] == sorted[i-1]){
        //         continue;
        //     }else if(sorted[i] - sorted[i-1] == 1){
        //         current++;
        //         max = Math.max(current, max);
        //     }else{
        //         current = 1;
        //     }
        // }
        // return max;

      let max = 1;
      let current = 1;
      const processed = {};
      const numsMap = {}
       for(let i=0;i<nums.length;i++){
         const num = nums[i];
         numsMap[num] = true;
       }
       for(let i=0;i<nums.length;i++){
         const num = nums[i];
         if(processed[num]) continue;
         current = 1;
         let index = num-1;
         while(numsMap[index]){
            current++;
            processed[index] = true;
            index--;
         }
        index = num+1;
         while(numsMap[index]){
            current++;
            processed[index] = true;
            index++;
         }
         max = Math.max(current, max);
       }
       return max;
    }
}
