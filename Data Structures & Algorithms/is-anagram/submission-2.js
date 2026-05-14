class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let scharCount = {};
        
        if(s.length!=t.length){
            return false;
        }
        for(let i in s){
            scharCount[s[i]] = (scharCount[s[i]] || 0) + 1;
            scharCount[t[i]] = (scharCount[t[i]] || 0) - 1;
        }
        for(let char in scharCount){
            if(scharCount[char]!= 0){
                return false;
            }
        }
        return true;
    }
}
