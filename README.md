# Url shorter

starter template from  [ssr-react-redux-styled](https://github.com/minya92/ssr-react-redux-styled)

Instructions to deployment

```
cd url-shorter
npm i
npm run build
docker build -t url-shorter .
docker run -d -p 3000:3000 --name url-shorter --restart always url-shorter
```

For update code

```
cd url-shorter
git pull
npm run build
docker restart url-shorter
```