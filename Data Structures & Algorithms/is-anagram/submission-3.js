class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length) return false;
        const charCounts = {};
        for(let index = 0; index<s.length;index++){
            const sChar = s[index];
            const tChar = t[index];
            if(!charCounts[sChar]){
                charCounts[sChar] = 0;
            }
            charCounts[sChar] += 1;

            if(!charCounts[tChar]){
                charCounts[tChar] = 0;
            }
            charCounts[tChar] -= 1;

            if(charCounts[sChar]==0){
                delete charCounts[sChar];
            }

            if(charCounts[tChar]==0){
                delete charCounts[tChar];
            }
        }

        return Object.keys(charCounts).length == 0;
    }
}
