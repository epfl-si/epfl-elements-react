FROM node:lts-alpine3.17 as storybook-build
RUN apk add --no-cache \
  git \
  openssh
WORKDIR /app

COPY . ./
RUN npm install && npm run build-storybook


# server environment
FROM nginx:stable-alpine
COPY --from=storybook-build /app/storybook-static /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
