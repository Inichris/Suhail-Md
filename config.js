const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347061809282";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_05_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1LFxuICAgICAgICAwLFxuICAgICAgICAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMTgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3MixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDk0LFxuICAgICAgICAzOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA4LFxuICAgICAgICA0MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICA3MixcbiAgICAgICAgNDIsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNixcbiAgICAgICAgMjAxLFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDk2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDMsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDkyLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgMzMsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1LFxuICAgICAgICA5NixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDk2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDQzLFxuICAgICAgICA4MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTExLFxuICAgICAgICA1OSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzksXG4gICAgICAgIDc0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICA1NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMyLFxuICAgICAgICA4OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMixcbiAgICAgICAgODQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImxzK05HUENqbmRZbUpML0hPNHl1Q0lNOFhPN3NkREVWSVB5eU1WQUhNaHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA2MTgwOTI4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTdDRjVEQjQzRUI3QkY2OUM5Qjk2QjUxOTVFQzg1MzVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNzEwMzQyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImQyOFdJQmFCU20tT3pHenJUbHY1UXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzJiZjdlY2YtMjg2ZC00MWRiLTk2OWYtMTI1NTA3MmM1ZjRiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ0LFxuICAgICAgMjIwLFxuICAgICAgMTcwLFxuICAgICAgMjQyLFxuICAgICAgMTY5LFxuICAgICAgMTQsXG4gICAgICAxNjgsXG4gICAgICAyMTAsXG4gICAgICA1MyxcbiAgICAgIDE2LFxuICAgICAgMjksXG4gICAgICA1MSxcbiAgICAgIDIzMSxcbiAgICAgIDI1MSxcbiAgICAgIDE1MCxcbiAgICAgIDEyNyxcbiAgICAgIDE4MixcbiAgICAgIDE1OCxcbiAgICAgIDQ2LFxuICAgICAgMTMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OSxcbiAgICAgIDEyNCxcbiAgICAgIDEwMCxcbiAgICAgIDEzOSxcbiAgICAgIDI0NCxcbiAgICAgIDE2LFxuICAgICAgMTE4LFxuICAgICAgMTIwLFxuICAgICAgMjQ2LFxuICAgICAgMTcxLFxuICAgICAgNjAsXG4gICAgICAxNTQsXG4gICAgICAyMTMsXG4gICAgICAzMyxcbiAgICAgIDIwOSxcbiAgICAgIDM4LFxuICAgICAgODYsXG4gICAgICAyNDEsXG4gICAgICAxNzMsXG4gICAgICAyMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR040TERLOERcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjE4MDkyODI6NzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJJY29uaWMgdHZcIixcbiAgICBcImxpZFwiOiBcIjE0NDc2MjI0MTg0NzQzMjo3N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMdTl5U01RdmVtL3RBWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImpXZ1I1Y0VyVnBjQnZmV3Q4QWlBWEJKWjBudU1nQ0Y0TjNQM1NaVUxzUjA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVEYydUd1WFBtSHJiSGVKYVJtanJhYmR4eVU1S3dDRzB5REZoVzZpalBtVUcwTncvcUxzcHNxdnFaY25EMGZYdS9kTjZWMjAwRkVFdlA3ZEJpdytFQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNERiS3ZObThWWU05eTZ3SnNPUENrdWU2b0h0Z2VBZWcwUmw2V3RSU1RJWE5UYllGZXAyWkhNOEdpRVRzdnRndjFqWERPRXltYytDZUNieHJ0UmR1RGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2MTgwOTI4Mjo3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDcxMDMzNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxFdFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTEV0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiU0xoUElUOXNSdkt2OUpWYXBHTUh2aGc1UmtPcGJ2d2FUbXpDTkNkRVZSdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NDYwNDIxOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Inigraphix",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
