class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const mapArray = [];
        const output = [];
        for(let str of strs){
            const map = {};
            for(let i=0;i<str.length;i++){
                map[str[i]] = (map[str[i]] || 0) + 1;
            }
            mapArray.push(map);
        }
        for(let i=0;i<strs.length;i++){
            if(mapArray[i]){
                let str1 = strs[i];
                let item  = [str1]
                for(let j=i+1;j<strs.length;j++){
                    let str2 = strs[j];
                    if(mapArray[j] && str1.length==str2.length){
                        let angrm = true;
                        for(let char in mapArray[i]){
                            if(mapArray[i][char] != mapArray[j][char]){
                                angrm = false;
                                break;
                            }
                        }
                        if(angrm){
                            item.push(str2);
                            mapArray[j] = null;
                        }
                    }
                }
                output.push(item);
            }
        }
        return output;
    }
}
