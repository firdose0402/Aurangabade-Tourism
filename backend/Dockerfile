# backend/Dockerfile
FROM node:18-alpine

WORKDIR /app

# copy package metadata first for better layer caching
COPY package*.json ./

# install production deps only
RUN npm ci --only=production

# copy app source
COPY . .

# Ensure the app listens on 0.0.0.0, not localhost
ENV NODE_ENV=production
EXPOSE 5000

CMD ["node", "server.js"]
