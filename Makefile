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
	sudo docker rmi resume/web:latest
	sudo docker-compose build

logs:
	sudo docker logs web