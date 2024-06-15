// Boyer Moore Majority Vote algorithm
function majorityElement(nums: number[]): number {
    if (nums.length == 1) return nums[0];
    let majorityElement = nums[0], counter = 1;
    for (let i = 1; i < nums.length ; i++) {
        if (nums[i] != majorityElement) {
            counter -= 1;
            if (counter == 0) {
                majorityElement = nums[i];
                counter = 1;
            }
        }
    }
    return majorityElement;
};

let x = (new Array(5)).fill(0);
console.log(x)