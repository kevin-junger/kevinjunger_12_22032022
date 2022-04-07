# SportSee

This repository contains all the source code needed to run the SportSee dashboard application. 

## 2. Prerequisites

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

## 3. API

### 3.1 *Start me up!*

**Each of these commands MUST be done from the main project folder.**

- The `yarn` command will allow you to install the dependencies.
- The `yarn dev` command will allow you to run the micro API.

### 3.2. Endpoints

This project includes four endpoints that you will be able to use: 

- `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).

**Currently, only two users have been mocked. They have userId 12 and 18 respectively.**

## 4. Front-end

### 4.1 *Start me up!*

- Locate yourself into the `front` folder first
- To install the dependencies, use `npm i -D`
- To run the front end, use `npm start`

**Because the micro API is running on port 3000, it'll nag about not being able to run on that same port and ask if you want to switch to port 3001 instead. Make sure to answer yes to that.**

> For more details about the scripts made available by Create React App, please check `README_CRA.md` into the `front` folder.

### 4.2 URLs

For now, although the routing is somehow set up, there's only two fonctionals URLs: 

- `http://localhost:3001/user/12`
- `http://localhost:3001/user/18`

**Any other URL will NOT work.**
