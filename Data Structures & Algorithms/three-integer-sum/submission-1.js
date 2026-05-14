class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
       nums.sort((a,b)=>a-b);
        // -4,-1,-1,0,1,2
         const sortedArray = nums;
        const output = [];
        for(let i=0;i<sortedArray.length;i++){
            if(i>0 && sortedArray[i]==sortedArray[i-1]) continue
            if(sortedArray[i]>0){
                break
            }
            const target = -sortedArray[i];
            let start = i+1;
            let end = sortedArray.length - 1;
            while(start<end){
                const sum = (sortedArray[start]+sortedArray[end]);
                if(sum==target){
                    output.push([sortedArray[i], sortedArray[start], sortedArray[end]]);
                    start++;
                    end--;
                    while(start<end && sortedArray[start]==sortedArray[start-1]){
                        start++;
                    }
                }else if(sum<target){
                    start++;
                }else{
                    end--;
                }
            }
           
        }
         return output;
    }
}
