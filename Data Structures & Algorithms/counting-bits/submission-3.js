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
        //             bits[b] = 1;// 1 added
        //             oneCount++;
        //             output[i] = oneCount;
        //             break;
        //         }else{
        //             bits[b] = 0; // 1 added into 1 so became 0
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

        // just add 1 to existing set and make douben like
        // 0 1 => [1]0, [1]1
        // 00 01 10 11 => [1]00 [1]01 [1]10 [1]11

        for(let i=2;i<=n;i++){
            if(startBit*2==i){
                startBit=0;
            }
            output.push(output[startBit] + 1);
            startBit++;
        }
        return output;
    }
}

