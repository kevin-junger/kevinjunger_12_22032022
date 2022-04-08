# SportSee - Guide de démarrage rapide en français

Ce dépôt contient tout le code nécessaire au fonctionnement du tableau de bord SportSee.

## 2. Pré-requis

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

Si vous avez l'habitude ou la nécessité de travailler avec plusieurs versions de NodeJS, il est recommandé d'utiliser [nvm](https://github.com/nvm-sh/nvm) pour vous permettre de gérer plus facilement vos différentes versions.

## 3. API

### 3.1 *Start me up!*

**Chacune de ces commandes DOIVENT être exécutées depuis la racine du projet.**

- La commande `yarn` vous permettra d'installer les dépendances nécessaires ;
- `yarn dev` vous permettra d'exécuter la micro API.

### 3.2 Points d'accès

Le projet propose ces quatre points d'accès qui devront être utilisés pour récupérer les données désirées :

- `http://localhost:3000/user/${userId}` - retourne les informations de base de l'utilisateur correspondant à `userId` (notamment les informations de base - nom, prénom, âge ; le score journalier, et les données nutritionnelles telles que les calories) ;
- `http://localhost:3000/user/${userId}/activity` - retourne les informations relatives à l'activité journalière sur une semaine de l'utilisateur correspondant à `userId` (poids en kg et calories consommées) ;
- `http://localhost:3000/user/${userId}/average-sessions` - retourne la durée moyenne journalière sur une semaine des sessions de l'utilisateur correspondant à `userId` (durée mesurée en minutes) ;
- `http://localhost:3000/user/${userId}/performance` - retourne les indices de performance par type (vitesse, endurance, etc.) de l'utilisateur correspondant à `userId`.

**Pour le moment, seules les données de deux utilisateurs ont été simulées. Leurs `userId` sont respectivement `12` et ``18`.**

## 4. Front-end

### 4.1 *Start me up!*

- Positionnez-vous d'abord dans le dossier `front` ;
- Exécutez la commande `npm i -D` pour installer les dépendances ;
- Enfin, exécutez `npm start` pour démarrer le front-end.

**Si vous avez bien démarré l'API, elle devrait déjà tourner sur le port 3000, ce qui occasionnera une erreur lorsque vous tenterez d'exécuter le front-end. Vous aurez donc le choix d'opter pour le port 3001 à la place, veuillez donc confirmer.**

> Pour plus de détails concernant les scripts proposés par défaut par Create React App, veuillez consulter le `README.md` dans le dossier `front`.

### 4.2 URL pour l'accès au front-end

Pour le moment, bien qu'un routage assez sommaire ait été mis en place, seules deux URL sont fonctionnelles :

- `http://localhost:3001/user/12`
- `http://localhost:3001/user/18`

**Toute autre URL ne fonctionnera PAS.**

# SportSee - Quick start guide in English

This repository contains all the source code needed to run the SportSee dashboard application. 

## 2. Prerequisites

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

## 3. API

### 3.1 *Start me up!*

**Each of these commands MUST be done from the main project folder.**

- The `yarn` command will allow you to install the dependencies;
- The `yarn dev` command will allow you to run the micro API.

### 3.2. Endpoints

This project includes four endpoints that you will be able to use: 

- `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.);
- `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories;
- `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday;
- `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).

**Currently, only two users have been mocked. They have userId 12 and 18 respectively.**

## 4. Front-end

### 4.1 *Start me up!*

- Locate yourself into the `front` folder first;
- To install the dependencies, use `npm i -D`;
- To run the front end, use `npm start`.

**Because the micro API is running on port 3000, it'll nag about not being able to run on that same port and ask if you want to switch to port 3001 instead. Make sure to answer yes to that.**

> For more details about the scripts made available by Create React App, please check the `README.md` located into the `front` folder.

### 4.2 URLs

For now, although the routing is somehow set up, there's only two fonctionals URLs: 

- `http://localhost:3001/user/12`
- `http://localhost:3001/user/18`

**Any other URL will NOT work.**
