# 1. Create folder superhero-enthusiast backend project
## 1.1 create ts-superhero-enthusiast folder & cd ts-superhero-enthusiast
## 1.2 create server folder under ts-superhero-enthusiast & cd to server folder
### 1.1.1 npm init -yes (accept all default)
### 1.1.2 npm install @apollo/server graphql
### 1.1.3.1 npm install
- dotenv
- lodash
### 1.1.3.2 npm install --save-dev
- npm install --save-dev typescript ts-node @types/node nodemon eslint eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier
### 1.1.4 set up with TypeScript

- create src under server folder && create an empty index.ts
- install typescript,@types/node into project dev dependencies:  
 *npm install --save-dev typescript @types/node*
- create a tsconfig.json file under server folder with contents of:  

```
{
  "compilerOptions": {
    "rootDirs": ["src"],
    "outDir": "dist",
    "lib": ["es2020"],
    "target": "es2020",
    "module": "esnext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "types": ["node"]
  },
  "ts-node": {
    "esm": true,
    "experimentalSpecifierResolution": "node",
  }
}

```
### 1.1.5 update package.json scripts:  
```
{
  "name": "ts-superhero-enthusiast",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "compile": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npm run compile && node ./dist/index.js",
    "build": "",
    "dev": "nodemon ./src/index.ts"
  }, ...   
```
> then start dev server by:   
**npm run dev**



