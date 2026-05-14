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
        let maxSequenceStartIndex = 0;
        let seqStartIndex = 0;
        console.log(sortedArray);
// [
//   0, 1, 1, 2,
//   3, 4, 5, 6
// ]
        for(let i=1;i<sortedArray.length;i++){
            if(sortedArray[i]-(sortedArray[i-1])<=1){
                continue;
            }else{
                const lenOfCurrentSeq = sortedArray[i-1]-sortedArray[seqStartIndex]+1;
                if(lenOfCurrentSeq>maxLength){
                    maxLength = lenOfCurrentSeq;
                    maxSequenceStartIndex = seqStartIndex;
                }
                seqStartIndex = i;
            }
        }
        let i = sortedArray.length;
        const lenOfCurrentSeq = sortedArray[i-1]-sortedArray[seqStartIndex]+1;
        if(lenOfCurrentSeq>maxLength){
            maxLength = lenOfCurrentSeq;
            maxSequenceStartIndex = seqStartIndex;
        }
        seqStartIndex = i;
        return maxLength;
    }
}
