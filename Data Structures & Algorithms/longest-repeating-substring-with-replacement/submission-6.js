class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let output = 0;
        const map = new Map();
        let left = 0;
        let maxCharCountInWindow = 0;
        for(let right=0;right<s.length;right++){
            const char = s[right];
            map.set(char, (map.get(char) || 0) +1);
            maxCharCountInWindow= Math.max(maxCharCountInWindow,  map.get(char));
            while((right-left+1 - maxCharCountInWindow)>k){
                map.set(s[left], map.get(s[left]) - 1);
                left++;
            }
            output = Math.max(output, right-left+1);
        }
        return output;
    }
}
