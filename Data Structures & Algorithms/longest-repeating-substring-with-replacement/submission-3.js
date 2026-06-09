class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let output = 0;
        for(let left=0;left<s.length;left++){
            let right = left;
            const map={
                [s[left]]: 1
            };
            let maxCharCount = 1;
            let windowSize = right - left + 1;
            while(right<s.length && (windowSize-maxCharCount)<=k){
                right++;
                const currChar = s[right];
                map[currChar] =  (map[currChar]||0) + 1;
                if(map[currChar]>maxCharCount){
                    maxCharCount = map[currChar];
                }
                windowSize++;
            }
            output = Math.max(output, windowSize-1);
        }
        return output;
    }
}
