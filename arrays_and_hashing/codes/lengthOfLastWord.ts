function lengthOfLastWord_brute(s: string): number {
  let lastWordLength = 0, needToRestart = true, idx=0;
  for (; idx < s.length; idx++) {
    if (s[idx] == ' ')
        needToRestart = true;
    else {
        if (needToRestart) {
            needToRestart = false;
            lastWordLength = 1;
        }
        else {
            lastWordLength += 1;
        }
    }
  }
  return lastWordLength;
};

function lengthOfLastWord_notgoodenough(s: string): number {
    const words = s.split(' ');
    for (let i = words.length -1; i>=0; i--) {
        if (words[i].length > 0)
            return words[i].length;
    }
    return 0;
}

function lengthOfLastWord(s: string): number {
    let lengthOfLastWord = 0, idx= 0;
    for (idx = s.length-1; idx >=0; idx--) {
        if (s[idx] == ' ' && lengthOfLastWord == 0)
            continue;
        else if (s[idx] == ' ' && lengthOfLastWord > 0)
            break;
        else
            lengthOfLastWord += 1;
    }
    return lengthOfLastWord;
}

export {lengthOfLastWord};