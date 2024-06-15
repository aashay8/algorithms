export function trap(height: number[]): number {
    if (height.length < 1)
        return 0;
    let i;
    let trackingList = (new Array(height.length)).fill(0);
    let currentMax = 0, trapped = 0;
    for (i = 0; i < height.length; i++) {
        if (height[i] > currentMax)
            currentMax = height[i];
        trackingList[i] = currentMax;
    }
    currentMax = height.at(-1) || 0;
    for (i = height.length -2; i>=0; i--) {
        if (height[i] > currentMax)
            currentMax = height[i];
        trapped += Math.max(Math.min(currentMax, trackingList[i]) - height[i], 0)
    }
    return trapped;
};