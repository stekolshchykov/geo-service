# Stage 1: Build
FROM node:18 AS builder

# Установите рабочую директорию
WORKDIR /app

# Скопируйте package.json и yarn.lock для установки зависимостей
COPY package.json yarn.lock ./

# Установите зависимости
RUN yarn install

# Скопируйте все исходные файлы
COPY . .

# Соберите приложение
RUN yarn build

# Stage 2: Production
FROM node:18 AS production

# Установите рабочую директорию
WORKDIR /app

# Скопируйте только необходимые файлы из стадии сборки
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Установите переменную окружения для Node
ENV NODE_ENV=production

# Запустите приложение
CMD ["node", "dist/server.js"]

# Откройте порт приложения (если нужно)
EXPOSE 3000
