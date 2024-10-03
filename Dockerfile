FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY index.html .
COPY style.css .
COPY shadow_dog.png .
COPY script.js .

EXPOSE 80