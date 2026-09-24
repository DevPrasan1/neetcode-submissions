class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        // const map = {};
        // for(let number of nums){
        //     map[number] = (map[number] || 0)+1;
        // }
        // return Object.entries(map).sort((a,b)=>b[1]-a[1]).slice(0,k).map(d=>+d[0])

        const map = {};
        for(let number of nums){
            map[number] = (map[number] || 0)+1;
        }
        const order = [];
        Object.entries(map).forEach(([num, freq])=>{
            if(!order[freq]){
                order[freq] = [];
            }
            order[freq].push(num);
        });
        let index = order.length-1;
        let output = [];
        while(output.length<k){
            if(order[index]){
                order[index].forEach(ele=>{
                    output.push(ele);
                });
            }
            index--;
        }
        return output;
    }
}
