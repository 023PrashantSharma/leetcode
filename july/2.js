/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
 var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    horizontalCuts.push(0, h);
    verticalCuts.push(0, w);
    horizontalCuts.sort((a, b) => a - b);
    verticalCuts.sort((a, b) => a - b);
    function getMaxDifference(array){        
        let maxDiff=0
        let diff=0
        for(let i=0;i<array.length-1;i++){
            diff = Math.abs(array[i]-array[i+1])
            if(diff>maxDiff){
                maxDiff = diff 
            }
        }
        return maxDiff
    }
    return BigInt(getMaxDifference(horizontalCuts))*BigInt(getMaxDifference(verticalCuts)) % BigInt(1000000007)
};
