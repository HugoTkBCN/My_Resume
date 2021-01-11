up:
	sudo docker-compose up -d

down:
	sudo docker-compose down -v

restart:
	sudo docker-compose down -v
	sudo docker-compose up -d

build:
	sudo docker-compose build

re-build:
	sudo docker-compose down -v
	sudo docker rmi resume/https:latest
	sudo docker rmi resume/http:latest
	sudo docker-compose build

logs-https:
	sudo docker logs https

logs-http:
	sudo docker logs http