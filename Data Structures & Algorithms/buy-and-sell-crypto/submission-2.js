class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minIndex = 0;
        let maxIndex = 0;
        let maxProfit = 0;
        for(let i=0;i<prices.length;i++){
            if(prices[i]>prices[maxIndex]){
                maxIndex = i;
                let currentProfit = prices[maxIndex] - prices[minIndex];
                maxProfit = Math.max(currentProfit, maxProfit)
            }else if(prices[i]<=prices[minIndex]){
                minIndex = i;
                maxIndex = i;
            }
        }
        return maxProfit;
    }
}
