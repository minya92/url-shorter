# Url shorter

starter template from  [ssr-react-redux-styled](https://github.com/minya92/ssr-react-redux-styled)

Instructions to deployment

```
cd url-shorter
npm i
npm run build
docker build -t url-shorter .
docker run -d -p 3000:3000 --restart always url-shorter
```