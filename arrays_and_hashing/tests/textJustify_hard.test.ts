import {expect, test} from '@jest/globals';

import { fullJustify } from '../codes/textJustify_hard';

test('["This", "is", "an", "example", "of", "text", "justification."], 16', () => {
    expect(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16)).toEqual(
        [
            "This    is    an",
            "example  of text",
            "justification.  "
         ]
    );
});

test('["What","must","be","acknowledgment","shall","be"], 16', () => {
    expect(fullJustify(["What","must","be","acknowledgment","shall","be"], 16)).toEqual(
        [
            "What   must   be",
            "acknowledgment  ",
            "shall be        "
          ]
    );
});

test('["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 20', () => {
    expect(fullJustify(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 20)).toEqual(
        [
            "Science  is  what we",
            "understand      well",
            "enough to explain to",
            "a  computer.  Art is",
            "everything  else  we",
            "do                  "
          ]
    );
});