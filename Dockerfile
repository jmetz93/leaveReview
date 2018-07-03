FROM node:latest
RUN mkdir /leave-review

WORKDIR /leave-review
COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3000
CMD ["npm","start"]