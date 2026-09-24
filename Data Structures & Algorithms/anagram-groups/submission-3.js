class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const results = {};
        strs.forEach(str=>{
            const key = str.split('').sort().join("");
            if(results[key]){
                results[key] = [...results[key], str]
            }else{
                results[key] = [str];
            }
        })
        return Object.values(results);
    }
}
