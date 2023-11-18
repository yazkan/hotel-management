# Hotel Management System

![Version][npm-image] ![Version][npm-licence-image]

It is the hotel management system server. It retrieves data from the database and allows access to the data from specified endpoints with Express.js

This project powered by Node.js and Express.

## Get Started

Open command line and apply this steps:

1. Step

```
git clone https://github.com/yazkan/hotel-management.git
```

2. Step

```
cd hotel-management
```

```
npm install
```

```
npm start
```

## HTTP Requests

http://localhost:3000

| Route          | HTTP Request | Request Body                                                                                                        | Description              |
| -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| /payment       | `GET`        | Empty                                                                                                               | Empty                    |
| /reservation   | `GET`        | Empty                                                                                                               | Empty                    |
| /service       | `GET`        | Empty                                                                                                               | Empty                    |
| /room/allRooms | `GET`        | Empty                                                                                                               | Gets all rooms.          |
| /room/:id      | `GET`        | Empty                                                                                                               | Gets the specified room. |
| /user/allUsers | `GET`        | Empty                                                                                                               | Gets all users.          |
| /user/:id      | `GET`        | Empty                                                                                                               | Gets the specified user. |
| /user/:id      | `POST`       | {'username':'username', 'name':'Name', 'surname':'Surname', 'email':'username@example.com', 'password':'Password' } | Creates a new user.      |

## Contributors

@nazmiyazkan
@ozgur
@mustafakacar

[npm-image]: https://camo.githubusercontent.com/1989ee0985bb24c008f46f46930d552e5b4f95c938cecd70fca2cd18e8acbecb/68747470733a2f2f62616467656e2e6e65742f6e706d2f762f65787072657373
[npm-licence-image]: https://camo.githubusercontent.com/cc63a56f27c0b4c4359b786a56bfa6986f987f4007a9b975635e060d24bdb96f/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f6d7973716c322e7376673f6d61784167653d32353932303030
