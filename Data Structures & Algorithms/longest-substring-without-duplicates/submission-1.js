class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let max = 0;
        let start = 0;
        let i=0;
        while(i<s.length){
            if(set.has(s[i])){
                max = Math.max(max, set.size);
                set = new Set();
                start = start+1;
                i = start;
                continue;
            }
            set.add(s[i]);
        i++;
        }
         max = Math.max(max, set.size);
         return max;
    }
}
