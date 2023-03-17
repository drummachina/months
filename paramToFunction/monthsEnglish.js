import chalk from 'chalk';
import JSON5 from 'json5';
import { readFile } from 'fs/promises';
const data = JSON5.parse(
  await readFile(
    new URL('../data.json5', import.meta.url)
  )
);

export const monthsEnglish = {
    description: 'Months in English, lista miesięcy po angielsku',
    actionFunc: () => {
      console.log(`\nThis is the months in English:\n`);
      data.monthsArr.forEach((elem, index) => {
        let out;
        if (!elem.en) {
          out = chalk.gray(elem.en);
        } else {
          out = chalk.yellow(elem.en);
        }
        console.log(out);
      });
    }
};