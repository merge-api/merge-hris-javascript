/**
 * Merge HRIS API
 * The unified API for building rich integrations with multiple HR Information System platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export enum PayCurrencyEnum {
    Xua = <any> 'XUA',
    Afn = <any> 'AFN',
    Afa = <any> 'AFA',
    All = <any> 'ALL',
    Alk = <any> 'ALK',
    Dzd = <any> 'DZD',
    Adp = <any> 'ADP',
    Aoa = <any> 'AOA',
    Aok = <any> 'AOK',
    Aon = <any> 'AON',
    Aor = <any> 'AOR',
    Ara = <any> 'ARA',
    Ars = <any> 'ARS',
    Arm = <any> 'ARM',
    Arp = <any> 'ARP',
    Arl = <any> 'ARL',
    Amd = <any> 'AMD',
    Awg = <any> 'AWG',
    Aud = <any> 'AUD',
    Ats = <any> 'ATS',
    Azn = <any> 'AZN',
    Azm = <any> 'AZM',
    Bsd = <any> 'BSD',
    Bhd = <any> 'BHD',
    Bdt = <any> 'BDT',
    Bbd = <any> 'BBD',
    Byn = <any> 'BYN',
    Byb = <any> 'BYB',
    Byr = <any> 'BYR',
    Bef = <any> 'BEF',
    Bec = <any> 'BEC',
    Bel = <any> 'BEL',
    Bzd = <any> 'BZD',
    Bmd = <any> 'BMD',
    Btn = <any> 'BTN',
    Bob = <any> 'BOB',
    Bol = <any> 'BOL',
    Bov = <any> 'BOV',
    Bop = <any> 'BOP',
    Bam = <any> 'BAM',
    Bad = <any> 'BAD',
    Ban = <any> 'BAN',
    Bwp = <any> 'BWP',
    Brc = <any> 'BRC',
    Brz = <any> 'BRZ',
    Bre = <any> 'BRE',
    Brr = <any> 'BRR',
    Brn = <any> 'BRN',
    Brb = <any> 'BRB',
    Brl = <any> 'BRL',
    Gbp = <any> 'GBP',
    Bnd = <any> 'BND',
    Bgl = <any> 'BGL',
    Bgn = <any> 'BGN',
    Bgo = <any> 'BGO',
    Bgm = <any> 'BGM',
    Buk = <any> 'BUK',
    Bif = <any> 'BIF',
    Xpf = <any> 'XPF',
    Khr = <any> 'KHR',
    Cad = <any> 'CAD',
    Cve = <any> 'CVE',
    Kyd = <any> 'KYD',
    Xaf = <any> 'XAF',
    Cle = <any> 'CLE',
    Clp = <any> 'CLP',
    Clf = <any> 'CLF',
    Cnx = <any> 'CNX',
    Cny = <any> 'CNY',
    Cnh = <any> 'CNH',
    Cop = <any> 'COP',
    Cou = <any> 'COU',
    Kmf = <any> 'KMF',
    Cdf = <any> 'CDF',
    Crc = <any> 'CRC',
    Hrd = <any> 'HRD',
    Hrk = <any> 'HRK',
    Cuc = <any> 'CUC',
    Cup = <any> 'CUP',
    Cyp = <any> 'CYP',
    Czk = <any> 'CZK',
    Csk = <any> 'CSK',
    Dkk = <any> 'DKK',
    Djf = <any> 'DJF',
    Dop = <any> 'DOP',
    Nlg = <any> 'NLG',
    Xcd = <any> 'XCD',
    Ddm = <any> 'DDM',
    Ecs = <any> 'ECS',
    Ecv = <any> 'ECV',
    Egp = <any> 'EGP',
    Gqe = <any> 'GQE',
    Ern = <any> 'ERN',
    Eek = <any> 'EEK',
    Etb = <any> 'ETB',
    Eur = <any> 'EUR',
    Xba = <any> 'XBA',
    Xeu = <any> 'XEU',
    Xbb = <any> 'XBB',
    Xbc = <any> 'XBC',
    Xbd = <any> 'XBD',
    Fkp = <any> 'FKP',
    Fjd = <any> 'FJD',
    Fim = <any> 'FIM',
    Frf = <any> 'FRF',
    Xfo = <any> 'XFO',
    Xfu = <any> 'XFU',
    Gmd = <any> 'GMD',
    Gek = <any> 'GEK',
    Gel = <any> 'GEL',
    Dem = <any> 'DEM',
    Ghs = <any> 'GHS',
    Ghc = <any> 'GHC',
    Gip = <any> 'GIP',
    Xau = <any> 'XAU',
    Grd = <any> 'GRD',
    Gtq = <any> 'GTQ',
    Gwp = <any> 'GWP',
    Gnf = <any> 'GNF',
    Gns = <any> 'GNS',
    Gyd = <any> 'GYD',
    Htg = <any> 'HTG',
    Hnl = <any> 'HNL',
    Hkd = <any> 'HKD',
    Huf = <any> 'HUF',
    Imp = <any> 'IMP',
    Isk = <any> 'ISK',
    Isj = <any> 'ISJ',
    Inr = <any> 'INR',
    Idr = <any> 'IDR',
    Irr = <any> 'IRR',
    Iqd = <any> 'IQD',
    Iep = <any> 'IEP',
    Ils = <any> 'ILS',
    Ilp = <any> 'ILP',
    Ilr = <any> 'ILR',
    Itl = <any> 'ITL',
    Jmd = <any> 'JMD',
    Jpy = <any> 'JPY',
    Jod = <any> 'JOD',
    Kzt = <any> 'KZT',
    Kes = <any> 'KES',
    Kwd = <any> 'KWD',
    Kgs = <any> 'KGS',
    Lak = <any> 'LAK',
    Lvl = <any> 'LVL',
    Lvr = <any> 'LVR',
    Lbp = <any> 'LBP',
    Lsl = <any> 'LSL',
    Lrd = <any> 'LRD',
    Lyd = <any> 'LYD',
    Ltl = <any> 'LTL',
    Ltt = <any> 'LTT',
    Lul = <any> 'LUL',
    Luc = <any> 'LUC',
    Luf = <any> 'LUF',
    Mop = <any> 'MOP',
    Mkd = <any> 'MKD',
    Mkn = <any> 'MKN',
    Mga = <any> 'MGA',
    Mgf = <any> 'MGF',
    Mwk = <any> 'MWK',
    Myr = <any> 'MYR',
    Mvr = <any> 'MVR',
    Mvp = <any> 'MVP',
    Mlf = <any> 'MLF',
    Mtl = <any> 'MTL',
    Mtp = <any> 'MTP',
    Mru = <any> 'MRU',
    Mro = <any> 'MRO',
    Mur = <any> 'MUR',
    Mxv = <any> 'MXV',
    Mxn = <any> 'MXN',
    Mxp = <any> 'MXP',
    Mdc = <any> 'MDC',
    Mdl = <any> 'MDL',
    Mcf = <any> 'MCF',
    Mnt = <any> 'MNT',
    Mad = <any> 'MAD',
    Maf = <any> 'MAF',
    Mze = <any> 'MZE',
    Mzn = <any> 'MZN',
    Mzm = <any> 'MZM',
    Mmk = <any> 'MMK',
    Nad = <any> 'NAD',
    Npr = <any> 'NPR',
    Ang = <any> 'ANG',
    Twd = <any> 'TWD',
    Nzd = <any> 'NZD',
    Nio = <any> 'NIO',
    Nic = <any> 'NIC',
    Ngn = <any> 'NGN',
    Kpw = <any> 'KPW',
    Nok = <any> 'NOK',
    Omr = <any> 'OMR',
    Pkr = <any> 'PKR',
    Xpd = <any> 'XPD',
    Pab = <any> 'PAB',
    Pgk = <any> 'PGK',
    Pyg = <any> 'PYG',
    Pei = <any> 'PEI',
    Pen = <any> 'PEN',
    Pes = <any> 'PES',
    Php = <any> 'PHP',
    Xpt = <any> 'XPT',
    Pln = <any> 'PLN',
    Plz = <any> 'PLZ',
    Pte = <any> 'PTE',
    Gwe = <any> 'GWE',
    Qar = <any> 'QAR',
    Xre = <any> 'XRE',
    Rhd = <any> 'RHD',
    Ron = <any> 'RON',
    Rol = <any> 'ROL',
    Rub = <any> 'RUB',
    Rur = <any> 'RUR',
    Rwf = <any> 'RWF',
    Svc = <any> 'SVC',
    Wst = <any> 'WST',
    Sar = <any> 'SAR',
    Rsd = <any> 'RSD',
    Csd = <any> 'CSD',
    Scr = <any> 'SCR',
    Sll = <any> 'SLL',
    Xag = <any> 'XAG',
    Sgd = <any> 'SGD',
    Skk = <any> 'SKK',
    Sit = <any> 'SIT',
    Sbd = <any> 'SBD',
    Sos = <any> 'SOS',
    Zar = <any> 'ZAR',
    Zal = <any> 'ZAL',
    Krh = <any> 'KRH',
    Krw = <any> 'KRW',
    Kro = <any> 'KRO',
    Ssp = <any> 'SSP',
    Sur = <any> 'SUR',
    Esp = <any> 'ESP',
    Esa = <any> 'ESA',
    Esb = <any> 'ESB',
    Xdr = <any> 'XDR',
    Lkr = <any> 'LKR',
    Shp = <any> 'SHP',
    Xsu = <any> 'XSU',
    Sdd = <any> 'SDD',
    Sdg = <any> 'SDG',
    Sdp = <any> 'SDP',
    Srd = <any> 'SRD',
    Srg = <any> 'SRG',
    Szl = <any> 'SZL',
    Sek = <any> 'SEK',
    Chf = <any> 'CHF',
    Syp = <any> 'SYP',
    Stn = <any> 'STN',
    Std = <any> 'STD',
    Tvd = <any> 'TVD',
    Tjr = <any> 'TJR',
    Tjs = <any> 'TJS',
    Tzs = <any> 'TZS',
    Xts = <any> 'XTS',
    Thb = <any> 'THB',
    Xxx = <any> 'XXX',
    Tpe = <any> 'TPE',
    Top = <any> 'TOP',
    Ttd = <any> 'TTD',
    Tnd = <any> 'TND',
    Try = <any> 'TRY',
    Trl = <any> 'TRL',
    Tmt = <any> 'TMT',
    Tmm = <any> 'TMM',
    Usd = <any> 'USD',
    Usn = <any> 'USN',
    Uss = <any> 'USS',
    Ugx = <any> 'UGX',
    Ugs = <any> 'UGS',
    Uah = <any> 'UAH',
    Uak = <any> 'UAK',
    Aed = <any> 'AED',
    Uyw = <any> 'UYW',
    Uyu = <any> 'UYU',
    Uyp = <any> 'UYP',
    Uyi = <any> 'UYI',
    Uzs = <any> 'UZS',
    Vuv = <any> 'VUV',
    Ves = <any> 'VES',
    Veb = <any> 'VEB',
    Vef = <any> 'VEF',
    Vnd = <any> 'VND',
    Vnn = <any> 'VNN',
    Che = <any> 'CHE',
    Chw = <any> 'CHW',
    Xof = <any> 'XOF',
    Ydd = <any> 'YDD',
    Yer = <any> 'YER',
    Yun = <any> 'YUN',
    Yud = <any> 'YUD',
    Yum = <any> 'YUM',
    Yur = <any> 'YUR',
    Zwn = <any> 'ZWN',
    Zrn = <any> 'ZRN',
    Zrz = <any> 'ZRZ',
    Zmw = <any> 'ZMW',
    Zmk = <any> 'ZMK',
    Zwd = <any> 'ZWD',
    Zwr = <any> 'ZWR',
    Zwl = <any> 'ZWL'
}
