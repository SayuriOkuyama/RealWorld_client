# FROM node
# WORKDIR /app

# COPY package*.json ./
# RUN npm ci
# COPY . .

# RUN apt-get update \
#     && apt-get install -y nodejs \
#     && npm install -g npm \
#     && npm install -D eslint prettier eslint-config-prettier \
#     && apt-get -y autoremove \
#     && apt-get clean

# RUN npm run build

# EXPOSE 3000

# CMD npm run dev

FROM node:18-alpine AS build

ENV TZ Asia/Tokyo

WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .

RUN npm run build
# RUN npm run dev

# FROM node:18-alpine AS runtime

# WORKDIR /app
# COPY package*.json ./
# RUN npm ci --only=production
# COPY --from=build /app/.next ./.next
# COPY --from=build /app/public ./public

EXPOSE 3000
# USER node
CMD ["npm", "run" ,"dev"]
