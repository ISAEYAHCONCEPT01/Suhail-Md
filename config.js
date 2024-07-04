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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349155737244";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_15_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA3LFxuICAgICAgICA4OCxcbiAgICAgICAgMixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMwLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTExLFxuICAgICAgICA3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMixcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTU1LFxuICAgICAgICA5OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA4LFxuICAgICAgICA3MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc5LFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA2LFxuICAgICAgICA5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3LFxuICAgICAgICA3NCxcbiAgICAgICAgNTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjUxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDg2LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTExLFxuICAgICAgICA1MixcbiAgICAgICAgMjMzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDkxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODYsXG4gICAgICAgIDMsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDYyLFxuICAgICAgICAzNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDczLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODYsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU5LFxuICAgICAgICA0MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDc1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDMwLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDQwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MixcbiAgICAgICAgMjEzLFxuICAgICAgICAzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgODQsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVxZmdRUEhRSmNsVUhLWEJoSWZpMUtKd3AwRk9tMlJ1OHptS1hNN21YUTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTE1NTczNzI0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0RCOTg2QjQxMDZGODdEMzhBNEJCMDM5Q0Y3NTg5QzZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTEzMzE1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlBZWXZIaXgtVEs2OWt1dDl5dU91RUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzdjNDE1NjUtMTRjMC00Y2IxLWI1NzktZDAxNWEzMWM1MjVjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc3LFxuICAgICAgMTU0LFxuICAgICAgOTUsXG4gICAgICAyNTIsXG4gICAgICAyOCxcbiAgICAgIDEzOSxcbiAgICAgIDg4LFxuICAgICAgMTgsXG4gICAgICAyMjcsXG4gICAgICA2MyxcbiAgICAgIDE5OSxcbiAgICAgIDEzMixcbiAgICAgIDE3MCxcbiAgICAgIDI0LFxuICAgICAgMjExLFxuICAgICAgMzIsXG4gICAgICA5NSxcbiAgICAgIDEzMSxcbiAgICAgIDQ1LFxuICAgICAgMjUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMyLFxuICAgICAgMjE0LFxuICAgICAgNDAsXG4gICAgICAyMTgsXG4gICAgICAxNzYsXG4gICAgICA1MyxcbiAgICAgIDU3LFxuICAgICAgMTI2LFxuICAgICAgMjM0LFxuICAgICAgMjQ0LFxuICAgICAgNjYsXG4gICAgICAyNDQsXG4gICAgICA3MixcbiAgICAgIDYwLFxuICAgICAgMTg5LFxuICAgICAgMTQxLFxuICAgICAgMTI4LFxuICAgICAgNjksXG4gICAgICAyMDEsXG4gICAgICAxMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRTJZUkZDS1FcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNTU3MzcyNDQ6ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCIkSXNhaWFoXCIsXG4gICAgXCJsaWRcIjogXCIyNTA3MTAzMTA1ODAyNzI6ODhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3ZVdy9JSEVKaXhtN1FHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6cldGSmFqeWp3WTdYRCswdGxHMWp3Z0x2UWdCazEvYm9LOXBTdVk1c2pBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkJ0bEVoR0ZudHk3SzVUNmdmS3piRUp1N1BsSFZWQ1pYV0NuTFRwbVkxcnFIViswcW1adjdtTlBNSnpWWnM5RE1XUlp2eXNIeFk2TjdwU1h4ZnVmbERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlcvZW1tVk9JVHk1U2dxVldzc0wvT3g2cEZvUWYwbFl5ZXdBTVFDMDcrZUtsc0VLNTVEcUdyMXJodFA1YzkxVmZyYi9ZZXJhMzR2ZHBCTmNpbkRYWGpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNTU3MzcyNDQ6ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxMTMzMDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFObmpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5uai5qc29uIjogIntcImtleURhdGFcIjpcImQrbW5NQlFYM3dpZEt3R1dCWUpORUh2VzNSNG41Z2hiOVJ2SFFVcmhzSXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjExOTIzMjA0MCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyLDMsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
