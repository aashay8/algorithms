
export function candy(ratings: number[]): number[] {
    let numCandies = (new Array(ratings.length)).fill(1);
    for(let i = 1; i<ratings.length; i++) {
        if(ratings[i] > ratings[i-1])
            numCandies[i] = numCandies[i-1] +1;
    }
    for(let i = ratings.length -2 ; i>=0; i--) {
        if(ratings[i] > ratings[i+1] && numCandies[i] <= numCandies[i+1])
            numCandies[i] = numCandies[i+1] +1;
    }
    return numCandies;
};