const palindromes = function (x) {
    let y = x.toLowerCase().replace(/[^a-z]/g, "");
    let z = y.split("").reverse().join("");
    return y === z;
};

// Do not edit below this line
module.exports = palindromes;
