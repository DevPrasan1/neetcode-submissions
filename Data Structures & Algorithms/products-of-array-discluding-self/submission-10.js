class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let zeroCount = 0;
        const product = nums.reduce((pr, num)=>{
            if(num==0){
                zeroCount++;;
            }
            return pr*(num || 1);
        }, 1);
        return nums.map(num=>{
            if(zeroCount==0){
                return product/num
            }
            if(zeroCount==1){
                return num==0 ? product : 0
            }
            return 0;
        });
    }
}
