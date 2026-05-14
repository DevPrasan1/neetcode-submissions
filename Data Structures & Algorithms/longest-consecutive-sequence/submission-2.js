class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length<=1){
            return nums.length;
        }
        const sortedArray = nums.sort((a,b)=>a-b);

        let maxLength = 1;
        let seqStartIndex = 0;

        function update(i){
             const lenOfCurrentSeq = sortedArray[i-1]-sortedArray[seqStartIndex]+1;
            if(lenOfCurrentSeq>maxLength){
                maxLength = lenOfCurrentSeq;
            }
            seqStartIndex = i;
        }

        for(let i=1;i<sortedArray.length;i++){
            if(sortedArray[i]-(sortedArray[i-1])<=1){
                continue;
            }else{
                update(i);
            }
        }
        let i = sortedArray.length;
        update(i);
        return maxLength;
    }
}
