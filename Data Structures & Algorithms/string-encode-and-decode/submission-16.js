class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const out =  strs.map(d=>`${d.length}-${d}`).join("");
        return out;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const out = [];
        let lengthDetected = false;
        let wordLength = "";
        let currentWord = "";
        for(let i = 0; i<str.length;i++){
            if(!lengthDetected){
                if(str[i]=="-"){
                    lengthDetected = true;
                    wordLength = +wordLength;
                    if(wordLength==0){
                        out.push("");
                        wordLength = "";
                        currentWord = "";
                        lengthDetected = false;
                    }
                }else{
                    wordLength  = wordLength + "" + str[i];
                }
            }else{
                currentWord = currentWord + "" + str[i];
                wordLength--;
                if(wordLength==0){
                    out.push(currentWord);
                    wordLength = "";
                    lengthDetected = false;
                    currentWord = ""
                }
            }
        }
        return out;
    }
}
