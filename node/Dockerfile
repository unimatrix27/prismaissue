FROM node:15

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install


COPY . .

RUN npx prisma generate

RUN : \
    && /bin/echo -e "sleep 20;npm run start" > ./exe \
    && chmod +x ./exe 

EXPOSE 5000
CMD ["./exe"]


