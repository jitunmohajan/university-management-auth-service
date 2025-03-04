## Initialize setup

firstly add .gitignore file then add this code and if you need to ignore more then add those files also in the file

```
node_modules
.env
```

step 1: instead of index.ts use src/server.ts

```bash
npm init
```

step 2.

```bash
yarn add -D typescript
```

step 3.

```bash
yarn add express mongoose
```

step 4.

```bash
tsc --init
```

```javascript
// change file path to
"rootDir": "./src",
"outDir": "./dist",
```

step 5.

```bash
yarn add @types/express
```

step 6.

```bash
yarn add dotenv
```

step 7.

```bash
yarn add ts-node-dev --dev
```

step 8. add this on pakage.json in script>

```javascript
"start": "ts-node-dev --respawn --transpile-only src/server.ts",
```

step 9.

```bash
yarn add cors
```

step 10.

```bash
yarn add -D @types/cors
```

## typescript eslint prettier setup

- https://blog.logrocket.com/linting-typescript-eslint-prettier/

step 1: add this to your tscofig.json file

```javascript

"include": ["src"], // which files to compile
"exclude": ["node_modules"], // which files to skip

```

step 2:

```bash
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```

step 3: create .eslintrc file and add this code .. search on google "current ecma version" and change this ecmaVersion

```javascript
// .eslintrc
// .eslintrc
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module",
  },
  "plugins": ["@typescript-eslint"],
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],

  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    // to enforce using type for object type definitions, can be type or interface
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
  },

  "env": {
    "browser": true,
    "es2021": true
  }
}
```

step 4: add this on pakage.json on script

```javascript
"lint:check": "eslint --ext .js,.ts .",
```

step 5: create a .eslintignore file add this in you code

```
node_modules
dist
.env
```

step 6: change lint or lint:check

```javascript
"lint": "eslint --ignore-path .eslintignore --ext .js,.ts ."
```

step 7:

```bash
yarn add -D prettier
```

step 8: create .prettierrc file

```javascript
{
    "semi": false,
    "singleQuote": true,
    "arrowParens": "avoid"
}
```

step 9: add this on pakage.json on script

```javascript
"prettier:check":"prettier --ignore-path .gitignore --write \"**/*.+(js|ts|json)\"",
```

for using prettier in specefic code file use this cmd

```
yarn prettier --write src/app.ts
```

step 10: add this on setting.json on vscode

```javascript
"[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
},
"editor.formatOnSave": true,
```

step 11: yarn add -D eslint-config-prettier

```javascript
// .eslintrc paste the code instead of previous code
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module",
  },
  "plugins": ["@typescript-eslint"],
  // HERE
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],

  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
  },

  "env": {
    "browser": true,
    "es2021": true
  }
}
```

# husky setup

> > before setup push your project on github otherwise it will not work properly

step 1:

```bash
yarn add husky --dev
```

step 2:

```bash
yarn husky install
```

step 3:

```
yarn husky add .husky/pre-commit "npm test"
```

```
// add this on .husky/pre-commit
yarn lint:check
```

step 4: add this on script on pakage.json

```javascript
"lint-prettier": "yarn lint:check && yarn prettier:check",
```

step 5:

```bash
yarn add -D lint-staged
```

add this to pakage.json

```javascript

"lint-staged": {
    "src/**/*.ts": "yarn lint-prettier"
},
```

step 6: change on .husky/pre-commit

```
// add this on .husky/pre-commit
yarn lint-staged
```

step 7: add this on script on pakage.json

```javascript
"lint:fix": "eslint . --fix",
"prettier:fix": "prettier --write .",
```

```
yarn start
```

## setup logger

step 1: paste the code instead of previous code on .eslintrc

```javascript
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "no-unused-vars": "error",
    "prefer-const": "error",
    "no-unused-expressions": "error",
    "no-undef": "error",
    "no-console": "warn",
    "@typescript-eslint/consistent-type-definitions": ["error", "type"]
  },
  "env": {
    "browser": true,
    "es2021": true,
    "node":true
  },
  "globals": {
    "process":"readonly"
  }
}
```

step 2: create .vscode folder and then create settings.json then paste the code here

```javascript
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "source.organizeImports": true
    }
}
```

step 3: add this on .env

```javascript
NODE_ENV = production
```

step 4: important link (https://www.npmjs.com/package/winston)

```bash
yarn add winston
```

step 5: create a shared folder then cerate a logger.ts then paste the code here

```javascript
// eslint-disable-next-line consistent-type-definitions
import { createLogger, format, transports } from 'winston'
import path from 'path'
const { combine, timestamp, label, printf, prettyPrint } = format

// custom formet
const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp)
  const hour = date.getHours()
  const minites = date.getMinutes()
  const seconds = date.getSeconds()
  return `${date.toDateString()} ${hour}:${minites}:${seconds} [${label}] ${level}: ${message}`
})

const logger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    myFormat,
    prettyPrint()
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      // eslint-disable-next-line no-undef
      filename: path.join(process.cwd(), 'logs', 'winston', 'success.log'),
      level: 'info',
    }),
  ],
})

const errorlogger = createLogger({
  level: 'error',
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    myFormat,
    prettyPrint()
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      // eslint-disable-next-line no-undef
      filename: path.join(process.cwd(), 'logs', 'winston', 'error.log'),
      level: 'error',
    }),
  ],
})

export { logger, errorlogger }
```

after using this command you cant use console.log directly you have use logger.info , errorlogger.error , errorlogger.warn etc

## setup winston daily rotate

step 1: 

```bash
yarn add winston-daily-rotate-file
```
step 2:  replace the shared/logger.ts code

```javascript
import { createLogger, format, transports } from 'winston';
import path from 'path';
const { combine, timestamp, label, printf, prettyPrint } = format;
import  DailyRotateFile from 'winston-daily-rotate-file';

// custom formet
const myFormat = printf(({ level, message, label, timestamp }) => {
    const date= new Date(timestamp);
    const hour = date.getHours();
    const minites = date.getMinutes();
    const seconds = date.getSeconds();
    return `${date.toDateString()} ${hour}:${minites}:${seconds} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
    level: 'info',
    format: combine(
        label({ label: 'right meow!' }),
        timestamp(),
        myFormat,
        prettyPrint()
    ),
    transports: [
        new transports.Console(),
        new DailyRotateFile({
            // eslint-disable-next-line no-undef
            filename: path.join(process.cwd(), 'logs','winston','success','phu-%DATE%-success.log'),
            datePattern: 'YYYY-DD-MM-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d'
        })
    ],
  });

  const errorlogger = createLogger({
    level: 'error',
    format: combine(
        label({ label: 'right meow!' }),
        timestamp(),
        myFormat,
        prettyPrint()
    ),
    transports: [ 
        new transports.Console(),
        new DailyRotateFile({
            // eslint-disable-next-line no-undef
            filename: path.join(process.cwd(), 'logs','winston','errors','phu-%DATE%-error.log'),
            datePattern: 'YYYY-DD-MM-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d'
        })
    ],
  });

export { logger, errorlogger };
```


## setup error handling


## zod setup

step 1: 

```
yarn add zod
```


## Http Status code

step 1: 
```
yarn add http-status
```

step 2:
```
yarn add @types/bcrypt
```


## setup password encryption

step 1: install bccrypt
```
yarn add bcrypt
```

step 2: install dependencies

```
yarn add @types/bcrypt
```

## setup json web token

step 1: install json web token

```
yarn add jsonwebtoken
```

step 2: install 
```
yarn add @types/jsonwebtoken
```

##  setup cookie perser

step 1: install cookie perser

```
yarn add cookie-parser
```

step 2: install 

```
yarn add @types/cookie-parser
```

