"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* Enum class CountryEnum.
* @enum {}
* @readonly
*/
var CountryEnum = /*#__PURE__*/function () {
  function CountryEnum() {
    _classCallCheck(this, CountryEnum);

    _defineProperty(this, "AF", "AF");

    _defineProperty(this, "AX", "AX");

    _defineProperty(this, "AL", "AL");

    _defineProperty(this, "DZ", "DZ");

    _defineProperty(this, "AS", "AS");

    _defineProperty(this, "AD", "AD");

    _defineProperty(this, "AO", "AO");

    _defineProperty(this, "AI", "AI");

    _defineProperty(this, "AQ", "AQ");

    _defineProperty(this, "AG", "AG");

    _defineProperty(this, "AR", "AR");

    _defineProperty(this, "AM", "AM");

    _defineProperty(this, "AW", "AW");

    _defineProperty(this, "AU", "AU");

    _defineProperty(this, "AT", "AT");

    _defineProperty(this, "AZ", "AZ");

    _defineProperty(this, "BS", "BS");

    _defineProperty(this, "BH", "BH");

    _defineProperty(this, "BD", "BD");

    _defineProperty(this, "BB", "BB");

    _defineProperty(this, "BY", "BY");

    _defineProperty(this, "BE", "BE");

    _defineProperty(this, "BZ", "BZ");

    _defineProperty(this, "BJ", "BJ");

    _defineProperty(this, "BM", "BM");

    _defineProperty(this, "BT", "BT");

    _defineProperty(this, "BO", "BO");

    _defineProperty(this, "BQ", "BQ");

    _defineProperty(this, "BA", "BA");

    _defineProperty(this, "BW", "BW");

    _defineProperty(this, "BV", "BV");

    _defineProperty(this, "BR", "BR");

    _defineProperty(this, "IO", "IO");

    _defineProperty(this, "BN", "BN");

    _defineProperty(this, "BG", "BG");

    _defineProperty(this, "BF", "BF");

    _defineProperty(this, "BI", "BI");

    _defineProperty(this, "CV", "CV");

    _defineProperty(this, "KH", "KH");

    _defineProperty(this, "CM", "CM");

    _defineProperty(this, "CA", "CA");

    _defineProperty(this, "KY", "KY");

    _defineProperty(this, "CF", "CF");

    _defineProperty(this, "TD", "TD");

    _defineProperty(this, "CL", "CL");

    _defineProperty(this, "CN", "CN");

    _defineProperty(this, "CX", "CX");

    _defineProperty(this, "CC", "CC");

    _defineProperty(this, "CO", "CO");

    _defineProperty(this, "KM", "KM");

    _defineProperty(this, "CG", "CG");

    _defineProperty(this, "CD", "CD");

    _defineProperty(this, "CK", "CK");

    _defineProperty(this, "CR", "CR");

    _defineProperty(this, "CI", "CI");

    _defineProperty(this, "HR", "HR");

    _defineProperty(this, "CU", "CU");

    _defineProperty(this, "CW", "CW");

    _defineProperty(this, "CY", "CY");

    _defineProperty(this, "CZ", "CZ");

    _defineProperty(this, "DK", "DK");

    _defineProperty(this, "DJ", "DJ");

    _defineProperty(this, "DM", "DM");

    _defineProperty(this, "DO", "DO");

    _defineProperty(this, "EC", "EC");

    _defineProperty(this, "EG", "EG");

    _defineProperty(this, "SV", "SV");

    _defineProperty(this, "GQ", "GQ");

    _defineProperty(this, "ER", "ER");

    _defineProperty(this, "EE", "EE");

    _defineProperty(this, "SZ", "SZ");

    _defineProperty(this, "ET", "ET");

    _defineProperty(this, "FK", "FK");

    _defineProperty(this, "FO", "FO");

    _defineProperty(this, "FJ", "FJ");

    _defineProperty(this, "FI", "FI");

    _defineProperty(this, "FR", "FR");

    _defineProperty(this, "GF", "GF");

    _defineProperty(this, "PF", "PF");

    _defineProperty(this, "TF", "TF");

    _defineProperty(this, "GA", "GA");

    _defineProperty(this, "GM", "GM");

    _defineProperty(this, "GE", "GE");

    _defineProperty(this, "DE", "DE");

    _defineProperty(this, "GH", "GH");

    _defineProperty(this, "GI", "GI");

    _defineProperty(this, "GR", "GR");

    _defineProperty(this, "GL", "GL");

    _defineProperty(this, "GD", "GD");

    _defineProperty(this, "GP", "GP");

    _defineProperty(this, "GU", "GU");

    _defineProperty(this, "GT", "GT");

    _defineProperty(this, "GG", "GG");

    _defineProperty(this, "GN", "GN");

    _defineProperty(this, "GW", "GW");

    _defineProperty(this, "GY", "GY");

    _defineProperty(this, "HT", "HT");

    _defineProperty(this, "HM", "HM");

    _defineProperty(this, "VA", "VA");

    _defineProperty(this, "HN", "HN");

    _defineProperty(this, "HK", "HK");

    _defineProperty(this, "HU", "HU");

    _defineProperty(this, "IS", "IS");

    _defineProperty(this, "IN", "IN");

    _defineProperty(this, "ID", "ID");

    _defineProperty(this, "IR", "IR");

    _defineProperty(this, "IQ", "IQ");

    _defineProperty(this, "IE", "IE");

    _defineProperty(this, "IM", "IM");

    _defineProperty(this, "IL", "IL");

    _defineProperty(this, "IT", "IT");

    _defineProperty(this, "JM", "JM");

    _defineProperty(this, "JP", "JP");

    _defineProperty(this, "JE", "JE");

    _defineProperty(this, "JO", "JO");

    _defineProperty(this, "KZ", "KZ");

    _defineProperty(this, "KE", "KE");

    _defineProperty(this, "KI", "KI");

    _defineProperty(this, "KW", "KW");

    _defineProperty(this, "KG", "KG");

    _defineProperty(this, "LA", "LA");

    _defineProperty(this, "LV", "LV");

    _defineProperty(this, "LB", "LB");

    _defineProperty(this, "LS", "LS");

    _defineProperty(this, "LR", "LR");

    _defineProperty(this, "LY", "LY");

    _defineProperty(this, "LI", "LI");

    _defineProperty(this, "LT", "LT");

    _defineProperty(this, "LU", "LU");

    _defineProperty(this, "MO", "MO");

    _defineProperty(this, "MG", "MG");

    _defineProperty(this, "MW", "MW");

    _defineProperty(this, "MY", "MY");

    _defineProperty(this, "MV", "MV");

    _defineProperty(this, "ML", "ML");

    _defineProperty(this, "MT", "MT");

    _defineProperty(this, "MH", "MH");

    _defineProperty(this, "MQ", "MQ");

    _defineProperty(this, "MR", "MR");

    _defineProperty(this, "MU", "MU");

    _defineProperty(this, "YT", "YT");

    _defineProperty(this, "MX", "MX");

    _defineProperty(this, "FM", "FM");

    _defineProperty(this, "MD", "MD");

    _defineProperty(this, "MC", "MC");

    _defineProperty(this, "MN", "MN");

    _defineProperty(this, "ME", "ME");

    _defineProperty(this, "MS", "MS");

    _defineProperty(this, "MA", "MA");

    _defineProperty(this, "MZ", "MZ");

    _defineProperty(this, "MM", "MM");

    _defineProperty(this, "NA", "NA");

    _defineProperty(this, "NR", "NR");

    _defineProperty(this, "NP", "NP");

    _defineProperty(this, "NL", "NL");

    _defineProperty(this, "NC", "NC");

    _defineProperty(this, "NZ", "NZ");

    _defineProperty(this, "NI", "NI");

    _defineProperty(this, "NE", "NE");

    _defineProperty(this, "NG", "NG");

    _defineProperty(this, "NU", "NU");

    _defineProperty(this, "NF", "NF");

    _defineProperty(this, "KP", "KP");

    _defineProperty(this, "MK", "MK");

    _defineProperty(this, "MP", "MP");

    _defineProperty(this, "NO", "NO");

    _defineProperty(this, "OM", "OM");

    _defineProperty(this, "PK", "PK");

    _defineProperty(this, "PW", "PW");

    _defineProperty(this, "PS", "PS");

    _defineProperty(this, "PA", "PA");

    _defineProperty(this, "PG", "PG");

    _defineProperty(this, "PY", "PY");

    _defineProperty(this, "PE", "PE");

    _defineProperty(this, "PH", "PH");

    _defineProperty(this, "PN", "PN");

    _defineProperty(this, "PL", "PL");

    _defineProperty(this, "PT", "PT");

    _defineProperty(this, "PR", "PR");

    _defineProperty(this, "QA", "QA");

    _defineProperty(this, "RE", "RE");

    _defineProperty(this, "RO", "RO");

    _defineProperty(this, "RU", "RU");

    _defineProperty(this, "RW", "RW");

    _defineProperty(this, "BL", "BL");

    _defineProperty(this, "SH", "SH");

    _defineProperty(this, "KN", "KN");

    _defineProperty(this, "LC", "LC");

    _defineProperty(this, "MF", "MF");

    _defineProperty(this, "PM", "PM");

    _defineProperty(this, "VC", "VC");

    _defineProperty(this, "WS", "WS");

    _defineProperty(this, "SM", "SM");

    _defineProperty(this, "ST", "ST");

    _defineProperty(this, "SA", "SA");

    _defineProperty(this, "SN", "SN");

    _defineProperty(this, "RS", "RS");

    _defineProperty(this, "SC", "SC");

    _defineProperty(this, "SL", "SL");

    _defineProperty(this, "SG", "SG");

    _defineProperty(this, "SX", "SX");

    _defineProperty(this, "SK", "SK");

    _defineProperty(this, "SI", "SI");

    _defineProperty(this, "SB", "SB");

    _defineProperty(this, "SO", "SO");

    _defineProperty(this, "ZA", "ZA");

    _defineProperty(this, "GS", "GS");

    _defineProperty(this, "KR", "KR");

    _defineProperty(this, "SS", "SS");

    _defineProperty(this, "ES", "ES");

    _defineProperty(this, "LK", "LK");

    _defineProperty(this, "SD", "SD");

    _defineProperty(this, "SR", "SR");

    _defineProperty(this, "SJ", "SJ");

    _defineProperty(this, "SE", "SE");

    _defineProperty(this, "CH", "CH");

    _defineProperty(this, "SY", "SY");

    _defineProperty(this, "TW", "TW");

    _defineProperty(this, "TJ", "TJ");

    _defineProperty(this, "TZ", "TZ");

    _defineProperty(this, "TH", "TH");

    _defineProperty(this, "TL", "TL");

    _defineProperty(this, "TG", "TG");

    _defineProperty(this, "TK", "TK");

    _defineProperty(this, "TO", "TO");

    _defineProperty(this, "TT", "TT");

    _defineProperty(this, "TN", "TN");

    _defineProperty(this, "TR", "TR");

    _defineProperty(this, "TM", "TM");

    _defineProperty(this, "TC", "TC");

    _defineProperty(this, "TV", "TV");

    _defineProperty(this, "UG", "UG");

    _defineProperty(this, "UA", "UA");

    _defineProperty(this, "AE", "AE");

    _defineProperty(this, "GB", "GB");

    _defineProperty(this, "UM", "UM");

    _defineProperty(this, "US", "US");

    _defineProperty(this, "UY", "UY");

    _defineProperty(this, "UZ", "UZ");

    _defineProperty(this, "VU", "VU");

    _defineProperty(this, "VE", "VE");

    _defineProperty(this, "VN", "VN");

    _defineProperty(this, "VG", "VG");

    _defineProperty(this, "VI", "VI");

    _defineProperty(this, "WF", "WF");

    _defineProperty(this, "EH", "EH");

    _defineProperty(this, "YE", "YE");

    _defineProperty(this, "ZM", "ZM");

    _defineProperty(this, "ZW", "ZW");
  }

  _createClass(CountryEnum, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>CountryEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CountryEnum} The enum <code>CountryEnum</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);

  return CountryEnum;
}();

exports["default"] = CountryEnum;