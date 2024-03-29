# Updated and tested working on Feb 16, 2024
"Works on my machine" 
MacBook Air 2020, Apple M1, with all latest updates on this date.
State of SvelteKit and Svelte on this date.

# Description
This skeleton stems from the need enhance the Aalto Universitu course material to teach full stack web developers the basics of full stack development. There is a great course (https://fitech101.aalto.fi/web-software-development/) that in the beginning of 2024 updated the old course material to include Svelte javascript framework. In order to teach my students different ways to build a full stack app I create them a skeleton for using SvelteKit for the client and server side and added a postgres database to it. Putting it all in docker containers. This skeleton is provided in this repo.

A svelte project had already been created in order to create this skeleton (so no need to do npm create svelte@latest).
Also the skeleton was create using svlete 5 preview. And we used to update that with npm install svelte@next to get the svelte 5 features. Even though this skeleton does not need Svelte 5. 
No typescript was used or harmed creating this skeleton.

# Installing the skeleton into a running full stack app

1) download the material as a zip file from this repo and unzip the file
2) cd ui 
3) npm install
4) In case you want to be able to code in Svelte 5 do _npm install svelte@next_ to get the latest Svelte 5 preview updates
5) npm install postgres (for postgres database client)
6) cd .. 
7) start docker desktop (or make sure your docker engine is running)
8) docker compose up --build
9) follow the instruction to fix the docker container 
   (Added inline after these steps)
10) now delete all containers ( easy to do using desktop)
11) run docker compose again (now the ui container will be fixed and working)
12) open localhost:5173 using your browser



# STEP 8) instruction copy pasted from the file
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

 

 
