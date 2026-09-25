class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // validate rows

        function isDuplicate(item, section){
            const num = +item;
            if(num>0 && num<10){
                if(section[num]){
                    return true;// duplicate number
                }else{
                    section[num] = true;
                }
            }
            return false;
        }
        const boxSize = 3;
        for(let r=0;r<9;r++){
            let rowArray = [];
            let colArray = [];
            let boxArray = [];
            let startX = Math.floor(r/boxSize)*boxSize;
            let startY = r%boxSize*boxSize;
            for(let c=0;c<9;c++){
            if(c>0 && c%boxSize==0){
                startX++;
             }
             const rowItem = board[r][c];
             const colItem = board[c][r];
             const boxY = startY + c%boxSize
             const boxItem = board[startX][boxY];
             console.log({ box : r, x: startX, y: boxY})
             if(isDuplicate(rowItem, rowArray) || isDuplicate(colItem, colArray) || isDuplicate(boxItem, boxArray) ){
                return false;
             }
            }
        }
        return true;
    }
}
