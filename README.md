# Task-Manager-API
Task Manager API is an API that enables a user to create an account and start managing their day to day tasks.

## How to run the app
- Either fork or download the app and open the root folder in a cli.
- Install all dependencies using the`npm install` command.
- Start the server using command `npm run start`. The API will be accessible through https://localhost:3000.
- This app does not has a User Interface so to use it a platform like [Postman](https://www.postman.com/) is recommended.
- [MongoDB](https://www.mongodb.com/) is being used as the Database for the API. 

## User Stories
- User can signup by creating an account.
- User is able to access their profile.
- User is able to update account details as well as delete the account.
- User is able to create, read, update and delete tasks created by them.
- User is able to sign in using the same account from multiple devices.
- User is able to upload an avatar.

## Features
- User
  -  User is able to create an account using the `/users` endpoint, where the user is required to pass their **name**, **email**, and **password**.
    -  ```
        {
          "name": "John",
          "email": "test@test.com",
          "password": "dummy"
        }
        ``` 
  -  User account details are validated before account creation.
  -  A JWT token is assigned to the user on account creation.
  -  Password is saved in db as one-way encrypted data.
  -  User can login to their account using `/users/login` endpoint by passing their **email** and **password** in the body.
    -  ```
        {
          "email": "test@test.com",
          "password": "dummy"
        }
        ``` 
  -  User is able to access their profile after signing in using the `/users/me` endpoint.
  -  User can also update the account details using the`/users/me` endpoint.
  -  To upload an avatar the user can access the `/users/me/avatar` endpoint.
  -  To logout user can use the `/users/logout` endpoint.
  -  To logout from all devices user can use `/users/logoutAll` endpoint.
  -  Upon the creation / deletion of an account the user gets an automated email.

- Task
  -  User is able to create a task, if they are signed in by using `/task/create` endpoint.
    -  ```
        {
          "description": "Solved Authentication Error",
          "completed": true
        }
       ``` 
  -  User can access their tasks by passing query parameters such as `completed=false` to filter the tasks using `/tasks?completed=false` endpoint.
  -  Every Task has a random id attached, so the user can access a particular task by using `/task/:id`, where :id is the id associated with task.
  -  User can read, update and delete a partular task by using the above endpoint.
  
## Dependencies
- SendGrid
- bcryptjs
- express
- jsonwebtoken
- mongodb
- mongoose
- multer
- sharp
- validator
