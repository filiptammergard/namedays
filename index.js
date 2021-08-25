"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.who = exports.when = exports.today = void 0;
var namedays_1 = require("./namedays");
function today() {
    var today = {
        month: new Date().getMonth() + 1,
        day: new Date().getDate(),
    };
    var result = namedays_1.namedays.filter(function (nameday) {
        return nameday.date.month === today.month && nameday.date.day === today.day;
    });
    return result;
}
exports.today = today;
function when(name) {
    var result = namedays_1.namedays.filter(function (nameday) { return nameday.name.toLowerCase() === name.toLowerCase(); });
    return result;
}
exports.when = when;
function who(date) {
    var result = namedays_1.namedays.filter(function (nameday) {
        return nameday.date.month === date.month && nameday.date.day === date.day;
    });
    return result;
}
exports.who = who;
