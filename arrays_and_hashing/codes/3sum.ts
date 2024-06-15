function twoSum(numbersAvailable: {[idx: number]: boolean}, requiredSum: number): number[][] {
    const result: number[][] = [];
    let num: number;
    for (let key of Object.keys(numbersAvailable)) {
        num = Number.parseInt(key)
        if (num == requiredSum)
            continue;
        if(numbersAvailable[requiredSum - num])
            result.push([num, (requiredSum-num)])
    }
    return result;

}

function threeSum(nums: number[]): number[][] {
    const results: number[][] = [], numbersAvailable: {[idx: number]: boolean} = {};
    for (const num in nums) {
        numbersAvailable[num] = true;
    }
    let num: number, sum2Res: number[][];
    for (const key of Object.keys(numbersAvailable)) {
        num = Number.parseInt(key);
        sum2Res = twoSum(numbersAvailable, num);
        sum2Res.forEach(list => {
            results.push([num, ...list]);
        });
    }
    return results;
};