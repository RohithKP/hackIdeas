
# Stage 1
FROM node:alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod
# Stage 2
FROM nginx:latest AS ngi
COPY --from=build-step /app/dist/hackIdeas  /usr/share/nginx/html

