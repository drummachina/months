// TODO [2022-11-20] Dodać nazwy polskich pór roku do tablicy seasonsArr
// TODO [2022-11-20] Dodać obsługę parametru "s-pl", patrz opis parametru poniżej

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

if (process.argv.length < 3) { // no params provided
  console.log('No params, exit.')
  process.exit();
}

const param = process.argv[2]; // only 1 param support by now

const paramToFunction = {
  'help': {
    description: 'List supported options.',
    actionFunc: () => {
      
       console.log(
'Node.js Command line app, displays months and seasons list in English and Polish language.\n\
How to run: node app.js <param_required>, ex: node app.js m-pl\n\
Date: 2022-11-20\n\
Author: drummachina@gmail.com\n\
Purpose: For months / season training, for zombolol2x\n');

      console.log('List of support options:');
      
      for (let key in paramToFunction) {
        if (key === 'help') {
          continue;
        }
        console.log(` ${key}: ${paramToFunction[key].description}`);
      }
      
      console.log();
    }
  },
  'm-en': {
    description: 'months-english, lista miesięcy po angielsku',
    actionFunc: () => {
      monthsArr.forEach((elem, index) => {
        console.log(elem.en);
      });
    }
  },
  'm-pl': {
    description: 'months-polish, lista miesięcy po polsku',
    actionFunc: () => {
      monthsArr.forEach((elem) => {
        console.log(elem.pl);
      });
    }
  },
  'test': {
    description: 'Test action',
    actionFunc: () => {
      console.log(`This is index: 0 - ${monthsArr[0].pl}`);
      console.log(`This is index: 3 - ${monthsArr[3]}`);
    }
  }
};

if (!paramToFunction[param]) {
  console.log(`Param: "${param}" is not recognized, exit.`);
  process.exit();
} else {
  paramToFunction[param].actionFunc();
}



      
  // 's-pl'         - seasons-polish, pory roku po polsku
  // 's-en'         - seasons-english, pory roku po angielsku
  
  // 's-m-pl'       - seasons-months-polish, wszystkie pory roku z miesiącami po polsku
  // 's-m-en'       - seasons-months-english, wszystkie pory roku z miesiącami po angielsku
  
  // 'm-spring-pl', - months-spring-polish, miesiące woisna po polsku
  // 'm-summer-pl'  - months-summer-polish, miesiące lato po polsku
  // 'm-autom-pl'   - months-autom-polish, miesiące jesień po polsku
  // 'm-winter-pl'  - months-winter-polish, miesiące zima po polsku