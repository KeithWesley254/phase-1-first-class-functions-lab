// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers= function(){
    return drivers.slice(0, 2);
}
const returnLastTwoDrivers= function(){
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(Rade){
    return function(base){
        return Rade*base;
    }
}
const fareDoubler = createFareMultiplier(2);
    console.log(fareDoubler);

const fareTripler = createFareMultiplier(3);
    console.log(fareTripler);

function selectDifferentDrivers(drivers, cbf){
    return cbf(drivers)
}
