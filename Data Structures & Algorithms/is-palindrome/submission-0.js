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
           if(char>='A' && char<="Z"){
             return true;
           }
           if(char>="0" && char<="9"){
             return true;
           }
           return false;
        }
        let start = 0;
        let end = s.length-1;
        while(start<=end){
            console.log('step 1')
            if(!isAlphaNumeric(s[start])){
                start++;
                continue;
            }
            console.log('step 2')
            if(!isAlphaNumeric(s[end])){
                end--;
                continue;
            }
           console.log('step 3', s[start], s[end])
            if(s[start].toLowerCase()==s[end].toLowerCase()){
                 start++;
                 end--;
            }else{
                return false;
            }
        }
        return true;
    }
}
