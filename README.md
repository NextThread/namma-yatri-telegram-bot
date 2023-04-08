# Namma Yarti Telegram Bot
This project has one main goal :  
  - To book taxi without an downloading Namma Yatri application
  - This application is a protoype for how the application will look
  
  
 ![](https://github.com/ritik-1302/namma-yatri-telegram-bot/blob/master/demo.gif) 

## Before starting
This project needs two tokens :
   - MapBox Tokens
   - Telegram Bot Token




## To Test and View Webview
```
# Clone this repository
$ git clone https://github.com/ritik-1302/namma-yatri-telegram-bot

# Go into the repository
$ cd namma-yatri-telegram-bot

# Go into the app folder
$ cd app

#goto to mapbox register yourself and copy the token

#create a .env.local file
$ touch .env.local

#inside .env.local file paste your mapbox token
MAPBOX_TOKEN=<Pate-Your-Token>

# Install dependencies
$ yarn
```

And finally :
```
# To Run webapp
$ yarn dev
```

Also deploy the app in service of your choice

## To run the bot 
```
# Come to the root folder
$ cd ..

#Create a .env file 
$ touch .env

#Paste Your telegram bot token inside .env file
BOT_TOKEN=<Paste your token>

# also paste your deployed app link inside the .env file
APP_LINK=<Paste your deployed app link>

# Install dependencies
$ yarn

#run the bot
$ node bot.js



```
