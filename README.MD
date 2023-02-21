# HOW TO HOST NODEJS API + TYPESCRIPT + ENV ON VERCEL

## STEP 1: initialize the node project

npm init -y

## STEP 2: Install All dependencies

yarn add express typescript @types/express @types/node @types/dotenv dotenv ts-node -D

## STEP 3: Create tsconfig.json file

npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true

## STEP 4: You can keep the default tsconfig.json

only change "outDir": "build", to
"outDir": "dist",

## STEP 5: Add start to the script in package.json

This will help you run your application locally.
"start": "nodemon src/index.ts",

## STEP 6: make src folder inside your root dir.

mkdir src
navigate to src and create an index.ts
cd src
touch index.ts

## STEP 7 : Create a .env file in your root folder

touch .env
Add SERVERPORT in .env

## STEP 8: Add gitignore

touch .gitignore
Add the following in your gitignore file
.env
/node_modules

## STEP 9: Git step up

git init
git add .
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/Richpong212/vercelApiHosting.git
git push -u origin master

## STEP 10: Create account on vercel or login

add your need project from github on vercel
Before your deploy set the enviroment virable

- SERVERPORT : 9090
