class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const memory  = {};
        function checkPath(n, count){
            if(n==0 || n==1){
                return count+1;
            }
           
            const oneRoutes =  memory[n-1] || checkPath(n-1, 0);
            memory[n-1] = oneRoutes;
          
            const twoRoutes  = memory[n-2] || checkPath(n-2, 0);
            memory[n-2] = oneRoutes;


            return oneRoutes + twoRoutes;
        }
         return checkPath(n, 0);

    }
   
}
