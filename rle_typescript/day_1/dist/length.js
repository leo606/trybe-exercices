"use strict";
const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function throwError(msg) {
    throw new Error(`${msg} is not valid`);
}
function convert(value, baseUnit, convertUnit) {
    if (!units.includes(baseUnit))
        throwError("base unit");
    if (!units.includes(convertUnit))
        throwError("convert unit");
    const baseIndex = units.indexOf(baseUnit);
    const convertIndex = units.indexOf(convertUnit);
    const exponent = Math.abs(convertIndex - baseIndex);
    return value * 10 ** exponent;
}
console.log(convert(1, "km", "m"));
