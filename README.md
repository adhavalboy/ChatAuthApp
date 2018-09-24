# ChatAuthApp
Creating Users from back-end 
with POST, PUT, DELETE, GET requests 

## Steps to Run the app
1.Download Repo <br />
2.Install [Node.JS](https://nodejs.org/en/) <br />
3.Install Dependencies - NPM Install <br />

# Run NPM START <br />
and browse https://localhost:1234

To get data from DB --> get('/', controller.findAll);
To get data specifically from one userID --> get('/:UserId', controller.getUserData);
To enter data to DB --> post('/post', controller.postUserData);
To edit data to DB --> put('/:UserId/put', controller.putUserData);
To drop the data using UserId --> delete('/:UserId/delete', controller.deleteUserData);
