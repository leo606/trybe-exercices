"use strict";
var weekDays;
(function (weekDays) {
    weekDays[weekDays["sunday"] = 1] = "sunday";
    weekDays[weekDays["monday"] = 2] = "monday";
    weekDays[weekDays["tuesday"] = 3] = "tuesday";
    weekDays[weekDays["wednesday"] = 4] = "wednesday";
    weekDays[weekDays["thursday"] = 5] = "thursday";
    weekDays[weekDays["friday"] = 6] = "friday";
    weekDays[weekDays["saturday"] = 7] = "saturday";
})(weekDays || (weekDays = {}));
const newWeekDays = weekDays;
console.log(newWeekDays.friday);
