class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};
        for(const num of nums){
            map[num] = (map[num] || 0)+1;
        }
        return Object.entries(map).sort((a,b)=>+b[1]-(+a[1])).map(a=>a[0]).slice(0,k)
    }
}
