class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
       let out = strs.map(word=>word.replaceAll("-", "-|")).join("--");
       if(strs.length>0){
        out+="--"
       }
       return out;

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        return str.length>0 ? str.slice(0,-2).split("--").map(s=>s.replaceAll("-|","-")) : [];
    }
}

