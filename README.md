# **A3.DJS**
### _A bridge between Discord and Arma 3_

<br>
The licensed portion is in the source / build folders, I do not claim any rights to the graphics used, altho I did make them myself they are derrived from Arma 3, and the rights are unclear.

<br>

This product is open source, so feel free to grab / tweak / use any portion of it.

<br>

If you are using A3DJS as a paid feature on your server or you would like to contribute  in general:


 [![Paypal](https://lh3.googleusercontent.com/vIJ7bv0rBwc3IdHaocUXloyLhJR6_vGhpwQGpXMR3ZD8dK_OnXpzPgb2FSpXnol-QipG=s80 "PaypalMe")](https://www.paypal.com/paypalme/LHartgen)

Donations are highly appreciated!
<br>
<br>
___
<br>

## **[Instalation]**
[TLDR version here.](gitReadMe/TLDR_Guide.md)

<br>

#### _Requirements:_
* [node.js](https://nodejs.org/en/download/)
* [INIDBI2](https://steamcommunity.com/sharedfiles/filedetails/?id=1768992669&searchtext=INIDBI2) (Arma 3 addon)
* [A3DJS](https://steamcommunity.com/sharedfiles/filedetails/?id=2924824356)   (Arma 3 addon)

<br> 
<br>

---

### **Setting up the enviroment:**
<br> 

1) Create a folder for A3.DJS and  INIDBI2. 
   I will refer to it as "parent-folder" from now on.
2) Place this bot into the "parent-folder"
3) Move the  ```A3DJS_Config.json``` from this folder to the "parent-folder"
4) Place a copy of *"@INIDBI2 - Official extension"* into the "parent-folder".
5) Open the terminal and navigate into this repo.
6) Run `npm install`
7) Run `tsc`

The "parent-folder" should now look like this:

![Alt text](gitReadMe/Folder-example.png)
<br> 
<br>
<br>

---
### **Getting an actual bot.**
<br> 

1) Create a new application at [Discord developers portal](https://discord.com/developers/applications)<br>
![New app](gitReadMe/New%20App.png)
2) Copy the application-ID into the ```A3DJS_Config``` where it says "botId:"<br>
![Alt text](gitReadMe/app%20ID.png)
3) Go to the bot-section and click Add bot.<br>
![Alt text](gitReadMe/add%20bot.png)

4) Reset the Token and copy it into ```A3DJS_Config```. where it says "token"
![Alt text](gitReadMe/copy%20token%203.png)<br>
5) Switch on all intents in the **Privileged Gateway Intents** section.<br>
![Alt text](gitReadMe/Gateway%20intents.png)<br><br>
6) Go to **`OAuth2` -> `URL-Generator`**, mark the "bot-box" and the "administrator-box".<br>![Alt text](gitReadMe/step-6-7.png)<br><br>
7) Copy the URL at the bottom and paste it into a new tab in your browser.<br><br>
8) Select the Discord server where you want the bot to run.<br>
![Alt text](gitReadMe/invite-bot.png)
<br> 
<br>
<br>

---
### **Get the remaining data for the config.**
<br> 

1) Open Discord and go to `user settings`->`advanced` and check the **Developer Mode** on.<br>
![Alt text](gitReadMe/user%20settings.png)
<br>
<br>
2) Rigth-click on the server you are in and copy the id, then paste it into ```A3DJS_Config``` where it says "serverId".<br>

![Copy Id](gitReadMe/copy-id.png)

<br>
3) Rigth-click on Your avatar and copy the id, then paste it into ```A3DJS_Config``` where it says owner.
<br> <br><br>

Your config should now look like this (ish):<br>
![Alt text](gitReadMe/finished%20config.png)

<br>

---

### **Set up the INDBI files.**
<br> 

1) Open the Arma 3 launcher and load the INIDBI folder from the "parent-folder" as a local mod.
2) Select the local **`INIDBI`** version you just loaded.
2) Select **`A3DJS`** from steam.
3) Select **`CBA_A3`** from steam.

![Mod selection](gitReadMe/mods.png)

5) Launch Arma 3 and start a game. (that will create the needed files for **`INIDBI`**).<br><br>
![Alt text](gitReadMe/Play%20scenario.png)

<br>

---

### **Launch the bot.**
<br> 

Now that the config and the "parent-folder" is all set:

1) Open the terminal and navigate into the **A3.DJS** folder.
2) Run `node .`
3) Fix any config / file-placement errors you might get.

<br> 

---

<br> 
If everything was set up correctly the bot should now create 3 new channels (you can see and set the names in the config).
<br><br> 

* The live channel will show a feed of the ingame situation.

* Any message sent in the new chat-channel will be sent to your Arma game.

* Any ingame chat on the Discord-channel will be sent to your Discord-channel.

* You got 8 commands to chose from (6 of which are admin only).
<br><br>

![Alt text](gitReadMe/liveFeed.png)<br><br>

![Alt text](gitReadMe/sat-img.jpg)<br><br>

![Alt text](gitReadMe/chat-relay-arma-to-discord.png)<br><br>

![Alt text](gitReadMe/chat-relay-discord-to-arma.png)<br><br>

![Alt text](gitReadMe/sat-img-example.jpg)<br><br>

![Alt text](gitReadMe/commands.png)<br><br>

<br><br>Enjoy!


Best regards Tally!