function removeElement(nums, val) {
    let startPointer = 0, endPointer = nums.length - 1, t;
    while (startPointer < endPointer) {
        if (nums[endPointer] == val){
            endPointer -=1;
            continue;
        }
        if (nums[startPointer] == val) {
            t = nums[startPointer];
            nums[startPointer] = nums[endPointer];
            nums[endPointer] = t;
            endPointer -= 1;
        }
        startPointer += 1;
        console.log({startPointer, endPointer})
    }
    console.log(endPointer+1);
    console.log(nums)
}

// let nums = [0,1,2,2,3,0,4,2], val = 2
let nums = [1], val = 1

removeElement(nums, val)