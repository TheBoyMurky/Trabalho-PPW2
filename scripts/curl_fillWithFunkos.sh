#! /bin/bash

curl -X POST -H "Content-Type: application/json" -d '{"name":"Elliot Anderson", "valor":80, "urlImagem":"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.e2X-qWWxIwfqwyiEAOHhKwHaHa%26pid%3DApi&f=1", "sale":true}' http://localhost:3001/createFunko;
curl -X POST -H "Content-Type: application/json" -d '{"name":"Mr. Robot", "valor":100, "urlImagem":"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2Fdc018966-6089-491f-a600-eb7cd29bfcbe_1.3324845ee0d24ea55aae04bcdf112eb9.jpeg%3FodnWidth%3D1000%26odnHeight%3D1000%26odnBg%3Dffffff&f=1&nofb=1", "sale":true}' http://localhost:3001/createFunko;
curl -X POST -H "Content-Type: application/json" -d '{"name":"Masked Elliot", "valor":120, "urlImagem":"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.funkomania.com.br%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fimage%2F500x500%2F9df78eab33525d08d6e5fb8d27136e95%2Ff%2Fu%2Ffunko-elliot-masked2.jpg&f=1&nofb=1", "sale":false}' http://localhost:3001/createFunko;
curl -X POST -H "Content-Type: application/json" -d '{"name":"Angela Moss", "valor":60, "urlImagem":"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F7a2c2114-55ea-46b7-a87e-683a83383281_1.455711f51964fec76e774ad2de318d27.jpeg%3FodnWidth%3D612%26odnHeight%3D612%26odnBg%3Dffffff&f=1&nofb=1", "sale":false}' http://localhost:3001/createFunko;