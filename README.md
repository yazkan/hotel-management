# Hotel Management System

It is the hotel management system server. It retrieves data from the database and allows access to the data from specified endpoints.

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

| Route                  | HTTP Request | Request Body                                                | Description                     |
| ---------------------- | ------------ | ----------------------------------------------------------- | ------------------------------- |
| /roomAll               | `GET`        | Empty                                                       | Gets all rooms.                 |
| /room/:room_id         | `GET`        | Empty                                                       | Gets the specified room.        |
| /room                  | `POST`       | {"room_condition","room_capacity","room_type","room_price"} | Creates a new room.             |
| /room/:room_id         | `PUT`        | {"room_condition","room_capacity","room_type","room_price"} | Updates the specified room.     |
| /room/:room_id         | `DELETE`     | Empty                                                       | Removes the specified room.     |
| ---------------------- | ------------ | ----------------------------------------------------------- | ------------------------------- |
| /customerAll           | `GET`        | Empty                                                       | Gets all customers.             |
| /customer/:customer_id | `GET`        | Empty                                                       | Gets the specified customer.    |
| /customer              | `POST`       | Empty                                                       | Creates a new customer.         |
| /customer/:customer_id | `PUT`        | Empty                                                       | Updates the specified customer. |
| /customer/:customer_id | `DELETE`     | Empty                                                       | Removes the specified customer. |

### Languages and Tools:

<p align="left">
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/></a> 
<a href="https://nodejs.org" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/></a>
<a href="https://expressjs.com" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/></a>
<a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/></a>
</p>
