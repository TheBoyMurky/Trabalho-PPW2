curl -X POST -H "Content-Type: application/json" -d '{"username": "admin", "senha":"admin"}' http://localhost:3001/createUser;
curl -X POST -H "Content-Type: application/json" -d '{"username": "murky", "senha":"senha123"}' http://localhost:3001/createUser;
curl -X POST -H "Content-Type: application/json" -d '{"username": "alguem", "senha":"algumacoisa"}' http://localhost:3001/createUser;