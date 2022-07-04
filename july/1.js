/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    let final=0
    let adjustTruckSize = truckSize
    boxTypes.sort((a,b)=>b[1]-a[1])
    for(let i=0;i<boxTypes.length;i++){
        if(adjustTruckSize<boxTypes[i][0]){
            final += adjustTruckSize*(boxTypes[i][1])
            return final
        }else{            
            final += (boxTypes[i][0])*(boxTypes[i][1])
            adjustTruckSize -= boxTypes[i][0]       
        }
    }
    return final
};