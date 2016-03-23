// curl -v  -X GET "https://api.flightstats.com/flex/flightstatus/historical/rest/v2/json/airport/status/svo/dep/2016/03/23/12?appId=&appKey=&utc=false&numHours=6"

module.exports = {
    "request": {
        "endpoint": "ByAirportByDeparture",
        "departureAirport": {
            "requested": "svo",
            "interpreted": "SVO"
        },
        "year": {
            "requested": "2016",
            "interpreted": 2016
        },
        "month": {
            "requested": "03",
            "interpreted": 3
        },
        "day": {
            "requested": "23",
            "interpreted": 23
        },
        "hour": {
            "requested": "12",
            "interpreted": 12
        },
        "isUtc": {
            "requested": "false",
            "interpreted": false
        },
        "numHours": {
            "requested": "6",
            "interpreted": 6
        },
        "maxFlights": {
            "interpreted": 5
        },
        "url": "https://api.flightstats.com/flex/flightstatus/historical/rest/v2/json/airport/status/svo/dep/2016/03/23/12?utc=false&numHours=6"
    },
    "flightStatuses": [
        {
            "flightId": 688291688,
            "carrierFsCode": "RU",
            "operatingCarrierFsCode": "RU",
            "primaryCarrierFsCode": "RU",
            "flightNumber": "367",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "PVG",
            "departureDate": {
                "dateUtc": "2016-03-23T10:20:00.000Z",
                "dateLocal": "2016-03-23T13:20:00.000"
            },
            "arrivalDate": {
                "dateUtc": "2016-03-23T19:00:00.000Z",
                "dateLocal": "2016-03-24T03:00:00.000"
            },
            "status": "A",
            "schedule": {
                "flightType": "F",
                "serviceClasses": "Y",
                "restrictions": "",
                "uplines": [],
                "downlines": [
                    {
                        "fsCode": "ANC",
                        "flightId": 688281832
                    }
                ]
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateUtc": "2016-03-23T10:20:00.000Z",
                    "dateLocal": "2016-03-23T13:20:00.000"
                },
                "scheduledGateDeparture": {
                    "dateUtc": "2016-03-23T10:20:00.000Z",
                    "dateLocal": "2016-03-23T13:20:00.000"
                },
                "estimatedGateDeparture": {
                    "dateUtc": "2016-03-23T10:20:00.000Z",
                    "dateLocal": "2016-03-23T13:20:00.000"
                },
                "estimatedRunwayDeparture": {
                    "dateUtc": "2016-03-23T16:55:00.000Z",
                    "dateLocal": "2016-03-23T19:55:00.000"
                },
                "actualRunwayDeparture": {
                    "dateUtc": "2016-03-23T16:55:00.000Z",
                    "dateLocal": "2016-03-23T19:55:00.000"
                },
                "publishedArrival": {
                    "dateUtc": "2016-03-23T19:00:00.000Z",
                    "dateLocal": "2016-03-24T03:00:00.000"
                },
                "scheduledGateArrival": {
                    "dateUtc": "2016-03-23T19:00:00.000Z",
                    "dateLocal": "2016-03-24T03:00:00.000"
                },
                "estimatedGateArrival": {
                    "dateUtc": "2016-03-23T19:00:00.000Z",
                    "dateLocal": "2016-03-24T03:00:00.000"
                }
            },
            "codeshares": [],
            "delays": {},
            "flightDurations": {
                "scheduledBlockMinutes": 520
            },
            "airportResources": {},
            "flightEquipment": {
                "scheduledEquipmentIataCode": "74Y",
                "tailNumber": "VQ-BGZ"
            },
            "irregularOperations": []
        },
        {
            "flightId": 688291457,
            "carrierFsCode": "SU",
            "operatingCarrierFsCode": "SU",
            "primaryCarrierFsCode": "SU",
            "flightNumber": "1124",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "AER",
            "departureDate": {
                "dateUtc": "2016-03-23T10:40:00.000Z",
                "dateLocal": "2016-03-23T13:40:00.000"
            },
            "arrivalDate": {
                "dateUtc": "2016-03-23T13:05:00.000Z",
                "dateLocal": "2016-03-23T16:05:00.000"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": "",
                "uplines": [],
                "downlines": []
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateUtc": "2016-03-23T10:40:00.000Z",
                    "dateLocal": "2016-03-23T13:40:00.000"
                },
                "scheduledGateDeparture": {
                    "dateUtc": "2016-03-23T10:40:00.000Z",
                    "dateLocal": "2016-03-23T13:40:00.000"
                },
                "estimatedGateDeparture": {
                    "dateUtc": "2016-03-23T10:39:00.000Z",
                    "dateLocal": "2016-03-23T13:39:00.000"
                },
                "actualGateDeparture": {
                    "dateUtc": "2016-03-23T10:39:00.000Z",
                    "dateLocal": "2016-03-23T13:39:00.000"
                },
                "estimatedRunwayDeparture": {
                    "dateUtc": "2016-03-23T10:58:00.000Z",
                    "dateLocal": "2016-03-23T13:58:00.000"
                },
                "actualRunwayDeparture": {
                    "dateUtc": "2016-03-23T10:58:00.000Z",
                    "dateLocal": "2016-03-23T13:58:00.000"
                },
                "publishedArrival": {
                    "dateUtc": "2016-03-23T13:05:00.000Z",
                    "dateLocal": "2016-03-23T16:05:00.000"
                },
                "scheduledGateArrival": {
                    "dateUtc": "2016-03-23T13:05:00.000Z",
                    "dateLocal": "2016-03-23T16:05:00.000"
                },
                "estimatedGateArrival": {
                    "dateUtc": "2016-03-23T13:04:00.000Z",
                    "dateLocal": "2016-03-23T16:04:00.000"
                },
                "actualGateArrival": {
                    "dateUtc": "2016-03-23T13:04:00.000Z",
                    "dateLocal": "2016-03-23T16:04:00.000"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AF",
                    "flightNumber": "4924",
                    "relationship": "L"
                },
                {
                    "fsCode": "JU",
                    "flightNumber": "8146",
                    "relationship": "L"
                },
                {
                    "fsCode": "KL",
                    "flightNumber": "3068",
                    "relationship": "L"
                }
            ],
            "delays": {},
            "flightDurations": {
                "scheduledBlockMinutes": 145,
                "blockMinutes": 145,
                "taxiOutMinutes": 19
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "14"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "321",
                "actualEquipmentIataCode": "321",
                "tailNumber": "VP-BUM"
            },
            "irregularOperations": []
        },
        {
            "flightId": 688291675,
            "carrierFsCode": "SU",
            "operatingCarrierFsCode": "SU",
            "primaryCarrierFsCode": "SU",
            "flightNumber": "200",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "PEK",
            "departureDate": {
                "dateUtc": "2016-03-23T08:50:00.000Z",
                "dateLocal": "2016-03-23T11:50:00.000"
            },
            "arrivalDate": {
                "dateUtc": "2016-03-23T16:30:00.000Z",
                "dateLocal": "2016-03-24T00:30:00.000"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RJY",
                "restrictions": "",
                "uplines": [],
                "downlines": []
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateUtc": "2016-03-23T08:50:00.000Z",
                    "dateLocal": "2016-03-23T11:50:00.000"
                },
                "scheduledGateDeparture": {
                    "dateUtc": "2016-03-23T08:50:00.000Z",
                    "dateLocal": "2016-03-23T11:50:00.000"
                },
                "estimatedGateDeparture": {
                    "dateUtc": "2016-03-23T08:42:00.000Z",
                    "dateLocal": "2016-03-23T11:42:00.000"
                },
                "actualGateDeparture": {
                    "dateUtc": "2016-03-23T08:42:00.000Z",
                    "dateLocal": "2016-03-23T11:42:00.000"
                },
                "estimatedRunwayDeparture": {
                    "dateUtc": "2016-03-23T09:00:00.000Z",
                    "dateLocal": "2016-03-23T12:00:00.000"
                },
                "actualRunwayDeparture": {
                    "dateUtc": "2016-03-23T09:00:00.000Z",
                    "dateLocal": "2016-03-23T12:00:00.000"
                },
                "publishedArrival": {
                    "dateUtc": "2016-03-23T16:30:00.000Z",
                    "dateLocal": "2016-03-24T00:30:00.000"
                },
                "scheduledGateArrival": {
                    "dateUtc": "2016-03-23T16:30:00.000Z",
                    "dateLocal": "2016-03-24T00:30:00.000"
                },
                "estimatedGateArrival": {
                    "dateUtc": "2016-03-23T15:55:00.000Z",
                    "dateLocal": "2016-03-23T23:55:00.000"
                },
                "actualGateArrival": {
                    "dateUtc": "2016-03-23T15:55:00.000Z",
                    "dateLocal": "2016-03-23T23:55:00.000"
                },
                "estimatedRunwayArrival": {
                    "dateUtc": "2016-03-23T15:53:00.000Z",
                    "dateLocal": "2016-03-23T23:53:00.000"
                },
                "actualRunwayArrival": {
                    "dateUtc": "2016-03-23T15:53:00.000Z",
                    "dateLocal": "2016-03-23T23:53:00.000"
                }
            },
            "codeshares": [],
            "delays": {},
            "flightDurations": {
                "scheduledBlockMinutes": 460,
                "blockMinutes": 433,
                "airMinutes": 413,
                "taxiOutMinutes": 18,
                "taxiInMinutes": 2
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
                "tailNumber": "VQ-BMY"
            },
            "irregularOperations": []
        },
        {
            "flightId": 688291587,
            "carrierFsCode": "SU",
            "operatingCarrierFsCode": "SU",
            "primaryCarrierFsCode": "SU",
            "flightNumber": "1104",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "KRR",
            "departureDate": {
                "dateUtc": "2016-03-23T11:35:00.000Z",
                "dateLocal": "2016-03-23T14:35:00.000"
            },
            "arrivalDate": {
                "dateUtc": "2016-03-23T13:55:00.000Z",
                "dateLocal": "2016-03-23T16:55:00.000"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": "",
                "uplines": [],
                "downlines": []
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateUtc": "2016-03-23T11:35:00.000Z",
                    "dateLocal": "2016-03-23T14:35:00.000"
                },
                "scheduledGateDeparture": {
                    "dateUtc": "2016-03-23T11:35:00.000Z",
                    "dateLocal": "2016-03-23T14:35:00.000"
                },
                "estimatedGateDeparture": {
                    "dateUtc": "2016-03-23T11:35:00.000Z",
                    "dateLocal": "2016-03-23T14:35:00.000"
                },
                "actualGateDeparture": {
                    "dateUtc": "2016-03-23T11:35:00.000Z",
                    "dateLocal": "2016-03-23T14:35:00.000"
                },
                "estimatedRunwayDeparture": {
                    "dateUtc": "2016-03-23T11:48:00.000Z",
                    "dateLocal": "2016-03-23T14:48:00.000"
                },
                "actualRunwayDeparture": {
                    "dateUtc": "2016-03-23T11:48:00.000Z",
                    "dateLocal": "2016-03-23T14:48:00.000"
                },
                "publishedArrival": {
                    "dateUtc": "2016-03-23T13:55:00.000Z",
                    "dateLocal": "2016-03-23T16:55:00.000"
                },
                "scheduledGateArrival": {
                    "dateUtc": "2016-03-23T13:55:00.000Z",
                    "dateLocal": "2016-03-23T16:55:00.000"
                },
                "estimatedGateArrival": {
                    "dateUtc": "2016-03-23T13:42:00.000Z",
                    "dateLocal": "2016-03-23T16:42:00.000"
                },
                "actualGateArrival": {
                    "dateUtc": "2016-03-23T13:42:00.000Z",
                    "dateLocal": "2016-03-23T16:42:00.000"
                }
            },
            "codeshares": [
                {
                    "fsCode": "AZ",
                    "flightNumber": "3035",
                    "relationship": "L"
                },
                {
                    "fsCode": "JU",
                    "flightNumber": "8802",
                    "relationship": "L"
                }
            ],
            "delays": {},
            "flightDurations": {
                "scheduledBlockMinutes": 140,
                "blockMinutes": 127,
                "taxiOutMinutes": 13
            },
            "airportResources": {
                "departureTerminal": "D",
                "departureGate": "3"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "320",
                "actualEquipmentIataCode": "320",
                "tailNumber": "VP-BKY"
            },
            "irregularOperations": []
        },
        {
            "flightId": 688291679,
            "carrierFsCode": "OK",
            "operatingCarrierFsCode": "OK",
            "primaryCarrierFsCode": "OK",
            "flightNumber": "895",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "PRG",
            "departureDate": {
                "dateUtc": "2016-03-23T13:45:00.000Z",
                "dateLocal": "2016-03-23T16:45:00.000"
            },
            "arrivalDate": {
                "dateUtc": "2016-03-23T16:40:00.000Z",
                "dateLocal": "2016-03-23T17:40:00.000"
            },
            "status": "L",
            "schedule": {
                "flightType": "J",
                "serviceClasses": "RFJY",
                "restrictions": "",
                "uplines": [],
                "downlines": []
            },
            "operationalTimes": {
                "publishedDeparture": {
                    "dateUtc": "2016-03-23T13:45:00.000Z",
                    "dateLocal": "2016-03-23T16:45:00.000"
                },
                "scheduledGateDeparture": {
                    "dateUtc": "2016-03-23T13:45:00.000Z",
                    "dateLocal": "2016-03-23T16:45:00.000"
                },
                "estimatedRunwayDeparture": {
                    "dateUtc": "2016-03-23T14:39:00.000Z",
                    "dateLocal": "2016-03-23T17:39:00.000"
                },
                "actualRunwayDeparture": {
                    "dateUtc": "2016-03-23T14:39:00.000Z",
                    "dateLocal": "2016-03-23T17:39:00.000"
                },
                "publishedArrival": {
                    "dateUtc": "2016-03-23T16:40:00.000Z",
                    "dateLocal": "2016-03-23T17:40:00.000"
                },
                "scheduledGateArrival": {
                    "dateUtc": "2016-03-23T16:40:00.000Z",
                    "dateLocal": "2016-03-23T17:40:00.000"
                },
                "estimatedGateArrival": {
                    "dateUtc": "2016-03-23T17:10:00.000Z",
                    "dateLocal": "2016-03-23T18:10:00.000"
                },
                "estimatedRunwayArrival": {
                    "dateUtc": "2016-03-23T17:04:00.000Z",
                    "dateLocal": "2016-03-23T18:04:00.000"
                },
                "actualRunwayArrival": {
                    "dateUtc": "2016-03-23T17:04:00.000Z",
                    "dateLocal": "2016-03-23T18:04:00.000"
                }
            },
            "codeshares": [
                {
                    "fsCode": "SU",
                    "flightNumber": "3302",
                    "relationship": "L"
                }
            ],
            "delays": {
                "arrivalGateDelayMinutes": 30
            },
            "flightDurations": {
                "scheduledBlockMinutes": 175,
                "airMinutes": 145
            },
            "airportResources": {
                "departureTerminal": "F",
                "departureGate": "43",
                "arrivalTerminal": "1"
            },
            "flightEquipment": {
                "scheduledEquipmentIataCode": "319",
                "actualEquipmentIataCode": "319",
                "tailNumber": "OK-NEP"
            },
            "irregularOperations": []
        }
    ],
    "appendix": {
        "airlines": [
            {
                "fs": "OK",
                "iata": "OK",
                "icao": "CSA",
                "name": "CSA",
                "phoneNumber": "+1 (866) 293-8702",
                "active": true,
                "category": "I"
            },
            {
                "fs": "SU",
                "iata": "SU",
                "icao": "AFL",
                "name": "Aeroflot",
                "phoneNumber": "+7 495 223-55-55 ",
                "active": true,
                "category": "I"
            },
            {
                "fs": "AF",
                "iata": "AF",
                "icao": "AFR",
                "name": "Air France",
                "phoneNumber": "1-800-237-2747",
                "active": true,
                "category": "I"
            },
            {
                "fs": "RU",
                "iata": "RU",
                "icao": "ABW",
                "name": "AirBridgeCargo",
                "active": true,
                "category": "C"
            },
            {
                "fs": "AZ",
                "iata": "AZ",
                "icao": "AZA",
                "name": "Alitalia",
                "phoneNumber": "1-800-223-5730",
                "active": true,
                "category": "I"
            },
            {
                "fs": "JU",
                "iata": "JU",
                "icao": "JAT",
                "name": "Air Serbia",
                "active": true,
                "category": "I"
            },
            {
                "fs": "KL",
                "iata": "KL",
                "icao": "KLM",
                "name": "KLM",
                "phoneNumber": "1-800-447-4747",
                "active": true,
                "category": "I"
            }
        ],
        "airports": [
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
                "localTime": "2016-03-23T20:16:39.799",
                "utcOffsetHours": 1,
                "latitude": 50.106188,
                "longitude": 14.266638,
                "elevationFeet": 1170,
                "classification": 2,
                "active": true
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
                "localTime": "2016-03-23T22:16:39.799",
                "utcOffsetHours": 3,
                "latitude": 55.966324,
                "longitude": 37.416574,
                "elevationFeet": 630,
                "classification": 1,
                "active": true
            },
            {
                "fs": "PEK",
                "iata": "PEK",
                "icao": "ZBAA",
                "name": "Beijing Capital International Airport",
                "street1": "Capital Airport Rd",
                "street2": "Capital Airport Rd",
                "city": "Beijing",
                "cityCode": "BJS",
                "countryCode": "CN",
                "district": "Chaoyang",
                "countryName": "China",
                "regionName": "Asia",
                "timeZoneRegionName": "Asia/Shanghai",
                "localTime": "2016-03-24T03:16:39.799",
                "utcOffsetHours": 8,
                "latitude": 40.078538,
                "longitude": 116.587095,
                "elevationFeet": 115,
                "classification": 1,
                "active": true
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
                "localTime": "2016-03-23T22:16:39.799",
                "utcOffsetHours": 3,
                "latitude": 45.034138,
                "longitude": 39.139002,
                "elevationFeet": 118,
                "classification": 3,
                "active": true
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
                "localTime": "2016-03-23T22:16:39.799",
                "utcOffsetHours": 3,
                "latitude": 43.44884,
                "longitude": 39.941106,
                "elevationFeet": 89,
                "classification": 3,
                "active": true
            },
            {
                "fs": "PVG",
                "iata": "PVG",
                "icao": "ZSPD",
                "name": "Shanghai Pudong International Airport",
                "street1": "No.300 Qihang Road",
                "street2": "No.300 Qihang Road",
                "city": "Shanghai",
                "cityCode": "SHA",
                "countryCode": "CN",
                "district": "Pudong",
                "countryName": "China",
                "regionName": "Asia",
                "timeZoneRegionName": "Asia/Shanghai",
                "localTime": "2016-03-24T03:16:39.799",
                "utcOffsetHours": 8,
                "latitude": 31.151824,
                "longitude": 121.799808,
                "elevationFeet": 13,
                "classification": 1,
                "active": true
            },
            {
                "fs": "ANC",
                "iata": "ANC",
                "icao": "PANC",
                "faa": "PANC",
                "name": "Ted Stevens Anchorage International Airport",
                "city": "Anchorage",
                "cityCode": "ANC",
                "stateCode": "AK",
                "postalCode": "99519-6960",
                "countryCode": "US",
                "countryName": "United States",
                "regionName": "North America",
                "timeZoneRegionName": "America/Anchorage",
                "weatherZone": "AKZ101",
                "localTime": "2016-03-23T11:16:39.799",
                "utcOffsetHours": -8,
                "latitude": 61.174444,
                "longitude": -149.996389,
                "elevationFeet": 144,
                "classification": 1,
                "active": true
            }
        ],
        "equipments": [
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
                "iata": "330",
                "name": "Airbus A330",
                "turboProp": false,
                "jet": true,
                "widebody": true,
                "regional": false
            },
            {
                "iata": "319",
                "name": "Airbus A319",
                "turboProp": false,
                "jet": true,
                "widebody": false,
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
                "iata": "74Y",
                "name": "Boeing 747-400 Freighter",
                "turboProp": false,
                "jet": true,
                "widebody": true,
                "regional": false
            }
        ]
    }
};