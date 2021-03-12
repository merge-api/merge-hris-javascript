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
* Enum class PayCurrencyEnum.
* @enum {}
* @readonly
*/
var PayCurrencyEnum = /*#__PURE__*/function () {
  function PayCurrencyEnum() {
    _classCallCheck(this, PayCurrencyEnum);

    _defineProperty(this, "XUA", "XUA");

    _defineProperty(this, "AFN", "AFN");

    _defineProperty(this, "AFA", "AFA");

    _defineProperty(this, "ALL", "ALL");

    _defineProperty(this, "ALK", "ALK");

    _defineProperty(this, "DZD", "DZD");

    _defineProperty(this, "ADP", "ADP");

    _defineProperty(this, "AOA", "AOA");

    _defineProperty(this, "AOK", "AOK");

    _defineProperty(this, "AON", "AON");

    _defineProperty(this, "AOR", "AOR");

    _defineProperty(this, "ARA", "ARA");

    _defineProperty(this, "ARS", "ARS");

    _defineProperty(this, "ARM", "ARM");

    _defineProperty(this, "ARP", "ARP");

    _defineProperty(this, "ARL", "ARL");

    _defineProperty(this, "AMD", "AMD");

    _defineProperty(this, "AWG", "AWG");

    _defineProperty(this, "AUD", "AUD");

    _defineProperty(this, "ATS", "ATS");

    _defineProperty(this, "AZN", "AZN");

    _defineProperty(this, "AZM", "AZM");

    _defineProperty(this, "BSD", "BSD");

    _defineProperty(this, "BHD", "BHD");

    _defineProperty(this, "BDT", "BDT");

    _defineProperty(this, "BBD", "BBD");

    _defineProperty(this, "BYN", "BYN");

    _defineProperty(this, "BYB", "BYB");

    _defineProperty(this, "BYR", "BYR");

    _defineProperty(this, "BEF", "BEF");

    _defineProperty(this, "BEC", "BEC");

    _defineProperty(this, "BEL", "BEL");

    _defineProperty(this, "BZD", "BZD");

    _defineProperty(this, "BMD", "BMD");

    _defineProperty(this, "BTN", "BTN");

    _defineProperty(this, "BOB", "BOB");

    _defineProperty(this, "BOL", "BOL");

    _defineProperty(this, "BOV", "BOV");

    _defineProperty(this, "BOP", "BOP");

    _defineProperty(this, "BAM", "BAM");

    _defineProperty(this, "BAD", "BAD");

    _defineProperty(this, "BAN", "BAN");

    _defineProperty(this, "BWP", "BWP");

    _defineProperty(this, "BRC", "BRC");

    _defineProperty(this, "BRZ", "BRZ");

    _defineProperty(this, "BRE", "BRE");

    _defineProperty(this, "BRR", "BRR");

    _defineProperty(this, "BRN", "BRN");

    _defineProperty(this, "BRB", "BRB");

    _defineProperty(this, "BRL", "BRL");

    _defineProperty(this, "GBP", "GBP");

    _defineProperty(this, "BND", "BND");

    _defineProperty(this, "BGL", "BGL");

    _defineProperty(this, "BGN", "BGN");

    _defineProperty(this, "BGO", "BGO");

    _defineProperty(this, "BGM", "BGM");

    _defineProperty(this, "BUK", "BUK");

    _defineProperty(this, "BIF", "BIF");

    _defineProperty(this, "XPF", "XPF");

    _defineProperty(this, "KHR", "KHR");

    _defineProperty(this, "CAD", "CAD");

    _defineProperty(this, "CVE", "CVE");

    _defineProperty(this, "KYD", "KYD");

    _defineProperty(this, "XAF", "XAF");

    _defineProperty(this, "CLE", "CLE");

    _defineProperty(this, "CLP", "CLP");

    _defineProperty(this, "CLF", "CLF");

    _defineProperty(this, "CNX", "CNX");

    _defineProperty(this, "CNY", "CNY");

    _defineProperty(this, "CNH", "CNH");

    _defineProperty(this, "COP", "COP");

    _defineProperty(this, "COU", "COU");

    _defineProperty(this, "KMF", "KMF");

    _defineProperty(this, "CDF", "CDF");

    _defineProperty(this, "CRC", "CRC");

    _defineProperty(this, "HRD", "HRD");

    _defineProperty(this, "HRK", "HRK");

    _defineProperty(this, "CUC", "CUC");

    _defineProperty(this, "CUP", "CUP");

    _defineProperty(this, "CYP", "CYP");

    _defineProperty(this, "CZK", "CZK");

    _defineProperty(this, "CSK", "CSK");

    _defineProperty(this, "DKK", "DKK");

    _defineProperty(this, "DJF", "DJF");

    _defineProperty(this, "DOP", "DOP");

    _defineProperty(this, "NLG", "NLG");

    _defineProperty(this, "XCD", "XCD");

    _defineProperty(this, "DDM", "DDM");

    _defineProperty(this, "ECS", "ECS");

    _defineProperty(this, "ECV", "ECV");

    _defineProperty(this, "EGP", "EGP");

    _defineProperty(this, "GQE", "GQE");

    _defineProperty(this, "ERN", "ERN");

    _defineProperty(this, "EEK", "EEK");

    _defineProperty(this, "ETB", "ETB");

    _defineProperty(this, "EUR", "EUR");

    _defineProperty(this, "XBA", "XBA");

    _defineProperty(this, "XEU", "XEU");

    _defineProperty(this, "XBB", "XBB");

    _defineProperty(this, "XBC", "XBC");

    _defineProperty(this, "XBD", "XBD");

    _defineProperty(this, "FKP", "FKP");

    _defineProperty(this, "FJD", "FJD");

    _defineProperty(this, "FIM", "FIM");

    _defineProperty(this, "FRF", "FRF");

    _defineProperty(this, "XFO", "XFO");

    _defineProperty(this, "XFU", "XFU");

    _defineProperty(this, "GMD", "GMD");

    _defineProperty(this, "GEK", "GEK");

    _defineProperty(this, "GEL", "GEL");

    _defineProperty(this, "DEM", "DEM");

    _defineProperty(this, "GHS", "GHS");

    _defineProperty(this, "GHC", "GHC");

    _defineProperty(this, "GIP", "GIP");

    _defineProperty(this, "XAU", "XAU");

    _defineProperty(this, "GRD", "GRD");

    _defineProperty(this, "GTQ", "GTQ");

    _defineProperty(this, "GWP", "GWP");

    _defineProperty(this, "GNF", "GNF");

    _defineProperty(this, "GNS", "GNS");

    _defineProperty(this, "GYD", "GYD");

    _defineProperty(this, "HTG", "HTG");

    _defineProperty(this, "HNL", "HNL");

    _defineProperty(this, "HKD", "HKD");

    _defineProperty(this, "HUF", "HUF");

    _defineProperty(this, "IMP", "IMP");

    _defineProperty(this, "ISK", "ISK");

    _defineProperty(this, "ISJ", "ISJ");

    _defineProperty(this, "INR", "INR");

    _defineProperty(this, "IDR", "IDR");

    _defineProperty(this, "IRR", "IRR");

    _defineProperty(this, "IQD", "IQD");

    _defineProperty(this, "IEP", "IEP");

    _defineProperty(this, "ILS", "ILS");

    _defineProperty(this, "ILP", "ILP");

    _defineProperty(this, "ILR", "ILR");

    _defineProperty(this, "ITL", "ITL");

    _defineProperty(this, "JMD", "JMD");

    _defineProperty(this, "JPY", "JPY");

    _defineProperty(this, "JOD", "JOD");

    _defineProperty(this, "KZT", "KZT");

    _defineProperty(this, "KES", "KES");

    _defineProperty(this, "KWD", "KWD");

    _defineProperty(this, "KGS", "KGS");

    _defineProperty(this, "LAK", "LAK");

    _defineProperty(this, "LVL", "LVL");

    _defineProperty(this, "LVR", "LVR");

    _defineProperty(this, "LBP", "LBP");

    _defineProperty(this, "LSL", "LSL");

    _defineProperty(this, "LRD", "LRD");

    _defineProperty(this, "LYD", "LYD");

    _defineProperty(this, "LTL", "LTL");

    _defineProperty(this, "LTT", "LTT");

    _defineProperty(this, "LUL", "LUL");

    _defineProperty(this, "LUC", "LUC");

    _defineProperty(this, "LUF", "LUF");

    _defineProperty(this, "MOP", "MOP");

    _defineProperty(this, "MKD", "MKD");

    _defineProperty(this, "MKN", "MKN");

    _defineProperty(this, "MGA", "MGA");

    _defineProperty(this, "MGF", "MGF");

    _defineProperty(this, "MWK", "MWK");

    _defineProperty(this, "MYR", "MYR");

    _defineProperty(this, "MVR", "MVR");

    _defineProperty(this, "MVP", "MVP");

    _defineProperty(this, "MLF", "MLF");

    _defineProperty(this, "MTL", "MTL");

    _defineProperty(this, "MTP", "MTP");

    _defineProperty(this, "MRU", "MRU");

    _defineProperty(this, "MRO", "MRO");

    _defineProperty(this, "MUR", "MUR");

    _defineProperty(this, "MXV", "MXV");

    _defineProperty(this, "MXN", "MXN");

    _defineProperty(this, "MXP", "MXP");

    _defineProperty(this, "MDC", "MDC");

    _defineProperty(this, "MDL", "MDL");

    _defineProperty(this, "MCF", "MCF");

    _defineProperty(this, "MNT", "MNT");

    _defineProperty(this, "MAD", "MAD");

    _defineProperty(this, "MAF", "MAF");

    _defineProperty(this, "MZE", "MZE");

    _defineProperty(this, "MZN", "MZN");

    _defineProperty(this, "MZM", "MZM");

    _defineProperty(this, "MMK", "MMK");

    _defineProperty(this, "NAD", "NAD");

    _defineProperty(this, "NPR", "NPR");

    _defineProperty(this, "ANG", "ANG");

    _defineProperty(this, "TWD", "TWD");

    _defineProperty(this, "NZD", "NZD");

    _defineProperty(this, "NIO", "NIO");

    _defineProperty(this, "NIC", "NIC");

    _defineProperty(this, "NGN", "NGN");

    _defineProperty(this, "KPW", "KPW");

    _defineProperty(this, "NOK", "NOK");

    _defineProperty(this, "OMR", "OMR");

    _defineProperty(this, "PKR", "PKR");

    _defineProperty(this, "XPD", "XPD");

    _defineProperty(this, "PAB", "PAB");

    _defineProperty(this, "PGK", "PGK");

    _defineProperty(this, "PYG", "PYG");

    _defineProperty(this, "PEI", "PEI");

    _defineProperty(this, "PEN", "PEN");

    _defineProperty(this, "PES", "PES");

    _defineProperty(this, "PHP", "PHP");

    _defineProperty(this, "XPT", "XPT");

    _defineProperty(this, "PLN", "PLN");

    _defineProperty(this, "PLZ", "PLZ");

    _defineProperty(this, "PTE", "PTE");

    _defineProperty(this, "GWE", "GWE");

    _defineProperty(this, "QAR", "QAR");

    _defineProperty(this, "XRE", "XRE");

    _defineProperty(this, "RHD", "RHD");

    _defineProperty(this, "RON", "RON");

    _defineProperty(this, "ROL", "ROL");

    _defineProperty(this, "RUB", "RUB");

    _defineProperty(this, "RUR", "RUR");

    _defineProperty(this, "RWF", "RWF");

    _defineProperty(this, "SVC", "SVC");

    _defineProperty(this, "WST", "WST");

    _defineProperty(this, "SAR", "SAR");

    _defineProperty(this, "RSD", "RSD");

    _defineProperty(this, "CSD", "CSD");

    _defineProperty(this, "SCR", "SCR");

    _defineProperty(this, "SLL", "SLL");

    _defineProperty(this, "XAG", "XAG");

    _defineProperty(this, "SGD", "SGD");

    _defineProperty(this, "SKK", "SKK");

    _defineProperty(this, "SIT", "SIT");

    _defineProperty(this, "SBD", "SBD");

    _defineProperty(this, "SOS", "SOS");

    _defineProperty(this, "ZAR", "ZAR");

    _defineProperty(this, "ZAL", "ZAL");

    _defineProperty(this, "KRH", "KRH");

    _defineProperty(this, "KRW", "KRW");

    _defineProperty(this, "KRO", "KRO");

    _defineProperty(this, "SSP", "SSP");

    _defineProperty(this, "SUR", "SUR");

    _defineProperty(this, "ESP", "ESP");

    _defineProperty(this, "ESA", "ESA");

    _defineProperty(this, "ESB", "ESB");

    _defineProperty(this, "XDR", "XDR");

    _defineProperty(this, "LKR", "LKR");

    _defineProperty(this, "SHP", "SHP");

    _defineProperty(this, "XSU", "XSU");

    _defineProperty(this, "SDD", "SDD");

    _defineProperty(this, "SDG", "SDG");

    _defineProperty(this, "SDP", "SDP");

    _defineProperty(this, "SRD", "SRD");

    _defineProperty(this, "SRG", "SRG");

    _defineProperty(this, "SZL", "SZL");

    _defineProperty(this, "SEK", "SEK");

    _defineProperty(this, "CHF", "CHF");

    _defineProperty(this, "SYP", "SYP");

    _defineProperty(this, "STN", "STN");

    _defineProperty(this, "STD", "STD");

    _defineProperty(this, "TVD", "TVD");

    _defineProperty(this, "TJR", "TJR");

    _defineProperty(this, "TJS", "TJS");

    _defineProperty(this, "TZS", "TZS");

    _defineProperty(this, "XTS", "XTS");

    _defineProperty(this, "THB", "THB");

    _defineProperty(this, "XXX", "XXX");

    _defineProperty(this, "TPE", "TPE");

    _defineProperty(this, "TOP", "TOP");

    _defineProperty(this, "TTD", "TTD");

    _defineProperty(this, "TND", "TND");

    _defineProperty(this, "TRY", "TRY");

    _defineProperty(this, "TRL", "TRL");

    _defineProperty(this, "TMT", "TMT");

    _defineProperty(this, "TMM", "TMM");

    _defineProperty(this, "USD", "USD");

    _defineProperty(this, "USN", "USN");

    _defineProperty(this, "USS", "USS");

    _defineProperty(this, "UGX", "UGX");

    _defineProperty(this, "UGS", "UGS");

    _defineProperty(this, "UAH", "UAH");

    _defineProperty(this, "UAK", "UAK");

    _defineProperty(this, "AED", "AED");

    _defineProperty(this, "UYW", "UYW");

    _defineProperty(this, "UYU", "UYU");

    _defineProperty(this, "UYP", "UYP");

    _defineProperty(this, "UYI", "UYI");

    _defineProperty(this, "UZS", "UZS");

    _defineProperty(this, "VUV", "VUV");

    _defineProperty(this, "VES", "VES");

    _defineProperty(this, "VEB", "VEB");

    _defineProperty(this, "VEF", "VEF");

    _defineProperty(this, "VND", "VND");

    _defineProperty(this, "VNN", "VNN");

    _defineProperty(this, "CHE", "CHE");

    _defineProperty(this, "CHW", "CHW");

    _defineProperty(this, "XOF", "XOF");

    _defineProperty(this, "YDD", "YDD");

    _defineProperty(this, "YER", "YER");

    _defineProperty(this, "YUN", "YUN");

    _defineProperty(this, "YUD", "YUD");

    _defineProperty(this, "YUM", "YUM");

    _defineProperty(this, "YUR", "YUR");

    _defineProperty(this, "ZWN", "ZWN");

    _defineProperty(this, "ZRN", "ZRN");

    _defineProperty(this, "ZRZ", "ZRZ");

    _defineProperty(this, "ZMW", "ZMW");

    _defineProperty(this, "ZMK", "ZMK");

    _defineProperty(this, "ZWD", "ZWD");

    _defineProperty(this, "ZWR", "ZWR");

    _defineProperty(this, "ZWL", "ZWL");
  }

  _createClass(PayCurrencyEnum, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>PayCurrencyEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/PayCurrencyEnum} The enum <code>PayCurrencyEnum</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);

  return PayCurrencyEnum;
}();

exports["default"] = PayCurrencyEnum;