const peopleNames = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = () => {
  return getFirstNames(peopleNames);
};

console.log(getPeopleInCity());
module.exports = getPeopleInCity;
