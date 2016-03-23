var _ = require('underscore');
var async = require('async');
var request = require('request');
var cheerio = require('cheerio');

var links = [
    "http://www.airlineupdate.com/content_public/codes/aircraft/atr.htm",
    "http://www.airlineupdate.com/content_public/codes/aircraft/antonov.htm",
    "http://www.airlineupdate.com/content_public/codes/aircraft/beech.htm",
    "http://www.airlineupdate.com/content_public/codes/aircraft/airbus.htm",
    "http://www.airlineupdate.com/content_public/codes/aircraft/bae.htm",
    "http://www.airlineupdate.com/content_public/codes/aircraft/boeing.htm",
    "http://www.airlineupdate.com/content_public/codes/aircraft/bombardier.htm",
    "http://www.airlineupdate.com/content_public/codes/aircraft/britaero.htm",
    "http://www.airlineupdate.com/content_public/codes/aircraft/casa.htm",
    "http://www.airlineupdate.com/content_public/codes/aircraft/convair.htm",
    "http://www.airlineupdate.com/content_public/codes/aircraft/dassault.htm",
    "http://www.airlineupdate.com/content_public/codes/aircraft/dhc.htm",
    "http://www.airlineupdate.com/content_public/codes/aircraft/embraer.htm",
    "http://www.airlineupdate.com/content_public/codes/aircraft/fairchild.htm",
    "http://www.airlineupdate.com/content_public/codes/aircraft/fokker.htm",
    "http://www.airlineupdate.com/content_public/codes/aircraft/gulfstream.htm",
    "http://www.airlineupdate.com/content_public/codes/aircraft/ilyushin.htm",
    "http://www.airlineupdate.com/content_public/codes/aircraft/let.htm",
    "http://www.airlineupdate.com/content_public/codes/aircraft/lockheed.htm",
    "http://www.airlineupdate.com/content_public/codes/aircraft/mcd.htm",
    "http://www.airlineupdate.com/content_public/codes/aircraft/pilatus.htm",
    "http://www.airlineupdate.com/content_public/codes/aircraft/pbn.htm",
    "http://www.airlineupdate.com/content_public/codes/aircraft/saab.htm",
    "http://www.airlineupdate.com/content_public/codes/aircraft/shorts.htm",
    "http://www.airlineupdate.com/content_public/codes/aircraft/tupolev.htm",
    "http://www.airlineupdate.com/content_public/codes/aircraft/vickers.htm",
    "http://www.airlineupdate.com/content_public/codes/aircraft/xian.htm",
    "http://www.airlineupdate.com/content_public/codes/aircraft/yak.htm"
];

module.exports = function () {
    async.mapSeries(links, function (link, cb) {
        request(link, function (err, res, body) {
            if (err)
                return cb(err);
            $ = cheerio.load(body);
            var cap = {};
            var trs = $('#ITDataTable tr').slice(1);
            console.log(trs.get().length);
            trs.each(function () {
                var item = $(this);
                var tds = item.find('td');
                var code = tds.eq(2).text();
                cap['' + code] = '' + tds.eq(3).text();
            });
            cb(null, cap)
        });
    }, function (err, results) {
        var allPlaneCodes = {};
        _.each(results, function (result) {
            _.extend(allPlaneCodes, result);
        });
        console.log(allPlaneCodes);
    });
};
