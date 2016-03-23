// curl -v  -X GET "https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/SVO/dep/2016/3/22/6?appId=&appKey=&utc=false&numHours=6"
// curl -v  -X GET "https://api.flightstats.com/flex/flightstatus/historical/rest/v2/json/airport/status/svo/dep/2016/03/23/12?appId=&appKey=&utc=false&numHours=6"
module.exports = {
    "request": {
        "airport": {
            "requestedCode": "SVO",
            "fsCode": "SVO"
        },
        "date": {
            "year": "2016",
            "month": "3",
            "day": "22",
            "interpreted": "2016-03-22"
        },
        "hourOfDay": {
            "requested": "6",
            "interpreted": 6
        },
        "numHours": {
            "requested": "6",
            "interpreted": 6
        },
        "utc": {
            "requested": "false",
            "interpreted": false
        },
        "codeType": {},
        "maxFlights": {},
        "extendedOptions": {},
        "url": "https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/SVO/dep/2016/3/22/6"
    },
    "appendix": {
        "airlines": [
            {
                "fs": "KL",
                "iata": "KL",
                "icao": "KLM",
                "name": "KLM",
                "active": true
            },
            {
                "fs": "SU",
                "iata": "SU",
                "icao": "AFL",
                "name": "Aeroflot",
                "active": true
            },
            {
                "fs": "UX",
                "iata": "UX",
                "icao": "AEA",
                "name": "Air Europa",
                "active": true
            },
            {
                "fs": "FI",
                "iata": "FI",
                "icao": "ICE",
                "name": "Icelandair",
                "active": true
            },
            {
                "fs": "SV",
                "iata": "SV",
                "icao": "SVA",
                "name": "Saudia",
                "active": true
            },
            {
                "fs": "RU",
                "iata": "RU",
                "icao": "ABW",
                "name": "AirBridgeCargo",
                "active": true
            },
            {
                "fs": "LO",
                "iata": "LO",
                "icao": "LOT",
                "name": "LOT - Polish Airlines",
                "active": true
            },
            {
                "fs": "AF",
                "iata": "AF",
                "icao": "AFR",
                "name": "Air France",
                "phoneNumber": "1-800-237-2747",
                "active": true
            },
            {
                "fs": "KQ",
                "iata": "KQ",
                "icao": "KQA",
                "name": "Kenya Airways",
                "active": true
            },
            {
                "fs": "MU",
                "iata": "MU",
                "icao": "CES",
                "name": "China Eastern Airlines",
                "active": true
            },
            {
                "fs": "IR",
                "iata": "IR",
                "icao": "IRA",
                "name": "Iran Air",
                "active": true
            },
            {
                "fs": "JU",
                "iata": "JU",
                "icao": "JAT",
                "name": "Air Serbia",
                "active": true
            },
            {
                "fs": "D2",
                "iata": "D2",
                "icao": "SSF",
                "name": "Severstal Aircompany",
                "active": true
            },
            {
                "fs": "CU",
                "iata": "CU",
                "icao": "CUB",
                "name": "Cubana de Aviacion",
                "active": true
            },
            {
                "fs": "BT",
                "iata": "BT",
                "icao": "BTI",
                "name": "Air Baltic",
                "active": true
            },
            {
                "fs": "KC",
                "iata": "KC",
                "icao": "KZR",
                "name": "Air Astana",
                "active": true
            },
            {
                "fs": "AY",
                "iata": "AY",
                "icao": "FIN",
                "name": "Finnair",
                "active": true
            },
            {
                "fs": "AZ",
                "iata": "AZ",
                "icao": "AZA",
                "name": "Alitalia",
                "active": true
            },
            {
                "fs": "OK",
                "iata": "OK",
                "icao": "CSA",
                "name": "CSA",
                "active": true
            },
            {
                "fs": "RO",
                "iata": "RO",
                "icao": "ROT",
                "name": "TAROM",
                "active": true
            }
        ],
        "airports": [
            {
                "fs": "RIX",
                "iata": "RIX",
                "icao": "EVRA",
                "name": "Riga International Airport",
                "city": "Riga",
                "cityCode": "RIX",
                "countryCode": "LV",
                "countryName": "Latvia",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Riga",
                "localTime": "2016-03-22T22:18:33.147",
                "utcOffsetHours": 2,
                "latitude": 56.92208,
                "longitude": 23.979806,
                "elevationFeet": 34,
                "classification": 2,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/RIX?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/RIX?codeType=fs"
            },
            {
                "fs": "SXF",
                "iata": "SXF",
                "icao": "EDDB",
                "name": "Schonefeld Airport",
                "city": "Berlin",
                "cityCode": "BER",
                "countryCode": "DE",
                "countryName": "Germany",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Berlin",
                "localTime": "2016-03-22T21:18:33.155",
                "utcOffsetHours": 1,
                "latitude": 52.370278,
                "longitude": 13.521388,
                "elevationFeet": 154,
                "classification": 3,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SXF?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SXF?codeType=fs"
            },
            {
                "fs": "TIV",
                "iata": "TIV",
                "icao": "LYTV",
                "name": "Tivat Airport",
                "city": "Tivat",
                "cityCode": "TIV",
                "countryCode": "ME",
                "countryName": "Montenegro",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Podgorica",
                "localTime": "2016-03-22T21:18:33.156",
                "utcOffsetHours": 1,
                "latitude": 42.403611,
                "longitude": 18.725556,
                "elevationFeet": 20,
                "classification": 4,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/TIV?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/TIV?codeType=fs"
            },
            {
                "fs": "BRU",
                "iata": "BRU",
                "icao": "EBBR",
                "name": "Brussels Airport",
                "city": "Brussels",
                "cityCode": "BRU",
                "countryCode": "BE",
                "countryName": "Belgium",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Brussels",
                "localTime": "2016-03-22T21:18:33.093",
                "utcOffsetHours": 1,
                "latitude": 50.89717,
                "longitude": 4.483602,
                "elevationFeet": 184,
                "classification": 1,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/BRU?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/BRU?codeType=fs"
            },
            {
                "fs": "MXP",
                "iata": "MXP",
                "icao": "LIMC",
                "name": "Milano Malpensa Airport",
                "city": "Milan",
                "cityCode": "MIL",
                "countryCode": "IT",
                "countryName": "Italy",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Rome",
                "localTime": "2016-03-22T21:18:33.138",
                "utcOffsetHours": 1,
                "latitude": 45.627405,
                "longitude": 8.71237,
                "elevationFeet": 733,
                "classification": 2,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/MXP?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/MXP?codeType=fs"
            },
            {
                "fs": "PRG",
                "iata": "PRG",
                "icao": "LKPR",
                "name": "Vaclav Havel Airport Prague",
                "city": "Prague",
                "cityCode": "PRG",
                "countryCode": "CZ",
                "countryName": "Czech Republic",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Prague",
                "localTime": "2016-03-22T21:18:33.146",
                "utcOffsetHours": 1,
                "latitude": 50.106188,
                "longitude": 14.266638,
                "elevationFeet": 1170,
                "classification": 2,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/PRG?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/PRG?codeType=fs"
            },
            {
                "fs": "NJC",
                "iata": "NJC",
                "icao": "USNN",
                "name": "Nizhnevartovsk Airport",
                "city": "Nizhnevartovsk",
                "cityCode": "NJC",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Asia/Yekaterinburg",
                "localTime": "2016-03-23T01:18:33.141",
                "utcOffsetHours": 5,
                "latitude": 60.947603,
                "longitude": 76.491447,
                "elevationFeet": 157,
                "classification": 4,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/NJC?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/NJC?codeType=fs"
            },
            {
                "fs": "CDG",
                "iata": "CDG",
                "icao": "LFPG",
                "name": "Charles de Gaulle Airport",
                "street1": "95711, Roissy Charles de Gaulle",
                "city": "Paris",
                "cityCode": "PAR",
                "countryCode": "FR",
                "countryName": "France",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Paris",
                "localTime": "2016-03-22T21:18:33.094",
                "utcOffsetHours": 1,
                "latitude": 49.003196,
                "longitude": 2.567023,
                "elevationFeet": 387,
                "classification": 1,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/CDG?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/CDG?codeType=fs"
            },
            {
                "fs": "FRU",
                "iata": "FRU",
                "icao": "UAFM",
                "name": "Manas International Airport",
                "city": "Bishkek",
                "cityCode": "FRU",
                "countryCode": "KG",
                "countryName": "Kyrgyzstan",
                "regionName": "Asia",
                "timeZoneRegionName": "Asia/Bishkek",
                "localTime": "2016-03-23T02:18:33.105",
                "utcOffsetHours": 6,
                "latitude": 43.053581,
                "longitude": 74.469449,
                "elevationFeet": 2090,
                "classification": 3,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/FRU?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/FRU?codeType=fs"
            },
            {
                "fs": "OTP",
                "iata": "OTP",
                "icao": "LROP",
                "name": "Bucharest Henri Coanda International Airport",
                "city": "Bucharest",
                "cityCode": "BUH",
                "countryCode": "RO",
                "countryName": "Romania",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Bucharest",
                "localTime": "2016-03-22T22:18:33.143",
                "utcOffsetHours": 2,
                "latitude": 44.571155,
                "longitude": 26.077063,
                "elevationFeet": 314,
                "classification": 2,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/OTP?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/OTP?codeType=fs"
            },
            {
                "fs": "JFK",
                "iata": "JFK",
                "icao": "KJFK",
                "faa": "JFK",
                "name": "John F. Kennedy International Airport",
                "street1": "JFK Airport",
                "city": "New York",
                "cityCode": "NYC",
                "stateCode": "NY",
                "postalCode": "11430",
                "countryCode": "US",
                "countryName": "United States",
                "regionName": "North America",
                "timeZoneRegionName": "America/New_York",
                "weatherZone": "NYZ178",
                "localTime": "2016-03-22T16:18:33.114",
                "utcOffsetHours": -4,
                "latitude": 40.642335,
                "longitude": -73.78817,
                "elevationFeet": 13,
                "classification": 1,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/JFK?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/JFK?codeType=fs"
            },
            {
                "fs": "NBC",
                "iata": "NBC",
                "icao": "UWKE",
                "name": "Begishevo Airport",
                "city": "Naberezhnye Chelny",
                "cityCode": "NBC",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Moscow",
                "localTime": "2016-03-22T23:18:33.140",
                "utcOffsetHours": 3,
                "latitude": 55.565785,
                "longitude": 52.101637,
                "elevationFeet": 626,
                "classification": 4,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/NBC?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/NBC?codeType=fs"
            },
            {
                "fs": "STR",
                "iata": "STR",
                "icao": "EDDS",
                "name": "Stuttgart Airport",
                "city": "Stuttgart",
                "cityCode": "STR",
                "countryCode": "DE",
                "countryName": "Germany",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Berlin",
                "localTime": "2016-03-22T21:18:33.153",
                "utcOffsetHours": 1,
                "latitude": 48.690732,
                "longitude": 9.193624,
                "elevationFeet": 1250,
                "classification": 2,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/STR?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/STR?codeType=fs"
            },
            {
                "fs": "ZRH",
                "iata": "ZRH",
                "icao": "LSZH",
                "name": "Zurich Airport",
                "city": "Zurich",
                "cityCode": "ZRH",
                "countryCode": "CH",
                "countryName": "Switzerland",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Zurich",
                "localTime": "2016-03-22T21:18:33.161",
                "utcOffsetHours": 1,
                "latitude": 47.450604,
                "longitude": 8.561746,
                "elevationFeet": 1416,
                "classification": 1,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/ZRH?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/ZRH?codeType=fs"
            },
            {
                "fs": "GYD",
                "iata": "GYD",
                "name": "Heydar Aliyev International Airport",
                "city": "Baku",
                "cityCode": "BAK",
                "countryCode": "AZ",
                "countryName": "Azerbaijan",
                "regionName": "Asia",
                "timeZoneRegionName": "Asia/Baku",
                "localTime": "2016-03-23T00:18:33.108",
                "utcOffsetHours": 4,
                "latitude": 40.462487,
                "longitude": 50.05039,
                "elevationFeet": 2,
                "classification": 3,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/GYD?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/GYD?codeType=fs"
            },
            {
                "fs": "TJM",
                "iata": "TJM",
                "icao": "USTR",
                "name": "Roshchino International Airport",
                "city": "Tyumen",
                "cityCode": "TJM",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Asia/Yekaterinburg",
                "localTime": "2016-03-23T01:18:33.156",
                "utcOffsetHours": 5,
                "latitude": 57.181826,
                "longitude": 65.350246,
                "elevationFeet": 371,
                "classification": 3,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/TJM?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/TJM?codeType=fs"
            },
            {
                "fs": "VNO",
                "iata": "VNO",
                "icao": "EYVI",
                "name": "Vilnius International Airport",
                "city": "Vilnius",
                "cityCode": "VNO",
                "countryCode": "LT",
                "countryName": "Lithuania",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Vilnius",
                "localTime": "2016-03-22T22:18:33.160",
                "utcOffsetHours": 2,
                "latitude": 54.643079,
                "longitude": 25.279605,
                "elevationFeet": 646,
                "classification": 3,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/VNO?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/VNO?codeType=fs"
            },
            {
                "fs": "STW",
                "iata": "STW",
                "icao": "URMT",
                "name": "Stavropol Airport",
                "city": "Stavropol",
                "cityCode": "STW",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Moscow",
                "localTime": "2016-03-22T23:18:33.154",
                "utcOffsetHours": 3,
                "latitude": 45.333333,
                "longitude": 42.008333,
                "elevationFeet": 1486,
                "classification": 4,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/STW?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/STW?codeType=fs"
            },
            {
                "fs": "MUC",
                "iata": "MUC",
                "icao": "EDDM",
                "name": "Franz Josef Strauss Airport",
                "city": "Munich",
                "cityCode": "MUC",
                "countryCode": "DE",
                "countryName": "Germany",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Berlin",
                "localTime": "2016-03-22T21:18:33.137",
                "utcOffsetHours": 1,
                "latitude": 48.353005,
                "longitude": 11.790143,
                "elevationFeet": 1486,
                "classification": 1,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/MUC?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/MUC?codeType=fs"
            },
            {
                "fs": "KUF",
                "iata": "KUF",
                "icao": "UWWW",
                "name": "Kurumoch International Airport",
                "city": "Samara",
                "cityCode": "KUF",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Samara",
                "localTime": "2016-03-23T00:18:33.119",
                "utcOffsetHours": 4,
                "latitude": 53.507819,
                "longitude": 50.14742,
                "elevationFeet": 476,
                "classification": 3,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/KUF?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/KUF?codeType=fs"
            },
            {
                "fs": "CEE",
                "iata": "CEE",
                "name": "Cherepovets Airport",
                "city": "Cherepovets",
                "cityCode": "CEE",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Moscow",
                "localTime": "2016-03-22T23:18:33.096",
                "utcOffsetHours": 3,
                "latitude": 59.283333,
                "longitude": 38.066667,
                "classification": 4,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/CEE?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/CEE?codeType=fs"
            },
            {
                "fs": "MIA",
                "iata": "MIA",
                "icao": "KMIA",
                "faa": "MIA",
                "name": "Miami International Airport",
                "street1": "4200 N.W. 21 Street",
                "street2": "",
                "city": "Miami",
                "cityCode": "MIA",
                "stateCode": "FL",
                "postalCode": "33122",
                "countryCode": "US",
                "countryName": "United States",
                "regionName": "North America",
                "timeZoneRegionName": "America/New_York",
                "weatherZone": "FLZ074",
                "localTime": "2016-03-22T16:18:33.133",
                "utcOffsetHours": -4,
                "latitude": 25.796,
                "longitude": -80.278234,
                "elevationFeet": 8,
                "classification": 1,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/MIA?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/MIA?codeType=fs"
            },
            {
                "fs": "HKG",
                "iata": "HKG",
                "icao": "VHHH",
                "name": "Hong Kong International Airport",
                "street1": "1 Cheong Hong Rd",
                "street2": "Chek Lap Kok Airport",
                "city": "Hong Kong",
                "cityCode": "HKG",
                "countryCode": "HK",
                "countryName": "Hong Kong",
                "regionName": "Asia",
                "timeZoneRegionName": "Asia/Hong_Kong",
                "localTime": "2016-03-23T04:18:33.112",
                "utcOffsetHours": 8,
                "latitude": 22.315248,
                "longitude": 113.93649,
                "elevationFeet": 19,
                "classification": 1,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/HKG?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/HKG?codeType=fs"
            },
            {
                "fs": "AMS",
                "iata": "AMS",
                "icao": "EHAM",
                "name": "Amsterdam Airport Schiphol",
                "city": "Amsterdam",
                "cityCode": "AMS",
                "countryCode": "NL",
                "countryName": "Netherlands",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Amsterdam",
                "localTime": "2016-03-22T21:18:33.088",
                "utcOffsetHours": 1,
                "latitude": 52.309069,
                "longitude": 4.763385,
                "elevationFeet": -11,
                "classification": 1,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/AMS?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/AMS?codeType=fs"
            },
            {
                "fs": "CEK",
                "iata": "CEK",
                "icao": "USCC",
                "name": "Chelyabinsk International Airport",
                "city": "Chelyabinsk",
                "cityCode": "CEK",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Asia/Yekaterinburg",
                "localTime": "2016-03-23T01:18:33.097",
                "utcOffsetHours": 5,
                "latitude": 55.297506,
                "longitude": 61.51235,
                "elevationFeet": 769,
                "classification": 4,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/CEK?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/CEK?codeType=fs"
            },
            {
                "fs": "MMK",
                "iata": "MMK",
                "icao": "ULMM",
                "name": "Murmansk Airport",
                "city": "Murmansk",
                "cityCode": "MMK",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Moscow",
                "localTime": "2016-03-22T23:18:33.134",
                "utcOffsetHours": 3,
                "latitude": 68.785092,
                "longitude": 32.759155,
                "elevationFeet": 266,
                "classification": 4,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/MMK?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/MMK?codeType=fs"
            },
            {
                "fs": "LCA",
                "iata": "LCA",
                "icao": "LCLK",
                "name": "Larnaca International Airport",
                "city": "Larnaca",
                "cityCode": "LCA",
                "countryCode": "CY",
                "countryName": "Cyprus",
                "regionName": "Europe",
                "timeZoneRegionName": "Asia/Nicosia",
                "localTime": "2016-03-22T22:18:33.124",
                "utcOffsetHours": 2,
                "latitude": 34.870871,
                "longitude": 33.607975,
                "elevationFeet": 8,
                "classification": 3,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/LCA?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/LCA?codeType=fs"
            },
            {
                "fs": "BCN",
                "iata": "BCN",
                "icao": "LEBL",
                "name": "Barcelona-El Prat Airport",
                "city": "Barcelona",
                "cityCode": "BCN",
                "stateCode": "SP",
                "countryCode": "ES",
                "countryName": "Spain and Canary Islands",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Madrid",
                "localTime": "2016-03-22T21:18:33.091",
                "utcOffsetHours": 1,
                "latitude": 41.303027,
                "longitude": 2.07593,
                "elevationFeet": 13,
                "classification": 1,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/BCN?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/BCN?codeType=fs"
            },
            {
                "fs": "AER",
                "iata": "AER",
                "icao": "URSS",
                "name": "Sochi International Airport",
                "city": "Adler/Sochi",
                "cityCode": "AER",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Moscow",
                "localTime": "2016-03-22T23:18:33.084",
                "utcOffsetHours": 3,
                "latitude": 43.44884,
                "longitude": 39.941106,
                "elevationFeet": 89,
                "classification": 3,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/AER?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/AER?codeType=fs"
            },
            {
                "fs": "DXB",
                "iata": "DXB",
                "icao": "OMDB",
                "name": "Dubai Airport",
                "city": "Dubai",
                "cityCode": "DXB",
                "countryCode": "AE",
                "countryName": "United Arab Emirates",
                "regionName": "Middle East",
                "timeZoneRegionName": "Asia/Dubai",
                "localTime": "2016-03-23T00:18:33.100",
                "utcOffsetHours": 4,
                "latitude": 25.248664,
                "longitude": 55.352916,
                "elevationFeet": 34,
                "classification": 1,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/DXB?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/DXB?codeType=fs"
            },
            {
                "fs": "VOG",
                "iata": "VOG",
                "icao": "URWW",
                "name": "Volgograd International Airport",
                "city": "Volgograd",
                "cityCode": "VOG",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Moscow",
                "localTime": "2016-03-22T23:18:33.160",
                "utcOffsetHours": 3,
                "latitude": 48.792,
                "longitude": 44.354805,
                "elevationFeet": 482,
                "classification": 4,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/VOG?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/VOG?codeType=fs"
            },
            {
                "fs": "AAQ",
                "iata": "AAQ",
                "icao": "URKA",
                "name": "Anapa Airport",
                "city": "Anapa",
                "cityCode": "AAQ",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Moscow",
                "localTime": "2016-03-22T23:18:33.084",
                "utcOffsetHours": 3,
                "latitude": 45.001659,
                "longitude": 37.346599,
                "elevationFeet": 141,
                "classification": 4,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/AAQ?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/AAQ?codeType=fs"
            },
            {
                "fs": "MAD",
                "iata": "MAD",
                "icao": "LEMD",
                "name": "Adolfo Suarez Madrid-Barajas Airport",
                "city": "Madrid",
                "cityCode": "MAD",
                "stateCode": "SP",
                "countryCode": "ES",
                "countryName": "Spain and Canary Islands",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Madrid",
                "localTime": "2016-03-22T21:18:33.132",
                "utcOffsetHours": 1,
                "latitude": 40.49027,
                "longitude": -3.564479,
                "elevationFeet": 1953,
                "classification": 1,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/MAD?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/MAD?codeType=fs"
            },
            {
                "fs": "NCE",
                "iata": "NCE",
                "icao": "LFMN",
                "name": "Cote D'Azur Airport",
                "city": "Nice",
                "cityCode": "NCE",
                "countryCode": "FR",
                "countryName": "France",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Paris",
                "localTime": "2016-03-22T21:18:33.140",
                "utcOffsetHours": 1,
                "latitude": 43.660488,
                "longitude": 7.205232,
                "elevationFeet": 13,
                "classification": 2,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/NCE?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/NCE?codeType=fs"
            },
            {
                "fs": "FCO",
                "iata": "FCO",
                "icao": "LIRF",
                "name": "Leonardo da Vinci-Fiumicino Airport",
                "city": "Rome",
                "cityCode": "ROM",
                "countryCode": "IT",
                "countryName": "Italy",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Rome",
                "localTime": "2016-03-22T21:18:33.101",
                "utcOffsetHours": 1,
                "latitude": 41.794594,
                "longitude": 12.250346,
                "elevationFeet": 14,
                "classification": 1,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/FCO?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/FCO?codeType=fs"
            },
            {
                "fs": "GVA",
                "iata": "GVA",
                "icao": "LSGG",
                "name": "Geneve-Cointrin Airport",
                "city": "Geneva",
                "cityCode": "GVA",
                "countryCode": "CH",
                "countryName": "Switzerland",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Zurich",
                "localTime": "2016-03-22T21:18:33.108",
                "utcOffsetHours": 1,
                "latitude": 46.229634,
                "longitude": 6.105774,
                "elevationFeet": 1411,
                "classification": 2,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/GVA?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/GVA?codeType=fs"
            },
            {
                "fs": "ARH",
                "iata": "ARH",
                "icao": "ULAA",
                "name": "Talagi Airport",
                "city": "Arkhangelsk",
                "cityCode": "ARH",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Moscow",
                "localTime": "2016-03-22T23:18:33.088",
                "utcOffsetHours": 3,
                "latitude": 64.597581,
                "longitude": 40.713989,
                "elevationFeet": 33,
                "classification": 4,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/ARH?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/ARH?codeType=fs"
            },
            {
                "fs": "ROV",
                "iata": "ROV",
                "icao": "URRR",
                "name": "Rostov Airport",
                "city": "Rostov",
                "cityCode": "ROV",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Moscow",
                "localTime": "2016-03-22T23:18:33.149",
                "utcOffsetHours": 3,
                "latitude": 47.253513,
                "longitude": 39.804021,
                "elevationFeet": 279,
                "classification": 3,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/ROV?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/ROV?codeType=fs"
            },
            {
                "fs": "KIV",
                "iata": "KIV",
                "icao": "LUKK",
                "name": "Chisinau Airport",
                "city": "Chisinau",
                "cityCode": "KIV",
                "countryCode": "MD",
                "countryName": "Republic of Moldova",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Chisinau",
                "localTime": "2016-03-22T22:18:33.116",
                "utcOffsetHours": 2,
                "latitude": 46.935442,
                "longitude": 28.934967,
                "elevationFeet": 399,
                "classification": 4,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/KIV?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/KIV?codeType=fs"
            },
            {
                "fs": "VCE",
                "iata": "VCE",
                "icao": "LIPZ",
                "name": "Venice Marco Polo Airport",
                "city": "Venice",
                "cityCode": "VCE",
                "countryCode": "IT",
                "countryName": "Italy",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Rome",
                "localTime": "2016-03-22T21:18:33.159",
                "utcOffsetHours": 1,
                "latitude": 45.502285,
                "longitude": 12.337947,
                "elevationFeet": 7,
                "classification": 2,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/VCE?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/VCE?codeType=fs"
            },
            {
                "fs": "OVB",
                "iata": "OVB",
                "icao": "UNNT",
                "name": "Novosibirsk Tolmachevo Airport",
                "city": "Novosibirsk",
                "cityCode": "OVB",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Asia/Novosibirsk",
                "localTime": "2016-03-23T02:18:33.143",
                "utcOffsetHours": 6,
                "latitude": 55.009011,
                "longitude": 82.666999,
                "elevationFeet": 365,
                "classification": 3,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/OVB?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/OVB?codeType=fs"
            },
            {
                "fs": "SIP",
                "iata": "SIP",
                "icao": "UKFF",
                "name": "Simferopol International Airport",
                "city": "Simferopol",
                "cityCode": "SIP",
                "countryCode": "UA",
                "countryName": "Ukraine",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Kiev",
                "localTime": "2016-03-22T22:18:33.151",
                "utcOffsetHours": 2,
                "latitude": 45.020658,
                "longitude": 33.998193,
                "elevationFeet": 637,
                "classification": 4,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SIP?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SIP?codeType=fs"
            },
            {
                "fs": "EVN",
                "iata": "EVN",
                "icao": "UDYZ",
                "name": "Zvartnots International Airport",
                "city": "Yerevan",
                "cityCode": "EVN",
                "countryCode": "AM",
                "countryName": "Armenia",
                "regionName": "Asia",
                "timeZoneRegionName": "Asia/Yerevan",
                "localTime": "2016-03-23T00:18:33.100",
                "utcOffsetHours": 4,
                "latitude": 40.15272,
                "longitude": 44.39805,
                "elevationFeet": 2838,
                "classification": 3,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/EVN?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/EVN?codeType=fs"
            },
            {
                "fs": "ARN",
                "iata": "ARN",
                "icao": "ESSA",
                "name": "Stockholm Arlanda Airport",
                "city": "Stockholm",
                "cityCode": "STO",
                "countryCode": "SE",
                "countryName": "Sweden",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Stockholm",
                "localTime": "2016-03-22T21:18:33.089",
                "utcOffsetHours": 1,
                "latitude": 59.649818,
                "longitude": 17.930364,
                "elevationFeet": 123,
                "classification": 1,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/ARN?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/ARN?codeType=fs"
            },
            {
                "fs": "KZN",
                "iata": "KZN",
                "icao": "UWKD",
                "name": "Kazan International Airport",
                "city": "Kazan",
                "cityCode": "KZN",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Moscow",
                "localTime": "2016-03-22T23:18:33.121",
                "utcOffsetHours": 3,
                "latitude": 55.608439,
                "longitude": 49.29824,
                "elevationFeet": 407,
                "classification": 3,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/KZN?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/KZN?codeType=fs"
            },
            {
                "fs": "VOZ",
                "iata": "VOZ",
                "icao": "UUOO",
                "name": "Voronezh Airport",
                "city": "Voronezh",
                "cityCode": "VOZ",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Moscow",
                "localTime": "2016-03-22T23:18:33.160",
                "utcOffsetHours": 3,
                "latitude": 51.812356,
                "longitude": 39.226997,
                "elevationFeet": 514,
                "classification": 4,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/VOZ?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/VOZ?codeType=fs"
            },
            {
                "fs": "BLQ",
                "iata": "BLQ",
                "icao": "LIPE",
                "name": "Guglielmo Marconi Airport",
                "city": "Bologna",
                "cityCode": "BLQ",
                "countryCode": "IT",
                "countryName": "Italy",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Rome",
                "localTime": "2016-03-22T21:18:33.092",
                "utcOffsetHours": 1,
                "latitude": 44.529268,
                "longitude": 11.293289,
                "elevationFeet": 125,
                "classification": 2,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/BLQ?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/BLQ?codeType=fs"
            },
            {
                "fs": "KRR",
                "iata": "KRR",
                "icao": "URKK",
                "name": "Krasnodar International Airport",
                "city": "Krasnodar",
                "cityCode": "KRR",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Moscow",
                "localTime": "2016-03-22T23:18:33.117",
                "utcOffsetHours": 3,
                "latitude": 45.034138,
                "longitude": 39.139002,
                "elevationFeet": 118,
                "classification": 3,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/KRR?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/KRR?codeType=fs"
            },
            {
                "fs": "WAW",
                "iata": "WAW",
                "icao": "EPWA",
                "name": "Frederic Chopin Airport",
                "city": "Warsaw",
                "cityCode": "WAW",
                "countryCode": "PL",
                "countryName": "Poland",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Warsaw",
                "localTime": "2016-03-22T21:18:33.161",
                "utcOffsetHours": 1,
                "latitude": 52.170906,
                "longitude": 20.973289,
                "elevationFeet": 361,
                "classification": 2,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/WAW?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/WAW?codeType=fs"
            },
            {
                "fs": "SVO",
                "iata": "SVO",
                "icao": "UUEE",
                "name": "Sheremetyevo International Airport",
                "city": "Moscow",
                "cityCode": "MOW",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Moscow",
                "localTime": "2016-03-22T23:18:33.043",
                "utcOffsetHours": 3,
                "latitude": 55.966324,
                "longitude": 37.416574,
                "elevationFeet": 630,
                "classification": 1,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVO?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVO?codeType=fs"
            },
            {
                "fs": "BUD",
                "iata": "BUD",
                "icao": "LHBP",
                "name": "Budapest Ferenc Liszt International Airport",
                "city": "Budapest",
                "cityCode": "BUD",
                "countryCode": "HU",
                "countryName": "Hungary",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Budapest",
                "localTime": "2016-03-22T21:18:33.094",
                "utcOffsetHours": 1,
                "latitude": 47.433037,
                "longitude": 19.261621,
                "elevationFeet": 495,
                "classification": 2,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/BUD?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/BUD?codeType=fs"
            },
            {
                "fs": "MRV",
                "iata": "MRV",
                "icao": "URMM",
                "name": "Mineralnye Vody Airport",
                "city": "Mineralnye Vody",
                "cityCode": "MRV",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Moscow",
                "localTime": "2016-03-22T23:18:33.135",
                "utcOffsetHours": 3,
                "latitude": 44.218354,
                "longitude": 43.088178,
                "elevationFeet": 1080,
                "classification": 3,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/MRV?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/MRV?codeType=fs"
            },
            {
                "fs": "UFA",
                "iata": "UFA",
                "icao": "UWUU",
                "name": "Ufa International Airport",
                "city": "Ufa",
                "cityCode": "UFA",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Asia/Yekaterinburg",
                "localTime": "2016-03-23T01:18:33.158",
                "utcOffsetHours": 5,
                "latitude": 54.565403,
                "longitude": 55.884543,
                "elevationFeet": 450,
                "classification": 3,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/UFA?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/UFA?codeType=fs"
            },
            {
                "fs": "RTW",
                "iata": "RTW",
                "icao": "UWSS",
                "name": "Saratov Airport",
                "city": "Saratov",
                "cityCode": "RTW",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Moscow",
                "localTime": "2016-03-22T23:18:33.150",
                "utcOffsetHours": 3,
                "latitude": 51.561674,
                "longitude": 46.035095,
                "elevationFeet": 499,
                "classification": 4,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/RTW?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/RTW?codeType=fs"
            },
            {
                "fs": "SVX",
                "iata": "SVX",
                "icao": "USSS",
                "name": "Koltsovo International Airport",
                "city": "Yekaterinburg",
                "cityCode": "SVX",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Asia/Yekaterinburg",
                "localTime": "2016-03-23T01:18:33.154",
                "utcOffsetHours": 5,
                "latitude": 56.750335,
                "longitude": 60.804312,
                "elevationFeet": 764,
                "classification": 2,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SVX?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SVX?codeType=fs"
            },
            {
                "fs": "TLL",
                "iata": "TLL",
                "icao": "EETN",
                "name": "Tallinn Airport",
                "city": "Tallinn",
                "cityCode": "TLL",
                "countryCode": "EE",
                "countryName": "Estonia",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Tallinn",
                "localTime": "2016-03-22T22:18:33.157",
                "utcOffsetHours": 2,
                "latitude": 59.416622,
                "longitude": 24.798703,
                "elevationFeet": 132,
                "classification": 3,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/TLL?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/TLL?codeType=fs"
            },
            {
                "fs": "LHR",
                "iata": "LHR",
                "icao": "EGLL",
                "name": "London Heathrow Airport",
                "city": "London",
                "cityCode": "LON",
                "stateCode": "EN",
                "countryCode": "GB",
                "countryName": "United Kingdom",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/London",
                "localTime": "2016-03-22T20:18:33.131",
                "utcOffsetHours": 0,
                "latitude": 51.469603,
                "longitude": -0.453566,
                "elevationFeet": 80,
                "classification": 1,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/LHR?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/LHR?codeType=fs"
            },
            {
                "fs": "IKA",
                "iata": "IKA",
                "icao": "OIIE",
                "name": "Imam Khomeini International Airport",
                "city": "Tehran",
                "cityCode": "IKA",
                "countryCode": "IR",
                "countryName": "Iran",
                "regionName": "Asia",
                "timeZoneRegionName": "Asia/Tehran",
                "localTime": "2016-03-23T00:48:33.112",
                "utcOffsetHours": 4.5,
                "latitude": 35.408632,
                "longitude": 51.1548,
                "elevationFeet": 3281,
                "classification": 3,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/IKA?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/IKA?codeType=fs"
            },
            {
                "fs": "TLV",
                "iata": "TLV",
                "icao": "LLBG",
                "name": "Ben Gurion International Airport",
                "city": "Tel Aviv-Yafo",
                "cityCode": "TLV",
                "countryCode": "IL",
                "countryName": "Israel",
                "regionName": "Middle East",
                "timeZoneRegionName": "Asia/Jerusalem",
                "localTime": "2016-03-22T22:18:33.157",
                "utcOffsetHours": 2,
                "latitude": 32.000454,
                "longitude": 34.870741,
                "elevationFeet": 135,
                "classification": 2,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/TLV?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/TLV?codeType=fs"
            },
            {
                "fs": "DUS",
                "iata": "DUS",
                "icao": "EDDL",
                "name": "Dusseldorf International Airport",
                "city": "Dusseldorf",
                "cityCode": "DUS",
                "countryCode": "DE",
                "countryName": "Germany",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Berlin",
                "localTime": "2016-03-22T21:18:33.099",
                "utcOffsetHours": 1,
                "latitude": 51.278327,
                "longitude": 6.76558,
                "elevationFeet": 147,
                "classification": 1,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/DUS?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/DUS?codeType=fs"
            },
            {
                "fs": "GOJ",
                "iata": "GOJ",
                "icao": "UWGG",
                "name": "Nizhny Novgorod International Airport",
                "city": "Nizhniy Novgorod",
                "cityCode": "GOJ",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Moscow",
                "localTime": "2016-03-22T23:18:33.106",
                "utcOffsetHours": 3,
                "latitude": 56.218611,
                "longitude": 43.789766,
                "elevationFeet": 256,
                "classification": 4,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/GOJ?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/GOJ?codeType=fs"
            },
            {
                "fs": "BEG",
                "iata": "BEG",
                "icao": "LYBE",
                "name": "Belgrad Nikola Tesla Airport",
                "city": "Belgrade",
                "cityCode": "BEG",
                "countryCode": "RS",
                "countryName": "Republic of Serbia",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Belgrade",
                "localTime": "2016-03-22T21:18:33.091",
                "utcOffsetHours": 1,
                "latitude": 44.819444,
                "longitude": 20.306944,
                "elevationFeet": 335,
                "classification": 3,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/BEG?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/BEG?codeType=fs"
            },
            {
                "fs": "KGD",
                "iata": "KGD",
                "icao": "UMKK",
                "name": "Khrabrovo Airport",
                "city": "Kaliningrad",
                "cityCode": "KGD",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Kaliningrad",
                "localTime": "2016-03-22T22:18:33.115",
                "utcOffsetHours": 2,
                "latitude": 54.882656,
                "longitude": 20.586646,
                "elevationFeet": 43,
                "classification": 4,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/KGD?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/KGD?codeType=fs"
            },
            {
                "fs": "OSL",
                "iata": "OSL",
                "icao": "ENGM",
                "name": "Oslo Airport Gardermoen",
                "city": "Oslo",
                "cityCode": "OSL",
                "countryCode": "NO",
                "countryName": "Norway",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Oslo",
                "localTime": "2016-03-22T21:18:33.142",
                "utcOffsetHours": 1,
                "latitude": 60.194192,
                "longitude": 11.100411,
                "elevationFeet": 681,
                "classification": 1,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/OSL?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/OSL?codeType=fs"
            },
            {
                "fs": "AGP",
                "iata": "AGP",
                "icao": "LEMG",
                "name": "Malaga Airport",
                "city": "Malaga",
                "cityCode": "AGP",
                "stateCode": "SP",
                "countryCode": "ES",
                "countryName": "Spain and Canary Islands",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Madrid",
                "localTime": "2016-03-22T21:18:33.086",
                "utcOffsetHours": 1,
                "latitude": 36.675181,
                "longitude": -4.489616,
                "elevationFeet": 52,
                "classification": 2,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/AGP?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/AGP?codeType=fs"
            },
            {
                "fs": "LED",
                "iata": "LED",
                "icao": "ULLI",
                "name": "Pulkovo Airport",
                "city": "Saint Petersburg",
                "cityCode": "LED",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Moscow",
                "localTime": "2016-03-22T23:18:33.125",
                "utcOffsetHours": 3,
                "latitude": 59.799847,
                "longitude": 30.270505,
                "elevationFeet": 76,
                "classification": 2,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/LED?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/LED?codeType=fs"
            },
            {
                "fs": "MSQ",
                "iata": "MSQ",
                "icao": "UMMS",
                "name": "Minsk National Airport",
                "city": "Minsk",
                "cityCode": "MSQ",
                "countryCode": "BY",
                "countryName": "Belarus",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Minsk",
                "localTime": "2016-03-22T23:18:33.136",
                "utcOffsetHours": 3,
                "latitude": 53.889725,
                "longitude": 28.032442,
                "elevationFeet": 669,
                "classification": 3,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/MSQ?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/MSQ?codeType=fs"
            },
            {
                "fs": "IST",
                "iata": "IST",
                "icao": "LTBA",
                "name": "Istanbul Ataturk Airport",
                "city": "Istanbul",
                "cityCode": "IST",
                "countryCode": "TR",
                "countryName": "Turkey",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Istanbul",
                "localTime": "2016-03-22T22:18:33.113",
                "utcOffsetHours": 2,
                "latitude": 40.976667,
                "longitude": 28.815278,
                "elevationFeet": 158,
                "classification": 1,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/IST?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/IST?codeType=fs"
            },
            {
                "fs": "SOF",
                "iata": "SOF",
                "icao": "LBSF",
                "name": "Sofia Airport",
                "city": "Sofia",
                "cityCode": "SOF",
                "countryCode": "BG",
                "countryName": "Bulgaria",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Sofia",
                "localTime": "2016-03-22T22:18:33.153",
                "utcOffsetHours": 2,
                "latitude": 42.688342,
                "longitude": 23.414431,
                "elevationFeet": 1742,
                "classification": 3,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SOF?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SOF?codeType=fs"
            },
            {
                "fs": "HEL",
                "iata": "HEL",
                "icao": "EFHK",
                "name": "Helsinki-Vantaa Airport",
                "city": "Helsinki",
                "cityCode": "HEL",
                "countryCode": "FI",
                "countryName": "Finland",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Helsinki",
                "localTime": "2016-03-22T22:18:33.111",
                "utcOffsetHours": 2,
                "latitude": 60.317953,
                "longitude": 24.966449,
                "elevationFeet": 167,
                "classification": 1,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/HEL?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/HEL?codeType=fs"
            },
            {
                "fs": "PEE",
                "iata": "PEE",
                "icao": "USPP",
                "name": "Perm International Airport",
                "city": "Perm",
                "cityCode": "PEE",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Asia/Yekaterinburg",
                "localTime": "2016-03-23T01:18:33.144",
                "utcOffsetHours": 5,
                "latitude": 57.920026,
                "longitude": 56.019179,
                "elevationFeet": 404,
                "classification": 4,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/PEE?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/PEE?codeType=fs"
            },
            {
                "fs": "VIE",
                "iata": "VIE",
                "icao": "LOWW",
                "name": "Vienna International Airport",
                "city": "Vienna",
                "cityCode": "VIE",
                "countryCode": "AT",
                "countryName": "Austria",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Vienna",
                "localTime": "2016-03-22T21:18:33.159",
                "utcOffsetHours": 1,
                "latitude": 48.11972,
                "longitude": 16.563583,
                "elevationFeet": 600,
                "classification": 1,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/VIE?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/VIE?codeType=fs"
            },
            {
                "fs": "FRA",
                "iata": "FRA",
                "icao": "EDDF",
                "name": "Frankfurt am Main Airport",
                "city": "Frankfurt",
                "cityCode": "FRA",
                "countryCode": "DE",
                "countryName": "Germany",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Berlin",
                "localTime": "2016-03-22T21:18:33.104",
                "utcOffsetHours": 1,
                "latitude": 50.048952,
                "longitude": 8.573678,
                "elevationFeet": 381,
                "classification": 1,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/FRA?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/FRA?codeType=fs"
            },
            {
                "fs": "ATH",
                "iata": "ATH",
                "icao": "LGAV",
                "name": "Eleftherios Venizelos International Airport",
                "city": "Athens",
                "cityCode": "ATH",
                "countryCode": "GR",
                "countryName": "Greece",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Athens",
                "localTime": "2016-03-22T22:18:33.090",
                "utcOffsetHours": 2,
                "latitude": 37.93635,
                "longitude": 23.946486,
                "elevationFeet": 263,
                "classification": 2,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/ATH?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/ATH?codeType=fs"
            },
            {
                "fs": "HAM",
                "iata": "HAM",
                "icao": "EDDH",
                "name": "Hamburg Airport",
                "city": "Hamburg",
                "cityCode": "HAM",
                "countryCode": "DE",
                "countryName": "Germany",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Berlin",
                "localTime": "2016-03-22T21:18:33.109",
                "utcOffsetHours": 1,
                "latitude": 53.631279,
                "longitude": 10.006414,
                "elevationFeet": 53,
                "classification": 2,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/HAM?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/HAM?codeType=fs"
            },
            {
                "fs": "ALA",
                "iata": "ALA",
                "icao": "UAAA",
                "name": "Almaty Airport",
                "city": "Almaty",
                "cityCode": "ALA",
                "countryCode": "KZ",
                "countryName": "Kazakhstan",
                "regionName": "Asia",
                "timeZoneRegionName": "Asia/Qyzylorda",
                "localTime": "2016-03-23T02:18:33.086",
                "utcOffsetHours": 6,
                "latitude": 43.346652,
                "longitude": 77.011455,
                "elevationFeet": 2234,
                "classification": 3,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/ALA?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/ALA?codeType=fs"
            },
            {
                "fs": "PEK",
                "iata": "PEK",
                "icao": "ZBAA",
                "name": "Beijing Capital International Airport",
                "street1": "Capital Airport Rd",
                "city": "Beijing",
                "cityCode": "BJS",
                "countryCode": "CN",
                "countryName": "China",
                "regionName": "Asia",
                "timeZoneRegionName": "Asia/Shanghai",
                "localTime": "2016-03-23T04:18:33.145",
                "utcOffsetHours": 8,
                "latitude": 40.078538,
                "longitude": 116.587095,
                "elevationFeet": 115,
                "classification": 1,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/PEK?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/PEK?codeType=fs"
            },
            {
                "fs": "CPH",
                "iata": "CPH",
                "icao": "EKCH",
                "name": "Copenhagen Airport",
                "city": "Copenhagen",
                "cityCode": "CPH",
                "countryCode": "DK",
                "countryName": "Denmark",
                "regionName": "Europe",
                "timeZoneRegionName": "Europe/Copenhagen",
                "localTime": "2016-03-22T21:18:33.098",
                "utcOffsetHours": 1,
                "latitude": 55.629053,
                "longitude": 12.647601,
                "elevationFeet": 17,
                "classification": 1,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/CPH?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/CPH?codeType=fs"
            },
            {
                "fs": "HAV",
                "iata": "HAV",
                "icao": "MUHA",
                "name": "Jose Marti International Airport",
                "city": "Havana",
                "cityCode": "HAV",
                "countryCode": "CU",
                "countryName": "Cuba",
                "regionName": "Caribbean",
                "timeZoneRegionName": "America/Havana",
                "localTime": "2016-03-22T16:18:33.111",
                "utcOffsetHours": -4,
                "latitude": 22.998449,
                "longitude": -82.408183,
                "elevationFeet": 210,
                "classification": 3,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/HAV?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/HAV?codeType=fs"
            }
        ],
        "equipments": [
            {
                "iata": "32A",
                "name": "Airbus A320 (sharklets)",
                "turboProp": false,
                "jet": true,
                "widebody": false,
                "regional": false
            },
            {
                "iata": "CR2",
                "name": "Canadair (Bombardier) Regional Jet 200",
                "turboProp": false,
                "jet": true,
                "widebody": false,
                "regional": true
            },
            {
                "iata": "73H",
                "name": "Boeing 737-800 (winglets) Passenger/BBJ2",
                "turboProp": false,
                "jet": true,
                "widebody": false,
                "regional": false
            },
            {
                "iata": "330",
                "name": "Airbus A330",
                "turboProp": false,
                "jet": true,
                "widebody": true,
                "regional": false
            },
            {
                "iata": "320",
                "name": "Airbus A320",
                "turboProp": false,
                "jet": true,
                "widebody": false,
                "regional": false
            },
            {
                "iata": "74N",
                "name": "Boeing 747-8F Freighter",
                "turboProp": false,
                "jet": true,
                "widebody": true,
                "regional": false
            },
            {
                "iata": "321",
                "name": "Airbus A321",
                "turboProp": false,
                "jet": true,
                "widebody": false,
                "regional": false
            },
            {
                "iata": "332",
                "name": "Airbus A330-200",
                "turboProp": false,
                "jet": true,
                "widebody": true,
                "regional": false
            },
            {
                "iata": "333",
                "name": "Airbus A330-300",
                "turboProp": false,
                "jet": true,
                "widebody": true,
                "regional": false
            },
            {
                "iata": "32S",
                "name": "Airbus A318 / A319 / A320 / A321",
                "turboProp": false,
                "jet": true,
                "widebody": false,
                "regional": false
            },
            {
                "iata": "SU9",
                "name": "Sukhoi Superjet 100-95",
                "turboProp": false,
                "jet": true,
                "widebody": false,
                "regional": false
            },
            {
                "iata": "77W",
                "name": "Boeing 777-300ER",
                "turboProp": false,
                "jet": true,
                "widebody": true,
                "regional": false
            },
            {
                "iata": "735",
                "name": "Boeing 737-500 Passenger",
                "turboProp": false,
                "jet": true,
                "widebody": false,
                "regional": false
            },
            {
                "iata": "319",
                "name": "Airbus A319",
                "turboProp": false,
                "jet": true,
                "widebody": false,
                "regional": false
            }
        ]
    },
    "flightStatuses": [
        {
            "flightId": 687822555,
            "carrierFsCode": "SU",
            "flightNumber": "1546",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "AAQ",
            "departureDate": {
                "dateLocal": "2016-03-22T08:30:00.000",
                "dateUtc": "2016-03-22T05:30:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T10:50:00.000",
                "dateUtc": "2016-03-22T07:50:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T08:30:00.000",
                    "dateUtc": "2016-03-22T05:30:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T10:50:00.000",
                    "dateUtc": "2016-03-22T07:50:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T08:30:00.000",
                    "dateUtc": "2016-03-22T05:30:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T08:33:00.000",
                    "dateUtc": "2016-03-22T05:33:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T08:33:00.000",
                    "dateUtc": "2016-03-22T05:33:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:41:00.000",
                    "dateUtc": "2016-03-22T05:41:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:41:00.000",
                    "dateUtc": "2016-03-22T05:41:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T10:50:00.000",
                    "dateUtc": "2016-03-22T07:50:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T10:35:00.000",
                    "dateUtc": "2016-03-22T07:35:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T10:35:00.000",
                    "dateUtc": "2016-03-22T07:35:00.000Z"
                }
            },
            "delays": {
                "departureGateDelayMinutes": 3
            },
            "flightDurations": {
                "scheduledBlockMinutes": 140,
                "blockMinutes": 122,
                "taxiOutMinutes": 8
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "3"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VQ-BSL"
            }
        },
        {
            "flightId": 687822557,
            "carrierFsCode": "SU",
            "flightNumber": "1138",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "AER",
            "departureDate": {
                "dateLocal": "2016-03-22T06:50:00.000",
                "dateUtc": "2016-03-22T03:50:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T09:20:00.000",
                "dateUtc": "2016-03-22T06:20:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T06:50:00.000",
                    "dateUtc": "2016-03-22T03:50:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T09:20:00.000",
                    "dateUtc": "2016-03-22T06:20:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T06:50:00.000",
                    "dateUtc": "2016-03-22T03:50:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T06:57:00.000",
                    "dateUtc": "2016-03-22T03:57:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T06:57:00.000",
                    "dateUtc": "2016-03-22T03:57:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T07:15:00.000",
                    "dateUtc": "2016-03-22T04:15:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T07:15:00.000",
                    "dateUtc": "2016-03-22T04:15:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T09:20:00.000",
                    "dateUtc": "2016-03-22T06:20:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T09:24:00.000",
                    "dateUtc": "2016-03-22T06:24:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T09:24:00.000",
                    "dateUtc": "2016-03-22T06:24:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AF",
                    "flightNumber": "4954",
                    "relationship": "L"
                },
                {
                    "fsCode": "AZ",
                    "flightNumber": "3779",
                    "relationship": "L"
                },
                {
                    "fsCode": "JU",
                    "flightNumber": "8186",
                    "relationship": "L"
                },
                {
                    "fsCode": "KL",
                    "flightNumber": "3229",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 7,
                "arrivalGateDelayMinutes": 4
            },
            "flightDurations": {
                "scheduledBlockMinutes": 150,
                "blockMinutes": 147,
                "taxiOutMinutes": 18
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "20"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "321",
                "actualEquipmentIataCode": "321",
                "tailNumber": "VQ-BEA"
            }
        },
        {
            "flightId": 687822561,
            "carrierFsCode": "SU",
            "flightNumber": "1122",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "AER",
            "departureDate": {
                "dateLocal": "2016-03-22T09:10:00.000",
                "dateUtc": "2016-03-22T06:10:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T11:40:00.000",
                "dateUtc": "2016-03-22T08:40:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T09:10:00.000",
                    "dateUtc": "2016-03-22T06:10:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T11:40:00.000",
                    "dateUtc": "2016-03-22T08:40:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T09:10:00.000",
                    "dateUtc": "2016-03-22T06:10:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:20:00.000",
                    "dateUtc": "2016-03-22T06:20:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:20:00.000",
                    "dateUtc": "2016-03-22T06:20:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:20:00.000",
                    "dateUtc": "2016-03-22T06:20:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:20:00.000",
                    "dateUtc": "2016-03-22T06:20:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T11:40:00.000",
                    "dateUtc": "2016-03-22T08:40:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T11:22:00.000",
                    "dateUtc": "2016-03-22T08:22:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T11:22:00.000",
                    "dateUtc": "2016-03-22T08:22:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AF",
                    "flightNumber": "4900",
                    "relationship": "L"
                },
                {
                    "fsCode": "AZ",
                    "flightNumber": "3042",
                    "relationship": "L"
                },
                {
                    "fsCode": "JU",
                    "flightNumber": "8144",
                    "relationship": "L"
                },
                {
                    "fsCode": "KL",
                    "flightNumber": "3192",
                    "relationship": "L"
                },
                {
                    "fsCode": "MU",
                    "flightNumber": "8167",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 10
            },
            "flightDurations": {
                "scheduledBlockMinutes": 150,
                "blockMinutes": 122,
                "taxiOutMinutes": 0
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "12"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VP-BJY"
            }
        },
        {
            "flightId": 687822563,
            "carrierFsCode": "SU",
            "flightNumber": "2520",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "AGP",
            "departureDate": {
                "dateLocal": "2016-03-22T08:10:00.000",
                "dateUtc": "2016-03-22T05:10:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T11:40:00.000",
                "dateUtc": "2016-03-22T10:40:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T08:10:00.000",
                    "dateUtc": "2016-03-22T05:10:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T11:40:00.000",
                    "dateUtc": "2016-03-22T10:40:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T08:10:00.000",
                    "dateUtc": "2016-03-22T05:10:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:20:00.000",
                    "dateUtc": "2016-03-22T06:20:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:20:00.000",
                    "dateUtc": "2016-03-22T06:20:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:42:00.000",
                    "dateUtc": "2016-03-22T06:42:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:42:00.000",
                    "dateUtc": "2016-03-22T06:42:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T11:40:00.000",
                    "dateUtc": "2016-03-22T10:40:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T12:47:00.000",
                    "dateUtc": "2016-03-22T11:47:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T12:47:00.000",
                    "dateUtc": "2016-03-22T11:47:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "UX",
                    "flightNumber": "3282",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 70,
                "arrivalGateDelayMinutes": 67
            },
            "flightDurations": {
                "scheduledBlockMinutes": 330,
                "blockMinutes": 327,
                "taxiOutMinutes": 22
            },
            "airportResources": {
                "departureTerminal": "E",
                "departureGate": "41",
                "arrivalTerminal": "1",
                "baggage": "32"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "73H",
                "actualEquipmentIataCode": "73H",
                "tailNumber": "VQ-BWC"
            }
        },
        {
            "flightId": 687822568,
            "carrierFsCode": "SU",
            "flightNumber": "1940",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "ALA",
            "departureDate": {
                "dateLocal": "2016-03-22T07:40:00.000",
                "dateUtc": "2016-03-22T04:40:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T15:10:00.000",
                "dateUtc": "2016-03-22T09:10:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T07:40:00.000",
                    "dateUtc": "2016-03-22T04:40:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T15:10:00.000",
                    "dateUtc": "2016-03-22T09:10:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T07:40:00.000",
                    "dateUtc": "2016-03-22T04:40:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T07:38:00.000",
                    "dateUtc": "2016-03-22T04:38:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T07:38:00.000",
                    "dateUtc": "2016-03-22T04:38:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T07:52:00.000",
                    "dateUtc": "2016-03-22T04:52:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T07:52:00.000",
                    "dateUtc": "2016-03-22T04:52:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T15:10:00.000",
                    "dateUtc": "2016-03-22T09:10:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T14:44:00.000",
                    "dateUtc": "2016-03-22T08:44:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T14:44:00.000",
                    "dateUtc": "2016-03-22T08:44:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 270,
                "blockMinutes": 246,
                "taxiOutMinutes": 14
            },
            "airportResources": {
                "departureTerminal": "F",
                "departureGate": "45"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VQ-BBB"
            }
        },
        {
            "flightId": 687822566,
            "carrierFsCode": "KC",
            "flightNumber": "872",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "ALA",
            "departureDate": {
                "dateLocal": "2016-03-22T09:20:00.000",
                "dateUtc": "2016-03-22T06:20:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T16:50:00.000",
                "dateUtc": "2016-03-22T10:50:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "FJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T09:20:00.000",
                    "dateUtc": "2016-03-22T06:20:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T16:50:00.000",
                    "dateUtc": "2016-03-22T10:50:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T09:20:00.000",
                    "dateUtc": "2016-03-22T06:20:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:35:00.000",
                    "dateUtc": "2016-03-22T06:35:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:35:00.000",
                    "dateUtc": "2016-03-22T06:35:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T16:50:00.000",
                    "dateUtc": "2016-03-22T10:50:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T16:23:00.000",
                    "dateUtc": "2016-03-22T10:23:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T16:23:00.000",
                    "dateUtc": "2016-03-22T10:23:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 270,
                "airMinutes": 228
            },
            "airportResources": {
                "departureTerminal": "E",
                "departureGate": "34"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "tailNumber": "P4-KBD"
            }
        },
        {
            "flightId": 687822572,
            "carrierFsCode": "SU",
            "flightNumber": "2550",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "AMS",
            "departureDate": {
                "dateLocal": "2016-03-22T10:25:00.000",
                "dateUtc": "2016-03-22T07:25:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T12:00:00.000",
                "dateUtc": "2016-03-22T11:00:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T10:25:00.000",
                    "dateUtc": "2016-03-22T07:25:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T12:00:00.000",
                    "dateUtc": "2016-03-22T11:00:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T10:25:00.000",
                    "dateUtc": "2016-03-22T07:25:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T10:23:00.000",
                    "dateUtc": "2016-03-22T07:23:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T10:23:00.000",
                    "dateUtc": "2016-03-22T07:23:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:33:00.000",
                    "dateUtc": "2016-03-22T07:33:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:33:00.000",
                    "dateUtc": "2016-03-22T07:33:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T12:00:00.000",
                    "dateUtc": "2016-03-22T11:00:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T11:41:00.000",
                    "dateUtc": "2016-03-22T10:41:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T11:41:00.000",
                    "dateUtc": "2016-03-22T10:41:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T11:31:00.000",
                    "dateUtc": "2016-03-22T10:31:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "FI",
                    "flightNumber": "7231",
                    "relationship": "L"
                },
                {
                    "fsCode": "KL",
                    "flightNumber": "3181",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 215,
                "blockMinutes": 198,
                "taxiOutMinutes": 10
            },
            "airportResources": {
                "departureTerminal": "F",
                "departureGate": "51",
                "arrivalTerminal": "3",
                "baggage": "16"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "321",
                "actualEquipmentIataCode": "321",
                "tailNumber": "VQ-BOH"
            }
        },
        {
            "flightId": 687822576,
            "carrierFsCode": "SU",
            "flightNumber": "1332",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "ARH",
            "departureDate": {
                "dateLocal": "2016-03-22T07:55:00.000",
                "dateUtc": "2016-03-22T04:55:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T09:50:00.000",
                "dateUtc": "2016-03-22T06:50:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T07:55:00.000",
                    "dateUtc": "2016-03-22T04:55:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T09:50:00.000",
                    "dateUtc": "2016-03-22T06:50:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T07:55:00.000",
                    "dateUtc": "2016-03-22T04:55:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T08:07:00.000",
                    "dateUtc": "2016-03-22T05:07:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T08:07:00.000",
                    "dateUtc": "2016-03-22T05:07:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:19:00.000",
                    "dateUtc": "2016-03-22T05:19:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:19:00.000",
                    "dateUtc": "2016-03-22T05:19:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T09:50:00.000",
                    "dateUtc": "2016-03-22T06:50:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T09:50:00.000",
                    "dateUtc": "2016-03-22T06:50:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T09:50:00.000",
                    "dateUtc": "2016-03-22T06:50:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "KL",
                    "flightNumber": "2860",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 12
            },
            "flightDurations": {
                "scheduledBlockMinutes": 115,
                "blockMinutes": 103,
                "taxiOutMinutes": 12
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "16"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VP-BQU"
            }
        },
        {
            "flightId": 687822580,
            "carrierFsCode": "SU",
            "flightNumber": "2210",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "ARN",
            "departureDate": {
                "dateLocal": "2016-03-22T11:25:00.000",
                "dateUtc": "2016-03-22T08:25:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T11:40:00.000",
                "dateUtc": "2016-03-22T10:40:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T11:25:00.000",
                    "dateUtc": "2016-03-22T08:25:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T11:40:00.000",
                    "dateUtc": "2016-03-22T10:40:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T11:25:00.000",
                    "dateUtc": "2016-03-22T08:25:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T11:16:00.000",
                    "dateUtc": "2016-03-22T08:16:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T11:16:00.000",
                    "dateUtc": "2016-03-22T08:16:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:28:00.000",
                    "dateUtc": "2016-03-22T08:28:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:28:00.000",
                    "dateUtc": "2016-03-22T08:28:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T11:40:00.000",
                    "dateUtc": "2016-03-22T10:40:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T11:31:00.000",
                    "dateUtc": "2016-03-22T10:31:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T11:31:00.000",
                    "dateUtc": "2016-03-22T10:31:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T11:20:00.000",
                    "dateUtc": "2016-03-22T10:20:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T11:20:00.000",
                    "dateUtc": "2016-03-22T10:20:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "FI",
                    "flightNumber": "7221",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 135,
                "blockMinutes": 135,
                "airMinutes": 112,
                "taxiOutMinutes": 12,
                "taxiInMinutes": 11
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "30",
                "arrivalTerminal": "5",
                "arrivalGate": "19"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VP-BNL"
            }
        },
        {
            "flightId": 687822583,
            "carrierFsCode": "SU",
            "flightNumber": "2110",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "ATH",
            "departureDate": {
                "dateLocal": "2016-03-22T09:30:00.000",
                "dateUtc": "2016-03-22T06:30:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T12:45:00.000",
                "dateUtc": "2016-03-22T10:45:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T09:30:00.000",
                    "dateUtc": "2016-03-22T06:30:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T12:45:00.000",
                    "dateUtc": "2016-03-22T10:45:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T09:30:00.000",
                    "dateUtc": "2016-03-22T06:30:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:27:00.000",
                    "dateUtc": "2016-03-22T06:27:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:27:00.000",
                    "dateUtc": "2016-03-22T06:27:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:48:00.000",
                    "dateUtc": "2016-03-22T06:48:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:48:00.000",
                    "dateUtc": "2016-03-22T06:48:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T12:45:00.000",
                    "dateUtc": "2016-03-22T10:45:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T12:36:00.000",
                    "dateUtc": "2016-03-22T10:36:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T12:36:00.000",
                    "dateUtc": "2016-03-22T10:36:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 255,
                "blockMinutes": 249,
                "taxiOutMinutes": 21
            },
            "airportResources": {
                "departureTerminal": "F",
                "departureGate": "52"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VP-BZR"
            }
        },
        {
            "flightId": 687822588,
            "carrierFsCode": "SU",
            "flightNumber": "2638",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "BCN",
            "departureDate": {
                "dateLocal": "2016-03-22T07:55:00.000",
                "dateUtc": "2016-03-22T04:55:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T10:25:00.000",
                "dateUtc": "2016-03-22T09:25:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T07:55:00.000",
                    "dateUtc": "2016-03-22T04:55:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T10:25:00.000",
                    "dateUtc": "2016-03-22T09:25:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T07:55:00.000",
                    "dateUtc": "2016-03-22T04:55:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T07:55:00.000",
                    "dateUtc": "2016-03-22T04:55:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T07:55:00.000",
                    "dateUtc": "2016-03-22T04:55:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:03:00.000",
                    "dateUtc": "2016-03-22T05:03:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:03:00.000",
                    "dateUtc": "2016-03-22T05:03:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T10:25:00.000",
                    "dateUtc": "2016-03-22T09:25:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T10:09:00.000",
                    "dateUtc": "2016-03-22T09:09:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T10:09:00.000",
                    "dateUtc": "2016-03-22T09:09:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T10:05:00.000",
                    "dateUtc": "2016-03-22T09:05:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T10:05:00.000",
                    "dateUtc": "2016-03-22T09:05:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "UX",
                    "flightNumber": "3284",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 270,
                "blockMinutes": 254,
                "airMinutes": 242,
                "taxiOutMinutes": 8,
                "taxiInMinutes": 4
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "23",
                "arrivalTerminal": "1",
                "baggage": "15"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32A",
                "tailNumber": "VQ-BSJ"
            }
        },
        {
            "flightId": 687822589,
            "carrierFsCode": "JU",
            "flightNumber": "651",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "BEG",
            "departureDate": {
                "dateLocal": "2016-03-22T10:25:00.000",
                "dateUtc": "2016-03-22T07:25:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T11:25:00.000",
                "dateUtc": "2016-03-22T10:25:00.000Z"
            },
            "status": "A",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "JY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T10:25:00.000",
                    "dateUtc": "2016-03-22T07:25:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T11:25:00.000",
                    "dateUtc": "2016-03-22T10:25:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T10:25:00.000",
                    "dateUtc": "2016-03-22T07:25:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:38:00.000",
                    "dateUtc": "2016-03-22T07:38:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:38:00.000",
                    "dateUtc": "2016-03-22T07:38:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T11:25:00.000",
                    "dateUtc": "2016-03-22T10:25:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "SU",
                    "flightNumber": "3520",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 180
            },
            "airportResources": {
                "departureTerminal": "F",
                "departureGate": "56",
                "arrivalTerminal": "2"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "319",
                "tailNumber": "YU-APA"
            }
        },
        {
            "flightId": 687822590,
            "carrierFsCode": "SU",
            "flightNumber": "2090",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "BEG",
            "departureDate": {
                "dateLocal": "2016-03-22T10:50:00.000",
                "dateUtc": "2016-03-22T07:50:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T11:50:00.000",
                "dateUtc": "2016-03-22T10:50:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T10:50:00.000",
                    "dateUtc": "2016-03-22T07:50:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T11:50:00.000",
                    "dateUtc": "2016-03-22T10:50:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T10:50:00.000",
                    "dateUtc": "2016-03-22T07:50:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T10:59:00.000",
                    "dateUtc": "2016-03-22T07:59:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T10:59:00.000",
                    "dateUtc": "2016-03-22T07:59:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:20:00.000",
                    "dateUtc": "2016-03-22T08:20:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:20:00.000",
                    "dateUtc": "2016-03-22T08:20:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T11:50:00.000",
                    "dateUtc": "2016-03-22T10:50:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T12:01:00.000",
                    "dateUtc": "2016-03-22T11:01:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T12:01:00.000",
                    "dateUtc": "2016-03-22T11:01:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T11:51:00.000",
                    "dateUtc": "2016-03-22T10:51:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T11:51:00.000",
                    "dateUtc": "2016-03-22T10:51:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "JU",
                    "flightNumber": "8133",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 9,
                "arrivalGateDelayMinutes": 11
            },
            "flightDurations": {
                "scheduledBlockMinutes": 180,
                "blockMinutes": 182,
                "airMinutes": 151,
                "taxiOutMinutes": 21,
                "taxiInMinutes": 10
            },
            "airportResources": {
                "departureTerminal": "F",
                "departureGate": "49",
                "arrivalTerminal": "2"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "73H",
                "actualEquipmentIataCode": "321",
                "tailNumber": "VP-BWO"
            }
        },
        {
            "flightId": 687822595,
            "carrierFsCode": "SU",
            "flightNumber": "2424",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "BLQ",
            "departureDate": {
                "dateLocal": "2016-03-22T09:10:00.000",
                "dateUtc": "2016-03-22T06:10:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T10:45:00.000",
                "dateUtc": "2016-03-22T09:45:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T09:10:00.000",
                    "dateUtc": "2016-03-22T06:10:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T10:45:00.000",
                    "dateUtc": "2016-03-22T09:45:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T09:10:00.000",
                    "dateUtc": "2016-03-22T06:10:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:08:00.000",
                    "dateUtc": "2016-03-22T06:08:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:08:00.000",
                    "dateUtc": "2016-03-22T06:08:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:23:00.000",
                    "dateUtc": "2016-03-22T06:23:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:23:00.000",
                    "dateUtc": "2016-03-22T06:23:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T10:45:00.000",
                    "dateUtc": "2016-03-22T09:45:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T10:36:00.000",
                    "dateUtc": "2016-03-22T09:36:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T10:36:00.000",
                    "dateUtc": "2016-03-22T09:36:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AZ",
                    "flightNumber": "7167",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 215,
                "blockMinutes": 208,
                "taxiOutMinutes": 15
            },
            "airportResources": {
                "departureTerminal": "E",
                "departureGate": "36"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "73H",
                "tailNumber": "VQ-BWA"
            }
        },
        {
            "flightId": 687822597,
            "carrierFsCode": "SU",
            "flightNumber": "2168",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "BRU",
            "departureDate": {
                "dateLocal": "2016-03-22T09:40:00.000",
                "dateUtc": "2016-03-22T06:40:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T11:15:00.000",
                "dateUtc": "2016-03-22T10:15:00.000Z"
            },
            "status": "A",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T09:40:00.000",
                    "dateUtc": "2016-03-22T06:40:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T11:15:00.000",
                    "dateUtc": "2016-03-22T10:15:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T09:40:00.000",
                    "dateUtc": "2016-03-22T06:40:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:36:00.000",
                    "dateUtc": "2016-03-22T06:36:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:36:00.000",
                    "dateUtc": "2016-03-22T06:36:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:52:00.000",
                    "dateUtc": "2016-03-22T06:52:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:52:00.000",
                    "dateUtc": "2016-03-22T06:52:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T11:15:00.000",
                    "dateUtc": "2016-03-22T10:15:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T11:45:00.000",
                    "dateUtc": "2016-03-22T10:45:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T11:40:00.000",
                    "dateUtc": "2016-03-22T10:40:00.000Z"
                }
            },
            "delays": {
                "arrivalGateDelayMinutes": 30
            },
            "flightDurations": {
                "scheduledBlockMinutes": 215,
                "taxiOutMinutes": 16
            },
            "airportResources": {
                "departureTerminal": "E",
                "departureGate": "37",
                "arrivalGate": "28",
                "baggage": "1"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "321",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VQ-BIR"
            }
        },
        {
            "flightId": 687822598,
            "carrierFsCode": "SU",
            "flightNumber": "2030",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "BUD",
            "departureDate": {
                "dateLocal": "2016-03-22T11:20:00.000",
                "dateUtc": "2016-03-22T08:20:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T12:05:00.000",
                "dateUtc": "2016-03-22T11:05:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T11:20:00.000",
                    "dateUtc": "2016-03-22T08:20:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T12:05:00.000",
                    "dateUtc": "2016-03-22T11:05:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T11:20:00.000",
                    "dateUtc": "2016-03-22T08:20:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T11:19:00.000",
                    "dateUtc": "2016-03-22T08:19:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T11:19:00.000",
                    "dateUtc": "2016-03-22T08:19:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:33:00.000",
                    "dateUtc": "2016-03-22T08:33:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:33:00.000",
                    "dateUtc": "2016-03-22T08:33:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T12:05:00.000",
                    "dateUtc": "2016-03-22T11:05:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T11:59:00.000",
                    "dateUtc": "2016-03-22T10:59:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T11:59:00.000",
                    "dateUtc": "2016-03-22T10:59:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T11:59:00.000",
                    "dateUtc": "2016-03-22T10:59:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T11:59:00.000",
                    "dateUtc": "2016-03-22T10:59:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 165,
                "blockMinutes": 160,
                "airMinutes": 146,
                "taxiOutMinutes": 14,
                "taxiInMinutes": 0
            },
            "airportResources": {
                "departureTerminal": "F",
                "departureGate": "55",
                "arrivalTerminal": "2"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "321",
                "tailNumber": "VP-BOC"
            }
        },
        {
            "flightId": 687822602,
            "carrierFsCode": "SU",
            "flightNumber": "2452",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "CDG",
            "departureDate": {
                "dateLocal": "2016-03-22T08:45:00.000",
                "dateUtc": "2016-03-22T05:45:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T10:45:00.000",
                "dateUtc": "2016-03-22T09:45:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T08:45:00.000",
                    "dateUtc": "2016-03-22T05:45:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T10:45:00.000",
                    "dateUtc": "2016-03-22T09:45:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T08:45:00.000",
                    "dateUtc": "2016-03-22T05:45:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T08:42:00.000",
                    "dateUtc": "2016-03-22T05:42:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T08:42:00.000",
                    "dateUtc": "2016-03-22T05:42:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:53:00.000",
                    "dateUtc": "2016-03-22T05:53:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:53:00.000",
                    "dateUtc": "2016-03-22T05:53:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T10:45:00.000",
                    "dateUtc": "2016-03-22T09:45:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T10:37:00.000",
                    "dateUtc": "2016-03-22T09:37:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T10:37:00.000",
                    "dateUtc": "2016-03-22T09:37:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T10:28:00.000",
                    "dateUtc": "2016-03-22T09:28:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T10:28:00.000",
                    "dateUtc": "2016-03-22T09:28:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AF",
                    "flightNumber": "4427",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 240,
                "blockMinutes": 235,
                "airMinutes": 215,
                "taxiOutMinutes": 11,
                "taxiInMinutes": 9
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "32",
                "arrivalTerminal": "2C",
                "baggage": "13"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "321",
                "actualEquipmentIataCode": "321",
                "tailNumber": "VP-BWN"
            }
        },
        {
            "flightId": 687822604,
            "carrierFsCode": "AF",
            "flightNumber": "1145",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "CDG",
            "departureDate": {
                "dateLocal": "2016-03-22T09:45:00.000",
                "dateUtc": "2016-03-22T06:45:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T11:55:00.000",
                "dateUtc": "2016-03-22T10:55:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T09:45:00.000",
                    "dateUtc": "2016-03-22T06:45:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T11:55:00.000",
                    "dateUtc": "2016-03-22T10:55:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T09:45:00.000",
                    "dateUtc": "2016-03-22T06:45:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:08:00.000",
                    "dateUtc": "2016-03-22T07:08:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:08:00.000",
                    "dateUtc": "2016-03-22T07:08:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T11:55:00.000",
                    "dateUtc": "2016-03-22T10:55:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T11:48:00.000",
                    "dateUtc": "2016-03-22T10:48:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T11:48:00.000",
                    "dateUtc": "2016-03-22T10:48:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T11:36:00.000",
                    "dateUtc": "2016-03-22T10:36:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T11:36:00.000",
                    "dateUtc": "2016-03-22T10:36:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "SU",
                    "flightNumber": "4450",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 250,
                "airMinutes": 208,
                "taxiInMinutes": 12
            },
            "airportResources": {
                "departureTerminal": "E",
                "departureGate": "40",
                "arrivalTerminal": "2E",
                "baggage": "41"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "319",
                "actualEquipmentIataCode": "319",
                "tailNumber": "F-GRXL"
            }
        },
        {
            "flightId": 687822601,
            "carrierFsCode": "SU",
            "flightNumber": "2454",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "CDG",
            "departureDate": {
                "dateLocal": "2016-03-22T10:20:00.000",
                "dateUtc": "2016-03-22T07:20:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T12:25:00.000",
                "dateUtc": "2016-03-22T11:25:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T10:20:00.000",
                    "dateUtc": "2016-03-22T07:20:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T12:25:00.000",
                    "dateUtc": "2016-03-22T11:25:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T10:20:00.000",
                    "dateUtc": "2016-03-22T07:20:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T10:17:00.000",
                    "dateUtc": "2016-03-22T07:17:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T10:17:00.000",
                    "dateUtc": "2016-03-22T07:17:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:26:00.000",
                    "dateUtc": "2016-03-22T07:26:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:26:00.000",
                    "dateUtc": "2016-03-22T07:26:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T12:25:00.000",
                    "dateUtc": "2016-03-22T11:25:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T12:14:00.000",
                    "dateUtc": "2016-03-22T11:14:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T12:14:00.000",
                    "dateUtc": "2016-03-22T11:14:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T11:59:00.000",
                    "dateUtc": "2016-03-22T10:59:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T11:59:00.000",
                    "dateUtc": "2016-03-22T10:59:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AF",
                    "flightNumber": "4899",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 245,
                "blockMinutes": 237,
                "airMinutes": 213,
                "taxiOutMinutes": 9,
                "taxiInMinutes": 15
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "26",
                "arrivalTerminal": "2C",
                "baggage": "15"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "321",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VP-BMF"
            }
        },
        {
            "flightId": 687822610,
            "carrierFsCode": "D2",
            "flightNumber": "152",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "CEE",
            "departureDate": {
                "dateLocal": "2016-03-22T09:35:00.000",
                "dateUtc": "2016-03-22T06:35:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T10:25:00.000",
                "dateUtc": "2016-03-22T07:25:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "JY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T09:35:00.000",
                    "dateUtc": "2016-03-22T06:35:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T10:25:00.000",
                    "dateUtc": "2016-03-22T07:25:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T09:35:00.000",
                    "dateUtc": "2016-03-22T06:35:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:36:00.000",
                    "dateUtc": "2016-03-22T06:36:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:36:00.000",
                    "dateUtc": "2016-03-22T06:36:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:36:00.000",
                    "dateUtc": "2016-03-22T06:36:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:36:00.000",
                    "dateUtc": "2016-03-22T06:36:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T10:25:00.000",
                    "dateUtc": "2016-03-22T07:25:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T10:16:00.000",
                    "dateUtc": "2016-03-22T07:16:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T10:16:00.000",
                    "dateUtc": "2016-03-22T07:16:00.000Z"
                }
            },
            "delays": {
                "departureGateDelayMinutes": 1
            },
            "flightDurations": {
                "scheduledBlockMinutes": 50,
                "blockMinutes": 40,
                "taxiOutMinutes": 0
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "2"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "CR2",
                "actualEquipmentIataCode": "CR2"
            }
        },
        {
            "flightId": 687822612,
            "carrierFsCode": "SU",
            "flightNumber": "1420",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "CEK",
            "departureDate": {
                "dateLocal": "2016-03-22T07:30:00.000",
                "dateUtc": "2016-03-22T04:30:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T11:55:00.000",
                "dateUtc": "2016-03-22T06:55:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T07:30:00.000",
                    "dateUtc": "2016-03-22T04:30:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T11:55:00.000",
                    "dateUtc": "2016-03-22T06:55:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T07:30:00.000",
                    "dateUtc": "2016-03-22T04:30:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T07:49:00.000",
                    "dateUtc": "2016-03-22T04:49:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T07:49:00.000",
                    "dateUtc": "2016-03-22T04:49:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:01:00.000",
                    "dateUtc": "2016-03-22T05:01:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:01:00.000",
                    "dateUtc": "2016-03-22T05:01:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T11:55:00.000",
                    "dateUtc": "2016-03-22T06:55:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T12:03:00.000",
                    "dateUtc": "2016-03-22T07:03:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T12:03:00.000",
                    "dateUtc": "2016-03-22T07:03:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AF",
                    "flightNumber": "4966",
                    "relationship": "L"
                },
                {
                    "fsCode": "KL",
                    "flightNumber": "2944",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 19,
                "arrivalGateDelayMinutes": 8
            },
            "flightDurations": {
                "scheduledBlockMinutes": 145,
                "blockMinutes": 134,
                "taxiOutMinutes": 12
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "12"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VP-BJA"
            }
        },
        {
            "flightId": 687822616,
            "carrierFsCode": "SU",
            "flightNumber": "2658",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "CPH",
            "departureDate": {
                "dateLocal": "2016-03-22T11:35:00.000",
                "dateUtc": "2016-03-22T08:35:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T12:15:00.000",
                "dateUtc": "2016-03-22T11:15:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T11:35:00.000",
                    "dateUtc": "2016-03-22T08:35:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T12:15:00.000",
                    "dateUtc": "2016-03-22T11:15:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T11:35:00.000",
                    "dateUtc": "2016-03-22T08:35:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T11:36:00.000",
                    "dateUtc": "2016-03-22T08:36:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T11:36:00.000",
                    "dateUtc": "2016-03-22T08:36:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:52:00.000",
                    "dateUtc": "2016-03-22T08:52:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:52:00.000",
                    "dateUtc": "2016-03-22T08:52:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T12:15:00.000",
                    "dateUtc": "2016-03-22T11:15:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T12:17:00.000",
                    "dateUtc": "2016-03-22T11:17:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T12:17:00.000",
                    "dateUtc": "2016-03-22T11:17:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T12:10:00.000",
                    "dateUtc": "2016-03-22T11:10:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T12:10:00.000",
                    "dateUtc": "2016-03-22T11:10:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "FI",
                    "flightNumber": "7211",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 1,
                "arrivalGateDelayMinutes": 2
            },
            "flightDurations": {
                "scheduledBlockMinutes": 160,
                "blockMinutes": 161,
                "airMinutes": 138,
                "taxiOutMinutes": 16,
                "taxiInMinutes": 7
            },
            "airportResources": {
                "departureTerminal": "E",
                "departureGate": "34",
                "arrivalTerminal": "3"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "73H",
                "tailNumber": "VP-BZB"
            }
        },
        {
            "flightId": 687822623,
            "carrierFsCode": "SU",
            "flightNumber": "2536",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "DUS",
            "departureDate": {
                "dateLocal": "2016-03-22T08:15:00.000",
                "dateUtc": "2016-03-22T05:15:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T09:40:00.000",
                "dateUtc": "2016-03-22T08:40:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T08:15:00.000",
                    "dateUtc": "2016-03-22T05:15:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T09:40:00.000",
                    "dateUtc": "2016-03-22T08:40:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T08:15:00.000",
                    "dateUtc": "2016-03-22T05:15:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T08:12:00.000",
                    "dateUtc": "2016-03-22T05:12:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T08:12:00.000",
                    "dateUtc": "2016-03-22T05:12:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:26:00.000",
                    "dateUtc": "2016-03-22T05:26:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:26:00.000",
                    "dateUtc": "2016-03-22T05:26:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T09:40:00.000",
                    "dateUtc": "2016-03-22T08:40:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T09:31:00.000",
                    "dateUtc": "2016-03-22T08:31:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T09:31:00.000",
                    "dateUtc": "2016-03-22T08:31:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T09:24:00.000",
                    "dateUtc": "2016-03-22T08:24:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T09:24:00.000",
                    "dateUtc": "2016-03-22T08:24:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 205,
                "blockMinutes": 199,
                "airMinutes": 178,
                "taxiOutMinutes": 14,
                "taxiInMinutes": 7
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "24",
                "baggage": "Aeroflot"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VP-BTI"
            }
        },
        {
            "flightId": 687822624,
            "carrierFsCode": "SU",
            "flightNumber": "520",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "DXB",
            "departureDate": {
                "dateLocal": "2016-03-22T08:50:00.000",
                "dateUtc": "2016-03-22T05:50:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T15:10:00.000",
                "dateUtc": "2016-03-22T11:10:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T08:50:00.000",
                    "dateUtc": "2016-03-22T05:50:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T15:10:00.000",
                    "dateUtc": "2016-03-22T11:10:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T08:50:00.000",
                    "dateUtc": "2016-03-22T05:50:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:12:00.000",
                    "dateUtc": "2016-03-22T06:12:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:12:00.000",
                    "dateUtc": "2016-03-22T06:12:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:12:00.000",
                    "dateUtc": "2016-03-22T06:12:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:12:00.000",
                    "dateUtc": "2016-03-22T06:12:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T15:10:00.000",
                    "dateUtc": "2016-03-22T11:10:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T15:00:00.000",
                    "dateUtc": "2016-03-22T11:00:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T15:00:00.000",
                    "dateUtc": "2016-03-22T11:00:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T15:00:00.000",
                    "dateUtc": "2016-03-22T11:00:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T15:00:00.000",
                    "dateUtc": "2016-03-22T11:00:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "KQ",
                    "flightNumber": "3503",
                    "relationship": "L"
                },
                {
                    "fsCode": "SV",
                    "flightNumber": "6030",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 22
            },
            "flightDurations": {
                "scheduledBlockMinutes": 320,
                "blockMinutes": 288,
                "airMinutes": 288,
                "taxiOutMinutes": 0,
                "taxiInMinutes": 0
            },
            "airportResources": {
                "departureTerminal": "F",
                "departureGate": "29",
                "arrivalTerminal": "1",
                "baggage": "02"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "333",
                "actualEquipmentIataCode": "333",
                "tailNumber": "VQ-BPI"
            }
        },
        {
            "flightId": 687822627,
            "carrierFsCode": "SU",
            "flightNumber": "1860",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "EVN",
            "departureDate": {
                "dateLocal": "2016-03-22T11:25:00.000",
                "dateUtc": "2016-03-22T08:25:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T15:15:00.000",
                "dateUtc": "2016-03-22T11:15:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T11:25:00.000",
                    "dateUtc": "2016-03-22T08:25:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T15:15:00.000",
                    "dateUtc": "2016-03-22T11:15:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T11:25:00.000",
                    "dateUtc": "2016-03-22T08:25:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T11:43:00.000",
                    "dateUtc": "2016-03-22T08:43:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T11:43:00.000",
                    "dateUtc": "2016-03-22T08:43:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:43:00.000",
                    "dateUtc": "2016-03-22T08:43:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:43:00.000",
                    "dateUtc": "2016-03-22T08:43:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T15:15:00.000",
                    "dateUtc": "2016-03-22T11:15:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T15:11:00.000",
                    "dateUtc": "2016-03-22T11:11:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T15:11:00.000",
                    "dateUtc": "2016-03-22T11:11:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T15:08:00.000",
                    "dateUtc": "2016-03-22T11:08:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T15:08:00.000",
                    "dateUtc": "2016-03-22T11:08:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "KL",
                    "flightNumber": "2958",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 18
            },
            "flightDurations": {
                "scheduledBlockMinutes": 170,
                "blockMinutes": 148,
                "airMinutes": 145,
                "taxiOutMinutes": 0,
                "taxiInMinutes": 3
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "29"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VQ-BPW"
            }
        },
        {
            "flightId": 687822632,
            "carrierFsCode": "AZ",
            "flightNumber": "595",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "FCO",
            "departureDate": {
                "dateLocal": "2016-03-22T06:30:00.000",
                "dateUtc": "2016-03-22T03:30:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T08:25:00.000",
                "dateUtc": "2016-03-22T07:25:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T06:30:00.000",
                    "dateUtc": "2016-03-22T03:30:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T08:25:00.000",
                    "dateUtc": "2016-03-22T07:25:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T06:30:00.000",
                    "dateUtc": "2016-03-22T03:30:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T06:53:00.000",
                    "dateUtc": "2016-03-22T03:53:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T06:53:00.000",
                    "dateUtc": "2016-03-22T03:53:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T08:25:00.000",
                    "dateUtc": "2016-03-22T07:25:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T08:28:00.000",
                    "dateUtc": "2016-03-22T07:28:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T08:28:00.000",
                    "dateUtc": "2016-03-22T07:28:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T08:25:00.000",
                    "dateUtc": "2016-03-22T07:25:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T08:25:00.000",
                    "dateUtc": "2016-03-22T07:25:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "SU",
                    "flightNumber": "3204",
                    "relationship": "L"
                }
            ],
            "delays": {
                "arrivalGateDelayMinutes": 3
            },
            "flightDurations": {
                "scheduledBlockMinutes": 235,
                "airMinutes": 212,
                "taxiInMinutes": 3
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "31",
                "arrivalTerminal": "3",
                "baggage": "4"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "32S",
                "tailNumber": "EI-DSL"
            }
        },
        {
            "flightId": 687822631,
            "carrierFsCode": "SU",
            "flightNumber": "2402",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "FCO",
            "departureDate": {
                "dateLocal": "2016-03-22T08:05:00.000",
                "dateUtc": "2016-03-22T05:05:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T09:55:00.000",
                "dateUtc": "2016-03-22T08:55:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T08:05:00.000",
                    "dateUtc": "2016-03-22T05:05:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T09:55:00.000",
                    "dateUtc": "2016-03-22T08:55:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T08:05:00.000",
                    "dateUtc": "2016-03-22T05:05:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T08:02:00.000",
                    "dateUtc": "2016-03-22T05:02:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T08:02:00.000",
                    "dateUtc": "2016-03-22T05:02:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:27:00.000",
                    "dateUtc": "2016-03-22T05:27:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:27:00.000",
                    "dateUtc": "2016-03-22T05:27:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T09:55:00.000",
                    "dateUtc": "2016-03-22T08:55:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T09:55:00.000",
                    "dateUtc": "2016-03-22T08:55:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T09:55:00.000",
                    "dateUtc": "2016-03-22T08:55:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T09:50:00.000",
                    "dateUtc": "2016-03-22T08:50:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T09:50:00.000",
                    "dateUtc": "2016-03-22T08:50:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AZ",
                    "flightNumber": "7183",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 230,
                "blockMinutes": 233,
                "airMinutes": 203,
                "taxiOutMinutes": 25,
                "taxiInMinutes": 5
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "26",
                "arrivalTerminal": "3",
                "baggage": "9"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "321",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VP-BZS"
            }
        },
        {
            "flightId": 687822633,
            "carrierFsCode": "SU",
            "flightNumber": "2406",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "FCO",
            "departureDate": {
                "dateLocal": "2016-03-22T11:30:00.000",
                "dateUtc": "2016-03-22T08:30:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T13:20:00.000",
                "dateUtc": "2016-03-22T12:20:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T11:30:00.000",
                    "dateUtc": "2016-03-22T08:30:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T13:20:00.000",
                    "dateUtc": "2016-03-22T12:20:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T11:30:00.000",
                    "dateUtc": "2016-03-22T08:30:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T11:25:00.000",
                    "dateUtc": "2016-03-22T08:25:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T11:25:00.000",
                    "dateUtc": "2016-03-22T08:25:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:39:00.000",
                    "dateUtc": "2016-03-22T08:39:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:39:00.000",
                    "dateUtc": "2016-03-22T08:39:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T13:20:00.000",
                    "dateUtc": "2016-03-22T12:20:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T13:06:00.000",
                    "dateUtc": "2016-03-22T12:06:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T13:06:00.000",
                    "dateUtc": "2016-03-22T12:06:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T13:03:00.000",
                    "dateUtc": "2016-03-22T12:03:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T13:03:00.000",
                    "dateUtc": "2016-03-22T12:03:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AZ",
                    "flightNumber": "7017",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 230,
                "blockMinutes": 221,
                "airMinutes": 204,
                "taxiOutMinutes": 14,
                "taxiInMinutes": 3
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "28",
                "arrivalTerminal": "3",
                "baggage": "10"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "321",
                "actualEquipmentIataCode": "321",
                "tailNumber": "VQ-BED"
            }
        },
        {
            "flightId": 687822637,
            "carrierFsCode": "SU",
            "flightNumber": "2306",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "FRA",
            "departureDate": {
                "dateLocal": "2016-03-22T08:35:00.000",
                "dateUtc": "2016-03-22T05:35:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T10:00:00.000",
                "dateUtc": "2016-03-22T09:00:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T08:35:00.000",
                    "dateUtc": "2016-03-22T05:35:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T10:00:00.000",
                    "dateUtc": "2016-03-22T09:00:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T08:35:00.000",
                    "dateUtc": "2016-03-22T05:35:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T08:57:00.000",
                    "dateUtc": "2016-03-22T05:57:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T08:57:00.000",
                    "dateUtc": "2016-03-22T05:57:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:57:00.000",
                    "dateUtc": "2016-03-22T05:57:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:57:00.000",
                    "dateUtc": "2016-03-22T05:57:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T10:00:00.000",
                    "dateUtc": "2016-03-22T09:00:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T10:02:00.000",
                    "dateUtc": "2016-03-22T09:02:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T10:02:00.000",
                    "dateUtc": "2016-03-22T09:02:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T09:46:00.000",
                    "dateUtc": "2016-03-22T08:46:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T09:46:00.000",
                    "dateUtc": "2016-03-22T08:46:00.000Z"
                }
            },
            "delays": {
                "departureGateDelayMinutes": 22,
                "arrivalGateDelayMinutes": 2
            },
            "flightDurations": {
                "scheduledBlockMinutes": 205,
                "blockMinutes": 185,
                "airMinutes": 169,
                "taxiOutMinutes": 0,
                "taxiInMinutes": 16
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "7",
                "arrivalTerminal": "2"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VP-BRZ"
            }
        },
        {
            "flightId": 687822638,
            "carrierFsCode": "SU",
            "flightNumber": "2300",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "FRA",
            "departureDate": {
                "dateLocal": "2016-03-22T11:10:00.000",
                "dateUtc": "2016-03-22T08:10:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T12:35:00.000",
                "dateUtc": "2016-03-22T11:35:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T11:10:00.000",
                    "dateUtc": "2016-03-22T08:10:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T12:35:00.000",
                    "dateUtc": "2016-03-22T11:35:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T11:10:00.000",
                    "dateUtc": "2016-03-22T08:10:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T11:02:00.000",
                    "dateUtc": "2016-03-22T08:02:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T11:02:00.000",
                    "dateUtc": "2016-03-22T08:02:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:20:00.000",
                    "dateUtc": "2016-03-22T08:20:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:20:00.000",
                    "dateUtc": "2016-03-22T08:20:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T12:35:00.000",
                    "dateUtc": "2016-03-22T11:35:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T12:26:00.000",
                    "dateUtc": "2016-03-22T11:26:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T12:26:00.000",
                    "dateUtc": "2016-03-22T11:26:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T12:15:00.000",
                    "dateUtc": "2016-03-22T11:15:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T12:15:00.000",
                    "dateUtc": "2016-03-22T11:15:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 205,
                "blockMinutes": 204,
                "airMinutes": 175,
                "taxiOutMinutes": 18,
                "taxiInMinutes": 11
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "31",
                "arrivalTerminal": "2"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VP-BRY"
            }
        },
        {
            "flightId": 687822641,
            "carrierFsCode": "SU",
            "flightNumber": "1880",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "FRU",
            "departureDate": {
                "dateLocal": "2016-03-22T09:05:00.000",
                "dateUtc": "2016-03-22T06:05:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T16:15:00.000",
                "dateUtc": "2016-03-22T10:15:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T09:05:00.000",
                    "dateUtc": "2016-03-22T06:05:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T16:15:00.000",
                    "dateUtc": "2016-03-22T10:15:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T09:05:00.000",
                    "dateUtc": "2016-03-22T06:05:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:03:00.000",
                    "dateUtc": "2016-03-22T06:03:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:03:00.000",
                    "dateUtc": "2016-03-22T06:03:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:14:00.000",
                    "dateUtc": "2016-03-22T06:14:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:14:00.000",
                    "dateUtc": "2016-03-22T06:14:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T16:15:00.000",
                    "dateUtc": "2016-03-22T10:15:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T15:51:00.000",
                    "dateUtc": "2016-03-22T09:51:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T15:51:00.000",
                    "dateUtc": "2016-03-22T09:51:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AF",
                    "flightNumber": "4974",
                    "relationship": "L"
                },
                {
                    "fsCode": "AZ",
                    "flightNumber": "5664",
                    "relationship": "L"
                },
                {
                    "fsCode": "KL",
                    "flightNumber": "2936",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 250,
                "blockMinutes": 228,
                "taxiOutMinutes": 11
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "31"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VQ-BKS"
            }
        },
        {
            "flightId": 687822647,
            "carrierFsCode": "SU",
            "flightNumber": "1228",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "GOJ",
            "departureDate": {
                "dateLocal": "2016-03-22T06:10:00.000",
                "dateUtc": "2016-03-22T03:10:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T07:20:00.000",
                "dateUtc": "2016-03-22T04:20:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T06:10:00.000",
                    "dateUtc": "2016-03-22T03:10:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T07:20:00.000",
                    "dateUtc": "2016-03-22T04:20:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T06:10:00.000",
                    "dateUtc": "2016-03-22T03:10:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T06:18:00.000",
                    "dateUtc": "2016-03-22T03:18:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T06:18:00.000",
                    "dateUtc": "2016-03-22T03:18:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T06:23:00.000",
                    "dateUtc": "2016-03-22T03:23:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T06:23:00.000",
                    "dateUtc": "2016-03-22T03:23:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T07:20:00.000",
                    "dateUtc": "2016-03-22T04:20:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T07:20:00.000",
                    "dateUtc": "2016-03-22T04:20:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T07:20:00.000",
                    "dateUtc": "2016-03-22T04:20:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AZ",
                    "flightNumber": "5228",
                    "relationship": "L"
                },
                {
                    "fsCode": "KL",
                    "flightNumber": "3254",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 8
            },
            "flightDurations": {
                "scheduledBlockMinutes": 70,
                "blockMinutes": 62,
                "taxiOutMinutes": 5
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "2"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "SU9",
                "actualEquipmentIataCode": "SU9",
                "tailNumber": "RA-89023"
            }
        },
        {
            "flightId": 687822644,
            "carrierFsCode": "SU",
            "flightNumber": "1220",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "GOJ",
            "departureDate": {
                "dateLocal": "2016-03-22T09:10:00.000",
                "dateUtc": "2016-03-22T06:10:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T10:20:00.000",
                "dateUtc": "2016-03-22T07:20:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T09:10:00.000",
                    "dateUtc": "2016-03-22T06:10:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T10:20:00.000",
                    "dateUtc": "2016-03-22T07:20:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T09:10:00.000",
                    "dateUtc": "2016-03-22T06:10:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:07:00.000",
                    "dateUtc": "2016-03-22T06:07:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:07:00.000",
                    "dateUtc": "2016-03-22T06:07:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:18:00.000",
                    "dateUtc": "2016-03-22T06:18:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:18:00.000",
                    "dateUtc": "2016-03-22T06:18:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T10:20:00.000",
                    "dateUtc": "2016-03-22T07:20:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T10:09:00.000",
                    "dateUtc": "2016-03-22T07:09:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T10:09:00.000",
                    "dateUtc": "2016-03-22T07:09:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AZ",
                    "flightNumber": "3947",
                    "relationship": "L"
                },
                {
                    "fsCode": "KL",
                    "flightNumber": "3246",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 70,
                "blockMinutes": 62,
                "taxiOutMinutes": 11
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "3"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VQ-BCN"
            }
        },
        {
            "flightId": 687822649,
            "carrierFsCode": "SU",
            "flightNumber": "2380",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "GVA",
            "departureDate": {
                "dateLocal": "2016-03-22T10:05:00.000",
                "dateUtc": "2016-03-22T07:05:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T11:50:00.000",
                "dateUtc": "2016-03-22T10:50:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T10:05:00.000",
                    "dateUtc": "2016-03-22T07:05:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T11:50:00.000",
                    "dateUtc": "2016-03-22T10:50:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T10:05:00.000",
                    "dateUtc": "2016-03-22T07:05:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:59:00.000",
                    "dateUtc": "2016-03-22T06:59:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:59:00.000",
                    "dateUtc": "2016-03-22T06:59:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:15:00.000",
                    "dateUtc": "2016-03-22T07:15:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:15:00.000",
                    "dateUtc": "2016-03-22T07:15:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T11:50:00.000",
                    "dateUtc": "2016-03-22T10:50:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T11:48:00.000",
                    "dateUtc": "2016-03-22T10:48:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T11:48:00.000",
                    "dateUtc": "2016-03-22T10:48:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T11:41:00.000",
                    "dateUtc": "2016-03-22T10:41:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T11:41:00.000",
                    "dateUtc": "2016-03-22T10:41:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 225,
                "blockMinutes": 229,
                "airMinutes": 206,
                "taxiOutMinutes": 16,
                "taxiInMinutes": 7
            },
            "airportResources": {
                "departureTerminal": "F",
                "departureGate": "47",
                "arrivalTerminal": "1",
                "baggage": "4"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "321",
                "actualEquipmentIataCode": "321",
                "tailNumber": "VQ-BEE"
            }
        },
        {
            "flightId": 687822651,
            "carrierFsCode": "SU",
            "flightNumber": "1854",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "GYD",
            "departureDate": {
                "dateLocal": "2016-03-22T11:00:00.000",
                "dateUtc": "2016-03-22T08:00:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T15:00:00.000",
                "dateUtc": "2016-03-22T11:00:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T11:00:00.000",
                    "dateUtc": "2016-03-22T08:00:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T15:00:00.000",
                    "dateUtc": "2016-03-22T11:00:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T11:00:00.000",
                    "dateUtc": "2016-03-22T08:00:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T10:55:00.000",
                    "dateUtc": "2016-03-22T07:55:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T10:55:00.000",
                    "dateUtc": "2016-03-22T07:55:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:14:00.000",
                    "dateUtc": "2016-03-22T08:14:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:14:00.000",
                    "dateUtc": "2016-03-22T08:14:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T15:00:00.000",
                    "dateUtc": "2016-03-22T11:00:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T15:03:00.000",
                    "dateUtc": "2016-03-22T11:03:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T15:03:00.000",
                    "dateUtc": "2016-03-22T11:03:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "KL",
                    "flightNumber": "2932",
                    "relationship": "L"
                }
            ],
            "delays": {
                "arrivalGateDelayMinutes": 3
            },
            "flightDurations": {
                "scheduledBlockMinutes": 180,
                "blockMinutes": 188,
                "taxiOutMinutes": 19
            },
            "airportResources": {
                "departureTerminal": "F",
                "departureGate": "43",
                "arrivalTerminal": "1"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "73H",
                "tailNumber": "VP-BRR"
            }
        },
        {
            "flightId": 687822654,
            "carrierFsCode": "SU",
            "flightNumber": "2346",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "HAM",
            "departureDate": {
                "dateLocal": "2016-03-22T10:30:00.000",
                "dateUtc": "2016-03-22T07:30:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T11:30:00.000",
                "dateUtc": "2016-03-22T10:30:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T10:30:00.000",
                    "dateUtc": "2016-03-22T07:30:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T11:30:00.000",
                    "dateUtc": "2016-03-22T10:30:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T10:30:00.000",
                    "dateUtc": "2016-03-22T07:30:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T10:38:00.000",
                    "dateUtc": "2016-03-22T07:38:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T10:38:00.000",
                    "dateUtc": "2016-03-22T07:38:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:45:00.000",
                    "dateUtc": "2016-03-22T07:45:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:45:00.000",
                    "dateUtc": "2016-03-22T07:45:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T11:30:00.000",
                    "dateUtc": "2016-03-22T10:30:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T11:22:00.000",
                    "dateUtc": "2016-03-22T10:22:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T11:22:00.000",
                    "dateUtc": "2016-03-22T10:22:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T11:17:00.000",
                    "dateUtc": "2016-03-22T10:17:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T11:17:00.000",
                    "dateUtc": "2016-03-22T10:17:00.000Z"
                }
            },
            "delays": {
                "departureGateDelayMinutes": 8
            },
            "flightDurations": {
                "scheduledBlockMinutes": 180,
                "blockMinutes": 164,
                "airMinutes": 152,
                "taxiOutMinutes": 7,
                "taxiInMinutes": 5
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "5",
                "arrivalTerminal": "1"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VQ-BIT"
            }
        },
        {
            "flightId": 687822656,
            "carrierFsCode": "SU",
            "flightNumber": "150",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "HAV",
            "departureDate": {
                "dateLocal": "2016-03-22T07:40:00.000",
                "dateUtc": "2016-03-22T04:40:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T13:45:00.000",
                "dateUtc": "2016-03-22T17:45:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T07:40:00.000",
                    "dateUtc": "2016-03-22T04:40:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T13:45:00.000",
                    "dateUtc": "2016-03-22T17:45:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T07:40:00.000",
                    "dateUtc": "2016-03-22T04:40:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T07:44:00.000",
                    "dateUtc": "2016-03-22T04:44:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T07:44:00.000",
                    "dateUtc": "2016-03-22T04:44:00.000Z"
                },
                "flightPlanPlannedDeparture": {
                    "dateLocal": "2016-03-22T07:38:00.000",
                    "dateUtc": "2016-03-22T04:38:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:10:00.000",
                    "dateUtc": "2016-03-22T05:10:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:10:00.000",
                    "dateUtc": "2016-03-22T05:10:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T13:45:00.000",
                    "dateUtc": "2016-03-22T17:45:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T13:57:00.000",
                    "dateUtc": "2016-03-22T17:57:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T13:57:00.000",
                    "dateUtc": "2016-03-22T17:57:00.000Z"
                },
                "flightPlanPlannedArrival": {
                    "dateLocal": "2016-03-22T13:24:00.000",
                    "dateUtc": "2016-03-22T17:24:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T13:40:00.000",
                    "dateUtc": "2016-03-22T17:40:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "CU",
                    "flightNumber": "6150",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 4,
                "departureRunwayDelayMinutes": 32,
                "arrivalGateDelayMinutes": 12,
                "arrivalRunwayDelayMinutes": 16
            },
            "flightDurations": {
                "scheduledBlockMinutes": 785,
                "blockMinutes": 793,
                "scheduledAirMinutes": 766,
                "taxiOutMinutes": 26,
                "scheduledTaxiInMinutes": 21
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "30",
                "arrivalTerminal": "3"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "332",
                "actualEquipmentIataCode": "330",
                "tailNumber": "VP-BLX"
            }
        },
        {
            "flightId": 687822658,
            "carrierFsCode": "SU",
            "flightNumber": "2206",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "HEL",
            "departureDate": {
                "dateLocal": "2016-03-22T10:45:00.000",
                "dateUtc": "2016-03-22T07:45:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T11:35:00.000",
                "dateUtc": "2016-03-22T09:35:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T10:45:00.000",
                    "dateUtc": "2016-03-22T07:45:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T11:35:00.000",
                    "dateUtc": "2016-03-22T09:35:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T10:45:00.000",
                    "dateUtc": "2016-03-22T07:45:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T10:41:00.000",
                    "dateUtc": "2016-03-22T07:41:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T10:41:00.000",
                    "dateUtc": "2016-03-22T07:41:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:50:00.000",
                    "dateUtc": "2016-03-22T07:50:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:50:00.000",
                    "dateUtc": "2016-03-22T07:50:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T11:35:00.000",
                    "dateUtc": "2016-03-22T09:35:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T11:35:00.000",
                    "dateUtc": "2016-03-22T09:35:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T11:35:00.000",
                    "dateUtc": "2016-03-22T09:35:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T11:22:00.000",
                    "dateUtc": "2016-03-22T09:22:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T11:22:00.000",
                    "dateUtc": "2016-03-22T09:22:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AY",
                    "flightNumber": "6840",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 110,
                "blockMinutes": 114,
                "airMinutes": 92,
                "taxiOutMinutes": 9,
                "taxiInMinutes": 13
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "7",
                "arrivalTerminal": "2"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VP-BDK"
            }
        },
        {
            "flightId": 687822660,
            "carrierFsCode": "RU",
            "flightNumber": "239",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "HKG",
            "departureDate": {
                "dateLocal": "2016-03-22T07:00:00.000",
                "dateUtc": "2016-03-22T04:00:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T21:00:00.000",
                "dateUtc": "2016-03-22T13:00:00.000Z"
            },
            "status": "S",
            "schedule": {
                "flightType": "F",
                "serviceClasses": "Y",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T07:00:00.000",
                    "dateUtc": "2016-03-22T04:00:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T21:00:00.000",
                    "dateUtc": "2016-03-22T13:00:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T07:00:00.000",
                    "dateUtc": "2016-03-22T04:00:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T21:00:00.000",
                    "dateUtc": "2016-03-22T13:00:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 540
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "74N",
                "tailNumber": "TF-AMF"
            }
        },
        {
            "flightId": 687822664,
            "carrierFsCode": "IR",
            "flightNumber": "742",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "IKA",
            "departureDate": {
                "dateLocal": "2016-03-22T12:00:00.000",
                "dateUtc": "2016-03-22T09:00:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T17:30:00.000",
                "dateUtc": "2016-03-22T13:00:00.000Z"
            },
            "status": "S",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "JY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T12:00:00.000",
                    "dateUtc": "2016-03-22T09:00:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T17:30:00.000",
                    "dateUtc": "2016-03-22T13:00:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T12:00:00.000",
                    "dateUtc": "2016-03-22T09:00:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T17:30:00.000",
                    "dateUtc": "2016-03-22T13:00:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 240
            },
            "airportResources": {
                "departureTerminal": "F",
                "departureGate": "52"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320"
            }
        },
        {
            "flightId": 687822669,
            "carrierFsCode": "SU",
            "flightNumber": "2130",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "IST",
            "departureDate": {
                "dateLocal": "2016-03-22T09:50:00.000",
                "dateUtc": "2016-03-22T06:50:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T12:45:00.000",
                "dateUtc": "2016-03-22T10:45:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T09:50:00.000",
                    "dateUtc": "2016-03-22T06:50:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T12:45:00.000",
                    "dateUtc": "2016-03-22T10:45:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T09:50:00.000",
                    "dateUtc": "2016-03-22T06:50:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:54:00.000",
                    "dateUtc": "2016-03-22T06:54:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:54:00.000",
                    "dateUtc": "2016-03-22T06:54:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:20:00.000",
                    "dateUtc": "2016-03-22T07:20:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:20:00.000",
                    "dateUtc": "2016-03-22T07:20:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T12:45:00.000",
                    "dateUtc": "2016-03-22T10:45:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T12:53:00.000",
                    "dateUtc": "2016-03-22T10:53:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T12:53:00.000",
                    "dateUtc": "2016-03-22T10:53:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "SV",
                    "flightNumber": "6023",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 4,
                "arrivalGateDelayMinutes": 8
            },
            "flightDurations": {
                "scheduledBlockMinutes": 235,
                "blockMinutes": 239,
                "taxiOutMinutes": 26
            },
            "airportResources": {
                "departureTerminal": "F",
                "departureGate": "58",
                "arrivalTerminal": "I",
                "baggage": "09"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "319",
                "tailNumber": "VQ-BCP"
            }
        },
        {
            "flightId": 687822673,
            "carrierFsCode": "SU",
            "flightNumber": "100",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "JFK",
            "departureDate": {
                "dateLocal": "2016-03-22T09:50:00.000",
                "dateUtc": "2016-03-22T06:50:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T13:35:00.000",
                "dateUtc": "2016-03-22T17:35:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T09:50:00.000",
                    "dateUtc": "2016-03-22T06:50:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T13:35:00.000",
                    "dateUtc": "2016-03-22T17:35:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T09:50:00.000",
                    "dateUtc": "2016-03-22T06:50:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:51:00.000",
                    "dateUtc": "2016-03-22T06:51:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:51:00.000",
                    "dateUtc": "2016-03-22T06:51:00.000Z"
                },
                "flightPlanPlannedDeparture": {
                    "dateLocal": "2016-03-22T10:41:00.000",
                    "dateUtc": "2016-03-22T07:41:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:06:00.000",
                    "dateUtc": "2016-03-22T07:06:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:06:00.000",
                    "dateUtc": "2016-03-22T07:06:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T13:35:00.000",
                    "dateUtc": "2016-03-22T17:35:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T13:19:00.000",
                    "dateUtc": "2016-03-22T17:19:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T13:19:00.000",
                    "dateUtc": "2016-03-22T17:19:00.000Z"
                },
                "flightPlanPlannedArrival": {
                    "dateLocal": "2016-03-22T13:32:00.000",
                    "dateUtc": "2016-03-22T17:32:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T13:09:00.000",
                    "dateUtc": "2016-03-22T17:09:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T13:09:00.000",
                    "dateUtc": "2016-03-22T17:09:00.000Z"
                }
            },
            "delays": {
                "departureGateDelayMinutes": 1
            },
            "flightDurations": {
                "scheduledBlockMinutes": 645,
                "blockMinutes": 628,
                "scheduledAirMinutes": 591,
                "airMinutes": 603,
                "scheduledTaxiOutMinutes": 51,
                "taxiOutMinutes": 15,
                "scheduledTaxiInMinutes": 3,
                "taxiInMinutes": 10
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "30",
                "arrivalTerminal": "1"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "333",
                "actualEquipmentIataCode": "330",
                "tailNumber": "VQ-BPK"
            }
        },
        {
            "flightId": 687822678,
            "carrierFsCode": "SU",
            "flightNumber": "1000",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "KGD",
            "departureDate": {
                "dateLocal": "2016-03-22T07:15:00.000",
                "dateUtc": "2016-03-22T04:15:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T08:15:00.000",
                "dateUtc": "2016-03-22T06:15:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T07:15:00.000",
                    "dateUtc": "2016-03-22T04:15:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T08:15:00.000",
                    "dateUtc": "2016-03-22T06:15:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T07:15:00.000",
                    "dateUtc": "2016-03-22T04:15:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T07:16:00.000",
                    "dateUtc": "2016-03-22T04:16:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T07:16:00.000",
                    "dateUtc": "2016-03-22T04:16:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T07:35:00.000",
                    "dateUtc": "2016-03-22T04:35:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T07:35:00.000",
                    "dateUtc": "2016-03-22T04:35:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T08:15:00.000",
                    "dateUtc": "2016-03-22T06:15:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T08:16:00.000",
                    "dateUtc": "2016-03-22T06:16:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T08:16:00.000",
                    "dateUtc": "2016-03-22T06:16:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AF",
                    "flightNumber": "4930",
                    "relationship": "L"
                },
                {
                    "fsCode": "AZ",
                    "flightNumber": "3954",
                    "relationship": "L"
                },
                {
                    "fsCode": "KL",
                    "flightNumber": "3242",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 1,
                "arrivalGateDelayMinutes": 1
            },
            "flightDurations": {
                "scheduledBlockMinutes": 120,
                "blockMinutes": 120,
                "taxiOutMinutes": 19
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "17"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "321",
                "actualEquipmentIataCode": "321",
                "tailNumber": "VP-BQX"
            }
        },
        {
            "flightId": 687822677,
            "carrierFsCode": "SU",
            "flightNumber": "1002",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "KGD",
            "departureDate": {
                "dateLocal": "2016-03-22T10:35:00.000",
                "dateUtc": "2016-03-22T07:35:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T11:35:00.000",
                "dateUtc": "2016-03-22T09:35:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T10:35:00.000",
                    "dateUtc": "2016-03-22T07:35:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T11:35:00.000",
                    "dateUtc": "2016-03-22T09:35:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T10:35:00.000",
                    "dateUtc": "2016-03-22T07:35:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T10:28:00.000",
                    "dateUtc": "2016-03-22T07:28:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T10:28:00.000",
                    "dateUtc": "2016-03-22T07:28:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:43:00.000",
                    "dateUtc": "2016-03-22T07:43:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:43:00.000",
                    "dateUtc": "2016-03-22T07:43:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T11:35:00.000",
                    "dateUtc": "2016-03-22T09:35:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T11:27:00.000",
                    "dateUtc": "2016-03-22T09:27:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T11:27:00.000",
                    "dateUtc": "2016-03-22T09:27:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AF",
                    "flightNumber": "4901",
                    "relationship": "L"
                },
                {
                    "fsCode": "MU",
                    "flightNumber": "8170",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 120,
                "blockMinutes": 119,
                "taxiOutMinutes": 15
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "18"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "321",
                "tailNumber": "VP-BTL"
            }
        },
        {
            "flightId": 687822683,
            "carrierFsCode": "SU",
            "flightNumber": "1846",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "KIV",
            "departureDate": {
                "dateLocal": "2016-03-22T08:40:00.000",
                "dateUtc": "2016-03-22T05:40:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T10:55:00.000",
                "dateUtc": "2016-03-22T08:55:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T08:40:00.000",
                    "dateUtc": "2016-03-22T05:40:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T10:55:00.000",
                    "dateUtc": "2016-03-22T08:55:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T08:40:00.000",
                    "dateUtc": "2016-03-22T05:40:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T08:43:00.000",
                    "dateUtc": "2016-03-22T05:43:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T08:43:00.000",
                    "dateUtc": "2016-03-22T05:43:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:09:00.000",
                    "dateUtc": "2016-03-22T06:09:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:09:00.000",
                    "dateUtc": "2016-03-22T06:09:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T10:55:00.000",
                    "dateUtc": "2016-03-22T08:55:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T10:51:00.000",
                    "dateUtc": "2016-03-22T08:51:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T10:51:00.000",
                    "dateUtc": "2016-03-22T08:51:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T10:50:00.000",
                    "dateUtc": "2016-03-22T08:50:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T10:50:00.000",
                    "dateUtc": "2016-03-22T08:50:00.000Z"
                }
            },
            "delays": {
                "departureGateDelayMinutes": 3
            },
            "flightDurations": {
                "scheduledBlockMinutes": 195,
                "blockMinutes": 188,
                "airMinutes": 161,
                "taxiOutMinutes": 26,
                "taxiInMinutes": 1
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "5"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VQ-BIU"
            }
        },
        {
            "flightId": 687822686,
            "carrierFsCode": "SU",
            "flightNumber": "1284",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "KRR",
            "departureDate": {
                "dateLocal": "2016-03-22T06:05:00.000",
                "dateUtc": "2016-03-22T03:05:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T08:30:00.000",
                "dateUtc": "2016-03-22T05:30:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T06:05:00.000",
                    "dateUtc": "2016-03-22T03:05:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T08:30:00.000",
                    "dateUtc": "2016-03-22T05:30:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T06:05:00.000",
                    "dateUtc": "2016-03-22T03:05:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T06:05:00.000",
                    "dateUtc": "2016-03-22T03:05:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T06:05:00.000",
                    "dateUtc": "2016-03-22T03:05:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T06:35:00.000",
                    "dateUtc": "2016-03-22T03:35:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T06:35:00.000",
                    "dateUtc": "2016-03-22T03:35:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T08:30:00.000",
                    "dateUtc": "2016-03-22T05:30:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T08:24:00.000",
                    "dateUtc": "2016-03-22T05:24:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T08:24:00.000",
                    "dateUtc": "2016-03-22T05:24:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AZ",
                    "flightNumber": "5645",
                    "relationship": "L"
                },
                {
                    "fsCode": "JU",
                    "flightNumber": "8800",
                    "relationship": "L"
                },
                {
                    "fsCode": "KL",
                    "flightNumber": "3222",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 145,
                "blockMinutes": 139,
                "taxiOutMinutes": 30
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "12"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VQ-BRW"
            }
        },
        {
            "flightId": 687822689,
            "carrierFsCode": "SU",
            "flightNumber": "1272",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "KRR",
            "departureDate": {
                "dateLocal": "2016-03-22T07:45:00.000",
                "dateUtc": "2016-03-22T04:45:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T10:05:00.000",
                "dateUtc": "2016-03-22T07:05:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T07:45:00.000",
                    "dateUtc": "2016-03-22T04:45:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T10:05:00.000",
                    "dateUtc": "2016-03-22T07:05:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T07:45:00.000",
                    "dateUtc": "2016-03-22T04:45:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T08:09:00.000",
                    "dateUtc": "2016-03-22T05:09:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T08:09:00.000",
                    "dateUtc": "2016-03-22T05:09:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:09:00.000",
                    "dateUtc": "2016-03-22T05:09:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:09:00.000",
                    "dateUtc": "2016-03-22T05:09:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T10:05:00.000",
                    "dateUtc": "2016-03-22T07:05:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T09:52:00.000",
                    "dateUtc": "2016-03-22T06:52:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T09:52:00.000",
                    "dateUtc": "2016-03-22T06:52:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AF",
                    "flightNumber": "4944",
                    "relationship": "L"
                },
                {
                    "fsCode": "AZ",
                    "flightNumber": "3961",
                    "relationship": "L"
                },
                {
                    "fsCode": "KL",
                    "flightNumber": "3220",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 24
            },
            "flightDurations": {
                "scheduledBlockMinutes": 140,
                "blockMinutes": 103,
                "taxiOutMinutes": 0
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "18"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VQ-BSG"
            }
        },
        {
            "flightId": 687822687,
            "carrierFsCode": "SU",
            "flightNumber": "1102",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "KRR",
            "departureDate": {
                "dateLocal": "2016-03-22T10:45:00.000",
                "dateUtc": "2016-03-22T07:45:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T13:10:00.000",
                "dateUtc": "2016-03-22T10:10:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T10:45:00.000",
                    "dateUtc": "2016-03-22T07:45:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T13:10:00.000",
                    "dateUtc": "2016-03-22T10:10:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T10:45:00.000",
                    "dateUtc": "2016-03-22T07:45:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T10:44:00.000",
                    "dateUtc": "2016-03-22T07:44:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T10:44:00.000",
                    "dateUtc": "2016-03-22T07:44:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:51:00.000",
                    "dateUtc": "2016-03-22T07:51:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:51:00.000",
                    "dateUtc": "2016-03-22T07:51:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T13:10:00.000",
                    "dateUtc": "2016-03-22T10:10:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T12:53:00.000",
                    "dateUtc": "2016-03-22T09:53:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T12:53:00.000",
                    "dateUtc": "2016-03-22T09:53:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AF",
                    "flightNumber": "4910",
                    "relationship": "L"
                },
                {
                    "fsCode": "KL",
                    "flightNumber": "3062",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 145,
                "blockMinutes": 129,
                "taxiOutMinutes": 7
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "15"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VP-BJW"
            }
        },
        {
            "flightId": 687822697,
            "carrierFsCode": "SU",
            "flightNumber": "1602",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "KUF",
            "departureDate": {
                "dateLocal": "2016-03-22T06:30:00.000",
                "dateUtc": "2016-03-22T03:30:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T09:15:00.000",
                "dateUtc": "2016-03-22T05:15:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T06:30:00.000",
                    "dateUtc": "2016-03-22T03:30:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T09:15:00.000",
                    "dateUtc": "2016-03-22T05:15:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T06:30:00.000",
                    "dateUtc": "2016-03-22T03:30:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T06:35:00.000",
                    "dateUtc": "2016-03-22T03:35:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T06:35:00.000",
                    "dateUtc": "2016-03-22T03:35:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T06:41:00.000",
                    "dateUtc": "2016-03-22T03:41:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T06:41:00.000",
                    "dateUtc": "2016-03-22T03:41:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T09:15:00.000",
                    "dateUtc": "2016-03-22T05:15:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T08:59:00.000",
                    "dateUtc": "2016-03-22T04:59:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T08:59:00.000",
                    "dateUtc": "2016-03-22T04:59:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T08:43:00.000",
                    "dateUtc": "2016-03-22T04:43:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T08:43:00.000",
                    "dateUtc": "2016-03-22T04:43:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AZ",
                    "flightNumber": "5247",
                    "relationship": "L"
                },
                {
                    "fsCode": "JU",
                    "flightNumber": "8806",
                    "relationship": "L"
                },
                {
                    "fsCode": "KL",
                    "flightNumber": "3066",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 5
            },
            "flightDurations": {
                "scheduledBlockMinutes": 105,
                "blockMinutes": 84,
                "airMinutes": 62,
                "taxiOutMinutes": 6,
                "taxiInMinutes": 16
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "3"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VQ-BSE"
            }
        },
        {
            "flightId": 687822695,
            "carrierFsCode": "SU",
            "flightNumber": "1210",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "KUF",
            "departureDate": {
                "dateLocal": "2016-03-22T08:00:00.000",
                "dateUtc": "2016-03-22T05:00:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T10:45:00.000",
                "dateUtc": "2016-03-22T06:45:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T08:00:00.000",
                    "dateUtc": "2016-03-22T05:00:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T10:45:00.000",
                    "dateUtc": "2016-03-22T06:45:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T08:00:00.000",
                    "dateUtc": "2016-03-22T05:00:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T07:58:00.000",
                    "dateUtc": "2016-03-22T04:58:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T07:58:00.000",
                    "dateUtc": "2016-03-22T04:58:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:15:00.000",
                    "dateUtc": "2016-03-22T05:15:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:15:00.000",
                    "dateUtc": "2016-03-22T05:15:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T10:45:00.000",
                    "dateUtc": "2016-03-22T06:45:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T10:34:00.000",
                    "dateUtc": "2016-03-22T06:34:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T10:34:00.000",
                    "dateUtc": "2016-03-22T06:34:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AF",
                    "flightNumber": "4908",
                    "relationship": "L"
                },
                {
                    "fsCode": "AZ",
                    "flightNumber": "5257",
                    "relationship": "L"
                },
                {
                    "fsCode": "KL",
                    "flightNumber": "3190",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 105,
                "blockMinutes": 96,
                "taxiOutMinutes": 17
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "3"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "73H",
                "actualEquipmentIataCode": "73H",
                "tailNumber": "VP-BCD"
            }
        },
        {
            "flightId": 687822698,
            "carrierFsCode": "SU",
            "flightNumber": "1604",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "KUF",
            "departureDate": {
                "dateLocal": "2016-03-22T10:10:00.000",
                "dateUtc": "2016-03-22T07:10:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T12:55:00.000",
                "dateUtc": "2016-03-22T08:55:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T10:10:00.000",
                    "dateUtc": "2016-03-22T07:10:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T12:55:00.000",
                    "dateUtc": "2016-03-22T08:55:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T10:10:00.000",
                    "dateUtc": "2016-03-22T07:10:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T10:02:00.000",
                    "dateUtc": "2016-03-22T07:02:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T10:02:00.000",
                    "dateUtc": "2016-03-22T07:02:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:17:00.000",
                    "dateUtc": "2016-03-22T07:17:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:17:00.000",
                    "dateUtc": "2016-03-22T07:17:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T12:55:00.000",
                    "dateUtc": "2016-03-22T08:55:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T12:31:00.000",
                    "dateUtc": "2016-03-22T08:31:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T12:31:00.000",
                    "dateUtc": "2016-03-22T08:31:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T12:15:00.000",
                    "dateUtc": "2016-03-22T08:15:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T12:15:00.000",
                    "dateUtc": "2016-03-22T08:15:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "KL",
                    "flightNumber": "2875",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 105,
                "blockMinutes": 89,
                "airMinutes": 58,
                "taxiOutMinutes": 15,
                "taxiInMinutes": 16
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "20"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VP-BKY"
            }
        },
        {
            "flightId": 687822701,
            "carrierFsCode": "SU",
            "flightNumber": "1270",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "KZN",
            "departureDate": {
                "dateLocal": "2016-03-22T06:30:00.000",
                "dateUtc": "2016-03-22T03:30:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T08:05:00.000",
                "dateUtc": "2016-03-22T05:05:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T06:30:00.000",
                    "dateUtc": "2016-03-22T03:30:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T08:05:00.000",
                    "dateUtc": "2016-03-22T05:05:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T06:30:00.000",
                    "dateUtc": "2016-03-22T03:30:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T06:32:00.000",
                    "dateUtc": "2016-03-22T03:32:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T06:32:00.000",
                    "dateUtc": "2016-03-22T03:32:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T06:59:00.000",
                    "dateUtc": "2016-03-22T03:59:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T06:59:00.000",
                    "dateUtc": "2016-03-22T03:59:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T08:05:00.000",
                    "dateUtc": "2016-03-22T05:05:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T08:10:00.000",
                    "dateUtc": "2016-03-22T05:10:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T08:10:00.000",
                    "dateUtc": "2016-03-22T05:10:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AZ",
                    "flightNumber": "5216",
                    "relationship": "L"
                },
                {
                    "fsCode": "JU",
                    "flightNumber": "8810",
                    "relationship": "L"
                },
                {
                    "fsCode": "KL",
                    "flightNumber": "3276",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 2,
                "arrivalGateDelayMinutes": 5
            },
            "flightDurations": {
                "scheduledBlockMinutes": 95,
                "blockMinutes": 98,
                "taxiOutMinutes": 27
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "1",
                "arrivalTerminal": "1"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "SU9",
                "actualEquipmentIataCode": "SU9",
                "tailNumber": "RA-89063"
            }
        },
        {
            "flightId": 687822700,
            "carrierFsCode": "SU",
            "flightNumber": "1276",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "KZN",
            "departureDate": {
                "dateLocal": "2016-03-22T08:25:00.000",
                "dateUtc": "2016-03-22T05:25:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T09:55:00.000",
                "dateUtc": "2016-03-22T06:55:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T08:25:00.000",
                    "dateUtc": "2016-03-22T05:25:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T09:55:00.000",
                    "dateUtc": "2016-03-22T06:55:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T08:25:00.000",
                    "dateUtc": "2016-03-22T05:25:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T08:27:00.000",
                    "dateUtc": "2016-03-22T05:27:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T08:27:00.000",
                    "dateUtc": "2016-03-22T05:27:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:39:00.000",
                    "dateUtc": "2016-03-22T05:39:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:39:00.000",
                    "dateUtc": "2016-03-22T05:39:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T09:55:00.000",
                    "dateUtc": "2016-03-22T06:55:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T09:47:00.000",
                    "dateUtc": "2016-03-22T06:47:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T09:47:00.000",
                    "dateUtc": "2016-03-22T06:47:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AZ",
                    "flightNumber": "5677",
                    "relationship": "L"
                },
                {
                    "fsCode": "KL",
                    "flightNumber": "3288",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 2
            },
            "flightDurations": {
                "scheduledBlockMinutes": 90,
                "blockMinutes": 80,
                "taxiOutMinutes": 12
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "2",
                "arrivalTerminal": "1"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VP-BZO"
            }
        },
        {
            "flightId": 687822702,
            "carrierFsCode": "SU",
            "flightNumber": "1190",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "KZN",
            "departureDate": {
                "dateLocal": "2016-03-22T10:00:00.000",
                "dateUtc": "2016-03-22T07:00:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T11:30:00.000",
                "dateUtc": "2016-03-22T08:30:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T10:00:00.000",
                    "dateUtc": "2016-03-22T07:00:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T11:30:00.000",
                    "dateUtc": "2016-03-22T08:30:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T10:00:00.000",
                    "dateUtc": "2016-03-22T07:00:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:54:00.000",
                    "dateUtc": "2016-03-22T06:54:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:54:00.000",
                    "dateUtc": "2016-03-22T06:54:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:05:00.000",
                    "dateUtc": "2016-03-22T07:05:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:05:00.000",
                    "dateUtc": "2016-03-22T07:05:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T11:30:00.000",
                    "dateUtc": "2016-03-22T08:30:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T11:10:00.000",
                    "dateUtc": "2016-03-22T08:10:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T11:10:00.000",
                    "dateUtc": "2016-03-22T08:10:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AF",
                    "flightNumber": "4940",
                    "relationship": "L"
                },
                {
                    "fsCode": "KL",
                    "flightNumber": "3278",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 90,
                "blockMinutes": 76,
                "taxiOutMinutes": 11
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "1",
                "arrivalTerminal": "1"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VQ-BCM"
            }
        },
        {
            "flightId": 687822706,
            "carrierFsCode": "SU",
            "flightNumber": "2072",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "LCA",
            "departureDate": {
                "dateLocal": "2016-03-22T10:35:00.000",
                "dateUtc": "2016-03-22T07:35:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T13:35:00.000",
                "dateUtc": "2016-03-22T11:35:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T10:35:00.000",
                    "dateUtc": "2016-03-22T07:35:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T13:35:00.000",
                    "dateUtc": "2016-03-22T11:35:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T10:35:00.000",
                    "dateUtc": "2016-03-22T07:35:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T10:30:00.000",
                    "dateUtc": "2016-03-22T07:30:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T10:30:00.000",
                    "dateUtc": "2016-03-22T07:30:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:40:00.000",
                    "dateUtc": "2016-03-22T07:40:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:40:00.000",
                    "dateUtc": "2016-03-22T07:40:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T13:35:00.000",
                    "dateUtc": "2016-03-22T11:35:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T13:00:00.000",
                    "dateUtc": "2016-03-22T11:00:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T13:00:00.000",
                    "dateUtc": "2016-03-22T11:00:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T12:51:00.000",
                    "dateUtc": "2016-03-22T10:51:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T12:51:00.000",
                    "dateUtc": "2016-03-22T10:51:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 240,
                "blockMinutes": 210,
                "airMinutes": 191,
                "taxiOutMinutes": 10,
                "taxiInMinutes": 9
            },
            "airportResources": {
                "departureTerminal": "E",
                "departureGate": "45"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "321",
                "actualEquipmentIataCode": "321",
                "tailNumber": "VQ-BEI"
            }
        },
        {
            "flightId": 687822716,
            "carrierFsCode": "SU",
            "flightNumber": "4",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "LED",
            "departureDate": {
                "dateLocal": "2016-03-22T06:40:00.000",
                "dateUtc": "2016-03-22T03:40:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T08:05:00.000",
                "dateUtc": "2016-03-22T05:05:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T06:40:00.000",
                    "dateUtc": "2016-03-22T03:40:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T08:05:00.000",
                    "dateUtc": "2016-03-22T05:05:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T06:40:00.000",
                    "dateUtc": "2016-03-22T03:40:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T06:55:00.000",
                    "dateUtc": "2016-03-22T03:55:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T06:55:00.000",
                    "dateUtc": "2016-03-22T03:55:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T06:56:00.000",
                    "dateUtc": "2016-03-22T03:56:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T06:56:00.000",
                    "dateUtc": "2016-03-22T03:56:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T08:05:00.000",
                    "dateUtc": "2016-03-22T05:05:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T08:04:00.000",
                    "dateUtc": "2016-03-22T05:04:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T08:04:00.000",
                    "dateUtc": "2016-03-22T05:04:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T08:04:00.000",
                    "dateUtc": "2016-03-22T05:04:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T08:04:00.000",
                    "dateUtc": "2016-03-22T05:04:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "JU",
                    "flightNumber": "8150",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 15
            },
            "flightDurations": {
                "scheduledBlockMinutes": 85,
                "blockMinutes": 69,
                "airMinutes": 68,
                "taxiOutMinutes": 1,
                "taxiInMinutes": 0
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "11",
                "arrivalTerminal": "1"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VQ-BPW"
            }
        },
        {
            "flightId": 687822721,
            "carrierFsCode": "SU",
            "flightNumber": "6",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "LED",
            "departureDate": {
                "dateLocal": "2016-03-22T07:10:00.000",
                "dateUtc": "2016-03-22T04:10:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T08:30:00.000",
                "dateUtc": "2016-03-22T05:30:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T07:10:00.000",
                    "dateUtc": "2016-03-22T04:10:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T08:30:00.000",
                    "dateUtc": "2016-03-22T05:30:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T07:10:00.000",
                    "dateUtc": "2016-03-22T04:10:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T07:06:00.000",
                    "dateUtc": "2016-03-22T04:06:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T07:06:00.000",
                    "dateUtc": "2016-03-22T04:06:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T07:32:00.000",
                    "dateUtc": "2016-03-22T04:32:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T07:32:00.000",
                    "dateUtc": "2016-03-22T04:32:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T08:30:00.000",
                    "dateUtc": "2016-03-22T05:30:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T08:39:00.000",
                    "dateUtc": "2016-03-22T05:39:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T08:39:00.000",
                    "dateUtc": "2016-03-22T05:39:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T08:35:00.000",
                    "dateUtc": "2016-03-22T05:35:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T08:35:00.000",
                    "dateUtc": "2016-03-22T05:35:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AZ",
                    "flightNumber": "5235",
                    "relationship": "L"
                }
            ],
            "delays": {
                "arrivalGateDelayMinutes": 9
            },
            "flightDurations": {
                "scheduledBlockMinutes": 80,
                "blockMinutes": 93,
                "airMinutes": 63,
                "taxiOutMinutes": 26,
                "taxiInMinutes": 4
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "14",
                "arrivalTerminal": "1"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "321",
                "actualEquipmentIataCode": "321",
                "tailNumber": "VP-BRW"
            }
        },
        {
            "flightId": 687822717,
            "carrierFsCode": "SU",
            "flightNumber": "10",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "LED",
            "departureDate": {
                "dateLocal": "2016-03-22T08:15:00.000",
                "dateUtc": "2016-03-22T05:15:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T09:40:00.000",
                "dateUtc": "2016-03-22T06:40:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T08:15:00.000",
                    "dateUtc": "2016-03-22T05:15:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T09:40:00.000",
                    "dateUtc": "2016-03-22T06:40:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T08:15:00.000",
                    "dateUtc": "2016-03-22T05:15:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T08:12:00.000",
                    "dateUtc": "2016-03-22T05:12:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T08:12:00.000",
                    "dateUtc": "2016-03-22T05:12:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:23:00.000",
                    "dateUtc": "2016-03-22T05:23:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:23:00.000",
                    "dateUtc": "2016-03-22T05:23:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T09:40:00.000",
                    "dateUtc": "2016-03-22T06:40:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T09:36:00.000",
                    "dateUtc": "2016-03-22T06:36:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T09:36:00.000",
                    "dateUtc": "2016-03-22T06:36:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T09:36:00.000",
                    "dateUtc": "2016-03-22T06:36:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T09:36:00.000",
                    "dateUtc": "2016-03-22T06:36:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "MU",
                    "flightNumber": "8173",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 85,
                "blockMinutes": 84,
                "airMinutes": 73,
                "taxiOutMinutes": 11,
                "taxiInMinutes": 0
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "15",
                "arrivalTerminal": "1"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "321",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VP-BLR"
            }
        },
        {
            "flightId": 687822722,
            "carrierFsCode": "SU",
            "flightNumber": "12",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "LED",
            "departureDate": {
                "dateLocal": "2016-03-22T09:05:00.000",
                "dateUtc": "2016-03-22T06:05:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T10:30:00.000",
                "dateUtc": "2016-03-22T07:30:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T09:05:00.000",
                    "dateUtc": "2016-03-22T06:05:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T10:30:00.000",
                    "dateUtc": "2016-03-22T07:30:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T09:05:00.000",
                    "dateUtc": "2016-03-22T06:05:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:04:00.000",
                    "dateUtc": "2016-03-22T06:04:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:04:00.000",
                    "dateUtc": "2016-03-22T06:04:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:16:00.000",
                    "dateUtc": "2016-03-22T06:16:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:16:00.000",
                    "dateUtc": "2016-03-22T06:16:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T10:30:00.000",
                    "dateUtc": "2016-03-22T07:30:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T10:26:00.000",
                    "dateUtc": "2016-03-22T07:26:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T10:26:00.000",
                    "dateUtc": "2016-03-22T07:26:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T10:26:00.000",
                    "dateUtc": "2016-03-22T07:26:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T10:26:00.000",
                    "dateUtc": "2016-03-22T07:26:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 85,
                "blockMinutes": 82,
                "airMinutes": 70,
                "taxiOutMinutes": 12,
                "taxiInMinutes": 0
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "16",
                "arrivalTerminal": "1"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "321",
                "actualEquipmentIataCode": "321",
                "tailNumber": "VP-BDC"
            }
        },
        {
            "flightId": 687822715,
            "carrierFsCode": "SU",
            "flightNumber": "14",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "LED",
            "departureDate": {
                "dateLocal": "2016-03-22T10:05:00.000",
                "dateUtc": "2016-03-22T07:05:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T11:30:00.000",
                "dateUtc": "2016-03-22T08:30:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T10:05:00.000",
                    "dateUtc": "2016-03-22T07:05:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T11:30:00.000",
                    "dateUtc": "2016-03-22T08:30:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T10:05:00.000",
                    "dateUtc": "2016-03-22T07:05:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T10:21:00.000",
                    "dateUtc": "2016-03-22T07:21:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T10:21:00.000",
                    "dateUtc": "2016-03-22T07:21:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:21:00.000",
                    "dateUtc": "2016-03-22T07:21:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:21:00.000",
                    "dateUtc": "2016-03-22T07:21:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T11:30:00.000",
                    "dateUtc": "2016-03-22T08:30:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T11:29:00.000",
                    "dateUtc": "2016-03-22T08:29:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T11:29:00.000",
                    "dateUtc": "2016-03-22T08:29:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T11:29:00.000",
                    "dateUtc": "2016-03-22T08:29:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T11:29:00.000",
                    "dateUtc": "2016-03-22T08:29:00.000Z"
                }
            },
            "delays": {
                "departureGateDelayMinutes": 16
            },
            "flightDurations": {
                "scheduledBlockMinutes": 85,
                "blockMinutes": 68,
                "airMinutes": 68,
                "taxiOutMinutes": 0,
                "taxiInMinutes": 0
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "13",
                "arrivalTerminal": "1"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VP-BZP"
            }
        },
        {
            "flightId": 687822714,
            "carrierFsCode": "SU",
            "flightNumber": "16",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "LED",
            "departureDate": {
                "dateLocal": "2016-03-22T11:10:00.000",
                "dateUtc": "2016-03-22T08:10:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T12:35:00.000",
                "dateUtc": "2016-03-22T09:35:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T11:10:00.000",
                    "dateUtc": "2016-03-22T08:10:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T12:35:00.000",
                    "dateUtc": "2016-03-22T09:35:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T11:10:00.000",
                    "dateUtc": "2016-03-22T08:10:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T11:22:00.000",
                    "dateUtc": "2016-03-22T08:22:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T11:22:00.000",
                    "dateUtc": "2016-03-22T08:22:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:22:00.000",
                    "dateUtc": "2016-03-22T08:22:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:22:00.000",
                    "dateUtc": "2016-03-22T08:22:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T12:35:00.000",
                    "dateUtc": "2016-03-22T09:35:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T12:32:00.000",
                    "dateUtc": "2016-03-22T09:32:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T12:32:00.000",
                    "dateUtc": "2016-03-22T09:32:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T12:32:00.000",
                    "dateUtc": "2016-03-22T09:32:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T12:32:00.000",
                    "dateUtc": "2016-03-22T09:32:00.000Z"
                }
            },
            "delays": {
                "departureGateDelayMinutes": 12
            },
            "flightDurations": {
                "scheduledBlockMinutes": 85,
                "blockMinutes": 70,
                "airMinutes": 70,
                "taxiOutMinutes": 0,
                "taxiInMinutes": 0
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "21",
                "arrivalTerminal": "1"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "321",
                "actualEquipmentIataCode": "321",
                "tailNumber": "VP-BOE"
            }
        },
        {
            "flightId": 687822724,
            "carrierFsCode": "SU",
            "flightNumber": "2578",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "LHR",
            "departureDate": {
                "dateLocal": "2016-03-22T10:55:00.000",
                "dateUtc": "2016-03-22T07:55:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T12:15:00.000",
                "dateUtc": "2016-03-22T12:15:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T10:55:00.000",
                    "dateUtc": "2016-03-22T07:55:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T12:15:00.000",
                    "dateUtc": "2016-03-22T12:15:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T10:55:00.000",
                    "dateUtc": "2016-03-22T07:55:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T10:51:00.000",
                    "dateUtc": "2016-03-22T07:51:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T10:51:00.000",
                    "dateUtc": "2016-03-22T07:51:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:12:00.000",
                    "dateUtc": "2016-03-22T08:12:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:12:00.000",
                    "dateUtc": "2016-03-22T08:12:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T12:15:00.000",
                    "dateUtc": "2016-03-22T12:15:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T12:06:00.000",
                    "dateUtc": "2016-03-22T12:06:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T12:06:00.000",
                    "dateUtc": "2016-03-22T12:06:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T11:52:00.000",
                    "dateUtc": "2016-03-22T11:52:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T11:52:00.000",
                    "dateUtc": "2016-03-22T11:52:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 260,
                "blockMinutes": 255,
                "airMinutes": 220,
                "taxiOutMinutes": 21,
                "taxiInMinutes": 14
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "27",
                "arrivalTerminal": "4",
                "baggage": "7B"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "321",
                "actualEquipmentIataCode": "321",
                "tailNumber": "VQ-BHM"
            }
        },
        {
            "flightId": 687822727,
            "carrierFsCode": "SU",
            "flightNumber": "2500",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "MAD",
            "departureDate": {
                "dateLocal": "2016-03-22T07:00:00.000",
                "dateUtc": "2016-03-22T04:00:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T10:10:00.000",
                "dateUtc": "2016-03-22T09:10:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T07:00:00.000",
                    "dateUtc": "2016-03-22T04:00:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T10:10:00.000",
                    "dateUtc": "2016-03-22T09:10:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T07:00:00.000",
                    "dateUtc": "2016-03-22T04:00:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T07:00:00.000",
                    "dateUtc": "2016-03-22T04:00:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T07:00:00.000",
                    "dateUtc": "2016-03-22T04:00:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T07:18:00.000",
                    "dateUtc": "2016-03-22T04:18:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T07:18:00.000",
                    "dateUtc": "2016-03-22T04:18:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T10:10:00.000",
                    "dateUtc": "2016-03-22T09:10:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T10:02:00.000",
                    "dateUtc": "2016-03-22T09:02:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T10:02:00.000",
                    "dateUtc": "2016-03-22T09:02:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T09:49:00.000",
                    "dateUtc": "2016-03-22T08:49:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T09:49:00.000",
                    "dateUtc": "2016-03-22T08:49:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "UX",
                    "flightNumber": "3286",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 310,
                "blockMinutes": 302,
                "airMinutes": 271,
                "taxiOutMinutes": 18,
                "taxiInMinutes": 13
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "34",
                "arrivalTerminal": "1",
                "baggage": "I103"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "73H",
                "actualEquipmentIataCode": "73H",
                "tailNumber": "VQ-BWF"
            }
        },
        {
            "flightId": 687822728,
            "carrierFsCode": "SU",
            "flightNumber": "110",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "MIA",
            "departureDate": {
                "dateLocal": "2016-03-22T10:45:00.000",
                "dateUtc": "2016-03-22T07:45:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T16:35:00.000",
                "dateUtc": "2016-03-22T20:35:00.000Z"
            },
            "status": "A",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T10:45:00.000",
                    "dateUtc": "2016-03-22T07:45:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T16:35:00.000",
                    "dateUtc": "2016-03-22T20:35:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T10:45:00.000",
                    "dateUtc": "2016-03-22T07:45:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T11:53:00.000",
                    "dateUtc": "2016-03-22T08:53:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T11:53:00.000",
                    "dateUtc": "2016-03-22T08:53:00.000Z"
                },
                "flightPlanPlannedDeparture": {
                    "dateLocal": "2016-03-22T10:50:00.000",
                    "dateUtc": "2016-03-22T07:50:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:59:00.000",
                    "dateUtc": "2016-03-22T08:59:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:59:00.000",
                    "dateUtc": "2016-03-22T08:59:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T16:35:00.000",
                    "dateUtc": "2016-03-22T20:35:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T17:28:00.000",
                    "dateUtc": "2016-03-22T21:28:00.000Z"
                },
                "flightPlanPlannedArrival": {
                    "dateLocal": "2016-03-22T16:07:00.000",
                    "dateUtc": "2016-03-22T20:07:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T16:48:00.000",
                    "dateUtc": "2016-03-22T20:48:00.000Z"
                }
            },
            "delays": {
                "departureGateDelayMinutes": 68,
                "departureRunwayDelayMinutes": 69,
                "arrivalGateDelayMinutes": 53,
                "arrivalRunwayDelayMinutes": 41
            },
            "flightDurations": {
                "scheduledBlockMinutes": 770,
                "scheduledAirMinutes": 737,
                "scheduledTaxiOutMinutes": 5,
                "taxiOutMinutes": 6,
                "scheduledTaxiInMinutes": 28
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "25"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "332",
                "actualEquipmentIataCode": "330",
                "tailNumber": "VQ-BBG"
            }
        },
        {
            "flightId": 687822731,
            "carrierFsCode": "SU",
            "flightNumber": "1320",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "MMK",
            "departureDate": {
                "dateLocal": "2016-03-22T07:20:00.000",
                "dateUtc": "2016-03-22T04:20:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T09:50:00.000",
                "dateUtc": "2016-03-22T06:50:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T07:20:00.000",
                    "dateUtc": "2016-03-22T04:20:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T09:50:00.000",
                    "dateUtc": "2016-03-22T06:50:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T07:20:00.000",
                    "dateUtc": "2016-03-22T04:20:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T07:30:00.000",
                    "dateUtc": "2016-03-22T04:30:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T07:30:00.000",
                    "dateUtc": "2016-03-22T04:30:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T07:41:00.000",
                    "dateUtc": "2016-03-22T04:41:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T07:41:00.000",
                    "dateUtc": "2016-03-22T04:41:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T09:50:00.000",
                    "dateUtc": "2016-03-22T06:50:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T09:59:00.000",
                    "dateUtc": "2016-03-22T06:59:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T09:59:00.000",
                    "dateUtc": "2016-03-22T06:59:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "KL",
                    "flightNumber": "2854",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 10,
                "arrivalGateDelayMinutes": 9
            },
            "flightDurations": {
                "scheduledBlockMinutes": 150,
                "blockMinutes": 149,
                "taxiOutMinutes": 11
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "13"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "SU9",
                "actualEquipmentIataCode": "SU9",
                "tailNumber": "RA-89056"
            }
        },
        {
            "flightId": 687822736,
            "carrierFsCode": "SU",
            "flightNumber": "1304",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "MRV",
            "departureDate": {
                "dateLocal": "2016-03-22T07:35:00.000",
                "dateUtc": "2016-03-22T04:35:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T09:50:00.000",
                "dateUtc": "2016-03-22T06:50:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T07:35:00.000",
                    "dateUtc": "2016-03-22T04:35:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T09:50:00.000",
                    "dateUtc": "2016-03-22T06:50:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T07:35:00.000",
                    "dateUtc": "2016-03-22T04:35:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T07:37:00.000",
                    "dateUtc": "2016-03-22T04:37:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T07:37:00.000",
                    "dateUtc": "2016-03-22T04:37:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T07:47:00.000",
                    "dateUtc": "2016-03-22T04:47:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T07:47:00.000",
                    "dateUtc": "2016-03-22T04:47:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T09:50:00.000",
                    "dateUtc": "2016-03-22T06:50:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T09:43:00.000",
                    "dateUtc": "2016-03-22T06:43:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T09:43:00.000",
                    "dateUtc": "2016-03-22T06:43:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "KL",
                    "flightNumber": "2916",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 2
            },
            "flightDurations": {
                "scheduledBlockMinutes": 135,
                "blockMinutes": 126,
                "taxiOutMinutes": 10
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "3"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VQ-BST"
            }
        },
        {
            "flightId": 687822735,
            "carrierFsCode": "SU",
            "flightNumber": "1310",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "MRV",
            "departureDate": {
                "dateLocal": "2016-03-22T09:30:00.000",
                "dateUtc": "2016-03-22T06:30:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T11:50:00.000",
                "dateUtc": "2016-03-22T08:50:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T09:30:00.000",
                    "dateUtc": "2016-03-22T06:30:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T11:50:00.000",
                    "dateUtc": "2016-03-22T08:50:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T09:30:00.000",
                    "dateUtc": "2016-03-22T06:30:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:43:00.000",
                    "dateUtc": "2016-03-22T06:43:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:43:00.000",
                    "dateUtc": "2016-03-22T06:43:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:55:00.000",
                    "dateUtc": "2016-03-22T06:55:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:55:00.000",
                    "dateUtc": "2016-03-22T06:55:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T11:50:00.000",
                    "dateUtc": "2016-03-22T08:50:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T11:49:00.000",
                    "dateUtc": "2016-03-22T08:49:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T11:49:00.000",
                    "dateUtc": "2016-03-22T08:49:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "KL",
                    "flightNumber": "2867",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 13
            },
            "flightDurations": {
                "scheduledBlockMinutes": 140,
                "blockMinutes": 126,
                "taxiOutMinutes": 12
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "19"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VP-BQP"
            }
        },
        {
            "flightId": 687822740,
            "carrierFsCode": "SU",
            "flightNumber": "1830",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "MSQ",
            "departureDate": {
                "dateLocal": "2016-03-22T09:00:00.000",
                "dateUtc": "2016-03-22T06:00:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T10:25:00.000",
                "dateUtc": "2016-03-22T07:25:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T09:00:00.000",
                    "dateUtc": "2016-03-22T06:00:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T10:25:00.000",
                    "dateUtc": "2016-03-22T07:25:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T09:00:00.000",
                    "dateUtc": "2016-03-22T06:00:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T08:56:00.000",
                    "dateUtc": "2016-03-22T05:56:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T08:56:00.000",
                    "dateUtc": "2016-03-22T05:56:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:07:00.000",
                    "dateUtc": "2016-03-22T06:07:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:07:00.000",
                    "dateUtc": "2016-03-22T06:07:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T10:25:00.000",
                    "dateUtc": "2016-03-22T07:25:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T10:17:00.000",
                    "dateUtc": "2016-03-22T07:17:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T10:17:00.000",
                    "dateUtc": "2016-03-22T07:17:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 85,
                "blockMinutes": 81,
                "taxiOutMinutes": 11
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "18",
                "arrivalGate": "5"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VP-BWD"
            }
        },
        {
            "flightId": 687822746,
            "carrierFsCode": "SU",
            "flightNumber": "2320",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "MUC",
            "departureDate": {
                "dateLocal": "2016-03-22T08:05:00.000",
                "dateUtc": "2016-03-22T05:05:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T09:15:00.000",
                "dateUtc": "2016-03-22T08:15:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T08:05:00.000",
                    "dateUtc": "2016-03-22T05:05:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T09:15:00.000",
                    "dateUtc": "2016-03-22T08:15:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T08:05:00.000",
                    "dateUtc": "2016-03-22T05:05:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T08:08:00.000",
                    "dateUtc": "2016-03-22T05:08:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T08:08:00.000",
                    "dateUtc": "2016-03-22T05:08:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:20:00.000",
                    "dateUtc": "2016-03-22T05:20:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:20:00.000",
                    "dateUtc": "2016-03-22T05:20:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T09:15:00.000",
                    "dateUtc": "2016-03-22T08:15:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T09:08:00.000",
                    "dateUtc": "2016-03-22T08:08:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T09:08:00.000",
                    "dateUtc": "2016-03-22T08:08:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T09:02:00.000",
                    "dateUtc": "2016-03-22T08:02:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T09:02:00.000",
                    "dateUtc": "2016-03-22T08:02:00.000Z"
                }
            },
            "delays": {
                "departureGateDelayMinutes": 3
            },
            "flightDurations": {
                "scheduledBlockMinutes": 190,
                "blockMinutes": 180,
                "airMinutes": 162,
                "taxiOutMinutes": 12,
                "taxiInMinutes": 6
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "6",
                "arrivalTerminal": "1"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VQ-BBC"
            }
        },
        {
            "flightId": 687822747,
            "carrierFsCode": "SU",
            "flightNumber": "2322",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "MUC",
            "departureDate": {
                "dateLocal": "2016-03-22T10:55:00.000",
                "dateUtc": "2016-03-22T07:55:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T12:10:00.000",
                "dateUtc": "2016-03-22T11:10:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T10:55:00.000",
                    "dateUtc": "2016-03-22T07:55:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T12:10:00.000",
                    "dateUtc": "2016-03-22T11:10:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T10:55:00.000",
                    "dateUtc": "2016-03-22T07:55:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T10:53:00.000",
                    "dateUtc": "2016-03-22T07:53:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T10:53:00.000",
                    "dateUtc": "2016-03-22T07:53:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:05:00.000",
                    "dateUtc": "2016-03-22T08:05:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:05:00.000",
                    "dateUtc": "2016-03-22T08:05:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T12:10:00.000",
                    "dateUtc": "2016-03-22T11:10:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T12:00:00.000",
                    "dateUtc": "2016-03-22T11:00:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T12:00:00.000",
                    "dateUtc": "2016-03-22T11:00:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T11:45:00.000",
                    "dateUtc": "2016-03-22T10:45:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T11:54:00.000",
                    "dateUtc": "2016-03-22T10:54:00.000Z"
                }
            },
            "delays": {
                "arrivalRunwayDelayMinutes": 9
            },
            "flightDurations": {
                "scheduledBlockMinutes": 195,
                "blockMinutes": 187,
                "airMinutes": 169,
                "taxiOutMinutes": 12,
                "taxiInMinutes": 6
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "23",
                "arrivalTerminal": "1"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "321",
                "actualEquipmentIataCode": "321",
                "tailNumber": "VP-BTR"
            }
        },
        {
            "flightId": 687822749,
            "carrierFsCode": "AZ",
            "flightNumber": "565",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "MXP",
            "departureDate": {
                "dateLocal": "2016-03-22T06:20:00.000",
                "dateUtc": "2016-03-22T03:20:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T08:05:00.000",
                "dateUtc": "2016-03-22T07:05:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T06:20:00.000",
                    "dateUtc": "2016-03-22T03:20:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T08:05:00.000",
                    "dateUtc": "2016-03-22T07:05:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T06:20:00.000",
                    "dateUtc": "2016-03-22T03:20:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T06:36:00.000",
                    "dateUtc": "2016-03-22T03:36:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T06:36:00.000",
                    "dateUtc": "2016-03-22T03:36:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T08:05:00.000",
                    "dateUtc": "2016-03-22T07:05:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T08:21:00.000",
                    "dateUtc": "2016-03-22T07:21:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T08:21:00.000",
                    "dateUtc": "2016-03-22T07:21:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T07:52:00.000",
                    "dateUtc": "2016-03-22T06:52:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T07:52:00.000",
                    "dateUtc": "2016-03-22T06:52:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "SU",
                    "flightNumber": "3280",
                    "relationship": "L"
                }
            ],
            "delays": {
                "arrivalGateDelayMinutes": 16
            },
            "flightDurations": {
                "scheduledBlockMinutes": 225,
                "airMinutes": 196,
                "taxiInMinutes": 29
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "32",
                "arrivalTerminal": "1",
                "baggage": "07"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "32S",
                "actualEquipmentIataCode": "320",
                "tailNumber": "EI-EID"
            }
        },
        {
            "flightId": 687822751,
            "carrierFsCode": "SU",
            "flightNumber": "2410",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "MXP",
            "departureDate": {
                "dateLocal": "2016-03-22T09:15:00.000",
                "dateUtc": "2016-03-22T06:15:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T10:55:00.000",
                "dateUtc": "2016-03-22T09:55:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T09:15:00.000",
                    "dateUtc": "2016-03-22T06:15:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T10:55:00.000",
                    "dateUtc": "2016-03-22T09:55:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T09:15:00.000",
                    "dateUtc": "2016-03-22T06:15:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:19:00.000",
                    "dateUtc": "2016-03-22T06:19:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:19:00.000",
                    "dateUtc": "2016-03-22T06:19:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:28:00.000",
                    "dateUtc": "2016-03-22T06:28:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:28:00.000",
                    "dateUtc": "2016-03-22T06:28:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T10:55:00.000",
                    "dateUtc": "2016-03-22T09:55:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T10:47:00.000",
                    "dateUtc": "2016-03-22T09:47:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T10:47:00.000",
                    "dateUtc": "2016-03-22T09:47:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T10:40:00.000",
                    "dateUtc": "2016-03-22T09:40:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T10:40:00.000",
                    "dateUtc": "2016-03-22T09:40:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AZ",
                    "flightNumber": "7013",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 4
            },
            "flightDurations": {
                "scheduledBlockMinutes": 220,
                "blockMinutes": 208,
                "airMinutes": 192,
                "taxiOutMinutes": 9,
                "taxiInMinutes": 7
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "5",
                "arrivalTerminal": "1",
                "baggage": "07"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "321",
                "actualEquipmentIataCode": "321",
                "tailNumber": "VQ-BEF"
            }
        },
        {
            "flightId": 687822755,
            "carrierFsCode": "SU",
            "flightNumber": "1254",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "NBC",
            "departureDate": {
                "dateLocal": "2016-03-22T08:30:00.000",
                "dateUtc": "2016-03-22T05:30:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T10:20:00.000",
                "dateUtc": "2016-03-22T07:20:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T08:30:00.000",
                    "dateUtc": "2016-03-22T05:30:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T10:20:00.000",
                    "dateUtc": "2016-03-22T07:20:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T08:30:00.000",
                    "dateUtc": "2016-03-22T05:30:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T08:46:00.000",
                    "dateUtc": "2016-03-22T05:46:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T08:46:00.000",
                    "dateUtc": "2016-03-22T05:46:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:46:00.000",
                    "dateUtc": "2016-03-22T05:46:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:46:00.000",
                    "dateUtc": "2016-03-22T05:46:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T10:20:00.000",
                    "dateUtc": "2016-03-22T07:20:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T10:06:00.000",
                    "dateUtc": "2016-03-22T07:06:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T10:06:00.000",
                    "dateUtc": "2016-03-22T07:06:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "KL",
                    "flightNumber": "2880",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 16
            },
            "flightDurations": {
                "scheduledBlockMinutes": 110,
                "blockMinutes": 80,
                "taxiOutMinutes": 0
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "19"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "SU9",
                "actualEquipmentIataCode": "SU9",
                "tailNumber": "RA-89052"
            }
        },
        {
            "flightId": 687822757,
            "carrierFsCode": "SU",
            "flightNumber": "2470",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "NCE",
            "departureDate": {
                "dateLocal": "2016-03-22T10:00:00.000",
                "dateUtc": "2016-03-22T07:00:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T12:00:00.000",
                "dateUtc": "2016-03-22T11:00:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T10:00:00.000",
                    "dateUtc": "2016-03-22T07:00:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T12:00:00.000",
                    "dateUtc": "2016-03-22T11:00:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T10:00:00.000",
                    "dateUtc": "2016-03-22T07:00:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:53:00.000",
                    "dateUtc": "2016-03-22T06:53:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:53:00.000",
                    "dateUtc": "2016-03-22T06:53:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:02:00.000",
                    "dateUtc": "2016-03-22T07:02:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:02:00.000",
                    "dateUtc": "2016-03-22T07:02:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T12:00:00.000",
                    "dateUtc": "2016-03-22T11:00:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T11:45:00.000",
                    "dateUtc": "2016-03-22T10:45:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T11:45:00.000",
                    "dateUtc": "2016-03-22T10:45:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T11:40:00.000",
                    "dateUtc": "2016-03-22T10:40:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T11:40:00.000",
                    "dateUtc": "2016-03-22T10:40:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 240,
                "blockMinutes": 232,
                "airMinutes": 218,
                "taxiOutMinutes": 9,
                "taxiInMinutes": 5
            },
            "airportResources": {
                "departureTerminal": "E",
                "departureGate": "33",
                "arrivalTerminal": "2"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VP-BRX"
            }
        },
        {
            "flightId": 687822759,
            "carrierFsCode": "SU",
            "flightNumber": "1470",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "NJC",
            "departureDate": {
                "dateLocal": "2016-03-22T10:50:00.000",
                "dateUtc": "2016-03-22T07:50:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T16:15:00.000",
                "dateUtc": "2016-03-22T11:15:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T10:50:00.000",
                    "dateUtc": "2016-03-22T07:50:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T16:15:00.000",
                    "dateUtc": "2016-03-22T11:15:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T10:50:00.000",
                    "dateUtc": "2016-03-22T07:50:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T15:29:00.000",
                    "dateUtc": "2016-03-22T12:29:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T15:29:00.000",
                    "dateUtc": "2016-03-22T12:29:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T15:40:00.000",
                    "dateUtc": "2016-03-22T12:40:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T15:40:00.000",
                    "dateUtc": "2016-03-22T12:40:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T16:15:00.000",
                    "dateUtc": "2016-03-22T11:15:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T20:39:00.000",
                    "dateUtc": "2016-03-22T15:39:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T20:39:00.000",
                    "dateUtc": "2016-03-22T15:39:00.000Z"
                }
            },
            "delays": {
                "departureGateDelayMinutes": 279,
                "arrivalGateDelayMinutes": 264
            },
            "flightDurations": {
                "scheduledBlockMinutes": 205,
                "blockMinutes": 190,
                "taxiOutMinutes": 11
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "2"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "321",
                "tailNumber": "VP-BQS"
            }
        },
        {
            "flightId": 687822766,
            "carrierFsCode": "SU",
            "flightNumber": "2174",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "OSL",
            "departureDate": {
                "dateLocal": "2016-03-22T11:25:00.000",
                "dateUtc": "2016-03-22T08:25:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T12:15:00.000",
                "dateUtc": "2016-03-22T11:15:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T11:25:00.000",
                    "dateUtc": "2016-03-22T08:25:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T12:15:00.000",
                    "dateUtc": "2016-03-22T11:15:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T11:25:00.000",
                    "dateUtc": "2016-03-22T08:25:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T11:29:00.000",
                    "dateUtc": "2016-03-22T08:29:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T11:29:00.000",
                    "dateUtc": "2016-03-22T08:29:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:40:00.000",
                    "dateUtc": "2016-03-22T08:40:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:40:00.000",
                    "dateUtc": "2016-03-22T08:40:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T12:15:00.000",
                    "dateUtc": "2016-03-22T11:15:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T12:13:00.000",
                    "dateUtc": "2016-03-22T11:13:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T12:13:00.000",
                    "dateUtc": "2016-03-22T11:13:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T11:56:00.000",
                    "dateUtc": "2016-03-22T10:56:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T11:56:00.000",
                    "dateUtc": "2016-03-22T10:56:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "FI",
                    "flightNumber": "7201",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 4
            },
            "flightDurations": {
                "scheduledBlockMinutes": 170,
                "blockMinutes": 164,
                "airMinutes": 136,
                "taxiOutMinutes": 11,
                "taxiInMinutes": 17
            },
            "airportResources": {
                "departureTerminal": "E",
                "departureGate": "38",
                "baggage": "9"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "321",
                "tailNumber": "VP-BWP"
            }
        },
        {
            "flightId": 687822767,
            "carrierFsCode": "SU",
            "flightNumber": "2034",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "OTP",
            "departureDate": {
                "dateLocal": "2016-03-22T09:25:00.000",
                "dateUtc": "2016-03-22T06:25:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T11:45:00.000",
                "dateUtc": "2016-03-22T09:45:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T09:25:00.000",
                    "dateUtc": "2016-03-22T06:25:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T11:45:00.000",
                    "dateUtc": "2016-03-22T09:45:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T09:25:00.000",
                    "dateUtc": "2016-03-22T06:25:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:26:00.000",
                    "dateUtc": "2016-03-22T06:26:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:26:00.000",
                    "dateUtc": "2016-03-22T06:26:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:43:00.000",
                    "dateUtc": "2016-03-22T06:43:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:43:00.000",
                    "dateUtc": "2016-03-22T06:43:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T11:45:00.000",
                    "dateUtc": "2016-03-22T09:45:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T11:36:00.000",
                    "dateUtc": "2016-03-22T09:36:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T11:36:00.000",
                    "dateUtc": "2016-03-22T09:36:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T11:31:00.000",
                    "dateUtc": "2016-03-22T09:31:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T11:31:00.000",
                    "dateUtc": "2016-03-22T09:31:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "RO",
                    "flightNumber": "9202",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 1
            },
            "flightDurations": {
                "scheduledBlockMinutes": 200,
                "blockMinutes": 190,
                "airMinutes": 168,
                "taxiOutMinutes": 17,
                "taxiInMinutes": 5
            },
            "airportResources": {
                "departureTerminal": "E",
                "departureGate": "38"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "SU9",
                "actualEquipmentIataCode": "SU9",
                "tailNumber": "RA-89014"
            }
        },
        {
            "flightId": 687822769,
            "carrierFsCode": "SU",
            "flightNumber": "1460",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "OVB",
            "departureDate": {
                "dateLocal": "2016-03-22T09:25:00.000",
                "dateUtc": "2016-03-22T06:25:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T16:25:00.000",
                "dateUtc": "2016-03-22T10:25:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T09:25:00.000",
                    "dateUtc": "2016-03-22T06:25:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T16:25:00.000",
                    "dateUtc": "2016-03-22T10:25:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T09:25:00.000",
                    "dateUtc": "2016-03-22T06:25:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:25:00.000",
                    "dateUtc": "2016-03-22T06:25:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:25:00.000",
                    "dateUtc": "2016-03-22T06:25:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:40:00.000",
                    "dateUtc": "2016-03-22T06:40:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:40:00.000",
                    "dateUtc": "2016-03-22T06:40:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T16:25:00.000",
                    "dateUtc": "2016-03-22T10:25:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T16:05:00.000",
                    "dateUtc": "2016-03-22T10:05:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T16:05:00.000",
                    "dateUtc": "2016-03-22T10:05:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AF",
                    "flightNumber": "4914",
                    "relationship": "L"
                },
                {
                    "fsCode": "AZ",
                    "flightNumber": "5253",
                    "relationship": "L"
                },
                {
                    "fsCode": "KL",
                    "flightNumber": "3225",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 240,
                "blockMinutes": 220,
                "taxiOutMinutes": 15
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "14",
                "arrivalTerminal": "A"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VP-BME"
            }
        },
        {
            "flightId": 687822773,
            "carrierFsCode": "SU",
            "flightNumber": "1200",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "PEE",
            "departureDate": {
                "dateLocal": "2016-03-22T08:15:00.000",
                "dateUtc": "2016-03-22T05:15:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T12:15:00.000",
                "dateUtc": "2016-03-22T07:15:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T08:15:00.000",
                    "dateUtc": "2016-03-22T05:15:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T12:15:00.000",
                    "dateUtc": "2016-03-22T07:15:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T08:15:00.000",
                    "dateUtc": "2016-03-22T05:15:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T08:21:00.000",
                    "dateUtc": "2016-03-22T05:21:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T08:21:00.000",
                    "dateUtc": "2016-03-22T05:21:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:45:00.000",
                    "dateUtc": "2016-03-22T05:45:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:45:00.000",
                    "dateUtc": "2016-03-22T05:45:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T12:15:00.000",
                    "dateUtc": "2016-03-22T07:15:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T12:22:00.000",
                    "dateUtc": "2016-03-22T07:22:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T12:22:00.000",
                    "dateUtc": "2016-03-22T07:22:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AF",
                    "flightNumber": "4936",
                    "relationship": "L"
                },
                {
                    "fsCode": "AZ",
                    "flightNumber": "3945",
                    "relationship": "L"
                },
                {
                    "fsCode": "KL",
                    "flightNumber": "3258",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 6,
                "arrivalGateDelayMinutes": 7
            },
            "flightDurations": {
                "scheduledBlockMinutes": 120,
                "blockMinutes": 121,
                "taxiOutMinutes": 24
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "1"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VP-BWE"
            }
        },
        {
            "flightId": 687822771,
            "carrierFsCode": "SU",
            "flightNumber": "1392",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "PEE",
            "departureDate": {
                "dateLocal": "2016-03-22T11:00:00.000",
                "dateUtc": "2016-03-22T08:00:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T15:00:00.000",
                "dateUtc": "2016-03-22T10:00:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T11:00:00.000",
                    "dateUtc": "2016-03-22T08:00:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T15:00:00.000",
                    "dateUtc": "2016-03-22T10:00:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T11:00:00.000",
                    "dateUtc": "2016-03-22T08:00:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T12:00:00.000",
                    "dateUtc": "2016-03-22T09:00:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T12:00:00.000",
                    "dateUtc": "2016-03-22T09:00:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T12:08:00.000",
                    "dateUtc": "2016-03-22T09:08:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T12:08:00.000",
                    "dateUtc": "2016-03-22T09:08:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T15:00:00.000",
                    "dateUtc": "2016-03-22T10:00:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T15:52:00.000",
                    "dateUtc": "2016-03-22T10:52:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T15:52:00.000",
                    "dateUtc": "2016-03-22T10:52:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "KL",
                    "flightNumber": "3286",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 60,
                "arrivalGateDelayMinutes": 52
            },
            "flightDurations": {
                "scheduledBlockMinutes": 120,
                "blockMinutes": 112,
                "taxiOutMinutes": 8
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "1"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "SU9",
                "actualEquipmentIataCode": "SU9",
                "tailNumber": "RA-89047"
            }
        },
        {
            "flightId": 687822777,
            "carrierFsCode": "SU",
            "flightNumber": "200",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "PEK",
            "departureDate": {
                "dateLocal": "2016-03-22T11:50:00.000",
                "dateUtc": "2016-03-22T08:50:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-23T00:30:00.000",
                "dateUtc": "2016-03-22T16:30:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T11:50:00.000",
                    "dateUtc": "2016-03-22T08:50:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-23T00:30:00.000",
                    "dateUtc": "2016-03-22T16:30:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T11:50:00.000",
                    "dateUtc": "2016-03-22T08:50:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T11:51:00.000",
                    "dateUtc": "2016-03-22T08:51:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T11:51:00.000",
                    "dateUtc": "2016-03-22T08:51:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:58:00.000",
                    "dateUtc": "2016-03-22T08:58:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:58:00.000",
                    "dateUtc": "2016-03-22T08:58:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-23T00:30:00.000",
                    "dateUtc": "2016-03-22T16:30:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-23T00:00:00.000",
                    "dateUtc": "2016-03-22T16:00:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-23T00:00:00.000",
                    "dateUtc": "2016-03-22T16:00:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T23:51:00.000",
                    "dateUtc": "2016-03-22T15:51:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T23:51:00.000",
                    "dateUtc": "2016-03-22T15:51:00.000Z"
                }
            },
            "delays": {
                "departureGateDelayMinutes": 1
            },
            "flightDurations": {
                "scheduledBlockMinutes": 460,
                "blockMinutes": 429,
                "airMinutes": 413,
                "taxiOutMinutes": 7,
                "taxiInMinutes": 9
            },
            "airportResources": {
                "departureTerminal": "F",
                "departureGate": "54",
                "arrivalTerminal": "2",
                "baggage": "01"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "333",
                "actualEquipmentIataCode": "330",
                "tailNumber": "VQ-BMX"
            }
        },
        {
            "flightId": 687822784,
            "carrierFsCode": "SU",
            "flightNumber": "2010",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "PRG",
            "departureDate": {
                "dateLocal": "2016-03-22T08:55:00.000",
                "dateUtc": "2016-03-22T05:55:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T09:45:00.000",
                "dateUtc": "2016-03-22T08:45:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T08:55:00.000",
                    "dateUtc": "2016-03-22T05:55:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T09:45:00.000",
                    "dateUtc": "2016-03-22T08:45:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T08:55:00.000",
                    "dateUtc": "2016-03-22T05:55:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T08:54:00.000",
                    "dateUtc": "2016-03-22T05:54:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T08:54:00.000",
                    "dateUtc": "2016-03-22T05:54:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:03:00.000",
                    "dateUtc": "2016-03-22T06:03:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:03:00.000",
                    "dateUtc": "2016-03-22T06:03:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T09:45:00.000",
                    "dateUtc": "2016-03-22T08:45:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T09:36:00.000",
                    "dateUtc": "2016-03-22T08:36:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T09:36:00.000",
                    "dateUtc": "2016-03-22T08:36:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T09:32:00.000",
                    "dateUtc": "2016-03-22T08:32:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T09:32:00.000",
                    "dateUtc": "2016-03-22T08:32:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "OK",
                    "flightNumber": "4893",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 170,
                "blockMinutes": 162,
                "airMinutes": 149,
                "taxiOutMinutes": 9,
                "taxiInMinutes": 4
            },
            "airportResources": {
                "departureTerminal": "E",
                "departureGate": "42",
                "arrivalTerminal": "1"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VP-BZQ"
            }
        },
        {
            "flightId": 687822785,
            "carrierFsCode": "SU",
            "flightNumber": "2012",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "PRG",
            "departureDate": {
                "dateLocal": "2016-03-22T11:35:00.000",
                "dateUtc": "2016-03-22T08:35:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T12:25:00.000",
                "dateUtc": "2016-03-22T11:25:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T11:35:00.000",
                    "dateUtc": "2016-03-22T08:35:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T12:25:00.000",
                    "dateUtc": "2016-03-22T11:25:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T11:35:00.000",
                    "dateUtc": "2016-03-22T08:35:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T11:33:00.000",
                    "dateUtc": "2016-03-22T08:33:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T11:33:00.000",
                    "dateUtc": "2016-03-22T08:33:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:45:00.000",
                    "dateUtc": "2016-03-22T08:45:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:45:00.000",
                    "dateUtc": "2016-03-22T08:45:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T12:25:00.000",
                    "dateUtc": "2016-03-22T11:25:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T12:14:00.000",
                    "dateUtc": "2016-03-22T11:14:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T12:14:00.000",
                    "dateUtc": "2016-03-22T11:14:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T12:09:00.000",
                    "dateUtc": "2016-03-22T11:09:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T12:09:00.000",
                    "dateUtc": "2016-03-22T11:09:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "OK",
                    "flightNumber": "4903",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 170,
                "blockMinutes": 161,
                "airMinutes": 144,
                "taxiOutMinutes": 12,
                "taxiInMinutes": 5
            },
            "airportResources": {
                "departureTerminal": "E",
                "departureGate": "39",
                "arrivalTerminal": "1"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "321",
                "tailNumber": "VP-BTG"
            }
        },
        {
            "flightId": 687822794,
            "carrierFsCode": "BT",
            "flightNumber": "427",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "RIX",
            "departureDate": {
                "dateLocal": "2016-03-22T06:00:00.000",
                "dateUtc": "2016-03-22T03:00:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T06:45:00.000",
                "dateUtc": "2016-03-22T04:45:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T06:00:00.000",
                    "dateUtc": "2016-03-22T03:00:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T06:45:00.000",
                    "dateUtc": "2016-03-22T04:45:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T06:00:00.000",
                    "dateUtc": "2016-03-22T03:00:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T06:21:00.000",
                    "dateUtc": "2016-03-22T03:21:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T06:21:00.000",
                    "dateUtc": "2016-03-22T03:21:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T06:45:00.000",
                    "dateUtc": "2016-03-22T04:45:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T06:45:00.000",
                    "dateUtc": "2016-03-22T04:45:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T06:45:00.000",
                    "dateUtc": "2016-03-22T04:45:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "SU",
                    "flightNumber": "3684",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 105,
                "airMinutes": 84
            },
            "airportResources": {
                "departureTerminal": "E",
                "departureGate": "37"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "735",
                "actualEquipmentIataCode": "735",
                "tailNumber": "YL-BBQ"
            }
        },
        {
            "flightId": 687822793,
            "carrierFsCode": "SU",
            "flightNumber": "2682",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "RIX",
            "departureDate": {
                "dateLocal": "2016-03-22T09:25:00.000",
                "dateUtc": "2016-03-22T06:25:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T10:05:00.000",
                "dateUtc": "2016-03-22T08:05:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T09:25:00.000",
                    "dateUtc": "2016-03-22T06:25:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T10:05:00.000",
                    "dateUtc": "2016-03-22T08:05:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T09:25:00.000",
                    "dateUtc": "2016-03-22T06:25:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:26:00.000",
                    "dateUtc": "2016-03-22T06:26:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:26:00.000",
                    "dateUtc": "2016-03-22T06:26:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:38:00.000",
                    "dateUtc": "2016-03-22T06:38:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:38:00.000",
                    "dateUtc": "2016-03-22T06:38:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T10:05:00.000",
                    "dateUtc": "2016-03-22T08:05:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T10:04:00.000",
                    "dateUtc": "2016-03-22T08:04:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T10:04:00.000",
                    "dateUtc": "2016-03-22T08:04:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T10:00:00.000",
                    "dateUtc": "2016-03-22T08:00:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T10:00:00.000",
                    "dateUtc": "2016-03-22T08:00:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "BT",
                    "flightNumber": "7425",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 1
            },
            "flightDurations": {
                "scheduledBlockMinutes": 100,
                "blockMinutes": 98,
                "airMinutes": 82,
                "taxiOutMinutes": 12,
                "taxiInMinutes": 4
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "6"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VQ-BHL"
            }
        },
        {
            "flightId": 687822795,
            "carrierFsCode": "BT",
            "flightNumber": "425",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "RIX",
            "departureDate": {
                "dateLocal": "2016-03-22T11:00:00.000",
                "dateUtc": "2016-03-22T08:00:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T11:45:00.000",
                "dateUtc": "2016-03-22T09:45:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T11:00:00.000",
                    "dateUtc": "2016-03-22T08:00:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T11:45:00.000",
                    "dateUtc": "2016-03-22T09:45:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T11:00:00.000",
                    "dateUtc": "2016-03-22T08:00:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:08:00.000",
                    "dateUtc": "2016-03-22T08:08:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:08:00.000",
                    "dateUtc": "2016-03-22T08:08:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T11:45:00.000",
                    "dateUtc": "2016-03-22T09:45:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T11:32:00.000",
                    "dateUtc": "2016-03-22T09:32:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T11:32:00.000",
                    "dateUtc": "2016-03-22T09:32:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "SU",
                    "flightNumber": "3680",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 105,
                "airMinutes": 84
            },
            "airportResources": {
                "departureTerminal": "E",
                "departureGate": "37"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "735",
                "actualEquipmentIataCode": "735",
                "tailNumber": "YL-BBE"
            }
        },
        {
            "flightId": 687822802,
            "carrierFsCode": "SU",
            "flightNumber": "1158",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "ROV",
            "departureDate": {
                "dateLocal": "2016-03-22T07:30:00.000",
                "dateUtc": "2016-03-22T04:30:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T09:30:00.000",
                "dateUtc": "2016-03-22T06:30:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T07:30:00.000",
                    "dateUtc": "2016-03-22T04:30:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T09:30:00.000",
                    "dateUtc": "2016-03-22T06:30:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T07:30:00.000",
                    "dateUtc": "2016-03-22T04:30:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T07:32:00.000",
                    "dateUtc": "2016-03-22T04:32:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T07:32:00.000",
                    "dateUtc": "2016-03-22T04:32:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T07:53:00.000",
                    "dateUtc": "2016-03-22T04:53:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T07:53:00.000",
                    "dateUtc": "2016-03-22T04:53:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T09:30:00.000",
                    "dateUtc": "2016-03-22T06:30:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T09:33:00.000",
                    "dateUtc": "2016-03-22T06:33:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T09:33:00.000",
                    "dateUtc": "2016-03-22T06:33:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "KL",
                    "flightNumber": "3281",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 2,
                "arrivalGateDelayMinutes": 3
            },
            "flightDurations": {
                "scheduledBlockMinutes": 120,
                "blockMinutes": 121,
                "taxiOutMinutes": 21
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "19"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VQ-BIV"
            }
        },
        {
            "flightId": 687822800,
            "carrierFsCode": "SU",
            "flightNumber": "1156",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "ROV",
            "departureDate": {
                "dateLocal": "2016-03-22T09:40:00.000",
                "dateUtc": "2016-03-22T06:40:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T11:35:00.000",
                "dateUtc": "2016-03-22T08:35:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T09:40:00.000",
                    "dateUtc": "2016-03-22T06:40:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T11:35:00.000",
                    "dateUtc": "2016-03-22T08:35:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T09:40:00.000",
                    "dateUtc": "2016-03-22T06:40:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:39:00.000",
                    "dateUtc": "2016-03-22T06:39:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:39:00.000",
                    "dateUtc": "2016-03-22T06:39:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:00:00.000",
                    "dateUtc": "2016-03-22T07:00:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:00:00.000",
                    "dateUtc": "2016-03-22T07:00:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T11:35:00.000",
                    "dateUtc": "2016-03-22T08:35:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T11:39:00.000",
                    "dateUtc": "2016-03-22T08:39:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T11:39:00.000",
                    "dateUtc": "2016-03-22T08:39:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "KL",
                    "flightNumber": "2904",
                    "relationship": "L"
                },
                {
                    "fsCode": "KL",
                    "flightNumber": "2900",
                    "relationship": "L"
                }
            ],
            "delays": {
                "arrivalGateDelayMinutes": 4
            },
            "flightDurations": {
                "scheduledBlockMinutes": 115,
                "blockMinutes": 120,
                "taxiOutMinutes": 21
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "3"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VQ-BAZ"
            }
        },
        {
            "flightId": 687822806,
            "carrierFsCode": "SU",
            "flightNumber": "1360",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "RTW",
            "departureDate": {
                "dateLocal": "2016-03-22T09:35:00.000",
                "dateUtc": "2016-03-22T06:35:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T11:10:00.000",
                "dateUtc": "2016-03-22T08:10:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T09:35:00.000",
                    "dateUtc": "2016-03-22T06:35:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T11:10:00.000",
                    "dateUtc": "2016-03-22T08:10:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T09:35:00.000",
                    "dateUtc": "2016-03-22T06:35:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:58:00.000",
                    "dateUtc": "2016-03-22T06:58:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:58:00.000",
                    "dateUtc": "2016-03-22T06:58:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:59:00.000",
                    "dateUtc": "2016-03-22T06:59:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:59:00.000",
                    "dateUtc": "2016-03-22T06:59:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T11:10:00.000",
                    "dateUtc": "2016-03-22T08:10:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T11:08:00.000",
                    "dateUtc": "2016-03-22T08:08:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T11:08:00.000",
                    "dateUtc": "2016-03-22T08:08:00.000Z"
                }
            },
            "delays": {
                "departureGateDelayMinutes": 23
            },
            "flightDurations": {
                "scheduledBlockMinutes": 95,
                "blockMinutes": 70,
                "taxiOutMinutes": 1
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "1"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "SU9",
                "actualEquipmentIataCode": "SU9",
                "tailNumber": "RA-89028"
            }
        },
        {
            "flightId": 687822812,
            "carrierFsCode": "SU",
            "flightNumber": "1636",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "SIP",
            "departureDate": {
                "dateLocal": "2016-03-22T07:35:00.000",
                "dateUtc": "2016-03-22T04:35:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T10:15:00.000",
                "dateUtc": "2016-03-22T08:15:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T07:35:00.000",
                    "dateUtc": "2016-03-22T04:35:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T10:15:00.000",
                    "dateUtc": "2016-03-22T08:15:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T07:35:00.000",
                    "dateUtc": "2016-03-22T04:35:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T08:14:00.000",
                    "dateUtc": "2016-03-22T05:14:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T08:14:00.000",
                    "dateUtc": "2016-03-22T05:14:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:14:00.000",
                    "dateUtc": "2016-03-22T05:14:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:14:00.000",
                    "dateUtc": "2016-03-22T05:14:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T10:15:00.000",
                    "dateUtc": "2016-03-22T08:15:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T09:17:00.000",
                    "dateUtc": "2016-03-22T07:17:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T09:17:00.000",
                    "dateUtc": "2016-03-22T07:17:00.000Z"
                }
            },
            "delays": {
                "departureGateDelayMinutes": 39
            },
            "flightDurations": {
                "scheduledBlockMinutes": 220,
                "blockMinutes": 123,
                "taxiOutMinutes": 0
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "1",
                "arrivalTerminal": "A"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VP-BWF"
            }
        },
        {
            "flightId": 687822809,
            "carrierFsCode": "SU",
            "flightNumber": "1620",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "SIP",
            "departureDate": {
                "dateLocal": "2016-03-22T09:40:00.000",
                "dateUtc": "2016-03-22T06:40:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T12:25:00.000",
                "dateUtc": "2016-03-22T10:25:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T09:40:00.000",
                    "dateUtc": "2016-03-22T06:40:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T12:25:00.000",
                    "dateUtc": "2016-03-22T10:25:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T09:40:00.000",
                    "dateUtc": "2016-03-22T06:40:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:40:00.000",
                    "dateUtc": "2016-03-22T06:40:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:40:00.000",
                    "dateUtc": "2016-03-22T06:40:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:53:00.000",
                    "dateUtc": "2016-03-22T06:53:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:53:00.000",
                    "dateUtc": "2016-03-22T06:53:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T12:25:00.000",
                    "dateUtc": "2016-03-22T10:25:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T12:07:00.000",
                    "dateUtc": "2016-03-22T10:07:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T12:07:00.000",
                    "dateUtc": "2016-03-22T10:07:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 225,
                "blockMinutes": 207,
                "taxiOutMinutes": 13
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "17",
                "arrivalTerminal": "A"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "73H",
                "actualEquipmentIataCode": "321",
                "tailNumber": "VQ-BEG"
            }
        },
        {
            "flightId": 687822814,
            "carrierFsCode": "SU",
            "flightNumber": "2060",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "SOF",
            "departureDate": {
                "dateLocal": "2016-03-22T10:05:00.000",
                "dateUtc": "2016-03-22T07:05:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T12:25:00.000",
                "dateUtc": "2016-03-22T10:25:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T10:05:00.000",
                    "dateUtc": "2016-03-22T07:05:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T12:25:00.000",
                    "dateUtc": "2016-03-22T10:25:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T10:05:00.000",
                    "dateUtc": "2016-03-22T07:05:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:55:00.000",
                    "dateUtc": "2016-03-22T06:55:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:55:00.000",
                    "dateUtc": "2016-03-22T06:55:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:12:00.000",
                    "dateUtc": "2016-03-22T07:12:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:12:00.000",
                    "dateUtc": "2016-03-22T07:12:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T12:25:00.000",
                    "dateUtc": "2016-03-22T10:25:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T12:13:00.000",
                    "dateUtc": "2016-03-22T10:13:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T12:13:00.000",
                    "dateUtc": "2016-03-22T10:13:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T12:06:00.000",
                    "dateUtc": "2016-03-22T10:06:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T12:06:00.000",
                    "dateUtc": "2016-03-22T10:06:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 200,
                "blockMinutes": 198,
                "airMinutes": 174,
                "taxiOutMinutes": 17,
                "taxiInMinutes": 7
            },
            "airportResources": {
                "departureTerminal": "F",
                "departureGate": "53",
                "arrivalTerminal": "2"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VQ-BSI"
            }
        },
        {
            "flightId": 687822815,
            "carrierFsCode": "SU",
            "flightNumber": "2336",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "STR",
            "departureDate": {
                "dateLocal": "2016-03-22T09:30:00.000",
                "dateUtc": "2016-03-22T06:30:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T10:55:00.000",
                "dateUtc": "2016-03-22T09:55:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T09:30:00.000",
                    "dateUtc": "2016-03-22T06:30:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T10:55:00.000",
                    "dateUtc": "2016-03-22T09:55:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T09:30:00.000",
                    "dateUtc": "2016-03-22T06:30:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:34:00.000",
                    "dateUtc": "2016-03-22T06:34:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:34:00.000",
                    "dateUtc": "2016-03-22T06:34:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:49:00.000",
                    "dateUtc": "2016-03-22T06:49:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:49:00.000",
                    "dateUtc": "2016-03-22T06:49:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T10:55:00.000",
                    "dateUtc": "2016-03-22T09:55:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T10:50:00.000",
                    "dateUtc": "2016-03-22T09:50:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T10:50:00.000",
                    "dateUtc": "2016-03-22T09:50:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T10:40:00.000",
                    "dateUtc": "2016-03-22T09:40:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T10:40:00.000",
                    "dateUtc": "2016-03-22T09:40:00.000Z"
                }
            },
            "delays": {
                "departureGateDelayMinutes": 4
            },
            "flightDurations": {
                "scheduledBlockMinutes": 205,
                "blockMinutes": 196,
                "airMinutes": 171,
                "taxiOutMinutes": 15,
                "taxiInMinutes": 10
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "7",
                "arrivalTerminal": "1"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VQ-BEH"
            }
        },
        {
            "flightId": 687822816,
            "carrierFsCode": "SU",
            "flightNumber": "1314",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "STW",
            "departureDate": {
                "dateLocal": "2016-03-22T10:40:00.000",
                "dateUtc": "2016-03-22T07:40:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T12:55:00.000",
                "dateUtc": "2016-03-22T09:55:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T10:40:00.000",
                    "dateUtc": "2016-03-22T07:40:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T12:55:00.000",
                    "dateUtc": "2016-03-22T09:55:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T10:40:00.000",
                    "dateUtc": "2016-03-22T07:40:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T10:38:00.000",
                    "dateUtc": "2016-03-22T07:38:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T10:38:00.000",
                    "dateUtc": "2016-03-22T07:38:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:49:00.000",
                    "dateUtc": "2016-03-22T07:49:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:49:00.000",
                    "dateUtc": "2016-03-22T07:49:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T12:55:00.000",
                    "dateUtc": "2016-03-22T09:55:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T12:35:00.000",
                    "dateUtc": "2016-03-22T09:35:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T12:35:00.000",
                    "dateUtc": "2016-03-22T09:35:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 135,
                "blockMinutes": 117,
                "taxiOutMinutes": 11
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "16"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VQ-BKT"
            }
        },
        {
            "flightId": 687822820,
            "carrierFsCode": "SU",
            "flightNumber": "1410",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "SVX",
            "departureDate": {
                "dateLocal": "2016-03-22T06:55:00.000",
                "dateUtc": "2016-03-22T03:55:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T11:20:00.000",
                "dateUtc": "2016-03-22T06:20:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T06:55:00.000",
                    "dateUtc": "2016-03-22T03:55:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T11:20:00.000",
                    "dateUtc": "2016-03-22T06:20:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T06:55:00.000",
                    "dateUtc": "2016-03-22T03:55:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T06:55:00.000",
                    "dateUtc": "2016-03-22T03:55:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T06:55:00.000",
                    "dateUtc": "2016-03-22T03:55:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T07:09:00.000",
                    "dateUtc": "2016-03-22T04:09:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T07:09:00.000",
                    "dateUtc": "2016-03-22T04:09:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T11:20:00.000",
                    "dateUtc": "2016-03-22T06:20:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T11:05:00.000",
                    "dateUtc": "2016-03-22T06:05:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T11:05:00.000",
                    "dateUtc": "2016-03-22T06:05:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T11:01:00.000",
                    "dateUtc": "2016-03-22T06:01:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T11:01:00.000",
                    "dateUtc": "2016-03-22T06:01:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AF",
                    "flightNumber": "4902",
                    "relationship": "L"
                },
                {
                    "fsCode": "AZ",
                    "flightNumber": "3021",
                    "relationship": "L"
                },
                {
                    "fsCode": "KL",
                    "flightNumber": "3200",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 145,
                "blockMinutes": 130,
                "airMinutes": 112,
                "taxiOutMinutes": 14,
                "taxiInMinutes": 4
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "21"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VP-BID"
            }
        },
        {
            "flightId": 687822819,
            "carrierFsCode": "SU",
            "flightNumber": "1412",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "SVX",
            "departureDate": {
                "dateLocal": "2016-03-22T09:20:00.000",
                "dateUtc": "2016-03-22T06:20:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T13:40:00.000",
                "dateUtc": "2016-03-22T08:40:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T09:20:00.000",
                    "dateUtc": "2016-03-22T06:20:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T13:40:00.000",
                    "dateUtc": "2016-03-22T08:40:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T09:20:00.000",
                    "dateUtc": "2016-03-22T06:20:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:38:00.000",
                    "dateUtc": "2016-03-22T06:38:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:38:00.000",
                    "dateUtc": "2016-03-22T06:38:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:38:00.000",
                    "dateUtc": "2016-03-22T06:38:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:38:00.000",
                    "dateUtc": "2016-03-22T06:38:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T13:40:00.000",
                    "dateUtc": "2016-03-22T08:40:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T13:28:00.000",
                    "dateUtc": "2016-03-22T08:28:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T13:28:00.000",
                    "dateUtc": "2016-03-22T08:28:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T13:27:00.000",
                    "dateUtc": "2016-03-22T08:27:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T13:27:00.000",
                    "dateUtc": "2016-03-22T08:27:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "KL",
                    "flightNumber": "2906",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 18
            },
            "flightDurations": {
                "scheduledBlockMinutes": 140,
                "blockMinutes": 110,
                "airMinutes": 109,
                "taxiOutMinutes": 0,
                "taxiInMinutes": 1
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "11"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "321",
                "actualEquipmentIataCode": "321",
                "tailNumber": "VP-BRH"
            }
        },
        {
            "flightId": 687822824,
            "carrierFsCode": "SU",
            "flightNumber": "2684",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "SXF",
            "departureDate": {
                "dateLocal": "2016-03-22T08:20:00.000",
                "dateUtc": "2016-03-22T05:20:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T09:05:00.000",
                "dateUtc": "2016-03-22T08:05:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T08:20:00.000",
                    "dateUtc": "2016-03-22T05:20:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T09:05:00.000",
                    "dateUtc": "2016-03-22T08:05:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T08:20:00.000",
                    "dateUtc": "2016-03-22T05:20:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T08:15:00.000",
                    "dateUtc": "2016-03-22T05:15:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T08:15:00.000",
                    "dateUtc": "2016-03-22T05:15:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:31:00.000",
                    "dateUtc": "2016-03-22T05:31:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:31:00.000",
                    "dateUtc": "2016-03-22T05:31:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T09:05:00.000",
                    "dateUtc": "2016-03-22T08:05:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T09:00:00.000",
                    "dateUtc": "2016-03-22T08:00:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T09:00:00.000",
                    "dateUtc": "2016-03-22T08:00:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T08:48:00.000",
                    "dateUtc": "2016-03-22T07:48:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 165,
                "blockMinutes": 165,
                "taxiOutMinutes": 16
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "27",
                "arrivalTerminal": "A"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VQ-BAX"
            }
        },
        {
            "flightId": 687822828,
            "carrierFsCode": "SU",
            "flightNumber": "2312",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "SXF",
            "departureDate": {
                "dateLocal": "2016-03-22T10:15:00.000",
                "dateUtc": "2016-03-22T07:15:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T11:00:00.000",
                "dateUtc": "2016-03-22T10:00:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T10:15:00.000",
                    "dateUtc": "2016-03-22T07:15:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T11:00:00.000",
                    "dateUtc": "2016-03-22T10:00:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T10:15:00.000",
                    "dateUtc": "2016-03-22T07:15:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T10:13:00.000",
                    "dateUtc": "2016-03-22T07:13:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T10:13:00.000",
                    "dateUtc": "2016-03-22T07:13:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:24:00.000",
                    "dateUtc": "2016-03-22T07:24:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:24:00.000",
                    "dateUtc": "2016-03-22T07:24:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T11:00:00.000",
                    "dateUtc": "2016-03-22T10:00:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T10:54:00.000",
                    "dateUtc": "2016-03-22T09:54:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T10:54:00.000",
                    "dateUtc": "2016-03-22T09:54:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T10:46:00.000",
                    "dateUtc": "2016-03-22T09:46:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T10:46:00.000",
                    "dateUtc": "2016-03-22T09:46:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 165,
                "blockMinutes": 161,
                "airMinutes": 142,
                "taxiOutMinutes": 11,
                "taxiInMinutes": 8
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "24",
                "arrivalTerminal": "A"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VP-BKC"
            }
        },
        {
            "flightId": 687822832,
            "carrierFsCode": "SU",
            "flightNumber": "2050",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "TIV",
            "departureDate": {
                "dateLocal": "2016-03-22T10:40:00.000",
                "dateUtc": "2016-03-22T07:40:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T12:00:00.000",
                "dateUtc": "2016-03-22T11:00:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T10:40:00.000",
                    "dateUtc": "2016-03-22T07:40:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T12:00:00.000",
                    "dateUtc": "2016-03-22T11:00:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T10:40:00.000",
                    "dateUtc": "2016-03-22T07:40:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T12:06:00.000",
                    "dateUtc": "2016-03-22T09:06:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T12:06:00.000",
                    "dateUtc": "2016-03-22T09:06:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T12:18:00.000",
                    "dateUtc": "2016-03-22T09:18:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T12:18:00.000",
                    "dateUtc": "2016-03-22T09:18:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T12:00:00.000",
                    "dateUtc": "2016-03-22T11:00:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T13:24:00.000",
                    "dateUtc": "2016-03-22T12:24:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T13:24:00.000",
                    "dateUtc": "2016-03-22T12:24:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T13:16:00.000",
                    "dateUtc": "2016-03-22T12:16:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T13:16:00.000",
                    "dateUtc": "2016-03-22T12:16:00.000Z"
                }
            },
            "delays": {
                "departureGateDelayMinutes": 86,
                "arrivalGateDelayMinutes": 84
            },
            "flightDurations": {
                "scheduledBlockMinutes": 200,
                "blockMinutes": 198,
                "airMinutes": 178,
                "taxiOutMinutes": 12,
                "taxiInMinutes": 8
            },
            "airportResources": {
                "departureTerminal": "E",
                "departureGate": "41"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "SU9",
                "actualEquipmentIataCode": "SU9",
                "tailNumber": "RA-89027"
            }
        },
        {
            "flightId": 687822833,
            "carrierFsCode": "SU",
            "flightNumber": "1500",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "TJM",
            "departureDate": {
                "dateLocal": "2016-03-22T09:45:00.000",
                "dateUtc": "2016-03-22T06:45:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T14:30:00.000",
                "dateUtc": "2016-03-22T09:30:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T09:45:00.000",
                    "dateUtc": "2016-03-22T06:45:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T14:30:00.000",
                    "dateUtc": "2016-03-22T09:30:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T09:45:00.000",
                    "dateUtc": "2016-03-22T06:45:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:59:00.000",
                    "dateUtc": "2016-03-22T06:59:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:59:00.000",
                    "dateUtc": "2016-03-22T06:59:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:10:00.000",
                    "dateUtc": "2016-03-22T07:10:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:10:00.000",
                    "dateUtc": "2016-03-22T07:10:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T14:30:00.000",
                    "dateUtc": "2016-03-22T09:30:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T14:33:00.000",
                    "dateUtc": "2016-03-22T09:33:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T14:33:00.000",
                    "dateUtc": "2016-03-22T09:33:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T14:24:00.000",
                    "dateUtc": "2016-03-22T09:24:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T14:24:00.000",
                    "dateUtc": "2016-03-22T09:24:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AF",
                    "flightNumber": "4852",
                    "relationship": "L"
                },
                {
                    "fsCode": "AZ",
                    "flightNumber": "5255",
                    "relationship": "L"
                },
                {
                    "fsCode": "KL",
                    "flightNumber": "2885",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 14,
                "arrivalGateDelayMinutes": 3
            },
            "flightDurations": {
                "scheduledBlockMinutes": 165,
                "blockMinutes": 154,
                "airMinutes": 134,
                "taxiOutMinutes": 11,
                "taxiInMinutes": 9
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "21"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "SU9",
                "actualEquipmentIataCode": "SU9",
                "tailNumber": "RA-89057"
            }
        },
        {
            "flightId": 687822836,
            "carrierFsCode": "SU",
            "flightNumber": "2106",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "TLL",
            "departureDate": {
                "dateLocal": "2016-03-22T09:15:00.000",
                "dateUtc": "2016-03-22T06:15:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T10:00:00.000",
                "dateUtc": "2016-03-22T08:00:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T09:15:00.000",
                    "dateUtc": "2016-03-22T06:15:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T10:00:00.000",
                    "dateUtc": "2016-03-22T08:00:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T09:15:00.000",
                    "dateUtc": "2016-03-22T06:15:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:13:00.000",
                    "dateUtc": "2016-03-22T06:13:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:13:00.000",
                    "dateUtc": "2016-03-22T06:13:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:33:00.000",
                    "dateUtc": "2016-03-22T06:33:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:33:00.000",
                    "dateUtc": "2016-03-22T06:33:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T10:00:00.000",
                    "dateUtc": "2016-03-22T08:00:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T10:06:00.000",
                    "dateUtc": "2016-03-22T08:06:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T10:06:00.000",
                    "dateUtc": "2016-03-22T08:06:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T10:06:00.000",
                    "dateUtc": "2016-03-22T08:06:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T10:06:00.000",
                    "dateUtc": "2016-03-22T08:06:00.000Z"
                }
            },
            "delays": {
                "arrivalGateDelayMinutes": 6
            },
            "flightDurations": {
                "scheduledBlockMinutes": 105,
                "blockMinutes": 113,
                "airMinutes": 93,
                "taxiOutMinutes": 20,
                "taxiInMinutes": 0
            },
            "airportResources": {
                "departureTerminal": "E",
                "departureGate": "39"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VQ-BIW"
            }
        },
        {
            "flightId": 687822841,
            "carrierFsCode": "SU",
            "flightNumber": "506",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "TLV",
            "departureDate": {
                "dateLocal": "2016-03-22T07:10:00.000",
                "dateUtc": "2016-03-22T04:10:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T10:30:00.000",
                "dateUtc": "2016-03-22T08:30:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T07:10:00.000",
                    "dateUtc": "2016-03-22T04:10:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T10:30:00.000",
                    "dateUtc": "2016-03-22T08:30:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T07:10:00.000",
                    "dateUtc": "2016-03-22T04:10:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T07:01:00.000",
                    "dateUtc": "2016-03-22T04:01:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T07:01:00.000",
                    "dateUtc": "2016-03-22T04:01:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T07:28:00.000",
                    "dateUtc": "2016-03-22T04:28:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T07:28:00.000",
                    "dateUtc": "2016-03-22T04:28:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T10:30:00.000",
                    "dateUtc": "2016-03-22T08:30:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T10:15:00.000",
                    "dateUtc": "2016-03-22T08:15:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T10:15:00.000",
                    "dateUtc": "2016-03-22T08:15:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T10:11:00.000",
                    "dateUtc": "2016-03-22T08:11:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T10:11:00.000",
                    "dateUtc": "2016-03-22T08:11:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 260,
                "blockMinutes": 254,
                "airMinutes": 223,
                "taxiOutMinutes": 27,
                "taxiInMinutes": 4
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "25",
                "arrivalTerminal": "3"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VQ-BEJ"
            }
        },
        {
            "flightId": 687822839,
            "carrierFsCode": "SU",
            "flightNumber": "502",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "TLV",
            "departureDate": {
                "dateLocal": "2016-03-22T08:35:00.000",
                "dateUtc": "2016-03-22T05:35:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T11:45:00.000",
                "dateUtc": "2016-03-22T09:45:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T08:35:00.000",
                    "dateUtc": "2016-03-22T05:35:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T11:45:00.000",
                    "dateUtc": "2016-03-22T09:45:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T08:35:00.000",
                    "dateUtc": "2016-03-22T05:35:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T08:35:00.000",
                    "dateUtc": "2016-03-22T05:35:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T08:35:00.000",
                    "dateUtc": "2016-03-22T05:35:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:58:00.000",
                    "dateUtc": "2016-03-22T05:58:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:58:00.000",
                    "dateUtc": "2016-03-22T05:58:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T11:45:00.000",
                    "dateUtc": "2016-03-22T09:45:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T11:33:00.000",
                    "dateUtc": "2016-03-22T09:33:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T11:33:00.000",
                    "dateUtc": "2016-03-22T09:33:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T11:30:00.000",
                    "dateUtc": "2016-03-22T09:30:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T11:30:00.000",
                    "dateUtc": "2016-03-22T09:30:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 250,
                "blockMinutes": 238,
                "airMinutes": 212,
                "taxiOutMinutes": 23,
                "taxiInMinutes": 3
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "22",
                "arrivalTerminal": "3"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "77W",
                "tailNumber": "VQ-BQE"
            }
        },
        {
            "flightId": 687822842,
            "carrierFsCode": "SU",
            "flightNumber": "508",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "TLV",
            "departureDate": {
                "dateLocal": "2016-03-22T11:15:00.000",
                "dateUtc": "2016-03-22T08:15:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T14:25:00.000",
                "dateUtc": "2016-03-22T12:25:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T11:15:00.000",
                    "dateUtc": "2016-03-22T08:15:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T14:25:00.000",
                    "dateUtc": "2016-03-22T12:25:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T11:15:00.000",
                    "dateUtc": "2016-03-22T08:15:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T11:21:00.000",
                    "dateUtc": "2016-03-22T08:21:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T11:21:00.000",
                    "dateUtc": "2016-03-22T08:21:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:33:00.000",
                    "dateUtc": "2016-03-22T08:33:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:33:00.000",
                    "dateUtc": "2016-03-22T08:33:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T14:25:00.000",
                    "dateUtc": "2016-03-22T12:25:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T14:20:00.000",
                    "dateUtc": "2016-03-22T12:20:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T14:20:00.000",
                    "dateUtc": "2016-03-22T12:20:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T14:15:00.000",
                    "dateUtc": "2016-03-22T12:15:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T14:15:00.000",
                    "dateUtc": "2016-03-22T12:15:00.000Z"
                }
            },
            "delays": {
                "departureGateDelayMinutes": 6
            },
            "flightDurations": {
                "scheduledBlockMinutes": 250,
                "blockMinutes": 239,
                "airMinutes": 222,
                "taxiOutMinutes": 12,
                "taxiInMinutes": 5
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "32",
                "arrivalTerminal": "3"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "73H",
                "tailNumber": "VQ-BWB"
            }
        },
        {
            "flightId": 687822850,
            "carrierFsCode": "SU",
            "flightNumber": "1230",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "UFA",
            "departureDate": {
                "dateLocal": "2016-03-22T08:00:00.000",
                "dateUtc": "2016-03-22T05:00:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T12:00:00.000",
                "dateUtc": "2016-03-22T07:00:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T08:00:00.000",
                    "dateUtc": "2016-03-22T05:00:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T12:00:00.000",
                    "dateUtc": "2016-03-22T07:00:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T08:00:00.000",
                    "dateUtc": "2016-03-22T05:00:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T07:59:00.000",
                    "dateUtc": "2016-03-22T04:59:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T07:59:00.000",
                    "dateUtc": "2016-03-22T04:59:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:17:00.000",
                    "dateUtc": "2016-03-22T05:17:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T08:17:00.000",
                    "dateUtc": "2016-03-22T05:17:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T12:00:00.000",
                    "dateUtc": "2016-03-22T07:00:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T11:56:00.000",
                    "dateUtc": "2016-03-22T06:56:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T11:56:00.000",
                    "dateUtc": "2016-03-22T06:56:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AF",
                    "flightNumber": "4962",
                    "relationship": "L"
                },
                {
                    "fsCode": "AZ",
                    "flightNumber": "3959",
                    "relationship": "L"
                },
                {
                    "fsCode": "KL",
                    "flightNumber": "3264",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 120,
                "blockMinutes": 117,
                "taxiOutMinutes": 18
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "2"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VP-BLH"
            }
        },
        {
            "flightId": 687822854,
            "carrierFsCode": "SU",
            "flightNumber": "2596",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "VCE",
            "departureDate": {
                "dateLocal": "2016-03-22T10:10:00.000",
                "dateUtc": "2016-03-22T07:10:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T11:35:00.000",
                "dateUtc": "2016-03-22T10:35:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T10:10:00.000",
                    "dateUtc": "2016-03-22T07:10:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T11:35:00.000",
                    "dateUtc": "2016-03-22T10:35:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T10:10:00.000",
                    "dateUtc": "2016-03-22T07:10:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T10:09:00.000",
                    "dateUtc": "2016-03-22T07:09:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T10:09:00.000",
                    "dateUtc": "2016-03-22T07:09:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:22:00.000",
                    "dateUtc": "2016-03-22T07:22:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T10:22:00.000",
                    "dateUtc": "2016-03-22T07:22:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T11:35:00.000",
                    "dateUtc": "2016-03-22T10:35:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T11:36:00.000",
                    "dateUtc": "2016-03-22T10:36:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T11:36:00.000",
                    "dateUtc": "2016-03-22T10:36:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T11:29:00.000",
                    "dateUtc": "2016-03-22T10:29:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T11:29:00.000",
                    "dateUtc": "2016-03-22T10:29:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AZ",
                    "flightNumber": "7181",
                    "relationship": "L"
                }
            ],
            "delays": {
                "arrivalGateDelayMinutes": 1
            },
            "flightDurations": {
                "scheduledBlockMinutes": 205,
                "blockMinutes": 207,
                "airMinutes": 187,
                "taxiOutMinutes": 13,
                "taxiInMinutes": 7
            },
            "airportResources": {
                "departureTerminal": "E",
                "departureGate": "48",
                "baggage": "4"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VQ-BSH"
            }
        },
        {
            "flightId": 687822856,
            "carrierFsCode": "SU",
            "flightNumber": "2184",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "VIE",
            "departureDate": {
                "dateLocal": "2016-03-22T10:50:00.000",
                "dateUtc": "2016-03-22T07:50:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T11:45:00.000",
                "dateUtc": "2016-03-22T10:45:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T10:50:00.000",
                    "dateUtc": "2016-03-22T07:50:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T11:45:00.000",
                    "dateUtc": "2016-03-22T10:45:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T10:50:00.000",
                    "dateUtc": "2016-03-22T07:50:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T10:47:00.000",
                    "dateUtc": "2016-03-22T07:47:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T10:47:00.000",
                    "dateUtc": "2016-03-22T07:47:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:03:00.000",
                    "dateUtc": "2016-03-22T08:03:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:03:00.000",
                    "dateUtc": "2016-03-22T08:03:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T11:45:00.000",
                    "dateUtc": "2016-03-22T10:45:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T11:32:00.000",
                    "dateUtc": "2016-03-22T10:32:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T11:32:00.000",
                    "dateUtc": "2016-03-22T10:32:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T11:32:00.000",
                    "dateUtc": "2016-03-22T10:32:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T11:32:00.000",
                    "dateUtc": "2016-03-22T10:32:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 175,
                "blockMinutes": 165,
                "airMinutes": 149,
                "taxiOutMinutes": 16,
                "taxiInMinutes": 0
            },
            "airportResources": {
                "departureTerminal": "E",
                "departureGate": "42"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "321",
                "actualEquipmentIataCode": "321",
                "tailNumber": "VQ-BOI"
            }
        },
        {
            "flightId": 687822859,
            "carrierFsCode": "SU",
            "flightNumber": "2104",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "VNO",
            "departureDate": {
                "dateLocal": "2016-03-22T08:55:00.000",
                "dateUtc": "2016-03-22T05:55:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T09:35:00.000",
                "dateUtc": "2016-03-22T07:35:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T08:55:00.000",
                    "dateUtc": "2016-03-22T05:55:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T09:35:00.000",
                    "dateUtc": "2016-03-22T07:35:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T08:55:00.000",
                    "dateUtc": "2016-03-22T05:55:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:06:00.000",
                    "dateUtc": "2016-03-22T06:06:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:06:00.000",
                    "dateUtc": "2016-03-22T06:06:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:25:00.000",
                    "dateUtc": "2016-03-22T06:25:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:25:00.000",
                    "dateUtc": "2016-03-22T06:25:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T09:35:00.000",
                    "dateUtc": "2016-03-22T07:35:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T09:50:00.000",
                    "dateUtc": "2016-03-22T07:50:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T09:50:00.000",
                    "dateUtc": "2016-03-22T07:50:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T09:46:00.000",
                    "dateUtc": "2016-03-22T07:46:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T09:46:00.000",
                    "dateUtc": "2016-03-22T07:46:00.000Z"
                }
            },
            "delays": {
                "departureGateDelayMinutes": 11,
                "arrivalGateDelayMinutes": 15
            },
            "flightDurations": {
                "scheduledBlockMinutes": 100,
                "blockMinutes": 104,
                "airMinutes": 81,
                "taxiOutMinutes": 19,
                "taxiInMinutes": 4
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "30"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "SU9",
                "actualEquipmentIataCode": "SU9",
                "tailNumber": "RA-89042"
            }
        },
        {
            "flightId": 687822861,
            "carrierFsCode": "SU",
            "flightNumber": "1758",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "VOG",
            "departureDate": {
                "dateLocal": "2016-03-22T08:45:00.000",
                "dateUtc": "2016-03-22T05:45:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T10:30:00.000",
                "dateUtc": "2016-03-22T07:30:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T08:45:00.000",
                    "dateUtc": "2016-03-22T05:45:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T10:30:00.000",
                    "dateUtc": "2016-03-22T07:30:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T08:45:00.000",
                    "dateUtc": "2016-03-22T05:45:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:01:00.000",
                    "dateUtc": "2016-03-22T06:01:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:01:00.000",
                    "dateUtc": "2016-03-22T06:01:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:01:00.000",
                    "dateUtc": "2016-03-22T06:01:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:01:00.000",
                    "dateUtc": "2016-03-22T06:01:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T10:30:00.000",
                    "dateUtc": "2016-03-22T07:30:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T10:24:00.000",
                    "dateUtc": "2016-03-22T07:24:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T10:24:00.000",
                    "dateUtc": "2016-03-22T07:24:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AF",
                    "flightNumber": "4420",
                    "relationship": "L"
                },
                {
                    "fsCode": "AZ",
                    "flightNumber": "5647",
                    "relationship": "L"
                },
                {
                    "fsCode": "KL",
                    "flightNumber": "3270",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 16
            },
            "flightDurations": {
                "scheduledBlockMinutes": 105,
                "blockMinutes": 83,
                "taxiOutMinutes": 0
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "1"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VP-BNT"
            }
        },
        {
            "flightId": 687822866,
            "carrierFsCode": "SU",
            "flightNumber": "1350",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "VOZ",
            "departureDate": {
                "dateLocal": "2016-03-22T09:00:00.000",
                "dateUtc": "2016-03-22T06:00:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T10:15:00.000",
                "dateUtc": "2016-03-22T07:15:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T09:00:00.000",
                    "dateUtc": "2016-03-22T06:00:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T10:15:00.000",
                    "dateUtc": "2016-03-22T07:15:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T09:00:00.000",
                    "dateUtc": "2016-03-22T06:00:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T09:14:00.000",
                    "dateUtc": "2016-03-22T06:14:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T09:14:00.000",
                    "dateUtc": "2016-03-22T06:14:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:29:00.000",
                    "dateUtc": "2016-03-22T06:29:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:29:00.000",
                    "dateUtc": "2016-03-22T06:29:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T10:15:00.000",
                    "dateUtc": "2016-03-22T07:15:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T10:29:00.000",
                    "dateUtc": "2016-03-22T07:29:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T10:29:00.000",
                    "dateUtc": "2016-03-22T07:29:00.000Z"
                }
            },
            "delays": {
                "departureGateDelayMinutes": 14,
                "arrivalGateDelayMinutes": 14
            },
            "flightDurations": {
                "scheduledBlockMinutes": 75,
                "blockMinutes": 75,
                "taxiOutMinutes": 15
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "2"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "SU9",
                "actualEquipmentIataCode": "SU9",
                "tailNumber": "RA-89026"
            }
        },
        {
            "flightId": 687822873,
            "carrierFsCode": "SU",
            "flightNumber": "2006",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "WAW",
            "departureDate": {
                "dateLocal": "2016-03-22T08:55:00.000",
                "dateUtc": "2016-03-22T05:55:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T09:05:00.000",
                "dateUtc": "2016-03-22T08:05:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T08:55:00.000",
                    "dateUtc": "2016-03-22T05:55:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T09:05:00.000",
                    "dateUtc": "2016-03-22T08:05:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T08:55:00.000",
                    "dateUtc": "2016-03-22T05:55:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T08:55:00.000",
                    "dateUtc": "2016-03-22T05:55:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T08:55:00.000",
                    "dateUtc": "2016-03-22T05:55:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:15:00.000",
                    "dateUtc": "2016-03-22T06:15:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T09:15:00.000",
                    "dateUtc": "2016-03-22T06:15:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T09:05:00.000",
                    "dateUtc": "2016-03-22T08:05:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T09:14:00.000",
                    "dateUtc": "2016-03-22T08:14:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T09:14:00.000",
                    "dateUtc": "2016-03-22T08:14:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T09:07:00.000",
                    "dateUtc": "2016-03-22T08:07:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T09:07:00.000",
                    "dateUtc": "2016-03-22T08:07:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "LO",
                    "flightNumber": "5674",
                    "relationship": "L"
                }
            ],
            "delays": {
                "arrivalGateDelayMinutes": 9
            },
            "flightDurations": {
                "scheduledBlockMinutes": 130,
                "blockMinutes": 139,
                "airMinutes": 112,
                "taxiOutMinutes": 20,
                "taxiInMinutes": 7
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "6"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "SU9",
                "actualEquipmentIataCode": "SU9",
                "tailNumber": "RA-89015"
            }
        },
        {
            "flightId": 687822876,
            "carrierFsCode": "SU",
            "flightNumber": "2390",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "ZRH",
            "departureDate": {
                "dateLocal": "2016-03-22T10:35:00.000",
                "dateUtc": "2016-03-22T07:35:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T12:10:00.000",
                "dateUtc": "2016-03-22T11:10:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T10:35:00.000",
                    "dateUtc": "2016-03-22T07:35:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T12:10:00.000",
                    "dateUtc": "2016-03-22T11:10:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T10:35:00.000",
                    "dateUtc": "2016-03-22T07:35:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T10:46:00.000",
                    "dateUtc": "2016-03-22T07:46:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T10:46:00.000",
                    "dateUtc": "2016-03-22T07:46:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:01:00.000",
                    "dateUtc": "2016-03-22T08:01:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T11:01:00.000",
                    "dateUtc": "2016-03-22T08:01:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T12:10:00.000",
                    "dateUtc": "2016-03-22T11:10:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T12:22:00.000",
                    "dateUtc": "2016-03-22T11:22:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T12:22:00.000",
                    "dateUtc": "2016-03-22T11:22:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T12:10:00.000",
                    "dateUtc": "2016-03-22T11:10:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T12:10:00.000",
                    "dateUtc": "2016-03-22T11:10:00.000Z"
                }
            },
            "delays": {
                "departureGateDelayMinutes": 11,
                "arrivalGateDelayMinutes": 12
            },
            "flightDurations": {
                "scheduledBlockMinutes": 215,
                "blockMinutes": 216,
                "airMinutes": 189,
                "taxiOutMinutes": 15,
                "taxiInMinutes": 12
            },
            "airportResources": {
                "departureTerminal": "F",
                "departureGate": "57",
                "baggage": "25"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VP-BKX"
            }
        }
    ]
};
