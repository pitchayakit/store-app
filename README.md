# POS Boilerplate
This is a boilerplate for a Point of Sale (POS) system. It provides a starting point for building a POS system using Next.js, Docker, and other technologies.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Getting Started](#getting-started)
3. [Accessing the Server](#accessing-the-server)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Docker](https://www.docker.com/get-started).
- You have a Windows/Linux/Mac machine with a recent version of [Node.js](https://nodejs.org/en/download/) and npm installed.

## Getting Started

To start the application, follow these steps:

1. Clone this repository.
2. Navigate to the project directory.
3. Run the following command to start the Docker container:

```bash
docker-compose up
```

This command will start all the services defined in docker-compose.yml.

## Accessing the Server

Once the server is up and running, you can access it at:
```
http://localhost:3000
```

For the database
```
http://localhost:8000
```

Use the following credentials to access into the database:
```
Username: admin
Password: password
```