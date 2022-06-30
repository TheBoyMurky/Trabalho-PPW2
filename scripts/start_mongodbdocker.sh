docker run -d --rm \
-p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=rootuser \
-e MONGO_INITDB_ROOT_PASSWORD=rootpass \
--name mongodb \
-v mongodb-data:/data/db \
--net mongo-express-network \
mongo