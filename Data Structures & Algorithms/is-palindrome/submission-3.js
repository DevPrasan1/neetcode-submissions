class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s.toLowerCase();
        const alphaNumeric = /^[a-z0-9]+$/;
        let start=0;
        let end = str.length-1
        while(start<=end){
            if(!alphaNumeric.test(str[start])){
                start++
                continue;
            }
            if(!alphaNumeric.test(str[end])){
                end--
                continue;
            }
            if(str[start]!==str[end]){
                return false;
            }else{
                start++;
                end--;
            }
        }
        return true;
    }
}
