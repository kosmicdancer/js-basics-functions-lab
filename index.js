function distanceFromHqInBlocks(someValue) {
    let blocks = 'number';
    if (someValue < 42) {return blocks = (42 - someValue)};
    if (someValue > 42) {return blocks = (someValue - 42)};
    // if (someValue > 42); 
    // return blocks = (someValue - 42);
    // if (someValue < 42);
    // return blocks = (42 - someValue); 
}

function distanceFromHqInFeet(someValue) {
    let blocks = 'number';
    let feet = (blocks * 264);
    if (someValue > 42) {
        return feet = (264 * (someValue - 42))};
    if (someValue < 42) {
        return feet = (264 * (42 - someValue))};
}

function distanceTravelledInFeet(someValue, someValue2) {
    let blocks = 'number';
    let travelledFeet = Math.abs(blocks * 264);
    
    if (someValue > 42 && someValue2 > 42) {
        return travelledFeet = (264 * ((someValue - 42) - (someValue2 - 42)))};
    if (someValue < 42 && someValue2 < 42) {
        return travelledFeet = (264 * ((42 - someValue) - (someValue2 - 42)))};
    if (someValue > 42 && someValue2 < 42) {
        return travelledFeet = (264 * ((someValue - 42) + (42 - someValue2)))};    
    if (someValue < 42 && someValue2 > 42) {
        return travelledFeet = (264 * ((someValue2 - 42) + (42 - someValue)))};

    }

function calculatesFarePrice(someValue, someValue2) {
    let blocks = 'number';
    let travelledFeet = Math.abs(blocks * 264);
    let price = 'number'
    if (travelledFeet < 400);
        return price = (0);
    if (travelledFeet > 400 < 2000);
        return price = ((travelledFeet-400) * 2 / 100);
    if (travelledFeet > 2000 < 2500 );
        return price = ('25');
    if (travelledFeet => 2500);
        return ('cannot travel that far');
}