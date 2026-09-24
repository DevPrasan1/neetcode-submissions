class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // const results = {};
        // let index = 0;
        // const output = [];
        // strs.forEach(str=>{
        //     const key = str.split('').sort().join("");
        //     if(key in results){
        //         const keyIndex = results[key];
        //         output[keyIndex] = [...output[keyIndex], str];
        //     }else{
        //         results[key] = index;
        //         output[index] = [str];
        //         index++;
        //     }
        // })
        // return output;
        
        const results = {};
        let index = 0;
        const output = [];
        const charStartAt = 'a'.charCodeAt(0);
        strs.forEach(str=>{
            const atoz = [];
            for(let i=0;i<str.length;i++){
                const index = str[i].charCodeAt(0) - charStartAt;
                atoz[index] =  (atoz[index] || 0) + 1;
            }
            const key = atoz.join(',');

            if(key in results){
                const keyIndex = results[key];
                output[keyIndex] = [...output[keyIndex], str];
            }else{
                results[key] = index;
                output[index] = [str];
                index++;
            }
        })
        return output;
    }
}
