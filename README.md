# Repo Fetcher

An application that fetches the top repos given a github user name. The application fetches the repos from the github api and saves the data in mongodb with mlab, the data is then sorted and to render the top 15 repos on the app page.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

### Installing

A step by step series of examples that tell you how to get a development env running

Install MongoDB

* [Follow the installation](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition-with-homebrew) instructions. 
*[Follow these instructions](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#run-mongodb) to run MongoDB.



Install dependencies.

```
$ npm install -g webpack
$ npm install
```

Start webpack and the server in seperate terminal tabs, using the following commands.

```
$ npm run react-dev
$ npm run server-dev
```


```
Open the application in your browser at localhost:1128.
```


## Deployment

Add additional notes about how to deploy this on a live system

## Built With
* React
* Jquery
* Mongoose
* MongoDB
* Babel
* WebPack



