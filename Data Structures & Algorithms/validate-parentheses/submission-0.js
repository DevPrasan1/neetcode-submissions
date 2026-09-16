class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(str) {
        if (str.length % 2 !== 0) return false;
        const stack = [];
        const mapping = {
            "}": "{",
            ")": "(",
            "]": "[",
        };
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            const closingBraces = mapping[char];
            if (closingBraces) {
            if (stack.pop() !== closingBraces) {
                return false;
            }
            } else {
            stack.push(char);
            }
        }
        return stack.length == 0;
    }
}
