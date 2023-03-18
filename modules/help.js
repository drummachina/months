import chalk from 'chalk';
import fs from 'fs';
export const help = {
    description: 'List supported options.',
    actionFunc: () => {
        
        console.log(chalk.magenta(
'Node.js Command line app, displays months and seasons list in English and Polish language.\n\
How to run: node app.js <param_required>, ex: node app.js m-pl\n\
Date: 2022-11-20\n\
Author: drummachina@gmail.com\n\
Purpose: For zombolol2x\n'
        ));
        
        console.log('List of support options:');
      
        fs.readdir('./modules', (error, fileArr) => {
            fileArr.forEach((elem, idx) => {
                let key = elem.replace(/\.js$/, '');
                if (key !== 'help') {
                    let modulePath = `./${elem}`;
                    
                    import(modulePath)
                    .then(obj => {
                        console.log(chalk.magenta(`${key}`) + ` - ${obj[key].description}`);
                    }).catch(err => {
                        console.log(chalk.red(`Param: "${modulePath}" is not recognized, exit.`));
                        console.log(err);
                        process.exit();
                    })
                    
                }
            })
        })
    }
};