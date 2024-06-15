function *fullJustify(words: string[], maxWidth: number) {
    const tempStore: {lengthOfString: number, words: string[]}[] = [];
    let currLength = 0, currStringList: string[] = [], numsWordsInCurrString = 0;
    for (let i = 0; i < words.length; i++) {
        if (currLength + words[i].length + (numsWordsInCurrString) <= maxWidth) {
            currStringList.push(words[i]);
            currLength += words[i].length;
            numsWordsInCurrString +=1;
        } else {
            tempStore.push({lengthOfString: currLength, words: currStringList});
            currLength = words[i].length;
            currStringList = [words[i]];
            numsWordsInCurrString = 1;
        }
    }
    tempStore.push({lengthOfString: currLength, words: currStringList})
    let extraCharsLen = 0, minNumOfSpacesPerGap = 0, spacesList: string[], justifiedString = '', padding = '',j=0;
    for (const [idx, wordsList] of tempStore.entries()) {
        if (wordsList.words.length == 1) {
            extraCharsLen = maxWidth - wordsList.lengthOfString;
            padding = '';
            for(j=0; j<extraCharsLen; j++)
                padding += ' ';
            // justified.push([...wordsList.words, padding].join(''));
            yield [...wordsList.words, padding].join('')
        } else if (idx == tempStore.length -1) {
            let nonJustifiedString = wordsList.words.join(' ');
            extraCharsLen = maxWidth - nonJustifiedString.length;
            padding = '';
            for(j=0; j<extraCharsLen; j++)
                padding += ' ';
            // justified.push(`${nonJustifiedString}${padding}`);
            yield `${nonJustifiedString}${padding}`;
        } else {
            minNumOfSpacesPerGap = Math.floor((maxWidth - wordsList.lengthOfString)/(wordsList.words.length -1));
            padding = '';
            for(j=0; j<minNumOfSpacesPerGap; j++)
                padding += ' ';
            extraCharsLen = maxWidth - (wordsList.lengthOfString + (minNumOfSpacesPerGap*(wordsList.words.length -1)));
            justifiedString = '';
            for (const [idx, word] of wordsList.words.entries()) {
                if (idx !== 0) {
                    justifiedString += padding + (extraCharsLen > 0 ? ' ': '');
                    extraCharsLen -= 1;
                }
                justifiedString += word;
            }
            // justified.push(justifiedString);
            yield justifiedString;
        }
    }
    // return justified;
    // yield "";
};


// for (const lines of fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16)) {
//     console.log({lines})
// }
console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16))