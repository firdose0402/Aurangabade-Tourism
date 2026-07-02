# frontend/Dockerfile
# 1) build stage
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
# Run the production build (outputs to dist by default)
RUN npm run build

# 2) runtime stage (nginx serving)
FROM nginx:stable-alpine AS runtime

# Remove default nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from the builder
COPY --from=build /app/dist /usr/share/nginx/html

# Optional: copy custom nginx config if you want API proxying
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
