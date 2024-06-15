function fullJustify(words: string[], maxWidth: number): string[] {
    const maxPadding = (new Array(maxWidth)).fill(' ').join('');
    const justified: string[] = [], tempStore: {lengthOfString: number, words: string[]}[] = [];
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
    let extraCharsLen = 0, minNumOfSpacesPerGap = 0, spacesList: string[], justifiedString = '';
    console.log(tempStore);
    for (const [idx, wordsList] of tempStore.entries()) {
        console.log("--------")
        if (wordsList.words.length == 1) {
            console.log("1");
            extraCharsLen = maxWidth - wordsList.lengthOfString;
            console.log({padding: extraCharsLen});
            justified.push([...wordsList.words, extraCharsLen ==0 ? '':maxPadding.slice(-1*extraCharsLen)].join(''));
        } else if (idx == tempStore.length -1) {
            console.log("2");
            let nonJustifiedString = wordsList.words.join(' ');
            extraCharsLen = maxWidth - nonJustifiedString.length;
            console.log({padding: extraCharsLen});
            justified.push(`${nonJustifiedString}${extraCharsLen ==0 ? '':maxPadding.slice(-1*extraCharsLen)}`);
        } else {
            console.log("3");
            minNumOfSpacesPerGap = Math.floor((maxWidth - wordsList.lengthOfString)/(wordsList.words.length -1));
            extraCharsLen = maxWidth - (wordsList.lengthOfString + (minNumOfSpacesPerGap*(wordsList.words.length -1)));
            spacesList = (new Array(wordsList.words.length -1)).fill(maxPadding.slice(-1*minNumOfSpacesPerGap));
            for(let i = 0; i < extraCharsLen; i++)
                spacesList[i] += ' ';
            justifiedString = '';
            for (const [idx, word] of wordsList.words.entries()) {
                if (idx !== 0) {
                    justifiedString += spacesList[idx -1];
                }
                justifiedString += word;
            }
            justified.push(justifiedString);
            // let basicJustifiedString = wordsList.words.join(maxPadding.slice(-1*numSpacesPerGap));
            // console.log({numSpacesPerGap,basicJustifiedString})
            // console.log({padding});
            // justified.push(`${basicJustifiedString}${padding ==0 ? '':maxPadding.slice(-1*padding)}`);
        }
    }
    return justified;
};

export { fullJustify };

// console.log(fullJustify(["What","must","be","acknowledgment","shall","be"], 16))