**JavaScript part**

How to run:
* In `js` directory run docker compose:  
`cd js && docker-compose up -d`
* Install application in `nodejs` container
`docker-compose exec nodejs bash -c 'npm i && ./node_modules/.bin/webpack'`
* Open in browser `http://localhost:8889`

**Php part**

How to run:
* In `php` directory run docker compose:  
`cd php && docker-compose up -d`
* Open in browser `http://localhost:8888`