function removeDuplicates_failing(nums: number[]) {
    for (let i = 0;;i++) {
        console.log("||||||||||||||||||||||||||||")
        while (true) {
            console.log("...", nums)
            nums.splice(i,1);
            console.log(nums)
            console.log("------")
            // console.log(`----${i}  ${nums[i]}   ${nums[i+1]}  ${nums[i] == nums[i+i]}`)
            if (nums[i] != nums[i+i]) {
                console.log("Entered")
                break;
            }
            if (nums.length == 0)
                break
        }
        if (i == nums.length)
            break
    }
    return nums.length
}


function removeDuplicates(nums: number[]) {
    if (nums.length <= 1) {
        return nums.length;
    }
    let currentNum = nums[0], currentMovementCounter = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == currentNum){
            currentMovementCounter += 1;
            continue;
        }
        currentNum = nums[i];
        nums[i - currentMovementCounter] = nums[i];
    }
    console.log(nums);
    return nums.length - currentMovementCounter;
}

let nums = [1,1,2]
console.log(removeDuplicates(nums))