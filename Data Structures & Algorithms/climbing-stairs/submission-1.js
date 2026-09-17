class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const memory  = {};
        function rec(n, count){
            if(n==0){
                return count+1;
            }
            if(n<0){
                return count;
            }
            const oneRoutes =  memory[n-1] || rec(n-1, 0);
            memory[n-1] = oneRoutes;
          
            const twoRoutes  = memory[n-2] || rec(n-2, 0);
            memory[n-2] = oneRoutes;


            return oneRoutes + twoRoutes;
        }
         return rec(n, 0);

    }
   
}
