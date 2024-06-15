function putElemInPosition(nums: number[], idxOfElem: number, end: number, reverse: boolean = false) {
    for (let i = idxOfElem; i <= end-1; i++) {
        if (!reverse) {
            if (nums[i] <= nums[i+1])
                break;
        }
        else {
            if (nums[i] >= nums[i+1])
                break;
        }
        nums[i+1] = nums[i+1] + nums[i];
        nums[i] = nums[i+1] - nums[i];
        nums[i+1] = nums[i+1] - nums[i];
    }
}
function merge(nums: number[], start: number, mid: number, end: number, reverse: boolean = false) {
    console.log("merge", {start, mid, end})
    if (!reverse) {
        for(let idxToInsertAt = start; idxToInsertAt <= mid; idxToInsertAt++) {
            if (nums[idxToInsertAt] > nums[mid+1]) {
                nums[idxToInsertAt] = nums[idxToInsertAt] + nums[mid+1];
                nums[mid+1] = nums[idxToInsertAt] - nums[mid+1];
                nums[idxToInsertAt] = nums[idxToInsertAt] - nums[mid+1];
                putElemInPosition(nums, mid+1, end, reverse);
            }
        }
    } else {
        for(let idxToInsertAt = start; idxToInsertAt <= mid; idxToInsertAt++) {
            if (nums[idxToInsertAt] < nums[mid+1]) {
                nums[idxToInsertAt] = nums[idxToInsertAt] + nums[mid+1];
                nums[mid+1] = nums[idxToInsertAt] - nums[mid+1];
                nums[idxToInsertAt] = nums[idxToInsertAt] - nums[mid+1];
                putElemInPosition(nums, mid+1, end, reverse);
            }
        }
    }
}
function mergesort(nums: number[], start: number =0, end: number = nums.length-1, reverse: boolean = false): void {
    console.log({start,end})
    if (end-start < 1)
        return;
    let mid = Math.floor((end+start)/2);
    mergesort(nums, start, mid, reverse);
    mergesort(nums, mid+1, end, reverse);
    merge(nums, start, mid, end, reverse);
}

function hIndex(nums: number[]): number {
    mergesort(nums, 0, nums.length -1, true);
    // nums = nums.reverse()
    let i = 0;
    for (; i < nums.length ; i++) {
        if (nums[i] <= i)
            break
    }
    return i;
}

let nums: number[];
nums = [3,0,6,1,5]
// nums = [1,3,1]
// nums = [1,3,1,2,0,9,12,7,8,-1,-4,10];
// nums = []
// nums = [4,5,3,2]

console.log(hIndex(nums));
console.log(nums)
