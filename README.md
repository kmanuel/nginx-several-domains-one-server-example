# nginx-several-domains-one-server-example

Simple example on how to host 2 applications for 2 different domains on the same server, by using nginx to route the requests from port 80 to the specific application.

## How to run:

1. Add the entries

```
127.0.0.1       cats-n-cookies.com
127.0.0.1       dogs-n-cookies.com
```

to the local `/etc/hosts` file.

2. Start the two applications via:

```
node cats-n-cookies.js
node dogs-n-cookies.js
```

3. Start the nginx docker container:

```
docker container run \
	--net=host \
    -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf \
	nginx:alpine
```

## [Read The Full Blog Post](https://www.devdelly.com/nginx-multiple-domains-one-server/)
