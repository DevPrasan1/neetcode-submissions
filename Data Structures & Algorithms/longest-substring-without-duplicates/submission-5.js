class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // let set = {};
        // let max = 0;
        // let start = 0;
        // let i=0;
        // while(i<s.length){
        //     if(set[s[i]]>=start){
        //         max = Math.max(max, (i-start));
        //         start = set[s[i]]+1;
        //     }
        //     set[s[i]] = i;
        //     i++;
        // }
        //  max = Math.max(max, s.length-start);
        //  return max;

        // sliding window
        let lp = 0;
        let maxWindow = 0;
        let set = new Set();
        for(let rp=0;rp<s.length;rp++){
            while(set.has(s[rp])){
                set.delete(s[lp]);
                lp++
            }
            set.add(s[rp])
            maxWindow = Math.max(maxWindow, rp-lp+1)
        }
        return maxWindow;
    }
}
