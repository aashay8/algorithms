function isSubsequence(s: string, t: string): boolean {
    let subsetPtr = 0, supersetPtr = 0;
    while (subsetPtr < s.length && supersetPtr < t.length) {
        if (s[subsetPtr] == t[supersetPtr]) {
            subsetPtr += 1;
        }
            supersetPtr += 1;
    }
    return subsetPtr == s.length;
};

export {isSubsequence};