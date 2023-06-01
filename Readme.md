1. npm init
2. yarn add -D typescript
3. yarn add express mongoose
4. tsc --init

```javascript
// change file path to
"rootDir": "./src",
"outDir": "./dist",
```

5. yarn add @types/express
6.  yarn add dotenv
7. yarn add ts-node-dev --dev
8. add this on pakage.json in script>
```javascript
"start": "ts-node-dev --respawn --transpile-only src/server.ts",
```

9. yarn add cors
10. yarn add -D @types/cors

## typescript eslint prettier setup 

* https://blog.logrocket.com/linting-typescript-eslint-prettier/

step 1: add this to your tscofig.json file

```javascript

"include": ["src"], // which files to compile
"exclude": ["node_modules"], // which files to skip

```

step 2: yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev

step 3: create .eslintrc file and add this code ..  search on google "current ecma version" and change this ecmaVersion

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

step 4: add this on pakage.json  on script

```javascript
"lint": "eslint --ext .js,.ts .",
or
"lint:check": "eslint --ext .js,.ts .",

```

step 5: create a .eslintignore file add this in you code

````
node_modules
dist
.env
````

step 6: change lint or lint:check

```javascript
"lint": "eslint --ignore-path .eslintignore --ext .js,.ts ."
```

step 7: yarn add -D prettier

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
"prettier:check":"yarn prettier --write .",
```

for using prettier in specefic code file use this cmd

```
yarn prettier --write src/app.ts
```