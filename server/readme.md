# Getting Started with ts-superhero-enthusiast Server

## Install package.json denpendency
Under folder ts-superhero-enthusiast/server, you can
 1. install package :
> `npm install`

  2. run available Scripts (from package.json)

      #### 2.1 start development nodemon server by:
      >   `npm run dev` 
```
    based on tsconfig.json:
    {
      "compilerOptions": {
        "baseUrl": ".",
        "rootDirs": [
          "src"
        ],
        "outDir": "dist",
        "lib": [
          "es2020"
        ],
        "target": "es2020",
        "module": "esnext",
        "moduleResolution": "node16",
        "esModuleInterop": true,
        "types": [
          "node"
        ]
      },
      "ts-node": {
        "esm": true,
        "experimentalSpecifierResolution": "node",
      }
    }
```
2.2. compile & build server into dist folder : 
  >  `npm run tsc` 
``` 
base on :
1). tsconfig.base.json, 2). tsconfig.ems.json 3). tsconfig.cjs.json
```

2.3. start built server :  
> `npm start` 

```
with console logs like below :
> tsc --project tsconfig.esm.json & tsc --project tsconfig.cjs.json

connectDB mongodb+srv://qfzhang18:test123@cluster0.nvqpr1i.mongodb.net/myhero-db?retryWrites=true&w=majority
heroInfoDBConnection Promise { <pending> }
🚀  Server ready at: http://localhost:4000/ 
connected to database successfully!
```
***Note: port unmber can be change with environment PORT variable defined in .env***





