# .env File For Angular

## Config the Project
 1. delete and agregate "environment.ts" and "environment.prod.ts" into .gitignore 
 ```
 src/environments/*
 ```

 2. install "yargs", "fs" and "dotenv"
 ```
 npm install --save-dev yargs dotenv fs
 ```

 3. create the ".env" file with the varaibles

 4. create the "setenv.ts" file with the next configurations: 

```TS
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
   AUTH_DOMAIN:  "${process.env.AUTH_DOMAIN}",
   AUTH_CLIENT_ID:  "${process.env.AUTH_CLIENT_ID}",
   GOOGLE_MAP_KEY:  "${process.env.GOOGLE_MAP_KEY}",
   CALLBACK_REDIRECT_URI:  "${process.env.CALLBACK_REDIRECT_URI}"
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
```

5. Update the package.json with this: (Optional)

```JSON
{
   "scripts": {
      "ng": "ng",
      "config": "ts-node ./setenv.ts",
      "start": "npm run config -- --environment=dev && ng serve",
      "build": "npm run config -- --environment=prod && ng build",   
   },
}
```

## Executing the app

If you don't modify the package.json, then...

### Run API in Dev Env
In the command line, execute this command for run the app:
```
npm run config -- --environment=dev && ng serve
```
### Run API in Prod Env
In the command line, execute this command for run the app:
```
npm run config -- --environment=prod && ng build
```