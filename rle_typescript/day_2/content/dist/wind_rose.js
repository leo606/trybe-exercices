"use strict";
var windRose;
(function (windRose) {
    windRose[windRose["N"] = 1] = "N";
    windRose[windRose["E"] = 2] = "E";
    windRose[windRose["S"] = 3] = "S";
    windRose[windRose["W"] = 4] = "W";
})(windRose || (windRose = {}));
const newWindRose = windRose;
console.log(newWindRose.S);
