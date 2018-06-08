FROM node:8

WORKDIR /App
RUN npm install -g @angular/cli

COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .

ADD entrypoint.sh .
RUN chmod +x entrypoint.sh

ENV API_URL=""

ENTRYPOINT ["/App/entrypoint.sh"]
