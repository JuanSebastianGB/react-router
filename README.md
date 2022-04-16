# React Router System

## Doc source

[Check out the completed version of the app here](https://reactrouter.com/docs/en/v6/getting-started/tutorial). :eye:

### Installing react

Use the package managment of node to create a full new reaat project

     npx create-react-app

### Working with src dir

For this project all the files listed inside are deleted

### Installing react router

    npm i react-router-dom

### To avoid errors

    Is necesary to delete and reinstall node modules, otherwise probably you will get an error
```bash

rm -rf node_modules
npm i

```
### Using Docker image
This aplication is mounted in a docker image and can be used used easily like follow🧑 :
```
docker run -p <any desired port>:80 --name <container name> -d juansebastiangb/react-router-demo
```
## Using docker compose to run in production either in develop mode
### Production 🛬
```
docker-compose -f docker-compuse-prod.yml  up -d --build
```
### Development 🔨
```
docker-compose -f docker-compuse-dev.yml  up -d --build
```




