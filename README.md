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

| Route          | HTTP Request | Request Body                                                | Description                 |
| -------------- | ------------ | ----------------------------------------------------------- | --------------------------- |
| /roomAll       | `GET`        | Empty                                                       | Gets all rooms.             |
| /room/:room_id | `GET`        | Empty                                                       | Gets the specified room.    |
| /room          | `POST`       | {"room_condition","room_capacity","room_type","room_price"} | Creates a new room.         |
| /room/:room_id | `PUT`        | {"room_condition","room_capacity","room_type","room_price"} | Updates the specified room. |
| /room/:room_id | `DELETE`     | Empty                                                       | Removes the specified room. |

---

| Route                  | HTTP Request | Request Body | Description                     |
| ---------------------- | ------------ | ------------ | ------------------------------- |
| /customerAll           | `GET`        | Empty        | Gets all customers.             |
| /customer/:customer_id | `GET`        | Empty        | Gets the specified customer.    |
| /customer              | `POST`       | Empty        | Creates a new customer.         |
| /customer/:customer_id | `PUT`        | Empty        | Updates the specified customer. |
| /customer/:customer_id | `DELETE`     | Empty        | Removes the specified customer. |

---

| Route                  | HTTP Request | Request Body | Description                     |
| ---------------------- | ------------ | ------------ | ------------------------------- |
| /employeeAll           | `GET`        | Empty        | Gets all employees.             |
| /employee/:employee_id | `GET`        | Empty        | Gets the specified employee.    |
| /employee              | `POST`       | Empty        | Creates a new employee.         |
| /employee/:employee_id | `PUT`        | Empty        | Updates the specified employee. |
| /employee/:employee_id | `DELETE`     | Empty        | Removes the specified employee. |

---

| Route                | HTTP Request | Request Body | Description                    |
| -------------------- | ------------ | ------------ | ------------------------------ |
| /serviceAll          | `GET`        | Empty        | Gets all services.             |
| /service/:service_id | `GET`        | Empty        | Gets the specified service.    |
| /service             | `POST`       | Empty        | Creates a new service.         |
| /service/:service_id | `PUT`        | Empty        | Updates the specified service. |
| /service/:service_id | `DELETE`     | Empty        | Removes the specified service. |

---

| Route                        | HTTP Request | Request Body | Description                        |
| ---------------------------- | ------------ | ------------ | ---------------------------------- |
| /reservationAll              | `GET`        | Empty        | Gets all reservations.             |
| /reservation/:reservation_id | `GET`        | Empty        | Gets the specified reservation.    |
| /reservation                 | `POST`       | Empty        | Creates a new reservation.         |
| /reservation/:reservation_id | `PUT`        | Empty        | Updates the specified reservation. |
| /reservation/:reservation_id | `DELETE`     | Empty        | Removes the specified reservation. |

---

| Route          | HTTP Request | Request Body | Description                 |
| -------------- | ------------ | ------------ | --------------------------- |
| /billAll       | `GET`        | Empty        | Gets all bills.             |
| /bill/:bill_id | `GET`        | Empty        | Gets the specified bill.    |
| /bill          | `POST`       | Empty        | Creates a new bill.         |
| /bill/:bill_id | `PUT`        | Empty        | Updates the specified bill. |
| /bill/:bill_id | `DELETE`     | Empty        | Removes the specified bill. |

### Languages and Tools:

<p align="left">
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/></a> 
<a href="https://nodejs.org" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/></a>
<a href="https://expressjs.com" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/></a>
<a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/></a>
</p>
