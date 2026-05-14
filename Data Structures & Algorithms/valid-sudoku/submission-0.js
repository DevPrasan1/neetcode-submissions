class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    isValidSudoku(board) {

        function checkNum(num, numsInSeq){
            if(num==".") return false;
            const numInt = +num;
            if(numsInSeq[numInt]){
                return true;
            }else{
                numsInSeq[numInt] = true; 
            }

        }

        const numsInSeq= new Array(10);
        const lineSize = 9;
        //let check rows first
        for(let i=0;i<lineSize;i++){
            numsInSeq.fill(false);
            for(let j=0;j<lineSize;j++){
                const num = board[i][j];
                if(checkNum(num, numsInSeq)){
                    return false;
                }
            }
        }
        for(let i=0;i<lineSize;i++){
             numsInSeq.fill(false);
            for(let j=0;j<lineSize;j++){
                const num = board[j][i];
                if(checkNum(num, numsInSeq)){
                    return false;
                }
            }
        }
        for(let i=0;i<lineSize;i=i+3){
            for(let j=0;j<lineSize;j=j+3){
               numsInSeq.fill(false);
               for(let r=i;r<i+3;r++){
                    for(let c=j;c<j+3;c++){
                        const num = board[r][c];
                        
                        if(checkNum(num, numsInSeq)){
                            return false;
                        }   
                    } 
               }
            }    
        }
        return true;
    }
}
