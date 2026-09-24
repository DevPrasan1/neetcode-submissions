class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        for(let number of nums){
            map[number] = (map[number] || 0)+1;
        }
        return Object.entries(map).sort((a,b)=>b[1]-a[1]).slice(0,k).map(d=>+d[0])
    }
}
