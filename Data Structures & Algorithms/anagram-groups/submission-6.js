class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const results = {};
        let index = 0;
        const output = [];
        strs.forEach(str=>{
            const key = str.split('').sort().join("");
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
