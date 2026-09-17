class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if(prices.length<=1){
            return 0;
        }
        let max = 0;
        // for(let i=0;i<prices.length-1;i++){
        //     for(let j=i+1;j<prices.length;j++){
        //         max = Math.max(max, prices[j]-prices[i])
        //     }
        // }
        let i=0;
        while(i<prices.length){
            let sellingIndex = i+1;
            while(prices[sellingIndex]>prices[i]){
                max = Math.max(max, prices[sellingIndex]-prices[i]);
                sellingIndex++;
            }
            i=sellingIndex;
        }

        return max;
    }
}
// [10,2,1,5,6,7,4,20,9,4,5]

