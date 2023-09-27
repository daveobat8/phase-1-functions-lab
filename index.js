// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    let distance
    if (pickupLocation>= 42) {
        distance= pickupLocation-42
    }
    else if (pickupLocation<42) {
        distance= 42-pickupLocation
    }
    return distance
}

function distanceFromHqInFeet(pickupLocation){
    let distance= distanceFromHqInBlocks(pickupLocation)*264
    return distance

}

function distanceTravelledInFeet(start, end){
    let distance
    if (end<start) {
        distance= start-end
    }
    else if (end>start){
        distance= end-start
    }

    return distance*264
}

function calculatesFarePrice(start, end){
    let distance= distanceTravelledInFeet(start, end)
    let farePrice 
    if (distance<= 400) {
        farePrice= 0
    }
    else if (distance>400 && distance<=2000) {
        farePrice= (distance-400)*0.02
    }
    else if (distance>2000 && distance<= 2500) {
        farePrice= 25
    }
    else if (distance> 2500) {
        return 'cannot travel that far'
    }
    return farePrice

}
