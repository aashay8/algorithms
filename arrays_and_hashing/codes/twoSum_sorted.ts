function twoSum(numbers: number[], target: number): number[] {
    let returnList: number[] = [];
    let start = 0, end = numbers.length -1;
    while (start < end) {
        if (numbers[start] + numbers[end] == target) {
            returnList.push(start+1);
            returnList.push(end+1);
            start += 1
        }
        if (numbers[start] + numbers[end] < target)
            start += 1
        if (numbers[start] + numbers[end] > target)
            end -=1;
    }
    return returnList;
};

export {twoSum};