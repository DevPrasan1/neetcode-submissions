class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let zeroCount = 0;
        const product = nums.reduce((acc,cur)=>{
            if(cur==0){
                zeroCount++;
                return acc;
            }
            return acc*cur;
        }, 1);
        return nums.map(num=>{
            if(zeroCount==0){
                return product/num;
            }else if(zeroCount==1){
                return num==0 ? product : 0;
            }else{
                return 0;
            }
        });
        
    }
}
