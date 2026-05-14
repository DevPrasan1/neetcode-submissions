class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        
        function isAlphaNumeric(char){
           if(char>='a' && char<="z"){
             return true;
           }
        //    if(char>='A' && char<="Z"){
        //      return true;
        //    }
           if(char>="0" && char<="9"){
             return true;
           }
           return false;
        }
        let start = 0;
        let end = s.length-1;
        while(start<=end){
            let sc = s[start].toLowerCase();
            if(!isAlphaNumeric(sc)){
                start++;
                continue;
            }
            let ec = s[end].toLowerCase();
            if(!isAlphaNumeric(ec)){
                end--;
                continue;
            }
            if(sc==ec){
                 start++;
                 end--;
            }else{
                return false;
            }
        }
        return true;
    }
}
