This is a mono repo project using Lerna


npm install -g lerna


lerna init

cd packages/package-name
npm init -y
npm install --save-dev typescript
npx tsc --init


from the root of monorepo do
  "lerna bootstrap"
to link the packages together


cd packages/package-name
npx tsc

Thre readme for each sub packages are included respectively
