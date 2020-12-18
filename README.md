# 23227 Back end CA2, Dorset College

## About

This is a solo project which had the purpose to perform CRUD Request through NodeJS, Express on a React App

## Dependencies

- JS
- Node
- Express
- Nodemon
- Body-Parser
- MongoDB
- Axios
- Bulma
- Webpack

## Requirements and Installation

- Install Dependencies

```bash
npm install
```

- Launch the Server

```bash
npm run start
```

## How to perform requests


### Database info

- Database : MongoDB
- Name : carsdb
- Collection : cars

- Read database : '/'
- Create a car : '/create-car'
- Update a car : '/edit-car/{id} (or '/' Edit button)
- Delete a car : '/' (Delete button)


### Post request

To make the post request : 

- On the main page, **click** on the **Create new car** button
- **Fill** the inputs
- **Submit** form with the **submit** button

If successful, the car should appear

### Get request

To make the GET Request : 

**Connect** on the home page


### Put request

To make the PUT Request :

- On the home page, **click** on the **Edit** button on a specific car
- **Update** the inputs
- **Submit** form with the **submit** button

If successful, the car should be updated


### Delete request

To make the DELETE Request :

- On the home page, simply **click** on the **Delete** button on a specific car

If successful, the car should be gone
