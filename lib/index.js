"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = moondays;
exports.isMoonday = isMoonday;
exports.getMoonIllumination = getMoonIllumination;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _suncalc = require("suncalc");

var _suncalc2 = _interopRequireDefault(_suncalc);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function moondays(count) {
  var startDate = arguments.length <= 1 || arguments[1] === undefined ? new Date() : arguments[1];
  var practiceHour = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
  var practiceMinute = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

  var today = (0, _moment2["default"])(startDate);

  today.hour(practiceHour);
  today.minute(practiceMinute);

  var daysFound = [];
  var day = today;

  while (daysFound.length < count) {

    var illumination = isMoonday(day);

    if (isMoonday(day)) {
      var _illumination = _suncalc2["default"].getMoonIllumination(day);
      daysFound.push({ date: (0, _moment2["default"])(day), illumination: _illumination });
    }

    day.add(1, "days");
  }

  return daysFound;
}

function isMoonday(day) {

  var prevday = (0, _moment2["default"])(day).subtract(1, "days");
  var nextday = (0, _moment2["default"])(day).add(1, "days");

  var previllum = _suncalc2["default"].getMoonIllumination(prevday.toDate());
  var illum = _suncalc2["default"].getMoonIllumination(day.toDate());
  var nextillum = _suncalc2["default"].getMoonIllumination(nextday.toDate());

  var ap = previllum.fraction;
  var bp = illum.fraction;
  var cp = nextillum.fraction;

  if (ap < bp && bp > cp) {
    return illum;
  }

  if (ap > bp && bp < cp) {
    return illum;
  }
}

function getMoonIllumination(day) {
  var date = (0, _moment2["default"])(day);
  return _suncalc2["default"].getMoonIllumination(date.toDate());
}
