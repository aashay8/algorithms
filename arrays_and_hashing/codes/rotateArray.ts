/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate_bkup(nums: number[], k: number): void {
    let temp;
    let bufferArray: number[] = (new Array(k)).fill(0);
    let i=0, j=0, lastIndexInserted: number = 0;
    for (i = 0; i < nums.length; i+=k) {
        for(j = 0; j<k; j++) {
            temp = bufferArray[j];
            bufferArray[j] = nums[(i+j)%nums.length];
            nums[(i+j)%nums.length] = temp;
            lastIndexInserted = (i+j)%nums.length;
        }
        console.log({bufferArray, nums})
    }
    const nextStartingIndex = (lastIndexInserted + 1)% nums.length, pendingData = k - nextStartingIndex;
    console.log({nextStartingIndex, pendingData})
    for (i =0; i < pendingData; i++) {
        nums[nextStartingIndex + i] = bufferArray[i];
    }
    console.log("Final result:",nums)
}

function rotate(nums: number[], k: number): void {
    let currentBufferNum = nums[0], pointingTo = k, temp, previousStart = 0;
    for (let i = 0; i < nums.length; i++) {
        pointingTo = pointingTo%nums.length;
        console.log({pointingTo, currentBufferNum, nums})
        temp = nums[pointingTo];
        nums[pointingTo] = currentBufferNum;
        currentBufferNum = temp;
        if (pointingTo == previousStart) {
            previousStart += 1;
            currentBufferNum = nums[previousStart];
            pointingTo = previousStart;
            console.log("         here", {newBuff: currentBufferNum, newPtgTo: pointingTo, previousStart});

        }
        pointingTo = (pointingTo + k);
    }
    console.log(nums)
}

// let nums = [1,2,3,4,5,6,7], k = 3;
// let nums = [-1,-100,2,3], k = 2;
let nums = [1,2], k = 3;
rotate(nums, k);