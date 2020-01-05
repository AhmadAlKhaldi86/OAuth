# OAuth test project with passportJs.

```diff
- OAUTH a way for users to authenticate using 3rd party apps such as facebook google.
- In this project we will use google+ API to authentication users. 
```

#### This application is to test running an application OAUTH scheme authentication.
#### We will be using passport.js
#### We will be hosting the application in docker container.
#### Source: https://github.com/iamshaunjp/oauth-playlist


### Plan
- We will be talking and retriving info from google. 
- Check image below where yellow shows where we are going to use passport
![](https://github.com/AhmadAlKhaldi86/OAuth/blob/master/assets/Plan.png)
- Application starts
- You will go to home page. If you click on login page it will take you to /auth/login URL
- If you click on +google it will trigger an event that handles /auth/google
- We will not talk to google! - we will let passport handle that. 
- Then user will grantus permission 
- Connection will go back to redirect URI /auth/google/redirect
- All the routes are handled in routes/auth-routes.js
- Google will provide us back a code that we will use if we want to get info.
- Passport will take control again and use the code to get profile info.
- Handled by passport.authenticate('google')
- Once profile info is done. CallBack function is run.
- Check if user exist "Already singed in with us before" . If not create new user.
-  //////////////////// Section 2 - Not Manditory ////////////////////// 

### Usage:
- pre-req:
  - npm/node and Express
  - Docker
  - ejs to render a website. npm install ejs
  - npm install mongoose
  - npm install passport passport-google-oauth20
- Build and Run in Docker: 
```diff
+ docker will not run now since we dont have mongo runing in docker
- run it locally
```
  - Pull this repo and run following to build the image --> docker build -t nodeexpress .
  - Run the container --> docker run -p 3030:8080 -d nodeexpress
  - Open in  chrome --> http://localhost:8080
  - to stop the application RUN --> docker copntainer THEN docker container stop 9e13d736c9d2
  
- Run with node locally:
  - Start your local mongodb. I am running in - mlaunch start 
  - node src/app.js
### Routes
- We dont want our code to look messy so we want to modulerize our code. 
```diff
homePage  -> localhost:8080/
loginPage -> localhost:8080/auth/login - Another page that will be visted when click on login.
logoutPage -> localhost:8080/auth/logout -If user wants to logout.
Auth-URL -> localhost:8080/auth/google
```
