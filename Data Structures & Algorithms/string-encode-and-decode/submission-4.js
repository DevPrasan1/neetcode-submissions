class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(str=> str.length ? str : "¥").join("€");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        return str.length>0 ? str.split("€").map(s=>s=="¥" ? "" : s) : [];
    }
}
