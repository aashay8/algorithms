function shortestJumpHelper(nums: number[], idx: number, calculatedVals: {[key: number]: number}): number {
    if (idx == nums.length -1)
        return 0
    if (idx + nums[idx] >= nums.length -1) {
        return 1;
    }
    if (calculatedVals[idx])
        return calculatedVals[idx];
    let leastJump = Number.MAX_SAFE_INTEGER, current;
    for (let i= nums[idx]; i > 0; i--) {
        current = shortestJumpHelper(nums, idx+i, calculatedVals);
        leastJump = leastJump >  current ? current: leastJump; 
    }
    calculatedVals[idx] = 1 + leastJump;
    return 1+leastJump;
    
}

function jump(nums: number[]): number {
    let calculatedVals = {}
    return shortestJumpHelper(nums, 0, calculatedVals);
}


let nums = [2,3,0,1,4];

console.log(jump(nums));