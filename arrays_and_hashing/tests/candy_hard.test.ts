import {describe, expect, test} from '@jest/globals';

import { candy } from '../codes/candy_hard';

test('[1,0,2]', () => {
  expect(candy([1,0,2])).toStrictEqual([2,1,2]);
});

test('[1,2,2]', ()=> {
  expect(candy([1,2,2])).toStrictEqual([1,2,1]);
});

test('[1,2,3,3,4,5]', ()=> {
  expect(candy([1,2,3,3,4,5])).toStrictEqual([1,2,3,1,2,3]);
});