import chalk from 'chalk';
import JSON5 from 'json5';
import { readFile } from 'fs/promises';
const data = JSON5.parse(
  await readFile(
    new URL('../dataSource/months.json5', import.meta.url)
  )
);

export const monthsPolish = {
    description: 'months-polish, lista miesięcy po polsku',
    actionFunc: () => {
      data.monthsArr.forEach((elem, index) => {
        console.log(`${index+1} ${elem.pl}`);
      });
    }
 };