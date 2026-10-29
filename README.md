# Тестовое задание для IT Solutions

Перед запуском нужно создать файл .env из файла .env.example и указать нужные значения в переменные окружения

## Запуск через Docker

`docker compose up -d`

## Запуск локально в dev моде

- Закомментировать сервис `app-back` в файле docker-compose.yaml
- Запустить БД в докере через docker-compose.yaml, выполнив команду `docker compose up -d`
- `npm install`
- `npm run contract:emit`
- `npm run db:init`
- Заполнить в файле src/seed.ts базовую информацию о себе, структура указана в файле
- `npm run db:seed`
- `npm run dev`
