FROM node:12

LABEL Docker Swarm Lab - German Tellez <gertellezv@gmail.com>

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "/usr/src/app/"]

RUN npm install 

COPY . .

ENV NODE_ENV development

EXPOSE 3000

CMD ["npm", "start"]
