FROM node:16-alpine3.15 AS finance-api

EXPOSE 3001

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

RUN npm install -g sequelize-cli

CMD ["npm", "start"]