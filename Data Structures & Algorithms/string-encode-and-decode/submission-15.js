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
        console.log(str)
        for(let i = 0; i<str.length;i++){
            if(!lengthDetected){
                if(str[i]=="-"){
                    lengthDetected = true;
                    wordLength = +wordLength;
                    console.log({ wordLength })
                    if(wordLength==0){
                    console.log("Inside If")

                        out.push("");
                        wordLength = "";
                        currentWord = "";
                        lengthDetected = false;
                    }
                }else{
                    wordLength  = wordLength + "" + str[i];
                }
            }else{
                console.log(str[i])
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
