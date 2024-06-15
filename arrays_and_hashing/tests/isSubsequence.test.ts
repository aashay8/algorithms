import {expect, test} from '@jest/globals';

import { isSubsequence } from '../codes/isSubsequence';

test('"abc", "ahbgdc"', () => {
    expect(isSubsequence("abc", "ahbgdc")).toBe(true);
});

test('"axc", "ahbgdc"', () => {
    expect(isSubsequence("axc", "ahbgdc")).toBe(false);
});

test('"", "ahbgdc"', () => {
    expect(isSubsequence("", "ahbgdc")).toBe(true);
});

// test('"axc", "ahbgdc"', () => {
//     expect(isSubsequence("axc", "ahbgdc")).toBe(false);
// });