FROM node:16-alpine AS react-builder
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install -g npm@8.5.5
COPY . /app
RUN npm run build

FROM nginx:alpine
COPY --from=react-builder /app/build /usr/share/nginx/html
