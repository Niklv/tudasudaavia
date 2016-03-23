// http://www.airlineupdate.com/content_public/codes/aircraft/aircraft_iata.htm
// http://aerolan.dn.ua/iata-kody-samoletov
var planes = {
    '32A': 150,
    '74N': 5,
    'SU9': 87,
    '77W': 310,
    '767': 211,
    '77X': 247,
    'E75': 76,
    '73P': 120,
    '772': 335,
    '100': 100,
    '141': 70,
    '142': 112,
    '143': 128,
    '146': 70,
    '310': 198,
    '312': 198,
    '313': 218,
    '318': 107,
    '319': 124,
    '320': 150,
    '321': 186,
    '32B': 186,
    '330': 293,
    '332': 293,
    '333': 335,
    '340': 303,
    '342': 303,
    '343': 335,
    '345': 316,
    '346': 372,
    '380': 555,
    '703': 189,
    '707': 112,
    '717': 106,
    '721': 145,
    '722': 145,
    '727': 145,
    '731': 100,
    '732': 115,
    '733': 128,
    '734': 146,
    '735': 108,
    '736': 110,
    '737': 126,
    '738': 189,
    '739': 189,
    '741': 500,
    '742': 500,
    '743': 470,
    '744': 416,
    '747': 416,
    '752': 239,
    '753': 289,
    '757': 180,
    '762': 5,
    '763': 218,
    '764': 242,
    '773': 364,
    '777': 260,
    'AT4': 50,
    'AT5': 50,
    'AT7': 74,
    'ATR': 74,
    'A26': 50,
    'A28': 20,
    'A30': 50,
    'A32': 50,
    'A40': 50,
    'A4F': 5,
    'AN4': 50,
    'AN6': 50,
    'AN7': 68,
    'ANF': 14,
    'BES': 19,
    'BEH': 19,
    '31F': 5,
    '31X': 5,
    '31Y': 5,
    '32S': 150,
    '38F': 5,
    'AB3': 200,
    'AB4': 336,
    'AB6': 266,
    'ABB': 5,
    'ABF': 5,
    'ABX': 5,
    'ABY': 5,
    '14F': 5,
    '14X': 5,
    '14Y': 5,
    '14Z': 5,
    'AR1': 100,
    'AR7': 70,
    'AR8': 85,
    'ARJ': 100,
    'ARX': 100,
    'AX1': 100,
    'AX8': 100,
    '70F': 5,
    '70M': 5,
    '72B': 145,
    '72C': 145,
    '72F': 5,
    '72M': 5,
    '72S': 145,
    '72X': 5,
    '72Y': 5,
    '73F': 5,
    '73G': 126,
    '73H': 189,
    '73M': 5,
    '73W': 126,
    '73X': 5,
    '73Y': 5,
    '74C': 210,
    '74D': 266,
    '74E': 266,
    '74F': 5,
    '74J': 568,
    '74L': 440,
    '74M': 266,
    '74R': 440,
    '74T': 5,
    '74U': 5,
    '74V': 5,
    '74X': 5,
    '74Y': 5,
    '75F': 5,
    '75M': 182,
    '76F': 5,
    '76X': 5,
    '76Y': 5,
    'CCJ': 18,
    'CL4': 160,
    'CR1': 50,
    'CR2': 50,
    'CR7': 70,
    'CR9': 80,
    'CRJ': 70,
    'ATP': 68,
    'B11': 89,
    'B12': 89,
    'B13': 89,
    'B14': 89,
    'B15': 109,
    'J31': 19,
    'J32': 19,
    'J41': 29,
    'JST': 29,
    'CS2': 26,
    'CS5': 45,
    'CVF': 5,
    'CVR': 52,
    'CVV': 5,
    'CVX': 5,
    'CV4': 52,
    'CVY': 5,
    'CV5': 52,
    'DF2': 8,
    'DF3': 18,
    'DFL': 18,
    'DH1': 40,
    'DH2': 40,
    'DH3': 50,
    'DH4': 70,
    'DH7': 54,
    'DH8': 50,
    'DHD': 11,
    'DHH': 17,
    'DHL': 9,
    'DHO': 9,
    'E70': 70,
    'E90': 98,
    'EM2': 30,
    'EMB': 18,
    'EMJ': 98,
    'ER3': 37,
    'ER4': 50,
    'ERD': 44,
    'ERJ': 44,
    'D28': 15,
    'D38': 33,
    'F27': 44,
    'FA7': 85,
    'FRJ': 34,
    'SWM': 12,
    'F21': 65,
    'F22': 79,
    'F23': 79,
    'F24': 85,
    'F28': 85,
    'F50': 50,
    'F70': 79,
    'ACD': 8,
    'ACP': 8,
    'ACT': 8,
    'GRJ': 19,
    'I14': 64,
    'I93': 235,
    'I9M': 375,
    'IL6': 174,
    'IL7': 5,
    'IL8': 122,
    'IL9': 375,
    'ILW': 350,
    'L4T': 19,
    'L10': 400,
    'L11': 400,
    'L15': 330,
    'L1F': 5,
    'LOE': 104,
    'LOF': 5,
    'LOH': 5,
    'M11': 410,
    'M1F': 5,
    'M1M': 204,
    'M80': 172,
    'M81': 172,
    'M82': 172,
    'M83': 172,
    'M87': 139,
    'M88': 172,
    'M90': 187,
    'PL2': 9,
    'PL6': 11,
    'BNI': 8,
    'BNT': 16,
    'S20': 50,
    'SF3': 37,
    'SH3': 30,
    'SH6': 36,
    'SHB': 5,
    'SHS': 19,
    'T20': 212,
    'TU3': 96,
    'TU5': 164,
    'VCV': 63,
    'YN2': 8,
    'YK2': 120,
    'YK4': 32
};

module.exports = function (iataCode) {
    if (iataCode)
        if (planes[iataCode.toUpperCase()])
            return planes[iataCode.toUpperCase()];
    console.log("UNKNOWN IATA PLANE " + iataCode);
    return 100; // DEFAULT CAP
};