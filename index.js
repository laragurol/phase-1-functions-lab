function distanceFromHqInBlocks(loc) {
    if (loc > 42) {
    return loc - 42; } {
return 42 - loc;
    }
}

function distanceFromHqInFeet(loc) {
    return distanceFromHqInBlocks(loc) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return distanceFromHqInFeet(destination) - distanceFromHqInFeet(start);
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination) < 2000) { 
        return (distanceTravelledInFeet(start, destination) - 400 ) * 0.02 ;
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        return 25;
    } else { 
        return 'cannot travel that far';
    }
}




// Code your solution in this file!
