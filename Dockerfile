FROM node:18-alpine

RUN mkdir -p /app
WORKDIR /app
COPY . /app

ARG VITE_BASE_URL

ENV VITE_BASE_URL=${VITE_BASE_URL}

RUN npm install -g serve
RUN npm install

RUN npm run build

EXPOSE 3001

CMD ["serve", "-s", "dist", "-l", "3001"]