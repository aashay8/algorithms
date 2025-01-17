import {describe, expect, test} from '@jest/globals';

import { trap } from '../codes/trap_rainwater';

test('[0,1,0,2,1,0,1,3,2,1,2,1]', () => {
  expect(trap([0,1,0,2,1,0,1,3,2,1,2,1])).toBe(6);
});

test('[4,2,0,3,2,5]', () => {
    expect(trap([4,2,0,3,2,5])).toBe(9);
})