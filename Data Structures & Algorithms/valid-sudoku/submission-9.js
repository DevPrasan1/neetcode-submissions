class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    isValidSudoku(board) {
        const lineSize = 9;
        const numsInSeq= new Array(9);
        const colMemory = new Array(9);
        const gridMemory = new Array(9);

        function checkNum(num, numsInSeq){
            if(num==".") return false;
            const numInt = +num - 1;
            if(numsInSeq[numInt]){
                return true;
            }
            numsInSeq[numInt] = true; 
            return false;
        }

        function checkDuplicate(numsInSeq,i,j){
            const num = board[i][j];
            if(checkNum(num, numsInSeq)) return true;
           

            if(!colMemory[j]){
                colMemory[j] =  new Array(9).fill(false);
            }
            if(checkNum(num, colMemory[j])) return true;
           

            const gridNumber = Math.floor(i/3)*3+(Math.floor(j/3));
        
            if(!gridMemory[gridNumber]){
                gridMemory[gridNumber] =  new Array(9).fill(false);
            }
            if(checkNum(num, gridMemory[gridNumber])) return true;
            
            return false;
        }

       

       
        //let check rows first
        for(let i=0;i<lineSize;i++){
            numsInSeq.fill(false);
            for(let j=0;j<lineSize;j++){
                if(checkDuplicate(numsInSeq, i,j)){
                    return false;
                }
            }
        }
        return true;
    }
}
