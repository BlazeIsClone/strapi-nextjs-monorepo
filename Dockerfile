FROM node:18

ENV NODE_ENV development

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm ci

RUN mkdir node_modules/.cache && chmod -R 775 node_modules/.cache

RUN npm run build

EXPOSE 3000 1337

CMD ["npm", "run", "start"]