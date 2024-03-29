# Проектная работа

Репозиторий для приложения проекта `Mesto`, включающий фронтенд и бэкенд части приложения. 
В приложении реализованы следующие возможности: 
* авторизация и регистрация пользователей,
* возможность изменить данные пользователя,
* добавление фотографии и её описания,
* лайк карточки,
* просмотр карточки,
* удаление карточки (при условии, что она загружена текущим пользователелем). 

Бэкенд расположен в директории `backend/`, а фронтенд - в `frontend/`. 
  
Ссылка на сайт: https://yakrvtsva-mesto.students.nomoredomains.sbs/

## Примененные навыки и технологии
* Вёрстка
  - вёрстка с использованием Flexbox и Grid Layout
  - семантическая верстка
  - адаптивная вёрстка сайта для разных экранов (от 320 до 1280+)
  - вёрстка форм (текстовые поля и кнопки)
  - методология БЭМ

* React
  - использован Create React App
  - хуки `useState`, `useEffect` и `useRef`
  - поднятие стейта
  - глобальный стейт через React Context
  - управляемые компоненты в элементах формы
  - использован реф для прямого доступа к DOM-элементам

* React Router
  - реализован функционал регистрации и авторизации
  - защищенные маршруты
  - авторизация через JWT
  - хранение токена в Local Starage

* Бэкенд
  - Node.js
  - express.js
  - MongoDB
  - mongoose

### Инструкция по развёртыванию проекта:
```bash
# клонирование репозитория
$ git clone https://github.com/yakravtsova/react-mesto-api-full.git
# установка зависимостей
$ npm install
# запуск develop-сборки фронтенда
$ npm run start
```