# Указываем базовый образ для Node.js
FROM node:23-alpine AS builder

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package.json ./
COPY yarn.lock ./

# Устанавливаем зависимости
RUN yarn install --frozen-lockfile

# Копируем весь исходный код в контейнер
COPY .. .

# Собираем приложение
RUN yarn run build

# Удаляем devDependencies для минимизации размера образа
RUN yarn install --prod

# Используем меньший образ для production
FROM node:23-alpine AS runner

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем зависимости и собранное приложение из стадии сборки
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/start.js ./

# Указываем порт, который будет использовать приложение
EXPOSE 3000

# Указываем команду запуска приложения
CMD ["npm", "start"]