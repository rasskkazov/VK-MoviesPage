# docker build --build-arg TOKEN=<your_token> -t vk-movies .
# docker run -d -p 3000:80 --name vk-movies-container vk-movies

FROM node:alpine as build
WORKDIR /app
COPY . .

ARG TOKEN
ENV TOKEN=$TOKEN

RUN npm install
RUN npm run build:prod

FROM nginx:stable-alpine
COPY --from=build /app/bundle /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]