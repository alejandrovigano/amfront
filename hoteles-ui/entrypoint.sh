#!/bin/sh
echo npm start

echo API_URL $API_URL
echo "export const environment = { production: true, hotelesApiUrl: '$API_URL' };" > /App/src/environments/environment.prod.ts

echo Armando dist...
ng build --prod

echo Arrancando servidor node...
npm run startNode
