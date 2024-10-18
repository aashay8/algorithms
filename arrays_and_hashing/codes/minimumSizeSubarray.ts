function minSubArrayLen(target: number, nums: number[]): number {
    if (nums.length == 0) {
        return 0 ;
    }
    let startPtr = 0, endPtr = 1, currentSum = 0, minLength = nums.length, neverMetTargetFlag = true;
    while(startPtr <endPtr && endPtr <= nums.length) {
        currentSum += nums[endPtr - 1];
        if (currentSum >= target) {
            neverMetTargetFlag = false;
            if (endPtr - startPtr < minLength)
                minLength = endPtr - startPtr;
            currentSum -= nums[startPtr];
            currentSum -= nums[endPtr -1];
            startPtr += 1;
        } else {
            endPtr += 1;
        }
    }
    return neverMetTargetFlag ? 0 : minLength;
};

export { minSubArrayLen };