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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_35_05_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg0LFxuICAgICAgICA3MixcbiAgICAgICAgMjQyLFxuICAgICAgICAyNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA5NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjI2LFxuICAgICAgICA2MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDg1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NixcbiAgICAgICAgODcsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNixcbiAgICAgICAgNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA5MSxcbiAgICAgICAgMyxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA3MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDc2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDU0LFxuICAgICAgICA3MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDU1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDk2LFxuICAgICAgICAyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDksXG4gICAgICAgIDQ5LFxuICAgICAgICAxOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDk5LFxuICAgICAgICAxMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDgxLFxuICAgICAgICA1NixcbiAgICAgICAgMTI1LFxuICAgICAgICA3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA0MixcbiAgICAgICAgNzYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDgwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDYxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDYxLFxuICAgICAgICA4OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDM4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA1NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk1LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDcyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxS1pNU2ExdWxhZTJra01JSG4zZ1VKanVZTDZNRHgrbXAyRi9nUjFTTnRjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjM1MTkyNzAzNTQ1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTIxRjVERkQ2MEY1N0MzNjg1OTgxMDRCOUZGNUZGMEFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE1NTg1NzE1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkxKWkhfRHd2VF9PTkRyUHJ2LUIzTUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDk1MDQ0NzQtNzIzNS00OTEyLTk4ZjUtZDk0YTE2OTE5YjMxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ2LFxuICAgICAgMjUsXG4gICAgICAxMjcsXG4gICAgICAxNzQsXG4gICAgICAyMSxcbiAgICAgIDE1NyxcbiAgICAgIDc4LFxuICAgICAgMzQsXG4gICAgICA4OSxcbiAgICAgIDE3MSxcbiAgICAgIDIxOSxcbiAgICAgIDI1MixcbiAgICAgIDExNSxcbiAgICAgIDE3NyxcbiAgICAgIDM2LFxuICAgICAgMjE4LFxuICAgICAgMTQwLFxuICAgICAgMjM2LFxuICAgICAgMjAsXG4gICAgICA1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDEsXG4gICAgICAxMzcsXG4gICAgICA4NixcbiAgICAgIDE3NCxcbiAgICAgIDIwNyxcbiAgICAgIDIwMCxcbiAgICAgIDg4LFxuICAgICAgNTAsXG4gICAgICA5NSxcbiAgICAgIDIwOSxcbiAgICAgIDI1NCxcbiAgICAgIDc3LFxuICAgICAgMTc1LFxuICAgICAgMjM4LFxuICAgICAgMjE3LFxuICAgICAgNjcsXG4gICAgICAxMzgsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdDTDI0TUxHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIzNTE5MjcwMzU0NTk6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExNzM4NjE4NzM3NDc3OToxNEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZqz8J2aqiDwnZCD8J2aq/CdmqrwnZCKLfCdmrPwnZCD8J+mhVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0w3SnFzZ0VFS3lGaDdJR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRmdlbGRnRXkwUlZ0dHkrUXRmUmEzWlorU3NQT1llSnJmZFJLd0JQWGtIaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2MnVwRjBlWC9sMThHQVBydUw2RDhGUHJVdjBZNkh3byttRlpCTnBkbzlnVTY3Qm8rUFJ6QnV4bXBBWWN3bys4ekY3Z0c3TzhuOEJBazhNZzBOK0xDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJlNzMzVDFOY2tESkwrWWRZbG5OQjkycUVYR1B5c1BLMWFNMUQ3ZmdWRTlNTkppblpqYUtDQ0c2aTc3MThmZ2tMVHhHSkNaM2dDTG4zTjhoZ0c0WTNpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIzNTE5MjcwMzU0NTk6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTU4NTcxMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZZT1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRllPLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYWtEMEZWSjMvSUphMzlvN2g1NWhDcVpHaWJaamgrQ2FCcFJTM2prVVZxMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjI1NDM0Mjk5LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTU0MDE0Njc4ODBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝐆𝚮𝚯𝐒𝚻",
  packname: process.env.PACK_NAME || "𝚳𝚪 𝐃𝚫𝚪𝐊-𝚳𝐃",
  botname : process.env.BOT_NAME  || "𝚳𝚪 𝐃𝚫𝚪𝐊-𝚳𝐃",
  ownername:process.env.OWNER_NAME|| "𝐆𝚮𝚯𝐒𝚻",


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
