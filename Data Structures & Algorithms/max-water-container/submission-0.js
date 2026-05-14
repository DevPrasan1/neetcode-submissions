class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let start = 0;
        let end = heights.length-1;

        while(start<end){
            const lh = heights[start];
            const rh = heights[end];
            const water = (end-start)*Math.min(lh, rh);
            max = Math.max(max, water);
            if(lh<=rh){
               start++
            }else{
                end--;
            }
        }
        return max;
    }
}
