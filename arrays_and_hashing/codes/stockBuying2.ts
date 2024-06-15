function maxProfit(prices: number[]): number {
    if (prices.length <= 1)
            return 0;
    let profitBooked = 0, lowestYet = prices[0], runningBestProfit = 0, prevHighest  = 0;
    // for (let i = 1; i<prices.length; i++) {
        
    //     if (prices[i] <= prevHighest) {
    //         // book your profit
    //         profitBooked += runningBestProfit;
    //         runningBestProfit = 0;
    //         lowestYet = prices[i];
    //     } else if(prices[i] > prevHighest) {
    //         prevHighest = prices[i];
    //         runningBestProfit += prevHighest - lowestYet;
    //     }

    //     runningBestProfit
    // }  
    prices.push(0)
    for (let i = 1; i<prices.length; i++) { 
        if (prices[i] < prices[i-1]) {
            profitBooked += prices[i-1] - lowestYet;
            lowestYet = prices[i];
        }
    }
    return profitBooked;
};

// let prices = [7,1,5,3,6,4];
// let prices = [1,2,3,4,5];
let prices = [7,6,4,3,1];
console.log(maxProfit(prices))