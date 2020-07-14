var round  = (_) => (Math.round(_));
var round2 = (_) => (Math.round(100 * _) / 100);

var conversionsCategories = [
    {
        name: 'temperature',
        icon: 'fa-thermometer-half',
        conversions: [
            {
                from: 'ºF',
                to: 'ºC',
                min: -60,
                max: 120,
                step: 1,
                value: 80,
                convert: (F) => round((F - 32) / 1.8)
            }
        ]
    },
    {
        name: 'money',
        icon: 'fa-dollar-sign',
        conversions: [
            {
                from: '$',
                to: '€',
                min: 1,
                max: 1000,
                step: 1,
                value: 1,
                convert: ($) => round2($ * 0.885348)    // http://api.currencylayer.com/live?access_key=3deffd407b35f85be3830393f5fc102f&format=1
            }
        ]
    },
    {
        name: 'weight',
        icon: 'fa-balance-scale',
        conversions: [
            {
                from: 'lbs',
                to: 'kg',
                min: 1,
                max: 1000,
                step: 1,
                value: 1,
                convert: ($) => round2($ * 0.453592)
            }
        ]
    },
    {
        name: 'length',
        icon: 'fa-ruler-combined',
        conversions: [
            {
                from: 'inches',
                to: 'cm',
                min: 1,
                max: 1000,
                step: 1,
                value: 1,
                convert: (inches) => round2(inches * 2.54)
            },
            {
                from: 'feet',
                to: 'm',
                min: 1,
                max: 1000,
                step: 1,
                value: 1,
                convert: (ft) => round2(ft * 0.3048)
            },
            {
                from: 'miles',
                to: 'km',
                min: 1,
                max: 1000,
                step: 1,
                value: 1,
                convert: (mi) => round2(mi * 1.60934)
            }
        ]
    },
    {
        name: 'volume',
        icon: 'fa-coffee',
        conversions: [
            {
                from: 'gal',
                to: 'l',
                min: 1,
                max: 100,
                step: 1,
                value: 1,
                convert: (gal) => round2(gal * 3.78541)
            }
        ]
    }
];


