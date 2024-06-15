function groupAnagrams(strs) {
    const resDict = {};
    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!(sortedStr in resDict)) {
            resDict[sortedStr] = [str];
        } else {
            resDict[sortedStr].push(str);
        }
    }
    console.log(resDict);
};
groupAnagrams()
