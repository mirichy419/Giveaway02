//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348142909904";
global.sudo = process.env.SUDO || "2348142909904";
global.owner = process.env.OWNER_NUMBER || "2348113529909";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1BXQm4rcXNtQndsUEZ5SURqRU9JRmQrbGNHZGZSTURQNEtjcXlxbHJIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3lVZW84MVRYWGcwNEhSRHBQeEdMTjkzdjVsM1pPaFlTRVl5Mi9zYWEwaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtRktwVERpQnM4c2hRQTFXQjd5Q0VoZFZOZ1hyMllJWG1Yamxjb3FpTzJJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5Nk1Cb05waWd4YldHRU9SVkh1aUJ3NGswR1FTS01CbnNoTHl1c3lqRVZrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtFQm4vWmZlbGJNNjdxT2FXZ2tFYVNKd2x2UWRVWFlwY1JSZzBOK0x0M3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRDeExlUkNuMDQ5UWpXRWEzRGVXemhRZGR1d1FPbHd2Z094aFpoS0h2elE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0lycTdESDhQd0l2TlRYTmJIenZTNDdVZWM5SG9rMnN5OGM1K1FvYi9tQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjBiMzBJTEp6RW9seVYra1pFb3R5QU90Rm5vbnlnNm5haUR2c3ZsczNHbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJ6dWhRVGkyWk4zYUpzTExROWNtYjFwUEs2NUFVdFpxaCtPSUVrRU9UUXd0V0w3ZjNkaFBJNXNHSXVsd2RKTUhnSTI3R3BHNkJEQWc3VDBoR0NndmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzgsImFkdlNlY3JldEtleSI6ImEzMVp6MXJndDBWM0hnMEtqcVo5WktjM0tLMGlYZU95U2NWUkExeHN1ZWs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODExMzUyOTkwOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCMkQ5OTM2NUZGNkVDQzhENDdCM0NBRkVBRTQzOUFFRSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwMzIzNTMyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpVzY3eGVDY1NlR0pkS0U0a1hvclBBIiwicGhvbmVJZCI6ImU1N2M2MjJlLTdlMGEtNGI2Yi1iYWQzLTg4MDIwZmQ0OWVlMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSVUlTVHlnSHdmQ0M4MjNxWGV1M0tuNUllRFE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXNDSDZBVnlYdTVoY2FDYVpEM2E4SVFmYS9zPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkM1TlZGNkUzIiwibWUiOnsiaWQiOiIyMzQ4MTEzNTI5OTA5OjE0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlVydXNfKSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFBsaElBQkVMbklpcmtHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidDA1SlV6ZXVKSE1xbU0wUnkzSkl0cWY4UWcyaHhRVjlrRnkvQnIyV3RnYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiN0QrOFZKS2U1eU1JZWdMNEJEVGc5NlpZM1FmaWZTWnZ1Z29LWk9YNXB3Q2cwa1VpUnV3TzZYc0FMOTl4ZS9lZktsT04zNDloZ2F1RDdKUjdJVCtWREE9PSIsImRldmljZVNpZ25hdHVyZSI6IjErTm9YWFA5MVk4WUJWNlpXTWpLUUZtUUxCa2tpOU8vMGxER3p4YTJyMXJpMisrUlliVnR3dVdQdEdPOGlleVhySzM0Q2JkR1BxWmlWWThzRFNoeGpnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODExMzUyOTkwOToxNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiZE9TVk0zcmlSektwak5FY3R5U0xhbi9FSU5vY1VGZlpCY3Z3YTlscllIIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwMzIzNTI3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVHMCJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "RICHY_TECH",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
