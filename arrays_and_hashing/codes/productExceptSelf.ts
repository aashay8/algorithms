function productExceptSelf(nums: number[]): number[] {
    let resultArr: number[] = [];
    let i = 0, prod = 1;
    for(;i<nums.length;i++){
        resultArr.push(prod);
        prod *=nums[i];
    }
    prod = 1;
    for(i = nums.length -1; i>=0; i--) {
        resultArr[i] *= prod;
        prod = prod*nums[i];
    }
    return resultArr;
}

// let nums = [1,2,3,4];
let nums = [-1,1,0,3,-3];
console.log(productExceptSelf(nums));