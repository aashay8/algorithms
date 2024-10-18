var counter = 0;

function findSubstring(s: string, words: string[]): number[] {
    const indicesWhereAnagramsBegin: number[] = [];

    const treeOfAnagrams: {[key: string]: any} = {}
    for (const [idx, word] of words.entries()) {
        createTreeAnagram(treeOfAnagrams, word, [...words.slice(0,idx), ...words.slice(idx+1, words.length)])
    }
    console.log(treeOfAnagrams)
    return indicesWhereAnagramsBegin;
};

function createTreeAnagram(objWhereAdding: any, parentWord: string, remainingWords: string[]) {
    // console.log({objWhereAdding, parentWord, remainingWords})
    // if (counter == 10)
    //     return null;
    counter += 1
    objWhereAdding[parentWord] = {}
    for (const [idx,word] of remainingWords.entries()) {
        createTreeAnagram(objWhereAdding[parentWord], word, [...remainingWords.slice(0,idx), ...remainingWords.slice(idx+1, remainingWords.length)])
    }
}

let res = findSubstring("something", ["foo","bar","the"])