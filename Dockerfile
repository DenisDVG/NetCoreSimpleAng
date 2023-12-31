### STAGE 1: Build ###
FROM node:latest AS build
WORKDIR /usr/local/app
COPY ./ /usr/local/app
RUN npm install
RUN npm run build
### STAGE 2: Run ###
FROM nginx:alpine
COPY --from=build /usr/local/app/dist/net-core-simple-ang /usr/share/nginx/html
EXPOSE 80