# Kasa — Application de location immobilière


## Structure du projet

```
├── backend/            # API Express (port 8080)
│   ├── app.js          # Définition des routes
│   ├── server.js       # Démarrage du serveur
│   └── data.json       # Données des logements
├── frontend/kasa/      # Application React (Vite)
│   └── src/            # Code source du frontend
├── docker-compose.yaml # Orchestration de l'API
└── README.md
```


### 1. Lancer le backend (API)

Dans un terminal, depuis la racine du projet :

```bash
cd backend
npm install
npm start
```

L'API tourne sur **http://localhost:8080**.

### 2. Lancer le frontend (React/Vite)

Dans un **second terminal**, toujours depuis la racine du projet :

```bash
cd frontend/kasa
npm install
npm run dev
```

Le frontend est accessible sur **http://localhost:5173** (le proxy Vite redirige
les appels `/api` vers le backend sur le port 8080).


## Tests

Dans le dossier `frontend/kasa` :

```bash
npm test
```

Avec couverture de code :

```bash
npm run test:coverage
```

