class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = {};
        let setLen = 0;
        let max = 0;
        let start = 0;
        let i=0;
        while(i<s.length){
            if(set[s[i]]>=start){
                max = Math.max(max, setLen);
                start = set[s[i]]+1;
                setLen = i - start;
            }
            set[s[i]] = i;
            setLen++;
            i++;
        }
         max = Math.max(max, setLen);
         return max;
    }
}
