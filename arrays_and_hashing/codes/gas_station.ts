function canCompleteCircuit(gas: number[], cost: number[]): number {
  let maxDiff = 0, idxOfMax = 0, i=0, totGas = 0, totBurn = 0;
  for(;i < gas.length; i++) {
    totGas += gas[i];
    totBurn += cost[i];
    if (maxDiff < (gas[i] - cost[i])) {
        idxOfMax = i;
        maxDiff = gas[i] - cost[i];
    }
  }
  if (totGas < totBurn) {
    return -1;
  }
  let startingIdx = idxOfMax, currentIdx = (startingIdx+1)%gas.length;
  let currentSum = (gas[startingIdx] - cost[startingIdx]);
  while (currentIdx != startingIdx) {
    console.log(currentIdx)
    currentSum += gas[currentIdx] - cost[currentIdx];
    if (currentSum < 0) {
      // We will shift the starting idx
      do {
        // console.log("Stuck here")
        currentSum -= (gas[startingIdx] - cost[startingIdx]);
        startingIdx = (startingIdx+1)%gas.length
      } while ((gas[startingIdx] - cost[startingIdx]) <= 0)
    }
    currentIdx += 1;
    currentIdx %= gas.length;
  }
  return startingIdx;
};

export {canCompleteCircuit};