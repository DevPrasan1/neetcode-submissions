class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let scharCount = {};
        let tcharCount = {};
        if(s.length!=t.length){
            return false;
        }
        for(let i in s){
            scharCount[s[i]] = (scharCount[s[i]] || 0) + 1;
            tcharCount[t[i]] = (tcharCount[t[i]] || 0) + 1;
        }
        if(Object.keys(scharCount).length!=Object.keys(tcharCount).length){
            return false;
        }
        for(let char in scharCount){
            if(scharCount[char]!=tcharCount[char]){
                return false;
            }
        }
        return true;
    }
}
