function maxProfit(prices: number[]): number {
    if (prices.length <= 1) return 0;
    let lowestValuePreviously = [0], lowestYet = prices[0], currentProfit, bestProfitYet = 0;
    for (let i = 1; i<prices.length; i++) {
        bestProfitYet = Math.max(prices[i] - lowestYet, 0, bestProfitYet);
        lowestYet = Math.min(lowestYet, prices[i]);
    }
    return bestProfitYet;
};

// let prices = [7,1,5,3,6,4];
// let prices = [7,6,5,4,3,1];
// let prices = [3,2,4,3,6,1,5];
let prices: number[] = [1];
console.log(maxProfit(prices));