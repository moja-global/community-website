FROM node:alpine

WORKDIR /app/website

EXPOSE 3000 35729
COPY ./website /app/website
RUN yarn install && yarn build

CMD ["yarn", "serve"]
