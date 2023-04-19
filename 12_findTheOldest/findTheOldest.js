const findTheOldest = function(people) {
    let oldest = people[0];
    let oldestAge = 0;
    let currentAge = 0;
    let currentYear = new Date().getFullYear();
    for (let i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath) {
            currentAge = people[i].yearOfDeath - people[i].yearOfBirth;
        } else {
            currentAge = currentYear - people[i].yearOfBirth;
        }
        if (currentAge > oldestAge) {
            oldestAge = currentAge;
            oldest = people[i];
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
