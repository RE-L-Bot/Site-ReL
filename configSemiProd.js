const ends = ".squareweb.app"
const url = `https://siteredev4${ends}`
const CLIENT_ID = "1064938979406921738"
const REDIRECT_URI = `${url}/{lang}/dashboard`
const API_ENDPOINT = "https://discord.com/api/v10"
const linkRedirectDiscord = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=https%3A%2F%2Fsiteredev4.squareweb.app%2F{lang}%2Fdashboard&scope=identify+guilds+email`
const linkRedirectAddBot = `https://discord.com/api/oauth2/authorize?response_type=token&client_id=${CLIENT_ID}&permissions=1635070044278&guild_id={guildID}&redirect_uri=https%3A%2F%siteredev4.squareweb.app%2F{lang}%2Fdashboard&response_type=code&scope=bot%20applications.commands%20identify%20guilds`

module.exports = { url, API_ENDPOINT, REDIRECT_URI, linkRedirectDiscord, linkRedirectAddBot }