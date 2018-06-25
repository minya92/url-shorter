# Url shorter

Demo: [4cut.ru](https://4cut.ru)

starter template from  [ssr-react-redux-styled](https://github.com/minya92/ssr-react-redux-styled)

Instructions to deployment

```
cd url-shorter
npm i
npm run build
docker run --restart=always --name url-shorter -d -p 3000:3000 -v "$PWD":/usr/src/app -w /usr/src/app node:10 npm start
```

For update code

```
cd url-shorter
git pull
npm run build
docker restart url-shorter
```