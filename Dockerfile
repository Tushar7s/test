FROM node:20

WORKDIR C:/Users/tusha/OneDrive/GITDEMO/MAJORPROJECT

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npx", "nodemon", "app.js"]
