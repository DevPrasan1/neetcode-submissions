class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        if(n==0){
            return [0];
        }
        let bits = [0];
        let oneCount = 0;
        let output = [0];
        for(let i=1;i<=n;i++){
            let b=0;
            while(true){
                debugger;
                if(bits.length<=b){
                    bits.push(0);
                }
                if(bits[b]==0){
                    bits[b] = 1;
                    oneCount++;
                    output[i] = oneCount;
                    break;
                }else{
                    bits[b] = 0;
                    oneCount--;
                }
                b++;
            }
        }
        return output;
    }
}

/*
000
001
010
011
100
*/