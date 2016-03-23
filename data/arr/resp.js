// curl -v  -X GET "https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/SVO/arr/2016/3/22/0?appId=&appKey=&utc=false&numHours=6"

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
            "requested": "0",
            "interpreted": 0
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
        "url": "https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/SVO/arr/2016/3/22/0"
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
                "fs": "RU",
                "iata": "RU",
                "icao": "ABW",
                "name": "AirBridgeCargo",
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
                "fs": "AF",
                "iata": "AF",
                "icao": "AFR",
                "name": "Air France",
                "phoneNumber": "1-800-237-2747",
                "active": true
            },
            {
                "fs": "BJ",
                "iata": "BJ",
                "icao": "LBT",
                "name": "Nouvelair Tunisie",
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
                "fs": "BT",
                "iata": "BT",
                "icao": "BTI",
                "name": "Air Baltic",
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
                "localTime": "2016-03-22T21:03:58.201",
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
                "localTime": "2016-03-22T20:03:58.206",
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
                "localTime": "2016-03-22T20:03:58.193",
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
                "localTime": "2016-03-22T20:03:58.205",
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
                "localTime": "2016-03-22T20:03:58.211",
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
                "localTime": "2016-03-22T20:03:58.203",
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
                "localTime": "2016-03-22T22:03:58.218",
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
                "localTime": "2016-03-22T22:03:58.132",
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
                "fs": "NBE",
                "iata": "NBE",
                "icao": "DTNH",
                "name": "Enfidha - Hammamet International Airport ",
                "city": "Enfidha",
                "countryCode": "TN",
                "countryName": "Tunisia",
                "regionName": "Africa",
                "timeZoneRegionName": "Africa/Tunis",
                "localTime": "2016-03-22T20:03:58.191",
                "utcOffsetHours": 1,
                "latitude": 36.08326,
                "longitude": 10.438738,
                "elevationFeet": 21,
                "classification": 4,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/NBE?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/NBE?codeType=fs"
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
                "localTime": "2016-03-22T20:03:58.204",
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
                "localTime": "2016-03-22T22:03:58.216",
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
                "localTime": "2016-03-22T20:03:58.198",
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
                "localTime": "2016-03-22T19:03:58.197",
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
                "localTime": "2016-03-22T20:03:58.199",
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
                "fs": "TBS",
                "iata": "TBS",
                "icao": "UGGG",
                "name": "Tbilisi International Airport",
                "city": "Tbilisi",
                "cityCode": "TBS",
                "countryCode": "GE",
                "countryName": "Georgia",
                "regionName": "Europe",
                "timeZoneRegionName": "Asia/Tbilisi",
                "localTime": "2016-03-22T23:03:58.217",
                "utcOffsetHours": 4,
                "latitude": 41.674063,
                "longitude": 44.958958,
                "elevationFeet": 1624,
                "classification": 4,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/TBS?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/TBS?codeType=fs"
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
                "localTime": "2016-03-22T20:03:58.208",
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
                "localTime": "2016-03-22T20:03:58.192",
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
                "localTime": "2016-03-22T20:03:58.207",
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
                "fs": "DEL",
                "iata": "DEL",
                "icao": "VIDP",
                "name": "Indira Gandhi International Airport",
                "city": "Delhi",
                "cityCode": "DEL",
                "countryCode": "IN",
                "countryName": "India",
                "regionName": "Asia",
                "timeZoneRegionName": "Asia/Kolkata",
                "localTime": "2016-03-23T00:33:58.213",
                "utcOffsetHours": 5.5,
                "latitude": 28.556555,
                "longitude": 77.100789,
                "elevationFeet": 744,
                "classification": 1,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/DEL?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/DEL?codeType=fs"
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
                "localTime": "2016-03-22T22:03:58.216",
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
                "localTime": "2016-03-22T22:03:58.219",
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
                "localTime": "2016-03-22T21:03:58.194",
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
                "localTime": "2016-03-22T20:03:58.202",
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
                "localTime": "2016-03-22T21:03:58.210",
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
                "localTime": "2016-03-22T22:03:58.215",
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
                "fs": "SGC",
                "iata": "SGC",
                "icao": "USRR",
                "name": "Surgut Airport",
                "city": "Surgut",
                "cityCode": "SGC",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Asia/Yekaterinburg",
                "localTime": "2016-03-23T00:03:58.219",
                "utcOffsetHours": 5,
                "latitude": 61.339916,
                "longitude": 73.409534,
                "elevationFeet": 200,
                "classification": 4,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/SGC?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/SGC?codeType=fs"
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
                "localTime": "2016-03-22T20:03:58.194",
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
                "localTime": "2016-03-22T20:03:58.195",
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
                "localTime": "2016-03-22T20:03:58.210",
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
                "localTime": "2016-03-22T20:03:58.196",
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
                "localTime": "2016-03-23T03:03:58.214",
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
                "localTime": "2016-03-22T22:03:58.217",
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
                "localTime": "2016-03-22T22:03:58.218",
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
                "localTime": "2016-03-22T20:03:58.201",
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
                "localTime": "2016-03-22T21:03:58.214",
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
                "localTime": "2016-03-22T20:03:58.206",
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
                "localTime": "2016-03-22T20:03:58.212",
                "utcOffsetHours": 1,
                "latitude": 59.649818,
                "longitude": 17.930364,
                "elevationFeet": 123,
                "classification": 1,
                "active": true,
                "delayIndexUrl": "https://api.flightstats.com/flex/delayindex/rest/v1/json/airports/ARN?codeType=fs",
                "weatherUrl": "https://api.flightstats.com/flex/weather/rest/v1/json/all/ARN?codeType=fs"
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
                "iata": "735",
                "name": "Boeing 737-500 Passenger",
                "turboProp": false,
                "jet": true,
                "widebody": false,
                "regional": false
            },
            {
                "iata": "737",
                "name": "Boeing 737 Passenger",
                "turboProp": false,
                "jet": true,
                "widebody": false,
                "regional": false
            },
            {
                "iata": "74Y",
                "name": "Boeing 747-400 Freighter",
                "turboProp": false,
                "jet": true,
                "widebody": true,
                "regional": false
            }
        ]
    },
    "flightStatuses": [
        {
            "flightId": 687325918,
            "carrierFsCode": "BJ",
            "flightNumber": "852",
            "departureAirportFsCode": "NBE",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-21T19:00:00.000",
                "dateUtc": "2016-03-21T18:00:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T02:25:00.000",
                "dateUtc": "2016-03-21T23:25:00.000Z"
            },
            "status": "U",
            "schedule": {
                "flightType": "C",
                "serviceClasses": "Y",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-21T19:00:00.000",
                    "dateUtc": "2016-03-21T18:00:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T02:25:00.000",
                    "dateUtc": "2016-03-21T23:25:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-21T19:00:00.000",
                    "dateUtc": "2016-03-21T18:00:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T02:25:00.000",
                    "dateUtc": "2016-03-21T23:25:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 325
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320"
            }
        },
        {
            "flightId": 687266466,
            "carrierFsCode": "KL",
            "flightNumber": "907",
            "departureAirportFsCode": "AMS",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-21T20:40:00.000",
                "dateUtc": "2016-03-21T19:40:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T02:00:00.000",
                "dateUtc": "2016-03-21T23:00:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-21T20:40:00.000",
                    "dateUtc": "2016-03-21T19:40:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T02:00:00.000",
                    "dateUtc": "2016-03-21T23:00:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-21T20:40:00.000",
                    "dateUtc": "2016-03-21T19:40:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-21T20:45:00.000",
                    "dateUtc": "2016-03-21T19:45:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-21T20:45:00.000",
                    "dateUtc": "2016-03-21T19:45:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-21T21:00:00.000",
                    "dateUtc": "2016-03-21T20:00:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-21T21:00:00.000",
                    "dateUtc": "2016-03-21T20:00:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T02:00:00.000",
                    "dateUtc": "2016-03-21T23:00:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T01:54:00.000",
                    "dateUtc": "2016-03-21T22:54:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T01:54:00.000",
                    "dateUtc": "2016-03-21T22:54:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T01:47:00.000",
                    "dateUtc": "2016-03-21T22:47:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T01:47:00.000",
                    "dateUtc": "2016-03-21T22:47:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "SU",
                    "flightNumber": "3123",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 5
            },
            "flightDurations": {
                "scheduledBlockMinutes": 200,
                "blockMinutes": 189,
                "airMinutes": 167,
                "taxiOutMinutes": 15,
                "taxiInMinutes": 7
            },
            "airportResources": {
                "departureTerminal": "2",
                "departureGate": "D2",
                "arrivalTerminal": "E"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "737",
                "tailNumber": "PH-BXT"
            }
        },
        {
            "flightId": 687266464,
            "carrierFsCode": "RU",
            "flightNumber": "152",
            "departureAirportFsCode": "AMS",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-21T21:00:00.000",
                "dateUtc": "2016-03-21T20:00:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T02:15:00.000",
                "dateUtc": "2016-03-21T23:15:00.000Z"
            },
            "status": "U",
            "schedule": {
                "flightType": "F",
                "serviceClasses": "Y",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-21T21:00:00.000",
                    "dateUtc": "2016-03-21T20:00:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T02:15:00.000",
                    "dateUtc": "2016-03-21T23:15:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-21T21:00:00.000",
                    "dateUtc": "2016-03-21T20:00:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T02:15:00.000",
                    "dateUtc": "2016-03-21T23:15:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 195
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "74N"
            }
        },
        {
            "flightId": 687325387,
            "carrierFsCode": "AZ",
            "flightNumber": "560",
            "departureAirportFsCode": "MXP",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-21T21:00:00.000",
                "dateUtc": "2016-03-21T20:00:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T02:35:00.000",
                "dateUtc": "2016-03-21T23:35:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-21T21:00:00.000",
                    "dateUtc": "2016-03-21T20:00:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T02:35:00.000",
                    "dateUtc": "2016-03-21T23:35:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-21T21:00:00.000",
                    "dateUtc": "2016-03-21T20:00:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-21T21:45:00.000",
                    "dateUtc": "2016-03-21T20:45:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-21T21:45:00.000",
                    "dateUtc": "2016-03-21T20:45:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-21T22:03:00.000",
                    "dateUtc": "2016-03-21T21:03:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-21T22:03:00.000",
                    "dateUtc": "2016-03-21T21:03:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T02:35:00.000",
                    "dateUtc": "2016-03-21T23:35:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T03:05:00.000",
                    "dateUtc": "2016-03-22T00:05:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T02:59:00.000",
                    "dateUtc": "2016-03-21T23:59:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T02:59:00.000",
                    "dateUtc": "2016-03-21T23:59:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "SU",
                    "flightNumber": "3201",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 45,
                "arrivalGateDelayMinutes": 30
            },
            "flightDurations": {
                "scheduledBlockMinutes": 215,
                "airMinutes": 176,
                "taxiOutMinutes": 18
            },
            "airportResources": {
                "departureTerminal": "1",
                "departureGate": "B28",
                "arrivalTerminal": "D"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "32S",
                "actualEquipmentIataCode": "320",
                "tailNumber": "EI-EID"
            }
        },
        {
            "flightId": 687294610,
            "carrierFsCode": "AZ",
            "flightNumber": "596",
            "departureAirportFsCode": "FCO",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-21T21:20:00.000",
                "dateUtc": "2016-03-21T20:20:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T03:05:00.000",
                "dateUtc": "2016-03-22T00:05:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-21T21:20:00.000",
                    "dateUtc": "2016-03-21T20:20:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T03:05:00.000",
                    "dateUtc": "2016-03-22T00:05:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-21T21:20:00.000",
                    "dateUtc": "2016-03-21T20:20:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-21T21:53:00.000",
                    "dateUtc": "2016-03-21T20:53:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-21T21:53:00.000",
                    "dateUtc": "2016-03-21T20:53:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-21T22:13:00.000",
                    "dateUtc": "2016-03-21T21:13:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-21T22:13:00.000",
                    "dateUtc": "2016-03-21T21:13:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T03:05:00.000",
                    "dateUtc": "2016-03-22T00:05:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T03:29:00.000",
                    "dateUtc": "2016-03-22T00:29:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T03:19:00.000",
                    "dateUtc": "2016-03-22T00:19:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T03:19:00.000",
                    "dateUtc": "2016-03-22T00:19:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "SU",
                    "flightNumber": "3205",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 33,
                "arrivalGateDelayMinutes": 24
            },
            "flightDurations": {
                "scheduledBlockMinutes": 225,
                "airMinutes": 186,
                "taxiOutMinutes": 20
            },
            "airportResources": {
                "departureTerminal": "1",
                "departureGate": "G9",
                "arrivalTerminal": "D"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "32S",
                "tailNumber": "EI-DSL"
            }
        },
        {
            "flightId": 687306165,
            "carrierFsCode": "SU",
            "flightNumber": "2133",
            "departureAirportFsCode": "IST",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-21T21:45:00.000",
                "dateUtc": "2016-03-21T19:45:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T02:10:00.000",
                "dateUtc": "2016-03-21T23:10:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-21T21:45:00.000",
                    "dateUtc": "2016-03-21T19:45:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T02:10:00.000",
                    "dateUtc": "2016-03-21T23:10:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-21T21:45:00.000",
                    "dateUtc": "2016-03-21T19:45:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-21T21:46:00.000",
                    "dateUtc": "2016-03-21T19:46:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-21T21:46:00.000",
                    "dateUtc": "2016-03-21T19:46:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-21T22:07:00.000",
                    "dateUtc": "2016-03-21T20:07:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-21T22:07:00.000",
                    "dateUtc": "2016-03-21T20:07:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T02:10:00.000",
                    "dateUtc": "2016-03-21T23:10:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T02:14:00.000",
                    "dateUtc": "2016-03-21T23:14:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T02:14:00.000",
                    "dateUtc": "2016-03-21T23:14:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T02:10:00.000",
                    "dateUtc": "2016-03-21T23:10:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T02:10:00.000",
                    "dateUtc": "2016-03-21T23:10:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "SV",
                    "flightNumber": "6026",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 1,
                "arrivalGateDelayMinutes": 4
            },
            "flightDurations": {
                "scheduledBlockMinutes": 205,
                "blockMinutes": 208,
                "airMinutes": 183,
                "taxiOutMinutes": 21,
                "taxiInMinutes": 4
            },
            "airportResources": {
                "departureTerminal": "I",
                "departureGate": "308",
                "arrivalTerminal": "F"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VQ-BRW"
            }
        },
        {
            "flightId": 687298831,
            "carrierFsCode": "SU",
            "flightNumber": "2383",
            "departureAirportFsCode": "GVA",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-21T21:50:00.000",
                "dateUtc": "2016-03-21T20:50:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T03:15:00.000",
                "dateUtc": "2016-03-22T00:15:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-21T21:50:00.000",
                    "dateUtc": "2016-03-21T20:50:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T03:15:00.000",
                    "dateUtc": "2016-03-22T00:15:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-21T21:50:00.000",
                    "dateUtc": "2016-03-21T20:50:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-21T21:51:00.000",
                    "dateUtc": "2016-03-21T20:51:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-21T21:51:00.000",
                    "dateUtc": "2016-03-21T20:51:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-21T22:01:00.000",
                    "dateUtc": "2016-03-21T21:01:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-21T22:01:00.000",
                    "dateUtc": "2016-03-21T21:01:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T03:15:00.000",
                    "dateUtc": "2016-03-22T00:15:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T03:06:00.000",
                    "dateUtc": "2016-03-22T00:06:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T03:06:00.000",
                    "dateUtc": "2016-03-22T00:06:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T03:02:00.000",
                    "dateUtc": "2016-03-22T00:02:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T03:02:00.000",
                    "dateUtc": "2016-03-22T00:02:00.000Z"
                }
            },
            "delays": {
                "departureGateDelayMinutes": 1
            },
            "flightDurations": {
                "scheduledBlockMinutes": 205,
                "blockMinutes": 195,
                "airMinutes": 181,
                "taxiOutMinutes": 10,
                "taxiInMinutes": 4
            },
            "airportResources": {
                "departureTerminal": "1",
                "arrivalTerminal": "F"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VP-BZO"
            }
        },
        {
            "flightId": 687296038,
            "carrierFsCode": "SU",
            "flightNumber": "2305",
            "departureAirportFsCode": "FRA",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-21T22:25:00.000",
                "dateUtc": "2016-03-21T21:25:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T03:25:00.000",
                "dateUtc": "2016-03-22T00:25:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-21T22:25:00.000",
                    "dateUtc": "2016-03-21T21:25:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T03:25:00.000",
                    "dateUtc": "2016-03-22T00:25:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-21T22:25:00.000",
                    "dateUtc": "2016-03-21T21:25:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-21T22:13:00.000",
                    "dateUtc": "2016-03-21T21:13:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-21T22:13:00.000",
                    "dateUtc": "2016-03-21T21:13:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-21T22:24:00.000",
                    "dateUtc": "2016-03-21T21:24:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-21T22:24:00.000",
                    "dateUtc": "2016-03-21T21:24:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T03:25:00.000",
                    "dateUtc": "2016-03-22T00:25:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T03:03:00.000",
                    "dateUtc": "2016-03-22T00:03:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T03:03:00.000",
                    "dateUtc": "2016-03-22T00:03:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T02:57:00.000",
                    "dateUtc": "2016-03-21T23:57:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T02:57:00.000",
                    "dateUtc": "2016-03-21T23:57:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 180,
                "blockMinutes": 170,
                "airMinutes": 153,
                "taxiOutMinutes": 11,
                "taxiInMinutes": 6
            },
            "airportResources": {
                "departureTerminal": "2",
                "departureGate": "D5",
                "arrivalTerminal": "D"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VQ-BHN"
            }
        },
        {
            "flightId": 687325386,
            "carrierFsCode": "RU",
            "flightNumber": "124",
            "departureAirportFsCode": "MXP",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-21T22:30:00.000",
                "dateUtc": "2016-03-21T21:30:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T04:00:00.000",
                "dateUtc": "2016-03-22T01:00:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "F",
                "serviceClasses": "Y",
                "restrictions": "",
                "uplines": [
                    {
                        "fsCode": "AMS",
                        "flightId": 687266363
                    }
                ]
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-21T22:30:00.000",
                    "dateUtc": "2016-03-21T21:30:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T04:00:00.000",
                    "dateUtc": "2016-03-22T01:00:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-21T22:30:00.000",
                    "dateUtc": "2016-03-21T21:30:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-21T22:58:00.000",
                    "dateUtc": "2016-03-21T21:58:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-21T22:58:00.000",
                    "dateUtc": "2016-03-21T21:58:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T04:00:00.000",
                    "dateUtc": "2016-03-22T01:00:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T03:42:00.000",
                    "dateUtc": "2016-03-22T00:42:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T03:42:00.000",
                    "dateUtc": "2016-03-22T00:42:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 210,
                "airMinutes": 164
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "74Y",
                "tailNumber": "VQ-BVR"
            }
        },
        {
            "flightId": 687315732,
            "carrierFsCode": "SU",
            "flightNumber": "2575",
            "departureAirportFsCode": "LHR",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-21T22:30:00.000",
                "dateUtc": "2016-03-21T22:30:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T05:05:00.000",
                "dateUtc": "2016-03-22T02:05:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-21T22:30:00.000",
                    "dateUtc": "2016-03-21T22:30:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T05:05:00.000",
                    "dateUtc": "2016-03-22T02:05:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-21T22:30:00.000",
                    "dateUtc": "2016-03-21T22:30:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-21T22:35:00.000",
                    "dateUtc": "2016-03-21T22:35:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-21T22:35:00.000",
                    "dateUtc": "2016-03-21T22:35:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-21T22:54:00.000",
                    "dateUtc": "2016-03-21T22:54:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-21T22:54:00.000",
                    "dateUtc": "2016-03-21T22:54:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T05:05:00.000",
                    "dateUtc": "2016-03-22T02:05:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T05:18:00.000",
                    "dateUtc": "2016-03-22T02:18:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T05:18:00.000",
                    "dateUtc": "2016-03-22T02:18:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T05:09:00.000",
                    "dateUtc": "2016-03-22T02:09:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T05:09:00.000",
                    "dateUtc": "2016-03-22T02:09:00.000Z"
                }
            },
            "delays": {
                "departureGateDelayMinutes": 5,
                "arrivalGateDelayMinutes": 13
            },
            "flightDurations": {
                "scheduledBlockMinutes": 215,
                "blockMinutes": 223,
                "airMinutes": 195,
                "taxiOutMinutes": 19,
                "taxiInMinutes": 9
            },
            "airportResources": {
                "departureTerminal": "4",
                "departureGate": "1",
                "arrivalTerminal": "D"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "321",
                "actualEquipmentIataCode": "321",
                "tailNumber": "VP-BWP"
            }
        },
        {
            "flightId": 687359767,
            "carrierFsCode": "SU",
            "flightNumber": "2393",
            "departureAirportFsCode": "ZRH",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-21T22:35:00.000",
                "dateUtc": "2016-03-21T21:35:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T03:45:00.000",
                "dateUtc": "2016-03-22T00:45:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-21T22:35:00.000",
                    "dateUtc": "2016-03-21T21:35:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T03:45:00.000",
                    "dateUtc": "2016-03-22T00:45:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-21T22:35:00.000",
                    "dateUtc": "2016-03-21T21:35:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-21T22:33:00.000",
                    "dateUtc": "2016-03-21T21:33:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-21T22:33:00.000",
                    "dateUtc": "2016-03-21T21:33:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-21T22:45:00.000",
                    "dateUtc": "2016-03-21T21:45:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-21T22:45:00.000",
                    "dateUtc": "2016-03-21T21:45:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T03:45:00.000",
                    "dateUtc": "2016-03-22T00:45:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T03:34:00.000",
                    "dateUtc": "2016-03-22T00:34:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T03:34:00.000",
                    "dateUtc": "2016-03-22T00:34:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T03:28:00.000",
                    "dateUtc": "2016-03-22T00:28:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T03:28:00.000",
                    "dateUtc": "2016-03-22T00:28:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 190,
                "blockMinutes": 181,
                "airMinutes": 163,
                "taxiOutMinutes": 12,
                "taxiInMinutes": 6
            },
            "airportResources": {
                "departureTerminal": "1",
                "departureGate": "D41",
                "arrivalTerminal": "F"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VP-BZQ"
            }
        },
        {
            "flightId": 687325025,
            "carrierFsCode": "SU",
            "flightNumber": "2595",
            "departureAirportFsCode": "MUC",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-21T22:50:00.000",
                "dateUtc": "2016-03-21T21:50:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T03:45:00.000",
                "dateUtc": "2016-03-22T00:45:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-21T22:50:00.000",
                    "dateUtc": "2016-03-21T21:50:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T03:45:00.000",
                    "dateUtc": "2016-03-22T00:45:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-21T22:50:00.000",
                    "dateUtc": "2016-03-21T21:50:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-21T22:42:00.000",
                    "dateUtc": "2016-03-21T21:42:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-21T22:42:00.000",
                    "dateUtc": "2016-03-21T21:42:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-21T22:55:00.000",
                    "dateUtc": "2016-03-21T21:55:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-21T22:55:00.000",
                    "dateUtc": "2016-03-21T21:55:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T03:45:00.000",
                    "dateUtc": "2016-03-22T00:45:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T03:22:00.000",
                    "dateUtc": "2016-03-22T00:22:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T03:22:00.000",
                    "dateUtc": "2016-03-22T00:22:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T03:17:00.000",
                    "dateUtc": "2016-03-22T00:17:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T03:17:00.000",
                    "dateUtc": "2016-03-22T00:17:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 175,
                "blockMinutes": 160,
                "airMinutes": 142,
                "taxiOutMinutes": 13,
                "taxiInMinutes": 5
            },
            "airportResources": {
                "departureTerminal": "1",
                "arrivalTerminal": "D"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VP-BZS"
            }
        },
        {
            "flightId": 687294607,
            "carrierFsCode": "SU",
            "flightNumber": "2405",
            "departureAirportFsCode": "FCO",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-21T23:05:00.000",
                "dateUtc": "2016-03-21T22:05:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T04:40:00.000",
                "dateUtc": "2016-03-22T01:40:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-21T23:05:00.000",
                    "dateUtc": "2016-03-21T22:05:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T04:40:00.000",
                    "dateUtc": "2016-03-22T01:40:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-21T23:05:00.000",
                    "dateUtc": "2016-03-21T22:05:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-21T22:51:00.000",
                    "dateUtc": "2016-03-21T21:51:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-21T22:51:00.000",
                    "dateUtc": "2016-03-21T21:51:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-21T23:05:00.000",
                    "dateUtc": "2016-03-21T22:05:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-21T23:05:00.000",
                    "dateUtc": "2016-03-21T22:05:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T04:40:00.000",
                    "dateUtc": "2016-03-22T01:40:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T04:13:00.000",
                    "dateUtc": "2016-03-22T01:13:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T04:13:00.000",
                    "dateUtc": "2016-03-22T01:13:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T04:07:00.000",
                    "dateUtc": "2016-03-22T01:07:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T04:07:00.000",
                    "dateUtc": "2016-03-22T01:07:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AZ",
                    "flightNumber": "7184",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 215,
                "blockMinutes": 202,
                "airMinutes": 182,
                "taxiOutMinutes": 14,
                "taxiInMinutes": 6
            },
            "airportResources": {
                "departureTerminal": "3",
                "departureGate": "G5",
                "arrivalTerminal": "D"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VQ-BKS"
            }
        },
        {
            "flightId": 687352803,
            "carrierFsCode": "SU",
            "flightNumber": "2423",
            "departureAirportFsCode": "VCE",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-21T23:10:00.000",
                "dateUtc": "2016-03-21T22:10:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T04:15:00.000",
                "dateUtc": "2016-03-22T01:15:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-21T23:10:00.000",
                    "dateUtc": "2016-03-21T22:10:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T04:15:00.000",
                    "dateUtc": "2016-03-22T01:15:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-21T23:10:00.000",
                    "dateUtc": "2016-03-21T22:10:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-21T22:57:00.000",
                    "dateUtc": "2016-03-21T21:57:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-21T22:57:00.000",
                    "dateUtc": "2016-03-21T21:57:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-21T23:19:00.000",
                    "dateUtc": "2016-03-21T22:19:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-21T23:19:00.000",
                    "dateUtc": "2016-03-21T22:19:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T04:15:00.000",
                    "dateUtc": "2016-03-22T01:15:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T03:58:00.000",
                    "dateUtc": "2016-03-22T00:58:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T03:58:00.000",
                    "dateUtc": "2016-03-22T00:58:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T03:54:00.000",
                    "dateUtc": "2016-03-22T00:54:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T03:54:00.000",
                    "dateUtc": "2016-03-22T00:54:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AZ",
                    "flightNumber": "7166",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 185,
                "blockMinutes": 181,
                "airMinutes": 155,
                "taxiOutMinutes": 22,
                "taxiInMinutes": 4
            },
            "airportResources": {
                "arrivalTerminal": "D"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VQ-BEJ"
            }
        },
        {
            "flightId": 687337775,
            "carrierFsCode": "BT",
            "flightNumber": "426",
            "departureAirportFsCode": "RIX",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-21T23:25:00.000",
                "dateUtc": "2016-03-21T21:25:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T02:05:00.000",
                "dateUtc": "2016-03-21T23:05:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-21T23:25:00.000",
                    "dateUtc": "2016-03-21T21:25:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T02:05:00.000",
                    "dateUtc": "2016-03-21T23:05:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-21T23:25:00.000",
                    "dateUtc": "2016-03-21T21:25:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-21T23:31:00.000",
                    "dateUtc": "2016-03-21T21:31:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-21T23:31:00.000",
                    "dateUtc": "2016-03-21T21:31:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T02:05:00.000",
                    "dateUtc": "2016-03-21T23:05:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T01:49:00.000",
                    "dateUtc": "2016-03-21T22:49:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T01:44:00.000",
                    "dateUtc": "2016-03-21T22:44:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T01:44:00.000",
                    "dateUtc": "2016-03-21T22:44:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "SU",
                    "flightNumber": "3685",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 100,
                "airMinutes": 73
            },
            "airportResources": {
                "arrivalTerminal": "E"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "735",
                "actualEquipmentIataCode": "735",
                "tailNumber": "YL-BBQ"
            }
        },
        {
            "flightId": 687270078,
            "carrierFsCode": "SU",
            "flightNumber": "2513",
            "departureAirportFsCode": "BCN",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-21T23:25:00.000",
                "dateUtc": "2016-03-21T22:25:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T05:45:00.000",
                "dateUtc": "2016-03-22T02:45:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-21T23:25:00.000",
                    "dateUtc": "2016-03-21T22:25:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T05:45:00.000",
                    "dateUtc": "2016-03-22T02:45:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-21T23:25:00.000",
                    "dateUtc": "2016-03-21T22:25:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T00:02:00.000",
                    "dateUtc": "2016-03-21T23:02:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T00:02:00.000",
                    "dateUtc": "2016-03-21T23:02:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T00:18:00.000",
                    "dateUtc": "2016-03-21T23:18:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T00:18:00.000",
                    "dateUtc": "2016-03-21T23:18:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T05:45:00.000",
                    "dateUtc": "2016-03-22T02:45:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T06:03:00.000",
                    "dateUtc": "2016-03-22T03:03:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T06:03:00.000",
                    "dateUtc": "2016-03-22T03:03:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T05:57:00.000",
                    "dateUtc": "2016-03-22T02:57:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T05:57:00.000",
                    "dateUtc": "2016-03-22T02:57:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "UX",
                    "flightNumber": "3289",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 37,
                "arrivalGateDelayMinutes": 18
            },
            "flightDurations": {
                "scheduledBlockMinutes": 260,
                "blockMinutes": 241,
                "airMinutes": 219,
                "taxiOutMinutes": 16,
                "taxiInMinutes": 6
            },
            "airportResources": {
                "departureTerminal": "1",
                "departureGate": "D21",
                "arrivalTerminal": "D"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32A",
                "tailNumber": "VP-BLH"
            }
        },
        {
            "flightId": 687278504,
            "carrierFsCode": "SU",
            "flightNumber": "2461",
            "departureAirportFsCode": "CDG",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-21T23:30:00.000",
                "dateUtc": "2016-03-21T22:30:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T05:00:00.000",
                "dateUtc": "2016-03-22T02:00:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-21T23:30:00.000",
                    "dateUtc": "2016-03-21T22:30:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T05:00:00.000",
                    "dateUtc": "2016-03-22T02:00:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-21T23:30:00.000",
                    "dateUtc": "2016-03-21T22:30:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-21T23:37:00.000",
                    "dateUtc": "2016-03-21T22:37:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-21T23:37:00.000",
                    "dateUtc": "2016-03-21T22:37:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-21T23:48:00.000",
                    "dateUtc": "2016-03-21T22:48:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-21T23:48:00.000",
                    "dateUtc": "2016-03-21T22:48:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T05:00:00.000",
                    "dateUtc": "2016-03-22T02:00:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T05:03:00.000",
                    "dateUtc": "2016-03-22T02:03:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T05:03:00.000",
                    "dateUtc": "2016-03-22T02:03:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T04:56:00.000",
                    "dateUtc": "2016-03-22T01:56:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T04:56:00.000",
                    "dateUtc": "2016-03-22T01:56:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AF",
                    "flightNumber": "4860",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 7,
                "arrivalGateDelayMinutes": 3
            },
            "flightDurations": {
                "scheduledBlockMinutes": 210,
                "blockMinutes": 206,
                "airMinutes": 188,
                "taxiOutMinutes": 11,
                "taxiInMinutes": 7
            },
            "airportResources": {
                "departureTerminal": "2C",
                "arrivalTerminal": "D"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VQ-BAX"
            }
        },
        {
            "flightId": 687275998,
            "carrierFsCode": "SU",
            "flightNumber": "2469",
            "departureAirportFsCode": "BUD",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-21T23:35:00.000",
                "dateUtc": "2016-03-21T22:35:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T04:00:00.000",
                "dateUtc": "2016-03-22T01:00:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-21T23:35:00.000",
                    "dateUtc": "2016-03-21T22:35:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T04:00:00.000",
                    "dateUtc": "2016-03-22T01:00:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-21T23:35:00.000",
                    "dateUtc": "2016-03-21T22:35:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-21T23:53:00.000",
                    "dateUtc": "2016-03-21T22:53:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-21T23:53:00.000",
                    "dateUtc": "2016-03-21T22:53:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T00:02:00.000",
                    "dateUtc": "2016-03-21T23:02:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T00:02:00.000",
                    "dateUtc": "2016-03-21T23:02:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T04:00:00.000",
                    "dateUtc": "2016-03-22T01:00:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T04:10:00.000",
                    "dateUtc": "2016-03-22T01:10:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T04:10:00.000",
                    "dateUtc": "2016-03-22T01:10:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T04:07:00.000",
                    "dateUtc": "2016-03-22T01:07:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T04:07:00.000",
                    "dateUtc": "2016-03-22T01:07:00.000Z"
                }
            },
            "delays": {
                "departureGateDelayMinutes": 18,
                "arrivalGateDelayMinutes": 10
            },
            "flightDurations": {
                "scheduledBlockMinutes": 145,
                "blockMinutes": 137,
                "airMinutes": 125,
                "taxiOutMinutes": 9,
                "taxiInMinutes": 3
            },
            "airportResources": {
                "departureTerminal": "2A",
                "arrivalTerminal": "F"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VQ-BPW"
            }
        },
        {
            "flightId": 687275300,
            "carrierFsCode": "SU",
            "flightNumber": "2619",
            "departureAirportFsCode": "BRU",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-21T23:35:00.000",
                "dateUtc": "2016-03-21T22:35:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T04:50:00.000",
                "dateUtc": "2016-03-22T01:50:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-21T23:35:00.000",
                    "dateUtc": "2016-03-21T22:35:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T04:50:00.000",
                    "dateUtc": "2016-03-22T01:50:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-21T23:35:00.000",
                    "dateUtc": "2016-03-21T22:35:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-21T23:25:00.000",
                    "dateUtc": "2016-03-21T22:25:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-21T23:25:00.000",
                    "dateUtc": "2016-03-21T22:25:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-21T23:38:00.000",
                    "dateUtc": "2016-03-21T22:38:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-21T23:38:00.000",
                    "dateUtc": "2016-03-21T22:38:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T04:50:00.000",
                    "dateUtc": "2016-03-22T01:50:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T04:45:00.000",
                    "dateUtc": "2016-03-22T01:45:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T04:45:00.000",
                    "dateUtc": "2016-03-22T01:45:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T04:38:00.000",
                    "dateUtc": "2016-03-22T01:38:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T04:38:00.000",
                    "dateUtc": "2016-03-22T01:38:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 195,
                "blockMinutes": 200,
                "airMinutes": 180,
                "taxiOutMinutes": 13,
                "taxiInMinutes": 7
            },
            "airportResources": {
                "departureGate": "27",
                "arrivalTerminal": "E"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VQ-BIV"
            }
        },
        {
            "flightId": 687283377,
            "carrierFsCode": "SU",
            "flightNumber": "2497",
            "departureAirportFsCode": "CPH",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-21T23:40:00.000",
                "dateUtc": "2016-03-21T22:40:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T04:05:00.000",
                "dateUtc": "2016-03-22T01:05:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-21T23:40:00.000",
                    "dateUtc": "2016-03-21T22:40:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T04:05:00.000",
                    "dateUtc": "2016-03-22T01:05:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-21T23:40:00.000",
                    "dateUtc": "2016-03-21T22:40:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-21T23:38:00.000",
                    "dateUtc": "2016-03-21T22:38:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-21T23:38:00.000",
                    "dateUtc": "2016-03-21T22:38:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-21T23:59:00.000",
                    "dateUtc": "2016-03-21T22:59:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-21T23:59:00.000",
                    "dateUtc": "2016-03-21T22:59:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T04:05:00.000",
                    "dateUtc": "2016-03-22T01:05:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T04:04:00.000",
                    "dateUtc": "2016-03-22T01:04:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T04:04:00.000",
                    "dateUtc": "2016-03-22T01:04:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T03:57:00.000",
                    "dateUtc": "2016-03-22T00:57:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T03:57:00.000",
                    "dateUtc": "2016-03-22T00:57:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "FI",
                    "flightNumber": "7210",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 145,
                "blockMinutes": 146,
                "airMinutes": 118,
                "taxiOutMinutes": 21,
                "taxiInMinutes": 7
            },
            "airportResources": {
                "departureTerminal": "2",
                "departureGate": "C30",
                "arrivalTerminal": "E"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VP-BRX"
            }
        },
        {
            "flightId": 687346572,
            "carrierFsCode": "SU",
            "flightNumber": "2317",
            "departureAirportFsCode": "SXF",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-21T23:40:00.000",
                "dateUtc": "2016-03-21T22:40:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T04:05:00.000",
                "dateUtc": "2016-03-22T01:05:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-21T23:40:00.000",
                    "dateUtc": "2016-03-21T22:40:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T04:05:00.000",
                    "dateUtc": "2016-03-22T01:05:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-21T23:40:00.000",
                    "dateUtc": "2016-03-21T22:40:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-21T23:34:00.000",
                    "dateUtc": "2016-03-21T22:34:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-21T23:34:00.000",
                    "dateUtc": "2016-03-21T22:34:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-21T23:43:00.000",
                    "dateUtc": "2016-03-21T22:43:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-21T23:43:00.000",
                    "dateUtc": "2016-03-21T22:43:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T04:05:00.000",
                    "dateUtc": "2016-03-22T01:05:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T03:53:00.000",
                    "dateUtc": "2016-03-22T00:53:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T03:53:00.000",
                    "dateUtc": "2016-03-22T00:53:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T03:49:00.000",
                    "dateUtc": "2016-03-22T00:49:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T03:49:00.000",
                    "dateUtc": "2016-03-22T00:49:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 145,
                "blockMinutes": 139,
                "airMinutes": 126,
                "taxiOutMinutes": 9,
                "taxiInMinutes": 4
            },
            "airportResources": {
                "departureGate": "04",
                "arrivalTerminal": "D"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VP-BTI"
            }
        },
        {
            "flightId": 687330695,
            "carrierFsCode": "SU",
            "flightNumber": "2535",
            "departureAirportFsCode": "OSL",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-21T23:40:00.000",
                "dateUtc": "2016-03-21T22:40:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T04:15:00.000",
                "dateUtc": "2016-03-22T01:15:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-21T23:40:00.000",
                    "dateUtc": "2016-03-21T22:40:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T04:15:00.000",
                    "dateUtc": "2016-03-22T01:15:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-21T23:40:00.000",
                    "dateUtc": "2016-03-21T22:40:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-21T23:35:00.000",
                    "dateUtc": "2016-03-21T22:35:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-21T23:35:00.000",
                    "dateUtc": "2016-03-21T22:35:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T04:15:00.000",
                    "dateUtc": "2016-03-22T01:15:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T04:08:00.000",
                    "dateUtc": "2016-03-22T01:08:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T04:08:00.000",
                    "dateUtc": "2016-03-22T01:08:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T04:01:00.000",
                    "dateUtc": "2016-03-22T01:01:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T04:01:00.000",
                    "dateUtc": "2016-03-22T01:01:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 155,
                "blockMinutes": 153,
                "taxiInMinutes": 7
            },
            "airportResources": {
                "departureGate": "F20",
                "arrivalTerminal": "E"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "SU9",
                "actualEquipmentIataCode": "SU9",
                "tailNumber": "RA-89026"
            }
        },
        {
            "flightId": 687270404,
            "carrierFsCode": "SU",
            "flightNumber": "2093",
            "departureAirportFsCode": "BEG",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-21T23:40:00.000",
                "dateUtc": "2016-03-21T22:40:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T04:25:00.000",
                "dateUtc": "2016-03-22T01:25:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-21T23:40:00.000",
                    "dateUtc": "2016-03-21T22:40:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T04:25:00.000",
                    "dateUtc": "2016-03-22T01:25:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-21T23:40:00.000",
                    "dateUtc": "2016-03-21T22:40:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-21T23:33:00.000",
                    "dateUtc": "2016-03-21T22:33:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-21T23:33:00.000",
                    "dateUtc": "2016-03-21T22:33:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T04:25:00.000",
                    "dateUtc": "2016-03-22T01:25:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T04:03:00.000",
                    "dateUtc": "2016-03-22T01:03:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T04:03:00.000",
                    "dateUtc": "2016-03-22T01:03:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T03:59:00.000",
                    "dateUtc": "2016-03-22T00:59:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T03:59:00.000",
                    "dateUtc": "2016-03-22T00:59:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "JU",
                    "flightNumber": "8134",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 165,
                "blockMinutes": 150,
                "taxiInMinutes": 4
            },
            "airportResources": {
                "departureTerminal": "2",
                "arrivalTerminal": "F"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VQ-BSG"
            }
        },
        {
            "flightId": 687266469,
            "carrierFsCode": "SU",
            "flightNumber": "2193",
            "departureAirportFsCode": "AMS",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-21T23:40:00.000",
                "dateUtc": "2016-03-21T22:40:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T04:45:00.000",
                "dateUtc": "2016-03-22T01:45:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-21T23:40:00.000",
                    "dateUtc": "2016-03-21T22:40:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T04:45:00.000",
                    "dateUtc": "2016-03-22T01:45:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-21T23:40:00.000",
                    "dateUtc": "2016-03-21T22:40:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-21T23:43:00.000",
                    "dateUtc": "2016-03-21T22:43:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-21T23:43:00.000",
                    "dateUtc": "2016-03-21T22:43:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T00:06:00.000",
                    "dateUtc": "2016-03-21T23:06:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T00:06:00.000",
                    "dateUtc": "2016-03-21T23:06:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T04:45:00.000",
                    "dateUtc": "2016-03-22T01:45:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T04:57:00.000",
                    "dateUtc": "2016-03-22T01:57:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T04:57:00.000",
                    "dateUtc": "2016-03-22T01:57:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T04:51:00.000",
                    "dateUtc": "2016-03-22T01:51:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T04:51:00.000",
                    "dateUtc": "2016-03-22T01:51:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "KL",
                    "flightNumber": "3183",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 3,
                "arrivalGateDelayMinutes": 12
            },
            "flightDurations": {
                "scheduledBlockMinutes": 185,
                "blockMinutes": 194,
                "airMinutes": 165,
                "taxiOutMinutes": 23,
                "taxiInMinutes": 6
            },
            "airportResources": {
                "departureTerminal": "3",
                "departureGate": "G5",
                "arrivalTerminal": "F"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VP-BZR"
            }
        },
        {
            "flightId": 687802731,
            "carrierFsCode": "SU",
            "flightNumber": "2415",
            "departureAirportFsCode": "MXP",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-22T00:10:00.000",
                "dateUtc": "2016-03-21T23:10:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T05:35:00.000",
                "dateUtc": "2016-03-22T02:35:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T00:10:00.000",
                    "dateUtc": "2016-03-21T23:10:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T05:35:00.000",
                    "dateUtc": "2016-03-22T02:35:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T00:10:00.000",
                    "dateUtc": "2016-03-21T23:10:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T00:06:00.000",
                    "dateUtc": "2016-03-21T23:06:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T00:06:00.000",
                    "dateUtc": "2016-03-21T23:06:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T05:35:00.000",
                    "dateUtc": "2016-03-22T02:35:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T05:22:00.000",
                    "dateUtc": "2016-03-22T02:22:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T05:22:00.000",
                    "dateUtc": "2016-03-22T02:22:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T05:16:00.000",
                    "dateUtc": "2016-03-22T02:16:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T05:16:00.000",
                    "dateUtc": "2016-03-22T02:16:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AZ",
                    "flightNumber": "7016",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 205,
                "blockMinutes": 196,
                "taxiInMinutes": 6
            },
            "airportResources": {
                "departureTerminal": "1",
                "departureGate": "B3",
                "arrivalTerminal": "D"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "321",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VP-BWD"
            }
        },
        {
            "flightId": 687829653,
            "carrierFsCode": "SU",
            "flightNumber": "2355",
            "departureAirportFsCode": "VIE",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-22T00:15:00.000",
                "dateUtc": "2016-03-21T23:15:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T04:50:00.000",
                "dateUtc": "2016-03-22T01:50:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T00:15:00.000",
                    "dateUtc": "2016-03-21T23:15:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T04:50:00.000",
                    "dateUtc": "2016-03-22T01:50:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T00:15:00.000",
                    "dateUtc": "2016-03-21T23:15:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T00:10:00.000",
                    "dateUtc": "2016-03-21T23:10:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T00:10:00.000",
                    "dateUtc": "2016-03-21T23:10:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T00:18:00.000",
                    "dateUtc": "2016-03-21T23:18:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T00:18:00.000",
                    "dateUtc": "2016-03-21T23:18:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T04:50:00.000",
                    "dateUtc": "2016-03-22T01:50:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T04:28:00.000",
                    "dateUtc": "2016-03-22T01:28:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T04:28:00.000",
                    "dateUtc": "2016-03-22T01:28:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T04:23:00.000",
                    "dateUtc": "2016-03-22T01:23:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T04:23:00.000",
                    "dateUtc": "2016-03-22T01:23:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 155,
                "blockMinutes": 138,
                "airMinutes": 125,
                "taxiOutMinutes": 8,
                "taxiInMinutes": 5
            },
            "airportResources": {
                "departureTerminal": "1",
                "departureGate": "D24",
                "arrivalTerminal": "E"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VP-BWE"
            }
        },
        {
            "flightId": 687778510,
            "carrierFsCode": "RU",
            "flightNumber": "118",
            "departureAirportFsCode": "HEL",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-22T00:50:00.000",
                "dateUtc": "2016-03-21T22:50:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T03:45:00.000",
                "dateUtc": "2016-03-22T00:45:00.000Z"
            },
            "status": "U",
            "schedule": {
                "flightType": "F",
                "serviceClasses": "Y",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T00:50:00.000",
                    "dateUtc": "2016-03-21T22:50:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T03:45:00.000",
                    "dateUtc": "2016-03-22T00:45:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T00:50:00.000",
                    "dateUtc": "2016-03-21T22:50:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T03:45:00.000",
                    "dateUtc": "2016-03-22T00:45:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 115
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "74Y"
            }
        },
        {
            "flightId": 687812409,
            "carrierFsCode": "SU",
            "flightNumber": "2017",
            "departureAirportFsCode": "PRG",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-22T00:50:00.000",
                "dateUtc": "2016-03-21T23:50:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T05:25:00.000",
                "dateUtc": "2016-03-22T02:25:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T00:50:00.000",
                    "dateUtc": "2016-03-21T23:50:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T05:25:00.000",
                    "dateUtc": "2016-03-22T02:25:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T00:50:00.000",
                    "dateUtc": "2016-03-21T23:50:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T00:46:00.000",
                    "dateUtc": "2016-03-21T23:46:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T00:46:00.000",
                    "dateUtc": "2016-03-21T23:46:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T00:46:00.000",
                    "dateUtc": "2016-03-21T23:46:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T00:46:00.000",
                    "dateUtc": "2016-03-21T23:46:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T05:25:00.000",
                    "dateUtc": "2016-03-22T02:25:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T05:08:00.000",
                    "dateUtc": "2016-03-22T02:08:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T05:08:00.000",
                    "dateUtc": "2016-03-22T02:08:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T05:03:00.000",
                    "dateUtc": "2016-03-22T02:03:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T05:03:00.000",
                    "dateUtc": "2016-03-22T02:03:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "OK",
                    "flightNumber": "4894",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 155,
                "blockMinutes": 142,
                "airMinutes": 137,
                "taxiOutMinutes": 0,
                "taxiInMinutes": 5
            },
            "airportResources": {
                "departureTerminal": "1",
                "departureGate": "A7",
                "arrivalTerminal": "E"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VQ-BSL"
            }
        },
        {
            "flightId": 687746888,
            "carrierFsCode": "SU",
            "flightNumber": "2387",
            "departureAirportFsCode": "ARN",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-22T00:55:00.000",
                "dateUtc": "2016-03-21T23:55:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T04:55:00.000",
                "dateUtc": "2016-03-22T01:55:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T00:55:00.000",
                    "dateUtc": "2016-03-21T23:55:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T04:55:00.000",
                    "dateUtc": "2016-03-22T01:55:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T00:55:00.000",
                    "dateUtc": "2016-03-21T23:55:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T00:57:00.000",
                    "dateUtc": "2016-03-21T23:57:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T00:57:00.000",
                    "dateUtc": "2016-03-21T23:57:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T01:07:00.000",
                    "dateUtc": "2016-03-22T00:07:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T01:07:00.000",
                    "dateUtc": "2016-03-22T00:07:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T04:55:00.000",
                    "dateUtc": "2016-03-22T01:55:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T04:49:00.000",
                    "dateUtc": "2016-03-22T01:49:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T04:49:00.000",
                    "dateUtc": "2016-03-22T01:49:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T04:44:00.000",
                    "dateUtc": "2016-03-22T01:44:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T04:44:00.000",
                    "dateUtc": "2016-03-22T01:44:00.000Z"
                }
            },
            "delays": {
                "departureGateDelayMinutes": 2
            },
            "flightDurations": {
                "scheduledBlockMinutes": 120,
                "blockMinutes": 112,
                "airMinutes": 97,
                "taxiOutMinutes": 10,
                "taxiInMinutes": 5
            },
            "airportResources": {
                "departureTerminal": "5",
                "departureGate": "18",
                "arrivalTerminal": "D"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VP-BRZ"
            }
        },
        {
            "flightId": 687766068,
            "carrierFsCode": "SU",
            "flightNumber": "235",
            "departureAirportFsCode": "DEL",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-22T01:05:00.000",
                "dateUtc": "2016-03-21T19:35:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T05:05:00.000",
                "dateUtc": "2016-03-22T02:05:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T01:05:00.000",
                    "dateUtc": "2016-03-21T19:35:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T05:05:00.000",
                    "dateUtc": "2016-03-22T02:05:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T01:05:00.000",
                    "dateUtc": "2016-03-21T19:35:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T01:04:00.000",
                    "dateUtc": "2016-03-21T19:34:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T01:04:00.000",
                    "dateUtc": "2016-03-21T19:34:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T05:05:00.000",
                    "dateUtc": "2016-03-22T02:05:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T05:26:00.000",
                    "dateUtc": "2016-03-22T02:26:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T05:26:00.000",
                    "dateUtc": "2016-03-22T02:26:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T05:20:00.000",
                    "dateUtc": "2016-03-22T02:20:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T05:20:00.000",
                    "dateUtc": "2016-03-22T02:20:00.000Z"
                }
            },
            "delays": {
                "arrivalGateDelayMinutes": 21
            },
            "flightDurations": {
                "scheduledBlockMinutes": 390,
                "blockMinutes": 412,
                "taxiInMinutes": 6
            },
            "airportResources": {
                "departureTerminal": "3",
                "arrivalTerminal": "F"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "73H"
            }
        },
        {
            "flightId": 687787454,
            "carrierFsCode": "SU",
            "flightNumber": "1845",
            "departureAirportFsCode": "KIV",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-22T01:40:00.000",
                "dateUtc": "2016-03-21T23:40:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T05:55:00.000",
                "dateUtc": "2016-03-22T02:55:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T01:40:00.000",
                    "dateUtc": "2016-03-21T23:40:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T05:55:00.000",
                    "dateUtc": "2016-03-22T02:55:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T01:40:00.000",
                    "dateUtc": "2016-03-21T23:40:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T01:34:00.000",
                    "dateUtc": "2016-03-21T23:34:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T01:34:00.000",
                    "dateUtc": "2016-03-21T23:34:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T01:41:00.000",
                    "dateUtc": "2016-03-21T23:41:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T01:41:00.000",
                    "dateUtc": "2016-03-21T23:41:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T05:55:00.000",
                    "dateUtc": "2016-03-22T02:55:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T05:18:00.000",
                    "dateUtc": "2016-03-22T02:18:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T05:18:00.000",
                    "dateUtc": "2016-03-22T02:18:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T05:12:00.000",
                    "dateUtc": "2016-03-22T02:12:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T05:12:00.000",
                    "dateUtc": "2016-03-22T02:12:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 195,
                "blockMinutes": 164,
                "airMinutes": 151,
                "taxiOutMinutes": 7,
                "taxiInMinutes": 6
            },
            "airportResources": {
                "arrivalTerminal": "D"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "32S",
                "tailNumber": "VQ-BHL"
            }
        },
        {
            "flightId": 687809308,
            "carrierFsCode": "SU",
            "flightNumber": "201",
            "departureAirportFsCode": "PEK",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-22T02:05:00.000",
                "dateUtc": "2016-03-21T18:05:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T05:25:00.000",
                "dateUtc": "2016-03-22T02:25:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T02:05:00.000",
                    "dateUtc": "2016-03-21T18:05:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T05:25:00.000",
                    "dateUtc": "2016-03-22T02:25:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T02:05:00.000",
                    "dateUtc": "2016-03-21T18:05:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T01:58:00.000",
                    "dateUtc": "2016-03-21T17:58:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T01:58:00.000",
                    "dateUtc": "2016-03-21T17:58:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T02:06:00.000",
                    "dateUtc": "2016-03-21T18:06:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T02:06:00.000",
                    "dateUtc": "2016-03-21T18:06:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T05:25:00.000",
                    "dateUtc": "2016-03-22T02:25:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T04:53:00.000",
                    "dateUtc": "2016-03-22T01:53:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T04:53:00.000",
                    "dateUtc": "2016-03-22T01:53:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T04:53:00.000",
                    "dateUtc": "2016-03-22T01:53:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T04:53:00.000",
                    "dateUtc": "2016-03-22T01:53:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 500,
                "blockMinutes": 475,
                "airMinutes": 467,
                "taxiOutMinutes": 8,
                "taxiInMinutes": 0
            },
            "airportResources": {
                "departureTerminal": "2",
                "departureGate": "10",
                "arrivalTerminal": "F"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "333",
                "actualEquipmentIataCode": "330",
                "tailNumber": "VQ-BPK"
            }
        },
        {
            "flightId": 687814677,
            "carrierFsCode": "SU",
            "flightNumber": "2119",
            "departureAirportFsCode": "RIX",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-22T02:20:00.000",
                "dateUtc": "2016-03-22T00:20:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T05:00:00.000",
                "dateUtc": "2016-03-22T02:00:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T02:20:00.000",
                    "dateUtc": "2016-03-22T00:20:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T05:00:00.000",
                    "dateUtc": "2016-03-22T02:00:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T02:20:00.000",
                    "dateUtc": "2016-03-22T00:20:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T02:23:00.000",
                    "dateUtc": "2016-03-22T00:23:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T02:23:00.000",
                    "dateUtc": "2016-03-22T00:23:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T02:33:00.000",
                    "dateUtc": "2016-03-22T00:33:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T02:33:00.000",
                    "dateUtc": "2016-03-22T00:33:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T05:00:00.000",
                    "dateUtc": "2016-03-22T02:00:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T04:47:00.000",
                    "dateUtc": "2016-03-22T01:47:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T04:47:00.000",
                    "dateUtc": "2016-03-22T01:47:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T04:41:00.000",
                    "dateUtc": "2016-03-22T01:41:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T04:41:00.000",
                    "dateUtc": "2016-03-22T01:41:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "BT",
                    "flightNumber": "7428",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 3
            },
            "flightDurations": {
                "scheduledBlockMinutes": 100,
                "blockMinutes": 84,
                "airMinutes": 68,
                "taxiOutMinutes": 10,
                "taxiInMinutes": 6
            },
            "airportResources": {
                "arrivalTerminal": "D"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "SU9",
                "actualEquipmentIataCode": "SU9",
                "tailNumber": "RA-89057"
            }
        },
        {
            "flightId": 687744599,
            "carrierFsCode": "SU",
            "flightNumber": "1131",
            "departureAirportFsCode": "AER",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-22T02:40:00.000",
                "dateUtc": "2016-03-21T23:40:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T05:10:00.000",
                "dateUtc": "2016-03-22T02:10:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T02:40:00.000",
                    "dateUtc": "2016-03-21T23:40:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T05:10:00.000",
                    "dateUtc": "2016-03-22T02:10:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T02:40:00.000",
                    "dateUtc": "2016-03-21T23:40:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T02:34:00.000",
                    "dateUtc": "2016-03-21T23:34:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T02:34:00.000",
                    "dateUtc": "2016-03-21T23:34:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T02:44:00.000",
                    "dateUtc": "2016-03-21T23:44:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T02:44:00.000",
                    "dateUtc": "2016-03-21T23:44:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T05:10:00.000",
                    "dateUtc": "2016-03-22T02:10:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T05:06:00.000",
                    "dateUtc": "2016-03-22T02:06:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T05:06:00.000",
                    "dateUtc": "2016-03-22T02:06:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T05:00:00.000",
                    "dateUtc": "2016-03-22T02:00:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T05:00:00.000",
                    "dateUtc": "2016-03-22T02:00:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AF",
                    "flightNumber": "4973",
                    "relationship": "L"
                },
                {
                    "fsCode": "AZ",
                    "flightNumber": "5655",
                    "relationship": "L"
                },
                {
                    "fsCode": "JU",
                    "flightNumber": "8189",
                    "relationship": "L"
                },
                {
                    "fsCode": "KL",
                    "flightNumber": "3203",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 150,
                "blockMinutes": 152,
                "airMinutes": 136,
                "taxiOutMinutes": 10,
                "taxiInMinutes": 6
            },
            "airportResources": {
                "arrivalTerminal": "D"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "321",
                "actualEquipmentIataCode": "321",
                "tailNumber": "VP-BQX"
            }
        },
        {
            "flightId": 687800325,
            "carrierFsCode": "SU",
            "flightNumber": "1323",
            "departureAirportFsCode": "MMK",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-22T02:50:00.000",
                "dateUtc": "2016-03-21T23:50:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T05:10:00.000",
                "dateUtc": "2016-03-22T02:10:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T02:50:00.000",
                    "dateUtc": "2016-03-21T23:50:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T05:10:00.000",
                    "dateUtc": "2016-03-22T02:10:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T02:50:00.000",
                    "dateUtc": "2016-03-21T23:50:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T03:01:00.000",
                    "dateUtc": "2016-03-22T00:01:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T03:01:00.000",
                    "dateUtc": "2016-03-22T00:01:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T05:10:00.000",
                    "dateUtc": "2016-03-22T02:10:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T05:13:00.000",
                    "dateUtc": "2016-03-22T02:13:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T05:13:00.000",
                    "dateUtc": "2016-03-22T02:13:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T05:05:00.000",
                    "dateUtc": "2016-03-22T02:05:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T05:05:00.000",
                    "dateUtc": "2016-03-22T02:05:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "KL",
                    "flightNumber": "2850",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 11,
                "arrivalGateDelayMinutes": 3
            },
            "flightDurations": {
                "scheduledBlockMinutes": 140,
                "blockMinutes": 132,
                "taxiInMinutes": 8
            },
            "airportResources": {
                "arrivalTerminal": "D"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VQ-BST"
            }
        },
        {
            "flightId": 687801077,
            "carrierFsCode": "SU",
            "flightNumber": "1299",
            "departureAirportFsCode": "MRV",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-22T02:50:00.000",
                "dateUtc": "2016-03-21T23:50:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T05:15:00.000",
                "dateUtc": "2016-03-22T02:15:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T02:50:00.000",
                    "dateUtc": "2016-03-21T23:50:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T05:15:00.000",
                    "dateUtc": "2016-03-22T02:15:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T02:50:00.000",
                    "dateUtc": "2016-03-21T23:50:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T04:19:00.000",
                    "dateUtc": "2016-03-22T01:19:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T04:19:00.000",
                    "dateUtc": "2016-03-22T01:19:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T05:15:00.000",
                    "dateUtc": "2016-03-22T02:15:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T06:43:00.000",
                    "dateUtc": "2016-03-22T03:43:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T06:43:00.000",
                    "dateUtc": "2016-03-22T03:43:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T06:36:00.000",
                    "dateUtc": "2016-03-22T03:36:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T06:36:00.000",
                    "dateUtc": "2016-03-22T03:36:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "KL",
                    "flightNumber": "3072",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 89,
                "arrivalGateDelayMinutes": 88
            },
            "flightDurations": {
                "scheduledBlockMinutes": 145,
                "blockMinutes": 144,
                "taxiInMinutes": 7
            },
            "airportResources": {
                "arrivalTerminal": "D"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VP-BJA"
            }
        },
        {
            "flightId": 687746628,
            "carrierFsCode": "SU",
            "flightNumber": "1335",
            "departureAirportFsCode": "ARH",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-22T02:55:00.000",
                "dateUtc": "2016-03-21T23:55:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T04:35:00.000",
                "dateUtc": "2016-03-22T01:35:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T02:55:00.000",
                    "dateUtc": "2016-03-21T23:55:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T04:35:00.000",
                    "dateUtc": "2016-03-22T01:35:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T02:55:00.000",
                    "dateUtc": "2016-03-21T23:55:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T02:50:00.000",
                    "dateUtc": "2016-03-21T23:50:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T02:50:00.000",
                    "dateUtc": "2016-03-21T23:50:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T04:35:00.000",
                    "dateUtc": "2016-03-22T01:35:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T04:32:00.000",
                    "dateUtc": "2016-03-22T01:32:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T04:32:00.000",
                    "dateUtc": "2016-03-22T01:32:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T04:27:00.000",
                    "dateUtc": "2016-03-22T01:27:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T04:27:00.000",
                    "dateUtc": "2016-03-22T01:27:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "KL",
                    "flightNumber": "2857",
                    "relationship": "L"
                }
            ],
            "flightDurations": {
                "scheduledBlockMinutes": 100,
                "blockMinutes": 102,
                "taxiInMinutes": 5
            },
            "airportResources": {
                "arrivalTerminal": "D"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VQ-BBB"
            }
        },
        {
            "flightId": 687824906,
            "carrierFsCode": "SU",
            "flightNumber": "1893",
            "departureAirportFsCode": "TBS",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-22T03:00:00.000",
                "dateUtc": "2016-03-21T23:00:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T04:40:00.000",
                "dateUtc": "2016-03-22T01:40:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T03:00:00.000",
                    "dateUtc": "2016-03-21T23:00:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T04:40:00.000",
                    "dateUtc": "2016-03-22T01:40:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T03:00:00.000",
                    "dateUtc": "2016-03-21T23:00:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T03:15:00.000",
                    "dateUtc": "2016-03-21T23:15:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T03:15:00.000",
                    "dateUtc": "2016-03-21T23:15:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T03:25:00.000",
                    "dateUtc": "2016-03-21T23:25:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T03:25:00.000",
                    "dateUtc": "2016-03-21T23:25:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T04:40:00.000",
                    "dateUtc": "2016-03-22T01:40:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T05:04:00.000",
                    "dateUtc": "2016-03-22T02:04:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T05:04:00.000",
                    "dateUtc": "2016-03-22T02:04:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T04:58:00.000",
                    "dateUtc": "2016-03-22T01:58:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T04:58:00.000",
                    "dateUtc": "2016-03-22T01:58:00.000Z"
                }
            },
            "delays": {
                "departureGateDelayMinutes": 15,
                "arrivalGateDelayMinutes": 24
            },
            "flightDurations": {
                "scheduledBlockMinutes": 160,
                "blockMinutes": 169,
                "airMinutes": 153,
                "taxiOutMinutes": 10,
                "taxiInMinutes": 6
            },
            "airportResources": {
                "arrivalTerminal": "D"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VQ-BSJ"
            }
        },
        {
            "flightId": 687814976,
            "carrierFsCode": "SU",
            "flightNumber": "1167",
            "departureAirportFsCode": "ROV",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-22T03:25:00.000",
                "dateUtc": "2016-03-22T00:25:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T05:20:00.000",
                "dateUtc": "2016-03-22T02:20:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T03:25:00.000",
                    "dateUtc": "2016-03-22T00:25:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T05:20:00.000",
                    "dateUtc": "2016-03-22T02:20:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T03:25:00.000",
                    "dateUtc": "2016-03-22T00:25:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T03:48:00.000",
                    "dateUtc": "2016-03-22T00:48:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T03:48:00.000",
                    "dateUtc": "2016-03-22T00:48:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T05:20:00.000",
                    "dateUtc": "2016-03-22T02:20:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T05:54:00.000",
                    "dateUtc": "2016-03-22T02:54:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T05:54:00.000",
                    "dateUtc": "2016-03-22T02:54:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T05:46:00.000",
                    "dateUtc": "2016-03-22T02:46:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T05:46:00.000",
                    "dateUtc": "2016-03-22T02:46:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AZ",
                    "flightNumber": "3023",
                    "relationship": "L"
                },
                {
                    "fsCode": "KL",
                    "flightNumber": "3282",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 23,
                "arrivalGateDelayMinutes": 34
            },
            "flightDurations": {
                "scheduledBlockMinutes": 115,
                "blockMinutes": 126,
                "taxiInMinutes": 8
            },
            "airportResources": {
                "arrivalTerminal": "D"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "SU9",
                "actualEquipmentIataCode": "SU9",
                "tailNumber": "RA-89056"
            }
        },
        {
            "flightId": 687788869,
            "carrierFsCode": "SU",
            "flightNumber": "1113",
            "departureAirportFsCode": "KRR",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-22T03:35:00.000",
                "dateUtc": "2016-03-22T00:35:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T05:50:00.000",
                "dateUtc": "2016-03-22T02:50:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T03:35:00.000",
                    "dateUtc": "2016-03-22T00:35:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T05:50:00.000",
                    "dateUtc": "2016-03-22T02:50:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T03:35:00.000",
                    "dateUtc": "2016-03-22T00:35:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T03:39:00.000",
                    "dateUtc": "2016-03-22T00:39:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T03:39:00.000",
                    "dateUtc": "2016-03-22T00:39:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T03:40:00.000",
                    "dateUtc": "2016-03-22T00:40:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T03:40:00.000",
                    "dateUtc": "2016-03-22T00:40:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T05:50:00.000",
                    "dateUtc": "2016-03-22T02:50:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T05:40:00.000",
                    "dateUtc": "2016-03-22T02:40:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T05:40:00.000",
                    "dateUtc": "2016-03-22T02:40:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T05:39:00.000",
                    "dateUtc": "2016-03-22T02:39:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T05:39:00.000",
                    "dateUtc": "2016-03-22T02:39:00.000Z"
                }
            },
            "codeshares": [
                {
                    "fsCode": "KL",
                    "flightNumber": "2902",
                    "relationship": "L"
                }
            ],
            "delays": {
                "departureGateDelayMinutes": 4
            },
            "flightDurations": {
                "scheduledBlockMinutes": 135,
                "blockMinutes": 121,
                "airMinutes": 119,
                "taxiOutMinutes": 1,
                "taxiInMinutes": 1
            },
            "airportResources": {
                "arrivalTerminal": "D"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "73H",
                "actualEquipmentIataCode": "73H",
                "tailNumber": "VQ-BWF"
            }
        },
        {
            "flightId": 687818137,
            "carrierFsCode": "SU",
            "flightNumber": "1511",
            "departureAirportFsCode": "SGC",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-22T04:30:00.000",
                "dateUtc": "2016-03-21T23:30:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T05:50:00.000",
                "dateUtc": "2016-03-22T02:50:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T04:30:00.000",
                    "dateUtc": "2016-03-21T23:30:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T05:50:00.000",
                    "dateUtc": "2016-03-22T02:50:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T04:30:00.000",
                    "dateUtc": "2016-03-21T23:30:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T04:38:00.000",
                    "dateUtc": "2016-03-21T23:38:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T04:38:00.000",
                    "dateUtc": "2016-03-21T23:38:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T05:50:00.000",
                    "dateUtc": "2016-03-22T02:50:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T05:55:00.000",
                    "dateUtc": "2016-03-22T02:55:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T05:55:00.000",
                    "dateUtc": "2016-03-22T02:55:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T05:50:00.000",
                    "dateUtc": "2016-03-22T02:50:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T05:50:00.000",
                    "dateUtc": "2016-03-22T02:50:00.000Z"
                }
            },
            "delays": {
                "departureGateDelayMinutes": 8,
                "arrivalGateDelayMinutes": 5
            },
            "flightDurations": {
                "scheduledBlockMinutes": 200,
                "blockMinutes": 197,
                "taxiInMinutes": 5
            },
            "airportResources": {
                "arrivalTerminal": "D"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VP-BLR"
            }
        },
        {
            "flightId": 687791894,
            "carrierFsCode": "SU",
            "flightNumber": "37",
            "departureAirportFsCode": "LED",
            "arrivalAirportFsCode": "SVO",
            "departureDate": {
                "dateLocal": "2016-03-22T04:30:00.000",
                "dateUtc": "2016-03-22T01:30:00.000Z"
            },
            "arrivalDate": {
                "dateLocal": "2016-03-22T05:45:00.000",
                "dateUtc": "2016-03-22T02:45:00.000Z"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": ""
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateLocal": "2016-03-22T04:30:00.000",
                    "dateUtc": "2016-03-22T01:30:00.000Z"
                },
                "publishedArrival": {
                    "dateLocal": "2016-03-22T05:45:00.000",
                    "dateUtc": "2016-03-22T02:45:00.000Z"
                },
                "scheduledGateDeparture": {
                    "dateLocal": "2016-03-22T04:30:00.000",
                    "dateUtc": "2016-03-22T01:30:00.000Z"
                },
                "estimatedGateDeparture": {
                    "dateLocal": "2016-03-22T04:29:00.000",
                    "dateUtc": "2016-03-22T01:29:00.000Z"
                },
                "actualGateDeparture": {
                    "dateLocal": "2016-03-22T04:29:00.000",
                    "dateUtc": "2016-03-22T01:29:00.000Z"
                },
                "estimatedRunwayDeparture": {
                    "dateLocal": "2016-03-22T04:39:00.000",
                    "dateUtc": "2016-03-22T01:39:00.000Z"
                },
                "actualRunwayDeparture": {
                    "dateLocal": "2016-03-22T04:39:00.000",
                    "dateUtc": "2016-03-22T01:39:00.000Z"
                },
                "scheduledGateArrival": {
                    "dateLocal": "2016-03-22T05:45:00.000",
                    "dateUtc": "2016-03-22T02:45:00.000Z"
                },
                "estimatedGateArrival": {
                    "dateLocal": "2016-03-22T05:40:00.000",
                    "dateUtc": "2016-03-22T02:40:00.000Z"
                },
                "actualGateArrival": {
                    "dateLocal": "2016-03-22T05:40:00.000",
                    "dateUtc": "2016-03-22T02:40:00.000Z"
                },
                "estimatedRunwayArrival": {
                    "dateLocal": "2016-03-22T05:31:00.000",
                    "dateUtc": "2016-03-22T02:31:00.000Z"
                },
                "actualRunwayArrival": {
                    "dateLocal": "2016-03-22T05:31:00.000",
                    "dateUtc": "2016-03-22T02:31:00.000Z"
                }
            },
            "flightDurations": {
                "scheduledBlockMinutes": 75,
                "blockMinutes": 71,
                "airMinutes": 52,
                "taxiOutMinutes": 10,
                "taxiInMinutes": 9
            },
            "airportResources": {
                "departureTerminal": "1",
                "departureGate": "D05",
                "arrivalTerminal": "D"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "321",
                "actualEquipmentIataCode": "321",
                "tailNumber": "VP-BDC"
            }
        }
    ]
};