function jump(nums: number[]): number {
    let jumps = 0;
    if (nums.length <= 1)
        return 0;
    let right =0, left = 0, startingIdx, endingIdx, i;
    while(right < nums.length -1) {
        // console.log({left, right})
        // currSubset = nums.slice(left, right+1);
        // console.log(currSubset)
        // currMax = Math.max(...currSubset);
        startingIdx = left;
        endingIdx=right;
        left = right+1;
        // for (const [idx, elem] of Object.entries(currSubset)) {
        for (i = startingIdx; i<=endingIdx; i++) {
            right = Math.max(right, i+nums[i]);
        }
        // right = currMax;
        jumps += 1;
    }
    return jumps;
}

// let nums = [2,3,1,1,4]
let nums: number[] = [3,4,3,2,5,4,3];

console.log(jump(nums))