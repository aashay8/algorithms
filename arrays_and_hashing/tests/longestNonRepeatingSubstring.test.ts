import {describe, expect, test} from '@jest/globals';

import { lengthOfLongestSubstring } from '../codes/longestNonRepeatingSubstring';

test("abcabcbb", () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
});

test("bbbbb", () => {
  expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
});

test("pwwkew", () => {
  expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
});