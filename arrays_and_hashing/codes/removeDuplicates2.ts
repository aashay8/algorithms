function removeDuplicates(nums: number[]): number {
    if (nums.length <= 1)
        return nums.length;
    let currNum = nums[0], currMovementIdx = 1, currNumOccurence = 1;
    for (const [idx,num] of nums.entries()) {
        if (idx == 0)
            continue;
        if (num == currNum) {
            if (currNumOccurence == 1) {
                currNumOccurence += 1;
                nums[currMovementIdx] = num;
                currMovementIdx = currMovementIdx+1;
            }
            continue;
        }
        currNum = num;
        currNumOccurence = 1;
        nums[currMovementIdx] = num;
        currMovementIdx = currMovementIdx+1;
    }
    console.log(nums, currMovementIdx)
    return currMovementIdx;
};


removeDuplicates([1,1,1,2,2,3])