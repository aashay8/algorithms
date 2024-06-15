import {describe, expect, test} from '@jest/globals';

import {canCompleteCircuit} from '../codes/gas_station';

test('Test case 1 succeeds', () => {
  expect(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2])).toBe(3);
});

test('Test case 2 no go', () => {
    expect(canCompleteCircuit([2,3,4],[3,4,3])).toBe(-1);
  });

test('Custom Test case 1', () => {
    expect(canCompleteCircuit([1,2,3,2,5],[3,3,2,4,1])).toBe(4);
  });

test("First failed leetcode test", ()=> {
    expect(canCompleteCircuit([5,8,2,8],[6,5,6,6])).toBe(3);
})