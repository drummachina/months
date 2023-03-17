#!/usr/bin/node
import chalk from 'chalk';
import inquirer from 'inquirer';

// import utils from './utils.js';

// TODO [2022-11-20] Dodać nazwy polskich pór roku do tablicy seasonsArr
// TODO [2022-11-20] Dodać obsługę parametru "s-pl", patrz opis parametru poniżej


if (process.argv.length < 3) { // no params provided
  console.log(chalk.red('No params provided.\n') + chalk.blue('Type "node app.js help" to see available options, exit.'))
  process.exit();
}

const param = process.argv[2]; // only 1 param support by now

/*
const paramToFunction = {
  'test': {
    description: 'Test action',
    actionFunc: () => {
      // console.log(`This is index: 0 - ${data.monthsArr[0].pl}`);
      // console.log(`This is index: 3 - ${data.monthsArr[3]}`);
      
      
      inquirer
      .prompt([
          { name: "Czy już weekend" },
          { name: "Czy już weekend2" }
      ]).then((answers) => {
        console.log(answers)
      })
      .catch((error) => {
        if (error.isTtyError) {
          console.log('a')
          // Prompt couldn't be rendered in the current environment
        } else {
          console.log(`Something else went wrong`);
          console.log(error);
        }
      });
      
    }
  }
};
*/

let modulePath = `./paramToFunction/${param}.js`;

import(modulePath)
    .then(obj => {
        obj[param].actionFunc();
    }).catch(err => {
        console.log(chalk.red(`Param: "${param}" is not recognized.`));
        console.log(chalk.blue('Type "node app.js help" to see available options, exit.'))
        process.exit();
    })

  // 's-pl'         - seasons-polish, pory roku po polsku
  // 's-en'         - seasons-english, pory roku po angielsku
  
  // 's-m-pl'       - seasons-months-polish, wszystkie pory roku z miesiącami po polsku
  // 's-m-en'       - seasons-months-english, wszystkie pory roku z miesiącami po angielsku
  
  // 'm-spring-pl', - months-spring-polish, miesiące woisna po polsku
  // 'm-summer-pl'  - months-summer-polish, miesiące lato po polsku
  // 'm-autom-pl'   - months-autom-polish, miesiące jesień po polsku
  // 'm-winter-pl'  - months-winter-polish, miesiące zima po polsku