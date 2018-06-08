FROM node:8

WORKDIR /App
RUN npm install -g @angular/cli

COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .

RUN ng build --prod

ADD entrypoint.sh .
RUN chmod +x entrypoint.sh

ENV NODE_OPTS=""

ENTRYPOINT ["/App/entrypoint.sh"]
