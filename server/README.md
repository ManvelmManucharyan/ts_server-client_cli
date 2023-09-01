### Installation

Install the dependencies

```sh
$ npm install
```
### Add .env file

Example: 

```sh
PORT=5000
DB_HOST=127.0.0.1
DB_PORT=27017
DB_NAME=testdb
```
### Connecting to server

```sh
$ npm start
```

### Endpoints

List Cars (list)
```sh
$ /car/all
```

Find Cars (sort)
```sh
$ /car/sort/?queryKey=queryValue
```

Add Car (add)
```sh
$ /car/create
```

Update Car (update)
```sh
$ /car/update [ID]
```

Delete Car (delete)
```sh
$ /car/delete [ID]
```