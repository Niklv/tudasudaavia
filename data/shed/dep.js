module.exports = {
    "request": {
        "airport": {
            "requestedCode": "svo",
            "fsCode": "SVO"
        },
        "codeType": {},
        "departing": true,
        "date": {
            "year": "2016",
            "month": "10",
            "day": "10",
            "interpreted": "2016-10-10"
        },
        "hourOfDay": {
            "requested": "0",
            "interpreted": 0
        },
        "url": "https://api.flightstats.com/flex/schedules/rest/v1/json/from/svo/departing/2016/10/10/0"
    },
    "scheduledFlights": [
        {
            "carrierFsCode": "SU",
            "flightNumber": "1942",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "ALA",
            "stops": 0,
            "departureTerminal": "F",
            "departureTime": "2016-10-10T00:45:00.000",
            "arrivalTime": "2016-10-10T08:10:00.000",
            "flightEquipmentIataCode": "32S",
            "isCodeshare": false,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "R",
                "J",
                "Y"
            ],
            "trafficRestrictions": [],
            "codeshares": [],
            "referenceCode": "1678-3564426--"
        },
        {
            "carrierFsCode": "SU",
            "flightNumber": "1334",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "ARH",
            "stops": 0,
            "departureTerminal": "D",
            "departureTime": "2016-10-10T00:10:00.000",
            "arrivalTime": "2016-10-10T01:55:00.000",
            "flightEquipmentIataCode": "SU1",
            "isCodeshare": false,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "R",
                "F",
                "J",
                "Y"
            ],
            "trafficRestrictions": [],
            "codeshares": [
                {
                    "carrierFsCode": "KL",
                    "flightNumber": "2858",
                    "serviceType": "J",
                    "serviceClasses": [
                        "R",
                        "F",
                        "J",
                        "Y"
                    ],
                    "trafficRestrictions": [
                        "G"
                    ],
                    "referenceCode": 3564539
                }
            ],
            "referenceCode": "1678-3564529--"
        },
        {
            "carrierFsCode": "KL",
            "flightNumber": "2858",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "ARH",
            "stops": 0,
            "departureTerminal": "D",
            "departureTime": "2016-10-10T00:10:00.000",
            "arrivalTime": "2016-10-10T01:55:00.000",
            "flightEquipmentIataCode": "SU1",
            "isCodeshare": true,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "R",
                "F",
                "J",
                "Y"
            ],
            "trafficRestrictions": [
                "G"
            ],
            "operator": {
                "carrierFsCode": "SU",
                "flightNumber": "1334",
                "serviceType": "J",
                "serviceClasses": [
                    "R",
                    "F",
                    "J",
                    "Y"
                ],
                "trafficRestrictions": []
            },
            "codeshares": [],
            "referenceCode": "1678-3564529--3564539"
        },
        {
            "carrierFsCode": "SU",
            "flightNumber": "1432",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "BAX",
            "stops": 0,
            "departureTerminal": "D",
            "departureTime": "2016-10-10T00:50:00.000",
            "arrivalTime": "2016-10-10T08:55:00.000",
            "flightEquipmentIataCode": "32S",
            "isCodeshare": false,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "R",
                "F",
                "J",
                "Y"
            ],
            "trafficRestrictions": [],
            "codeshares": [
                {
                    "carrierFsCode": "KL",
                    "flightNumber": "2866",
                    "serviceType": "J",
                    "serviceClasses": [
                        "R",
                        "F",
                        "J",
                        "Y"
                    ],
                    "trafficRestrictions": [
                        "G"
                    ],
                    "referenceCode": 3564637
                },
                {
                    "carrierFsCode": "AZ",
                    "flightNumber": "5673",
                    "serviceType": "J",
                    "serviceClasses": [
                        "J",
                        "Y"
                    ],
                    "trafficRestrictions": [
                        "O"
                    ],
                    "referenceCode": 11593729
                }
            ],
            "referenceCode": "1678-3564646--"
        },
        {
            "carrierFsCode": "KL",
            "flightNumber": "2866",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "BAX",
            "stops": 0,
            "departureTerminal": "D",
            "departureTime": "2016-10-10T00:50:00.000",
            "arrivalTime": "2016-10-10T08:55:00.000",
            "flightEquipmentIataCode": "32S",
            "isCodeshare": true,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "R",
                "F",
                "J",
                "Y"
            ],
            "trafficRestrictions": [
                "G"
            ],
            "operator": {
                "carrierFsCode": "SU",
                "flightNumber": "1432",
                "serviceType": "J",
                "serviceClasses": [
                    "R",
                    "F",
                    "J",
                    "Y"
                ],
                "trafficRestrictions": []
            },
            "codeshares": [],
            "referenceCode": "1678-3564646--3564637"
        },
        {
            "carrierFsCode": "AZ",
            "flightNumber": "5673",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "BAX",
            "stops": 0,
            "departureTerminal": "D",
            "departureTime": "2016-10-10T00:50:00.000",
            "arrivalTime": "2016-10-10T08:55:00.000",
            "flightEquipmentIataCode": "32S",
            "isCodeshare": true,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "J",
                "Y"
            ],
            "trafficRestrictions": [
                "O"
            ],
            "operator": {
                "carrierFsCode": "SU",
                "flightNumber": "1432",
                "serviceType": "J",
                "serviceClasses": [
                    "R",
                    "F",
                    "J",
                    "Y"
                ],
                "trafficRestrictions": []
            },
            "codeshares": [],
            "referenceCode": "1678-3564646--11593729"
        },
        {
            "carrierFsCode": "SU",
            "flightNumber": "1424",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "CEK",
            "stops": 0,
            "departureTerminal": "D",
            "departureTime": "2016-10-10T00:05:00.000",
            "arrivalTime": "2016-10-10T04:30:00.000",
            "flightEquipmentIataCode": "32S",
            "isCodeshare": false,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "R",
                "F",
                "J",
                "Y"
            ],
            "trafficRestrictions": [],
            "codeshares": [
                {
                    "carrierFsCode": "AF",
                    "flightNumber": "4964",
                    "serviceType": "J",
                    "serviceClasses": [
                        "R",
                        "F",
                        "J",
                        "Y"
                    ],
                    "trafficRestrictions": [
                        "G"
                    ],
                    "referenceCode": 3565042
                },
                {
                    "carrierFsCode": "KL",
                    "flightNumber": "2942",
                    "serviceType": "J",
                    "serviceClasses": [
                        "R",
                        "F",
                        "J",
                        "Y"
                    ],
                    "trafficRestrictions": [
                        "G"
                    ],
                    "referenceCode": 3565058
                }
            ],
            "referenceCode": "1678-3565025--"
        },
        {
            "carrierFsCode": "AF",
            "flightNumber": "4964",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "CEK",
            "stops": 0,
            "departureTerminal": "D",
            "departureTime": "2016-10-10T00:05:00.000",
            "arrivalTime": "2016-10-10T04:30:00.000",
            "flightEquipmentIataCode": "32S",
            "isCodeshare": true,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "R",
                "F",
                "J",
                "Y"
            ],
            "trafficRestrictions": [
                "G"
            ],
            "operator": {
                "carrierFsCode": "SU",
                "flightNumber": "1424",
                "serviceType": "J",
                "serviceClasses": [
                    "R",
                    "F",
                    "J",
                    "Y"
                ],
                "trafficRestrictions": []
            },
            "codeshares": [],
            "referenceCode": "1678-3565025--3565042"
        },
        {
            "carrierFsCode": "KL",
            "flightNumber": "2942",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "CEK",
            "stops": 0,
            "departureTerminal": "D",
            "departureTime": "2016-10-10T00:05:00.000",
            "arrivalTime": "2016-10-10T04:30:00.000",
            "flightEquipmentIataCode": "32S",
            "isCodeshare": true,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "R",
                "F",
                "J",
                "Y"
            ],
            "trafficRestrictions": [
                "G"
            ],
            "operator": {
                "carrierFsCode": "SU",
                "flightNumber": "1424",
                "serviceType": "J",
                "serviceClasses": [
                    "R",
                    "F",
                    "J",
                    "Y"
                ],
                "trafficRestrictions": []
            },
            "codeshares": [],
            "referenceCode": "1678-3565025--3565058"
        },
        {
            "carrierFsCode": "SU",
            "flightNumber": "1864",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "EVN",
            "stops": 0,
            "departureTerminal": "D",
            "departureTime": "2016-10-10T00:55:00.000",
            "arrivalTime": "2016-10-10T04:45:00.000",
            "flightEquipmentIataCode": "32S",
            "isCodeshare": false,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "R",
                "F",
                "J",
                "Y"
            ],
            "trafficRestrictions": [],
            "codeshares": [
                {
                    "carrierFsCode": "KL",
                    "flightNumber": "2956",
                    "serviceType": "J",
                    "serviceClasses": [
                        "R",
                        "F",
                        "J",
                        "Y"
                    ],
                    "trafficRestrictions": [
                        "G"
                    ],
                    "referenceCode": 3565171
                }
            ],
            "referenceCode": "1678-3565185--"
        },
        {
            "carrierFsCode": "KL",
            "flightNumber": "2956",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "EVN",
            "stops": 0,
            "departureTerminal": "D",
            "departureTime": "2016-10-10T00:55:00.000",
            "arrivalTime": "2016-10-10T04:45:00.000",
            "flightEquipmentIataCode": "32S",
            "isCodeshare": true,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "R",
                "F",
                "J",
                "Y"
            ],
            "trafficRestrictions": [
                "G"
            ],
            "operator": {
                "carrierFsCode": "SU",
                "flightNumber": "1864",
                "serviceType": "J",
                "serviceClasses": [
                    "R",
                    "F",
                    "J",
                    "Y"
                ],
                "trafficRestrictions": []
            },
            "codeshares": [],
            "referenceCode": "1678-3565185--3565171"
        },
        {
            "carrierFsCode": "SU",
            "flightNumber": "1852",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "GYD",
            "stops": 0,
            "departureTerminal": "F",
            "arrivalTerminal": "1",
            "departureTime": "2016-10-10T00:10:00.000",
            "arrivalTime": "2016-10-10T05:10:00.000",
            "flightEquipmentIataCode": "32S",
            "isCodeshare": false,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "R",
                "J",
                "Y"
            ],
            "trafficRestrictions": [],
            "codeshares": [
                {
                    "carrierFsCode": "KL",
                    "flightNumber": "2930",
                    "serviceType": "J",
                    "serviceClasses": [
                        "R",
                        "F",
                        "J",
                        "Y"
                    ],
                    "trafficRestrictions": [
                        "G"
                    ],
                    "referenceCode": 3565463
                }
            ],
            "referenceCode": "1678-3565473--"
        },
        {
            "carrierFsCode": "KL",
            "flightNumber": "2930",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "GYD",
            "stops": 0,
            "departureTerminal": "F",
            "arrivalTerminal": "1",
            "departureTime": "2016-10-10T00:10:00.000",
            "arrivalTime": "2016-10-10T05:10:00.000",
            "flightEquipmentIataCode": "32S",
            "isCodeshare": true,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "R",
                "F",
                "J",
                "Y"
            ],
            "trafficRestrictions": [
                "G"
            ],
            "operator": {
                "carrierFsCode": "SU",
                "flightNumber": "1852",
                "serviceType": "J",
                "serviceClasses": [
                    "R",
                    "J",
                    "Y"
                ],
                "trafficRestrictions": []
            },
            "codeshares": [],
            "referenceCode": "1678-3565473--3565463"
        },
        {
            "carrierFsCode": "SU",
            "flightNumber": "1112",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "KRR",
            "stops": 0,
            "departureTerminal": "D",
            "departureTime": "2016-10-10T00:05:00.000",
            "arrivalTime": "2016-10-10T02:25:00.000",
            "flightEquipmentIataCode": "SU1",
            "isCodeshare": false,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "R",
                "F",
                "J",
                "Y"
            ],
            "trafficRestrictions": [],
            "codeshares": [
                {
                    "carrierFsCode": "KL",
                    "flightNumber": "2901",
                    "serviceType": "J",
                    "serviceClasses": [
                        "R",
                        "F",
                        "J",
                        "Y"
                    ],
                    "trafficRestrictions": [
                        "G"
                    ],
                    "referenceCode": 3565878
                },
                {
                    "carrierFsCode": "JU",
                    "flightNumber": "8804",
                    "serviceType": "J",
                    "serviceClasses": [
                        "J",
                        "Y"
                    ],
                    "trafficRestrictions": [
                        "O"
                    ],
                    "referenceCode": 3565901
                }
            ],
            "referenceCode": "1678-3565927--"
        },
        {
            "carrierFsCode": "KL",
            "flightNumber": "2901",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "KRR",
            "stops": 0,
            "departureTerminal": "D",
            "departureTime": "2016-10-10T00:05:00.000",
            "arrivalTime": "2016-10-10T02:25:00.000",
            "flightEquipmentIataCode": "SU1",
            "isCodeshare": true,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "R",
                "F",
                "J",
                "Y"
            ],
            "trafficRestrictions": [
                "G"
            ],
            "operator": {
                "carrierFsCode": "SU",
                "flightNumber": "1112",
                "serviceType": "J",
                "serviceClasses": [
                    "R",
                    "F",
                    "J",
                    "Y"
                ],
                "trafficRestrictions": []
            },
            "codeshares": [],
            "referenceCode": "1678-3565927--3565878"
        },
        {
            "carrierFsCode": "JU",
            "flightNumber": "8804",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "KRR",
            "stops": 0,
            "departureTerminal": "D",
            "departureTime": "2016-10-10T00:05:00.000",
            "arrivalTime": "2016-10-10T02:25:00.000",
            "flightEquipmentIataCode": "SU1",
            "isCodeshare": true,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "J",
                "Y"
            ],
            "trafficRestrictions": [
                "O"
            ],
            "operator": {
                "carrierFsCode": "SU",
                "flightNumber": "1112",
                "serviceType": "J",
                "serviceClasses": [
                    "R",
                    "F",
                    "J",
                    "Y"
                ],
                "trafficRestrictions": []
            },
            "codeshares": [],
            "referenceCode": "1678-3565927--3565901"
        },
        {
            "carrierFsCode": "SU",
            "flightNumber": "1196",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "KZN",
            "stops": 0,
            "departureTerminal": "D",
            "arrivalTerminal": "1",
            "departureTime": "2016-10-10T00:30:00.000",
            "arrivalTime": "2016-10-10T02:00:00.000",
            "flightEquipmentIataCode": "SU1",
            "isCodeshare": false,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "R",
                "F",
                "J",
                "Y"
            ],
            "trafficRestrictions": [],
            "codeshares": [
                {
                    "carrierFsCode": "KL",
                    "flightNumber": "3070",
                    "serviceType": "J",
                    "serviceClasses": [
                        "R",
                        "F",
                        "J",
                        "Y"
                    ],
                    "trafficRestrictions": [
                        "G"
                    ],
                    "referenceCode": 3566074
                },
                {
                    "carrierFsCode": "JU",
                    "flightNumber": "8814",
                    "serviceType": "J",
                    "serviceClasses": [
                        "J",
                        "Y"
                    ],
                    "trafficRestrictions": [
                        "O"
                    ],
                    "referenceCode": 3566092
                },
                {
                    "carrierFsCode": "AF",
                    "flightNumber": "4942",
                    "serviceType": "J",
                    "serviceClasses": [
                        "R",
                        "F",
                        "J",
                        "Y"
                    ],
                    "trafficRestrictions": [
                        "G"
                    ],
                    "referenceCode": 3566123
                }
            ],
            "referenceCode": "1678-3566078--"
        },
        {
            "carrierFsCode": "KL",
            "flightNumber": "3070",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "KZN",
            "stops": 0,
            "departureTerminal": "D",
            "arrivalTerminal": "1",
            "departureTime": "2016-10-10T00:30:00.000",
            "arrivalTime": "2016-10-10T02:00:00.000",
            "flightEquipmentIataCode": "SU1",
            "isCodeshare": true,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "R",
                "F",
                "J",
                "Y"
            ],
            "trafficRestrictions": [
                "G"
            ],
            "operator": {
                "carrierFsCode": "SU",
                "flightNumber": "1196",
                "serviceType": "J",
                "serviceClasses": [
                    "R",
                    "F",
                    "J",
                    "Y"
                ],
                "trafficRestrictions": []
            },
            "codeshares": [],
            "referenceCode": "1678-3566078--3566074"
        },
        {
            "carrierFsCode": "JU",
            "flightNumber": "8814",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "KZN",
            "stops": 0,
            "departureTerminal": "D",
            "arrivalTerminal": "1",
            "departureTime": "2016-10-10T00:30:00.000",
            "arrivalTime": "2016-10-10T02:00:00.000",
            "flightEquipmentIataCode": "SU1",
            "isCodeshare": true,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "J",
                "Y"
            ],
            "trafficRestrictions": [
                "O"
            ],
            "operator": {
                "carrierFsCode": "SU",
                "flightNumber": "1196",
                "serviceType": "J",
                "serviceClasses": [
                    "R",
                    "F",
                    "J",
                    "Y"
                ],
                "trafficRestrictions": []
            },
            "codeshares": [],
            "referenceCode": "1678-3566078--3566092"
        },
        {
            "carrierFsCode": "AF",
            "flightNumber": "4942",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "KZN",
            "stops": 0,
            "departureTerminal": "D",
            "arrivalTerminal": "1",
            "departureTime": "2016-10-10T00:30:00.000",
            "arrivalTime": "2016-10-10T02:00:00.000",
            "flightEquipmentIataCode": "SU1",
            "isCodeshare": true,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "R",
                "F",
                "J",
                "Y"
            ],
            "trafficRestrictions": [
                "G"
            ],
            "operator": {
                "carrierFsCode": "SU",
                "flightNumber": "1196",
                "serviceType": "J",
                "serviceClasses": [
                    "R",
                    "F",
                    "J",
                    "Y"
                ],
                "trafficRestrictions": []
            },
            "codeshares": [],
            "referenceCode": "1678-3566078--3566123"
        },
        {
            "carrierFsCode": "SU",
            "flightNumber": "1428",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "MQF",
            "stops": 0,
            "departureTerminal": "D",
            "departureTime": "2016-10-10T00:50:00.000",
            "arrivalTime": "2016-10-10T05:05:00.000",
            "flightEquipmentIataCode": "SU1",
            "isCodeshare": false,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "R",
                "F",
                "J",
                "Y"
            ],
            "trafficRestrictions": [],
            "codeshares": [],
            "referenceCode": "1678-3566432--"
        },
        {
            "carrierFsCode": "SU",
            "flightNumber": "1638",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "OMS",
            "stops": 0,
            "departureTerminal": "D",
            "departureTime": "2016-10-10T00:35:00.000",
            "arrivalTime": "2016-10-10T06:50:00.000",
            "flightEquipmentIataCode": "32S",
            "isCodeshare": false,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "R",
                "F",
                "J",
                "Y"
            ],
            "trafficRestrictions": [],
            "codeshares": [
                {
                    "carrierFsCode": "AF",
                    "flightNumber": "4950",
                    "serviceType": "J",
                    "serviceClasses": [
                        "R",
                        "F",
                        "J",
                        "Y"
                    ],
                    "trafficRestrictions": [
                        "G"
                    ],
                    "referenceCode": 3566656
                },
                {
                    "carrierFsCode": "KL",
                    "flightNumber": "2948",
                    "serviceType": "J",
                    "serviceClasses": [
                        "R",
                        "F",
                        "J",
                        "Y"
                    ],
                    "trafficRestrictions": [
                        "G"
                    ],
                    "referenceCode": 3566675
                }
            ],
            "referenceCode": "1678-3566664--"
        },
        {
            "carrierFsCode": "AF",
            "flightNumber": "4950",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "OMS",
            "stops": 0,
            "departureTerminal": "D",
            "departureTime": "2016-10-10T00:35:00.000",
            "arrivalTime": "2016-10-10T06:50:00.000",
            "flightEquipmentIataCode": "32S",
            "isCodeshare": true,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "R",
                "F",
                "J",
                "Y"
            ],
            "trafficRestrictions": [
                "G"
            ],
            "operator": {
                "carrierFsCode": "SU",
                "flightNumber": "1638",
                "serviceType": "J",
                "serviceClasses": [
                    "R",
                    "F",
                    "J",
                    "Y"
                ],
                "trafficRestrictions": []
            },
            "codeshares": [],
            "referenceCode": "1678-3566664--3566656"
        },
        {
            "carrierFsCode": "KL",
            "flightNumber": "2948",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "OMS",
            "stops": 0,
            "departureTerminal": "D",
            "departureTime": "2016-10-10T00:35:00.000",
            "arrivalTime": "2016-10-10T06:50:00.000",
            "flightEquipmentIataCode": "32S",
            "isCodeshare": true,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "R",
                "F",
                "J",
                "Y"
            ],
            "trafficRestrictions": [
                "G"
            ],
            "operator": {
                "carrierFsCode": "SU",
                "flightNumber": "1638",
                "serviceType": "J",
                "serviceClasses": [
                    "R",
                    "F",
                    "J",
                    "Y"
                ],
                "trafficRestrictions": []
            },
            "codeshares": [],
            "referenceCode": "1678-3566664--3566675"
        },
        {
            "carrierFsCode": "SU",
            "flightNumber": "1306",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "OVB",
            "stops": 0,
            "departureTerminal": "D",
            "arrivalTerminal": "A",
            "departureTime": "2016-10-10T00:20:00.000",
            "arrivalTime": "2016-10-10T07:15:00.000",
            "flightEquipmentIataCode": "32S",
            "isCodeshare": false,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "R",
                "F",
                "J",
                "Y"
            ],
            "trafficRestrictions": [],
            "codeshares": [
                {
                    "carrierFsCode": "AF",
                    "flightNumber": "4912",
                    "serviceType": "J",
                    "serviceClasses": [
                        "R",
                        "F",
                        "J",
                        "Y"
                    ],
                    "trafficRestrictions": [
                        "G"
                    ],
                    "referenceCode": 3566788
                },
                {
                    "carrierFsCode": "KL",
                    "flightNumber": "3206",
                    "serviceType": "J",
                    "serviceClasses": [
                        "R",
                        "F",
                        "J",
                        "Y"
                    ],
                    "trafficRestrictions": [
                        "G"
                    ],
                    "referenceCode": 11594082
                }
            ],
            "referenceCode": "1678-3566779--"
        },
        {
            "carrierFsCode": "AF",
            "flightNumber": "4912",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "OVB",
            "stops": 0,
            "departureTerminal": "D",
            "arrivalTerminal": "A",
            "departureTime": "2016-10-10T00:20:00.000",
            "arrivalTime": "2016-10-10T07:15:00.000",
            "flightEquipmentIataCode": "32S",
            "isCodeshare": true,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "R",
                "F",
                "J",
                "Y"
            ],
            "trafficRestrictions": [
                "G"
            ],
            "operator": {
                "carrierFsCode": "SU",
                "flightNumber": "1306",
                "serviceType": "J",
                "serviceClasses": [
                    "R",
                    "F",
                    "J",
                    "Y"
                ],
                "trafficRestrictions": []
            },
            "codeshares": [],
            "referenceCode": "1678-3566779--3566788"
        },
        {
            "carrierFsCode": "KL",
            "flightNumber": "3206",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "OVB",
            "stops": 0,
            "departureTerminal": "D",
            "arrivalTerminal": "A",
            "departureTime": "2016-10-10T00:20:00.000",
            "arrivalTime": "2016-10-10T07:15:00.000",
            "flightEquipmentIataCode": "32S",
            "isCodeshare": true,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "R",
                "F",
                "J",
                "Y"
            ],
            "trafficRestrictions": [
                "G"
            ],
            "operator": {
                "carrierFsCode": "SU",
                "flightNumber": "1306",
                "serviceType": "J",
                "serviceClasses": [
                    "R",
                    "F",
                    "J",
                    "Y"
                ],
                "trafficRestrictions": []
            },
            "codeshares": [],
            "referenceCode": "1678-3566779--11594082"
        },
        {
            "carrierFsCode": "SU",
            "flightNumber": "1166",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "ROV",
            "stops": 0,
            "departureTerminal": "D",
            "departureTime": "2016-10-10T00:05:00.000",
            "arrivalTime": "2016-10-10T02:00:00.000",
            "flightEquipmentIataCode": "SU1",
            "isCodeshare": false,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "R",
                "F",
                "J",
                "Y"
            ],
            "trafficRestrictions": [],
            "codeshares": [
                {
                    "carrierFsCode": "KL",
                    "flightNumber": "3280",
                    "serviceType": "J",
                    "serviceClasses": [
                        "R",
                        "F",
                        "J",
                        "Y"
                    ],
                    "trafficRestrictions": [
                        "G"
                    ],
                    "referenceCode": 3567232
                }
            ],
            "referenceCode": "1678-3567214--"
        },
        {
            "carrierFsCode": "KL",
            "flightNumber": "3280",
            "departureAirportFsCode": "SVO",
            "arrivalAirportFsCode": "ROV",
            "stops": 0,
            "departureTerminal": "D",
            "departureTime": "2016-10-10T00:05:00.000",
            "arrivalTime": "2016-10-10T02:00:00.000",
            "flightEquipmentIataCode": "SU1",
            "isCodeshare": true,
            "isWetlease": false,
            "serviceType": "J",
            "serviceClasses": [
                "R",
                "F",
                "J",
                "Y"
            ],
            "trafficRestrictions": [
                "G"
            ],
            "operator": {
                "carrierFsCode": "SU",
                "flightNumber": "1166",
                "serviceType": "J",
                "serviceClasses": [
                    "R",
                    "F",
                    "J",
                    "Y"
                ],
                "trafficRestrictions": []
            },
            "codeshares": [],
            "referenceCode": "1678-3567214--3567232"
        }
    ],
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
                "fs": "AF",
                "iata": "AF",
                "icao": "AFR",
                "name": "Air France",
                "phoneNumber": "1-800-237-2747",
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
                "fs": "AZ",
                "iata": "AZ",
                "icao": "AZA",
                "name": "Alitalia",
                "active": true
            }
        ],
        "airports": [
            {
                "fs": "MQF",
                "iata": "MQF",
                "icao": "USCM",
                "name": "Magnitogorsk Airport",
                "city": "Magnitogorsk",
                "cityCode": "MQF",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Asia/Yekaterinburg",
                "localTime": "2016-03-25T02:17:57.321",
                "utcOffsetHours": 5,
                "latitude": 53.45,
                "longitude": 59.066667,
                "elevationFeet": 1430,
                "classification": 4,
                "active": true
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
                "localTime": "2016-03-25T02:17:57.321",
                "utcOffsetHours": 5,
                "latitude": 55.297506,
                "longitude": 61.51235,
                "elevationFeet": 769,
                "classification": 4,
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
                "localTime": "2016-03-25T00:17:57.321",
                "utcOffsetHours": 3,
                "latitude": 45.034138,
                "longitude": 39.139002,
                "elevationFeet": 118,
                "classification": 3,
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
                "localTime": "2016-03-25T00:17:57.293",
                "utcOffsetHours": 3,
                "latitude": 55.966324,
                "longitude": 37.416574,
                "elevationFeet": 630,
                "classification": 1,
                "active": true
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
                "localTime": "2016-03-25T01:17:57.321",
                "utcOffsetHours": 4,
                "latitude": 40.462487,
                "longitude": 50.05039,
                "elevationFeet": 2,
                "classification": 3,
                "active": true
            },
            {
                "fs": "OMS",
                "iata": "OMS",
                "icao": "UNOO",
                "name": "Omsk Airport",
                "city": "Omsk",
                "cityCode": "OMS",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Asia/Omsk",
                "localTime": "2016-03-25T03:17:57.321",
                "utcOffsetHours": 6,
                "latitude": 54.957455,
                "longitude": 73.316707,
                "elevationFeet": 312,
                "classification": 4,
                "active": true
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
                "localTime": "2016-03-25T03:17:57.321",
                "utcOffsetHours": 6,
                "latitude": 43.346652,
                "longitude": 77.011455,
                "elevationFeet": 2234,
                "classification": 3,
                "active": true
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
                "localTime": "2016-03-25T00:17:57.321",
                "utcOffsetHours": 3,
                "latitude": 64.597581,
                "longitude": 40.713989,
                "elevationFeet": 33,
                "classification": 4,
                "active": true
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
                "localTime": "2016-03-25T00:17:57.321",
                "utcOffsetHours": 3,
                "latitude": 47.253513,
                "longitude": 39.804021,
                "elevationFeet": 279,
                "classification": 3,
                "active": true
            },
            {
                "fs": "BAX",
                "iata": "BAX",
                "icao": "UNBB",
                "name": "Barnaul Airport",
                "city": "Barnaul",
                "cityCode": "BAX",
                "countryCode": "RU",
                "countryName": "Russian Federation",
                "regionName": "Europe",
                "timeZoneRegionName": "Asia/Omsk",
                "localTime": "2016-03-25T03:17:57.321",
                "utcOffsetHours": 6,
                "latitude": 53.361086,
                "longitude": 83.547643,
                "elevationFeet": 837,
                "classification": 4,
                "active": true
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
                "localTime": "2016-03-25T03:17:57.321",
                "utcOffsetHours": 6,
                "latitude": 55.009011,
                "longitude": 82.666999,
                "elevationFeet": 365,
                "classification": 3,
                "active": true
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
                "localTime": "2016-03-25T01:17:57.321",
                "utcOffsetHours": 4,
                "latitude": 40.15272,
                "longitude": 44.39805,
                "elevationFeet": 2838,
                "classification": 3,
                "active": true
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
                "localTime": "2016-03-25T00:17:57.321",
                "utcOffsetHours": 3,
                "latitude": 55.608439,
                "longitude": 49.29824,
                "elevationFeet": 407,
                "classification": 3,
                "active": true
            }
        ],
        "equipments": [
            {
                "iata": "SU1",
                "name": "Sukhoi Superjet 100",
                "turboProp": false,
                "jet": true,
                "widebody": false,
                "regional": false
            },
            {
                "iata": "32S",
                "name": "Airbus A318 / A319 / A320 / A321",
                "turboProp": false,
                "jet": true,
                "widebody": false,
                "regional": false
            }
        ]
    }
};
