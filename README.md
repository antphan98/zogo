# Zogo Assessment

Deployed with Vercel: https://zogo.vercel.app/

GitHub profile assessment using Next.js and WordPress. It has two tabs to toggle between an overview of the profile and repositories. Using WordPress, enter in a GitHub username and the website will load their information.

## Running locally in development mode
To get started, just clone the repository and run npm install && npm run dev:

``` git clone https://github.com/iaincollins/nextjs-starter.git
npm install
npm run dev
```
Note: If you are running on Windows run install --noptional flag (i.e. npm install --no-optional) which will skip installing fsevents.

Building and deploying in production
If you wanted to run this site in production, you should install modules then build the site with npm run build and run it with npm start:
```
npm install
npm run build
npm start
```
You should run npm run build again any time you make changes to the site.

Note: If you are already running a webserver on port 80 (e.g. Macs usually have the Apache webserver running on port 80) you can still start the example in production mode by passing a different port as an Environment Variable when starting (e.g. PORT=3000 npm start).

## Overview
Displays the user's name, username, location, and bio

![image](https://user-images.githubusercontent.com/54366991/150934362-49cbac77-a396-4b38-abab-aad2213ad926.png)

## Repository
Displays repositories and links to each repository on the GitHub website.

![image](https://user-images.githubusercontent.com/54366991/150934558-5dcb76e0-927f-44aa-b7a8-5fa7c0fdf9e9.png)
