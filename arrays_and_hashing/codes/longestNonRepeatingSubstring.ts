function lengthOfLongestSubstring(s: string): number {
    if (s.length < 2) return s.length;
    let maxLength = 1, setOfChars: {[key: string]: number} = {}, startPtr = 0, endPtr = 0, idxOfFoundChar = -1, i = -1;
    while(endPtr < s.length && startPtr <= endPtr && startPtr < s.length) {
        console.log({startPtr, endPtr, maxLength, subst: s.substring(startPtr, endPtr+1)})
        if (s[endPtr] in setOfChars) {
            idxOfFoundChar = setOfChars[s[endPtr]];
            // setOfChars.delete(s[startPtr]);
            for ( i = startPtr; i <= idxOfFoundChar; i++){
                delete setOfChars[s[i]];
            }
            startPtr = idxOfFoundChar + 1;
            // endPtr += 1;
            continue;
        }
        // setOfChars.add(s[endPtr]);
        setOfChars[s[endPtr]] = endPtr;
        maxLength = Math.max((endPtr - startPtr +1), maxLength);
        endPtr += 1;
    }
    return maxLength;
};

// console.log(lengthOfLongestSubstring("abcabcbb"))

export {lengthOfLongestSubstring}