const { writeFile } = require('fs');
const { argv } = require('yargs');
require('dotenv').config();
// read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';
const targetPath = isProduction
// if isProduction = true, then create the environment.prod.ts file
   ? `./src/environments/environment.prod.ts`
// else, create the environment.ts file
   : `./src/environments/environment.ts`;
// create the env variables from .env file for the content of environment file
const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   VARIABLE1:  "${process.env.VARIABLE1}",
   VARIABLE2:  "${process.env.VARIABLE2}",
   VARIABLE3:  "${process.env.VARIABLE3}"
};
`;
// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err:any) {
   if (err) {
      console.log(err);
   }
   console.log(`File created: ${targetPath}`);
   console.log(`Production: ${isProduction}`);
});