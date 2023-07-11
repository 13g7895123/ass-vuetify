up-f:
	docker-compose up --build --no-recreate -d
up:
	docker-compose up -d
stop:
	docker-compose stop
run:
	docker exec -it ass-vue-vuetify sh -c "npm i --legacy-peer-deps && npm run dev"
build:
	docker exec -it ass-vue-vuetify sh -c "npm run build"
