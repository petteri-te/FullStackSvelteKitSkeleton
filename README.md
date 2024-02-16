# FullStackSvelteKitSkeleton

1) unzip file
2) cd ui 
3) npm install
4) npm install progress
5) cd .. 
6) start docker desktop (or make sure your docker engine is running)
7) docker compose build up
8) follow the instruction to fix the docker container 
   Added inline after these steps
9) now delete all containers ( easy to do using desktop)
10) run docker compose again (now the ui container will be fixed and working)
11) open localhost:5173 using your browser



STEP 8) instruction copy pasted from the file
Needed to get the docer ui container working


FOR ARM64 or Apple M1 
 
Need to do some tricks first on the UI container.  

Go to ui folder.  

Run the following commands: 

 

docker run -it -v .:/app/ node:lts-iron bash 

cd app 

npm i @rollup/rollup-linux-arm64-gnu 

 

Now you can go back to main level to run docker compose up --build and all works. Also remember for the api to use the ARM64 lukechannings image and also flyway in yml instead of using the amd image, use 
image: flyway/flyway 
and it will select the latest image that will also support arm64 

 

--------------------------------------- 

For Mac Os Intel:   

(if it say: cant not find module: @rollup/rollup-linux-x64-musl) 

Need to do some tricks first on the UI container.  

Go to ui folder.  

Run the following commands: 

docker run -it -v .:/app/ node:lts-iron bash 

cd app 

Npm i @rollup/rollup-linux-x64-musl 

 

 
