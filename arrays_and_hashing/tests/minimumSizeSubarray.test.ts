import {expect, test} from '@jest/globals';

import { minSubArrayLen } from '../codes/minimumSizeSubarray';

test('7, [2,3,1,2,4,3]', () => {
    expect(minSubArrayLen(7, [2,3,1,2,4,3])).toEqual(2);
});

test('4, [1,4,4]', () => {
    expect(minSubArrayLen(4, [1,4,4])).toEqual(1);
});

test('11, [1,1,1,1,1,1,1,1]', () => {
    expect(minSubArrayLen(11,[1,1,1,1,1,1,1,1])).toEqual(0);
});