const monthsArr = [
    { pl: 'Styczeń',    en: 'January'   }, // index: 0,   Zima
    { pl: 'Luty',       en: 'February'  }, // index: 1,   Zima
    { pl: 'Marzec'                      }, // index: 2,   Zima, Wiosna,
    { pl: 'Kwieciń'                     }, // index: 3,   Wiosna
    { pl: 'maj'                         }, // index: 4,   Wiosna
    { pl: 'czerwiec'                    }, // index: 5,   Wiosna, Lato
    {},                                    // index: 6    Lato
    {},                                    // index: 7    Lato
    {},                                    // index: 8    Lato, Jesień
    {                   en: 'October'   }, // index: 9    Jesiń
    {},                                    // index: 10   Jesiń
    { pl: 'Grudzień'                    }  // index: 11,  Jesiń, Zima
];

const seasonsArr = [
    { pl: 'Wiosna',     en: 'Spring', monthsArrIdxArr: [ 2, 3, 4, 5 ] },
    {                                 monthsArrIdxArr: [ 5, 6  ] },
    {},
    {}
];
module.exports = { monthsArr, seasonsArr };