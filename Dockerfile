FROM node:12.19.0
WORKDIR /home/build
COPY build .
RUN npm install -g serve
CMD ["serve"]
