class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const memory  = {};
        // function checkPath(n, count){
        //     if(n==0 || n==1){
        //         return count+1;
        //     }
        //     const oneRoutes =  memory[n-1] || checkPath(n-1, 0);
        //     memory[n-1] = oneRoutes;
          
        //     const twoRoutes  = memory[n-2] || checkPath(n-2, 0);
        //     memory[n-2] = oneRoutes;


        //     return oneRoutes + twoRoutes;
        // }
        //  const x =  checkPath(n, 0);
        //  return x;

        // function traverse(step){
        //     if(step == n){
        //         return 1
        //     }
        //     if(step>n){
        //         return 0;
        //     }
        //     return traverse(step+1) + traverse(step+2)
        // }
        // return traverse(0);

        function traverse(step){
            if(step == n){
                return 1
            }
            if(step>n){
                return 0;
            }
            const onePathCount = memory[step+1] || traverse(step+1);
            memory[step+1] = onePathCount;
            const twoPathCount = memory[step+2] || traverse(step+2);
            memory[step+2] = twoPathCount;
            return onePathCount + twoPathCount;

        }
        return traverse(0);

    }
   
}
