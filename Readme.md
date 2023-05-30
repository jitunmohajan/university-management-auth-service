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