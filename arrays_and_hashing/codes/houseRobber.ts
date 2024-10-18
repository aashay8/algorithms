function rob(nums: number[]): number {
    let maxAmountRobbed = 0;
    if (nums.length == 0) return 0;
    if (nums.length == 1) return nums[0];
    let processedData = {}
    maxAmountRobbed = Math.max(nums[0] + robHouseAndReturnAmount(2,nums, processedData), nums[1]+ robHouseAndReturnAmount(3, nums, processedData))
    console.log(processedData)
    return maxAmountRobbed;
  };
  
  function robHouseAndReturnAmount(houseIdxToSearchFrom: number, houseMoneyList: number[], processedData: {[key:number]: number}): number {
    if (houseIdxToSearchFrom in processedData){
        return processedData[houseIdxToSearchFrom];
      }
      if (houseIdxToSearchFrom == houseMoneyList.length -1) {
          processedData[houseIdxToSearchFrom] = houseMoneyList[houseIdxToSearchFrom];
          return houseMoneyList[houseIdxToSearchFrom];
      } else if (houseIdxToSearchFrom >= houseMoneyList.length) {
          processedData[houseIdxToSearchFrom] = 0
          return 0;
      }
      else {
          const totalHouse1 = houseMoneyList[houseIdxToSearchFrom] + robHouseAndReturnAmount(houseIdxToSearchFrom + 2, houseMoneyList, processedData);
          processedData[houseIdxToSearchFrom + 2] = totalHouse1 - houseMoneyList[houseIdxToSearchFrom];
          const totalHouse2 = houseMoneyList[houseIdxToSearchFrom+1] + robHouseAndReturnAmount(houseIdxToSearchFrom + 3, houseMoneyList, processedData);
          processedData[houseIdxToSearchFrom + 3] = totalHouse2 - houseMoneyList[houseIdxToSearchFrom+1];
          const valToReturn = Math.max(totalHouse1, totalHouse2);
          processedData[houseIdxToSearchFrom] = valToReturn;
          return valToReturn
      }
  }

// console.log(rob([1,2,3,1]))
console.log(`Solution:${rob([0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])}`)