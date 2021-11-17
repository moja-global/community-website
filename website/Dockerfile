FROM node:16-alpine

WORKDIR /website

COPY package.json ./

RUN yarn 

COPY . .

RUN yarn build

EXPOSE 3000 

CMD ["yarn", "serve"]
