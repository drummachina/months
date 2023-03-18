import inquirer from 'inquirer';
import chalk from 'chalk';
import JSON5 from 'json5';
import { readFile } from 'fs/promises';
const data = JSON5.parse(
  await readFile(
    new URL('../dataSource/irregularVerbs1.json5', import.meta.url)
  )
);
let state = {
    counter: 5,
    yes: 0,
    no: 0
};

let tryHistory = {};

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

function genQuestion() {
    if (state.counter <= 0) {
        console.log(`\nUdzieliłeś ${chalk.underline.greenBright(state.yes)} \
${chalk.underline.greenBright('poprawnych')} oraz ${chalk.underline.red(state.no)} niepoprawnych odpowiedzi.`);
        if (state.no === 0 && state.yes > 2) {
            console.log(chalk.bold.bgGreen('Świetna robota! Kocham Cię synku!'));
        } else if (state.no >= state.yes) {
            console.log(chalk.bgYellow('Poćwicz jeszcze.'));
        } else if (state.no < state.yes) {
            console.log(chalk.bgGreen('Całkiem nieźle!'));  
        }
        console.log();
        return null;
    }
    let verbArr = data.irregularVerbs;
    let verbIdx = random(0, verbArr.length);
    let tence = random(0, 2);
    let desc = (tence === 0 ? "Present" : "Past");
    let questionKey = verbArr[verbIdx][2];
    let tryKey = verbIdx + '_' + tence;
    
    if (tryHistory[tryKey]) {
        return genQuestion();
    }
    
    inquirer.prompt([
        { name: `${questionKey} ` + chalk.yellow(`(${desc})`) }
    ]).then(function (qAndAObj) {
        const userAnswer = Object.values(qAndAObj)[0];
        const originAnswer = verbArr[verbIdx][tence];
        if (userAnswer == originAnswer) {
            console.log(chalk.bgGreen('Tak!'));
            state.yes += 1;
            tryHistory[tryKey] = true;
        } else {
            console.log(`${chalk.red('Nie, powinno być')}: ${chalk.underline.greenBright(originAnswer)}`);
            state.no += 1;
        }
        state.counter -= 1;
        return genQuestion();
    }).catch((error) => {
        if (error.isTtyError) {
            console.log('a')
            // Prompt couldn't be rendered in the current environment
        } else {
            console.log(`Something else went wrong`);
            console.log(error);
        }
    });
}

export const irregularVerbs1 = {
    description: 'Present Simple, Simple Past',
    actionFunc: (howManyTrys) => {
        if (howManyTrys) {
            state.counter = howManyTrys;
        }
        genQuestion();
    }
 };