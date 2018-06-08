FROM node:8

COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .

ADD entrypoint.sh /entrypoint.sh
RUN chmod +x entrypoint.sh

ENV NODE_OPTS=""

ENTRYPOINT ["/entrypoint.sh"]