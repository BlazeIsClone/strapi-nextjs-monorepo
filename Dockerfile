FROM node:18

ENV NODE_ENV production

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm ci

RUN mkdir node_modules/.cache && chmod -R 775 node_modules/.cache

EXPOSE 3000 1337

RUN npm run build

CMD ["npm", "run", "start"]