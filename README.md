# 🚀 Getting Started

Hey there! Welcome to my demo. The following steps are to set up the whole enviroment

## 🔧 What You'll Need

make sure you have these installed on your machine:

- Node.js (version 18 or newer)
- npm (usually comes with Node.js)
- SQLite3 (required for the clients service database)
- Your favorite code editor (we recommend VS Code)

## 📁 Project Overview

app is split into four main parts:

- `api-gateway`: Our main API that handles all client requests
- `svc-clients`: The service that manages all our client data
- `ui-clients`: Our beautiful Angular frontend
- `lib-types`: Shared types that keep everything in sync

## 🏃‍♂️ Quick Start Guide

### 1. Setting Up the Types Library First

we'll start here:

```bash
cd lib-types
npm install
npm run build
```

### 2. Getting the API Gateway Ready

```bash
cd ../api-gateway
npm install
```

### 3. Setting Up the Clients Service

```bash
cd ../svc-clients
npm install

mkdir db   # This is where our SQLite database will live

# Run database setup
npm run migration:run
```

### 4. Setting Up the Frontend

```bash
cd ../ui-clients
npm install
```

## 🌟 Starting Everything Up

You'll need three terminal windows open - one for each service. Here's how to start them:

### Terminal 1 - Start the Clients Service

```bash
cd svc-clients
npm run start:dev
# You should see it running on http://localhost:3001
```

### Terminal 2 - Fire Up the API Gateway

```bash
cd api-gateway
npm run start:dev
# Look for it at http://localhost:3000
```

### Terminal 3 - Launch the UI

```bash
cd ui-clients
npm start
# The UI will be at http://localhost:4200
```

## 🎉 Testing It Out

Once everything's running, you can:

1. Open your browser and go to `http://localhost:4200` - you should see the main app
2. Check out the API docs at `http://localhost:3000/api`
3. The clients service should be quietly doing its thing at `http://localhost:3001`

## 🐳 Prefer Docker?

If you're a Docker fan Just run:

```bash
docker-compose up --build
```

## 🆘 Troubleshooting

### Database Acting Up?

Try this:

```bash
cd svc-clients
rm -r db/*
npm run migration:run
```

### Ports Already in Use?

You might need to change the ports in:

- `api-gateway/.env`
- `svc-clients/.env`
- `ui-clients/angular.json`

### npm Being Weird?

The classic fix:

```bash
rm -r node_modules
npm cache clean --force
npm install
```

## 🛠️ Useful Development Tools

To make your life easier, we recommend installing these VS Code extensions:

- ESLint: Keeps your code clean
- Prettier: Makes everything look nice
- Angular Language Service: Super helpful for Angular work
- Docker: If you're using containers

## 📝 Environment Files

Here are the environment settings you'll need:

### api-gateway/.env

```
# API Gateway Configuration
PORT='3000'
HOST='localhost'

# Microservices Configuration
SVC_CLIENTS_HOST=localhost
SVC_CLIENTS_PORT=3001
```

### svc-clients/.env

```
PORT='3001'
HOST='localhost'
```

### ui-clients/src/environments/environment.ts

```typescript
export const environment = {
  production: false,
  apiUrl: "http://localhost:3000",
};
```

That's it!

## 💡 Pro Tips

1. Always start the clients service first, then the API gateway, then the UI
2. Keep an eye on the terminal outputs for any error messages
3. Use `npm run lint` regularly to catch problems early
4. The Swagger docs at `http://localhost:3000/api` are super helpful for API testing
