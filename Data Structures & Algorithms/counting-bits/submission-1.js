class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        if(n==0){
            return [0];
        }
        // simple addition flow
        // let bits = [0];
        // let oneCount = 0;
        // let output = [0];
        // for(let i=1;i<=n;i++){
        //     let b=0;
        //     while(true){
        //         if(bits.length<=b){
        //             bits.push(0);
        //         }
        //         if(bits[b]==0){
        //             bits[b] = 1;
        //             oneCount++;
        //             output[i] = oneCount;
        //             break;
        //         }else{
        //             bits[b] = 0;
        //             oneCount--;
        //         }
        //         b++;
        //     }
        // }
        // return output;
        if(n==1){
            return [0, 1];
        }
        let output = [0, 1];
        let startBit = 0;

        for(let i=2;i<=n;i++){
            if(startBit*2==i){
                startBit=0;
            }
            output.push(output[startBit] + 1);
            console.log(i,startBit, output)
            startBit++;
        }
        return output;
    }
}

