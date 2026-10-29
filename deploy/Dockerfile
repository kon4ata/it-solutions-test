FROM node:26-alpine

WORKDIR /opt/it-solutions-test

COPY package*.json ./
RUN npm ci

COPY ./ .

RUN npm run contract:emit && npm run build

EXPOSE 3000

CMD ["sh", "-c", "npm run db:init && npm run db:seed && npm start"]