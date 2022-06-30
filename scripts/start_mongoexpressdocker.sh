docker run -d --rm \
-p 8081:8081 \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=rootuser \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=rootpass \
-e ME_CONFIG_MONGODB_SERVER=mongodb \
--name mongo-express \
--net mongo-express-network \
mongo-express