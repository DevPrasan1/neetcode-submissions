class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(array) {
        let water = 0;
        //let formula = min(maxL, maxR) - height
        let maxLeftArray = []
        let maxLeftValue = 0
        let len = array.length;
        
        for(let i=0;i<len;i++){
            maxLeftValue = Math.max(maxLeftValue, array[i]);
            maxLeftArray.push(maxLeftValue);
        }
        let maxRightArray = []
        let maxRightValue = 0
       
        for(let i=len-1;i>=0;i--){
            maxRightValue = Math.max(maxRightValue, array[i]);
            maxRightArray.unshift(maxRightValue);
        }
         for(let i=0;i<len;i++){
            water += (Math.min(maxRightArray[i], maxLeftArray[i])) - array[i];
        }
        return water;
        
    }
}
